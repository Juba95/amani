import { NextRequest, NextResponse } from 'next/server';
import { readSiteContent, setPageContent, deletePageContent } from '@/lib/site-content';
import { PAGE_REGISTRY } from '@/lib/page-registry';

function checkAuth(req: NextRequest): 'ok' | 'wrong_password' | 'not_configured' {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) return 'not_configured';
  const auth = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key');
  return auth === pwd ? 'ok' : 'wrong_password';
}

function authError(auth: 'wrong_password' | 'not_configured') {
  if (auth === 'not_configured') {
    return NextResponse.json(
      { error: 'ADMIN_PASSWORD non configuré', hint: 'Ajoutez ADMIN_PASSWORD dans Coolify → Variables d\'environnement.' },
      { status: 503 }
    );
  }
  return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 });
}

/**
 * GET /api/adminos/pages
 * Retourne le registre des pages + le contenu sauvegardé pour chacune
 */
export async function GET(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);

  try {
    const content = readSiteContent();
    const pages = PAGE_REGISTRY.map(page => ({
      ...page,
      content: content[page.slug] ?? {},
      hasOverrides: !!content[page.slug] && Object.keys(content[page.slug]).length > 0,
    }));
    return NextResponse.json(pages);
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

/**
 * PUT /api/adminos/pages
 * Sauvegarde le contenu d'une page
 * Body: { slug: string, content: Record<string, string> }
 */
export async function PUT(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);

  try {
    const { slug, content } = await req.json();
    if (!slug || typeof content !== 'object') {
      return NextResponse.json({ error: 'slug et content requis' }, { status: 400 });
    }

    // Nettoyer les valeurs vides
    const cleaned: Record<string, string> = {};
    for (const [k, v] of Object.entries(content)) {
      if (typeof v === 'string' && v.trim() !== '') {
        cleaned[k] = v.trim();
      }
    }

    if (Object.keys(cleaned).length === 0) {
      // Si tout est vide, supprimer les overrides
      deletePageContent(slug);
    } else {
      setPageContent(slug, cleaned);
    }

    return NextResponse.json({ success: true, slug, fieldsCount: Object.keys(cleaned).length });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

/**
 * DELETE /api/adminos/pages
 * Supprime tous les overrides d'une page (retour aux valeurs par défaut)
 * Body: { slug: string }
 */
export async function DELETE(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);

  try {
    const { slug } = await req.json();
    if (!slug) return NextResponse.json({ error: 'slug requis' }, { status: 400 });
    deletePageContent(slug);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

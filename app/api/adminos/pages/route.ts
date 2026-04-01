import { NextRequest, NextResponse } from 'next/server';
import { readSiteContent, setPageContent, deletePageContent } from '@/lib/site-content';
import { PAGE_REGISTRY } from '@/lib/page-registry';
import { PAGE_DEFAULTS } from '@/lib/page-defaults';
import fs from 'fs';
import path from 'path';

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

/** Diagnostic : vérifie que le répertoire data est accessible en écriture */
function checkDataDir(): { ok: boolean; path: string; error?: string } {
  const dataDir = process.env.DATA_DIR || path.join(process.cwd(), 'data');
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    // Test d'écriture
    const testFile = path.join(dataDir, '.write-test');
    fs.writeFileSync(testFile, 'ok', 'utf-8');
    fs.unlinkSync(testFile);
    return { ok: true, path: dataDir };
  } catch (err: any) {
    return { ok: false, path: dataDir, error: err?.message || 'Permission refusée' };
  }
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
      defaults: PAGE_DEFAULTS[page.slug] ?? {},
      hasOverrides: !!content[page.slug] && Object.keys(content[page.slug]).length > 0,
    }));
    return NextResponse.json(pages);
  } catch (err: any) {
    console.error('[adminos/pages GET]', err);
    return NextResponse.json({ error: 'Erreur serveur', detail: err?.message }, { status: 500 });
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

  // Vérifier l'accès au répertoire data
  const dirCheck = checkDataDir();
  if (!dirCheck.ok) {
    console.error('[adminos/pages PUT] Data dir not writable:', dirCheck);
    return NextResponse.json(
      { error: `Répertoire data inaccessible en écriture (${dirCheck.path})`, detail: dirCheck.error },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { slug, content } = body ?? {};

    if (!slug || typeof content !== 'object') {
      return NextResponse.json({ error: 'slug et content requis', received: { slug, contentType: typeof content } }, { status: 400 });
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
  } catch (err: any) {
    console.error('[adminos/pages PUT] Error:', err);
    return NextResponse.json({ error: 'Erreur de sauvegarde', detail: err?.message || String(err) }, { status: 500 });
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
  } catch (err: any) {
    console.error('[adminos/pages DELETE] Error:', err);
    return NextResponse.json({ error: 'Erreur serveur', detail: err?.message }, { status: 500 });
  }
}

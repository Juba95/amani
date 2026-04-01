import { NextRequest, NextResponse } from 'next/server';
import { readSiteContent, setPageContent } from '@/lib/site-content';

function checkAuth(req: NextRequest): 'ok' | 'wrong_password' | 'not_configured' {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) return 'not_configured';
  const auth = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key');
  return auth === pwd ? 'ok' : 'wrong_password';
}

function authError(auth: 'wrong_password' | 'not_configured') {
  if (auth === 'not_configured') {
    return NextResponse.json({ error: 'ADMIN_PASSWORD non configuré' }, { status: 503 });
  }
  return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 });
}

/**
 * GET /api/adminos/content — retourne tout le contenu du site
 */
export async function GET(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);
  try {
    return NextResponse.json(readSiteContent());
  } catch {
    return NextResponse.json({}, { status: 200 });
  }
}

/**
 * PATCH /api/adminos/content — met à jour un champ d'une page
 * Body: { slug: string, key: string, value: string }
 */
export async function PATCH(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);

  try {
    const { slug, key, value } = await req.json();
    if (!slug || !key) {
      return NextResponse.json({ error: 'slug et key requis' }, { status: 400 });
    }
    const all = readSiteContent();
    const pageContent = all[slug] ?? {};
    if (value && value.trim() !== '') {
      pageContent[key] = value.trim();
    } else {
      delete pageContent[key];
    }
    setPageContent(slug, pageContent);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

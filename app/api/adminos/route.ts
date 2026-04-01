import { NextRequest, NextResponse } from 'next/server';

/**
 * Legacy route — redirige vers la nouvelle API pages
 * Gardé pour compatibilité mais ne gère plus les contacts
 */

function checkAuth(req: NextRequest): 'ok' | 'wrong_password' | 'not_configured' {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) return 'not_configured';
  const auth = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key');
  return auth === pwd ? 'ok' : 'wrong_password';
}

export async function GET(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth === 'not_configured') {
    return NextResponse.json(
      { error: 'ADMIN_PASSWORD non configuré', hint: 'Ajoutez ADMIN_PASSWORD dans Coolify → Variables d\'environnement.' },
      { status: 503 }
    );
  }
  if (auth === 'wrong_password') {
    return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 });
  }
  return NextResponse.json({ status: 'ok', message: 'API admin active. Utilisez /api/adminos/pages pour gérer les contenus.' });
}

import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

/**
 * GET /api/adminos/contacts — demandes reçues via le formulaire de contact.
 *
 * Filet de sécurité : les demandes sont écrites sur disque par /api/contact même
 * quand l'envoi SMTP échoue. Cet endpoint permet de les récupérer sans dépendre
 * de la messagerie.
 *
 * Auth : header `x-admin-key` ou paramètre `?key=` valant ADMIN_PASSWORD.
 */

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'contacts.json');

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
      { status: 503 },
    );
  }
  if (auth === 'wrong_password') {
    return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 });
  }

  let contacts: unknown[] = [];
  try {
    if (fs.existsSync(DATA_FILE)) {
      const parsed = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
      if (Array.isArray(parsed)) contacts = parsed;
    }
  } catch (err) {
    return NextResponse.json(
      { error: 'Fichier de demandes illisible', detail: String(err) },
      { status: 500 },
    );
  }

  // Plus récentes en premier.
  return NextResponse.json({ count: contacts.length, contacts: contacts.slice().reverse() });
}

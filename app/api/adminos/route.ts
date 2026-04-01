import { NextRequest, NextResponse } from 'next/server';
import { readContacts, updateContactStatus, updateContact, type ContactStatus } from '@/lib/contacts';

type AuthResult = 'ok' | 'wrong_password' | 'not_configured';

function checkAuth(req: NextRequest): AuthResult {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) return 'not_configured';
  const auth = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key');
  return auth === pwd ? 'ok' : 'wrong_password';
}

function authError(auth: AuthResult) {
  if (auth === 'not_configured') {
    return NextResponse.json(
      { error: 'ADMIN_PASSWORD non configuré', hint: 'Ajoutez ADMIN_PASSWORD dans Coolify → Environment Variables, puis redéployez.' },
      { status: 503 }
    );
  }
  return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 });
}

// GET /api/adminos — liste toutes les demandes
export async function GET(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);
  try {
    const contacts = readContacts();
    return NextResponse.json(contacts);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

// PATCH /api/adminos — met à jour le statut uniquement
export async function PATCH(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);
  const { id, status } = await req.json() as { id: string; status: ContactStatus };
  try {
    const ok = updateContactStatus(id, status);
    if (!ok) return NextResponse.json({ error: 'Introuvable' }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// PUT /api/adminos — met à jour tous les champs d'une demande
export async function PUT(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);
  const { id, ...fields } = await req.json();
  if (!id) return NextResponse.json({ error: 'id requis' }, { status: 400 });
  try {
    const updated = updateContact(id, fields);
    if (!updated) return NextResponse.json({ error: 'Introuvable' }, { status: 404 });
    return NextResponse.json({ success: true, contact: updated });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

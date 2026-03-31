import { NextRequest, NextResponse } from 'next/server';
import { readContacts, updateContactStatus, updateContact, type ContactStatus } from '@/lib/contacts';

function checkAuth(req: NextRequest): boolean {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) return false;
  const auth = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key');
  return auth === pwd;
}

// GET /api/adminos — liste toutes les demandes
export async function GET(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  try {
    const contacts = readContacts();
    return NextResponse.json(contacts);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

// PATCH /api/adminos — met à jour le statut uniquement
export async function PATCH(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
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
  if (!checkAuth(req)) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
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

import { NextRequest, NextResponse } from 'next/server';
import { readContacts, updateContactStatus, type ContactStatus } from '@/lib/contacts';

function checkAuth(req: NextRequest): boolean {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) return false;
  const auth = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key');
  return auth === pwd;
}

// GET /api/admin — liste toutes les demandes
export async function GET(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }
  const contacts = readContacts();
  return NextResponse.json(contacts);
}

// PATCH /api/admin — met à jour le statut d'une demande
export async function PATCH(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }
  const { id, status } = await req.json() as { id: string; status: ContactStatus };
  const ok = updateContactStatus(id, status);
  if (!ok) return NextResponse.json({ error: 'Introuvable' }, { status: 404 });
  return NextResponse.json({ success: true });
}

import { NextRequest, NextResponse } from 'next/server';
import { readContent, updateContentBlock, addContentBlock, deleteContentBlock } from '@/lib/content';

function checkAuth(req: NextRequest): 'ok' | 'wrong_password' | 'not_configured' {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) return 'not_configured';
  const auth = req.headers.get('x-admin-key') || req.nextUrl.searchParams.get('key');
  return auth === pwd ? 'ok' : 'wrong_password';
}

function authError(auth: 'wrong_password' | 'not_configured') {
  if (auth === 'not_configured') {
    return NextResponse.json(
      { error: 'ADMIN_PASSWORD non configuré' },
      { status: 503 }
    );
  }
  return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 });
}

// GET — liste tous les blocs de contenu
export async function GET(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);
  try {
    return NextResponse.json(readContent());
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

// PATCH — met à jour la valeur d'un bloc
export async function PATCH(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);
  const { id, value } = await req.json() as { id: string; value: string };
  if (!id || value === undefined) {
    return NextResponse.json({ error: 'id et value requis' }, { status: 400 });
  }
  try {
    const updated = updateContentBlock(id, value);
    if (!updated) return NextResponse.json({ error: 'Bloc introuvable' }, { status: 404 });
    return NextResponse.json({ success: true, block: updated });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// POST — ajoute un nouveau bloc de contenu
export async function POST(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);
  const { id, label, page, field, value } = await req.json();
  if (!id || !label || !page || !field) {
    return NextResponse.json({ error: 'id, label, page, field requis' }, { status: 400 });
  }
  try {
    const block = addContentBlock({ id, label, page, field, value: value || '' });
    return NextResponse.json({ success: true, block });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// DELETE — supprime un bloc
export async function DELETE(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: 'id requis' }, { status: 400 });
  try {
    const ok = deleteContentBlock(id);
    if (!ok) return NextResponse.json({ error: 'Bloc introuvable' }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

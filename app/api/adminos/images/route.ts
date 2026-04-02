import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

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

function ensureUploadDir() {
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  }
}

function listImages(dir: string, urlPrefix: string, category: string) {
  const images: { url: string; name: string; category: string; size: number }[] = [];
  if (!fs.existsSync(dir)) return images;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f.startsWith('.')) continue;
    if (/\.(jpg|jpeg|png|webp|gif|svg)$/i.test(f)) {
      const stat = fs.statSync(path.join(dir, f));
      images.push({ url: `${urlPrefix}/${f}`, name: f, category, size: stat.size });
    }
  }
  return images;
}

/**
 * GET /api/adminos/images
 * Retourne la liste de toutes les images disponibles
 */
export async function GET(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);

  const uploads = listImages(UPLOAD_DIR, '/uploads', 'uploads');
  const vehicles = listImages(
    path.join(process.cwd(), 'public', 'vehicles'),
    '/vehicles',
    'vehicles'
  );
  const publicRoot = listImages(path.join(process.cwd(), 'public'), '', 'general');

  return NextResponse.json([...uploads, ...vehicles, ...publicRoot]);
}

/**
 * POST /api/adminos/images
 * Upload une image dans /public/uploads/
 */
export async function POST(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'Aucun fichier reçu' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Type de fichier non autorisé. Formats acceptés : JPG, PNG, WebP, GIF, SVG' },
        { status: 400 }
      );
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: 'Fichier trop lourd (max 10 Mo)' },
        { status: 400 }
      );
    }

    ensureUploadDir();

    // Sanitize filename
    const ext = path.extname(file.name).toLowerCase();
    const baseName = path.basename(file.name, ext)
      .replace(/[^a-z0-9-_]/gi, '-')
      .toLowerCase()
      .slice(0, 60);
    const fileName = `${Date.now()}-${baseName}${ext}`;
    const filePath = path.join(UPLOAD_DIR, fileName);

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      success: true,
      url: `/uploads/${fileName}`,
      name: fileName,
      size: file.size,
    });
  } catch (err: any) {
    console.error('[adminos/images POST]', err);
    return NextResponse.json({ error: 'Erreur upload', detail: err?.message }, { status: 500 });
  }
}

/**
 * DELETE /api/adminos/images
 * Supprime une image depuis /public/uploads/ uniquement (pas les assets du site)
 * Body: { name: string }
 */
export async function DELETE(req: NextRequest) {
  const auth = checkAuth(req);
  if (auth !== 'ok') return authError(auth);

  try {
    const { name } = await req.json();
    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'name requis' }, { status: 400 });
    }

    // Sécurité : interdire les path traversal
    const safeName = path.basename(name);
    const filePath = path.join(UPLOAD_DIR, safeName);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Fichier introuvable' }, { status: 404 });
    }

    fs.unlinkSync(filePath);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('[adminos/images DELETE]', err);
    return NextResponse.json({ error: 'Erreur suppression', detail: err?.message }, { status: 500 });
  }
}

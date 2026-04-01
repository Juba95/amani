/**
 * GET /api/health
 * Endpoint de diagnostic — vérifie la config serveur sans exposer de données sensibles
 */
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data');
  const DATA_FILE = path.join(DATA_DIR, 'contacts.json');

  // Test écriture
  let canWrite = false;
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(path.join(DATA_DIR, '.write-test'), 'ok');
    fs.unlinkSync(path.join(DATA_DIR, '.write-test'));
    canWrite = true;
  } catch {}

  // Nombre de contacts
  let contactCount = 0;
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      contactCount = JSON.parse(raw).length;
    }
  } catch {}

  return NextResponse.json({
    ok: true,
    dataDir: DATA_DIR,
    canWrite,
    contactCount,
    hasAdminPassword: !!process.env.ADMIN_PASSWORD,
    hasSmtp: !!(process.env.SMTP_USER && process.env.SMTP_PASS),
    nodeEnv: process.env.NODE_ENV,
    cwd: process.cwd(),
  });
}

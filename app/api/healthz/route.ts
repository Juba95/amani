/**
 * GET /api/healthz
 * Health check léger destiné à l'orchestrateur (Coolify / Traefik).
 * Volontairement minimal : réponse 200 immédiate, aucune écriture disque,
 * aucune donnée sensible exposée. À interroger toutes les 10–30 s sans coût.
 *
 * Pour un diagnostic complet (droits d'écriture, SMTP, etc.), voir /api/health.
 */
import { NextResponse } from 'next/server';

// Toujours dynamique : jamais mis en cache, reflète l'état courant du process.
export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.json({ ok: true }, { status: 200 });
}

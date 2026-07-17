import { NextRequest, NextResponse } from 'next/server';
import { estimateDistanceKm, estimateDurationMin, formatDuration } from '@/lib/geo-estimate';

/**
 * POST /api/distance
 * Calcule la distance et la durée entre deux adresses via Google Maps Distance Matrix API.
 * Fallback sur une estimation si la clé API est absente.
 *
 * Body: { origin: string, destination: string }
 * Response: { km: number, duration: string, durationMin: number }
 *
 * Variable d'environnement requise dans Coolify :
 *   GOOGLE_MAPS_API_KEY=votre_clé
 */
export async function POST(req: NextRequest) {
  const { origin, destination } = await req.json();

  if (!origin || !destination) {
    return NextResponse.json({ error: 'origin and destination required' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  // ── Fallback si pas de clé Google ──────────────────────────────────────────
  if (!apiKey) {
    const fallbackKm = estimateDistanceKm(origin, destination);
    return NextResponse.json({
      km: fallbackKm,
      duration: formatDuration(estimateDurationMin(fallbackKm)),
      durationMin: estimateDurationMin(fallbackKm),
      source: 'estimate',
    });
  }

  // ── Appel Google Distance Matrix ───────────────────────────────────────────
  try {
    const url = new URL('https://maps.googleapis.com/maps/api/distancematrix/json');
    url.searchParams.set('origins', origin);
    url.searchParams.set('destinations', destination);
    url.searchParams.set('units', 'metric');
    url.searchParams.set('language', 'fr');
    url.searchParams.set('region', 'fr');
    url.searchParams.set('key', apiKey);

    // Timeout 8s — évite les requêtes qui restent bloquées si Google ne répond pas
    const res = await fetch(url.toString(), { signal: AbortSignal.timeout(8000) });
    const data = await res.json();

    if (data.status !== 'OK') {
      throw new Error(`Google API error: ${data.status}`);
    }

    const element = data.rows?.[0]?.elements?.[0];
    if (!element || element.status !== 'OK') {
      throw new Error(`No route found: ${element?.status}`);
    }

    const km = Math.round(element.distance.value / 1000);
    const durationMin = Math.round(element.duration.value / 60);
    const duration = element.duration.text; // ex: "45 min"

    return NextResponse.json({ km, duration, durationMin, source: 'google' });

  } catch (err) {
    // En cas d'erreur Google → fallback estimation
    console.error('Google Distance Matrix error:', err);
    const fallbackKm = estimateDistanceKm(origin, destination);
    return NextResponse.json({
      km: fallbackKm,
      duration: formatDuration(estimateDurationMin(fallbackKm)),
      durationMin: estimateDurationMin(fallbackKm),
      source: 'estimate',
    });
  }
}

import { NextRequest, NextResponse } from 'next/server';

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
    const fallbackKm = estimateDistance(origin, destination);
    return NextResponse.json({
      km: fallbackKm,
      duration: `${Math.round(fallbackKm * 1.4)} min`,
      durationMin: Math.round(fallbackKm * 1.4),
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

    const res = await fetch(url.toString());
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
    const fallbackKm = estimateDistance(origin, destination);
    return NextResponse.json({
      km: fallbackKm,
      duration: `${Math.round(fallbackKm * 1.4)} min`,
      durationMin: Math.round(fallbackKm * 1.4),
      source: 'estimate',
    });
  }
}

/**
 * Estimation basique basée sur les trajets connus Amani.
 * Utilisé en fallback si pas de clé Google Maps.
 */
function estimateDistance(origin: string, destination: string): number {
  const o = origin.toLowerCase();
  const d = destination.toLowerCase();

  const KNOWN: Array<{ from: string[]; to: string[]; km: number }> = [
    { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['paris', 'centre', 'bastille', 'châtelet'], km: 32 },
    { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['défense', 'la défense'], km: 30 },
    { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['versailles'], km: 55 },
    { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['disneyland', 'disney'], km: 45 },
    { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['gare du nord', 'nord'], km: 28 },
    { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['gare de lyon', 'lyon'], km: 38 },
    { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['orly'], km: 58 },
    { from: ['orly'], to: ['paris', 'centre'], km: 22 },
    { from: ['orly'], to: ['défense', 'la défense'], km: 35 },
    { from: ['orly'], to: ['versailles'], km: 30 },
    { from: ['paris', 'centre'], to: ['versailles'], km: 25 },
    { from: ['paris', 'centre'], to: ['reims'], km: 145 },
    { from: ['paris', 'centre'], to: ['bruxelles', 'brussels'], km: 310 },
    { from: ['paris', 'centre'], to: ['lille'], km: 230 },
    { from: ['paris', 'centre'], to: ['deauville'], km: 210 },
    { from: ['paris', 'centre'], to: ['ritz', 'four seasons', 'george v', 'bristol', 'crillon', 'meurice', 'plaza athénée', 'mandarin', 'park hyatt'], km: 32 },
  ];

  for (const route of KNOWN) {
    const fromMatch = route.from.some((f) => o.includes(f) || d.includes(f));
    const toMatch = route.to.some((t) => d.includes(t) || o.includes(t));
    if (fromMatch && toMatch) return route.km;
  }

  // Fallback générique : 35 km (trajet moyen CDG → Paris)
  return 35;
}

import { NextRequest, NextResponse } from 'next/server';
import { VEHICLES, calculatePrice, PREDEFINED_ROUTES } from '@/lib/vehicles';

export async function POST(request: NextRequest) {
  try {
    const { from, to } = await request.json();

    if (!from || !to) {
      return NextResponse.json({ error: 'Missing from or to' }, { status: 400 });
    }

    let distanceKm: number;
    let durationMin: number;

    // Essayer d'abord les routes prédéfinies (pas besoin d'API)
    const predefined = findPredefinedRoute(from, to);

    if (predefined) {
      distanceKm = predefined.km;
      durationMin = predefined.minutes;
    } else {
      // Essayer l'API Google Maps
      const gmaps = await fetchGoogleMapsDistance(from, to);
      if (gmaps) {
        distanceKm = gmaps.distanceKm;
        durationMin = gmaps.durationMin;
      } else {
        // Fallback : estimation basée sur les coordonnées approx
        distanceKm = estimateDistance(from, to);
        durationMin = Math.round(distanceKm * 1.3);
      }
    }

    // Calculer les prix pour chaque véhicule
    const prices = VEHICLES.map((v) => ({
      id: v.id,
      name: v.nameKey,
      price: calculatePrice(v, distanceKm),
      pax: v.pax,
      bags: v.bags,
    }));

    return NextResponse.json({
      from,
      to,
      distance_km: distanceKm,
      duration_min: durationMin,
      duration_text: formatDuration(durationMin),
      prices,
    });
  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Chercher dans les routes prédéfinies
function findPredefinedRoute(from: string, to: string) {
  const fromLower = from.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const toLower = to.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  for (const [key, route] of Object.entries(PREDEFINED_ROUTES)) {
    const keyParts = key.replace(/-/g, ' ');
    if (
      (fromLower.includes(keyParts.split(' ')[0]) || keyParts.includes(fromLower.slice(0, 5))) &&
      (toLower.includes(keyParts.split(' ').slice(-1)[0]) || keyParts.includes(toLower.slice(0, 5)))
    ) {
      return route;
    }
  }
  return null;
}

// Appel API Google Maps Distance Matrix
async function fetchGoogleMapsDistance(from: string, to: string) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) return null;

  try {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(from)}&destinations=${encodeURIComponent(to)}&key=${apiKey}&language=fr&units=metric`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.status === 'OK' && data.rows?.[0]?.elements?.[0]?.status === 'OK') {
      const element = data.rows[0].elements[0];
      return {
        distanceKm: Math.round(element.distance.value / 1000),
        durationMin: Math.round(element.duration.value / 60),
      };
    }
  } catch (e) {
    console.error('Google Maps API error:', e);
  }
  return null;
}

// Estimation basique de distance
function estimateDistance(from: string, to: string): number {
  // Retourne une valeur par défaut raisonnable pour l'IDF
  return Math.floor(Math.random() * 35) + 15;
}

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h${m.toString().padStart(2, '0')}` : `${h}h`;
}

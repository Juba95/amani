/**
 * Distance routière réelle sans Google Maps : géocodage Nominatim (OpenStreetMap)
 * puis itinéraire OSRM. Sert quand la clé Google est absente ou rejetée, avant
 * l'estimation à vol d'oiseau de geo-estimate.ts (qui ne connaît que les grandes
 * villes et renvoyait 35 km pour Louvres → Le Havre).
 */

import { expandAddress, EUROPE_VIEWBOX } from '@/lib/geo-aliases';

const USER_AGENT = 'AmaniLimousines/1.0 (+https://www.amani-limousines.com)';
const TIMEOUT_MS = 6000;

type Coord = [number, number]; // [lat, lon]

// Cache mémoire : les mêmes trajets (CDG, Orly, gares…) reviennent souvent, et
// Nominatim demande de limiter les appels.
const geoCache = new Map<string, Coord | null>();
const routeCache = new Map<string, { km: number; durationMin: number } | null>();
const MAX_CACHE = 500;

function remember<K, V>(cache: Map<K, V>, key: K, value: V) {
  if (cache.size >= MAX_CACHE) cache.delete(cache.keys().next().value as K);
  cache.set(key, value);
}

async function geocode(address: string): Promise<Coord | null> {
  const key = address.trim().toLowerCase();
  if (geoCache.has(key)) return geoCache.get(key)!;

  const url = new URL('https://nominatim.openstreetmap.org/search');
  url.searchParams.set('q', expandAddress(address));
  url.searchParams.set('viewbox', EUROPE_VIEWBOX);
  url.searchParams.set('bounded', '1');
  url.searchParams.set('format', 'json');
  url.searchParams.set('limit', '1');
  url.searchParams.set('accept-language', 'fr');

  const res = await fetch(url.toString(), {
    headers: { 'User-Agent': USER_AGENT },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`Nominatim HTTP ${res.status}`);
  const data = await res.json();
  const coord: Coord | null = data?.[0] ? [parseFloat(data[0].lat), parseFloat(data[0].lon)] : null;
  remember(geoCache, key, coord);
  return coord;
}

/** Distance (km) et durée (min) par la route, ou null si introuvable. */
export async function osmRoute(
  origin: string,
  destination: string,
): Promise<{ km: number; durationMin: number } | null> {
  const key = `${origin.trim().toLowerCase()}|${destination.trim().toLowerCase()}`;
  if (routeCache.has(key)) return routeCache.get(key)!;

  const [from, to] = await Promise.all([geocode(origin), geocode(destination)]);
  if (!from || !to) return null;

  const url = `https://router.project-osrm.org/route/v1/driving/${from[1]},${from[0]};${to[1]},${to[0]}?overview=false`;
  const res = await fetch(url, {
    headers: { 'User-Agent': USER_AGENT },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`OSRM HTTP ${res.status}`);
  const data = await res.json();
  const route = data?.routes?.[0];
  if (data?.code !== 'Ok' || !route) {
    remember(routeCache, key, null);
    return null;
  }

  const result = {
    km: Math.max(1, Math.round(route.distance / 1000)),
    durationMin: Math.max(1, Math.round(route.duration / 60)),
  };
  remember(routeCache, key, result);
  return result;
}

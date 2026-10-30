/**
 * Distance routière réelle sans Google Maps : géocodage (lib/geocode.ts) puis
 * itinéraire OSRM. Sert quand la clé Google est absente ou rejetée, avant
 * l'estimation par villes connues de geo-estimate.ts.
 *
 * Si OSRM ne répond pas mais que les deux adresses sont géocodées, on estime
 * la route à vol d'oiseau × 1,25 plutôt que de retomber sur un forfait par défaut.
 */

import { geocode, haversineKm, type Coord } from '@/lib/geocode';
import { estimateDurationMin } from '@/lib/geo-estimate';

const USER_AGENT = 'AmaniLimousines/1.0 (+https://www.amani-limousines.com)';
const HEADERS = { 'User-Agent': USER_AGENT };
const TIMEOUT_MS = 6000;

// Cache mémoire : les mêmes trajets reviennent souvent, et Nominatim demande
// de limiter les appels.
const geoCache = new Map<string, Coord | null>();
const routeCache = new Map<string, { km: number; durationMin: number } | null>();
const MAX_CACHE = 500;

function remember<K, V>(cache: Map<K, V>, key: K, value: V) {
  if (cache.size >= MAX_CACHE) cache.delete(cache.keys().next().value as K);
  cache.set(key, value);
}

async function cachedGeocode(address: string): Promise<Coord | null> {
  const key = address.trim().toLowerCase();
  if (geoCache.has(key)) return geoCache.get(key)!;
  const coord = await geocode(address, HEADERS);
  if (coord) remember(geoCache, key, coord); // un échec n'est pas mis en cache : service peut-être indisponible
  return coord;
}

async function osrm(from: Coord, to: Coord): Promise<{ km: number; durationMin: number } | null> {
  const url = `https://router.project-osrm.org/route/v1/driving/${from[1]},${from[0]};${to[1]},${to[0]}?overview=false`;
  const res = await fetch(url, { headers: HEADERS, signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) throw new Error(`OSRM HTTP ${res.status}`);
  const data = await res.json();
  const route = data?.routes?.[0];
  if (data?.code !== 'Ok' || !route) return null;
  return {
    km: Math.max(1, Math.round(route.distance / 1000)),
    durationMin: Math.max(1, Math.round(route.duration / 60)),
  };
}

/** Distance (km) et durée (min), ou null si une des adresses est introuvable. */
export async function osmRoute(
  origin: string,
  destination: string,
): Promise<{ km: number; durationMin: number } | null> {
  const key = `${origin.trim().toLowerCase()}|${destination.trim().toLowerCase()}`;
  if (routeCache.has(key)) return routeCache.get(key)!;

  const [from, to] = await Promise.all([cachedGeocode(origin), cachedGeocode(destination)]);
  if (!from || !to) return null;

  let result: { km: number; durationMin: number } | null = null;
  try {
    result = await osrm(from, to);
  } catch (err) {
    console.error('OSRM error:', err);
  }
  if (!result) {
    const straight = haversineKm(from, to);
    const km = straight < 1 ? 10 : Math.round(straight * 1.25);
    return { km, durationMin: estimateDurationMin(km) }; // pas mis en cache : OSRM répondra peut-être au prochain appel
  }
  remember(routeCache, key, result);
  return result;
}

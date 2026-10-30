/**
 * Adresses abrégées du devis (« CDG », « Orly », « Paris Centre »…).
 *
 * - knownRoute : distances routières réelles des trajets les plus demandés,
 *   prioritaires sur tout géocodage (OpenStreetMap plaçait « CDG » à 316 km).
 * - expandAddress : réécrit les abréviations en adresses complètes avant le
 *   géocodage Nominatim, côté serveur (osm-route) comme côté carte (RouteMap).
 */
import { PREDEFINED_ROUTES } from '@/lib/vehicles';

function normalize(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();
}

const CDG = /\b(cdg|charles[ -]de[ -]gaulle|roissy(?![ -]en[ -]brie))\b/;
const ORLY = /\borly\b/;
const BOURGET = /\b(le )?bourget\b/;
const BEAUVAIS_AIRPORT = /\bbeauvais\b.*\b(aeroport|airport|tille)\b|\b(aeroport|airport)\b.*\bbeauvais\b/;
const PARIS_ONLY = /^paris( (centre|center|city|ville))?(, france)?$/;
const COUNTRY_HINT = /\b(france|belgique|belgium|suisse|switzerland|luxembourg|monaco|italie|italy|espagne|spain|allemagne|germany|pays-bas|netherlands|royaume-uni|united kingdom|uk|angleterre|england|portugal|autriche|austria|danemark|denmark)\b/;

/** Ajoute le mot-clé canonique des aéroports pour que « Aéroport Charles de Gaulle » trouve la clé « cdg ». */
function withAliases(s: string): string {
  let out = normalize(s);
  if (CDG.test(out)) out += ' cdg';
  return out;
}

/**
 * Trajet connu (PREDEFINED_ROUTES), dans un sens ou dans l'autre. Quand plusieurs
 * clés correspondent, la destination la plus précise l'emporte : « Disneyland
 * Paris » prend la clé disneyland, pas paris.
 */
export function knownRoute(origin: string, destination: string): { km: number; minutes: number } | null {
  const o = withAliases(origin);
  const d = withAliases(destination);
  let best: { km: number; minutes: number; score: number } | null = null;
  for (const [key, route] of Object.entries(PREDEFINED_ROUTES)) {
    const [a, b] = key.split('|');
    const match = (o.includes(a) && d.includes(b)) || (d.includes(a) && o.includes(b));
    if (!match) continue;
    // « paris » est la clé la plus vague : un lieu précis (ritz, gare de lyon…) passe devant.
    const score = (a === 'paris' ? 0 : a.length) + (b === 'paris' ? 0 : b.length);
    if (!best || score > best.score) best = { ...route, score };
  }
  return best ? { km: best.km, minutes: best.minutes } : null;
}

/** Adresse complète à géocoder pour une saisie abrégée ; sinon l'adresse telle quelle. */
export function expandAddress(address: string): string {
  const a = normalize(address);
  if (CDG.test(a)) return 'Aéroport Paris-Charles de Gaulle, Roissy-en-France, France';
  if (ORLY.test(a)) return 'Aéroport de Paris-Orly, Orly, France';
  if (BEAUVAIS_AIRPORT.test(a)) return 'Aéroport de Beauvais-Tillé, Tillé, France';
  if (BOURGET.test(a) && /\b(aeroport|airport)\b/.test(a)) return 'Aéroport de Paris-Le Bourget, Le Bourget, France';
  if (PARIS_ONLY.test(a)) return 'Paris, France';
  // Les adresses issues de l'autocomplétion Google finissent par le pays ;
  // une saisie libre sans pays reste en France.
  if (!address.includes(',') && !COUNTRY_HINT.test(a)) return `${address}, France`;
  return address;
}

/** Rectangle Europe pour Nominatim (viewbox = ouest,nord,est,sud). */
export const EUROPE_VIEWBOX = '-25,71.5,45,34.5';

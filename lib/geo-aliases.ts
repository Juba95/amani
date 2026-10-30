/**
 * Adresses abrégées du devis (« CDG », « Orly », « Paris Centre »…).
 *
 * - knownRoute : distances routières réelles des trajets les plus demandés,
 *   prioritaires sur tout géocodage (OpenStreetMap plaçait « CDG » à 316 km).
 *   Le géocodage des abréviations (coordonnées fixes des aéroports) est dans
 *   lib/geocode.ts.
 */
import { PREDEFINED_ROUTES } from '@/lib/vehicles';

function normalize(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();
}

const CDG = /\b(cdg|charles[ -]de[ -]gaulle|roissy(?![ -]en[ -]brie))\b/;

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

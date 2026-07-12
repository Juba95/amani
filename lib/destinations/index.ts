/**
 * index.ts — Registre central des destinations européennes
 * ─────────────────────────────────────────────────────────────────────────────
 * Agrège les 6 fichiers région et expose :
 *   - ALL_DESTINATIONS         → generateStaticParams, sitemap, hub
 *   - getDestination(slug)     → pages dynamiques
 *   - getNearbyDestinations(d) → maillage interne (slugs inexistants filtrés)
 *
 * Pour ajouter une ville : éditer UNIQUEMENT le fichier région concerné dans
 * lib/destinations/regions/ — le reste (pages, sitemap, indexation) suit.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Destination } from './types';
import { CITIES as FRANCE } from './regions/france';
import { CITIES as UK_BENELUX } from './regions/uk-benelux';
import { CITIES as DACH_NORDICS } from './regions/dach-nordics';
import { CITIES as ITALY } from './regions/italy';
import { CITIES as IBERIA } from './regions/iberia';
import { CITIES as ALPS_ATTRACTIONS } from './regions/alps-attractions';

export type { Destination, DestExperience } from './types';

export const ALL_DESTINATIONS: Destination[] = [
  ...FRANCE,
  ...UK_BENELUX,
  ...DACH_NORDICS,
  ...ITALY,
  ...IBERIA,
  ...ALPS_ATTRACTIONS,
];

const BY_SLUG = new Map<string, Destination>(ALL_DESTINATIONS.map((d) => [d.slug, d]));

/** Retourne la destination correspondant au slug, ou undefined. */
export function getDestination(slug: string): Destination | undefined {
  return BY_SLUG.get(slug);
}

/**
 * Villes proches d'une destination (maillage interne).
 * Les slugs `nearby` pointant vers des villes pas encore rédigées sont
 * filtrés silencieusement — aucun lien cassé pendant le remplissage progressif.
 */
export function getNearbyDestinations(d: Destination): Destination[] {
  return d.nearby
    .map((slug) => BY_SLUG.get(slug))
    .filter((x): x is Destination => Boolean(x));
}

// ── Groupement par pays (code ISO) pour la carte interactive ────────────────
const COUNTRY_ISO: Record<string, string> = {
  'France': 'fr', 'United Kingdom': 'gb', 'Ireland': 'ie', 'Belgium': 'be',
  'Netherlands': 'nl', 'Luxembourg': 'lu', 'Germany': 'de', 'Austria': 'at',
  'Switzerland': 'ch', 'Denmark': 'dk', 'Sweden': 'se', 'Norway': 'no',
  'Finland': 'fi', 'Iceland': 'is', 'Italy': 'it', 'Spain': 'es',
  'Portugal': 'pt', 'Czech Republic': 'cz', 'Czechia': 'cz', 'Hungary': 'hu',
  'Poland': 'pl', 'Monaco': 'mc', 'Greece': 'gr', 'Croatia': 'hr',
  'Slovenia': 'si', 'Slovakia': 'sk', 'Romania': 'ro', 'Bulgaria': 'bg',
  'Lithuania': 'lt', 'Latvia': 'lv', 'Estonia': 'ee', 'Andorra': 'ad',
};

export function groupByCountryIso(locale: 'fr' | 'en') {
  const out: Record<string, { name: string; cities: { slug: string; name: string }[] }> = {};
  for (const d of ALL_DESTINATIONS) {
    const iso = COUNTRY_ISO[d.country.en];
    if (!iso) continue;
    if (!out[iso]) out[iso] = { name: d.country[locale], cities: [] };
    out[iso].cities.push({ slug: d.slug, name: d.name[locale] });
  }
  for (const iso of Object.keys(out)) out[iso].cities.sort((a, b) => a.name.localeCompare(b.name));
  return out;
}

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

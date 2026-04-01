/**
 * seo-whitelist.ts — Amani Limousines
 * ─────────────────────────────────────────────────────────────────────────────
 * Source de vérité unique pour la stratégie SEO.
 *
 * Utilisée par :
 *   - app/sitemap.ts         → génère uniquement les URLs indexées
 *   - app/[lang]/layout.tsx  → noindex sur AR/ZH
 *   - tout composant/page    → shouldIndex() pour décider du robots tag
 *
 * Règle simple :
 *   FR + EN → indexés (pages avec contenu unique et volume de recherche)
 *   AR + ZH → noindex (homepages fines, pas de trafic qualifié)
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * Langues dont TOUTES les pages sont indexées (FR + EN ont un contenu riche et unique).
 * AR et ZH n'ont qu'une homepage → gérées séparément via AR_ZH_INDEXED_SLUGS.
 */
export const INDEXED_LOCALES = new Set(['fr', 'en'] as const);

/**
 * Pour AR et ZH : seules les homepages sont indexées (clientèle internationale).
 * Les sous-pages AR/ZH n'existent pas encore, mais si elles sont créées,
 * ajouter leurs slugs ici pour les indexer.
 */
export const AR_ZH_INDEXED_SLUGS = new Set([
  '', // homepage /ar et /zh
]);

/** Type des locales supportées */
export type IndexedLocale = 'fr' | 'en';
export type Locale = 'fr' | 'en' | 'ar' | 'zh';

/**
 * Slugs FR indexés — correspondent aux dossiers dans app/
 * Format : slug sans slash ni domaine (ex: 'transfert-cdg-paris')
 * Cas spécial : '' = homepage FR (/)
 */
export const FR_INDEXED_SLUGS = new Set([
  // Homepage
  '',

  // ── Aéroports (hubs) ──────────────────────────────────────────
  'transfert-aeroport-cdg',
  'transfert-aeroport-orly',
  'transfert-le-bourget',

  // ── Trajets CDG ───────────────────────────────────────────────
  'transfert-cdg-paris',
  'transfert-cdg-la-defense',
  'transfert-cdg-versailles',
  'transfert-cdg-disneyland',
  'transfert-cdg-gare-du-nord',
  'transfert-cdg-gare-de-lyon',

  // ── Palaces CDG ───────────────────────────────────────────────
  'transfert-cdg-hotel-ritz',
  'transfert-cdg-hotel-george-v',
  'transfert-cdg-hotel-bristol',

  // ── Trajets Orly ──────────────────────────────────────────────
  'transfert-orly-paris',

  // ── Prestations ───────────────────────────────────────────────
  'mise-a-disposition',
  'transfert-prive',
  'meet-and-greet',
  'convoi-delegations',
  'securite-rapprochee',
  'excursion-privee',
  'longue-distance',

  // ── Flotte & Réservation ──────────────────────────────────────
  'notre-flotte',
  'reservation',

  // ── Événements ────────────────────────────────────────────────
  'evenements',
  'evenements/paris-fashion-week',
  'evenements/paris-air-show',
  'evenements/roland-garros',
  'evenements/festival-de-cannes',

  // ── Chauffeur privé Paris et niches ──────────────────────────
  'chauffeur-prive-paris',
  'chauffeur-mariage-paris',
  'transfert-aeroport-beauvais',
  // ── Alpes / Haute-Savoie ──────────────────────────────────────
  'chauffeur-prive-chamonix',
  'chauffeur-prive-megeve',
  'chauffeur-prive-haute-savoie',
  'transfert-aeroport-economique',
  // ── Événements supplémentaires
  'evenements/hippodrome-deauville',
  'evenements/grand-prix-monaco',
  'evenements/salons-professionnels',

  // ── Institutionnelles ─────────────────────────────────────────
  'contact',
  'a-propos',
  'mentions-legales',
]);

/**
 * Slugs EN indexés — correspondent aux dossiers dans app/en/
 * Format : slug sans '/en/' ni slash final (ex: 'cdg-airport-transfer')
 * Cas spécial : '' = homepage EN (/en)
 */
export const EN_INDEXED_SLUGS = new Set([
  // Homepage EN
  '',

  // ── Aéroports ─────────────────────────────────────────────────
  'cdg-airport-transfer',
  'orly-airport-transfer',

  // ── Prestations ───────────────────────────────────────────────
  'hourly-hire',
  'meet-and-greet',
  'delegation-transport',
  'close-protection',
  'private-excursion',
  'long-distance',

  // ── Événements & flotte ───────────────────────────────────────
  'events',
  'our-fleet',

  // ── Chauffeur privé Paris et régions (EN) ────────────────────
  'private-chauffeur-paris',
  'private-chauffeur-bordeaux',
  'bordeaux-airport-transfer',
  'lyon-airport-transfer',
  'marseille-airport-transfer',
  // ── Alpes / Haute-Savoie (EN) ────────────────────────────────
  'chamonix-chauffeur',
  'megeve-chauffeur',
  'haute-savoie-chauffeur',
  'economical-airport-transfer',

  // ── Institutionnelles ─────────────────────────────────────────
  'contact',
]);

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Retourne true si la combinaison locale + slug doit être indexée.
 *
 * @param locale  'fr' | 'en' | 'ar' | 'zh'
 * @param slug    Slug de la page sans slash initial (ex: 'transfert-cdg-paris')
 *                Pour la homepage, passer '' ou undefined.
 *
 * @example
 *   shouldIndex('fr', 'transfert-cdg-paris')  // true
 *   shouldIndex('fr', 'my-unknown-page')       // false
 *   shouldIndex('ar', '')                      // false
 *   shouldIndex('en', 'cdg-airport-transfer')  // true
 */
export function shouldIndex(locale: Locale, slug: string = ''): boolean {
  // FR et EN : vérifier dans la whitelist dédiée
  if (locale === 'fr') return FR_INDEXED_SLUGS.has(slug);
  if (locale === 'en') return EN_INDEXED_SLUGS.has(slug);
  // AR et ZH : seulement la homepage (et toute page ajoutée dans AR_ZH_INDEXED_SLUGS)
  if (locale === 'ar' || locale === 'zh') return AR_ZH_INDEXED_SLUGS.has(slug);
  return false;
}

/**
 * Retourne l'objet robots Next.js pour la metadata API.
 * Usage : spread dans generateMetadata()
 *
 * @example
 *   export async function generateMetadata({ params }) {
 *     return {
 *       title: '...',
 *       ...getRobotsMetadata(params.locale, params.slug),
 *     }
 *   }
 */
export function getRobotsMetadata(locale: Locale, slug: string = '') {
  return shouldIndex(locale, slug)
    ? { robots: { index: true,  follow: true  } }
    : { robots: { index: false, follow: true  } };
}

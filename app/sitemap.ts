import type { MetadataRoute } from 'next';
import { FR_INDEXED_SLUGS, EN_INDEXED_SLUGS, AR_ZH_INDEXED_SLUGS } from '@/lib/seo-whitelist';

const BASE = 'https://www.amani-limousines.com';

/**
 * sitemap.ts — Amani Limousines
 * ─────────────────────────────────────────────────────────────────────────────
 * Génère /sitemap.xml via Next.js 14.
 * Source de vérité : lib/seo-whitelist.ts
 *
 * Pour ajouter/retirer une URL :
 *   → Modifier uniquement lib/seo-whitelist.ts, le sitemap se met à jour seul.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Priorités par slug (FR et EN partagent les mêmes valeurs quand les slugs coïncident)
const PRIORITY: Record<string, number> = {
  '': 1.0, // homepage
  // FR — aéroports
  'transfert-aeroport-cdg':       0.9,
  'transfert-aeroport-orly':      0.9,
  'transfert-le-bourget':         0.8,
  // FR — trajets CDG
  'transfert-cdg-paris':          0.85,
  'transfert-cdg-la-defense':     0.8,
  'transfert-cdg-versailles':     0.75,
  'transfert-cdg-disneyland':     0.75,
  'transfert-cdg-gare-du-nord':   0.75,
  'transfert-cdg-gare-de-lyon':   0.75,
  // FR — palaces CDG
  'transfert-cdg-hotel-ritz':     0.7,
  'transfert-cdg-hotel-george-v': 0.7,
  'transfert-cdg-hotel-bristol':  0.7,
  // FR — Orly
  'transfert-orly-paris':         0.8,
  // FR — prestations
  'mise-a-disposition':           0.85,
  'transfert-prive':              0.85,
  'meet-and-greet':               0.8,
  'convoi-delegations':           0.8,
  'securite-rapprochee':          0.75,
  'excursion-privee':             0.75,
  'longue-distance':              0.8,
  // FR — flotte & réservation
  'notre-flotte':                 0.75,
  'reservation':                  0.85,
  // FR — événements
  'evenements':                   0.75,
  'evenements/paris-fashion-week':0.7,
  'evenements/paris-air-show':    0.7,
  'evenements/roland-garros':     0.7,
  'evenements/festival-de-cannes':0.7,
  // FR — niches SEO
  'chauffeur-prive-paris':              0.88,
  'chauffeur-mariage-paris':            0.80,
  'transfert-aeroport-beauvais':        0.82,
  'evenements/hippodrome-deauville':    0.68,
  'evenements/grand-prix-monaco':       0.70,
  'evenements/salons-professionnels':   0.72,
  // EN — private chauffeur + régions
  'private-chauffeur-paris':            0.85,
  'private-chauffeur-bordeaux':         0.80,
  'bordeaux-airport-transfer':          0.82,
  'lyon-airport-transfer':              0.78,
  'marseille-airport-transfer':         0.78,
  // FR — institutionnelles
  'contact':                      0.6,
  'a-propos':                     0.6,
  'mentions-legales':             0.4,
  // FR — Alpes / Haute-Savoie
  'chauffeur-prive-chamonix':           0.82,
  'chauffeur-prive-megeve':             0.80,
  'chauffeur-prive-haute-savoie':       0.82,
  'transfert-aeroport-economique':      0.78,
  // EN — Alpes / Haute-Savoie + airport
  'chamonix-chauffeur':                 0.80,
  'megeve-chauffeur':                   0.78,
  'haute-savoie-chauffeur':             0.80,
  'economical-airport-transfer':        0.78,
  // EN slugs
  'cdg-airport-transfer':         0.85,
  'orly-airport-transfer':        0.8,
  'hourly-hire':                  0.8,
  'delegation-transport':         0.75,
  'close-protection':             0.7,
  'private-excursion':            0.7,
  'long-distance':                0.75,
  'events':                       0.7,
  'our-fleet':                    0.7,
};

function getPriority(slug: string, isSecondaryLocale = false): number {
  if (isSecondaryLocale) return slug === '' ? 0.9 : 0.7;
  return PRIORITY[slug] ?? 0.65;
}

function getChangeFreq(slug: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (slug === '') return 'weekly';
  if (['contact', 'mentions-legales', 'a-propos'].includes(slug)) return 'yearly';
  return 'monthly';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // ── Pages FR ────────────────────────────────────────────────────────────────
  for (const slug of FR_INDEXED_SLUGS) {
    const path = slug === '' ? '' : `/${slug}`;
    entries.push({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: getChangeFreq(slug),
      priority: getPriority(slug),
    });
  }

  // ── Pages EN ────────────────────────────────────────────────────────────────
  for (const slug of EN_INDEXED_SLUGS) {
    const path = slug === '' ? '/en' : `/en/${slug}`;
    entries.push({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: getChangeFreq(slug),
      priority: getPriority(slug),
    });
  }

  // ── Homepages AR + ZH ───────────────────────────────────────────────────────
  // Clientèle internationale — indexées à 0.9
  for (const locale of ['ar', 'zh'] as const) {
    for (const slug of AR_ZH_INDEXED_SLUGS) {
      const path = slug === '' ? `/${locale}` : `/${locale}/${slug}`;
      entries.push({
        url: `${BASE}${path}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: getPriority(slug, true),
      });
    }
  }

  return entries;
}

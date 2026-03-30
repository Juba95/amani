import type { MetadataRoute } from 'next';

const BASE = 'https://www.amani-limousines.com';

/**
 * Sitemap automatique Next.js 14.
 * Accessible à /sitemap.xml — soumis dans Google Search Console.
 * ~90 URLs ciblées, toutes à contenu unique. Pas de pages thin content.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Pages FR
  const frPages: MetadataRoute.Sitemap = [
    // Homepage
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // Aéroports — niveau 1
    { url: `${BASE}/transfert-aeroport-cdg`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/transfert-aeroport-orly`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/transfert-le-bourget`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // CDG — pages trajectoires
    { url: `${BASE}/transfert-cdg-paris`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/transfert-cdg-la-defense`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/transfert-cdg-versailles`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/transfert-cdg-disneyland`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/transfert-cdg-gare-du-nord`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/transfert-cdg-gare-de-lyon`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // CDG — hôtels palaces
    { url: `${BASE}/transfert-cdg-hotel-ritz`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/transfert-cdg-hotel-george-v`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/transfert-cdg-hotel-bristol`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Orly — pages trajectoires
    { url: `${BASE}/transfert-orly-paris`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Prestations
    { url: `${BASE}/mise-a-disposition`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/transfert-prive`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/meet-and-greet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/convoi-delegations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/securite-rapprochee`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/excursion-privee`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/longue-distance`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Flotte & Réservation
    { url: `${BASE}/notre-flotte`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/reservation`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },

    // Événements
    { url: `${BASE}/evenements`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/evenements/paris-fashion-week`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/evenements/paris-air-show`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/evenements/roland-garros`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/evenements/festival-de-cannes`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Institutionnelles
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/a-propos`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ];

  // Pages EN
  const enPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/en`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/en/cdg-airport-transfer`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/en/orly-airport-transfer`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/en/hourly-hire`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/en/meet-and-greet`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/en/delegation-transport`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/en/close-protection`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/en/private-excursion`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/en/long-distance`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/en/events`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/en/our-fleet`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/en/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ];

  // Pages AR
  const arPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/ar`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  // Pages ZH
  const zhPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/zh`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  return [...frPages, ...enPages, ...arPages, ...zhPages];
}

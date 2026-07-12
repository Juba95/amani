/**
 * types.ts — Système « 300 destinations européennes »
 * ─────────────────────────────────────────────────────────────────────────────
 * Modèle de données des pages /destinations/<slug> (FR) et /en/destinations/<slug> (EN).
 * Les contenus vivent dans lib/destinations/regions/*.ts (un fichier par région).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface DestExperience {
  title: { fr: string; en: string };
  teaser: { fr: string; en: string };
  duration: { fr: string; en: string };
  price: string; // prix indicatif en euros, nombre seul sans € (ex: "590")
}

export interface Destination {
  slug: string;                    // ex 'london', 'geneva', 'milan'
  name: { fr: string; en: string };
  country: { fr: string; en: string };
  region: string;                  // clé du fichier région (ex 'france', 'italy')
  airport?: string;                // ex 'Heathrow (LHR)'
  airportTransfer: { fr: string; en: string };  // phrase factuelle distance/temps aéroport→centre
  intro: { fr: string[]; en: string[] };        // 2 paragraphes de 60-90 mots chacun (**gras** supporté)
  experiences: DestExperience[];   // exactement 5
  faq: { q: { fr: string; en: string }; a: { fr: string; en: string } }[];  // 3 questions
  nearby: string[];                // 2-4 slugs de villes proches (maillage interne)
}

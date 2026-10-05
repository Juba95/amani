/**
 * types.ts — Système « 300 destinations européennes »
 * ─────────────────────────────────────────────────────────────────────────────
 * Modèle de données des pages /destinations/<slug> (FR) et /en/destinations/<slug> (EN).
 * Les contenus vivent dans lib/destinations/regions/*.ts (un fichier par région).
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * Texte localisé. Le français et l'anglais sont rédigés dans les fichiers
 * région ; l'allemand et l'espagnol viennent de la couche i18n et ne sont
 * présents que sur les villes traduites — d'où les champs optionnels.
 */
export type LocalizedText = { fr: string; en: string; de?: string; es?: string };
export type LocalizedList = { fr: string[]; en: string[]; de?: string[]; es?: string[] };

export interface DestExperience {
  title: LocalizedText;
  teaser: LocalizedText;
  duration: LocalizedText;
  price: string; // prix indicatif en euros, nombre seul sans € (ex: "590")
}

export interface Destination {
  slug: string;                    // ex 'london', 'geneva', 'milan'
  name: LocalizedText;
  country: LocalizedText;
  region: string;                  // clé du fichier région (ex 'france', 'italy')
  airport?: string;                // ex 'Heathrow (LHR)'
  airportTransfer: LocalizedText;  // phrase factuelle distance/temps aéroport→centre
  intro: LocalizedList;        // 2 paragraphes de 60-90 mots chacun (**gras** supporté)
  experiences: DestExperience[];   // exactement 5
  faq: { q: LocalizedText; a: LocalizedText }[];  // 3 questions
  nearby: string[];                // 2-4 slugs de villes proches (maillage interne)
}

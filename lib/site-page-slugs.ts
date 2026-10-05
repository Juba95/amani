/**
 * site-page-slugs.ts — table de routage des pages de service traduites
 * ─────────────────────────────────────────────────────────────────────────────
 * Séparée de lib/site-pages.ts, qui lit le contenu par fs et ne peut donc pas
 * être importée depuis un composant client ni depuis la whitelist SEO. Ce
 * fichier ne contient que des données : slugs, équivalents français et anglais.
 */

export const PAGE_LOCALES = ['de', 'es', 'ar', 'zh'] as const;
export type PageLocale = (typeof PAGE_LOCALES)[number];

export interface SitePage {
  slug: string;
  /** Page française rédigée à la main, cible des hreflang. */
  fr: string;
  /** Page anglaise rédigée à la main. */
  en: string;
  group: 'transfers' | 'company' | 'events';
}

/** L'ordre fixe celui du menu. */
export const SITE_PAGES: SitePage[] = [
  { slug: 'hourly-hire',           fr: '/mise-a-disposition',      en: '/en/hourly-hire',           group: 'transfers' },
  { slug: 'cdg-airport-transfer',  fr: '/transfert-aeroport-cdg',  en: '/en/cdg-airport-transfer',  group: 'transfers' },
  { slug: 'orly-airport-transfer', fr: '/transfert-aeroport-orly', en: '/en/orly-airport-transfer', group: 'transfers' },
  { slug: 'meet-and-greet',        fr: '/meet-and-greet',          en: '/en/meet-and-greet',        group: 'transfers' },
  { slug: 'long-distance',         fr: '/longue-distance',         en: '/en/long-distance',         group: 'transfers' },
  { slug: 'delegation-transport',  fr: '/convoi-delegations',      en: '/en/delegation-transport',  group: 'transfers' },
  { slug: 'close-protection',      fr: '/securite-rapprochee',     en: '/en/close-protection',      group: 'transfers' },
  { slug: 'corporate',             fr: '/corporate',               en: '/en/corporate',             group: 'company' },
  { slug: 'contact',               fr: '/contact',                 en: '/en/contact',               group: 'company' },
  { slug: 'become-a-chauffeur',    fr: '/devenir-chauffeur',       en: '/en/become-a-chauffeur',    group: 'company' },
  { slug: 'experiences',           fr: '/experiences',             en: '/en/experiences',           group: 'events' },
  { slug: 'events',                fr: '/evenements',              en: '/en/events',                group: 'events' },
];

export const SITE_PAGE_SLUGS: string[] = SITE_PAGES.map((p) => p.slug);

const BY_SLUG = new Map(SITE_PAGES.map((p) => [p.slug, p]));
export function getPageMeta(slug: string): SitePage | undefined {
  return BY_SLUG.get(slug);
}

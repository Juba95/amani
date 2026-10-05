/**
 * site-pages.ts — pages de service dans les langues sans rédaction dédiée
 * ─────────────────────────────────────────────────────────────────────────────
 * Le français et l'anglais ont une page écrite à la main par prestation
 * (app/mise-a-disposition, app/en/hourly-hire). Les décliner à la main en
 * allemand, espagnol, arabe et chinois ferait quarante-huit fichiers de plus
 * à maintenir, et la moindre correction serait à reporter huit fois.
 *
 * Ces quatre langues passent donc par un gabarit unique alimenté par
 * content/pages-i18n/<slug>.<locale>.json. Une page y est une suite de blocs :
 * un chapeau, des sections de texte, des listes de cartes, une FAQ. Assez pour
 * couvrir les pages existantes sans inventer une mise en page par prestation.
 *
 * Lecture par fs — build et serveur uniquement.
 */
import fs from 'fs';
import path from 'path';
import { PAGE_LOCALES, SITE_PAGES, type PageLocale } from './site-page-slugs';

export { PAGE_LOCALES, SITE_PAGES, getPageMeta } from './site-page-slugs';
export type { PageLocale, SitePage } from './site-page-slugs';


/** Bloc de cartes : une liste de points courts, titre + texte. */
export interface PageCard {
  title: string;
  text: string;
}

export interface PageSection {
  title: string;
  /** Paragraphes. Le balisage **gras** est rendu. */
  paragraphs?: string[];
  /** Cartes affichées en grille sous les paragraphes. */
  cards?: PageCard[];
}

export interface LocalizedPage {
  slug: string;
  locale: PageLocale;
  /** Surtitre doré au-dessus du H1. */
  tag: string;
  h1: string;
  intro: string;
  sections: PageSection[];
  faq?: { q: string; a: string }[];
  meta: { title: string; description: string };
  /** Bouton principal du bas de page. */
  cta?: { title: string; text: string; button: string };
}

const DIR = path.join(process.cwd(), 'content', 'pages-i18n');
const cache = new Map<string, LocalizedPage | null>();

/** Page traduite, ou null si elle n'a pas encore été produite dans cette langue. */
export function getLocalizedPage(slug: string, locale: PageLocale): LocalizedPage | null {
  const key = `${slug}.${locale}`;
  if (cache.has(key)) return cache.get(key) ?? null;
  let data: LocalizedPage | null = null;
  try {
    data = JSON.parse(fs.readFileSync(path.join(DIR, `${key}.json`), 'utf-8'));
    if (!data?.h1 || !Array.isArray(data.sections)) data = null;
  } catch {
    data = null;
  }
  cache.set(key, data);
  return data;
}

/** Slugs disponibles dans la langue demandée, dans l'ordre du menu. */
export function localizedPageSlugs(locale: PageLocale): string[] {
  return SITE_PAGES.filter((p) => getLocalizedPage(p.slug, locale)).map((p) => p.slug);
}

/** Toutes les combinaisons langue + slug produites, pour generateStaticParams. */
export function allLocalizedPageParams(): { lang: PageLocale; slug: string }[] {
  return PAGE_LOCALES.flatMap((lang) =>
    localizedPageSlugs(lang).map((slug) => ({ lang, slug })),
  );
}

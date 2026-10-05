/**
 * i18n.ts — couche allemande et espagnole des pages destination
 * ─────────────────────────────────────────────────────────────────────────────
 * Les fiches de regions/*.ts sont rédigées en français et en anglais. Les
 * versions allemande et espagnole vivent à part, dans
 * content/destinations-i18n/<slug>.json, produites par
 * scripts/translate-destinations.ts.
 *
 * Pourquoi ne pas les fusionner dans les fichiers région : ceux-ci font
 * plusieurs milliers de lignes et sont relus à la main. Garder la traduction
 * dans un fichier par ville laisse les diffs lisibles et permet de régénérer
 * une ville sans toucher au reste.
 *
 * La couverture est partielle et le restera : seules les villes traduites ont
 * une page /de/destinations/<slug> ou /es/destinations/<slug>. Les autres
 * n'existent qu'en français et en anglais.
 *
 * Lecture par fs — build et serveur uniquement, ne pas importer côté client.
 */
import fs from 'fs';
import path from 'path';
import type { Destination } from './types';
import { ALL_DESTINATIONS, getDestination } from './index';

export type DestLocale = 'fr' | 'en' | 'de' | 'es';

/** Langues dont le contenu vient de la couche i18n plutôt que des fichiers région. */
export const TRANSLATED_LOCALES = ['de', 'es'] as const;
export type TranslatedLocale = (typeof TRANSLATED_LOCALES)[number];

const CONTENT_DIR = path.join(process.cwd(), 'content', 'destinations-i18n');

interface Pair { de: string; es: string }
interface PairList { de: string[]; es: string[] }

interface DestinationI18n {
  slug: string;
  name: Pair;
  country: Pair;
  airportTransfer: Pair;
  intro: PairList;
  experiences: { title: Pair; teaser: Pair; duration: Pair }[];
  faq: { q: Pair; a: Pair }[];
}

const cache = new Map<string, DestinationI18n | null>();

function readI18n(slug: string): DestinationI18n | null {
  if (cache.has(slug)) return cache.get(slug) ?? null;
  let data: DestinationI18n | null = null;
  try {
    data = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, `${slug}.json`), 'utf-8'));
  } catch {
    data = null;
  }
  cache.set(slug, data);
  return data;
}

/** Slugs disposant d'une version dans la langue demandée, dans l'ordre du registre. */
export function translatedSlugs(locale: TranslatedLocale): string[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.json'));
  } catch {
    return [];
  }
  const fromFiles = files
    .map((f) => f.replace(/\.json$/, ''))
    .filter((slug) => {
      const i18n = readI18n(slug);
      return Boolean(i18n?.name?.[locale]) && Boolean(getDestination(slug));
    });

  // Les villes à page dédiée n'ont pas de fichier : elles sont traduites dans
  // le registre lui-même.
  const inline = ALL_DESTINATIONS
    .filter((d) => d.translationOnly && d.name[locale])
    .map((d) => d.slug);

  return [...new Set([...fromFiles, ...inline])].sort();
}

/**
 * Destination dont les champs portent la langue demandée en plus du français et
 * de l'anglais. Retourne null si la ville n'existe pas ou n'est pas traduite —
 * l'appelant rend alors une 404 plutôt qu'une page à moitié anglaise.
 */
export function getTranslatedDestination(slug: string, locale: TranslatedLocale): Destination | null {
  const d = getDestination(slug);
  if (!d) return null;
  // Les villes à page dédiée portent leurs traductions directement dans le
  // registre (regions/france-cities.ts) : rien à fusionner.
  if (d.translationOnly) return d.name[locale] ? d : null;
  const t = readI18n(slug);
  if (!t?.name?.[locale]) return null;

  // Les tableaux traduits doivent avoir la même longueur que la source : une
  // expérience ou une question manquante casserait l'alignement des index avec
  // les fiches longues et les images.
  if (t.experiences?.length !== d.experiences.length) return null;
  if (t.faq?.length !== d.faq.length) return null;

  return {
    ...d,
    name: { ...d.name, [locale]: t.name[locale] },
    country: { ...d.country, [locale]: t.country[locale] },
    airportTransfer: { ...d.airportTransfer, [locale]: t.airportTransfer[locale] },
    intro: { ...d.intro, [locale]: t.intro[locale] },
    experiences: d.experiences.map((e, i) => ({
      ...e,
      title: { ...e.title, [locale]: t.experiences[i].title[locale] },
      teaser: { ...e.teaser, [locale]: t.experiences[i].teaser[locale] },
      duration: { ...e.duration, [locale]: t.experiences[i].duration[locale] },
    })),
    faq: d.faq.map((f, i) => ({
      q: { ...f.q, [locale]: t.faq[i].q[locale] },
      a: { ...f.a, [locale]: t.faq[i].a[locale] },
    })),
  };
}

/** Toutes les destinations traduites dans la langue demandée. */
export function translatedDestinations(locale: TranslatedLocale): Destination[] {
  return translatedSlugs(locale)
    .map((slug) => getTranslatedDestination(slug, locale))
    .filter((d): d is Destination => d !== null);
}

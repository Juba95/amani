/**
 * Helper côté serveur pour lire le contenu éditable depuis le backoffice.
 * Utilisé par les pages et composants pour récupérer les overrides.
 *
 * Usage dans une page :
 *   import { content, globalContent } from '@/lib/get-content';
 *   const c = content('chauffeur-prive-paris');
 *   const title = c('h1', 'Chauffeur privé à Paris');
 */

import fs from 'fs';
import path from 'path';
import { SITE_PAGES } from './site-page-slugs';
import { getLocalizedPage, PAGE_LOCALES } from './site-pages';
import { withRegionalVariants } from './hreflang';

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'site-content.json');

type ContentGetter = (key: string, defaultValue: string) => string;

let _cache: Record<string, Record<string, string>> | null = null;
let _cacheTime = 0;
const CACHE_TTL = 10_000; // 10 secondes de cache en mémoire

function readStore(): Record<string, Record<string, string>> {
  const now = Date.now();
  if (_cache && now - _cacheTime < CACHE_TTL) return _cache;

  try {
    if (!fs.existsSync(DATA_FILE)) return {};
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const data = JSON.parse(raw);
    _cache = typeof data === 'object' && data !== null ? data : {};
    _cacheTime = now;
    return _cache!;
  } catch {
    return {};
  }
}

/**
 * Retourne une fonction getter pour une page spécifique.
 * Le getter retourne la valeur du backoffice ou la valeur par défaut.
 *
 * @example
 * const c = content('chauffeur-prive-paris');
 * const title = c('h1', 'Chauffeur privé à Paris');
 */
export function content(slug: string): ContentGetter {
  const store = readStore();
  const pageData = store[slug] ?? {};

  return (key: string, defaultValue: string): string => {
    return pageData[key]?.trim() || defaultValue;
  };
}

/**
 * Retourne le contenu global (téléphone, email, CTA, etc.)
 */
export function globalContent(): ContentGetter {
  return content('_global');
}

/**
 * Retourne les données brutes d'une page (pour les métadonnées dynamiques)
 */
export function rawContent(slug: string): Record<string, string> {
  const store = readStore();
  return store[slug] ?? {};
}

/**
 * Helper pour générer les metadata Next.js avec overrides du backoffice.
 *
 * @example
 * export const metadata = contentMetadata('chauffeur-prive-paris', {
 *   title: 'Chauffeur Privé Paris | Amani Limousines',
 *   description: 'Service premium...',
 *   canonical: 'https://www.amani-limousines.com/chauffeur-prive-paris',
 * });
 */
const BASE_URL = 'https://www.amani-limousines.com';

/** Code hreflang réel : le chinois simplifié ne se déclare pas « zh ». */
const HREFLANG: Record<string, string> = { de: 'de', es: 'es', ar: 'ar', zh: 'zh-Hans' };

/**
 * Versions allemande, espagnole, arabe et chinoise d'une page de service, quand
 * elles existent. Les hreflang doivent être réciproques : une page allemande
 * qui pointe vers la page française sans que celle-ci lui réponde est ignorée
 * par Google. Plutôt que de recopier la liste dans vingt-quatre fichiers, on la
 * calcule ici à partir du slug.
 */
export function localizedAlternates(slug: string): Record<string, string> {
  const pagePath = `/${slug}`;
  const page = SITE_PAGES.find((p) => p.fr === pagePath || p.en === pagePath);
  if (!page) return {};
  // Les deux faces du groupe, pour que chaque langue cite toutes les autres.
  // Next retire l'entrée dont l'URL est celle du canonical, donc la page
  // française ne portera pas de hreflang « fr » : son canonical le dit déjà.
  const out: Record<string, string> = {
    fr: `${BASE_URL}${page.fr}`,
    en: `${BASE_URL}${page.en}`,
  };
  for (const locale of PAGE_LOCALES) {
    if (getLocalizedPage(page.slug, locale)) {
      out[HREFLANG[locale]] = `${BASE_URL}/${locale}/${page.slug}`;
    }
  }
  return out;
}

export function contentMetadata(
  slug: string,
  defaults: { title: string; description: string; canonical?: string; alternates?: any }
) {
  const c = content(slug);
  const extra = localizedAlternates(slug);
  const alternates = defaults.alternates
    ? {
        ...defaults.alternates,
        ...(Object.keys(extra).length > 0
          ? { languages: withRegionalVariants({ ...defaults.alternates.languages, ...extra }) }
          : {}),
      }
    : Object.keys(extra).length > 0
      ? { languages: withRegionalVariants(extra) }
      : undefined;

  return {
    title: c('meta_title', defaults.title),
    description: c('meta_description', defaults.description),
    ...(defaults.canonical
      ? { alternates: { canonical: defaults.canonical, ...alternates } }
      : alternates
        ? { alternates }
        : {}),
  };
}

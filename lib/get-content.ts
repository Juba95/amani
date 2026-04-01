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
export function contentMetadata(
  slug: string,
  defaults: { title: string; description: string; canonical?: string; alternates?: any }
) {
  const c = content(slug);
  return {
    title: c('meta_title', defaults.title),
    description: c('meta_description', defaults.description),
    ...(defaults.canonical
      ? {
          alternates: {
            canonical: defaults.canonical,
            ...defaults.alternates,
          },
        }
      : defaults.alternates
        ? { alternates: defaults.alternates }
        : {}),
  };
}

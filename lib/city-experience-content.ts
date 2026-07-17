/**
 * Contenu long des expériences des 10 pages villes dédiées (chauffeur-prive-*).
 * Généré par le script (OUT_DIR=content/city-experience-details) ou écrit à la
 * main. FR uniquement (ces pages sont en français). Lecture fs — serveur/build.
 *
 * Réutilise le format bilingue produit par generate-experience-details.mjs :
 * on ne lit ici que la partie « fr ».
 */
import fs from 'fs';
import path from 'path';
import { experienceSlug } from './experience-details';

export interface CityExpDetailFr {
  slug: string;
  index: number;
  title: string;
  intro: string[];
  steps: string[];
  included: string[];
  tip: string;
}

const DIR = path.join(process.cwd(), 'content', 'city-experience-details');
const HOME_IMG = path.join(process.cwd(), 'public', 'images', 'home');

/** Slug d'une expérience de ville (déterministe, partagé avec le script). */
export function cityExpSlug(titleFr: string): string {
  return experienceSlug(titleFr);
}

/** Extrait la partie FR d'un fichier bilingue {fr,en}. */
function toFr(raw: any): CityExpDetailFr[] {
  return (raw?.experiences ?? []).map((e: any) => ({
    slug: e.slug,
    index: e.index,
    title: e.title?.fr ?? e.title,
    intro: e.intro?.fr ?? [],
    steps: (e.steps ?? []).map((s: any) => s?.fr ?? s),
    included: e.included?.fr ?? [],
    tip: e.tip?.fr ?? '',
  }));
}

/** Toutes les expériences détaillées d'une page ville, ou [] si non généré. */
export function getCityExpContent(pageSlug: string): CityExpDetailFr[] {
  try {
    const raw = JSON.parse(fs.readFileSync(path.join(DIR, `${pageSlug}.json`), 'utf-8'));
    return toFr(raw);
  } catch {
    return [];
  }
}

/** Une expérience précise, ou null. */
export function getCityExpDetail(pageSlug: string, expSlug: string): CityExpDetailFr | null {
  return getCityExpContent(pageSlug).find((e) => e.slug === expSlug) ?? null;
}

/** Slug de page → image héros existante (public/images/home/<key>.jpg). */
const IMG_MAP: Record<string, string> = {
  'chauffeur-prive-paris': 'paris',
  'chauffeur-prive-nice': 'nice',
  'chauffeur-prive-cannes': 'cannes',
  'chauffeur-prive-monaco': 'monaco',
  'chauffeur-prive-saint-tropez': 'sainttropez',
  'chauffeur-prive-lyon': 'lyon',
  'chauffeur-prive-bordeaux': 'bordeaux',
  'chauffeur-prive-deauville': 'deauville',
  'chauffeur-prive-megeve': 'megeve',
  'chauffeur-prive-marseille': 'marseille',
};

export function getCityExpImage(pageSlug: string): string | null {
  const key = IMG_MAP[pageSlug];
  if (key && fs.existsSync(path.join(HOME_IMG, `${key}.jpg`))) {
    return `/images/home/${key}.jpg`;
  }
  return null;
}

/** Paires (page, exp) générées — pour generateStaticParams des routes. */
export function getCityExpParams(pageSlug: string): { exp: string }[] {
  return getCityExpContent(pageSlug).map((e) => ({ exp: e.slug }));
}

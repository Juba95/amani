/**
 * Détails d'expériences par destination — contenu long généré via script
 * (scripts/generate-experience-details.mjs) et stocké en JSON dans
 * content/experience-details/<citySlug>.json.
 *
 * Tant qu'une ville n'a pas son fichier, ses cartes « 5 expériences »
 * restent non cliquables : le site fonctionne avec une couverture partielle.
 * Lecture par fs (build/serveur uniquement — ne pas importer côté client).
 */
import fs from 'fs';
import path from 'path';

export interface ExperienceDetail {
  slug: string;
  /** Index (0-4) de l'expérience dans destination.experiences */
  index: number;
  title: { fr: string; en: string };
  intro: { fr: string[]; en: string[] };
  steps: { fr: string; en: string }[];
  included: { fr: string[]; en: string[] };
  tip: { fr: string; en: string };
}

export interface CityExperienceDetails {
  city: string; // slug destination
  experiences: ExperienceDetail[];
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'experience-details');

/** Slug d'expérience déterministe, dérivé du titre EN (partagé avec le script). */
export function experienceSlug(titleEn: string): string {
  return titleEn
    .replace(/œ/g, 'oe').replace(/Œ/g, 'oe')
    .replace(/æ/g, 'ae').replace(/Æ/g, 'ae')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’']/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

/** Détails d'une ville, ou null si pas encore générés. */
export function getCityExperienceDetails(citySlug: string): CityExperienceDetails | null {
  try {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, `${citySlug}.json`), 'utf-8');
    return JSON.parse(raw) as CityExperienceDetails;
  } catch {
    return null;
  }
}

/** Détail d'une expérience précise, ou null. */
export function getExperienceDetail(citySlug: string, expSlug: string): ExperienceDetail | null {
  const city = getCityExperienceDetails(citySlug);
  return city?.experiences.find((e) => e.slug === expSlug) ?? null;
}

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'destinations');
const CREDITS_FILE = path.join(process.cwd(), 'content', 'image-credits.json');

/**
 * Image héros d'une expérience, par ordre de priorité :
 *  1. <ville>--<exp>.webp — image IA dédiée à l'expérience
 *  2. <ville>.jpg         — photo réelle Wikimedia (fetch-wikimedia-images.mjs)
 *  3. <ville>.webp        — image IA de la ville (generate-experience-images.mjs)
 * null si rien (pages valides sans image — couverture progressive).
 */
export function getExperienceImage(citySlug: string, expSlug?: string): string | null {
  if (expSlug && fs.existsSync(path.join(IMAGES_DIR, `${citySlug}--${expSlug}.webp`))) {
    return `/images/destinations/${citySlug}--${expSlug}.webp`;
  }
  if (fs.existsSync(path.join(IMAGES_DIR, `${citySlug}.jpg`))) {
    return `/images/destinations/${citySlug}.jpg`;
  }
  if (fs.existsSync(path.join(IMAGES_DIR, `${citySlug}.webp`))) {
    return `/images/destinations/${citySlug}.webp`;
  }
  return null;
}

/**
 * Crédit licence d'une photo Wikimedia (obligatoire pour CC BY / BY-SA).
 * Retourne une ligne prête à afficher, ou null pour les images IA/absentes.
 */
export function getImageCredit(citySlug: string, imageSrc: string | null): string | null {
  if (!imageSrc || !imageSrc.endsWith('.jpg')) return null;
  try {
    const credits = JSON.parse(fs.readFileSync(CREDITS_FILE, 'utf-8'));
    const c = credits[citySlug];
    if (!c) return null;
    return [c.artist, c.license, 'Wikimedia Commons'].filter(Boolean).join(' · ');
  } catch {
    return null;
  }
}

/** Toutes les paires (ville, expérience) générées — pour generateStaticParams/sitemap. */
export function getAllExperienceDetailParams(): { slug: string; exp: string }[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.json'));
  } catch {
    return [];
  }
  const out: { slug: string; exp: string }[] = [];
  for (const f of files) {
    const city = f.replace(/\.json$/, '');
    const data = getCityExperienceDetails(city);
    if (!data) continue;
    for (const e of data.experiences) out.push({ slug: city, exp: e.slug });
  }
  return out;
}

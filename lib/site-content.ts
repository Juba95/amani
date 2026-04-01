/**
 * Couche de stockage des contenus éditables par page — JSON sur disque
 * Fichier : /data/site-content.json (volume persistant dans Coolify)
 *
 * Structure :
 * {
 *   "_meta": { "version": 1, "updatedAt": "..." },
 *   "_global": { "phone": "...", "email": "...", ... },
 *   "chauffeur-prive-paris": { "meta_title": "...", "hero_title": "...", ... },
 *   ...
 * }
 */

import fs from 'fs';
import path from 'path';

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'site-content.json');

export type SiteContent = Record<string, Record<string, string>>;

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

/**
 * Lit tout le contenu du site depuis le fichier JSON
 */
export function readSiteContent(): SiteContent {
  try {
    ensureDir();
    if (!fs.existsSync(DATA_FILE)) return {};
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const data = JSON.parse(raw);
    return typeof data === 'object' && data !== null ? data : {};
  } catch {
    return {};
  }
}

/**
 * Écrit tout le contenu du site
 */
export function writeSiteContent(data: SiteContent) {
  ensureDir();
  data._meta = { version: '1', updatedAt: new Date().toISOString() };
  const json = JSON.stringify(data, null, 2);
  // Écriture atomique : on écrit dans un fichier temporaire puis on renomme
  const tmpFile = DATA_FILE + '.tmp';
  fs.writeFileSync(tmpFile, json, 'utf-8');
  fs.renameSync(tmpFile, DATA_FILE);
}

/**
 * Récupère le contenu d'une page (overrides seulement)
 */
export function getPageContent(slug: string): Record<string, string> {
  const all = readSiteContent();
  return all[slug] ?? {};
}

/**
 * Sauvegarde le contenu d'une page (merge avec l'existant)
 */
export function setPageContent(slug: string, fields: Record<string, string>) {
  const all = readSiteContent();
  all[slug] = { ...fields };
  writeSiteContent(all);
}

/**
 * Supprime le contenu d'une page (retour aux valeurs par défaut)
 */
export function deletePageContent(slug: string) {
  const all = readSiteContent();
  delete all[slug];
  writeSiteContent(all);
}

/**
 * Récupère le contenu global (téléphone, email, CTA, etc.)
 */
export function getGlobalContent(): Record<string, string> {
  return getPageContent('_global');
}

/**
 * Liste toutes les pages qui ont des overrides
 */
export function listEditedPages(): string[] {
  const all = readSiteContent();
  return Object.keys(all).filter(k => !k.startsWith('_'));
}

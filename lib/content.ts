/**
 * Couche de stockage contenus éditables — JSON sur disque
 * Fichier : /data/content.json (volume persistant dans Coolify)
 */

import fs from 'fs';
import path from 'path';

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'content.json');

export interface ContentBlock {
  id: string;
  label: string;       // nom affiché dans le backoffice
  page: string;        // page concernée (ex: "accueil", "flotte", "contact")
  field: string;       // champ (ex: "hero_title", "hero_subtitle")
  value: string;       // contenu actuel
  updatedAt: string;
}

// Contenus par défaut — initialisés si le fichier n'existe pas encore
const DEFAULT_CONTENT: ContentBlock[] = [
  {
    id: 'home_hero_title',
    label: 'Accueil — Titre principal',
    page: 'accueil',
    field: 'hero_title',
    value: 'Votre chauffeur privé à Paris',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'home_hero_subtitle',
    label: 'Accueil — Sous-titre',
    page: 'accueil',
    field: 'hero_subtitle',
    value: 'Service de chauffeur privé haut de gamme à Paris et en Île-de-France. Transferts aéroports, mise à disposition, événements.',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'fleet_hero_title',
    label: 'Flotte — Titre principal',
    page: 'flotte',
    field: 'hero_title',
    value: 'Véhicules de prestige à Paris — plus de 300 unités',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'fleet_hero_subtitle',
    label: 'Flotte — Sous-titre',
    page: 'flotte',
    field: 'hero_subtitle',
    value: 'Chez Amani Limousines, la flotte est renouvelée chaque année pour garantir que vos passagers voyagent dans des véhicules récents.',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'contact_hero_title',
    label: 'Contact — Titre principal',
    page: 'contact',
    field: 'hero_title',
    value: 'Parlez à notre équipe chauffeur privé Paris',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'contact_hero_subtitle',
    label: 'Contact — Sous-titre',
    page: 'contact',
    field: 'hero_subtitle',
    value: 'Notre équipe est disponible 24h/24, 7j/7 pour toute demande de réservation, devis sur mesure ou question logistique.',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'cta_title',
    label: 'CTA — Titre',
    page: 'global',
    field: 'cta_title',
    value: 'Réservez votre chauffeur',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'cta_subtitle',
    label: 'CTA — Sous-titre',
    page: 'global',
    field: 'cta_subtitle',
    value: 'Disponible 24h/24, 7j/7. Réponse en moins de 30 minutes.',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'phone',
    label: 'Numéro de téléphone',
    page: 'global',
    field: 'phone',
    value: '+33 6 62 02 73 44',
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'email',
    label: 'Email de contact',
    page: 'global',
    field: 'email',
    value: 'contact@amani-limousines.com',
    updatedAt: new Date().toISOString(),
  },
];

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function readContent(): ContentBlock[] {
  ensureDir();
  if (!fs.existsSync(DATA_FILE)) {
    // Première utilisation : écrire les contenus par défaut
    writeContent(DEFAULT_CONTENT);
    return DEFAULT_CONTENT;
  }
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  } catch {
    return DEFAULT_CONTENT;
  }
}

export function writeContent(blocks: ContentBlock[]) {
  ensureDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(blocks, null, 2), 'utf-8');
}

export function updateContentBlock(id: string, value: string): ContentBlock | null {
  const blocks = readContent();
  const idx = blocks.findIndex((b) => b.id === id);
  if (idx === -1) return null;
  blocks[idx].value = value;
  blocks[idx].updatedAt = new Date().toISOString();
  writeContent(blocks);
  return blocks[idx];
}

export function addContentBlock(block: Omit<ContentBlock, 'updatedAt'>): ContentBlock {
  const blocks = readContent();
  const newBlock: ContentBlock = { ...block, updatedAt: new Date().toISOString() };
  blocks.push(newBlock);
  writeContent(blocks);
  return newBlock;
}

export function deleteContentBlock(id: string): boolean {
  const blocks = readContent();
  const idx = blocks.findIndex((b) => b.id === id);
  if (idx === -1) return false;
  blocks.splice(idx, 1);
  writeContent(blocks);
  return true;
}

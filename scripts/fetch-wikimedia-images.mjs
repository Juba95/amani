#!/usr/bin/env node
/**
 * Alternative GRATUITE aux images IA : vraies photos depuis Wikipédia /
 * Wikimedia Commons (image principale de l'article de la ville, 1600 px).
 * Node ≥ 18 pur, aucune dépendance, aucune clé API.
 *
 * Usage :
 *   node scripts/fetch-wikimedia-images.mjs                 # villes sans .jpg
 *   ONLY=nice,cannes node scripts/fetch-wikimedia-images.mjs
 *   LIMIT=20 node scripts/fetch-wikimedia-images.mjs
 *
 * Sortie : public/images/destinations/<ville>.jpg (~150-400 KB)
 *          + crédits licence dans content/image-credits.json
 *
 * Priorité d'affichage sur le site : <ville>--<exp>.webp (IA dédiée)
 * > <ville>.jpg (photo réelle Wikimedia) > <ville>.webp (IA ville).
 * → une photo réelle REMPLACE l'image IA de la ville à l'affichage,
 *   sans supprimer le fichier IA.
 *
 * Les licences Commons (CC BY-SA…) exigent l'attribution : le site affiche
 * automatiquement le crédit sous l'image (stocké dans image-credits.json).
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const INPUT = path.join(ROOT, 'scripts', '.cache', 'experiences-input.json');
const OUT_DIR = path.join(ROOT, 'public', 'images', 'destinations');
const CREDITS = path.join(ROOT, 'content', 'image-credits.json');

const LIMIT = process.env.LIMIT ? Number(process.env.LIMIT) : Infinity;
const ONLY = process.env.ONLY ? new Set(process.env.ONLY.split(',').map((s) => s.trim())) : null;
const UA = 'AmaniLimousines/1.0 (https://www.amani-limousines.com; contact@amani-limousines.com)';

if (!fs.existsSync(INPUT)) {
  console.error('❌ Lancez d’abord : npx tsx scripts/export-experiences-input.ts');
  process.exit(1);
}
fs.mkdirSync(OUT_DIR, { recursive: true });
const credits = fs.existsSync(CREDITS) ? JSON.parse(fs.readFileSync(CREDITS, 'utf-8')) : {};

async function api(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url.slice(0, 80)}`);
  return res.json();
}

/** Image principale (1600px) de l'article Wikipédia FR, sinon EN. */
async function findImage(nameFr, nameEn) {
  for (const [wiki, title] of [['fr', nameFr], ['en', nameEn]]) {
    try {
      const q = await api(
        `https://${wiki}.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}` +
        `&prop=pageimages&piprop=thumbnail|name&pithumbsize=1600&redirects=1&format=json&origin=*`,
      );
      const page = Object.values(q.query?.pages ?? {})[0];
      if (page?.thumbnail?.source && page?.pageimage) {
        return { url: page.thumbnail.source, file: page.pageimage };
      }
    } catch { /* essaie la langue suivante */ }
  }
  return null;
}

/** Auteur + licence depuis Commons (obligatoire pour CC BY / BY-SA). */
async function findCredit(fileName) {
  try {
    const q = await api(
      `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(fileName)}` +
      `&prop=imageinfo&iiprop=extmetadata&format=json&origin=*`,
    );
    const meta = Object.values(q.query?.pages ?? {})[0]?.imageinfo?.[0]?.extmetadata;
    if (!meta) return null;
    const strip = (h) => (h ?? '').replace(/<[^>]+>/g, '').trim();
    const artist = strip(meta.Artist?.value);
    const license = strip(meta.LicenseShortName?.value);
    return { artist: artist || 'Wikimedia Commons', license: license || '' };
  } catch {
    return null;
  }
}

const all = JSON.parse(fs.readFileSync(INPUT, 'utf-8'));
let queue = all.filter((c) => (ONLY ? ONLY.has(c.city) : true))
  .filter((c) => !fs.existsSync(path.join(OUT_DIR, `${c.city}.jpg`)))
  .slice(0, LIMIT);

console.log(`Wikimedia · ${queue.length} villes à traiter (gratuit)`);
let ok = 0, miss = 0, ko = 0;
for (const city of queue) {
  try {
    const img = await findImage(city.cityName.fr, city.cityName.en);
    if (!img) { miss++; console.log(`∅ ${city.city}: pas d'image d'article`); continue; }
    const res = await fetch(img.url, { headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error(`download ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 20_000) { miss++; console.log(`∅ ${city.city}: image trop petite`); continue; }
    fs.writeFileSync(path.join(OUT_DIR, `${city.city}.jpg`), buf);
    const credit = await findCredit(img.file);
    if (credit) credits[city.city] = credit;
    ok++;
    process.stdout.write(`\r✓ ${ok} photos (${miss} sans image, ${ko} erreurs) — dernière : ${city.city}      `);
    await new Promise((r) => setTimeout(r, 300)); // courtoisie API Wikimedia
  } catch (e) {
    ko++;
    console.error(`\n✗ ${city.city}: ${e.message}`);
  }
}
fs.mkdirSync(path.dirname(CREDITS), { recursive: true });
fs.writeFileSync(CREDITS, JSON.stringify(credits, null, 1));
console.log(`\nTerminé : ${ok} photos, ${miss} sans image dispo, ${ko} erreurs. Crédits → content/image-credits.json`);

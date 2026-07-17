#!/usr/bin/env node
/**
 * Génère les images héros des destinations via l'API OpenAI (gpt-image-1).
 * Node ≥ 18 pur, AUCUNE dépendance — Mac ou Google Cloud Shell.
 *
 * Par défaut : 1 image par VILLE (partagée par la page ville et ses 5 pages
 * expériences) → 297 images. Mode par expérience disponible (5× plus cher).
 *
 * Usage :
 *   npx tsx scripts/export-experiences-input.ts          (si pas déjà fait)
 *   OPENAI_API_KEY=sk-... node scripts/generate-experience-images.mjs
 *
 * Options (env) :
 *   QUALITY=medium         low | medium | high   (défaut : medium)
 *   PER=city               city | experience     (défaut : city)
 *   CONCURRENCY=3          appels parallèles (l'API image limite plus bas)
 *   LIMIT=5  ONLY=nice,cannes
 *
 * Coût (1536×1024) : low ≈ 0,016 $/img · medium ≈ 0,063 $ · high ≈ 0,25 $
 *   → 297 villes en medium ≈ 18 € · 1485 expériences en medium ≈ 90 €
 * Sortie : public/images/destinations/<ville>.webp (≈ 100-200 KB)
 *          ou <ville>--<exp>.webp en mode experience.
 * Reprise auto : les fichiers existants sont sautés.
 *
 * NB : gpt-image-1 exige une organisation OpenAI « verified »
 * (platform.openai.com → Settings → Organization → Verify).
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const INPUT = path.join(ROOT, 'scripts', '.cache', 'experiences-input.json');
const OUT_DIR = path.join(ROOT, 'public', 'images', 'destinations');

const API_KEY = process.env.OPENAI_API_KEY;
const QUALITY = process.env.QUALITY || 'medium';
const PER = process.env.PER || 'city';
const CONCURRENCY = Number(process.env.CONCURRENCY || 3);
const LIMIT = process.env.LIMIT ? Number(process.env.LIMIT) : Infinity;
const ONLY = process.env.ONLY ? new Set(process.env.ONLY.split(',').map((s) => s.trim())) : null;

if (!API_KEY) {
  console.error('❌ OPENAI_API_KEY manquant.');
  process.exit(1);
}
if (!fs.existsSync(INPUT)) {
  console.error('❌ Lancez d’abord : npx tsx scripts/export-experiences-input.ts');
  process.exit(1);
}
fs.mkdirSync(OUT_DIR, { recursive: true });

/** Prompt photo éditoriale — pas de texte, pas de logos, pas de visages. */
function imagePrompt(scene) {
  return `High-end editorial travel photograph: ${scene}. Golden-hour natural light, shot on a full-frame camera with a 35mm lens, gentle depth of field, rich muted tones with warm highlights, photorealistic, magazine quality. No text, no watermark, no logos, no recognizable faces in the foreground.`;
}

async function generateImage(scene, outFile, attempt = 1) {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt: imagePrompt(scene),
      size: '1536x1024',
      quality: QUALITY,
      output_format: 'webp',
      output_compression: 80,
      n: 1,
    }),
  });

  if (res.status === 429 || res.status >= 500) {
    if (attempt > 5) throw new Error(`API ${res.status} après 5 tentatives`);
    await new Promise((r) => setTimeout(r, Math.min(2 ** attempt * 2000, 60000)));
    return generateImage(scene, outFile, attempt + 1);
  }
  if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 300)}`);

  const data = await res.json();
  fs.writeFileSync(outFile, Buffer.from(data.data[0].b64_json, 'base64'));
}

const all = JSON.parse(fs.readFileSync(INPUT, 'utf-8'));
const jobs = [];
for (const city of all) {
  if (ONLY && !ONLY.has(city.city)) continue;
  if (PER === 'experience') {
    for (const exp of city.experiences) {
      const f = path.join(OUT_DIR, `${city.city}--${exp.slug}.webp`);
      if (!fs.existsSync(f)) {
        jobs.push({ file: f, scene: `${exp.title.en}, near ${city.cityName.en}, ${city.country.en}`, label: `${city.city}/${exp.slug}` });
      }
    }
  } else {
    const f = path.join(OUT_DIR, `${city.city}.webp`);
    if (!fs.existsSync(f)) {
      jobs.push({ file: f, scene: `iconic scenic view of ${city.cityName.en}, ${city.country.en}`, label: city.city });
    }
  }
}
const queue = jobs.slice(0, LIMIT);
const unitCost = { low: 0.016, medium: 0.063, high: 0.25 }[QUALITY] ?? 0.063;
console.log(`gpt-image-1 · qualité ${QUALITY} · mode ${PER} · ${queue.length} images à générer (≈ ${(queue.length * unitCost).toFixed(2)} $)`);
if (!queue.length) { console.log('✅ Rien à faire.'); process.exit(0); }

let ok = 0, ko = 0;
const t0 = Date.now();
const workers = Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const job = queue.shift();
    try {
      await generateImage(job.scene, job.file);
      ok++;
      process.stdout.write(`\r✓ ${ok} images (${ko} échecs) — dernière : ${job.label}          `);
    } catch (e) {
      ko++;
      console.error(`\n✗ ${job.label}: ${e.message}`);
    }
  }
});
await Promise.all(workers);
console.log(`\nTerminé : ${ok} images, ${ko} échecs, en ${((Date.now() - t0) / 60000).toFixed(1)} min.`);
if (ko) console.log('Relancez le script pour reprendre les échecs.');

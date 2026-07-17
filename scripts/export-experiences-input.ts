/**
 * Exporte les 297 destinations × 5 expériences du registre vers un JSON plat
 * consommé par scripts/generate-experience-details.mjs (qui, lui, tourne en
 * Node pur — sans TypeScript — sur n'importe quelle machine).
 *
 *   npx tsx scripts/export-experiences-input.ts
 *   → scripts/.cache/experiences-input.json
 */
import fs from 'fs';
import path from 'path';
import { ALL_DESTINATIONS } from '../lib/destinations';
import { experienceSlug } from '../lib/experience-details';

const OUT_DIR = path.join(process.cwd(), 'scripts', '.cache');
fs.mkdirSync(OUT_DIR, { recursive: true });

const rows = ALL_DESTINATIONS.map((d) => ({
  city: d.slug,
  cityName: d.name,          // {fr,en}
  country: d.country,        // {fr,en}
  airport: d.airport ?? null,
  experiences: d.experiences.map((e, index) => ({
    index,
    slug: experienceSlug(e.title.en),
    title: e.title,          // {fr,en}
    teaser: e.teaser,        // {fr,en}
    duration: e.duration,    // {fr,en}
    price: e.price,
  })),
}));

// Garde-fou : slugs uniques par ville
for (const r of rows) {
  const seen = new Set<string>();
  for (const e of r.experiences) {
    if (seen.has(e.slug)) throw new Error(`Slug dupliqué ${r.city}/${e.slug}`);
    seen.add(e.slug);
  }
}

const out = path.join(OUT_DIR, 'experiences-input.json');
fs.writeFileSync(out, JSON.stringify(rows, null, 1));
console.log(`${rows.length} villes, ${rows.reduce((n, r) => n + r.experiences.length, 0)} expériences → ${out}`);

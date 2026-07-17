/**
 * Exporte les 10 pages villes dédiées (CITY_EXPERIENCES) vers le format
 * d'entrée du générateur — pour rendre leurs 5 expériences cliquables comme
 * celles du registre /destinations.
 *
 *   npx tsx scripts/export-city-experiences-input.ts
 *   → scripts/.cache/city-experiences-input.json
 */
import fs from 'fs';
import path from 'path';
import { CITY_EXPERIENCES } from '../lib/city-experiences';
import { experienceSlug } from '../lib/experience-details';

const OUT_DIR = path.join(process.cwd(), 'scripts', '.cache');
fs.mkdirSync(OUT_DIR, { recursive: true });

const rows = Object.entries(CITY_EXPERIENCES).map(([pageSlug, data]) => ({
  city: pageSlug, // clé = slug de la page (ex. chauffeur-prive-cannes)
  cityName: { fr: data.city, en: data.city },
  country: { fr: 'France', en: 'France' },
  airport: null,
  experiences: data.experiences.map((e, index) => ({
    index,
    slug: experienceSlug(e.title),
    title: { fr: e.title, en: e.title },
    teaser: { fr: e.teaser, en: e.teaser },
    duration: { fr: e.duration, en: e.duration },
    price: e.price,
  })),
}));

// Slugs uniques par page
for (const r of rows) {
  const seen = new Set<string>();
  for (const e of r.experiences) {
    if (seen.has(e.slug)) throw new Error(`Slug dupliqué ${r.city}/${e.slug}`);
    seen.add(e.slug);
  }
}

const out = path.join(OUT_DIR, 'city-experiences-input.json');
fs.writeFileSync(out, JSON.stringify(rows, null, 1));
console.log(`${rows.length} pages villes, ${rows.reduce((n, r) => n + r.experiences.length, 0)} expériences → ${out}`);

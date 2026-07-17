#!/usr/bin/env node
/**
 * Génère le contenu long FR/EN des expériences de destination via l'API OpenAI.
 * Node ≥ 18 pur (fetch natif), AUCUNE dépendance npm — tourne sur votre Mac
 * ou dans Google Cloud Shell.
 *
 * Usage :
 *   1. npx tsx scripts/export-experiences-input.ts        (une fois, dans le repo)
 *   2. OPENAI_API_KEY=sk-... node scripts/generate-experience-details.mjs
 *
 * Options (variables d'environnement) :
 *   MODEL=gpt-4o-mini      modèle (défaut : gpt-4o-mini — largement suffisant)
 *   CONCURRENCY=6          appels parallèles (défaut : 6)
 *   LIMIT=10               ne traite que N villes (test)
 *   ONLY=nice,cannes       ne traite que ces slugs
 *
 * Reprise : les villes déjà présentes dans content/experience-details/ sont
 * sautées — relancez le script autant de fois que nécessaire.
 * Coût estimé (gpt-4o-mini, 297 villes) : ≈ 1,50 €.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const INPUT = path.join(ROOT, 'scripts', '.cache', 'experiences-input.json');
const OUT_DIR = path.join(ROOT, 'content', 'experience-details');

const API_KEY = process.env.OPENAI_API_KEY;
const MODEL = process.env.MODEL || 'gpt-4o-mini';
const CONCURRENCY = Number(process.env.CONCURRENCY || 6);
const LIMIT = process.env.LIMIT ? Number(process.env.LIMIT) : Infinity;
const ONLY = process.env.ONLY ? new Set(process.env.ONLY.split(',').map((s) => s.trim())) : null;

if (!API_KEY) {
  console.error('❌ OPENAI_API_KEY manquant.\n   OPENAI_API_KEY=sk-... node scripts/generate-experience-details.mjs');
  process.exit(1);
}
if (!fs.existsSync(INPUT)) {
  console.error('❌ Fichier d’entrée manquant. Lancez d’abord :\n   npx tsx scripts/export-experiences-input.ts');
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

/** Schéma JSON imposé à la réponse du modèle (une expérience). */
const RESPONSE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['intro_fr', 'intro_en', 'steps', 'included_fr', 'included_en', 'tip_fr', 'tip_en'],
  properties: {
    intro_fr: { type: 'array', minItems: 2, maxItems: 2, items: { type: 'string' } },
    intro_en: { type: 'array', minItems: 2, maxItems: 2, items: { type: 'string' } },
    steps: {
      type: 'array', minItems: 4, maxItems: 4,
      items: {
        type: 'object', additionalProperties: false,
        required: ['fr', 'en'],
        properties: { fr: { type: 'string' }, en: { type: 'string' } },
      },
    },
    included_fr: { type: 'array', minItems: 4, maxItems: 4, items: { type: 'string' } },
    included_en: { type: 'array', minItems: 4, maxItems: 4, items: { type: 'string' } },
    tip_fr: { type: 'string' },
    tip_en: { type: 'string' },
  },
};

function buildPrompt(city, exp) {
  return `Tu écris pour Amani Limousines, maison française de chauffeur privé haut de gamme (Mercedes, prix fixes, chauffeur dédié). Rédige le contenu d'une page « expérience » :

VILLE : ${city.cityName.fr} / ${city.cityName.en} (${city.country.fr})
EXPÉRIENCE : ${exp.title.fr} / ${exp.title.en}
ACCROCHE EXISTANTE (ne pas répéter mot à mot) : ${exp.teaser.fr}
DURÉE : ${exp.duration.fr} — PRIX : à partir de ${exp.price} €

Produis un JSON avec :
- intro_fr : 2 paragraphes français (80-110 mots chacun). Ton élégant, concret, factuel (lieux réels, distances plausibles). Le 1er paragraphe plante le décor et l'intérêt ; le 2e explique le déroulé avec le chauffeur (véhicule à disposition, prise en charge à l'hôtel, souplesse). Utilise « votre chauffeur » et « ${exp.title.fr} » naturellement. Pas de superlatifs creux, pas de tirets cadratins, varie les longueurs de phrases.
- intro_en : traduction naturelle anglaise des 2 paragraphes (pas littérale, idiomatique).
- steps : 4 étapes d'itinéraire, chacune UNE phrase courte (fr + en), chronologiques, avec lieux précis.
- included_fr / included_en : 4 puces courtes (3-6 mots) de ce qui est inclus (ex. « Chauffeur dédié toute la durée », « Véhicule Mercedes premium », « Prise en charge à votre hôtel », « Attente incluse à chaque étape » — adapte à l'expérience).
- tip_fr / tip_en : 1 conseil pratique d'initié (meilleure saison, horaire, réservation restaurant…), 1-2 phrases.`;
}

async function callAPI(city, exp, attempt = 1) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: 'user', content: buildPrompt(city, exp) }],
      response_format: {
        type: 'json_schema',
        json_schema: { name: 'experience_detail', strict: true, schema: RESPONSE_SCHEMA },
      },
      temperature: 0.8,
    }),
  });

  if (res.status === 429 || res.status >= 500) {
    if (attempt > 5) throw new Error(`API ${res.status} après 5 tentatives`);
    const wait = Math.min(2 ** attempt * 1000, 30000);
    await new Promise((r) => setTimeout(r, wait));
    return callAPI(city, exp, attempt + 1);
  }
  if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 300)}`);

  const data = await res.json();
  const content = JSON.parse(data.choices[0].message.content);
  return {
    slug: exp.slug,
    index: exp.index,
    title: exp.title,
    intro: { fr: content.intro_fr, en: content.intro_en },
    steps: content.steps,
    included: { fr: content.included_fr, en: content.included_en },
    tip: { fr: content.tip_fr, en: content.tip_en },
  };
}

async function processCity(city) {
  const outFile = path.join(OUT_DIR, `${city.city}.json`);
  if (fs.existsSync(outFile)) return 'skip';
  const experiences = [];
  for (const exp of city.experiences) {
    experiences.push(await callAPI(city, exp));
  }
  fs.writeFileSync(outFile, JSON.stringify({ city: city.city, experiences }, null, 1));
  return 'ok';
}

const all = JSON.parse(fs.readFileSync(INPUT, 'utf-8'));
let queue = all.filter((c) => (ONLY ? ONLY.has(c.city) : true));
queue = queue.filter((c) => !fs.existsSync(path.join(OUT_DIR, `${c.city}.json`))).slice(0, LIMIT);

const done = all.length - queue.length;
console.log(`Modèle ${MODEL} · ${queue.length} villes à générer (${done} déjà présentes/hors périmètre) · ${CONCURRENCY} en parallèle`);
if (!queue.length) { console.log('✅ Rien à faire.'); process.exit(0); }

let ok = 0, ko = 0;
const t0 = Date.now();
const workers = Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const city = queue.shift();
    try {
      await processCity(city);
      ok++;
      const rate = ok / ((Date.now() - t0) / 60000);
      process.stdout.write(`\r✓ ${ok} villes (${ko} échecs) — ${rate.toFixed(1)} villes/min — dernière : ${city.city}        `);
    } catch (e) {
      ko++;
      console.error(`\n✗ ${city.city}: ${e.message}`);
    }
  }
});
await Promise.all(workers);
console.log(`\nTerminé : ${ok} générées, ${ko} échecs, en ${((Date.now() - t0) / 60000).toFixed(1)} min.`);
if (ko) console.log('Relancez simplement le script pour reprendre les échecs.');

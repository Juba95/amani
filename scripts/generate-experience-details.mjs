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
// Entrée/sortie surchargeable (permet de réutiliser le même générateur pour
// les pages villes dédiées : INPUT_FILE + OUT_DIR)
const INPUT = process.env.INPUT_FILE
  ? path.resolve(ROOT, process.env.INPUT_FILE)
  : path.join(ROOT, 'scripts', '.cache', 'experiences-input.json');
const OUT_DIR = process.env.OUT_DIR
  ? path.resolve(ROOT, process.env.OUT_DIR)
  : path.join(ROOT, 'content', 'experience-details');

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

/**
 * Angles d'attaque tournants : sur 1 485 pages sœurs, la variation structurelle
 * est ce qui distingue un corpus rédactionnel d'un gabarit généré. L'angle est
 * choisi déterministiquement (hash du slug) → reproductible, jamais uniforme.
 */
const ANGLES = [
  'Ouvre le 1er paragraphe par un détail sensoriel précis (lumière, son, odeur, matière) observé sur place.',
  'Ouvre le 1er paragraphe par un fait historique ou une anecdote datée, vérifiable et peu connue.',
  'Ouvre le 1er paragraphe par la géographie : relief, distance exacte, route empruntée.',
  'Ouvre le 1er paragraphe par une scène vécue à hauteur de voyageur (un moment précis de la journée).',
  'Ouvre le 1er paragraphe par un chiffre concret (altitude, année, superficie, nombre) qui situe le lieu.',
  'Ouvre le 1er paragraphe par un contraste (avant/après, haut/bas, agitation/calme) propre au lieu.',
];

function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function buildPrompt(city, exp) {
  const angle = ANGLES[hashCode(`${city.city}/${exp.slug}`) % ANGLES.length];
  return `Tu es un rédacteur de guides de voyage français expérimenté. Tu écris pour Amani Limousines, maison française de chauffeur privé haut de gamme (Mercedes, prix fixes, chauffeur dédié). Rédige le contenu d'une page « expérience » :

VILLE : ${city.cityName.fr} / ${city.cityName.en} (${city.country.fr})
EXPÉRIENCE : ${exp.title.fr} / ${exp.title.en}
ACCROCHE EXISTANTE (ne pas répéter mot à mot) : ${exp.teaser.fr}
DURÉE : ${exp.duration.fr} — PRIX : à partir de ${exp.price} €

Produis un JSON avec :
- intro_fr : 2 paragraphes français (80-110 mots chacun). ${angle} Le 1er paragraphe plante le décor et l'intérêt ; le 2e explique le déroulé avec le chauffeur (véhicule à disposition, prise en charge à l'hôtel, souplesse, on déguste/visite pendant qu'il conduit). Glisse UNE fois, naturellement, « chauffeur privé » à proximité du nom de la ville ou de la région (jamais en début de phrase). Nomme des lieux réels et des distances plausibles.
- intro_en : réécriture anglaise idiomatique des 2 paragraphes (pas une traduction littérale — un rédacteur anglophone natif).
- steps : 4 étapes d'itinéraire, chacune UNE phrase courte (fr + en), chronologiques, avec lieux précis et un horaire ou une durée quand c'est pertinent.
- included_fr / included_en : 4 puces courtes (3-6 mots) de ce qui est inclus, adaptées à CETTE expérience (chauffeur dédié, véhicule, prise en charge, attente, réservation…).
- tip_fr / tip_en : 1 conseil pratique d'initié, spécifique et actionnable (meilleure saison, horaire précis, réservation, place où s'asseoir…), 1-2 phrases.

RÈGLES DE STYLE (impératives, FR comme EN) :
- Écriture humaine : varie fortement la longueur des phrases (mélange courtes et longues), autorise une inversion ou une incise de temps en temps.
- INTERDITS absolus : « niché au cœur de », « au cœur de », « incontournable », « véritable », « unique », « exceptionnel », « n'hésitez pas », « que vous soyez… ou… », « offre une expérience », « plongez », « laissez-vous », « émerveill- », les tirets cadratins (—), les listes de trois adjectifs, toute phrase commençant par un participe présent.
- Zéro superlatif creux : chaque affirmation s'appuie sur un fait (nom, date, distance, altitude, spécialité).
- Ne commence jamais les deux paragraphes par la même tournure ; ne commence pas par le nom de la ville.
- Le contenu doit apprendre quelque chose au lecteur qui connaît déjà la destination.`;
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
      // Les modèles de raisonnement (gpt-5*, o*) n'acceptent pas temperature ;
      // pour de la rédaction, l'effort minimal est plus rapide et suffisant.
      ...(/^(gpt-5|o\d)/.test(MODEL)
        ? { reasoning_effort: process.env.REASONING || 'minimal' }
        : { temperature: 0.9 }),
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

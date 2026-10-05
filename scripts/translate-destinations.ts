/**
 * translate-destinations.ts — version allemande et espagnole des pages destination
 * ─────────────────────────────────────────────────────────────────────────────
 * Les fiches de lib/destinations/regions/*.ts sont rédigées en français et en
 * anglais. Ce script en produit la version allemande et espagnole et l'écrit
 * dans content/destinations-i18n/<slug>.json, un fichier par ville. Les fichiers
 * région ne sont pas touchés : lib/destinations/index.ts fusionne la couche i18n
 * au chargement.
 *
 * Pourquoi traduire plutôt que régénérer : le contenu français existe déjà, il
 * est relu et il porte le bon ton. Le réécrire de zéro coûterait plus cher et
 * ferait diverger les versions.
 *
 * Usage :
 *   ANTHROPIC_API_KEY=sk-... npx tsx scripts/translate-destinations.ts
 *
 * Variables d'environnement :
 *   ONLY=paris,milan     limiter à certaines villes (défaut : la liste CITIES)
 *   MODEL=claude-opus-5-5   modèle (défaut : claude-opus-5-5)
 *   EFFORT=low           effort de raisonnement (défaut : low — c'est de la
 *                        traduction, pas du raisonnement)
 *   CONCURRENCY=4        villes traitées en parallèle
 *   DRY_RUN=1            n'appelle pas l'API, affiche seulement le plan
 *   FORCE=1              régénère même si le fichier existe déjà
 */

import fs from 'node:fs';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { ALL_DESTINATIONS, getDestination } from '../lib/destinations';
import type { Destination } from '../lib/destinations';

// ── Les 30 villes du premier lot ────────────────────────────────────────────
// France : Île-de-France et ses châteaux, les Alpes, la Riviera côté
// Saint-Tropez, puis de grandes villes. Hors France : les destinations qui
// pèsent dans la demande européenne.
export const CITIES_FR = [
  'versailles-ville', 'fontainebleau-ville', 'giverny-village', 'chartres',
  'annecy', 'courchevel', 'val-d-isere', 'meribel',
  'antibes', 'saint-paul-de-vence', 'eze-village', 'cap-ferrat',
  'strasbourg', 'aix-en-provence', 'reims',
];

export const CITIES_WORLD = [
  'london', 'geneva', 'milan', 'rome', 'florence',
  'venice', 'barcelona', 'madrid', 'lisbon', 'amsterdam',
  'brussels', 'zurich', 'prague', 'vienna', 'como',
];

export const CITIES = [...CITIES_FR, ...CITIES_WORLD];

const OUT_DIR = path.resolve(__dirname, '..', 'content', 'destinations-i18n');
const MODEL = process.env.MODEL || 'claude-opus-5-5';
const EFFORT = (process.env.EFFORT || 'low') as 'low' | 'medium' | 'high';
const CONCURRENCY = Number(process.env.CONCURRENCY || 4);
const DRY_RUN = process.env.DRY_RUN === '1';
const FORCE = process.env.FORCE === '1';
const ONLY = process.env.ONLY ? process.env.ONLY.split(',').map((s) => s.trim()) : null;

// Tarifs au million de jetons, pour afficher le coût réel en fin de course.
const PRICING: Record<string, { in: number; out: number }> = {
  'claude-opus-5-5': { in: 4, out: 20 },
  'claude-opus-5': { in: 5, out: 25 },
  'claude-sonnet-5-5': { in: 2, out: 10 },
  'claude-sonnet-5': { in: 2, out: 10 },
  'claude-haiku-4-5': { in: 1, out: 5 },
};

const SYSTEM = `Tu traduis les pages destination d'Amani Limousines, un service de chauffeur privé haut de gamme basé à Paris qui opère dans toute l'Europe.

Le lecteur réserve depuis son pays pour un voyage ailleurs : un Allemand à Munich qui prépare trois jours à Milan, un Mexicain qui vient à Paris. Il ne connaît ni la France ni la société. Écris pour lui.

Règles :
- Ce n'est pas du mot à mot. Réécris comme l'aurait fait un rédacteur natif qui connaît la ville, en gardant les faits, les lieux, les distances et les durées à l'identique.
- Garde le registre du texte source : factuel, précis, sans emphase commerciale.
- Les noms de lieux prennent leur forme usuelle dans la langue cible (Mailand en allemand, Milán en espagnol ; Genf / Ginebra ; Florenz / Florencia).
- Le balisage **gras** du texte source doit se retrouver dans la traduction, sur l'équivalent sémantique.
- L'expression « chauffeur privé » doit apparaître une fois dans les paragraphes d'introduction, à proximité du nom de la ville : « Privatchauffeur in Mailand », « chófer privado en Milán ».
- Interdits : « niché au cœur de », « incontournable », « véritable », « unique », « laissez-vous », les tirets cadratins, les listes de trois adjectifs, toute phrase commençant par un participe présent. En allemand, pas de « Tauchen Sie ein ». En espagnol, pas de « sumérjase ».
- Varie la longueur des phrases. Un rédacteur humain alterne court et long.

Réponds UNIQUEMENT par l'objet JSON demandé, sans texte avant ni après, sans bloc de code.`;

function buildPrompt(d: Destination): string {
  const payload = {
    ville: { fr: d.name.fr, en: d.name.en },
    pays: { fr: d.country.fr, en: d.country.en },
    aeroport: d.airport ?? null,
    transfert_aeroport: { fr: d.airportTransfer.fr, en: d.airportTransfer.en },
    intro: { fr: d.intro.fr, en: d.intro.en },
    experiences: d.experiences.map((e) => ({
      titre: { fr: e.title.fr, en: e.title.en },
      accroche: { fr: e.teaser.fr, en: e.teaser.en },
      duree: { fr: e.duration.fr, en: e.duration.en },
    })),
    faq: d.faq.map((f) => ({
      question: { fr: f.q.fr, en: f.q.en },
      reponse: { fr: f.a.fr, en: f.a.en },
    })),
  };

  return `Voici la fiche destination à porter en allemand (de) et en espagnol (es).

SOURCE :
${JSON.stringify(payload, null, 2)}

Rends exactement cette structure JSON, avec les mêmes longueurs qu'en français (${d.intro.fr.length} paragraphes d'intro, ${d.experiences.length} expériences, ${d.faq.length} questions) :

{
  "name": { "de": "", "es": "" },
  "country": { "de": "", "es": "" },
  "airportTransfer": { "de": "", "es": "" },
  "intro": { "de": ["", ""], "es": ["", ""] },
  "experiences": [{ "title": { "de": "", "es": "" }, "teaser": { "de": "", "es": "" }, "duration": { "de": "", "es": "" } }],
  "faq": [{ "q": { "de": "", "es": "" }, "a": { "de": "", "es": "" } }]
}`;
}

interface Translated {
  name: { de: string; es: string };
  country: { de: string; es: string };
  airportTransfer: { de: string; es: string };
  intro: { de: string[]; es: string[] };
  experiences: { title: { de: string; es: string }; teaser: { de: string; es: string }; duration: { de: string; es: string } }[];
  faq: { q: { de: string; es: string }; a: { de: string; es: string } }[];
}

/** Vérifie que la réponse a bien la forme attendue avant de l'écrire sur disque. */
function validate(t: any, d: Destination): asserts t is Translated {
  const langs = ['de', 'es'] as const;
  for (const k of ['name', 'country', 'airportTransfer'] as const) {
    for (const l of langs) {
      if (typeof t?.[k]?.[l] !== 'string' || !t[k][l].trim()) throw new Error(`${k}.${l} manquant`);
    }
  }
  for (const l of langs) {
    if (!Array.isArray(t?.intro?.[l]) || t.intro[l].length !== d.intro.fr.length) {
      throw new Error(`intro.${l} : ${t?.intro?.[l]?.length} paragraphes au lieu de ${d.intro.fr.length}`);
    }
  }
  if (!Array.isArray(t?.experiences) || t.experiences.length !== d.experiences.length) {
    throw new Error(`experiences : ${t?.experiences?.length} au lieu de ${d.experiences.length}`);
  }
  if (!Array.isArray(t?.faq) || t.faq.length !== d.faq.length) {
    throw new Error(`faq : ${t?.faq?.length} au lieu de ${d.faq.length}`);
  }
  for (const e of t.experiences) {
    for (const l of langs) {
      if (!e?.title?.[l] || !e?.teaser?.[l] || !e?.duration?.[l]) throw new Error(`expérience incomplète en ${l}`);
    }
  }
  for (const f of t.faq) {
    for (const l of langs) {
      if (!f?.q?.[l] || !f?.a?.[l]) throw new Error(`faq incomplète en ${l}`);
    }
  }
}

function extractJson(text: string): any {
  const cleaned = text.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('aucun objet JSON dans la réponse');
  return JSON.parse(cleaned.slice(start, end + 1));
}

const client = new Anthropic();
let inTokens = 0;
let outTokens = 0;

async function translateCity(slug: string): Promise<'ok' | 'skip' | 'fail'> {
  const d = getDestination(slug);
  if (!d) {
    console.error(`  ✗ ${slug} — absente du registre`);
    return 'fail';
  }
  const outFile = path.join(OUT_DIR, `${slug}.json`);
  if (!FORCE && fs.existsSync(outFile)) {
    console.log(`  · ${slug} — déjà fait`);
    return 'skip';
  }
  if (DRY_RUN) {
    console.log(`  → ${slug} (${d.name.fr}) — ${d.experiences.length} expériences, ${d.faq.length} questions`);
    return 'skip';
  }

  let lastErr: unknown;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await client.messages.create({
        model: MODEL,
        max_tokens: 16000,
        system: SYSTEM,
        output_config: { effort: EFFORT },
        messages: [{ role: 'user', content: buildPrompt(d) }],
      });
      inTokens += res.usage.input_tokens;
      outTokens += res.usage.output_tokens;

      const text = res.content.filter((b) => b.type === 'text').map((b: any) => b.text).join('');
      const parsed = extractJson(text);
      validate(parsed, d);

      fs.writeFileSync(outFile, JSON.stringify({ slug, ...parsed }, null, 2) + '\n', 'utf8');
      console.log(`  ✓ ${slug} (${d.name.fr} → ${parsed.name.de} / ${parsed.name.es})`);
      return 'ok';
    } catch (err) {
      lastErr = err;
      if (attempt < 3) console.log(`  ↻ ${slug} — essai ${attempt} échoué (${(err as Error).message}), on retente`);
    }
  }
  console.error(`  ✗ ${slug} — ${(lastErr as Error)?.message}`);
  return 'fail';
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const slugs = ONLY ?? CITIES;
  const known = new Set(ALL_DESTINATIONS.map((d) => d.slug));
  const missing = slugs.filter((s) => !known.has(s));
  if (missing.length) {
    console.error(`Villes inconnues du registre : ${missing.join(', ')}`);
    process.exit(1);
  }

  console.log(`${MODEL} · effort ${EFFORT} · ${slugs.length} villes · ${CONCURRENCY} en parallèle${DRY_RUN ? ' · SIMULATION' : ''}\n`);

  const queue = [...slugs];
  const tally = { ok: 0, skip: 0, fail: 0 };
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
      while (queue.length) {
        const slug = queue.shift()!;
        tally[await translateCity(slug)]++;
      }
    }),
  );

  const p = PRICING[MODEL];
  const cost = p ? (inTokens / 1e6) * p.in + (outTokens / 1e6) * p.out : null;
  console.log(`\n${tally.ok} générées · ${tally.skip} ignorées · ${tally.fail} en échec`);
  console.log(`Jetons : ${inTokens.toLocaleString('fr-FR')} en entrée, ${outTokens.toLocaleString('fr-FR')} en sortie`);
  if (cost !== null) console.log(`Coût : ${cost.toFixed(2)} $ (~${(cost * 0.92).toFixed(2)} €)`);
  if (tally.fail) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

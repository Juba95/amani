/**
 * translate-city-pages.ts — version anglaise, allemande et espagnole des cinq
 * villes à page dédiée (Paris, Nice, Cannes, Saint-Tropez, Bordeaux).
 * ─────────────────────────────────────────────────────────────────────────────
 * Ces villes ne sont pas dans le registre des destinations : elles ont leur
 * propre page française (/chauffeur-prive-paris) et anglaise
 * (/en/private-chauffeur-paris), écrites à la main. Il n'existe donc rien à
 * traduire au format du registre.
 *
 * Ce script construit la fiche à partir de ce qui existe déjà en français —
 * l'introduction de lib/page-defaults.ts et les cinq expériences de
 * lib/city-experiences.ts — et la porte en anglais, allemand et espagnol.
 * Les faits aéroport sont fournis en dur ci-dessous plutôt que laissés au
 * modèle : une distance inventée se verrait tout de suite.
 *
 * Le résultat alimente lib/destinations/regions/france-cities.ts (entrées
 * marquées translationOnly) puis la couche i18n habituelle.
 *
 * Usage :
 *   ANTHROPIC_API_KEY=sk-... npx tsx scripts/translate-city-pages.ts
 */

import fs from 'node:fs';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { CITY_EXPERIENCES } from '../lib/city-experiences';
import { PAGE_DEFAULTS } from '../lib/page-defaults';

const MODEL = process.env.MODEL || 'claude-opus-5-5';
const EFFORT = (process.env.EFFORT || 'low') as 'low' | 'medium' | 'high';
const OUT = path.resolve(__dirname, '..', 'content', 'city-pages-i18n');

/**
 * Faits aéroport et villes voisines, saisis à la main. Le modèle ne doit pas
 * inventer de distance : il reformule ces phrases, il ne les recalcule pas.
 */
const CITY_FACTS: Record<string, {
  slug: string; name: string; airport: string; airportTransfer: string; nearby: string[];
}> = {
  'chauffeur-prive-paris': {
    slug: 'paris', name: 'Paris',
    airport: 'Roissy-Charles-de-Gaulle (CDG) · Orly (ORY) · Le Bourget (LBG)',
    airportTransfer:
      "Roissy-Charles-de-Gaulle est à 25 km du centre, soit 45 à 70 minutes selon l'heure. Orly est à 18 km au sud, 30 à 50 minutes. Le Bourget, terminal d'aviation d'affaires, est à 15 km, 25 minutes.",
    nearby: ['versailles-ville', 'fontainebleau-ville', 'giverny-village', 'chartres'],
  },
  'chauffeur-prive-nice': {
    slug: 'nice', name: 'Nice',
    airport: 'Nice-Côte d’Azur (NCE)',
    airportTransfer:
      "L'aéroport de Nice-Côte d'Azur est à 7 km du centre, 15 à 25 minutes par la promenade des Anglais. Monaco est à 30 km, Cannes à 33 km.",
    nearby: ['antibes', 'eze-village', 'cap-ferrat', 'saint-paul-de-vence'],
  },
  'chauffeur-prive-cannes': {
    slug: 'cannes', name: 'Cannes',
    airport: 'Nice-Côte d’Azur (NCE)',
    airportTransfer:
      "Cannes est à 27 km de l'aéroport de Nice, 30 à 45 minutes par l'A8 selon le trafic. Antibes est à 11 km, Saint-Tropez à 90 km par la côte.",
    nearby: ['antibes', 'saint-paul-de-vence', 'eze-village'],
  },
  'chauffeur-prive-saint-tropez': {
    slug: 'saint-tropez', name: 'Saint-Tropez',
    airport: 'La Môle – Saint-Tropez (LTT) · Nice-Côte d’Azur (NCE)',
    airportTransfer:
      "L'aérodrome de La Môle est à 15 km, 25 minutes. Depuis Nice, comptez 110 km et deux heures hors saison, davantage l'été : la départementale qui dessert le golfe est à voie unique sur plusieurs kilomètres.",
    nearby: ['antibes', 'saint-paul-de-vence'],
  },
  'chauffeur-prive-bordeaux': {
    slug: 'bordeaux', name: 'Bordeaux',
    airport: 'Bordeaux-Mérignac (BOD)',
    airportTransfer:
      "Bordeaux-Mérignac est à 12 km du centre, 20 à 30 minutes. Saint-Émilion est à 40 km à l'est, Médoc et Margaux à 30 km au nord-ouest.",
    nearby: [],
  },
};

const SYSTEM = `Tu rédiges les pages destination d'Amani Limousines, un service de chauffeur privé haut de gamme basé à Paris qui opère dans toute l'Europe.

Le lecteur réserve depuis son pays pour un voyage en France : un Allemand à Hambourg, un Mexicain à Guadalajara. Il ne connaît ni la ville ni la société. Écris pour lui.

Tu travailles à partir d'un texte français existant. Tu le portes en anglais, en allemand et en espagnol, et tu complètes ce qui manque (deuxième paragraphe d'introduction, trois questions fréquentes) en t'appuyant UNIQUEMENT sur les faits fournis : les expériences listées, les informations aéroport, les villes voisines. N'invente aucune distance, aucun prix, aucun horaire qui ne figure pas dans la source.

Règles d'écriture :
- Pas de mot à mot. Un rédacteur natif de chaque langue, qui connaît la ville.
- Registre factuel et précis, sans emphase commerciale.
- Les noms de lieux prennent leur forme usuelle dans la langue cible.
- L'expression « chauffeur privé » apparaît une fois dans l'introduction, près du nom de la ville : "private chauffeur in Nice", "Privatchauffeur in Nizza", "chófer privado en Niza". Jamais en début de phrase.
- Le balisage **gras** entoure un fait saillant par paragraphe d'introduction.
- ESPAGNOL : espagnol neutre, lisible au Mexique, en Colombie et en Argentine autant qu'en Espagne. Emploie « auto » ou « vehículo », jamais « coche ». « Estacionar », jamais « aparcar ». Pas de « vosotros ». Vouvoiement en « usted ».
- Emploie les verbes simples : ist, hat, liegt / is, has / es, está, tiene. Évite gilt als, fungiert als, se alza, sirve como, constituye un.
- Interdits : atemberaubend, malerisch, unvergesslich, Juwel, im Herzen, Zeugnis, nicht nur … sondern auch ; espectacular, impresionante, emblemático, joya, en el corazón, no solo … sino también ; breathtaking, nestled, in the heart of, must-visit, not only … but also. Pas de tiret cadratin, pas de liste de trois adjectifs, aucune phrase ouverte par un participe présent ou un gérondif.
- Varie la longueur des phrases.

Réponds UNIQUEMENT par l'objet JSON demandé, sans texte avant ni après, sans bloc de code.`;

const client = new Anthropic();
let inTok = 0, outTok = 0;

async function run(key: string) {
  const facts = CITY_FACTS[key];
  const src = PAGE_DEFAULTS[key] ?? {};
  const exps = CITY_EXPERIENCES[key].experiences;

  const prompt = `VILLE : ${facts.name} (France)

INTRODUCTION FRANÇAISE EXISTANTE :
${src.intro ?? ''}

AÉROPORT : ${facts.airport}
TRANSFERT AÉROPORT (faits à reformuler, pas à recalculer) :
${facts.airportTransfer}

LES CINQ EXPÉRIENCES (français) :
${JSON.stringify(exps, null, 2)}

Rends ce JSON. Deux paragraphes d'introduction par langue (80-110 mots chacun) : le premier reprend l'introduction française, le second s'appuie sur les expériences ci-dessus. Trois questions fréquentes par langue, dont une sur le transfert aéroport.

{
  "name": { "en": "", "de": "", "es": "" },
  "country": { "en": "France", "de": "Frankreich", "es": "Francia" },
  "airportTransfer": { "fr": "", "en": "", "de": "", "es": "" },
  "intro": { "fr": ["",""], "en": ["",""], "de": ["",""], "es": ["",""] },
  "experiences": [{ "title": { "en": "", "de": "", "es": "" }, "teaser": { "en": "", "de": "", "es": "" }, "duration": { "en": "", "de": "", "es": "" } }],
  "faq": [{ "q": { "fr": "", "en": "", "de": "", "es": "" }, "a": { "fr": "", "en": "", "de": "", "es": "" } }]
}`;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await client.messages.create({
        model: MODEL, max_tokens: 16000, system: SYSTEM,
        output_config: { effort: EFFORT },
        messages: [{ role: 'user', content: prompt }],
      });
      inTok += res.usage.input_tokens; outTok += res.usage.output_tokens;
      const text = res.content.filter((b) => b.type === 'text').map((b: any) => b.text).join('');
      const cleaned = text.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
      const parsed = JSON.parse(cleaned.slice(cleaned.indexOf('{'), cleaned.lastIndexOf('}') + 1));

      if (parsed.experiences?.length !== exps.length) throw new Error('nombre d’expériences incorrect');
      if (!parsed.faq?.length) throw new Error('faq vide');
      for (const l of ['en', 'de', 'es']) {
        if (parsed.intro?.[l]?.length !== 2) throw new Error(`intro.${l} : 2 paragraphes attendus`);
      }

      fs.writeFileSync(
        path.join(OUT, `${facts.slug}.json`),
        JSON.stringify({ slug: facts.slug, source: key, airport: facts.airport,
                         nearby: facts.nearby, price: exps.map((e) => e.price),
                         frTitles: exps.map((e) => e.title), frTeasers: exps.map((e) => e.teaser),
                         frDurations: exps.map((e) => e.duration), frIntro: src.intro, ...parsed }, null, 2) + '\n',
        'utf8',
      );
      console.log(`  ✓ ${facts.slug} (${facts.name} → ${parsed.name.de} / ${parsed.name.es})`);
      return;
    } catch (err) {
      if (attempt === 3) { console.error(`  ✗ ${facts.slug} — ${(err as Error).message}`); throw err; }
      console.log(`  ↻ ${facts.slug} — essai ${attempt} (${(err as Error).message})`);
    }
  }
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  console.log(`${MODEL} · effort ${EFFORT} · ${Object.keys(CITY_FACTS).length} villes\n`);
  for (const key of Object.keys(CITY_FACTS)) await run(key);
  const cost = (inTok / 1e6) * 4 + (outTok / 1e6) * 20;
  console.log(`\nJetons : ${inTok.toLocaleString('fr-FR')} entrée, ${outTok.toLocaleString('fr-FR')} sortie`);
  console.log(`Coût : ${cost.toFixed(2)} $ (~${(cost * 0.92).toFixed(2)} €)`);
}

main().catch((e) => { console.error(e); process.exit(1); });

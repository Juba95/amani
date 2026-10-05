/**
 * translate-site-pages.ts — pages de service en allemand, espagnol, arabe et chinois
 * ─────────────────────────────────────────────────────────────────────────────
 * Source : le texte réellement publié sur les pages française et anglaise, lu
 * sur le site en train de tourner plutôt que dans les fichiers TSX. Les pages
 * sont écrites à la main, chacune avec sa mise en page ; parser leur JSX serait
 * fragile et casserait au premier remaniement. Le rendu HTML, lui, est stable.
 *
 * Résultat : content/pages-i18n/<slug>.<locale>.json, consommé par
 * lib/site-pages.ts et rendu par components/LocalizedPageView.tsx.
 *
 * Usage :
 *   ANTHROPIC_API_KEY=sk-... BASE=http://localhost:3100 npx tsx scripts/translate-site-pages.ts
 *
 * Variables :
 *   ONLY=contact,corporate   limiter à certains slugs
 *   LANGS=de,es              limiter aux langues voulues
 *   FORCE=1                  régénérer même si le fichier existe
 */

import fs from 'node:fs';
import path from 'node:path';
import Anthropic from '@anthropic-ai/sdk';
import { SITE_PAGES, PAGE_LOCALES, type PageLocale } from '../lib/site-pages';

const BASE = process.env.BASE || 'http://localhost:3100';
const MODEL = process.env.MODEL || 'claude-opus-5-5';
const EFFORT = (process.env.EFFORT || 'low') as 'low' | 'medium' | 'high';
const OUT = path.resolve(__dirname, '..', 'content', 'pages-i18n');
const FORCE = process.env.FORCE === '1';
const ONLY = process.env.ONLY?.split(',').map((s) => s.trim());
const LANGS = (process.env.LANGS?.split(',').map((s) => s.trim()) ?? PAGE_LOCALES) as PageLocale[];
const CONCURRENCY = Number(process.env.CONCURRENCY || 4);

const LANG_NAME: Record<PageLocale, string> = {
  de: 'allemand', es: 'espagnol neutre (lisible au Mexique, en Colombie et en Espagne)',
  ar: 'arabe standard moderne', zh: 'chinois simplifié',
};

/** Consignes propres à chaque langue, au-delà de la traduction. */
const LANG_RULES: Record<PageLocale, string> = {
  de: `Noms composés soudés : Privatchauffeur, Flughafentransfer, Chauffeurservice. Vouvoiement en « Sie ». Verbes simples (ist, hat, liegt) plutôt que gilt als, fungiert als, dient als, stellt dar. Interdits : atemberaubend, malerisch, unvergesslich, Juwel, Herzstück, im Herzen, Zeugnis, wegweisend, Tauchen Sie ein, nicht nur … sondern auch.`,
  es: `Espagnol neutre : « auto » ou « vehículo », jamais « coche » ; « estacionar », jamais « aparcar » ; vouvoiement en « usted », jamais « vosotros ». Verbes simples (es, está, tiene) plutôt que se alza, sirve como, constituye un. Interdits : sumérjase, espectacular, impresionante, emblemático, pintoresco, joya, en el corazón, no solo … sino también.`,
  ar: `Arabe standard moderne, registre soutenu mais direct. Les noms propres européens gardent leur forme usuelle en arabe. Les chiffres en chiffres arabes occidentaux (123). Vouvoiement de politesse.`,
  zh: `Chinois simplifié, registre professionnel. Les noms de lieux prennent leur forme chinoise usuelle (巴黎, 戴高乐机场). Pas de traduction littérale des tournures françaises.`,
};

const SYSTEM = `Tu adaptes les pages de service d'Amani Limousines, un service de chauffeur privé haut de gamme basé à Paris qui opère dans toute l'Europe.

Le lecteur réserve depuis son pays pour un voyage en France ou en Europe. Il ne connaît ni la société ni le marché français. Écris pour lui.

Tu reçois le texte publié de la page, en français et en anglais. Tu le portes dans la langue demandée en respectant les faits : prix, distances, durées, noms de lieux, numéros de téléphone. N'invente rien qui ne figure pas dans la source. Si la source ne dit pas un prix, n'en annonce aucun.

Tu structures le résultat : un chapeau, puis des sections de texte, certaines accompagnées de cartes courtes, et une FAQ quand la source en contient une. Reprends le découpage de la source, n'en ajoute pas.

La page produite ne contient que du texte et un bouton vers la page de réservation. Elle n'embarque ni formulaire, ni simulateur de prix, ni carte, ni galerie. Ne décris donc jamais un champ à remplir ni un outil à utiliser sur cette page : dis ce que le lecteur obtient et par quel moyen le demander (téléphone, WhatsApp, courriel, bouton de réservation).

Règles d'écriture :
- Pas de mot à mot. Un rédacteur natif qui connaît le métier.
- Registre factuel et précis, sans emphase commerciale.
- L'expression « chauffeur privé » traduite apparaît une fois dans le chapeau, jamais en début de phrase, et désigne la prestation, pas la société : Amani Limousines est un service de chauffeur, pas un chauffeur.
- Le balisage **gras** entoure au plus un fait saillant par paragraphe.
- Pas de tiret cadratin, pas de liste de trois adjectifs, aucune phrase ouverte par un participe présent ou un gérondif. Varie la longueur des phrases.

Réponds UNIQUEMENT par l'objet JSON demandé, sans texte avant ni après, sans bloc de code.`;

/** Texte lisible d'une page publiée : on retire le gabarit commun. */
async function fetchPageText(url: string): Promise<string> {
  const res = await fetch(`${BASE}${url}`);
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  const html = await res.text();
  const body = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/g, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/g, ' ')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
    .replace(/&[a-z]+;/g, ' ');
  const lines = body.split('\n').map((l) => l.trim()).filter((l) => l.length > 1);
  // Les mêmes blocs reviennent sur toutes les pages (menu, pied de page) :
  // on coupe après la dernière ligne utile pour ne pas les envoyer au modèle.
  return [...new Set(lines)].join('\n').slice(0, 9000);
}

const client = new Anthropic();
let inTok = 0, outTok = 0;

async function translate(slug: string, locale: PageLocale, frText: string, enText: string) {
  const file = path.join(OUT, `${slug}.${locale}.json`);
  if (!FORCE && fs.existsSync(file)) { console.log(`  · ${slug}.${locale} — déjà fait`); return; }

  const prompt = `PAGE : ${slug}
LANGUE CIBLE : ${LANG_NAME[locale]}
CONSIGNES DE LANGUE : ${LANG_RULES[locale]}

TEXTE PUBLIÉ — VERSION FRANÇAISE :
${frText}

TEXTE PUBLIÉ — VERSION ANGLAISE :
${enText}

Rends ce JSON :
{
  "tag": "surtitre court, 2-5 mots",
  "h1": "titre de la page",
  "intro": "un paragraphe de 60-90 mots",
  "sections": [
    { "title": "", "paragraphs": ["", ""], "cards": [{ "title": "", "text": "" }] }
  ],
  "faq": [{ "q": "", "a": "" }],
  "meta": { "title": "55-65 caractères, finit par | Amani Limousines", "description": "150-158 caractères" },
  "cta": { "title": "", "text": "", "button": "" }
}

Le champ "cards" est facultatif : ne le mets que si la source présente une liste de points. Le champ "faq" est facultatif : ne le mets que si la source contient des questions. Vise 3 à 5 sections.`;

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
      const p = JSON.parse(cleaned.slice(cleaned.indexOf('{'), cleaned.lastIndexOf('}') + 1));

      if (!p.h1 || !p.intro || !Array.isArray(p.sections) || p.sections.length < 2) {
        throw new Error('structure incomplète');
      }
      if (!p.meta?.title || !p.meta?.description) throw new Error('meta manquante');

      fs.writeFileSync(file, JSON.stringify({ slug, locale, ...p }, null, 2) + '\n', 'utf8');
      console.log(`  ✓ ${slug}.${locale} — ${p.sections.length} sections${p.faq ? `, ${p.faq.length} questions` : ''}`);
      return;
    } catch (err) {
      if (attempt === 3) { console.error(`  ✗ ${slug}.${locale} — ${(err as Error).message}`); return; }
      console.log(`  ↻ ${slug}.${locale} — essai ${attempt} (${(err as Error).message})`);
    }
  }
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const pages = SITE_PAGES.filter((p) => !ONLY || ONLY.includes(p.slug));
  console.log(`${MODEL} · effort ${EFFORT} · ${pages.length} pages × ${LANGS.length} langues\n`);

  const jobs: { slug: string; locale: PageLocale; fr: string; en: string }[] = [];
  for (const p of pages) {
    let fr = '', en = '';
    try { fr = await fetchPageText(p.fr); } catch (e) { console.error(`  ✗ source fr ${p.slug} — ${(e as Error).message}`); }
    try { en = await fetchPageText(p.en); } catch (e) { console.error(`  ✗ source en ${p.slug} — ${(e as Error).message}`); }
    if (!fr && !en) { console.error(`  ✗ ${p.slug} — aucune source lisible, page ignorée`); continue; }
    for (const locale of LANGS) jobs.push({ slug: p.slug, locale, fr, en });
  }

  const queue = [...jobs];
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
    while (queue.length) {
      const j = queue.shift()!;
      await translate(j.slug, j.locale, j.fr, j.en);
    }
  }));

  const cost = (inTok / 1e6) * 4 + (outTok / 1e6) * 20;
  console.log(`\nJetons : ${inTok.toLocaleString('fr-FR')} entrée, ${outTok.toLocaleString('fr-FR')} sortie`);
  console.log(`Coût : ${cost.toFixed(2)} $ (~${(cost * 0.92).toFixed(2)} €)`);
}

main().catch((e) => { console.error(e); process.exit(1); });

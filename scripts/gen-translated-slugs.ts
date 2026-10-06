/**
 * gen-translated-slugs.ts — liste des villes traduites, lisible côté client
 *
 * Le sélecteur de langue tourne dans le navigateur et ne peut pas lire
 * content/destinations-i18n. Sans cette liste il proposerait l'allemand et
 * l'espagnol sur les 297 villes, alors que 35 seulement sont traduites, et
 * enverrait le visiteur sur une 404.
 *
 * Lancé par scripts/translate-destinations.ts après chaque génération.
 * À la main : npx tsx scripts/gen-translated-slugs.ts
 */
import fs from 'node:fs';
import path from 'node:path';
import { ALL_DESTINATIONS } from '../lib/destinations';

const CONTENT = path.resolve(__dirname, '..', 'content', 'destinations-i18n');
const OUT = path.resolve(__dirname, '..', 'lib', 'destinations', 'translated-slugs.generated.ts');

const fromFiles = fs.existsSync(CONTENT)
  ? fs.readdirSync(CONTENT).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''))
  : [];
// Les villes à page dédiée portent leur traduction dans le registre.
const inline = ALL_DESTINATIONS.filter((d) => d.translationOnly).map((d) => d.slug);
const slugs = [...new Set([...fromFiles, ...inline])].sort();

const body = `/**
 * Fichier généré par scripts/gen-translated-slugs.ts — ne pas modifier à la main.
 *
 * Villes disposant d'une page destination en allemand et en espagnol. Lu par le
 * sélecteur de langue, qui tourne côté client et ne peut pas lire le contenu.
 */
export const TRANSLATED_CITY_SLUGS: ReadonlySet<string> = new Set([
${slugs.map((s) => `  '${s}',`).join('\n')}
]);
`;

fs.writeFileSync(OUT, body, 'utf8');
console.log(`${slugs.length} villes écrites dans lib/destinations/translated-slugs.generated.ts`);

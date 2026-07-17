# Génération du contenu des expériences (1 485 pages FR/EN)

Chaque destination du site possède 5 expériences. Ce pipeline génère pour
chacune une **page détail bilingue** (`/destinations/<ville>/<experience>` et
`/en/destinations/...`) via l'API OpenAI, avec un modèle économique.

**Coût estimé : ≈ 1-1,50 € TOUT COMPRIS** — le script fait 1 appel par
expérience, soit 297 villes × 5 = 1 485 appels gpt-4o-mini (~0,7 M tokens
d'entrée + ~1 M de sortie).

## Qualité SEO & anti-détection

Le prompt impose un style rédactionnel humain : angle d'ouverture **tournant**
d'une page à l'autre (6 angles choisis par hash du slug — sensoriel,
historique, géographique, scène vécue, chiffre, contraste), longueurs de
phrases variées, faits vérifiables obligatoires (noms, dates, distances),
mot-clé « chauffeur privé + ville » placé une seule fois naturellement, et
une liste d'interdits couvrant les tics d'écriture IA (« niché au cœur de »,
« incontournable », « laissez-vous », tirets cadratins, triplets d'adjectifs,
participes présents en tête de phrase…). L'anglais est une réécriture
idiomatique, pas une traduction littérale.

## Sur votre Mac (dans le dossier du projet)

```bash
# 1. Exporter le registre (une fois, ou après ajout de destinations)
npx tsx scripts/export-experiences-input.ts

# 2. Test sur 3 villes d'abord
OPENAI_API_KEY=sk-... LIMIT=3 node scripts/generate-experience-details.mjs

# 3. Vérifier le rendu en local
npm run dev   # → http://localhost:3000/destinations/toulouse (cartes cliquables)

# 4. Générer tout le reste (≈ 30-45 min)
OPENAI_API_KEY=sk-... node scripts/generate-experience-details.mjs

# 5. Publier
git add content/experience-details && git commit -m "content: expériences détaillées" && git push
```

## Sur Google Cloud Shell (si votre Mac doit rester libre)

```bash
git clone <votre-repo> && cd amani-nextjs
npm install --legacy-peer-deps
npx tsx scripts/export-experiences-input.ts
OPENAI_API_KEY=sk-... node scripts/generate-experience-details.mjs
git add content/experience-details && git commit -m "content: expériences détaillées" && git push
```

## Options

| Variable | Défaut | Rôle |
|---|---|---|
| `OPENAI_API_KEY` | — | **obligatoire** |
| `MODEL` | `gpt-4o-mini` | modèle (suffisant ; `gpt-4o` pour + de finesse) |
| `CONCURRENCY` | `6` | appels parallèles |
| `LIMIT` | ∞ | ne traiter que N villes (test) |
| `ONLY` | — | slugs précis : `ONLY=nice,cannes` |

## Bon à savoir

- **Reprise automatique** : une ville déjà générée (fichier présent dans
  `content/experience-details/`) est sautée. Relancez le script après un
  échec ou une coupure, il reprend où il en était.
- **Couverture progressive** : le site fonctionne à tout moment. Une ville
  sans fichier garde ses cartes non cliquables ; dès que son JSON est
  commité + déployé, les cartes deviennent des liens et les pages existent.
- **Regénérer une ville** : supprimez son fichier
  (`rm content/experience-details/nice.json`) puis relancez le script.
- La sitemap intègre automatiquement les nouvelles pages au build.

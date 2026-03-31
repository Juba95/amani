# AMANI LIMOUSINES — Projet Next.js

## Installation rapide

```bash
# 1. Extraire le projet
tar -xzf amani-limousines-nextjs-final.tar.gz
cd amani-nextjs

# 2. Installer les dépendances
npm install

# 3. Lancer en local
npm run dev
# → Ouvre http://localhost:3000
```

## Déploiement sur Vercel (gratuit)

```bash
# Option A : via Vercel CLI
npm install -g vercel
vercel
# Ton site est en ligne sur xxx.vercel.app

# Option B : via GitHub (recommandé)
# 1. Pousse le projet sur GitHub
# 2. Va sur vercel.com → "Import Project" → sélectionne ton repo
# 3. Vercel déploie automatiquement à chaque git push
```

Ensuite dans les Settings Vercel → Domains → ajoute `amani-limousines.com`
et `www.amani-limousines.com`.


---

## COMMENT MODIFIER LE SITE

### Outil recommandé : Claude Code (terminal)

C'est l'outil le plus simple pour toi. Installe-le :

```bash
npm install -g @anthropic-ai/claude-code
```

Ensuite, dans le dossier du projet :

```bash
cd amani-nextjs
claude
```

Tu peux lui demander en français :
- "Change le prix de la Classe E à 2.80€/km"
- "Ajoute l'espagnol comme langue"
- "Crée une page pour le transfert CDG vers Hôtel Ritz"
- "Modifie le texte de la homepage"

Claude Code modifie directement les fichiers. Tu fais `git push` et Vercel redéploie.

### Alternative : VS Code (éditeur visuel)

Télécharge Visual Studio Code (gratuit) : https://code.visualstudio.com/
Ouvre le dossier `amani-nextjs` dedans. Tu vois tous les fichiers.


---

## OÙ MODIFIER QUOI

### Changer les prix

Fichier : `lib/vehicles.ts`

```typescript
// Cherche le véhicule et modifie pricePerKm ou basePrice
{
  id: 'classe_e',
  pricePerKm: 2.50,    // ← Change ce chiffre
  basePrice: 80,        // ← Prix minimum facturé
},
```

| Pour modifier... | Change la valeur de... |
|---|---|
| Prix au km Classe E/EQE | `pricePerKm` du bloc `classe_e` |
| Prix au km Classe S | `pricePerKm` du bloc `classe_s` |
| Prix au km Classe V | `pricePerKm` du bloc `classe_v` |
| Prix au km BMW Série 7 | `pricePerKm` du bloc `bmw_7` |
| Prix au km Sprinter | `pricePerKm` du bloc `sprinter` |
| Prix minimum d'une course | `basePrice` du véhicule |

### Changer les textes / traductions

Fichiers dans `locales/` :
- `locales/fr.json` — Textes français
- `locales/en.json` — Textes anglais
- `locales/ar.json` — Textes arabes
- `locales/zh.json` — Textes chinois

Ouvre le fichier, cherche le texte à modifier, change-le. Exemple :

```json
"hero": {
  "title_1": "L'excellence du transport privé,",   ← modifie ici
  "subtitle": "Transferts aéroports, mises ...",    ← ou ici
}
```

### Ajouter une langue

1. Copie `locales/fr.json` → `locales/es.json`
2. Traduis toutes les valeurs
3. Dans `lib/vehicles.ts`, ajoute `'es'` :
   ```typescript
   export const SUPPORTED_LOCALES = ['fr', 'en', 'ar', 'zh', 'es'] as const;
   ```
4. Ajoute le drapeau dans `components/Navbar.tsx` :
   ```typescript
   { code: 'es', label: 'Español', flag: '🇪🇸' },
   ```
5. `git push` → Vercel redéploie

### Ajouter un trajet prédéfini

Dans `lib/vehicles.ts`, section `PREDEFINED_ROUTES` :

```typescript
'cdg|deauville': { km: 220, minutes: 160 },
'orly|disneyland': { km: 55, minutes: 50 },
```

### Changer les photos des véhicules

Dans `lib/vehicles.ts`, modifie le champ `image` :

```typescript
{
  id: 'classe_e',
  image: '/images/classe-e-new.jpg',   // ← photo locale
  // ou
  image: 'https://ton-site.com/photo.jpg',  // ← URL externe
}
```

Si photo locale : place le fichier dans `public/images/`

### Ajouter une redirection

Dans `next.config.js`, section `redirects()`, ajoute :

```javascript
{ source: '/ancienne-url/', destination: '/nouvelle-url', permanent: true },
```

### Modifier les pages de contenu SEO

Chaque page de trajet est dans `app/` :
```
app/transfert-cdg-paris/page.tsx
app/transfert-cdg-la-defense/page.tsx
app/transfert-cdg-versailles/page.tsx
...
```

Le contenu SEO (meta title, description, H1, texte) est directement dans ces fichiers.


---

## STRUCTURE DU PROJET

```
amani-nextjs/
├── locales/             ← TRADUCTIONS (modifier ici les textes)
│   ├── fr.json
│   ├── en.json
│   ├── ar.json
│   └── zh.json
│
├── lib/
│   ├── vehicles.ts      ← PRIX + VÉHICULES (modifier ici les tarifs)
│   └── i18n.ts          ← Utilitaires traduction
│
├── components/          ← Composants visuels
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── BookingResults.tsx
│   ├── VehicleShowcase.tsx
│   ├── ServicesGrid.tsx
│   ├── EventsGrid.tsx
│   ├── TrustStrip.tsx
│   └── CTAFooter.tsx
│
├── app/
│   ├── layout.tsx       ← SEO global (schema.org, hreflang)
│   ├── page.tsx         ← Homepage FR
│   ├── [lang]/page.tsx  ← Homepage EN/AR/ZH
│   └── api/quote/       ← API calcul de prix
│
├── next.config.js       ← REDIRECTIONS 301 + headers
├── styles/globals.css   ← Thème visuel
└── tailwind.config.js   ← Couleurs
```


---

## SEO INTÉGRÉ

### Ce qui est déjà en place :
- ✅ Balises hreflang (FR, EN, AR, ZH + x-default)
- ✅ Schema.org LocalBusiness structuré
- ✅ Meta title + description uniques par page
- ✅ Open Graph tags
- ✅ Canonical URLs
- ✅ 150+ redirections 301 (anciennes URLs → nouvelles)
- ✅ Langues supprimées (ES, ZH-Hans ancien) redirigées
- ✅ Sitemap auto-généré par Next.js

### Ce qu'il reste à faire :
- [ ] Créer les pages de contenu SEO individuelles (transfert CDG → Paris, etc.)
- [ ] Rédiger le contenu unique humanisé pour chaque page
- [ ] Ajouter les balises <strong> avec MC principal + ville
- [ ] Configurer Google Search Console avec le nouveau sitemap
- [ ] Créer/optimiser la fiche Google Business Profile


---

## TARIFICATION ACTUELLE

| Véhicule | €/km | Base min | CDG→Paris (32km) | CDG→Versailles (55km) |
|---|---|---|---|---|
| Classe E / EQE | 2,50 € | 80 € | 80 € | 138 € |
| Classe S | 3,00 € | 96 € | 96 € | 165 € |
| Classe V | 2,50 € | 80 € | 80 € | 138 € |
| BMW Série 7 | 3,00 € | 96 € | 96 € | 165 € |
| Sprinter VIP | 4,00 € | 200 € | 200 € | 220 € |

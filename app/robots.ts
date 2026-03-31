import type { MetadataRoute } from 'next';

/**
 * robots.ts — Amani Limousines
 * Génère /robots.txt automatiquement via Next.js 14.
 *
 * Règles :
 *   - Tout le site autorisé (Google crawl toutes les pages)
 *   - Blocage des routes inutiles (API, fichiers internes)
 *   - Référence au sitemap pour accélérer l'indexation
 */
export default function robots(): MetadataRoute.Robots {
  const BASE = 'https://www.amani-limousines.com';

  return {
    rules: [
      {
        // Tous les robots : autoriser tout le site
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',        // Routes API internes
          '/_next/',      // Assets Next.js (déjà ignorés mais par précaution)
        ],
      },
      {
        // Bloquer GPTBot (OpenAI) — éviter l'utilisation du contenu pour entraîner des modèles
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        // Bloquer CCBot (Common Crawl — utilisé par beaucoup de LLMs)
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}

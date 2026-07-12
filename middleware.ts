import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// MIDDLEWARE AMANI LIMOUSINES
// Rôle :
//   1. Valider les codes de langue dans [lang] → évite que les slugs
//      WordPress non redirigés s'affichent comme des pages "langue inconnue"
//   2. Pour les chemins inconnus sans slash final → ajouter un "/" pour
//      déclencher les règles de redirection 301 dans next.config.js
// ============================================================

const VALID_LOCALES = new Set(['en', 'es', 'ar', 'zh']);

// Chemins valides à la racine (premier segment de l'URL)
const VALID_ROOT_SEGMENTS = new Set([
  'contact',
  'evenements',
  'securite-rapprochee',
  'mise-a-disposition',
  'transfert-prive',
  'meet-and-greet',
  'convoi-delegations',
  'excursion-privee',
  'longue-distance',
  'notre-flotte',
  'transfert-aeroport-cdg',
  'transfert-aeroport-orly',
  'transfert-cdg-paris',
  'transfert-cdg-la-defense',
  'transfert-cdg-versailles',
  'transfert-cdg-disneyland',
  'transfert-cdg-hotel-ritz',
  'transfert-cdg-hotel-george-v',
  'transfert-cdg-hotel-bristol',
  'transfert-le-bourget',
  'transfert-orly-paris',
  'transfert-cdg-gare-de-lyon',
  'transfert-cdg-gare-du-nord',
  'mentions-legales',
  'a-propos',
  'reservation',
  'adminos',
  'admin',
  'api',
  'flotte',
  // Pages SEO chauffeur privé et niches
  'chauffeur-prive-paris',
  'devenir-chauffeur',
  'experiences',
  'corporate',
  'chauffeur-mariage-paris',
  'transfert-aeroport-beauvais',
  // Pages Alpes / Haute-Savoie
  'chauffeur-prive-chamonix',
  'chauffeur-prive-megeve',
  'chauffeur-prive-haute-savoie',
  'transfert-aeroport-economique',
  // Nouvelles pages SEO villes/niches
  'chauffeur-prive-bordeaux',
  'chauffeur-prive-lyon',
  'chauffeur-prive-nice',
  'chauffeur-prive-cannes',
  'chauffeur-prive-monaco',
  'chauffeur-prive-deauville',
  'chauffeur-prive-marseille',
  'chauffeur-prive-saint-tropez',
  'garde-du-corps',
  'chauffeur-fashion-week',
  'chauffeur-mariage',
  'chauffeur-diplomatique',
  'taxi-moto',
  'chauffeur-evenements-sportifs',
  'transfert-hotel-luxe-paris',
  // Chauffeur Speaker (langues)
  'chauffeur-anglophone',
  'chauffeur-arabophone',
  'chauffeur-hispanophone',
  'chauffeur-germanophone',
  'chauffeur-mandarin',
  'chauffeur-coreen',
  'chauffeur-japonais',
  'chauffeur-russophone',
  // Devis, plan du site
  'devis',
  'plan-du-site',
  // Destinations européennes (hub + /destinations/<slug>)
  'destinations',
]);

// Bots / crawlers : jamais de redirection par langue (préserve le SEO français
// de la racine — Google doit indexer / en français)
const BOT_UA = /bot|crawl|spider|slurp|bingpreview|googlebot|yandex|baidu|duckduck|facebookexternalhit|lighthouse|pagespeed|headless/i;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ── Ne pas intercepter les ressources statiques / API ───────────────────────
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/adminos') ||
    pathname.includes('.') // fichiers statiques (images, fonts, etc.)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);

  // ── Racine : détection de langue du navigateur (visiteurs réels uniquement) ──
  // Un visiteur non francophone arrivant sur / est redirigé vers sa langue
  // (en par défaut ; es/ar/zh si détectées). Son choix manuel via le switcher
  // est mémorisé en cookie et toujours respecté.
  if (segments.length === 0) {
    // ── Anglais par défaut pour TOUS ──────────────────────────────────────
    // Seul un choix manuel de français (cookie posé par le sélecteur de
    // langue) permet de rester sur la home FR. Tout le reste → /en.
    const langCookie = req.cookies.get('amani-lang')?.value;
    if (langCookie === 'fr') return NextResponse.next();
    if (langCookie && ['en', 'es', 'ar', 'zh'].includes(langCookie)) {
      return NextResponse.redirect(new URL(`/${langCookie}`, req.url), 302);
    }
    return NextResponse.redirect(new URL('/en', req.url), 302);
  }

  const firstSegment = segments[0];

  // Locale valide (/en, /ar, /zh) → OK
  if (VALID_LOCALES.has(firstSegment)) return NextResponse.next();

  // Page racine connue → OK (ex: /notre-flotte, /contact, /evenements/...)
  if (VALID_ROOT_SEGMENTS.has(firstSegment)) return NextResponse.next();

  // ── Chemin inconnu (ancien slug WordPress ou page inexistante) ────────────
  // On laisse passer : next.config.js gère les redirections 301 des anciens
  // slugs WordPress, et Next.js affiche la page not-found pour le reste.
  // (Ne plus ajouter de trailing slash — ça crée une boucle de redirection
  //  infinie car trailingSlash n'est pas activé dans next.config.js.)
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * On exclut :
     *   - _next/static (fichiers statiques Next.js)
     *   - _next/image (optimisation d'images)
     *   - favicon.ico, icon, apple-icon
     *   - robots.txt, sitemap.xml
     */
    '/((?!_next/static|_next/image|favicon\\.ico|icon|apple-icon|robots\\.txt|sitemap\\.xml).*)',
  ],
};

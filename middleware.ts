import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// MIDDLEWARE AMANI LIMOUSINES
// Rôle :
//   1. Valider les codes de langue dans [lang] → évite que les slugs
//      WordPress non redirigés s'affichent comme des pages "langue inconnue"
//   2. Pour les chemins inconnus sans slash final → ajouter un "/" pour
//      déclencher les règles de redirection 301 dans next.config.js
// ============================================================

const VALID_LOCALES = new Set(['en', 'ar', 'zh']);

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
  'chauffeur-mariage-paris',
  'chauffeur-diplomatique',
  'taxi-moto',
  'chauffeur-evenements-sportifs',
  'transfert-hotel-luxe-paris',
  // Devis, plan du site
  'devis',
  'plan-du-site',
]);

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

  // Racine → OK
  if (segments.length === 0) return NextResponse.next();

  const firstSegment = segments[0];

  // Locale valide (/en, /ar, /zh) → OK
  if (VALID_LOCALES.has(firstSegment)) return NextResponse.next();

  // Page racine connue → OK (ex: /notre-flotte, /contact, /evenements/...)
  if (VALID_ROOT_SEGMENTS.has(firstSegment)) return NextResponse.next();

  // ── Chemin inconnu (ancien slug WordPress) ──────────────────────────────────
  // Si l'URL n'a pas de slash final, on en ajoute un pour déclencher
  // les redirections 301 définies dans next.config.js
  if (!pathname.endsWith('/')) {
    const url = req.nextUrl.clone();
    url.pathname = pathname + '/';
    return NextResponse.redirect(url, 301);
  }

  // Si l'URL a déjà un slash mais n'est toujours pas reconnue,
  // next.config.js ou le 404 prendra le relais
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

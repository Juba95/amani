/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.amani-limousines.com', pathname: '/wp-content/uploads/**' },
    ],
  },

  // ============================================================
  // REDIRECTIONS 301 — Anciennes URLs → Nouvelles URLs
  // ============================================================
  async redirects() {
    // Villes supprimées → page longue distance
    const deletedCities = [
      'montpellier','saint-etienne','perpignan','angers','menton','grasse',
      'le-havre','rouen','nantes','bordeaux','toulouse','strasbourg',
      'marseille','nice','lyon','dijon','toulon','grenoble','rennes',
      'clermont-ferrand','tours','limoges','amiens','besancon','orleans',
      'mulhouse','caen','brest','argenteuil','montreuil','saint-denis',
      'boulogne-billancourt','villeurbanne','vitry-sur-seine','colombes',
      'asniere-sur-seine','aulnay-sous-bois','courbevoie','rueil-malmaison',
      'champigny-sur-marne','aubervilliers','drancy','levallois-perret',
      'issy-les-moulineaux','noisy-le-grand','antony','neuilly-sur-seine',
      'clichy','ivry-sur-seine','pantin','bondy','fontenay-sous-bois',
      'sartrouville','clamart','bobigny','vincennes','sevran','montrouge',
      'suresnes','massy','gennevilliers','rosny-sous-bois','corbeil-essonnes',
      'evry','stains','gagny','marne-la-vallee','meaux','melun',
    ];

    const cityRedirects = deletedCities.map(city => ({
      source: `/${city}/`,
      destination: '/longue-distance',
      permanent: true,
    }));

    // Hôtels palaces — redirections vers pages dédiées (les 3 prioritaires)
    // ou vers la page hub CDG pour les autres
    const hotelPrioritaires = [
      { slug: 'hotel-ritz-paris', dest: '/transfert-cdg-hotel-ritz' },
      { slug: 'four-seasons-hotel-george-v', dest: '/transfert-cdg-hotel-george-v' },
      { slug: 'hotel-le-bristol-paris', dest: '/transfert-cdg-hotel-bristol' },
    ];
    const hotelAutres = [
      'hotel-scribe-paris-opera-by-sofitel','shangri-la-hotel-paris','hotel-plaza-athenee',
      'mandarin-oriental-paris','park-hyatt-paris-vendome','hotel-de-crillon',
      'hotel-le-meurice','the-peninsula-paris','hotel-lutetia',
      'hotel-prince-de-galles','hotel-royal-monceau','hotel-barriere-le-fouquets',
    ];

    const hotelRedirects = [
      ...hotelPrioritaires.map(({ slug, dest }) => ({
        source: `/${slug}/`,
        destination: dest,
        permanent: true,
      })),
      ...hotelAutres.map(slug => ({
        source: `/${slug}/`,
        destination: '/transfert-aeroport-cdg',
        permanent: true,
      })),
    ];

    return [
      // === Prestations ===
      { source: '/mise-a-disposition/', destination: '/mise-a-disposition', permanent: true },
      { source: '/transfert-prive/', destination: '/transfert-prive', permanent: true },
      { source: '/meet-and-greet-services/', destination: '/meet-and-greet', permanent: true },
      { source: '/convoi-de-vehicule-delegations-mission-diplomatique-ambassade/', destination: '/convoi-delegations', permanent: true },
      { source: '/protection-et-securite-nos-services-de-garde-du-corps-chez-amani-limousines/', destination: '/securite-rapprochee', permanent: true },
      { source: '/excursion-privee-france/', destination: '/excursion-privee', permanent: true },
      { source: '/prestation-de-guide-culinaire/', destination: '/excursion-privee', permanent: true },
      { source: '/transfert-longue-distance/', destination: '/longue-distance', permanent: true },

      // === Événements ===
      { source: '/paris-fashion-week/', destination: '/evenements/paris-fashion-week', permanent: true },
      { source: '/paris-air-show-siae-salon-le-bourget/', destination: '/evenements/paris-air-show', permanent: true },
      { source: '/roland-gaross-tennis-paris/', destination: '/evenements/roland-garros', permanent: true },
      { source: '/retrospective-des-festivals-de-cannes/', destination: '/evenements/festival-de-cannes', permanent: true },
      { source: '/jo-2024/', destination: '/evenements', permanent: true },
      { source: '/debarquement-normandie-80-eme-anniversaire/', destination: '/evenements', permanent: true },
      { source: '/competitions-sportive/', destination: '/evenements', permanent: true },
      { source: '/grand-prix-du-golf-lisle-adam/', destination: '/evenements', permanent: true },
      { source: '/grand-prix-damerique-hippodrome-de-vincennes/', destination: '/evenements', permanent: true },
      { source: '/grand-prix-de-larc-de-triomphe-hippodrome-de-longchamp/', destination: '/evenements', permanent: true },
      { source: '/grand-prix-de-monaco/', destination: '/evenements', permanent: true },
      { source: '/salon-nautic-salon-porte-de-versailles-nautique/', destination: '/evenements', permanent: true },
      { source: '/premiere-vision/', destination: '/evenements', permanent: true },
      { source: '/maison-et-objet-salon-villepinte-parc-des-expositions/', destination: '/evenements', permanent: true },

      // === Trajets stratégiques ===
      { source: '/paris/', destination: '/transfert-cdg-paris', permanent: true },
      { source: '/la-defense/', destination: '/transfert-cdg-la-defense', permanent: true },
      { source: '/versailles/', destination: '/transfert-cdg-versailles', permanent: true },
      { source: '/disneyland/', destination: '/transfert-cdg-disneyland', permanent: true },
      { source: '/disneyland-paris/', destination: '/transfert-cdg-disneyland', permanent: true },

      // === Fleet ===
      { source: '/fleet/mercedes-classe-e/', destination: '/notre-flotte', permanent: true },
      { source: '/fleet/mercedes-classe-s/', destination: '/notre-flotte', permanent: true },
      { source: '/fleet/mercedes-van-2-2-3/', destination: '/notre-flotte', permanent: true },
      { source: '/fleet/taxi-moto/', destination: '/notre-flotte', permanent: true },

      // === Pages EN existantes ===
      { source: '/en/provision/', destination: '/en/hourly-hire', permanent: true },
      { source: '/en/paris-airport-transfer/', destination: '/en/cdg-airport-transfer', permanent: true },
      { source: '/en/our-fleet-of-vehicles/', destination: '/en/our-fleet', permanent: true },

      // === Langues supprimées : ES, ZH-Hans (pages anciennes) ===
      { source: '/es/:path*', destination: '/', permanent: true },
      { source: '/zh-hans/:path*', destination: '/zh', permanent: true },

      // === Booking ancien ===
      { source: '/booking/', destination: '/reservation', permanent: true },

      // Villes + hôtels supprimés
      ...cityRedirects,
      ...hotelRedirects,
    ];
  },

  // ============================================================
  // HEADERS — hreflang, sécurité, noindex pages inutiles
  // ============================================================
  async headers() {
    return [
      // Sécurité sur toutes les pages
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
      // hreflang sur la homepage
      {
        source: '/',
        headers: [
          { key: 'Link', value: '<https://www.amani-limousines.com/>; rel="alternate"; hreflang="fr", <https://www.amani-limousines.com/en>; rel="alternate"; hreflang="en", <https://www.amani-limousines.com/ar>; rel="alternate"; hreflang="ar", <https://www.amani-limousines.com/zh>; rel="alternate"; hreflang="zh-Hans", <https://www.amani-limousines.com/>; rel="alternate"; hreflang="x-default"' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

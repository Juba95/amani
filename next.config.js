/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mode standalone — REQUIS pour Docker/Coolify
  output: 'standalone',

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
      'cagnes-sur-mer','hyeres','la-ciotat','la-garde','la-muy',
      'le-cannet','le-lavandou','le-pradet','roquefort-les-pins',
      'six-fours-les-plages','saint-priest','bandol','colle-sur-loup',
      'saint-jean-cap-ferrat','saint-tropez','mandelieu-la-napoule',
      'lorgues','maisons-alfort',
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
      'hotel-de-la-tremoille','hotel-de-vendome','hotel-fouquet-s-barriere',
      'hotel-molitor-paris-mgallery-by-sofitel','hotel-napoleon-paris',
      'hotel-raphael','hotel-regina-louvre','hotel-san-regis',
      'hotel-splendide-royal-paris','hotel-vernet',
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
      { source: '/grand-prix-de-monaco/', destination: '/evenements/grand-prix-monaco', permanent: true },
      { source: '/salon-nautic-salon-porte-de-versailles-nautique/', destination: '/evenements', permanent: true },
      { source: '/premiere-vision/', destination: '/evenements/salons-professionnels', permanent: true },
      { source: '/maison-et-objet-salon-villepinte-parc-des-expositions/', destination: '/evenements/salons-professionnels', permanent: true },

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

      // === Pages EN manquantes — ajoutées depuis audit Google Search Console ===
      // Prestations
      { source: '/en/meet-and-greet-services/', destination: '/en/meet-and-greet', permanent: true },
      { source: '/en/convoy-of-vehicles/', destination: '/en/delegation-transport', permanent: true },
      { source: '/en/private-transfer/', destination: '/en/cdg-airport-transfer', permanent: true },
      { source: '/en/long-distance-transfer/', destination: '/en/long-distance', permanent: true },
      { source: '/en/protection-et-securite-nos-services-de-garde-du-corps-chez-amani-limousines/', destination: '/en/close-protection', permanent: true },
      { source: '/en/private-excursion/', destination: '/en/private-excursion', permanent: true },
      // Aéroports régionaux → pages dédiées
      { source: '/en/airport-transfer-lyon/', destination: '/en/lyon-airport-transfer', permanent: true },
      { source: '/en/airport-transfer-marseille/', destination: '/en/marseille-airport-transfer', permanent: true },
      { source: '/en/airport-transfer-bordeaux/', destination: '/en/bordeaux-airport-transfer', permanent: true },
      // Événements EN
      { source: '/en/paris-fashion-week/', destination: '/en/events', permanent: true },
      { source: '/en/paris-air-show/', destination: '/en/events', permanent: true },
      { source: '/en/sports-competitions/', destination: '/en/events', permanent: true },
      { source: '/en/roland-gaross/', destination: '/en/events', permanent: true },
      { source: '/en/maison-objet/', destination: '/en/events', permanent: true },
      { source: '/en/mif-trade-show/', destination: '/en/events', permanent: true },
      { source: '/en/nautic-show/', destination: '/en/events', permanent: true },
      { source: '/en/first-vision/', destination: '/en/events', permanent: true },
      { source: '/en/grand-prix-de-larc-de-triomphe/', destination: '/en/events', permanent: true },
      { source: '/en/grand-prix-of-america/', destination: '/en/events', permanent: true },
      { source: '/en/grand-prix-of-the-golf-of-lisle-adam/', destination: '/en/events', permanent: true },
      { source: '/en/the-monaco-grand-prix/', destination: '/en/events', permanent: true },
      { source: '/en/grand-prix-damerique-hippodrome-de-vincennes/', destination: '/en/events', permanent: true },
      // Chauffeurs privés EN → page dédiée
      { source: '/en/private-chauffeur-in-paris/', destination: '/en/private-chauffeur-paris', permanent: true },
      { source: '/en/private-chauffeur-in-bordeaux/', destination: '/en/long-distance', permanent: true },
      // Pages institutionnelles EN
      { source: '/en/legal-notice/', destination: '/en/contact', permanent: true },
      { source: '/en/gtc-general-terms-and-conditions-of-sale/', destination: '/en/contact', permanent: true },
      { source: '/en/about-us-i/', destination: '/en', permanent: true },
      { source: '/en/booking/', destination: '/reservation', permanent: true },
      // Fleet pages EN
      { source: '/en/fleet/:model*', destination: '/en/our-fleet', permanent: true },
      // Pages blog/archives WordPress EN → homepage EN
      { source: '/en/author/:slug*', destination: '/en', permanent: true },
      { source: '/en/:year(\\d{4})/:month(\\d{2})/', destination: '/en', permanent: true },
      { source: '/en/hello-everyone/', destination: '/en', permanent: true },
      { source: '/en/private-driver-:slug*', destination: '/en/cdg-airport-transfer', permanent: true },
      { source: '/en/enjoy-excellence-:slug*', destination: '/en', permanent: true },

      // === Pages FR manquantes — ajoutées depuis audit Google Search Console ===
      // Chauffeurs privés dans d'autres villes
      { source: '/chauffeur-prive-a-paris/', destination: '/chauffeur-prive-paris', permanent: true },
      { source: '/chauffeur-prive-a-bordeaux/', destination: '/longue-distance', permanent: true },
      { source: '/chauffeur-prive-anglophone-expertise-et-efficacite/', destination: '/', permanent: true },
      { source: '/chauffeur-prive-nice-chantilly/', destination: '/longue-distance', permanent: true },
      { source: '/private-driver-nice-:slug*', destination: '/longue-distance', permanent: true },
      { source: '/private-driver-:slug*', destination: '/longue-distance', permanent: true },
      // Aéroports FR manquants
      { source: '/aeroports-idf/', destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/aeroport-de-paris-charles-de-gaulle-cdg-a-dauville', destination: '/longue-distance', permanent: true },
      { source: '/hippodrome-de-deauville/', destination: '/evenements/hippodrome-deauville', permanent: true },
      { source: '/hippodrome-de-deauville', destination: '/evenements/hippodrome-deauville', permanent: true },
      { source: '/aeroport-de-beauvais-tille-bva-a-dauville', destination: '/longue-distance', permanent: true },
      { source: '/aeroport-de-paris-beauvais-tille/', destination: '/transfert-aeroport-beauvais', permanent: true },
      { source: '/aeroport-de-paris-orly/', destination: '/transfert-aeroport-orly', permanent: true },
      { source: '/aeroport-de-pontoise-cormeilles-en-vexin/', destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/aeroport-de-pontoise-cormeilles-en-vexin-pox-a-dauville', destination: '/transfert-aeroport-cdg', permanent: true },
      // Transferts FR manquants
      { source: '/transfert-nationaux-internationaux/', destination: '/longue-distance', permanent: true },
      { source: '/transfert-aeroport-bordeaux/', destination: '/longue-distance', permanent: true },
      { source: '/transfert-aeroport-nice/', destination: '/longue-distance', permanent: true },
      // Flotte
      { source: '/flotte/', destination: '/notre-flotte', permanent: true },
      { source: '/fleet/land-rover-range-rover/', destination: '/notre-flotte', permanent: true },
      // Villes sans slash (certaines indexées sans trailing slash)
      { source: '/reims', destination: '/longue-distance', permanent: true },
      { source: '/nimes', destination: '/longue-distance', permanent: true },
      { source: '/grasse', destination: '/longue-distance', permanent: true },
      { source: '/bordeaux', destination: '/longue-distance', permanent: true },
      { source: '/saint-etienne', destination: '/longue-distance', permanent: true },
      { source: '/le-havre', destination: '/longue-distance', permanent: true },
      // Pages diverses FR
      { source: '/team-building/', destination: '/mise-a-disposition', permanent: true },
      { source: '/transport-oeuvre-dart/', destination: '/', permanent: true },
      { source: '/service-de-transport-chat-dans-toute-leurope/', destination: '/', permanent: true },
      { source: '/besoin-dun-deplacement-professionnel-avec-un-chauffeur-prive-qui-vous-merite/', destination: '/', permanent: true },
      { source: '/aeroport-de-toussus-le-noble/', destination: '/transfert-aeroport-cdg', permanent: true },
      // Archives WordPress FR
      { source: '/2043/', destination: '/', permanent: true },
      { source: '/test/', destination: '/', permanent: true },
      { source: '/zh-hans/author/:slug*', destination: '/zh', permanent: true },
      { source: '/en/author/:slug*', destination: '/en', permanent: true },

      // === Langues supprimées : ES, ZH-Hans (pages anciennes) ===
      { source: '/es/:path*', destination: '/', permanent: true },
      { source: '/zh-hans/:path*', destination: '/zh', permanent: true },

      // === Booking ancien ===
      { source: '/service-de-chauffeur-prive-pour-mariage-amani-limousine/', destination: '/chauffeur-mariage-paris', permanent: true },
      { source: '/service-de-chauffeur-prive-pour-mariage-amani-limousine', destination: '/chauffeur-mariage-paris', permanent: true },
      { source: '/booking/', destination: '/reservation', permanent: true },

      // === Pages indexées sans slash − présentes dans Google Search Console ===
      // Hôtels palaces manquants (slug différent ou absent de la liste)
      { source: '/hotel-shangri-la-paris/',       destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/hotel-shangri-la-paris',        destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/grand-hotel-du-palais-royal/',  destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/grand-hotel-du-palais-royal',   destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/hotel-marignan-champs-elysees/',destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/hotel-marignan-champs-elysees', destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/hotel-scribe-paris-opera-by-sofitel', destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/hotel-plaza-athenee',           destination: '/transfert-aeroport-cdg', permanent: true },

      // Événements sportifs / culturels manquants
      { source: '/golf-le-touquet-la-mer/',   destination: '/evenements', permanent: true },
      { source: '/golf-le-touquet-la-mer',    destination: '/evenements', permanent: true },
      { source: '/golf-seignosse/',           destination: '/evenements', permanent: true },
      { source: '/golf-seignosse',            destination: '/evenements', permanent: true },
      { source: '/festival-de-cinema/',       destination: '/evenements', permanent: true },
      { source: '/festival-de-cinema',        destination: '/evenements', permanent: true },
      { source: '/summum-grenoble/',          destination: '/longue-distance', permanent: true },
      { source: '/summum-grenoble',           destination: '/longue-distance', permanent: true },
      { source: '/paris-6-eme-arrondissement/', destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/paris-6-eme-arrondissement', destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/frejus-2/',                 destination: '/longue-distance', permanent: true },
      { source: '/frejus-2',                  destination: '/longue-distance', permanent: true },
      { source: '/lyon/',                     destination: '/longue-distance', permanent: true },
      { source: '/angers',                    destination: '/longue-distance', permanent: true },

      // === Alpes / Haute-Savoie ===
      // Anciens slugs WordPress éventuels → nouvelles pages
      { source: '/chamonix/',                  destination: '/chauffeur-prive-chamonix', permanent: true },
      { source: '/chamonix',                   destination: '/chauffeur-prive-chamonix', permanent: true },
      { source: '/megeve/',                    destination: '/chauffeur-prive-megeve', permanent: true },
      { source: '/megeve',                     destination: '/chauffeur-prive-megeve', permanent: true },
      { source: '/haute-savoie/',              destination: '/chauffeur-prive-haute-savoie', permanent: true },
      { source: '/haute-savoie',               destination: '/chauffeur-prive-haute-savoie', permanent: true },
      { source: '/en/chamonix/',               destination: '/en/chamonix-chauffeur', permanent: true },
      { source: '/en/chamonix',                destination: '/en/chamonix-chauffeur', permanent: true },
      { source: '/en/megeve/',                 destination: '/en/megeve-chauffeur', permanent: true },
      { source: '/en/megeve',                  destination: '/en/megeve-chauffeur', permanent: true },

      // === Hippodromes ===
      { source: '/hippodrome-dauteuil', destination: '/evenements', permanent: true },
      { source: '/hippodrome-dauteuil/', destination: '/evenements', permanent: true },
      { source: '/hippodrome-de-clairefontaine', destination: '/evenements', permanent: true },
      { source: '/hippodrome-de-clairefontaine/', destination: '/evenements', permanent: true },
      { source: '/hippodrome-de-deauville-la-touques', destination: '/evenements/hippodrome-deauville', permanent: true },
      { source: '/hippodrome-de-deauville-la-touques/', destination: '/evenements/hippodrome-deauville', permanent: true },
      { source: '/hippodrome-de-longchamp/', destination: '/evenements', permanent: true },
      { source: '/hippodrome-de-longchamp', destination: '/evenements', permanent: true },
      { source: '/hippodrome-de-vincennes', destination: '/evenements', permanent: true },
      { source: '/hippodrome-de-chantilly/', destination: '/evenements', permanent: true },
      { source: '/hippodrome-de-chantilly', destination: '/evenements', permanent: true },

      // === Villes variantes -2 ===
      { source: '/cagnes-sur-mer-2/', destination: '/longue-distance', permanent: true },
      { source: '/cagnes-sur-mer-2', destination: '/longue-distance', permanent: true },
      { source: '/draguignan-2/', destination: '/longue-distance', permanent: true },
      { source: '/draguignan-2', destination: '/longue-distance', permanent: true },
      { source: '/hyeres-2/', destination: '/longue-distance', permanent: true },
      { source: '/hyeres-2', destination: '/longue-distance', permanent: true },
      { source: '/la-ciotat-2/', destination: '/longue-distance', permanent: true },
      { source: '/la-ciotat-2', destination: '/longue-distance', permanent: true },
      { source: '/le-cannet-2/', destination: '/longue-distance', permanent: true },
      { source: '/le-cannet-2', destination: '/longue-distance', permanent: true },
      { source: '/six-fours-les-plages-2/', destination: '/longue-distance', permanent: true },
      { source: '/six-fours-les-plages-2', destination: '/longue-distance', permanent: true },
      { source: '/frejus-2', destination: '/longue-distance', permanent: true },

      // === Venues / Stades ===
      { source: '/groupama-stadium/', destination: '/longue-distance', permanent: true },
      { source: '/groupama-stadium', destination: '/longue-distance', permanent: true },
      { source: '/arena-pierre-mauroy-lille-villeneuve-dascq/', destination: '/longue-distance', permanent: true },
      { source: '/arena-pierre-mauroy-lille-villeneuve-dascq', destination: '/longue-distance', permanent: true },
      { source: '/amphitheatre-exterieur-du-zenith-de-nancy-nancy-maxeville/', destination: '/longue-distance', permanent: true },
      { source: '/amphitheatre-exterieur-du-zenith-de-nancy-nancy-maxeville', destination: '/longue-distance', permanent: true },
      { source: '/salle-rameau-lyon/', destination: '/longue-distance', permanent: true },
      { source: '/salle-rameau-lyon', destination: '/longue-distance', permanent: true },
      { source: '/parc-des-expositions-de-bordeaux/', destination: '/longue-distance', permanent: true },
      { source: '/parc-des-expositions-de-bordeaux', destination: '/longue-distance', permanent: true },
      { source: '/parc-des-expositions-de-montpellier/', destination: '/longue-distance', permanent: true },
      { source: '/parc-des-expositions-de-montpellier', destination: '/longue-distance', permanent: true },
      { source: '/pole-international-du-cheval-de-deauville', destination: '/evenements/hippodrome-deauville', permanent: true },
      { source: '/centre-des-congres-de-lyon-amphitheatre-lyon', destination: '/longue-distance', permanent: true },
      { source: '/centre-des-congres-de-lyon-amphitheatre-lyon/', destination: '/longue-distance', permanent: true },

      // === Restaurants ===
      { source: '/alain-ducasse-au-plaza-athenee/', destination: '/chauffeur-prive-paris', permanent: true },
      { source: '/alain-ducasse-au-plaza-athenee', destination: '/chauffeur-prive-paris', permanent: true },
      { source: '/le-meurice-alain-ducasse/', destination: '/chauffeur-prive-paris', permanent: true },
      { source: '/le-meurice-alain-ducasse', destination: '/chauffeur-prive-paris', permanent: true },

      // === Courses / Sport ===
      { source: '/courses-hippiques-de-france-prix', destination: '/evenements', permanent: true },
      { source: '/courses-hippiques-de-france-prix/', destination: '/evenements', permanent: true },
      { source: '/24h-du-mans/', destination: '/evenements', permanent: true },
      { source: '/24h-du-mans', destination: '/evenements', permanent: true },

      // === Salons ===
      { source: '/salon-du-livre-de-paris-livre-paris/', destination: '/evenements/salons-professionnels', permanent: true },
      { source: '/salon-du-livre-de-paris-livre-paris', destination: '/evenements/salons-professionnels', permanent: true },

      // === Pages EN manquantes (various) ===
      { source: '/en/national-international-transfers/', destination: '/en/long-distance', permanent: true },
      { source: '/en/service-de-transport-scolaire-et-de-colonies-de-vacances-pour-enfants-en-toute-securite/', destination: '/en', permanent: true },
      { source: '/en/private-chauffeur-cdg-charles-de-gaule-:slug*', destination: '/en/cdg-airport-transfer', permanent: true },

      // === Misc FR pages ===
      { source: '/chauffeur-prive-personnel-avion-aerien/', destination: '/mise-a-disposition', permanent: true },
      { source: '/chauffeur-prive-personnel-avion-aerien', destination: '/mise-a-disposition', permanent: true },
      { source: '/transport-tpmr-handisport-avec-amani-limousines-accessibilite-et-confort-optimal/', destination: '/', permanent: true },
      { source: '/transport-tpmr-handisport-avec-amani-limousines-accessibilite-et-confort-optimal', destination: '/', permanent: true },
      { source: '/transfert-marignane/', destination: '/longue-distance', permanent: true },
      { source: '/transfert-marignane', destination: '/longue-distance', permanent: true },
      { source: '/aeroport-bourget/', destination: '/transfert-le-bourget', permanent: true },
      { source: '/aeroport-bourget', destination: '/transfert-le-bourget', permanent: true },
      { source: '/aeroport-de-paris-charles-de-gaulle-roissy/', destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/aeroport-de-paris-charles-de-gaulle-roissy', destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/transfert-aeroport-lyon/', destination: '/longue-distance', permanent: true },
      { source: '/transfert-aeroport-lyon', destination: '/longue-distance', permanent: true },
      { source: '/transfert-aeroport-nice', destination: '/longue-distance', permanent: true },
      { source: '/heliport-de-meaux-esbly', destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/heliport-de-meaux-esbly/', destination: '/transfert-aeroport-cdg', permanent: true },
      { source: '/chateau-musee/', destination: '/excursion-privee', permanent: true },
      { source: '/chateau-musee', destination: '/excursion-privee', permanent: true },
      { source: '/bibliotheque-musee/', destination: '/excursion-privee', permanent: true },
      { source: '/bibliotheque-musee', destination: '/excursion-privee', permanent: true },
      { source: '/festival-de-cannes/', destination: '/evenements/festival-de-cannes', permanent: true },
      { source: '/festival-de-cannes', destination: '/evenements/festival-de-cannes', permanent: true },

      // === Arrondissements de Paris (wildcard) ===
      { source: '/paris-:num(\\d+)-eme-arrondissement/', destination: '/transfert-cdg-paris', permanent: true },
      { source: '/paris-:num(\\d+)-eme-arrondissement', destination: '/transfert-cdg-paris', permanent: true },

      // === Wildcards — catégories bulk (placed last to avoid conflicts) ===
      { source: '/festival-:slug*', destination: '/evenements', permanent: true },
      { source: '/:prefix*-festival', destination: '/evenements', permanent: true },
      { source: '/:prefix*-festival/', destination: '/evenements', permanent: true },
      { source: '/golf-:slug*', destination: '/evenements', permanent: true },
      { source: '/musee-:slug*', destination: '/excursion-privee', permanent: true },
      { source: '/musee-:slug*/', destination: '/excursion-privee', permanent: true },
      { source: '/port-:slug*', destination: '/longue-distance', permanent: true },
      { source: '/arenes-:slug*', destination: '/longue-distance', permanent: true },
      { source: '/ecomusee-:slug*', destination: '/excursion-privee', permanent: true },

      // === Villes + hôtels supprimés ===
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

/**
 * dach-nordics.ts — Région DACH & NORDICS (~50 villes)
 * ─────────────────────────────────────────────────────────────────────────────
 * Allemagne, Autriche, Suisse, Scandinavie.
 * Suivre le modèle éditorial des exemples strasbourg/toulouse dans france.ts.
 *
 * Villes attendues (~50) :
 *   Allemagne : berlin, munich, frankfurt, hamburg, cologne, dusseldorf,
 *               stuttgart, dresden, leipzig, nuremberg, heidelberg,
 *               baden-baden, freiburg, rothenburg-ob-der-tauber,
 *               neuschwanstein-fussen, garmisch-partenkirchen, hanover, bremen
 *   Autriche : (vienne → alps-attractions) salzburg, innsbruck, hallstatt,
 *              linz, graz, zell-am-see, kitzbuhel
 *   Suisse : geneva, zurich, basel, bern, lausanne, lucerne, lugano, montreux,
 *            zermatt-tasch, lauterbrunnen, grindelwald
 *   Scandinavie : copenhagen, stockholm, gothenburg, malmo, oslo, bergen,
 *                 stavanger, helsinki, aarhus, billund, tromso, reykjavik
 */

import type { Destination } from '../types';

export const CITIES: Destination[] = [
  {
    slug: 'salzburg',
    name: { fr: 'Salzbourg', en: 'Salzburg' },
    country: { fr: 'Autriche', en: 'Austria' },
    region: 'dach-nordics',
    airport: 'Salzburg W. A. Mozart (SZG)',
    airportTransfer: {
      fr: 'L’aéroport de Salzbourg W. A. Mozart (SZG) se trouve à 4 km à l’ouest du centre : comptez 10 à 15 minutes pour rejoindre la vieille ville ou la Getreidegasse. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Salzburg W. A. Mozart Airport (SZG) lies 4 km west of the centre: allow 10 to 15 minutes to reach the old town or the Getreidegasse. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville natale de Mozart et décor baroque inscrit à l’UNESCO, Salzbourg déploie ses coupoles et ses places au pied de la forteresse de Hohensalzburg. Votre **chauffeur privé à Salzbourg** dessert les hôtels de la vieille ville, le Festspielhaus, les cliniques et sièges d’entreprise, en berline Mercedes ou van de grande capacité. Transferts aéroport et gare, mise à disposition à l’heure, trajets vers Munich ou Vienne : chaque course est planifiée à l’avance, à prix fixe, avec un chauffeur qui connaît les accès de la ville.',
        'Salzbourg ouvre aussi les portes du Salzkammergut et des Alpes. Les **mines de sel de Hallein** et le nid d’aigle de Berchtesgaden sont à trente minutes, Hallstatt et ses lacs à un peu plus d’une heure, la route alpine du Grossglockner à deux heures. Pendant le festival d’été, quand le centre se ferme partiellement à la circulation, votre chauffeur maîtrise les points de dépose autorisés et vous attend à la sortie des représentations, sans contrainte d’horaire.',
      ],
      en: [
        'Mozart’s birthplace and a UNESCO-listed baroque stage set, Salzburg unfolds its domes and squares beneath the Hohensalzburg fortress. Your **private chauffeur in Salzburg** serves the old-town hotels, the Festspielhaus, clinics and corporate headquarters, in a Mercedes sedan or a full-size van. Airport and station transfers, hourly hire, journeys to Munich or Vienna: every trip is planned in advance, at a fixed price, with a chauffeur who knows the city’s access routes.',
        'Salzburg is also the gateway to the Salzkammergut and the Alps. The **Hallein salt mines** and the Eagle’s Nest above Berchtesgaden are thirty minutes away, Hallstatt and its lakes just over an hour, the Grossglockner alpine road two hours. During the summer festival, when the centre partially closes to traffic, your chauffeur knows the authorised drop-off points and waits for you after each performance, with no time pressure.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Circuit « La Mélodie du bonheur »', en: 'Sound of Music tour' },
        teaser: {
          fr: 'Les lieux de tournage du film de 1965 : les jardins de Mirabell, le palais de Leopoldskron, la gloriette de Hellbrunn, puis l’église de Mondsee où fut filmé le mariage. Itinéraire privé, à votre rythme, arrêts photo compris.',
          en: 'The filming locations of the 1965 classic: the Mirabell gardens, Leopoldskron Palace, the Hellbrunn gazebo, then Mondsee church where the wedding was shot. A private itinerary at your own pace, photo stops included.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Mines de sel de Hallein et Berchtesgaden', en: 'Hallein salt mines and Berchtesgaden' },
        teaser: {
          fr: 'À 20 minutes au sud, les galeries de sel exploitées depuis les Celtes, avec traversée du lac souterrain. En complément, le Kehlsteinhaus — le nid d’aigle — et le lac de Königssee côté bavarois. Passage de frontière sans formalité.',
          en: 'Twenty minutes south, salt galleries worked since Celtic times, with a crossing of the underground lake. Add the Kehlsteinhaus — the Eagle’s Nest — and Lake Königssee on the Bavarian side. Seamless border crossing.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Hallstatt et le Salzkammergut', en: 'Hallstatt and the Salzkammergut' },
        teaser: {
          fr: 'À 72 km de Salzbourg, le village lacustre le plus photographié des Alpes : la place du marché, l’ossuaire, le belvédère du Skywalk. Retour par le lac Wolfgangsee et Sankt Gilgen, arrêts au bord de l’eau à la demande.',
          en: '72 km from Salzburg, the most photographed lakeside village in the Alps: the market square, the bone chapel, the Skywalk viewpoint. Return via Lake Wolfgangsee and Sankt Gilgen, waterside stops on request.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
      {
        title: { fr: 'Route alpine du Grossglockner', en: 'Grossglockner High Alpine Road' },
        teaser: {
          fr: '48 km et 36 virages jusqu’à 2 504 mètres, face au plus haut sommet d’Autriche et au glacier de Pasterze. Route ouverte de mai à octobre ; votre chauffeur gère les péages et les arrêts panoramiques, déjeuner d’altitude réservé.',
          en: '48 km and 36 hairpins up to 2,504 metres, facing Austria’s highest peak and the Pasterze glacier. Open May to October; your chauffeur handles the tolls and panoramic stops, with a mountain lunch booked ahead.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Soirée au festival de Salzbourg', en: 'Salzburg Festival evening' },
        teaser: {
          fr: 'Dépose au plus près du Festspielhaus ou de la Felsenreitschule, véhicule en attente pendant la représentation, retour à votre hôtel ou dîner d’après-spectacle à la Goldener Hirsch. Tenue du chauffeur adaptée à l’événement.',
          en: 'Drop-off as close as possible to the Festspielhaus or the Felsenreitschule, vehicle on standby during the performance, then back to your hotel or an after-show dinner at the Goldener Hirsch. Chauffeur dressed for the occasion.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Salzbourg et le centre-ville ?',
          en: 'How much does a transfer between Salzburg Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Salzbourg W. A. Mozart (SZG) et le centre de Salzbourg est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Salzburg W. A. Mozart Airport (SZG) and central Salzburg is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous des trajets entre Salzbourg et Munich ou son aéroport ?',
          en: 'Do you cover journeys between Salzburg and Munich or its airport?',
        },
        a: {
          fr: 'Oui. Munich est à 145 km par l’A8, soit environ 1 h 45 de route, et l’aéroport de Munich (MUC) à 190 km. Ces trajets transfrontaliers sont devisés à l’avance, à prix fixe, avec un véhicule autorisé à circuler en Autriche comme en Allemagne.',
          en: 'Yes. Munich is 145 km away on the A8, roughly a 1 h 45 drive, and Munich Airport (MUC) 190 km. These cross-border journeys are quoted in advance at a fixed price, with a vehicle authorised to operate in both Austria and Germany.',
        },
      },
      {
        q: {
          fr: 'Comment circuler à Salzbourg pendant le festival d’été ?',
          en: 'How do you get around Salzburg during the summer festival?',
        },
        a: {
          fr: 'De fin juillet à fin août, la demande est très forte et l’accès à la vieille ville est réglementé les soirs de représentation. Nous recommandons de réserver au moins 72 heures à l’avance ; votre chauffeur connaît les points de dépose autorisés autour du Festspielhaus et vous attend à la sortie.',
          en: 'From late July to late August demand is very high and old-town access is restricted on performance evenings. We recommend booking at least 72 hours ahead; your chauffeur knows the authorised drop-off points around the Festspielhaus and waits for you after the show.',
        },
      },
    ],
    nearby: ['hallstatt', 'zell-am-see', 'kitzbuhel', 'munich'],
  },
  {
    slug: 'innsbruck',
    name: { fr: 'Innsbruck', en: 'Innsbruck' },
    country: { fr: 'Autriche', en: 'Austria' },
    region: 'dach-nordics',
    airport: 'Innsbruck (INN)',
    airportTransfer: {
      fr: 'L’aéroport d’Innsbruck (INN) se trouve à 4 km à l’ouest du centre : 10 minutes suffisent pour rejoindre la vieille ville et le Petit Toit d’or. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol pour ajuster l’heure de prise en charge.',
      en: 'Innsbruck Airport (INN) lies 4 km west of the centre: 10 minutes is enough to reach the old town and the Golden Roof. Your chauffeur waits in the arrivals hall with a name board and tracks your flight to adjust the pick-up time.',
    },
    intro: {
      fr: [
        'Capitale du Tyrol serrée entre la chaîne de la Nordkette et les sommets du Patscherkofel, Innsbruck superpose ruelles médiévales, palais impérial des Habsbourg et architecture olympique. Votre **chauffeur privé à Innsbruck** assure transferts aéroport et gare, mises à disposition à l’heure et navettes vers les stations tyroliennes, en berline ou van équipés pour l’hiver — pneus neige, coffres à skis, sièges enfants sur demande. Prix fixes confirmés à la réservation, chauffeurs habitués aux routes de montagne.',
        'Autour d’Innsbruck, le Tyrol se parcourt en étoile : les **Swarovski Kristallwelten** de Wattens à vingt minutes, l’abbaye de Stams et la vieille ville de Hall in Tirol à un quart d’heure, Kitzbühel, Sölden ou St. Anton am Arlberg à moins d’une heure trente. Côté Bavière, Garmisch-Partenkirchen et le château de Neuschwanstein se rejoignent dans la journée, frontière franchie sans formalité. Votre chauffeur enchaîne les étapes pendant que vous profitez du paysage.',
      ],
      en: [
        'Capital of Tyrol wedged between the Nordkette range and the Patscherkofel peaks, Innsbruck layers medieval lanes, the Habsburg imperial palace and Olympic architecture. Your **private chauffeur in Innsbruck** handles airport and station transfers, hourly hire and shuttles to the Tyrolean resorts, in sedans or vans equipped for winter — snow tyres, ski racks, child seats on request. Fixed prices confirmed at booking, chauffeurs at home on mountain roads.',
        'Around Innsbruck, Tyrol fans out in every direction: the **Swarovski Kristallwelten** in Wattens twenty minutes away, Stams Abbey and the old town of Hall in Tirol within a quarter of an hour, Kitzbühel, Sölden or St. Anton am Arlberg in under ninety minutes. On the Bavarian side, Garmisch-Partenkirchen and Neuschwanstein Castle fit into a single day, the border crossed without formality. Your chauffeur links the stops while you watch the scenery.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Swarovski Kristallwelten à Wattens', en: 'Swarovski Kristallwelten in Wattens' },
        teaser: {
          fr: 'À 20 minutes d’Innsbruck, les Mondes du cristal imaginés par André Heller : le Géant, les chambres des merveilles, le nuage de 800 000 cristaux au-dessus du miroir d’eau. Combinez avec la vieille ville de Hall in Tirol.',
          en: 'Twenty minutes from Innsbruck, the Crystal Worlds conceived by André Heller: the Giant, the Chambers of Wonder, the cloud of 800,000 crystals above the mirror pool. Pair it with the old town of Hall in Tirol.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Neuschwanstein et la Bavière royale', en: 'Neuschwanstein and royal Bavaria' },
        teaser: {
          fr: 'À 110 km par le col de Fern, le château de Louis II au-dessus de la gorge de la Pöllat, puis Hohenschwangau et la Wieskirche. Billets coupe-file réservés à l’avance, déjeuner à Füssen, retour par Garmisch-Partenkirchen.',
          en: '110 km away via the Fern Pass, Ludwig II’s castle above the Pöllat gorge, then Hohenschwangau and the Wieskirche. Skip-the-line tickets booked ahead, lunch in Füssen, return via Garmisch-Partenkirchen.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '850',
      },
      {
        title: { fr: 'Vallée de l’Ötztal et Sölden', en: 'Ötztal valley and Sölden' },
        teaser: {
          fr: 'La plus longue vallée du Tyrol jusqu’aux glaciers de Sölden : la plateforme 007 Elements à 3 048 mètres, les cascades de Stuibenfall, les thermes d’Aqua Dome à Längenfeld. Route panoramique, arrêts à votre rythme.',
          en: 'Tyrol’s longest valley up to the Sölden glaciers: the 007 Elements installation at 3,048 metres, the Stuibenfall waterfalls, the Aqua Dome thermal baths in Längenfeld. A panoramic road with stops at your own pace.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Nordkette et Innsbruck impériale', en: 'Nordkette and imperial Innsbruck' },
        teaser: {
          fr: 'Le funiculaire de Zaha Hadid depuis le centre-ville jusqu’à la Seegrube à 1 905 mètres, puis le palais impérial, le Petit Toit d’or et le tremplin olympique du Bergisel signé Hadid également. La ville entre deux altitudes.',
          en: 'Zaha Hadid’s funicular from the city centre up to Seegrube at 1,905 metres, then the imperial palace, the Golden Roof and the Bergisel Olympic ski jump, also by Hadid. The city seen from two altitudes.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Journée ski à St. Anton am Arlberg', en: 'Ski day in St. Anton am Arlberg' },
        teaser: {
          fr: 'À 100 km à l’ouest, le berceau du ski alpin et le plus grand domaine relié d’Autriche. Dépose au pied des remontées de la Galzigbahn, coffre à skis, retour en soirée après l’après-ski du MooserWirt si vous le souhaitez.',
          en: '100 km west, the cradle of alpine skiing and Austria’s largest linked ski area. Drop-off at the foot of the Galzigbahn lifts, ski rack on board, evening return after the MooserWirt après-ski if you wish.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport d’Innsbruck et le centre-ville ?',
          en: 'How much does a transfer between Innsbruck Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport d’Innsbruck (INN) et le centre est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard sont inclus.',
          en: 'A private transfer between Innsbruck Airport (INN) and the centre is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des transferts vers les stations de ski du Tyrol en hiver ?',
          en: 'Do you offer transfers to the Tyrolean ski resorts in winter?',
        },
        a: {
          fr: 'Oui. Depuis Innsbruck ou son aéroport, nous desservons Kitzbühel, Sölden, Ischgl, St. Anton am Arlberg, Seefeld et Mayrhofen. Véhicules équipés de pneus neige et de coffres à skis, chauffeurs expérimentés sur routes de montagne, prix fixe quel que soit l’état du trafic.',
          en: 'Yes. From Innsbruck or its airport we serve Kitzbühel, Sölden, Ischgl, St. Anton am Arlberg, Seefeld and Mayrhofen. Vehicles fitted with snow tyres and ski racks, chauffeurs experienced on mountain roads, fixed price whatever the traffic conditions.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer un trajet entre Innsbruck et Munich ou son aéroport ?',
          en: 'Can you handle a journey between Innsbruck and Munich or its airport?',
        },
        a: {
          fr: 'Oui. Munich est à 165 km par l’A12 et l’A95, soit environ deux heures de route, et l’aéroport de Munich (MUC) à 190 km. Ces trajets transfrontaliers sont devisés à l’avance, à prix fixe, avec un véhicule autorisé à circuler en Autriche et en Allemagne.',
          en: 'Yes. Munich is 165 km away via the A12 and A95, roughly a two-hour drive, and Munich Airport (MUC) 190 km. These cross-border journeys are quoted in advance at a fixed price, with a vehicle authorised to operate in both Austria and Germany.',
        },
      },
    ],
    nearby: ['kitzbuhel', 'garmisch-partenkirchen', 'salzburg', 'munich'],
  },
  {
    slug: 'hallstatt',
    name: { fr: 'Hallstatt', en: 'Hallstatt' },
    country: { fr: 'Autriche', en: 'Austria' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'L’aéroport majeur le plus proche est Salzbourg W. A. Mozart (SZG), à 72 km au nord-ouest : comptez 1 h 15 à 1 h 30 de route par le Salzkammergut jusqu’au village. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'The nearest major airport is Salzburg W. A. Mozart (SZG), 72 km to the north-west: allow 1 h 15 to 1 h 30 through the Salzkammergut to reach the village. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Village de 750 habitants serré entre son lac et la paroi du Dachstein, Hallstatt est inscrit à l’UNESCO pour ses 7 000 ans d’exploitation du sel. Le centre étant fermé aux voitures en journée, l’accès demande une logistique précise : votre **chauffeur privé à Hallstatt** connaît les points de dépose autorisés et les horaires d’ouverture des barrières, gère le stationnement et vous attend le temps de votre visite. Transferts depuis Salzbourg, Vienne ou Munich à prix fixe.',
        'Hallstatt se découvre tôt le matin ou en fin de journée, quand les excursionnistes sont repartis — un rythme qu’une voiture privée rend possible. Autour du village, le **massif du Dachstein** aligne la grotte de glace, le belvédère des Five Fingers à 2 100 mètres et le lac de Gosau face aux glaciers. Votre chauffeur compose l’itinéraire du Salzkammergut à votre mesure : Bad Ischl l’impériale, le lac Wolfgangsee, Sankt Gilgen.',
      ],
      en: [
        'A village of 750 inhabitants pressed between its lake and the Dachstein wall, Hallstatt is UNESCO-listed for its 7,000 years of salt mining. With the centre closed to cars during the day, access takes precise logistics: your **private chauffeur in Hallstatt** knows the authorised drop-off points and the barrier opening hours, handles the parking and waits while you explore. Fixed-price transfers from Salzburg, Vienna or Munich.',
        'Hallstatt is best seen early in the morning or late in the day, once the tour groups have left — a rhythm a private car makes possible. Around the village, the **Dachstein massif** lines up the ice cave, the Five Fingers viewing platform at 2,100 metres and Lake Gosau facing the glaciers. Your chauffeur shapes the Salzkammergut itinerary to suit you: imperial Bad Ischl, Lake Wolfgangsee, Sankt Gilgen.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Mine de sel et Skywalk de Hallstatt', en: 'Hallstatt salt mine and Skywalk' },
        teaser: {
          fr: 'Le funiculaire jusqu’aux Salzwelten, la plus ancienne mine de sel du monde, ses toboggans de mineurs et sa tombe de l’âge du fer, puis le Skywalk suspendu à 360 mètres au-dessus des toits du village. Billets réservés à l’avance.',
          en: 'The funicular up to the Salzwelten, the world’s oldest salt mine, with its miners’ slides and Iron Age grave, then the Skywalk platform 360 metres above the village rooftops. Tickets booked in advance.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Grotte de glace et Five Fingers du Dachstein', en: 'Dachstein ice cave and Five Fingers' },
        teaser: {
          fr: 'Depuis Obertraun, à 10 minutes de Hallstatt, le téléphérique du Krippenstein dessert la grotte de glace géante et la passerelle des Five Fingers, en surplomb du lac à 2 100 mètres. Prévoir des chaussures fermées, même en été.',
          en: 'From Obertraun, 10 minutes from Hallstatt, the Krippenstein cable car serves the Giant Ice Cave and the Five Fingers platform overhanging the lake at 2,100 metres. Closed shoes advisable, even in summer.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Lac de Gosau et vue sur le Dachstein', en: 'Lake Gosau and the Dachstein views' },
        teaser: {
          fr: 'À 20 minutes du village, le Gosausee reflète les glaciers du Dachstein — l’un des panoramas les plus purs des Alpes autrichiennes. Tour du lac à pied en une heure, déjeuner au bord de l’eau, retour par le col de Gschütt.',
          en: 'Twenty minutes from the village, the Gosausee mirrors the Dachstein glaciers — one of the purest panoramas in the Austrian Alps. An hour’s walk around the lake, lunch at the water’s edge, return via the Gschütt pass.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Salzkammergut impérial : Bad Ischl et Wolfgangsee', en: 'Imperial Salzkammergut: Bad Ischl and Wolfgangsee' },
        teaser: {
          fr: 'La villa impériale de François-Joseph et la pâtisserie Zauner à Bad Ischl, puis les rives du Wolfgangsee, Sankt Wolfgang et son auberge du Cheval-Blanc, Sankt Gilgen la maison natale de la mère de Mozart. Boucle des lacs sans un volant à toucher.',
          en: 'Franz Joseph’s imperial villa and the Zauner pastry house in Bad Ischl, then the shores of the Wolfgangsee, Sankt Wolfgang with its White Horse Inn, and Sankt Gilgen, birthplace of Mozart’s mother. A lake circuit without touching a steering wheel.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Hallstatt à l’aube, avant la foule', en: 'Hallstatt at dawn, before the crowds' },
        teaser: {
          fr: 'Départ matinal de Salzbourg ou de votre hôtel du Salzkammergut pour arriver au belvédère classique avant 8 heures : le village encore silencieux, la brume sur le lac, la place du marché déserte. Petit-déjeuner réservé au bord de l’eau.',
          en: 'An early start from Salzburg or your Salzkammergut hotel to reach the classic viewpoint before 8 a.m.: the village still silent, mist on the lake, the market square empty. Breakfast booked at the water’s edge.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '520',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Salzbourg et Hallstatt ?',
          en: 'How much does a transfer between Salzburg Airport and Hallstatt cost?',
        },
        a: {
          fr: 'Le transfert privé entre Salzbourg W. A. Mozart (SZG) et Hallstatt — 72 km, environ 1 h 15 de route — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Salzburg W. A. Mozart Airport (SZG) and Hallstatt — 72 km, about a 1 h 15 drive — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Peut-on entrer en voiture dans le centre de Hallstatt ?',
          en: 'Can you drive into the centre of Hallstatt?',
        },
        a: {
          fr: 'Non : le cœur du village est fermé à la circulation en journée, de mai à octobre notamment. Votre chauffeur vous dépose au point autorisé le plus proche de votre hôtel ou de l’embarcadère, stationne aux parkings P1 ou P2 et reste joignable pour vous reprendre à l’heure convenue.',
          en: 'No: the heart of the village is closed to traffic during the day, particularly from May to October. Your chauffeur drops you at the authorised point closest to your hotel or the boat pier, parks at the P1 or P2 car parks and remains reachable to collect you at the agreed time.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Hallstatt dans la journée depuis Salzbourg ou Vienne ?',
          en: 'Can Hallstatt be visited as a day trip from Salzburg or Vienna?',
        },
        a: {
          fr: 'Oui. Depuis Salzbourg, comptez 1 h 15 de route par trajet, ce qui laisse une demi-journée pleine sur place. Depuis Vienne, le trajet est de 290 km, environ 3 heures : un départ matinal permet de combiner le village, la mine de sel et le lac de Gosau avant le retour en soirée.',
          en: 'Yes. From Salzburg allow 1 h 15 each way, which leaves a full half-day in the village. From Vienna the journey is 290 km, around 3 hours: an early departure fits the village, the salt mine and Lake Gosau before an evening return.',
        },
      },
    ],
    nearby: ['salzburg', 'linz', 'zell-am-see', 'graz'],
  },
  {
    slug: 'linz',
    name: { fr: 'Linz', en: 'Linz' },
    country: { fr: 'Autriche', en: 'Austria' },
    region: 'dach-nordics',
    airport: 'Linz (LNZ)',
    airportTransfer: {
      fr: 'L’aéroport de Linz (LNZ), à Hörsching, se trouve à 14 km au sud-ouest du centre : comptez 20 minutes de trajet jusqu’à la Hauptplatz ou aux quais du Danube. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Linz Airport (LNZ), at Hörsching, lies 14 km south-west of the centre: allow 20 minutes to reach the Hauptplatz or the Danube quays. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Troisième ville d’Autriche et capitale de la Haute-Autriche, Linz a troqué son passé industriel contre le titre de Ville créative UNESCO : l’Ars Electronica Center face au musée Lemayr sur le Danube, le Musiktheater, la Hauptplatz baroque. Votre **chauffeur privé à Linz** dessert les sites de la voestalpine et du parc technologique, les hôtels des quais et l’aéroport de Hörsching, en berline ou van premium. Prix fixes, mise à disposition à l’heure, chauffeurs bilingues sur demande.',
        'Depuis Linz, le Danube et les Préalpes se partagent vos journées. L’**abbaye baroque de Sankt Florian**, où repose Bruckner, est à vingt minutes ; la vallée de la Wachau et ses vignobles en terrasses à une heure ; le Salzkammergut, Hallstatt et le lac de Traunsee au sud. Salzbourg se rejoint en 1 h 30, Vienne en 2 heures par l’A1 : votre chauffeur relie les capitales culturelles autrichiennes sans rupture de confort.',
      ],
      en: [
        'Austria’s third city and the capital of Upper Austria, Linz has traded its industrial past for UNESCO Creative City status: the Ars Electronica Center facing the Lentos museum across the Danube, the Musiktheater, the baroque Hauptplatz. Your **private chauffeur in Linz** serves the voestalpine sites and the technology park, the riverside hotels and Hörsching airport, in a premium sedan or van. Fixed prices, hourly hire, bilingual chauffeurs on request.',
        'From Linz, the Danube and the pre-Alps share your days. The **baroque abbey of Sankt Florian**, Bruckner’s resting place, is twenty minutes away; the Wachau valley and its terraced vineyards an hour; the Salzkammergut, Hallstatt and Lake Traunsee to the south. Salzburg is 1 h 30 away, Vienna 2 hours on the A1: your chauffeur links Austria’s cultural capitals without a break in comfort.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Abbaye de Sankt Florian et l’orgue de Bruckner', en: 'Sankt Florian Abbey and Bruckner’s organ' },
        teaser: {
          fr: 'À 20 minutes de Linz, l’un des plus grands monastères baroques d’Autriche : la bibliothèque aux 150 000 volumes, la basilique et l’orgue Bruckner, la crypte où le compositeur est inhumé sous son instrument. Audition d’orgue selon calendrier.',
          en: 'Twenty minutes from Linz, one of Austria’s greatest baroque monasteries: the 150,000-volume library, the basilica with the Bruckner organ, and the crypt where the composer lies beneath his instrument. Organ recitals per the abbey calendar.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '330',
      },
      {
        title: { fr: 'Vallée de la Wachau et vignobles du Danube', en: 'Wachau valley and Danube vineyards' },
        teaser: {
          fr: 'À une heure à l’est, la boucle du Danube classée UNESCO : l’abbaye de Melk, Dürnstein et les ruines du château de Richard Cœur de Lion, dégustations de grüner veltliner et de riesling chez les vignerons de Weissenkirchen.',
          en: 'An hour east, the UNESCO-listed bend of the Danube: Melk Abbey, Dürnstein and the ruins of Richard the Lionheart’s castle, with Grüner Veltliner and Riesling tastings at Weissenkirchen wineries.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Ars Electronica et Linz contemporaine', en: 'Ars Electronica and contemporary Linz' },
        teaser: {
          fr: 'Le musée du futur et son Deep Space 8K, la traversée du Danube vers le Lentos, puis la montée au Pöstlingberg en tramway historique pour la vue sur la ville. Un condensé de la Linz créative, dépose devant chaque étape.',
          en: 'The museum of the future with its Deep Space 8K, a Danube crossing to the Lentos, then the historic tram ride up the Pöstlingberg for the city view. Creative Linz in essence, door-to-door at every stop.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Český Krumlov, la Bohême voisine', en: 'Český Krumlov, Bohemia next door' },
        teaser: {
          fr: 'À 75 km au nord, la perle tchèque classée UNESCO : le château au-dessus des méandres de la Vltava, le théâtre baroque, les ruelles gothiques. Passage de frontière sans formalité, déjeuner dans la vieille ville, retour en fin de journée.',
          en: '75 km north, the UNESCO-listed Czech gem: the castle above the meanders of the Vltava, the baroque theatre, the Gothic lanes. Seamless border crossing, lunch in the old town, return at the end of the day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Traunsee et Gmunden, lacs du Salzkammergut', en: 'Traunsee and Gmunden, Salzkammergut lakes' },
        teaser: {
          fr: 'À 45 minutes au sud, le lac le plus profond d’Autriche sous la silhouette du Traunstein : le château lacustre d’Ort, la céramique verte et blanche de Gmunden, croisière sur le Traunsee en option. Retour possible par Bad Ischl.',
          en: 'Forty-five minutes south, Austria’s deepest lake beneath the Traunstein: the lake castle of Ort, Gmunden’s green-and-white ceramics, an optional Traunsee cruise. Return via Bad Ischl if you wish.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '580',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Linz et le centre-ville ?',
          en: 'How much does a transfer between Linz Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport de Linz-Hörsching (LNZ) et le centre de Linz est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Linz-Hörsching Airport (LNZ) and central Linz is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous des trajets entre Linz et Vienne ou Salzbourg ?',
          en: 'Do you cover journeys between Linz and Vienna or Salzburg?',
        },
        a: {
          fr: 'Oui. Vienne est à 185 km par l’A1, soit environ 2 heures de route, et Salzbourg à 130 km, environ 1 h 30. Ces liaisons sont devisées à l’avance, à prix fixe, et peuvent inclure un arrêt en route — l’abbaye de Melk ou la Wachau, par exemple.',
          en: 'Yes. Vienna is 185 km away on the A1, roughly a 2-hour drive, and Salzburg 130 km, about 1 h 30. These journeys are quoted in advance at a fixed price and can include a stop en route — Melk Abbey or the Wachau, for instance.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des trajets transfrontaliers vers la République tchèque depuis Linz ?',
          en: 'Do you offer cross-border journeys to the Czech Republic from Linz?',
        },
        a: {
          fr: 'Oui. Český Krumlov est à 75 km et České Budějovice à 90 km ; Prague se rejoint en environ 2 h 30. Les trajets transfrontaliers sont devisés à l’avance, à prix fixe, avec un véhicule autorisé à circuler dans les pays traversés.',
          en: 'Yes. Český Krumlov is 75 km away and České Budějovice 90 km; Prague is roughly a 2 h 30 drive. Cross-border journeys are quoted in advance at a fixed price, with a vehicle authorised to operate in each country crossed.',
        },
      },
    ],
    nearby: ['salzburg', 'hallstatt', 'graz'],
  },
  {
    slug: 'graz',
    name: { fr: 'Graz', en: 'Graz' },
    country: { fr: 'Autriche', en: 'Austria' },
    region: 'dach-nordics',
    airport: 'Graz (GRZ)',
    airportTransfer: {
      fr: 'L’aéroport de Graz (GRZ), à Feldkirchen, se trouve à 10 km au sud du centre : comptez 15 à 20 minutes de trajet jusqu’à la Hauptplatz ou au quartier du Schlossberg. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Graz Airport (GRZ), at Feldkirchen, lies 10 km south of the centre: allow 15 to 20 minutes to reach the Hauptplatz or the Schlossberg district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Deuxième ville d’Autriche et capitale de la Styrie, Graz superpose la plus grande vieille ville médiévale et Renaissance d’Europe centrale — classée UNESCO — et des gestes contemporains comme la Kunsthaus et l’île sur la Mur. Votre **chauffeur privé à Graz** dessert les hôtels du centre, l’université, les sites automobiles de Magna Steyr et le parc des expositions, en berline ou van premium. Transferts aéroport et gare, mise à disposition à l’heure, prix fixes confirmés à la réservation.',
        'Autour de Graz, la Styrie mérite son surnom de verte : la **route des vins de Styrie du Sud**, ses coteaux de sauvignon blanc et ses buschenschänke, commence à quarante minutes du centre ; le haras impérial de Piber, berceau des lipizzans, et la basilique de Mariazell complètent l’éventail. Vienne se rejoint en deux heures par l’A2 : votre chauffeur compose des itinéraires à la journée entre vignes, abbayes et capitale.',
      ],
      en: [
        'Austria’s second city and the capital of Styria, Graz layers the largest medieval and Renaissance old town in Central Europe — UNESCO-listed — with contemporary statements such as the Kunsthaus and the island in the Mur. Your **private chauffeur in Graz** serves the city-centre hotels, the university, the Magna Steyr automotive sites and the exhibition centre, in a premium sedan or van. Airport and station transfers, hourly hire, fixed prices confirmed at booking.',
        'Around Graz, Styria earns its nickname of the green province: the **South Styrian Wine Road**, with its Sauvignon Blanc slopes and buschenschank taverns, begins forty minutes from the centre; the imperial stud farm at Piber, cradle of the Lipizzaner horses, and the basilica of Mariazell complete the picture. Vienna is two hours away on the A2: your chauffeur builds full-day itineraries between vineyards, abbeys and the capital.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Route des vins de Styrie du Sud', en: 'South Styrian Wine Road' },
        teaser: {
          fr: 'De Gamlitz à Leutschach, des coteaux que l’on compare à la Toscane : dégustations de sauvignon blanc et de muskateller chez les domaines de référence, déjeuner dans une buschenschank face aux vignes, arrêt à la tour panoramique de la Weinstrasse.',
          en: 'From Gamlitz to Leutschach, slopes often compared to Tuscany: Sauvignon Blanc and Muskateller tastings at benchmark estates, lunch in a buschenschank facing the vines, a stop at the wine road’s panoramic tower.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Schlossberg, Kunsthaus et vieille ville', en: 'Schlossberg, Kunsthaus and the old town' },
        teaser: {
          fr: 'La tour de l’Horloge au sommet du Schlossberg, les cours Renaissance du Landhaus, la double rampe en spirale du Burg, puis la Kunsthaus — le « friendly alien » — et l’île sur la Mur. Le meilleur de Graz, dépose au pied de chaque site.',
          en: 'The Clock Tower atop the Schlossberg, the Renaissance courtyards of the Landhaus, the double spiral staircase of the Burg, then the Kunsthaus — the “friendly alien” — and the island in the Mur. The best of Graz, door-to-door.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '310',
      },
      {
        title: { fr: 'Haras de Piber et les lipizzans', en: 'Piber stud farm and the Lipizzaners' },
        teaser: {
          fr: 'À 45 km à l’ouest, le haras fédéral où naissent les étalons blancs de l’École espagnole de Vienne : visite des écuries et des pâturages, poulains alezans qui blanchiront avec l’âge. Combinez avec la vieille ville de Bärnbach et son église signée Hundertwasser.',
          en: '45 km west, the federal stud where the white stallions of Vienna’s Spanish Riding School are born: a tour of the stables and pastures, with dark foals that whiten with age. Pair it with Bärnbach and its Hundertwasser church.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Château d’Eggenberg et musée Zeughaus', en: 'Eggenberg Palace and the Zeughaus armoury' },
        teaser: {
          fr: 'Le palais aux 365 fenêtres et sa salle des Planètes, les paons dans le parc, puis le Zeughaus au centre-ville : 32 000 pièces d’armures et d’armes anciennes, le plus grand arsenal historique du monde conservé en l’état.',
          en: 'The palace of 365 windows with its Planet Room and peacocks in the park, then the Zeughaus in the city centre: 32,000 pieces of armour and historic weapons, the world’s largest preserved historical armoury.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Journée capitale : Graz–Vienne avec arrêt à Semmering', en: 'Capital day: Graz to Vienna via Semmering' },
        teaser: {
          fr: 'Liaison privée vers Vienne par l’A2 avec arrêt au col de Semmering, première ligne de chemin de fer de montagne classée UNESCO, ou à l’abbaye cistercienne de Neuberg. Dépose à votre hôtel viennois ou retour à Graz en soirée.',
          en: 'A private journey to Vienna on the A2 with a stop at the Semmering pass, home to the UNESCO-listed mountain railway, or at the Cistercian abbey of Neuberg. Drop-off at your Vienna hotel or an evening return to Graz.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '780',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Graz et le centre-ville ?',
          en: 'How much does a transfer between Graz Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport de Graz (GRZ) et le centre est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Graz Airport (GRZ) and the centre is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous la liaison entre Graz et Vienne ou son aéroport ?',
          en: 'Do you cover the journey between Graz and Vienna or its airport?',
        },
        a: {
          fr: 'Oui. Vienne est à 200 km par l’A2, soit environ 2 heures de route, et l’aéroport de Vienne-Schwechat (VIE) à 215 km. La liaison est devisée à l’avance, à prix fixe, avec possibilité d’arrêt en route au col de Semmering ou au château de Seggau.',
          en: 'Yes. Vienna is 200 km away on the A2, roughly a 2-hour drive, and Vienna-Schwechat Airport (VIE) 215 km. The journey is quoted in advance at a fixed price, with an optional stop en route at the Semmering pass or Seggau Castle.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des trajets vers la Slovénie ou la Hongrie depuis Graz ?',
          en: 'Do you offer journeys to Slovenia or Hungary from Graz?',
        },
        a: {
          fr: 'Oui. Maribor est à 65 km, Ljubljana à 190 km et Budapest à environ 3 h 30 de route. Ces trajets transfrontaliers sont devisés à l’avance, à prix fixe, avec un véhicule autorisé à circuler dans les pays traversés et les vignettes autoroutières en règle.',
          en: 'Yes. Maribor is 65 km away, Ljubljana 190 km and Budapest around a 3 h 30 drive. These cross-border journeys are quoted in advance at a fixed price, with a vehicle authorised to operate in each country crossed and the motorway vignettes in order.',
        },
      },
    ],
    nearby: ['linz', 'salzburg', 'hallstatt'],
  },
  {
    slug: 'zell-am-see',
    name: { fr: 'Zell am See', en: 'Zell am See' },
    country: { fr: 'Autriche', en: 'Austria' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'L’aéroport majeur le plus proche est Salzbourg W. A. Mozart (SZG), à 80 km au nord-est : comptez environ 1 h 15 de route par la B311 jusqu’au bord du lac. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'The nearest major airport is Salzburg W. A. Mozart (SZG), 80 km to the north-east: allow around 1 h 15 on the B311 to reach the lakeside. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Entre son lac aux eaux claires et le glacier du Kitzsteinhorn, Zell am See conjugue station d’été et domaine skiable quatre saisons avec sa voisine Kaprun. Votre **chauffeur privé à Zell am See** assure les transferts depuis les aéroports de Salzbourg, Munich ou Innsbruck, les liaisons vers les remontées de la Schmittenhöhe et du glacier, et la mise à disposition à la journée — véhicules équipés pour l’hiver, coffres à skis, sièges enfants sur demande, prix fixes quelle que soit la saison.',
        'La région de Zell am See–Kaprun est aussi un camp de base alpin : la **route du Grossglockner** commence à trente minutes, les cascades de Krimml — les plus hautes d’Autriche — et les gorges de la Sigmund-Thun sont à portée de demi-journée, Kitzbühel et Salzbourg à une heure. Très prisée des visiteurs du Golfe en été, la station exige des véhicules de grande capacité que nous fournissons, avec chauffeurs anglophones.',
      ],
      en: [
        'Between its clear lake and the Kitzsteinhorn glacier, Zell am See pairs a summer resort with year-round skiing alongside its neighbour Kaprun. Your **private chauffeur in Zell am See** handles transfers from Salzburg, Munich or Innsbruck airports, connections to the Schmittenhöhe and glacier lifts, and full-day hire — winter-equipped vehicles, ski racks, child seats on request, fixed prices in every season.',
        'The Zell am See–Kaprun region is also an alpine base camp: the **Grossglockner High Alpine Road** starts thirty minutes away, the Krimml waterfalls — Austria’s highest — and the Sigmund Thun gorge are within a half-day’s reach, Kitzbühel and Salzburg an hour away. Highly popular with Gulf visitors in summer, the resort calls for the full-size vehicles we provide, with English-speaking chauffeurs.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Route alpine du Grossglockner', en: 'Grossglockner High Alpine Road' },
        teaser: {
          fr: 'Depuis Zell am See, l’entrée de la route à Fusch est à 30 minutes : 36 virages jusqu’à l’Edelweissspitze à 2 571 mètres, puis la terrasse Kaiser-Franz-Josefs-Höhe face au glacier de Pasterze. Marmottes, bouquetins et déjeuner d’altitude.',
          en: 'From Zell am See, the road’s entrance at Fusch is 30 minutes away: 36 hairpins up to the Edelweissspitze at 2,571 metres, then the Kaiser-Franz-Josefs-Höhe terrace facing the Pasterze glacier. Marmots, ibex and a mountain lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Cascades de Krimml', en: 'Krimml waterfalls' },
        teaser: {
          fr: 'À 55 km par la vallée de la Salzach, les plus hautes cascades d’Autriche : 380 mètres de chute en trois paliers, sentier panoramique aménagé le long de l’eau. Arrêt possible au barrage de Kaprun ou aux gorges de Kitzloch au retour.',
          en: '55 km along the Salzach valley, Austria’s highest waterfalls: a 380-metre drop in three tiers, with a panoramic trail beside the water. Optional stop at the Kaprun reservoirs or the Kitzloch gorge on the way back.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '440',
      },
      {
        title: { fr: 'Kitzsteinhorn, glacier à 3 029 mètres', en: 'Kitzsteinhorn, glacier at 3,029 metres' },
        teaser: {
          fr: 'Dépose aux remontées de Kaprun, montée au Top of Salzburg à 3 029 mètres : neige éternelle, plateforme panoramique, tunnel dans la roche et cinéma d’altitude. Ski d’été ou simple contemplation, véhicule en attente au pied des pistes.',
          en: 'Drop-off at the Kaprun lifts, then up to the Top of Salzburg at 3,029 metres: year-round snow, a panoramic platform, a tunnel through the rock and a summit cinema. Summer skiing or pure contemplation, vehicle waiting at the base.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Grandes Marmites de glace et lacs de Kaprun', en: 'Ice caves and the Kaprun reservoirs' },
        teaser: {
          fr: 'La grotte de glace d’Eisriesenwelt à Werfen — la plus vaste du monde — à 50 minutes, ou les barrages suspendus de Kaprun à 2 040 mètres, selon la saison. Votre chauffeur adapte l’itinéraire à la météo et aux horaires d’ouverture.',
          en: 'The Eisriesenwelt ice cave at Werfen — the largest in the world — 50 minutes away, or the high dams of Kaprun at 2,040 metres, depending on the season. Your chauffeur adapts the route to weather and opening hours.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Salzbourg dans la journée depuis le lac', en: 'Salzburg in a day from the lake' },
        teaser: {
          fr: 'À 80 km, la vieille ville de Mozart, la forteresse de Hohensalzburg et la Getreidegasse : départ matinal, journée complète sur place, retour au bord du lac en soirée. Guide privé et tables réservées sur demande.',
          en: '80 km away, Mozart’s old town, the Hohensalzburg fortress and the Getreidegasse: an early start, a full day in the city, back at the lakeside by evening. Private guide and restaurant bookings on request.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Salzbourg et Zell am See ?',
          en: 'How much does a transfer between Salzburg Airport and Zell am See cost?',
        },
        a: {
          fr: 'Le transfert privé entre Salzbourg W. A. Mozart (SZG) et Zell am See — 80 km, environ 1 h 15 de route — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Salzburg W. A. Mozart Airport (SZG) and Zell am See — 80 km, about a 1 h 15 drive — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Vos véhicules sont-ils équipés pour rejoindre Zell am See en hiver ?',
          en: 'Are your vehicles equipped to reach Zell am See in winter?',
        },
        a: {
          fr: 'Oui. Tous nos véhicules sont chaussés de pneus neige d’octobre à avril, avec chaînes à bord si les conditions l’exigent, coffres ou remorques à skis selon la taille du groupe. Les chauffeurs pratiquent la B311 et les accès de Kaprun toute l’année, et le prix reste fixe quel que soit l’état de la route.',
          en: 'Yes. All our vehicles run on snow tyres from October to April, carry chains when conditions require, and offer ski racks or trailers depending on group size. Our chauffeurs drive the B311 and the Kaprun approaches all year round, and the price stays fixed whatever the road conditions.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous aussi les transferts depuis Munich ou Innsbruck vers Zell am See ?',
          en: 'Do you also cover transfers from Munich or Innsbruck to Zell am See?',
        },
        a: {
          fr: 'Oui. L’aéroport de Munich (MUC) est à environ 215 km, soit 2 h 30 de route, et celui d’Innsbruck (INN) à 150 km par le col de Gerlos ou la vallée de l’Inn. Ces trajets sont devisés à l’avance, à prix fixe, avec un véhicule autorisé à circuler en Allemagne comme en Autriche.',
          en: 'Yes. Munich Airport (MUC) is around 215 km away, a 2 h 30 drive, and Innsbruck (INN) 150 km via the Gerlos pass or the Inn valley. These journeys are quoted in advance at a fixed price, with a vehicle authorised to operate in both Germany and Austria.',
        },
      },
    ],
    nearby: ['salzburg', 'kitzbuhel', 'hallstatt', 'innsbruck'],
  },
  {
    slug: 'kitzbuhel',
    name: { fr: 'Kitzbühel', en: 'Kitzbühel' },
    country: { fr: 'Autriche', en: 'Austria' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'Deux aéroports desservent Kitzbühel : Innsbruck (INN), à 95 km à l’ouest — environ 1 h 15 de route —, et Salzbourg W. A. Mozart (SZG), à 80 km au nord-est, en un peu plus d’une heure ; Munich (MUC) reste une alternative à 160 km. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Two airports serve Kitzbühel: Innsbruck (INN), 95 km to the west — roughly a 1 h 15 drive —, and Salzburg W. A. Mozart (SZG), 80 km to the north-east, in just over an hour; Munich (MUC) is an alternative at 160 km. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Station la plus légendaire des Alpes autrichiennes, Kitzbühel aligne façades médiévales peintes, boutiques de la Vorderstadt et palaces de tradition au pied du Hahnenkamm. Votre **chauffeur privé à Kitzbühel** assure les transferts depuis Innsbruck, Salzbourg et Munich, les liaisons quotidiennes vers les remontées et les chalets, la mise à disposition en soirée — véhicules équipés pour l’hiver, coffres à skis, discrétion absolue pour une clientèle qui la demande.',
        'En janvier, la descente du **Hahnenkamm sur la Streif** transforme la ville en capitale mondiale du ski : accès réglementés, hélicoptères, 100 000 spectateurs — une logistique que votre chauffeur anticipe, réservation très en amont conseillée. Le reste de l’année, Kitzbühel rayonne vers le lac Schwarzsee, les golfs d’Eichenheim et de Schwarzsee-Reith, le parc sauvage des Kitzbüheler Alpen et Munich à moins de deux heures.',
      ],
      en: [
        'The most storied resort in the Austrian Alps, Kitzbühel lines up painted medieval façades, the boutiques of the Vorderstadt and heritage grand hotels at the foot of the Hahnenkamm. Your **private chauffeur in Kitzbühel** covers transfers from Innsbruck, Salzburg and Munich, daily runs to the lifts and chalets, and evening hire — winter-equipped vehicles, ski racks, and absolute discretion for a clientele that expects it.',
        'In January, the **Hahnenkamm race down the Streif** turns the town into the world capital of skiing: restricted access, helicopters, 100,000 spectators — logistics your chauffeur anticipates, with early booking strongly advised. The rest of the year, Kitzbühel reaches out to the Schwarzsee lake, the Eichenheim and Schwarzsee-Reith golf courses, the Kitzbühel Alps wildlife park and Munich under two hours away.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Week-end du Hahnenkamm', en: 'Hahnenkamm race weekend' },
        teaser: {
          fr: 'La descente la plus redoutée du ski mondial, vue des tribunes de la Streif ou d’une loge VIP : votre chauffeur gère les accès réglementés du week-end de course, les navettes entre chalet, tribunes et soirées, et le retour tardif après la Weisswurstparty.',
          en: 'The most feared downhill in world skiing, watched from the Streif grandstands or a VIP box: your chauffeur handles the restricted race-weekend access, shuttles between chalet, stands and parties, and the late return after the Weisswurstparty.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '980',
      },
      {
        title: { fr: 'Kitzbüheler Horn et lac Schwarzsee', en: 'Kitzbüheler Horn and the Schwarzsee' },
        teaser: {
          fr: 'La route panoramique à péage jusqu’à l’Alpenhaus du Kitzbüheler Horn, son jardin alpin à 1 880 mètres et la vue sur le Wilder Kaiser, puis baignade ou tour du lac Schwarzsee, l’un des lacs de montagne les plus chauds du Tyrol.',
          en: 'The panoramic toll road up to the Alpenhaus on the Kitzbüheler Horn, its alpine garden at 1,880 metres and the view of the Wilder Kaiser, then a swim or stroll at the Schwarzsee, one of Tyrol’s warmest mountain lakes.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Munich shopping et Maximilianstrasse', en: 'Munich shopping and Maximilianstrasse' },
        teaser: {
          fr: 'À 160 km, la capitale bavaroise pour une journée : les maisons de la Maximilianstrasse, la Residenz, déjeuner chez Dallmayr ou au Tantris. Passage de frontière sans formalité, retour à votre chalet en soirée, coffre chargé.',
          en: '160 km away, the Bavarian capital for a day: the houses of Maximilianstrasse, the Residenz, lunch at Dallmayr or Tantris. Seamless border crossing, evening return to your chalet with a full boot.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Gorges de la Kitzlochklamm et Krimml', en: 'Kitzlochklamm gorge and Krimml falls' },
        teaser: {
          fr: 'Par le col de Thurn, les passerelles de la Kitzlochklamm au-dessus des eaux turquoise, puis les cascades de Krimml, les plus hautes d’Autriche avec 380 mètres de chute. Journée nature au départ de votre hôtel, pique-nique ou auberge d’alpage.',
          en: 'Over the Thurn pass, the walkways of the Kitzlochklamm above turquoise water, then the Krimml waterfalls, Austria’s highest at 380 metres. A nature day from your hotel door, with a picnic or a mountain-hut lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Golf et soirée gastronomique à Kitzbühel', en: 'Golf and a gourmet evening in Kitzbühel' },
        teaser: {
          fr: 'Dépose au départ du parcours d’Eichenheim, dessiné par Kyle Phillips face au Wilder Kaiser, puis dîner au restaurant étoilé du Tennerhof ou dans la Vorderstadt. Le véhicule vous attend, retour au chalet sans contrainte d’horaire.',
          en: 'Drop-off at the first tee of Eichenheim, the Kyle Phillips course facing the Wilder Kaiser, then dinner at the starred Tennerhof restaurant or in the Vorderstadt. The vehicle waits; back to the chalet with no time pressure.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '520',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport d’Innsbruck ou de Salzbourg et Kitzbühel ?',
          en: 'How much does a transfer between Innsbruck or Salzburg Airport and Kitzbühel cost?',
        },
        a: {
          fr: 'Le transfert privé vers Kitzbühel est facturé à prix fixe, communiqué à la réservation : comptez environ 1 h 15 depuis Innsbruck (INN, 95 km) et un peu plus d’une heure depuis Salzbourg (SZG, 80 km). Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard sont inclus.',
          en: 'A private transfer to Kitzbühel is charged at a fixed price, confirmed at booking: allow around 1 h 15 from Innsbruck (INN, 95 km) and just over an hour from Salzburg (SZG, 80 km). Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver longtemps à l’avance pour le week-end du Hahnenkamm ?',
          en: 'How far in advance should I book for the Hahnenkamm race weekend?',
        },
        a: {
          fr: 'Oui. Fin janvier, la demande dépasse largement l’offre et les accès à la ville sont réglementés pendant les courses. Nous recommandons de réserver plusieurs semaines à l’avance ; votre chauffeur connaît les itinéraires autorisés, les points de dépose proches des tribunes et assure les retours tardifs après les soirées.',
          en: 'Yes. In late January demand far exceeds supply and access to the town is restricted during the races. We recommend booking several weeks ahead; your chauffeur knows the authorised routes, the drop-off points near the grandstands and covers late returns after the parties.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous une navette quotidienne entre notre chalet et les remontées mécaniques ?',
          en: 'Do you offer a daily shuttle between our chalet and the ski lifts?',
        },
        a: {
          fr: 'Oui. En hiver, la mise à disposition à la demi-journée ou à la journée est la formule idéale : dépose au pied de la Hahnenkammbahn ou de la Fleckalmbahn le matin, courses ou rendez-vous en ville pendant que vous skiez, reprise à l’heure convenue — matériel chargé et déchargé par le chauffeur.',
          en: 'Yes. In winter, half-day or full-day hire is the ideal formula: drop-off at the base of the Hahnenkammbahn or Fleckalmbahn in the morning, errands or town appointments while you ski, pick-up at the agreed time — with the chauffeur loading and unloading your equipment.',
        },
      },
    ],
    nearby: ['innsbruck', 'zell-am-see', 'salzburg', 'munich'],
  },
  {
    slug: 'geneva',
    name: { fr: 'Genève', en: 'Geneva' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'dach-nordics',
    airport: 'Genève-Cointrin (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève-Cointrin (GVA) se trouve à 5 km au nord-ouest du centre : comptez 15 minutes pour rejoindre la rade et le quartier des banques, un peu plus aux heures de pointe. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Geneva-Cointrin Airport (GVA) lies 5 km north-west of the centre: allow 15 minutes to reach the lakefront and the banking district, slightly more at rush hour. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Siège européen des Nations unies et capitale mondiale de la haute horlogerie, Genève déroule sa rade, son Jet d’eau et sa rue du Rhône entre lac et Salève. Votre **chauffeur privé à Genève** dessert le Palais des Nations et les organisations internationales, les banques privées de la Corraterie, les manufactures horlogères et les cliniques du canton. Berlines Mercedes et vans de grande capacité, prix fixes confirmés à la réservation, discrétion absolue et chauffeurs bilingues sur demande.',
        'Genève est aussi l’un des meilleurs points de départ des Alpes. **Chamonix et le Mont-Blanc** se rejoignent en une heure, les terrasses de Lavaux et le château de Chillon longent le Léman vers l’est, Annecy et son lac s’ouvrent côté français. En mise à disposition à la journée, votre chauffeur enchaîne cols, vignobles et rives sans que vous touchiez un volant — itinéraires sur mesure, arrêts photo, tables réservées.',
      ],
      en: [
        'European seat of the United Nations and world capital of fine watchmaking, Geneva unfolds its lakefront, its Jet d’Eau and the Rue du Rhône between the lake and the Salève. Your **private chauffeur in Geneva** serves the Palais des Nations and the international organisations, the private banks of the Corraterie, the watch manufactures and the canton’s clinics. Mercedes sedans and full-size vans, fixed prices confirmed at booking, absolute discretion and bilingual chauffeurs on request.',
        'Geneva is also one of the finest gateways to the Alps. **Chamonix and Mont Blanc** are an hour away, the Lavaux terraces and Chillon Castle line Lake Geneva to the east, and Annecy and its lake open up on the French side. With a full-day hire, your chauffeur links passes, vineyards and lakeshores without you ever touching a steering wheel — tailor-made itineraries, photo stops, tables booked ahead.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Chamonix et le Mont-Blanc', en: 'Chamonix and Mont Blanc' },
        teaser: {
          fr: 'À 85 km de Genève, la capitale de l’alpinisme au pied du toit de l’Europe : téléphérique de l’Aiguille du Midi à 3 842 mètres, mer de Glace par le train du Montenvers, déjeuner face aux Drus. Passage de frontière sans formalité.',
          en: '85 km from Geneva, the capital of mountaineering at the foot of Europe’s highest peak: the Aiguille du Midi cable car at 3,842 metres, the Mer de Glace via the Montenvers railway, lunch facing the Drus. Seamless border crossing.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Lavaux et la Riviera vaudoise', en: 'Lavaux and the Vaud Riviera' },
        teaser: {
          fr: 'Les terrasses de Lavaux, classées à l’UNESCO, plongent dans le Léman entre Lausanne et Vevey. Dégustation de chasselas chez un vigneron d’Épesses ou de Saint-Saphorin, puis Chaplin’s World à Corsier et le château de Chillon.',
          en: 'The UNESCO-listed Lavaux terraces tumble into Lake Geneva between Lausanne and Vevey. A Chasselas tasting with a winemaker in Épesses or Saint-Saphorin, then Chaplin’s World in Corsier and Chillon Castle.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '850',
      },
      {
        title: { fr: 'Annecy, la Venise des Alpes', en: 'Annecy, the Venice of the Alps' },
        teaser: {
          fr: 'À 45 km au sud de Genève, les canaux du Thiou, le Palais de l’Île et les eaux turquoise du lac le plus pur d’Europe. Déjeuner en vieille ville ou aux tables étoilées de Veyrier-du-Lac, retour par le col de la Croisette.',
          en: '45 km south of Geneva, the Thiou canals, the Palais de l’Île and the turquoise waters of Europe’s purest lake. Lunch in the old town or at the starred tables of Veyrier-du-Lac, return via the Croisette pass.',
        },
        duration: { fr: 'Demi-journée ou journée', en: 'Half or full day' },
        price: '490',
      },
      {
        title: { fr: 'Montreux et le château de Chillon', en: 'Montreux and Chillon Castle' },
        teaser: {
          fr: 'La rive est du Léman jusqu’à Montreux : quais fleuris, statue de Freddie Mercury, puis la forteresse de Chillon posée sur son rocher, immortalisée par Byron. Arrêt à Vevey et dans les vignes de Lavaux au retour.',
          en: 'The eastern shore of Lake Geneva to Montreux: flowered quays, the Freddie Mercury statue, then the fortress of Chillon on its rock, immortalised by Byron. Stops in Vevey and the Lavaux vines on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Genève horlogère et soirée sur la rade', en: 'Watchmaking Geneva and an evening on the lakefront' },
        teaser: {
          fr: 'Le Patek Philippe Museum, les salons de la rue du Rhône et un rendez-vous en manufacture sur demande, puis dîner au bord de la rade — Bayview, Il Lago ou la Vieille-Ville. Le véhicule vous attend à chaque étape.',
          en: 'The Patek Philippe Museum, the Rue du Rhône boutiques and a manufacture appointment on request, then dinner on the lakefront — Bayview, Il Lago or the Old Town. The vehicle waits at every stop.',
        },
        duration: { fr: 'Demi-journée ou soirée', en: 'Half day or evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève-Cointrin et le centre-ville ?',
          en: 'How much does a transfer between Geneva-Cointrin Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève-Cointrin (GVA) et le centre de Genève est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Geneva-Cointrin (GVA) and central Geneva is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers les stations de ski depuis Genève ?',
          en: 'Do you provide ski resort transfers from Geneva?',
        },
        a: {
          fr: 'Oui. Genève est la porte d’entrée des Alpes : nous desservons régulièrement Chamonix, Megève, Courchevel, Verbier, Crans-Montana ou Zermatt via Täsch. Véhicules équipés pour l’hiver, coffres adaptés aux skis, prix fixe communiqué à l’avance quelle que soit la météo.',
          en: 'Yes. Geneva is the gateway to the Alps: we regularly serve Chamonix, Megève, Courchevel, Verbier, Crans-Montana and Zermatt via Täsch. Winter-equipped vehicles, ski-friendly luggage space, and a fixed price confirmed in advance whatever the weather.',
        },
      },
      {
        q: {
          fr: 'Votre chauffeur peut-il assurer des trajets transfrontaliers vers la France ?',
          en: 'Can your chauffeur handle cross-border journeys into France?',
        },
        a: {
          fr: 'Oui. Genève est enclavée dans la frontière française : Chamonix, Annecy, Évian, Divonne ou Lyon font partie de nos trajets courants. Les courses transfrontalières sont devisées à l’avance, à prix fixe, avec un véhicule autorisé à circuler dans les deux pays.',
          en: 'Yes. Geneva sits against the French border: Chamonix, Annecy, Évian, Divonne and Lyon are among our routine journeys. Cross-border trips are quoted in advance at a fixed price, with a vehicle authorised to operate in both countries.',
        },
      },
    ],
    nearby: ['lausanne', 'montreux', 'bern', 'zermatt-tasch'],
  },
  {
    slug: 'zurich',
    name: { fr: 'Zurich', en: 'Zurich' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'dach-nordics',
    airport: 'Zurich-Kloten (ZRH)',
    airportTransfer: {
      fr: 'L’aéroport de Zurich-Kloten (ZRH) se situe à 12 km au nord du centre : comptez 20 minutes pour rejoindre la Bahnhofstrasse ou la Paradeplatz hors heures de pointe. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol pour ajuster l’heure de prise en charge.',
      en: 'Zurich-Kloten Airport (ZRH) lies 12 km north of the centre: allow 20 minutes to reach Bahnhofstrasse or Paradeplatz outside rush hour. Your chauffeur waits in the arrivals hall with a name board and tracks your flight to adjust the pick-up time.',
    },
    intro: {
      fr: [
        'Première place financière de Suisse et plus grande ville du pays, Zurich aligne les sièges bancaires de la Paradeplatz, les boutiques de la Bahnhofstrasse et les ruelles médiévales du Niederdorf au bord de la Limmat. Votre **chauffeur privé à Zurich** accompagne conseils d’administration, roadshows et rendez-vous en clinique, comme les soirées à l’Opéra ou au Dolder Grand. Berlines et vans premium, ponctualité suisse, prix fixes annoncés à l’avance, chauffeurs anglophones et germanophones.',
        'Depuis Zurich, la Suisse entière est à portée de route. Les **chutes du Rhin**, les plus puissantes d’Europe, se rejoignent en 45 minutes, Lucerne et son lac en une heure, le Jungfraujoch et les sommets de l’Oberland bernois en excursion à la journée. Votre chauffeur compose l’itinéraire, gère billets de train panoramique et tables d’altitude, et vous ramène à votre hôtel sans contrainte d’horaire.',
      ],
      en: [
        'Switzerland’s leading financial centre and its largest city, Zurich lines up the banking headquarters of Paradeplatz, the boutiques of Bahnhofstrasse and the medieval lanes of the Niederdorf along the Limmat. Your **private chauffeur in Zurich** covers board meetings, roadshows and clinic appointments, as well as evenings at the Opera House or the Dolder Grand. Premium sedans and vans, Swiss punctuality, fixed prices confirmed in advance, English- and German-speaking chauffeurs.',
        'From Zurich, the whole of Switzerland lies within reach. The **Rhine Falls**, Europe’s most powerful, are 45 minutes away, Lucerne and its lake one hour, and the Jungfraujoch and the peaks of the Bernese Oberland make a superb day trip. Your chauffeur builds the itinerary, handles panoramic train tickets and mountaintop tables, and brings you back to your hotel with no timetable to worry about.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Chutes du Rhin et Stein am Rhein', en: 'Rhine Falls and Stein am Rhein' },
        teaser: {
          fr: 'À 45 km au nord de Zurich, 600 m³ d’eau par seconde se jettent sous le château de Laufen ; embarquement possible jusqu’au rocher central. Puis Stein am Rhein et ses façades peintes du XVIᵉ siècle, au bord du Rhin.',
          en: '45 km north of Zurich, 600 cubic metres of water per second thunder beneath Laufen Castle; boats run out to the central rock. Then Stein am Rhein and its painted 16th-century façades on the banks of the Rhine.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Lucerne et le mont Pilate', en: 'Lucerne and Mount Pilatus' },
        teaser: {
          fr: 'À une heure de Zurich, le pont de la Chapelle, la vieille ville peinte et le lac des Quatre-Cantons. Montée au Pilate par le train à crémaillère le plus raide du monde (48 %), redescente en téléphérique panoramique.',
          en: 'One hour from Zurich, the Chapel Bridge, the painted old town and Lake Lucerne. Up Mount Pilatus on the world’s steepest cogwheel railway (48%), back down by panoramic cable car.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '850',
      },
      {
        title: { fr: 'Jungfraujoch, le Top of Europe', en: 'Jungfraujoch, the Top of Europe' },
        teaser: {
          fr: 'Route vers Grindelwald par Interlaken, puis l’Eiger Express et le train du Jungfrau jusqu’à la gare la plus haute d’Europe, à 3 454 mètres. Palais des glaces, terrasse du Sphinx et glacier d’Aletsch. Votre chauffeur gère billets et correspondances.',
          en: 'Drive to Grindelwald via Interlaken, then the Eiger Express and the Jungfrau Railway to Europe’s highest station at 3,454 metres. Ice Palace, Sphinx terrace and the Aletsch Glacier. Your chauffeur handles tickets and connections.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1150',
      },
      {
        title: { fr: 'Appenzell et le pays du fromage', en: 'Appenzell and cheese country' },
        teaser: {
          fr: 'À 90 minutes à l’est, le village aux façades peintes au pied de l’Alpstein : fromagerie de démonstration à Stein, dégustation d’Appenzeller, puis montée à l’Ebenalp et arrêt au lac de Seealpsee selon la saison.',
          en: '90 minutes east, the village of painted façades at the foot of the Alpstein: the show dairy in Stein, an Appenzeller tasting, then up to Ebenalp with a stop at the Seealpsee lake in season.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Soirée zurichoise, du Niederdorf au Dolder', en: 'Zurich evening, from the Niederdorf to the Dolder' },
        teaser: {
          fr: 'Dîner à la Kronenhalle sous les Chagall, au Pavillon du Baur au Lac ou dans les adresses de Zurich-West, puis les quais du lac illuminés. Dépose devant chaque porte, véhicule à disposition toute la soirée.',
          en: 'Dinner at the Kronenhalle beneath the Chagalls, at the Baur au Lac’s Pavillon or in the Zurich-West scene, then the illuminated lakeside quays. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Zurich-Kloten et le centre-ville ?',
          en: 'How much does a transfer between Zurich-Kloten Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Zurich-Kloten (ZRH) et le centre de Zurich est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard sont inclus.',
          en: 'A private transfer between Zurich-Kloten (ZRH) and central Zurich is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition pour les déplacements d’affaires à Zurich ?',
          en: 'Do you offer hourly hire for business travel in Zurich?',
        },
        a: {
          fr: 'Oui. La mise à disposition à l’heure ou à la journée est notre formule la plus demandée à Zurich : votre chauffeur enchaîne Paradeplatz, Zurich-West, Opfikon ou le Circle de l’aéroport, attend entre chaque rendez-vous et s’adapte aux changements d’agenda en temps réel.',
          en: 'Yes. Hourly or full-day hire is our most requested service in Zurich: your chauffeur links Paradeplatz, Zurich-West, Opfikon or the airport’s Circle district, waits between each meeting and adapts to schedule changes in real time.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers Saint-Moritz, Davos ou les stations des Grisons ?',
          en: 'Do you provide transfers to St. Moritz, Davos or the Graubünden resorts?',
        },
        a: {
          fr: 'Oui. Depuis Zurich ou l’aéroport, nous rejoignons Saint-Moritz en environ 2 h 30, Davos en 2 heures, Flims-Laax en 1 h 45. Véhicules équipés pour l’hiver, prix fixe quel que soit l’état des routes, et service renforcé pendant le Forum de Davos sur réservation anticipée.',
          en: 'Yes. From Zurich or the airport we reach St. Moritz in around 2.5 hours, Davos in 2 hours and Flims-Laax in 1 hour 45. Winter-equipped vehicles, a fixed price whatever the road conditions, and reinforced service during the Davos Forum with advance booking.',
        },
      },
    ],
    nearby: ['lucerne', 'basel', 'bern', 'grindelwald'],
  },
  {
    slug: 'basel',
    name: { fr: 'Bâle', en: 'Basel' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'dach-nordics',
    airport: 'EuroAirport Bâle-Mulhouse (BSL)',
    airportTransfer: {
      fr: 'L’EuroAirport Bâle-Mulhouse (BSL) se trouve à 8 km au nord-ouest du centre, côté français de la frontière : comptez 15 à 20 minutes pour rejoindre la Marktplatz ou le quartier des foires. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'EuroAirport Basel-Mulhouse (BSL) lies 8 km north-west of the centre, on the French side of the border: allow 15 to 20 minutes to reach the Marktplatz or the exhibition district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Posée sur le coude du Rhin, au point de rencontre de la Suisse, de la France et de l’Allemagne, Bâle est la capitale culturelle et pharmaceutique du pays : une quarantaine de musées, les sièges de Roche et Novartis, et chaque juin la foire Art Basel. Votre **chauffeur privé à Bâle** dessert les campus des laboratoires, la Messe pendant les salons — Art Basel, Baselworld — et les hôtels de la vieille ville, à prix fixe, en berline ou van premium.',
        'La position trifrontalière de Bâle en fait un point de départ rare. La **Fondation Beyeler** à Riehen et le Vitra Campus de Weil am Rhein sont à un quart d’heure, Colmar et la route des Vins d’Alsace à moins d’une heure, la Forêt-Noire s’ouvre juste de l’autre côté du Rhin. Votre chauffeur passe les frontières sans formalité et compose des itinéraires à trois pays dans la même journée.',
      ],
      en: [
        'Set on the bend of the Rhine where Switzerland, France and Germany meet, Basel is the country’s cultural and pharmaceutical capital: some forty museums, the headquarters of Roche and Novartis, and the Art Basel fair every June. Your **private chauffeur in Basel** serves the pharma campuses, the Messe during the major fairs — Art Basel above all — and the old-town hotels, at a fixed price, in a premium sedan or van.',
        'Basel’s three-border position makes it a rare starting point. The **Fondation Beyeler** in Riehen and the Vitra Campus in Weil am Rhein are fifteen minutes away, Colmar and the Alsace Wine Route under an hour, and the Black Forest begins just across the Rhine. Your chauffeur crosses the borders without formality and builds three-country itineraries within a single day.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Fondation Beyeler et Vitra Campus', en: 'Fondation Beyeler and the Vitra Campus' },
        teaser: {
          fr: 'Le musée de Renzo Piano à Riehen — Monet, Rothko, Giacometti — puis, côté allemand, le Vitra Campus de Weil am Rhein : bâtiments de Gehry, Zaha Hadid et Herzog & de Meuron, Vitra Design Museum. L’art et le design en une demi-journée.',
          en: 'Renzo Piano’s museum in Riehen — Monet, Rothko, Giacometti — then, on the German side, the Vitra Campus in Weil am Rhein: buildings by Gehry, Zaha Hadid and Herzog & de Meuron, plus the Vitra Design Museum. Art and design in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Colmar et la route des Vins d’Alsace', en: 'Colmar and the Alsace Wine Route' },
        teaser: {
          fr: 'À 70 km au nord de Bâle, la Petite Venise, le retable d’Issenheim au musée Unterlinden, puis Eguisheim et Riquewihr entre les vignes. Dégustation de riesling et gewurztraminer chez un domaine, retour en fin de journée.',
          en: '70 km north of Basel, Little Venice, the Isenheim Altarpiece at the Unterlinden Museum, then Eguisheim and Riquewihr among the vines. A Riesling and Gewurztraminer tasting at an estate, returning in the early evening.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Forêt-Noire et Fribourg-en-Brisgau', en: 'Black Forest and Freiburg im Breisgau' },
        teaser: {
          fr: 'De l’autre côté du Rhin, la cathédrale de Fribourg et ses ruelles aux Bächle, puis la route panoramique vers le lac Titisee et Triberg. Forêts de sapins, fermes à toit profond et pause gâteau de la Forêt-Noire à la source.',
          en: 'Across the Rhine, Freiburg’s minster and its Bächle-lined lanes, then the scenic road to Lake Titisee and Triberg. Fir forests, deep-roofed farmhouses and a Black Forest gateau tasted at the source.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Lucerne et le lac des Quatre-Cantons', en: 'Lucerne and Lake Lucerne' },
        teaser: {
          fr: 'À une heure de Bâle, le pont de la Chapelle, le Lion de Lucerne et les façades peintes de la vieille ville. Croisière sur le lac ou montée au Bürgenstock pour le panorama, déjeuner en terrasse au bord de l’eau.',
          en: 'One hour from Basel, the Chapel Bridge, the Lion Monument and the painted façades of the old town. A lake cruise or a run up to the Bürgenstock for the panorama, with a waterside terrace lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '820',
      },
      {
        title: { fr: 'Soirée bâloise entre Rhin et vieille ville', en: 'Basel evening between the Rhine and the old town' },
        teaser: {
          fr: 'Dîner au Cheval Blanc du Grand Hôtel Les Trois Rois — trois étoiles face au Rhin — ou dans les caves du Petit-Bâle, puis la Marktplatz et la cathédrale illuminées. Le véhicule vous attend, retour à votre hôtel sans contrainte.',
          en: 'Dinner at the Cheval Blanc in the Grand Hôtel Les Trois Rois — three stars overlooking the Rhine — or in the cellars of Kleinbasel, then the illuminated Marktplatz and cathedral. The vehicle waits; effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’EuroAirport et le centre de Bâle ?',
          en: 'How much does a transfer between EuroAirport and central Basel cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’EuroAirport Bâle-Mulhouse (BSL) et le centre de Bâle est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif — précisez votre sortie, côté suisse ou côté français —, le suivi du vol et 60 minutes d’attente offertes.',
          en: 'A private transfer between EuroAirport Basel-Mulhouse (BSL) and central Basel is charged at a fixed price, confirmed at booking. It includes a meet-and-greet with a name board — tell us your exit, Swiss or French side —, flight tracking and 60 minutes of complimentary waiting time.',
        },
      },
      {
        q: {
          fr: 'Votre chauffeur peut-il assurer des trajets vers la France et l’Allemagne depuis Bâle ?',
          en: 'Can your chauffeur handle journeys into France and Germany from Basel?',
        },
        a: {
          fr: 'Oui. Bâle touche les deux frontières : Colmar, Mulhouse, Strasbourg côté français, Fribourg-en-Brisgau, Baden-Baden ou Francfort côté allemand font partie de nos trajets courants. Chaque course transfrontalière est devisée à l’avance, à prix fixe, avec un véhicule autorisé dans les trois pays.',
          en: 'Yes. Basel touches both borders: Colmar, Mulhouse and Strasbourg on the French side, Freiburg, Baden-Baden and Frankfurt on the German side are among our routine journeys. Every cross-border trip is quoted in advance at a fixed price, with a vehicle authorised in all three countries.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver longtemps à l’avance pendant Art Basel ?',
          en: 'How far in advance should I book during Art Basel?',
        },
        a: {
          fr: 'Pendant Art Basel, en juin, la demande dépasse largement l’offre et les abords de la Messe sont réglementés. Nous recommandons de réserver au moins une semaine à l’avance ; votre chauffeur connaît les accès VIP, les points de dépose de la Messeplatz et les horaires des vernissages.',
          en: 'During Art Basel in June, demand far exceeds supply and access around the Messe is regulated. We recommend booking at least a week ahead; your chauffeur knows the VIP entrances, the Messeplatz drop-off points and the preview schedules.',
        },
      },
    ],
    nearby: ['zurich', 'bern', 'freiburg', 'baden-baden'],
  },
  {
    slug: 'bern',
    name: { fr: 'Berne', en: 'Bern' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'dach-nordics',
    airport: 'Berne-Belp (BRN)',
    airportTransfer: {
      fr: 'L’aéroport de Berne-Belp (BRN) se trouve à 9 km au sud-est du centre : comptez 20 minutes pour rejoindre la Zytglogge et la vieille ville. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel ; nous assurons aussi les arrivées via Zurich (125 km) ou Genève (160 km).',
      en: 'Bern-Belp Airport (BRN) lies 9 km south-east of the centre: allow 20 minutes to reach the Zytglogge and the old town. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time; we also cover arrivals via Zurich (125 km) or Geneva (160 km).',
    },
    intro: {
      fr: [
        'Capitale fédérale posée dans une boucle de l’Aar, Berne déroule six kilomètres d’arcades médiévales classées à l’UNESCO, la tour de la Zytglogge et le Palais fédéral. Votre **chauffeur privé à Berne** accompagne délégations diplomatiques, rendez-vous auprès des administrations fédérales et visites d’affaires — Swisscom, La Poste, les assurances de la ville —, comme les séjours privés dans les hôtels de la vieille ville. Prix fixes, discrétion, chauffeurs multilingues sur demande.',
        'Berne est aussi le seuil de l’Oberland bernois. **Interlaken et les lacs de Thoune et de Brienz** sont à 45 minutes, la Jungfrau et ses villages — Grindelwald, Lauterbrunnen — à un peu plus d’une heure, Gruyères et son château côté fribourgeois. En mise à disposition à la journée, votre chauffeur relie châteaux, fromageries et belvédères alpins sans rupture de confort.',
      ],
      en: [
        'The federal capital set in a loop of the River Aare, Bern unrolls six kilometres of UNESCO-listed medieval arcades, the Zytglogge clock tower and the Federal Palace. Your **private chauffeur in Bern** accompanies diplomatic delegations, appointments with the federal administration and business visits — Swisscom, Swiss Post, the city’s insurers — as well as private stays in the old-town hotels. Fixed prices, discretion, multilingual chauffeurs on request.',
        'Bern is also the doorstep of the Bernese Oberland. **Interlaken and the lakes of Thun and Brienz** are 45 minutes away, the Jungfrau villages — Grindelwald, Lauterbrunnen — little more than an hour, and Gruyères with its castle lies on the Fribourg side. With a full-day hire, your chauffeur links castles, cheese dairies and alpine viewpoints in seamless comfort.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Interlaken et les deux lacs', en: 'Interlaken and the two lakes' },
        teaser: {
          fr: 'À 55 km de Berne, la station entre les lacs de Thoune et de Brienz : croisière au pied des châteaux de Spiez ou d’Oberhofen, belvédère du Harder Kulm, chutes de Giessbach. Les eaux turquoise de Brienz au retour.',
          en: '55 km from Bern, the resort between Lake Thun and Lake Brienz: a cruise beneath the castles of Spiez or Oberhofen, the Harder Kulm viewpoint, the Giessbach falls. The turquoise waters of Brienz on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Gruyères, château et fromagerie', en: 'Gruyères, castle and cheese dairy' },
        teaser: {
          fr: 'À 60 km au sud-ouest, la cité médiévale sur sa colline, son château des comtes de Gruyère et la Maison du Gruyère à Pringy. En option, la chocolaterie Cailler de Broc et le musée HR Giger pour les amateurs.',
          en: '60 km south-west, the hilltop medieval town, the castle of the Counts of Gruyère and the Maison du Gruyère dairy in Pringy. Optional add-ons: the Cailler chocolate factory in Broc and the HR Giger Museum.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Jungfraujoch depuis Berne', en: 'Jungfraujoch from Bern' },
        teaser: {
          fr: 'Route vers Grindelwald, puis l’Eiger Express et le train du Jungfrau jusqu’à 3 454 mètres : glacier d’Aletsch, palais des glaces, terrasse du Sphinx. Votre chauffeur gère les billets et vous attend à la descente.',
          en: 'Drive to Grindelwald, then the Eiger Express and the Jungfrau Railway up to 3,454 metres: the Aletsch Glacier, the Ice Palace, the Sphinx terrace. Your chauffeur arranges the tickets and waits for your return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '990',
      },
      {
        title: { fr: 'Emmental, la vallée du fromage', en: 'The Emmental, valley of the cheese' },
        teaser: {
          fr: 'À 30 minutes de Berne, collines vertes, fermes monumentales et la fromagerie de démonstration d’Affoltern : fabrication au feu de bois, dégustation, puis Burgdorf et son château. La Suisse rurale dans sa version la plus authentique.',
          en: '30 minutes from Bern, green hills, monumental farmhouses and the Affoltern show dairy: wood-fired cheesemaking, a tasting, then Burgdorf and its castle. Rural Switzerland at its most authentic.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Berne au fil de l’Aar, en soirée', en: 'Bern along the Aare, by evening' },
        teaser: {
          fr: 'La terrasse du Rosengarten face à la vieille ville au couchant, dîner sous les arcades — Kornhauskeller, Meridiano étoilé au Kursaal —, puis les rives de l’Aar et le Palais fédéral illuminés. Véhicule à disposition toute la soirée.',
          en: 'The Rosengarten terrace facing the old town at sunset, dinner beneath the arcades — the Kornhauskeller, or the starred Meridiano at the Kursaal — then the illuminated Aare banks and Federal Palace. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '330',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Berne-Belp et le centre-ville ?',
          en: 'How much does a transfer between Bern-Belp Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Berne-Belp (BRN) et le centre de Berne est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Bern-Belp (BRN) and central Bern is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts depuis Zurich ou Genève vers Berne ?',
          en: 'Do you provide transfers from Zurich or Geneva to Bern?',
        },
        a: {
          fr: 'Oui. La plupart des vols long-courriers arrivent à Zurich (125 km, environ 1 h 20) ou à Genève (160 km, environ 1 h 45). Votre chauffeur vous accueille en salle d’arrivée et vous conduit directement à votre hôtel bernois, à prix fixe convenu à l’avance.',
          en: 'Yes. Most long-haul flights land at Zurich (125 km, about 1 hour 20) or Geneva (160 km, about 1 hour 45). Your chauffeur meets you in the arrivals hall and drives you straight to your hotel in Bern, at a fixed price agreed in advance.',
        },
      },
      {
        q: {
          fr: 'La vieille ville de Berne est-elle accessible en voiture ?',
          en: 'Is Bern’s old town accessible by car?',
        },
        a: {
          fr: 'La vieille ville est largement piétonne et sa circulation est réglementée, mais les hôtels y disposent de points de dépose autorisés. Votre chauffeur connaît les accès — Bellevue Palace, Schweizerhof, hôtels des arcades — et vous dépose au plus près de votre porte, bagages pris en charge.',
          en: 'The old town is largely pedestrianised and traffic is regulated, but its hotels have authorised drop-off points. Your chauffeur knows the approaches — Bellevue Palace, Schweizerhof, the arcade hotels — and drops you as close as possible to your door, luggage handled.',
        },
      },
    ],
    nearby: ['lausanne', 'lucerne', 'lauterbrunnen', 'zurich'],
  },
  {
    slug: 'lausanne',
    name: { fr: 'Lausanne', en: 'Lausanne' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'Lausanne se rejoint depuis l’aéroport de Genève-Cointrin (GVA), à 60 km au sud-ouest : comptez 45 à 50 minutes par l’autoroute A1 jusqu’à Ouchy ou au quartier du Flon. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Lausanne is reached from Geneva-Cointrin Airport (GVA), 60 km to the south-west: allow 45 to 50 minutes on the A1 motorway to Ouchy or the Flon district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale olympique étagée entre lac et vignes, Lausanne superpose sa cathédrale gothique, le quartier du Flon et les quais d’Ouchy face aux Alpes de Savoie. Votre **chauffeur privé à Lausanne** dessert le siège du CIO et les fédérations sportives, le CHUV et les cliniques de la Riviera, l’EPFL et les entreprises de l’arc lémanique, comme les palaces de la ville — Beau-Rivage Palace, Lausanne Palace. Prix fixes, berlines et vans premium, chauffeurs bilingues sur demande.',
        'Autour de Lausanne, le Léman déploie son décor. Les **terrasses de Lavaux**, classées à l’UNESCO, commencent aux portes de la ville, Vevey et Chaplin’s World sont à vingt minutes, Montreux et le château de Chillon à trente. Côté terres, Gruyères et sa fromagerie, les vignobles de La Côte et Genève complètent des journées composées sur mesure par votre chauffeur.',
      ],
      en: [
        'The Olympic capital terraced between lake and vines, Lausanne stacks its Gothic cathedral, the Flon district and the Ouchy waterfront facing the Savoy Alps. Your **private chauffeur in Lausanne** serves the IOC headquarters and the sports federations, the CHUV and the Riviera clinics, EPFL and the businesses of the Lake Geneva arc, as well as the city’s palace hotels — Beau-Rivage Palace, Lausanne Palace. Fixed prices, premium sedans and vans, bilingual chauffeurs on request.',
        'Around Lausanne, Lake Geneva lays out its scenery. The UNESCO-listed **Lavaux terraces** begin at the city gates, Vevey and Chaplin’s World are twenty minutes away, Montreux and Chillon Castle thirty. Inland, Gruyères and its dairy, the La Côte vineyards and Geneva round out days your chauffeur composes entirely to measure.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Lavaux, dégustations en terrasses', en: 'Lavaux, tastings on the terraces' },
        teaser: {
          fr: 'De Lutry à Saint-Saphorin, les murs de vigne plongent dans le Léman depuis le XIᵉ siècle. Dégustation de chasselas chez deux vignerons — Épesses, Dézaley —, arrêts photo au belvédère du Signal de Grandvaux, déjeuner face au lac.',
          en: 'From Lutry to Saint-Saphorin, walled vineyards have tumbled into Lake Geneva since the 11th century. A Chasselas tasting with two winemakers — Épesses, Dézaley — photo stops at the Signal de Grandvaux viewpoint, lunch facing the lake.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Chaplin’s World et la Riviera de Vevey', en: 'Chaplin’s World and the Vevey Riviera' },
        teaser: {
          fr: 'Le manoir de Ban à Corsier-sur-Vevey, où Chaplin vécut ses 25 dernières années, puis les quais de Vevey, la Fourchette plantée dans le lac et l’Alimentarium. Retour par la corniche de Lavaux au couchant.',
          en: 'The Manoir de Ban in Corsier-sur-Vevey, where Chaplin spent his final 25 years, then the Vevey quays, the giant fork planted in the lake and the Alimentarium. Return along the Lavaux corniche at sunset.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Montreux et le château de Chillon', en: 'Montreux and Chillon Castle' },
        teaser: {
          fr: 'À 30 km de Lausanne, les quais fleuris de Montreux puis la forteresse de Chillon sur son îlot rocheux : salles souterraines chantées par Byron, chemins de ronde face aux Dents du Midi. Arrêt aux Rochers-de-Naye en option.',
          en: '30 km from Lausanne, Montreux’s flowered quays then the fortress of Chillon on its rocky islet: the vaults sung by Byron, rampart walks facing the Dents du Midi. An optional Rochers-de-Naye extension.',
        },
        duration: { fr: 'Demi-journée ou journée', en: 'Half or full day' },
        price: '480',
      },
      {
        title: { fr: 'Gruyères et la chocolaterie Cailler', en: 'Gruyères and the Cailler chocolate factory' },
        teaser: {
          fr: 'À 50 minutes de Lausanne, la cité comtale sur sa colline, la Maison du Gruyère et ses meules en cave, puis l’atelier Cailler de Broc, la plus ancienne marque de chocolat suisse encore en production. Fondue au village pour conclure.',
          en: '50 minutes from Lausanne, the hilltop count’s town, the Maison du Gruyère with its cellared wheels, then the Cailler workshop in Broc, Switzerland’s oldest chocolate brand still in production. A village fondue to finish.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Lausanne olympique et soirée à Ouchy', en: 'Olympic Lausanne and an evening in Ouchy' },
        teaser: {
          fr: 'Le Musée Olympique et ses jardins face au lac, la cathédrale et les ruelles de la Cité, puis dîner au Beau-Rivage Palace — Anne-Sophie Pic, deux étoiles — ou dans les adresses du Flon. Dépose devant chaque porte.',
          en: 'The Olympic Museum and its lakeside gardens, the cathedral and the lanes of the Cité, then dinner at the Beau-Rivage Palace — Anne-Sophie Pic, two stars — or in the Flon district. Door-to-door drop-offs.',
        },
        duration: { fr: 'Demi-journée ou soirée', en: 'Half day or evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Lausanne ?',
          en: 'How much does a transfer between Geneva Airport and Lausanne cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève-Cointrin (GVA) et Lausanne — 60 km, 45 à 50 minutes — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Geneva-Cointrin (GVA) and Lausanne — 60 km, 45 to 50 minutes — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition pour les fédérations sportives et le CIO ?',
          en: 'Do you offer hourly hire for the sports federations and the IOC?',
        },
        a: {
          fr: 'Oui. Lausanne accueille le CIO et plus de cinquante fédérations internationales : nous assurons mises à disposition pour délégations, navettes de congrès et roadshows entre Vidy, l’EPFL et les hôtels de la ville, avec chauffeurs habitués aux protocoles et aux horaires serrés.',
          en: 'Yes. Lausanne hosts the IOC and more than fifty international federations: we provide hourly hire for delegations, congress shuttles and roadshows between Vidy, EPFL and the city’s hotels, with chauffeurs used to protocol and tight schedules.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une journée dans le vignoble de Lavaux depuis Lausanne ?',
          en: 'Can you arrange a day in the Lavaux vineyards from Lausanne?',
        },
        a: {
          fr: 'Oui. C’est notre excursion la plus demandée au départ de Lausanne : votre chauffeur compose l’itinéraire entre Lutry, Épesses et Saint-Saphorin, réserve les caveaux et la table de midi, et vous permet de déguster sans compter — le retour est assuré, quel que soit l’horaire.',
          en: 'Yes. It is our most requested outing from Lausanne: your chauffeur plans the route through Lutry, Épesses and Saint-Saphorin, books the cellars and the lunch table, and lets you taste freely — the drive home is covered, whatever the hour.',
        },
      },
    ],
    nearby: ['geneva', 'montreux', 'bern'],
  },
  {
    slug: 'lucerne',
    name: { fr: 'Lucerne', en: 'Lucerne' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'Lucerne se rejoint depuis l’aéroport de Zurich-Kloten (ZRH), à 65 km au nord-est : comptez 50 minutes à une heure par l’autoroute A14 jusqu’au pont de la Chapelle et aux hôtels du lac. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Lucerne is reached from Zurich-Kloten Airport (ZRH), 65 km to the north-east: allow 50 minutes to an hour on the A14 motorway to the Chapel Bridge and the lakeside hotels. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Posée à la sortie du lac des Quatre-Cantons, entre le Pilate et le Rigi, Lucerne concentre l’image de la Suisse : le pont de la Chapelle et sa tour d’eau, les façades peintes de la vieille ville, le Lion sculpté dans le grès. Votre **chauffeur privé à Lucerne** dessert les hôtels du lac — Bürgenstock, Palace, Schweizerhof —, le KKL de Jean Nouvel pendant le festival, les boutiques d’horlogerie de la Grendelstrasse et les rendez-vous d’affaires de Suisse centrale, à prix fixe.',
        'Lucerne est entourée de sommets accessibles en une journée. Le **mont Pilate** et son train à crémaillère le plus raide du monde, le Rigi et ses trains historiques, le Titlis et son glacier à 3 000 mètres au-dessus d’Engelberg : votre chauffeur combine routes de rive, embarcadères et gares de montagne, billets réservés à l’avance, retour à l’hôtel sans contrainte d’horaire.',
      ],
      en: [
        'Set where Lake Lucerne empties between Pilatus and the Rigi, Lucerne distils the image of Switzerland: the Chapel Bridge and its water tower, the painted façades of the old town, the Lion carved into the sandstone. Your **private chauffeur in Lucerne** serves the lakeside hotels — Bürgenstock, Palace, Schweizerhof —, Jean Nouvel’s KKL during the festival, the watch boutiques of the Grendelstrasse and central Switzerland’s business meetings, at a fixed price.',
        'Lucerne is ringed by summits reachable in a day. **Mount Pilatus** and the world’s steepest cogwheel railway, the Rigi and its historic trains, the Titlis and its glacier at 3,000 metres above Engelberg: your chauffeur combines shoreline roads, boat piers and mountain stations, tickets booked ahead, hotel return with no timetable to watch.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Le mont Pilate, boucle dorée', en: 'Mount Pilatus, the golden round trip' },
        teaser: {
          fr: 'Dépose à Alpnachstad pour le train à crémaillère le plus raide du monde (48 %), panorama sur 73 sommets depuis Pilatus Kulm, descente en téléphérique sur Kriens où votre chauffeur vous attend. Déjeuner d’altitude réservé.',
          en: 'Drop-off at Alpnachstad for the world’s steepest cogwheel railway (48%), a panorama of 73 peaks from Pilatus Kulm, cable-car descent to Kriens where your chauffeur waits. Mountaintop lunch reserved.',
        },
        duration: { fr: 'Demi-journée ou journée', en: 'Half or full day' },
        price: '520',
      },
      {
        title: { fr: 'Titlis et Engelberg, le glacier à 3 000 mètres', en: 'Titlis and Engelberg, the glacier at 3,000 metres' },
        teaser: {
          fr: 'À 35 km de Lucerne, le village monastique d’Engelberg puis le téléphérique Rotair, à cabine tournante, jusqu’au glacier du Titlis : grotte de glace, pont suspendu Cliff Walk, neige garantie toute l’année.',
          en: '35 km from Lucerne, the monastery village of Engelberg then the revolving Rotair cable car up to the Titlis glacier: ice grotto, the Cliff Walk suspension bridge, snow guaranteed year round.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Le Rigi, reine des montagnes', en: 'The Rigi, queen of the mountains' },
        teaser: {
          fr: 'Croisière de Lucerne à Vitznau, montée par le plus ancien train à crémaillère d’Europe (1871), panorama sur treize lacs depuis Rigi Kulm, descente sur Weggis. Votre chauffeur récupère le groupe à l’embarcadère.',
          en: 'A cruise from Lucerne to Vitznau, up on Europe’s oldest cogwheel railway (1871), a thirteen-lake panorama from Rigi Kulm, descent to Weggis. Your chauffeur collects the party at the pier.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Jungfraujoch par le col du Brünig', en: 'Jungfraujoch via the Brünig Pass' },
        teaser: {
          fr: 'Route panoramique par le Brünig et Interlaken jusqu’à Grindelwald, puis l’Eiger Express et le train du Jungfrau jusqu’à la gare la plus haute d’Europe, à 3 454 mètres. Glacier d’Aletsch et terrasse du Sphinx, billets gérés par nos soins.',
          en: 'A scenic drive over the Brünig Pass and through Interlaken to Grindelwald, then the Eiger Express and the Jungfrau Railway to Europe’s highest station at 3,454 metres. The Aletsch Glacier and the Sphinx terrace, tickets handled by us.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1050',
      },
      {
        title: { fr: 'Soirée lucernoise entre lac et vieille ville', en: 'Lucerne evening between lake and old town' },
        teaser: {
          fr: 'Coucher de soleil depuis le Bürgenstock ou le Château Gütsch, dîner au bord de l’eau ou à l’Old Swiss House, puis le pont de la Chapelle et les quais illuminés. Le véhicule vous attend, retour sans contrainte.',
          en: 'Sunset from the Bürgenstock or the Château Gütsch, dinner at the water’s edge or at the Old Swiss House, then the illuminated Chapel Bridge and quays. The vehicle waits; an effortless return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '360',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Zurich et Lucerne ?',
          en: 'How much does a transfer between Zurich Airport and Lucerne cost?',
        },
        a: {
          fr: 'Le transfert privé entre Zurich-Kloten (ZRH) et Lucerne — 65 km, environ une heure — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Zurich-Kloten (ZRH) and Lucerne — 65 km, about one hour — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous coordonner voiture, bateau et trains de montagne dans la même journée ?',
          en: 'Can you coordinate car, boat and mountain trains within the same day?',
        },
        a: {
          fr: 'Oui, c’est la spécificité de Lucerne : votre chauffeur vous dépose à l’embarcadère ou à la gare de crémaillère, réserve les billets à l’avance et vous récupère à un autre point — Kriens, Weggis, Engelberg. Vous ne portez rien, vous n’attendez jamais.',
          en: 'Yes, that is the Lucerne speciality: your chauffeur drops you at the boat pier or the cogwheel station, books the tickets in advance and collects you at a different point — Kriens, Weggis, Engelberg. You carry nothing and never wait.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers Andermatt et les stations de Suisse centrale ?',
          en: 'Do you provide transfers to Andermatt and the central Swiss resorts?',
        },
        a: {
          fr: 'Oui. Andermatt et The Chedi se rejoignent en une heure par l’axe du Gothard, Engelberg-Titlis en 40 minutes, Melchsee-Frutt et Sörenberg dans des délais comparables. Véhicules équipés pour l’hiver, prix fixe convenu à l’avance quelle que soit la météo.',
          en: 'Yes. Andermatt and The Chedi are one hour away on the Gotthard axis, Engelberg-Titlis 40 minutes, Melchsee-Frutt and Sörenberg similar. Winter-equipped vehicles, a fixed price agreed in advance whatever the weather.',
        },
      },
    ],
    nearby: ['zurich', 'bern', 'grindelwald', 'lauterbrunnen'],
  },
  {
    slug: 'lugano',
    name: { fr: 'Lugano', en: 'Lugano' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'dach-nordics',
    airport: 'Lugano-Agno (LUG)',
    airportTransfer: {
      fr: 'L’aéroport de Lugano-Agno (LUG) se trouve à 6 km à l’ouest du centre : comptez 15 minutes pour rejoindre la Piazza della Riforma et les quais du lac. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol ; nous assurons aussi les arrivées via Milan-Malpensa (MXP), à 65 km.',
      en: 'Lugano-Agno Airport (LUG) lies 6 km west of the centre: allow 15 minutes to reach Piazza della Riforma and the lakeside quays. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight; we also cover arrivals via Milan-Malpensa (MXP), 65 km away.',
    },
    intro: {
      fr: [
        'Troisième place financière de Suisse et capitale du Tessin italophone, Lugano marie palmiers, façades lombardes et sièges bancaires autour de la Piazza della Riforma et du LAC, son centre culturel face au lac. Votre **chauffeur privé à Lugano** dessert les banques de la via Nassa et ses boutiques de luxe, les cliniques de la région, les villas de Castagnola et de Paradiso, comme les rendez-vous d’affaires entre Tessin et Lombardie. Prix fixes, discrétion, chauffeurs italophones et anglophones.',
        'Entre lac et montagnes, la douceur tessinoise se prête aux excursions. Le **lac de Côme** et Bellagio sont à 40 minutes, Milan à une heure, les trois châteaux médiévaux de Bellinzone, classés à l’UNESCO, à trente minutes vers le nord. Plus près encore, Morcote, Gandria et le Monte Brè offrent villages de pierre et belvédères que votre chauffeur relie en demi-journée, grotto compris.',
      ],
      en: [
        'Switzerland’s third financial centre and the capital of Italian-speaking Ticino, Lugano blends palm trees, Lombard façades and banking headquarters around Piazza della Riforma and the LAC, its lakeside arts centre. Your **private chauffeur in Lugano** serves the banks and luxury boutiques of Via Nassa, the region’s clinics, the villas of Castagnola and Paradiso, and business meetings between Ticino and Lombardy. Fixed prices, discretion, Italian- and English-speaking chauffeurs.',
        'Between lake and mountains, the Ticinese climate favours excursions. **Lake Como** and Bellagio are 40 minutes away, Milan one hour, and the three UNESCO-listed medieval castles of Bellinzona thirty minutes north. Closer still, Morcote, Gandria and Monte Brè offer stone villages and viewpoints your chauffeur links in half a day, grotto lunch included.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Lac de Côme et Bellagio', en: 'Lake Como and Bellagio' },
        teaser: {
          fr: 'À 35 km de Lugano, la rive ouest du Lario : Menaggio, la Villa Carlotta et ses jardins, puis Bellagio à la pointe du lac — traversée en bac avec le véhicule. Déjeuner face aux Grigne, retour par Côme et sa cathédrale.',
          en: '35 km from Lugano, the western shore of Lake Como: Menaggio, Villa Carlotta and its gardens, then Bellagio at the tip of the lake — car ferry crossing included. Lunch facing the Grigne peaks, return via Como and its cathedral.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Milan, shopping et Cène de Vinci', en: 'Milan, shopping and Leonardo’s Last Supper' },
        teaser: {
          fr: 'Une heure de route vers le Duomo, la Galleria Vittorio Emanuele II et le Quadrilatero della Moda ; visite de la Cène sur réservation anticipée. Votre chauffeur gère la ZTL milanaise et les sacs s’accumulent dans le coffre.',
          en: 'An hour’s drive to the Duomo, the Galleria Vittorio Emanuele II and the Quadrilatero della Moda; the Last Supper visited with advance booking. Your chauffeur handles Milan’s ZTL zones while the bags pile up in the boot.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '850',
      },
      {
        title: { fr: 'Les châteaux de Bellinzone', en: 'The castles of Bellinzona' },
        teaser: {
          fr: 'À 30 minutes au nord, Castelgrande, Montebello et Sasso Corbaro, l’ensemble fortifié médiéval le mieux conservé de l’arc alpin, classé à l’UNESCO. Marché du samedi dans la vieille ville, dégustation de merlot du Tessin en cave.',
          en: '30 minutes north, Castelgrande, Montebello and Sasso Corbaro, the best-preserved medieval fortifications in the Alps, UNESCO-listed. The Saturday market in the old town, and a Ticino Merlot tasting in a cellar.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Morcote, Gandria et le Monte Brè', en: 'Morcote, Gandria and Monte Brè' },
        teaser: {
          fr: 'Le tour du Ceresio : Morcote et le parc Scherrer face aux îles de Brissago, le village de pêcheurs de Gandria accroché à la rive, puis la route du Monte Brè pour le panorama sur le golfe de Lugano. Déjeuner en grotto.',
          en: 'The tour of Lake Lugano: Morcote and the Scherrer Park, the fishing village of Gandria clinging to the shore, then the Monte Brè road for the panorama over the Gulf of Lugano. Lunch in a traditional grotto.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Ascona et Locarno, la dolce vita du Majeur', en: 'Ascona and Locarno, dolce vita on Lake Maggiore' },
        teaser: {
          fr: 'À 45 minutes, la piazza d’Ascona au bord du lac Majeur, les jardins des îles de Brissago en bateau, puis Locarno, sa Piazza Grande et le sanctuaire de la Madonna del Sasso. Retour par le col du Monte Ceneri.',
          en: '45 minutes away, Ascona’s lakeside piazza on Lake Maggiore, the Brissago Islands gardens by boat, then Locarno, its Piazza Grande and the Madonna del Sasso sanctuary. Return over the Monte Ceneri pass.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport et le centre de Lugano ?',
          en: 'How much does a transfer between the airport and central Lugano cost?',
        },
        a: {
          fr: 'Le transfert privé entre Lugano-Agno (LUG) et le centre est facturé à prix fixe, communiqué à la réservation, tout comme le trajet depuis Milan-Malpensa (65 km, environ une heure). Accueil avec panneau nominatif, suivi du vol en temps réel et 60 minutes d’attente offertes sont inclus.',
          en: 'A private transfer between Lugano-Agno (LUG) and the centre is charged at a fixed price, confirmed at booking, as is the journey from Milan-Malpensa (65 km, about one hour). Meet-and-greet with a name board, real-time flight tracking and 60 minutes of complimentary waiting time are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les trajets transfrontaliers vers l’Italie depuis Lugano ?',
          en: 'Do you handle cross-border journeys into Italy from Lugano?',
        },
        a: {
          fr: 'Oui, quotidiennement. Milan, Côme, Malpensa ou les lacs italiens font partie de nos trajets courants : véhicule autorisé dans les deux pays, passage de la douane de Chiasso ou de Gandria sans formalité pour vous, prix fixe convenu à l’avance, ZTL italiennes gérées par le chauffeur.',
          en: 'Yes, daily. Milan, Como, Malpensa and the Italian lakes are among our routine journeys: a vehicle authorised in both countries, the Chiasso or Gandria border crossed without formality on your part, a fixed price agreed in advance, Italian ZTL zones handled by the chauffeur.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous rejoindre Zurich ou Saint-Moritz depuis Lugano ?',
          en: 'Can you reach Zurich or St. Moritz from Lugano?',
        },
        a: {
          fr: 'Oui. Zurich se rejoint en 2 h 30 par le tunnel du Gothard — ou par le col en saison, pour la route panoramique — et Saint-Moritz en 2 h 45 par le col du Maloja et l’Engadine. Deux itinéraires spectaculaires que votre chauffeur transforme volontiers en excursion.',
          en: 'Yes. Zurich is 2.5 hours away through the Gotthard tunnel — or over the pass in season, for the scenic route — and St. Moritz 2 hours 45 via the Maloja Pass and the Engadine. Two spectacular drives your chauffeur will happily turn into an excursion.',
        },
      },
    ],
    nearby: ['lucerne', 'zurich', 'zermatt-tasch'],
  },
  {
    slug: 'montreux',
    name: { fr: 'Montreux', en: 'Montreux' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'Montreux se rejoint depuis l’aéroport de Genève-Cointrin (GVA), à 90 km à l’ouest : comptez 1 h 10 par l’autoroute A1 puis A9 jusqu’aux quais et aux palaces de la Riviera. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Montreux is reached from Geneva-Cointrin Airport (GVA), 90 km to the west: allow 1 hour 10 on the A1 then A9 motorways to the quays and the Riviera’s palace hotels. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Protégée des vents par les Alpes vaudoises, la Riviera de Montreux aligne palmiers, palaces Belle Époque et quais fleuris sur trois kilomètres au bord du Léman. Votre **chauffeur privé à Montreux** dessert le Montreux Palace et le Fairmont, le Centre de congrès pendant le Jazz Festival, les cliniques de la Riviera et les écoles hôtelières des hauteurs, comme les résidences privées de Glion et de Caux. Prix fixes, berlines et vans premium, disponibilité de nuit pendant les festivals.',
        'Depuis Montreux, les excursions s’enchaînent sans transition. Le **château de Chillon** est à cinq minutes des quais, les terrasses de Lavaux commencent à Vevey, Gstaad et ses chalets se rejoignent en une heure par le col des Mosses ou le train GoldenPass. Côté Valais, Verbier, Crans-Montana et le glacier des Diablerets complètent une géographie que votre chauffeur pratique toute l’année.',
      ],
      en: [
        'Sheltered from the winds by the Vaud Alps, the Montreux Riviera lines up palm trees, Belle Époque palace hotels and flowered quays along three kilometres of Lake Geneva. Your **private chauffeur in Montreux** serves the Montreux Palace and the Fairmont, the convention centre during the Jazz Festival, the Riviera’s clinics and the hillside hotel schools, as well as private residences in Glion and Caux. Fixed prices, premium sedans and vans, overnight availability during the festivals.',
        'From Montreux, the excursions follow on seamlessly. **Chillon Castle** is five minutes from the quays, the Lavaux terraces begin at Vevey, and Gstaad and its chalets are an hour away via the Col des Mosses or the GoldenPass line. On the Valais side, Verbier, Crans-Montana and the Les Diablerets glacier complete a landscape your chauffeur drives year round.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Château de Chillon et Rochers-de-Naye', en: 'Chillon Castle and Rochers-de-Naye' },
        teaser: {
          fr: 'La forteresse des comtes de Savoie posée sur son rocher — souterrains de Byron, chemins de ronde, salles d’apparat —, puis la montée aux Rochers-de-Naye à 2 042 mètres pour le panorama sur tout le Léman.',
          en: 'The fortress of the Counts of Savoy on its rock — Byron’s vaults, rampart walks, state rooms — then up to Rochers-de-Naye at 2,042 metres for the panorama over the whole of Lake Geneva.',
        },
        duration: { fr: 'Demi-journée ou journée', en: 'Half or full day' },
        price: '450',
      },
      {
        title: { fr: 'Lavaux et Chaplin’s World', en: 'Lavaux and Chaplin’s World' },
        teaser: {
          fr: 'Les terrasses classées à l’UNESCO entre Saint-Saphorin et Lutry, dégustation de chasselas en caveau, puis le manoir de Ban à Corsier-sur-Vevey, où Chaplin vécut 25 ans. Retour par les quais de Vevey et leur Fourchette.',
          en: 'The UNESCO-listed terraces between Saint-Saphorin and Lutry, a Chasselas cellar tasting, then the Manoir de Ban in Corsier-sur-Vevey, Chaplin’s home for 25 years. Return along the Vevey quays and their giant fork.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Gstaad par le col des Mosses', en: 'Gstaad via the Col des Mosses' },
        teaser: {
          fr: 'Une heure de route alpine jusqu’au village aux chalets sombres : la Promenade et ses boutiques, déjeuner au Gstaad Palace ou dans une auberge du Saanenland, détour par Rougemont et son église romane au retour.',
          en: 'An hour’s alpine drive to the village of dark-timber chalets: the Promenade and its boutiques, lunch at the Gstaad Palace or a Saanenland inn, with a detour via Rougemont and its Romanesque church on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Glacier 3000 et les Diablerets', en: 'Glacier 3000 and Les Diablerets' },
        teaser: {
          fr: 'Par Aigle et le col du Pillon, le téléphérique jusqu’à Glacier 3000 : Peak Walk by Tissot, le pont suspendu entre deux sommets, vue du Cervin au Mont-Blanc, neige éternelle. Raclette d’alpage à la descente.',
          en: 'Via Aigle and the Col du Pillon, the cable car up to Glacier 3000: the Peak Walk by Tissot suspension bridge between two summits, views from the Matterhorn to Mont Blanc, year-round snow. An alpine raclette on the way down.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée Riviera, de Freddie Mercury au casino', en: 'Riviera evening, from Freddie Mercury to the casino' },
        teaser: {
          fr: 'La statue de Freddie Mercury et le parcours Queen — studio compris au Casino Barrière —, dîner au Pont de Brent ou face au lac, puis les quais illuminés jusqu’à Chillon. Véhicule à disposition toute la soirée.',
          en: 'The Freddie Mercury statue and the Queen trail — studio memorabilia at the Casino Barrière included — dinner at Le Pont de Brent or facing the lake, then the illuminated quays out to Chillon. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Montreux ?',
          en: 'How much does a transfer between Geneva Airport and Montreux cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève-Cointrin (GVA) et Montreux — 90 km, environ 1 h 10 — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Geneva-Cointrin (GVA) and Montreux — 90 km, about 1 hour 10 — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver longtemps à l’avance pendant le Montreux Jazz Festival ?',
          en: 'How far in advance should I book during the Montreux Jazz Festival?',
        },
        a: {
          fr: 'Pendant la première quinzaine de juillet, la demande est très forte et les quais sont partiellement fermés à la circulation. Nous recommandons de réserver au moins une semaine à l’avance ; votre chauffeur connaît les points de dépose autorisés au plus près du Centre de congrès et assure les retours de nuit après les concerts.',
          en: 'During the first two weeks of July demand is very high and the quays are partially closed to traffic. We recommend booking at least a week ahead; your chauffeur knows the authorised drop-off points closest to the convention centre and covers late-night returns after the concerts.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers Verbier, Gstaad ou Crans-Montana ?',
          en: 'Do you provide transfers to Verbier, Gstaad or Crans-Montana?',
        },
        a: {
          fr: 'Oui. Depuis Montreux, Verbier se rejoint en 1 h 15 par Martigny, Gstaad en une heure par le col des Mosses, Crans-Montana en 1 h 15 par Sierre. Véhicules équipés pour l’hiver, prix fixe convenu à l’avance, skis et bagages volumineux pris en charge.',
          en: 'Yes. From Montreux, Verbier is 1 hour 15 via Martigny, Gstaad one hour over the Col des Mosses, Crans-Montana 1 hour 15 via Sierre. Winter-equipped vehicles, a fixed price agreed in advance, skis and bulky luggage taken care of.',
        },
      },
    ],
    nearby: ['lausanne', 'geneva', 'zermatt-tasch'],
  },
  {
    slug: 'zermatt-tasch',
    name: { fr: 'Zermatt & Täsch', en: 'Zermatt & Täsch' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'Zermatt étant interdite aux voitures, votre chauffeur vous conduit jusqu’à Täsch, le terminal routier de la station : comptez 230 km et environ 3 heures depuis Genève-Cointrin (GVA), 250 km et 3 h 30 depuis Zurich (ZRH). À Täsch, le train navette rejoint Zermatt en 12 minutes ; nous coordonnons la correspondance et, sur demande, un taxi électrique jusqu’à votre hôtel.',
      en: 'As Zermatt is car-free, your chauffeur drives you to Täsch, the resort’s road terminal: allow 230 km and around 3 hours from Geneva-Cointrin (GVA), or 250 km and 3.5 hours from Zurich (ZRH). From Täsch the shuttle train reaches Zermatt in 12 minutes; we coordinate the connection and, on request, an electric taxi to your hotel.',
    },
    intro: {
      fr: [
        'Au pied du Cervin, à 1 620 mètres, Zermatt est la plus célèbre station sans voiture des Alpes : ruelles bordées de mazots, palaces historiques — Mont Cervin Palace, Riffelalp Resort — et le sommet le plus photographié du monde en toile de fond. Votre **chauffeur privé vers Zermatt** assure la liaison depuis Genève, Zurich, Milan ou Sion jusqu’au terminal de Täsch, à prix fixe, avec coordination de la navette et prise en charge des skis et bagages jusqu’au quai.',
        'La haute montagne se déploie dès la sortie du train. Le **Gornergrat** et son chemin de fer à crémaillère font face au Cervin depuis 1898, le Matterhorn Glacier Paradise culmine à 3 883 mètres — la plus haute station de téléphérique d’Europe — et le Glacier Express s’élance vers Saint-Moritz. Votre chauffeur gère les correspondances à Täsch et reste disponible pour vos excursions dans la vallée du Rhône.',
      ],
      en: [
        'At the foot of the Matterhorn, at 1,620 metres, Zermatt is the most famous car-free resort in the Alps: lanes lined with timber mazots, historic palace hotels — Mont Cervin Palace, Riffelalp Resort — and the world’s most photographed summit as a backdrop. Your **private chauffeur to Zermatt** covers the journey from Geneva, Zurich, Milan or Sion to the Täsch terminal, at a fixed price, coordinating the shuttle and handling skis and luggage to the platform.',
        'The high mountains begin as you step off the train. The **Gornergrat** cogwheel railway has faced the Matterhorn since 1898, the Matterhorn Glacier Paradise tops out at 3,883 metres — Europe’s highest cable-car station — and the Glacier Express sets off towards St. Moritz. Your chauffeur manages the Täsch connections and remains on call for excursions in the Rhône valley.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Gornergrat, face au Cervin', en: 'Gornergrat, facing the Matterhorn' },
        teaser: {
          fr: 'Le train à crémaillère grimpe de Zermatt à 3 089 mètres en 33 minutes : panorama sur le Cervin, le mont Rose et 29 sommets de plus de 4 000 mètres. Billets réservés par nos soins, correspondance navette coordonnée depuis Täsch.',
          en: 'The cogwheel railway climbs from Zermatt to 3,089 metres in 33 minutes: a panorama of the Matterhorn, Monte Rosa and 29 peaks above 4,000 metres. Tickets booked by us, shuttle connection coordinated from Täsch.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Matterhorn Glacier Paradise', en: 'Matterhorn Glacier Paradise' },
        teaser: {
          fr: 'La plus haute station de téléphérique d’Europe, à 3 883 mètres : palais de glace creusé dans le glacier, plateforme panoramique du Cervin aux Écrins, neige éternelle. En été, ski matinal possible avant la redescente.',
          en: 'Europe’s highest cable-car station, at 3,883 metres: an ice palace carved into the glacier, a viewing platform reaching from the Matterhorn to the Écrins, permanent snow. In summer, morning skiing before the descent.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Départ du Glacier Express', en: 'Boarding the Glacier Express' },
        teaser: {
          fr: 'Huit heures de train panoramique entre Zermatt et Saint-Moritz : 291 ponts, 91 tunnels, le viaduc de Landwasser et les gorges du Rhin. Nous déposons vos bagages au train, votre chauffeur peut vous attendre en Engadine.',
          en: 'Eight hours of panoramic railway between Zermatt and St. Moritz: 291 bridges, 91 tunnels, the Landwasser Viaduct and the Rhine Gorge. We deliver your luggage to the train; your chauffeur can be waiting in the Engadine.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1300',
      },
      {
        title: { fr: 'Saas-Fee, la perle des Alpes', en: 'Saas-Fee, the pearl of the Alps' },
        teaser: {
          fr: 'Depuis Täsch, 30 minutes de route vers l’autre village sans voiture du Valais, cerné par treize sommets de 4 000 mètres : glacier de Fee, Metro Alpin jusqu’au plus haut restaurant tournant du monde, à 3 500 mètres.',
          en: 'From Täsch, a 30-minute drive to the Valais’s other car-free village, ringed by thirteen 4,000-metre peaks: the Fee Glacier and the Metro Alpin up to the world’s highest revolving restaurant, at 3,500 metres.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Vallée du Rhône, vignobles et Sion', en: 'The Rhône valley, vineyards and Sion' },
        teaser: {
          fr: 'À la descente de Täsch, les coteaux les plus hauts d’Europe : dégustation de fendant et de petite arvine chez un encaveur de Sion ou de Salquenen, les châteaux de Valère et Tourbillon, les bains thermaux de Loèche en option.',
          en: 'On the way down from Täsch, Europe’s highest vineyards: a Fendant and Petite Arvine tasting with a Sion or Salgesch winemaker, the castles of Valère and Tourbillon, with the Leukerbad thermal baths as an option.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Zermatt via Täsch ?',
          en: 'How much does a transfer between Geneva Airport and Zermatt via Täsch cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève-Cointrin (GVA) et Täsch — 230 km, environ 3 heures — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol, 60 minutes d’attente offertes et l’assistance bagages jusqu’au quai de la navette pour Zermatt.',
          en: 'A private transfer between Geneva-Cointrin (GVA) and Täsch — 230 km, about 3 hours — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, flight tracking, 60 minutes of complimentary waiting time and luggage assistance to the Zermatt shuttle platform.',
        },
      },
      {
        q: {
          fr: 'Pourquoi ne peut-on pas arriver en voiture jusqu’à Zermatt ?',
          en: 'Why can’t I arrive in Zermatt by car?',
        },
        a: {
          fr: 'Zermatt est interdite aux véhicules thermiques depuis les années 1960 pour préserver son air et son silence ; seuls circulent des taxis et navettes électriques. Tous les visiteurs arrivent via Täsch, à 5 km : le train navette part toutes les 20 minutes et rejoint Zermatt en 12 minutes. Nous synchronisons votre dépose avec le départ suivant.',
          en: 'Zermatt has banned combustion vehicles since the 1960s to protect its air and its silence; only electric taxis and shuttles operate inside the village. All visitors arrive via Täsch, 5 km away: the shuttle train leaves every 20 minutes and reaches Zermatt in 12 minutes. We time your drop-off to the next departure.',
        },
      },
      {
        q: {
          fr: 'Prenez-vous en charge les skis et les bagages volumineux jusqu’à la navette ?',
          en: 'Do you handle skis and bulky luggage through to the shuttle?',
        },
        a: {
          fr: 'Oui. Nos vans accueillent skis, snowboards et bagages de saison sans supplément caché ; à Täsch, votre chauffeur charge le tout sur les chariots de la navette et vous accompagne jusqu’au quai. Sur demande, un taxi électrique de Zermatt prend le relais jusqu’à la porte de votre hôtel.',
          en: 'Yes. Our vans take skis, snowboards and season luggage with no hidden surcharge; at Täsch, your chauffeur loads everything onto the shuttle trolleys and walks you to the platform. On request, a Zermatt electric taxi takes over to the door of your hotel.',
        },
      },
    ],
    nearby: ['montreux', 'lausanne', 'geneva', 'lugano'],
  },
  {
    slug: 'lauterbrunnen',
    name: { fr: 'Lauterbrunnen', en: 'Lauterbrunnen' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'Lauterbrunnen se rejoint depuis l’aéroport de Zurich-Kloten (ZRH), à 135 km : comptez environ 2 heures par Berne et Interlaken jusqu’au cœur de la vallée. Depuis Berne-Belp (BRN), 70 km et une heure de route suffisent. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Lauterbrunnen is reached from Zurich-Kloten Airport (ZRH), 135 km away: allow around 2 hours via Bern and Interlaken to the heart of the valley. From Bern-Belp (BRN), it is 70 km and one hour’s drive. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Encaissée entre des parois de 300 mètres d’où chutent 72 cascades, la vallée de Lauterbrunnen est l’un des paysages les plus saisissants des Alpes — Tolkien s’en inspira pour Fondcombe. Votre **chauffeur privé à Lauterbrunnen** assure les transferts depuis Zurich, Berne ou Genève, la liaison avec les gares de la Jungfrau et les allers-retours vers Interlaken, Wengen et Mürren, villages sans voiture desservis par train et téléphérique depuis la vallée.',
        'Lauterbrunnen est la porte du massif de la Jungfrau. Le **Jungfraujoch, Top of Europe**, se rejoint par le train depuis la gare du village, les chutes du Trümmelbach grondent à l’intérieur même de la montagne, et le Schilthorn de James Bond domine Mürren à 2 970 mètres. Votre chauffeur coordonne trains, téléphériques et haltes photo pour des journées sans temps mort.',
      ],
      en: [
        'Hemmed in by 300-metre cliffs from which 72 waterfalls plunge, the Lauterbrunnen valley is one of the most striking landscapes in the Alps — Tolkien drew on it for Rivendell. Your **private chauffeur in Lauterbrunnen** covers transfers from Zurich, Bern or Geneva, the link to the Jungfrau railway stations and runs to Interlaken, Wengen and Mürren, the car-free villages served by train and cable car from the valley floor.',
        'Lauterbrunnen is the gateway to the Jungfrau massif. The **Jungfraujoch, Top of Europe**, is reached by train from the village station, the Trümmelbach Falls thunder inside the mountain itself, and James Bond’s Schilthorn crowns Mürren at 2,970 metres. Your chauffeur coordinates trains, cable cars and photo stops for days without a wasted minute.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Jungfraujoch, Top of Europe', en: 'Jungfraujoch, Top of Europe' },
        teaser: {
          fr: 'Depuis la gare de Lauterbrunnen, le train grimpe par Wengen et la Kleine Scheidegg jusqu’à 3 454 mètres : palais des glaces, terrasse du Sphinx, glacier d’Aletsch classé à l’UNESCO. Billets réservés, chauffeur à l’arrivée.',
          en: 'From Lauterbrunnen station, the railway climbs through Wengen and Kleine Scheidegg to 3,454 metres: the Ice Palace, the Sphinx terrace, the UNESCO-listed Aletsch Glacier. Tickets pre-booked, chauffeur waiting on your return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Chutes du Trümmelbach et fond de vallée', en: 'Trümmelbach Falls and the valley floor' },
        teaser: {
          fr: 'Les seules chutes glaciaires d’Europe accessibles à l’intérieur de la montagne : dix cascades creusées dans la roche par 20 000 litres d’eau par seconde, issues de la Jungfrau. Puis la cascade du Staubbach et le village de Stechelberg.',
          en: 'Europe’s only glacier waterfalls accessible inside the mountain: ten cascades carved through the rock by 20,000 litres of Jungfrau meltwater per second. Then the Staubbach Falls and the hamlet of Stechelberg.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Mürren et le Schilthorn', en: 'Mürren and the Schilthorn' },
        teaser: {
          fr: 'Dépose au téléphérique de Stechelberg, montée vers Mürren accrochée à sa falaise, puis le Schilthorn à 2 970 mètres : le restaurant tournant Piz Gloria d’Au service secret de Sa Majesté, face à l’Eiger, au Mönch et à la Jungfrau.',
          en: 'Drop-off at the Stechelberg cable car, up to cliff-edge Mürren, then the Schilthorn at 2,970 metres: the Piz Gloria revolving restaurant from On Her Majesty’s Secret Service, facing the Eiger, Mönch and Jungfrau.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '520',
      },
      {
        title: { fr: 'Interlaken et les lacs de Thoune et Brienz', en: 'Interlaken and Lakes Thun and Brienz' },
        teaser: {
          fr: 'À 20 minutes de la vallée, la station entre deux lacs : croisière vers le château de Spiez ou les chutes de Giessbach, belvédère du Harder Kulm au couchant, boutiques d’horlogerie du Höheweg. Retour de nuit assuré.',
          en: '20 minutes from the valley, the resort between two lakes: a cruise to Spiez Castle or the Giessbach falls, the Harder Kulm viewpoint at sunset, the watch boutiques of the Höheweg. Late return covered.',
        },
        duration: { fr: 'Demi-journée ou journée', en: 'Half or full day' },
        price: '420',
      },
      {
        title: { fr: 'Grindelwald et le First par la vallée', en: 'Grindelwald and the First via the valley' },
        teaser: {
          fr: 'La route panoramique vers Grindelwald sous la face nord de l’Eiger, puis le téléphérique du First : passerelle du Cliff Walk, lac de Bachalpsee, tyrolienne du First Flyer pour les amateurs. Goûter en alpage au retour.',
          en: 'The scenic road to Grindelwald beneath the Eiger north face, then the First cable car: the Cliff Walk, Lake Bachalpsee, and the First Flyer zipline for the adventurous. An alpine snack on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '480',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Zurich et Lauterbrunnen ?',
          en: 'How much does a transfer between Zurich Airport and Lauterbrunnen cost?',
        },
        a: {
          fr: 'Le transfert privé entre Zurich-Kloten (ZRH) et Lauterbrunnen — 135 km, environ 2 heures — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Zurich-Kloten (ZRH) and Lauterbrunnen — 135 km, about 2 hours — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Wengen ou Mürren en voiture ?',
          en: 'Can Wengen or Mürren be reached by car?',
        },
        a: {
          fr: 'Non : Wengen et Mürren sont sans voiture. Votre chauffeur vous dépose à la gare de Lauterbrunnen pour le train de Wengen, ou au téléphérique de Stechelberg pour Mürren, et prend en charge le transfert des bagages jusqu’au quai. Nous synchronisons la dépose avec les horaires de montée.',
          en: 'No: Wengen and Mürren are car-free. Your chauffeur drops you at Lauterbrunnen station for the Wengen train, or at the Stechelberg cable car for Mürren, and handles your luggage to the platform. We time the drop-off to the departure schedule.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des circuits photo dans la vallée des 72 cascades ?',
          en: 'Do you offer photo tours of the valley of 72 waterfalls?',
        },
        a: {
          fr: 'Oui. La cascade du Staubbach au lever du jour, l’église de Wengen vue du ciel, les points de vue sur l’enfilade de la vallée : votre chauffeur connaît les heures de lumière et les arrêts autorisés, hors du flux touristique. Départ matinal recommandé en été.',
          en: 'Yes. The Staubbach Falls at first light, classic viewpoints down the length of the valley, quiet stops away from the tourist flow: your chauffeur knows the light and the authorised pull-ins. An early start is recommended in summer.',
        },
      },
    ],
    nearby: ['grindelwald', 'bern', 'lucerne'],
  },
  {
    slug: 'grindelwald',
    name: { fr: 'Grindelwald', en: 'Grindelwald' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'Grindelwald se rejoint depuis l’aéroport de Zurich-Kloten (ZRH), à 140 km : comptez environ 2 heures par Berne et Interlaken jusqu’au village, au pied de la face nord de l’Eiger. Depuis Berne-Belp (BRN), 75 km et une heure de route suffisent. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Grindelwald is reached from Zurich-Kloten Airport (ZRH), 140 km away: allow around 2 hours via Bern and Interlaken to the village at the foot of the Eiger north face. From Bern-Belp (BRN), it is 75 km and one hour’s drive. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Étagé face à la face nord de l’Eiger, Grindelwald est le village-balcon de l’Oberland bernois : chalets sur les alpages, gare de départ de l’Eiger Express et hôtels historiques nés avec l’alpinisme au XIXᵉ siècle. Votre **chauffeur privé à Grindelwald** assure les transferts depuis Zurich, Berne et Genève, les liaisons avec Interlaken et la vallée de Lauterbrunnen, et les mises à disposition à la journée pour explorer la région sans dépendre des horaires de train.',
        'Depuis le terminal du village, l’**Eiger Express** rejoint le glacier en quinze minutes et ouvre la voie du Jungfraujoch, la gare la plus haute d’Europe. Le First et son Cliff Walk dominent le village au nord, le lac de Bachalpsee reflète le Schreckhorn, et les lacs de Thoune et de Brienz déroulent leurs rives à trente minutes. Votre chauffeur compose des journées où chaque correspondance est anticipée.',
      ],
      en: [
        'Terraced opposite the Eiger north face, Grindelwald is the balcony village of the Bernese Oberland: chalets on the high pastures, the departure station of the Eiger Express, and historic hotels born with 19th-century alpinism. Your **private chauffeur in Grindelwald** covers transfers from Zurich, Bern and Geneva, links with Interlaken and the Lauterbrunnen valley, and full-day hire to explore the region free of railway timetables.',
        'From the village terminal, the **Eiger Express** reaches the glacier in fifteen minutes and opens the way to the Jungfraujoch, Europe’s highest railway station. The First and its Cliff Walk overlook the village to the north, Lake Bachalpsee mirrors the Schreckhorn, and Lakes Thun and Brienz unfold their shores thirty minutes away. Your chauffeur builds days in which every connection is anticipated.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Jungfraujoch par l’Eiger Express', en: 'Jungfraujoch via the Eiger Express' },
        teaser: {
          fr: 'Dépose au terminal de Grindelwald, quinze minutes de téléphérique jusqu’à l’Eigergletscher, puis le train du Jungfrau jusqu’à 3 454 mètres : palais des glaces, terrasse du Sphinx, glacier d’Aletsch. Billets réservés par nos soins.',
          en: 'Drop-off at the Grindelwald terminal, fifteen minutes by cable car to Eigergletscher, then the Jungfrau Railway up to 3,454 metres: the Ice Palace, the Sphinx terrace, the Aletsch Glacier. Tickets booked by us.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '560',
      },
      {
        title: { fr: 'First, Cliff Walk et lac de Bachalpsee', en: 'First, Cliff Walk and Lake Bachalpsee' },
        teaser: {
          fr: 'Le téléphérique du First à 2 168 mètres, la passerelle du Cliff Walk au-dessus du vide, puis une heure de sentier facile jusqu’au Bachalpsee, miroir du Schreckhorn. Descente en trottinette ou en kart de montagne pour les amateurs.',
          en: 'The First cable car to 2,168 metres, the Cliff Walk out over the void, then an easy hour’s trail to the Bachalpsee, mirror of the Schreckhorn. Descend by trottibike or mountain cart if you are game.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Kleine Scheidegg, sous la face nord', en: 'Kleine Scheidegg, beneath the north face' },
        teaser: {
          fr: 'Le train historique de la Wengernalp jusqu’au col de la Kleine Scheidegg, face au triptyque Eiger-Mönch-Jungfrau : la face nord racontée depuis les terrasses où les alpinistes étaient observés à la longue-vue. Déjeuner d’altitude réservé.',
          en: 'The historic Wengernalp railway up to the Kleine Scheidegg pass, facing the Eiger-Mönch-Jungfrau triptych: the north face told from the terraces where climbers were once watched by telescope. Mountaintop lunch reserved.',
        },
        duration: { fr: 'Demi-journée ou journée', en: 'Half or full day' },
        price: '430',
      },
      {
        title: { fr: 'Lacs de Thoune et de Brienz', en: 'Lakes Thun and Brienz' },
        teaser: {
          fr: 'À 30 minutes du village, les deux lacs d’Interlaken : croisière vers le château d’Oberhofen ou les chutes de Giessbach, village des sculpteurs de Brienz, grottes de Saint-Béat. Retour par le belvédère du Harder Kulm au couchant.',
          en: '30 minutes from the village, Interlaken’s two lakes: a cruise to Oberhofen Castle or the Giessbach falls, the woodcarvers’ village of Brienz, the St. Beatus caves. Return via the Harder Kulm viewpoint at sunset.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '520',
      },
      {
        title: { fr: 'Gorges du glacier et soirée alpage', en: 'Glacier gorge and an alpine evening' },
        teaser: {
          fr: 'Les gorges de Grindelwald creusées par le glacier inférieur, passerelles au-dessus de la Lütschine, puis fondue dans un restaurant d’alpage face à l’Eiger au couchant. Le véhicule vous ramène à l’hôtel, quelle que soit l’heure.',
          en: 'The Grindelwald gorge carved by the lower glacier, walkways above the Lütschine, then fondue at a mountain restaurant facing the Eiger at sunset. The vehicle brings you back to your hotel, whatever the hour.',
        },
        duration: { fr: 'Demi-journée ou soirée', en: 'Half day or evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Zurich et Grindelwald ?',
          en: 'How much does a transfer between Zurich Airport and Grindelwald cost?',
        },
        a: {
          fr: 'Le transfert privé entre Zurich-Kloten (ZRH) et Grindelwald — 140 km, environ 2 heures — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Zurich-Kloten (ZRH) and Grindelwald — 140 km, about 2 hours — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Le village de Grindelwald est-il accessible en voiture toute l’année ?',
          en: 'Is Grindelwald accessible by car all year round?',
        },
        a: {
          fr: 'Oui. Contrairement à Wengen ou Mürren, Grindelwald est ouvert à la circulation et votre chauffeur vous dépose directement à votre hôtel, y compris en hiver — nos véhicules sont équipés pour la neige. La route depuis Interlaken reste dégagée toute l’année.',
          en: 'Yes. Unlike Wengen or Mürren, Grindelwald is open to traffic and your chauffeur drops you directly at your hotel, winter included — our vehicles are equipped for snow. The road from Interlaken is kept clear all year.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver l’Eiger Express et le Jungfraujoch à l’avance ?',
          en: 'Should the Eiger Express and the Jungfraujoch be booked in advance?',
        },
        a: {
          fr: 'En haute saison, oui : les créneaux du matin partent vite. Nous réservons vos billets avec horaire garanti et calons la dépose au terminal en conséquence ; en cas de météo bouchée en altitude, votre chauffeur propose un itinéraire de repli — First, lacs ou Kleine Scheidegg — sans frais de modification.',
          en: 'In high season, yes: the morning slots sell out fast. We book your tickets with a guaranteed time and plan the terminal drop-off accordingly; if the summit weather closes in, your chauffeur suggests a fallback — the First, the lakes or Kleine Scheidegg — with no amendment fee.',
        },
      },
    ],
    nearby: ['lauterbrunnen', 'bern', 'lucerne', 'zurich'],
  },
  {
    slug: 'berlin',
    name: { fr: 'Berlin', en: 'Berlin' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Berlin-Brandenburg (BER)',
    airportTransfer: {
      fr: 'L’aéroport de Berlin-Brandenburg (BER) se trouve à 26 km au sud-est du centre : comptez 35 à 45 minutes de trajet jusqu’à Mitte ou la Potsdamer Platz selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Berlin Brandenburg Airport (BER) lies 26 km south-east of the city centre: allow 35 to 45 minutes to reach Mitte or Potsdamer Platz depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale réunifiée et première scène culturelle d’Allemagne, Berlin s’étend de la porte de Brandebourg aux galeries de Kreuzberg, de l’île aux Musées aux ambassades du Tiergarten. Votre **chauffeur privé à Berlin** dessert les ministères et sièges d’entreprise de Mitte, les studios de Babelsberg, les salons de la Messe Berlin comme les hôtels d’Unter den Linden. Berlines Mercedes et vans de grande capacité, prix fixes confirmés à l’avance, chauffeurs anglophones sur demande : chaque trajet est préparé avant votre arrivée.',
        'Autour de la capitale, le Brandebourg se découvre idéalement par la route. Le **château de Sanssouci** et Potsdam sont à 35 minutes du centre, les canaux du Spreewald à une heure trente, Dresde et Leipzig à moins de deux heures d’autoroute. En mise à disposition à la journée, votre chauffeur enchaîne mémoriaux, palais prussiens et villages de la Marche sans que vous consultiez un horaire — itinéraires sur mesure, attente comprise, retour de nuit assuré.',
      ],
      en: [
        'Reunified capital and Germany’s leading cultural stage, Berlin stretches from the Brandenburg Gate to the galleries of Kreuzberg, from Museum Island to the embassies of the Tiergarten. Your **private chauffeur in Berlin** serves the ministries and corporate headquarters of Mitte, the Babelsberg studios, the Messe Berlin trade fairs and the hotels of Unter den Linden alike. Mercedes sedans and full-size vans, fixed prices confirmed in advance, English-speaking chauffeurs on request: every journey is planned before you land.',
        'Around the capital, Brandenburg is best explored by road. **Sanssouci Palace** and Potsdam are 35 minutes from the centre, the Spreewald canals an hour and a half away, Dresden and Leipzig under two hours by motorway. With a full-day chauffeur hire, you move between memorials, Prussian palaces and villages of the March without ever checking a timetable — tailor-made itineraries, waiting time included, guaranteed late-night return.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Potsdam et le château de Sanssouci', en: 'Potsdam and Sanssouci Palace' },
        teaser: {
          fr: 'À 35 km au sud-ouest de Berlin, la résidence d’été de Frédéric II : le palais rococo de Sanssouci et ses vignes en terrasses, le Neues Palais, le quartier hollandais et le pont de Glienicke, théâtre des échanges d’espions.',
          en: '35 km south-west of Berlin, the summer residence of Frederick the Great: the rococo Sanssouci Palace and its terraced vines, the Neues Palais, the Dutch Quarter and the Glienicke Bridge, stage of Cold War spy swaps.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Berlin, mémoire et murailles', en: 'Berlin, memory and walls' },
        teaser: {
          fr: 'De l’East Side Gallery au mémorial de Bernauer Strasse, de Checkpoint Charlie au mémorial de l’Holocauste : un demi-siècle d’histoire parcouru en véhicule privé, avec arrêts au Reichstag et sur l’île aux Musées.',
          en: 'From the East Side Gallery to the Bernauer Strasse memorial, from Checkpoint Charlie to the Holocaust Memorial: half a century of history covered by private car, with stops at the Reichstag and on Museum Island.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Spreewald, canaux et villages sorabes', en: 'Spreewald canals and Sorbian villages' },
        teaser: {
          fr: 'À 100 km au sud-est, la réserve de biosphère du Spreewald : promenade en barque à fond plat depuis Lübbenau, villages sorabes de Lehde, dégustation des célèbres cornichons de la région. Retour par Lübben.',
          en: '100 km south-east, the Spreewald biosphere reserve: a flat-bottomed punt ride from Lübbenau, the Sorbian village of Lehde, a tasting of the region’s celebrated gherkins. Return via Lübben.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
      {
        title: { fr: 'Dresde, la Florence de l’Elbe', en: 'Dresden, Florence on the Elbe' },
        teaser: {
          fr: 'À 190 km de Berlin, la vieille ville reconstruite de Dresde : la Frauenkirche, le Zwinger et sa galerie des Maîtres anciens, la terrasse de Brühl au-dessus de l’Elbe. Déjeuner dans le Neumarkt, retour en soirée.',
          en: '190 km from Berlin, Dresden’s rebuilt old town: the Frauenkirche, the Zwinger and its Old Masters gallery, the Brühl Terrace above the Elbe. Lunch on the Neumarkt, evening return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '980',
      },
      {
        title: { fr: 'Soirée gastronomique berlinoise', en: 'Berlin gourmet evening' },
        teaser: {
          fr: 'Dépose devant votre table — Rutz, Tim Raue ou le Lorenz Adlon Esszimmer face à la porte de Brandebourg — puis tour des illuminations d’Unter den Linden et de la Potsdamer Platz. Le véhicule vous attend toute la soirée.',
          en: 'Drop-off at your table — Rutz, Tim Raue or the Lorenz Adlon Esszimmer facing the Brandenburg Gate — followed by a tour of the illuminated Unter den Linden and Potsdamer Platz. The vehicle waits all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Berlin-Brandenburg et le centre-ville ?',
          en: 'How much does a transfer between Berlin Brandenburg Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Berlin-Brandenburg (BER) et le centre de Berlin est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Berlin Brandenburg (BER) and central Berlin is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition pendant les salons de la Messe Berlin ou la Berlinale ?',
          en: 'Do you offer hourly hire during Messe Berlin trade fairs or the Berlinale?',
        },
        a: {
          fr: 'Oui. Pendant l’ITB, l’IFA ou la Berlinale, la mise à disposition à l’heure ou à la journée est la formule la plus adaptée : votre chauffeur relie halls d’exposition, hôtels et lieux de projection, attend entre chaque rendez-vous et s’ajuste à votre agenda en temps réel. Réservez tôt, la demande est très forte sur ces dates.',
          en: 'Yes. During ITB, IFA or the Berlinale, hourly or full-day hire is the most suitable option: your chauffeur links exhibition halls, hotels and screening venues, waits between each appointment and adjusts to your schedule in real time. Book early — demand is very high on those dates.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une excursion à Potsdam ou dans le Spreewald depuis Berlin ?',
          en: 'Can you arrange a day trip to Potsdam or the Spreewald from Berlin?',
        },
        a: {
          fr: 'Oui, ce sont nos deux excursions les plus demandées au départ de Berlin. Potsdam se visite en une journée avec entrées aux palais réservées à l’avance ; le Spreewald se combine avec une promenade en barque depuis Lübbenau. Le véhicule reste à disposition sur place, retour à votre hôtel inclus.',
          en: 'Yes, they are our two most requested excursions from Berlin. Potsdam works as a full day with palace tickets booked in advance; the Spreewald pairs with a punt ride from Lübbenau. The vehicle remains on standby throughout, with return to your hotel included.',
        },
      },
    ],
    nearby: ['leipzig', 'dresden', 'hamburg'],
  },
  {
    slug: 'munich',
    name: { fr: 'Munich', en: 'Munich' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Munich Franz Josef Strauss (MUC)',
    airportTransfer: {
      fr: 'L’aéroport de Munich Franz Josef Strauss (MUC) est à 37 km au nord-est du centre : comptez 35 à 45 minutes de trajet jusqu’à la Marienplatz ou au quartier de Maxvorstadt selon le trafic. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Munich Franz Josef Strauss Airport (MUC) is 37 km north-east of the centre: allow 35 to 45 minutes to reach Marienplatz or the Maxvorstadt district depending on traffic. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale bavaroise et première place économique du sud de l’Allemagne, Munich réunit la Marienplatz et sa Frauenkirche, les collections des Pinacothèques, le jardin anglais et le siège de BMW. Votre **chauffeur privé à Munich** dessert la Messe München et l’Allianz Arena, les cliniques de Grosshadern et Bogenhausen, les maisons de la Maximilianstrasse comme les brasseries historiques du centre. Berlines et vans premium, prix fixes annoncés à l’avance, prise en charge ponctuelle même pendant l’Oktoberfest.',
        'Munich est surtout la porte des Alpes bavaroises. Le **château de Neuschwanstein** se rejoint en deux heures de route, Garmisch-Partenkirchen et la Zugspitze en une heure trente, Salzbourg en moins de deux heures, le lac de Chiemsee en une heure. En mise à disposition à la journée, votre chauffeur enchaîne châteaux de Louis II, lacs alpins et villages de Haute-Bavière — itinéraires sur mesure, billets coupe-file conseillés, retour en soirée sans contrainte.',
      ],
      en: [
        'Bavaria’s capital and the economic heart of southern Germany, Munich brings together Marienplatz and its Frauenkirche, the Pinakothek collections, the English Garden and the BMW headquarters. Your **private chauffeur in Munich** serves Messe München and the Allianz Arena, the Grosshadern and Bogenhausen clinics, the boutiques of Maximilianstrasse and the historic beer halls of the old town alike. Premium sedans and vans, fixed prices confirmed in advance, punctual pick-ups even at the height of Oktoberfest.',
        'Above all, Munich is the gateway to the Bavarian Alps. **Neuschwanstein Castle** is two hours away by road, Garmisch-Partenkirchen and the Zugspitze an hour and a half, Salzburg under two hours, Lake Chiemsee one hour. With a full-day chauffeur hire, you link King Ludwig’s castles, alpine lakes and Upper Bavarian villages — tailor-made itineraries, skip-the-line tickets recommended, effortless evening return.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Neuschwanstein et Linderhof', en: 'Neuschwanstein and Linderhof' },
        teaser: {
          fr: 'À 110 km au sud-ouest de Munich, les châteaux de Louis II de Bavière : Neuschwanstein dressé au-dessus des gorges de la Pöllat, le pavillon de Linderhof et sa grotte de Vénus, halte au village peint d’Oberammergau.',
          en: '110 km south-west of Munich, the castles of King Ludwig II: Neuschwanstein perched above the Pöllat gorge, the Linderhof pavilion and its Venus Grotto, a stop in the painted village of Oberammergau.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Salzbourg, ville de Mozart', en: 'Salzburg, city of Mozart' },
        teaser: {
          fr: 'À 145 km à l’est, la vieille ville baroque inscrite à l’UNESCO : la maison natale de Mozart sur la Getreidegasse, la forteresse de Hohensalzburg, les jardins Mirabell. Passage de frontière sans formalité, déjeuner sur place.',
          en: '145 km east, the UNESCO-listed baroque old town: Mozart’s birthplace on the Getreidegasse, Hohensalzburg fortress, the Mirabell gardens. Seamless border crossing, lunch on site.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '920',
      },
      {
        title: { fr: 'Chiemsee et Herrenchiemsee', en: 'Chiemsee and Herrenchiemsee' },
        teaser: {
          fr: 'À 90 km au sud-est, la « mer de Bavière » : traversée en bateau vers l’île de Herreninsel et le palais de Herrenchiemsee, réplique voulue de Versailles par Louis II, puis l’île des Dames et son couvent millénaire.',
          en: '90 km south-east, the “Bavarian Sea”: a boat crossing to Herreninsel and Herrenchiemsee Palace, Ludwig II’s deliberate answer to Versailles, then Fraueninsel and its thousand-year-old convent.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '780',
      },
      {
        title: { fr: 'Garmisch-Partenkirchen et la Zugspitze', en: 'Garmisch-Partenkirchen and the Zugspitze' },
        teaser: {
          fr: 'À 90 km au sud, la station olympique au pied du plus haut sommet d’Allemagne : montée en train à crémaillère ou en téléphérique à 2 962 mètres, gorge de la Partnach, déjeuner face au massif du Wetterstein.',
          en: '90 km south, the Olympic resort at the foot of Germany’s highest peak: cogwheel train or cable car up to 2,962 metres, the Partnach Gorge, lunch facing the Wetterstein massif.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '760',
      },
      {
        title: { fr: 'Soirée munichoise', en: 'Munich evening' },
        teaser: {
          fr: 'Dîner au Tantris, à l’Atelier du Bayerischer Hof ou dans la brasserie de votre choix, puis les façades illuminées de la Residenz et de l’Odeonsplatz. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Dinner at Tantris, at Atelier in the Bayerischer Hof or in the beer hall of your choice, then the illuminated façades of the Residenz and Odeonsplatz. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Munich et le centre-ville ?',
          en: 'How much does a transfer between Munich Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Munich Franz Josef Strauss (MUC) et le centre de Munich est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard sont inclus.',
          en: 'A private transfer between Munich Franz Josef Strauss (MUC) and central Munich is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver longtemps à l’avance pendant l’Oktoberfest ?',
          en: 'How far in advance should I book during Oktoberfest?',
        },
        a: {
          fr: 'De mi-septembre à début octobre, la demande est exceptionnelle et les abords de la Theresienwiese sont fermés à la circulation. Nous recommandons de réserver au moins une semaine à l’avance ; votre chauffeur connaît les points de dépose autorisés au plus près des entrées et assure les retours de nuit.',
          en: 'From mid-September to early October demand is exceptional and the streets around the Theresienwiese are closed to traffic. We recommend booking at least a week ahead; your chauffeur knows the authorised drop-off points closest to the entrances and handles late-night returns.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une excursion à Neuschwanstein depuis Munich ?',
          en: 'Can you arrange a day trip to Neuschwanstein from Munich?',
        },
        a: {
          fr: 'Oui, c’est notre excursion la plus demandée au départ de Munich. Comptez une journée complète avec Linderhof et Oberammergau en chemin ; les billets d’entrée à horaire fixe doivent être réservés à l’avance, ce que nous pouvons prendre en charge. Le véhicule reste à disposition sur place.',
          en: 'Yes, it is our most requested excursion from Munich. Allow a full day, with Linderhof and Oberammergau on the way; timed entry tickets must be booked in advance, which we can arrange for you. The vehicle remains on standby throughout.',
        },
      },
    ],
    nearby: ['neuschwanstein-fussen', 'garmisch-partenkirchen', 'salzburg', 'nuremberg'],
  },
  {
    slug: 'frankfurt',
    name: { fr: 'Francfort', en: 'Frankfurt' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Frankfurt am Main (FRA)',
    airportTransfer: {
      fr: 'L’aéroport de Frankfurt am Main (FRA) se trouve à 12 km au sud-ouest du centre : comptez 15 à 25 minutes de trajet jusqu’au quartier bancaire ou au Römerberg selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Frankfurt am Main Airport (FRA) lies 12 km south-west of the city centre: allow 15 to 25 minutes to reach the banking district or the Römerberg depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Place financière de l’Europe continentale et premier hub aérien d’Allemagne, Francfort aligne les tours du quartier bancaire au-dessus du Römerberg reconstruit et des musées du Museumsufer. Votre **chauffeur privé à Francfort** relie la Banque centrale européenne, les sièges de la Bourse et de la Messe Frankfurt, les cabinets du Westend et les tables du quartier de Sachsenhausen. Berlines Mercedes et vans premium, prix fixes confirmés à l’avance, discrétion et ponctualité adaptées aux agendas les plus serrés.',
        'À moins d’une heure de route, la région change de visage. Le **vignoble du Rheingau** déroule ses rieslings d’Eltville à Rüdesheim, la vallée du Rhin romantique et la Loreley se rejoignent par les rives, Heidelberg et son château dominent le Neckar à 90 km. Wiesbaden la thermale et Mayence la gutenbergienne complètent l’éventail des demi-journées. Votre chauffeur compose l’itinéraire, réserve les dégustations et vous ramène à votre hôtel ou à l’aéroport.',
      ],
      en: [
        'Continental Europe’s financial centre and Germany’s busiest air hub, Frankfurt lines up the towers of the banking district above the rebuilt Römerberg and the museums of the Museumsufer. Your **private chauffeur in Frankfurt** links the European Central Bank, the Stock Exchange and Messe Frankfurt, the law firms of the Westend and the restaurants of Sachsenhausen. Mercedes sedans and premium vans, fixed prices confirmed in advance, with the discretion and punctuality the tightest schedules demand.',
        'Less than an hour away, the region changes character entirely. The **Rheingau vineyards** unfurl their Rieslings from Eltville to Rüdesheim, the romantic Rhine Valley and the Loreley follow the riverbanks, and Heidelberg’s castle overlooks the Neckar 90 km away. Spa-town Wiesbaden and Gutenberg’s Mainz round out the half-day options. Your chauffeur builds the itinerary, books the tastings and returns you to your hotel or the airport.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Rheingau, la route du riesling', en: 'Rheingau, the Riesling route' },
        teaser: {
          fr: 'À 50 km à l’ouest de Francfort, les coteaux du Rheingau entre Eltville, Oestrich-Winkel et Rüdesheim : dégustations au château de Vollrads et à l’abbaye d’Eberbach, déjeuner face au Rhin pendant que votre chauffeur conduit.',
          en: '50 km west of Frankfurt, the Rheingau slopes between Eltville, Oestrich-Winkel and Rüdesheim: tastings at Schloss Vollrads and Eberbach Abbey, lunch overlooking the Rhine while your chauffeur drives.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Heidelberg et son château', en: 'Heidelberg and its castle' },
        teaser: {
          fr: 'À 90 km au sud, la plus célèbre ville universitaire d’Allemagne : les ruines romantiques du château au-dessus du Neckar, le Vieux Pont, la Hauptstrasse et ses librairies. Retour par la Bergstrasse et ses vergers.',
          en: '90 km south, Germany’s most famous university town: the romantic castle ruins above the Neckar, the Old Bridge, the Hauptstrasse and its bookshops. Return along the orchard-lined Bergstrasse.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Vallée du Rhin et rocher de la Loreley', en: 'Rhine Valley and the Loreley rock' },
        teaser: {
          fr: 'De Rüdesheim à Sankt Goarshausen, la vallée du Haut-Rhin moyen classée UNESCO : châteaux perchés de Rheinfels et de Katz, le rocher de la Loreley à 132 mètres au-dessus du fleuve, croisière courte possible entre deux rives.',
          en: 'From Rüdesheim to Sankt Goarshausen, the UNESCO-listed Upper Middle Rhine Valley: the hilltop castles of Rheinfels and Katz, the Loreley rock rising 132 metres above the river, with an optional short cruise between banks.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '760',
      },
      {
        title: { fr: 'Wiesbaden et Mayence', en: 'Wiesbaden and Mainz' },
        teaser: {
          fr: 'Deux capitales à 40 km de Francfort : Wiesbaden, ses thermes et son Kurhaus néoclassique, puis Mayence, la cathédrale millénaire et le musée Gutenberg où naquit l’imprimerie. Halte dans les vignes du Rheinhessen possible.',
          en: 'Two capitals 40 km from Frankfurt: Wiesbaden with its thermal baths and neoclassical Kurhaus, then Mainz, its thousand-year-old cathedral and the Gutenberg Museum where printing was born. Optional stop in the Rheinhessen vines.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Soirée francfortoise', en: 'Frankfurt evening' },
        teaser: {
          fr: 'Dîner au Lafleur du Palmengarten, au Gustav du Westend ou dans une taverne à cidre de Sachsenhausen, puis la skyline illuminée depuis les ponts du Main. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Dinner at Lafleur in the Palmengarten, at Gustav in the Westend or in a Sachsenhausen cider tavern, then the illuminated skyline from the Main bridges. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '360',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Francfort et le centre-ville ?',
          en: 'How much does a transfer between Frankfurt Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Frankfurt am Main (FRA) et le centre de Francfort est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Frankfurt am Main (FRA) and central Frankfurt is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les déplacements pendant la Buchmesse et les grands salons de Francfort ?',
          en: 'Do you cover travel during the Buchmesse and Frankfurt’s major trade fairs?',
        },
        a: {
          fr: 'Oui. Pendant la Foire du livre, Light + Building ou Automechanika, la mise à disposition à l’heure ou à la journée est la formule la plus efficace : votre chauffeur relie halls de la Messe, hôtels et dîners d’affaires, attend entre chaque rendez-vous. Réservez tôt, les dates de salon saturent vite.',
          en: 'Yes. During the Book Fair, Light + Building or Automechanika, hourly or full-day hire is the most efficient option: your chauffeur links the Messe halls, hotels and business dinners, waiting between each appointment. Book early — fair dates fill up fast.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des correspondances entre l’aéroport de Francfort et d’autres villes allemandes ?',
          en: 'Do you offer onward journeys from Frankfurt Airport to other German cities?',
        },
        a: {
          fr: 'Oui. Depuis FRA, nous assurons régulièrement Heidelberg, Stuttgart, Cologne, Baden-Baden ou Wiesbaden en trajet direct porte-à-porte. Chaque liaison est devisée à l’avance, à prix fixe, avec prise en charge en salle d’arrivée quelle que soit l’heure d’atterrissage.',
          en: 'Yes. From FRA we regularly serve Heidelberg, Stuttgart, Cologne, Baden-Baden and Wiesbaden with direct door-to-door journeys. Each route is quoted in advance at a fixed price, with a meet-and-greet in the arrivals hall whatever your landing time.',
        },
      },
    ],
    nearby: ['heidelberg', 'cologne', 'stuttgart', 'baden-baden'],
  },
  {
    slug: 'hamburg',
    name: { fr: 'Hambourg', en: 'Hamburg' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Hamburg Helmut Schmidt (HAM)',
    airportTransfer: {
      fr: 'L’aéroport de Hamburg Helmut Schmidt (HAM) est à 9 km au nord du centre : comptez 20 à 30 minutes de trajet jusqu’à l’hôtel de ville ou au quartier de la HafenCity selon le trafic. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Hamburg Helmut Schmidt Airport (HAM) is 9 km north of the centre: allow 20 to 30 minutes to reach the city hall or the HafenCity district depending on traffic. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Deuxième ville d’Allemagne et premier port du pays, Hambourg conjugue l’héritage hanséatique de la Speicherstadt, la vague de verre de l’Elbphilharmonie et les villas blanches des rives de l’Alster. Votre **chauffeur privé à Hambourg** dessert le port et les terminaux de croisière, les maisons de négoce du Kontorhausviertel, les studios et rédactions de la ville comme les théâtres musicaux des rives de l’Elbe. Berlines et vans premium, prix fixes confirmés à l’avance, accueil possible au pied de votre passerelle.',
        'Au nord de l’Elbe, les escapades sont nombreuses. **Lübeck, la reine de la Hanse**, et sa porte de Holstentor sont à 65 km, les plages de la Baltique à Travemünde ou Timmendorfer Strand à une heure, les vergers de l’Altes Land à trente minutes sur la rive opposée. Brême et son Rathaus classé complètent l’éventail à 120 km. Votre chauffeur compose la journée, réserve les tables et vous ramène sans contrainte d’horaire.',
      ],
      en: [
        'Germany’s second city and its largest port, Hamburg pairs the Hanseatic heritage of the Speicherstadt with the glass wave of the Elbphilharmonie and the white villas along the Alster. Your **private chauffeur in Hamburg** serves the port and cruise terminals, the trading houses of the Kontorhaus district, the city’s studios and newsrooms, and the musical theatres on the Elbe alike. Premium sedans and vans, fixed prices confirmed in advance, with pick-up possible right at your gangway.',
        'North of the Elbe, the excursions multiply. **Lübeck, queen of the Hanseatic League**, and its Holstentor gate are 65 km away, the Baltic beaches of Travemünde and Timmendorfer Strand an hour, the Altes Land orchards thirty minutes across the river. Bremen and its UNESCO-listed Rathaus complete the picture at 120 km. Your chauffeur shapes the day, books the tables and brings you back with no timetable to watch.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Lübeck, reine de la Hanse', en: 'Lübeck, queen of the Hanse' },
        teaser: {
          fr: 'À 65 km au nord-est de Hambourg, la vieille ville insulaire classée UNESCO : la porte de Holstentor, la Marienkirche et ses voûtes de brique, la maison Buddenbrook des Mann, dégustation de massepain chez Niederegger.',
          en: '65 km north-east of Hamburg, the UNESCO-listed island old town: the Holstentor gate, the brick vaults of the Marienkirche, the Mann family’s Buddenbrook House, a marzipan tasting at Niederegger.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Altes Land, vergers de l’Elbe', en: 'Altes Land, orchards of the Elbe' },
        teaser: {
          fr: 'À 30 km au sud-ouest, le plus grand verger d’Europe du Nord : fermes à colombages de Jork et de la Lühe, digues fleuries au moment des cerisiers et des pommiers, halte gourmande dans un café de ferme face au fleuve.',
          en: '30 km south-west, northern Europe’s largest orchard: the half-timbered farmhouses of Jork and the Lühe, blossom-lined dykes in cherry and apple season, a farm café stop overlooking the river.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Hambourg maritime, port et Speicherstadt', en: 'Maritime Hamburg, port and Speicherstadt' },
        teaser: {
          fr: 'La Speicherstadt et ses canaux de brique, la plaza de l’Elbphilharmonie, les Landungsbrücken et le vieux tunnel sous l’Elbe, puis la plage d’Övelgönne face aux porte-conteneurs. La ville portuaire en véhicule privé.',
          en: 'The Speicherstadt and its brick canals, the Elbphilharmonie plaza, the Landungsbrücken and the old Elbe tunnel, then Övelgönne beach facing the container ships. The port city by private car.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '410',
      },
      {
        title: { fr: 'Plages de la Baltique', en: 'Baltic Sea beaches' },
        teaser: {
          fr: 'À 80 km au nord-est, les stations balnéaires de la baie de Lübeck : la promenade de Timmendorfer Strand, les cabines de plage de Scharbeutz, Travemünde et son phare du XVIe siècle. Déjeuner de poisson face à la mer.',
          en: '80 km north-east, the seaside resorts of Lübeck Bay: the Timmendorfer Strand promenade, the beach chairs of Scharbeutz, Travemünde and its sixteenth-century lighthouse. A fish lunch facing the sea.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée hambourgeoise', en: 'Hamburg evening' },
        teaser: {
          fr: 'Concert à l’Elbphilharmonie ou dîner au Haerlin du Vier Jahreszeiten, au The Table de Kevin Fehling en HafenCity, puis les quais illuminés de la Speicherstadt. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'A concert at the Elbphilharmonie or dinner at Haerlin in the Vier Jahreszeiten or Kevin Fehling’s The Table in HafenCity, then the illuminated quays of the Speicherstadt. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Hambourg et le centre-ville ?',
          en: 'How much does a transfer between Hamburg Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Hamburg Helmut Schmidt (HAM) et le centre de Hambourg est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard sont inclus.',
          en: 'A private transfer between Hamburg Helmut Schmidt (HAM) and central Hamburg is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers les terminaux de croisière de Hambourg ?',
          en: 'Do you provide transfers to Hamburg’s cruise terminals?',
        },
        a: {
          fr: 'Oui. Nous desservons les trois terminaux — Steinwerder, Altona et HafenCity — depuis l’aéroport, la gare ou votre hôtel, avec prise en charge des bagages et horaire calé sur l’embarquement. Pour les débarquements, votre chauffeur vous attend à la sortie du terminal, panneau nominatif en main.',
          en: 'Yes. We serve all three terminals — Steinwerder, Altona and HafenCity — from the airport, the station or your hotel, with luggage handling and timing aligned to boarding. On disembarkation, your chauffeur waits at the terminal exit with a name board.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une excursion à Lübeck ou sur la Baltique depuis Hambourg ?',
          en: 'Can you arrange a day trip to Lübeck or the Baltic coast from Hamburg?',
        },
        a: {
          fr: 'Oui, Lübeck se visite confortablement en une journée, seule ou combinée avec Travemünde et les plages de la baie. Le véhicule reste à disposition sur place, votre chauffeur vous dépose au plus près des zones piétonnes de la vieille ville et assure le retour en soirée.',
          en: 'Yes, Lübeck works comfortably as a day trip, on its own or combined with Travemünde and the bay’s beaches. The vehicle remains on standby throughout; your chauffeur drops you as close as possible to the old town’s pedestrian zones and handles the evening return.',
        },
      },
    ],
    nearby: ['bremen', 'hanover', 'berlin'],
  },
  {
    slug: 'cologne',
    name: { fr: 'Cologne', en: 'Cologne' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Cologne-Bonn (CGN)',
    airportTransfer: {
      fr: 'L’aéroport de Cologne-Bonn (CGN) se trouve à 15 km au sud-est du centre : comptez 15 à 25 minutes de trajet jusqu’à la cathédrale ou aux quais du Rhin selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Cologne Bonn Airport (CGN) lies 15 km south-east of the city centre: allow 15 to 25 minutes to reach the cathedral or the Rhine embankment depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Deux mille ans d’histoire rhénane veillés par les flèches de la plus grande cathédrale gothique d’Allemagne : Cologne aligne ses douze églises romanes, le musée Ludwig et ses Picasso, les brasseries à Kölsch de la vieille ville. Votre **chauffeur privé à Cologne** dessert la Koelnmesse de Deutz, les studios et chaînes de télévision, les sièges d’assurance de la Rheinuferstrasse comme les quais d’embarquement des croisières fluviales. Berlines et vans premium, prix fixes annoncés à l’avance, ponctualité y compris les jours de salon.',
        'Le long du fleuve, les excursions s’enchaînent naturellement. Les **châteaux baroques de Brühl**, Augustusburg et Falkenlust, classés UNESCO, sont à quinze minutes ; Bonn la beethovénienne et le Drachenfels des Sept Montagnes à quarante ; la vallée de l’Ahr et ses pinots noirs à une heure ; Aix-la-Chapelle et la chapelle palatine de Charlemagne à 70 km. Votre chauffeur trace l’itinéraire, gère les entrées et vous ramène à votre hôtel sans contrainte.',
      ],
      en: [
        'Two thousand years of Rhineland history watched over by the spires of Germany’s largest Gothic cathedral: Cologne lines up its twelve Romanesque churches, the Museum Ludwig and its Picassos, and the Kölsch brewhouses of the old town. Your **private chauffeur in Cologne** serves the Koelnmesse in Deutz, the city’s television studios and broadcasters, the insurance headquarters along the Rhine and the river-cruise piers alike. Premium sedans and vans, fixed prices confirmed in advance, punctual even on trade-fair days.',
        'Along the river, the excursions follow one another naturally. The UNESCO-listed **baroque palaces of Brühl**, Augustusburg and Falkenlust, are fifteen minutes away; Beethoven’s Bonn and the Drachenfels of the Seven Mountains forty; the Ahr valley and its Pinot Noirs an hour; Aachen and Charlemagne’s Palatine Chapel 70 km. Your chauffeur plots the route, handles the tickets and returns you to your hotel at your own pace.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Châteaux de Brühl et Bonn', en: 'Brühl palaces and Bonn' },
        teaser: {
          fr: 'À 15 km au sud, Augustusburg et son escalier de Balthasar Neumann, le pavillon de chasse de Falkenlust, puis Bonn : la maison natale de Beethoven, l’ancien quartier gouvernemental et la promenade du Rhin.',
          en: '15 km south, Augustusburg and its Balthasar Neumann staircase, the Falkenlust hunting lodge, then Bonn: Beethoven’s birthplace, the former government quarter and the Rhine promenade.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Vallée de l’Ahr, pinots du nord', en: 'Ahr valley, northern Pinots' },
        teaser: {
          fr: 'À 55 km au sud, l’un des vignobles rouges les plus septentrionaux d’Europe : coteaux escarpés d’Ahrweiler et de Dernau, dégustations de Spätburgunder chez les domaines familiaux, déjeuner dans le centre médiéval d’Ahrweiler.',
          en: '55 km south, one of Europe’s northernmost red-wine regions: the steep slopes of Ahrweiler and Dernau, Spätburgunder tastings at family estates, lunch in Ahrweiler’s medieval centre.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Drachenfels et les Sept Montagnes', en: 'Drachenfels and the Seven Mountains' },
        teaser: {
          fr: 'À 40 km au sud, Königswinter et le rocher du Drachenfels au-dessus du Rhin : montée par le plus ancien train à crémaillère d’Allemagne, château néogothique de Drachenburg, vue sur la boucle du fleuve jusqu’à Bonn.',
          en: '40 km south, Königswinter and the Drachenfels rock above the Rhine: an ascent on Germany’s oldest rack railway, the neo-Gothic Drachenburg castle, views over the river bend towards Bonn.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '440',
      },
      {
        title: { fr: 'Aix-la-Chapelle, cité de Charlemagne', en: 'Aachen, city of Charlemagne' },
        teaser: {
          fr: 'À 70 km à l’ouest, la capitale carolingienne : la chapelle palatine octogonale et le trône de Charlemagne, le trésor de la cathédrale, l’hôtel de ville gothique et les Printen, pains d’épices de la ville.',
          en: '70 km west, the Carolingian capital: the octagonal Palatine Chapel and Charlemagne’s throne, the cathedral treasury, the Gothic town hall and the city’s Printen gingerbread.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Soirée colonaise', en: 'Cologne evening' },
        teaser: {
          fr: 'Dîner au Moissonnier, à l’Ox & Klee en rive droite ou dans la brasserie à Kölsch de votre choix, puis la cathédrale et les ponts du Rhin illuminés depuis les quais. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Dinner at Le Moissonnier, at Ox & Klee on the right bank or in the Kölsch brewhouse of your choice, then the illuminated cathedral and Rhine bridges from the embankment. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Cologne-Bonn et le centre-ville ?',
          en: 'How much does a transfer between Cologne Bonn Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Cologne-Bonn (CGN) et le centre de Cologne est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Cologne Bonn (CGN) and central Cologne is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les déplacements pendant les salons de la Koelnmesse ou le carnaval de Cologne ?',
          en: 'Do you cover travel during Koelnmesse trade fairs or the Cologne Carnival?',
        },
        a: {
          fr: 'Oui. Pendant Gamescom, Anuga ou Art Cologne, la mise à disposition relie halls, hôtels et dîners sans temps mort. Pendant le carnaval, de nombreuses rues du centre ferment à la circulation : votre chauffeur connaît les itinéraires de contournement et les points de dépose autorisés. Réservez tôt sur ces dates.',
          en: 'Yes. During Gamescom, Anuga or Art Cologne, hourly hire links halls, hotels and dinners without downtime. During Carnival, many central streets close to traffic: your chauffeur knows the detour routes and the authorised drop-off points. Book early on those dates.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer un transfert entre Cologne et Düsseldorf ou Francfort ?',
          en: 'Can you provide a transfer between Cologne and Düsseldorf or Frankfurt?',
        },
        a: {
          fr: 'Oui. Düsseldorf est à 40 km, soit 35 à 50 minutes selon le trafic, et Francfort à 190 km par l’A3. Ces liaisons porte-à-porte sont devisées à l’avance, à prix fixe, y compris depuis les aéroports CGN et DUS, quelle que soit l’heure d’arrivée.',
          en: 'Yes. Düsseldorf is 40 km away — 35 to 50 minutes depending on traffic — and Frankfurt 190 km via the A3. These door-to-door routes are quoted in advance at a fixed price, including from CGN and DUS airports, whatever your arrival time.',
        },
      },
    ],
    nearby: ['dusseldorf', 'frankfurt'],
  },
  {
    slug: 'dusseldorf',
    name: { fr: 'Düsseldorf', en: 'Düsseldorf' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Düsseldorf International (DUS)',
    airportTransfer: {
      fr: 'L’aéroport de Düsseldorf International (DUS) est à 8 km au nord du centre : comptez 15 à 20 minutes de trajet jusqu’à la Königsallee ou à la vieille ville hors heures de pointe. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Düsseldorf International Airport (DUS) is 8 km north of the centre: allow 15 to 20 minutes to reach the Königsallee or the old town outside rush hour. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de la Rhénanie-du-Nord-Westphalie et place de la mode allemande, Düsseldorf aligne les vitrines de la **Königsallee**, les immeubles de Frank Gehry du MedienHafen et la « plus longue table du monde » de son Altstadt. Votre **chauffeur privé à Düsseldorf** dessert la Messe Düsseldorf et ses salons mondiaux, les sièges de conseil du Kö-Bogen, le quartier japonais de l’Immermannstrasse comme les galeries de la Grabbeplatz. Berlines et vans premium, prix fixes confirmés à l’avance, chauffeurs anglophones sur demande.',
        'La Ruhr et le Rhin s’ouvrent depuis la ville en moins d’une heure. Le **château de Benrath** et son parc à la française sont à 10 km, le vallon du Neandertal et son musée de l’évolution à un quart d’heure, la mine classée UNESCO de Zollverein à Essen à 35 km, Cologne et sa cathédrale à quarante minutes. En mise à disposition, votre chauffeur enchaîne rendez-vous d’affaires, visites et dîners sans que vous cherchiez jamais une place de parking.',
      ],
      en: [
        'Capital of North Rhine-Westphalia and Germany’s fashion hub, Düsseldorf lines up the boutiques of the **Königsallee**, Frank Gehry’s buildings in the MedienHafen and the “longest bar in the world” of its Altstadt. Your **private chauffeur in Düsseldorf** serves Messe Düsseldorf and its world-scale trade fairs, the consulting headquarters of the Kö-Bogen, the Japanese quarter of Immermannstrasse and the galleries of Grabbeplatz alike. Premium sedans and vans, fixed prices confirmed in advance, English-speaking chauffeurs on request.',
        'The Ruhr and the Rhine open up from the city within the hour. **Benrath Palace** and its formal gardens are 10 km away, the Neander Valley and its museum of human evolution fifteen minutes, the UNESCO-listed Zollverein colliery in Essen 35 km, Cologne and its cathedral forty minutes. With hourly hire, your chauffeur strings together business meetings, visits and dinners while you never once look for a parking space.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Château de Benrath et Kaiserswerth', en: 'Benrath Palace and Kaiserswerth' },
        teaser: {
          fr: 'Le palais rose de Benrath, joyau rococo au bord de son miroir d’eau, puis Kaiserswerth au nord : ruines du palais impérial de Barberousse, ruelles baroques et terrasses face au Rhin. Deux visages de Düsseldorf en une demi-journée.',
          en: 'The pink rococo palace of Benrath beside its mirror pond, then Kaiserswerth to the north: the ruins of Barbarossa’s imperial palace, baroque lanes and terraces facing the Rhine. Two faces of Düsseldorf in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Zollverein et la Ruhr industrielle', en: 'Zollverein and the industrial Ruhr' },
        teaser: {
          fr: 'À 35 km au nord-est, la mine de charbon la plus spectaculaire d’Europe, classée UNESCO : le chevalement Bauhaus du puits XII, le musée de la Ruhr dans l’ancien lavoir, la piscine des cokeries. L’épopée industrielle allemande.',
          en: '35 km north-east, Europe’s most spectacular colliery, UNESCO-listed: the Bauhaus winding tower of Shaft XII, the Ruhr Museum in the former coal washery, the coking-plant pool. Germany’s industrial epic.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '430',
      },
      {
        title: { fr: 'Neandertal, aux origines de l’homme', en: 'Neander Valley, origins of mankind' },
        teaser: {
          fr: 'À 15 km à l’est, le vallon où furent découverts en 1856 les ossements de l’homme de Néandertal : musée de l’évolution primé, site de la découverte, sentiers de la Düssel. Une parenthèse scientifique aux portes de la ville.',
          en: '15 km east, the valley where the Neanderthal bones were unearthed in 1856: the award-winning museum of evolution, the discovery site, the Düssel trails. A scientific interlude on the city’s doorstep.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Cologne depuis Düsseldorf', en: 'Cologne from Düsseldorf' },
        teaser: {
          fr: 'À 40 km au sud, la rivale rhénane : la cathédrale et son trésor, le musée Ludwig, les maisons pastel du Fischmarkt et une Kölsch dans une brasserie de l’Altstadt — que votre chauffeur ne mentionnera pas au retour.',
          en: '40 km south, the Rhineland rival: the cathedral and its treasury, the Museum Ludwig, the pastel houses of the Fischmarkt and a Kölsch in an Altstadt brewhouse — which your chauffeur will tactfully not mention back home.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '520',
      },
      {
        title: { fr: 'Soirée düsseldorfoise', en: 'Düsseldorf evening' },
        teaser: {
          fr: 'Dîner à l’Im Schiffchen de Kaiserswerth, au Nagaya du quartier japonais ou sur la Kö, puis les bassins illuminés du MedienHafen et la tour du Rhin. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Dinner at Im Schiffchen in Kaiserswerth, at Nagaya in the Japanese quarter or on the Kö, then the illuminated MedienHafen basins and the Rhine Tower. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '360',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Düsseldorf et le centre-ville ?',
          en: 'How much does a transfer between Düsseldorf Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Düsseldorf International (DUS) et le centre de Düsseldorf est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard sont inclus.',
          en: 'A private transfer between Düsseldorf International (DUS) and central Düsseldorf is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition pendant les salons de la Messe Düsseldorf ?',
          en: 'Do you offer hourly hire during Messe Düsseldorf trade fairs?',
        },
        a: {
          fr: 'Oui. Pendant Medica, drupa, K ou boot, la mise à disposition à l’heure ou à la journée est la formule la plus demandée : votre chauffeur relie halls d’exposition, hôtels du centre et dîners d’affaires, attend entre chaque rendez-vous et absorbe les changements d’agenda. Réservez tôt, ces semaines saturent la ville.',
          en: 'Yes. During Medica, drupa, K or boot, hourly or full-day hire is our most requested option: your chauffeur links exhibition halls, downtown hotels and business dinners, waits between appointments and absorbs schedule changes. Book early — those weeks fill the city.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une journée shopping sur la Königsallee ?',
          en: 'Can you arrange a shopping day on the Königsallee?',
        },
        a: {
          fr: 'Oui. Votre chauffeur vous dépose devant chaque maison de la Kö et du Kö-Bogen, garde vos achats en sécurité dans le véhicule entre deux adresses et vous attend le temps nécessaire. La formule s’étend volontiers aux galeries d’art de la Grabbeplatz ou à un déjeuner dans l’Altstadt.',
          en: 'Yes. Your chauffeur drops you outside each house on the Kö and the Kö-Bogen, keeps your purchases safely in the vehicle between stops and waits as long as needed. The day extends easily to the Grabbeplatz art galleries or lunch in the Altstadt.',
        },
      },
    ],
    nearby: ['cologne', 'frankfurt'],
  },
  {
    slug: 'stuttgart',
    name: { fr: 'Stuttgart', en: 'Stuttgart' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Stuttgart (STR)',
    airportTransfer: {
      fr: 'L’aéroport de Stuttgart (STR) se trouve à 13 km au sud du centre : comptez 20 à 30 minutes de trajet jusqu’à la Schlossplatz ou au quartier de la gare selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Stuttgart Airport (STR) lies 13 km south of the city centre: allow 20 to 30 minutes to reach the Schlossplatz or the station district depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Berceau de l’automobile et capitale du Bade-Wurtemberg, Stuttgart déploie ses vignes jusqu’au cœur de la ville, entre la Schlossplatz, la Staatsgalerie et les collines du Killesberg. Votre **chauffeur privé à Stuttgart** dessert les sièges de Mercedes-Benz à Untertürkheim et de Porsche à Zuffenhausen, la Messe Stuttgart attenante à l’aéroport, les cliniques et cabinets du centre comme l’opéra le plus titré d’Allemagne. Berlines et vans premium, prix fixes confirmés à l’avance, discrétion adaptée aux visites industrielles.',
        'Le Bade-Wurtemberg se déplie en étoile autour de la ville. Le **château baroque de Ludwigsburg**, l’un des plus vastes d’Allemagne, est à 15 km ; le mont Hohenzollern et sa forteresse de conte à 70 km ; Baden-Baden, ses thermes et son casino à une heure par l’A8 ; Heidelberg à 120 km. En mise à disposition à la journée, votre chauffeur relie musées automobiles, vignobles du Neckar et escapades en Forêt-Noire à votre rythme.',
      ],
      en: [
        'Cradle of the automobile and capital of Baden-Württemberg, Stuttgart lets its vineyards run right into the city, between the Schlossplatz, the Staatsgalerie and the Killesberg hills. Your **private chauffeur in Stuttgart** serves the Mercedes-Benz headquarters in Untertürkheim and Porsche in Zuffenhausen, the Messe Stuttgart beside the airport, the city’s clinics and law firms and Germany’s most decorated opera house alike. Premium sedans and vans, fixed prices confirmed in advance, with the discretion industrial visits require.',
        'Baden-Württemberg fans out in every direction from the city. The **baroque palace of Ludwigsburg**, one of Germany’s largest, is 15 km away; Hohenzollern Castle on its storybook summit 70 km; Baden-Baden, its baths and casino an hour along the A8; Heidelberg 120 km. With a full-day chauffeur hire, you link the car museums, the Neckar vineyards and Black Forest escapes entirely at your own pace.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Musées Mercedes-Benz et Porsche', en: 'Mercedes-Benz and Porsche museums' },
        teaser: {
          fr: 'La double hélice du musée Mercedes-Benz à Untertürkheim — 160 véhicules sur neuf niveaux — puis le musée Porsche de Zuffenhausen et ses 911 de compétition. L’histoire de l’automobile racontée par ses inventeurs.',
          en: 'The double helix of the Mercedes-Benz Museum in Untertürkheim — 160 vehicles across nine levels — then the Porsche Museum in Zuffenhausen and its competition 911s. The history of the car, told by its inventors.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '540',
      },
      {
        title: { fr: 'Château de Ludwigsburg', en: 'Ludwigsburg Palace' },
        teaser: {
          fr: 'À 15 km au nord, le « Versailles souabe » : 452 pièces, les jardins du Blühendes Barock, le théâtre de cour au mécanisme d’origine et le pavillon de Favorite. À l’automne, la plus grande exposition de citrouilles au monde.',
          en: '15 km north, the “Swabian Versailles”: 452 rooms, the Blühendes Barock gardens, the court theatre with its original stage machinery and the Favorite pavilion. In autumn, the world’s largest pumpkin exhibition.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Forteresse de Hohenzollern', en: 'Hohenzollern Castle' },
        teaser: {
          fr: 'À 70 km au sud, le berceau de la dynastie prussienne couronne son cône boisé à 855 mètres : remparts néogothiques, couronne royale de Prusse au trésor, panorama sur le Jura souabe. Halte à Tübingen la médiévale au retour.',
          en: '70 km south, the cradle of the Prussian dynasty crowns its wooded cone at 855 metres: neo-Gothic ramparts, the Prussian royal crown in the treasury, views across the Swabian Jura. A stop in medieval Tübingen on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '660',
      },
      {
        title: { fr: 'Baden-Baden et la Forêt-Noire', en: 'Baden-Baden and the Black Forest' },
        teaser: {
          fr: 'À 100 km à l’ouest, la ville d’eaux Belle Époque : thermes de Friedrichsbad et de Caracalla, casino du Kurhaus, Lichtentaler Allee, puis la route panoramique de la Schwarzwaldhochstrasse et le lac de Mummelsee.',
          en: '100 km west, the Belle Époque spa town: the Friedrichsbad and Caracalla baths, the Kurhaus casino, Lichtentaler Allee, then the panoramic Schwarzwaldhochstrasse and Lake Mummelsee.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
      {
        title: { fr: 'Soirée stuttgartoise', en: 'Stuttgart evening' },
        teaser: {
          fr: 'Dîner à la Speisemeisterei du château de Hohenheim ou à la Wielandshöhe d’au-dessus des vignes, opéra ou ballet au Staatstheater, puis la Schlossplatz illuminée. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Dinner at Speisemeisterei in Hohenheim Palace or at Wielandshöhe above the vines, opera or ballet at the Staatstheater, then the illuminated Schlossplatz. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '370',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Stuttgart et le centre-ville ?',
          en: 'How much does a transfer between Stuttgart Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Stuttgart (STR) et le centre de Stuttgart est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Stuttgart (STR) and central Stuttgart is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les déplacements professionnels vers les sites de Mercedes-Benz, Porsche ou Bosch ?',
          en: 'Do you handle business travel to the Mercedes-Benz, Porsche or Bosch sites?',
        },
        a: {
          fr: 'Oui, c’est notre spécialité à Stuttgart. La mise à disposition à l’heure ou à la journée relie Untertürkheim, Zuffenhausen, Sindelfingen, Weilimdorf ou Renningen, avec attente entre chaque rendez-vous et accès aux zones industrielles maîtrisé par votre chauffeur. Confidentialité garantie.',
          en: 'Yes, it is our speciality in Stuttgart. Hourly or full-day hire links Untertürkheim, Zuffenhausen, Sindelfingen, Weilimdorf and Renningen, with waiting time between appointments and a chauffeur who knows the industrial-site access procedures. Confidentiality guaranteed.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une excursion en Forêt-Noire ou au château de Hohenzollern depuis Stuttgart ?',
          en: 'Can you arrange a Black Forest or Hohenzollern Castle excursion from Stuttgart?',
        },
        a: {
          fr: 'Oui. Hohenzollern se combine idéalement avec Tübingen en une journée ; la Forêt-Noire se découvre par Baden-Baden et la Schwarzwaldhochstrasse. Itinéraire, billets d’entrée et table de déjeuner sont préparés à l’avance ; le véhicule reste à disposition sur place toute la journée.',
          en: 'Yes. Hohenzollern pairs ideally with Tübingen as a full day; the Black Forest is best approached via Baden-Baden and the Schwarzwaldhochstrasse. Route, entry tickets and a lunch table are arranged in advance; the vehicle stays on standby all day.',
        },
      },
    ],
    nearby: ['baden-baden', 'heidelberg', 'frankfurt', 'munich'],
  },
  {
    slug: 'dresden',
    name: { fr: 'Dresde', en: 'Dresden' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Dresden International (DRS)',
    airportTransfer: {
      fr: 'L’aéroport de Dresden International (DRS) est à 9 km au nord du centre : comptez 20 minutes de trajet jusqu’à la Frauenkirche ou aux quais de l’Elbe. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Dresden International Airport (DRS) is 9 km north of the centre: allow 20 minutes to reach the Frauenkirche or the Elbe embankment. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Surnommée la Florence de l’Elbe, Dresde a retrouvé sa silhouette baroque : la coupole reconstruite de la Frauenkirche, le Zwinger et sa galerie des Maîtres anciens, la Voûte verte des trésors de Saxe, l’opéra Semper. Votre **chauffeur privé à Dresde** vous conduit des palais du Neumarkt aux villas de Loschwitz, dessert les cliniques universitaires et les sites de la Silicon Saxony, et assure gares, aéroport et soirées d’opéra. Berlines et vans premium, prix fixes annoncés à l’avance.',
        'La vallée de l’Elbe se prête admirablement à l’excursion. Les **bastions rocheux de la Suisse saxonne** et le pont de la Bastei sont à 40 minutes en amont, la manufacture de porcelaine de Meissen à 25 km en aval, le château de chasse de Moritzburg à un quart d’heure, les vignobles de Radebeul aux portes de la ville. Votre chauffeur compose la journée, réserve visites et tables, et vous ramène par les rives du fleuve.',
      ],
      en: [
        'Known as Florence on the Elbe, Dresden has regained its baroque skyline: the rebuilt dome of the Frauenkirche, the Zwinger and its Old Masters gallery, the Green Vault and its Saxon treasures, the Semper Opera. Your **private chauffeur in Dresden** takes you from the palaces of the Neumarkt to the villas of Loschwitz, serves the university clinics and the Silicon Saxony sites, and covers stations, airport and opera evenings alike. Premium sedans and vans, fixed prices confirmed in advance.',
        'The Elbe valley is made for excursions. The **rock bastions of Saxon Switzerland** and the Bastei bridge are 40 minutes upstream, the Meissen porcelain manufactory 25 km downstream, the Moritzburg hunting palace fifteen minutes away, the Radebeul vineyards on the city’s doorstep. Your chauffeur shapes the day, books visits and tables, and brings you back along the riverbanks.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Suisse saxonne et pont de la Bastei', en: 'Saxon Switzerland and the Bastei bridge' },
        teaser: {
          fr: 'À 40 km en amont de Dresde, les tours de grès du parc national au-dessus de l’Elbe : le pont de la Bastei à 194 mètres au-dessus du fleuve, la forteresse de Königstein, halte dans la station thermale de Rathen ou à Bad Schandau.',
          en: '40 km upstream from Dresden, the national park’s sandstone towers above the Elbe: the Bastei bridge 194 metres over the river, Königstein fortress, a stop in the spa villages of Rathen or Bad Schandau.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Meissen, berceau de la porcelaine', en: 'Meissen, cradle of porcelain' },
        teaser: {
          fr: 'À 25 km en aval, la première manufacture de porcelaine d’Europe, fondée en 1710 : ateliers de démonstration, musée aux 3 000 pièces, puis la cathédrale gothique et le château d’Albrechtsburg au-dessus de l’Elbe.',
          en: '25 km downstream, Europe’s first porcelain manufactory, founded in 1710: demonstration workshops, a museum of 3,000 pieces, then the Gothic cathedral and Albrechtsburg castle above the Elbe.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '410',
      },
      {
        title: { fr: 'Moritzburg et les vignes de Radebeul', en: 'Moritzburg and the Radebeul vineyards' },
        teaser: {
          fr: 'Le château baroque de Moritzburg posé sur son île, ses trophées de chasse et sa salle des plumes, puis les coteaux de Radebeul : dégustation au domaine d’État de Wackerbarth, l’un des plus anciens vignobles mousseux d’Allemagne.',
          en: 'The baroque Moritzburg Palace set on its island, with its hunting trophies and Feather Room, then the Radebeul slopes: a tasting at the Wackerbarth state estate, one of Germany’s oldest sparkling-wine houses.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '430',
      },
      {
        title: { fr: 'Görlitz, la belle des confins', en: 'Görlitz, beauty on the border' },
        teaser: {
          fr: 'À 100 km à l’est, la ville historique la mieux préservée d’Allemagne : 4 000 monuments du gothique au Jugendstil, décor de tournage de Wes Anderson, pont piéton vers Zgorzelec la polonaise. Déjeuner sur l’Untermarkt.',
          en: '100 km east, Germany’s best-preserved historic town: 4,000 listed buildings from Gothic to Jugendstil, a Wes Anderson filming location, a footbridge across to Polish Zgorzelec. Lunch on the Untermarkt.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Soirée dresdoise', en: 'Dresden evening' },
        teaser: {
          fr: 'Opéra au Semperoper ou dîner au Caroussel du Bülow Palais, au Genuss-Atelier de la Neustadt, puis la terrasse de Brühl et la Frauenkirche illuminées. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'An evening at the Semperoper or dinner at Caroussel in the Bülow Palais or Genuss-Atelier in the Neustadt, then the illuminated Brühl Terrace and Frauenkirche. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Dresde et le centre-ville ?',
          en: 'How much does a transfer between Dresden Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Dresden International (DRS) et le centre de Dresde est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard sont inclus.',
          en: 'A private transfer between Dresden International (DRS) and central Dresden is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une excursion en Suisse saxonne depuis Dresde ?',
          en: 'Can you arrange a Saxon Switzerland excursion from Dresden?',
        },
        a: {
          fr: 'Oui, c’est notre excursion la plus demandée au départ de Dresde. Comptez une journée avec la Bastei le matin — avant l’affluence — puis la forteresse de Königstein ou une promenade à Bad Schandau. Le véhicule reste à disposition, votre chauffeur vous dépose au plus près des sentiers panoramiques.',
          en: 'Yes, it is our most requested excursion from Dresden. Allow a full day, with the Bastei in the morning — ahead of the crowds — then Königstein fortress or a stroll in Bad Schandau. The vehicle stays on standby; your chauffeur drops you as close as possible to the panoramic trails.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous des liaisons entre Dresde, Berlin, Leipzig ou Prague ?',
          en: 'Do you cover routes between Dresden, Berlin, Leipzig or Prague?',
        },
        a: {
          fr: 'Oui. Berlin est à 190 km, Leipzig à 115 km et Prague à 150 km par l’A17 — les trois se font en trajet direct porte-à-porte, devisé à l’avance à prix fixe. Pour Prague, le véhicule est autorisé à circuler en République tchèque, sans aucune formalité pour vous.',
          en: 'Yes. Berlin is 190 km away, Leipzig 115 km and Prague 150 km via the A17 — all three run as direct door-to-door journeys, quoted in advance at a fixed price. For Prague, the vehicle is authorised to operate in the Czech Republic, with no formalities on your side.',
        },
      },
    ],
    nearby: ['leipzig', 'berlin'],
  },
  {
    slug: 'leipzig',
    name: { fr: 'Leipzig', en: 'Leipzig' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Leipzig-Halle (LEJ)',
    airportTransfer: {
      fr: 'L’aéroport de Leipzig-Halle (LEJ) se trouve à 18 km au nord-ouest du centre : comptez 20 à 25 minutes de trajet jusqu’au Markt ou à la gare centrale. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Leipzig-Halle Airport (LEJ) lies 18 km north-west of the city centre: allow 20 to 25 minutes to reach the Markt or the central station. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville de Bach, de Mendelssohn et des foires depuis huit siècles, Leipzig est aujourd’hui la métropole la plus dynamique de l’Est allemand : l’église Saint-Thomas et son chœur de garçons, le Gewandhaus, les passages marchands du centre, les galeries de la Spinnerei installées dans une ancienne filature. Votre **chauffeur privé à Leipzig** dessert la foire de Leipzig, les usines BMW et Porsche du nord de la ville, les cliniques universitaires comme les salles de concert. Berlines et vans premium, prix fixes confirmés à l’avance.',
        'Autour de la ville, la Saxe se découvre en étoile. Le **monument de la Bataille des Nations**, colosse de 91 mètres, garde la mémoire de 1813 au sud du centre ; les lacs du Neuseenland, anciennes mines réinventées, sont à un quart d’heure ; le château de Colditz à 45 km ; Dresde à 115 km et Weimar, ville de Goethe, à 120 km par l’A9. Votre chauffeur enchaîne les étapes, attente comprise, et vous ramène en soirée.',
      ],
      en: [
        'City of Bach, Mendelssohn and eight centuries of trade fairs, Leipzig is now eastern Germany’s most dynamic metropolis: St Thomas Church and its boys’ choir, the Gewandhaus, the merchant arcades of the centre, the Spinnerei galleries set in a former cotton mill. Your **private chauffeur in Leipzig** serves the Leipzig fairgrounds, the BMW and Porsche plants north of the city, the university clinics and the concert halls alike. Premium sedans and vans, fixed prices confirmed in advance.',
        'Around the city, Saxony fans out in every direction. The **Monument to the Battle of the Nations**, a 91-metre colossus, keeps the memory of 1813 just south of the centre; the Neuseenland lakes, former open-cast mines reinvented, are fifteen minutes away; Colditz Castle 45 km; Dresden 115 km and Goethe’s Weimar 120 km via the A9. Your chauffeur links the stops, waiting time included, and returns you in the evening.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Leipzig, sur les pas de Bach', en: 'Leipzig in Bach’s footsteps' },
        teaser: {
          fr: 'L’église Saint-Thomas où le cantor officia 27 ans, le musée Bach et ses manuscrits, le Gewandhaus et l’ancienne Bourse du Naschmarkt, puis un café chez Zum Arabischen Coffe Baum, l’un des plus anciens cafés d’Europe.',
          en: 'St Thomas Church, where the cantor served for 27 years, the Bach Museum and its manuscripts, the Gewandhaus and the old exchange on the Naschmarkt, then coffee at Zum Arabischen Coffe Baum, one of Europe’s oldest coffee houses.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Château de Colditz', en: 'Colditz Castle' },
        teaser: {
          fr: 'À 45 km au sud-est, la forteresse rendue célèbre par les évasions d’officiers alliés durant la Seconde Guerre mondiale : musée de l’évasion, planeur reconstitué du grenier, panorama sur la vallée de la Mulde. Halte à Grimma au retour.',
          en: '45 km south-east, the fortress made famous by Allied officers’ escapes during the Second World War: the escape museum, the reconstructed attic glider, views over the Mulde valley. A stop in Grimma on the way back.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Weimar, ville de Goethe et du Bauhaus', en: 'Weimar, city of Goethe and the Bauhaus' },
        teaser: {
          fr: 'À 120 km au sud-ouest, la capitale du classicisme allemand : les maisons de Goethe et de Schiller, la bibliothèque rococo de la duchesse Anna Amalia, le musée du Bauhaus fondé ici en 1919. Déjeuner sur la place du Marché.',
          en: '120 km south-west, the capital of German classicism: the homes of Goethe and Schiller, Duchess Anna Amalia’s rococo library, the museum of the Bauhaus founded here in 1919. Lunch on the market square.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Neuseenland et la Spinnerei', en: 'Neuseenland and the Spinnerei' },
        teaser: {
          fr: 'Les lacs de Cospuden et de Markkleeberg, anciennes mines de lignite devenues plages et marinas, puis les galeries de la Baumwollspinnerei, friche textile où Neo Rauch et la Nouvelle École de Leipzig ont leurs ateliers.',
          en: 'Lakes Cospuden and Markkleeberg, former lignite mines turned beaches and marinas, then the galleries of the Baumwollspinnerei, the cotton-mill complex where Neo Rauch and the New Leipzig School keep their studios.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Soirée leipzigoise', en: 'Leipzig evening' },
        teaser: {
          fr: 'Concert au Gewandhaus ou à l’opéra, dîner au Stadtpfeiffer attenant ou dans la cave historique d’Auerbachs Keller, chantée par Goethe dans Faust, puis les passages illuminés du centre. Véhicule à disposition toute la soirée.',
          en: 'A concert at the Gewandhaus or the opera, dinner at the adjoining Stadtpfeiffer or in the historic Auerbachs Keller, immortalised by Goethe in Faust, then the illuminated arcades of the centre. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Leipzig-Halle et le centre-ville ?',
          en: 'How much does a transfer between Leipzig-Halle Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Leipzig-Halle (LEJ) et le centre de Leipzig est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Leipzig-Halle (LEJ) and central Leipzig is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les déplacements vers les usines BMW et Porsche de Leipzig ?',
          en: 'Do you handle travel to the BMW and Porsche plants in Leipzig?',
        },
        a: {
          fr: 'Oui. Les deux sites se trouvent au nord de la ville, à une vingtaine de minutes du centre et à dix minutes de l’aéroport. Nous assurons transferts ponctuels et mises à disposition pour les visites d’usine, les remises de véhicule et les délégations, avec attente sur place et chauffeur anglophone sur demande.',
          en: 'Yes. Both plants lie north of the city, some twenty minutes from the centre and ten from the airport. We provide one-off transfers and hourly hire for factory tours, vehicle handovers and delegations, with on-site waiting and an English-speaking chauffeur on request.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une journée à Weimar ou à Dresde depuis Leipzig ?',
          en: 'Can you arrange a day trip to Weimar or Dresden from Leipzig?',
        },
        a: {
          fr: 'Oui. Weimar est à 120 km par l’A9, Dresde à 115 km par l’A14 : chacune se visite confortablement en une journée, avec entrées réservées à l’avance et déjeuner suggéré par votre chauffeur. Le véhicule reste à disposition sur place, retour à Leipzig en soirée.',
          en: 'Yes. Weimar is 120 km away via the A9, Dresden 115 km via the A14: each works comfortably as a day trip, with tickets booked ahead and a lunch spot suggested by your chauffeur. The vehicle remains on standby throughout, returning to Leipzig in the evening.',
        },
      },
    ],
    nearby: ['dresden', 'berlin'],
  },
  {
    slug: 'nuremberg',
    name: { fr: 'Nuremberg', en: 'Nuremberg' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Nuremberg (NUE)',
    airportTransfer: {
      fr: 'L’aéroport de Nuremberg (NUE) se situe à 7 km au nord du centre : comptez 15 à 20 minutes pour rejoindre la Hauptmarkt ou le quartier du château. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Nuremberg Airport (NUE) lies 7 km north of the centre: allow 15 to 20 minutes to reach the Hauptmarkt or the castle quarter. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Deuxième ville de Bavière, Nuremberg déploie ses remparts médiévaux, son Kaiserburg impérial et les maisons à colombages du quartier des tanneurs au bord de la Pegnitz. Votre **chauffeur privé à Nuremberg** dessert le parc des expositions — Spielwarenmesse, Embedded World —, les sièges de Siemens et Adidas dans la région, comme les tables du centre historique. Berlines Mercedes et vans de grande capacité, prix fixes confirmés à la réservation, chauffeurs anglophones sur demande.',
        'Nuremberg est aussi le point de départ nord de la **Route Romantique** : Rothenburg ob der Tauber se rejoint en une heure, Bamberg et sa vieille ville classée UNESCO en moins de 50 minutes, Ratisbonne et le Danube en une heure également. En décembre, le Christkindlesmarkt — l’un des plus anciens marchés de Noël d’Allemagne — impose une logistique que votre chauffeur maîtrise : dépose au plus près des zones piétonnes, attente et retour de nuit.',
      ],
      en: [
        'Bavaria’s second city, Nuremberg unfolds its medieval ramparts, the imperial Kaiserburg and the half-timbered houses of the tanners’ quarter along the Pegnitz. Your **private chauffeur in Nuremberg** serves the exhibition grounds — Spielwarenmesse, Embedded World —, the regional headquarters of Siemens and Adidas, as well as the old town’s finest tables. Mercedes sedans and full-size vans, fixed prices confirmed at booking, English-speaking chauffeurs on request.',
        'Nuremberg is also the northern gateway to the **Romantic Road**: Rothenburg ob der Tauber is an hour away, Bamberg and its UNESCO-listed old town under 50 minutes, Regensburg and the Danube an hour as well. In December, the Christkindlesmarkt — one of Germany’s oldest Christmas markets — demands logistics your chauffeur has mastered: drop-off as close as possible to the pedestrian zones, standby and late-night return.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Rothenburg et la Route Romantique', en: 'Rothenburg and the Romantic Road' },
        teaser: {
          fr: 'À 80 km à l’ouest, la ville fortifiée la mieux conservée d’Allemagne : le Plönlein, le chemin de ronde, la place du Marché. Retour par Dinkelsbühl ou les vignobles de Franconie, verre de silvaner à la clé.',
          en: '80 km west, Germany’s best-preserved walled town: the Plönlein, the rampart walk, the market square. Return via Dinkelsbühl or the Franconian vineyards, with a glass of Silvaner to finish.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Bamberg, vieille ville UNESCO', en: 'Bamberg, UNESCO old town' },
        teaser: {
          fr: 'À 60 km au nord, la « Rome de Franconie » : cathédrale impériale, ancien hôtel de ville posé sur la Regnitz, quartier des pêcheurs de Klein-Venedig. Dégustation de rauchbier dans une brasserie historique.',
          en: '60 km north, the “Rome of Franconia”: the imperial cathedral, the old town hall perched over the Regnitz, the Klein-Venedig fishermen’s quarter. Rauchbier tasting in a historic brewery.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Ratisbonne et le Danube', en: 'Regensburg and the Danube' },
        teaser: {
          fr: 'À une heure au sud-est, la vieille ville médiévale classée UNESCO, le pont de pierre du XIIe siècle et la cathédrale Saint-Pierre. En option, le Walhalla de Louis Ier dominant le Danube à Donaustauf.',
          en: 'An hour south-east, the UNESCO-listed medieval old town, the 12th-century Stone Bridge and St Peter’s Cathedral. Optionally, Ludwig I’s Walhalla overlooking the Danube at Donaustauf.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Nuremberg historique et mémorielle', en: 'Historic and remembrance Nuremberg' },
        teaser: {
          fr: 'Kaiserburg, maison d’Albrecht Dürer et Germanisches Nationalmuseum le matin ; l’après-midi, le centre de documentation du Reichsparteitagsgelände et la salle 600 du palais de justice, lieu des procès de 1945.',
          en: 'The Kaiserburg, Albrecht Dürer’s house and the Germanisches Nationalmuseum in the morning; in the afternoon, the Rally Grounds Documentation Centre and Courtroom 600, where the 1945 trials were held.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '540',
      },
      {
        title: { fr: 'Soirée franconienne', en: 'Franconian evening' },
        teaser: {
          fr: 'Dîner dans le quartier du château — Essigbrätlein, deux étoiles, ou une auberge à bratwurst historique —, puis tour des remparts et des ponts illuminés de la Pegnitz. Véhicule à disposition toute la soirée.',
          en: 'Dinner in the castle quarter — two-starred Essigbrätlein or a historic bratwurst tavern — followed by a tour of the illuminated ramparts and Pegnitz bridges. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nuremberg et le centre-ville ?',
          en: 'How much does a transfer between Nuremberg Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport de Nuremberg (NUE) et le centre est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Nuremberg Airport (NUE) and the city centre is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers le parc des expositions pendant les salons ?',
          en: 'Do you provide transfers to the exhibition grounds during trade fairs?',
        },
        a: {
          fr: 'Oui. Pendant la Spielwarenmesse, Embedded World ou BIOFACH, nous assurons les liaisons hôtel–NürnbergMesse à horaires garantis, ainsi que la mise à disposition à la journée entre les halls, votre hôtel et vos dîners d’affaires. Réservez tôt : la demande est très forte en période de salon.',
          en: 'Yes. During Spielwarenmesse, Embedded World or BIOFACH we run hotel–NürnbergMesse connections at guaranteed times, plus full-day hire between the halls, your hotel and your business dinners. Book early: demand is very high during fair periods.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Munich ou Prague en voiture avec chauffeur depuis Nuremberg ?',
          en: 'Can I reach Munich or Prague by chauffeured car from Nuremberg?',
        },
        a: {
          fr: 'Oui. Munich se rejoint en 1 h 45 environ par l’A9, Prague en 3 heures par l’A6. Ces trajets longue distance sont devisés à l’avance, à prix fixe, avec arrêts à la demande et véhicule autorisé à circuler dans les pays traversés.',
          en: 'Yes. Munich is about 1 h 45 away via the A9, Prague 3 hours via the A6. These long-distance journeys are quoted in advance at a fixed price, with stops on request and a vehicle authorised to operate in each country crossed.',
        },
      },
    ],
    nearby: ['rothenburg-ob-der-tauber', 'munich', 'stuttgart', 'frankfurt'],
  },
  {
    slug: 'heidelberg',
    name: { fr: 'Heidelberg', en: 'Heidelberg' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'Heidelberg n’a pas d’aéroport commercial : l’aéroport de Francfort (FRA), à 80 km au nord, se rejoint en 50 minutes à une heure par l’A5. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif, suit votre vol en temps réel et vous dépose directement à votre hôtel de la vieille ville.',
      en: 'Heidelberg has no commercial airport: Frankfurt Airport (FRA), 80 km north, is 50 minutes to an hour away via the A5. Your chauffeur greets you in the arrivals hall with a name board, tracks your flight in real time and drops you directly at your old-town hotel.',
    },
    intro: {
      fr: [
        'Ville universitaire la plus ancienne d’Allemagne, Heidelberg aligne son château de grès rose au-dessus du Neckar, sa Hauptstrasse baroque et le Vieux Pont cher aux romantiques. Votre **chauffeur privé à Heidelberg** relie l’aéroport de Francfort, les campus de SAP à Walldorf et les cliniques universitaires, comme les hôtels de la vieille ville aux ruelles étroites. Berlines et vans premium, prix fixes annoncés à l’avance, ponctualité garantie même les jours de congrès.',
        'Depuis Heidelberg, la vallée du Neckar et le **château de Schwetzingen** avec ses jardins à la française sont à moins de trente minutes ; Spire et sa cathédrale impériale UNESCO à quarante ; la Route allemande du vin déroule ses villages viticoles du Palatinat à une heure. En mise à disposition à la journée, votre chauffeur compose l’itinéraire — châteaux, caves, tables réservées — sans que vous touchiez un volant.',
      ],
      en: [
        'Germany’s oldest university town, Heidelberg lines up its rose-sandstone castle above the Neckar, its baroque Hauptstrasse and the Old Bridge beloved of the Romantics. Your **private chauffeur in Heidelberg** connects Frankfurt Airport, the SAP campus in Walldorf and the university clinics, as well as the old-town hotels tucked into narrow lanes. Premium sedans and vans, fixed prices confirmed in advance, punctuality guaranteed even on convention days.',
        'From Heidelberg, the Neckar valley and **Schwetzingen Palace** with its formal French gardens are under thirty minutes away; Speyer and its UNESCO imperial cathedral forty; the German Wine Route unrolls its Palatinate wine villages within an hour. With a full-day chauffeur hire, your driver shapes the itinerary — castles, cellars, tables booked ahead — while you never touch a steering wheel.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Château de Heidelberg et Philosophenweg', en: 'Heidelberg Castle and the Philosophers’ Walk' },
        teaser: {
          fr: 'Montée en voiture jusqu’au château, le Grand Tonneau et les terrasses sur le Neckar, puis dépose au pied du Philosophenweg pour la vue classique sur la vieille ville. Retour par le Vieux Pont et la Kornmarkt.',
          en: 'Drive up to the castle, the Great Tun and the terraces over the Neckar, then a drop-off at the foot of the Philosophers’ Walk for the classic old-town view. Return via the Old Bridge and the Kornmarkt.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Route allemande du vin', en: 'German Wine Route' },
        teaser: {
          fr: 'Deidesheim, Wachenheim et Neustadt an der Weinstrasse : les villages du Palatinat et leurs domaines de riesling à une heure de Heidelberg. Dégustations pendant que votre chauffeur conduit, déjeuner chez un vigneron.',
          en: 'Deidesheim, Wachenheim and Neustadt an der Weinstrasse: the Palatinate villages and their Riesling estates an hour from Heidelberg. Tastings while your chauffeur drives, lunch at a winegrower’s table.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Spire et Schwetzingen', en: 'Speyer and Schwetzingen' },
        teaser: {
          fr: 'La cathédrale impériale de Spire, plus grande église romane d’Europe et nécropole des empereurs saliens, puis les jardins du château de Schwetzingen et leur mosquée du XVIIIe siècle. Deux sites majeurs en une demi-journée.',
          en: 'Speyer’s imperial cathedral, Europe’s largest Romanesque church and burial place of the Salian emperors, then the gardens of Schwetzingen Palace with their 18th-century mosque. Two major sites in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Vallée du Neckar et châteaux', en: 'Neckar valley and its castles' },
        teaser: {
          fr: 'En amont de Heidelberg, la rivière serpente sous les forteresses de Hirschhorn, Zwingenberg et les quatre châteaux de Neckarsteinach. Déjeuner à Bad Wimpfen, ancienne résidence impériale des Hohenstaufen.',
          en: 'Upstream from Heidelberg, the river winds beneath the fortresses of Hirschhorn, Zwingenberg and the four castles of Neckarsteinach. Lunch in Bad Wimpfen, former imperial residence of the Hohenstaufen.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Soirée dans la vieille ville', en: 'Old-town evening' },
        teaser: {
          fr: 'Dîner au Scharff’s Schlossweinstube dans l’enceinte du château ou dans une auberge historique de la Hauptstrasse, puis le château illuminé vu depuis la rive nord du Neckar. Retour à votre hôtel sans contrainte.',
          en: 'Dinner at Scharff’s Schlossweinstube inside the castle walls or in a historic tavern on the Hauptstrasse, then the illuminated castle seen from the north bank of the Neckar. Effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '330',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Francfort et Heidelberg ?',
          en: 'How much does a transfer between Frankfurt Airport and Heidelberg cost?',
        },
        a: {
          fr: 'Le transfert privé entre Francfort (FRA) et Heidelberg — environ 80 km, 50 minutes à une heure — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Frankfurt (FRA) and Heidelberg — about 80 km, 50 minutes to an hour — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Le véhicule peut-il accéder à la vieille ville de Heidelberg ?',
          en: 'Can the vehicle access Heidelberg’s old town?',
        },
        a: {
          fr: 'La Hauptstrasse est piétonne, mais votre chauffeur connaît les points de dépose autorisés au plus près de chaque hôtel — Kornmarkt, Karlsplatz, Marstallstrasse — et gère la prise en charge des bagages jusqu’à la réception. La montée au château s’effectue en voiture jusqu’au parking supérieur.',
          en: 'The Hauptstrasse is pedestrianised, but your chauffeur knows the authorised drop-off points closest to each hotel — Kornmarkt, Karlsplatz, Marstallstrasse — and handles luggage to the reception desk. The castle is reached by car up to the upper parking area.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition pour les déplacements professionnels vers SAP à Walldorf ?',
          en: 'Do you offer hourly hire for business travel to SAP in Walldorf?',
        },
        a: {
          fr: 'Oui. Walldorf est à 15 km au sud de Heidelberg ; la mise à disposition à l’heure ou à la journée permet d’enchaîner campus SAP, rendez-vous à Mannheim et retour à l’hôtel, avec un chauffeur qui attend entre chaque étape et s’adapte à votre agenda.',
          en: 'Yes. Walldorf is 15 km south of Heidelberg; hourly or full-day hire lets you link the SAP campus, meetings in Mannheim and the return to your hotel, with a chauffeur who waits between each stop and adapts to your schedule.',
        },
      },
    ],
    nearby: ['frankfurt', 'baden-baden', 'stuttgart', 'cologne'],
  },
  {
    slug: 'baden-baden',
    name: { fr: 'Baden-Baden', en: 'Baden-Baden' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Karlsruhe/Baden-Baden (FKB)',
    airportTransfer: {
      fr: 'L’aéroport de Karlsruhe/Baden-Baden (FKB) se trouve à 15 km à l’ouest de la ville : comptez 20 minutes pour rejoindre le Kurhaus ou le Brenners Park-Hotel. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel ; l’aéroport de Francfort (FRA) se rejoint quant à lui en 1 h 30.',
      en: 'Karlsruhe/Baden-Baden Airport (FKB) lies 15 km west of the town: allow 20 minutes to reach the Kurhaus or the Brenners Park-Hotel. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time; Frankfurt Airport (FRA) is 1 h 30 away.',
    },
    intro: {
      fr: [
        'Ville d’eaux favorite de l’Europe du XIXe siècle, Baden-Baden cultive toujours son art de vivre : thermes de Caracalla et bains Friedrichsbad, casino Belle Époque du Kurhaus, Lichtentaler Allee bordée d’arbres centenaires, Festspielhaus — la deuxième plus grande salle d’opéra d’Europe. Votre **chauffeur privé à Baden-Baden** orchestre transferts aéroport, soirées au casino et rendez-vous bien-être, en berline Mercedes ou van, à prix fixe confirmé dès la réservation.',
        'Adossée à la **Forêt-Noire**, la ville ouvre directement sur la Schwarzwaldhochstrasse : la route panoramique grimpe vers le Mummelsee et les crêtes du Hornisgrinde à trente minutes du centre. Strasbourg et sa cathédrale sont à 60 km, les vignobles du Rebland et le château de Hohenbaden à un quart d’heure. Votre chauffeur compose des itinéraires à la journée entre thermalisme, gastronomie étoilée et panoramas.',
      ],
      en: [
        'Nineteenth-century Europe’s favourite spa town, Baden-Baden still cultivates its art de vivre: the Caracalla thermal baths and the Friedrichsbad, the Belle Époque casino in the Kurhaus, the Lichtentaler Allee lined with century-old trees, and the Festspielhaus — Europe’s second-largest opera house. Your **private chauffeur in Baden-Baden** orchestrates airport transfers, casino evenings and wellness appointments, by Mercedes sedan or van, at a fixed price confirmed at booking.',
        'Set against the **Black Forest**, the town opens directly onto the Schwarzwaldhochstrasse: the panoramic road climbs to the Mummelsee lake and the Hornisgrinde ridge thirty minutes from the centre. Strasbourg and its cathedral are 60 km away, the Rebland vineyards and Hohenbaden castle a quarter of an hour. Your chauffeur builds full-day itineraries between thermal baths, starred dining and mountain views.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Schwarzwaldhochstrasse et Mummelsee', en: 'Schwarzwaldhochstrasse and the Mummelsee' },
        teaser: {
          fr: 'La route des crêtes de la Forêt-Noire, du Mummelsee au sommet du Hornisgrinde (1 164 m), cascades d’Allerheiligen et panoramas sur la plaine du Rhin. Déjeuner dans une auberge d’altitude, forêt noire maison en dessert.',
          en: 'The Black Forest ridge road, from the Mummelsee to the Hornisgrinde summit (1,164 m), the Allerheiligen waterfalls and views over the Rhine plain. Lunch in a mountain inn, homemade Black Forest gateau for dessert.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Strasbourg et la Petite France', en: 'Strasbourg and Petite France' },
        teaser: {
          fr: 'À 60 km, la capitale alsacienne : cathédrale de grès rose, ruelles à colombages de la Petite France, déjeuner en winstub. Passage de frontière sans formalité, retour à Baden-Baden en fin de journée.',
          en: '60 km away, the Alsatian capital: the rose-sandstone cathedral, the half-timbered lanes of Petite France, lunch in a winstub. Seamless border crossing, return to Baden-Baden at the end of the day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Soirée casino et Festspielhaus', en: 'Casino and Festspielhaus evening' },
        teaser: {
          fr: 'Dîner au Brenners ou chez un étoilé de la ville, puis les salons dorés du casino — que Marlene Dietrich disait le plus beau du monde — ou un concert au Festspielhaus. Dépose devant chaque porte, retour de nuit assuré.',
          en: 'Dinner at Brenners or one of the town’s starred tables, then the gilded rooms of the casino — which Marlene Dietrich called the most beautiful in the world — or a concert at the Festspielhaus. Door-to-door drop-offs, guaranteed late-night return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '360',
      },
      {
        title: { fr: 'Vignobles du Rebland et château de Hohenbaden', en: 'Rebland vineyards and Hohenbaden castle' },
        teaser: {
          fr: 'Les coteaux de riesling de Neuweier et Varnhalt au pied de la Forêt-Noire, dégustation chez un domaine familial, puis les ruines du château de Hohenbaden et leur vue plongeante sur la vallée de l’Oos.',
          en: 'The Riesling slopes of Neuweier and Varnhalt at the foot of the Black Forest, a tasting at a family estate, then the ruins of Hohenbaden castle with their sweeping view over the Oos valley.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '430',
      },
      {
        title: { fr: 'Journée bien-être Friedrichsbad et Caracalla', en: 'Friedrichsbad and Caracalla wellness day' },
        teaser: {
          fr: 'Dépose aux bains irlando-romains du Friedrichsbad — rituel en 17 étapes sous coupole de 1877 — ou aux thermes de Caracalla, attente du véhicule, puis promenade digestive sur la Lichtentaler Allee jusqu’au musée Frieder Burda.',
          en: 'Drop-off at the Friedrichsbad Irish-Roman baths — a 17-stage ritual beneath an 1877 dome — or the Caracalla spa, vehicle on standby, then a gentle stroll along the Lichtentaler Allee to the Frieder Burda museum.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '520',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Karlsruhe/Baden-Baden et le centre-ville ?',
          en: 'How much does a transfer between Karlsruhe/Baden-Baden Airport and the town centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Karlsruhe/Baden-Baden (FKB) et le centre est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard. Les transferts depuis Francfort (FRA) ou Stuttgart (STR) sont également devisés à prix fixe.',
          en: 'A private transfer between Karlsruhe/Baden-Baden (FKB) and the centre is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay. Transfers from Frankfurt (FRA) or Stuttgart (STR) are also quoted at a fixed price.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer les soirées tardives après le casino ou le Festspielhaus ?',
          en: 'Can you cover late evenings after the casino or the Festspielhaus?',
        },
        a: {
          fr: 'Oui. Le véhicule reste à disposition toute la soirée ou revient vous chercher à l’heure convenue, même après minuit. Dépose et reprise devant le Kurhaus ou le Festspielhaus, tenue de soirée préservée quelle que soit la météo.',
          en: 'Yes. The vehicle stays on standby all evening or returns at the agreed time, even after midnight. Drop-off and pick-up right outside the Kurhaus or the Festspielhaus, evening wear protected whatever the weather.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Baden-Baden avec l’Alsace dans une même journée ?',
          en: 'Can Baden-Baden and Alsace be combined in a single day?',
        },
        a: {
          fr: 'Facilement : Strasbourg est à 60 km et la route des Vins d’Alsace commence à moins d’une heure. Nous composons des journées transfrontalières — matinée thermale à Baden-Baden, déjeuner et dégustations en Alsace, retour en soirée — à prix fixe et sans aucune formalité de frontière.',
          en: 'Easily: Strasbourg is 60 km away and the Alsace Wine Route begins under an hour from town. We build cross-border days — a spa morning in Baden-Baden, lunch and tastings in Alsace, evening return — at a fixed price and with no border formalities.',
        },
      },
    ],
    nearby: ['heidelberg', 'stuttgart', 'freiburg', 'frankfurt'],
  },
  {
    slug: 'freiburg',
    name: { fr: 'Fribourg-en-Brisgau', en: 'Freiburg' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'Fribourg n’a pas d’aéroport commercial : l’EuroAirport Bâle-Mulhouse-Fribourg (BSL/MLH), à 70 km au sud, se rejoint en 45 à 55 minutes par l’A5. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif, suit votre vol en temps réel et vous conduit directement au pied de la cathédrale ou à votre hôtel de la Forêt-Noire.',
      en: 'Freiburg has no commercial airport: the EuroAirport Basel-Mulhouse-Freiburg (BSL/MLH), 70 km south, is 45 to 55 minutes away via the A5. Your chauffeur greets you in the arrivals hall with a name board, tracks your flight in real time and drives you straight to the cathedral quarter or your Black Forest hotel.',
    },
    intro: {
      fr: [
        'Capitale de la Forêt-Noire méridionale et ville la plus ensoleillée d’Allemagne, Fribourg-en-Brisgau séduit par sa cathédrale gothique à la flèche ajourée, ses Bächle — ces rigoles d’eau vive qui courent le long des ruelles — et sa vieille ville piétonne. Votre **chauffeur privé à Fribourg** assure transferts depuis l’EuroAirport de Bâle, liaisons vers les cliniques universitaires et les hôtels du massif, mises à disposition à l’heure, toujours à prix fixe confirmé à l’avance.',
        'La ville est le camp de base rêvé du massif : le téléphérique du **Schauinsland** grimpe à 1 284 mètres depuis la lisière sud, le lac de Titisee et les gorges sauvages de la Ravenna sont à trente minutes, les vignobles volcaniques du Kaiserstuhl à vingt. Côté ouest, Colmar et la route des Vins d’Alsace se rejoignent en 45 minutes — votre chauffeur passe la frontière sans la moindre formalité.',
      ],
      en: [
        'Capital of the southern Black Forest and Germany’s sunniest city, Freiburg im Breisgau charms with its Gothic minster and openwork spire, its Bächle — the little freshwater channels running along the lanes — and its pedestrian old town. Your **private chauffeur in Freiburg** handles transfers from Basel’s EuroAirport, journeys to the university clinics and the hotels of the massif, and hourly hire, always at a fixed price confirmed in advance.',
        'The city is the ideal base camp for the massif: the **Schauinsland** cable car climbs to 1,284 metres from the southern edge of town, Lake Titisee and the wild Ravenna gorge are thirty minutes away, the volcanic Kaiserstuhl vineyards twenty. Westwards, Colmar and the Alsace Wine Route are 45 minutes away — your chauffeur crosses the border without a single formality.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Titisee et la Haute Forêt-Noire', en: 'Titisee and the High Black Forest' },
        teaser: {
          fr: 'Le lac de Titisee et ses rives boisées, le viaduc ferroviaire de la Ravenna, puis Triberg et ses cascades — parmi les plus hautes d’Allemagne. Ateliers de coucous traditionnels et déjeuner au bord de l’eau.',
          en: 'Lake Titisee and its wooded shores, the Ravenna railway viaduct, then Triberg and its waterfalls — among Germany’s highest. Traditional cuckoo-clock workshops and lunch at the water’s edge.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '670',
      },
      {
        title: { fr: 'Kaiserstuhl, vignoble volcanique', en: 'Kaiserstuhl volcanic vineyards' },
        teaser: {
          fr: 'À 20 minutes à l’ouest, l’ancien volcan couvert de terrasses de pinot noir et de grauburgunder. Dégustations à Ihringen et Vogtsburg, village viticole de Burkheim, panorama sur le Rhin et les Vosges depuis le Totenkopf.',
          en: 'Twenty minutes west, the extinct volcano terraced with Pinot Noir and Grauburgunder. Tastings in Ihringen and Vogtsburg, the wine village of Burkheim, and views over the Rhine and the Vosges from the Totenkopf.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '440',
      },
      {
        title: { fr: 'Colmar et la route des Vins d’Alsace', en: 'Colmar and the Alsace Wine Route' },
        teaser: {
          fr: 'À 45 minutes, la Petite Venise, le retable d’Issenheim au musée Unterlinden, puis Eguisheim et Riquewihr entre vignes et remparts. Journée transfrontalière complète, dégustations comprises, retour à Fribourg en soirée.',
          en: '45 minutes away, Little Venice, the Isenheim Altarpiece at the Unterlinden Museum, then Eguisheim and Riquewihr between vines and ramparts. A full cross-border day, tastings included, evening return to Freiburg.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Schauinsland et vallée de Münster', en: 'Schauinsland and the Münstertal' },
        teaser: {
          fr: 'Montée au Schauinsland (1 284 m) par la route panoramique ou le plus long téléphérique de circulation d’Allemagne, ferme-musée du Schniederlihof, puis descente par la vallée de Münster et l’abbaye baroque de St. Trudpert.',
          en: 'Up the Schauinsland (1,284 m) by the panoramic road or Germany’s longest loop cable car, the Schniederlihof farm museum, then down through the Münstertal past the baroque abbey of St. Trudpert.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '410',
      },
      {
        title: { fr: 'Soirée fribourgeoise', en: 'Freiburg evening' },
        teaser: {
          fr: 'Dîner dans la vieille ville — Wolfshöhle, étoilé à deux pas de la cathédrale, ou une wirtschaft badoise historique —, puis la Münsterplatz et les portes médiévales illuminées. Dépose au plus près des zones piétonnes, retour sans contrainte.',
          en: 'Dinner in the old town — Michelin-starred Wolfshöhle steps from the minster, or a historic Baden wirtschaft — then the illuminated Münsterplatz and medieval gates. Drop-off as close as the pedestrian zone allows, effortless return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’EuroAirport de Bâle-Mulhouse et Fribourg ?',
          en: 'How much does a transfer between Basel-Mulhouse EuroAirport and Freiburg cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’EuroAirport Bâle-Mulhouse-Fribourg et le centre de Fribourg — environ 70 km, 45 à 55 minutes — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between the Basel-Mulhouse-Freiburg EuroAirport and central Freiburg — about 70 km, 45 to 55 minutes — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous les hôtels de la Forêt-Noire autour de Fribourg ?',
          en: 'Do you serve the Black Forest hotels around Freiburg?',
        },
        a: {
          fr: 'Oui. Nous déposons directement au Colombi de Fribourg comme dans les maisons du massif — Traube Tonbach à Baiersbronn, hôtels de Hinterzarten ou de Titisee — avec un véhicule adapté aux routes de montagne, équipé en hiver de pneus neige.',
          en: 'Yes. We drop you directly at the Colombi in Freiburg as well as the houses of the massif — Traube Tonbach in Baiersbronn, hotels in Hinterzarten or Titisee — with a vehicle suited to mountain roads and fitted with winter tyres in season.',
        },
      },
      {
        q: {
          fr: 'Le chauffeur peut-il combiner Allemagne, France et Suisse dans un même circuit ?',
          en: 'Can the chauffeur combine Germany, France and Switzerland in a single itinerary?',
        },
        a: {
          fr: 'Oui, Fribourg est au cœur du pays des trois frontières : Colmar à 45 minutes, Bâle à 50, Strasbourg à une heure. Les circuits multi-pays sont devisés à l’avance, à prix fixe, avec un véhicule autorisé à circuler dans les trois pays.',
          en: 'Yes, Freiburg sits at the heart of the three-border region: Colmar 45 minutes away, Basel 50, Strasbourg an hour. Multi-country itineraries are quoted in advance at a fixed price, with a vehicle authorised to operate in all three countries.',
        },
      },
    ],
    nearby: ['basel', 'baden-baden', 'zurich', 'stuttgart'],
  },
  {
    slug: 'rothenburg-ob-der-tauber',
    name: { fr: 'Rothenburg ob der Tauber', en: 'Rothenburg ob der Tauber' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'Rothenburg ob der Tauber n’a pas d’aéroport : l’aéroport de Nuremberg (NUE), à 80 km à l’est, se rejoint en une heure environ par l’A6 et l’A7 ; Francfort (FRA) est à 2 heures. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif, suit votre vol en temps réel et vous dépose au plus près des portes de la vieille ville.',
      en: 'Rothenburg ob der Tauber has no airport: Nuremberg Airport (NUE), 80 km east, is about an hour away via the A6 and A7; Frankfurt (FRA) is 2 hours. Your chauffeur greets you in the arrivals hall with a name board, tracks your flight in real time and drops you as close as possible to the old-town gates.',
    },
    intro: {
      fr: [
        'Perchée au-dessus de la vallée de la Tauber, Rothenburg est la ville fortifiée la mieux conservée d’Allemagne : remparts intacts que l’on parcourt à pied, Plönlein aux façades à colombages, hôtel de ville Renaissance et musée de Noël ouvert toute l’année. Votre **chauffeur privé à Rothenburg ob der Tauber** gère l’accès à la vieille ville — largement fermée à la circulation —, dépose vos bagages à l’hôtel et vous attend hors les murs, à prix fixe confirmé dès la réservation.',
        'Étape emblématique de la **Route Romantique**, Rothenburg se combine idéalement avec ses voisines : Dinkelsbühl et ses remparts à 45 minutes, Nördlingen bâtie dans un cratère de météorite à une heure, Würzburg et sa Résidence baroque classée UNESCO à 45 minutes au nord. En mise à disposition à la journée, votre chauffeur enchaîne les villes fortifiées et les vignobles de Franconie sans que vous touchiez un volant.',
      ],
      en: [
        'Perched above the Tauber valley, Rothenburg is Germany’s best-preserved walled town: intact ramparts you can walk end to end, the half-timbered Plönlein, a Renaissance town hall and a Christmas museum open all year round. Your **private chauffeur in Rothenburg ob der Tauber** manages access to the old town — largely closed to traffic —, delivers your luggage to the hotel and waits outside the walls, at a fixed price confirmed at booking.',
        'A signature stop on the **Romantic Road**, Rothenburg pairs perfectly with its neighbours: Dinkelsbühl and its ramparts 45 minutes away, Nördlingen built inside a meteorite crater an hour away, Würzburg and its UNESCO-listed baroque Residence 45 minutes north. With a full-day chauffeur hire, you move between fortified towns and Franconian vineyards without ever touching a steering wheel.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Route Romantique : Dinkelsbühl et Nördlingen', en: 'Romantic Road: Dinkelsbühl and Nördlingen' },
        teaser: {
          fr: 'Les deux autres villes fortifiées de la route : Dinkelsbühl et ses maisons patriciennes intactes, puis Nördlingen, cernée de remparts circulaires au fond du cratère du Ries. Montée au clocher « Daniel » pour la vue.',
          en: 'The Romantic Road’s two other walled towns: Dinkelsbühl with its untouched patrician houses, then Nördlingen, ringed by circular ramparts inside the Ries crater. Climb the “Daniel” tower for the view.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Würzburg et la Résidence baroque', en: 'Würzburg and the baroque Residence' },
        teaser: {
          fr: 'À 45 minutes au nord, la Résidence des princes-évêques classée UNESCO et la fresque de Tiepolo — la plus grande du monde —, la forteresse de Marienberg, puis dégustation de silvaner dans un weingut du Steinberg.',
          en: '45 minutes north, the UNESCO-listed prince-bishops’ Residence and Tiepolo’s ceiling fresco — the world’s largest —, the Marienberg fortress, then a Silvaner tasting at a Steinberg weingut.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '610',
      },
      {
        title: { fr: 'Vallée de la Tauber et Creglingen', en: 'Tauber valley and Creglingen' },
        teaser: {
          fr: 'La Taubertal au fil de l’eau : chapelle du Herrgottskirche de Creglingen et son retable de Riemenschneider, Weikersheim et son château Renaissance, moulins et vignes en terrasses. La Franconie intime, loin des groupes.',
          en: 'The Taubertal at the water’s pace: the Herrgottskirche chapel in Creglingen with its Riemenschneider altarpiece, Weikersheim and its Renaissance palace, mills and terraced vines. Intimate Franconia, far from the crowds.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Nuremberg impériale', en: 'Imperial Nuremberg' },
        teaser: {
          fr: 'À une heure à l’est, le Kaiserburg, la maison d’Albrecht Dürer et le Germanisches Nationalmuseum, bratwurst historique à midi. Départ après le petit-déjeuner, retour à Rothenburg avant la ronde du veilleur de nuit.',
          en: 'An hour east, the Kaiserburg, Albrecht Dürer’s house and the Germanisches Nationalmuseum, historic bratwurst at lunch. Leave after breakfast, return to Rothenburg in time for the night watchman’s round.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '580',
      },
      {
        title: { fr: 'Rothenburg au crépuscule', en: 'Rothenburg at dusk' },
        teaser: {
          fr: 'Quand les cars repartent, la ville retrouve son silence : chemin de ronde au couchant, jardin du Burggarten au-dessus de la Tauber, dîner à la Villa Mittermeier ou dans une auberge séculaire, veilleur de nuit à 21 h 30.',
          en: 'When the coaches leave, the town falls silent again: the rampart walk at sunset, the Burggarten above the Tauber, dinner at Villa Mittermeier or a centuries-old inn, the night watchman’s tour at 9.30 pm.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '310',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nuremberg et Rothenburg ob der Tauber ?',
          en: 'How much does a transfer between Nuremberg Airport and Rothenburg ob der Tauber cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nuremberg (NUE) et Rothenburg — environ 80 km, une heure de route — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard. Les transferts depuis Francfort ou Munich sont également possibles à prix fixe.',
          en: 'A private transfer between Nuremberg (NUE) and Rothenburg — about 80 km, an hour’s drive — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay. Fixed-price transfers from Frankfurt or Munich are also available.',
        },
      },
      {
        q: {
          fr: 'La voiture peut-elle entrer dans la vieille ville de Rothenburg ?',
          en: 'Can the car enter Rothenburg’s old town?',
        },
        a: {
          fr: 'L’accès intra-muros est restreint, mais les clients d’hôtels de la vieille ville bénéficient d’une autorisation de dépose : votre chauffeur vous conduit jusqu’à la porte de votre établissement, décharge les bagages, puis stationne hors les murs et reste joignable à tout moment.',
          en: 'Access inside the walls is restricted, but old-town hotel guests benefit from a drop-off authorisation: your chauffeur takes you to your hotel’s door, unloads the luggage, then parks outside the walls and remains reachable at all times.',
        },
      },
      {
        q: {
          fr: 'Peut-on faire toute la Route Romantique avec chauffeur depuis Rothenburg ?',
          en: 'Can the whole Romantic Road be done by chauffeured car from Rothenburg?',
        },
        a: {
          fr: 'Oui. Rothenburg est à mi-parcours des 460 km reliant Würzburg à Füssen : nous organisons la route en une longue journée ou, mieux, en deux jours avec nuit à Augsbourg, jusqu’au château de Neuschwanstein. Itinéraire, hôtels et horaires sont fixés à l’avance, à prix fixe.',
          en: 'Yes. Rothenburg sits midway along the 460 km from Würzburg to Füssen: we arrange the route as one long day or, better, two days with a night in Augsburg, ending at Neuschwanstein Castle. Itinerary, hotels and timings are set in advance, at a fixed price.',
        },
      },
    ],
    nearby: ['nuremberg', 'frankfurt', 'stuttgart', 'munich'],
  },
  {
    slug: 'neuschwanstein-fussen',
    name: { fr: 'Neuschwanstein & Füssen', en: 'Neuschwanstein & Füssen' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'Füssen n’a pas d’aéroport : l’aéroport de Munich (MUC), à 120 km au nord-est, se rejoint en 1 h 30 à 1 h 45 par l’A96 ; Innsbruck (INN) est à une heure par le Fernpass. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif, suit votre vol en temps réel et vous conduit directement à Füssen ou au pied des châteaux de Hohenschwangau.',
      en: 'Füssen has no airport: Munich Airport (MUC), 120 km north-east, is 1 h 30 to 1 h 45 away via the A96; Innsbruck (INN) is an hour via the Fernpass. Your chauffeur greets you in the arrivals hall with a name board, tracks your flight in real time and drives you straight to Füssen or the foot of the Hohenschwangau castles.',
    },
    intro: {
      fr: [
        'Au pied des Alpes d’Ammergau, Füssen marque le terme de la Route Romantique et garde l’entrée du site le plus visité d’Allemagne : Neuschwanstein, le château de conte de fées de Louis II de Bavière. Votre **chauffeur privé à Neuschwanstein et Füssen** vous épargne parkings saturés et navettes bondées : dépose au plus près des billetteries de Hohenschwangau, attente pendant la visite, retour à l’heure exacte de votre créneau réservé.',
        'La région concentre les **châteaux de Louis II** et bien davantage : Hohenschwangau, le château d’enfance du roi, fait face à Neuschwanstein ; Linderhof et sa grotte de Vénus sont à 45 minutes par la route de Plansee ; l’église de Wies, chef-d’œuvre rococo classé UNESCO, à vingt minutes. Oberammergau, le lac Forggensee et le Tegelberg complètent des journées que votre chauffeur ordonne au rythme de vos réservations.',
      ],
      en: [
        'At the foot of the Ammergau Alps, Füssen marks the end of the Romantic Road and guards the entrance to Germany’s most visited site: Neuschwanstein, the fairy-tale castle of Ludwig II of Bavaria. Your **private chauffeur in Neuschwanstein and Füssen** spares you saturated car parks and crowded shuttles: drop-off as close as possible to the Hohenschwangau ticket offices, standby during the visit, and a return timed exactly to your reserved entry slot.',
        'The region concentrates the **castles of Ludwig II** and much more: Hohenschwangau, the king’s childhood castle, faces Neuschwanstein; Linderhof and its Venus Grotto are 45 minutes away via the Plansee road; the Wieskirche, a UNESCO-listed rococo masterpiece, twenty minutes. Oberammergau, the Forggensee lake and the Tegelberg round out days your chauffeur sequences around your booked time slots.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Neuschwanstein et Hohenschwangau', en: 'Neuschwanstein and Hohenschwangau' },
        teaser: {
          fr: 'Les deux châteaux en une journée : montée en calèche ou navette vers Neuschwanstein, pont de Marienbrücke au-dessus de la gorge de la Pöllat, puis Hohenschwangau et les rives de l’Alpsee. Billets coupe-file organisés à l’avance.',
          en: 'Both castles in one day: horse-drawn carriage or shuttle up to Neuschwanstein, the Marienbrücke bridge above the Pöllat gorge, then Hohenschwangau and the shores of the Alpsee. Skip-the-line tickets arranged in advance.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '560',
      },
      {
        title: { fr: 'Linderhof et Oberammergau', en: 'Linderhof and Oberammergau' },
        teaser: {
          fr: 'Le seul château que Louis II ait achevé : Linderhof, son pavillon mauresque et sa grotte de Vénus, par la route panoramique du Plansee. Puis Oberammergau, ses façades peintes en Lüftlmalerei et ses sculpteurs sur bois.',
          en: 'The only castle Ludwig II ever completed: Linderhof, its Moorish kiosk and Venus Grotto, reached by the scenic Plansee road. Then Oberammergau, its Lüftlmalerei painted façades and woodcarvers’ workshops.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Église de Wies et fin de la Route Romantique', en: 'Wieskirche and the end of the Romantic Road' },
        teaser: {
          fr: 'Le sanctuaire rococo de Wies, classé UNESCO, isolé au milieu des prairies du Pfaffenwinkel, puis la vieille ville de Füssen, son Hohes Schloss et l’abbaye Saint-Magne au bord du Lech. La conclusion parfaite de la route.',
          en: 'The UNESCO-listed rococo pilgrimage church of Wies, standing alone amid the Pfaffenwinkel meadows, then Füssen’s old town, the Hohes Schloss and St Mang’s Abbey on the Lech. The perfect close to the Road.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Tegelberg et lacs du Königswinkel', en: 'Tegelberg and the Königswinkel lakes' },
        teaser: {
          fr: 'Montée en téléphérique au Tegelberg (1 720 m) pour la vue aérienne sur Neuschwanstein et le Forggensee, puis tour des lacs — Alpsee, Schwansee, Weissensee — et baignade ou promenade selon la saison.',
          en: 'Cable car up the Tegelberg (1,720 m) for the aerial view over Neuschwanstein and the Forggensee, then a tour of the lakes — Alpsee, Schwansee, Weissensee — with a swim or a walk depending on the season.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Journée royale depuis Munich', en: 'Royal day trip from Munich' },
        teaser: {
          fr: 'Prise en charge à votre hôtel munichois, Neuschwanstein et Linderhof dans la même journée avec déjeuner au bord du Plansee, retour en soirée. L’itinéraire des châteaux de Louis II sans changer d’hôtel.',
          en: 'Pick-up at your Munich hotel, Neuschwanstein and Linderhof in a single day with lunch on the Plansee, evening return. The Ludwig II castle circuit without changing hotels.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Munich et Füssen ou Neuschwanstein ?',
          en: 'How much does a transfer between Munich Airport and Füssen or Neuschwanstein cost?',
        },
        a: {
          fr: 'Le transfert privé entre Munich (MUC) et Füssen — environ 120 km, 1 h 30 à 1 h 45 — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Munich (MUC) and Füssen — about 120 km, 1 h 30 to 1 h 45 — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver les billets de Neuschwanstein à l’avance ?',
          en: 'Should Neuschwanstein tickets be booked in advance?',
        },
        a: {
          fr: 'Impérativement en haute saison : les visites se font uniquement par créneau horaire et les quotas du jour partent tôt. Nous réservons vos billets coupe-file en même temps que le véhicule et calons la prise en charge sur votre horaire d’entrée, montée en navette ou en calèche comprise.',
          en: 'Absolutely, in high season: visits run on timed slots only and same-day quotas sell out early. We book your skip-the-line tickets together with the vehicle and time the pick-up to your entry slot, shuttle or carriage ride included.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Neuschwanstein depuis Munich ou Innsbruck dans la journée ?',
          en: 'Can Neuschwanstein be visited from Munich or Innsbruck in a day?',
        },
        a: {
          fr: 'Oui. Depuis Munich, comptez 2 heures de route par trajet ; depuis Innsbruck, une heure par le Fernpass. La journée aller-retour avec visite du château, déjeuner et arrêt à Linderhof ou à l’église de Wies est notre formule la plus demandée, à prix fixe tout compris.',
          en: 'Yes. From Munich allow 2 hours each way; from Innsbruck, an hour via the Fernpass. The round-trip day with the castle visit, lunch and a stop at Linderhof or the Wieskirche is our most requested package, at an all-inclusive fixed price.',
        },
      },
    ],
    nearby: ['munich', 'garmisch-partenkirchen', 'innsbruck'],
  },
  {
    slug: 'garmisch-partenkirchen',
    name: { fr: 'Garmisch-Partenkirchen', en: 'Garmisch-Partenkirchen' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airportTransfer: {
      fr: 'Garmisch-Partenkirchen n’a pas d’aéroport : l’aéroport de Munich (MUC), à 100 km au nord-est, se rejoint en 1 h 15 à 1 h 30 par l’A95 ; Innsbruck (INN) est à 60 km par Mittenwald. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif, suit votre vol en temps réel et vous dépose à votre hôtel au pied de la Zugspitze.',
      en: 'Garmisch-Partenkirchen has no airport: Munich Airport (MUC), 100 km north-east, is 1 h 15 to 1 h 30 away via the A95; Innsbruck (INN) is 60 km away via Mittenwald. Your chauffeur greets you in the arrivals hall with a name board, tracks your flight in real time and drops you at your hotel at the foot of the Zugspitze.',
    },
    intro: {
      fr: [
        'Au pied de la Zugspitze, plus haut sommet d’Allemagne (2 962 m), Garmisch-Partenkirchen réunit deux villages jumeaux : Garmisch et ses hôtels de villégiature, Partenkirchen et sa Ludwigstrasse aux façades peintes. Ville olympique de 1936, station de la Coupe du monde de ski et du tournoi des Quatre Tremplins, elle vit à l’année. Votre **chauffeur privé à Garmisch-Partenkirchen** assure transferts depuis Munich et Innsbruck, dépose aux remontées et navettes de soirée, en berline ou van équipé pour la montagne.',
        'La position est stratégique : la **gorge de la Partnach** s’ouvre à dix minutes du centre, le lac d’Eibsee aux eaux turquoise à vingt, Mittenwald et ses luthiers à vingt-cinq. Côté châteaux, Linderhof est à 30 minutes par Ettal et son abbaye baroque, Neuschwanstein à une heure. Votre chauffeur compose des journées entre sommets, lacs et résidences royales, au rythme de la météo alpine.',
      ],
      en: [
        'At the foot of the Zugspitze, Germany’s highest peak (2,962 m), Garmisch-Partenkirchen unites two twin villages: Garmisch with its resort hotels, Partenkirchen with the painted façades of the Ludwigstrasse. Host of the 1936 Winter Olympics, a Ski World Cup venue and a Four Hills Tournament stage, it lives year-round. Your **private chauffeur in Garmisch-Partenkirchen** handles transfers from Munich and Innsbruck, lift-station drop-offs and evening shuttles, in a sedan or van equipped for the mountains.',
        'The location is strategic: the **Partnach Gorge** opens ten minutes from the centre, the turquoise Eibsee lake twenty, Mittenwald and its violin makers twenty-five. On the castle side, Linderhof is 30 minutes away via Ettal and its baroque abbey, Neuschwanstein an hour. Your chauffeur builds days between summits, lakes and royal residences, paced by the Alpine weather.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Zugspitze et lac d’Eibsee', en: 'Zugspitze and the Eibsee' },
        teaser: {
          fr: 'Montée au toit de l’Allemagne par le téléphérique de l’Eibsee — 1 945 m de dénivelé en dix minutes —, panorama sur 400 sommets de quatre pays, glacier du Zugspitzplatt, puis tour du lac d’Eibsee au retour.',
          en: 'Up to the roof of Germany by the Eibsee cable car — 1,945 m of ascent in ten minutes —, a panorama of 400 peaks across four countries, the Zugspitzplatt glacier, then a walk around the Eibsee on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '540',
      },
      {
        title: { fr: 'Gorge de la Partnach et tremplin olympique', en: 'Partnach Gorge and the Olympic ski jump' },
        teaser: {
          fr: 'La Partnachklamm, 700 mètres de passerelles taillées entre des parois de 80 mètres, spectaculaire été comme hiver sous la glace, puis le stade olympique de 1936 et son grand tremplin redessiné en 2007.',
          en: 'The Partnachklamm, 700 metres of walkways cut between 80-metre rock walls, spectacular in summer and under ice in winter, then the 1936 Olympic stadium and its ski jump, redesigned in 2007.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Linderhof et abbaye d’Ettal', en: 'Linderhof and Ettal Abbey' },
        teaser: {
          fr: 'À 30 minutes, le château le plus intime de Louis II : Linderhof, ses jardins en terrasses et sa grotte de Vénus, précédé de l’abbaye bénédictine d’Ettal et de sa coupole baroque. Liqueur des moines en dégustation.',
          en: 'Thirty minutes away, Ludwig II’s most intimate castle: Linderhof, its terraced gardens and Venus Grotto, preceded by the Benedictine abbey of Ettal and its baroque dome. The monks’ liqueur offered for tasting.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Mittenwald et Innsbruck', en: 'Mittenwald and Innsbruck' },
        teaser: {
          fr: 'Mittenwald, village de luthiers aux façades peintes que Goethe appelait « un livre d’images vivant », puis passage en Autriche vers Innsbruck : Petit Toit d’or, Maria-Theresien-Strasse et tremplin du Bergisel signé Zaha Hadid.',
          en: 'Mittenwald, the violin makers’ village with painted façades Goethe called “a living picture book”, then across into Austria to Innsbruck: the Golden Roof, Maria-Theresien-Strasse and Zaha Hadid’s Bergisel ski jump.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Neuschwanstein depuis Garmisch', en: 'Neuschwanstein from Garmisch' },
        teaser: {
          fr: 'Une heure de route panoramique par le Plansee autrichien jusqu’aux châteaux de Louis II : Neuschwanstein et Hohenschwangau, billets coupe-file réservés à l’avance, déjeuner face à l’Alpsee, retour par l’église de Wies.',
          en: 'An hour’s scenic drive along Austria’s Plansee to the castles of Ludwig II: Neuschwanstein and Hohenschwangau, skip-the-line tickets booked ahead, lunch facing the Alpsee, return via the Wieskirche.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '600',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Munich et Garmisch-Partenkirchen ?',
          en: 'How much does a transfer between Munich Airport and Garmisch-Partenkirchen cost?',
        },
        a: {
          fr: 'Le transfert privé entre Munich (MUC) et Garmisch-Partenkirchen — environ 100 km, 1 h 15 à 1 h 30 — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard. Le transfert depuis Innsbruck (INN) est également disponible.',
          en: 'A private transfer between Munich (MUC) and Garmisch-Partenkirchen — about 100 km, 1 h 15 to 1 h 30 — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay. Transfers from Innsbruck (INN) are also available.',
        },
      },
      {
        q: {
          fr: 'Vos véhicules sont-ils équipés pour l’hiver alpin ?',
          en: 'Are your vehicles equipped for the Alpine winter?',
        },
        a: {
          fr: 'Oui. De novembre à avril, berlines et vans sont chaussés de pneus neige, chaînes à bord, et nos chauffeurs pratiquent les routes de montagne à l’année. Dépose skis aux pieds aux remontées de la Zugspitze ou du Hausberg, coffre adapté au matériel de plusieurs skieurs.',
          en: 'Yes. From November to April, sedans and vans run on winter tyres with chains on board, and our chauffeurs drive mountain roads all year round. Ski-in drop-off at the Zugspitze or Hausberg lifts, with boot space for several skiers’ equipment.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les soirées du Nouvel An et du tournoi des Quatre Tremplins ?',
          en: 'Do you cover New Year and the Four Hills Tournament?',
        },
        a: {
          fr: 'Oui, mais réservez très tôt : le concours de saut du 1er janvier attire des dizaines de milliers de spectateurs et les routes d’accès sont régulées. Votre chauffeur connaît les points de dépose autorisés près du tremplin olympique et assure le retour à votre hôtel après l’épreuve.',
          en: 'Yes, but book very early: the 1 January ski-jumping event draws tens of thousands of spectators and access roads are regulated. Your chauffeur knows the authorised drop-off points near the Olympic jump and handles the return to your hotel after the competition.',
        },
      },
    ],
    nearby: ['munich', 'neuschwanstein-fussen', 'innsbruck', 'zell-am-see'],
  },
  {
    slug: 'hanover',
    name: { fr: 'Hanovre', en: 'Hanover' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Hanovre-Langenhagen (HAJ)',
    airportTransfer: {
      fr: 'L’aéroport de Hanovre-Langenhagen (HAJ) se trouve à 11 km au nord du centre : comptez 20 minutes pour rejoindre la gare centrale ou le quartier de l’opéra. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Hanover-Langenhagen Airport (HAJ) lies 11 km north of the centre: allow 20 minutes to reach the central station or the opera district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de la Basse-Saxe et ancienne résidence des rois de Hanovre, la ville conjugue les jardins baroques de Herrenhausen — parmi les plus beaux d’Europe —, le Nouvel Hôtel de ville et son ascenseur incliné, et le plus grand parc des expositions du monde. Votre **chauffeur privé à Hanovre** est rompu aux rythmes de la Hannover Messe et d’Agritechnica : liaisons hôtel–parc à horaires garantis, mises à disposition entre les halls, dîners d’affaires en fin de journée, à prix fixe.',
        'Autour de Hanovre, la Basse-Saxe se découvre en étoile : **Hamelin, la ville du joueur de flûte**, et ses façades Renaissance de la Weser sont à 45 minutes ; Celle et ses 400 maisons à colombages à 40 ; l’Autostadt de Volkswagen à Wolfsburg à une heure ; Goslar et les mines UNESCO du Rammelsberg aux portes du Harz. Votre chauffeur relie ces étapes en une ou plusieurs journées, sans contrainte d’horaires.',
      ],
      en: [
        'Capital of Lower Saxony and former seat of the Kings of Hanover, the city combines the baroque Herrenhausen Gardens — among Europe’s finest —, the New Town Hall with its inclined lift, and the world’s largest exhibition grounds. Your **private chauffeur in Hanover** knows the rhythms of Hannover Messe and Agritechnica: hotel–fairground connections at guaranteed times, hourly hire between the halls, business dinners at day’s end, all at a fixed price.',
        'Around Hanover, Lower Saxony fans out in every direction: **Hamelin, the Pied Piper’s town**, and its Weser Renaissance façades are 45 minutes away; Celle and its 400 half-timbered houses 40; Volkswagen’s Autostadt in Wolfsburg an hour; Goslar and the UNESCO-listed Rammelsberg mines at the gates of the Harz. Your chauffeur links these stops over one or several days, free of timetable constraints.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Jardins royaux de Herrenhausen', en: 'Royal Gardens of Herrenhausen' },
        teaser: {
          fr: 'Le Grand Jardin baroque dessiné pour l’électrice Sophie, la grotte réinventée par Niki de Saint Phalle, la grande fontaine de 72 mètres et le Berggarten botanique. En été, feux d’artifice concourant sous les parterres illuminés.',
          en: 'The baroque Great Garden laid out for Electress Sophia, the grotto reimagined by Niki de Saint Phalle, the 72-metre Great Fountain and the botanical Berggarten. In summer, the international fireworks competition lights up the parterres.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Hamelin et la vallée de la Weser', en: 'Hamelin and the Weser valley' },
        teaser: {
          fr: 'À 45 km au sud-ouest, la ville du joueur de flûte : façades de la Renaissance de la Weser, maison des Noces et carillon animé, puis le château de Hämelschenburg, joyau intact de la même époque. Déjeuner au bord du fleuve.',
          en: '45 km south-west, the Pied Piper’s town: Weser Renaissance façades, the Wedding House and its animated carillon, then Hämelschenburg Castle, an untouched jewel of the same era. Lunch by the river.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '580',
      },
      {
        title: { fr: 'Autostadt et usine Volkswagen à Wolfsburg', en: 'Autostadt and the Volkswagen plant in Wolfsburg' },
        teaser: {
          fr: 'À une heure à l’est, le parc automobile de Volkswagen : pavillons des marques de Lamborghini à Porsche, tours de verre de livraison, musée ZeitHaus et visite de la plus grande usine automobile du monde sur réservation.',
          en: 'An hour east, Volkswagen’s automotive theme park: brand pavilions from Lamborghini to Porsche, the glass delivery towers, the ZeitHaus museum and, by prior booking, a tour of the world’s largest car factory.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '560',
      },
      {
        title: { fr: 'Celle et la lande de Lunebourg', en: 'Celle and the Lüneburg Heath' },
        teaser: {
          fr: 'Celle, ses 400 maisons à colombages et son château ducal aux façades blanches, puis la lande de Lunebourg — bruyères en fleur d’août à septembre — et le monastère de Wienhausen aux trésors gothiques.',
          en: 'Celle, its 400 half-timbered houses and the white-façaded ducal palace, then the Lüneburg Heath — heather in bloom from August to September — and Wienhausen convent with its Gothic treasures.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Goslar et le Harz', en: 'Goslar and the Harz' },
        teaser: {
          fr: 'À 90 km au sud-est, la ville impériale UNESCO : Kaiserpfalz du XIe siècle, ruelles minières et ardoises grises, puis la mine du Rammelsberg, exploitée mille ans durant. Retour par les lacs et forêts du Haut-Harz.',
          en: '90 km south-east, the UNESCO imperial town: the 11th-century Kaiserpfalz, mining lanes and grey-slate façades, then the Rammelsberg mine, worked for a thousand years. Return through the lakes and forests of the Upper Harz.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Hanovre et le centre-ville ?',
          en: 'How much does a transfer between Hanover Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Hanovre-Langenhagen (HAJ) et le centre est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Hanover-Langenhagen (HAJ) and the city centre is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Comment se passe le service pendant la Hannover Messe ?',
          en: 'How does the service work during Hannover Messe?',
        },
        a: {
          fr: 'Nous bloquons véhicules et chauffeurs dès confirmation de vos dates : navettes hôtel–parc des expositions à heures fixes, mise à disposition entre les halls 1 à 27, prise en charge des invités à l’aéroport. En période de salon, les hôtels s’éloignent jusqu’à Hildesheim ou Celle — nos prix restent fixes quelle que soit la distance.',
          en: 'We block vehicles and chauffeurs as soon as your dates are confirmed: hotel–fairground shuttles at set times, standby hire between halls 1 to 27, guest pick-ups at the airport. During fairs, hotels stretch as far as Hildesheim or Celle — our prices stay fixed whatever the distance.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Hambourg ou Berlin en voiture avec chauffeur depuis Hanovre ?',
          en: 'Can I reach Hamburg or Berlin by chauffeured car from Hanover?',
        },
        a: {
          fr: 'Oui. Hambourg est à 1 h 45 par l’A7, Berlin à 2 h 45 par l’A2, Brême à 1 h 15. Ces trajets interurbains sont devisés à l’avance, à prix fixe, avec arrêts à la demande — un déjeuner à Celle ou une visite à Wolfsburg s’intègrent facilement à l’itinéraire.',
          en: 'Yes. Hamburg is 1 h 45 away via the A7, Berlin 2 h 45 via the A2, Bremen 1 h 15. These intercity journeys are quoted in advance at a fixed price, with stops on request — lunch in Celle or a visit to Wolfsburg fits easily into the route.',
        },
      },
    ],
    nearby: ['hamburg', 'bremen', 'berlin', 'leipzig'],
  },
  {
    slug: 'bremen',
    name: { fr: 'Brême', en: 'Bremen' },
    country: { fr: 'Allemagne', en: 'Germany' },
    region: 'dach-nordics',
    airport: 'Brême (BRE)',
    airportTransfer: {
      fr: 'L’aéroport de Brême (BRE) est l’un des plus proches de son centre en Europe : 3,5 km au sud, soit 10 à 15 minutes jusqu’à la place du Marché ou au quartier du Schnoor. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Bremen Airport (BRE) is one of Europe’s closest airports to its city centre: 3.5 km south, just 10 to 15 minutes from the Market Square or the Schnoor quarter. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville hanséatique libre depuis plus de mille ans, Brême concentre sur sa place du Marché un hôtel de ville UNESCO à la façade Renaissance de la Weser, la statue de Roland — symbole des libertés marchandes — et les célèbres Musiciens de Brême en bronze. Votre **chauffeur privé à Brême** relie l’aéroport en un quart d’heure, dessert les sièges des groupes aérospatiaux et logistiques de la ville, comme les ruelles du Schnoor et la Böttcherstrasse expressionniste.',
        'De Brême, l’Allemagne du Nord s’explore en étoile : **Bremerhaven et son Musée allemand de l’émigration**, élu meilleur musée d’Europe, sont à 60 km sur l’estuaire de la Weser ; Hambourg et sa Philharmonie de l’Elbe à 1 h 15 ; le Teufelsmoor et la colonie d’artistes de Worpswede à trente minutes. Votre chauffeur organise ces journées à prix fixe, mise à disposition ou trajet simple, selon votre programme.',
      ],
      en: [
        'A free Hanseatic city for more than a thousand years, Bremen gathers on its Market Square a UNESCO-listed town hall with a Weser Renaissance façade, the statue of Roland — symbol of merchant liberties — and the famous bronze Town Musicians. Your **private chauffeur in Bremen** links the airport in a quarter of an hour and serves the city’s aerospace and logistics headquarters, as well as the lanes of the Schnoor and the expressionist Böttcherstrasse.',
        'From Bremen, northern Germany opens up in every direction: **Bremerhaven and its German Emigration Center**, voted Europe’s best museum, lie 60 km away on the Weser estuary; Hamburg and the Elbphilharmonie are 1 h 15 away; the Teufelsmoor and the Worpswede artists’ colony thirty minutes. Your chauffeur arranges these days at a fixed price, as hourly hire or single journeys, to suit your programme.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Bremerhaven, ports et émigration', en: 'Bremerhaven, harbours and emigration' },
        teaser: {
          fr: 'À 60 km au nord, les Havenwelten : le Musée allemand de l’émigration, qui retrace le départ de 7 millions d’Européens vers le Nouveau Monde, le Klimahaus et le voilier-musée Seute Deern. Poisson fumé sur le port au déjeuner.',
          en: '60 km north, the Havenwelten: the German Emigration Center, tracing the departure of 7 million Europeans for the New World, the Klimahaus and the harbour museums. Smoked fish on the quayside for lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '520',
      },
      {
        title: { fr: 'Worpswede et le Teufelsmoor', en: 'Worpswede and the Teufelsmoor' },
        teaser: {
          fr: 'À 30 minutes, le village d’artistes fondé en 1889 dans les tourbières du Teufelsmoor : musées Paula Modersohn-Becker et Heinrich Vogeler, ateliers ouverts, café dans une maison de maître Jugendstil. Lumière du Nord garantie.',
          en: 'Thirty minutes away, the artists’ village founded in 1889 amid the Teufelsmoor peat bogs: the Paula Modersohn-Becker and Heinrich Vogeler museums, open studios, coffee in a Jugendstil manor house. Northern light guaranteed.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Schnoor et Böttcherstrasse', en: 'Schnoor and Böttcherstrasse' },
        teaser: {
          fr: 'Le plus vieux quartier de Brême, ruelles du XVe siècle et échoppes d’artisans, puis la Böttcherstrasse — 110 mètres d’expressionnisme brique financés par le négociant Roselius — et son carillon de porcelaine de Meissen.',
          en: 'Bremen’s oldest quarter, 15th-century lanes and artisan shops, then the Böttcherstrasse — 110 metres of brick expressionism funded by the merchant Roselius — and its Meissen porcelain carillon.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Hambourg dans la journée', en: 'Hamburg in a day' },
        teaser: {
          fr: 'À 1 h 15 de route, la Speicherstadt classée UNESCO, la Philharmonie de l’Elbe et sa plaza panoramique, déjeuner sur les quais de la HafenCity, puis retour à Brême en soirée. Deux villes hanséatiques en une journée.',
          en: 'A 1 h 15 drive away, the UNESCO-listed Speicherstadt, the Elbphilharmonie and its panoramic plaza, lunch on the HafenCity quays, then back to Bremen in the evening. Two Hanseatic cities in a single day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Soirée hanséatique', en: 'Hanseatic evening' },
        teaser: {
          fr: 'Dîner au Bremer Ratskeller — 600 ans de cave sous l’hôtel de ville, la plus ancienne collection de vins allemands — ou sur les terrasses de la Schlachte au bord de la Weser, puis la place du Marché illuminée. Retour sans contrainte.',
          en: 'Dinner at the Bremer Ratskeller — a 600-year-old cellar beneath the town hall, home to Germany’s oldest wine collection — or on the Schlachte terraces along the Weser, then the illuminated Market Square. Effortless return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '310',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Brême et le centre-ville ?',
          en: 'How much does a transfer between Bremen Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Brême (BRE) et le centre — 3,5 km, 10 à 15 minutes — est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Bremen (BRE) and the centre — 3.5 km, 10 to 15 minutes — is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers les terminaux de croisière de Bremerhaven ?',
          en: 'Do you provide transfers to the Bremerhaven cruise terminals?',
        },
        a: {
          fr: 'Oui. Le Columbus Cruise Center de Bremerhaven est à une heure de Brême ; nous synchronisons la prise en charge avec l’horaire d’embarquement ou de débarquement de votre navire, bagages chargés à bord du véhicule dès la sortie du terminal.',
          en: 'Yes. The Columbus Cruise Center in Bremerhaven is an hour from Bremen; we synchronise the pick-up with your ship’s embarkation or disembarkation time, with luggage loaded into the vehicle straight from the terminal exit.',
        },
      },
      {
        q: {
          fr: 'La place du Marché étant piétonne, où s’effectue la dépose ?',
          en: 'The Market Square is pedestrianised — where does the drop-off take place?',
        },
        a: {
          fr: 'Votre chauffeur utilise les points de dépose autorisés au plus près — Domshof, Am Markt côté Schlachte ou Balgebrückstrasse pour le Schnoor — et vous accompagne si besoin jusqu’à votre hôtel. La marche restante n’excède jamais quelques minutes.',
          en: 'Your chauffeur uses the closest authorised drop-off points — Domshof, the Schlachte side of Am Markt, or Balgebrückstrasse for the Schnoor — and walks you to your hotel if needed. The remaining walk never exceeds a few minutes.',
        },
      },
    ],
    nearby: ['hamburg', 'hanover'],
  },
  {
    slug: 'copenhagen',
    name: { fr: 'Copenhague', en: 'Copenhagen' },
    country: { fr: 'Danemark', en: 'Denmark' },
    region: 'dach-nordics',
    airport: 'Copenhague-Kastrup (CPH)',
    airportTransfer: {
      fr: 'L’aéroport de Copenhague-Kastrup (CPH) se trouve à 8 km au sud-est du centre, sur l’île d’Amager : comptez 15 à 20 minutes jusqu’à Kongens Nytorv ou au quartier de Nyhavn. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Copenhagen-Kastrup Airport (CPH) lies 8 km south-east of the centre, on the island of Amager: allow 15 to 20 minutes to reach Kongens Nytorv or the Nyhavn district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale danoise posée sur le détroit de l’Øresund, Copenhague aligne palais royaux, façades colorées de Nyhavn et tables parmi les plus créatives d’Europe. Votre **chauffeur privé à Copenhague** relie Kastrup, les sièges sociaux d’Ørestad, les quais de croisière de Langelinie et les restaurants de Refshaleøen, en berline Mercedes ou van de grande capacité. Transferts à prix fixe, mise à disposition à l’heure, chauffeurs anglophones : chaque trajet est confirmé à l’avance, sans surprise.',
        'Depuis Copenhague, l’île de Seeland se découvre en étoile : **le château de Kronborg à Elseneur**, forteresse d’Hamlet classée à l’UNESCO, est à 45 minutes, Frederiksborg et son lac à 35 minutes, la cathédrale viking de Roskilde à une demi-heure. Le pont de l’Øresund ouvre la Scanie suédoise — Malmö et Lund — à votre itinéraire, péage et formalités gérés par votre chauffeur.',
      ],
      en: [
        'The Danish capital, set on the Øresund strait, lines up royal palaces, the coloured façades of Nyhavn and some of Europe’s most creative restaurants. Your **private chauffeur in Copenhagen** connects Kastrup, the corporate headquarters of Ørestad, the Langelinie cruise quays and the dining rooms of Refshaleøen, in a Mercedes sedan or a full-size van. Fixed-price transfers, hourly hire, English-speaking chauffeurs: every journey is confirmed in advance, with no surprises.',
        'From Copenhagen, the island of Zealand unfolds in every direction: **Kronborg Castle in Elsinore**, Hamlet’s UNESCO-listed fortress, is 45 minutes away, Frederiksborg and its lake 35 minutes, and Roskilde’s Viking cathedral half an hour. The Øresund Bridge brings Swedish Scania — Malmö and Lund — within reach, with tolls and formalities handled by your chauffeur.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Châteaux de Seeland du Nord', en: 'Castles of North Zealand' },
        teaser: {
          fr: 'Kronborg à Elseneur, forteresse d’Hamlet face à la Suède, puis Frederiksborg à Hillerød, le plus vaste château Renaissance de Scandinavie et son jardin baroque. Retour par la réserve royale de Dyrehaven.',
          en: 'Kronborg in Elsinore, Hamlet’s fortress facing Sweden, then Frederiksborg in Hillerød, Scandinavia’s largest Renaissance castle with its baroque garden. Return through the royal deer park of Dyrehaven.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Malmö par le pont de l’Øresund', en: 'Malmö across the Øresund Bridge' },
        teaser: {
          fr: 'Les 16 km du pont-tunnel de l’Øresund jusqu’en Suède : la vieille ville de Malmö, la tour Turning Torso, puis Lund et sa cathédrale romane. Deux pays en une journée, péage et passage de frontière gérés.',
          en: 'The 16 km Øresund bridge-tunnel into Sweden: Malmö’s old town, the Turning Torso tower, then Lund and its Romanesque cathedral. Two countries in one day, with toll and border crossing handled.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Musée Louisiana et côte danoise', en: 'Louisiana Museum and the Danish Riviera' },
        teaser: {
          fr: 'À 35 km au nord par la route côtière du Strandvejen, le musée Louisiana d’art moderne à Humlebæk : Giacometti, Calder et un parc de sculptures face à l’Øresund. Arrêt possible au port de Rungsted.',
          en: '35 km north along the Strandvejen coastal road, the Louisiana Museum of Modern Art in Humlebæk: Giacometti, Calder and a sculpture park overlooking the Øresund. Optional stop at Rungsted harbour.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '490',
      },
      {
        title: { fr: 'Roskilde, cathédrale et drakkars', en: 'Roskilde, cathedral and longships' },
        teaser: {
          fr: 'À 35 minutes de Copenhague, la cathédrale de brique où reposent quarante rois du Danemark, classée à l’UNESCO, puis le musée des navires vikings et ses cinq drakkars remontés du fjord.',
          en: '35 minutes from Copenhagen, the UNESCO-listed brick cathedral where forty Danish monarchs rest, followed by the Viking Ship Museum and its five longships raised from the fjord.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Soirée gastronomique à Copenhague', en: 'Copenhagen gourmet evening' },
        teaser: {
          fr: 'Dépose devant votre table — Geranium, Alchemist ou les adresses de Refshaleøen —, puis les illuminations de Nyhavn, d’Amalienborg et des jardins de Tivoli. Le véhicule vous attend toute la soirée.',
          en: 'Drop-off at your table — Geranium, Alchemist or the Refshaleøen addresses — followed by the illuminations of Nyhavn, Amalienborg and the Tivoli Gardens. The vehicle waits for you all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Copenhague-Kastrup et le centre-ville ?',
          en: 'How much does a transfer between Copenhagen-Kastrup Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Kastrup (CPH) et le centre de Copenhague est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Kastrup (CPH) and central Copenhagen is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer un trajet vers Malmö ou la Suède par le pont de l’Øresund ?',
          en: 'Can you drive me to Malmö or Sweden across the Øresund Bridge?',
        },
        a: {
          fr: 'Oui. Le pont de l’Øresund relie Copenhague à Malmö en 35 à 40 minutes ; nous assurons régulièrement Malmö, Lund et l’aéroport de Sturup. Le péage du pont et le passage de frontière sont inclus dans le devis, communiqué à prix fixe avant le départ.',
          en: 'Yes. The Øresund Bridge links Copenhagen to Malmö in 35 to 40 minutes; we regularly serve Malmö, Lund and Sturup Airport. The bridge toll and border crossing are included in the quote, confirmed at a fixed price before departure.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des transferts vers les terminaux de croisière de Copenhague ?',
          en: 'Do you offer transfers to Copenhagen’s cruise terminals?',
        },
        a: {
          fr: 'Oui. Nous desservons les quais de Langelinie et le terminal d’Oceankaj à Nordhavn, depuis Kastrup ou votre hôtel. Votre chauffeur ajuste l’horaire aux consignes d’embarquement de la compagnie et prend en charge l’ensemble des bagages.',
          en: 'Yes. We serve the Langelinie quays and the Oceankaj terminal in Nordhavn, from Kastrup or your hotel. Your chauffeur times the journey to the line’s boarding instructions and handles all your luggage.',
        },
      },
    ],
    nearby: ['malmo', 'aarhus', 'gothenburg', 'hamburg'],
  },
  {
    slug: 'stockholm',
    name: { fr: 'Stockholm', en: 'Stockholm' },
    country: { fr: 'Suède', en: 'Sweden' },
    region: 'dach-nordics',
    airport: 'Stockholm-Arlanda (ARN)',
    airportTransfer: {
      fr: 'L’aéroport de Stockholm-Arlanda (ARN) est à 40 km au nord de la capitale : comptez 40 à 45 minutes par l’E4 jusqu’à Norrmalm ou à la vieille ville de Gamla Stan. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Stockholm-Arlanda Airport (ARN) lies 40 km north of the capital: allow 40 to 45 minutes along the E4 to reach Norrmalm or the old town of Gamla Stan. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Bâtie sur quatorze îles entre le lac Mälaren et la Baltique, Stockholm réunit le palais royal de Gamla Stan, les musées de Djurgården et les quartiers d’affaires de Norrmalm et de Kista. Votre **chauffeur privé à Stockholm** assure les transferts depuis Arlanda et Bromma, les mises à disposition pour vos rendez-vous, les soirées à l’Opéra royal ou dans les tables étoilées d’Östermalm. Berlines et vans premium, prix fixes, ponctualité suédoise.',
        'La capitale suédoise s’ouvre sur l’un des plus beaux arrière-pays d’Europe du Nord : **l’archipel de Stockholm et ses 30 000 îles**, le château royal de Drottningholm classé à l’UNESCO sur le Mälaren, Uppsala et sa cathédrale gothique à 45 minutes, la petite ville viking de Sigtuna sur la route d’Arlanda. Votre chauffeur compose l’itinéraire, coordonne les traversées et vous ramène sans contrainte.',
      ],
      en: [
        'Built on fourteen islands between Lake Mälaren and the Baltic, Stockholm brings together the royal palace of Gamla Stan, the museums of Djurgården and the business districts of Norrmalm and Kista. Your **private chauffeur in Stockholm** covers transfers from Arlanda and Bromma, hourly hire for your meetings, and evenings at the Royal Opera or the starred tables of Östermalm. Premium sedans and vans, fixed prices, Swedish punctuality.',
        'The Swedish capital opens onto one of northern Europe’s finest hinterlands: **the Stockholm archipelago and its 30,000 islands**, the UNESCO-listed royal palace of Drottningholm on Lake Mälaren, Uppsala and its Gothic cathedral 45 minutes away, and the small Viking town of Sigtuna on the road to Arlanda. Your chauffeur shapes the itinerary, coordinates the crossings and brings you back effortlessly.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Archipel de Stockholm', en: 'Stockholm archipelago' },
        teaser: {
          fr: 'Route vers Vaxholm, la citadelle gardienne de l’archipel, puis traversée vers Grinda ou Sandhamn parmi les 30 000 îles. Déjeuner de poissons fumés face à la Baltique, retour coordonné avec les navettes.',
          en: 'Drive to Vaxholm, the citadel guarding the archipelago, then a crossing to Grinda or Sandhamn among the 30,000 islands. Smoked-fish lunch facing the Baltic, return timed with the ferries.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '850',
      },
      {
        title: { fr: 'Drottningholm, résidence royale', en: 'Drottningholm royal residence' },
        teaser: {
          fr: 'Sur une île du Mälaren à 20 minutes du centre, la résidence de la famille royale suédoise classée à l’UNESCO : appartements d’apparat, théâtre de cour du XVIIIe siècle intact et pavillon chinois dans le parc.',
          en: 'On a Mälaren island 20 minutes from the centre, the UNESCO-listed residence of the Swedish royal family: state apartments, an intact 18th-century court theatre and the Chinese Pavilion in the grounds.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Uppsala et Sigtuna', en: 'Uppsala and Sigtuna' },
        teaser: {
          fr: 'La plus grande cathédrale de Scandinavie, l’université fondée en 1477 et les tumuli royaux de Gamla Uppsala, puis Sigtuna, première ville de Suède, ses pierres runiques et sa rue marchande du XIe siècle.',
          en: 'Scandinavia’s largest cathedral, the university founded in 1477 and the royal burial mounds of Gamla Uppsala, then Sigtuna, Sweden’s first town, with its rune stones and 11th-century main street.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Djurgården, Vasa et Skansen', en: 'Djurgården, Vasa and Skansen' },
        teaser: {
          fr: 'L’île des musées en voiture privée : le vaisseau Vasa renfloué après 333 ans sous la Baltique, le musée ABBA, Skansen et son village suédois à ciel ouvert. Dépose à chaque entrée, véhicule en attente.',
          en: 'The museum island by private car: the Vasa warship raised after 333 years beneath the Baltic, the ABBA Museum, and Skansen with its open-air Swedish village. Drop-off at each entrance, vehicle on standby.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Soirée à Östermalm', en: 'Östermalm evening' },
        teaser: {
          fr: 'Dîner chez Frantzén — trois étoiles — ou aux tables d’Östermalm, puis les quais de Strandvägen et Gamla Stan illuminée. Dépose devant chaque adresse, retour à votre hôtel à l’heure que vous choisissez.',
          en: 'Dinner at three-starred Frantzén or the tables of Östermalm, then the Strandvägen quays and an illuminated Gamla Stan. Door-to-door drop-offs, return to your hotel whenever you choose.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport d’Arlanda et le centre de Stockholm ?',
          en: 'How much does a transfer between Arlanda Airport and central Stockholm cost?',
        },
        a: {
          fr: 'Le transfert privé entre Stockholm-Arlanda (ARN) et le centre-ville — 40 km, 40 à 45 minutes — est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Stockholm-Arlanda (ARN) and the city centre — 40 km, 40 to 45 minutes — is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous aussi l’aéroport de Bromma et le port de Stadsgården ?',
          en: 'Do you also serve Bromma Airport and the Stadsgården cruise quay?',
        },
        a: {
          fr: 'Oui. Bromma, à 8 km du centre, est desservi en 15 à 20 minutes, et nous assurons les transferts vers les terminaux de croisière de Stadsgården et de Frihamnen comme vers les embarcadères de l’archipel, horaires coordonnés avec votre compagnie.',
          en: 'Yes. Bromma, 8 km from the centre, is reached in 15 to 20 minutes, and we provide transfers to the Stadsgården and Frihamnen cruise terminals as well as the archipelago ferry piers, with timings coordinated with your operator.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter l’archipel de Stockholm avec un chauffeur privé ?',
          en: 'Can I explore the Stockholm archipelago with a private chauffeur?',
        },
        a: {
          fr: 'Oui, en combinant route et bateau : votre chauffeur vous conduit à Vaxholm ou aux embarcadères de Stavsnäs et Strömkajen, attend pendant la traversée ou vous récupère à un autre port. L’itinéraire est calé sur les horaires des navettes de l’archipel.',
          en: 'Yes, by combining road and boat: your chauffeur drives you to Vaxholm or to the Stavsnäs and Strömkajen piers, waits during the crossing or collects you at another harbour. The itinerary is built around the archipelago ferry timetable.',
        },
      },
    ],
    nearby: ['gothenburg', 'oslo', 'helsinki', 'malmo'],
  },
  {
    slug: 'gothenburg',
    name: { fr: 'Göteborg', en: 'Gothenburg' },
    country: { fr: 'Suède', en: 'Sweden' },
    region: 'dach-nordics',
    airport: 'Göteborg-Landvetter (GOT)',
    airportTransfer: {
      fr: 'L’aéroport de Göteborg-Landvetter (GOT) se trouve à 25 km à l’est du centre : comptez 25 à 30 minutes par la route 40 jusqu’à l’avenue Kungsportsavenyn ou au quartier de Haga. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Gothenburg-Landvetter Airport (GOT) lies 25 km east of the centre: allow 25 to 30 minutes along Route 40 to reach Kungsportsavenyn avenue or the Haga district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Deuxième ville de Suède et premier port de Scandinavie, Göteborg cultive une élégance maritime : canaux dessinés par les Hollandais, halles au poisson de Feskekörka, maisons de bois du quartier de Haga et sièges de Volvo et de SKF. Votre **chauffeur privé à Göteborg** relie Landvetter, le palais des congrès Svenska Mässan, les terminaux du port et les tables étoilées du centre, à prix fixe et en toute discrétion.',
        'La ville est la porte de la côte ouest suédoise : **l’archipel du Bohuslän** égrène vers le nord Marstrand et sa forteresse insulaire, Fjällbacka chère à Ingrid Bergman et les villages de pêcheurs de Smögen. Vers le sud, l’archipel de Göteborg se rejoint en navette depuis Saltholmen, et Malmö comme Oslo restent à moins de trois heures de route. Votre chauffeur orchestre chaque étape.',
      ],
      en: [
        'Sweden’s second city and Scandinavia’s largest port, Gothenburg cultivates a maritime elegance: canals laid out by Dutch engineers, the Feskekörka fish hall, the wooden houses of Haga and the headquarters of Volvo and SKF. Your **private chauffeur in Gothenburg** links Landvetter, the Svenska Mässan congress centre, the port terminals and the city’s starred tables, at a fixed price and with complete discretion.',
        'The city is the gateway to Sweden’s west coast: **the Bohuslän archipelago** strings northwards through Marstrand and its island fortress, Fjällbacka beloved of Ingrid Bergman and the fishing village of Smögen. To the south, the Gothenburg archipelago is a short ferry ride from Saltholmen, while Malmö and Oslo are both under three hours by road. Your chauffeur orchestrates every stage.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Côte du Bohuslän et Marstrand', en: 'Bohuslän coast and Marstrand' },
        teaser: {
          fr: 'Les granits roses de la côte ouest jusqu’à Marstrand, île sans voitures dominée par la forteresse de Carlsten, puis Fjällbacka ou Smögen et ses cabanes de pêcheurs. Déjeuner de fruits de mer face au Skagerrak.',
          en: 'The pink granite of the west coast up to Marstrand, a car-free island crowned by Carlsten fortress, then Fjällbacka or Smögen with its fishermen’s huts. Seafood lunch overlooking the Skagerrak.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Archipel sud de Göteborg', en: 'Gothenburg southern archipelago' },
        teaser: {
          fr: 'Dépose à l’embarcadère de Saltholmen puis traversée vers Styrsö ou Vrångö, îles sans voitures aux sentiers de bruyère et aux criques de baignade. Votre chauffeur vous récupère au retour de navette.',
          en: 'Drop-off at the Saltholmen pier, then a ferry to Styrsö or Vrångö, car-free islands of heather paths and swimming coves. Your chauffeur collects you when the boat returns.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Volvo, l’épopée industrielle', en: 'Volvo, an industrial saga' },
        teaser: {
          fr: 'Le World of Volvo, inauguré en 2024 près du Liseberg, retrace un siècle d’automobile suédoise ; en complément, le site historique de Torslanda. Une demi-journée entre design scandinave et ingénierie.',
          en: 'World of Volvo, opened in 2024 beside Liseberg, traces a century of Swedish motoring; add the historic Torslanda plant district. Half a day of Scandinavian design and engineering.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Château de Tjolöholm et Kungsbacka', en: 'Tjolöholm Castle and Kungsbacka' },
        teaser: {
          fr: 'À 40 km au sud, le manoir Arts and Crafts de Tjolöholm posé sur son fjord, décor du Melancholia de Lars von Trier, son village ouvrier et son parc en bord de mer. Retour par la côte du Halland.',
          en: '40 km south, the Arts and Crafts manor of Tjolöholm on its fjord — the setting of Lars von Trier’s Melancholia — with its workers’ village and seaside park. Return along the Halland coast.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Soirée gastronomique à Göteborg', en: 'Gothenburg gourmet evening' },
        teaser: {
          fr: 'Dîner chez Koka ou SK Mat & Människor, étoilés Michelin, ou huîtres à la Feskekörka, puis le port illuminé, la Lipstick de Läppstiftet et les quais de l’avenue. Véhicule à disposition toute la soirée.',
          en: 'Dinner at Michelin-starred Koka or SK Mat & Människor, or oysters at the Feskekörka, then the illuminated harbour, the Läppstiftet “Lipstick” tower and the Avenyn. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Landvetter et le centre de Göteborg ?',
          en: 'How much does a transfer between Landvetter Airport and central Gothenburg cost?',
        },
        a: {
          fr: 'Le transfert privé entre Göteborg-Landvetter (GOT) et le centre-ville — 25 km, 25 à 30 minutes — est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Gothenburg-Landvetter (GOT) and the city centre — 25 km, 25 to 30 minutes — is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer un trajet longue distance vers Oslo, Malmö ou Copenhague ?',
          en: 'Can you handle long-distance journeys to Oslo, Malmö or Copenhagen?',
        },
        a: {
          fr: 'Oui. Göteborg est à mi-chemin des grandes villes scandinaves : Oslo et Malmö se rejoignent en moins de trois heures par l’E6, Copenhague en un peu plus de trois heures via le pont de l’Øresund. Chaque trajet est devisé à l’avance, à prix fixe, pauses comprises.',
          en: 'Yes. Gothenburg sits midway between the major Scandinavian cities: Oslo and Malmö are under three hours away on the E6, Copenhagen just over three hours via the Øresund Bridge. Every journey is quoted in advance at a fixed price, breaks included.',
        },
      },
      {
        q: {
          fr: 'Une excursion sur la côte du Bohuslän est-elle possible en une journée ?',
          en: 'Is a Bohuslän coast excursion feasible in a single day?',
        },
        a: {
          fr: 'Oui. Marstrand est à 45 minutes du centre, Fjällbacka et Smögen à environ une heure trente. Votre chauffeur compose l’itinéraire selon vos envies — forteresse, villages de pêcheurs, déjeuner de fruits de mer — et vous ramène à Göteborg en fin de journée.',
          en: 'Yes. Marstrand is 45 minutes from the centre, Fjällbacka and Smögen roughly an hour and a half. Your chauffeur shapes the route to your wishes — fortress, fishing villages, seafood lunch — and returns you to Gothenburg by evening.',
        },
      },
    ],
    nearby: ['malmo', 'copenhagen', 'oslo', 'stockholm'],
  },
  {
    slug: 'malmo',
    name: { fr: 'Malmö', en: 'Malmö' },
    country: { fr: 'Suède', en: 'Sweden' },
    region: 'dach-nordics',
    airport: 'Malmö-Sturup (MMX)',
    airportTransfer: {
      fr: 'L’aéroport de Malmö-Sturup (MMX) est à 28 km à l’est du centre : comptez 25 à 30 minutes jusqu’à la place Stortorget. Beaucoup de voyageurs arrivent aussi par Copenhague-Kastrup (CPH), à 40 minutes via le pont de l’Øresund. Dans les deux cas, votre chauffeur vous accueille avec panneau nominatif et suit votre vol.',
      en: 'Malmö-Sturup Airport (MMX) lies 28 km east of the centre: allow 25 to 30 minutes to reach Stortorget square. Many travellers also arrive via Copenhagen-Kastrup (CPH), 40 minutes away across the Øresund Bridge. Either way, your chauffeur greets you with a name board and tracks your flight.',
    },
    intro: {
      fr: [
        'Troisième ville de Suède et capitale de la Scanie, Malmö regarde Copenhague de l’autre côté du détroit : places hanséatiques de Stortorget et Lilla Torg, château Renaissance de Malmöhus, tour Turning Torso signée Calatrava et front de mer de Västra Hamnen. Votre **chauffeur privé à Malmö** assure les transferts depuis Sturup et Kastrup, les trajets d’affaires vers Lund et Copenhague, les soirées et les excursions, à prix fixe annoncé d’avance.',
        'La Scanie déroule autour de Malmö une campagne de châteaux et de côtes : **Lund et sa cathédrale romane** à 20 minutes, Ystad la ville de l’inspecteur Wallander, l’alignement mégalithique d’Ales Stenar au-dessus de la Baltique, les plages de Falsterbo au sud. Grâce au pont de l’Øresund, Copenhague devient un prolongement naturel de votre séjour, formalités gérées par votre chauffeur.',
      ],
      en: [
        'Sweden’s third city and the capital of Scania, Malmö faces Copenhagen across the strait: the Hanseatic squares of Stortorget and Lilla Torg, the Renaissance castle of Malmöhus, Calatrava’s Turning Torso tower and the Västra Hamnen waterfront. Your **private chauffeur in Malmö** covers transfers from Sturup and Kastrup, business runs to Lund and Copenhagen, evenings out and excursions, at a fixed price confirmed in advance.',
        'Around Malmö, Scania unrolls a countryside of castles and coastlines: **Lund and its Romanesque cathedral** 20 minutes away, Ystad of Inspector Wallander fame, the megalithic ship setting of Ales Stenar above the Baltic, and the beaches of Falsterbo to the south. Thanks to the Øresund Bridge, Copenhagen becomes a natural extension of your stay, with formalities handled by your chauffeur.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Copenhague par le pont de l’Øresund', en: 'Copenhagen across the Øresund Bridge' },
        teaser: {
          fr: 'Les 16 km du pont-tunnel jusqu’au Danemark : Nyhavn, Amalienborg et la Petite Sirène, ou une soirée aux jardins de Tivoli. Péage et passage de frontière gérés, retour à Malmö à l’heure que vous fixez.',
          en: 'The 16 km bridge-tunnel into Denmark: Nyhavn, Amalienborg and the Little Mermaid, or an evening at the Tivoli Gardens. Toll and border crossing handled, return to Malmö whenever you decide.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '590',
      },
      {
        title: { fr: 'Lund, cathédrale et université', en: 'Lund, cathedral and university' },
        teaser: {
          fr: 'À 20 minutes de Malmö, la cathédrale romane et son horloge astronomique du XVe siècle, l’université fondée en 1666, le musée à ciel ouvert de Kulturen et les ruelles pavées du centre médiéval.',
          en: '20 minutes from Malmö, the Romanesque cathedral with its 15th-century astronomical clock, the university founded in 1666, the Kulturen open-air museum and the cobbled lanes of the medieval centre.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Ystad et Ales Stenar', en: 'Ystad and Ales Stenar' },
        teaser: {
          fr: 'La ville à colombages de l’inspecteur Wallander, ses ruelles médiévales et son monastère franciscain, puis les 59 pierres dressées d’Ales Stenar en surplomb de la Baltique, à Kåseberga. Retour par la côte.',
          en: 'Inspector Wallander’s half-timbered town, its medieval lanes and Franciscan friary, then the 59 standing stones of Ales Stenar above the Baltic at Kåseberga. Return along the coast.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Châteaux de Scanie', en: 'Castles of Scania' },
        teaser: {
          fr: 'Sofiero et ses rhododendrons face au détroit, résidence d’été des rois de Suède, puis le château Renaissance de Vittskövle ou les jardins de Norrviken. La campagne scanienne entre deux mers.',
          en: 'Sofiero and its rhododendrons overlooking the strait, once the summer residence of Sweden’s kings, then the Renaissance castle of Vittskövle or the Norrviken gardens. Scanian countryside between two seas.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée à Lilla Torg', en: 'Lilla Torg evening' },
        teaser: {
          fr: 'Dîner chez Vollmers, deux étoiles Michelin, ou sur les terrasses de Lilla Torg, puis le front de mer de Västra Hamnen et la Turning Torso illuminée. Dépose devant chaque adresse, véhicule en attente.',
          en: 'Dinner at two-starred Vollmers or on the terraces of Lilla Torg, then the Västra Hamnen waterfront and the illuminated Turning Torso. Door-to-door drop-offs, vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport et le centre de Malmö ?',
          en: 'How much does a transfer between the airport and central Malmö cost?',
        },
        a: {
          fr: 'Le transfert privé entre Malmö-Sturup (MMX) et le centre-ville — 28 km, 25 à 30 minutes — est facturé à prix fixe, confirmé à la réservation, accueil avec panneau nominatif et suivi du vol inclus. Le transfert depuis Copenhague-Kastrup, péage de l’Øresund compris, est également proposé à prix fixe.',
          en: 'A private transfer between Malmö-Sturup (MMX) and the city centre — 28 km, 25 to 30 minutes — is charged at a fixed price, confirmed at booking, with name-board meet-and-greet and flight tracking included. Transfers from Copenhagen-Kastrup, Øresund toll included, are also offered at a fixed price.',
        },
      },
      {
        q: {
          fr: 'Vaut-il mieux atterrir à Copenhague ou à Malmö-Sturup ?',
          en: 'Is it better to land in Copenhagen or at Malmö-Sturup?',
        },
        a: {
          fr: 'Copenhague-Kastrup offre bien plus de liaisons internationales et n’est qu’à 40 minutes de Malmö par le pont de l’Øresund ; Sturup, plus proche, dessert surtout des lignes intérieures et européennes. Nous assurons les deux, à prix fixe, avec suivi du vol dans les deux aéroports.',
          en: 'Copenhagen-Kastrup offers far more international connections and is only 40 minutes from Malmö via the Øresund Bridge; Sturup, though closer, mainly handles domestic and European routes. We serve both, at fixed prices, with flight tracking at either airport.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Malmö, Lund et Copenhague dans la même journée ?',
          en: 'Can Malmö, Lund and Copenhagen be combined in a single day?',
        },
        a: {
          fr: 'Oui. Lund est à 20 minutes de Malmö et Copenhague à 40 minutes par le pont : une journée en mise à disposition permet la cathédrale de Lund le matin, le vieux Malmö à midi et Nyhavn en fin d’après-midi. Votre chauffeur gère péage, frontière et stationnements.',
          en: 'Yes. Lund is 20 minutes from Malmö and Copenhagen 40 minutes across the bridge: a full-day hire covers Lund cathedral in the morning, old Malmö at midday and Nyhavn in the late afternoon. Your chauffeur handles the toll, the border and parking.',
        },
      },
    ],
    nearby: ['copenhagen', 'gothenburg', 'aarhus'],
  },
  {
    slug: 'oslo',
    name: { fr: 'Oslo', en: 'Oslo' },
    country: { fr: 'Norvège', en: 'Norway' },
    region: 'dach-nordics',
    airport: 'Oslo-Gardermoen (OSL)',
    airportTransfer: {
      fr: 'L’aéroport d’Oslo-Gardermoen (OSL) se trouve à 50 km au nord-est de la capitale : comptez 40 à 45 minutes par l’E6 jusqu’à Karl Johans gate ou au quartier d’Aker Brygge. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Oslo-Gardermoen Airport (OSL) lies 50 km north-east of the capital: allow 40 to 45 minutes along the E6 to reach Karl Johans gate or the Aker Brygge district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Adossée à la forêt et ouverte sur son fjord, Oslo conjugue l’Opéra de marbre blanc surgissant de l’eau, le nouveau Musée national, le MUNCH de Bjørvika et les quartiers d’affaires d’Aker Brygge. Votre **chauffeur privé à Oslo** assure les transferts depuis Gardermoen, les mises à disposition pour vos conseils d’administration ou vos tournages, les soirées à l’Opéra, en berline électrique ou van premium — la Norvège roule à l’électrique, nous aussi.',
        'La capitale norvégienne est un camp de base idéal : **le tremplin de Holmenkollen** domine la ville à vingt minutes du centre, la péninsule de Bygdøy réunit les musées du Fram et du Kon-Tiki, et le fjord d’Oslo s’égrène vers Drøbak. Plus loin, Lillehammer et le lac Mjøsa se rejoignent en deux heures ; votre chauffeur compose l’itinéraire et gère péages urbains et traversées.',
      ],
      en: [
        'Backed by forest and open to its fjord, Oslo combines the white-marble Opera House rising from the water, the new National Museum, the MUNCH in Bjørvika and the business district of Aker Brygge. Your **private chauffeur in Oslo** handles transfers from Gardermoen, hourly hire for board meetings or film shoots, and evenings at the Opera, in an electric sedan or premium van — Norway drives electric, and so do we.',
        'The Norwegian capital is an ideal base camp: **the Holmenkollen ski jump** overlooks the city twenty minutes from the centre, the Bygdøy peninsula gathers the Fram and Kon-Tiki museums, and the Oslofjord unwinds towards Drøbak. Further out, Lillehammer and Lake Mjøsa are two hours away; your chauffeur shapes the route and handles urban tolls and crossings.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Bygdøy, la presqu’île des musées', en: 'Bygdøy, the museum peninsula' },
        teaser: {
          fr: 'Le navire polaire Fram, le radeau Kon-Tiki de Thor Heyerdahl et le musée du folklore norvégien avec sa stavkirke de Gol, sur une presqu’île à dix minutes du centre. Dépose à chaque entrée, véhicule en attente.',
          en: 'The polar ship Fram, Thor Heyerdahl’s Kon-Tiki raft and the Norwegian Folk Museum with its Gol stave church, on a peninsula ten minutes from the centre. Drop-off at each entrance, vehicle on standby.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Holmenkollen et la forêt d’Oslo', en: 'Holmenkollen and the Oslo forest' },
        teaser: {
          fr: 'Le tremplin mythique et son musée du ski, le plus ancien au monde, la vue sur le fjord depuis la tour, puis les collines de la Nordmarka et le belvédère de Frognerseteren. Oslo vue d’en haut.',
          en: 'The legendary ski jump and its ski museum, the oldest in the world, the fjord view from the tower, then the Nordmarka hills and the Frognerseteren lookout. Oslo from above.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Fjord d’Oslo et Drøbak', en: 'The Oslofjord and Drøbak' },
        teaser: {
          fr: 'La rive est du fjord jusqu’à Drøbak, village de bois aux galeries d’artistes face à la forteresse d’Oscarsborg, qui coula le croiseur Blücher en 1940. Déjeuner de crevettes sur le port, retour par la rive ouest.',
          en: 'The eastern shore of the fjord down to Drøbak, a wooden village of artists’ galleries facing Oscarsborg fortress, which sank the cruiser Blücher in 1940. Shrimp lunch on the harbour, return via the west bank.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Lillehammer et le lac Mjøsa', en: 'Lillehammer and Lake Mjøsa' },
        teaser: {
          fr: 'À deux heures au nord, la ville des Jeux de 1994 : tremplin de Lysgårdsbakken, musée à ciel ouvert de Maihaugen et rues de bois de Storgata, le long du plus grand lac de Norvège. L’hiver norvégien en une journée.',
          en: 'Two hours north, the host town of the 1994 Games: the Lysgårdsbakken jump, the Maihaugen open-air museum and the wooden Storgata street, along Norway’s largest lake. Norwegian winter heritage in a day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Soirée à Bjørvika', en: 'Bjørvika evening' },
        teaser: {
          fr: 'Dîner chez Maaemo — trois étoiles — ou sur les quais d’Aker Brygge, puis l’Opéra dont on arpente le toit de marbre, la bibliothèque Deichman et le MUNCH illuminés. Retour à votre hôtel sans contrainte.',
          en: 'Dinner at three-starred Maaemo or on the Aker Brygge quays, then the Opera House with its walkable marble roof, the Deichman library and the MUNCH lit up. Effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Oslo-Gardermoen et le centre-ville ?',
          en: 'How much does a transfer between Oslo-Gardermoen and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Gardermoen (OSL) et le centre d’Oslo — 50 km, 40 à 45 minutes — est facturé à prix fixe, confirmé à la réservation, péages urbains inclus. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol et attente offerte en cas de retard.',
          en: 'A private transfer between Gardermoen (OSL) and central Oslo — 50 km, 40 to 45 minutes — is charged at a fixed price, confirmed at booking, urban tolls included. Name-board meet-and-greet in arrivals, flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Vos véhicules sont-ils électriques à Oslo ?',
          en: 'Are your Oslo vehicles electric?',
        },
        a: {
          fr: 'En grande partie, oui. Oslo privilégie fortement l’électrique — péages réduits, voies dédiées — et notre flotte locale compte berlines et SUV électriques premium ainsi que des vans hybrides pour les groupes. Précisez votre préférence à la réservation.',
          en: 'Largely, yes. Oslo strongly favours electric driving — reduced tolls, dedicated lanes — and our local fleet includes premium electric sedans and SUVs alongside hybrid vans for groups. State your preference at booking.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Bergen ou les fjords de l’Ouest par la route depuis Oslo ?',
          en: 'Can I reach Bergen or the western fjords by road from Oslo?',
        },
        a: {
          fr: 'Oui, c’est l’un des plus beaux trajets d’Europe : environ 7 heures par la montagne de la Hardangervidda ou la route de Valdres, cascades et hauts plateaux compris. Nous le proposons en une journée avec arrêts, ou en deux jours avec nuit à Flåm ou Geilo.',
          en: 'Yes, and it is one of Europe’s finest drives: around 7 hours across the Hardangervidda plateau or the Valdres route, waterfalls and high moors included. We offer it as a full day with stops, or over two days with a night in Flåm or Geilo.',
        },
      },
    ],
    nearby: ['bergen', 'gothenburg', 'stockholm', 'stavanger'],
  },
  {
    slug: 'bergen',
    name: { fr: 'Bergen', en: 'Bergen' },
    country: { fr: 'Norvège', en: 'Norway' },
    region: 'dach-nordics',
    airport: 'Bergen-Flesland (BGO)',
    airportTransfer: {
      fr: 'L’aéroport de Bergen-Flesland (BGO) est à 18 km au sud-ouest du centre : comptez 25 à 30 minutes jusqu’au quai hanséatique de Bryggen ou au marché aux poissons. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Bergen-Flesland Airport (BGO) lies 18 km south-west of the centre: allow 25 to 30 minutes to reach the Hanseatic wharf of Bryggen or the fish market. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ancienne capitale hanséatique serrée entre sept montagnes et la mer du Nord, Bergen déploie les façades de bois de Bryggen, classées à l’UNESCO, son marché aux poissons et le funiculaire du Fløyen. Votre **chauffeur privé à Bergen** assure les transferts depuis Flesland, les liaisons avec les terminaux de croisière et l’embarcadère du Hurtigruten, les mises à disposition à l’heure — utile dans une ville où il pleut plus de 200 jours par an.',
        'Bergen est surtout la porte des fjords de l’Ouest : **le Hardangerfjord et ses vergers** commencent à une heure de route, le Sognefjord — le plus long de Norvège — se rejoint par Flåm et son chemin de fer de montagne, et les cascades de Steinsdalsfossen ou de Vøringsfossen jalonnent les itinéraires. Votre chauffeur enchaîne routes panoramiques, ferries et arrêts photo sans que vous consultiez un horaire.',
      ],
      en: [
        'A former Hanseatic capital wedged between seven mountains and the North Sea, Bergen unfolds the UNESCO-listed wooden façades of Bryggen, its fish market and the Fløyen funicular. Your **private chauffeur in Bergen** covers transfers from Flesland, connections to the cruise terminals and the Hurtigruten pier, and hourly hire — invaluable in a city where it rains more than 200 days a year.',
        'Above all, Bergen is the gateway to the western fjords: **the Hardangerfjord and its orchards** begin an hour away, the Sognefjord — Norway’s longest — is reached via Flåm and its mountain railway, and the Steinsdalsfossen and Vøringsfossen waterfalls punctuate the routes. Your chauffeur strings together scenic roads, ferries and photo stops without you ever checking a timetable.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Hardangerfjord et Vøringsfossen', en: 'Hardangerfjord and Vøringsfossen' },
        teaser: {
          fr: 'Le fjord des vergers au moment des pommiers en fleurs ou des récoltes de cidre, le pont suspendu du Hardanger, puis la chute de Vøringsfossen plongeant de 182 mètres dans la vallée de Måbødalen.',
          en: 'The orchard fjord at blossom time or during the cider harvest, the Hardanger suspension bridge, then the Vøringsfossen falls plunging 182 metres into the Måbødalen valley.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '990',
      },
      {
        title: { fr: 'Flåm et le Sognefjord', en: 'Flåm and the Sognefjord' },
        teaser: {
          fr: 'Route vers Flåm par le tunnel de Lærdal ou la vallée de Voss, embarquement pour la croisière du Nærøyfjord — bras du Sognefjord classé à l’UNESCO — ou montée par le train de Flåm. Votre chauffeur vous attend à quai.',
          en: 'Drive to Flåm via the Lærdal tunnel or the Voss valley, then board the Nærøyfjord cruise — a UNESCO-listed arm of the Sognefjord — or ride the Flåm railway. Your chauffeur waits at the quay.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1100',
      },
      {
        title: { fr: 'Bryggen et le mont Fløyen', en: 'Bryggen and Mount Fløyen' },
        teaser: {
          fr: 'Les ruelles de bois du quai hanséatique et le musée Hanséatique, le marché aux poissons, puis la montée au Fløyen — en funiculaire ou par la route — pour la vue sur les sept montagnes et le port.',
          en: 'The wooden lanes of the Hanseatic wharf and the Hanseatic Museum, the fish market, then up Mount Fløyen — by funicular or by road — for the view over the seven mountains and the harbour.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Troldhaugen et la villa d’Edvard Grieg', en: 'Troldhaugen, Edvard Grieg’s villa' },
        teaser: {
          fr: 'À 15 minutes du centre, la maison du compositeur au bord du lac Nordås, sa cabane de travail et les récitals de midi dans la salle Troldsalen. En complément, la stavkirke reconstruite de Fantoft.',
          en: '15 minutes from the centre, the composer’s home beside Lake Nordås, his lakeside composing hut and the lunchtime recitals in the Troldsalen hall. Add the rebuilt Fantoft stave church nearby.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Route panoramique vers Voss', en: 'Scenic drive to Voss' },
        teaser: {
          fr: 'La vallée encaissée de Bordalsgjelet, les chutes de Tvindefossen droit tombées de la falaise, puis Voss, capitale norvégienne des sports outdoor, et retour par le fjord d’Osterfjorden. Une Norvège verticale.',
          en: 'The Bordalsgjelet gorge, the Tvindefossen falls dropping sheer off the cliff, then Voss, Norway’s outdoor sports capital, returning along the Osterfjorden. Norway at its most vertical.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Bergen-Flesland et le centre-ville ?',
          en: 'How much does a transfer between Bergen-Flesland and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Flesland (BGO) et le centre de Bergen — 18 km, 25 à 30 minutes — est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Flesland (BGO) and central Bergen — 18 km, 25 to 30 minutes — is charged at a fixed price, confirmed at booking. Name-board meet-and-greet in arrivals, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Les routes des fjords sont-elles praticables en hiver ?',
          en: 'Are the fjord roads passable in winter?',
        },
        a: {
          fr: 'Les axes principaux vers Voss, Flåm et le Hardangerfjord restent ouverts toute l’année, entretenus et déneigés ; certains cols d’altitude ferment ponctuellement. Nos véhicules sont équipés de pneus hiver nordiques et votre chauffeur adapte l’itinéraire aux conditions du jour.',
          en: 'The main routes to Voss, Flåm and the Hardangerfjord stay open year-round, maintained and cleared of snow; some high passes close occasionally. Our vehicles run on Nordic winter tyres and your chauffeur adapts the route to the day’s conditions.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers les navires de croisière et le Hurtigruten ?',
          en: 'Do you provide transfers to cruise ships and the Hurtigruten?',
        },
        a: {
          fr: 'Oui. Nous desservons les terminaux de Skolten et de Jekteviken ainsi que l’embarcadère du Hurtigruten, depuis Flesland ou votre hôtel, avec un horaire calé sur les consignes d’embarquement. Une excursion aux fjords avant l’appareillage est possible si votre escale le permet.',
          en: 'Yes. We serve the Skolten and Jekteviken terminals as well as the Hurtigruten pier, from Flesland or your hotel, timed to the boarding instructions. A fjord excursion before sailing is possible if your port call allows.',
        },
      },
    ],
    nearby: ['stavanger', 'oslo'],
  },
  {
    slug: 'stavanger',
    name: { fr: 'Stavanger', en: 'Stavanger' },
    country: { fr: 'Norvège', en: 'Norway' },
    region: 'dach-nordics',
    airport: 'Stavanger-Sola (SVG)',
    airportTransfer: {
      fr: 'L’aéroport de Stavanger-Sola (SVG) se trouve à 14 km au sud-ouest du centre : comptez 20 minutes jusqu’au vieux port de Vågen ou aux maisons blanches de Gamle Stavanger. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Stavanger-Sola Airport (SVG) lies 14 km south-west of the centre: allow 20 minutes to reach the old harbour of Vågen or the white wooden houses of Gamle Stavanger. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale norvégienne de l’énergie, Stavanger aligne les 173 maisons de bois blanc de Gamle Stavanger, sa cathédrale du XIIe siècle et le musée du Pétrole posé sur le port. Votre **chauffeur privé à Stavanger** dessert les sièges d’Equinor et des compagnies de Forus, l’aéroport de Sola et les terminaux de croisière, comme les tables du quartier de Vågen — la ville compte plusieurs restaurants étoilés. Prix fixes, ponctualité, discrétion.',
        'La région du Ryfylke commence aux portes de la ville : **le Preikestolen**, falaise-plateforme suspendue 604 mètres au-dessus du Lysefjord, se rejoint en une heure de route, et le rocher coincé du Kjeragbolten couronne le fond du fjord. Vers le sud, la route côtière du Nordsjøvegen égrène plages de sable, phares et champs de pierre du Jæren. Votre chauffeur coordonne ferries, tunnels sous-marins et horaires de randonnée.',
      ],
      en: [
        'Norway’s energy capital, Stavanger lines up the 173 white wooden houses of Gamle Stavanger, its 12th-century cathedral and the Petroleum Museum set on the harbour. Your **private chauffeur in Stavanger** serves the Equinor headquarters and the Forus corporate district, Sola airport and the cruise terminals, as well as the restaurants of Vågen — the city holds several Michelin stars. Fixed prices, punctuality, discretion.',
        'The Ryfylke region begins at the city gates: **Preikestolen (Pulpit Rock)**, a cliff platform hanging 604 metres above the Lysefjord, is an hour’s drive away, and the wedged boulder of Kjeragbolten crowns the head of the fjord. To the south, the Nordsjøvegen coastal road strings together sandy beaches, lighthouses and the stone fields of Jæren. Your chauffeur coordinates ferries, subsea tunnels and hiking schedules.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Preikestolen, le Rocher de la Chaire', en: 'Preikestolen, Pulpit Rock' },
        teaser: {
          fr: 'Transfert matinal au départ du sentier de Preikestolen Fjellstue, 4 heures de marche aller-retour vers la plateforme à 604 mètres au-dessus du Lysefjord. Votre chauffeur vous attend au parking, collation au retour.',
          en: 'Early transfer to the Preikestolen Fjellstue trailhead, a 4-hour round-trip hike to the platform 604 metres above the Lysefjord. Your chauffeur waits at the car park, refreshments on your return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Croisière sur le Lysefjord', en: 'Lysefjord cruise' },
        teaser: {
          fr: 'Embarquement au port de Vågen pour trois heures de fjord : la falaise du Preikestolen vue d’en bas, la grotte de Vagabond, les chutes d’Hengjanefossen. Transferts et billets coordonnés par votre chauffeur.',
          en: 'Board at Vågen harbour for three hours on the fjord: Pulpit Rock seen from below, the Vagabond cave, the Hengjanefossen falls. Transfers and tickets coordinated by your chauffeur.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Route côtière du Nordsjøvegen', en: 'The Nordsjøvegen coastal road' },
        teaser: {
          fr: 'Les plages de sable de Sola et d’Orre, le phare et le vieux village d’Obrestad, les paysages de pierre du Jæren chers aux peintres norvégiens, jusqu’à Egersund. La mer du Nord en majesté.',
          en: 'The sandy beaches of Sola and Orre, the lighthouse and old farmstead at Obrestad, the stone landscapes of Jæren beloved of Norwegian painters, down to Egersund. The North Sea at its grandest.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Gamle Stavanger et musée du Pétrole', en: 'Gamle Stavanger and the Petroleum Museum' },
        teaser: {
          fr: 'Les ruelles pavées et les 173 maisons blanches du vieux Stavanger, la cathédrale de 1125, puis le musée norvégien du Pétrole et son architecture de plateforme offshore. La saga de l’or noir norvégien.',
          en: 'The cobbled lanes and 173 white houses of old Stavanger, the cathedral of 1125, then the Norwegian Petroleum Museum with its offshore-platform architecture. The saga of Norway’s black gold.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Fjords du Ryfylke et Kjerag', en: 'Ryfylke fjords and Kjerag' },
        teaser: {
          fr: 'La route touristique nationale du Ryfylke jusqu’à Lysebotn, au fond du Lysefjord : 27 lacets, le belvédère de Kjerag et, pour les marcheurs aguerris, le rocher suspendu du Kjeragbolten à 984 mètres.',
          en: 'The Ryfylke national scenic route to Lysebotn at the head of the Lysefjord: 27 hairpins, the Kjerag viewpoint and, for seasoned hikers, the Kjeragbolten boulder wedged at 984 metres.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '990',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Stavanger-Sola et le centre-ville ?',
          en: 'How much does a transfer between Stavanger-Sola and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Sola (SVG) et le centre de Stavanger — 14 km, 20 minutes environ — est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Sola (SVG) and central Stavanger — 14 km, around 20 minutes — is charged at a fixed price, confirmed at booking. Name-board meet-and-greet in arrivals, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Comment se rend-on au départ de la randonnée du Preikestolen ?',
          en: 'How do I reach the Preikestolen trailhead?',
        },
        a: {
          fr: 'Depuis le centre de Stavanger, comptez environ une heure de route par le tunnel sous-marin du Ryfylke jusqu’au parking de Preikestolen Fjellstue. Votre chauffeur vous dépose au départ du sentier, attend pendant les 4 heures de marche et adapte l’horaire à la météo et à l’affluence.',
          en: 'From central Stavanger, allow about an hour via the Ryfylke subsea tunnel to the Preikestolen Fjellstue car park. Your chauffeur drops you at the trailhead, waits during the 4-hour hike and adjusts the schedule to the weather and the crowds.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Bergen depuis Stavanger par la route ?',
          en: 'Can I travel from Stavanger to Bergen by road?',
        },
        a: {
          fr: 'Oui. La route côtière E39 relie Stavanger à Bergen en 4 h 30 à 5 heures, ferries et tunnels sous-marins compris — dont le Boknafjord, plus long tunnel routier sous-marin au monde. Le trajet est devisé à prix fixe, arrêts panoramiques inclus.',
          en: 'Yes. The E39 coastal road links Stavanger to Bergen in 4.5 to 5 hours, ferries and subsea tunnels included — among them the Boknafjord, the world’s longest subsea road tunnel. The journey is quoted at a fixed price, scenic stops included.',
        },
      },
    ],
    nearby: ['bergen', 'oslo'],
  },
  {
    slug: 'helsinki',
    name: { fr: 'Helsinki', en: 'Helsinki' },
    country: { fr: 'Finlande', en: 'Finland' },
    region: 'dach-nordics',
    airport: 'Helsinki-Vantaa (HEL)',
    airportTransfer: {
      fr: 'L’aéroport d’Helsinki-Vantaa (HEL) se trouve à 19 km au nord du centre : comptez 25 à 30 minutes jusqu’à la place du Sénat ou à l’esplanade d’Esplanadi. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Helsinki-Vantaa Airport (HEL) lies 19 km north of the centre: allow 25 to 30 minutes to reach Senate Square or the Esplanadi promenade. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale la plus septentrionale de l’Union européenne, Helsinki marie le néoclassicisme blanc de la place du Sénat, l’Art nouveau de Katajanokka et le design finlandais d’Esplanadi, entre deux embarcadères de la Baltique. Votre **chauffeur privé à Helsinki** relie Vantaa, les terminaux des ferries pour Tallinn et Stockholm, les sièges de Keilaniemi à Espoo et les tables étoilées du centre, en berline ou van premium, à prix fixe confirmé d’avance.',
        'Autour de la capitale, la Finlande se donne vite : **Porvoo et ses entrepôts rouges** au bord de sa rivière se rejoignent en 50 minutes, la forteresse maritime de Suomenlinna est à quinze minutes de ferry du marché, et le parc national de Nuuksio ouvre lacs et forêts boréales à 40 minutes du centre. Votre chauffeur compose l’itinéraire, sauna au bord du lac compris si vous le souhaitez.',
      ],
      en: [
        'The European Union’s northernmost capital, Helsinki pairs the white neoclassicism of Senate Square, the Art Nouveau of Katajanokka and the Finnish design of Esplanadi, between two Baltic ferry piers. Your **private chauffeur in Helsinki** links Vantaa, the ferry terminals for Tallinn and Stockholm, the Keilaniemi headquarters in Espoo and the starred tables of the centre, in a premium sedan or van, at a fixed price confirmed in advance.',
        'Around the capital, Finland reveals itself quickly: **Porvoo and its red riverside warehouses** are 50 minutes away, the sea fortress of Suomenlinna is a fifteen-minute ferry ride from the market square, and Nuuksio National Park opens boreal lakes and forests 40 minutes from the centre. Your chauffeur shapes the itinerary — lakeside sauna included if you wish.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Porvoo, la ville de bois', en: 'Porvoo, the wooden town' },
        teaser: {
          fr: 'À 50 km à l’est, la deuxième plus ancienne ville de Finlande : entrepôts rouge ocre au bord de la Porvoonjoki, cathédrale médiévale, boutiques d’artisans et la fabrique de chocolat Brunberg. Retour par la vieille route royale.',
          en: '50 km east, Finland’s second-oldest town: ochre-red warehouses along the Porvoonjoki river, a medieval cathedral, artisan boutiques and the Brunberg chocolate factory. Return along the old King’s Road.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Suomenlinna, forteresse des mers', en: 'Suomenlinna sea fortress' },
        teaser: {
          fr: 'Dépose au marché de Kauppatori puis quinze minutes de ferry vers la forteresse du XVIIIe siècle classée à l’UNESCO, ses remparts, ses tunnels et le sous-marin Vesikko. Votre chauffeur vous récupère à quai au retour.',
          en: 'Drop-off at the Kauppatori market square, then a fifteen-minute ferry to the UNESCO-listed 18th-century fortress, its ramparts, tunnels and the submarine Vesikko. Your chauffeur meets you back at the quay.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Nuuksio, lacs et forêts boréales', en: 'Nuuksio, boreal lakes and forests' },
        teaser: {
          fr: 'À 40 minutes du centre, le parc national de Nuuksio : sentiers entre pins et lacs, chalet finlandais Haltia consacré à la nature nordique, et sauna au feu de bois avec baignade dans le lac en option.',
          en: '40 minutes from the centre, Nuuksio National Park: trails through pines and lakes, the Haltia nature centre devoted to the Nordic wilderness, and an optional wood-fired sauna with a lake swim.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Helsinki, capitale du design', en: 'Helsinki, capital of design' },
        teaser: {
          fr: 'Le Design District et ses ateliers, les maisons Marimekko, Iittala et Artek, la chapelle du Silence de Kamppi et la bibliothèque Oodi, puis l’église creusée dans le roc de Temppeliaukio. Dépose à chaque adresse.',
          en: 'The Design District and its studios, the Marimekko, Iittala and Artek houses, the Kamppi Chapel of Silence and the Oodi library, then the rock-hewn Temppeliaukio church. Door-to-door drop-offs.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Soirée sauna et gastronomie', en: 'Sauna and gourmet evening' },
        teaser: {
          fr: 'Sauna contemporain de Löyly sur le front de mer ou bains historiques de Kotiharju, puis dîner dans une table étoilée du centre — Palace au-dessus du port ou Olo. Retour à votre hôtel sans contrainte.',
          en: 'The contemporary Löyly sauna on the waterfront or the historic Kotiharju baths, then dinner at a starred table — Palace above the harbour, or Olo. Effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Helsinki-Vantaa et le centre-ville ?',
          en: 'How much does a transfer between Helsinki-Vantaa and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Vantaa (HEL) et le centre d’Helsinki — 19 km, 25 à 30 minutes — est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Vantaa (HEL) and central Helsinki — 19 km, 25 to 30 minutes — is charged at a fixed price, confirmed at booking. Name-board meet-and-greet in arrivals, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers les terminaux de ferry pour Tallinn ou Stockholm ?',
          en: 'Do you provide transfers to the ferry terminals for Tallinn or Stockholm?',
        },
        a: {
          fr: 'Oui. Nous desservons les terminaux de Katajanokka, d’Olympia et de Länsisatama (West Harbour), depuis Vantaa ou votre hôtel, avec un horaire calé sur l’embarquement de votre compagnie — Viking Line, Tallink Silja ou Finnlines. Les bagages sont pris en charge de porte à porte.',
          en: 'Yes. We serve the Katajanokka, Olympia and Länsisatama (West Harbour) terminals, from Vantaa or your hotel, timed to your line’s boarding — Viking Line, Tallink Silja or Finnlines. Luggage is handled door to door.',
        },
      },
      {
        q: {
          fr: 'Helsinki est-elle praticable en plein hiver ?',
          en: 'Is Helsinki manageable in the depths of winter?',
        },
        a: {
          fr: 'Parfaitement. La ville vit normalement par −15 °C, routes déneigées et véhicules équipés de pneus hiver nordiques. Un chauffeur privé prend tout son sens en cette saison : véhicule tempéré qui vous attend devant chaque adresse, trajets sans marche sur la glace, horaires souples.',
          en: 'Perfectly. The city runs normally at −15 °C, with cleared roads and vehicles on Nordic winter tyres. A private chauffeur makes particular sense in this season: a heated car waiting outside every address, no walking on ice, flexible timings.',
        },
      },
    ],
    nearby: ['stockholm', 'oslo', 'copenhagen'],
  },
  {
    slug: 'aarhus',
    name: { fr: 'Aarhus', en: 'Aarhus' },
    country: { fr: 'Danemark', en: 'Denmark' },
    region: 'dach-nordics',
    airport: 'Aarhus-Tirstrup (AAR)',
    airportTransfer: {
      fr: 'L’aéroport d’Aarhus (AAR), situé à Tirstrup, est à 36 km au nord-est du centre : comptez 40 minutes jusqu’au quartier latin ou au port de Dokk1. L’aéroport de Billund (BLL), à 95 km, est également desservi. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Aarhus Airport (AAR), located at Tirstrup, lies 36 km north-east of the centre: allow 40 minutes to reach the Latin Quarter or the Dokk1 harbour front. Billund Airport (BLL), 95 km away, is also served. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Deuxième ville du Danemark et capitale du Jutland, Aarhus conjugue le panorama arc-en-ciel de l’ARoS, la ville historique reconstituée de Den Gamle By, la cathédrale gothique la plus longue du pays et le front de port réinventé autour de Dokk1. Votre **chauffeur privé à Aarhus** assure les transferts depuis Tirstrup et Billund, les déplacements d’affaires vers les sièges de Vestas ou d’Arla, les soirées dans le quartier latin, à prix fixe et sans surprise.',
        'Le Jutland de l’Est se prête aux échappées : **le musée Moesgaard** et son homme de Grauballe vieux de 2 300 ans est à un quart d’heure, les collines du parc national de Mols Bjerge et le château de Rosenholm ponctuent la péninsule du Djursland, et Legoland Billund se rejoint en une heure. Les lacs de Silkeborg et la colline de Himmelbjerget complètent l’itinéraire ; votre chauffeur le compose à votre rythme.',
      ],
      en: [
        'Denmark’s second city and the capital of Jutland, Aarhus combines the rainbow panorama of ARoS, the reconstructed old town of Den Gamle By, the country’s longest Gothic cathedral and a harbour front reinvented around Dokk1. Your **private chauffeur in Aarhus** covers transfers from Tirstrup and Billund, business travel to the Vestas and Arla headquarters, and evenings in the Latin Quarter, at a fixed price with no surprises.',
        'Eastern Jutland invites excursions: **the Moesgaard Museum** and its 2,300-year-old Grauballe Man is fifteen minutes away, the hills of Mols Bjerge National Park and Rosenholm Castle punctuate the Djursland peninsula, and Legoland Billund is an hour’s drive. The Silkeborg lakes and the Himmelbjerget hill round out the itinerary; your chauffeur composes it at your pace.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Den Gamle By et ARoS', en: 'Den Gamle By and ARoS' },
        teaser: {
          fr: 'La « vieille ville » reconstituée — 75 maisons danoises de 1550 à 1974, artisans en costume —, puis l’ARoS et le panorama circulaire Your Rainbow Panorama d’Olafur Eliasson au-dessus des toits.',
          en: 'The reconstructed “old town” — 75 Danish houses from 1550 to 1974, craftsmen in costume — then ARoS and Olafur Eliasson’s circular Your Rainbow Panorama above the rooftops.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Legoland et Billund', en: 'Legoland and Billund' },
        teaser: {
          fr: 'À une heure de route, le parc historique de la brique : Miniland et ses villes en Lego, puis la Lego House signée Bjarke Ingels dans la ville natale de la marque. Votre chauffeur attend à la sortie du parc.',
          en: 'An hour away, the original brick theme park: Miniland with its Lego cities, then the Bjarke Ingels-designed Lego House in the brand’s home town. Your chauffeur waits at the park exit.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Moesgaard et la baie d’Aarhus', en: 'Moesgaard and the Bay of Aarhus' },
        teaser: {
          fr: 'Le musée Moesgaard sous son toit de gazon incliné, l’homme de Grauballe et les trésors vikings, puis les plages et forêts de la baie jusqu’au château de Marselisborg, résidence d’été de la famille royale.',
          en: 'The Moesgaard Museum beneath its sloping grass roof, the Grauballe Man and Viking treasures, then the bay’s beaches and forests to Marselisborg Palace, the royal family’s summer residence.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Mols Bjerge et le Djursland', en: 'Mols Bjerge and Djursland' },
        teaser: {
          fr: 'Le parc national de Mols Bjerge et ses collines glaciaires face à la mer, le village portuaire d’Ebeltoft et sa frégate Jylland — le plus long navire de bois au monde —, puis le manoir Renaissance de Rosenholm.',
          en: 'Mols Bjerge National Park with its glacial hills above the sea, the harbour town of Ebeltoft and the frigate Jylland — the world’s longest wooden ship — then the Renaissance manor of Rosenholm.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Lacs de Silkeborg et Himmelbjerget', en: 'Silkeborg lakes and Himmelbjerget' },
        teaser: {
          fr: 'À 45 minutes à l’ouest, la région des lacs du Jutland : croisière possible sur le vapeur Hjejlen, montée à Himmelbjerget — la « montagne du ciel » danoise — et l’homme de Tollund au musée de Silkeborg.',
          en: '45 minutes west, Jutland’s lake district: an optional cruise on the paddle steamer Hjejlen, the climb to Himmelbjerget — Denmark’s “sky mountain” — and the Tollund Man at Silkeborg Museum.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport d’Aarhus et le centre-ville ?',
          en: 'How much does a transfer between Aarhus Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Aarhus-Tirstrup (AAR) et le centre-ville — 36 km, environ 40 minutes — est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus. Billund (BLL) est desservi aux mêmes conditions.',
          en: 'A private transfer between Aarhus-Tirstrup (AAR) and the city centre — 36 km, around 40 minutes — is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, real-time flight tracking and complimentary waiting time in case of delay are included. Billund (BLL) is served on the same terms.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Copenhague depuis Aarhus avec votre chauffeur ?',
          en: 'Can I travel from Aarhus to Copenhagen with your chauffeur?',
        },
        a: {
          fr: 'Oui. Copenhague se rejoint en environ 3 heures par l’E20 et le pont du Grand Belt, l’un des plus longs ponts suspendus du monde. Le trajet est devisé à prix fixe, péage du pont inclus, avec pause à Odense — la ville d’Andersen — sur demande.',
          en: 'Yes. Copenhagen is around 3 hours away via the E20 and the Great Belt Bridge, one of the world’s longest suspension bridges. The journey is quoted at a fixed price, bridge toll included, with an optional stop in Odense — Andersen’s home town.',
        },
      },
      {
        q: {
          fr: 'Une journée à Legoland depuis Aarhus est-elle réaliste avec des enfants ?',
          en: 'Is a Legoland day trip from Aarhus realistic with children?',
        },
        a: {
          fr: 'Tout à fait. Billund est à une heure de route ; nous fournissons sièges enfants et rehausseurs sans supplément, votre chauffeur vous dépose à l’entrée du parc et reste disponible toute la journée. Le retour se cale sur la fermeture du parc ou sur la fatigue des enfants.',
          en: 'Absolutely. Billund is an hour’s drive; child seats and boosters are provided at no extra charge, your chauffeur drops you at the park entrance and stays available all day. The return is timed to park closing — or to the children’s energy levels.',
        },
      },
    ],
    nearby: ['billund', 'copenhagen', 'hamburg'],
  },
  {
    slug: 'billund',
    name: { fr: 'Billund', en: 'Billund' },
    country: { fr: 'Danemark', en: 'Denmark' },
    region: 'dach-nordics',
    airport: 'Billund (BLL)',
    airportTransfer: {
      fr: 'L’aéroport de Billund (BLL), deuxième du Danemark, se trouve à 3 km à peine du centre-ville et de Legoland : comptez 5 à 10 minutes de trajet. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Billund Airport (BLL), Denmark’s second-busiest, lies barely 3 km from the town centre and Legoland: allow 5 to 10 minutes. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville natale de la brique Lego, Billund est devenue la capitale familiale de la Scandinavie : Legoland et ses 65 millions de briques, la Lego House dessinée par Bjarke Ingels, le parc aquatique Lalandia et un aéroport international à cinq minutes de tout. Votre **chauffeur privé à Billund** enchaîne transferts aéroport, navettes vers les parcs et excursions dans le Jutland, avec sièges enfants fournis et vans spacieux pour les tribus et les poussettes.',
        'Autour de Billund, le Jutland réserve bien plus que la brique : **les pierres runiques de Jelling**, actes de naissance du Danemark classés à l’UNESCO, sont à un quart d’heure, Ribe — la plus ancienne ville de Scandinavie — à 45 minutes, et la mer des Wadden déroule ses bancs de sable et ses phoques au sud-ouest. Aarhus et ses musées complètent l’itinéraire à une heure de route.',
      ],
      en: [
        'Birthplace of the Lego brick, Billund has become Scandinavia’s family capital: Legoland and its 65 million bricks, the Bjarke Ingels-designed Lego House, the Lalandia water park and an international airport five minutes from everything. Your **private chauffeur in Billund** strings together airport transfers, park shuttles and Jutland excursions, with child seats provided and spacious vans for tribes and pushchairs.',
        'Around Billund, Jutland holds far more than the brick: **the Jelling rune stones**, Denmark’s UNESCO-listed birth certificate, are fifteen minutes away, Ribe — Scandinavia’s oldest town — 45 minutes, and the Wadden Sea unrolls its sandbanks and seal colonies to the south-west. Aarhus and its museums complete the picture an hour’s drive away.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Legoland et Lego House', en: 'Legoland and Lego House' },
        teaser: {
          fr: 'Le parc originel de 1968 — Miniland, montagnes russes, Ninjago World —, puis la Lego House et ses 25 millions de briques en accès libre de création. Dépose à l’entrée, chauffeur disponible toute la journée.',
          en: 'The original 1968 park — Miniland, roller coasters, Ninjago World — then Lego House and its 25 million bricks for free-form building. Drop-off at the gate, chauffeur available all day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '390',
      },
      {
        title: { fr: 'Pierres runiques de Jelling', en: 'The Jelling rune stones' },
        teaser: {
          fr: 'À 15 minutes de Billund, les pierres de Harald à la Dent bleue et de Gorm l’Ancien, tumuli royaux et église classés à l’UNESCO : le lieu où le nom « Danmark » fut gravé pour la première fois, vers 965.',
          en: '15 minutes from Billund, the stones of Harald Bluetooth and Gorm the Old, with UNESCO-listed royal mounds and church: the spot where the name “Danmark” was first carved, around 965.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Ribe, la plus ancienne ville de Scandinavie', en: 'Ribe, Scandinavia’s oldest town' },
        teaser: {
          fr: 'Fondée vers 710, Ribe aligne cathédrale romane, ruelles pavées et maisons à colombages penchées ; le soir, la ronde du veilleur de nuit se suit en chanson. Combinez avec le centre de la mer des Wadden.',
          en: 'Founded around 710, Ribe lines up a Romanesque cathedral, cobbled lanes and leaning half-timbered houses; in the evening, the night watchman still makes his singing rounds. Pair it with the Wadden Sea Centre.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Mer des Wadden et safari phoques', en: 'Wadden Sea and seal safari' },
        teaser: {
          fr: 'Le parc national de la mer des Wadden, classé à l’UNESCO : marée basse sur les bancs de sable, colonies de phoques au large de Fanø et, en automne, les nuées d’étourneaux du « Soleil noir ». Bottes fournies.',
          en: 'The UNESCO-listed Wadden Sea National Park: low tide across the sandflats, seal colonies off Fanø and, in autumn, the “Black Sun” starling murmurations. Boots provided.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Givskud Zoo et safari en voiture', en: 'Givskud Zoo drive-through safari' },
        teaser: {
          fr: 'À 20 minutes de Billund, le parc safari de Givskud se traverse en véhicule privé : lions, girafes et gnous depuis votre berline ou votre van, puis les gorilles et le parc à pied. Idéal en complément de Legoland.',
          en: '20 minutes from Billund, the Givskud safari park is crossed in your own private vehicle: lions, giraffes and wildebeest from your sedan or van, then the gorillas and walking trails. An ideal Legoland companion.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Billund et Legoland ou le centre-ville ?',
          en: 'How much does a transfer between Billund Airport and Legoland or the town centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Billund (BLL) et Legoland, Lalandia ou les hôtels du centre — 3 km, 5 à 10 minutes — est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et sièges enfants sans supplément sont inclus.',
          en: 'A private transfer between Billund (BLL) and Legoland, Lalandia or the town-centre hotels — 3 km, 5 to 10 minutes — is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary child seats are included.',
        },
      },
      {
        q: {
          fr: 'Fournissez-vous des sièges enfants et des vans pour les familles nombreuses ?',
          en: 'Do you provide child seats and vans for larger families?',
        },
        a: {
          fr: 'Oui, c’est notre quotidien à Billund : sièges auto, rehausseurs et nacelles sont fournis sans supplément, et nos vans accueillent jusqu’à sept passagers avec poussettes et bagages. Indiquez l’âge des enfants à la réservation, tout est installé avant votre arrivée.',
          en: 'Yes — it is our daily routine in Billund: car seats, boosters and carrycots are provided at no extra charge, and our vans carry up to seven passengers with pushchairs and luggage. Give us the children’s ages at booking and everything is fitted before you land.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Copenhague ou Hambourg depuis Billund ?',
          en: 'Can I travel on to Copenhagen or Hamburg from Billund?',
        },
        a: {
          fr: 'Oui. Copenhague est à environ 2 h 45 par le pont du Grand Belt, péage inclus dans le devis, et Hambourg à environ 3 h 30 vers le sud par l’A7. Les deux trajets sont proposés à prix fixe, avec pauses adaptées aux enfants.',
          en: 'Yes. Copenhagen is around 2 hours 45 minutes away via the Great Belt Bridge, toll included in the quote, and Hamburg around 3.5 hours south on the A7. Both journeys are offered at a fixed price, with child-friendly breaks.',
        },
      },
    ],
    nearby: ['aarhus', 'copenhagen', 'hamburg'],
  },
  {
    slug: 'tromso',
    name: { fr: 'Tromsø', en: 'Tromsø' },
    country: { fr: 'Norvège', en: 'Norway' },
    region: 'dach-nordics',
    airport: 'Tromsø-Langnes (TOS)',
    airportTransfer: {
      fr: 'L’aéroport de Tromsø-Langnes (TOS) se trouve à 5 km du centre, sur la même île de Tromsøya : comptez 10 minutes jusqu’au port ou à la rue Storgata. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel — précieux quand la météo arctique bouscule les horaires.',
      en: 'Tromsø-Langnes Airport (TOS) lies 5 km from the centre, on the same island of Tromsøya: allow 10 minutes to reach the harbour or Storgata street. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time — invaluable when Arctic weather disrupts schedules.',
    },
    intro: {
      fr: [
        'À 350 km au nord du cercle polaire, Tromsø est la capitale de l’Arctique norvégien : cathédrale arctique aux allures d’iceberg, maisons de bois du XIXe siècle, port d’où partirent Amundsen et Nansen, et une vie culturelle dense pour 70 000 habitants. Votre **chauffeur privé à Tromsø** assure transferts, sorties nocturnes et excursions polaires en véhicule 4x4 équipé pour l’hiver — une sécurité réelle sur les routes verglacées du comté de Troms.',
        'De septembre à mars, **les aurores boréales** se chassent hors des lumières de la ville, vers les fjords de Kvaløya ou les vallées de l’intérieur ; l’été, le soleil de minuit ne se couche pas du 20 mai au 22 juillet. Les plages blanches de Sommarøy, les Alpes de Lyngen et les sorties baleines de Skjervøy complètent un terrain de jeu que votre chauffeur connaît route par route, météo par météo.',
      ],
      en: [
        '350 km north of the Arctic Circle, Tromsø is the capital of Arctic Norway: an iceberg-shaped Arctic Cathedral, 19th-century wooden houses, the harbour from which Amundsen and Nansen sailed, and a dense cultural life for 70,000 inhabitants. Your **private chauffeur in Tromsø** handles transfers, evenings out and polar excursions in a winter-equipped 4x4 — genuine reassurance on the icy roads of Troms county.',
        'From September to March, **the northern lights** are hunted away from the city glow, towards the Kvaløya fjords or the inland valleys; in summer, the midnight sun never sets between 20 May and 22 July. The white beaches of Sommarøy, the Lyngen Alps and the whale trips out of Skjervøy complete a playground your chauffeur knows road by road, forecast by forecast.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Chasse aux aurores boréales', en: 'Northern lights hunt' },
        teaser: {
          fr: 'Départ en soirée en 4x4 privé, cap choisi selon les prévisions solaires et la couverture nuageuse — Kvaløya, vallée de Kattfjord ou frontière finlandaise. Boissons chaudes, trépieds et combinaisons thermiques à bord.',
          en: 'Evening departure by private 4x4, heading set by the solar forecast and cloud cover — Kvaløya, the Kattfjord valley or the Finnish border. Hot drinks, tripods and thermal suits on board.',
        },
        duration: { fr: 'Soirée (4-6 h)', en: 'Evening (4-6 h)' },
        price: '790',
      },
      {
        title: { fr: 'Kvaløya et les plages de Sommarøy', en: 'Kvaløya and the Sommarøy beaches' },
        teaser: {
          fr: 'Le tour de l’« île aux baleines » : fjords d’Ersfjordbotn et de Kattfjord, rennes en liberté, puis les plages de sable blanc et les eaux turquoise de Sommarøy, village de pêcheurs posé sur l’océan Arctique.',
          en: 'A circuit of “Whale Island”: the Ersfjordbotn and Kattfjord fjords, free-roaming reindeer, then the white-sand beaches and turquoise water of Sommarøy, a fishing village set on the Arctic Ocean.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Alpes de Lyngen', en: 'The Lyngen Alps' },
        teaser: {
          fr: 'Route et ferry vers la péninsule de Lyngen, ses sommets de 1 800 mètres plongeant dans le fjord, ses glaciers et le village d’alpinistes de Lyngseidet. L’un des plus grands paysages de Norvège du Nord.',
          en: 'Road and ferry to the Lyngen peninsula, its 1,800-metre peaks plunging into the fjord, its glaciers and the mountaineering village of Lyngseidet. One of northern Norway’s greatest landscapes.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '990',
      },
      {
        title: { fr: 'Baleines et orques de Skjervøy', en: 'Whales and orcas of Skjervøy' },
        teaser: {
          fr: 'De novembre à janvier, les harengs attirent orques et baleines à bosse dans les fjords de Skjervøy, à 2 h 30 de route. Transfert privé jusqu’à l’embarcadère, sortie en mer, retour de nuit assuré.',
          en: 'From November to January, herring shoals draw orcas and humpbacks into the Skjervøy fjords, a 2.5-hour drive away. Private transfer to the pier, boat trip out, guaranteed late return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1100',
      },
      {
        title: { fr: 'Tromsø, cité polaire', en: 'Tromsø, polar city' },
        teaser: {
          fr: 'La cathédrale arctique, le téléphérique du Fjellheisen et sa vue à 421 mètres, le musée Polaria et l’héritage des expéditions d’Amundsen au Musée polaire, puis un aquavit au Ølhallen, brasserie de 1928.',
          en: 'The Arctic Cathedral, the Fjellheisen cable car with its view from 421 metres, the Polaria centre and Amundsen’s expedition legacy at the Polar Museum, then an aquavit at Ølhallen, a brewery hall from 1928.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Tromsø et le centre-ville ?',
          en: 'How much does a transfer between Tromsø Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Langnes (TOS) et le centre de Tromsø — 5 km, 10 minutes environ — est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Langnes (TOS) and central Tromsø — 5 km, around 10 minutes — is charged at a fixed price, confirmed at booking. Name-board meet-and-greet in arrivals, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Quelle est la meilleure période pour voir les aurores boréales à Tromsø ?',
          en: 'When is the best time to see the northern lights in Tromsø?',
        },
        a: {
          fr: 'De fin septembre à fin mars, avec un pic statistique autour des équinoxes ; il faut une nuit sombre et un ciel dégagé. L’avantage d’un chauffeur privé est décisif : nous partons à l’heure optimale et changeons de vallée en cours de soirée si la couverture nuageuse l’exige.',
          en: 'From late September to late March, with a statistical peak around the equinoxes; you need a dark night and clear skies. A private chauffeur is a decisive advantage: we leave at the optimal hour and switch valleys mid-evening if the cloud cover demands it.',
        },
      },
      {
        q: {
          fr: 'Vos véhicules sont-ils adaptés aux routes arctiques en hiver ?',
          en: 'Are your vehicles suited to Arctic roads in winter?',
        },
        a: {
          fr: 'Oui. Nos 4x4 et vans sont équipés de pneus hiver cloutés, réglementaires en Norvège du Nord, et nos chauffeurs conduisent ces routes toute l’année. En cas de tempête ou de fermeture de col, l’itinéraire est adapté et vous êtes prévenu avant le départ.',
          en: 'Yes. Our 4x4s and vans run on studded winter tyres, standard in northern Norway, and our chauffeurs drive these roads year-round. In the event of a storm or a pass closure, the route is adapted and you are informed before departure.',
        },
      },
    ],
    nearby: ['oslo', 'bergen', 'helsinki'],
  },
  {
    slug: 'reykjavik',
    name: { fr: 'Reykjavik', en: 'Reykjavik' },
    country: { fr: 'Islande', en: 'Iceland' },
    region: 'dach-nordics',
    airport: 'Keflavík (KEF)',
    airportTransfer: {
      fr: 'L’aéroport international de Keflavík (KEF) se trouve à 50 km au sud-ouest de Reykjavik, sur la péninsule de Reykjanes : comptez 45 minutes par la route 41 jusqu’au centre et à la Hallgrímskirkja. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Keflavík International Airport (KEF) lies 50 km south-west of Reykjavik, on the Reykjanes peninsula: allow 45 minutes along Route 41 to reach the centre and Hallgrímskirkja church. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale la plus septentrionale du monde, Reykjavik concentre la flèche de béton de la Hallgrímskirkja, la salle de concert Harpa aux façades de verre alvéolé, les maisons de tôle colorée du vieux port et une scène gastronomique étonnante pour 140 000 habitants. Votre **chauffeur privé à Reykjavik** assure les transferts depuis Keflavík, les mises à disposition en ville et les grandes excursions islandaises, en SUV 4x4 adapté aux routes de lave et aux vents du large.',
        'L’Islande s’explore en étoile depuis la capitale : **le Cercle d’Or** — Þingvellir, Geysir, Gullfoss — se boucle en une journée, le Blue Lagoon fume à vingt minutes de Keflavík, la côte sud aligne cascades et plages de sable noir jusqu’à Vík, et la péninsule de Snæfellsnes condense l’île entière en un jour. D’octobre à mars, les aurores boréales se chassent à une heure des lumières de la ville.',
      ],
      en: [
        'The world’s northernmost capital, Reykjavik gathers the concrete spire of Hallgrímskirkja, the honeycomb-glass Harpa concert hall, the colourful corrugated-iron houses of the old harbour and a dining scene remarkable for 140,000 inhabitants. Your **private chauffeur in Reykjavik** handles transfers from Keflavík, hourly hire in town and the great Icelandic excursions, in a 4x4 SUV built for lava roads and coastal winds.',
        'Iceland radiates from the capital: **the Golden Circle** — Þingvellir, Geysir, Gullfoss — loops in a day, the Blue Lagoon steams twenty minutes from Keflavík, the south coast strings waterfalls and black-sand beaches down to Vík, and the Snæfellsnes peninsula condenses the whole island into a single day. From October to March, the northern lights are hunted an hour from the city glow.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Cercle d’Or', en: 'The Golden Circle' },
        teaser: {
          fr: 'Þingvellir, le parlement viking fondé en 930 entre les plaques américaine et eurasienne, le geyser Strokkur qui jaillit toutes les 6 à 10 minutes, puis la double cascade de Gullfoss. Le circuit fondateur de l’Islande, à votre rythme.',
          en: 'Þingvellir, the Viking parliament founded in 930 between the American and Eurasian plates, the Strokkur geyser erupting every 6 to 10 minutes, then the two-tier Gullfoss falls. Iceland’s founding circuit, at your own pace.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Blue Lagoon et péninsule de Reykjanes', en: 'Blue Lagoon and the Reykjanes peninsula' },
        teaser: {
          fr: 'Trois heures dans les eaux laiteuses à 38 °C du Blue Lagoon, puis les champs de lave de Reykjanes, le pont entre deux continents et les solfatares de Gunnuhver. Se combine idéalement avec l’arrivée ou le départ de Keflavík.',
          en: 'Three hours in the milky 38 °C waters of the Blue Lagoon, then the Reykjanes lava fields, the Bridge Between Continents and the Gunnuhver steam vents. Pairs ideally with your Keflavík arrival or departure.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '590',
      },
      {
        title: { fr: 'Côte sud jusqu’à Vík', en: 'The south coast to Vík' },
        teaser: {
          fr: 'Seljalandsfoss que l’on longe par-derrière, Skógafoss et ses 60 mètres de rideau d’eau, le glacier de Sólheimajökull, puis la plage de sable noir de Reynisfjara et ses orgues basaltiques face aux aiguilles de Reynisdrangar.',
          en: 'Seljalandsfoss, which you can walk behind, the 60-metre curtain of Skógafoss, the Sólheimajökull glacier tongue, then the black-sand beach of Reynisfjara with its basalt columns facing the Reynisdrangar sea stacks.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1100',
      },
      {
        title: { fr: 'Péninsule de Snæfellsnes', en: 'The Snæfellsnes peninsula' },
        teaser: {
          fr: '« L’Islande en miniature » : le mont Kirkjufell le plus photographié du pays, les falaises d’Arnarstapi, la plage de Djúpalónssandur et le glacier-volcan du Snæfellsjökull cher à Jules Verne. Environ 500 km de boucle en journée longue.',
          en: '“Iceland in miniature”: Kirkjufell, the country’s most photographed mountain, the Arnarstapi cliffs, Djúpalónssandur beach and the Snæfellsjökull glacier-volcano dear to Jules Verne. A long-day loop of some 500 km.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1300',
      },
      {
        title: { fr: 'Aurores boréales en 4x4 privé', en: 'Northern lights by private 4x4' },
        teaser: {
          fr: 'D’octobre à mars, départ en soirée vers Þingvellir ou la côte sud selon les prévisions d’activité solaire, loin de la pollution lumineuse. Boissons chaudes à bord, seconde tentative offerte si le ciel reste couvert.',
          en: 'From October to March, an evening departure towards Þingvellir or the south coast depending on the solar activity forecast, far from light pollution. Hot drinks on board, second attempt offered if the sky stays overcast.',
        },
        duration: { fr: 'Soirée (4 h)', en: 'Evening (4 h)' },
        price: '650',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Keflavík et le centre de Reykjavik ?',
          en: 'How much does a transfer between Keflavík and central Reykjavik cost?',
        },
        a: {
          fr: 'Le transfert privé entre Keflavík (KEF) et le centre de Reykjavik — 50 km, 45 minutes — est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus, de jour comme de nuit.',
          en: 'A private transfer between Keflavík (KEF) and central Reykjavik — 50 km, 45 minutes — is charged at a fixed price, confirmed at booking. Name-board meet-and-greet in arrivals, real-time flight tracking and complimentary waiting time in case of delay are included, day or night.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner le Blue Lagoon avec le transfert aéroport ?',
          en: 'Can the Blue Lagoon be combined with the airport transfer?',
        },
        a: {
          fr: 'Oui, c’est même la formule la plus logique : le Blue Lagoon est à 20 minutes de Keflavík, sur la route de Reykjavik. Votre chauffeur vous y dépose à l’arrivée ou avant le départ, garde vos bagages dans le véhicule et vous attend le temps de la baignade. Pensez à réserver votre créneau au lagon à l’avance.',
          en: 'Yes — it is the most logical option: the Blue Lagoon is 20 minutes from Keflavík, on the way to Reykjavik. Your chauffeur drops you there on arrival or before departure, keeps your luggage in the vehicle and waits while you bathe. Remember to book your lagoon slot in advance.',
        },
      },
      {
        q: {
          fr: 'Les excursions islandaises sont-elles possibles en hiver malgré la météo ?',
          en: 'Are Icelandic excursions possible in winter despite the weather?',
        },
        a: {
          fr: 'Oui, avec de la souplesse. Le Cercle d’Or et le Blue Lagoon restent accessibles presque toute l’année ; la côte sud et Snæfellsnes dépendent des tempêtes. Nos SUV 4x4 sont équipés pour l’hiver islandais et votre chauffeur suit les alertes de road.is et de la météo — l’itinéraire est adapté ou reporté avant le départ, jamais en cours de route.',
          en: 'Yes, with flexibility. The Golden Circle and Blue Lagoon remain accessible almost all year; the south coast and Snæfellsnes depend on the storms. Our 4x4 SUVs are equipped for the Icelandic winter and your chauffeur monitors road.is and weather alerts — the route is adapted or postponed before departure, never mid-journey.',
        },
      },
    ],
    nearby: ['copenhagen', 'oslo', 'stockholm', 'helsinki'],
  },
];

/**
 * italy.ts — Région ITALIE (~45 villes)
 * ─────────────────────────────────────────────────────────────────────────────
 * Italie + lacs + Toscane.
 * Suivre le modèle éditorial des exemples strasbourg/toulouse dans france.ts.
 */

import type { Destination } from '../types';

export const CITIES: Destination[] = [
  {
    slug: 'rome',
    name: { fr: 'Rome', en: 'Rome' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Rome-Fiumicino (FCO)',
    airportTransfer: {
      fr: 'L’aéroport de Rome-Fiumicino (FCO) se situe à 30 km au sud-ouest du centre historique : comptez 45 à 60 minutes selon le trafic pour rejoindre la piazza di Spagna ou le Vatican. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel. Depuis Ciampino (CIA), à 15 km au sud-est, le trajet demande 30 à 40 minutes.',
      en: 'Rome-Fiumicino Airport (FCO) lies 30 km south-west of the historic centre: allow 45 to 60 minutes depending on traffic to reach Piazza di Spagna or the Vatican. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time. From Ciampino (CIA), 15 km south-east, the journey takes 30 to 40 minutes.',
    },
    intro: {
      fr: [
        'Ville éternelle et capitale aux vingt-huit siècles d’histoire, Rome superpose Colisée, forums impériaux, palais baroques et trattorias de quartier. Votre **chauffeur privé à Rome** maîtrise la ZTL du centre historique, les accès au Vatican et les ruelles du Trastevere : transferts depuis Fiumicino et Ciampino, mise à disposition à l’heure, dépose au plus près des sites piétonniers. Berlines Mercedes et vans de grande capacité, prix fixes annoncés à l’avance, chauffeurs anglophones sur demande.',
        'Rome est aussi un point de départ privilégié vers le Latium et au-delà : les **villas de Tivoli** — Villa d’Este et Villa Adriana — à 35 km, les Castelli Romani et leurs vins de Frascati, Ostia Antica au bord de la mer. En mise à disposition à la journée, votre chauffeur relie audiences papales, rendez-vous d’affaires à l’EUR et dîners de Monti sans que vous perdiez une minute dans la circulation romaine.',
      ],
      en: [
        'The Eternal City layers twenty-eight centuries of history: the Colosseum, the imperial forums, Baroque palaces and neighbourhood trattorias. Your **private chauffeur in Rome** knows the historic centre’s ZTL restrictions, the approaches to the Vatican and the lanes of Trastevere: transfers from Fiumicino and Ciampino, hourly hire, drop-offs as close as possible to pedestrian sites. Mercedes sedans and full-size vans, fixed prices confirmed in advance, English-speaking chauffeurs on request.',
        'Rome is also a privileged gateway to Lazio and beyond: the **villas of Tivoli** — Villa d’Este and Hadrian’s Villa — 35 km away, the Castelli Romani hills and their Frascati wines, Ostia Antica by the sea. With a full-day hire, your chauffeur links papal audiences, business meetings in the EUR district and dinners in Monti without you losing a minute to Roman traffic.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Tivoli, Villa d’Este et Villa Adriana', en: 'Tivoli, Villa d’Este and Hadrian’s Villa' },
        teaser: {
          fr: 'À 35 km à l’est de Rome, deux sites classés UNESCO en une journée : les cinq cents fontaines de la Villa d’Este et la résidence impériale d’Hadrien. Déjeuner à Tivoli, retour par la via Tiburtina en fin d’après-midi.',
          en: '35 km east of Rome, two UNESCO sites in a single day: the five hundred fountains of Villa d’Este and Hadrian’s imperial residence. Lunch in Tivoli, late-afternoon return along the Via Tiburtina.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Castelli Romani et vins de Frascati', en: 'Castelli Romani and Frascati wines' },
        teaser: {
          fr: 'Frascati, Castel Gandolfo et sa résidence pontificale au-dessus du lac Albano, Ariccia et sa porchetta : les collines des papes à 25 km de Rome. Dégustation dans un domaine de Frascati pendant que votre chauffeur conduit.',
          en: 'Frascati, Castel Gandolfo and its papal residence above Lake Albano, Ariccia and its porchetta: the popes’ hills 25 km from Rome. A Frascati estate tasting while your chauffeur drives.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '490',
      },
      {
        title: { fr: 'Ostia Antica et le littoral romain', en: 'Ostia Antica and the Roman coast' },
        teaser: {
          fr: 'Le port antique de Rome, mieux préservé que Pompéi par endroits : théâtre, thermes, mosaïques des corporations. À 30 minutes du centre, une échappée idéale avant un vol au départ de Fiumicino, tout proche.',
          en: 'Rome’s ancient harbour, in places better preserved than Pompeii: theatre, baths, guild mosaics. Thirty minutes from the centre, an ideal escape before a flight from nearby Fiumicino.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Rome baroque de nuit', en: 'Baroque Rome by night' },
        teaser: {
          fr: 'Fontaine de Trevi, place Navone, Panthéon et Saint-Pierre illuminés : un circuit nocturne avec déposes au plus près de chaque site, hors flux touristique. Dîner réservé au Trastevere ou à Monti, véhicule à disposition toute la soirée.',
          en: 'The Trevi Fountain, Piazza Navona, the Pantheon and St Peter’s illuminated: a night circuit with drop-offs beside each site, away from the crowds. Dinner booked in Trastevere or Monti, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
      {
        title: { fr: 'Journée Rome – Pompéi', en: 'Rome to Pompeii day trip' },
        teaser: {
          fr: 'À 240 km au sud, la ville figée par le Vésuve en 79 : forum, villa des Mystères, fresques intactes. Départ matinal en berline, guide privé en option sur le site, retour à Rome en soirée sans changer de véhicule.',
          en: '240 km south, the city frozen by Vesuvius in AD 79: the forum, the Villa of the Mysteries, intact frescoes. Early sedan departure, optional private guide on site, evening return to Rome in the same vehicle.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1190',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Rome-Fiumicino et le centre de Rome ?',
          en: 'How much does a transfer between Rome-Fiumicino and central Rome cost?',
        },
        a: {
          fr: 'Le transfert privé entre Fiumicino (FCO) et le centre de Rome est facturé à prix fixe, confirmé à la réservation, quel que soit le trafic. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Fiumicino (FCO) and central Rome is charged at a fixed price, confirmed at booking, whatever the traffic. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Votre chauffeur peut-il circuler dans la ZTL du centre historique de Rome ?',
          en: 'Can your chauffeur drive inside Rome’s historic-centre ZTL?',
        },
        a: {
          fr: 'Nos véhicules avec chauffeur (NCC) disposent des autorisations d’accès à la ZTL romaine, contrairement aux voitures particulières. Vous êtes déposé au plus près de votre hôtel, du Panthéon ou de la place d’Espagne, dans le respect des zones strictement piétonnes.',
          en: 'Our chauffeur-driven vehicles (NCC licence) hold access permits for Rome’s ZTL, unlike private cars. You are dropped as close as possible to your hotel, the Pantheon or the Spanish Steps, within the limits of the fully pedestrian zones.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des excursions à la journée au départ de Rome ?',
          en: 'Do you offer day trips from Rome?',
        },
        a: {
          fr: 'Oui. Tivoli, les Castelli Romani, Ostia Antica, Orvieto ou même Pompéi et la côte amalfitaine se visitent à la journée depuis Rome, à prix fixe. L’itinéraire et les horaires sont définis avec vous avant le départ et restent modifiables en cours de route.',
          en: 'Yes. Tivoli, the Castelli Romani, Ostia Antica, Orvieto and even Pompeii and the Amalfi Coast can be visited as day trips from Rome at a fixed price. The itinerary and timings are agreed with you before departure and can still be adjusted en route.',
        },
      },
    ],
    nearby: ['naples', 'florence'],
  },
  {
    slug: 'milan',
    name: { fr: 'Milan', en: 'Milan' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Milan-Malpensa (MXP)',
    airportTransfer: {
      fr: 'L’aéroport de Milan-Malpensa (MXP) se trouve à 50 km au nord-ouest du centre : comptez 50 minutes à 1 heure pour rejoindre le Duomo ou le quartier de Brera. Linate (LIN), à 7 km à l’est, se rejoint en 20 minutes, et Bergame-Orio al Serio (BGY) en 50 minutes environ. Accueil en salle d’arrivée avec panneau nominatif et suivi du vol inclus.',
      en: 'Milan-Malpensa Airport (MXP) lies 50 km north-west of the centre: allow 50 minutes to an hour to reach the Duomo or the Brera district. Linate (LIN), 7 km east, is 20 minutes away, and Bergamo-Orio al Serio (BGY) around 50 minutes. Arrivals-hall meet-and-greet with a name board and flight tracking included.',
    },
    intro: {
      fr: [
        'Capitale économique de l’Italie, Milan conjugue le Duomo et sa terrasse de marbre, la Scala, la Cène de Léonard et le quadrilatère de la mode. Votre **chauffeur privé à Milan** dessert les sièges sociaux de Porta Nuova, les salons de Rho Fiera, les défilés et les cliniques comme les grandes tables du centre. Berlines et vans premium, prix fixes, discrétion absolue : la formule attendue par une clientèle d’affaires exigeante.',
        'Milan ouvre aussi la Lombardie et ses lacs : **le lac de Côme à moins d’une heure**, Bellagio et la Villa d’Este, le lac Majeur et les îles Borromées, les vignobles de Franciacorta. Pendant la Fashion Week ou le Salon du meuble, la demande explose et la logistique devient décisive : votre chauffeur enchaîne les adresses au cordeau, attend entre chaque étape et s’adapte à vos changements d’agenda en temps réel.',
      ],
      en: [
        'Italy’s economic capital pairs the Duomo and its marble terraces with La Scala, Leonardo’s Last Supper and the fashion quadrilateral. Your **private chauffeur in Milan** serves the Porta Nuova headquarters, the Rho Fiera exhibition halls, fashion shows and clinics as well as the city’s finest tables. Premium sedans and vans, fixed prices, absolute discretion: the standard an exacting business clientele expects.',
        'Milan also opens up Lombardy and its lakes: **Lake Como under an hour away**, Bellagio and Villa d’Este, Lake Maggiore and the Borromean Islands, the Franciacorta vineyards. During Fashion Week or the Salone del Mobile, demand soars and logistics become decisive: your chauffeur strings addresses together with precision, waits between each stop and adapts to your schedule changes in real time.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Lac de Côme et Bellagio', en: 'Lake Como and Bellagio' },
        teaser: {
          fr: 'À 50 km de Milan, le plus élégant des lacs italiens : Côme et sa cathédrale, la rive de Cernobbio, puis Bellagio à la pointe du promontoire. Déjeuner au bord de l’eau, croisière privée en option, retour en soirée.',
          en: '50 km from Milan, the most elegant of the Italian lakes: Como and its cathedral, the Cernobbio shore, then Bellagio at the tip of the promontory. Waterside lunch, optional private cruise, evening return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Îles Borromées depuis Stresa', en: 'Borromean Islands from Stresa' },
        teaser: {
          fr: 'Le lac Majeur à une heure de Milan : embarquement à Stresa pour Isola Bella et son palais baroque, Isola dei Pescatori pour déjeuner. Votre chauffeur vous attend à quai pour le retour.',
          en: 'Lake Maggiore an hour from Milan: board at Stresa for Isola Bella and its Baroque palace, then Isola dei Pescatori for lunch. Your chauffeur waits at the quay for the return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Franciacorta, bulles lombardes', en: 'Franciacorta, Lombardy’s sparkling wines' },
        teaser: {
          fr: 'Entre Brescia et le lac d’Iseo, le vignoble des grands effervescents italiens : visites de caves, dégustations chez Ca’ del Bosco ou Bellavista, déjeuner face au lac. Vous dégustez, votre chauffeur conduit.',
          en: 'Between Brescia and Lake Iseo, the home of Italy’s great sparkling wines: cellar visits, tastings at Ca’ del Bosco or Bellavista, lunch overlooking the lake. You taste, your chauffeur drives.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '820',
      },
      {
        title: { fr: 'Shopping quadrilatère de la mode', en: 'Fashion-quadrilateral shopping' },
        teaser: {
          fr: 'Via Montenapoleone, via della Spiga, Galleria Vittorio Emanuele II : mise à disposition avec dépose devant chaque boutique, coffre sécurisé pour vos achats, extension possible vers les outlets de Serravalle.',
          en: 'Via Montenapoleone, Via della Spiga, Galleria Vittorio Emanuele II: hourly hire with door-to-door drop-offs, a secure boot for your purchases, and an optional extension to the Serravalle outlets.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Soirée Scala et Brera', en: 'La Scala and Brera evening' },
        teaser: {
          fr: 'Dépose devant le Teatro alla Scala pour l’opéra ou le ballet, puis souper dans une adresse de Brera ou des Navigli. Le véhicule vous attend à la sortie, retour à l’hôtel sans contrainte.',
          en: 'Drop-off at the Teatro alla Scala for opera or ballet, then supper in Brera or on the Navigli. The vehicle waits at the exit; an effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Malpensa et le centre de Milan ?',
          en: 'How much does a transfer between Malpensa and central Milan cost?',
        },
        a: {
          fr: 'Le transfert privé entre Malpensa (MXP) et le centre de Milan est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus. Linate et Bergame-Orio al Serio sont également desservis à prix fixe.',
          en: 'A private transfer between Malpensa (MXP) and central Milan is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included. Linate and Bergamo-Orio al Serio are also served at fixed prices.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver longtemps à l’avance pendant la Fashion Week ou le Salon du meuble ?',
          en: 'How far ahead should I book during Fashion Week or the Salone del Mobile?',
        },
        a: {
          fr: 'Oui, ces semaines saturent l’offre de véhicules avec chauffeur à Milan. Nous recommandons de réserver au moins une semaine à l’avance pour garantir la disponibilité, en particulier pour les mises à disposition à la journée entre défilés, showrooms et Rho Fiera.',
          en: 'Yes, those weeks exhaust Milan’s chauffeured-vehicle supply. We recommend booking at least a week ahead to guarantee availability, especially for full-day hire linking shows, showrooms and Rho Fiera.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une journée au lac de Côme depuis Milan ?',
          en: 'Can you arrange a Lake Como day trip from Milan?',
        },
        a: {
          fr: 'Absolument. Côme, Cernobbio, Bellagio ou la Villa del Balbianello se visitent à la journée depuis Milan, à prix fixe, avec croisière privée en option. L’itinéraire est défini avec vous avant le départ et reste modifiable en cours de route.',
          en: 'Absolutely. Como, Cernobbio, Bellagio or Villa del Balbianello can be visited in a day from Milan at a fixed price, with an optional private cruise. The itinerary is agreed before departure and can still be adjusted en route.',
        },
      },
    ],
    nearby: ['como', 'bellagio', 'stresa-lake-maggiore', 'turin'],
  },
  {
    slug: 'venice',
    name: { fr: 'Venise', en: 'Venice' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Venise-Marco Polo (VCE)',
    airportTransfer: {
      fr: 'L’aéroport de Venise-Marco Polo (VCE) se trouve à 13 km au nord de la lagune : votre chauffeur rejoint le Piazzale Roma en 20 à 25 minutes, d’où bateaux-taxis et vaporetti prennent le relais vers votre hôtel. Nous coordonnons sur demande le taxi lagunaire privé pour une arrivée directe au ponton de votre palazzo. Depuis Trévise (TSF), comptez 40 minutes.',
      en: 'Venice-Marco Polo Airport (VCE) lies 13 km north of the lagoon: your chauffeur reaches Piazzale Roma in 20 to 25 minutes, where private water taxis and vaporetti take over to your hotel. On request we coordinate a private water taxi for a direct arrival at your palazzo’s pontoon. From Treviso (TSF), allow 40 minutes.',
    },
    intro: {
      fr: [
        'Unique au monde, Venise se mérite : la ville est piétonne et lacustre, et tout commence par une logistique parfaite entre l’aéroport, le Piazzale Roma et votre bateau. Votre **chauffeur privé à Venise** orchestre cette arrivée sans couture — prise en charge à Marco Polo, coordination du taxi lagunaire, gestion des bagages — puis reste disponible côté terre ferme pour Mestre, les villas de la Brenta ou un départ vers les Dolomites.',
        'Depuis Venise, la Vénétie s’ouvre en étoile : **Vérone et ses arènes** à une heure et quart, Padoue et la chapelle des Scrovegni, les villas palladiennes le long de la Brenta, le vignoble du prosecco entre Conegliano et Valdobbiadene, classé UNESCO. Pendant la Biennale, la Mostra ou le Carnaval, votre chauffeur absorbe les contraintes d’accès et vous fait gagner un temps précieux.',
      ],
      en: [
        'Venice is unique and demands precision: the city is pedestrian and waterborne, and everything starts with seamless logistics between the airport, Piazzale Roma and your boat. Your **private chauffeur in Venice** orchestrates that arrival — pick-up at Marco Polo, water-taxi coordination, luggage handling — then remains available on the mainland for Mestre, the Brenta villas or a departure towards the Dolomites.',
        'From Venice, the Veneto fans out: **Verona and its arena** an hour and a quarter away, Padua and the Scrovegni Chapel, the Palladian villas along the Brenta, and the UNESCO-listed prosecco hills between Conegliano and Valdobbiadene. During the Biennale, the film festival or Carnival, your chauffeur absorbs the access constraints and saves you precious time.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Collines du prosecco, Valdobbiadene', en: 'Prosecco hills, Valdobbiadene' },
        teaser: {
          fr: 'À une heure de Venise, les coteaux UNESCO de Conegliano-Valdobbiadene : dégustations de prosecco superiore chez les vignerons, route panoramique des collines, déjeuner dans une osteria de village. Retour au Piazzale Roma en fin de journée.',
          en: 'An hour from Venice, the UNESCO hills of Conegliano-Valdobbiadene: prosecco superiore tastings with the growers, the panoramic hill road, lunch in a village osteria. Return to Piazzale Roma at day’s end.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '780',
      },
      {
        title: { fr: 'Villas palladiennes de la Brenta', en: 'Palladian villas of the Brenta' },
        teaser: {
          fr: 'Entre Venise et Padoue, les résidences d’été de la noblesse vénitienne : Villa Foscari « La Malcontenta », Villa Pisani à Stra et ses fresques de Tiepolo. Un itinéraire d’architecture au fil du canal.',
          en: 'Between Venice and Padua, the summer residences of the Venetian nobility: Villa Foscari “La Malcontenta” and Villa Pisani at Stra with its Tiepolo frescoes. An architectural itinerary along the canal.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Vérone, Juliette et les arènes', en: 'Verona, Juliet and the arena' },
        teaser: {
          fr: 'À 120 km à l’ouest, la ville de Roméo et Juliette : arènes romaines, piazza delle Erbe, Castelvecchio. En été, soirée d’opéra dans les arènes avec retour de nuit à Venise assuré par votre chauffeur.',
          en: '120 km west, the city of Romeo and Juliet: the Roman arena, Piazza delle Erbe, Castelvecchio. In summer, an opera night in the arena with a guaranteed late return to Venice.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Padoue et la chapelle des Scrovegni', en: 'Padua and the Scrovegni Chapel' },
        teaser: {
          fr: 'À 40 km, les fresques de Giotto qui ont changé la peinture occidentale, la basilique Saint-Antoine et le café Pedrocchi. Créneau de visite réservé à l’avance, votre chauffeur cale la journée sur votre horaire d’entrée.',
          en: '40 km away, the Giotto frescoes that changed Western painting, the Basilica of St Anthony and Caffè Pedrocchi. Timed entry booked ahead; your chauffeur builds the day around your slot.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '460',
      },
      {
        title: { fr: 'Journée Dolomites, Cortina d’Ampezzo', en: 'Dolomites day trip, Cortina d’Ampezzo' },
        teaser: {
          fr: 'À 160 km au nord, les tours de dolomie et les lacs de montagne : Cortina, le lac de Misurina, le col de Giau. Une journée alpine spectaculaire au départ de la lagune, déjeuner en refuge d’altitude réservé.',
          en: '160 km north, dolomite towers and mountain lakes: Cortina, Lake Misurina, the Giau pass. A spectacular alpine day from the lagoon, with lunch booked in a mountain refuge.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '990',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Comment se passe un transfert vers Venise, ville sans voitures ?',
          en: 'How does a transfer to car-free Venice work?',
        },
        a: {
          fr: 'Votre chauffeur vous conduit de Marco Polo au Piazzale Roma, dernier point accessible en voiture, en 20 à 25 minutes. Sur demande, nous coordonnons un taxi lagunaire privé depuis le ponton de l’aéroport jusqu’à votre hôtel, avec prise en charge des bagages de bout en bout.',
          en: 'Your chauffeur drives you from Marco Polo to Piazzale Roma, the last point reachable by car, in 20 to 25 minutes. On request we coordinate a private water taxi from the airport pontoon to your hotel, with end-to-end luggage handling.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer un transfert entre Venise et les stations des Dolomites ?',
          en: 'Can you transfer between Venice and the Dolomites resorts?',
        },
        a: {
          fr: 'Oui. Cortina d’Ampezzo se rejoint en 2 heures environ depuis le Piazzale Roma ou l’aéroport Marco Polo, à prix fixe. En hiver, nos véhicules sont équipés pour la montagne et le chauffeur adapte l’horaire aux conditions de route.',
          en: 'Yes. Cortina d’Ampezzo is around 2 hours from Piazzale Roma or Marco Polo Airport, at a fixed price. In winter our vehicles are mountain-equipped and the chauffeur adjusts timings to road conditions.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver plus tôt pendant le Carnaval ou la Mostra de Venise ?',
          en: 'Should I book earlier during Carnival or the Venice Film Festival?',
        },
        a: {
          fr: 'Fortement conseillé. Pendant le Carnaval, la Biennale et la Mostra, les créneaux de prise en charge au Piazzale Roma et les taxis lagunaires sont très demandés. Réservez au moins 72 heures à l’avance pour garantir votre horaire.',
          en: 'Strongly advised. During Carnival, the Biennale and the film festival, Piazzale Roma pick-up slots and water taxis are in high demand. Book at least 72 hours ahead to secure your timing.',
        },
      },
    ],
    nearby: ['verona', 'trieste', 'bologna'],
  },
  {
    slug: 'florence',
    name: { fr: 'Florence', en: 'Florence' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Florence-Peretola (FLR)',
    airportTransfer: {
      fr: 'L’aéroport de Florence-Peretola « Amerigo Vespucci » (FLR) n’est qu’à 6 km au nord-ouest du centre : 15 à 20 minutes suffisent pour rejoindre le Duomo ou le Ponte Vecchio. Beaucoup de voyageurs arrivent aussi par Pise (PSA), à 80 km : comptez alors 1 heure de trajet. Accueil en salle d’arrivée avec panneau nominatif et suivi du vol inclus.',
      en: 'Florence-Peretola “Amerigo Vespucci” Airport (FLR) is just 6 km north-west of the centre: 15 to 20 minutes to reach the Duomo or the Ponte Vecchio. Many travellers also arrive via Pisa (PSA), 80 km away: allow 1 hour in that case. Arrivals-hall meet-and-greet with a name board and flight tracking included.',
    },
    intro: {
      fr: [
        'Berceau de la Renaissance, Florence concentre en quelques centaines de mètres le Duomo de Brunelleschi, les Offices, le David de Michel-Ange et le Ponte Vecchio. Le centre est largement piéton et soumis à une ZTL stricte : votre **chauffeur privé à Florence** en connaît chaque accès autorisé et vous dépose au plus près de votre hôtel ou des musées, à l’heure exacte de vos créneaux de visite réservés.',
        'Florence est surtout la capitale d’une région entière : **le Chianti commence aux portes de la ville**, Sienne et San Gimignano se rejoignent en une heure, Pise et Lucques en une heure également. En mise à disposition à la journée, votre chauffeur compose l’itinéraire toscan idéal — domaines viticoles, villages perchés, tables étoilées de campagne — pendant que vous profitez du paysage.',
      ],
      en: [
        'Cradle of the Renaissance, Florence packs Brunelleschi’s Duomo, the Uffizi, Michelangelo’s David and the Ponte Vecchio into a few hundred metres. The centre is largely pedestrian and governed by a strict ZTL: your **private chauffeur in Florence** knows every authorised access point and drops you as close as possible to your hotel or the museums, exactly on time for your booked entry slots.',
        'Above all, Florence commands an entire region: **Chianti begins at the city gates**, Siena and San Gimignano are an hour away, Pisa and Lucca an hour as well. With a full-day hire, your chauffeur composes the ideal Tuscan itinerary — wine estates, hilltop villages, starred country tables — while you enjoy the landscape.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Chianti Classico, route des domaines', en: 'Chianti Classico estate route' },
        teaser: {
          fr: 'Greve, Panzano, Castellina et Radda : la route du Gallo Nero entre cyprès et oliveraies. Deux dégustations dans des domaines historiques, déjeuner chez le boucher-poète de Panzano ou dans une fattoria. Vous goûtez, votre chauffeur conduit.',
          en: 'Greve, Panzano, Castellina and Radda: the Gallo Nero road through cypresses and olive groves. Two tastings at historic estates, lunch at Panzano’s celebrated butcher or in a fattoria. You taste, your chauffeur drives.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Sienne et San Gimignano', en: 'Siena and San Gimignano' },
        teaser: {
          fr: 'Les deux joyaux médiévaux de Toscane en une journée : la piazza del Campo et le Duomo de Sienne, puis les quatorze tours de San Gimignano au couchant. Passage par Monteriggioni en option.',
          en: 'Tuscany’s two medieval jewels in one day: Siena’s Piazza del Campo and Duomo, then San Gimignano’s fourteen towers at sunset. Optional stop at Monteriggioni.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Val d’Orcia, Pienza et Montalcino', en: 'Val d’Orcia, Pienza and Montalcino' },
        teaser: {
          fr: 'Le paysage toscan par excellence, classé UNESCO : collines ondulées, cyprès de San Quirico, fromages de Pienza et brunello de Montalcino. Une journée photographique et gourmande à deux heures au sud de Florence.',
          en: 'The definitive UNESCO-listed Tuscan landscape: rolling hills, the cypresses of San Quirico, Pienza’s pecorino and Montalcino’s Brunello. A photographic, gourmet day two hours south of Florence.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Pise et Lucques', en: 'Pisa and Lucca' },
        teaser: {
          fr: 'La piazza dei Miracoli et sa tour penchée, puis Lucques la secrète : remparts plantés d’arbres, piazza dell’Anfiteatro, maison de Puccini. Deux villes complémentaires à une heure de Florence.',
          en: 'The Piazza dei Miracoli and its leaning tower, then secret Lucca: tree-lined ramparts, Piazza dell’Anfiteatro, Puccini’s birthplace. Two complementary cities an hour from Florence.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Soirée Oltrarno et piazzale Michelangelo', en: 'Oltrarno evening and Piazzale Michelangelo' },
        teaser: {
          fr: 'Le coucher de soleil sur la ville depuis le piazzale Michelangelo, puis dîner dans l’Oltrarno des artisans — Santo Spirito, San Frediano. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Sunset over the city from Piazzale Michelangelo, then dinner in the artisan Oltrarno — Santo Spirito, San Frediano. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Florence et le centre-ville ?',
          en: 'How much does a transfer between Florence Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Peretola (FLR) et le centre de Florence est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus. Nous desservons aussi Pise (PSA) et Bologne (BLQ) à prix fixe.',
          en: 'A private transfer between Peretola (FLR) and central Florence is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included. We also serve Pisa (PSA) and Bologna (BLQ) at fixed prices.',
        },
      },
      {
        q: {
          fr: 'Votre chauffeur peut-il entrer dans la ZTL de Florence ?',
          en: 'Can your chauffeur enter Florence’s ZTL?',
        },
        a: {
          fr: 'Oui, nos véhicules avec chauffeur disposent des autorisations NCC pour la ZTL florentine. Vous êtes déposé au plus près de votre hôtel, des Offices ou de l’Accademia, dans le respect des rues strictement piétonnes autour du Duomo.',
          en: 'Yes, our chauffeur-driven vehicles hold NCC permits for the Florentine ZTL. You are dropped as close as possible to your hotel, the Uffizi or the Accademia, within the limits of the fully pedestrian streets around the Duomo.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser un circuit de plusieurs jours en Toscane depuis Florence ?',
          en: 'Can you arrange a multi-day Tuscany tour from Florence?',
        },
        a: {
          fr: 'Oui. Nous composons des itinéraires de deux à cinq jours — Chianti, Val d’Orcia, côte tyrrhénienne — avec le même chauffeur du premier au dernier jour, hôtels et tables réservés en coordination avec votre conciergerie.',
          en: 'Yes. We build two- to five-day itineraries — Chianti, Val d’Orcia, the Tyrrhenian coast — with the same chauffeur throughout, hotels and restaurants booked in coordination with your concierge.',
        },
      },
    ],
    nearby: [],
  },
  {
    slug: 'naples',
    name: { fr: 'Naples', en: 'Naples' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Naples-Capodichino (NAP)',
    airportTransfer: {
      fr: 'L’aéroport de Naples-Capodichino (NAP) n’est qu’à 7 km au nord-est du centre : comptez 20 à 30 minutes selon le trafic pour rejoindre le front de mer de Chiaia ou le port de Beverello. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif, suit votre vol en temps réel et coordonne au besoin votre correspondance hydroglisseur vers Capri ou Ischia.',
      en: 'Naples-Capodichino Airport (NAP) is just 7 km north-east of the centre: allow 20 to 30 minutes depending on traffic to reach the Chiaia seafront or the Beverello port. Your chauffeur greets you in arrivals with a name board, tracks your flight in real time and, if needed, coordinates your hydrofoil connection to Capri or Ischia.',
    },
    intro: {
      fr: [
        'Exubérante, dense, magnifique : Naples se vit sous la protection du Vésuve, entre le musée archéologique — le plus riche du monde antique —, les décumans de Spaccanapoli et le front de mer de Mergellina. Circuler y est un art : votre **chauffeur privé à Naples** en maîtrise les codes, sécurise vos trajets et vous dépose au plus près des sites, du théâtre San Carlo aux ateliers de Capodimonte.',
        'Naples commande le golfe le plus célèbre d’Italie : **Pompéi et Herculanum** à trente minutes, la côte amalfitaine à une heure et demie, les embarcadères pour Capri, Ischia et Procida au pied du Castel Nuovo. Votre chauffeur articule visites archéologiques, correspondances maritimes et tables de Chiaia avec une précision qui change tout dans une région où l’improvisation coûte cher.',
      ],
      en: [
        'Exuberant, dense, magnificent: Naples lives beneath Vesuvius, between the archaeological museum — the ancient world’s richest —, the decumani of Spaccanapoli and the Mergellina seafront. Driving here is an art: your **private chauffeur in Naples** knows its codes, keeps your journeys secure and drops you as close as possible to every site, from the San Carlo theatre to the Capodimonte workshops.',
        'Naples commands Italy’s most famous gulf: **Pompeii and Herculaneum** thirty minutes away, the Amalfi Coast an hour and a half, and the piers for Capri, Ischia and Procida at the foot of Castel Nuovo. Your chauffeur weaves together archaeological visits, ferry connections and Chiaia dinner tables with a precision that changes everything in a region where improvisation is costly.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Pompéi et le Vésuve', en: 'Pompeii and Vesuvius' },
        teaser: {
          fr: 'La ville romaine figée en 79 puis la montée au cratère du volcan qui l’a ensevelie : le duo incontournable du golfe. Guide privé en option à Pompéi, déjeuner dans un domaine viticole sur les pentes du Vésuve.',
          en: 'The Roman city frozen in AD 79, then the climb to the crater of the volcano that buried it: the gulf’s essential pairing. Optional private guide at Pompeii, lunch at a wine estate on the slopes of Vesuvius.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Côte amalfitaine en berline', en: 'The Amalfi Coast by sedan' },
        teaser: {
          fr: 'Positano, Amalfi et Ravello en une journée depuis Naples : la route en corniche la plus spectaculaire d’Europe, sans le stress du volant ni du stationnement. Arrêts photo, déjeuner en terrasse face à la mer.',
          en: 'Positano, Amalfi and Ravello in a day from Naples: Europe’s most spectacular corniche road, without the stress of driving or parking. Photo stops, terrace lunch above the sea.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Herculanum et les villas du Miglio d’Oro', en: 'Herculaneum and the Miglio d’Oro villas' },
        teaser: {
          fr: 'Mieux conservée que Pompéi, Herculanum livre bois carbonisés, mosaïques et fresques intactes. En complément, les villas vésuviennes du XVIIIᵉ siècle le long du Miglio d’Oro. À trente minutes du centre.',
          en: 'Better preserved than Pompeii, Herculaneum reveals carbonised wood, mosaics and intact frescoes. Pair it with the eighteenth-century Vesuvian villas of the Miglio d’Oro. Thirty minutes from the centre.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Champs Phlégréens et Pouzzoles', en: 'The Phlegraean Fields and Pozzuoli' },
        teaser: {
          fr: 'À l’ouest de Naples, l’autre volcan : la solfatare, l’amphithéâtre de Pouzzoles, le parc sous-marin de Baïes et le cap Misène. L’Antiquité romaine balnéaire, loin des foules de Pompéi.',
          en: 'West of Naples, the other volcano: the Solfatara, the Pozzuoli amphitheatre, the underwater park of Baiae and Cape Misenum. Ancient Rome’s seaside playground, far from the Pompeii crowds.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '430',
      },
      {
        title: { fr: 'Soirée napolitaine, San Carlo et Chiaia', en: 'Neapolitan evening, San Carlo and Chiaia' },
        teaser: {
          fr: 'Dépose devant le Teatro San Carlo — le plus ancien opéra d’Europe en activité — puis dîner à Chiaia ou sur le Borgo Marinari face au Castel dell’Ovo. Véhicule à disposition, retour d’hôtel sans contrainte.',
          en: 'Drop-off at the Teatro San Carlo — Europe’s oldest working opera house — then dinner in Chiaia or on the Borgo Marinari facing Castel dell’Ovo. Vehicle on standby, effortless hotel return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '360',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Capodichino et le centre de Naples ?',
          en: 'How much does a transfer between Capodichino and central Naples cost?',
        },
        a: {
          fr: 'Le transfert privé entre Capodichino (NAP) et le centre de Naples est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus, comme la dépose au port de Beverello pour vos correspondances vers les îles.',
          en: 'A private transfer between Capodichino (NAP) and central Naples is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included, as is drop-off at Beverello port for island connections.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer un transfert direct de l’aéroport de Naples vers Positano ou Amalfi ?',
          en: 'Can you transfer directly from Naples Airport to Positano or Amalfi?',
        },
        a: {
          fr: 'Oui, c’est l’un de nos trajets les plus demandés : comptez environ 1 h 15 pour Sorrente, 1 h 30 pour Positano et 1 h 45 pour Amalfi ou Ravello, à prix fixe. En haute saison, le chauffeur adapte l’horaire aux embouteillages de la SS163.',
          en: 'Yes, it is one of our most requested journeys: around 1 h 15 to Sorrento, 1 h 30 to Positano and 1 h 45 to Amalfi or Ravello, at a fixed price. In high season the chauffeur adjusts timings to SS163 traffic.',
        },
      },
      {
        q: {
          fr: 'Mes bagages sont-ils en sécurité pendant les visites à Naples ?',
          en: 'Is my luggage safe during visits in Naples?',
        },
        a: {
          fr: 'Oui. Le véhicule reste sous la surveillance de votre chauffeur pendant chaque visite : vos bagages ne sont jamais laissés sans garde. C’est l’un des grands avantages du chauffeur privé à Naples par rapport à la voiture de location.',
          en: 'Yes. The vehicle stays under your chauffeur’s watch during every visit: your luggage is never left unattended. It is one of the great advantages of a private chauffeur in Naples over a rental car.',
        },
      },
    ],
    nearby: [],
  },
  {
    slug: 'turin',
    name: { fr: 'Turin', en: 'Turin' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Turin-Caselle (TRN)',
    airportTransfer: {
      fr: 'L’aéroport de Turin-Caselle (TRN) se trouve à 16 km au nord du centre : comptez 25 à 30 minutes pour rejoindre la piazza Castello ou le quartier du Quadrilatero Romano. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel. Milan-Malpensa, à 110 km, se rejoint en 1 h 15 environ.',
      en: 'Turin-Caselle Airport (TRN) lies 16 km north of the centre: allow 25 to 30 minutes to reach Piazza Castello or the Quadrilatero Romano district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time. Milan-Malpensa, 110 km away, is around 1 h 15.',
    },
    intro: {
      fr: [
        'Première capitale de l’Italie unifiée, Turin aligne places royales, arcades baroques et cafés historiques sous le regard de la Mole Antonelliana. Ville d’industrie et d’élégance — Fiat, le Lingotto, le musée égyptien le plus important après Le Caire —, elle se parcourt idéalement avec un **chauffeur privé à Turin** : transferts aéroport, mises à disposition pour vos rendez-vous d’affaires, soirées au Cambio ou dans les caffè storici.',
        'Turin est la porte des Alpes et des vignobles : **les Langhe et le Barolo** à une heure au sud, Alba et sa truffe blanche en automne, les résidences de Savoie — Venaria, Stupinigi — en couronne autour de la ville, les stations de la Voie lactée à 1 h 30. Votre chauffeur compose des journées où grands crus, panoramas alpins et patrimoine royal s’enchaînent sans effort.',
      ],
      en: [
        'The first capital of unified Italy, Turin lines up royal squares, Baroque arcades and historic cafés beneath the Mole Antonelliana. A city of industry and elegance — Fiat, the Lingotto, the most important Egyptian museum after Cairo — it is best explored with a **private chauffeur in Turin**: airport transfers, hourly hire for business meetings, evenings at Del Cambio or in the caffè storici.',
        'Turin is the gateway to the Alps and the vineyards: **the Langhe and Barolo** an hour south, Alba and its white truffle in autumn, the Savoy residences — Venaria, Stupinigi — ringing the city, and the Milky Way ski resorts 1 h 30 away. Your chauffeur composes days where great wines, alpine panoramas and royal heritage flow together effortlessly.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Langhe, Barolo et Barbaresco', en: 'Langhe, Barolo and Barbaresco' },
        teaser: {
          fr: 'À une heure de Turin, les collines UNESCO du grand vin piémontais : dégustations à La Morra et Barbaresco, château de Grinzane Cavour, déjeuner face aux vignes. Vous goûtez nebbiolo et barolo, votre chauffeur conduit.',
          en: 'An hour from Turin, the UNESCO hills of great Piedmontese wine: tastings in La Morra and Barbaresco, Grinzane Cavour castle, lunch overlooking the vines. You taste Nebbiolo and Barolo; your chauffeur drives.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '820',
      },
      {
        title: { fr: 'Alba et la truffe blanche', en: 'Alba and the white truffle' },
        teaser: {
          fr: 'D’octobre à décembre, la capitale mondiale de la truffe blanche : foire internationale, chasse à la truffe avec trifulau et son chien, déjeuner truffé dans une adresse étoilée des environs.',
          en: 'From October to December, the world capital of the white truffle: the international fair, a truffle hunt with a trifulau and his dog, and a truffle lunch at a nearby starred address.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '950',
      },
      {
        title: { fr: 'La Venaria Reale et les résidences de Savoie', en: 'Venaria Reale and the Savoy residences' },
        teaser: {
          fr: 'Le « Versailles italien » à 10 km du centre : la Galleria Grande, les jardins redessinés, puis la palazzina de chasse de Stupinigi. Deux joyaux UNESCO de la couronne savoyarde en une demi-journée.',
          en: 'The “Italian Versailles” 10 km from the centre: the Galleria Grande, the recreated gardens, then the Stupinigi hunting lodge. Two UNESCO jewels of the Savoy crown in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Sacra di San Michele et val de Suse', en: 'Sacra di San Michele and the Susa Valley' },
        teaser: {
          fr: 'L’abbaye millénaire perchée sur son piton rocheux, symbole du Piémont et inspiration du « Nom de la rose », puis les forts de la vallée de Suse. Panoramas alpins à 40 minutes de Turin.',
          en: 'The thousand-year-old abbey on its rocky spur, symbol of Piedmont and inspiration for “The Name of the Rose”, then the forts of the Susa Valley. Alpine panoramas 40 minutes from Turin.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Soirée turinoise, caffè storici et Cambio', en: 'Turin evening, historic cafés and Del Cambio' },
        teaser: {
          fr: 'Apéritif au Caffè Torino ou chez Baratti & Milano sous les arcades, dîner au Cambio face au Palazzo Carignano, où dînait Cavour. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Aperitivo at Caffè Torino or Baratti & Milano beneath the arcades, dinner at Del Cambio opposite Palazzo Carignano, where Cavour dined. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Turin-Caselle et le centre-ville ?',
          en: 'How much does a transfer between Turin-Caselle and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Caselle (TRN) et le centre de Turin est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Caselle (TRN) and central Turin is charged at a fixed price, confirmed at booking. Arrivals-hall meet-and-greet with a name board, real-time flight tracking and complimentary waiting time are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers les stations de ski depuis Turin ?',
          en: 'Do you provide ski-resort transfers from Turin?',
        },
        a: {
          fr: 'Oui. Sestrières, Sauze d’Oulx et la Voie lactée se rejoignent en 1 h 30 environ, Courmayeur en 1 h 45. Nos véhicules sont équipés pour l’hiver et transportent skis et bagages volumineux ; les horaires s’adaptent aux conditions de route.',
          en: 'Yes. Sestriere, Sauze d’Oulx and the Milky Way are around 1 h 30 away, Courmayeur 1 h 45. Our vehicles are winter-equipped and carry skis and bulky luggage; timings adapt to road conditions.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Turin et une journée dans les Langhe ?',
          en: 'Can I combine Turin with a day in the Langhe?',
        },
        a: {
          fr: 'C’est notre programme le plus demandé au Piémont : matinée en ville — musée égyptien, Mole —, puis après-midi dans les vignes de Barolo avec dégustation, ou journée complète dédiée aux Langhe. Prix fixe et itinéraire ajustable en cours de route.',
          en: 'It is our most requested Piedmont programme: a morning in the city — Egyptian Museum, the Mole — then an afternoon in the Barolo vineyards with a tasting, or a full day devoted to the Langhe. Fixed price, itinerary adjustable en route.',
        },
      },
    ],
    nearby: ['milan', 'genoa'],
  },
  {
    slug: 'bologna',
    name: { fr: 'Bologne', en: 'Bologna' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Bologne-Marconi (BLQ)',
    airportTransfer: {
      fr: 'L’aéroport de Bologne-Guglielmo Marconi (BLQ) n’est qu’à 6 km au nord-ouest du centre : 15 à 20 minutes suffisent pour rejoindre la piazza Maggiore ou les Deux Tours. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel pour ajuster l’heure de prise en charge.',
      en: 'Bologna-Guglielmo Marconi Airport (BLQ) is just 6 km north-west of the centre: 15 to 20 minutes to reach Piazza Maggiore or the Two Towers. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time to adjust the pick-up.',
    },
    intro: {
      fr: [
        'La Dotta, la Grassa, la Rossa : savante par son université millénaire, gourmande par sa cuisine, rouge par ses 40 km de portiques classés UNESCO. Bologne est aussi un carrefour ferroviaire et économique majeur : votre **chauffeur privé à Bologne** relie l’aéroport Marconi, la gare Centrale, la Fiera et les sièges industriels de l’Émilie avec la ponctualité qu’exige une clientèle d’affaires.',
        'Autour de Bologne s’étend la **Motor Valley** — Ferrari à Maranello, Lamborghini à Sant’Agata, Ducati aux portes de la ville — et la vallée gastronomique du parmesan, du vinaigre balsamique de Modène et du jambon de Parme. En mise à disposition à la journée, votre chauffeur compose l’itinéraire mêlant musées de légende, ateliers de producteurs et tables étoilées, dont l’Osteria Francescana à Modène.',
      ],
      en: [
        'La Dotta, la Grassa, la Rossa: learned through its thousand-year-old university, indulgent through its cuisine, red through its 40 km of UNESCO-listed porticoes. Bologna is also a major rail and business hub: your **private chauffeur in Bologna** links Marconi Airport, the Centrale station, the Fiera and Emilia’s industrial headquarters with the punctuality a business clientele demands.',
        'Around Bologna stretches the **Motor Valley** — Ferrari in Maranello, Lamborghini in Sant’Agata, Ducati at the city gates — and the gastronomic valley of Parmesan, Modena balsamic vinegar and Parma ham. With a full-day hire, your chauffeur builds an itinerary weaving legendary museums, producers’ workshops and starred tables, including Osteria Francescana in Modena.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Motor Valley : Ferrari et Lamborghini', en: 'Motor Valley: Ferrari and Lamborghini' },
        teaser: {
          fr: 'Maranello et le musée Ferrari, Sant’Agata Bolognese et Lamborghini, avec essai de pilotage en option. Une journée de légende automobile à moins d’une heure de Bologne, déjeuner au Cavallino en face de l’usine.',
          en: 'Maranello and the Ferrari museum, Sant’Agata Bolognese and Lamborghini, with an optional test drive. A day of motoring legend under an hour from Bologna, lunch at the Cavallino opposite the factory.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '780',
      },
      {
        title: { fr: 'Modène gourmande : balsamique et parmesan', en: 'Gourmet Modena: balsamic and Parmesan' },
        teaser: {
          fr: 'Visite d’une acetaia familiale et de ses fûts centenaires, puis d’une fromagerie de Parmigiano Reggiano au petit matin. Déjeuner à Modène, ville d’Enzo Ferrari et de Massimo Bottura.',
          en: 'Visit a family acetaia and its century-old barrels, then an early-morning Parmigiano Reggiano dairy. Lunch in Modena, city of Enzo Ferrari and Massimo Bottura.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Parme, jambon et Corrège', en: 'Parma, ham and Correggio' },
        teaser: {
          fr: 'À une heure de Bologne, la ville ducale : coupole du Corrège au Duomo, Teatro Farnese, puis visite d’un séchoir de prosciutto di Parma dans les collines de Langhirano. Culture et gastronomie à parts égales.',
          en: 'An hour from Bologna, the ducal city: Correggio’s dome in the Duomo, the Teatro Farnese, then a prosciutto di Parma curing house in the Langhirano hills. Culture and gastronomy in equal measure.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
      {
        title: { fr: 'Ravenne et ses mosaïques', en: 'Ravenna and its mosaics' },
        teaser: {
          fr: 'À 80 km à l’est, huit monuments UNESCO : les mosaïques byzantines de San Vitale, le mausolée de Galla Placidia, le tombeau de Dante. Le plus grand trésor paléochrétien d’Occident en une journée.',
          en: '80 km east, eight UNESCO monuments: the Byzantine mosaics of San Vitale, the Mausoleum of Galla Placidia, Dante’s tomb. The West’s greatest early-Christian treasure in a day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée bolonaise sous les portiques', en: 'Bologna evening beneath the porticoes' },
        teaser: {
          fr: 'Apéritif dans le Quadrilatero, dîner de tagliatelle al ragù et tortellini dans une osteria historique, puis montée à San Luca pour la vue nocturne. Dépose devant chaque adresse, véhicule à disposition.',
          en: 'Aperitivo in the Quadrilatero, a dinner of tagliatelle al ragù and tortellini in a historic osteria, then up to San Luca for the night view. Door-to-door drop-offs, vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '330',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport Marconi et le centre de Bologne ?',
          en: 'How much does a transfer between Marconi Airport and central Bologna cost?',
        },
        a: {
          fr: 'Le transfert privé entre Marconi (BLQ) et le centre de Bologne est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Marconi (BLQ) and central Bologna is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, real-time flight tracking and complimentary waiting time are included.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser la visite des usines Ferrari ou Lamborghini ?',
          en: 'Can you arrange visits to the Ferrari or Lamborghini factories?',
        },
        a: {
          fr: 'Nous assurons le transport et coordonnons les réservations des musées et, lorsque les constructeurs les ouvrent, des visites d’usine et essais sur piste. Ces créneaux étant limités, réservez idéalement deux semaines à l’avance.',
          en: 'We provide the transport and coordinate museum bookings and, when the manufacturers open them, factory tours and track drives. Slots are limited, so ideally book two weeks ahead.',
        },
      },
      {
        q: {
          fr: 'Bologne est-elle une bonne base pour rayonner en Émilie-Romagne ?',
          en: 'Is Bologna a good base for exploring Emilia-Romagna?',
        },
        a: {
          fr: 'Excellente : Modène est à 40 minutes, Parme et Ravenne à une heure, Florence à une heure au sud. En mise à disposition à la journée, votre chauffeur enchaîne les étapes à prix fixe, avec un itinéraire ajustable en cours de route.',
          en: 'Excellent: Modena is 40 minutes away, Parma and Ravenna an hour, Florence an hour south. With full-day hire, your chauffeur links the stops at a fixed price, with an itinerary adjustable en route.',
        },
      },
    ],
    nearby: ['florence', 'verona', 'venice', 'milan'],
  },
  {
    slug: 'genoa',
    name: { fr: 'Gênes', en: 'Genoa' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Gênes-Cristoforo Colombo (GOA)',
    airportTransfer: {
      fr: 'L’aéroport de Gênes-Cristoforo Colombo (GOA), construit sur une presqu’île artificielle, n’est qu’à 7 km à l’ouest du centre : comptez 20 minutes pour rejoindre le Porto Antico ou la via Garibaldi. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Genoa-Cristoforo Colombo Airport (GOA), built on an artificial peninsula, is just 7 km west of the centre: allow 20 minutes to reach the Porto Antico or Via Garibaldi. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'La Superba domine son port depuis mille ans : palais des Rolli classés UNESCO le long de la via Garibaldi, plus grand centre médiéval d’Europe, aquarium de renommée mondiale sur le Porto Antico rénové par Renzo Piano. Ville verticale aux ruelles inaccessibles en voiture, Gênes se pratique avec méthode : votre **chauffeur privé à Gênes** vous dépose aux bons accès des caruggi et gère port, gares et aéroport avec fluidité.',
        'Gênes est surtout la charnière des deux Rivieras : **Portofino et Santa Margherita** à 40 minutes vers l’est, les Cinque Terre à une heure et demie, San Remo et la frontière française vers l’ouest. Croisiéristes en escale, plaisanciers rejoignant leur yacht, voyageurs en route vers le Piémont ou Milan : votre chauffeur articule chaque correspondance à prix fixe, bagages pris en charge de bout en bout.',
      ],
      en: [
        'La Superba has ruled its harbour for a thousand years: the UNESCO-listed Rolli palaces along Via Garibaldi, Europe’s largest medieval centre, a world-famous aquarium on the Porto Antico redesigned by Renzo Piano. A vertical city of lanes no car can enter, Genoa rewards method: your **private chauffeur in Genoa** drops you at the right gateways to the caruggi and handles port, stations and airport smoothly.',
        'Above all, Genoa hinges the two Rivieras: **Portofino and Santa Margherita** 40 minutes east, the Cinque Terre an hour and a half away, San Remo and the French border to the west. Cruise passengers on a call, yacht owners joining their boat, travellers bound for Piedmont or Milan: your chauffeur times every connection at a fixed price, luggage handled end to end.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Portofino et San Fruttuoso', en: 'Portofino and San Fruttuoso' },
        teaser: {
          fr: 'La piazzetta la plus photographiée d’Italie, le château Brown au-dessus du port, puis l’abbaye de San Fruttuoso accessible en bateau. Déjeuner face aux yachts, retour par Santa Margherita et Rapallo.',
          en: 'Italy’s most photographed piazzetta, Castello Brown above the harbour, then the San Fruttuoso abbey reached by boat. Lunch facing the yachts, return via Santa Margherita and Rapallo.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Cinque Terre depuis Gênes', en: 'The Cinque Terre from Genoa' },
        teaser: {
          fr: 'Votre chauffeur vous conduit à La Spezia ou Levanto, d’où train et bateau desservent Monterosso, Vernazza et Riomaggiore — les villages étant fermés aux voitures. Journée coordonnée de bout en bout, retour à Gênes le soir.',
          en: 'Your chauffeur drives you to La Spezia or Levanto, from where train and boat serve Monterosso, Vernazza and Riomaggiore — the villages are closed to cars. A fully coordinated day, back in Genoa by evening.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '850',
      },
      {
        title: { fr: 'Palais des Rolli et vieille ville', en: 'The Rolli palaces and the old town' },
        teaser: {
          fr: 'Via Garibaldi et ses palais UNESCO — Palazzo Rosso, Palazzo Bianco, Palazzo Doria-Tursi —, la cathédrale San Lorenzo et le labyrinthe des caruggi avec guide privé. Votre chauffeur vous attend aux points de sortie convenus.',
          en: 'Via Garibaldi and its UNESCO palaces — Palazzo Rosso, Palazzo Bianco, Palazzo Doria-Tursi —, San Lorenzo cathedral and the caruggi labyrinth with a private guide. Your chauffeur waits at agreed exit points.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '430',
      },
      {
        title: { fr: 'Riviera du Ponant, Camogli et Nervi', en: 'Camogli, Nervi and the eastern shore' },
        teaser: {
          fr: 'Les façades peintes de Camogli, la passeggiata Anita Garibaldi taillée dans la falaise à Nervi et ses musées, focaccia tiède face au port. La Ligurie authentique à trente minutes du centre.',
          en: 'Camogli’s painted façades, the cliff-carved Anita Garibaldi promenade at Nervi and its museums, warm focaccia by the harbour. Authentic Liguria thirty minutes from the centre.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '410',
      },
      {
        title: { fr: 'Soirée génoise, Porto Antico', en: 'Genoa evening, Porto Antico' },
        teaser: {
          fr: 'Dîner de trofie al pesto et poissons de la criée dans une trattoria de Boccadasse ou du Porto Antico, puis la ville illuminée depuis la Spianata Castelletto. Véhicule à disposition toute la soirée.',
          en: 'A dinner of trofie al pesto and market-fresh fish in a Boccadasse or Porto Antico trattoria, then the illuminated city from Spianata Castelletto. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Gênes et le centre-ville ?',
          en: 'How much does a transfer between Genoa Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Cristoforo Colombo (GOA) et le centre de Gênes est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Cristoforo Colombo (GOA) and central Genoa is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts depuis le terminal croisières de Gênes ?',
          en: 'Do you provide transfers from Genoa’s cruise terminal?',
        },
        a: {
          fr: 'Oui. Nous prenons en charge les passagers au terminal Stazione Marittima, à quai, avec panneau nominatif. Transferts vers l’aéroport, Milan, Portofino ou excursion d’escale à la journée : tout est devisé à prix fixe avant votre arrivée.',
          en: 'Yes. We meet cruise passengers dockside at the Stazione Marittima terminal with a name board. Transfers to the airport, Milan or Portofino, or a full shore-excursion day: everything is quoted at a fixed price before you arrive.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Portofino ou Milan directement depuis l’aéroport de Gênes ?',
          en: 'Can I reach Portofino or Milan directly from Genoa Airport?',
        },
        a: {
          fr: 'Bien sûr. Portofino est à 45 minutes environ, Santa Margherita à 40 minutes, Milan à 2 heures et Monaco à 2 heures également. Chaque trajet est confirmé à prix fixe à la réservation, avec suivi de votre vol.',
          en: 'Of course. Portofino is around 45 minutes away, Santa Margherita 40 minutes, Milan 2 hours and Monaco 2 hours as well. Every journey is confirmed at a fixed price at booking, with flight tracking.',
        },
      },
    ],
    nearby: [],
  },
  {
    slug: 'verona',
    name: { fr: 'Vérone', en: 'Verona' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Vérone-Villafranca (VRN)',
    airportTransfer: {
      fr: 'L’aéroport de Vérone-Villafranca « Valerio Catullo » (VRN) se trouve à 12 km au sud-ouest du centre : comptez 20 minutes pour rejoindre la piazza Bra et les arènes. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel. Le lac de Garde est à 25 minutes seulement.',
      en: 'Verona-Villafranca “Valerio Catullo” Airport (VRN) lies 12 km south-west of the centre: allow 20 minutes to reach Piazza Bra and the arena. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time. Lake Garda is just 25 minutes away.',
    },
    intro: {
      fr: [
        'Ville de Roméo et Juliette et écrin UNESCO, Vérone déroule ses arènes romaines, la piazza delle Erbe, les tombeaux Scaliger et le pont fortifié de Castelvecchio sur l’Adige. L’été, le festival lyrique des arènes attire le monde entier : votre **chauffeur privé à Vérone** vous dépose au plus près de la piazza Bra avant la représentation et vous attend à la sortie, aussi tard que dure l’opéra.',
        'Vérone règne sur un territoire béni : **le lac de Garde à vingt-cinq minutes**, Sirmione et ses eaux thermales, les vignobles de Valpolicella et de Soave aux portes de la ville, Venise et les Dolomites à portée de journée. Amarone dégusté chez les producteurs, déjeuner face au lac, retour serein : votre chauffeur transforme la région en un itinéraire sans couture.',
      ],
      en: [
        'City of Romeo and Juliet and a UNESCO treasure, Verona unfolds its Roman arena, Piazza delle Erbe, the Scaliger tombs and the fortified Castelvecchio bridge over the Adige. In summer, the arena opera festival draws the whole world: your **private chauffeur in Verona** drops you beside Piazza Bra before the performance and waits at the exit, however late the opera runs.',
        'Verona presides over blessed country: **Lake Garda twenty-five minutes away**, Sirmione and its thermal waters, the Valpolicella and Soave vineyards at the city gates, Venice and the Dolomites within a day’s reach. Amarone tasted at the producers’, lunch above the lake, a serene return: your chauffeur turns the region into one seamless itinerary.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Valpolicella et l’amarone', en: 'Valpolicella and Amarone' },
        teaser: {
          fr: 'À quinze minutes du centre, les collines de l’amarone : visite des fruttai où sèchent les raisins, dégustations verticales chez deux domaines historiques, déjeuner dans une villa vénitienne au milieu des vignes.',
          en: 'Fifteen minutes from the centre, the Amarone hills: visit the fruttai where the grapes dry, vertical tastings at two historic estates, lunch in a Venetian villa amid the vines.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '760',
      },
      {
        title: { fr: 'Sirmione et le lac de Garde', en: 'Sirmione and Lake Garda' },
        teaser: {
          fr: 'La presqu’île de Catulle : château Scaliger entouré d’eau, grottes de Catulle sur la pointe, gelato sur le port. Poursuite possible vers Bardolino et Punta San Vigilio sur la rive orientale.',
          en: 'Catullus’ peninsula: the water-ringed Scaliger castle, the Grotte di Catullo at the tip, gelato by the harbour. Optional continuation to Bardolino and Punta San Vigilio on the eastern shore.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '460',
      },
      {
        title: { fr: 'Soirée d’opéra aux arènes', en: 'Opera night at the arena' },
        teaser: {
          fr: 'De juin à septembre, Aida ou Nabucco sous les étoiles dans l’amphithéâtre romain. Dîner tôt réservé près de la piazza Bra, dépose au plus près des gradins, retour de nuit garanti vers votre hôtel ou le lac.',
          en: 'From June to September, Aida or Nabucco beneath the stars in the Roman amphitheatre. Early dinner booked near Piazza Bra, drop-off beside the tiers, guaranteed late-night return to your hotel or the lake.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
      {
        title: { fr: 'Soave et les collines de l’est', en: 'Soave and the eastern hills' },
        teaser: {
          fr: 'Le bourg fortifié de Soave, son château crénelé et son grand blanc de garganega : deux dégustations, promenade dans les remparts, retour par les villas palladiennes de la campagne véronaise.',
          en: 'The walled town of Soave, its crenellated castle and its great Garganega white: two tastings, a walk along the ramparts, return via the Palladian villas of the Veronese countryside.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '440',
      },
      {
        title: { fr: 'Journée Venise depuis Vérone', en: 'Venice day trip from Verona' },
        teaser: {
          fr: 'À 120 km à l’est, la Sérénissime en une journée : dépose au Piazzale Roma, taxi lagunaire en option vers Saint-Marc, retour en soirée. Votre chauffeur vous attend, la logistique disparaît.',
          en: '120 km east, the Serenissima in a day: drop-off at Piazzale Roma, optional water taxi to St Mark’s, evening return. Your chauffeur waits; the logistics disappear.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Vérone et le centre-ville ?',
          en: 'How much does a transfer between Verona Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Villafranca (VRN) et le centre de Vérone est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus. Le lac de Garde est desservi aux mêmes conditions.',
          en: 'A private transfer between Villafranca (VRN) and central Verona is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included. Lake Garda is served on the same terms.',
        },
      },
      {
        q: {
          fr: 'Attendez-vous les spectateurs après l’opéra aux arènes ?',
          en: 'Do you wait for guests after the arena opera?',
        },
        a: {
          fr: 'Oui, c’est notre service signature à Vérone : les représentations se terminent souvent après minuit, et votre chauffeur vous attend à un point de rencontre convenu près de la piazza Bra, quel que soit l’horaire de fin.',
          en: 'Yes, it is our signature service in Verona: performances often end after midnight, and your chauffeur waits at an agreed meeting point near Piazza Bra, whatever the finishing time.',
        },
      },
      {
        q: {
          fr: 'Vérone est-elle une bonne base pour visiter le lac de Garde ?',
          en: 'Is Verona a good base for visiting Lake Garda?',
        },
        a: {
          fr: 'Idéale : Sirmione est à 35 minutes, Bardolino et Garda à 30 minutes, Riva del Garda à 1 h 15 par la rive orientale. En mise à disposition à la journée, votre chauffeur longe le lac à votre rythme, arrêts photo et déjeuner compris dans l’itinéraire.',
          en: 'Ideal: Sirmione is 35 minutes away, Bardolino and Garda 30 minutes, Riva del Garda 1 h 15 along the eastern shore. With full-day hire, your chauffeur follows the lake at your pace, photo stops and lunch built into the route.',
        },
      },
    ],
    nearby: ['lake-garda-sirmione', 'riva-del-garda', 'venice', 'bologna'],
  },
  {
    slug: 'palermo',
    name: { fr: 'Palerme', en: 'Palermo' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Palerme-Falcone Borsellino (PMO)',
    airportTransfer: {
      fr: 'L’aéroport de Palerme-Falcone Borsellino (PMO), à Punta Raisi, se trouve à 35 km à l’ouest du centre : comptez 40 à 50 minutes par l’autoroute côtière pour rejoindre le Politeama ou les Quattro Canti. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Palermo-Falcone Borsellino Airport (PMO), at Punta Raisi, lies 35 km west of the centre: allow 40 to 50 minutes along the coastal motorway to reach the Politeama or the Quattro Canti. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Carrefour arabo-normand classé UNESCO, Palerme superpose la chapelle Palatine et ses mosaïques d’or, les coupoles rouges de San Cataldo, les marchés de Ballarò et du Capo, le Teatro Massimo — plus grand opéra d’Italie. La circulation palermitaine est un sport local : votre **chauffeur privé à Palerme** vous en dispense entièrement, des Quattro Canti aux plages de Mondello.',
        'Depuis Palerme, la Sicile occidentale se déploie : **la cathédrale de Monreale** et son cycle de mosaïques à vingt minutes, Cefalù et son Duomo normand à une heure, les temples de Ségeste et Sélinonte, Erice suspendue au-dessus de Trapani et la route des vins de Marsala. Votre chauffeur sicilien connaît chaque raccourci et chaque table qui compte — la meilleure façon d’aborder l’île.',
      ],
      en: [
        'A UNESCO-listed Arab-Norman crossroads, Palermo layers the Palatine Chapel and its golden mosaics, the red domes of San Cataldo, the Ballarò and Capo markets, and the Teatro Massimo — Italy’s largest opera house. Palermo traffic is a local sport: your **private chauffeur in Palermo** spares you all of it, from the Quattro Canti to the beaches of Mondello.',
        'From Palermo, western Sicily unfolds: **Monreale cathedral** and its mosaic cycle twenty minutes away, Cefalù and its Norman Duomo an hour away, the temples of Segesta and Selinunte, Erice suspended above Trapani and the Marsala wine road. Your Sicilian chauffeur knows every shortcut and every table that matters — the best possible introduction to the island.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Monreale et Cefalù', en: 'Monreale and Cefalù' },
        teaser: {
          fr: 'Les deux sommets de l’art normand en Sicile : les 6 000 m² de mosaïques de Monreale le matin, puis Cefalù, son Duomo et sa vieille ville entre mer et rocher. Déjeuner de poissons sur le port.',
          en: 'The twin summits of Norman art in Sicily: Monreale’s 6,000 square metres of mosaics in the morning, then Cefalù, its Duomo and its old town between sea and rock. Seafood lunch on the harbour.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Ségeste, Erice et les salines de Trapani', en: 'Segesta, Erice and the Trapani salt pans' },
        teaser: {
          fr: 'Le temple dorique solitaire de Ségeste, le bourg médiéval d’Erice à 750 mètres au-dessus de la mer — pâtisseries de Maria Grammatico comprises — puis les salines et moulins de Trapani au couchant.',
          en: 'The lone Doric temple of Segesta, the medieval town of Erice 750 metres above the sea — Maria Grammatico’s pastries included — then the Trapani salt pans and windmills at sunset.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Palerme arabo-normande avec guide', en: 'Arab-Norman Palermo with a guide' },
        teaser: {
          fr: 'Chapelle Palatine, cathédrale, San Giovanni degli Eremiti et le circuit UNESCO avec un guide privé, marchés de Ballarò et du Capo en contrepoint. Votre chauffeur relie chaque étape, à l’abri de la circulation.',
          en: 'The Palatine Chapel, the cathedral, San Giovanni degli Eremiti and the UNESCO circuit with a private guide, the Ballarò and Capo markets as counterpoint. Your chauffeur links every stop, away from the traffic.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '460',
      },
      {
        title: { fr: 'Mondello et la réserve de Capo Gallo', en: 'Mondello and the Capo Gallo reserve' },
        teaser: {
          fr: 'La plage Liberty des Palermitains, ses cabines Belle Époque et ses eaux turquoise au pied du mont Pellegrino, puis le sanctuaire de Santa Rosalia sur les hauteurs. L’échappée balnéaire à vingt minutes du centre.',
          en: 'Palermo’s own Liberty-style beach, Belle Époque cabins and turquoise water beneath Monte Pellegrino, then the Santa Rosalia sanctuary on the heights. A seaside escape twenty minutes from the centre.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Route des vins de Marsala', en: 'The Marsala wine road' },
        teaser: {
          fr: 'Cap à l’ouest vers les caves historiques de Marsala : dégustation de vins oxydatifs centenaires, passage par Mozia et sa lagune phénicienne, retour par la côte. Une journée œnologique hors des sentiers battus.',
          en: 'West to the historic Marsala cellars: tastings of century-old oxidative wines, a stop at Mozia and its Phoenician lagoon, return along the coast. A wine day well off the beaten track.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '840',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Palerme et le centre-ville ?',
          en: 'How much does a transfer between Palermo Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Falcone Borsellino (PMO) et le centre de Palerme est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Falcone Borsellino (PMO) and central Palermo is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser un circuit de plusieurs jours en Sicile depuis Palerme ?',
          en: 'Can you arrange a multi-day Sicily tour from Palermo?',
        },
        a: {
          fr: 'Oui. Nous composons des itinéraires de trois à sept jours — Palerme, Agrigente et la vallée des Temples, Syracuse, Taormine — avec le même chauffeur du début à la fin, hôtels et tables coordonnés avec votre conciergerie.',
          en: 'Yes. We build three- to seven-day itineraries — Palermo, Agrigento and the Valley of the Temples, Syracuse, Taormina — with the same chauffeur throughout, hotels and restaurants coordinated with your concierge.',
        },
      },
      {
        q: {
          fr: 'Le chauffeur peut-il accompagner une escale de croisière à Palerme ?',
          en: 'Can the chauffeur cover a cruise call in Palermo?',
        },
        a: {
          fr: 'Absolument. Prise en charge à quai à la Stazione Marittima, circuit adapté à votre horaire d’escale — Monreale, centre historique, Mondello — et retour au navire avec marge de sécurité garantie.',
          en: 'Absolutely. Dockside pick-up at the Stazione Marittima, a circuit tailored to your call time — Monreale, the historic centre, Mondello — and return to the ship with a guaranteed safety margin.',
        },
      },
    ],
    nearby: ['catania'],
  },
  {
    slug: 'catania',
    name: { fr: 'Catane', en: 'Catania' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Catane-Fontanarossa (CTA)',
    airportTransfer: {
      fr: 'L’aéroport de Catane-Fontanarossa (CTA), premier aéroport de Sicile, n’est qu’à 5 km au sud-ouest du centre : comptez 15 à 20 minutes pour rejoindre la piazza del Duomo et son éléphant de lave. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel. Taormine se rejoint en 50 minutes environ.',
      en: 'Catania-Fontanarossa Airport (CTA), Sicily’s busiest, is just 5 km south-west of the centre: allow 15 to 20 minutes to reach Piazza del Duomo and its lava-stone elephant. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time. Taormina is around 50 minutes away.',
    },
    intro: {
      fr: [
        'Reconstruite en baroque noir après l’éruption de 1669 et le séisme de 1693, Catane vit au pied de l’Etna : via Etnea rectiligne pointée sur le volcan, marché aux poissons de la Pescheria, palais UNESCO du Val di Noto. Ville d’affaires et porte d’entrée de la Sicile orientale, elle appelle un **chauffeur privé à Catane** fiable : transferts aéroport, mises à disposition, liaisons vers Taormine et Syracuse à prix fixe.',
        'De Catane, tout rayonne : **l’Etna et ses cratères sommitaux** à une heure, les vignobles d’altitude de l’Etna DOC, Taormine et son théâtre grec suspendu, Syracuse et Ortigia, les villes baroques de Noto, Modica et Raguse. Votre chauffeur sicilien organise les journées volcan, vignes et baroque avec les bons horaires — tôt sur l’Etna, tard à Ortigia — pour éviter foules et chaleur.',
      ],
      en: [
        'Rebuilt in black Baroque after the 1669 eruption and the 1693 earthquake, Catania lives at the foot of Etna: the dead-straight Via Etnea aimed at the volcano, the Pescheria fish market, UNESCO palaces of the Val di Noto. A business city and gateway to eastern Sicily, it calls for a reliable **private chauffeur in Catania**: airport transfers, hourly hire, fixed-price connections to Taormina and Syracuse.',
        'Everything radiates from Catania: **Etna and its summit craters** an hour away, the high-altitude Etna DOC vineyards, Taormina and its suspended Greek theatre, Syracuse and Ortigia, the Baroque towns of Noto, Modica and Ragusa. Your Sicilian chauffeur plans volcano, vineyard and Baroque days with the right timings — early on Etna, late in Ortigia — to dodge crowds and heat.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Etna, cratères et coulées', en: 'Etna, craters and lava fields' },
        teaser: {
          fr: 'Montée au refuge Sapienza à 1 900 mètres, téléphérique et 4x4 vers les cratères sommitaux avec guide volcanologue, grottes de lave et coulées récentes. Le plus haut volcan actif d’Europe en une journée.',
          en: 'Up to the Sapienza refuge at 1,900 metres, cable car and 4x4 to the summit craters with a volcanologist guide, lava caves and recent flows. Europe’s highest active volcano in a day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '780',
      },
      {
        title: { fr: 'Vignobles de l’Etna DOC', en: 'Etna DOC vineyards' },
        teaser: {
          fr: 'Sur le versant nord, les vignes en terrasses de nerello mascalese entre 600 et 1 000 mètres : deux domaines dégustés, palmento traditionnel, déjeuner face au volcan. Le vignoble le plus singulier d’Italie.',
          en: 'On the northern slope, terraced Nerello Mascalese vines between 600 and 1,000 metres: two estates tasted, a traditional palmento, lunch facing the volcano. Italy’s most singular wine country.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '820',
      },
      {
        title: { fr: 'Syracuse et Ortigia', en: 'Syracuse and Ortigia' },
        teaser: {
          fr: 'À 65 km au sud, la rivale antique d’Athènes : théâtre grec, latomies et oreille de Denys, puis l’île d’Ortigia, sa cathédrale bâtie dans un temple dorique et sa fontaine d’Aréthuse. Déjeuner sur le marché.',
          en: '65 km south, the ancient rival of Athens: the Greek theatre, the latomie and the Ear of Dionysius, then Ortigia island, its cathedral built into a Doric temple and the Arethusa spring. Market-side lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Noto, Modica et Raguse baroques', en: 'Baroque Noto, Modica and Ragusa' },
        teaser: {
          fr: 'Le triangle d’or du baroque sicilien, classé UNESCO : la scénographie dorée de Noto, le chocolat aztèque de Modica, Ragusa Ibla et ses ruelles en amphithéâtre. Une journée d’architecture et de gourmandise.',
          en: 'The golden triangle of Sicilian Baroque, UNESCO-listed: Noto’s honeyed stage set, Modica’s Aztec-style chocolate, Ragusa Ibla and its amphitheatre of lanes. A day of architecture and indulgence.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '840',
      },
      {
        title: { fr: 'Soirée catanaise, Pescheria et baroque illuminé', en: 'Catania evening, Pescheria and floodlit Baroque' },
        teaser: {
          fr: 'Apéritif via Etnea, dîner de poissons près de la Pescheria — pasta alla Norma en ouverture obligée —, puis les façades illuminées de la piazza del Duomo. Dépose devant chaque adresse, véhicule à disposition.',
          en: 'Aperitivo on Via Etnea, a fish dinner by the Pescheria — pasta alla Norma as the obligatory opener — then the floodlit façades of Piazza del Duomo. Door-to-door drop-offs, vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Catane-Fontanarossa et le centre-ville ?',
          en: 'How much does a transfer between Catania-Fontanarossa and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Fontanarossa (CTA) et le centre de Catane est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus. Taormine et Syracuse sont desservies aux mêmes conditions.',
          en: 'A private transfer between Fontanarossa (CTA) and central Catania is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included. Taormina and Syracuse are served on the same terms.',
        },
      },
      {
        q: {
          fr: 'Combien de temps faut-il entre l’aéroport de Catane et Taormine ?',
          en: 'How long is the journey from Catania Airport to Taormina?',
        },
        a: {
          fr: 'Comptez 50 minutes à 1 heure selon le trafic sur l’A18. C’est notre liaison la plus demandée en Sicile : prix fixe, suivi du vol, et dépose au plus près de votre hôtel malgré la ZTL de Taormine, que nos véhicules NCC sont autorisés à franchir.',
          en: 'Allow 50 minutes to an hour depending on A18 traffic. It is our most requested Sicilian route: fixed price, flight tracking, and drop-off as close as possible to your hotel despite Taormina’s ZTL, which our NCC vehicles may enter.',
        },
      },
      {
        q: {
          fr: 'L’excursion sur l’Etna est-elle accessible à tous ?',
          en: 'Is the Etna excursion suitable for everyone?',
        },
        a: {
          fr: 'Oui, elle se module : le refuge Sapienza et les cratères Silvestri se visitent sans effort ; la montée aux cratères sommitaux, par téléphérique puis 4x4 et marche, demande une condition normale et des vêtements chauds, même en été. Votre chauffeur adapte le programme.',
          en: 'Yes, it can be tailored: the Sapienza refuge and Silvestri craters require no effort; the summit-crater ascent, by cable car then 4x4 and on foot, needs ordinary fitness and warm clothing, even in summer. Your chauffeur adapts the programme.',
        },
      },
    ],
    nearby: ['palermo'],
  },
  {
    slug: 'bari',
    name: { fr: 'Bari', en: 'Bari' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Bari-Karol Wojtyła (BRI)',
    airportTransfer: {
      fr: 'L’aéroport de Bari-Karol Wojtyła (BRI) se trouve à 9 km au nord-ouest du centre : comptez 20 à 25 minutes pour rejoindre la vieille ville et la basilique Saint-Nicolas. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel. Alberobello est à 50 minutes, Matera à une heure.',
      en: 'Bari-Karol Wojtyła Airport (BRI) lies 9 km north-west of the centre: allow 20 to 25 minutes to reach the old town and the Basilica of St Nicholas. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time. Alberobello is 50 minutes away, Matera one hour.',
    },
    intro: {
      fr: [
        'Capitale des Pouilles, Bari conjugue la basilique romane de Saint-Nicolas — lieu de pèlerinage entre Orient et Occident —, le dédale de Bari Vecchia où les nonne étirent les orecchiette sur le pas des portes, et le front de mer monumental des années trente. Port majeur de l’Adriatique, la ville appelle un **chauffeur privé à Bari** pour ses transferts aéroport, ses escales de croisière et ses liaisons d’affaires.',
        'Bari est surtout la porte des Pouilles : **les trulli d’Alberobello** à cinquante minutes, la vallée d’Itria et ses villes blanches — Locorotondo, Martina Franca, Ostuni —, Polignano a Mare sur ses falaises, Matera et ses sassi juste derrière la frontière lucanienne. Votre chauffeur compose des journées où pierre blanche, huile d’olive et mer turquoise se répondent, à prix fixe et sans un volant à toucher.',
      ],
      en: [
        'Capital of Puglia, Bari combines the Romanesque Basilica of St Nicholas — a pilgrimage site bridging East and West —, the maze of Bari Vecchia where nonne roll orecchiette in their doorways, and the monumental 1930s seafront. A major Adriatic port, the city calls for a **private chauffeur in Bari** for airport transfers, cruise calls and business connections.',
        'Above all, Bari is the gateway to Puglia: **the trulli of Alberobello** fifty minutes away, the Itria Valley and its white towns — Locorotondo, Martina Franca, Ostuni —, Polignano a Mare on its cliffs, and Matera with its sassi just across the Lucanian border. Your chauffeur composes days where white stone, olive oil and turquoise sea answer one another, at a fixed price and without you touching a wheel.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Alberobello et la vallée d’Itria', en: 'Alberobello and the Itria Valley' },
        teaser: {
          fr: 'Les 1 500 trulli classés UNESCO du Rione Monti, puis les villes blanches de Locorotondo et Martina Franca et un déjeuner dans une masseria entre oliviers et murets de pierre sèche.',
          en: 'The 1,500 UNESCO-listed trulli of Rione Monti, then the white towns of Locorotondo and Martina Franca and lunch in a masseria among olive trees and dry-stone walls.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Matera et ses sassi', en: 'Matera and its sassi' },
        teaser: {
          fr: 'À une heure de Bari, la ville troglodytique classée UNESCO : sassi creusés dans le tuf, églises rupestres byzantines, belvédère de la Murgia. Guide privé en option, déjeuner dans une grotte restaurée.',
          en: 'An hour from Bari, the UNESCO cave city: sassi carved into the tufa, Byzantine rock churches, the Murgia belvedere. Optional private guide, lunch in a restored cave dwelling.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
      {
        title: { fr: 'Polignano a Mare et Monopoli', en: 'Polignano a Mare and Monopoli' },
        teaser: {
          fr: 'La terrasse de Polignano au-dessus de la cala Porto, les ruelles blanchies à la chaux, puis le port vénitien de Monopoli. Déjeuner de crudo de mer face à l’Adriatique, à trente minutes de Bari.',
          en: 'Polignano’s terrace above the Cala Porto, whitewashed lanes, then the Venetian harbour of Monopoli. A raw-seafood lunch facing the Adriatic, thirty minutes from Bari.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '440',
      },
      {
        title: { fr: 'Castel del Monte et les cathédrales romanes', en: 'Castel del Monte and the Romanesque cathedrals' },
        teaser: {
          fr: 'L’octogone mystérieux de Frédéric II, classé UNESCO, puis les cathédrales de Trani — posée sur la mer — et de Bitonto. Le Moyen Âge des Pouilles en une journée d’architecture pure.',
          en: 'Frederick II’s mysterious UNESCO octagon, then the cathedrals of Trani — set upon the sea — and Bitonto. Puglia’s Middle Ages in a day of pure architecture.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Ostuni et les masserie de l’huile', en: 'Ostuni and the olive-oil masserie' },
        teaser: {
          fr: 'La « ville blanche » étagée au-dessus de la plaine des oliviers millénaires, puis dégustation d’huiles extra-vierges dans une masseria fortifiée. Retour par la côte et les criques de la Riserva di Torre Guaceto.',
          en: 'The “white town” tiered above a plain of thousand-year-old olive trees, then extra-virgin oil tastings in a fortified masseria. Return along the coast and the coves of Torre Guaceto reserve.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '710',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Bari et le centre-ville ?',
          en: 'How much does a transfer between Bari Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Karol Wojtyła (BRI) et le centre de Bari est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus. Alberobello, Ostuni et Matera sont desservis aux mêmes conditions.',
          en: 'A private transfer between Karol Wojtyła (BRI) and central Bari is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included. Alberobello, Ostuni and Matera are served on the same terms.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers les masserie et hôtels de la vallée d’Itria ?',
          en: 'Do you transfer to the masserie and hotels of the Itria Valley?',
        },
        a: {
          fr: 'Oui, c’est notre spécialité dans les Pouilles : Borgo Egnazia, les masserie d’Ostuni, Alberobello ou Savelletri se rejoignent en 40 minutes à une heure depuis l’aéroport de Bari, à prix fixe, y compris tard le soir.',
          en: 'Yes, it is our Puglia speciality: Borgo Egnazia, the masserie around Ostuni, Alberobello or Savelletri are 40 minutes to an hour from Bari Airport, at a fixed price, late evenings included.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Alberobello et Matera dans la même journée ?',
          en: 'Can Alberobello and Matera be visited on the same day?',
        },
        a: {
          fr: 'Oui : les deux sites UNESCO sont à une heure l’un de l’autre. Départ matinal de Bari, trulli d’Alberobello, déjeuner en route, sassi de Matera l’après-midi et retour en début de soirée. Une journée dense mais parfaitement rodée.',
          en: 'Yes: the two UNESCO sites are an hour apart. An early start from Bari, Alberobello’s trulli, lunch en route, Matera’s sassi in the afternoon and return by early evening. A full but well-rehearsed day.',
        },
      },
    ],
    nearby: [],
  },
  {
    slug: 'trieste',
    name: { fr: 'Trieste', en: 'Trieste' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Trieste-Ronchi dei Legionari (TRS)',
    airportTransfer: {
      fr: 'L’aéroport de Trieste-Ronchi dei Legionari (TRS) se trouve à 33 km au nord-ouest de la ville : comptez 30 à 35 minutes d’autoroute pour rejoindre la piazza Unità d’Italia. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel. Venise-Marco Polo, à 130 km, se rejoint en 1 h 30.',
      en: 'Trieste-Ronchi dei Legionari Airport (TRS) lies 33 km north-west of the city: allow 30 to 35 minutes by motorway to reach Piazza Unità d’Italia. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time. Venice-Marco Polo, 130 km away, is 1 h 30.',
    },
    intro: {
      fr: [
        'Ancien grand port de l’Empire austro-hongrois, Trieste regarde l’Adriatique depuis la piazza Unità d’Italia — la plus vaste place d’Europe ouverte sur la mer. Cafés viennois où écrivaient Svevo et Joyce, palais des assurances, château de Miramare posé sur son promontoire : la ville cultive une élégance d’Europe centrale unique en Italie. Votre **chauffeur privé à Trieste** dessert port, congrès et sièges de sociétés avec la même précision.',
        'Aux portes de la ville commencent trois mondes : **le Karst et ses osmize**, caves ouvertes chez les vignerons du plateau, la Slovénie à quinze minutes — Lipica et ses lipizzans, les grottes de Postojna —, et la côte istrienne vers Piran. Trieste est aussi l’étape idéale entre Venise et les Balkans : votre chauffeur franchit les frontières sans formalité, à prix fixe.',
      ],
      en: [
        'Once the great port of the Austro-Hungarian Empire, Trieste faces the Adriatic from Piazza Unità d’Italia — Europe’s largest sea-facing square. Viennese cafés where Svevo and Joyce wrote, insurance palaces, Miramare castle poised on its promontory: the city keeps a Central European elegance unique in Italy. Your **private chauffeur in Trieste** serves the port, congress venues and company headquarters with equal precision.',
        'Three worlds begin at the city gates: **the Karst and its osmize**, growers’ cellars thrown open on the plateau, Slovenia fifteen minutes away — Lipica and its Lipizzaners, the Postojna caves —, and the Istrian coast towards Piran. Trieste is also the ideal stage between Venice and the Balkans: your chauffeur crosses borders without formality, at a fixed price.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Château de Miramare et côte triestine', en: 'Miramare Castle and the Trieste coast' },
        teaser: {
          fr: 'Le château blanc de Maximilien de Habsbourg sur son éperon, ses jardins botaniques face à la mer, puis la route côtière de Barcola et le phare de la Victoire. L’icône de Trieste en une demi-journée.',
          en: 'Maximilian of Habsburg’s white castle on its spur, botanical gardens facing the sea, then the Barcola coast road and the Victory Lighthouse. Trieste’s icon in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Karst, osmize et vins orange', en: 'The Karst, osmize and orange wines' },
        teaser: {
          fr: 'Sur le plateau calcaire, les tables d’hôtes des vignerons — jambon fumé, vitovska, malvasia — et les caves des pionniers du vin orange autour de Prepotto et Duino. Dégustation sans conduite, panoramas sur le golfe.',
          en: 'On the limestone plateau, the growers’ open tables — smoked ham, Vitovska, Malvasia — and the cellars of orange-wine pioneers around Prepotto and Duino. Tastings without driving, views over the gulf.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Lipica et les grottes de Postojna', en: 'Lipica and the Postojna caves' },
        teaser: {
          fr: 'Passage en Slovénie : le haras de Lipica, berceau des lipizzans depuis 1580, puis les 24 km de galeries des grottes de Postojna et le château de Predjama encastré dans la falaise.',
          en: 'Across into Slovenia: the Lipica stud farm, home of the Lipizzaners since 1580, then the 24 km of galleries at Postojna caves and the cliff-embedded Predjama castle.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '760',
      },
      {
        title: { fr: 'Aquileia et Grado', en: 'Aquileia and Grado' },
        teaser: {
          fr: 'Les mosaïques paléochrétiennes de la basilique d’Aquileia — parmi les plus vastes d’Occident, site UNESCO — puis l’île-lagune de Grado, sa vieille ville et ses canaux. Déjeuner de poissons face à la lagune.',
          en: 'The early-Christian mosaics of Aquileia’s basilica — among the largest in the West, a UNESCO site — then the lagoon island of Grado, its old town and canals. Fish lunch facing the lagoon.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '700',
      },
      {
        title: { fr: 'Soirée triestine, cafés historiques', en: 'Trieste evening, historic cafés' },
        teaser: {
          fr: 'Apéritif au Caffè degli Specchi sur la piazza Unità, dîner de boreto et poissons de l’Adriatique, puis la place illuminée face à la mer. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Aperitivo at Caffè degli Specchi on Piazza Unità, a dinner of boreto and Adriatic fish, then the illuminated square facing the sea. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '310',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Trieste et le centre-ville ?',
          en: 'How much does a transfer between Trieste Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Ronchi dei Legionari (TRS) et le centre de Trieste est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Ronchi dei Legionari (TRS) and central Trieste is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer des trajets transfrontaliers vers la Slovénie ou la Croatie ?',
          en: 'Can you handle cross-border journeys to Slovenia or Croatia?',
        },
        a: {
          fr: 'Oui. Ljubljana est à 1 heure, Piran à 45 minutes, Rovinj et l’Istrie croate à 2 heures. Les trajets transfrontaliers sont devisés à l’avance, à prix fixe, avec un véhicule autorisé à circuler dans les pays traversés.',
          en: 'Yes. Ljubljana is 1 hour away, Piran 45 minutes, Rovinj and Croatian Istria 2 hours. Cross-border journeys are quoted in advance at a fixed price, with a vehicle authorised in each country crossed.',
        },
      },
      {
        q: {
          fr: 'Trieste est-elle une bonne étape entre Venise et la Croatie ?',
          en: 'Is Trieste a good stop between Venice and Croatia?',
        },
        a: {
          fr: 'Parfaite : à 1 h 30 de Venise et aux portes de l’Istrie, la ville coupe idéalement la route. Nous organisons le trajet complet avec étape triestine — visite de Miramare, déjeuner sur la piazza Unità — sans changer de véhicule ni de chauffeur.',
          en: 'Perfect: 1 h 30 from Venice and at the gates of Istria, the city breaks the journey ideally. We arrange the full route with a Trieste stop — Miramare visit, lunch on Piazza Unità — without changing vehicle or chauffeur.',
        },
      },
    ],
    nearby: ['venice', 'verona'],
  },
  {
    slug: 'como',
    name: { fr: 'Côme', en: 'Como' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Milan-Malpensa (MXP)',
    airportTransfer: {
      fr: 'Côme se rejoint depuis Milan-Malpensa (MXP), à 55 km au sud-ouest : comptez 50 minutes à 1 heure de trajet jusqu’à la piazza Cavour ou votre hôtel du lac. Depuis Milan-Linate (LIN), prévoyez 1 heure environ, et 45 minutes depuis le centre de Milan. Votre chauffeur suit votre vol et vous accueille avec panneau nominatif.',
      en: 'Como is reached from Milan-Malpensa (MXP), 55 km to the south-west: allow 50 minutes to an hour to Piazza Cavour or your lakeside hotel. From Milan-Linate (LIN), plan on about an hour, and 45 minutes from central Milan. Your chauffeur tracks your flight and greets you with a name board.',
    },
    intro: {
      fr: [
        'Au pied des Préalpes, Côme garde l’entrée du plus élégant des lacs italiens : Duomo gothique-Renaissance, front de lac Belle Époque, funiculaire de Brunate et ateliers de soie qui habillent la haute couture depuis deux siècles. Votre **chauffeur privé à Côme** assure les liaisons avec Malpensa et Milan, puis épouse la route en corniche du lac, étroite et spectaculaire, que l’on savoure mieux sans volant.',
        'De Côme, la rive s’égrène en villas de légende : **la Villa d’Este à Cernobbio**, la Villa del Balbianello sur son promontoire de Lenno, la Villa Carlotta et ses jardins de Tremezzo, Bellagio à la pointe des trois bras du lac. Votre chauffeur coordonne routes et bateaux privés, réserve les tables au bord de l’eau et vous ramène le soir, que votre hôtel soit à Côme, Cernobbio ou Moltrasio.',
      ],
      en: [
        'At the foot of the Prealps, Como guards the entrance to the most elegant of the Italian lakes: a Gothic-Renaissance Duomo, a Belle Époque lakefront, the Brunate funicular and silk workshops that have dressed haute couture for two centuries. Your **private chauffeur in Como** handles the Malpensa and Milan connections, then takes the lake’s narrow, spectacular corniche road — best savoured without a steering wheel.',
        'From Como, the shore unfolds in legendary villas: **Villa d’Este in Cernobbio**, Villa del Balbianello on its Lenno promontory, Villa Carlotta and its Tremezzo gardens, Bellagio at the meeting point of the lake’s three arms. Your chauffeur coordinates roads and private boats, books waterside tables and brings you home at night, whether your hotel is in Como, Cernobbio or Moltrasio.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Villa del Balbianello et Villa Carlotta', en: 'Villa del Balbianello and Villa Carlotta' },
        teaser: {
          fr: 'Les deux plus belles villas du lac en une journée : le promontoire cinématographique du Balbianello à Lenno, puis les jardins botaniques et les marbres de Canova à la Villa Carlotta. Déjeuner à Tremezzo face à Bellagio.',
          en: 'The lake’s two finest villas in one day: the cinematic Balbianello promontory at Lenno, then the botanical gardens and Canova marbles of Villa Carlotta. Lunch in Tremezzo facing Bellagio.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Tour du lac et Bellagio', en: 'Lake circuit and Bellagio' },
        teaser: {
          fr: 'La rive occidentale par Cernobbio et Tremezzo, traversée en bac vers Bellagio pour le déjeuner et les jardins de la Villa Melzi, retour par la rive de Lecco. Le lac de Côme en un seul mouvement.',
          en: 'The western shore via Cernobbio and Tremezzo, ferry crossing to Bellagio for lunch and the Villa Melzi gardens, return along the Lecco shore. Lake Como in a single sweep.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '780',
      },
      {
        title: { fr: 'Croisière privée au départ de Côme', en: 'Private cruise from Como' },
        teaser: {
          fr: 'Votre chauffeur vous dépose au ponton pour deux heures de Riva classique en bois vernis : villas vues du lac, criques de Torno, apéritif à bord. Le véhicule vous attend au retour pour la suite de la journée.',
          en: 'Your chauffeur drops you at the pontoon for two hours aboard a classic varnished-wood Riva: the villas seen from the water, the Torno coves, aperitivo on board. The car waits to continue your day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '650',
      },
      {
        title: { fr: 'Brunate et la route de la soie', en: 'Brunate and the silk story' },
        teaser: {
          fr: 'Montée à Brunate pour le panorama sur le lac et les Alpes, puis le musée de la Soie et une manufacture où naissent les carrés des grandes maisons. L’autre visage de Côme, entre altitude et savoir-faire.',
          en: 'Up to Brunate for the panorama over lake and Alps, then the Silk Museum and a mill where the great houses’ scarves are born. Como’s other face, between altitude and craftsmanship.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Soirée Villa d’Este ou Harry’s Bar', en: 'Villa d’Este or Harry’s Bar evening' },
        teaser: {
          fr: 'Apéritif sur la terrasse flottante de la Villa d’Este à Cernobbio, dîner au bord de l’eau ou au Harry’s Bar face au lac. Dépose au plus près, véhicule à disposition, retour de nuit le long de la corniche.',
          en: 'Aperitivo on Villa d’Este’s floating terrace in Cernobbio, dinner at the water’s edge or at Harry’s Bar facing the lake. Precise drop-offs, vehicle on standby, a night drive home along the corniche.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Malpensa et Côme ou Cernobbio ?',
          en: 'How much does a transfer between Malpensa and Como or Cernobbio cost?',
        },
        a: {
          fr: 'Le transfert privé entre Malpensa (MXP) et Côme, Cernobbio ou Moltrasio est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus. Linate et le centre de Milan sont desservis aux mêmes conditions.',
          en: 'A private transfer between Malpensa (MXP) and Como, Cernobbio or Moltrasio is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included. Linate and central Milan are served on the same terms.',
        },
      },
      {
        q: {
          fr: 'La route du lac est-elle difficile ? Faut-il vraiment un chauffeur ?',
          en: 'Is the lake road difficult? Do I really need a chauffeur?',
        },
        a: {
          fr: 'La SS340 est étroite, sinueuse et très fréquentée en saison ; le stationnement près des villas est rare. Avec un chauffeur, vous êtes déposé aux entrées, le véhicule vous attend, et vous profitez du paysage plutôt que des créneaux.',
          en: 'The SS340 is narrow, winding and busy in season; parking near the villas is scarce. With a chauffeur you are dropped at the entrances, the car waits, and you enjoy the views rather than the parking hunt.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous combiner voiture et bateau privé sur le lac de Côme ?',
          en: 'Can you combine car and private boat on Lake Como?',
        },
        a: {
          fr: 'Oui, c’est la formule idéale : votre chauffeur vous conduit au ponton, un bateau privé dessert les villas visibles seulement depuis l’eau, et le véhicule vous récupère à l’escale suivante. Nous coordonnons l’ensemble en une seule réservation.',
          en: 'Yes, it is the ideal formula: your chauffeur drives you to the pontoon, a private boat serves the villas best seen from the water, and the car meets you at the next landing. We coordinate it all in a single booking.',
        },
      },
    ],
    nearby: ['bellagio', 'milan', 'stresa-lake-maggiore'],
  },
  {
    slug: 'bellagio',
    name: { fr: 'Bellagio', en: 'Bellagio' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Milan-Malpensa (MXP)',
    airportTransfer: {
      fr: 'Bellagio se rejoint depuis Milan-Malpensa (MXP) en 1 h 30 environ (80 km), la dernière demi-heure suivant la corniche du lac depuis Côme. Depuis Milan-Linate ou le centre de Milan, comptez 1 h 15 à 1 h 30. Votre chauffeur suit votre vol, vous accueille avec panneau nominatif et gère les bagages jusqu’à votre hôtel du promontoire.',
      en: 'Bellagio is about 1 h 30 from Milan-Malpensa (MXP) (80 km), the final half hour following the lake corniche from Como. From Milan-Linate or central Milan, allow 1 h 15 to 1 h 30. Your chauffeur tracks your flight, greets you with a name board and handles luggage to your hotel on the promontory.',
    },
    intro: {
      fr: [
        'À la pointe du promontoire qui sépare les deux bras du lac de Côme, Bellagio mérite son titre de « perle du lac » : salita Serbelloni escaladée de boutiques, jardins de la Villa Melzi au bord de l’eau, hôtels historiques face à Tremezzo. Le village est en grande partie piéton et la route d’accès sinueuse : un **chauffeur privé à Bellagio** transforme l’arrivée en formalité, bagages compris.',
        'Depuis Bellagio, tout le lac s’offre : **la Villa Carlotta et le Balbianello** de l’autre côté de l’eau, Varenna et la Villa Monastero sur la rive de Lecco, la Madonna del Ghisallo chère aux cyclistes sur les hauteurs. Votre chauffeur combine bacs, bateaux privés et route en corniche pour composer des journées fluides, et assure vos liaisons vers Milan, Saint-Moritz ou Malpensa à prix fixe.',
      ],
      en: [
        'At the tip of the promontory dividing Lake Como’s two arms, Bellagio earns its title of “pearl of the lake”: the boutique-lined Salita Serbelloni, the waterside gardens of Villa Melzi, historic hotels facing Tremezzo. The village is largely pedestrian and the access road winding: a **private chauffeur in Bellagio** turns arrival into a formality, luggage included.',
        'From Bellagio the whole lake offers itself: **Villa Carlotta and the Balbianello** across the water, Varenna and Villa Monastero on the Lecco shore, the cyclists’ shrine of Madonna del Ghisallo on the heights. Your chauffeur combines ferries, private boats and the corniche road into seamless days, and covers your connections to Milan, St. Moritz or Malpensa at fixed prices.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Villas de la rive ouest en bateau privé', en: 'West-shore villas by private boat' },
        teaser: {
          fr: 'Embarquement au ponton de Bellagio vers la Villa del Balbianello et la Villa Carlotta, déjeuner à Tremezzo, retour au couchant. Votre chauffeur orchestre pontons et horaires, vous ne pensez qu’au paysage.',
          en: 'Board at the Bellagio pontoon for Villa del Balbianello and Villa Carlotta, lunch in Tremezzo, return at sunset. Your chauffeur orchestrates pontoons and timings; you think only of the view.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '820',
      },
      {
        title: { fr: 'Varenna et la Villa Monastero', en: 'Varenna and Villa Monastero' },
        teaser: {
          fr: 'Le plus romantique des villages du lac, à quinze minutes de bac : passeggiata degli Innamorati, jardins en terrasses de la Villa Monastero, château de Vezio au-dessus des toits. Déjeuner les pieds dans l’eau.',
          en: 'The lake’s most romantic village, fifteen minutes by ferry: the Lovers’ Walk, the terraced gardens of Villa Monastero, Vezio castle above the rooftops. Lunch at the water’s edge.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '460',
      },
      {
        title: { fr: 'Madonna del Ghisallo et la Vallassina', en: 'Madonna del Ghisallo and the Vallassina' },
        teaser: {
          fr: 'La montée mythique du Tour de Lombardie jusqu’au sanctuaire des cyclistes et son musée, panorama sur les deux bras du lac, retour par les villages du triangle lariano. L’arrière-pays secret de Bellagio.',
          en: 'The Tour of Lombardy’s mythic climb to the cyclists’ sanctuary and its museum, a panorama over both arms of the lake, return through the Larian triangle villages. Bellagio’s secret hinterland.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '430',
      },
      {
        title: { fr: 'Journée Saint-Moritz par la Bernina', en: 'St. Moritz day trip via the Bernina' },
        teaser: {
          fr: 'Remontée de la Valteline et du col de la Maloja vers l’Engadine : Saint-Moritz, ses palaces et son lac à 1 800 mètres. Déjeuner suisse, retour par Chiavenna. Passage de frontière sans formalité.',
          en: 'Up the Valtellina and over the Maloja pass into the Engadine: St. Moritz, its palaces and its lake at 1,800 metres. A Swiss lunch, return via Chiavenna. Border crossing without formality.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1050',
      },
      {
        title: { fr: 'Soirée sur le promontoire', en: 'Evening on the promontory' },
        teaser: {
          fr: 'Apéritif face au couchant sur une terrasse de Pescallo ou de la punta Spartivento, dîner dans une adresse historique de Bellagio ou de Loppia. Le véhicule vous attend, retour d’hôtel sans contrainte.',
          en: 'Sunset aperitivo on a terrace in Pescallo or at Punta Spartivento, dinner at a historic address in Bellagio or Loppia. The vehicle waits; an effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '360',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien de temps faut-il entre Malpensa et Bellagio ?',
          en: 'How long is the journey from Malpensa to Bellagio?',
        },
        a: {
          fr: 'Comptez 1 h 30 environ, dont une demi-heure de corniche entre Côme et Bellagio. Le transfert est à prix fixe, avec suivi du vol, accueil avec panneau nominatif et attente offerte en cas de retard. En saison, votre chauffeur anticipe le trafic de la SS583.',
          en: 'Allow around 1 h 30, including half an hour of corniche between Como and Bellagio. The transfer is fixed-price, with flight tracking, a name-board meet-and-greet and complimentary waiting time. In season, your chauffeur anticipates SS583 traffic.',
        },
      },
      {
        q: {
          fr: 'Comment gérez-vous les bagages dans un village piéton comme Bellagio ?',
          en: 'How do you handle luggage in a pedestrian village like Bellagio?',
        },
        a: {
          fr: 'Votre chauffeur vous dépose au point carrossable le plus proche de votre hôtel et coordonne avec la réception le portage des bagages — la plupart des maisons de Bellagio disposent d’un service dédié. Vous n’avez rien à porter dans les ruelles.',
          en: 'Your chauffeur drops you at the closest drivable point to your hotel and coordinates luggage portering with reception — most Bellagio houses have a dedicated service. You carry nothing through the lanes.',
        },
      },
      {
        q: {
          fr: 'Peut-on rayonner sur tout le lac en séjournant à Bellagio ?',
          en: 'Can I explore the whole lake while staying in Bellagio?',
        },
        a: {
          fr: 'Oui : en combinant bacs de Cadenabbia et Varenna, bateaux privés et voiture, tout le lac se rejoint en moins d’une heure. En mise à disposition à la journée, votre chauffeur compose l’itinéraire selon la météo et vos envies.',
          en: 'Yes: combining the Cadenabbia and Varenna ferries, private boats and the car, everywhere on the lake is under an hour away. With full-day hire, your chauffeur shapes the itinerary around weather and whim.',
        },
      },
    ],
    nearby: ['como', 'milan', 'stresa-lake-maggiore'],
  },
  {
    slug: 'lake-garda-sirmione',
    name: { fr: 'Lac de Garde – Sirmione', en: 'Lake Garda – Sirmione' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Vérone-Villafranca (VRN)',
    airportTransfer: {
      fr: 'Sirmione se rejoint depuis l’aéroport de Vérone-Villafranca (VRN) en 35 minutes environ (40 km). Milan-Bergame (BGY) est à 1 heure, Venise-Marco Polo à 1 h 45. Votre chauffeur vous accueille avec panneau nominatif, suit votre vol et vous dépose au plus près du centre historique, fermé aux voitures au-delà du château.',
      en: 'Sirmione is about 35 minutes (40 km) from Verona-Villafranca Airport (VRN). Milan-Bergamo (BGY) is 1 hour away, Venice-Marco Polo 1 h 45. Your chauffeur greets you with a name board, tracks your flight and drops you as close as possible to the historic centre, closed to cars beyond the castle.',
    },
    intro: {
      fr: [
        'Avancée sur quatre kilomètres dans les eaux du plus grand lac d’Italie, Sirmione fascine depuis l’Antiquité : le château Scaliger cerné d’eau garde l’entrée du bourg, les grottes de Catulle — la plus vaste villa romaine d’Italie du Nord — couronnent la pointe, et les sources thermales sulfureuses alimentent spas et palaces. Votre **chauffeur privé à Sirmione** gère l’accès réglementé de la presqu’île et vos liaisons avec Vérone, Milan ou Venise.',
        'Sirmione est aussi la meilleure base du **lac de Garde** : Desenzano et Salò à vingt minutes, l’île du Garda et la Vittoriale de d’Annunzio à Gardone, les vignobles de Lugana au sud et de Bardolino à l’est, Riva del Garda et ses falaises au nord. Votre chauffeur longe les rives à votre rythme, réserve dégustations et tables, et vous ramène le soir sur la presqu’île.',
      ],
      en: [
        'Reaching four kilometres into Italy’s largest lake, Sirmione has fascinated since antiquity: the water-ringed Scaliger castle guards the town gate, the Grotte di Catullo — northern Italy’s largest Roman villa — crowns the tip, and sulphurous thermal springs feed spas and grand hotels. Your **private chauffeur in Sirmione** manages the peninsula’s restricted access and your connections to Verona, Milan or Venice.',
        'Sirmione is also **Lake Garda’s** finest base: Desenzano and Salò twenty minutes away, Isola del Garda and d’Annunzio’s Vittoriale at Gardone, the Lugana vineyards to the south and Bardolino to the east, Riva del Garda and its cliffs to the north. Your chauffeur follows the shores at your pace, books tastings and tables, and returns you to the peninsula each evening.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Rive occidentale, Salò et la Vittoriale', en: 'The west shore, Salò and the Vittoriale' },
        teaser: {
          fr: 'La riviera des citronniers jusqu’à Salò et Gardone Riviera : la Vittoriale degli Italiani, demeure-manifeste de d’Annunzio, ses jardins et le cuirassé encastré dans la colline. Déjeuner au bord de l’eau.',
          en: 'The lemon-grove riviera to Salò and Gardone Riviera: the Vittoriale degli Italiani, d’Annunzio’s manifesto of a house, its gardens and the warship set into the hill. Waterside lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Lugana et Bardolino, vins du lac', en: 'Lugana and Bardolino, wines of the lake' },
        teaser: {
          fr: 'Deux vignobles aux portes de Sirmione : la turbiana de Lugana au sud, les rouges légers de Bardolino sur la rive véronaise. Trois dégustations, déjeuner dans les vignes, retour par Punta San Vigilio.',
          en: 'Two wine regions at Sirmione’s gates: Lugana’s Turbiana to the south, Bardolino’s light reds on the Veronese shore. Three tastings, lunch in the vines, return via Punta San Vigilio.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
      {
        title: { fr: 'Grottes de Catulle et thermes', en: 'Grotte di Catullo and the thermal baths' },
        teaser: {
          fr: 'La villa romaine sur la pointe de la presqu’île, ses oliveraies au-dessus des eaux turquoise, puis un après-midi aux thermes — Aquaria ou spa de votre palace. La journée signature de Sirmione.',
          en: 'The Roman villa at the peninsula’s tip, its olive groves above turquoise water, then an afternoon at the baths — Aquaria or your hotel’s spa. Sirmione’s signature day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '410',
      },
      {
        title: { fr: 'Vérone depuis le lac', en: 'Verona from the lake' },
        teaser: {
          fr: 'À 35 minutes, la ville de Juliette : arènes, piazza delle Erbe, Castelvecchio. En été, soirée d’opéra aux arènes avec retour de nuit garanti sur la presqu’île. La grande sortie culturelle du séjour.',
          en: '35 minutes away, Juliet’s city: the arena, Piazza delle Erbe, Castelvecchio. In summer, an arena opera night with a guaranteed late return to the peninsula. The stay’s great cultural outing.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '560',
      },
      {
        title: { fr: 'Nord du lac, Malcesine et Riva', en: 'The northern lake, Malcesine and Riva' },
        teaser: {
          fr: 'La route panoramique de la rive orientale vers Malcesine et son château Scaliger, téléphérique du monte Baldo en option, puis Riva del Garda entre falaises et palmiers. Le Garde alpin en une journée.',
          en: 'The eastern shore’s panoramic road to Malcesine and its Scaliger castle, the Monte Baldo cable car optional, then Riva del Garda between cliffs and palms. Alpine Garda in a day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Peut-on entrer en voiture dans le centre historique de Sirmione ?',
          en: 'Can cars enter Sirmione’s historic centre?',
        },
        a: {
          fr: 'Le centre au-delà du château Scaliger est réservé aux résidents et clients d’hôtels : votre chauffeur vous dépose au pont-levis ou obtient l’accès jusqu’à votre hôtel selon les autorisations. Les bagages sont pris en charge dans tous les cas.',
          en: 'The centre beyond the Scaliger castle is reserved for residents and hotel guests: your chauffeur drops you at the drawbridge or obtains access to your hotel depending on permits. Luggage is handled either way.',
        },
      },
      {
        q: {
          fr: 'Quel aéroport choisir pour rejoindre Sirmione et le lac de Garde ?',
          en: 'Which airport is best for Sirmione and Lake Garda?',
        },
        a: {
          fr: 'Vérone-Villafranca (VRN) est le plus proche : 35 minutes. Bergame (BGY) est à 1 heure, Malpensa et Venise à 1 h 45 environ. Tous sont desservis à prix fixe, avec suivi du vol et accueil avec panneau nominatif.',
          en: 'Verona-Villafranca (VRN) is closest: 35 minutes. Bergamo (BGY) is 1 hour away, Malpensa and Venice around 1 h 45. All are served at fixed prices, with flight tracking and a name-board meet-and-greet.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser un tour complet du lac de Garde ?',
          en: 'Can you arrange a full circuit of Lake Garda?',
        },
        a: {
          fr: 'Oui : le tour complet — Salò, Limone, Riva, Malcesine, Bardolino — représente environ 160 km et se déguste en une journée pleine, avec arrêts photo et déjeuner réservés. L’itinéraire s’ajuste en route selon vos coups de cœur.',
          en: 'Yes: the full circuit — Salò, Limone, Riva, Malcesine, Bardolino — covers around 160 km and fills a generous day, with photo stops and a booked lunch. The route flexes en route to whatever wins your heart.',
        },
      },
    ],
    nearby: ['verona', 'riva-del-garda', 'milan'],
  },
  {
    slug: 'stresa-lake-maggiore',
    name: { fr: 'Stresa – Lac Majeur', en: 'Stresa – Lake Maggiore' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Milan-Malpensa (MXP)',
    airportTransfer: {
      fr: 'Stresa n’est qu’à 40 km de Milan-Malpensa (MXP) : comptez 40 minutes d’autoroute pour rejoindre le lungolago et les grands hôtels face aux îles Borromées. Depuis le centre de Milan, prévoyez 1 h 15. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Stresa is just 40 km from Milan-Malpensa (MXP): allow 40 minutes by motorway to reach the lakefront and the grand hotels facing the Borromean Islands. From central Milan, plan on 1 h 15. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Reine du lac Majeur depuis la Belle Époque, Stresa aligne ses palaces face aux îles Borromées — Hemingway y situa « L’Adieu aux armes » au Grand Hôtel des Iles Borromées. Isola Bella et son palais baroque à dix minutes de bateau, jardins botaniques de la Villa Taranto sur la rive d’en face, funiculaire du Mottarone au-dessus des toits : votre **chauffeur privé à Stresa** articule routes, pontons et horaires de navigation.',
        'Sa position est imbattable : **Malpensa à quarante minutes**, ce qui fait de Stresa la première escapade lacustre depuis Milan, le lac d’Orta et son île romantique à trente minutes, les vallées ossolanes et la Suisse toute proche — Locarno et Ascona à une heure. Votre chauffeur compose des journées entre îles, jardins et montagne, et assure vos transferts à prix fixe.',
      ],
      en: [
        'Queen of Lake Maggiore since the Belle Époque, Stresa lines its grand hotels up facing the Borromean Islands — Hemingway set “A Farewell to Arms” at the Grand Hôtel des Iles Borromées. Isola Bella and its Baroque palace ten minutes by boat, the Villa Taranto botanical gardens on the far shore, the Mottarone cable railway above the rooftops: your **private chauffeur in Stresa** aligns roads, pontoons and sailing times.',
        'Its position is unbeatable: **Malpensa forty minutes away**, making Stresa the closest lake escape from Milan, Lake Orta and its romantic island thirty minutes off, the Ossola valleys and Switzerland nearby — Locarno and Ascona an hour away. Your chauffeur composes days of islands, gardens and mountains, and covers your transfers at fixed prices.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Îles Borromées en bateau privé', en: 'The Borromean Islands by private boat' },
        teaser: {
          fr: 'Isola Bella et les dix terrasses de son jardin baroque, Isola Madre et ses paons en liberté, déjeuner de poissons du lac sur l’Isola dei Pescatori. Embarquement privé au ponton, votre chauffeur vous attend à quai.',
          en: 'Isola Bella and the ten terraces of its Baroque garden, Isola Madre and its free-roaming peacocks, a lake-fish lunch on Isola dei Pescatori. Private boarding at the pontoon; your chauffeur waits at the quay.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Villa Taranto et rive de Pallanza', en: 'Villa Taranto and the Pallanza shore' },
        teaser: {
          fr: 'Les 16 hectares de jardins botaniques plantés par un capitaine écossais — tulipes en avril, lotus en été —, puis Verbania-Pallanza et sa promenade face aux îles. Déjeuner au bord de l’eau.',
          en: 'Sixteen hectares of botanical gardens planted by a Scottish captain — tulips in April, lotus in summer — then Verbania-Pallanza and its island-facing promenade. Waterside lunch.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '430',
      },
      {
        title: { fr: 'Lac d’Orta et Orta San Giulio', en: 'Lake Orta and Orta San Giulio' },
        teaser: {
          fr: 'À trente minutes, le plus intime des lacs : la piazza Motta d’Orta San Giulio, l’île sacrée et sa basilique, le Sacro Monte au-dessus des toits. Une parenthèse hors du temps depuis Stresa.',
          en: 'Thirty minutes away, the most intimate of the lakes: Orta San Giulio’s Piazza Motta, the sacred island and its basilica, the Sacro Monte above the rooftops. A timeless interlude from Stresa.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '460',
      },
      {
        title: { fr: 'Locarno et Ascona, rive suisse', en: 'Locarno and Ascona, the Swiss shore' },
        teaser: {
          fr: 'Remontée de la rive piémontaise vers Cannobio, passage en Suisse et déjeuner sur la piazza d’Ascona, la plus méditerranéenne des places helvétiques. Retour par les jardins de Brissago en option.',
          en: 'Up the Piedmont shore to Cannobio, across into Switzerland and lunch on the piazza at Ascona, the most Mediterranean of Swiss squares. Optional return via the Brissago island gardens.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Mottarone et soirée Belle Époque', en: 'Mottarone and a Belle Époque evening' },
        teaser: {
          fr: 'Montée au Mottarone pour le panorama sur sept lacs et le mont Rose, puis apéritif au couchant et dîner dans un palace du lungolago. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Up the Mottarone for a panorama over seven lakes and Monte Rosa, then a sunset aperitivo and dinner at a lakefront grand hotel. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '520',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien de temps faut-il entre Malpensa et Stresa ?',
          en: 'How long is the journey from Malpensa to Stresa?',
        },
        a: {
          fr: 'Quarante minutes environ par l’A26 : Stresa est la destination lacustre la plus rapide depuis Malpensa. Le transfert est à prix fixe, avec accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard.',
          en: 'Around forty minutes via the A26: Stresa is the quickest lake destination from Malpensa. The transfer is fixed-price, with a name-board meet-and-greet, flight tracking and complimentary waiting time.',
        },
      },
      {
        q: {
          fr: 'Comment organiser la visite des trois îles Borromées ?',
          en: 'How should I plan a visit to the three Borromean Islands?',
        },
        a: {
          fr: 'Le plus confortable est le bateau privé au départ du ponton de Stresa : vous enchaînez Isola Bella, Isola Madre et l’Isola dei Pescatori à votre rythme, déjeuner réservé. Nous coordonnons bateau, billets des palais et chauffeur en une seule réservation.',
          en: 'The most comfortable option is a private boat from the Stresa pontoon: Isola Bella, Isola Madre and Isola dei Pescatori at your own pace, lunch booked. We coordinate boat, palace tickets and chauffeur in a single booking.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner lac Majeur et lac d’Orta dans la même journée ?',
          en: 'Can Lake Maggiore and Lake Orta be combined in one day?',
        },
        a: {
          fr: 'Oui : trente minutes séparent Stresa d’Orta San Giulio. Matinée sur les îles Borromées, déjeuner à Orta et Sacro Monte l’après-midi — une journée deux lacs très demandée, à prix fixe.',
          en: 'Yes: thirty minutes separate Stresa from Orta San Giulio. A morning on the Borromean Islands, lunch in Orta and the Sacro Monte in the afternoon — a much-requested two-lake day, at a fixed price.',
        },
      },
    ],
    nearby: ['orta-san-giulio', 'milan', 'como'],
  },
  {
    slug: 'orta-san-giulio',
    name: { fr: 'Orta San Giulio', en: 'Orta San Giulio' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Milan-Malpensa (MXP)',
    airportTransfer: {
      fr: 'Orta San Giulio se rejoint depuis Milan-Malpensa (MXP) en 50 minutes environ (55 km par l’A26). Le centre historique étant piéton, votre chauffeur vous dépose aux abords immédiats du village et coordonne le portage des bagages avec votre hôtel. Accueil avec panneau nominatif et suivi du vol inclus.',
      en: 'Orta San Giulio is about 50 minutes (55 km via the A26) from Milan-Malpensa (MXP). As the historic centre is pedestrian, your chauffeur drops you at the village edge and coordinates luggage portering with your hotel. Name-board meet-and-greet and flight tracking included.',
    },
    intro: {
      fr: [
        'Nietzsche y vécut ses heures les plus douces, Balzac le jugea « gris perle » : Orta San Giulio est le secret le mieux gardé des lacs italiens. La piazza Motta ouverte sur l’eau comme une scène de théâtre, l’île San Giulio et sa basilique romane à trois cents mètres du rivage, le Sacro Monte UNESCO dans les bois au-dessus des toits : tout ici est à l’échelle humaine. Votre **chauffeur privé à Orta** préserve cette quiétude en gérant accès piéton et bagages.',
        'Orta se marie idéalement avec ses voisins : **Stresa et les îles Borromées** à trente minutes, les vignobles des collines novaraises — Ghemme et Gattinara, nebbiolos du nord —, Varallo et le plus ancien des Sacri Monti, la Valsesia sauvage. Votre chauffeur compose des journées douces entre lacs, collines et montagnes, et assure les liaisons Malpensa et Milan à prix fixe.',
      ],
      en: [
        'Nietzsche spent his sweetest hours here and Balzac called it pearl-grey: Orta San Giulio is the best-kept secret of the Italian lakes. Piazza Motta opens onto the water like a stage, the island of San Giulio and its Romanesque basilica sit three hundred metres offshore, and the UNESCO Sacro Monte hides in the woods above the rooftops: everything is on a human scale. Your **private chauffeur in Orta** protects that calm by handling pedestrian access and luggage.',
        'Orta pairs beautifully with its neighbours: **Stresa and the Borromean Islands** thirty minutes away, the vineyards of the Novara hills — Ghemme and Gattinara, northern Nebbiolos —, Varallo and the oldest of the Sacri Monti, the wild Valsesia. Your chauffeur composes gentle days of lakes, hills and mountains, with Malpensa and Milan connections at fixed prices.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Île San Giulio et Sacro Monte', en: 'San Giulio island and the Sacro Monte' },
        teaser: {
          fr: 'Traversée en barque vers l’île, la basilique et la « voie du silence » des moniales, puis montée au Sacro Monte et ses vingt chapelles franciscaines dans les bois. Le cœur spirituel du lac en une demi-journée.',
          en: 'A rowing-boat crossing to the island, the basilica and the nuns’ “way of silence”, then up to the Sacro Monte and its twenty Franciscan chapels in the woods. The lake’s spiritual heart in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '400',
      },
      {
        title: { fr: 'Ghemme et Gattinara, nebbiolos du nord', en: 'Ghemme and Gattinara, northern Nebbiolos' },
        teaser: {
          fr: 'Dans les collines novaraises à trente minutes du lac, les crus confidentiels du nebbiolo d’altitude : deux domaines familiaux, verticale de millésimes, déjeuner vigneron. L’anti-chambre secrète du Barolo.',
          en: 'In the Novara hills thirty minutes from the lake, the confidential crus of high-country Nebbiolo: two family estates, a vintage vertical, a winegrower’s lunch. Barolo’s secret antechamber.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Varallo et la Valsesia', en: 'Varallo and the Valsesia' },
        teaser: {
          fr: 'Le Sacro Monte de Varallo, le plus ancien et le plus spectaculaire des monts sacrés — 45 chapelles, 800 statues —, puis la vallée verte de la Sesia vers Alagna, au pied du mont Rose.',
          en: 'The Sacro Monte of Varallo, oldest and most theatrical of the sacred mounts — 45 chapels, 800 statues — then the green Sesia valley towards Alagna, at the foot of Monte Rosa.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Stresa et les îles Borromées', en: 'Stresa and the Borromean Islands' },
        teaser: {
          fr: 'À trente minutes, le lac Majeur et ses îles-palais : Isola Bella, Isola dei Pescatori pour déjeuner, retour par le belvédère du Mottarone entre les deux lacs. La grande sortie du séjour ortais.',
          en: 'Thirty minutes away, Lake Maggiore and its palace-islands: Isola Bella, Isola dei Pescatori for lunch, return via the Mottarone belvedere between the two lakes. The Orta stay’s grand outing.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
      {
        title: { fr: 'Soirée piazza Motta', en: 'Piazza Motta evening' },
        teaser: {
          fr: 'Apéritif face à l’île au couchant, dîner dans une des adresses gastronomiques du village — dont la table doublement étoilée de la Villa Crespi, à cinq minutes. Le véhicule vous attend, retour sans contrainte.',
          en: 'A sunset aperitivo facing the island, dinner at one of the village’s gastronomic addresses — including the two-star table of Villa Crespi, five minutes away. The vehicle waits; an effortless return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Comment rejoindre Orta San Giulio depuis Malpensa ?',
          en: 'How do I reach Orta San Giulio from Malpensa?',
        },
        a: {
          fr: 'Le transfert privé demande 50 minutes environ par l’A26, à prix fixe, avec accueil avec panneau nominatif et suivi du vol. Le village étant piéton, votre chauffeur vous dépose aux abords et coordonne les bagages avec votre hôtel.',
          en: 'The private transfer takes around 50 minutes via the A26, at a fixed price, with a name-board meet-and-greet and flight tracking. As the village is pedestrian, your chauffeur drops you at the edge and coordinates luggage with your hotel.',
        },
      },
      {
        q: {
          fr: 'Comment visite-t-on l’île San Giulio ?',
          en: 'How do I visit San Giulio island?',
        },
        a: {
          fr: 'Des barques et bateaux-navettes partent en continu de la piazza Motta ; la traversée dure cinq minutes. Nous réservons sur demande une barque privée avec rameur, au lever du jour ou au couchant, quand l’île retrouve son silence.',
          en: 'Rowing boats and shuttles leave continuously from Piazza Motta; the crossing takes five minutes. On request we book a private rowed boat at dawn or dusk, when the island recovers its silence.',
        },
      },
      {
        q: {
          fr: 'Orta convient-elle à un séjour romantique ou un mariage ?',
          en: 'Is Orta suited to a romantic stay or a wedding?',
        },
        a: {
          fr: 'C’est l’un des lieux de mariage les plus recherchés d’Italie du Nord. Nous assurons les cortèges en berlines et vans, les navettes d’invités depuis Malpensa et les soirées jusqu’au bout de la nuit, en coordination avec votre wedding planner.',
          en: 'It is one of northern Italy’s most sought-after wedding settings. We provide sedan and van cortèges, guest shuttles from Malpensa and late-night service, in coordination with your wedding planner.',
        },
      },
    ],
    nearby: ['stresa-lake-maggiore', 'milan', 'como'],
  },
  {
    slug: 'riva-del-garda',
    name: { fr: 'Riva del Garda', en: 'Riva del Garda' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Vérone-Villafranca (VRN)',
    airportTransfer: {
      fr: 'Riva del Garda se rejoint depuis l’aéroport de Vérone-Villafranca (VRN) en 1 h 15 environ (85 km), par l’A22 du Brenner puis la vallée du Sarca. Milan-Bergame (BGY) est à 1 h 45, Venise-Marco Polo à 2 heures. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Riva del Garda is about 1 h 15 (85 km) from Verona-Villafranca Airport (VRN), via the A22 Brenner motorway and the Sarca valley. Milan-Bergamo (BGY) is 1 h 45 away, Venice-Marco Polo 2 hours. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'À l’extrême nord du lac de Garde, là où les falaises de 2 000 mètres tombent dans une eau méditerranéenne, Riva del Garda fut la station d’hiver de la Mitteleuropa — Kafka, Mann et Nietzsche y séjournèrent. Tour Apponale sur le port, bastion vénitien au-dessus des toits, palmiers sous parois dolomitiques : le décor est unique. Votre **chauffeur privé à Riva del Garda** gère les routes en corniche et tunnels de la rive occidentale comme les liaisons aéroports.',
        'Riva ouvre un double terrain de jeu : **le lac vers Limone et Malcesine**, la route de la Ponale suspendue au-dessus de l’eau, et le Trentin alpin vers le lac de Ledro, les chutes du Varone et Arco. Trente est à quarante-cinq minutes, les Dolomites de Brenta à une heure et quart : votre chauffeur compose des journées entre citronniers et glaciers, à prix fixe.',
      ],
      en: [
        'At Lake Garda’s northern tip, where 2,000-metre cliffs fall into Mediterranean water, Riva del Garda was Mitteleuropa’s winter resort — Kafka, Mann and Nietzsche all stayed. The Apponale tower on the harbour, a Venetian bastion above the rooftops, palm trees beneath dolomitic walls: the setting is unique. Your **private chauffeur in Riva del Garda** handles the western shore’s corniche roads and tunnels as smoothly as the airport runs.',
        'Riva opens a double playground: **the lake towards Limone and Malcesine**, the Ponale road suspended above the water, and alpine Trentino towards Lake Ledro, the Varone falls and Arco. Trento is forty-five minutes away, the Brenta Dolomites an hour and a quarter: your chauffeur composes days between lemon groves and glaciers, at fixed prices.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Limone et la rive occidentale', en: 'Limone and the western shore' },
        teaser: {
          fr: 'La route des tunnels vers Limone sul Garda, ses limonaie en terrasses et sa promenade au ras de l’eau, puis Tremosine et sa « route de la peur » en balcon. Déjeuner de poissons du lac face à Malcesine.',
          en: 'The tunnel road to Limone sul Garda, its terraced lemon houses and its water-level promenade, then Tremosine and its balcony “road of fear”. A lake-fish lunch facing Malcesine.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Malcesine et le monte Baldo', en: 'Malcesine and Monte Baldo' },
        teaser: {
          fr: 'Le château Scaliger peint par Goethe, les ruelles du bourg, puis le téléphérique tournant du monte Baldo : 1 700 mètres au-dessus du lac, prairies alpines et vue jusqu’aux Apennins par temps clair.',
          en: 'The Scaliger castle Goethe sketched, the old town lanes, then the rotating Monte Baldo cable car: 1,700 metres above the lake, alpine meadows and views to the Apennines on clear days.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Lac de Ledro et chutes du Varone', en: 'Lake Ledro and the Varone falls' },
        teaser: {
          fr: 'La cascade encaissée du Varone à dix minutes de Riva, puis la montée vers le lac de Ledro, ses eaux émeraude et son village lacustre préhistorique UNESCO. Le Trentin secret en une demi-journée.',
          en: 'The gorge-bound Varone waterfall ten minutes from Riva, then up to Lake Ledro, its emerald water and its UNESCO prehistoric pile-dwelling site. Secret Trentino in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Trente et le château du Buonconsiglio', en: 'Trento and the Buonconsiglio castle' },
        teaser: {
          fr: 'À 45 minutes, la ville du Concile : cathédrale romane, fresques du Buonconsiglio, palais Renaissance peints. Dégustation de bulles Trentodoc dans une cave historique au retour.',
          en: '45 minutes away, the city of the Council: the Romanesque cathedral, the Buonconsiglio frescoes, painted Renaissance palaces. A Trentodoc sparkling tasting in a historic cellar on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Dolomites de Brenta et Madonna di Campiglio', en: 'Brenta Dolomites and Madonna di Campiglio' },
        teaser: {
          fr: 'Remontée des vallées Giudicarie vers les tours de calcaire des Dolomites de Brenta : Madonna di Campiglio, déjeuner en altitude, retour par le val Rendena. La haute montagne à une heure et quart du lac.',
          en: 'Up the Giudicarie valleys to the limestone towers of the Brenta Dolomites: Madonna di Campiglio, lunch at altitude, return through the Val Rendena. High mountains an hour and a quarter from the lake.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '820',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Quel aéroport choisir pour rejoindre Riva del Garda ?',
          en: 'Which airport is best for Riva del Garda?',
        },
        a: {
          fr: 'Vérone-Villafranca (VRN) est le plus pratique : 1 h 15 par l’A22. Bergame est à 1 h 45, Venise et Malpensa à 2 heures environ. Tous les transferts sont à prix fixe, avec suivi du vol et accueil avec panneau nominatif.',
          en: 'Verona-Villafranca (VRN) is the most convenient: 1 h 15 via the A22. Bergamo is 1 h 45 away, Venice and Malpensa around 2 hours. All transfers are fixed-price, with flight tracking and a name-board meet-and-greet.',
        },
      },
      {
        q: {
          fr: 'Transportez-vous les équipements sportifs — vélos, planches, matériel d’escalade ?',
          en: 'Do you carry sports equipment — bikes, boards, climbing gear?',
        },
        a: {
          fr: 'Oui. Riva et Arco sont des hauts lieux du VTT, de la voile et de l’escalade : nos vans embarquent vélos, planches et sacs volumineux sans supplément surprise, le tout confirmé à la réservation.',
          en: 'Yes. Riva and Arco are meccas for mountain biking, sailing and climbing: our vans carry bikes, boards and bulky bags with no surprise surcharge, all confirmed at booking.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner lac de Garde et Dolomites dans un même séjour ?',
          en: 'Can Lake Garda and the Dolomites be combined in one stay?',
        },
        a: {
          fr: 'Idéalement : Riva est la charnière entre les deux. Madonna di Campiglio est à 1 h 15, Bolzano à 1 h 30. Nous organisons les transferts entre lac et montagne, ou des journées alpines aller-retour depuis votre hôtel de Riva.',
          en: 'Ideally: Riva hinges the two. Madonna di Campiglio is 1 h 15 away, Bolzano 1 h 30. We arrange lake-to-mountain transfers, or return alpine day trips from your Riva hotel.',
        },
      },
    ],
    nearby: ['lake-garda-sirmione', 'verona'],
  },
  {
    slug: 'siena',
    name: { fr: 'Sienne', en: 'Siena' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Florence-Peretola (FLR)',
    airportTransfer: {
      fr: 'Sienne se rejoint depuis l’aéroport de Florence-Peretola (FLR) en 1 h 15 environ (80 km par le raccordement Firenze-Siena). Pise (PSA) est à 1 h 30, Rome-Fiumicino à 2 h 30. Le centre historique étant fermé aux voitures, votre chauffeur vous dépose aux portes autorisées les plus proches de votre hôtel et coordonne les bagages.',
      en: 'Siena is about 1 h 15 (80 km via the Firenze-Siena link road) from Florence-Peretola Airport (FLR). Pisa (PSA) is 1 h 30 away, Rome-Fiumicino 2 h 30. As the historic centre is closed to cars, your chauffeur drops you at the authorised gates nearest your hotel and coordinates luggage.',
    },
    intro: {
      fr: [
        'Rivale gothique de Florence figée dans son siècle d’or, Sienne s’enroule autour de la piazza del Campo, coquille de brique où se court le Palio deux fois l’été. Duomo zébré de marbres, fresques du Bon Gouvernement au Palazzo Pubblico, banques les plus anciennes du monde : la ville se visite à pied, mais s’atteint et se quitte avec méthode. Votre **chauffeur privé à Sienne** maîtrise les portes de la ZTL et les hôtels intra-muros.',
        'Sienne est surtout la capitale des **terres du Chianti et du Val d’Orcia** : Montalcino et son brunello à quarante minutes, Montepulciano et Pienza à une heure, San Gimignano et Monteriggioni sur la via Francigena au nord. En mise à disposition à la journée, votre chauffeur déroule les crete senesi — ces collines d’argile ondulées qui ont défini l’image de la Toscane — à votre rythme.',
      ],
      en: [
        'Florence’s Gothic rival frozen in its golden century, Siena coils around the Piazza del Campo, the brick shell where the Palio is run twice each summer. A marble-striped Duomo, the Good Government frescoes in the Palazzo Pubblico, the world’s oldest bank: the city is explored on foot but entered and left with method. Your **private chauffeur in Siena** knows the ZTL gates and the intramural hotels.',
        'Above all, Siena is the capital of the **Chianti and Val d’Orcia country**: Montalcino and its Brunello forty minutes away, Montepulciano and Pienza an hour, San Gimignano and Monteriggioni on the Via Francigena to the north. With a full-day hire, your chauffeur unrolls the crete senesi — the rolling clay hills that defined Tuscany’s image — at your own pace.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Val d’Orcia, Pienza et Montalcino', en: 'Val d’Orcia, Pienza and Montalcino' },
        teaser: {
          fr: 'Les collines UNESCO au sud de Sienne : la ville idéale de Pie II à Pienza, dégustation de brunello dans un domaine de Montalcino, cyprès de San Quirico et chapelle de Vitaleta au couchant.',
          en: 'The UNESCO hills south of Siena: Pius II’s ideal city at Pienza, a Brunello tasting at a Montalcino estate, the San Quirico cypresses and the Vitaleta chapel at sunset.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Chianti sud, Castellina et Radda', en: 'Southern Chianti, Castellina and Radda' },
        teaser: {
          fr: 'La route du Gallo Nero au départ de Sienne : deux domaines historiques entre Castellina et Radda, déjeuner dans une fattoria, retour par la forteresse flottante de Monteriggioni et ses quatorze tours.',
          en: 'The Gallo Nero road from Siena: two historic estates between Castellina and Radda, lunch in a fattoria, return via the floating fortress of Monteriggioni and its fourteen towers.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Crete senesi et abbaye de Monte Oliveto', en: 'The crete senesi and Monte Oliveto abbey' },
        teaser: {
          fr: 'Les collines lunaires d’argile au sud-est de Sienne, la route panoramique d’Asciano, puis le grand cloître fresqué de Monte Oliveto Maggiore, toujours habité par les moines olivétains. La Toscane métaphysique.',
          en: 'The moon-like clay hills south-east of Siena, the panoramic Asciano road, then the great frescoed cloister of Monte Oliveto Maggiore, still home to Olivetan monks. Metaphysical Tuscany.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '460',
      },
      {
        title: { fr: 'San Gimignano et la via Francigena', en: 'San Gimignano and the Via Francigena' },
        teaser: {
          fr: 'Les tours de « Manhattan médiévale » à quarante minutes de Sienne, la vernaccia dégustée chez un producteur, puis Colle di Val d’Elsa, capitale du cristal. Retour par les collines de la Francigena.',
          en: 'The towers of the “medieval Manhattan” forty minutes from Siena, Vernaccia tasted at a producer’s, then Colle di Val d’Elsa, capital of crystal. Return along the Francigena hills.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Soirée siennoise, Campo illuminé', en: 'Siena evening, the Campo illuminated' },
        teaser: {
          fr: 'Apéritif en terrasse sur le Campo, dîner de pici et chianina dans une osteria des contrade, puis le Duomo et les ruelles illuminées. Dépose aux portes de la ZTL, véhicule à disposition toute la soirée.',
          en: 'A terrace aperitivo on the Campo, a dinner of pici and Chianina beef in a contrada osteria, then the floodlit Duomo and lanes. Drop-off at the ZTL gates, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Comment rejoindre Sienne depuis les aéroports de Florence ou de Pise ?',
          en: 'How do I reach Siena from Florence or Pisa airports?',
        },
        a: {
          fr: 'Comptez 1 h 15 depuis Florence-Peretola et 1 h 30 depuis Pise, à prix fixe, avec accueil avec panneau nominatif et suivi du vol. Rome-Fiumicino est également desservi en 2 h 30 environ — une liaison directe très pratique en début ou fin de séjour toscan.',
          en: 'Allow 1 h 15 from Florence-Peretola and 1 h 30 from Pisa, at fixed prices, with a name-board meet-and-greet and flight tracking. Rome-Fiumicino is also served in around 2 h 30 — a very practical direct link at the start or end of a Tuscan stay.',
        },
      },
      {
        q: {
          fr: 'Peut-on assister au Palio avec votre service ?',
          en: 'Can I attend the Palio with your service?',
        },
        a: {
          fr: 'Oui, les 2 juillet et 16 août. La ville est alors saturée : nous déposons nos clients tôt aux portes, coordonnons l’accès à leur tribune ou balcon réservé et assurons le retour de nuit. Réservez plusieurs semaines à l’avance.',
          en: 'Yes, on 2 July and 16 August. The city is saturated on those days: we drop guests early at the gates, coordinate access to their reserved stand or balcony and handle the late-night return. Book several weeks ahead.',
        },
      },
      {
        q: {
          fr: 'Sienne ou Florence : quelle base pour explorer la Toscane du sud ?',
          en: 'Siena or Florence: which base for southern Tuscany?',
        },
        a: {
          fr: 'Pour le Val d’Orcia, Montalcino et Montepulciano, Sienne fait gagner quarante minutes par trajet. Nous organisons aussi les transferts entre les deux villes avec étapes en route — Monteriggioni, un domaine du Chianti — pour ne rien perdre du voyage.',
          en: 'For the Val d’Orcia, Montalcino and Montepulciano, Siena saves forty minutes each way. We also arrange transfers between the two cities with stops en route — Monteriggioni, a Chianti estate — so the journey itself is never wasted.',
        },
      },
    ],
    nearby: ['florence', 'san-gimignano'],
  },
  {
    slug: 'pisa',
    name: { fr: 'Pise', en: 'Pisa' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Pise-Galileo Galilei (PSA)',
    airportTransfer: {
      fr: 'L’aéroport de Pise-Galileo Galilei (PSA), premier aéroport de Toscane, n’est qu’à 2 km au sud du centre : 10 minutes suffisent pour rejoindre les quais de l’Arno, 15 pour la piazza dei Miracoli. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Pisa-Galileo Galilei Airport (PSA), Tuscany’s busiest, is just 2 km south of the centre: 10 minutes to the Arno embankments, 15 to the Piazza dei Miracoli. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'La tour penchée n’est que le campanile d’un ensemble plus vaste : sur la piazza dei Miracoli, Duomo, baptistère et Camposanto composent le plus audacieux manifeste roman d’Italie, héritage d’une république maritime qui dominait la Méditerranée. Ville universitaire vive — la Normale de Pise a formé Fermi et Carducci —, Pise mérite mieux qu’une escale : votre **chauffeur privé à Pise** vous en donne les clés, à l’heure près de vos créneaux de visite.',
        'Premier aéroport de Toscane, Pise est aussi la **porte d’entrée logistique de la région** : Lucques à trente minutes, Florence à une heure, la Versilia et Forte dei Marmi à quarante minutes, les Cinque Terre à une heure par La Spezia. Beaucoup de nos clients atterrissent à Pise et repartent le soir même vers leur villa du Chianti ou leur palace de la côte : le transfert devient la première étape du voyage.',
      ],
      en: [
        'The Leaning Tower is only the bell tower of a greater whole: on the Piazza dei Miracoli, the Duomo, baptistery and Camposanto form Italy’s boldest Romanesque manifesto, legacy of a maritime republic that once ruled the Mediterranean. A lively university city — Pisa’s Normale educated Fermi and Carducci — Pisa deserves more than a stopover: your **private chauffeur in Pisa** hands you its keys, timed to the minute of your entry slots.',
        'Tuscany’s busiest airport also makes Pisa the **region’s logistical gateway**: Lucca thirty minutes away, Florence an hour, Versilia and Forte dei Marmi forty minutes, the Cinque Terre an hour via La Spezia. Many of our guests land in Pisa and continue the same evening to their Chianti villa or coastal grand hotel: the transfer becomes the journey’s first chapter.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Piazza dei Miracoli et Pise secrète', en: 'Piazza dei Miracoli and secret Pisa' },
        teaser: {
          fr: 'Montée à la tour réservée à l’avance, Duomo et fresques du Camposanto, puis la Pise des Pisans : borgo Stretto, piazza dei Cavalieri, quais de l’Arno et église gothique de la Spina. Guide privé en option.',
          en: 'A pre-booked tower climb, the Duomo and Camposanto frescoes, then the Pisans’ own Pisa: Borgo Stretto, Piazza dei Cavalieri, the Arno embankments and the Gothic Spina church. Optional private guide.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Lucques et la villa Reale de Marlia', en: 'Lucca and the Villa Reale di Marlia' },
        teaser: {
          fr: 'À trente minutes, la ville aux cent églises derrière ses remparts intacts : piazza dell’Anfiteatro, tour Guinigi couronnée de chênes, puis les jardins de la villa Reale de Marlia, chère à Élisa Bonaparte.',
          en: 'Thirty minutes away, the city of a hundred churches behind intact ramparts: Piazza dell’Anfiteatro, the oak-crowned Guinigi tower, then the gardens of Villa Reale di Marlia, beloved of Elisa Bonaparte.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Cinque Terre par La Spezia', en: 'The Cinque Terre via La Spezia' },
        teaser: {
          fr: 'Votre chauffeur vous conduit à La Spezia en une heure, puis train ou bateau vers Vernazza, Manarola et Monterosso — les villages sont fermés aux voitures. Journée coordonnée, retour à Pise en soirée.',
          en: 'Your chauffeur drives you to La Spezia in an hour, then train or boat to Vernazza, Manarola and Monterosso — the villages are closed to cars. A coordinated day, back in Pisa by evening.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Versilia, Forte dei Marmi et carrières de Carrare', en: 'Versilia, Forte dei Marmi and the Carrara quarries' },
        teaser: {
          fr: 'Les bagni élégants de Forte dei Marmi, déjeuner de fruits de mer face aux Apuanes, puis montée en 4x4 dans les carrières de marbre où Michel-Ange choisissait ses blocs. Mer et montagne en une journée.',
          en: 'The elegant beach clubs of Forte dei Marmi, a seafood lunch facing the Apuan Alps, then a 4x4 climb into the marble quarries where Michelangelo chose his blocks. Sea and mountain in one day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
      {
        title: { fr: 'San Miniato et la truffe blanche', en: 'San Miniato and the white truffle' },
        teaser: {
          fr: 'À mi-chemin de Florence, la colline de la truffe blanche : chasse avec trifolau et son chien dans les bois, déjeuner truffé dans le bourg médiéval. D’octobre à décembre, l’expérience gourmande absolue.',
          en: 'Halfway to Florence, the white-truffle hill town: a hunt with a trifolau and his dog in the woods, a truffle lunch in the medieval borgo. From October to December, the ultimate gourmet outing.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '820',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Pise et Florence ?',
          en: 'How much does a transfer between Pisa Airport and Florence cost?',
        },
        a: {
          fr: 'Pise-Florence demande une heure environ par la FI-PI-LI, à prix fixe confirmé à la réservation. Nous desservons aussi Lucques (30 min), Forte dei Marmi (40 min), Sienne (1 h 30) et toute villa ou domaine de Toscane, avec accueil avec panneau nominatif et suivi du vol.',
          en: 'Pisa to Florence takes about an hour via the FI-PI-LI, at a fixed price confirmed at booking. We also serve Lucca (30 min), Forte dei Marmi (40 min), Siena (1 h 30) and any Tuscan villa or estate, with a name-board meet-and-greet and flight tracking.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Pise en escale entre deux vols ?',
          en: 'Can I visit Pisa on a layover between flights?',
        },
        a: {
          fr: 'Oui : l’aéroport est à quinze minutes de la piazza dei Miracoli. Avec quatre heures d’escale, votre chauffeur vous fait découvrir la tour, le Duomo et le baptistère, bagages à bord du véhicule, et vous redépose à l’enregistrement avec une marge de sécurité.',
          en: 'Yes: the airport is fifteen minutes from the Piazza dei Miracoli. With a four-hour layover, your chauffeur shows you the tower, Duomo and baptistery, luggage kept aboard the vehicle, and returns you to check-in with a safety margin.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver la montée à la tour de Pise ?',
          en: 'Should the Leaning Tower climb be booked ahead?',
        },
        a: {
          fr: 'Fortement recommandé : les créneaux horaires sont contingentés et partent vite en saison. Indiquez-nous votre horaire souhaité et nous calons le transfert et, sur demande, la réservation des billets sur votre créneau exact.',
          en: 'Strongly recommended: timed slots are capped and sell out fast in season. Tell us your preferred time and we align the transfer and, on request, the ticket booking with your exact slot.',
        },
      },
    ],
    nearby: ['lucca', 'florence'],
  },
  {
    slug: 'lucca',
    name: { fr: 'Lucques', en: 'Lucca' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Pise-Galileo Galilei (PSA)',
    airportTransfer: {
      fr: 'Lucques se rejoint depuis l’aéroport de Pise (PSA) en 30 minutes environ (25 km par l’A11). Florence-Peretola est à 45 minutes. Le centre intra-muros étant en ZTL, votre chauffeur vous dépose à la porte la plus proche de votre hôtel — ou y accède directement selon les autorisations — et coordonne les bagages.',
      en: 'Lucca is about 30 minutes (25 km via the A11) from Pisa Airport (PSA). Florence-Peretola is 45 minutes away. As the walled centre is a ZTL, your chauffeur drops you at the gate nearest your hotel — or drives in directly where permits allow — and coordinates luggage.',
    },
    intro: {
      fr: [
        'Seule ville d’Italie à avoir conservé intacte son enceinte Renaissance, Lucques vit à l’intérieur de quatre kilomètres de remparts plantés de platanes, devenus la plus belle promenade de Toscane. Cent églises, la piazza dell’Anfiteatro lovée dans l’ellipse du théâtre romain, la tour Guinigi couronnée de chênes verts, la maison natale de Puccini : la ville respire une douceur que Florence a perdue. Votre **chauffeur privé à Lucques** en respecte le rythme.',
        'Autour des murs s’étend un pays de villas et de collines : **les villas lucquoises** — Reale de Marlia, Torrigiani, Mansi — et leurs jardins, les vignes de Montecarlo, la Garfagnana sauvage au nord et le pont du Diable de Borgo a Mozzano, la Versilia à trente minutes. Votre chauffeur relie remparts, villas et bord de mer en journées composées sur mesure, à prix fixe.',
      ],
      en: [
        'The only city in Italy to have kept its Renaissance walls intact, Lucca lives inside four kilometres of tree-planted ramparts, now Tuscany’s loveliest promenade. A hundred churches, the Piazza dell’Anfiteatro curled inside the Roman theatre’s ellipse, the holm-oak-crowned Guinigi tower, Puccini’s birthplace: the city breathes a gentleness Florence has lost. Your **private chauffeur in Lucca** respects that rhythm.',
        'Beyond the walls stretches a country of villas and hills: **the Lucchese villas** — Reale di Marlia, Torrigiani, Mansi — and their gardens, the Montecarlo vineyards, the wild Garfagnana to the north with the Devil’s Bridge at Borgo a Mozzano, Versilia thirty minutes away. Your chauffeur links ramparts, villas and seaside into tailor-made days at fixed prices.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Villas et jardins lucquois', en: 'The villas and gardens of Lucca' },
        teaser: {
          fr: 'La villa Reale de Marlia et son théâtre de verdure, la villa Torrigiani et sa façade baroque, la villa Grabau : trois siècles d’art des jardins dans les collines. Déjeuner dans une villa-domaine.',
          en: 'The Villa Reale di Marlia and its green theatre, the Baroque façade of Villa Torrigiani, Villa Grabau: three centuries of garden art in the hills. Lunch at a villa estate.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Garfagnana et pont du Diable', en: 'The Garfagnana and the Devil’s Bridge' },
        teaser: {
          fr: 'Remontée du Serchio vers le pont médiéval de Borgo a Mozzano, Barga et sa cathédrale-belvédère, la forteresse des Verrucole. La Toscane verte et secrète, entre Apennins et Alpes apuanes.',
          en: 'Up the Serchio to the medieval bridge at Borgo a Mozzano, Barga and its belvedere cathedral, the Verrucole fortress. Green, secret Tuscany between the Apennines and the Apuan Alps.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '700',
      },
      {
        title: { fr: 'Montecarlo et les collines du vin', en: 'Montecarlo and the wine hills' },
        teaser: {
          fr: 'Le bourg fortifié de Montecarlo et ses caves familiales à vingt minutes de Lucques : deux dégustations, huile nouvelle en saison, déjeuner face aux vignes. L’appellation confidentielle de la Toscane du nord.',
          en: 'The walled village of Montecarlo and its family cellars twenty minutes from Lucca: two tastings, new-season olive oil, lunch overlooking the vines. Northern Tuscany’s confidential appellation.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '440',
      },
      {
        title: { fr: 'Sur les pas de Puccini', en: 'In Puccini’s footsteps' },
        teaser: {
          fr: 'La maison natale du compositeur à Lucques, puis sa villa du lac de Massaciuccoli à Torre del Lago. En été, soirée au festival Puccini en plein air, retour de nuit assuré par votre chauffeur.',
          en: 'The composer’s birthplace in Lucca, then his lakeside villa at Torre del Lago on Lake Massaciuccoli. In summer, an evening at the open-air Puccini Festival, with your chauffeur handling the late return.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '520',
      },
      {
        title: { fr: 'Pise et la côte en contrepoint', en: 'Pisa and the coast as counterpoint' },
        teaser: {
          fr: 'La piazza dei Miracoli le matin, puis les bagni de la Versilia ou le port de Viareggio et ses chantiers de yachts l’après-midi. Deux mondes à trente minutes des remparts.',
          en: 'The Piazza dei Miracoli in the morning, then the Versilia beach clubs or Viareggio’s harbour and yacht yards in the afternoon. Two worlds thirty minutes from the ramparts.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Comment rejoindre Lucques depuis les aéroports de Pise ou Florence ?',
          en: 'How do I reach Lucca from Pisa or Florence airports?',
        },
        a: {
          fr: 'Pise (PSA) est à 30 minutes, Florence-Peretola à 45 minutes, à prix fixe avec accueil avec panneau nominatif et suivi du vol. Votre chauffeur vous dépose à la porte des remparts la plus proche de votre hôtel et coordonne le portage des bagages.',
          en: 'Pisa (PSA) is 30 minutes away, Florence-Peretola 45 minutes, at fixed prices with a name-board meet-and-greet and flight tracking. Your chauffeur drops you at the rampart gate nearest your hotel and coordinates luggage portering.',
        },
      },
      {
        q: {
          fr: 'Peut-on circuler en voiture dans Lucques intra-muros ?',
          en: 'Can cars circulate inside Lucca’s walls?',
        },
        a: {
          fr: 'Le centre est en ZTL et largement piéton. Nos véhicules NCC accèdent aux hôtels intra-muros disposant d’autorisations ; sinon, la dépose se fait aux portes — jamais à plus de quelques centaines de mètres de votre adresse.',
          en: 'The centre is a largely pedestrian ZTL. Our NCC vehicles may reach intramural hotels holding permits; otherwise drop-off is at the gates — never more than a few hundred metres from your address.',
        },
      },
      {
        q: {
          fr: 'Lucques est-elle une bonne base pour un séjour en Toscane du nord ?',
          en: 'Is Lucca a good base for northern Tuscany?',
        },
        a: {
          fr: 'Excellente : Pise et la Versilia sont à trente minutes, Florence à une heure, la Garfagnana aux portes de la ville. Plus calme que Florence, Lucques permet de rayonner sans embouteillages — votre chauffeur compose l’itinéraire de chaque journée.',
          en: 'Excellent: Pisa and Versilia are thirty minutes away, Florence an hour, the Garfagnana on the doorstep. Quieter than Florence, Lucca lets you range widely without traffic — your chauffeur shapes each day’s route.',
        },
      },
    ],
    nearby: ['pisa', 'florence'],
  },
  {
    slug: 'san-gimignano',
    name: { fr: 'San Gimignano', en: 'San Gimignano' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Florence-Peretola (FLR)',
    airportTransfer: {
      fr: 'San Gimignano se rejoint depuis l’aéroport de Florence-Peretola (FLR) en 1 heure environ (55 km par le raccordement Firenze-Siena, sortie Poggibonsi). Pise (PSA) est à 1 h 15. Le bourg étant entièrement piéton, votre chauffeur vous dépose aux portes des remparts et coordonne les bagages avec votre hôtel.',
      en: 'San Gimignano is about 1 hour (55 km via the Firenze-Siena link road, Poggibonsi exit) from Florence-Peretola Airport (FLR). Pisa (PSA) is 1 h 15 away. As the town is fully pedestrian, your chauffeur drops you at the rampart gates and coordinates luggage with your hotel.',
    },
    intro: {
      fr: [
        'Quatorze tours dressées au-dessus des vignes lui valent son surnom de Manhattan médiévale : San Gimignano, étape de la via Francigena classée UNESCO, a conservé intact son profil du XIIIᵉ siècle. Fresques de Ghirlandaio à la collégiale, piazza della Cisterna pavée de briques, vernaccia dorée servie face aux collines : le bourg se mérite tôt le matin ou en fin de journée, quand les cars sont partis — c’est exactement ce que permet votre **chauffeur privé à San Gimignano**.',
        'Autour des remparts, la **Toscane des cartes postales** : le Chianti à trente minutes, Volterra l’étrusque et ses ateliers d’albâtre à quarante minutes, Sienne et Monteriggioni au sud, Certaldo la patrie de Boccace à quinze minutes. En mise à disposition, votre chauffeur enchaîne bourgs perchés et domaines viticoles pendant que vous ne comptez que les panoramas.',
      ],
      en: [
        'Fourteen towers rising above the vines earned it the nickname of the medieval Manhattan: San Gimignano, a UNESCO-listed stage on the Via Francigena, keeps its thirteenth-century skyline intact. Ghirlandaio frescoes in the Collegiata, the brick-paved Piazza della Cisterna, golden Vernaccia served facing the hills: the town is best earned early in the morning or at day’s end, once the coaches have gone — which is exactly what your **private chauffeur in San Gimignano** makes possible.',
        'Around the ramparts lies **postcard Tuscany**: Chianti thirty minutes away, Etruscan Volterra and its alabaster workshops forty minutes, Siena and Monteriggioni to the south, Certaldo — Boccaccio’s home town — fifteen minutes off. With hourly hire, your chauffeur strings together hilltop villages and wine estates while you count nothing but panoramas.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Volterra, l’étrusque', en: 'Etruscan Volterra' },
        teaser: {
          fr: 'À quarante minutes, la ville la plus ancienne de Toscane : porte étrusque, théâtre romain, musée Guarnacci et ateliers d’albâtre. Route panoramique des balze au retour, arrêt dans un domaine de vernaccia.',
          en: 'Forty minutes away, Tuscany’s most ancient town: the Etruscan gate, the Roman theatre, the Guarnacci museum and alabaster workshops. The panoramic balze road back, with a Vernaccia estate stop.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Vernaccia et safran, saveurs du bourg', en: 'Vernaccia and saffron, flavours of the town' },
        teaser: {
          fr: 'Le seul blanc DOCG de Toscane dégusté chez deux producteurs sous les tours, puis le safran de San Gimignano, cultivé ici depuis le Moyen Âge, dans une ferme des environs. Déjeuner dans les vignes.',
          en: 'Tuscany’s only DOCG white tasted at two producers beneath the towers, then San Gimignano saffron, grown here since the Middle Ages, at a nearby farm. Lunch in the vines.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '460',
      },
      {
        title: { fr: 'Chianti par les routes blanches', en: 'Chianti by the white roads' },
        teaser: {
          fr: 'Les strade bianche vers Castellina et Panzano : deux domaines historiques du Gallo Nero, déjeuner de bistecca chez un boucher-culte, retour au couchant quand les tours s’embrasent.',
          en: 'The strade bianche to Castellina and Panzano: two historic Gallo Nero estates, a bistecca lunch at a cult butcher’s, returning at sunset as the towers catch fire.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Sienne et Monteriggioni', en: 'Siena and Monteriggioni' },
        teaser: {
          fr: 'La couronne de tours de Monteriggioni, citée par Dante, puis Sienne : le Campo, le Duomo, les contrade. Retour par les collines de la via Francigena. Les trois icônes médiévales en une journée.',
          en: 'Monteriggioni’s crown of towers, cited by Dante, then Siena: the Campo, the Duomo, the contrade. Return through the Via Francigena hills. Three medieval icons in one day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'San Gimignano à l’aube', en: 'San Gimignano at dawn' },
        teaser: {
          fr: 'Arrivée avant les cars : les ruelles vides, la montée à la torre Grossa à l’ouverture, petit-déjeuner sur la piazza della Cisterna. Votre chauffeur vous reprend avant la foule pour la suite de la journée.',
          en: 'Arrive before the coaches: empty lanes, the Torre Grossa climb at opening time, breakfast on Piazza della Cisterna. Your chauffeur collects you ahead of the crowds for the rest of the day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Comment accéder à San Gimignano, village entièrement piéton ?',
          en: 'How do I get into fully pedestrian San Gimignano?',
        },
        a: {
          fr: 'Votre chauffeur vous dépose à la porte San Giovanni ou San Matteo, à quelques minutes à pied de la piazza della Cisterna, et coordonne le portage des bagages avec votre hôtel. Les clients d’hôtels intra-muros bénéficient parfois d’un accès véhicule dédié, que nous vérifions à la réservation.',
          en: 'Your chauffeur drops you at Porta San Giovanni or San Matteo, a few minutes’ walk from Piazza della Cisterna, and coordinates luggage portering with your hotel. Intramural hotel guests sometimes enjoy dedicated vehicle access, which we verify at booking.',
        },
      },
      {
        q: {
          fr: 'Quel est le meilleur moment pour visiter San Gimignano ?',
          en: 'When is the best time to visit San Gimignano?',
        },
        a: {
          fr: 'Avant 10 heures ou après 17 heures, quand les excursions en car sont reparties. Le grand avantage du chauffeur privé est justement d’arriver tôt ou de rester tard, en calant les autres visites de la journée sur les heures creuses du bourg.',
          en: 'Before 10 am or after 5 pm, once the coach tours have left. The great advantage of a private chauffeur is precisely arriving early or staying late, arranging the day’s other visits around the town’s quiet hours.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner San Gimignano avec le Chianti ou Sienne dans la journée ?',
          en: 'Can San Gimignano be combined with Chianti or Siena in a day?',
        },
        a: {
          fr: 'Oui : Sienne est à quarante minutes, le cœur du Chianti à trente. Une journée type depuis Florence enchaîne San Gimignano le matin, déjeuner et dégustation dans le Chianti, Monteriggioni ou Sienne l’après-midi — à prix fixe, itinéraire ajustable.',
          en: 'Yes: Siena is forty minutes away, the heart of Chianti thirty. A typical day from Florence links San Gimignano in the morning, a Chianti lunch and tasting, then Monteriggioni or Siena in the afternoon — fixed price, adjustable itinerary.',
        },
      },
    ],
    nearby: ['siena', 'florence'],
  },
  {
    slug: 'montepulciano',
    name: { fr: 'Montepulciano', en: 'Montepulciano' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Rome-Fiumicino (FCO)',
    airportTransfer: {
      fr: 'Montepulciano se situe à mi-chemin de Rome et Florence : comptez 2 heures depuis Rome-Fiumicino (FCO, 180 km par l’A1) et 1 h 30 depuis Florence-Peretola (FLR, 115 km). Le centre historique perché étant en ZTL, votre chauffeur vous dépose au plus près de votre hôtel et coordonne les bagages dans les ruelles en pente.',
      en: 'Montepulciano sits halfway between Rome and Florence: allow 2 hours from Rome-Fiumicino (FCO, 180 km via the A1) and 1 h 30 from Florence-Peretola (FLR, 115 km). As the hilltop centre is a ZTL, your chauffeur drops you as close as possible to your hotel and coordinates luggage through the sloping lanes.',
    },
    intro: {
      fr: [
        'Perchée à 600 mètres entre Val d’Orcia et Val di Chiana, Montepulciano aligne le long de son corso des palais Renaissance dessinés par Sangallo et Vignola, jusqu’à la piazza Grande couronnant la colline. Sous les palais, des caves creusées dans le tuf élèvent le **vino nobile**, l’un des plus anciens crus d’Italie. Votre **chauffeur privé à Montepulciano** gère la ZTL, les ruelles pentues et les routes blanches des domaines alentour.',
        'La position est stratégique : **Pienza à un quart d’heure, le Val d’Orcia entier à portée de main**, Montalcino à quarante minutes, Cortona et le lac Trasimène de l’autre côté de la Val di Chiana, les thermes de Bagno Vignoni et San Casciano dei Bagni au sud. À mi-chemin de Rome et Florence, Montepulciano est l’étape idéale d’un itinéraire toscan — et votre chauffeur en fait un port d’attache sans contrainte.',
      ],
      en: [
        'Perched at 600 metres between the Val d’Orcia and the Val di Chiana, Montepulciano lines its corso with Renaissance palaces by Sangallo and Vignola, up to the Piazza Grande crowning the hill. Beneath the palaces, cellars dug into the tufa age **Vino Nobile**, one of Italy’s oldest appellations. Your **private chauffeur in Montepulciano** handles the ZTL, the steep lanes and the white roads of the surrounding estates.',
        'The position is strategic: **Pienza fifteen minutes away, the whole Val d’Orcia within reach**, Montalcino forty minutes, Cortona and Lake Trasimeno across the Val di Chiana, the thermal springs of Bagno Vignoni and San Casciano dei Bagni to the south. Halfway between Rome and Florence, Montepulciano is the ideal stage of a Tuscan itinerary — and your chauffeur makes it an effortless home port.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Caves historiques du vino nobile', en: 'Historic Vino Nobile cellars' },
        teaser: {
          fr: 'Sous les palais du corso, les caves étrusques et médiévales — Contucci, De’ Ricci — puis un domaine dans les vignes : verticales de vino nobile, déjeuner vigneron face à la Val di Chiana.',
          en: 'Beneath the corso’s palaces, the Etruscan and medieval cellars — Contucci, De’ Ricci — then an estate in the vines: Vino Nobile verticals and a winegrower’s lunch facing the Val di Chiana.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Pienza et le Val d’Orcia', en: 'Pienza and the Val d’Orcia' },
        teaser: {
          fr: 'La ville idéale de Pie II, ses pecorinos affinés et sa vue infinie, puis Monticchiello, la chapelle de Vitaleta et les cyprès de San Quirico. Le paysage UNESCO au départ de Montepulciano.',
          en: 'Pius II’s ideal city, its aged pecorinos and endless view, then Monticchiello, the Vitaleta chapel and the San Quirico cypresses. The UNESCO landscape from Montepulciano’s doorstep.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '460',
      },
      {
        title: { fr: 'Bagno Vignoni et thermes du Val d’Orcia', en: 'Bagno Vignoni and the Val d’Orcia springs' },
        teaser: {
          fr: 'Le village dont la place est une piscine thermale médiévale, puis un après-midi de bains dans un établissement contemporain — Bagno Vignoni ou San Casciano dei Bagni. Détente souveraine entre les collines.',
          en: 'The village whose square is a medieval thermal pool, then an afternoon of bathing at a contemporary spa — Bagno Vignoni or San Casciano dei Bagni. Sovereign relaxation among the hills.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '480',
      },
      {
        title: { fr: 'Cortona et le lac Trasimène', en: 'Cortona and Lake Trasimeno' },
        teaser: {
          fr: 'De l’autre côté de la Val di Chiana, la ville étrusque de « Sous le soleil de Toscane » : musée de l’Académie, fresques de Signorelli, puis les rives du Trasimène. Déjeuner face au lac.',
          en: 'Across the Val di Chiana, the Etruscan town of “Under the Tuscan Sun”: the Academy museum, Signorelli frescoes, then the shores of Trasimeno. Lunch facing the lake.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Montalcino et le brunello', en: 'Montalcino and Brunello' },
        teaser: {
          fr: 'À quarante minutes par les crêtes du Val d’Orcia, la capitale du brunello : forteresse du XIVᵉ, deux domaines dégustés, abbaye romane de Sant’Antimo dans son vallon d’oliviers au retour.',
          en: 'Forty minutes along the Val d’Orcia ridges, the capital of Brunello: the fourteenth-century fortress, two estates tasted, and the Romanesque abbey of Sant’Antimo in its olive-grove hollow on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Depuis quel aéroport rejoindre Montepulciano ?',
          en: 'Which airport should I use for Montepulciano?',
        },
        a: {
          fr: 'Florence (1 h 30) et Rome-Fiumicino (2 heures) encadrent la ville par l’A1 ; Pérouse est à une heure pour les vols qui la desservent. Tous les transferts sont à prix fixe, avec accueil avec panneau nominatif et suivi du vol.',
          en: 'Florence (1 h 30) and Rome-Fiumicino (2 hours) frame the town via the A1; Perugia is an hour away for the routes it serves. All transfers are fixed-price, with a name-board meet-and-greet and flight tracking.',
        },
      },
      {
        q: {
          fr: 'Comment se déroulent les visites de caves si personne ne conduit ?',
          en: 'How do cellar visits work when no one wants to drive?',
        },
        a: {
          fr: 'C’est précisément l’intérêt du chauffeur privé : vous dégustez librement dans les caves du centre et les domaines des environs, votre chauffeur assure chaque liaison et charge vos caisses dans le véhicule. Nous réservons les visites à l’avance selon vos préférences.',
          en: 'That is precisely the point of a private chauffeur: you taste freely in the town cellars and surrounding estates, your chauffeur covers every leg and loads your cases into the vehicle. We book the visits ahead to your preferences.',
        },
      },
      {
        q: {
          fr: 'Montepulciano est-elle une bonne étape entre Rome et Florence ?',
          en: 'Is Montepulciano a good stop between Rome and Florence?',
        },
        a: {
          fr: 'Parfaite : la ville coupe le trajet en deux et ouvre le Val d’Orcia. Nous organisons le transfert Rome-Florence avec une ou deux nuits à Montepulciano, ou une simple étape déjeuner-dégustation en cours de route, sans changer de véhicule.',
          en: 'Perfect: the town halves the journey and opens up the Val d’Orcia. We arrange the Rome-Florence transfer with one or two nights in Montepulciano, or a simple lunch-and-tasting stop en route, without changing vehicle.',
        },
      },
    ],
    nearby: ['siena'],
  },
  {
    slug: 'amalfi',
    name: { fr: 'Amalfi', en: 'Amalfi' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Naples-Capodichino (NAP)',
    airportTransfer: {
      fr: 'L’aéroport de Naples-Capodichino (NAP) se trouve à 65 km d’Amalfi : comptez 1h30 à 2h par la route côtière sinueuse. Votre chauffeur, habitué aux lacets de la côte amalfitaine, vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Naples-Capodichino Airport (NAP) lies 65 km from Amalfi: allow 1h30 to 2h along the winding coast road. Your chauffeur, used to the hairpins of the Amalfi Coast, greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ancienne république maritime accrochée à la falaise, Amalfi donne son nom à la plus spectaculaire des côtes italiennes, entre citronniers en terrasses, cathédrale arabo-normande et criques turquoise. Votre **chauffeur privé à Amalfi** maîtrise la route côtière étroite et vertigineuse, gère les zones à circulation limitée et vous dépose au plus près : transferts depuis Naples, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Amalfi commande toute la **côte amalfitaine et le golfe de Salerne**. Ravello et ses jardins suspendus sont à 15 minutes, Positano à 20, Pompéi et le Vésuve à une heure. En mise à disposition à la journée, votre chauffeur relie villages perchés, embarcadères et tables étoilées pendant que vous profitez d’un des plus beaux littoraux du monde sans toucher au volant.',
      ],
      en: [
        'A former maritime republic clinging to the cliff, Amalfi gives its name to Italy’s most spectacular coast, among terraced lemon groves, an Arab-Norman cathedral and turquoise coves. Your **private chauffeur in Amalfi** masters the narrow, vertiginous coast road, handles the limited-traffic zones and drops you as close as possible: transfers from Naples, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Amalfi commands the whole **Amalfi Coast and the Gulf of Salerno**. Ravello and its hanging gardens are 15 minutes away, Positano 20, Pompeii and Vesuvius an hour. With a full-day hire, your chauffeur links perched villages, jetties and starred tables while you enjoy one of the world’s finest coastlines without touching the wheel.',
      ],
    },
    experiences: [
      { title: { fr: 'Route de la côte amalfitaine', en: 'Amalfi Coast road' }, teaser: { fr: 'Amalfi, Positano et Ravello enchaînés sur la mythique route côtière, arrêts panoramiques, déjeuner face à la mer. Votre chauffeur gère les lacets, vous admirez.', en: 'Amalfi, Positano and Ravello linked along the legendary coast road, panoramic stops, lunch facing the sea. Your chauffeur handles the hairpins, you admire.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '690' },
      { title: { fr: 'Ravello et ses jardins', en: 'Ravello and its gardens' }, teaser: { fr: 'La villa Rufolo et la villa Cimbrone, leurs terrasses suspendues au-dessus du golfe, le festival de musique. Demi-journée hors du temps à 15 minutes.', en: 'The Villa Rufolo and Villa Cimbrone, their terraces suspended above the gulf, the music festival. A timeless half-day 15 minutes away.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '390' },
      { title: { fr: 'Pompéi et le Vésuve', en: 'Pompeii and Vesuvius' }, teaser: { fr: 'La cité romaine figée par l’éruption, le cratère du Vésuve et son panorama sur le golfe de Naples. Journée archéologie à une heure de la côte.', en: 'The Roman city frozen by the eruption, the Vesuvius crater and its panorama over the Bay of Naples. An archaeology day an hour from the coast.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Transfert vers Capri', en: 'Transfer to Capri' }, teaser: { fr: 'Dépose à l’embarcadère de Salerne ou d’Amalfi pour le ferry vers Capri, reprise au retour. Votre chauffeur cale les horaires sur ceux des bateaux.', en: 'Drop-off at the Salerno or Amalfi jetty for the Capri ferry, pick-up on return. Your chauffeur aligns the timings with the boats.' }, duration: { fr: 'Transfert', en: 'Transfer' }, price: '360' },
      { title: { fr: 'Soirée sur la côte', en: 'Evening on the coast' }, teaser: { fr: 'Dîner dans une table étoilée en surplomb, les villages illuminés au bord de l’eau, un dernier limoncello. Véhicule à disposition toute la soirée.', en: 'Dinner at a clifftop starred table, the villages illuminated by the water, a last limoncello. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '420' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Naples à Amalfi ?', en: 'How long from Naples Airport to Amalfi?' }, a: { fr: 'Comptez 1h30 à 2h par la route côtière sinueuse. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 1h30 to 2h along the winding coast road. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'La route de la côte amalfitaine est-elle difficile ?', en: 'Is the Amalfi Coast road difficult?' }, a: { fr: 'Elle est étroite, sinueuse et souvent encombrée. C’est justement l’intérêt d’un chauffeur privé habitué à ces lacets : vous profitez du paysage en toute sécurité, sans stress de conduite ni de stationnement.', en: 'It is narrow, winding and often congested. That is precisely the value of a private chauffeur used to these hairpins: you enjoy the scenery in complete safety, with no driving or parking stress.' } },
      { q: { fr: 'Vos chauffeurs sur la côte amalfitaine parlent-ils anglais ?', en: 'Do your chauffeurs on the Amalfi Coast speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['positano', 'sorrento', 'naples'],
  },
  {
    slug: 'positano',
    name: { fr: 'Positano', en: 'Positano' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Naples-Capodichino (NAP)',
    airportTransfer: {
      fr: 'L’aéroport de Naples-Capodichino (NAP) se trouve à 60 km de Positano : comptez 1h30 à 2h par la route côtière. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif, gère la descente en escaliers du village et suit votre vol en temps réel.',
      en: 'Naples-Capodichino Airport (NAP) lies 60 km from Positano: allow 1h30 to 2h along the coast road. Your chauffeur greets you in arrivals with a name board, handles the village’s stepped descent and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Cascade de maisons pastel dévalant la falaise jusqu’à une plage de galets, Positano est le joyau glamour de la côte amalfitaine. Votre **chauffeur privé à Positano** vous dépose au plus haut du village — où la voiture ne descend pas — gère les bagages et les zones réglementées : transferts depuis Naples, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Positano ouvre sur toute la **côte amalfitaine**. Amalfi et Ravello sont à 20 minutes, le sentier des Dieux part des hauteurs, Capri se rejoint par ferry. En mise à disposition à la journée, votre chauffeur relie villages perchés, plages et embarcadères pendant que vous vivez le rêve méditerranéen sans souci de conduite.',
      ],
      en: [
        'A cascade of pastel houses tumbling down the cliff to a pebble beach, Positano is the glamorous jewel of the Amalfi Coast. Your **private chauffeur in Positano** drops you at the top of the village — where cars cannot descend — handles the luggage and restricted zones: transfers from Naples, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Positano opens onto the whole **Amalfi Coast**. Amalfi and Ravello are 20 minutes away, the Path of the Gods starts from the heights, Capri is reached by ferry. With a full-day hire, your chauffeur links perched villages, beaches and jetties while you live the Mediterranean dream with no driving worry.',
      ],
    },
    experiences: [
      { title: { fr: 'Positano et la côte', en: 'Positano and the coast' }, teaser: { fr: 'Le village en cascade, la plage de Marina Grande, puis Amalfi et Ravello sur la route côtière. Journée panoramique, votre chauffeur gère les lacets.', en: 'The cascading village, Marina Grande beach, then Amalfi and Ravello on the coast road. A panoramic day, your chauffeur handles the hairpins.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '690' },
      { title: { fr: 'Sentier des Dieux', en: 'Path of the Gods' }, teaser: { fr: 'Dépose au départ du sentier à Bomerano, reprise à Nocelle au-dessus de Positano après la plus belle randonnée de la côte. Logistique gérée de bout en bout.', en: 'Drop-off at the trailhead in Bomerano, pick-up at Nocelle above Positano after the coast’s finest hike. Logistics handled end to end.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '390' },
      { title: { fr: 'Pompéi et le Vésuve', en: 'Pompeii and Vesuvius' }, teaser: { fr: 'La cité romaine et le cratère du volcan, à une heure de la côte. Journée archéologie et paysages du golfe de Naples.', en: 'The Roman city and the volcano crater, an hour from the coast. A day of archaeology and Bay of Naples landscapes.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Transfert vers Capri', en: 'Transfer to Capri' }, teaser: { fr: 'Dépose à l’embarcadère de Positano pour le ferry vers Capri, reprise au retour, horaires calés sur les bateaux. Journée sur l’île mythique.', en: 'Drop-off at the Positano jetty for the Capri ferry, pick-up on return, timings aligned with the boats. A day on the legendary island.' }, duration: { fr: 'Transfert', en: 'Transfer' }, price: '360' },
      { title: { fr: 'Soirée glamour', en: 'Glamorous evening' }, teaser: { fr: 'Dîner dans une table iconique face à la mer, les lumières du village se reflétant sur l’eau, un dernier verre en terrasse. Véhicule à disposition.', en: 'Dinner at an iconic table facing the sea, the village lights reflected on the water, a nightcap on a terrace. Vehicle on standby.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '420' },
    ],
    faq: [
      { q: { fr: 'La voiture peut-elle descendre dans Positano ?', en: 'Can the car go down into Positano?' }, a: { fr: 'Le cœur du village est piéton, en escaliers. Votre chauffeur vous dépose au plus haut point accessible, gère vos bagages et vous reprend au même endroit, vous évitant toute contrainte de stationnement.', en: 'The heart of the village is pedestrian, on steps. Your chauffeur drops you at the highest accessible point, handles your luggage and picks you up at the same spot, saving you any parking constraint.' } },
      { q: { fr: 'Combien de temps de Naples à Positano ?', en: 'How long from Naples to Positano?' }, a: { fr: 'Comptez 1h30 à 2h par la route côtière. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 1h30 to 2h along the coast road. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['amalfi', 'sorrento', 'naples'],
  },
  {
    slug: 'sorrento',
    name: { fr: 'Sorrente', en: 'Sorrento' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Naples-Capodichino (NAP)',
    airportTransfer: {
      fr: 'L’aéroport de Naples-Capodichino (NAP) se trouve à 50 km de Sorrente : comptez 1h à 1h15 par l’autoroute puis la route de la péninsule. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Naples-Capodichino Airport (NAP) lies 50 km from Sorrento: allow 1h to 1h15 by motorway then the peninsula road. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Balcon sur le golfe de Naples posé sur ses falaises de tuf, Sorrente marie citronniers, marqueterie d’art et douceur de vivre face au Vésuve. Votre **chauffeur privé à Sorrente** dessert les hôtels de la falaise, le port des ferries et la vieille ville : transferts depuis Naples, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Sorrente est la **base idéale du golfe de Naples**. La côte amalfitaine commence de l’autre côté de la péninsule, Pompéi et le Vésuve sont à 40 minutes, Capri à un ferry. En mise à disposition à la journée, votre chauffeur relie sites antiques, villages perchés et embarcadères pendant que vous rayonnez sans contrainte depuis votre hôtel.',
      ],
      en: [
        'A balcony over the Bay of Naples set on its tuff cliffs, Sorrento marries lemon groves, marquetry art and la dolce vita facing Vesuvius. Your **private chauffeur in Sorrento** serves the clifftop hotels, the ferry port and the old town: transfers from Naples, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Sorrento is the **ideal base for the Bay of Naples**. The Amalfi Coast begins on the other side of the peninsula, Pompeii and Vesuvius are 40 minutes away, Capri a ferry ride. With a full-day hire, your chauffeur links ancient sites, perched villages and jetties while you radiate from your hotel without constraint.',
      ],
    },
    experiences: [
      { title: { fr: 'Côte amalfitaine depuis Sorrente', en: 'Amalfi Coast from Sorrento' }, teaser: { fr: 'La route panoramique vers Positano, Amalfi et Ravello, arrêts photo et déjeuner face à la mer. Votre chauffeur gère les lacets de la côte.', en: 'The scenic road to Positano, Amalfi and Ravello, photo stops and lunch facing the sea. Your chauffeur handles the coast’s hairpins.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '690' },
      { title: { fr: 'Pompéi et le Vésuve', en: 'Pompeii and Vesuvius' }, teaser: { fr: 'La cité romaine à 40 minutes, le cratère du Vésuve et son panorama. Journée archéologie et volcan au départ de Sorrente.', en: 'The Roman city 40 minutes away, the Vesuvius crater and its panorama. A day of archaeology and volcano from Sorrento.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Transfert vers Capri', en: 'Transfer to Capri' }, teaser: { fr: 'Dépose au port de Sorrente pour le ferry vers Capri, reprise au retour, horaires calés. Journée sur l’île de la Grotte bleue.', en: 'Drop-off at Sorrento port for the Capri ferry, pick-up on return, timings aligned. A day on the island of the Blue Grotto.' }, duration: { fr: 'Transfert', en: 'Transfer' }, price: '340' },
      { title: { fr: 'Naples et son centre historique', en: 'Naples and its historic centre' }, teaser: { fr: 'La ville la plus intense d’Italie, ses églises baroques, le musée archéologique et une vraie pizza napolitaine. Journée culturelle à 50 km.', en: 'Italy’s most intense city, its Baroque churches, the archaeological museum and a real Neapolitan pizza. A cultural day 50 km away.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Soirée à Sorrente', en: 'Evening in Sorrento' }, teaser: { fr: 'Dîner dans la vieille ville, la piazza Tasso animée, le coucher de soleil sur le Vésuve depuis la falaise. Véhicule à disposition toute la soirée.', en: 'Dinner in the old town, the lively Piazza Tasso, sunset over Vesuvius from the cliff. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '380' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de Naples à Sorrente ?', en: 'How long from Naples to Sorrento?' }, a: { fr: 'Comptez 1h à 1h15. Le transfert privé est à prix fixe, avec accueil en salle d’arrivée, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 1h to 1h15. The private transfer is at a fixed price, with a meet-and-greet in arrivals, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Sorrente est-elle une bonne base pour la côte amalfitaine ?', en: 'Is Sorrento a good base for the Amalfi Coast?' }, a: { fr: 'Oui, c’est l’une des meilleures : hôtels de qualité, port de ferries pour Capri, et la côte amalfitaine à portée. Votre chauffeur rayonne depuis Sorrente vers tous les sites du golfe.', en: 'Yes, one of the best: quality hotels, a ferry port for Capri, and the Amalfi Coast within reach. Your chauffeur radiates from Sorrento to all the gulf’s sites.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['positano', 'amalfi', 'naples'],
  },
  {
    slug: 'capri',
    name: { fr: 'Capri', en: 'Capri' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Naples-Capodichino (NAP)',
    airportTransfer: {
      fr: 'L’aéroport de Naples-Capodichino (NAP) est relié à Capri par un transfert combiné : votre chauffeur vous conduit au port de Naples ou de Sorrente (30 à 60 minutes), gère vos bagages jusqu’à l’embarcadère et cale l’horaire sur celui du ferry. Accueil avec panneau nominatif et suivi du vol.',
      en: 'Naples-Capodichino Airport (NAP) connects to Capri via a combined transfer: your chauffeur drives you to the port of Naples or Sorrento (30 to 60 minutes), handles your luggage to the jetty and aligns the timing with the ferry. Name-board welcome and flight tracking.',
    },
    intro: {
      fr: [
        'Île mythique du golfe de Naples chère aux empereurs romains et à la jet-set, Capri conjugue Faraglioni, Grotte bleue et jardins d’Auguste. Sur l’île même, la circulation est très restreinte ; votre **chauffeur privé pour Capri** organise l’ensemble du parcours côté continent — transfert aéroport, dépose à l’embarcadère, reprise au retour — et, selon les conditions, la voiture de correspondance sur place. Prix fixes, logistique de bout en bout.',
        'Capri se vit en excursion depuis Naples, Sorrente ou la côte amalfitaine. Votre chauffeur cale les horaires sur les ferries, vous accueille au débarquement et reprend le relais dès votre retour sur le continent. En mise à disposition, il compose votre journée entre le port, l’aéroport et vos étapes du golfe sans que vous ayez à gérer les correspondances.',
      ],
      en: [
        'A legendary island in the Bay of Naples, dear to Roman emperors and the jet set, Capri combines the Faraglioni, the Blue Grotto and the Gardens of Augustus. On the island itself, traffic is heavily restricted; your **private chauffeur for Capri** organises the whole mainland journey — airport transfer, jetty drop-off, return pick-up — and, conditions permitting, the connecting car on site. Fixed prices, end-to-end logistics.',
        'Capri is experienced as an excursion from Naples, Sorrento or the Amalfi Coast. Your chauffeur aligns the timings with the ferries, greets you on disembarkation and takes over as soon as you are back on the mainland. With a hire, he builds your day between the port, the airport and your gulf stops without you having to manage the connections.',
      ],
    },
    experiences: [
      { title: { fr: 'Journée à Capri', en: 'Day on Capri' }, teaser: { fr: 'Transfert et dépose à l’embarcadère, ferry vers l’île, reprise au retour : la Grotte bleue, les Faraglioni, la piazzetta. Logistique du continent gérée pour vous.', en: 'Transfer and jetty drop-off, ferry to the island, pick-up on return: the Blue Grotto, the Faraglioni, the piazzetta. The mainland logistics handled for you.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '420' },
      { title: { fr: 'Capri et la côte amalfitaine', en: 'Capri and the Amalfi Coast' }, teaser: { fr: 'L’île un jour, la route côtière le lendemain : votre chauffeur coordonne ferries, embarcadères et étapes du golfe sur votre séjour. Souplesse totale.', en: 'The island one day, the coast road the next: your chauffeur coordinates ferries, jetties and gulf stops across your stay. Total flexibility.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '690' },
      { title: { fr: 'Transfert aéroport et embarquement', en: 'Airport transfer and embarkation' }, teaser: { fr: 'Accueil à Naples, trajet jusqu’au port, gestion des bagages jusqu’à l’embarcadère, horaires calés sur le ferry. Aucune correspondance à gérer.', en: 'Welcome in Naples, journey to the port, luggage handling to the jetty, timings aligned with the ferry. No connection to manage.' }, duration: { fr: 'Transfert', en: 'Transfer' }, price: '340' },
      { title: { fr: 'Pompéi avant Capri', en: 'Pompeii before Capri' }, teaser: { fr: 'Une matinée à Pompéi puis dépose à l’embarcadère de Sorrente pour l’après-midi sur l’île. Journée antique et méditerranéenne coordonnée.', en: 'A morning in Pompeii then drop-off at the Sorrento jetty for an afternoon on the island. A coordinated ancient and Mediterranean day.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Soirée au retour de Capri', en: 'Evening returning from Capri' }, teaser: { fr: 'Reprise au débarquement en fin de journée, dîner sur la côte ou à Sorrente, retour serein à votre hôtel. Véhicule à disposition en soirée.', en: 'Pick-up on disembarkation at the end of the day, dinner on the coast or in Sorrento, a relaxed return to your hotel. Vehicle on standby in the evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '380' },
    ],
    faq: [
      { q: { fr: 'Peut-on avoir un chauffeur privé sur l’île de Capri ?', en: 'Can you have a private chauffeur on Capri island?' }, a: { fr: 'La circulation est très restreinte sur l’île, réservée à des véhicules autorisés. Nous organisons l’intégralité du parcours côté continent (aéroport, port, retour) et, selon les conditions, la correspondance sur place. Précisez votre programme à la réservation.', en: 'Traffic is heavily restricted on the island, reserved for authorised vehicles. We organise the entire mainland journey (airport, port, return) and, conditions permitting, the connection on site. Please specify your programme at booking.' } },
      { q: { fr: 'Comment se passe le transfert aéroport vers Capri ?', en: 'How does the airport transfer to Capri work?' }, a: { fr: 'Votre chauffeur vous accueille à Naples, vous conduit au port de Naples ou de Sorrente, gère vos bagages jusqu’à l’embarcadère et cale l’horaire sur le ferry. Il vous reprend à l’identique au retour.', en: 'Your chauffeur greets you in Naples, drives you to the port of Naples or Sorrento, handles your luggage to the jetty and aligns the timing with the ferry. He picks you up the same way on return.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['sorrento', 'naples', 'positano'],
  },
  {
    slug: 'portofino',
    name: { fr: 'Portofino', en: 'Portofino' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Gênes-Cristoforo Colombo (GOA)',
    airportTransfer: {
      fr: 'L’aéroport de Gênes-Cristoforo Colombo (GOA) se trouve à 40 km à l’ouest de Portofino : comptez 45 minutes à 1 heure. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif, gère la route étroite du promontoire et suit votre vol en temps réel.',
      en: 'Genoa-Cristoforo Colombo Airport (GOA) lies 40 km west of Portofino: allow 45 minutes to 1 hour. Your chauffeur greets you in arrivals with a name board, handles the narrow promontory road and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Minuscule port de pêche devenu repaire de la jet-set, Portofino aligne ses façades ocre autour d’une piazzetta et d’une marina de yachts, à la pointe d’un promontoire boisé. Votre **chauffeur privé à Portofino** dessert le village, Santa Margherita Ligure et les hôtels de la Riviera du Levant : transferts depuis Gênes, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Portofino ouvre sur la **Riviera ligure et les Cinque Terre**. Santa Margherita et Rapallo sont à quelques minutes, l’abbaye de San Fruttuoso accessible par la mer, les Cinque Terre à une heure. En mise à disposition à la journée, votre chauffeur relie villages de pêcheurs, criques et tables de bord de mer pendant que vous profitez de la dolce vita ligure.',
      ],
      en: [
        'A tiny fishing port turned jet-set haunt, Portofino lines its ochre façades around a piazzetta and a yacht marina, at the tip of a wooded promontory. Your **private chauffeur in Portofino** serves the village, Santa Margherita Ligure and the hotels of the Riviera di Levante: transfers from Genoa, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Portofino opens onto the **Ligurian Riviera and the Cinque Terre**. Santa Margherita and Rapallo are minutes away, the San Fruttuoso abbey reachable by sea, the Cinque Terre an hour. With a full-day hire, your chauffeur links fishing villages, coves and seaside tables while you enjoy the Ligurian dolce vita.',
      ],
    },
    experiences: [
      { title: { fr: 'Portofino et Santa Margherita', en: 'Portofino and Santa Margherita' }, teaser: { fr: 'La piazzetta et la marina de Portofino, la baie élégante de Santa Margherita Ligure, un déjeuner de poisson face aux yachts. Journée Riviera.', en: 'The Portofino piazzetta and marina, the elegant bay of Santa Margherita Ligure, a seafood lunch facing the yachts. A Riviera day.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Cinque Terre depuis Portofino', en: 'Cinque Terre from Portofino' }, teaser: { fr: 'Dépose à La Spezia ou Levanto pour découvrir les cinq villages classés UNESCO en train régional ou bateau, reprise au retour. Journée côte ligure.', en: 'Drop-off at La Spezia or Levanto to discover the five UNESCO-listed villages by regional train or boat, pick-up on return. A Ligurian coast day.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '690' },
      { title: { fr: 'Gênes historique', en: 'Historic Genoa' }, teaser: { fr: 'Les palais des Rolli classés UNESCO, le vieux port et l’aquarium, les ruelles du centre médiéval. Journée patrimoine dans la capitale ligure.', en: 'The UNESCO-listed Rolli palaces, the old port and the aquarium, the lanes of the medieval centre. A heritage day in the Ligurian capital.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Villages du promontoire', en: 'Promontory villages' }, teaser: { fr: 'Camogli et ses maisons colorées, l’abbaye de San Fruttuoso nichée dans sa crique, un déjeuner de bord de mer. Journée intime de la Riviera.', en: 'Camogli and its colourful houses, the San Fruttuoso abbey tucked in its cove, a seaside lunch. An intimate Riviera day.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '390' },
      { title: { fr: 'Soirée à Portofino', en: 'Evening in Portofino' }, teaser: { fr: 'Dîner sur la piazzetta face à la marina, les yachts illuminés, un dernier verre chic. Véhicule à disposition toute la soirée.', en: 'Dinner on the piazzetta facing the marina, the illuminated yachts, a stylish nightcap. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '400' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Gênes à Portofino ?', en: 'How long from Genoa Airport to Portofino?' }, a: { fr: 'Comptez 45 minutes à 1 heure. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 45 minutes to 1 hour. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on visiter les Cinque Terre depuis Portofino ?', en: 'Can you visit the Cinque Terre from Portofino?' }, a: { fr: 'Oui, à environ une heure. Comme les villages sont à circulation restreinte, votre chauffeur vous dépose à La Spezia ou Levanto d’où train et bateaux desservent les cinq villages, puis vous reprend.', en: 'Yes, about an hour away. As the villages have restricted traffic, your chauffeur drops you at La Spezia or Levanto, from where trains and boats serve the five villages, then picks you up.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['genoa', 'cinque-terre'],
  },
  {
    slug: 'cinque-terre',
    name: { fr: 'Cinque Terre', en: 'Cinque Terre' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Pise-Galilée (PSA)',
    airportTransfer: {
      fr: 'L’aéroport de Pise-Galilée (PSA) se trouve à 90 km au sud des Cinque Terre : comptez 1h15. Depuis Gênes (GOA), à 100 km au nord, comptez 1h30. Comme les villages sont à circulation restreinte, votre chauffeur vous dépose à La Spezia ou Levanto, portes d’entrée du parc.',
      en: 'Pisa-Galilei Airport (PSA) lies 90 km south of the Cinque Terre: allow 1h15. From Genoa (GOA), 100 km north, allow 1h30. As the villages have restricted traffic, your chauffeur drops you at La Spezia or Levanto, the gateways to the park.',
    },
    intro: {
      fr: [
        'Cinq villages de pêcheurs accrochés à des falaises plongeant dans la mer Ligure — Monterosso, Vernazza, Corniglia, Manarola et Riomaggiore — les Cinque Terre forment un parc national classé UNESCO où la voiture ne pénètre pas. Votre **chauffeur privé pour les Cinque Terre** vous conduit aux portes du parc — La Spezia ou Levanto — d’où train et bateaux desservent les villages, et vous reprend au retour : transferts depuis Pise ou Gênes, prix fixes.',
        'Les Cinque Terre s’intègrent à un itinéraire de la **Riviera ligure et de la Toscane**. Portofino est à une heure au nord, Pise et Lucques à une heure au sud, les marbres de Carrare tout près. En mise à disposition, votre chauffeur compose une journée entre villages perchés, embarcadères et tables de bord de mer sans souci de conduite ni de stationnement.',
      ],
      en: [
        'Five fishing villages clinging to cliffs plunging into the Ligurian Sea — Monterosso, Vernazza, Corniglia, Manarola and Riomaggiore — the Cinque Terre form a UNESCO-listed national park where cars do not enter. Your **private chauffeur for the Cinque Terre** drives you to the gateways of the park — La Spezia or Levanto — from where trains and boats serve the villages, and picks you up on return: transfers from Pisa or Genoa, fixed prices.',
        'The Cinque Terre fit into a **Ligurian Riviera and Tuscany** itinerary. Portofino is an hour north, Pisa and Lucca an hour south, the Carrara marble quarries nearby. With a hire, your chauffeur builds a day among perched villages, jetties and seaside tables with no driving or parking worry.',
      ],
    },
    experiences: [
      { title: { fr: 'Journée aux Cinque Terre', en: 'Day in the Cinque Terre' }, teaser: { fr: 'Dépose à La Spezia ou Levanto, les cinq villages en train régional ou en bateau, déjeuner de poisson à Vernazza, reprise au retour. Logistique gérée.', en: 'Drop-off at La Spezia or Levanto, the five villages by regional train or boat, a seafood lunch in Vernazza, pick-up on return. Logistics handled.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '690' },
      { title: { fr: 'Cinque Terre et Portofino', en: 'Cinque Terre and Portofino' }, teaser: { fr: 'Les villages classés UNESCO puis le port glamour de Portofino, à une heure au nord. Deux joyaux de la Riviera ligure combinés.', en: 'The UNESCO-listed villages then the glamorous port of Portofino, an hour north. Two Ligurian Riviera jewels combined.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '790' },
      { title: { fr: 'Cinque Terre et Pise', en: 'Cinque Terre and Pisa' }, teaser: { fr: 'Les villages le matin, la tour penchée et la place des Miracles de Pise l’après-midi, à une heure au sud. Journée côte et Toscane.', en: 'The villages in the morning, the leaning tower and the Piazza dei Miracoli of Pisa in the afternoon, an hour south. A coast and Tuscany day.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '720' },
      { title: { fr: 'Carrare et ses marbres', en: 'Carrara and its marble' }, teaser: { fr: 'Les carrières de marbre blanc dont Michel-Ange tirait ses blocs, un atelier de sculpture, la côte de la Versilia. Journée insolite à 30 minutes.', en: 'The white-marble quarries from which Michelangelo drew his blocks, a sculpture workshop, the Versilia coast. An unusual day 30 minutes away.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Soirée à La Spezia', en: 'Evening in La Spezia' }, teaser: { fr: 'Dîner de poisson au retour des villages, le golfe des Poètes au coucher du soleil, un dernier verre sur le port. Véhicule à disposition en soirée.', en: 'A seafood dinner on the way back from the villages, the Gulf of Poets at sunset, a nightcap on the harbour. Vehicle on standby in the evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '380' },
    ],
    faq: [
      { q: { fr: 'Peut-on conduire jusque dans les villages des Cinque Terre ?', en: 'Can you drive into the Cinque Terre villages?' }, a: { fr: 'Non, les cinq villages sont à circulation restreinte et interdits aux voitures des visiteurs. Votre chauffeur vous dépose à La Spezia ou Levanto, d’où train et bateaux desservent les villages, et vous reprend au point convenu.', en: 'No, the five villages have restricted traffic and are closed to visitors’ cars. Your chauffeur drops you at La Spezia or Levanto, from where trains and boats serve the villages, and picks you up at the agreed point.' } },
      { q: { fr: 'Depuis quel aéroport rejoint-on les Cinque Terre ?', en: 'From which airport do you reach the Cinque Terre?' }, a: { fr: 'Pise (PSA) est à 1h15 au sud, Gênes (GOA) à 1h30 au nord. Votre chauffeur vous accueille à l’aéroport de votre choix avec panneau nominatif, à prix fixe.', en: 'Pisa (PSA) is 1h15 to the south, Genoa (GOA) 1h30 to the north. Your chauffeur greets you at the airport of your choice with a name board, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['portofino', 'pisa', 'lucca', 'genoa'],
  },
  {
    slug: 'taormina',
    name: { fr: 'Taormine', en: 'Taormina' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Catane-Fontanarossa (CTA)',
    airportTransfer: {
      fr: 'L’aéroport de Catane-Fontanarossa (CTA) se trouve à 60 km au sud de Taormine : comptez 1 heure par l’autoroute A18 le long de la côte ionienne. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Catania-Fontanarossa Airport (CTA) lies 60 km south of Taormina: allow 1 hour via the A18 motorway along the Ionian coast. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Balcon de Sicile perché sur ses falaises face à l’Etna, Taormine déroule son théâtre antique, ses ruelles médiévales et ses jardins fleuris au-dessus de la mer Ionienne. Votre **chauffeur privé à Taormine** dessert le centre à circulation limitée, la plage d’Isola Bella et les hôtels de la corniche : transferts depuis Catane, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Taormine est la **base idéale de la Sicile orientale**. Le volcan Etna et ses coulées sont à une heure, les villes baroques de Catane et Syracuse au sud, les villages de pêcheurs de la côte tout près. En mise à disposition à la journée, votre chauffeur relie sites antiques, vignobles de l’Etna et bourgades baroques dans le confort d’une berline privée.',
      ],
      en: [
        'A Sicilian balcony perched on its cliffs facing Etna, Taormina unrolls its ancient theatre, medieval lanes and flowered gardens above the Ionian Sea. Your **private chauffeur in Taormina** serves the limited-traffic centre, the Isola Bella beach and the corniche hotels: transfers from Catania, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Taormina is the **ideal base for eastern Sicily**. The Etna volcano and its lava flows are an hour away, the Baroque cities of Catania and Syracuse to the south, the coastal fishing villages nearby. With a full-day hire, your chauffeur links ancient sites, Etna vineyards and Baroque towns in the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Etna et ses vignobles', en: 'Etna and its vineyards' }, teaser: { fr: 'Le plus haut volcan actif d’Europe, les coulées de lave, une dégustation dans un domaine des pentes de l’Etna. Journée volcan et vin à une heure.', en: 'Europe’s highest active volcano, the lava flows, a tasting at an estate on Etna’s slopes. A day of volcano and wine an hour away.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Taormine et Isola Bella', en: 'Taormina and Isola Bella' }, teaser: { fr: 'Le théâtre antique face à l’Etna, les ruelles médiévales, la plage-île d’Isola Bella. Dépose au plus près du centre piéton, journée à votre rythme.', en: 'The ancient theatre facing Etna, the medieval lanes, the island beach of Isola Bella. Drop-off as close as possible to the pedestrian centre, a day at your own pace.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '360' },
      { title: { fr: 'Syracuse et Ortigia', en: 'Syracuse and Ortigia' }, teaser: { fr: 'À une heure au sud, la cité grecque de Syracuse, l’île baroque d’Ortigia, le théâtre antique. Journée archéologie et baroque sicilien.', en: 'An hour south, the Greek city of Syracuse, the Baroque island of Ortigia, the ancient theatre. A day of archaeology and Sicilian Baroque.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Villages baroques du Val di Noto', en: 'Baroque villages of Val di Noto' }, teaser: { fr: 'Noto et Modica classées UNESCO, le chocolat de Modica, les façades baroques dorées. Journée patrimoine dans la Sicile du sud-est.', en: 'Noto and Modica, UNESCO-listed, the chocolate of Modica, the golden Baroque façades. A heritage day in south-eastern Sicily.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '660' },
      { title: { fr: 'Soirée à Taormine', en: 'Evening in Taormina' }, teaser: { fr: 'Dîner dans une table du corso, l’Etna rougeoyant à la nuit tombée, un dernier verre en terrasse au-dessus de la mer. Véhicule à disposition.', en: 'Dinner at a table on the corso, Etna glowing at nightfall, a nightcap on a terrace above the sea. Vehicle on standby.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '380' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Catane à Taormine ?', en: 'How long from Catania Airport to Taormina?' }, a: { fr: 'Comptez environ 1 heure par l’A18. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow about 1 hour via the A18. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on monter à l’Etna avec un chauffeur ?', en: 'Can you go up Etna with a chauffeur?' }, a: { fr: 'Oui. Votre chauffeur vous conduit jusqu’aux stations de départ (Rifugio Sapienza côté sud), organise éventuellement téléphérique et guide, et combine la montée avec une dégustation dans un vignoble de l’Etna.', en: 'Yes. Your chauffeur drives you to the departure stations (Rifugio Sapienza on the south side), optionally arranges the cable car and a guide, and combines the ascent with a tasting at an Etna vineyard.' } },
      { q: { fr: 'Vos chauffeurs en Sicile parlent-ils anglais ?', en: 'Do your chauffeurs in Sicily speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['catania', 'palermo'],
  },
  {
    slug: 'matera',
    name: { fr: 'Matera', en: 'Matera' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Bari-Karol Wojtyła (BRI)',
    airportTransfer: {
      fr: 'L’aéroport de Bari-Karol Wojtyła (BRI) se trouve à 65 km au nord-est de Matera : comptez 1 heure. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Bari-Karol Wojtyła Airport (BRI) lies 65 km north-east of Matera: allow 1 hour. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Troisième plus ancienne ville habitée du monde, Matera creuse ses Sassi — habitations troglodytes classées UNESCO — dans un amphithéâtre de calcaire au-dessus d’un ravin. Votre **chauffeur privé à Matera** dessert la ville haute, les entrées des Sassi et les hôtels troglodytes : transferts depuis Bari, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Matera est la **porte de la Basilicate et des Pouilles**. Les trulli d’Alberobello sont à une heure, la côte de la mer Ionienne au sud, les villages perchés de la Basilicate tout autour. En mise à disposition à la journée, votre chauffeur relie décors de cinéma, églises rupestres et tables du terroir dans le sud profond de l’Italie.',
      ],
      en: [
        'The world’s third-oldest inhabited city, Matera carves its Sassi — UNESCO-listed cave dwellings — into a limestone amphitheatre above a ravine. Your **private chauffeur in Matera** serves the upper town, the Sassi entrances and the cave hotels: transfers from Bari, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Matera is the **gateway to Basilicata and Puglia**. The trulli of Alberobello are an hour away, the Ionian Sea coast to the south, the perched villages of Basilicata all around. With a full-day hire, your chauffeur links film sets, rock churches and regional tables in the deep south of Italy.',
      ],
    },
    experiences: [
      { title: { fr: 'Les Sassi de Matera', en: 'The Sassi of Matera' }, teaser: { fr: 'Les quartiers troglodytes classés UNESCO, les églises rupestres, le belvédère sur le ravin. Dépose aux entrées des Sassi, promenade dans un décor hors du temps.', en: 'The UNESCO-listed cave quarters, the rock churches, the viewpoint over the ravine. Drop-off at the Sassi entrances, a stroll in a timeless setting.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Alberobello et les trulli', en: 'Alberobello and the trulli' }, teaser: { fr: 'À une heure, les maisons coniques de pierre sèche classées UNESCO, les ruelles blanches d’Alberobello. Journée insolite dans les Pouilles.', en: 'An hour away, the UNESCO-listed dry-stone conical houses, the white lanes of Alberobello. An unusual day in Puglia.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Lecce, la Florence baroque', en: 'Lecce, the Baroque Florence' }, teaser: { fr: 'La ville baroque du Salento, ses églises de pierre dorée, la place Sant’Oronzo. Journée patrimoine dans le talon de la botte, à 1h30.', en: 'The Baroque city of the Salento, its golden-stone churches, the Piazza Sant’Oronzo. A heritage day in the heel of the boot, 1h30 away.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '690' },
      { title: { fr: 'Villages de la Basilicate', en: 'Villages of Basilicata' }, teaser: { fr: 'Les villages perchés de Craco l’abandonnée et de Pietrapertosa dans les Dolomites lucaniennes, les paysages sauvages. Journée nature et cinéma.', en: 'The perched villages of abandoned Craco and Pietrapertosa in the Lucanian Dolomites, the wild landscapes. A day of nature and cinema.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '640' },
      { title: { fr: 'Soirée dans les Sassi', en: 'Evening in the Sassi' }, teaser: { fr: 'Dîner dans une table troglodyte, les Sassi illuminés à la bougie, le silence minéral du ravin. Véhicule à disposition toute la soirée.', en: 'Dinner in a cave restaurant, the candlelit Sassi, the mineral silence of the ravine. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '360' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Bari à Matera ?', en: 'How long from Bari Airport to Matera?' }, a: { fr: 'Comptez environ 1 heure. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow about 1 hour. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on circuler en voiture dans les Sassi ?', en: 'Can you drive in the Sassi?' }, a: { fr: 'Les Sassi sont piétons et à circulation très restreinte. Votre chauffeur vous dépose aux entrées, gère vos bagages jusqu’à votre hôtel troglodyte et vous reprend au point convenu.', en: 'The Sassi are pedestrian and heavily traffic-restricted. Your chauffeur drops you at the entrances, handles your luggage to your cave hotel and picks you up at the agreed point.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['bari', 'lecce'],
  },
  {
    slug: 'lecce',
    name: { fr: 'Lecce', en: 'Lecce' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Brindisi-Salento (BDS)',
    airportTransfer: {
      fr: 'L’aéroport de Brindisi-Salento (BDS) se trouve à 40 km au nord de Lecce : comptez 40 minutes. Depuis Bari (BRI), à 150 km, comptez 1h45. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Brindisi-Salento Airport (BDS) lies 40 km north of Lecce: allow 40 minutes. From Bari (BRI), 150 km away, allow 1h45. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Surnommée la « Florence du baroque », Lecce sculpte dans sa pierre dorée et tendre les façades les plus exubérantes du sud de l’Italie, au cœur du Salento. Votre **chauffeur privé à Lecce** dessert le centre historique, la basilique Santa Croce et les masserie de la campagne : transferts depuis Brindisi, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Lecce commande tout le **talon des Pouilles**. Les plages des deux mers — Adriatique et Ionienne — sont à trente minutes, Otrante et Gallipoli au sud, les masserie viticoles tout autour. En mise à disposition à la journée, votre chauffeur relie villes baroques, criques et domaines pendant que vous découvrez la région la plus authentique du Sud.',
      ],
      en: [
        'Nicknamed the “Florence of the Baroque”, Lecce carves the most exuberant façades in southern Italy into its soft golden stone, at the heart of the Salento. Your **private chauffeur in Lecce** serves the historic centre, the Santa Croce basilica and the countryside masserie: transfers from Brindisi, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Lecce commands the whole **heel of Puglia**. The beaches of two seas — Adriatic and Ionian — are thirty minutes away, Otranto and Gallipoli to the south, the wine masserie all around. With a full-day hire, your chauffeur links Baroque towns, coves and estates while you discover the most authentic region of the South.',
      ],
    },
    experiences: [
      { title: { fr: 'Lecce baroque', en: 'Baroque Lecce' }, teaser: { fr: 'La basilique Santa Croce, la place du Dôme, l’amphithéâtre romain, les façades de pierre dorée. Dépose au centre, promenade dans la ville-joyau.', en: 'The Santa Croce basilica, the Piazza del Duomo, the Roman amphitheatre, the golden-stone façades. Drop-off in the centre, a stroll through the jewel city.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Otrante et la côte adriatique', en: 'Otranto and the Adriatic coast' }, teaser: { fr: 'La ville la plus à l’est d’Italie, sa cathédrale et sa mosaïque, les criques turquoise du Salento. Déjeuner de poisson face à la mer.', en: 'The easternmost town in Italy, its cathedral and mosaic, the turquoise coves of the Salento. A seafood lunch facing the sea.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Gallipoli et la mer Ionienne', en: 'Gallipoli and the Ionian Sea' }, teaser: { fr: 'La vieille ville sur son île, le château, les plages de sable de la côte ionienne. Journée balnéaire et baroque à l’ouest du Salento.', en: 'The old town on its island, the castle, the sandy beaches of the Ionian coast. A seaside and Baroque day in the western Salento.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Masserie et vins du Salento', en: 'Salento masserie and wines' }, teaser: { fr: 'Les fermes fortifiées reconverties, dégustation de primitivo et negroamaro, déjeuner du terroir dans un domaine. Journée gastronomie et campagne.', en: 'The converted fortified farms, a tasting of primitivo and negroamaro, a regional lunch at an estate. A day of gastronomy and countryside.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '640' },
      { title: { fr: 'Soirée à Lecce', en: 'Evening in Lecce' }, teaser: { fr: 'Dîner dans le centre baroque illuminé, la place Sant’Oronzo animée, un dernier verre de negroamaro. Véhicule à disposition toute la soirée.', en: 'Dinner in the illuminated Baroque centre, the lively Piazza Sant’Oronzo, a last glass of negroamaro. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '360' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Brindisi à Lecce ?', en: 'How long from Brindisi Airport to Lecce?' }, a: { fr: 'Comptez environ 40 minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow about 40 minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on visiter les plages du Salento depuis Lecce ?', en: 'Can you visit the Salento beaches from Lecce?' }, a: { fr: 'Oui, les deux côtes sont à trente minutes. En mise à disposition à la journée, votre chauffeur combine ville baroque, criques adriatiques ou ioniennes et déjeuner de bord de mer.', en: 'Yes, both coasts are thirty minutes away. With a full-day hire, your chauffeur combines the Baroque city, Adriatic or Ionian coves and a seaside lunch.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['bari', 'matera'],
  },
  {
    slug: 'assisi',
    name: { fr: 'Assise', en: 'Assisi' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Pérouse-San Francesco (PEG)',
    airportTransfer: {
      fr: 'L’aéroport de Pérouse-San Francesco (PEG) se trouve à 20 km à l’ouest d’Assise : comptez 25 minutes. Depuis Rome (FCO), à 180 km, comptez 2 heures. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Perugia-San Francesco Airport (PEG) lies 20 km west of Assisi: allow 25 minutes. From Rome (FCO), 180 km away, allow 2 hours. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Cité de saint François accrochée aux pentes du mont Subasio, Assise déploie sa basilique aux fresques de Giotto et ses ruelles de pierre rose au-dessus de la plaine ombrienne. Votre **chauffeur privé à Assise** dessert la ville haute à circulation limitée, la basilique et les sanctuaires franciscains : transferts depuis Pérouse ou Rome, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Assise est au cœur de l’**Ombrie verte**. Pérouse et sa capitale du chocolat sont à 25 minutes, Spello, Spolète et les cascades des Marmore tout près, la Toscane à une heure. En mise à disposition à la journée, votre chauffeur relie sanctuaires, villages perchés et domaines viticoles dans le « poumon vert » de l’Italie.',
      ],
      en: [
        'The city of Saint Francis clinging to the slopes of Mount Subasio, Assisi displays its basilica with Giotto’s frescoes and its pink-stone lanes above the Umbrian plain. Your **private chauffeur in Assisi** serves the limited-traffic upper town, the basilica and the Franciscan sanctuaries: transfers from Perugia or Rome, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Assisi lies at the heart of **green Umbria**. Perugia and its chocolate capital are 25 minutes away, Spello, Spoleto and the Marmore Falls nearby, Tuscany an hour. With a full-day hire, your chauffeur links sanctuaries, perched villages and wine estates in Italy’s “green lung”.',
      ],
    },
    experiences: [
      { title: { fr: 'Basilique et sanctuaires', en: 'Basilica and sanctuaries' }, teaser: { fr: 'La basilique Saint-François et ses fresques de Giotto, la basilique Sainte-Claire, l’ermitage des Carceri sur le mont Subasio. Dépose au plus près du centre.', en: 'The Basilica of Saint Francis and its Giotto frescoes, the Basilica of Saint Clare, the Eremo delle Carceri on Mount Subasio. Drop-off as close as possible to the centre.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Villages perchés d’Ombrie', en: 'Perched villages of Umbria' }, teaser: { fr: 'Spello et ses ruelles fleuries, Bevagna et Montefalco, un déjeuner du terroir. Journée dans la plus verte des régions italiennes.', en: 'Spello and its flowered lanes, Bevagna and Montefalco, a regional lunch. A day in the greenest of Italian regions.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Pérouse et le chocolat', en: 'Perugia and chocolate' }, teaser: { fr: 'La capitale ombrienne, son centre étrusque et médiéval, la maison Perugina et une dégustation de chocolat. Journée patrimoine et gourmandise.', en: 'The Umbrian capital, its Etruscan and medieval centre, the Perugina house and a chocolate tasting. A day of heritage and indulgence.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Vins de Montefalco', en: 'Montefalco wines' }, teaser: { fr: 'Les domaines du Sagrantino, dégustation dans une cave familiale, déjeuner face aux vignes et aux collines. Journée œnologie en Ombrie.', en: 'The Sagrantino estates, a tasting in a family cellar, lunch facing the vines and hills. An oenology day in Umbria.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Soirée à Assise', en: 'Evening in Assisi' }, teaser: { fr: 'Dîner dans une table de la ville haute, la basilique illuminée dominant la plaine, le calme des ruelles à la nuit. Véhicule à disposition.', en: 'Dinner at a table in the upper town, the illuminated basilica dominating the plain, the calm of the lanes at night. Vehicle on standby.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '360' },
    ],
    faq: [
      { q: { fr: 'Depuis quel aéroport rejoint-on Assise ?', en: 'From which airport do you reach Assisi?' }, a: { fr: 'Pérouse (PEG) est à 25 minutes, Rome (FCO) à 2 heures, Florence à 2h. Votre chauffeur vous accueille à l’aéroport de votre choix avec panneau nominatif, à prix fixe.', en: 'Perugia (PEG) is 25 minutes away, Rome (FCO) 2 hours, Florence 2h. Your chauffeur greets you at the airport of your choice with a name board, at a fixed price.' } },
      { q: { fr: 'Peut-on visiter Assise en excursion depuis Rome ou Florence ?', en: 'Can Assisi be visited as an excursion from Rome or Florence?' }, a: { fr: 'Oui, à environ 2 heures de chacune. En mise à disposition à la journée, votre chauffeur vous conduit à Assise, organise la visite et vous ramène le soir, à prix fixe.', en: 'Yes, about 2 hours from each. With a full-day hire, your chauffeur drives you to Assisi, arranges the visit and brings you back in the evening, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['perugia', 'siena', 'rome'],
  },
  {
    slug: 'perugia',
    name: { fr: 'Pérouse', en: 'Perugia' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'italy',
    airport: 'Pérouse-San Francesco (PEG)',
    airportTransfer: {
      fr: 'L’aéroport de Pérouse-San Francesco (PEG) se trouve à 12 km à l’est du centre : comptez 20 minutes. Depuis Rome (FCO), à 170 km, comptez 2 heures. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Perugia-San Francesco Airport (PEG) lies 12 km east of the centre: allow 20 minutes. From Rome (FCO), 170 km away, allow 2 hours. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de l’Ombrie perchée sur sa colline, Pérouse superpose murailles étrusques, palais gothiques et une université pour étrangers qui l’anime toute l’année — sans oublier son célèbre chocolat. Votre **chauffeur privé à Pérouse** dessert le centre historique en escaliers, la Rocca Paolina et les rendez-vous universitaires : transferts depuis l’aéroport ou Rome, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Pérouse est le **cœur de l’Ombrie**. Assise et sa basilique sont à 25 minutes, le lac Trasimène tout près, les villages du Sagrantino et la Toscane à une heure. En mise à disposition à la journée, votre chauffeur relie sanctuaires, domaines viticoles et villages perchés dans une région verte et préservée.',
      ],
      en: [
        'Capital of Umbria perched on its hill, Perugia layers Etruscan walls, Gothic palaces and a university for foreigners that keeps it lively all year — not to mention its famous chocolate. Your **private chauffeur in Perugia** serves the stepped historic centre, the Rocca Paolina and university meetings: transfers from the airport or Rome, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Perugia is the **heart of Umbria**. Assisi and its basilica are 25 minutes away, Lake Trasimeno nearby, the Sagrantino villages and Tuscany an hour. With a full-day hire, your chauffeur links sanctuaries, wine estates and perched villages in a green, unspoilt region.',
      ],
    },
    experiences: [
      { title: { fr: 'Pérouse historique et chocolat', en: 'Historic Perugia and chocolate' }, teaser: { fr: 'Le corso Vannucci, la fontaine Maggiore, la Rocca Paolina souterraine et la maison Perugina pour une dégustation. Dépose au plus près du centre.', en: 'The Corso Vannucci, the Fontana Maggiore, the underground Rocca Paolina and the Perugina house for a tasting. Drop-off as close as possible to the centre.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Assise et les sanctuaires', en: 'Assisi and the sanctuaries' }, teaser: { fr: 'À 25 minutes, la basilique Saint-François et ses fresques de Giotto, l’ermitage des Carceri. Journée franciscaine au départ de Pérouse.', en: '25 minutes away, the Basilica of Saint Francis and its Giotto frescoes, the Eremo delle Carceri. A Franciscan day from Perugia.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Lac Trasimène', en: 'Lake Trasimeno' }, teaser: { fr: 'Le plus grand lac de l’Italie centrale, ses îles, Castiglione del Lago et ses remparts, un déjeuner de poisson de lac. Journée nature tranquille.', en: 'Central Italy’s largest lake, its islands, Castiglione del Lago and its ramparts, a lake-fish lunch. A quiet nature day.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Vins de Montefalco et Sagrantino', en: 'Montefalco and Sagrantino wines' }, teaser: { fr: 'Les domaines du Sagrantino, dégustation en cave, déjeuner face aux collines ombriennes. Journée œnologie dans les vignobles verts.', en: 'The Sagrantino estates, a cellar tasting, lunch facing the Umbrian hills. An oenology day in the green vineyards.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Soirée universitaire', en: 'University evening' }, teaser: { fr: 'Dîner dans le centre médiéval, l’animation étudiante du corso, la vue nocturne sur la vallée depuis les remparts. Véhicule à disposition.', en: 'Dinner in the medieval centre, the student buzz of the corso, the night view over the valley from the ramparts. Vehicle on standby.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de Rome à Pérouse ?', en: 'How long from Rome to Perugia?' }, a: { fr: 'Comptez environ 2 heures. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow about 2 hours. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on combiner Pérouse et Assise dans la journée ?', en: 'Can Perugia and Assisi be combined in one day?' }, a: { fr: 'Oui, les deux villes sont à 25 minutes. En mise à disposition à la journée, votre chauffeur enchaîne le centre de Pérouse et les sanctuaires d’Assise, avec un déjeuner ombrien.', en: 'Yes, the two cities are 25 minutes apart. With a full-day hire, your chauffeur links the centre of Perugia and the Assisi sanctuaries, with an Umbrian lunch.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['assisi', 'siena', 'florence'],
  },
];

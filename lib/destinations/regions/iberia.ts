/**
 * iberia.ts — Région IBÉRIE (~45 villes)
 * ─────────────────────────────────────────────────────────────────────────────
 * Espagne + Portugal.
 * Suivre le modèle éditorial des exemples strasbourg/toulouse dans france.ts.
 */

import type { Destination } from '../types';

export const CITIES: Destination[] = [
  {
    slug: 'madrid',
    name: { fr: 'Madrid', en: 'Madrid' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Adolfo Suárez Madrid-Barajas (MAD)',
    airportTransfer: {
      fr: 'L’aéroport Adolfo Suárez Madrid-Barajas (MAD) se trouve à 15 km au nord-est du centre : comptez 25 à 35 minutes pour rejoindre la Puerta del Sol ou le paseo de la Castellana selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Adolfo Suárez Madrid-Barajas Airport (MAD) lies 15 km north-east of the centre: allow 25 to 35 minutes to reach Puerta del Sol or Paseo de la Castellana depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale du royaume et première place financière d’Espagne, Madrid aligne les palais des Habsbourg, le triangle de l’art du paseo del Prado et les avenues d’affaires de la Castellana. Votre **chauffeur privé à Madrid** dessert IFEMA, le quartier de Salamanca, le Santiago Bernabéu et les tables étoilées de la ville, en berline Mercedes ou van de grande capacité. Transferts aéroport et gares AVE, mise à disposition à l’heure, prix fixes annoncés à l’avance : chaque trajet est préparé avant votre arrivée.',
        'Madrid est aussi le point de départ idéal des grandes escapades castillanes. **Tolède, Ségovie et El Escorial** se rejoignent en une heure de route à peine, Ávila et Salamanque en prolongent l’itinéraire, et les vignobles de la Ribera del Duero s’ouvrent au nord. En mise à disposition à la journée, votre chauffeur enchaîne monuments, tables réservées et arrêts photo pendant que vous profitez du paysage de la Meseta.',
      ],
      en: [
        'Capital of the kingdom and Spain’s leading financial centre, Madrid lines up Habsburg palaces, the art triangle of the Paseo del Prado and the business avenues of the Castellana. Your **private chauffeur in Madrid** serves IFEMA, the Salamanca district, the Santiago Bernabéu and the city’s starred restaurants, in a Mercedes sedan or a full-size van. Airport and AVE station transfers, hourly hire, fixed prices confirmed in advance: every journey is planned before you land.',
        'Madrid is also the ideal base for the great Castilian excursions. **Toledo, Segovia and El Escorial** are barely an hour’s drive away, Ávila and Salamanca extend the route, and the Ribera del Duero vineyards open up to the north. With a full-day chauffeur hire, monuments, booked tables and photo stops follow one another while you simply enjoy the Meseta landscape.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Tolède, ville des trois cultures', en: 'Toledo, city of three cultures' },
        teaser: {
          fr: 'À 70 km au sud de Madrid, la cité impériale classée UNESCO : cathédrale primatiale, synagogue du Tránsito, Greco à Santo Tomé. Panorama depuis le mirador del Valle avant le retour.',
          en: '70 km south of Madrid, the UNESCO-listed imperial city: the primatial cathedral, the Tránsito synagogue, El Greco at Santo Tomé. A stop at the Mirador del Valle viewpoint before the return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Ségovie et le palais de La Granja', en: 'Segovia and La Granja palace' },
        teaser: {
          fr: 'L’aqueduc romain, l’Alcázar de conte de fées et le cochinillo de Cándido, puis les jardins à la française de La Granja de San Ildefonso. Retour par la sierra de Guadarrama.',
          en: 'The Roman aqueduct, the fairy-tale Alcázar and Cándido’s roast suckling pig, then the formal gardens of La Granja de San Ildefonso. Return through the Guadarrama mountains.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'El Escorial et la vallée des rois', en: 'El Escorial and the valley of kings' },
        teaser: {
          fr: 'À 50 km au nord-ouest, le monastère-palais de Philippe II : basilique, panthéon royal, bibliothèque aux fresques dorées. Complément possible par la ville d’Ávila et ses remparts.',
          en: '50 km north-west, Philip II’s monastery-palace: the basilica, the royal pantheon, the library with its gilded frescoes. Optionally continue to the walled city of Ávila.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Triangle de l’art en voiture privée', en: 'Art triangle by private car' },
        teaser: {
          fr: 'Prado, Reina Sofía et Thyssen-Bornemisza enchaînés sans file d’attente logistique : dépose devant chaque musée, véhicule en attente, pause déjeuner au Retiro ou chez Horcher.',
          en: 'The Prado, Reina Sofía and Thyssen-Bornemisza linked seamlessly: door-to-door drop-offs, vehicle on standby, lunch break at the Retiro or at Horcher.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Soirée madrilène', en: 'Madrid evening' },
        teaser: {
          fr: 'Dîner chez DiverXO, Coque ou dans une taberna centenaire de La Latina, tablao flamenco au Corral de la Morería, puis la Gran Vía et Cibeles illuminées. Véhicule à disposition toute la soirée.',
          en: 'Dinner at DiverXO, Coque or a century-old taberna in La Latina, flamenco at Corral de la Morería, then the illuminated Gran Vía and Cibeles. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Madrid-Barajas et le centre-ville ?',
          en: 'How much does a transfer between Madrid-Barajas Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Madrid-Barajas (MAD) et le centre de Madrid est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Madrid-Barajas (MAD) and central Madrid is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers les gares AVE d’Atocha et de Chamartín ?',
          en: 'Do you cover transfers to the Atocha and Chamartín AVE stations?',
        },
        a: {
          fr: 'Oui. Nous desservons quotidiennement Atocha et Chamartín, avec dépose au plus près des accès grandes lignes. Votre chauffeur ajuste l’heure de prise en charge selon le trafic pour que vous arriviez avec l’avance souhaitée avant votre train.',
          en: 'Yes. We serve Atocha and Chamartín daily, with drop-off as close as possible to the long-distance entrances. Your chauffeur adjusts the pick-up time to traffic so you arrive with the margin you want before your train.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Tolède et Ségovie dans la même journée depuis Madrid ?',
          en: 'Can Toledo and Segovia be visited in the same day from Madrid?',
        },
        a: {
          fr: 'C’est possible en mise à disposition à la journée : environ 300 km de boucle et deux visites de trois heures chacune. Nous recommandons toutefois de consacrer une journée à chaque ville pour en profiter pleinement ; votre chauffeur adapte l’itinéraire à votre rythme.',
          en: 'It is feasible with a full-day hire: a loop of around 300 km with roughly three hours in each city. We do, however, recommend a full day per city to enjoy them properly; your chauffeur adapts the itinerary to your pace.',
        },
      },
    ],
    nearby: ['toledo', 'segovia', 'salamanca'],
  },
  {
    slug: 'barcelona',
    name: { fr: 'Barcelone', en: 'Barcelona' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Josep Tarradellas Barcelona-El Prat (BCN)',
    airportTransfer: {
      fr: 'L’aéroport Josep Tarradellas Barcelona-El Prat (BCN) est à 14 km au sud-ouest du centre : comptez 25 à 30 minutes pour rejoindre le passeig de Gràcia ou le Port Vell. Votre chauffeur vous attend en zone d’arrivée avec panneau nominatif et suit votre vol pour ajuster la prise en charge.',
      en: 'Josep Tarradellas Barcelona-El Prat Airport (BCN) is 14 km south-west of the centre: allow 25 to 30 minutes to reach Passeig de Gràcia or Port Vell. Your chauffeur waits in the arrivals area with a name board and tracks your flight to adjust the pick-up.',
    },
    intro: {
      fr: [
        'Entre mer et Collserola, Barcelone superpose la trame gothique du Barri Gòtic, l’Eixample moderniste de Gaudí et le front de mer olympique. Votre **chauffeur privé à Barcelone** relie la Fira et le 22@, les hôtels du passeig de Gràcia, le Camp Nou et les terminaux croisière du port, en berline ou van premium. Congrès, escales, tournages ou séjours en famille : prix fixes, chauffeurs bilingues sur demande, coordination hôtel et conciergerie.',
        'La Catalogne se déploie tout autour. **Montserrat et son monastère suspendu** sont à une heure, les caves du Penedès à quarante minutes, la Costa Brava et le triangle de Dalí à Figueres ferment l’horizon au nord. Sitges et Tarragone la romaine complètent le sud. En mise à disposition à la journée, votre chauffeur compose l’itinéraire avec vous — criques, bodegas, villages médiévaux — et vous ramène le soir sans contrainte.',
      ],
      en: [
        'Between the sea and the Collserola hills, Barcelona layers the Gothic weave of the Barri Gòtic, Gaudí’s modernist Eixample and the Olympic waterfront. Your **private chauffeur in Barcelona** links the Fira and the 22@ district, the hotels of Passeig de Gràcia, Camp Nou and the port’s cruise terminals, in a premium sedan or van. Congresses, cruise calls, shoots or family stays: fixed prices, bilingual chauffeurs on request, hotel and concierge coordination.',
        'Catalonia unfolds all around. **Montserrat and its clifftop monastery** are an hour away, the Penedès cava cellars forty minutes, while the Costa Brava and Dalí’s triangle at Figueres close the horizon to the north. Sitges and Roman Tarragona complete the south. With a full-day hire, your chauffeur shapes the route with you — coves, bodegas, medieval villages — and brings you home in the evening with zero hassle.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Montserrat, montagne sacrée', en: 'Montserrat, the sacred mountain' },
        teaser: {
          fr: 'À 60 km de Barcelone, le monastère bénédictin accroché aux aiguilles de Montserrat : la Moreneta, l’escolania, les sentiers de Sant Jeroni. Dégustation dans une cave du Penedès au retour.',
          en: '60 km from Barcelona, the Benedictine monastery clinging to Montserrat’s needle peaks: the Black Madonna, the boys’ choir, the Sant Jeroni trails. A Penedès cellar tasting on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Costa Brava et triangle de Dalí', en: 'Costa Brava and the Dalí triangle' },
        teaser: {
          fr: 'Théâtre-musée Dalí à Figueres, maison de Portlligat à Cadaqués, criques de Begur : la côte sauvage catalane en une journée, déjeuner de poissons face à la Méditerranée.',
          en: 'The Dalí Theatre-Museum in Figueres, the Portlligat house at Cadaqués, the coves of Begur: Catalonia’s wild coast in a day, with a seafood lunch facing the Mediterranean.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Caves du Penedès, route du cava', en: 'Penedès cellars, the cava route' },
        teaser: {
          fr: 'À 45 minutes du centre, Sant Sadurní d’Anoia et les grandes maisons — Codorníu, Gramona — comme les domaines familiaux. Visites de caves centenaires et dégustations commentées, sans toucher un volant.',
          en: '45 minutes from the centre, Sant Sadurní d’Anoia and its great houses — Codorníu, Gramona — alongside family estates. Century-old cellar visits and guided tastings, without touching a steering wheel.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '520',
      },
      {
        title: { fr: 'Journée Gaudí en voiture privée', en: 'Gaudí day by private car' },
        teaser: {
          fr: 'Sagrada Família, Park Güell, la Pedrera et la Casa Batlló enchaînés porte à porte, billets coupe-file coordonnés avec votre conciergerie. Fin de journée au Bunkers del Carmel pour le panorama.',
          en: 'Sagrada Família, Park Güell, La Pedrera and Casa Batlló linked door to door, skip-the-line tickets coordinated with your concierge. The day ends at the Bunkers del Carmel viewpoint.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Soirée barcelonaise', en: 'Barcelona evening' },
        teaser: {
          fr: 'Dîner chez Disfrutar, Lasarte ou dans une bodega du Born, puis la fontaine magique de Montjuïc et le front de mer illuminé. Dépose devant chaque adresse, véhicule en attente toute la soirée.',
          en: 'Dinner at Disfrutar, Lasarte or a Born bodega, then the Magic Fountain of Montjuïc and the illuminated seafront. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport d’El Prat et le centre de Barcelone ?',
          en: 'How much does a transfer between El Prat Airport and central Barcelona cost?',
        },
        a: {
          fr: 'Le transfert privé entre Barcelona-El Prat (BCN) et le centre est facturé à prix fixe, confirmé à la réservation. Accueil en zone d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Barcelona-El Prat (BCN) and the centre is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals area with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous les terminaux de croisière du port de Barcelone ?',
          en: 'Do you serve the cruise terminals of the Port of Barcelona?',
        },
        a: {
          fr: 'Oui. Nous assurons quotidiennement les transferts vers les terminaux du Moll Adossat et du World Trade Center, à l’embarquement comme au débarquement. Votre chauffeur suit les horaires du navire et vous attend en zone autorisée avec panneau nominatif.',
          en: 'Yes. We provide daily transfers to the Moll Adossat and World Trade Center terminals, for both embarkation and disembarkation. Your chauffeur follows the ship’s schedule and waits in the authorised zone with a name board.',
        },
      },
      {
        q: {
          fr: 'Peut-on organiser une excursion à Montserrat ou sur la Costa Brava depuis Barcelone ?',
          en: 'Can you arrange a day trip to Montserrat or the Costa Brava from Barcelona?',
        },
        a: {
          fr: 'Absolument. Montserrat, le Penedès, Sitges, Gérone ou le triangle de Dalí se visitent à la journée en aller-retour depuis Barcelone, à prix fixe. L’itinéraire et les arrêts sont définis avec vous avant le départ et restent modifiables en cours de route.',
          en: 'Absolutely. Montserrat, the Penedès, Sitges, Girona or the Dalí triangle can all be visited as round-trip day tours from Barcelona at a fixed price. The itinerary and stops are agreed before departure and can still be adjusted along the way.',
        },
      },
    ],
    nearby: ['madrid'],
  },
  {
    slug: 'valencia',
    name: { fr: 'Valence', en: 'Valencia' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Valencia-Manises (VLC)',
    airportTransfer: {
      fr: 'L’aéroport de Valence-Manises (VLC) se trouve à 8 km à l’ouest du centre : 15 à 20 minutes suffisent pour rejoindre la plaza del Ayuntamiento ou la Cité des arts et des sciences. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Valencia-Manises Airport (VLC) lies 8 km west of the centre: 15 to 20 minutes is enough to reach Plaza del Ayuntamiento or the City of Arts and Sciences. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Troisième ville d’Espagne, Valence marie la Lonja de la Seda gothique, les coupoles blanches de Calatrava et cinq kilomètres de plages urbaines. Votre **chauffeur privé à Valence** dessert la Cité des arts et des sciences, la Marina, la Feria Valencia et les tables du Cabanyal, en berline ou van premium. Transferts aéroport et gare Joaquín-Sorolla, mise à disposition à l’heure, prix fixes : chaque déplacement est confirmé avant votre arrivée.',
        'Autour de la ville, la **lagune de l’Albufera** et ses rizières — berceau de la paella — s’atteignent en trente minutes, les vignobles d’Utiel-Requena en une heure, et la côte déroule Peñíscola au nord comme Xàtiva et son château à l’intérieur des terres. En mars, les Fallas transforment le centre en scène pyrotechnique : votre chauffeur maîtrise les fermetures de rues et les points de dépose autorisés.',
      ],
      en: [
        'Spain’s third city, Valencia pairs the Gothic Lonja de la Seda, Calatrava’s white domes and five kilometres of urban beaches. Your **private chauffeur in Valencia** serves the City of Arts and Sciences, the Marina, Feria Valencia and the tables of El Cabanyal, in a premium sedan or van. Airport and Joaquín Sorolla station transfers, hourly hire, fixed prices: every journey is confirmed before you arrive.',
        'Around the city, the **Albufera lagoon** and its rice paddies — the birthplace of paella — are thirty minutes away, the Utiel-Requena vineyards an hour, while the coast unrolls Peñíscola to the north and Xàtiva with its castle inland. In March, the Fallas turn the centre into a pyrotechnic stage: your chauffeur knows the street closures and the authorised drop-off points.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Albufera, rizières et paella', en: 'Albufera, rice paddies and paella' },
        teaser: {
          fr: 'À 30 minutes du centre, la lagune de l’Albufera : promenade en barque traditionnelle, village d’El Palmar et paella valenciana authentique au bord de l’eau. Coucher de soleil sur la lagune en option.',
          en: '30 minutes from the centre, the Albufera lagoon: a traditional boat ride, the village of El Palmar and authentic paella valenciana by the water. Optional sunset over the lagoon.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Xàtiva et son château', en: 'Xàtiva and its castle' },
        teaser: {
          fr: 'À 60 km au sud, la ville natale des Borgia : le château double étiré sur la crête, la collégiale, les fontaines gothiques. Retour par les orangeraies de la Costera.',
          en: '60 km south, the birthplace of the Borgias: the twin castle stretched along the ridge, the collegiate church, the Gothic fountains. Return through the orange groves of La Costera.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Vignobles d’Utiel-Requena', en: 'Utiel-Requena vineyards' },
        teaser: {
          fr: 'À une heure à l’ouest, le pays du bobal : caves creusées sous la vieille ville de Requena, domaines familiaux et cuvées confidentielles. Déjeuner vigneron entre les rangs de vignes.',
          en: 'An hour to the west, the land of the Bobal grape: cellars dug beneath Requena’s old town, family estates and confidential cuvées. A winegrower’s lunch among the vines.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Peñíscola, la ville dans la mer', en: 'Peñíscola, the city in the sea' },
        teaser: {
          fr: 'À 140 km au nord, la citadelle du pape Luna posée sur son rocher : remparts, château templier, ruelles blanchies. Arrêt possible à Sagonte et son théâtre romain à l’aller.',
          en: '140 km north, Pope Luna’s citadel set on its rock: ramparts, the Templar castle, whitewashed lanes. Optional stop at Sagunto and its Roman theatre on the way.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Soirée valencienne', en: 'Valencia evening' },
        teaser: {
          fr: 'Dîner chez Ricard Camarena ou à La Pepica face à la mer, puis l’Hemisfèric et le pont de l’Assut de l’Or illuminés. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Dinner at Ricard Camarena or La Pepica facing the sea, then the illuminated Hemisfèric and Assut de l’Or bridge. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Valence et le centre-ville ?',
          en: 'How much does a transfer between Valencia Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Valence-Manises (VLC) et le centre est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et l’attente offerte en cas de retard.',
          en: 'A private transfer between Valencia-Manises (VLC) and the centre is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Circulez-vous pendant les Fallas de Valence en mars ?',
          en: 'Do you operate during the Fallas festival in March?',
        },
        a: {
          fr: 'Oui, mais le centre est largement fermé à la circulation du 15 au 19 mars. Nous recommandons de réserver au moins 72 heures à l’avance ; votre chauffeur connaît les points de dépose autorisés au plus près des monuments falleros et des mascletàs.',
          en: 'Yes, although the centre is largely closed to traffic from 15 to 19 March. We recommend booking at least 72 hours ahead; your chauffeur knows the authorised drop-off points closest to the falla monuments and the mascletàs.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des trajets longue distance depuis Valence vers Alicante ou Madrid ?',
          en: 'Do you offer long-distance journeys from Valencia to Alicante or Madrid?',
        },
        a: {
          fr: 'Oui. Alicante se rejoint en deux heures par l’AP-7, Madrid en trois heures trente par l’A-3. Les trajets longue distance sont devisés à l’avance, à prix fixe, avec arrêts à la demande et véhicule adapté au volume de bagages.',
          en: 'Yes. Alicante is two hours away via the AP-7, Madrid three and a half hours via the A-3. Long-distance journeys are quoted in advance at a fixed price, with stops on request and a vehicle suited to your luggage.',
        },
      },
    ],
    nearby: ['alicante', 'murcia', 'madrid'],
  },
  {
    slug: 'seville',
    name: { fr: 'Séville', en: 'Seville' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Séville-San Pablo (SVQ)',
    airportTransfer: {
      fr: 'L’aéroport de Séville-San Pablo (SVQ) est à 10 km au nord-est du centre : comptez 15 à 20 minutes pour rejoindre la cathédrale ou le quartier de Santa Cruz. Votre chauffeur vous attend en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Seville-San Pablo Airport (SVQ) is 10 km north-east of the centre: allow 15 to 20 minutes to reach the cathedral or the Santa Cruz quarter. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de l’Andalousie, Séville concentre la plus grande cathédrale gothique du monde, l’Alcázar mudéjar et les patios fleuris de Santa Cruz au bord du Guadalquivir. Votre **chauffeur privé à Séville** dessert la gare Santa Justa, le palais des congrès FIBES et les tables de Triana, en berline ou van climatisé — un confort décisif sous l’été andalou. Transferts, mises à disposition et soirées : prix fixes, chauffeurs connaissant chaque accès du centre historique.',
        'De Séville rayonnent les plus belles routes d’Andalousie. **Cordoue et sa Mezquita** sont à 1 h 40, les bodegas de Jerez à une heure, Ronda et les villages blancs à deux heures, Cadix face à l’Atlantique. Pendant la Semana Santa et la Feria de Abril, la ville change de rythme et de plan de circulation : votre chauffeur en maîtrise les contraintes, dépose au plus près, attente et retour de nuit garantis.',
      ],
      en: [
        'Capital of Andalusia, Seville gathers the world’s largest Gothic cathedral, the Mudéjar Alcázar and the flowered patios of Santa Cruz along the Guadalquivir. Your **private chauffeur in Seville** serves Santa Justa station, the FIBES congress centre and the tables of Triana, in an air-conditioned sedan or van — a decisive comfort under the Andalusian summer. Transfers, hourly hire and evenings out: fixed prices, chauffeurs who know every approach to the historic centre.',
        'Andalusia’s finest roads radiate from Seville. **Córdoba and its Mezquita** are 1 h 40 away, the Jerez sherry bodegas one hour, Ronda and the white villages two hours, Cádiz facing the Atlantic. During Semana Santa and the Feria de Abril the city changes rhythm and traffic plan: your chauffeur masters the constraints — closest possible drop-off, standby and a guaranteed late-night return.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Cordoue et la Mezquita', en: 'Córdoba and the Mezquita' },
        teaser: {
          fr: 'À 140 km par l’A-4, la mosquée-cathédrale aux 850 colonnes, la Judería et le pont romain sur le Guadalquivir. Visite de Medina Azahara en option au retour.',
          en: '140 km along the A-4, the mosque-cathedral with its 850 columns, the Judería and the Roman bridge over the Guadalquivir. Optional visit to Medina Azahara on the return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Jerez, bodegas et chevaux', en: 'Jerez, bodegas and horses' },
        teaser: {
          fr: 'À une heure au sud, les grandes maisons de xérès — Tío Pepe, Lustau — et le spectacle équestre de la Real Escuela Andaluza. Prolongement possible vers Sanlúcar et sa manzanilla.',
          en: 'An hour south, the great sherry houses — Tío Pepe, Lustau — and the equestrian show of the Real Escuela Andaluza. Optionally continue to Sanlúcar and its manzanilla.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Ronda et les villages blancs', en: 'Ronda and the white villages' },
        teaser: {
          fr: 'Zahara de la Sierra, Grazalema puis Ronda et son Puente Nuevo enjambant le Tajo : la sierra andalouse en une journée, déjeuner face à la gorge.',
          en: 'Zahara de la Sierra, Grazalema, then Ronda and its Puente Nuevo spanning the Tajo gorge: the Andalusian sierra in a day, with lunch overlooking the ravine.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '850',
      },
      {
        title: { fr: 'Cadix et la côte atlantique', en: 'Cádiz and the Atlantic coast' },
        teaser: {
          fr: 'La plus ancienne ville d’Occident : cathédrale dorée face à l’océan, marché central, plage de la Caleta. Arrêt à Vejer de la Frontera, village blanc suspendu, sur le chemin du retour.',
          en: 'The oldest city in the West: the golden-domed cathedral facing the ocean, the central market, La Caleta beach. A stop at hilltop Vejer de la Frontera on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Soirée sévillane et flamenco', en: 'Seville evening and flamenco' },
        teaser: {
          fr: 'Dîner à Abantal ou dans une abacería de l’Alfalfa, tablao intimiste à Triana ou à la Casa de la Memoria, puis la Giralda et la plaza de España illuminées. Véhicule en attente toute la soirée.',
          en: 'Dinner at Abantal or an Alfalfa abacería, an intimate tablao in Triana or at Casa de la Memoria, then the illuminated Giralda and Plaza de España. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Séville et le centre-ville ?',
          en: 'How much does a transfer between Seville Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Séville-San Pablo (SVQ) et le centre est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Seville-San Pablo (SVQ) and the centre is charged at a fixed price, confirmed at booking. Meet-and-greet with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Peut-on circuler en voiture dans le centre historique de Séville ?',
          en: 'Can you drive into Seville’s historic centre?',
        },
        a: {
          fr: 'Le centre historique est en grande partie piétonnier et à accès restreint. Nos véhicules disposent des autorisations nécessaires pour la dépose hôtelière ; votre chauffeur vous laisse au plus près de votre adresse et convient d’un point de reprise précis.',
          en: 'The historic centre is largely pedestrianised with restricted access. Our vehicles hold the required permits for hotel drop-offs; your chauffeur leaves you as close as possible to your address and agrees a precise pick-up point.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver longtemps à l’avance pendant la Feria de Abril ?',
          en: 'How far ahead should I book during the Feria de Abril?',
        },
        a: {
          fr: 'Pendant la Semana Santa et la Feria de Abril, la demande est très forte et de nombreuses rues sont fermées. Nous recommandons de réserver au moins une semaine à l’avance ; votre chauffeur connaît les accès au Real de la Feria et les retours de nuit.',
          en: 'During Semana Santa and the Feria de Abril demand is very high and many streets are closed. We recommend booking at least a week ahead; your chauffeur knows the approaches to the Real de la Feria and handles late-night returns.',
        },
      },
    ],
    nearby: ['cordoba', 'cadiz'],
  },
  {
    slug: 'malaga',
    name: { fr: 'Malaga', en: 'Málaga' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Malaga-Costa del Sol (AGP)',
    airportTransfer: {
      fr: 'L’aéroport de Malaga-Costa del Sol (AGP) se trouve à 8 km au sud-ouest du centre : 15 à 20 minutes suffisent pour rejoindre la calle Larios ou le port. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Málaga-Costa del Sol Airport (AGP) lies 8 km south-west of the centre: 15 to 20 minutes is enough to reach Calle Larios or the port. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Porte d’entrée de la Costa del Sol, Malaga est bien plus qu’un aéroport : ville natale de Picasso, elle aligne l’Alcazaba, le Centre Pompidou du port et une scène gastronomique en pleine ascension. Votre **chauffeur privé à Malaga** relie l’aéroport AGP aux stations de la côte — Marbella, Estepona, Nerja — comme aux hôtels du centre, en berline ou van de grande capacité. Prix fixes, suivi des vols, sièges enfants sur demande.',
        'Depuis Malaga, l’Andalousie entière est à portée de route. **L’Alhambra de Grenade** se rejoint en 1 h 30, Ronda et sa gorge en 1 h 15, le Caminito del Rey en une heure. Côté mer, Nerja et Frigiliana ferment la côte est, Marbella et Puerto Banús la côte ouest. En mise à disposition à la journée, votre chauffeur compose l’itinéraire — visites, plages, tables réservées — et gère l’attente à chaque étape.',
      ],
      en: [
        'Gateway to the Costa del Sol, Málaga is far more than an airport: Picasso’s birthplace lines up the Alcazaba, the port’s Centre Pompidou and a fast-rising food scene. Your **private chauffeur in Málaga** links AGP airport to the coastal resorts — Marbella, Estepona, Nerja — and to the city-centre hotels, in a sedan or full-size van. Fixed prices, flight tracking, child seats on request.',
        'From Málaga, all of Andalusia is within driving reach. **The Alhambra in Granada** is 1 h 30 away, Ronda and its gorge 1 h 15, the Caminito del Rey one hour. Along the sea, Nerja and Frigiliana close the eastern coast, Marbella and Puerto Banús the west. With a full-day hire, your chauffeur shapes the itinerary — visits, beaches, booked tables — and handles the waiting at every stop.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Grenade et l’Alhambra', en: 'Granada and the Alhambra' },
        teaser: {
          fr: 'À 125 km par l’A-92, les palais nasrides, le Generalife et les jardins de l’Alhambra (billets à réserver très en avance), puis l’Albaicín au coucher du soleil. Retour de nuit assuré.',
          en: '125 km via the A-92: the Nasrid palaces, the Generalife and the Alhambra gardens (tickets must be booked well ahead), then the Albaicín at sunset. Guaranteed late-night return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '850',
      },
      {
        title: { fr: 'Ronda par la route des villages blancs', en: 'Ronda via the white villages' },
        teaser: {
          fr: 'Montée par la sierra jusqu’au Puente Nuevo, la plus ancienne arène d’Espagne et les bodegas de la Serranía. Arrêt à Setenil de las Bodegas, bâtie sous la roche.',
          en: 'Up through the sierra to the Puente Nuevo, Spain’s oldest bullring and the Serranía wineries. A stop at Setenil de las Bodegas, built beneath the rock.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Caminito del Rey', en: 'Caminito del Rey' },
        teaser: {
          fr: 'À une heure au nord, la passerelle accrochée aux parois du défilé des Gaitanes, 100 mètres au-dessus du Guadalhorce. Votre chauffeur vous dépose à l’entrée nord et vous reprend à la sortie sud.',
          en: 'An hour north, the walkway pinned to the walls of the Gaitanes gorge, 100 metres above the Guadalhorce. Your chauffeur drops you at the northern entrance and collects you at the southern exit.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '490',
      },
      {
        title: { fr: 'Nerja et Frigiliana', en: 'Nerja and Frigiliana' },
        teaser: {
          fr: 'À 55 km à l’est, le balcon de l’Europe, les grottes de Nerja et le village mauresque de Frigiliana, l’un des plus beaux d’Andalousie. Déjeuner de poissons sur la plage de Burriana.',
          en: '55 km east, the Balcón de Europa, the Nerja caves and the Moorish village of Frigiliana, one of Andalusia’s prettiest. Grilled fish lunch on Burriana beach.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Soirée malagueña', en: 'Málaga evening' },
        teaser: {
          fr: 'Dîner chez José Carlos García au port ou dans un asador du Soho, puis l’Alcazaba et la cathédrale illuminées depuis le mirador de Gibralfaro. Véhicule à disposition toute la soirée.',
          en: 'Dinner at José Carlos García on the port or a Soho asador, then the illuminated Alcazaba and cathedral from the Gibralfaro viewpoint. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Malaga et Marbella ?',
          en: 'How much does a transfer between Málaga Airport and Marbella cost?',
        },
        a: {
          fr: 'Le transfert privé entre Malaga-Costa del Sol (AGP) et Marbella — 55 km, 40 à 45 minutes par l’AP-7 — est facturé à prix fixe, confirmé à la réservation, péages inclus. Accueil en salle d’arrivée et suivi du vol compris.',
          en: 'A private transfer between Málaga-Costa del Sol (AGP) and Marbella — 55 km, 40 to 45 minutes via the AP-7 — is charged at a fixed price confirmed at booking, tolls included. Arrivals-hall meet-and-greet and flight tracking included.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous toute la Costa del Sol depuis l’aéroport de Malaga ?',
          en: 'Do you cover the whole Costa del Sol from Málaga Airport?',
        },
        a: {
          fr: 'Oui. Torremolinos, Fuengirola, Mijas, Marbella, Puerto Banús, Estepona et Sotogrande sont desservis quotidiennement, de jour comme de nuit. Chaque destination fait l’objet d’un prix fixe communiqué avant la réservation.',
          en: 'Yes. Torremolinos, Fuengirola, Mijas, Marbella, Puerto Banús, Estepona and Sotogrande are served daily, day and night. Each destination has a fixed price communicated before booking.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter l’Alhambra depuis Malaga en une journée ?',
          en: 'Can the Alhambra be visited from Málaga in one day?',
        },
        a: {
          fr: 'Oui : 1 h 30 de route par l’A-92 dans chaque sens laisse quatre à cinq heures sur place. Les billets de l’Alhambra doivent être réservés plusieurs semaines à l’avance ; nous coordonnons l’horaire du créneau des palais nasrides avec votre départ.',
          en: 'Yes: 1 h 30 each way on the A-92 leaves four to five hours on site. Alhambra tickets must be booked weeks in advance; we align your departure with your Nasrid palaces time slot.',
        },
      },
    ],
    nearby: ['marbella', 'granada', 'puerto-banus'],
  },
  {
    slug: 'marbella',
    name: { fr: 'Marbella', en: 'Marbella' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Malaga-Costa del Sol (AGP)',
    airportTransfer: {
      fr: 'Marbella est desservie par l’aéroport de Malaga-Costa del Sol (AGP), à 55 km au nord-est : comptez 40 à 45 minutes par l’autoroute AP-7 jusqu’au Golden Mile ou à la vieille ville. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Marbella is served by Málaga-Costa del Sol Airport (AGP), 55 km to the north-east: allow 40 to 45 minutes on the AP-7 motorway to the Golden Mile or the old town. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Station la plus élégante de la Costa del Sol, Marbella déroule le Golden Mile entre la vieille ville andalouse et Puerto Banús : palaces historiques — Marbella Club, Puente Romano —, beach clubs, golfs de la Milla de Oro et plaza de los Naranjos. Votre **chauffeur privé à Marbella** assure transferts aéroport, soirées, golfs et villas en berline ou van premium, avec discrétion et ponctualité comme règles de base.',
        'L’arrière-pays mérite autant que la côte. **Ronda et sa gorge vertigineuse** sont à une heure de lacets, les villages blancs de la Serranía tout autour, Gibraltar à 80 km et Malaga la culturelle à 55 km. En saison, la circulation du littoral devient dense : votre chauffeur anticipe les horaires, connaît les accès des beach clubs et vous évite toute recherche de stationnement.',
      ],
      en: [
        'The most elegant resort on the Costa del Sol, Marbella unrolls the Golden Mile between the Andalusian old town and Puerto Banús: historic palace hotels — Marbella Club, Puente Romano —, beach clubs, the Milla de Oro golf courses and Plaza de los Naranjos. Your **private chauffeur in Marbella** handles airport transfers, evenings out, golf rounds and villa journeys in a premium sedan or van, with discretion and punctuality as ground rules.',
        'The hinterland deserves as much as the coast. **Ronda and its dizzying gorge** are an hour of hairpins away, the white villages of the Serranía all around, Gibraltar 80 km and cultural Málaga 55 km. In high season coastal traffic thickens: your chauffeur anticipates timings, knows the beach-club entrances and spares you any search for parking.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Ronda et Setenil de las Bodegas', en: 'Ronda and Setenil de las Bodegas' },
        teaser: {
          fr: 'Montée par la route de San Pedro jusqu’au Puente Nuevo, l’arène et les palais de Ronda, puis Setenil, creusée sous son rocher. Dégustation dans une bodega de la Serranía.',
          en: 'Up the San Pedro road to Ronda’s Puente Nuevo, bullring and palaces, then Setenil, carved beneath its rock. A tasting at a Serranía bodega.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Gibraltar en journée', en: 'Gibraltar day trip' },
        teaser: {
          fr: 'À 80 km à l’ouest, le Rocher : téléphérique, singes magots, grotte de Saint-Michel et shopping détaxé de Main Street. Passage de frontière géré par votre chauffeur, retour en fin de journée.',
          en: '80 km west, the Rock: cable car, Barbary macaques, St Michael’s Cave and duty-free shopping on Main Street. Border crossing handled by your chauffeur, return at day’s end.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Journée golf sur la Milla de Oro', en: 'Golf day on the Milla de Oro' },
        teaser: {
          fr: 'Valderrama, La Quinta, Los Naranjos ou Aloha : dépose au club-house avec vos sacs, attente pendant le parcours, retour à votre villa ou hôtel. Green fees réservés via votre conciergerie.',
          en: 'Valderrama, La Quinta, Los Naranjos or Aloha: drop-off at the clubhouse with your bags, standby during the round, return to your villa or hotel. Green fees booked via your concierge.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Mijas et les villages blancs', en: 'Mijas and the white villages' },
        teaser: {
          fr: 'Mijas Pueblo accroché à la montagne, Ojén et Istán au-dessus de Marbella : balcons fleuris, miradors sur la Méditerranée et déjeuner de montagne à la venta.',
          en: 'Mijas Pueblo pinned to the mountainside, Ojén and Istán above Marbella: flowered balconies, Mediterranean viewpoints and a mountain lunch at a venta.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Soirée Puerto Banús', en: 'Puerto Banús evening' },
        teaser: {
          fr: 'Dîner sur le front de mer — Cipriani, Nobu Marbella — puis la marina et ses yachts, les boutiques de nuit et les clubs. Dépose devant chaque adresse, véhicule en attente jusqu’au retour.',
          en: 'Dinner on the waterfront — Cipriani, Nobu Marbella — then the marina and its yachts, late-night boutiques and clubs. Door-to-door drop-offs, vehicle waiting until you head home.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien de temps dure le transfert entre l’aéroport de Malaga et Marbella ?',
          en: 'How long is the transfer between Málaga Airport and Marbella?',
        },
        a: {
          fr: 'Comptez 40 à 45 minutes par l’autoroute AP-7 (55 km), un peu plus en été aux heures de pointe. Le prix est fixe, péages inclus, avec accueil en salle d’arrivée et suivi du vol en temps réel.',
          en: 'Allow 40 to 45 minutes via the AP-7 motorway (55 km), slightly more at summer peak times. The price is fixed, tolls included, with an arrivals-hall meet-and-greet and real-time flight tracking.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition à la semaine pour les villas de Marbella ?',
          en: 'Do you offer weekly chauffeur service for Marbella villas?',
        },
        a: {
          fr: 'Oui. Pour les séjours en villa sur le Golden Mile, La Zagaleta ou Sierra Blanca, nous proposons un chauffeur dédié à la demi-journée, à la journée ou à la semaine, avec un véhicule stationné à demeure et un interlocuteur unique.',
          en: 'Yes. For villa stays on the Golden Mile, in La Zagaleta or Sierra Blanca, we offer a dedicated chauffeur by the half-day, day or week, with a vehicle stationed on site and a single point of contact.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les retours de nuit depuis les clubs et beach clubs ?',
          en: 'Do you handle late-night returns from clubs and beach clubs?',
        },
        a: {
          fr: 'Oui, 24 h/24 sur réservation. Votre chauffeur vous attend à l’heure convenue devant Ocean Club, Nikki Beach ou la marina de Puerto Banús, ou reste à disposition toute la soirée en formule mise à disposition.',
          en: 'Yes, 24/7 by reservation. Your chauffeur waits at the agreed time outside Ocean Club, Nikki Beach or the Puerto Banús marina, or stays on standby all evening with an hourly hire.',
        },
      },
    ],
    nearby: ['puerto-banus', 'malaga', 'granada'],
  },
  {
    slug: 'puerto-banus',
    name: { fr: 'Puerto Banús', en: 'Puerto Banús' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Malaga-Costa del Sol (AGP)',
    airportTransfer: {
      fr: 'Puerto Banús est desservi par l’aéroport de Malaga-Costa del Sol (AGP), à 65 km au nord-est : comptez 45 à 50 minutes par l’AP-7 jusqu’à la marina. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Puerto Banús is served by Málaga-Costa del Sol Airport (AGP), 65 km to the north-east: allow 45 to 50 minutes on the AP-7 to the marina. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Créée en 1970 par José Banús, la marina de Puerto Banús est devenue l’adresse la plus scintillante de la Méditerranée occidentale : yachts de grande plaisance, boutiques Dior et Gucci sur le front de mer, restaurants et clubs ouverts jusqu’à l’aube. Votre **chauffeur privé à Puerto Banús** gère transferts aéroport, dîners, escales de yacht et navettes vers les villas des collines, avec la discrétion qu’exige la clientèle du port.',
        'Puerto Banús est aussi une base arrière idéale : **Marbella et son Golden Mile** commencent à cinq minutes, les golfs de Nueva Andalucía — Los Naranjos, Las Brisas, Aloha — entourent la marina, Estepona et Sotogrande s’étirent vers l’ouest. En haute saison, l’accès au port est filtré et la circulation dense : votre chauffeur connaît les contrôles d’accès, les horaires creux et chaque point de dépose.',
      ],
      en: [
        'Created in 1970 by José Banús, the Puerto Banús marina has become the most glittering address in the western Mediterranean: superyachts, Dior and Gucci boutiques on the waterfront, restaurants and clubs open until dawn. Your **private chauffeur in Puerto Banús** handles airport transfers, dinners, yacht calls and shuttles to the hillside villas, with the discretion the port’s clientele expects.',
        'Puerto Banús is also an ideal base: **Marbella and its Golden Mile** begin five minutes away, the Nueva Andalucía golf courses — Los Naranjos, Las Brisas, Aloha — surround the marina, and Estepona and Sotogrande stretch to the west. In high season port access is controlled and traffic dense: your chauffeur knows the checkpoints, the quiet hours and every drop-off point.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Journée yacht et marina', en: 'Yacht and marina day' },
        teaser: {
          fr: 'Transfert de votre villa au quai d’embarquement, bagagerie et avitaillement coordonnés avec l’équipage, reprise au retour de mer. Le service à terre qui prolonge le service à bord.',
          en: 'Transfer from your villa to the boarding quay, luggage and provisioning coordinated with the crew, pick-up when you return from sea. Shore service that extends the service on board.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Golfs de Nueva Andalucía', en: 'Nueva Andalucía golf courses' },
        teaser: {
          fr: 'Los Naranjos, Las Brisas, Aloha ou La Quinta à moins de quinze minutes : dépose au club-house avec vos sacs, attente pendant le parcours et retour à la marina ou à votre villa.',
          en: 'Los Naranjos, Las Brisas, Aloha or La Quinta within fifteen minutes: clubhouse drop-off with your bags, standby during the round, return to the marina or your villa.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Ronda depuis la côte', en: 'Ronda from the coast' },
        teaser: {
          fr: 'Une heure de lacets par la A-397 jusqu’au Puente Nuevo, à l’arène et aux palais suspendus au-dessus du Tajo. Déjeuner face à la gorge, retour par les villages blancs.',
          en: 'An hour of hairpins up the A-397 to the Puente Nuevo, the bullring and the palaces perched above the Tajo. Lunch overlooking the gorge, return through the white villages.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Shopping El Corte Inglés et front de mer', en: 'El Corte Inglés and waterfront shopping' },
        teaser: {
          fr: 'Des corners de luxe d’El Corte Inglés Costa Marbella aux boutiques du muelle Ribera — Dior, Dolce & Gabbana, Bulgari — avec un véhicule qui vous suit d’adresse en adresse, paquets à bord.',
          en: 'From the luxury corners of El Corte Inglés Costa Marbella to the Muelle Ribera boutiques — Dior, Dolce & Gabbana, Bulgari — with a vehicle following you from door to door, bags on board.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Soirée sur le port', en: 'Evening on the port' },
        teaser: {
          fr: 'Dîner au bord des quais, puis les clubs de la marina — La Sala, Pangea — jusqu’au bout de la nuit. Votre chauffeur reste en attente et vous ramène à votre villa à l’heure que vous choisissez.',
          en: 'Dinner on the quayside, then the marina clubs — La Sala, Pangea — deep into the night. Your chauffeur stays on standby and takes you back to your villa whenever you choose.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien de temps dure le transfert entre l’aéroport de Malaga et Puerto Banús ?',
          en: 'How long is the transfer between Málaga Airport and Puerto Banús?',
        },
        a: {
          fr: 'Comptez 45 à 50 minutes par l’AP-7 (65 km), davantage aux heures de pointe estivales. Le prix est fixe, péages inclus, avec accueil en salle d’arrivée, suivi du vol et attente offerte en cas de retard.',
          en: 'Allow 45 to 50 minutes via the AP-7 (65 km), more at summer peak times. The price is fixed, tolls included, with an arrivals-hall meet-and-greet, flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous accéder directement aux quais de la marina ?',
          en: 'Can you drive directly onto the marina quays?',
        },
        a: {
          fr: 'L’accès véhicule aux quais est contrôlé et réservé aux ayants droit. Nous coordonnons la dépose avec la capitainerie ou votre équipage lorsque c’est possible ; à défaut, votre chauffeur vous accompagne depuis le point autorisé le plus proche.',
          en: 'Vehicle access to the quays is controlled and restricted. We coordinate drop-off with the harbour master or your crew whenever possible; otherwise your chauffeur escorts you from the nearest authorised point.',
        },
      },
      {
        q: {
          fr: 'Travaillez-vous de nuit pendant la haute saison ?',
          en: 'Do you operate at night during high season?',
        },
        a: {
          fr: 'Oui, 24 h/24 sur réservation. Les sorties de clubs et les arrivées de vols tardifs sont notre quotidien estival : véhicule en attente à l’heure convenue, ou mise à disposition complète pour enchaîner dîner, club et retour sans contrainte.',
          en: 'Yes, 24/7 by reservation. Club pick-ups and late flight arrivals are our summer routine: vehicle waiting at the agreed time, or full standby to link dinner, club and journey home without constraint.',
        },
      },
    ],
    nearby: ['marbella', 'malaga'],
  },
  {
    slug: 'granada',
    name: { fr: 'Grenade', en: 'Granada' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Federico García Lorca Granada-Jaén (GRX)',
    airportTransfer: {
      fr: 'L’aéroport Federico García Lorca Granada-Jaén (GRX) se trouve à 17 km à l’ouest du centre : comptez 20 à 25 minutes pour rejoindre la cathédrale ou le pied de l’Alhambra. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Federico García Lorca Granada-Jaén Airport (GRX) lies 17 km west of the centre: allow 20 to 25 minutes to reach the cathedral or the foot of the Alhambra. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Dernière capitale d’al-Andalus, Grenade s’étage entre l’Alhambra, l’Albaicín aux ruelles blanches et le Sacromonte des cuevas flamencas, la Sierra Nevada en toile de fond. Votre **chauffeur privé à Grenade** gère les accès complexes de la colline de l’Alhambra, les hôtels du centre historique et les carmenes de l’Albaicín, en berline ou van compact adapté aux rues étroites. Prix fixes, horaires coordonnés avec vos créneaux de visite.',
        'Autour de Grenade, les contrastes sont saisissants. **La Sierra Nevada** et sa station de ski culminent à 45 minutes, les villages suspendus des Alpujarras à une heure, la côte tropicale de Salobreña et Almuñécar à moins d’une heure également. Cordoue et Malaga se rejoignent en 1 h 30 : en mise à disposition à la journée, votre chauffeur relie visites, dégustations et miradors sans que vous perdiez une minute.',
      ],
      en: [
        'The last capital of al-Andalus, Granada rises in tiers between the Alhambra, the white lanes of the Albaicín and the flamenco caves of Sacromonte, with the Sierra Nevada as backdrop. Your **private chauffeur in Granada** handles the tricky approaches to the Alhambra hill, the historic-centre hotels and the Albaicín carmenes, in a sedan or compact van suited to narrow streets. Fixed prices, timings aligned with your visit slots.',
        'Around Granada the contrasts are striking. **The Sierra Nevada** and its ski resort are 45 minutes up the road, the hanging villages of the Alpujarras an hour, and the tropical coast of Salobreña and Almuñécar under an hour as well. Córdoba and Málaga are 1 h 30 away: with a full-day hire, your chauffeur links visits, tastings and viewpoints without a minute lost.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Alhambra en accès facilité', en: 'Alhambra made effortless' },
        teaser: {
          fr: 'Dépose à l’entrée du Generalife à l’heure exacte de votre créneau, attente pendant la visite des palais nasrides, reprise à la porte de la Justice. Fin d’après-midi au mirador de San Nicolás.',
          en: 'Drop-off at the Generalife entrance exactly on your time slot, standby during the Nasrid palaces visit, pick-up at the Gate of Justice. Late afternoon at the San Nicolás viewpoint.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '520',
      },
      {
        title: { fr: 'Les Alpujarras, villages suspendus', en: 'The Alpujarras hanging villages' },
        teaser: {
          fr: 'Pampaneira, Bubión et Capileira accrochés au ravin de Poqueira : architecture berbère, jambon de Trevélez et tissages artisanaux. Une journée hors du temps sur le versant sud de la Sierra Nevada.',
          en: 'Pampaneira, Bubión and Capileira clinging to the Poqueira ravine: Berber architecture, Trevélez ham and artisan weaving. A timeless day on the southern face of the Sierra Nevada.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Sierra Nevada, neige ou sommets', en: 'Sierra Nevada, snow or summits' },
        teaser: {
          fr: 'À 45 minutes du centre, la station de ski la plus méridionale d’Europe l’hiver, les routes d’altitude vers le Veleta l’été. Dépose au pied des pistes, matériel à bord, retour en ville le soir.',
          en: '45 minutes from the centre, Europe’s southernmost ski resort in winter, high roads towards the Veleta in summer. Drop-off at the slopes, gear on board, back in town by evening.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '490',
      },
      {
        title: { fr: 'Côte tropicale de Grenade', en: 'Granada’s tropical coast' },
        teaser: {
          fr: 'Salobreña et son rocher blanc, Almuñécar et ses criques, plantations de mangues et d’avocats en terrasses : la seule côte subtropicale d’Europe, à moins d’une heure de l’Alhambra.',
          en: 'Salobreña and its white rock, Almuñécar and its coves, terraced mango and avocado plantations: Europe’s only subtropical coast, under an hour from the Alhambra.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Soirée Albaicín et flamenco', en: 'Albaicín and flamenco evening' },
        teaser: {
          fr: 'Dîner dans un carmen avec l’Alhambra illuminée en vis-à-vis, puis zambra gitane dans une cueva du Sacromonte. Votre chauffeur gère les accès restreints du quartier et le retour de nuit.',
          en: 'Dinner in a carmen facing the illuminated Alhambra, then a gypsy zambra in a Sacromonte cave. Your chauffeur handles the district’s restricted access and the late-night return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Grenade et le centre-ville ?',
          en: 'How much does a transfer between Granada Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Granada-Jaén (GRX) et le centre de Grenade est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus. Nous desservons aussi les aéroports de Malaga et de Séville.',
          en: 'A private transfer between Granada-Jaén (GRX) and central Granada is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included. We also serve Málaga and Seville airports.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous nous déposer directement à l’entrée de l’Alhambra ?',
          en: 'Can you drop us directly at the Alhambra entrance?',
        },
        a: {
          fr: 'Oui. L’accès véhicule à la colline est réglementé, mais nos chauffeurs connaissent les points de dépose autorisés au plus près du pavillon d’accès et de la porte de la Justice, et calent la prise en charge sur votre créneau des palais nasrides.',
          en: 'Yes. Vehicle access to the hill is regulated, but our chauffeurs know the authorised drop-off points closest to the entrance pavilion and the Gate of Justice, and time the pick-up to your Nasrid palaces slot.',
        },
      },
      {
        q: {
          fr: 'L’Albaicín est-il accessible en voiture ?',
          en: 'Is the Albaicín accessible by car?',
        },
        a: {
          fr: 'Le quartier est classé et son accès automobile très restreint. Votre chauffeur vous dépose aux entrées autorisées — Puerta Nueva, Carrera del Darro — et vous accompagne à pied si besoin ; pour les dîners en carmen, nous convenons d’un point de reprise précis.',
          en: 'The district is protected and car access highly restricted. Your chauffeur drops you at the authorised entrances — Puerta Nueva, Carrera del Darro — and escorts you on foot if needed; for carmen dinners we agree a precise pick-up point.',
        },
      },
    ],
    nearby: ['malaga', 'cordoba', 'seville', 'marbella'],
  },
  {
    slug: 'cordoba',
    name: { fr: 'Cordoue', en: 'Córdoba' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Séville-San Pablo (SVQ)',
    airportTransfer: {
      fr: 'Cordoue est desservie par l’aéroport de Séville-San Pablo (SVQ), à 130 km à l’ouest : comptez 1 h 15 à 1 h 30 par l’A-4 jusqu’à la Judería. L’aéroport de Malaga (AGP, 160 km) est une alternative. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Córdoba is served by Seville-San Pablo Airport (SVQ), 130 km to the west: allow 1 h 15 to 1 h 30 via the A-4 to the Judería. Málaga Airport (AGP, 160 km) is an alternative. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale du califat omeyyade au Xᵉ siècle, Cordoue conserve la Mezquita et sa forêt de colonnes bicolores, la Judería aux patios fleuris et le pont romain sur le Guadalquivir — quatre inscriptions UNESCO pour une seule ville. Votre **chauffeur privé à Cordoue** vous évite les contraintes d’un centre historique presque entièrement piétonnier : dépose au plus près de votre hôtel ou de la Mezquita, bagages pris en charge, horaires calés sur vos visites.',
        'Cordoue se combine idéalement avec le reste de l’Andalousie. **Medina Azahara**, la cité palatine califale, est à 8 km à l’ouest ; les vignobles de Montilla-Moriles et leurs vins généreux à 45 minutes ; Séville et Grenade à moins de deux heures. En mai, patios, croix et feria s’enchaînent : votre chauffeur suit le calendrier des fermetures de rues et adapte chaque prise en charge.',
      ],
      en: [
        'Capital of the Umayyad caliphate in the 10th century, Córdoba keeps the Mezquita with its forest of two-tone columns, the flower-filled patios of the Judería and the Roman bridge over the Guadalquivir — four UNESCO listings for a single city. Your **private chauffeur in Córdoba** spares you the constraints of an almost fully pedestrianised old town: drop-off as close as possible to your hotel or the Mezquita, luggage handled, timings set to your visits.',
        'Córdoba pairs perfectly with the rest of Andalusia. **Medina Azahara**, the caliphal palace-city, lies 8 km west; the Montilla-Moriles vineyards and their generous wines 45 minutes away; Seville and Granada under two hours. In May, patios, crosses and the feria follow one another: your chauffeur tracks the street-closure calendar and adjusts every pick-up.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Medina Azahara, la cité califale', en: 'Medina Azahara, the caliphal city' },
        teaser: {
          fr: 'À 8 km à l’ouest, la ville-palais d’Abd al-Rahman III exhumée au pied de la sierra : salon Rico, portiques et musée d’interprétation. Le complément naturel de la Mezquita, en demi-journée.',
          en: '8 km west, the palace-city of Abd al-Rahman III unearthed at the foot of the sierra: the Rich Hall, porticoes and the interpretation museum. The Mezquita’s natural counterpart, in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Montilla-Moriles, route des vins généreux', en: 'Montilla-Moriles, the generous-wine route' },
        teaser: {
          fr: 'À 45 minutes au sud, les bodegas de Montilla et leurs finos élevés sous voile : chais centenaires, dégustations commentées et déjeuner de campagne parmi les vignes de pedro ximénez.',
          en: '45 minutes south, the Montilla bodegas and their flor-aged finos: century-old cellars, guided tastings and a country lunch among the Pedro Ximénez vines.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Séville depuis Cordoue', en: 'Seville from Córdoba' },
        teaser: {
          fr: 'Cathédrale et Giralda, Alcázar, quartier de Santa Cruz et plaza de España : la capitale andalouse en une journée, porte à porte, sans gare ni correspondance.',
          en: 'Cathedral and Giralda, the Alcázar, Santa Cruz quarter and Plaza de España: the Andalusian capital in a day, door to door, with no station or connection.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Châteaux et oliveraies de la Subbética', en: 'Castles and olive groves of the Subbética' },
        teaser: {
          fr: 'Zuheros accroché à sa falaise, Priego de Córdoba la baroque et les moulins à huile de la Subbética : dégustation d’huiles d’olive DOP au cœur de la plus grande oliveraie du monde.',
          en: 'Cliff-hung Zuheros, baroque Priego de Córdoba and the oil mills of the Subbética: PDO olive-oil tastings at the heart of the world’s largest olive grove.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée cordouane', en: 'Córdoba evening' },
        teaser: {
          fr: 'Dîner chez Noor ou dans une taberna de la Judería, puis la Mezquita et le pont romain illuminés depuis la Calahorra. Dépose et reprise aux portes du centre historique.',
          en: 'Dinner at Noor or a Judería taberna, then the illuminated Mezquita and Roman bridge seen from the Calahorra tower. Drop-off and pick-up at the gates of the old town.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Quel aéroport choisir pour rejoindre Cordoue ?',
          en: 'Which airport should I use for Córdoba?',
        },
        a: {
          fr: 'Séville-San Pablo (SVQ), à 1 h 15 de route, offre le meilleur compromis ; Malaga (AGP, 1 h 45) propose davantage de liaisons internationales, Madrid reste accessible en 1 h 50 d’AVE. Nous assurons le transfert privé depuis chacun de ces points, à prix fixe.',
          en: 'Seville-San Pablo (SVQ), 1 h 15 by road, is the best compromise; Málaga (AGP, 1 h 45) offers more international routes, and Madrid is 1 h 50 away by AVE. We provide private transfers from each of these points at a fixed price.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Cordoue en une journée depuis Séville ou Malaga ?',
          en: 'Can Córdoba be visited in a day from Seville or Málaga?',
        },
        a: {
          fr: 'Oui. En mise à disposition à la journée, votre chauffeur vous dépose aux portes de la Judería en milieu de matinée ; quatre à cinq heures suffisent pour la Mezquita, l’Alcázar des Rois chrétiens et un déjeuner, avant le retour en fin d’après-midi.',
          en: 'Yes. With a full-day hire, your chauffeur drops you at the gates of the Judería mid-morning; four to five hours cover the Mezquita, the Alcázar of the Christian Monarchs and lunch, before a late-afternoon return.',
        },
      },
      {
        q: {
          fr: 'Le centre historique de Cordoue est-il accessible en voiture ?',
          en: 'Is Córdoba’s historic centre accessible by car?',
        },
        a: {
          fr: 'Il est presque entièrement piétonnier et soumis à caméras. Nos chauffeurs utilisent les points de dépose autorisés au plus près de la Mezquita et des hôtels de la Judería, et coordonnent la prise en charge des bagages avec votre établissement.',
          en: 'It is almost fully pedestrianised and camera-enforced. Our chauffeurs use the authorised drop-off points closest to the Mezquita and the Judería hotels, and coordinate luggage handling with your establishment.',
        },
      },
    ],
    nearby: ['seville', 'granada', 'malaga', 'madrid'],
  },
  {
    slug: 'bilbao',
    name: { fr: 'Bilbao', en: 'Bilbao' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Bilbao (BIO)',
    airportTransfer: {
      fr: 'L’aéroport de Bilbao (BIO), signé Santiago Calatrava, se trouve à 9 km au nord du centre : comptez 15 à 20 minutes pour rejoindre le Guggenheim ou le Casco Viejo. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Bilbao Airport (BIO), designed by Santiago Calatrava, lies 9 km north of the centre: allow 15 to 20 minutes to reach the Guggenheim or the Casco Viejo. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Métropole basque réinventée autour du Guggenheim de Frank Gehry, Bilbao conjugue titane, sept rues du Casco Viejo et bars à pintxos de la plaza Nueva. Votre **chauffeur privé à Bilbao** dessert le BEC de Barakaldo, le stade San Mamés, les sièges d’entreprises de l’Abandoibarra et les tables étoilées de la ville, en berline ou van premium. Transferts aéroport et port de Getxo, mise à disposition à l’heure, prix fixes.',
        'Le Pays basque et ses voisins se déploient tout autour. **San Juan de Gaztelugatxe** et son escalier dans la mer sont à 35 minutes, la côte de Biscaye enchaîne Bermeo et Mundaka, la Rioja alavesa et ses bodegas d’auteur à une heure, San Sebastián à 100 km par l’A-8. Votre chauffeur enchaîne ces étapes à la journée, dégustations comprises, sans que vous touchiez un volant.',
      ],
      en: [
        'The Basque metropolis reinvented around Frank Gehry’s Guggenheim, Bilbao combines titanium, the seven streets of the Casco Viejo and the pintxo bars of Plaza Nueva. Your **private chauffeur in Bilbao** serves the BEC in Barakaldo, San Mamés stadium, the corporate headquarters of Abandoibarra and the city’s starred tables, in a premium sedan or van. Airport and Getxo cruise-port transfers, hourly hire, fixed prices.',
        'The Basque Country and its neighbours unfold all around. **San Juan de Gaztelugatxe** and its stairway in the sea are 35 minutes away, the Biscay coast strings together Bermeo and Mundaka, the Rioja Alavesa and its signature bodegas are an hour off, San Sebastián 100 km along the A-8. Your chauffeur links these stops over a day, tastings included, without you touching a wheel.',
      ],
    },
    experiences: [
      {
        title: { fr: 'San Juan de Gaztelugatxe et la côte de Biscaye', en: 'San Juan de Gaztelugatxe and the Biscay coast' },
        teaser: {
          fr: 'L’ermitage posé sur son îlot et ses 241 marches, puis Bermeo, Mundaka et sa vague mythique, et l’arbre de Gernika. La côte basque sauvage en une journée, déjeuner face à l’océan.',
          en: 'The hermitage on its islet with its 241 steps, then Bermeo, Mundaka and its legendary wave, and the Tree of Gernika. The wild Basque coast in a day, lunch facing the ocean.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Rioja alavesa, bodegas d’architectes', en: 'Rioja Alavesa, architect-designed bodegas' },
        teaser: {
          fr: 'À une heure au sud, Marqués de Riscal coiffé par Gehry, Ysios signé Calatrava et les villages fortifiés de Laguardia et Elciego. Dégustations commentées, déjeuner vigneron.',
          en: 'An hour south, Marqués de Riscal crowned by Gehry, Calatrava’s Ysios and the fortified villages of Laguardia and Elciego. Guided tastings, winegrower’s lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'San Sebastián à la journée', en: 'San Sebastián day trip' },
        teaser: {
          fr: 'À 100 km par l’A-8 : la Concha, le vieux quartier et ses bars à pintxos, le mont Igueldo. Retour possible par Getaria et Zarautz, entre txakoli et planches de poissons grillés.',
          en: '100 km along the A-8: La Concha bay, the old quarter and its pintxo bars, Mount Igueldo. Return via Getaria and Zarautz, between txakoli wine and grilled fish.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Guggenheim et Bilbao des architectes', en: 'Guggenheim and architects’ Bilbao' },
        teaser: {
          fr: 'Le musée de Gehry, la passerelle Zubizuri de Calatrava, le métro de Foster et l’Azkuna Zentroa de Starck : un demi-siècle d’architecture en une demi-journée, porte à porte.',
          en: 'Gehry’s museum, Calatrava’s Zubizuri footbridge, Foster’s metro and Starck’s Azkuna Zentroa: half a century of architecture in half a day, door to door.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Soirée pintxos et tables étoilées', en: 'Pintxos and starred-tables evening' },
        teaser: {
          fr: 'Tournée des bars de la plaza Nueva et du Casco Viejo ou dîner chez Nerua, face à l’araignée de Louise Bourgeois. Le véhicule vous attend, retour à votre hôtel sans contrainte.',
          en: 'A crawl of the Plaza Nueva and Casco Viejo bars, or dinner at Nerua facing Louise Bourgeois’s spider. The vehicle waits; effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Bilbao et le centre-ville ?',
          en: 'How much does a transfer between Bilbao Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Bilbao (BIO) et le centre est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et l’attente offerte en cas de retard.',
          en: 'A private transfer between Bilbao (BIO) and the centre is charged at a fixed price, confirmed at booking. It includes an arrivals-hall meet-and-greet with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les liaisons entre Bilbao et San Sebastián ou Biarritz ?',
          en: 'Do you connect Bilbao with San Sebastián or Biarritz?',
        },
        a: {
          fr: 'Oui. San Sebastián se rejoint en une heure, Biarritz en 1 h 30 par l’A-8, frontière comprise. Les trajets sont devisés à l’avance, à prix fixe, avec un véhicule autorisé à circuler en Espagne comme en France.',
          en: 'Yes. San Sebastián is an hour away, Biarritz 1 h 30 via the A-8, border included. Journeys are quoted in advance at a fixed price, with a vehicle authorised to operate in both Spain and France.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des journées œnologiques dans la Rioja depuis Bilbao ?',
          en: 'Do you offer Rioja wine days from Bilbao?',
        },
        a: {
          fr: 'C’est l’une de nos excursions les plus demandées : une heure de route vers Laguardia et Elciego, deux ou trois bodegas réservées selon vos goûts, déjeuner au vignoble et retour en fin de journée. Vous dégustez, votre chauffeur conduit.',
          en: 'It is one of our most requested tours: an hour’s drive to Laguardia and Elciego, two or three bodegas booked to your taste, lunch in the vineyards and an end-of-day return. You taste, your chauffeur drives.',
        },
      },
    ],
    nearby: ['san-sebastian'],
  },
  {
    slug: 'san-sebastian',
    name: { fr: 'Saint-Sébastien', en: 'San Sebastián' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'San Sebastián-Hondarribia (EAS)',
    airportTransfer: {
      fr: 'L’aéroport de San Sebastián-Hondarribia (EAS) se trouve à 20 km à l’est du centre : comptez 25 minutes jusqu’à la baie de la Concha. L’aéroport de Bilbao (BIO, 100 km, environ une heure) et celui de Biarritz (BIQ, 50 km) sont les alternatives internationales. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'San Sebastián-Hondarribia Airport (EAS) lies 20 km east of the centre: allow 25 minutes to La Concha bay. Bilbao Airport (BIO, 100 km, about an hour) and Biarritz (BIQ, 50 km) are the international alternatives. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Élégante station Belle Époque devenue capitale mondiale de la gastronomie, Saint-Sébastien déploie la baie de la Concha entre le mont Igueldo et le mont Urgull, ses bars à pintxos de la Parte Vieja et l’une des plus fortes densités d’étoiles Michelin au monde. Votre **chauffeur privé à Saint-Sébastien** relie hôtels, tables triplement étoilées — Arzak, Akelarre, Martín Berasategui — et le palais des congrès Kursaal, à prix fixes annoncés à l’avance.',
        'Autour de la ville, la côte basque se savoure en voiture privée. **Getaria, patrie du txakoli**, est à 25 minutes, Hondarribia la fortifiée face à la France à 20 minutes, Biarritz et Saint-Jean-de-Luz à moins d’une heure de l’autre côté de la Bidassoa. En septembre, festival du film et régates imposent leur calendrier : votre chauffeur en connaît chaque contrainte d’accès.',
      ],
      en: [
        'An elegant Belle Époque resort turned world capital of gastronomy, San Sebastián curves La Concha bay between Mount Igueldo and Mount Urgull, with the pintxo bars of the Parte Vieja and one of the highest densities of Michelin stars on the planet. Your **private chauffeur in San Sebastián** links hotels, three-star tables — Arzak, Akelarre, Martín Berasategui — and the Kursaal congress centre, at fixed prices confirmed in advance.',
        'Around the city, the Basque coast is best savoured by private car. **Getaria, home of txakoli**, is 25 minutes away, fortified Hondarribia facing France 20 minutes, Biarritz and Saint-Jean-de-Luz under an hour across the Bidasoa. In September, the film festival and the regattas set the calendar: your chauffeur knows every access constraint they bring.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Getaria et la route du txakoli', en: 'Getaria and the txakoli route' },
        teaser: {
          fr: 'Le village de pêcheurs de Balenciaga et son musée, les grills de turbot d’Elkano, puis les vignobles de txakoli en balcon sur l’océan. Zarautz et sa grande plage au retour.',
          en: 'Balenciaga’s fishing village and its museum, the turbot grills of Elkano, then the txakoli vineyards terraced above the ocean. Zarautz and its long beach on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Hondarribia et la baie de Txingudi', en: 'Hondarribia and Txingudi bay' },
        teaser: {
          fr: 'La vieille ville fortifiée, ses balcons peints et la marina face à Hendaye : l’une des plus belles cités du Pays basque, à vingt minutes de la Concha. Pintxos dans le quartier de la Marina.',
          en: 'The fortified old town, its painted balconies and the marina facing Hendaye: one of the Basque Country’s loveliest towns, twenty minutes from La Concha. Pintxos in the Marina quarter.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Côte basque française', en: 'The French Basque coast' },
        teaser: {
          fr: 'Saint-Jean-de-Luz, Biarritz et le rocher de la Vierge, Bayonne et son chocolat : la côte voisine en une journée, passage de frontière sans formalité, retour le soir à votre hôtel.',
          en: 'Saint-Jean-de-Luz, Biarritz and the Rocher de la Vierge, Bayonne and its chocolate: the neighbouring coast in a day, seamless border crossing, evening return to your hotel.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Vallées basques et cidreries', en: 'Basque valleys and cider houses' },
        teaser: {
          fr: 'Astigarraga et ses sagardotegis, le menu txotx au tonneau, puis les collines du Goierri et le sanctuaire de Loyola. Le Pays basque intérieur, rural et gourmand.',
          en: 'Astigarraga and its sagardotegis, the txotx menu poured straight from the barrel, then the Goierri hills and the Loyola sanctuary. The rural, gourmand inland Basque Country.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Soirée gastronomique donostiarra', en: 'San Sebastián gourmet evening' },
        teaser: {
          fr: 'Dîner chez Arzak ou Akelarre en surplomb de l’océan, ou tournée de pintxos dans la Parte Vieja — Ganbara, La Cuchara de San Telmo. Véhicule en attente, retour sans contrainte.',
          en: 'Dinner at Arzak or clifftop Akelarre, or a pintxo crawl through the Parte Vieja — Ganbara, La Cuchara de San Telmo. Vehicle on standby, effortless return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Quel aéroport choisir pour rejoindre Saint-Sébastien ?',
          en: 'Which airport should I use for San Sebastián?',
        },
        a: {
          fr: 'Hondarribia (EAS) est le plus proche mais ne dessert que des lignes intérieures ; Bilbao (BIO, une heure de route) concentre les vols internationaux, Biarritz (BIQ, 50 minutes) est pratique depuis la France. Nous couvrons les trois, à prix fixe.',
          en: 'Hondarribia (EAS) is closest but only serves domestic routes; Bilbao (BIO, an hour by road) carries the international traffic, and Biarritz (BIQ, 50 minutes) is convenient from France. We cover all three at fixed prices.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une soirée dans un restaurant trois étoiles ?',
          en: 'Can you arrange an evening at a three-star restaurant?',
        },
        a: {
          fr: 'Nous assurons la logistique complète : dépose devant Arzak, Akelarre ou Martín Berasategui à Lasarte, attente pendant le dîner et retour à votre hôtel. La réservation de la table elle-même relève de votre conciergerie, avec laquelle nous nous coordonnons.',
          en: 'We handle the full logistics: drop-off at Arzak, Akelarre or Martín Berasategui in Lasarte, standby during dinner and return to your hotel. The table booking itself sits with your concierge, with whom we coordinate.',
        },
      },
      {
        q: {
          fr: 'Travaillez-vous pendant le festival du film de Saint-Sébastien ?',
          en: 'Do you operate during the San Sebastián film festival?',
        },
        a: {
          fr: 'Oui, c’est l’une de nos périodes les plus actives : navettes entre hôtels, Kursaal et Victoria Eugenia, horaires de projection respectés à la minute. Réservez au moins une semaine à l’avance, la demande y est très forte.',
          en: 'Yes, it is one of our busiest periods: shuttles between hotels, the Kursaal and the Victoria Eugenia, screening times met to the minute. Book at least a week ahead — demand is very high.',
        },
      },
    ],
    nearby: ['bilbao'],
  },
  {
    slug: 'toledo',
    name: { fr: 'Tolède', en: 'Toledo' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Adolfo Suárez Madrid-Barajas (MAD)',
    airportTransfer: {
      fr: 'Tolède est desservie par l’aéroport de Madrid-Barajas (MAD), à 80 km au nord-est : comptez 50 minutes à une heure par l’A-42 jusqu’aux portes de la vieille ville. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Toledo is served by Madrid-Barajas Airport (MAD), 80 km to the north-east: allow 50 minutes to an hour via the A-42 to the gates of the old town. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville impériale ceinte par le Tage, Tolède superpose mille ans de cohabitation entre chrétiens, juifs et musulmans : cathédrale primatiale, synagogues du Tránsito et de Santa María la Blanca, mosquée du Cristo de la Luz, et le Greco à chaque coin de rue. Votre **chauffeur privé à Tolède** vous épargne les rampes et le dédale d’un centre historique escarpé : dépose aux portes de la ville, bagages gérés, reprise à l’heure convenue.',
        'À une heure de Madrid, Tolède se prête aussi bien à l’excursion qu’au séjour. **Le mirador del Valle**, sur la rive opposée du Tage, offre le panorama le plus célèbre de Castille ; les plaines de La Manche et leurs moulins de Consuegra sont à 45 minutes, et les couteliers-damasquineurs perpétuent l’acier tolédan. Votre chauffeur compose la journée avec vous, arrêts photo compris.',
      ],
      en: [
        'An imperial city girdled by the Tagus, Toledo layers a thousand years of coexistence between Christians, Jews and Muslims: the primatial cathedral, the Tránsito and Santa María la Blanca synagogues, the Cristo de la Luz mosque, and El Greco at every turn. Your **private chauffeur in Toledo** spares you the ramps and maze of a steep historic centre: drop-off at the city gates, luggage handled, pick-up at the agreed time.',
        'An hour from Madrid, Toledo suits a day trip as much as a stay. **The Mirador del Valle**, across the Tagus, frames the most celebrated panorama in Castile; the plains of La Mancha and the Consuegra windmills are 45 minutes away, and damascene craftsmen keep Toledan steel alive. Your chauffeur shapes the day with you, photo stops included.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Tolède monumentale', en: 'Monumental Toledo' },
        teaser: {
          fr: 'Cathédrale, Alcázar, Santo Tomé et « L’Enterrement du comte d’Orgaz », quartier juif et San Juan de los Reyes : les essentiels de la ville des trois cultures, dépose et reprise aux portes.',
          en: 'The cathedral, the Alcázar, Santo Tomé and “The Burial of the Count of Orgaz”, the Jewish quarter and San Juan de los Reyes: the essentials of the city of three cultures, gate-to-gate.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Moulins de Consuegra et La Manche', en: 'Consuegra windmills and La Mancha' },
        teaser: {
          fr: 'À 45 minutes au sud, la crête de Consuegra et ses douze moulins de Don Quichotte, le château de la Muela et les safranières de La Manche en octobre.',
          en: '45 minutes south, the Consuegra ridge with its twelve Don Quixote windmills, La Muela castle and, in October, the saffron fields of La Mancha.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Panorama et cigarrales du Tage', en: 'Tagus panorama and cigarrales' },
        teaser: {
          fr: 'La route des cigarrales sur la rive sud, arrêt au mirador del Valle au coucher du soleil, puis dîner dans l’un des domaines en surplomb de la ville illuminée.',
          en: 'The cigarrales road on the south bank, a sunset stop at the Mirador del Valle, then dinner at one of the estates overlooking the illuminated city.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
      {
        title: { fr: 'Ateliers du damasquinage et de l’acier', en: 'Damascene and steel workshops' },
        teaser: {
          fr: 'Visite d’ateliers où l’or s’incruste dans l’acier noirci selon la tradition tolédane, et des forges qui équipent encore le cinéma. Un artisanat unique, entre orfèvrerie et armurerie.',
          en: 'Visits to workshops where gold is inlaid into blackened steel in the Toledan tradition, and to forges that still equip film productions. A unique craft, between goldsmithing and armoury.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Tolède et Aranjuez', en: 'Toledo and Aranjuez' },
        teaser: {
          fr: 'La matinée dans la ville impériale, l’après-midi au palais royal d’Aranjuez et ses jardins sur le Tage, classés UNESCO. Deux visages de la Castille royale en une journée.',
          en: 'A morning in the imperial city, an afternoon at the Royal Palace of Aranjuez and its UNESCO-listed gardens on the Tagus. Two faces of royal Castile in one day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Madrid-Barajas et Tolède ?',
          en: 'How much does a transfer between Madrid-Barajas and Toledo cost?',
        },
        a: {
          fr: 'Le transfert privé entre Madrid-Barajas (MAD) et Tolède — 80 km, environ une heure — est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée, suivi du vol et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Madrid-Barajas (MAD) and Toledo — 80 km, about an hour — is charged at a fixed price, confirmed at booking. Arrivals-hall meet-and-greet, flight tracking and complimentary waiting time are included.',
        },
      },
      {
        q: {
          fr: 'Peut-on circuler en voiture dans la vieille ville de Tolède ?',
          en: 'Can you drive inside Toledo’s old town?',
        },
        a: {
          fr: 'Le centre historique est en zone à accès restreint, escarpé et très étroit. Votre chauffeur vous dépose au plus près — porte de Bisagra, escalators de Recaredo ou votre hôtel s’il dispose d’une autorisation — et convient d’un point de reprise précis.',
          en: 'The historic centre is a restricted-access zone, steep and very narrow. Your chauffeur drops you as close as possible — Bisagra gate, the Recaredo escalators or your hotel if it holds a permit — and agrees a precise pick-up point.',
        },
      },
      {
        q: {
          fr: 'Une journée suffit-elle pour visiter Tolède depuis Madrid ?',
          en: 'Is one day enough to visit Toledo from Madrid?',
        },
        a: {
          fr: 'Une journée bien organisée couvre la cathédrale, le quartier juif, Santo Tomé et le mirador del Valle. Pour ajouter l’Alcázar, les couvents et une soirée dans la ville illuminée, prévoyez une nuit sur place ; nous gérons le retour le lendemain.',
          en: 'A well-planned day covers the cathedral, the Jewish quarter, Santo Tomé and the Mirador del Valle. To add the Alcázar, the convents and an evening in the illuminated city, stay overnight; we handle the return next day.',
        },
      },
    ],
    nearby: ['madrid', 'segovia', 'salamanca'],
  },
  {
    slug: 'segovia',
    name: { fr: 'Ségovie', en: 'Segovia' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Adolfo Suárez Madrid-Barajas (MAD)',
    airportTransfer: {
      fr: 'Ségovie est desservie par l’aéroport de Madrid-Barajas (MAD), à 100 km au sud-est : comptez une heure à 1 h 10 par l’AP-6 et l’AP-61 jusqu’à l’aqueduc. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Segovia is served by Madrid-Barajas Airport (MAD), 100 km to the south-east: allow one hour to 1 h 10 via the AP-6 and AP-61 to the aqueduct. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Posée sur son éperon entre deux vallées, Ségovie aligne trois icônes : l’aqueduc romain aux 167 arches, la cathédrale gothique tardive et l’Alcázar de proue qui aurait inspiré Disney. Votre **chauffeur privé à Ségovie** vous dépose au pied de l’aqueduc ou aux portes de la vieille ville classée UNESCO, gère l’attente pendant vos visites et réserve — via votre conciergerie — la table de cochinillo qui s’impose, chez Cándido ou José María.',
        'De l’autre côté de la sierra de Guadarrama, Madrid n’est qu’à une heure ; **le palais royal de La Granja de San Ildefonso** et ses jets d’eau à la française à quinze minutes ; Pedraza, l’un des plus beaux villages de Castille, à trente. En hiver, la neige saupoudre l’Alcázar et les routes de la sierra : nos véhicules y sont équipés, vos horaires maintenus.',
      ],
      en: [
        'Set on its spur between two valleys, Segovia lines up three icons: the Roman aqueduct with its 167 arches, the late-Gothic cathedral and the ship’s-prow Alcázar said to have inspired Disney. Your **private chauffeur in Segovia** drops you at the foot of the aqueduct or at the gates of the UNESCO-listed old town, waits through your visits and — via your concierge — books the obligatory roast suckling pig at Cándido or José María.',
        'Across the Guadarrama mountains, Madrid is only an hour away; **the royal palace of La Granja de San Ildefonso** and its formal fountains fifteen minutes; Pedraza, one of Castile’s loveliest villages, thirty. In winter, snow dusts the Alcázar and the sierra roads: our vehicles are equipped for it and your schedule holds.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Ségovie essentielle', en: 'Essential Segovia' },
        teaser: {
          fr: 'L’aqueduc depuis la plaza del Azoguejo, la calle Real jusqu’à la cathédrale, puis l’Alcázar et sa tour de Juan II. Déjeuner de cochinillo asado dans une maison historique.',
          en: 'The aqueduct from Plaza del Azoguejo, Calle Real up to the cathedral, then the Alcázar and the Juan II tower. Roast suckling pig lunch in a historic house.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'La Granja de San Ildefonso', en: 'La Granja de San Ildefonso' },
        teaser: {
          fr: 'À 12 km, le « petit Versailles » des Bourbons d’Espagne : palais, verrières de la Real Fábrica et jardins à la française dont les fontaines jaillissent certains jours d’été.',
          en: '12 km away, the “little Versailles” of Spain’s Bourbons: the palace, the Royal Glass Factory and formal gardens whose fountains play on selected summer days.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Pedraza et Sepúlveda', en: 'Pedraza and Sepúlveda' },
        teaser: {
          fr: 'Deux villages médiévaux parmi les plus beaux de Castille : la plaza Mayor à arcades de Pedraza, les gorges du Duratón en contrebas de Sepúlveda. Agneau rôti au feu de bois.',
          en: 'Two of Castile’s finest medieval villages: Pedraza’s arcaded Plaza Mayor, the Duratón gorges below Sepúlveda. Wood-fired roast lamb for lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Château de Coca et Cuéllar', en: 'Coca castle and Cuéllar' },
        teaser: {
          fr: 'Le château de Coca, chef-d’œuvre de brique mudéjare planté dans les pinèdes, puis Cuéllar et ses remparts. La Castille des forteresses, loin des foules.',
          en: 'Coca castle, a Mudéjar brick masterpiece set among pine forests, then walled Cuéllar. The Castile of fortresses, far from the crowds.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Soirée ségovienne', en: 'Segovia evening' },
        teaser: {
          fr: 'L’aqueduc et l’Alcázar illuminés, dîner de judiones et cochinillo chez José María, puis la vue nocturne depuis le mirador de la Pradera de San Marcos. Retour à Madrid en option.',
          en: 'The illuminated aqueduct and Alcázar, a judión-bean and suckling-pig dinner at José María, then the night view from the Pradera de San Marcos. Optional return to Madrid.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien de temps faut-il entre Madrid et Ségovie en voiture privée ?',
          en: 'How long does it take between Madrid and Segovia by private car?',
        },
        a: {
          fr: 'Comptez une heure par l’AP-6 et le tunnel de Guadarrama depuis le centre de Madrid, un peu plus depuis l’aéroport de Barajas. Le trajet est facturé à prix fixe, péages inclus, aller simple ou journée complète.',
          en: 'Allow an hour via the AP-6 and the Guadarrama tunnel from central Madrid, slightly more from Barajas airport. The journey is charged at a fixed price, tolls included, one-way or as a full day.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Ségovie et La Granja dans la même journée ?',
          en: 'Can Segovia and La Granja be combined in one day?',
        },
        a: {
          fr: 'Oui, c’est la combinaison classique : la matinée dans la vieille ville, le déjeuner de cochinillo, puis le palais et les jardins de La Granja à quinze minutes de route. Votre chauffeur cale l’après-midi sur les horaires des fontaines en été.',
          en: 'Yes, it is the classic pairing: the morning in the old town, a suckling-pig lunch, then the palace and gardens of La Granja fifteen minutes away. In summer your chauffeur times the afternoon to the fountain displays.',
        },
      },
      {
        q: {
          fr: 'Où le chauffeur dépose-t-il dans la vieille ville de Ségovie ?',
          en: 'Where does the chauffeur drop off in Segovia’s old town?',
        },
        a: {
          fr: 'Le centre est partiellement piétonnier. La dépose s’effectue au pied de l’aqueduc, plaza del Azoguejo, ou près de l’Alcázar selon votre programme ; la reprise se fait au même point ou à tout autre endroit convenu avec votre chauffeur.',
          en: 'The centre is partly pedestrianised. Drop-off is at the foot of the aqueduct on Plaza del Azoguejo, or near the Alcázar depending on your plan; pick-up is at the same point or anywhere else agreed with your chauffeur.',
        },
      },
    ],
    nearby: ['madrid', 'toledo', 'salamanca'],
  },
  {
    slug: 'salamanca',
    name: { fr: 'Salamanque', en: 'Salamanca' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Adolfo Suárez Madrid-Barajas (MAD)',
    airportTransfer: {
      fr: 'Salamanque est desservie principalement par l’aéroport de Madrid-Barajas (MAD), à 220 km à l’est : comptez 2 h 15 par l’A-50 et l’A-6 jusqu’à la plaza Mayor. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif, suit votre vol et prévoit une pause en route si vous le souhaitez.',
      en: 'Salamanca is mainly served by Madrid-Barajas Airport (MAD), 220 km to the east: allow 2 h 15 via the A-50 and A-6 to the Plaza Mayor. Your chauffeur greets you in the arrivals hall with a name board, tracks your flight and plans a break en route if you wish.',
    },
    intro: {
      fr: [
        'Ville d’or de la Castille, Salamanque doit sa lumière au grès de Villamayor qui dore la plaza Mayor — la plus belle d’Espagne —, les deux cathédrales accolées et l’université fondée en 1218, l’une des plus anciennes d’Europe. Votre **chauffeur privé à Salamanque** assure les liaisons longue distance depuis Madrid ou Porto, les transferts vers la gare et les mises à disposition pour explorer la ville et sa province à votre rythme.',
        'Autour de Salamanque, la Castille profonde se découvre en étoile. **La Alberca et les villages de la sierra de Francia** sont à une heure, Ciudad Rodrigo la fortifiée à 90 km sur la route du Portugal, les pâturages à jambon ibérique de Guijuelo à 45 minutes. En soirée, la plaza Mayor illuminée mérite à elle seule le déplacement : votre chauffeur vous y dépose et vous attend.',
      ],
      en: [
        'Castile’s golden city, Salamanca owes its glow to the Villamayor sandstone that gilds the Plaza Mayor — Spain’s most beautiful square —, the twin cathedrals and the university founded in 1218, one of Europe’s oldest. Your **private chauffeur in Salamanca** covers long-distance links from Madrid or Porto, station transfers and hourly hire to explore the city and its province at your pace.',
        'Around Salamanca, deep Castile unfolds in every direction. **La Alberca and the villages of the Sierra de Francia** are an hour away, fortified Ciudad Rodrigo 90 km along the road to Portugal, the Ibérico-ham pastures of Guijuelo 45 minutes. In the evening, the illuminated Plaza Mayor alone justifies the journey: your chauffeur drops you there and waits.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Salamanque universitaire et monumentale', en: 'University and monumental Salamanca' },
        teaser: {
          fr: 'La façade plateresque de l’université et sa grenouille cachée, les deux cathédrales, la Casa de las Conchas et le pont romain. Fin de journée sur la plaza Mayor dorée.',
          en: 'The university’s Plateresque façade and its hidden frog, the two cathedrals, the Casa de las Conchas and the Roman bridge. The day ends on the golden Plaza Mayor.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'La Alberca et la sierra de Francia', en: 'La Alberca and the Sierra de Francia' },
        teaser: {
          fr: 'Le village de pierre et de bois le mieux préservé de Castille, le sanctuaire de la Peña de Francia à 1 727 mètres et les forêts de châtaigniers du parc naturel.',
          en: 'Castile’s best-preserved stone-and-timber village, the Peña de Francia sanctuary at 1,727 metres and the chestnut forests of the natural park.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Guijuelo, route du jambon ibérique', en: 'Guijuelo, the Ibérico ham route' },
        teaser: {
          fr: 'À 45 minutes au sud, les séchoirs des grandes maisons de jambon ibérique : visite de caves, coupe au couteau et dégustation commentée au cœur de l’appellation Guijuelo.',
          en: '45 minutes south, the curing cellars of the great Ibérico ham houses: cellar visits, hand-carving and guided tastings at the heart of the Guijuelo appellation.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Ciudad Rodrigo, cité frontière', en: 'Ciudad Rodrigo, frontier town' },
        teaser: {
          fr: 'Remparts complets, cathédrale meurtrie par les guerres napoléoniennes et parador dans le château de Henri II : la Castille des confins, à 90 km sur la route du Portugal.',
          en: 'Complete ramparts, a cathedral scarred by the Napoleonic wars and a parador in Henry II’s castle: borderland Castile, 90 km along the road to Portugal.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Soirée salmantine', en: 'Salamanca evening' },
        teaser: {
          fr: 'Tapas de la calle Van Dyck ou dîner face aux cathédrales, puis la plaza Mayor illuminée et la vue depuis les tours de la Clerecía. Véhicule en attente toute la soirée.',
          en: 'Tapas on Calle Van Dyck or dinner facing the cathedrals, then the illuminated Plaza Mayor and the view from the Clerecía towers. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Comment rejoindre Salamanque depuis Madrid ?',
          en: 'How do I reach Salamanca from Madrid?',
        },
        a: {
          fr: 'Le transfert privé depuis Madrid-Barajas ou le centre de Madrid prend environ 2 h 15 par autoroute, à prix fixe, péages inclus. C’est la solution la plus confortable porte à porte ; une pause à Ávila, sur l’itinéraire, peut être intégrée sans supplément de temps notable.',
          en: 'A private transfer from Madrid-Barajas or central Madrid takes about 2 h 15 by motorway, at a fixed price, tolls included. It is the most comfortable door-to-door option; a stop at Ávila, on the route, adds little time.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Salamanque avec Ávila ou Ségovie ?',
          en: 'Can Salamanca be combined with Ávila or Segovia?',
        },
        a: {
          fr: 'Oui. Ávila et ses remparts se trouvent sur la route de Madrid ; Ségovie s’ajoute pour une boucle castillane de deux ou trois jours. Nous construisons l’itinéraire avec vous, hôtels et horaires de visite compris.',
          en: 'Yes. Ávila and its walls lie on the Madrid road; Segovia completes a two- or three-day Castilian loop. We build the itinerary with you, hotels and visiting times included.',
        },
      },
      {
        q: {
          fr: 'Le centre de Salamanque est-il accessible en voiture ?',
          en: 'Is central Salamanca accessible by car?',
        },
        a: {
          fr: 'Le cœur monumental est piétonnier. Votre chauffeur vous dépose au plus près de la plaza Mayor ou de votre hôtel — la plupart disposent d’accès autorisés pour la dépose bagages — et convient d’un point de reprise à la minute près.',
          en: 'The monumental core is pedestrianised. Your chauffeur drops you as close as possible to the Plaza Mayor or your hotel — most have authorised luggage access — and agrees a pick-up point to the minute.',
        },
      },
    ],
    nearby: ['madrid', 'segovia'],
  },
  {
    slug: 'zaragoza',
    name: { fr: 'Saragosse', en: 'Zaragoza' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Saragosse (ZAZ)',
    airportTransfer: {
      fr: 'L’aéroport de Saragosse (ZAZ) se trouve à 16 km à l’ouest du centre : comptez 15 à 20 minutes pour rejoindre la basilique du Pilar. La ville est aussi à 1 h 20 de Madrid et de Barcelone en AVE, avec transfert privé depuis la gare de Delicias. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Zaragoza Airport (ZAZ) lies 16 km west of the centre: allow 15 to 20 minutes to reach the Pilar basilica. The city is also 1 h 20 from Madrid and Barcelona by AVE, with private transfer from Delicias station. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Cinquième ville d’Espagne, à mi-chemin exact entre Madrid et Barcelone, Saragosse aligne sur l’Èbre deux mille ans d’histoire : les coupoles de la basilique du Pilar, la Seo et ses murs mudéjars classés UNESCO, le palais de l’Aljafería des rois taïfas. Votre **chauffeur privé à Saragosse** dessert la gare AVE de Delicias, la Feria de Zaragoza et les sièges logistiques de la vallée de l’Èbre, à prix fixes.',
        'L’Aragon se découvre en étoile depuis sa capitale. **Le monastère de Piedra** et ses cascades sont à 1 h 30, les vignobles de Cariñena — parmi les plus anciens d’Espagne — à 45 minutes, Fuendetodos, village natal de Goya, à 40 minutes. Pendant les fêtes du Pilar, en octobre, le centre change de visage : votre chauffeur en connaît les fermetures et les accès.',
      ],
      en: [
        'Spain’s fifth city, exactly halfway between Madrid and Barcelona, Zaragoza lines two thousand years of history along the Ebro: the domes of the Pilar basilica, the Seo cathedral with its UNESCO-listed Mudéjar walls, the Aljafería palace of the taifa kings. Your **private chauffeur in Zaragoza** serves the Delicias AVE station, the Feria de Zaragoza and the logistics headquarters of the Ebro valley, at fixed prices.',
        'Aragon radiates from its capital. **The Monasterio de Piedra** and its waterfalls are 1 h 30 away, the Cariñena vineyards — among Spain’s oldest — 45 minutes, and Fuendetodos, Goya’s birthplace, 40 minutes. During the Pilar festivities in October the centre changes face: your chauffeur knows the closures and the ways in.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Monastère de Piedra', en: 'Monasterio de Piedra' },
        teaser: {
          fr: 'À 110 km au sud-ouest, le monastère cistercien et son parc de cascades, grottes et bassins turquoise creusés par la rivière Piedra. Une oasis inattendue aux confins de l’Aragon.',
          en: '110 km south-west, the Cistercian monastery and its park of waterfalls, caves and turquoise pools carved by the River Piedra. An unexpected oasis on Aragon’s edge.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Cariñena et Fuendetodos', en: 'Cariñena and Fuendetodos' },
        teaser: {
          fr: 'Les caves de l’une des plus vieilles appellations d’Espagne, garnacha en majesté, puis la maison natale de Goya et son musée de la gravure à Fuendetodos.',
          en: 'The cellars of one of Spain’s oldest appellations, Garnacha at its finest, then Goya’s birthplace and the engraving museum at Fuendetodos.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Saragosse mudéjare', en: 'Mudéjar Zaragoza' },
        teaser: {
          fr: 'L’Aljafería, la Seo et sa paroi de céramique, les fresques de Goya au Pilar et le tour des tours mudéjares classées. Deux millénaires d’art en une demi-journée, porte à porte.',
          en: 'The Aljafería, the Seo and its ceramic wall, Goya’s frescoes in the Pilar and the circuit of listed Mudéjar towers. Two millennia of art in half a day, door to door.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Belchite, village fantôme', en: 'Belchite ghost village' },
        teaser: {
          fr: 'À 50 km au sud-est, les ruines conservées du vieux Belchite, théâtre d’une des batailles les plus dures de la guerre civile. Visite guidée poignante, entre mémoire et silence.',
          en: '50 km south-east, the preserved ruins of old Belchite, scene of one of the civil war’s hardest battles. A haunting guided visit, between memory and silence.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Soirée sur l’Èbre', en: 'Evening on the Ebro' },
        teaser: {
          fr: 'Dîner dans le Tubo, dédale de tapas du centre, ou à La Prensa, étoilé discret, puis le Pilar illuminé depuis le pont de Piedra. Véhicule à disposition toute la soirée.',
          en: 'Dinner in the Tubo tapas maze or at the discreetly starred La Prensa, then the illuminated Pilar from the Puente de Piedra. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Saragosse et le centre-ville ?',
          en: 'How much does a transfer between Zaragoza Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Saragosse (ZAZ) et le centre est facturé à prix fixe, confirmé à la réservation, accueil avec panneau nominatif et suivi du vol inclus. Nous desservons également la gare AVE de Delicias à chaque arrivée de train.',
          en: 'A private transfer between Zaragoza (ZAZ) and the centre is charged at a fixed price, confirmed at booking, with name-board meet-and-greet and flight tracking included. We also serve the Delicias AVE station for every train arrival.',
        },
      },
      {
        q: {
          fr: 'Saragosse est-elle une bonne étape entre Madrid et Barcelone ?',
          en: 'Is Zaragoza a good stop between Madrid and Barcelona?',
        },
        a: {
          fr: 'Idéale : la ville se trouve à 315 km de chacune des deux capitales. Nous organisons le trajet complet Madrid-Barcelone (ou l’inverse) avec étape d’une nuit ou d’une demi-journée à Saragosse, bagages à bord et itinéraire à votre rythme.',
          en: 'Ideal: the city sits 315 km from each capital. We arrange the full Madrid-Barcelona journey (or the reverse) with an overnight or half-day stop in Zaragoza, luggage on board and the itinerary at your pace.',
        },
      },
      {
        q: {
          fr: 'Que se passe-t-il pendant les fêtes du Pilar en octobre ?',
          en: 'What happens during the Pilar festivities in October?',
        },
        a: {
          fr: 'Autour du 12 octobre, offrande de fleurs, concerts et processions ferment une grande partie du centre. Réservez plusieurs jours à l’avance ; votre chauffeur adapte les points de dépose au périmètre piétonnier du jour.',
          en: 'Around 12 October, the flower offering, concerts and processions close much of the centre. Book several days ahead; your chauffeur adapts drop-off points to each day’s pedestrian perimeter.',
        },
      },
    ],
    nearby: ['barcelona', 'madrid'],
  },
  {
    slug: 'alicante',
    name: { fr: 'Alicante', en: 'Alicante' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Alicante-Elche Miguel Hernández (ALC)',
    airportTransfer: {
      fr: 'L’aéroport d’Alicante-Elche Miguel Hernández (ALC) se trouve à 10 km au sud-ouest du centre : comptez 15 à 20 minutes pour rejoindre l’Explanada de España ou le port. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Alicante-Elche Miguel Hernández Airport (ALC) lies 10 km south-west of the centre: allow 15 to 20 minutes to reach the Explanada de España or the port. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Dominée par le château de Santa Bárbara sur le mont Benacantil, Alicante déroule son Explanada de marbre entre le port de plaisance, le quartier ancien de Santa Cruz et la plage urbaine du Postiguet. Votre **chauffeur privé à Alicante** dessert l’aéroport le plus actif de la Costa Blanca, les marinas, les golfs et les résidences de la côte, d’Altea à Torrevieja, en berline ou van premium, à prix fixes.',
        'La Costa Blanca et son arrière-pays se prêtent aux plus belles journées en voiture privée. **Altea et sa coupole bleue** sont à 40 minutes, le village perché de Guadalest et ses vallées d’amandiers à une heure, la palmeraie d’Elche — la plus grande d’Europe, classée UNESCO — à 25 minutes. Votre chauffeur compose l’itinéraire, criques comprises, et gère l’attente à chaque étape.',
      ],
      en: [
        'Overlooked by Santa Bárbara castle on Mount Benacantil, Alicante unrolls its marble Explanada between the marina, the old Santa Cruz quarter and the urban Postiguet beach. Your **private chauffeur in Alicante** serves the Costa Blanca’s busiest airport, the marinas, golf courses and coastal residences from Altea to Torrevieja, in a premium sedan or van, at fixed prices.',
        'The Costa Blanca and its hinterland make for superb private-car days. **Altea and its blue-domed church** are 40 minutes away, the perched village of Guadalest and its almond valleys an hour, the Elche palm grove — Europe’s largest, UNESCO-listed — 25 minutes. Your chauffeur shapes the itinerary, coves included, and handles the waiting at every stop.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Altea et Calpe', en: 'Altea and Calpe' },
        teaser: {
          fr: 'La vieille ville blanche d’Altea et sa coupole de céramique bleue, puis le rocher d’Ifach à Calpe et les criques de la Manzanera. Déjeuner de riz face à la mer.',
          en: 'Altea’s white old town and blue-tiled dome, then the Ifach rock at Calpe and the Manzanera coves. A rice lunch facing the sea.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Guadalest et les vallées d’amandiers', en: 'Guadalest and the almond valleys' },
        teaser: {
          fr: 'Le castell de Guadalest juché sur son piton au-dessus du lac turquoise, les cascades de l’Algar et la vallée de Guadalest en fleurs fin janvier. L’intérieur secret de la Costa Blanca.',
          en: 'Guadalest castle perched above its turquoise lake, the Algar waterfalls and the Guadalest valley in blossom in late January. The Costa Blanca’s secret interior.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Palmeraie d’Elche', en: 'The Elche palm grove' },
        teaser: {
          fr: 'À 25 minutes, 200 000 palmiers hérités d’al-Andalus, le Huerto del Cura et la Dame d’Elche au musée archéologique. La plus grande palmeraie d’Europe, classée UNESCO.',
          en: '25 minutes away, 200,000 palms inherited from al-Andalus, the Huerto del Cura garden and the Lady of Elche at the archaeological museum. Europe’s largest palm grove, UNESCO-listed.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Île de Tabarca', en: 'Tabarca island' },
        teaser: {
          fr: 'Transfert au port de Santa Pola, traversée vers la seule île habitée de la Communauté valencienne : réserve marine, remparts et caldero de pêcheurs. Reprise au débarcadère au retour.',
          en: 'Transfer to Santa Pola harbour, crossing to the Valencian Community’s only inhabited island: marine reserve, ramparts and fisherman’s caldero stew. Pick-up at the jetty on return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '490',
      },
      {
        title: { fr: 'Soirée alicantine', en: 'Alicante evening' },
        teaser: {
          fr: 'Dîner dans le barrio de Santa Cruz ou à la marina, puis le château de Santa Bárbara illuminé et la promenade de l’Explanada. Dépose devant chaque adresse, véhicule en attente.',
          en: 'Dinner in the Santa Cruz quarter or at the marina, then the illuminated Santa Bárbara castle and the Explanada promenade. Door-to-door drop-offs, vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport d’Alicante et Benidorm ou Altea ?',
          en: 'How much does a transfer between Alicante Airport and Benidorm or Altea cost?',
        },
        a: {
          fr: 'Chaque destination de la Costa Blanca fait l’objet d’un prix fixe communiqué avant la réservation : Benidorm (55 km) se rejoint en 40 minutes, Altea en 50, Dénia en une heure. Accueil en salle d’arrivée et suivi du vol inclus.',
          en: 'Each Costa Blanca destination has a fixed price quoted before booking: Benidorm (55 km) takes 40 minutes, Altea 50, Dénia an hour. Arrivals-hall meet-and-greet and flight tracking included.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des transferts de nuit pour les vols tardifs ?',
          en: 'Do you offer night transfers for late flights?',
        },
        a: {
          fr: 'Oui, 24 h/24 sur réservation. L’aéroport d’Alicante reçoit de nombreux vols après minuit en saison : votre chauffeur suit l’horaire réel d’atterrissage et vous attend quoi qu’il arrive, sans supplément imprévu.',
          en: 'Yes, 24/7 by reservation. Alicante airport receives many post-midnight arrivals in season: your chauffeur follows the actual landing time and waits whatever happens, with no surprise surcharge.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une journée complète sur la Costa Blanca ?',
          en: 'Can you arrange a full day along the Costa Blanca?',
        },
        a: {
          fr: 'Absolument. En mise à disposition à la journée, votre chauffeur enchaîne Altea, Calpe, Guadalest ou Jávea selon vos envies, avec arrêts baignade et table réservée. L’itinéraire reste modifiable en cours de route.',
          en: 'Absolutely. With a full-day hire, your chauffeur links Altea, Calpe, Guadalest or Jávea as you wish, with swim stops and a booked table. The itinerary stays flexible along the way.',
        },
      },
    ],
    nearby: ['murcia', 'valencia'],
  },
  {
    slug: 'murcia',
    name: { fr: 'Murcie', en: 'Murcia' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Région de Murcie (RMU)',
    airportTransfer: {
      fr: 'L’aéroport international de la Région de Murcie (RMU), à Corvera, se trouve à 25 km au sud du centre : comptez 25 à 30 minutes pour rejoindre la cathédrale. L’aéroport d’Alicante (ALC, 75 km) reste une alternative fréquente. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'The Región de Murcia International Airport (RMU) at Corvera lies 25 km south of the centre: allow 25 to 30 minutes to reach the cathedral. Alicante Airport (ALC, 75 km) is a frequent alternative. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale d’une huerta millénaire irriguée depuis les Maures, Murcie s’organise autour de sa cathédrale au chevet gothique et à la façade baroque, du casino éclectique de la calle Trapería et des places gourmandes de Santa Catalina et de las Flores. Votre **chauffeur privé à Murcie** relie l’aéroport de Corvera, les stations du littoral et les domaines viticoles de l’intérieur, en berline ou van premium, à prix fixes.',
        'La région condense des mondes très différents. **Carthagène et son théâtre romain** sont à 45 minutes, La Manga et la lagune du Mar Menor à une heure, les bodegas de Jumilla et leurs monastrells puissants à 45 minutes vers l’intérieur. Au printemps, les fêtes du Bando de la Huerta ferment le centre : votre chauffeur en maîtrise les accès et les horaires.',
      ],
      en: [
        'Capital of a thousand-year-old huerta irrigated since Moorish times, Murcia is arranged around its cathedral — Gothic apse, Baroque façade —, the eclectic casino on Calle Trapería and the gourmet squares of Santa Catalina and Las Flores. Your **private chauffeur in Murcia** links Corvera airport, the coastal resorts and the inland wine estates, in a premium sedan or van, at fixed prices.',
        'The region packs very different worlds together. **Cartagena and its Roman theatre** are 45 minutes away, La Manga and the Mar Menor lagoon an hour, the Jumilla bodegas and their powerful Monastrells 45 minutes inland. In spring, the Bando de la Huerta festivities close the centre: your chauffeur knows the access points and the timings.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Carthagène romaine et navale', en: 'Roman and naval Cartagena' },
        teaser: {
          fr: 'Le théâtre romain restauré derrière la cathédrale ruinée, le port militaire, les façades modernistes de la calle Mayor. 2 200 ans d’histoire méditerranéenne à 45 minutes de Murcie.',
          en: 'The restored Roman theatre behind the ruined cathedral, the naval harbour, the modernist façades of Calle Mayor. 2,200 years of Mediterranean history 45 minutes from Murcia.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Bodegas de Jumilla', en: 'Jumilla bodegas' },
        teaser: {
          fr: 'À 45 minutes au nord, le pays du monastrell : caves familiales et grands noms — Casa Castillo, Juan Gil —, dégustations commentées et déjeuner vigneron entre vignes et amandiers.',
          en: '45 minutes north, Monastrell country: family cellars and big names — Casa Castillo, Juan Gil —, guided tastings and a winegrower’s lunch among vines and almond trees.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Mar Menor et La Manga', en: 'Mar Menor and La Manga' },
        teaser: {
          fr: 'La plus grande lagune salée d’Europe, ses eaux tièdes et ses bains de boue de Lo Pagán, puis le cordon littoral de La Manga entre deux mers. Déjeuner de caldero au bord de l’eau.',
          en: 'Europe’s largest saltwater lagoon, its warm waters and the Lo Pagán mud baths, then the La Manga strip between two seas. Caldero rice lunch by the water.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Caravaca de la Cruz', en: 'Caravaca de la Cruz' },
        teaser: {
          fr: 'À une heure à l’ouest, l’une des cinq villes saintes du catholicisme : basilique de la Vera Cruz, château templier et vieille ville étagée. Les sources du río Argos en chemin.',
          en: 'An hour west, one of Catholicism’s five holy cities: the Vera Cruz basilica, the Templar castle and the tiered old town. The springs of the River Argos on the way.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Soirée murcienne', en: 'Murcia evening' },
        teaser: {
          fr: 'Tapas de la plaza de las Flores — marineras, zarangollo — ou dîner chez Cabaña Buenavista, doublement étoilé, puis la cathédrale illuminée. Véhicule en attente toute la soirée.',
          en: 'Tapas on Plaza de las Flores — marineras, zarangollo — or dinner at the two-star Cabaña Buenavista, then the illuminated cathedral. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Quel aéroport choisir pour rejoindre Murcie ?',
          en: 'Which airport should I use for Murcia?',
        },
        a: {
          fr: 'Corvera (RMU) est le plus proche, à 25-30 minutes ; Alicante (ALC), à une heure, offre bien davantage de liaisons internationales. Nous assurons le transfert privé depuis les deux, à prix fixe, avec suivi du vol et accueil personnalisé.',
          en: 'Corvera (RMU) is closest, at 25-30 minutes; Alicante (ALC), an hour away, offers far more international routes. We provide private transfers from both at a fixed price, with flight tracking and a personal welcome.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous les stations du Mar Menor et La Manga ?',
          en: 'Do you serve the Mar Menor resorts and La Manga?',
        },
        a: {
          fr: 'Oui, quotidiennement : La Manga Club, Los Alcázares, San Javier et l’ensemble du littoral sont couverts depuis les aéroports de Corvera et d’Alicante comme depuis Murcie, à prix fixe communiqué avant la réservation.',
          en: 'Yes, daily: La Manga Club, Los Alcázares, San Javier and the whole shoreline are covered from Corvera and Alicante airports as well as from Murcia, at fixed prices quoted before booking.',
        },
      },
      {
        q: {
          fr: 'Peut-on organiser une journée vin à Jumilla ou Yecla ?',
          en: 'Can you arrange a wine day in Jumilla or Yecla?',
        },
        a: {
          fr: 'Absolument. Nous composons la journée avec deux ou trois bodegas selon vos goûts, déjeuner au domaine et retour en fin d’après-midi. Vous dégustez librement : votre chauffeur conduit.',
          en: 'Absolutely. We build the day around two or three bodegas to your taste, with lunch at an estate and a late-afternoon return. You taste freely: your chauffeur drives.',
        },
      },
    ],
    nearby: ['alicante', 'valencia'],
  },
  {
    slug: 'cadiz',
    name: { fr: 'Cadix', en: 'Cádiz' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Jerez (XRY)',
    airportTransfer: {
      fr: 'Cadix est desservie par l’aéroport de Jerez (XRY), à 45 km au nord-est : comptez 35 à 40 minutes par l’A-4 jusqu’à la vieille ville. L’aéroport de Séville (SVQ, 125 km) est l’alternative principale. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Cádiz is served by Jerez Airport (XRY), 45 km to the north-east: allow 35 to 40 minutes via the A-4 to the old town. Seville Airport (SVQ, 125 km) is the main alternative. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Fondée par les Phéniciens il y a trois mille ans, Cadix est la plus ancienne ville d’Europe occidentale : presqu’île battue par l’Atlantique, cathédrale à la coupole dorée, tours de guet des armateurs et plage de la Caleta entre deux forteresses. Votre **chauffeur privé à Cadix** assure transferts aéroport, escales de croisière au port — en plein centre — et journées le long de la Costa de la Luz, à prix fixes.',
        'Autour de la baie, l’Andalousie atlantique se déguste. **Jerez et ses bodegas de xérès** sont à 35 minutes, Sanlúcar de Barrameda et ses langoustines face à Doñana à 45, Vejer de la Frontera et les plages sauvages de la Costa de la Luz vers le sud. En février, le carnaval — le plus célèbre d’Espagne — transforme la ville : votre chauffeur en gère les fermetures et les retours de nuit.',
      ],
      en: [
        'Founded by the Phoenicians three thousand years ago, Cádiz is the oldest city in western Europe: an Atlantic-battered peninsula, a golden-domed cathedral, merchants’ watchtowers and La Caleta beach framed by two fortresses. Your **private chauffeur in Cádiz** covers airport transfers, cruise calls at the city-centre port and days along the Costa de la Luz, at fixed prices.',
        'Around the bay, Atlantic Andalusia is there to be savoured. **Jerez and its sherry bodegas** are 35 minutes away, Sanlúcar de Barrameda and its langoustines facing Doñana 45, Vejer de la Frontera and the wild Costa de la Luz beaches to the south. In February the carnival — Spain’s most famous — transforms the city: your chauffeur manages the closures and the late-night returns.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Jerez, xérès et art équestre', en: 'Jerez, sherry and equestrian art' },
        teaser: {
          fr: 'À 35 minutes, les chais de Tío Pepe ou Lustau, puis le ballet des pur-sang de la Real Escuela Andaluza del Arte Ecuestre. L’Andalousie des bodegas et des chevaux en une journée.',
          en: '35 minutes away, the Tío Pepe or Lustau cellars, then the thoroughbred ballet of the Real Escuela Andaluza del Arte Ecuestre. Andalusia of bodegas and horses in one day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Vejer et les plages de la Costa de la Luz', en: 'Vejer and the Costa de la Luz beaches' },
        teaser: {
          fr: 'Le village blanc de Vejer suspendu au-dessus de la campagne, puis les plages de Zahara de los Atunes et le thon rouge d’almadraba à table. L’Atlantique andalou dans ce qu’il a de plus pur.',
          en: 'The white village of Vejer hanging above the countryside, then the beaches of Zahara de los Atunes and almadraba bluefin tuna for lunch. Atlantic Andalusia at its purest.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Sanlúcar et Doñana', en: 'Sanlúcar and Doñana' },
        teaser: {
          fr: 'La manzanilla dans les bodegas de Sanlúcar de Barrameda, les langoustines de Bajo de Guía face au parc national de Doñana, et le palais des ducs de Medina Sidonia.',
          en: 'Manzanilla in the Sanlúcar de Barrameda bodegas, Bajo de Guía langoustines facing Doñana national park, and the palace of the Dukes of Medina Sidonia.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Cadix intra-muros', en: 'Cádiz within the walls' },
        teaser: {
          fr: 'Cathédrale et tour Tavira, marché central et quartier de la Viña, théâtre romain et remparts face à l’océan : la doyenne de l’Occident en une demi-journée, dépose aux portes du centre.',
          en: 'Cathedral and Tavira tower, the central market and La Viña quarter, the Roman theatre and ocean-facing ramparts: the West’s oldest city in half a day, drop-off at the centre’s edge.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Soirée gaditane', en: 'Cádiz evening' },
        teaser: {
          fr: 'Coucher de soleil sur la Caleta, fritures de poisson dans la Viña ou dîner chez Código de Barra, puis les remparts illuminés. Véhicule en attente, retour à votre hôtel ou navire.',
          en: 'Sunset over La Caleta, fried fish in La Viña or dinner at Código de Barra, then the illuminated ramparts. Vehicle on standby, return to your hotel or ship.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Quel aéroport choisir pour rejoindre Cadix ?',
          en: 'Which airport should I use for Cádiz?',
        },
        a: {
          fr: 'Jerez (XRY) est à 35-40 minutes et couvre l’essentiel des besoins ; Séville (SVQ), à 1 h 15, offre davantage de vols internationaux. Nous assurons les deux transferts à prix fixe, ainsi que Gibraltar et Malaga sur demande.',
          en: 'Jerez (XRY) is 35-40 minutes away and covers most needs; Seville (SVQ), at 1 h 15, has more international flights. We provide both transfers at fixed prices, plus Gibraltar and Málaga on request.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les escales de croisière au port de Cadix ?',
          en: 'Do you handle cruise calls at the port of Cádiz?',
        },
        a: {
          fr: 'Oui. Le terminal croisière jouxte la vieille ville : votre chauffeur vous attend à la passerelle, panneau nominatif en main, pour une excursion vers Jerez, Séville ou les villages blancs, avec retour garanti avant l’appareillage.',
          en: 'Yes. The cruise terminal adjoins the old town: your chauffeur waits at the gangway with a name board for an excursion to Jerez, Seville or the white villages, with a guaranteed return before sailing.',
        },
      },
      {
        q: {
          fr: 'Peut-on circuler dans la vieille ville de Cadix ?',
          en: 'Can you drive in Cádiz’s old town?',
        },
        a: {
          fr: 'Les ruelles intra-muros sont très étroites et largement piétonnes. Votre chauffeur vous dépose au plus près — porte de Tierra, place d’Espagne ou votre hôtel s’il dispose d’un accès — et convient d’un point de reprise précis.',
          en: 'The streets within the walls are very narrow and largely pedestrian. Your chauffeur drops you as close as possible — Puerta de Tierra, Plaza de España or your hotel if it has access — and agrees a precise pick-up point.',
        },
      },
    ],
    nearby: ['seville'],
  },
  {
    slug: 'ronda',
    name: { fr: 'Ronda', en: 'Ronda' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Malaga-Costa del Sol (AGP)',
    airportTransfer: {
      fr: 'Ronda est desservie par l’aéroport de Malaga-Costa del Sol (AGP), à 105 km à l’est : comptez 1 h 15 par l’A-357 puis l’A-367 à travers la sierra. Depuis Marbella, la montée par la A-397 prend une heure. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Ronda is served by Málaga-Costa del Sol Airport (AGP), 105 km to the east: allow 1 h 15 via the A-357 then the A-367 through the sierra. From Marbella, the climb up the A-397 takes an hour. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Fendue en deux par la gorge du Tajo, Ronda est la plus spectaculaire des villes andalouses : le Puente Nuevo enjambe cent mètres de vide, la plus ancienne arène d’Espagne a vu naître la tauromachie moderne, et Rilke comme Hemingway y ont laissé leur cœur. Votre **chauffeur privé à Ronda** vous épargne les lacets de la sierra et les parkings saturés : dépose au bord du centre historique, reprise à l’heure convenue.',
        'Ronda est aussi une capitale du vin en altitude. **Les bodegas de la Serranía**, replantées sur des terroirs à 700 mètres, se visitent entre deux villages blancs — Setenil de las Bodegas creusée sous son rocher, Zahara de la Sierra au-dessus de son lac turquoise, Grazalema dans son parc naturel. Votre chauffeur compose la boucle avec vous et conduit pendant que vous dégustez.',
      ],
      en: [
        'Split in two by the Tajo gorge, Ronda is the most spectacular of Andalusian towns: the Puente Nuevo spans a hundred metres of void, Spain’s oldest bullring saw the birth of modern bullfighting, and both Rilke and Hemingway lost their hearts here. Your **private chauffeur in Ronda** spares you the sierra hairpins and saturated car parks: drop-off at the edge of the old town, pick-up at the agreed time.',
        'Ronda is also a high-altitude wine capital. **The bodegas of the Serranía**, replanted on 700-metre terroirs, are visited between white villages — Setenil de las Bodegas carved beneath its rock, Zahara de la Sierra above its turquoise lake, Grazalema inside its natural park. Your chauffeur shapes the loop with you and drives while you taste.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Ronda monumentale', en: 'Monumental Ronda' },
        teaser: {
          fr: 'Le Puente Nuevo et le sentier des miradors du Tajo, l’arène de la Real Maestranza et son musée, les bains arabes et le palais de Mondragón. La ville suspendue en une journée.',
          en: 'The Puente Nuevo and the Tajo viewpoint path, the Real Maestranza bullring and its museum, the Arab baths and the Mondragón palace. The hanging city in a day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Bodegas de la Serranía de Ronda', en: 'Serranía de Ronda bodegas' },
        teaser: {
          fr: 'Deux ou trois domaines d’altitude — Descalzos Viejos dans un ancien couvent, entre autres — dégustations face au Tajo et déjeuner vigneron. Le vignoble le plus haut d’Andalousie.',
          en: 'Two or three high-altitude estates — Descalzos Viejos in a former convent among them — tastings facing the Tajo and a winegrower’s lunch. Andalusia’s highest vineyard.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Setenil et Zahara de la Sierra', en: 'Setenil and Zahara de la Sierra' },
        teaser: {
          fr: 'Setenil de las Bodegas et ses rues creusées sous le rocher, puis Zahara suspendue au-dessus de son lac turquoise et le col des palomas dans le parc de Grazalema.',
          en: 'Setenil de las Bodegas and its streets carved beneath the rock, then Zahara hanging above its turquoise lake and the Puerto de las Palomas pass in the Grazalema park.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Grazalema et la route des villages blancs', en: 'Grazalema and the white villages route' },
        teaser: {
          fr: 'Le village le plus arrosé d’Espagne au cœur de son parc naturel, les couvertures artisanales, puis Ubrique la maroquinière des grandes maisons de luxe.',
          en: 'Spain’s rainiest village at the heart of its natural park, its artisan blankets, then Ubrique, leather workshop to the great luxury houses.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Soirée sur le Tajo', en: 'Evening over the Tajo' },
        teaser: {
          fr: 'Coucher de soleil au mirador de Aldehuela, dîner chez Bardal — deux étoiles — ou face à la gorge, puis le Puente Nuevo illuminé. Retour de nuit vers la côte assuré.',
          en: 'Sunset at the Aldehuela viewpoint, dinner at two-star Bardal or facing the gorge, then the illuminated Puente Nuevo. Guaranteed night return to the coast.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien de temps faut-il pour rejoindre Ronda depuis Malaga ou Marbella ?',
          en: 'How long does it take to reach Ronda from Málaga or Marbella?',
        },
        a: {
          fr: 'Comptez 1 h 15 depuis l’aéroport de Malaga et une heure depuis Marbella par la A-397, une route de montagne spectaculaire. Le trajet est facturé à prix fixe, aller simple, aller-retour ou journée complète.',
          en: 'Allow 1 h 15 from Málaga airport and an hour from Marbella via the A-397, a spectacular mountain road. The journey is charged at a fixed price — one-way, round trip or full day.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Ronda en une journée depuis la Costa del Sol ?',
          en: 'Can Ronda be visited in a day from the Costa del Sol?',
        },
        a: {
          fr: 'Oui, c’est notre excursion la plus demandée depuis Marbella et Malaga : départ en matinée, quatre à cinq heures sur place — Puente Nuevo, arène, déjeuner —, et retour en fin d’après-midi, avec arrêt possible à Setenil.',
          en: 'Yes, it is our most requested tour from Marbella and Málaga: morning departure, four to five hours on site — Puente Nuevo, bullring, lunch — and a late-afternoon return, with an optional stop at Setenil.',
        },
      },
      {
        q: {
          fr: 'Le centre historique de Ronda est-il accessible en voiture ?',
          en: 'Is Ronda’s old town accessible by car?',
        },
        a: {
          fr: 'La Ciudad, au sud du pont, est en grande partie piétonne et très étroite. Votre chauffeur vous dépose près de la plaza de España ou de l’arène, à deux minutes à pied du Puente Nuevo, et vous reprend au même point.',
          en: 'La Ciudad, south of the bridge, is largely pedestrian and very narrow. Your chauffeur drops you near Plaza de España or the bullring, two minutes’ walk from the Puente Nuevo, and collects you at the same point.',
        },
      },
    ],
    nearby: ['marbella', 'malaga', 'seville', 'cadiz'],
  },
  {
    slug: 'jerez-de-la-frontera',
    name: { fr: 'Jerez de la Frontera', en: 'Jerez de la Frontera' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Jerez (XRY)',
    airportTransfer: {
      fr: 'L’aéroport de Jerez (XRY) se trouve à 10 km au nord-est du centre : comptez 12 à 15 minutes pour rejoindre l’Alcázar ou les grandes bodegas. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Jerez Airport (XRY) lies 10 km north-east of the centre: allow 12 to 15 minutes to reach the Alcázar or the great bodegas. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale mondiale du xérès, Jerez de la Frontera cultive trois arts majeurs : le vin élevé sous voile dans ses cathédrales de chais, le cheval cartujano de la Real Escuela Andaluza et le flamenco des quartiers de Santiago et San Miguel. Votre **chauffeur privé à Jerez** enchaîne bodegas, tablaos et haciendas sans que vous comptiez les copas : dégustations libres, conduite assurée, horaires respectés.',
        'Jerez rayonne sur tout le triangle du xérès. **Sanlúcar de Barrameda et sa manzanilla** sont à 25 minutes, El Puerto de Santa María à 20, Cadix l’Atlantique à 35. Le circuit de vitesse accueille le Grand Prix moto d’Espagne chaque printemps, la Feria del Caballo transforme la ville en mai : deux temps forts que votre chauffeur connaît dans le détail, accès et horaires compris.',
      ],
      en: [
        'World capital of sherry, Jerez de la Frontera cultivates three major arts: wine aged under flor in its cathedral-like cellars, the Cartujano horse of the Real Escuela Andaluza and the flamenco of the Santiago and San Miguel quarters. Your **private chauffeur in Jerez** links bodegas, tablaos and haciendas without you counting the copas: taste freely, the driving is handled, the schedule holds.',
        'Jerez commands the whole sherry triangle. **Sanlúcar de Barrameda and its manzanilla** are 25 minutes away, El Puerto de Santa María 20, Atlantic Cádiz 35. The racing circuit hosts the Spanish motorcycle Grand Prix every spring, and the Feria del Caballo transforms the town in May: two highlights your chauffeur knows in detail, access and timings included.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Grandes bodegas de xérès', en: 'The great sherry bodegas' },
        teaser: {
          fr: 'González Byass et la cathédrale de Tío Pepe, Lustau ou Fundador : visites de chais centenaires, soleras expliquées et dégustations de fino, amontillado et pedro ximénez.',
          en: 'González Byass and the Tío Pepe cathedral cellar, Lustau or Fundador: century-old bodega visits, the solera system explained, tastings of fino, amontillado and Pedro Ximénez.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Real Escuela Andaluza del Arte Ecuestre', en: 'Real Escuela Andaluza del Arte Ecuestre' },
        teaser: {
          fr: 'Le ballet « Cómo bailan los caballos andaluces », les écuries du palais Duque de Abrantes et les entraînements du matin. L’art équestre andalou à son sommet.',
          en: 'The “How the Andalusian Horses Dance” ballet, the stables of the Duque de Abrantes palace and the morning training sessions. Andalusian horsemanship at its peak.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Sanlúcar et le triangle du xérès', en: 'Sanlúcar and the sherry triangle' },
        teaser: {
          fr: 'La manzanilla de Sanlúcar face à Doñana, les langoustines de Bajo de Guía, puis El Puerto de Santa María et ses chais au bord du Guadalete. Trois villes, trois vins, une journée.',
          en: 'Sanlúcar manzanilla facing Doñana, Bajo de Guía langoustines, then El Puerto de Santa María and its cellars on the Guadalete. Three towns, three wines, one day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Flamenco aux racines', en: 'Flamenco at the roots' },
        teaser: {
          fr: 'Les quartiers gitans de Santiago et San Miguel, berceaux de la bulería, un tabanco à l’heure du fino et une peña authentique le soir venu. Jerez, capitale discrète du cante.',
          en: 'The gypsy quarters of Santiago and San Miguel, cradles of the bulería, a tabanco at fino hour and an authentic peña after dark. Jerez, flamenco’s quiet capital.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
      {
        title: { fr: 'Circuit de Jerez et côte de Cadix', en: 'Jerez circuit and the Cádiz coast' },
        teaser: {
          fr: 'Le circuit Ángel Nieto, temple de la moto espagnole — visite ou grand prix selon le calendrier —, puis les plages d’El Puerto et un dîner de poissons face à la baie.',
          en: 'The Ángel Nieto circuit, temple of Spanish motorcycling — visit or race weekend depending on the calendar — then the El Puerto beaches and a fish dinner on the bay.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Jerez et le centre ou Cadix ?',
          en: 'How much does a transfer between Jerez Airport and the centre or Cádiz cost?',
        },
        a: {
          fr: 'Le transfert vers le centre de Jerez (15 minutes) comme vers Cadix (40 minutes) est facturé à prix fixe, confirmé à la réservation, avec accueil en salle d’arrivée et suivi du vol. Sotogrande, Séville et la Costa de la Luz sont également desservis.',
          en: 'Transfers to central Jerez (15 minutes) and to Cádiz (40 minutes) are charged at fixed prices confirmed at booking, with arrivals-hall meet-and-greet and flight tracking. Sotogrande, Seville and the Costa de la Luz are also covered.',
        },
      },
      {
        q: {
          fr: 'Peut-on enchaîner plusieurs bodegas dans la même journée ?',
          en: 'Can several bodegas be visited in one day?',
        },
        a: {
          fr: 'Oui, deux à trois bodegas constituent le rythme idéal, avec un déjeuner de tabanco entre les visites. Votre chauffeur gère les horaires de chaque maison et vous conduit de chai en chai : vous dégustez sans contrainte de logistique.',
          en: 'Yes, two to three bodegas is the ideal rhythm, with a tabanco lunch between visits. Your chauffeur manages each house’s schedule and drives you cellar to cellar: you taste with zero logistics.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver longtemps à l’avance pour le Grand Prix moto ou la Feria del Caballo ?',
          en: 'How far ahead should I book for the motorcycle Grand Prix or the Feria del Caballo?',
        },
        a: {
          fr: 'Ces deux événements saturent la ville fin avril et début mai. Réservez plusieurs semaines à l’avance ; nos chauffeurs connaissent les accès du circuit Ángel Nieto et du Real de la feria, ainsi que les itinéraires d’évitement des jours de pointe.',
          en: 'Both events saturate the town in late April and early May. Book several weeks ahead; our chauffeurs know the approaches to the Ángel Nieto circuit and the feria ground, plus the avoidance routes on peak days.',
        },
      },
    ],
    nearby: ['cadiz', 'seville', 'ronda'],
  },
  {
    slug: 'santiago-de-compostela',
    name: { fr: 'Saint-Jacques-de-Compostelle', en: 'Santiago de Compostela' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Santiago-Rosalía de Castro (SCQ)',
    airportTransfer: {
      fr: 'L’aéroport de Santiago-Rosalía de Castro (SCQ) se trouve à 13 km au nord-est du centre : comptez 15 à 20 minutes pour rejoindre la plaza del Obradoiro. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Santiago-Rosalía de Castro Airport (SCQ) lies 13 km north-east of the centre: allow 15 to 20 minutes to reach Plaza del Obradoiro. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Terme du plus ancien chemin d’Europe, Saint-Jacques-de-Compostelle concentre autour de sa cathédrale — façade baroque de l’Obradoiro, portique de la Gloire restauré — un centre historique de granit classé UNESCO, l’Hostal dos Reis Católicos et les marchés gourmands des rúas. Votre **chauffeur privé à Saint-Jacques** accueille pèlerins et voyageurs : transferts aéroport, récupération d’étapes du Camino, bagages transportés d’hôtel en hôtel.',
        'La Galice tout entière s’explore depuis Compostelle. **Les Rías Baixas et leurs vignobles d’albariño** sont à 45 minutes, la Costa da Morte et le cap Fisterra — le « bout du monde » des pèlerins — à une heure, A Coruña et sa tour d’Hercule au nord. Votre chauffeur compose des journées entre mer, vignes et villages de pêcheurs, dégustations et mariscadas comprises.',
      ],
      en: [
        'Endpoint of Europe’s oldest pilgrim way, Santiago de Compostela gathers around its cathedral — the Baroque Obradoiro façade, the restored Portico of Glory — a UNESCO-listed granite old town, the Hostal dos Reis Católicos and the gourmet markets of the rúas. Your **private chauffeur in Santiago** welcomes pilgrims and travellers alike: airport transfers, Camino stage pick-ups, luggage moved hotel to hotel.',
        'All of Galicia unfolds from Compostela. **The Rías Baixas and their Albariño vineyards** are 45 minutes away, the Costa da Morte and Cape Fisterra — the pilgrims’ “end of the world” — an hour, A Coruña and its Tower of Hercules to the north. Your chauffeur builds days of sea, vines and fishing villages, tastings and mariscadas included.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Rías Baixas, albariño et pazos', en: 'Rías Baixas, Albariño and pazos' },
        teaser: {
          fr: 'Cambados, capitale de l’albariño, les pazos vignerons du Salnés et l’île de La Toja. Dégustations face à la ría et mariscada de palourdes, huîtres et percebes.',
          en: 'Cambados, capital of Albariño, the wine-growing pazos of the Salnés and La Toja island. Tastings over the ría and a mariscada of clams, oysters and goose barnacles.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Fisterra et la Costa da Morte', en: 'Fisterra and the Costa da Morte' },
        teaser: {
          fr: 'Le cap du « bout du monde » et son phare, Muxía et le sanctuaire de la Barca battu par l’Atlantique, les villages de Camariñas et Corcubión. L’épilogue du Camino, sans marcher.',
          en: 'The “end of the world” cape and its lighthouse, Muxía and the wave-battered A Barca sanctuary, the villages of Camariñas and Corcubión. The Camino’s epilogue, without the walking.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'A Coruña et la tour d’Hercule', en: 'A Coruña and the Tower of Hercules' },
        teaser: {
          fr: 'Le plus ancien phare romain en activité au monde, les galeries vitrées de la Marina et la plage de Riazor. Retour par Betanzos et sa vieille ville gothique.',
          en: 'The world’s oldest working Roman lighthouse, the glassed-in galleries of the Marina and Riazor beach. Return via Betanzos and its Gothic old town.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Assistance Camino de Santiago', en: 'Camino de Santiago support' },
        teaser: {
          fr: 'Transport de bagages entre étapes, récupération en fin de journée sur le Camino francés ou portugais, retour à votre hôtel de Compostelle. Marchez léger, dormez bien.',
          en: 'Luggage moved between stages, end-of-day pick-ups on the French or Portuguese Camino, return to your Santiago hotel. Walk light, sleep well.',
        },
        duration: { fr: 'À la journée', en: 'Per day' },
        price: '450',
      },
      {
        title: { fr: 'Soirée compostellane', en: 'Santiago evening' },
        teaser: {
          fr: 'Pulpo á feira et albariño dans les mesóns de la rúa do Franco ou dîner à l’Hostal dos Reis Católicos, puis l’Obradoiro illuminé. Véhicule en attente aux portes du centre.',
          en: 'Pulpo á feira and Albariño in the mesóns of Rúa do Franco or dinner at the Hostal dos Reis Católicos, then the illuminated Obradoiro. Vehicle waiting at the edge of the old town.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Santiago et le centre-ville ?',
          en: 'How much does a transfer between Santiago Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Santiago-Rosalía de Castro (SCQ) et le centre est facturé à prix fixe, confirmé à la réservation, accueil avec panneau nominatif et suivi du vol inclus. Nous desservons aussi les aéroports d’A Coruña et de Vigo.',
          en: 'A private transfer between Santiago-Rosalía de Castro (SCQ) and the centre is charged at a fixed price confirmed at booking, with name-board meet-and-greet and flight tracking included. We also serve A Coruña and Vigo airports.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous un service de soutien aux pèlerins du Camino ?',
          en: 'Do you support Camino pilgrims?',
        },
        a: {
          fr: 'Oui : transport de bagages entre étapes, récupération en cas de blessure ou de fatigue, navettes vers Sarria, O Cebreiro ou Tui pour commencer votre marche, et retour à Compostelle en fin de chemin. Tout est devisé à l’avance.',
          en: 'Yes: luggage transport between stages, pick-ups in case of injury or fatigue, shuttles to Sarria, O Cebreiro or Tui to start your walk, and the return to Compostela at journey’s end. Everything is quoted in advance.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Porto ou Lisbonne depuis Saint-Jacques ?',
          en: 'Can I travel on to Porto or Lisbon from Santiago?',
        },
        a: {
          fr: 'Oui. Porto est à 2 h 30 par l’A-55 et l’A3 portugaise, Lisbonne à 5 h 30. Ces trajets transfrontaliers sont facturés à prix fixe, avec arrêts à Pontevedra, Tui ou Viana do Castelo si vous le souhaitez.',
          en: 'Yes. Porto is 2 h 30 away via the A-55 and the Portuguese A3, Lisbon 5 h 30. These cross-border journeys are charged at fixed prices, with stops at Pontevedra, Tui or Viana do Castelo if you wish.',
        },
      },
    ],
    nearby: [],
  },
  {
    slug: 'girona',
    name: { fr: 'Gérone', en: 'Girona' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Girona-Costa Brava (GRO)',
    airportTransfer: {
      fr: 'L’aéroport de Girona-Costa Brava (GRO) se trouve à 13 km au sud-ouest du centre : comptez 15 à 20 minutes pour rejoindre la vieille ville. Barcelone-El Prat (BCN, 100 km, environ une heure) offre l’essentiel des liaisons internationales. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Girona-Costa Brava Airport (GRO) lies 13 km south-west of the centre: allow 15 to 20 minutes to reach the old town. Barcelona-El Prat (BCN, 100 km, about an hour) carries most international routes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Étagée sur l’Onyar aux façades colorées, Gérone conserve l’un des quartiers juifs les mieux préservés d’Europe, une cathédrale à la nef gothique la plus large du monde et des remparts carolingiens en promenade. Votre **chauffeur privé à Gérone** dessert la gare TGV — Paris est à 5 h 30 directes —, l’aéroport et les tables qui ont fait la réputation de la ville, El Celler de Can Roca en tête.',
        'Gérone est la porte de la Costa Brava et du pays de Dalí. **Figueres et son Théâtre-musée** sont à 40 minutes, Cadaqués et Portlligat au bout de leur route en lacets, les criques de Begur et le village de Pals à 45 minutes. À l’intérieur, les volcans de la Garrotxa et Besalú la médiévale composent une autre journée : votre chauffeur les enchaîne à votre rythme.',
      ],
      en: [
        'Terraced above the Onyar and its coloured façades, Girona keeps one of Europe’s best-preserved Jewish quarters, a cathedral with the widest Gothic nave in the world and Carolingian ramparts you can walk. Your **private chauffeur in Girona** serves the TGV station — Paris is 5 h 30 direct —, the airport and the tables that made the city’s name, El Celler de Can Roca first among them.',
        'Girona is the gateway to the Costa Brava and Dalí country. **Figueres and its Theatre-Museum** are 40 minutes away, Cadaqués and Portlligat at the end of their hairpin road, the Begur coves and the village of Pals 45 minutes. Inland, the Garrotxa volcanoes and medieval Besalú fill another day: your chauffeur strings them together at your pace.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Triangle de Dalí', en: 'The Dalí triangle' },
        teaser: {
          fr: 'Le Théâtre-musée de Figueres, la maison-atelier de Portlligat et le château de Púbol offert à Gala : l’univers dalinien complet en une journée, Cadaqués en déjeuner.',
          en: 'The Figueres Theatre-Museum, the Portlligat house-studio and the Púbol castle given to Gala: the complete Dalí universe in a day, with lunch in Cadaqués.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Criques de la Costa Brava', en: 'Costa Brava coves' },
        teaser: {
          fr: 'Calella de Palafrugell et Llafranc, les jardins de Cap Roig, les criques d’Aiguablava et Sa Tuna sous Begur. Baignades et déjeuner de suquet face à la Méditerranée.',
          en: 'Calella de Palafrugell and Llafranc, the Cap Roig gardens, the Aiguablava and Sa Tuna coves below Begur. Swims and a suquet fish-stew lunch facing the Mediterranean.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Besalú et les volcans de la Garrotxa', en: 'Besalú and the Garrotxa volcanoes' },
        teaser: {
          fr: 'Le pont fortifié et le miqvé de Besalú, les coulées basaltiques de Castellfollit de la Roca et la hêtraie de la Fageda d’en Jordà entre les cratères endormis.',
          en: 'Besalú’s fortified bridge and mikveh, the basalt cliffs of Castellfollit de la Roca and the Fageda d’en Jordà beech wood among dormant craters.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Gérone médiévale', en: 'Medieval Girona' },
        teaser: {
          fr: 'Le Call juif et son musée, la cathédrale et le tapis de la Création, les bains arabes et la promenade des remparts. La ville aux vingt-cinq sièges, porte à porte.',
          en: 'The Jewish Call and its museum, the cathedral and the Tapestry of Creation, the Arab baths and the rampart walk. The city of twenty-five sieges, door to door.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Soirée gastronomique géronaise', en: 'Girona gourmet evening' },
        teaser: {
          fr: 'Dîner à El Celler de Can Roca — réservation via votre conciergerie — ou dans les bistrots du Barri Vell, puis les façades de l’Onyar illuminées. Véhicule en attente toute la soirée.',
          en: 'Dinner at El Celler de Can Roca — booked via your concierge — or in the Barri Vell bistros, then the illuminated Onyar façades. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Quel aéroport choisir pour rejoindre Gérone et la Costa Brava ?',
          en: 'Which airport should I use for Girona and the Costa Brava?',
        },
        a: {
          fr: 'Girona-Costa Brava (GRO) est à 15 minutes du centre mais dessert surtout des lignes saisonnières ; Barcelone-El Prat (BCN), à une heure, concentre les vols internationaux. Nous couvrons les deux, ainsi que Perpignan côté français.',
          en: 'Girona-Costa Brava (GRO) is 15 minutes from the centre but mainly seasonal; Barcelona-El Prat (BCN), an hour away, carries the international traffic. We cover both, plus Perpignan on the French side.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers les hôtels de la Costa Brava ?',
          en: 'Do you transfer to Costa Brava hotels?',
        },
        a: {
          fr: 'Oui : Begur, Llafranc, S’Agaró, Cadaqués et l’ensemble du littoral sont desservis à prix fixe depuis Gérone, Barcelone ou l’aéroport. Les routes de corniche n’ont pas de secret pour nos chauffeurs.',
          en: 'Yes: Begur, Llafranc, S’Agaró, Cadaqués and the whole coastline are served at fixed prices from Girona, Barcelona or the airport. The corniche roads hold no secrets for our chauffeurs.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre la France depuis Gérone ?',
          en: 'Can I reach France from Girona?',
        },
        a: {
          fr: 'Facilement : Perpignan est à une heure par l’AP-7, Collioure à 1 h 10, Montpellier à 2 h 30. Les trajets transfrontaliers sont devisés à l’avance, à prix fixe, avec un véhicule autorisé dans les deux pays.',
          en: 'Easily: Perpignan is an hour away on the AP-7, Collioure 1 h 10, Montpellier 2 h 30. Cross-border journeys are quoted in advance at fixed prices, with a vehicle authorised in both countries.',
        },
      },
    ],
    nearby: ['barcelona'],
  },
  {
    slug: 'sitges',
    name: { fr: 'Sitges', en: 'Sitges' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Josep Tarradellas Barcelona-El Prat (BCN)',
    airportTransfer: {
      fr: 'Sitges est desservie par l’aéroport de Barcelone-El Prat (BCN), à 25 km au nord-est : comptez 25 à 30 minutes par la C-32 jusqu’au front de mer. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Sitges is served by Barcelona-El Prat Airport (BCN), 25 km to the north-east: allow 25 to 30 minutes on the C-32 to the seafront. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Refuge des peintres modernistes devenu la station la plus cosmopolite de Catalogne, Sitges aligne dix-sept plages, un front de mer ponctué par l’église Sant Bartomeu et des musées — Cau Ferrat, Maricel — hérités de Santiago Rusiñol. Votre **chauffeur privé à Sitges** relie l’aéroport d’El Prat en trente minutes, dessert les hôtels du passeig Marítim et les villas de Terramar, à prix fixes annoncés à l’avance.',
        'L’agenda de Sitges rythme l’année : carnaval débridé en février, festival international du film fantastique en octobre, rallye de voitures anciennes Barcelone-Sitges au printemps. Entre deux événements, **les caves du Penedès** sont à vingt minutes, Tarragone la romaine à quarante, Barcelone à trente-cinq. Votre chauffeur gère les fermetures du centre les soirs de fête et les retours tardifs.',
      ],
      en: [
        'A modernist painters’ refuge turned Catalonia’s most cosmopolitan resort, Sitges lines up seventeen beaches, a seafront punctuated by the Sant Bartomeu church and museums — Cau Ferrat, Maricel — inherited from Santiago Rusiñol. Your **private chauffeur in Sitges** links El Prat airport in thirty minutes and serves the Passeig Marítim hotels and the Terramar villas, at fixed prices confirmed in advance.',
        'Sitges’ calendar sets the year’s rhythm: an exuberant carnival in February, the international fantastic film festival in October, the Barcelona-Sitges vintage car rally in spring. In between, **the Penedès cellars** are twenty minutes away, Roman Tarragona forty, Barcelona thirty-five. Your chauffeur handles the centre’s festival-night closures and the late returns.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Penedès, cava et vignobles', en: 'Penedès, cava and vineyards' },
        teaser: {
          fr: 'À vingt minutes, Sant Sadurní d’Anoia et Vilafranca del Penedès : caves centenaires, dégustations de cava et déjeuner au milieu des vignes. Retour par les collines du Garraf.',
          en: 'Twenty minutes away, Sant Sadurní d’Anoia and Vilafranca del Penedès: century-old cellars, cava tastings and lunch among the vines. Return through the Garraf hills.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Barcelone à la journée', en: 'Barcelona day trip' },
        teaser: {
          fr: 'Sagrada Família, passeig de Gràcia et Barri Gòtic à trente-cinq minutes de votre hôtel : la capitale catalane porte à porte, sans train ni parking, retour à Sitges le soir.',
          en: 'Sagrada Família, Passeig de Gràcia and the Barri Gòtic thirty-five minutes from your hotel: the Catalan capital door to door, no train or parking, back in Sitges by evening.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Tarragone romaine', en: 'Roman Tarragona' },
        teaser: {
          fr: 'L’amphithéâtre face à la mer, le cirque et les remparts de Tarraco, capitale de l’Hispanie romaine, puis le balcon de la Méditerranée. À quarante minutes au sud de Sitges.',
          en: 'The seafront amphitheatre, the circus and walls of Tarraco, capital of Roman Hispania, then the Balcó del Mediterrani. Forty minutes south of Sitges.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Sitges moderniste', en: 'Modernist Sitges' },
        teaser: {
          fr: 'Le Cau Ferrat de Rusiñol, le palais Maricel et les maisons d’Américains enrichis aux Caraïbes, puis les jardins de Terramar face à la mer. L’âge d’or de Sitges en une demi-journée.',
          en: 'Rusiñol’s Cau Ferrat, the Maricel palace and the mansions of Caribbean-enriched “Americanos”, then the Terramar gardens by the sea. Sitges’ golden age in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Soirée sur le passeig Marítim', en: 'Evening on the Passeig Marítim' },
        teaser: {
          fr: 'Dîner face à la mer ou dans le carrer del Pecat, puis les terrasses et clubs du centre. Votre chauffeur reste en attente et vous ramène à votre villa ou hôtel à l’heure choisie.',
          en: 'Dinner facing the sea or on the Carrer del Pecat, then the centre’s terraces and clubs. Your chauffeur stays on standby and returns you to your villa or hotel whenever you choose.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Barcelone et Sitges ?',
          en: 'How much does a transfer between Barcelona Airport and Sitges cost?',
        },
        a: {
          fr: 'Le transfert privé entre El Prat (BCN) et Sitges — 25 km, environ 30 minutes — est facturé à prix fixe, péages de la C-32 inclus, avec accueil en salle d’arrivée, suivi du vol et attente offerte en cas de retard.',
          en: 'A private transfer between El Prat (BCN) and Sitges — 25 km, about 30 minutes — is charged at a fixed price, C-32 tolls included, with arrivals-hall meet-and-greet, flight tracking and complimentary waiting time.',
        },
      },
      {
        q: {
          fr: 'Travaillez-vous pendant le carnaval et le festival de cinéma de Sitges ?',
          en: 'Do you operate during the Sitges carnival and film festival?',
        },
        a: {
          fr: 'Oui, ce sont nos périodes les plus actives. Le centre est alors fermé à la circulation en soirée : votre chauffeur utilise les points de dépose autorisés au plus près du front de mer et assure les retours de nuit sans limite d’horaire.',
          en: 'Yes, they are our busiest periods. The centre closes to traffic in the evening: your chauffeur uses the authorised drop-off points nearest the seafront and covers late-night returns with no time limit.',
        },
      },
      {
        q: {
          fr: 'Peut-on loger à Sitges et rayonner vers Barcelone et le Penedès ?',
          en: 'Can I stay in Sitges and explore Barcelona and the Penedès from there?',
        },
        a: {
          fr: 'C’est une excellente base : Barcelone à 35 minutes, le Penedès à 20, Tarragone à 40. En mise à disposition à la journée, votre chauffeur enchaîne ces destinations selon votre programme, avec retour chaque soir à votre hôtel.',
          en: 'It is an excellent base: Barcelona 35 minutes away, the Penedès 20, Tarragona 40. With a full-day hire, your chauffeur links these destinations to your programme, returning to your hotel each evening.',
        },
      },
    ],
    nearby: ['barcelona', 'tarragona', 'girona'],
  },
  {
    slug: 'tarragona',
    name: { fr: 'Tarragone', en: 'Tarragona' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Reus (REU)',
    airportTransfer: {
      fr: 'L’aéroport de Reus (REU) se trouve à 8 km à l’ouest de Tarragone : comptez 15 minutes jusqu’au centre. Barcelone-El Prat (BCN, 85 km, environ 55 minutes par l’AP-7) concentre les liaisons internationales. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Reus Airport (REU) lies 8 km west of Tarragona: allow 15 minutes to the centre. Barcelona-El Prat (BCN, 85 km, about 55 minutes via the AP-7) carries the international routes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de l’Hispanie romaine sous le nom de Tarraco, Tarragone conserve un ensemble archéologique classé UNESCO : amphithéâtre ouvert sur la Méditerranée, cirque glissé sous la ville médiévale, forum et remparts millénaires. Votre **chauffeur privé à Tarragone** dessert le port de croisière, la gare du Camp de Tarragona et les hôtels de la Costa Daurada, en berline ou van premium, à prix fixes.',
        'Autour de la ville, la Costa Daurada déroule plages et arrière-pays de caractère. **Le Priorat et ses vins de schiste** sont à 45 minutes, le monastère cistercien de Poblet à 40, PortAventura World à quinze minutes pour les familles, et le delta de l’Èbre au sud. Votre chauffeur compose ces journées à votre rythme, dégustations et tables réservées comprises.',
      ],
      en: [
        'Capital of Roman Hispania under the name Tarraco, Tarragona keeps a UNESCO-listed archaeological ensemble: an amphitheatre open to the Mediterranean, a circus tucked beneath the medieval town, a forum and thousand-year-old walls. Your **private chauffeur in Tarragona** serves the cruise port, the Camp de Tarragona station and the Costa Daurada hotels, in a premium sedan or van, at fixed prices.',
        'Around the city, the Costa Daurada unrolls beaches and a hinterland of real character. **The Priorat and its schist wines** are 45 minutes away, the Cistercian monastery of Poblet 40, PortAventura World fifteen minutes for families, and the Ebro Delta to the south. Your chauffeur builds these days at your pace, tastings and booked tables included.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Priorat, vins de schiste', en: 'Priorat, wines of schist' },
        teaser: {
          fr: 'Gratallops, Porrera et la chartreuse d’Escaladei, berceau de l’appellation : dégustations chez les grands noms du Priorat, terrasses de licorella et déjeuner vigneron.',
          en: 'Gratallops, Porrera and the Escaladei charterhouse, cradle of the appellation: tastings at the Priorat’s great names, licorella terraces and a winegrower’s lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Poblet et la route cistercienne', en: 'Poblet and the Cistercian route' },
        teaser: {
          fr: 'Le monastère royal de Poblet, panthéon des rois d’Aragon classé UNESCO, puis Santes Creus ou Vallbona selon vos envies. Les pierres blondes de la Catalogne intérieure.',
          en: 'The royal monastery of Poblet, UNESCO-listed pantheon of the kings of Aragon, then Santes Creus or Vallbona as you wish. The golden stones of inland Catalonia.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Tarraco romaine', en: 'Roman Tarraco' },
        teaser: {
          fr: 'Amphithéâtre, cirque, prétoire et remparts, puis l’aqueduc du Pont del Diable dans sa pinède. Deux mille ans d’histoire en une demi-journée, dépose et reprise porte à porte.',
          en: 'Amphitheatre, circus, praetorium and walls, then the Pont del Diable aqueduct in its pine wood. Two thousand years of history in half a day, door to door.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Delta de l’Èbre', en: 'The Ebro Delta' },
        teaser: {
          fr: 'À une heure au sud, rizières à perte de vue, flamants roses et plages désertes du Trabucador. Déjeuner de riz aux anguilles et d’huîtres du delta à Poblenou.',
          en: 'An hour south: rice paddies to the horizon, flamingos and the deserted Trabucador beaches. Eel rice and delta oysters for lunch in Poblenou.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée sur le Balcó del Mediterrani', en: 'Evening on the Balcó del Mediterrani' },
        teaser: {
          fr: 'Tapas dans le Serrallo, quartier des pêcheurs, ou dîner dans la part alta médiévale, puis l’amphithéâtre illuminé face à la mer. Véhicule en attente toute la soirée.',
          en: 'Tapas in El Serrallo, the fishermen’s quarter, or dinner in the medieval Part Alta, then the illuminated amphitheatre facing the sea. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Quel aéroport choisir pour rejoindre Tarragone et la Costa Daurada ?',
          en: 'Which airport should I use for Tarragona and the Costa Daurada?',
        },
        a: {
          fr: 'Reus (REU) est à quinze minutes mais dessert surtout des lignes saisonnières ; Barcelone-El Prat (BCN), à 55 minutes par l’AP-7, reste la porte d’entrée principale. Nous couvrons les deux à prix fixe, péages inclus.',
          en: 'Reus (REU) is fifteen minutes away but mainly seasonal; Barcelona-El Prat (BCN), 55 minutes via the AP-7, remains the main gateway. We cover both at fixed prices, tolls included.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous PortAventura et les hôtels de Salou ?',
          en: 'Do you serve PortAventura and the Salou hotels?',
        },
        a: {
          fr: 'Oui, quotidiennement : PortAventura World, Salou, Cambrils et La Pineda sont à moins de vingt minutes. Vans jusqu’à sept passagers et sièges enfants sur demande pour les familles.',
          en: 'Yes, daily: PortAventura World, Salou, Cambrils and La Pineda are under twenty minutes away. Vans up to seven passengers and child seats on request for families.',
        },
      },
      {
        q: {
          fr: 'Peut-on organiser une journée dans le Priorat depuis Tarragone ?',
          en: 'Can you arrange a Priorat wine day from Tarragona?',
        },
        a: {
          fr: 'Absolument. Nous réservons deux ou trois domaines selon vos goûts — du Priorat ou du Montsant voisin —, votre chauffeur conduit sur les routes escarpées de la comarque et vous dégustez sans compter. Déjeuner au village compris dans l’itinéraire.',
          en: 'Absolutely. We book two or three estates to your taste — Priorat or neighbouring Montsant —, your chauffeur handles the comarca’s steep roads and you taste freely. A village lunch is built into the route.',
        },
      },
    ],
    nearby: ['barcelona', 'sitges', 'valencia'],
  },
  {
    slug: 'ibiza-town',
    name: { fr: 'Ibiza (ville)', en: 'Ibiza Town' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Ibiza (IBZ)',
    airportTransfer: {
      fr: 'L’aéroport d’Ibiza (IBZ) se trouve à 7 km au sud-ouest de la ville : comptez 10 à 15 minutes pour rejoindre le port ou les remparts de Dalt Vila. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Ibiza Airport (IBZ) lies 7 km south-west of the town: allow 10 to 15 minutes to reach the harbour or the Dalt Vila ramparts. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Derrière sa réputation de capitale mondiale de la nuit, Ibiza cache une acropole fortifiée classée UNESCO — Dalt Vila et ses remparts Renaissance —, un port où mouillent les plus beaux yachts de Méditerranée et une campagne d’amandiers et de fincas blanches. Votre **chauffeur privé à Ibiza** relie aéroport, villas, beach clubs et clubs mythiques — Pacha, Ushuaïa, Hï — de jour comme de nuit, à prix fixes.',
        'L’île se parcourt en une heure de bout en bout. **Es Vedrà**, le rocher magnétique du sud-ouest, se contemple depuis le mirador du Cap des Jueus ; les criques de Cala Comte et Cala d’Hort alignent leurs eaux turquoise ; Santa Gertrudis et le marché hippie de Las Dalias composent l’arrière-pays. En saison, la circulation devient dense : votre chauffeur anticipe chaque trajet.',
      ],
      en: [
        'Behind its reputation as the world’s nightlife capital, Ibiza hides a UNESCO-listed fortified acropolis — Dalt Vila and its Renaissance ramparts —, a harbour where the Mediterranean’s finest yachts moor, and a countryside of almond trees and white fincas. Your **private chauffeur in Ibiza** links airport, villas, beach clubs and the legendary clubs — Pacha, Ushuaïa, Hï — day and night, at fixed prices.',
        'The island crosses end to end in an hour. **Es Vedrà**, the magnetic rock of the south-west, is best admired from the Cap des Jueus viewpoint; Cala Comte and Cala d’Hort line up their turquoise waters; Santa Gertrudis and the Las Dalias hippy market shape the hinterland. In season traffic thickens: your chauffeur plans every journey ahead.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Es Vedrà et les criques du sud-ouest', en: 'Es Vedrà and the south-west coves' },
        teaser: {
          fr: 'Cala d’Hort face au rocher mythique, Cala Comte et ses eaux translucides, coucher de soleil au mirador. Une journée de criques avec chauffeur en attente à chaque étape.',
          en: 'Cala d’Hort facing the mythical rock, Cala Comte and its translucent waters, sunset at the viewpoint. A day of coves with your chauffeur on standby at every stop.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Dalt Vila et le port', en: 'Dalt Vila and the harbour' },
        teaser: {
          fr: 'Les remparts Renaissance classés UNESCO, la cathédrale et le musée d’art contemporain, puis les ruelles de la Marina et le marché aux poissons. Ibiza avant la fête.',
          en: 'The UNESCO-listed Renaissance ramparts, the cathedral and the contemporary art museum, then the Marina lanes and the fish market. Ibiza before the party.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Nord secret et marchés hippies', en: 'The secret north and hippy markets' },
        teaser: {
          fr: 'Santa Gertrudis et ses galeries, le marché de Las Dalias à San Carlos, la crique de Benirràs et ses tambours au couchant. L’Ibiza des origines, loin des clubs.',
          en: 'Santa Gertrudis and its galleries, the Las Dalias market in San Carlos, Benirràs cove and its sunset drums. The original Ibiza, far from the clubs.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Formentera depuis Ibiza', en: 'Formentera from Ibiza' },
        teaser: {
          fr: 'Dépose à l’embarcadère de Marina Botafoc ou du port, traversée vers Ses Illetes et ses eaux caribéennes, reprise au retour du ferry. La logistique insulaire sans friction.',
          en: 'Drop-off at the Marina Botafoc or harbour jetty, crossing to Ses Illetes and its Caribbean waters, pick-up when the ferry returns. Island logistics without friction.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '490',
      },
      {
        title: { fr: 'Nuit ibicenca', en: 'Ibiza night' },
        teaser: {
          fr: 'Dîner au Sublimotion ou dans une finca étoilée, puis Pacha, Ushuaïa ou Hï Ibiza. Votre chauffeur vous attend à la sortie, à 4 heures comme à l’aube : retour de villa garanti.',
          en: 'Dinner at Sublimotion or a starred finca, then Pacha, Ushuaïa or Hï Ibiza. Your chauffeur waits at the exit, at 4 a.m. or dawn: villa return guaranteed.',
        },
        duration: { fr: 'Soirée et nuit', en: 'Evening and night' },
        price: '590',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport d’Ibiza et une villa ou un hôtel ?',
          en: 'How much does a transfer between Ibiza Airport and a villa or hotel cost?',
        },
        a: {
          fr: 'Chaque zone de l’île fait l’objet d’un prix fixe communiqué avant la réservation : ville d’Ibiza en 15 minutes, Santa Eulària en 25, San Antonio en 25, le nord en 40. Accueil en salle d’arrivée et suivi du vol inclus, 24 h/24 en saison.',
          en: 'Each area of the island has a fixed price quoted before booking: Ibiza Town in 15 minutes, Santa Eulària 25, San Antonio 25, the north 40. Arrivals-hall meet-and-greet and flight tracking included, 24/7 in season.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les sorties de clubs au milieu de la nuit ?',
          en: 'Do you cover club pick-ups in the middle of the night?',
        },
        a: {
          fr: 'Oui, c’est le cœur de notre activité estivale : prise en charge devant Pacha, Ushuaïa, Hï ou Amnesia à l’heure convenue, ou mise à disposition complète pour enchaîner dîner, club et retour de villa sans attendre un taxi introuvable.',
          en: 'Yes, it is the heart of our summer business: pick-up outside Pacha, Ushuaïa, Hï or Amnesia at the agreed time, or full standby to link dinner, club and villa return without hunting for an impossible taxi.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Formentera dans la journée ?',
          en: 'Can Formentera be visited in a day?',
        },
        a: {
          fr: 'Oui : ferries fréquents depuis le port d’Ibiza, 30 minutes de traversée. Nous gérons la dépose à l’embarcadère, la réservation des billets via votre conciergerie et la reprise au retour ; sur Formentera même, un partenaire local peut prendre le relais.',
          en: 'Yes: frequent ferries from Ibiza harbour, a 30-minute crossing. We handle the jetty drop-off, ticket booking via your concierge and the return pick-up; on Formentera itself a local partner can take over.',
        },
      },
    ],
    nearby: ['palma-de-mallorca', 'valencia', 'barcelona'],
  },
  {
    slug: 'palma-de-mallorca',
    name: { fr: 'Palma de Majorque', en: 'Palma de Mallorca' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Palma de Majorque (PMI)',
    airportTransfer: {
      fr: 'L’aéroport de Palma de Majorque (PMI) se trouve à 8 km à l’est du centre : comptez 15 minutes pour rejoindre la cathédrale ou le Paseo Marítimo. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Palma de Mallorca Airport (PMI) lies 8 km east of the centre: allow 15 minutes to reach the cathedral or the Paseo Marítimo. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale des Baléares, Palma déploie sa cathédrale gothique face à la baie, les patios seigneuriaux de la vieille ville, le château de Bellver et une scène gastronomique et hôtelière parmi les plus dynamiques de Méditerranée. Votre **chauffeur privé à Palma** dessert l’aéroport le plus fréquenté des îles, les marinas — Puerto Portals, Port Adriano —, les villas de Son Vida et les hôtels du centre, à prix fixes.',
        'Majorque se révèle en voiture privée. **La Serra de Tramuntana**, classée UNESCO, aligne Valldemossa, Deià et Sóller sur sa route de corniche ; le cap de Formentor s’élance au nord, les vignobles de Binissalem au centre, les criques du sud-est en contrepoint. Votre chauffeur compose la journée — village, mirador, table réservée — pendant que vous profitez du paysage.',
      ],
      en: [
        'Capital of the Balearics, Palma sets its Gothic cathedral against the bay, with the noble patios of the old town, Bellver castle and one of the Mediterranean’s liveliest dining and hotel scenes. Your **private chauffeur in Palma** serves the islands’ busiest airport, the marinas — Puerto Portals, Port Adriano —, the Son Vida villas and the city-centre hotels, at fixed prices.',
        'Mallorca reveals itself by private car. **The UNESCO-listed Serra de Tramuntana** strings Valldemossa, Deià and Sóller along its corniche road; Cap de Formentor thrusts north, the Binissalem vineyards fill the centre, the south-east coves answer back. Your chauffeur shapes the day — village, viewpoint, booked table — while you enjoy the landscape.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Serra de Tramuntana : Valldemossa, Deià, Sóller', en: 'Serra de Tramuntana: Valldemossa, Deià, Sóller' },
        teaser: {
          fr: 'La chartreuse de Chopin et George Sand, le village d’artistes de Deià cher à Robert Graves, le port de Sóller et ses orangeraies. La corniche classée UNESCO en une journée.',
          en: 'Chopin and George Sand’s charterhouse, the artists’ village of Deià beloved of Robert Graves, Port de Sóller and its orange groves. The UNESCO corniche in a day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Cap de Formentor et Pollença', en: 'Cap de Formentor and Pollença' },
        teaser: {
          fr: 'Le mirador Es Colomer suspendu au-dessus des falaises, le phare du bout de l’île, puis la vieille ville de Pollença et son calvaire aux 365 marches. Baignade à Formentor.',
          en: 'The Es Colomer viewpoint hanging above the cliffs, the lighthouse at the island’s tip, then Pollença old town and its 365-step calvary. A swim at Formentor beach.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Vignobles de Binissalem', en: 'Binissalem vineyards' },
        teaser: {
          fr: 'Les domaines de la première appellation des Baléares — manto negro et callet en cépages rois — entre Binissalem et Santa Maria del Camí. Dégustations et déjeuner de finca.',
          en: 'The estates of the Balearics’ first appellation — Manto Negro and Callet as king grapes — between Binissalem and Santa Maria del Camí. Tastings and a finca lunch.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '490',
      },
      {
        title: { fr: 'Criques du sud-est et Es Trenc', en: 'South-east coves and Es Trenc' },
        teaser: {
          fr: 'Es Trenc et ses eaux caribéennes, la Cala Pi encaissée, le cap de Ses Salines au bout de l’île. Journée de plages avec chauffeur en attente, parasol et table réservés.',
          en: 'Es Trenc and its Caribbean waters, the narrow Cala Pi, Cap de Ses Salines at the island’s end. A beach day with your chauffeur on standby, parasol and table booked.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Soirée palmesane', en: 'Palma evening' },
        teaser: {
          fr: 'Dîner chez Marc Fosh ou dans les ruelles de Santa Catalina, puis la cathédrale illuminée depuis le Parc de la Mar et les terrasses du Paseo Marítimo. Véhicule en attente.',
          en: 'Dinner at Marc Fosh or in the lanes of Santa Catalina, then the illuminated cathedral from the Parc de la Mar and the Paseo Marítimo terraces. Vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Palma et le centre ou les stations de l’île ?',
          en: 'How much does a transfer between Palma Airport and the centre or the island’s resorts cost?',
        },
        a: {
          fr: 'Chaque destination fait l’objet d’un prix fixe : le centre de Palma en 15 minutes, Puerto Portals en 25, Port d’Andratx en 40, Pollença en 50. Accueil en salle d’arrivée, suivi du vol et attente offerte inclus, 24 h/24 en saison.',
          en: 'Each destination has a fixed price: central Palma in 15 minutes, Puerto Portals 25, Port d’Andratx 40, Pollença 50. Arrivals-hall meet-and-greet, flight tracking and complimentary waiting included, 24/7 in season.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition à la journée pour découvrir Majorque ?',
          en: 'Do you offer full-day hire to explore Mallorca?',
        },
        a: {
          fr: 'Oui, c’est la formule idéale sur l’île : huit heures et un itinéraire composé avec vous — Tramuntana, Formentor, criques ou vignobles —, modifiable en cours de route, avec tables et visites réservées via votre conciergerie.',
          en: 'Yes, it is the ideal formula on the island: eight hours and an itinerary built with you — Tramuntana, Formentor, coves or vineyards —, adjustable en route, with tables and visits booked via your concierge.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous les marinas et les départs de yacht ?',
          en: 'Do you serve the marinas and yacht departures?',
        },
        a: {
          fr: 'Quotidiennement : Puerto Portals, Port Adriano, le Club de Mar et la vieille darse de Palma. Votre chauffeur coordonne l’horaire avec votre équipage et gère bagages et avitaillement de dernière minute.',
          en: 'Daily: Puerto Portals, Port Adriano, the Club de Mar and Palma’s old dock. Your chauffeur coordinates timing with your crew and handles luggage and last-minute provisioning.',
        },
      },
    ],
    nearby: ['ibiza-town', 'barcelona', 'valencia'],
  },
  {
    slug: 'tenerife-sur',
    name: { fr: 'Tenerife Sud', en: 'Tenerife South' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Tenerife Sur (TFS)',
    airportTransfer: {
      fr: 'L’aéroport de Tenerife Sur (TFS) se trouve à 20 km à l’est de Costa Adeje : comptez 20 minutes par la TF-1 pour rejoindre les hôtels de Playa de las Américas ou du Duque. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Tenerife South Airport (TFS) lies 20 km east of Costa Adeje: allow 20 minutes on the TF-1 to reach the hotels of Playa de las Américas or El Duque. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Sur la côte la plus ensoleillée des Canaries, Tenerife Sud aligne les grands resorts de Costa Adeje, la plage du Duque et les marinas de départ vers les cétacés, sous la silhouette du Teide, plus haut sommet d’Espagne. Votre **chauffeur privé à Tenerife Sud** relie l’aéroport TFS, les hôtels cinq étoiles de la côte et les villas d’Abama ou de La Caleta, en berline ou van climatisé, à prix fixes.',
        'L’île se vit en contrastes. **Le parc national du Teide** et ses paysages lunaires culminent à 3 715 mètres, le village suspendu de Masca se mérite au bout de ses lacets, La Laguna la coloniale — classée UNESCO — et Garachico composent le nord. En une journée de mise à disposition, votre chauffeur fait passer votre programme du niveau de la mer au toit de l’Atlantique.',
      ],
      en: [
        'On the sunniest coast of the Canaries, Tenerife South lines up the great Costa Adeje resorts, El Duque beach and the whale-watching marinas, beneath the silhouette of Mount Teide, Spain’s highest peak. Your **private chauffeur in Tenerife South** links TFS airport, the coast’s five-star hotels and the villas of Abama or La Caleta, in an air-conditioned sedan or van, at fixed prices.',
        'The island lives on contrasts. **Teide National Park** and its lunar landscapes rise to 3,715 metres, the hanging village of Masca is earned at the end of its hairpins, colonial La Laguna — UNESCO-listed — and Garachico shape the north. In one full-day hire, your chauffeur takes your programme from sea level to the roof of the Atlantic.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Parc national du Teide', en: 'Teide National Park' },
        teaser: {
          fr: 'Montée par Vilaflor et la forêt de pins, les coulées de lave des Cañadas, le téléphérique vers le sommet (réservation conseillée) et les roques de García. L’Espagne à 3 715 mètres.',
          en: 'Up through Vilaflor and the pine forest, the lava fields of Las Cañadas, the cable car towards the summit (booking advised) and the Roques de García. Spain at 3,715 metres.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Masca et les falaises de Los Gigantes', en: 'Masca and the Los Gigantes cliffs' },
        teaser: {
          fr: 'Le hameau de Masca accroché à son ravin, les lacets du massif de Teno, puis les falaises de 600 mètres de Los Gigantes depuis le mirador ou en bateau.',
          en: 'The hamlet of Masca clinging to its ravine, the Teno massif hairpins, then the 600-metre Los Gigantes cliffs from the viewpoint or by boat.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'La Laguna et le nord colonial', en: 'La Laguna and the colonial north' },
        teaser: {
          fr: 'La Laguna, première ville universitaire des Canaries classée UNESCO, La Orotava et ses balcons de bois, Garachico et ses piscines de lave. L’autre Tenerife, verte et historique.',
          en: 'UNESCO-listed La Laguna, the Canaries’ first university town, La Orotava and its wooden balconies, Garachico and its lava pools. The other Tenerife, green and historic.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Baleines et dauphins depuis Puerto Colón', en: 'Whales and dolphins from Puerto Colón' },
        teaser: {
          fr: 'Dépose à la marina, sortie en mer à la rencontre des globicéphales résidents du canal Tenerife-La Gomera, reprise au débarcadère. L’un des meilleurs spots d’Europe.',
          en: 'Drop-off at the marina, a sea trip to meet the resident pilot whales of the Tenerife-La Gomera channel, pick-up at the jetty. One of Europe’s best whale-watching spots.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Soirée à Costa Adeje', en: 'Costa Adeje evening' },
        teaser: {
          fr: 'Dîner dans les restaurants gastronomiques des hôtels du Duque ou au village de pêcheurs de La Caleta, puis les terrasses face à La Gomera au couchant. Véhicule en attente.',
          en: 'Dinner at the gourmet restaurants of the El Duque hotels or in the fishing village of La Caleta, then sunset terraces facing La Gomera. Vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Tenerife Sud et Costa Adeje ?',
          en: 'How much does a transfer between Tenerife South Airport and Costa Adeje cost?',
        },
        a: {
          fr: 'Le transfert privé entre TFS et Costa Adeje ou Playa de las Américas — 20 minutes par la TF-1 — est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée, suivi du vol et sièges enfants sur demande.',
          en: 'A private transfer between TFS and Costa Adeje or Playa de las Américas — 20 minutes on the TF-1 — is charged at a fixed price confirmed at booking. Arrivals-hall meet-and-greet, flight tracking and child seats on request.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous aussi l’aéroport de Tenerife Nord ?',
          en: 'Do you also serve Tenerife North Airport?',
        },
        a: {
          fr: 'Oui. Tenerife Norte (TFN), près de La Laguna, reçoit l’essentiel des vols inter-îles et certaines liaisons avec la péninsule : comptez 1 h 10 jusqu’à Costa Adeje, à prix fixe, autoroute TF-5 puis TF-1.',
          en: 'Yes. Tenerife North (TFN), near La Laguna, handles most inter-island flights and some mainland routes: allow 1 h 10 to Costa Adeje at a fixed price, via the TF-5 then TF-1 motorways.',
        },
      },
      {
        q: {
          fr: 'Peut-on monter au Teide avec un chauffeur privé ?',
          en: 'Can I visit Mount Teide with a private chauffeur?',
        },
        a: {
          fr: 'Oui, la route du parc national est ouverte toute l’année. Votre chauffeur vous dépose au téléphérique — billets à réserver à l’avance, l’ascension finale au cratère exige un permis gratuit — et adapte l’itinéraire à la météo d’altitude.',
          en: 'Yes, the national park road is open year-round. Your chauffeur drops you at the cable car — book tickets ahead; the final crater climb requires a free permit — and adapts the route to mountain weather.',
        },
      },
    ],
    nearby: ['palma-de-mallorca', 'ibiza-town'],
  },
  {
    slug: 'valladolid',
    name: { fr: 'Valladolid', en: 'Valladolid' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Valladolid (VLL)',
    airportTransfer: {
      fr: 'L’aéroport de Valladolid (VLL) se trouve à 12 km au nord-ouest du centre : comptez 15 à 20 minutes pour rejoindre la plaza Mayor. Madrid-Barajas (MAD, 200 km, ou 1 h 05 d’AVE) concentre les liaisons internationales. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Valladolid Airport (VLL) lies 12 km north-west of the centre: allow 15 to 20 minutes to reach the Plaza Mayor. Madrid-Barajas (MAD, 200 km, or 1 h 05 by AVE) carries the international routes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ancienne capitale de l’empire espagnol, Valladolid garde de son siècle d’or la plaza Mayor — première place fermée d’Espagne —, le Musée national de la sculpture au collège San Gregorio et la maison où mourut Christophe Colomb. Votre **chauffeur privé à Valladolid** dessert la gare AVE, la Feria de Valladolid et les tables d’une ville réputée pour ses tapas primées, à prix fixes annoncés à l’avance.',
        'Valladolid est surtout la capitale des grands vins de Castille. **La Ribera del Duero** aligne ses bodegas — Vega Sicilia en étendard — à 40 minutes vers l’est, Rueda et ses verdejos à 30 minutes au sud, Peñafiel et son château-musée du vin en vigie. Votre chauffeur enchaîne domaines, châteaux et villages du Duero pendant que vous dégustez sans compter.',
      ],
      en: [
        'Former capital of the Spanish empire, Valladolid keeps from its golden age the Plaza Mayor — Spain’s first enclosed square —, the National Sculpture Museum in the San Gregorio college and the house where Christopher Columbus died. Your **private chauffeur in Valladolid** serves the AVE station, the Feria de Valladolid and the tables of a city famed for its prize-winning tapas, at fixed prices confirmed in advance.',
        'Above all, Valladolid is the capital of Castile’s great wines. **The Ribera del Duero** lines up its bodegas — Vega Sicilia as the standard-bearer — 40 minutes east, Rueda and its Verdejos 30 minutes south, with Peñafiel and its castle wine museum standing watch. Your chauffeur strings together Duero estates, castles and villages while you taste freely.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Ribera del Duero, bodegas mythiques', en: 'Ribera del Duero, legendary bodegas' },
        teaser: {
          fr: 'De Peñafiel à Roa, deux ou trois domaines réservés selon vos goûts — grands noms ou vignerons confidentiels —, déjeuner d’agneau rôti au feu de bois dans un asador de village.',
          en: 'From Peñafiel to Roa, two or three estates booked to your taste — great names or confidential growers —, with a wood-fired roast lamb lunch in a village asador.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Peñafiel, château et musée du vin', en: 'Peñafiel castle and wine museum' },
        teaser: {
          fr: 'La forteresse-navire sur sa crête, le musée provincial du vin dans ses murs et la plaza del Coso où l’on toréait au Moyen Âge. La vigie de la Ribera en demi-journée.',
          en: 'The ship-like fortress on its ridge, the provincial wine museum within its walls and the Plaza del Coso, a medieval bullfighting square. The Ribera’s watchtower in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Rueda et Medina del Campo', en: 'Rueda and Medina del Campo' },
        teaser: {
          fr: 'Les caves souterraines de l’appellation Rueda et ses verdejos ciselés, puis le château de la Mota à Medina del Campo, où mourut Isabelle la Catholique.',
          en: 'The underground cellars of the Rueda appellation and its chiselled Verdejos, then La Mota castle at Medina del Campo, where Isabella the Catholic died.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Valladolid du siècle d’or', en: 'Golden-age Valladolid' },
        teaser: {
          fr: 'Le Musée national de la sculpture et ses retables polychromes, la maison de Cervantès, la cathédrale d’Herrera et le passage des pénitents en Semaine sainte.',
          en: 'The National Sculpture Museum and its polychrome altarpieces, Cervantes’ house, Herrera’s cathedral and the penitents’ route of Holy Week.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Soirée tapas sur la plaza Mayor', en: 'Tapas evening on the Plaza Mayor' },
        teaser: {
          fr: 'Le circuit des bars primés au concours national du pincho — Villa Paramesa, Los Zagales —, puis la plaza Mayor illuminée. Véhicule en attente toute la soirée.',
          en: 'A circuit of bars garlanded at the national pincho championship — Villa Paramesa, Los Zagales — then the illuminated Plaza Mayor. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Comment rejoindre Valladolid depuis Madrid ?',
          en: 'How do I reach Valladolid from Madrid?',
        },
        a: {
          fr: 'L’AVE relie Madrid-Chamartín à Valladolid en 1 h 05 ; nous vous attendons en gare avec panneau nominatif. En voiture privée, comptez deux heures depuis Barajas par l’A-6 et l’AP-6, à prix fixe, péages inclus.',
          en: 'The AVE links Madrid-Chamartín to Valladolid in 1 h 05; we wait at the station with a name board. By private car, allow two hours from Barajas via the A-6 and AP-6, at a fixed price, tolls included.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter la Ribera del Duero et Rueda dans la même journée ?',
          en: 'Can the Ribera del Duero and Rueda be combined in one day?',
        },
        a: {
          fr: 'C’est possible — les deux appellations encadrent Valladolid — mais nous recommandons une journée par rive : deux ou trois bodegas se dégustent mieux qu’une course contre la montre. Votre chauffeur construit le programme avec vous.',
          en: 'It is possible — the two appellations flank Valladolid — but we recommend a day per bank: two or three bodegas are better savoured than raced through. Your chauffeur builds the programme with you.',
        },
      },
      {
        q: {
          fr: 'Vega Sicilia se visite-t-elle ?',
          en: 'Can Vega Sicilia be visited?',
        },
        a: {
          fr: 'Les visites y sont rares et réservées de longue date, souvent aux clients de la maison. Nous coordonnons la demande avec votre conciergerie et, à défaut, composons un itinéraire de domaines d’exception ouverts à la visite — Abadía Retuerta, Protos, Arzuaga.',
          en: 'Visits are rare and booked far ahead, often for the house’s clients. We coordinate the request with your concierge and, failing that, build a route of exceptional estates open to visitors — Abadía Retuerta, Protos, Arzuaga.',
        },
      },
    ],
    nearby: ['burgos', 'salamanca', 'segovia', 'madrid'],
  },
  {
    slug: 'burgos',
    name: { fr: 'Burgos', en: 'Burgos' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Bilbao (BIO)',
    airportTransfer: {
      fr: 'Burgos est desservie principalement par l’aéroport de Bilbao (BIO), à 160 km au nord : comptez 1 h 40 par l’AP-68 et l’AP-1 jusqu’à la cathédrale. Madrid-Barajas (MAD, 240 km) est l’alternative sud. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Burgos is mainly served by Bilbao Airport (BIO), 160 km to the north: allow 1 h 40 via the AP-68 and AP-1 to the cathedral. Madrid-Barajas (MAD, 240 km) is the southern alternative. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale historique de la Vieille-Castille et patrie du Cid, Burgos s’ordonne autour de sa cathédrale gothique classée UNESCO — flèches ajourées, chapelle du Connétable, tombeau du Campeador — sur le chemin français de Compostelle. Votre **chauffeur privé à Burgos** assure les liaisons depuis Bilbao ou Madrid, les étapes du Camino et les mises à disposition pour explorer la province à votre rythme.',
        'Autour de Burgos, l’histoire s’empile. **Atapuerca**, où furent découverts les plus anciens Européens, se visite à vingt minutes ; la chartreuse de Miraflores et le monastère de las Huelgas gardent les tombeaux royaux ; Lerma la ducale et Covarrubias ouvrent la route de l’Arlanza. Au sud, la Ribera del Duero burgalaise — Roa, La Horra — complète la journée d’un verre de grand vin.',
      ],
      en: [
        'Historic capital of Old Castile and homeland of El Cid, Burgos is ordered around its UNESCO-listed Gothic cathedral — openwork spires, the Constable’s chapel, the Campeador’s tomb — on the French Way to Compostela. Your **private chauffeur in Burgos** covers links from Bilbao or Madrid, Camino stages and hourly hire to explore the province at your pace.',
        'Around Burgos, history stacks up. **Atapuerca**, where the oldest Europeans were unearthed, is twenty minutes away; the Miraflores charterhouse and Las Huelgas monastery keep the royal tombs; ducal Lerma and Covarrubias open the Arlanza road. To the south, the Burgos side of the Ribera del Duero — Roa, La Horra — rounds off the day with a glass of great wine.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Cathédrale et Burgos monumental', en: 'The cathedral and monumental Burgos' },
        teaser: {
          fr: 'La troisième cathédrale d’Espagne dans ses moindres chapelles, l’arc de Santa María, le castillo en surplomb et la promenade de l’Espolón. Le gothique castillan à son sommet.',
          en: 'Spain’s third great cathedral chapel by chapel, the Santa María arch, the hilltop castle and the Espolón promenade. Castilian Gothic at its peak.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Atapuerca, berceau de l’Europe', en: 'Atapuerca, cradle of Europe' },
        teaser: {
          fr: 'Les gisements classés UNESCO où dorment Homo antecessor et les crânes de la Sima de los Huesos, puis le Musée de l’évolution humaine à Burgos. Un million d’années en une journée.',
          en: 'The UNESCO-listed digs that yielded Homo antecessor and the Sima de los Huesos skulls, then the Museum of Human Evolution in Burgos. A million years in a day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Lerma, Covarrubias et Santo Domingo de Silos', en: 'Lerma, Covarrubias and Santo Domingo de Silos' },
        teaser: {
          fr: 'Le triangle de l’Arlanza : la place ducale de Lerma, les maisons à colombages de Covarrubias et les vêpres grégoriennes du cloître roman de Silos.',
          en: 'The Arlanza triangle: Lerma’s ducal square, the half-timbered houses of Covarrubias and Gregorian vespers in the Romanesque cloister of Silos.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Ribera del Duero burgalaise', en: 'The Burgos Ribera del Duero' },
        teaser: {
          fr: 'Roa, La Horra et Gumiel de Izán : caves souterraines, domaines familiaux et grands tintos de la rive nord. Dégustations commentées, déjeuner d’asador, retour sans volant.',
          en: 'Roa, La Horra and Gumiel de Izán: underground cellars, family estates and the great tintos of the north bank. Guided tastings, an asador lunch, no driving for you.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Soirée burgalaise', en: 'Burgos evening' },
        teaser: {
          fr: 'Morcilla de Burgos et lechazo dans les mesones de la calle Sombrerería, puis la cathédrale illuminée depuis le mirador du castillo. Véhicule en attente toute la soirée.',
          en: 'Burgos morcilla and roast lamb in the mesones of Calle Sombrerería, then the illuminated cathedral from the castle viewpoint. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Comment rejoindre Burgos depuis Bilbao ou Madrid ?',
          en: 'How do I reach Burgos from Bilbao or Madrid?',
        },
        a: {
          fr: 'Depuis Bilbao (BIO), comptez 1 h 40 par l’AP-68 et l’AP-1 ; depuis Madrid-Barajas, 2 h 20 par l’A-1. Les deux transferts sont facturés à prix fixe, péages inclus, avec arrêts possibles en route.',
          en: 'From Bilbao (BIO), allow 1 h 40 via the AP-68 and AP-1; from Madrid-Barajas, 2 h 20 via the A-1. Both transfers are charged at fixed prices, tolls included, with stops possible en route.',
        },
      },
      {
        q: {
          fr: 'Burgos est-elle une bonne étape sur la route Madrid-Bilbao ou du Camino ?',
          en: 'Is Burgos a good stop between Madrid and Bilbao or on the Camino?',
        },
        a: {
          fr: 'Excellente : la ville coupe naturellement la route Madrid-Bilbao et constitue l’une des plus belles étapes du Camino francés. Nous organisons l’arrêt de quelques heures — cathédrale et déjeuner — bagages à bord, avant de reprendre la route.',
          en: 'Excellent: the city naturally breaks the Madrid-Bilbao run and is one of the French Way’s finest stages. We arrange a stop of a few hours — cathedral and lunch — luggage on board, before continuing the journey.',
        },
      },
      {
        q: {
          fr: 'Peut-on assister aux chants grégoriens de Silos ?',
          en: 'Can I attend the Gregorian chant at Silos?',
        },
        a: {
          fr: 'Oui, les moines de Santo Domingo de Silos chantent les offices plusieurs fois par jour, vêpres en fin d’après-midi notamment. Votre chauffeur cale l’itinéraire de la journée sur l’horaire des offices, à 55 minutes de Burgos.',
          en: 'Yes, the monks of Santo Domingo de Silos sing the offices several times daily, notably vespers in late afternoon. Your chauffeur times the day’s route to the office schedule, 55 minutes from Burgos.',
        },
      },
    ],
    nearby: ['valladolid', 'bilbao', 'pamplona'],
  },
  {
    slug: 'pamplona',
    name: { fr: 'Pampelune', en: 'Pamplona' },
    country: { fr: 'Espagne', en: 'Spain' },
    region: 'iberia',
    airport: 'Pampelune (PNA)',
    airportTransfer: {
      fr: 'L’aéroport de Pampelune (PNA), à Noáin, se trouve à 6 km au sud du centre : comptez 15 minutes pour rejoindre la plaza del Castillo. Bilbao (BIO, 160 km) reste l’alternative internationale. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Pamplona Airport (PNA) at Noáin lies 6 km south of the centre: allow 15 minutes to reach Plaza del Castillo. Bilbao (BIO, 160 km) is the international alternative. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de la Navarre immortalisée par Hemingway, Pampelune conjugue la citadelle Renaissance et ses glacis devenus parcs, la cathédrale et son cloître gothique parmi les plus beaux d’Europe, et la plaza del Castillo bordée de cafés centenaires. Votre **chauffeur privé à Pampelune** dessert l’aéroport de Noáin, les cliniques universitaires renommées de la ville et les étapes du Camino francés, à prix fixes.',
        'Du 6 au 14 juillet, **les Sanfermines** et leurs encierros transforment la ville — une logistique que nous préparons des semaines à l’avance. Le reste de l’année, la Navarre s’ouvre en éventail : vignobles et château d’Olite au sud, vallée du Baztan et forêts d’Irati au nord, désert des Bardenas Reales aux portes de la Ribera. Votre chauffeur compose chaque journée avec vous.',
      ],
      en: [
        'Capital of Navarre immortalised by Hemingway, Pamplona pairs its Renaissance citadel and park-turned glacis, a cathedral whose Gothic cloister ranks among Europe’s finest, and the Plaza del Castillo lined with century-old cafés. Your **private chauffeur in Pamplona** serves Noáin airport, the city’s renowned university clinics and the stages of the French Way, at fixed prices.',
        'From 6 to 14 July, **the Sanfermines** and their bull runs transform the city — logistics we prepare weeks in advance. The rest of the year, Navarre fans out: vineyards and the castle of Olite to the south, the Baztan valley and Irati forests to the north, the Bardenas Reales desert at the gates of the Ribera. Your chauffeur shapes each day with you.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Olite et les vignobles de Navarre', en: 'Olite and the Navarre vineyards' },
        teaser: {
          fr: 'Le palais royal d’Olite, conte de fées gothique des rois de Navarre, puis deux domaines de l’appellation — garnachas et rosés de référence — et déjeuner vigneron.',
          en: 'The royal palace of Olite, Gothic fairy tale of Navarre’s kings, then two estates of the appellation — benchmark Garnachas and rosés — and a winegrower’s lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Bardenas Reales', en: 'Bardenas Reales' },
        teaser: {
          fr: 'À une heure au sud, le désert classé réserve de biosphère : cheminées de fée de Castildetierra, pistes blanches et ravins ocre. Un décor de western aux portes de la Navarre.',
          en: 'An hour south, the biosphere-reserve desert: the Castildetierra hoodoo, white tracks and ochre ravines. A western film set at the gates of Navarre.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Vallée du Baztan et Elizondo', en: 'The Baztan valley and Elizondo' },
        teaser: {
          fr: 'Les caseríos blancs d’Elizondo, les grottes de Zugarramurdi et leurs sorcières, le col d’Otsondo vers la France. La Navarre atlantique, verte et légendaire.',
          en: 'The white farmhouses of Elizondo, the witch caves of Zugarramurdi, the Otsondo pass towards France. Atlantic Navarre, green and steeped in legend.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Sur les pas des Sanfermines', en: 'In the footsteps of the Sanfermines' },
        teaser: {
          fr: 'Le parcours de l’encierro de Santo Domingo aux arènes, la plaza del Castillo et le café Iruña d’Hemingway, puis la citadelle. Pampelune hors fièvre de juillet.',
          en: 'The bull-run route from Santo Domingo to the bullring, Plaza del Castillo and Hemingway’s Café Iruña, then the citadel. Pamplona without the July fever.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Soirée navarraise', en: 'Navarre evening' },
        teaser: {
          fr: 'Pintxos de la calle Estafeta ou dîner chez Rodero, étoilé discret, puis les remparts illuminés depuis le mirador du Caballo Blanco. Véhicule en attente toute la soirée.',
          en: 'Pintxos on Calle Estafeta or dinner at the quietly starred Rodero, then the illuminated ramparts from the Caballo Blanco viewpoint. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Pampelune et le centre-ville ?',
          en: 'How much does a transfer between Pamplona Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Noáin (PNA) et le centre est facturé à prix fixe, confirmé à la réservation, accueil et suivi du vol inclus. Nous assurons aussi Bilbao, Saint-Sébastien et Biarritz, à 1 h 30 environ.',
          en: 'A private transfer between Noáin (PNA) and the centre is charged at a fixed price confirmed at booking, meet-and-greet and flight tracking included. We also cover Bilbao, San Sebastián and Biarritz, about 1 h 30 away.',
        },
      },
      {
        q: {
          fr: 'Comment cela se passe-t-il pendant les Sanfermines ?',
          en: 'How does it work during the Sanfermines?',
        },
        a: {
          fr: 'Du 6 au 14 juillet, le centre est fermé à la circulation et la demande explose : réservez plusieurs semaines à l’avance. Votre chauffeur utilise les points de dépose extérieurs au casco viejo et assure les retours à toute heure, encierro du matin compris.',
          en: 'From 6 to 14 July the centre closes to traffic and demand soars: book several weeks ahead. Your chauffeur uses drop-off points outside the casco viejo and covers returns at any hour, including the morning encierro.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers la Clínica Universidad de Navarra ?',
          en: 'Do you provide transfers to the Clínica Universidad de Navarra?',
        },
        a: {
          fr: 'Oui, quotidiennement et en toute discrétion : prise en charge à l’aéroport de Pampelune, de Bilbao ou de Madrid, accompagnement jusqu’à l’accueil de la clinique et trajets réguliers pendant toute la durée du traitement si nécessaire.',
          en: 'Yes, daily and with full discretion: pick-up at Pamplona, Bilbao or Madrid airports, escort to the clinic reception and regular journeys throughout treatment if needed.',
        },
      },
    ],
    nearby: ['san-sebastian', 'bilbao', 'zaragoza'],
  },
  {
    slug: 'lisbon',
    name: { fr: 'Lisbonne', en: 'Lisbon' },
    country: { fr: 'Portugal', en: 'Portugal' },
    region: 'iberia',
    airport: 'Humberto Delgado (LIS)',
    airportTransfer: {
      fr: 'L’aéroport Humberto Delgado (LIS) se trouve à 7 km au nord du centre : comptez 15 à 25 minutes pour rejoindre le Chiado, le Bairro Alto ou Belém selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Humberto Delgado Airport (LIS) lies 7 km north of the centre: allow 15 to 25 minutes to reach the Chiado, the Bairro Alto or Belém depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Bâtie sur sept collines au bord du Tage, Lisbonne mêle azulejos, tramways jaunes et miradouros ouverts sur l’estuaire. Votre **chauffeur privé à Lisbonne** connaît les ruelles pentues de l’Alfama, les accès à Belém et les tables de l’Avenida da Liberdade : transferts aéroport, mise à disposition à l’heure, dépose au plus près des sites piétonniers. Berlines Mercedes et vans, prix fixes annoncés à l’avance, chauffeurs anglophones sur demande.',
        'Lisbonne est aussi la porte des grandes escapades de l’Estrémadure. **Sintra et ses palais**, Cascais et la côte de l’Estoril, le cap de Roca — point le plus à l’ouest de l’Europe continentale — se rejoignent en moins d’une heure. En mise à disposition à la journée, votre chauffeur relie sanctuaire de Fátima, domaines viticoles de la région de Colares et dîners de fado sans que vous perdiez de temps dans la circulation de la capitale.',
      ],
      en: [
        'Built on seven hills above the Tagus, Lisbon blends azulejo tiles, yellow trams and miradouros opening onto the estuary. Your **private chauffeur in Lisbon** knows the steep lanes of the Alfama, the approaches to Belém and the restaurants of the Avenida da Liberdade: airport transfers, hourly hire, drop-offs as close as possible to pedestrian sites. Mercedes sedans and vans, fixed prices confirmed in advance, English-speaking chauffeurs on request.',
        'Lisbon is also the gateway to the great Estremadura excursions. **Sintra and its palaces**, Cascais and the Estoril coast, Cabo da Roca — the westernmost point of continental Europe — are all less than an hour away. With a full-day hire, your chauffeur links the sanctuary of Fátima, the Colares wine estates and evenings of fado without you losing time in the capital’s traffic.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Sintra, palais et Quinta da Regaleira', en: 'Sintra, palaces and Quinta da Regaleira' },
        teaser: {
          fr: 'À 30 km à l’ouest de Lisbonne, la montagne romantique classée UNESCO : le palais de la Pena, la Quinta da Regaleira et son puits initiatique, le cap de Roca face à l’Atlantique. Déjeuner à Sintra avant le retour.',
          en: '30 km west of Lisbon, the UNESCO-listed romantic hills: the Pena Palace, the Quinta da Regaleira with its initiation well, Cabo da Roca facing the Atlantic. Lunch in Sintra before the return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Belém et le Lisbonne des Découvertes', en: 'Belém and the Lisbon of the Discoveries' },
        teaser: {
          fr: 'Le monastère des Hiéronymites, la tour de Belém, le monument aux Découvertes et une pause pastéis de nata chez Pastéis de Belém. Dépose devant chaque site, véhicule en attente.',
          en: 'The Jerónimos Monastery, the Belém Tower, the Monument to the Discoveries and a pastéis de nata break at Pastéis de Belém. Door-to-door drop-offs, vehicle on standby.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Fátima et les monastères', en: 'Fátima and the monasteries' },
        teaser: {
          fr: 'À 130 km au nord, le sanctuaire de Fátima, puis les monastères gothiques de Batalha et d’Alcobaça, classés UNESCO. Retour possible par le village médiéval d’Óbidos.',
          en: '130 km north, the sanctuary of Fátima, then the UNESCO-listed Gothic monasteries of Batalha and Alcobaça. Optional return via the medieval village of Óbidos.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Cascais et la côte de l’Estoril', en: 'Cascais and the Estoril coast' },
        teaser: {
          fr: 'La corniche de la Marginal jusqu’à Cascais, la plage sauvage du Guincho, la bouche de l’Enfer. Déjeuner de poisson face à l’océan avant le retour par la serra de Sintra.',
          en: 'The Marginal coast road to Cascais, the wild Guincho beach, the Boca do Inferno. A seafood lunch facing the ocean before returning through the Sintra hills.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Soirée fado et miradouros', en: 'Fado evening and miradouros' },
        teaser: {
          fr: 'Les belvédères de l’Alfama à la tombée du jour, dîner-spectacle de fado dans une casa typique, puis le pont du 25-Avril illuminé. Véhicule à disposition toute la soirée.',
          en: 'The Alfama viewpoints at dusk, a fado dinner-show in a traditional casa, then the illuminated 25 de Abril Bridge. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Lisbonne et le centre-ville ?',
          en: 'How much does a transfer between Lisbon Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport Humberto Delgado (LIS) et le centre de Lisbonne est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Humberto Delgado Airport (LIS) and central Lisbon is charged at a fixed price, confirmed at booking. It includes a meet-and-greet with a name board, flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Sintra à la journée avec un chauffeur privé ?',
          en: 'Can Sintra be visited on a day trip with a private chauffeur?',
        },
        a: {
          fr: 'Oui. Sintra est à 30 km de Lisbonne ; en mise à disposition à la journée, votre chauffeur vous dépose au plus près du palais de la Pena et de la Quinta da Regaleira, vous attend sur place et prolonge volontiers vers Cascais ou le cap de Roca.',
          en: 'Yes. Sintra is 30 km from Lisbon; with a full-day hire, your chauffeur drops you as close as possible to the Pena Palace and the Quinta da Regaleira, waits on site and gladly extends to Cascais or Cabo da Roca.',
        },
      },
      {
        q: {
          fr: 'Vos chauffeurs à Lisbonne parlent-ils anglais ?',
          en: 'Do your chauffeurs in Lisbon speak English?',
        },
        a: {
          fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande à la réservation, ainsi que d’autres langues selon les disponibilités. Précisez votre préférence lors de la commande.',
          en: 'Yes, English-speaking chauffeurs are available on request at booking, along with other languages subject to availability. Please state your preference when ordering.',
        },
      },
    ],
    nearby: ['sintra', 'cascais', 'evora', 'obidos'],
  },
  {
    slug: 'porto',
    name: { fr: 'Porto', en: 'Porto' },
    country: { fr: 'Portugal', en: 'Portugal' },
    region: 'iberia',
    airport: 'Francisco Sá Carneiro (OPO)',
    airportTransfer: {
      fr: 'L’aéroport Francisco Sá Carneiro (OPO) se situe à 11 km au nord-ouest du centre : comptez 20 à 30 minutes pour rejoindre la Ribeira ou l’Avenida dos Aliados selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Francisco Sá Carneiro Airport (OPO) lies 11 km north-west of the centre: allow 20 to 30 minutes to reach the Ribeira or the Avenida dos Aliados depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Accrochée aux rives escarpées du Douro, Porto aligne façades d’azulejos, ponts de fer et chais de vin de Porto à Vila Nova de Gaia. Votre **chauffeur privé à Porto** connaît les ruelles pentues de la Ribeira, les accès aux caves et les tables de la Foz : transferts aéroport, mise à disposition à l’heure, dépose au plus près des sites piétonniers. Berlines Mercedes et vans, prix fixes annoncés à l’avance, chauffeurs anglophones sur demande.',
        'Porto est aussi le point de départ de la **vallée du Douro**, premier vignoble délimité au monde, dont les terrasses classées UNESCO s’étagent à une heure de route. Braga et Guimarães, berceau de la nation, complètent l’itinéraire au nord. En mise à disposition à la journée, votre chauffeur enchaîne quintas, dégustations et déjeuners au bord du fleuve pendant que vous profitez du paysage.',
      ],
      en: [
        'Clinging to the steep banks of the Douro, Porto lines up azulejo façades, iron bridges and port-wine cellars in Vila Nova de Gaia. Your **private chauffeur in Porto** knows the steep lanes of the Ribeira, the approaches to the cellars and the restaurants of Foz: airport transfers, hourly hire, drop-offs as close as possible to pedestrian sites. Mercedes sedans and vans, fixed prices confirmed in advance, English-speaking chauffeurs on request.',
        'Porto is also the gateway to the **Douro Valley**, the world’s first demarcated wine region, whose UNESCO-listed terraces rise an hour’s drive away. Braga and Guimarães, cradle of the nation, extend the route to the north. With a full-day hire, your chauffeur links quintas, tastings and riverside lunches while you enjoy the landscape.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Vallée du Douro et dégustations', en: 'Douro Valley and tastings' },
        teaser: {
          fr: 'À une heure de Porto, les terrasses viticoles classées UNESCO : visite d’une quinta, dégustation de porto et de vins tranquilles, déjeuner surplombant le fleuve. Retour par la route panoramique N-222.',
          en: 'An hour from Porto, the UNESCO-listed vineyard terraces: a quinta visit, a tasting of port and still wines, lunch overlooking the river. Return along the scenic N-222 road.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Caves de Vila Nova de Gaia', en: 'Vila Nova de Gaia cellars' },
        teaser: {
          fr: 'Les grands noms du porto — Graham’s, Taylor’s, Sandeman — sur la rive de Gaia, dégustation face à la Ribeira, croisière des six ponts en option. Dépose et reprise devant chaque cave.',
          en: 'The great port houses — Graham’s, Taylor’s, Sandeman — on the Gaia bank, a tasting facing the Ribeira, an optional six-bridges cruise. Drop-off and pick-up at each cellar.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Braga et Guimarães', en: 'Braga and Guimarães' },
        teaser: {
          fr: 'Le sanctuaire baroque du Bom Jesus do Monte et son escalier monumental, puis Guimarães, « berceau du Portugal » classé UNESCO. Déjeuner dans le centre médiéval avant le retour.',
          en: 'The Baroque sanctuary of Bom Jesus do Monte and its monumental stairway, then Guimarães, the UNESCO-listed “cradle of Portugal”. Lunch in the medieval centre before the return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Porto historique en voiture privée', en: 'Historic Porto by private car' },
        teaser: {
          fr: 'La librairie Lello, la gare de São Bento et ses azulejos, le pont Dom-Luís et la Foz do Douro au coucher du soleil. Véhicule en attente à chaque étape, itinéraire adapté à votre rythme.',
          en: 'The Lello bookshop, São Bento station and its azulejos, the Dom Luís Bridge and the Foz do Douro at sunset. Vehicle on standby at each stop, itinerary adapted to your pace.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Soirée à la Foz', en: 'Evening in Foz' },
        teaser: {
          fr: 'Dîner de fruits de mer face à l’Atlantique, coucher de soleil sur l’embouchure du Douro, puis les quais illuminés de la Ribeira. Véhicule à disposition toute la soirée.',
          en: 'A seafood dinner facing the Atlantic, sunset over the Douro mouth, then the illuminated Ribeira quays. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Porto et le centre-ville ?',
          en: 'How much does a transfer between Porto Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport Francisco Sá Carneiro (OPO) et le centre de Porto est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Francisco Sá Carneiro Airport (OPO) and central Porto is charged at a fixed price, confirmed at booking. It includes a meet-and-greet with a name board, flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Peut-on faire la vallée du Douro à la journée depuis Porto ?',
          en: 'Can the Douro Valley be done as a day trip from Porto?',
        },
        a: {
          fr: 'Oui. La vallée du Douro est à environ une heure de Porto ; en mise à disposition à la journée, votre chauffeur organise visites de quintas, dégustations et déjeuner, et vous ramène en fin d’après-midi par la route panoramique.',
          en: 'Yes. The Douro Valley is about an hour from Porto; with a full-day hire, your chauffeur arranges quinta visits, tastings and lunch, and brings you back in the late afternoon along the scenic road.',
        },
      },
      {
        q: {
          fr: 'Vos chauffeurs à Porto parlent-ils anglais ?',
          en: 'Do your chauffeurs in Porto speak English?',
        },
        a: {
          fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande à la réservation, ainsi que d’autres langues selon les disponibilités. Précisez votre préférence lors de la commande.',
          en: 'Yes, English-speaking chauffeurs are available on request at booking, along with other languages subject to availability. Please state your preference when ordering.',
        },
      },
    ],
    nearby: ['braga', 'coimbra'],
  },
  {
    slug: 'sintra',
    name: { fr: 'Sintra', en: 'Sintra' },
    country: { fr: 'Portugal', en: 'Portugal' },
    region: 'iberia',
    airport: 'Lisbonne (LIS)',
    airportTransfer: {
      fr: 'L’aéroport de Lisbonne (LIS) se trouve à 30 km à l’est de Sintra : comptez 35 à 45 minutes jusqu’au centre historique ou au palais de la Pena. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Lisbon Airport (LIS) lies 30 km east of Sintra: allow 35 to 45 minutes to the historic centre or the Pena Palace. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Nichée dans une serra boisée à 30 km de Lisbonne, Sintra a séduit rois et poètes romantiques de son microclimat et de ses palais de conte. Votre **chauffeur privé à Sintra** maîtrise les routes étroites et sinueuses qui montent à la Pena et à la Quinta da Regaleira, souvent saturées en saison : dépose au plus près des entrées, attente sur place, itinéraire optimisé selon l’affluence. Berlines Mercedes et vans, prix fixes, chauffeurs anglophones sur demande.',
        'Au-delà des palais, Sintra ouvre sur la côte sauvage de l’Atlantique. Le **cap de Roca**, point le plus occidental du continent, la plage de Guincho et la station chic de Cascais se rejoignent en une trentaine de minutes. En mise à disposition à la journée, votre chauffeur compose un circuit palais-océan-Cascais sans que vous ayez à vous soucier du stationnement, rare et compliqué dans la vieille ville.',
      ],
      en: [
        'Set in a wooded serra 30 km from Lisbon, Sintra has enchanted kings and Romantic poets with its microclimate and fairy-tale palaces. Your **private chauffeur in Sintra** masters the narrow, winding roads up to the Pena and the Quinta da Regaleira, often congested in season: drop-offs as close as possible to the entrances, on-site waiting, an itinerary optimised for the crowds. Mercedes sedans and vans, fixed prices, English-speaking chauffeurs on request.',
        'Beyond the palaces, Sintra opens onto the wild Atlantic coast. **Cabo da Roca**, the westernmost point of the continent, Guincho beach and the smart resort of Cascais are all about thirty minutes away. With a full-day hire, your chauffeur builds a palaces-ocean-Cascais route without you having to worry about parking, which is scarce and complicated in the old town.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Palais de la Pena et parc', en: 'Pena Palace and park' },
        teaser: {
          fr: 'Le palais romantique aux couleurs vives et son parc exotique de 200 hectares, dépose au plus près de l’entrée haute pour éviter la montée. Attente sur place, reprise à l’heure convenue.',
          en: 'The vividly coloured Romantic palace and its 200-hectare exotic park, drop-off as close as possible to the upper entrance to avoid the climb. Waiting on site, pick-up at the agreed time.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Quinta da Regaleira et centre historique', en: 'Quinta da Regaleira and historic centre' },
        teaser: {
          fr: 'Le puits initiatique et les jardins ésotériques de la Regaleira, puis le palais national et ses cheminées coniques. Déjeuner dans le centre avant de poursuivre.',
          en: 'The initiation well and esoteric gardens of the Regaleira, then the National Palace with its conical chimneys. Lunch in the centre before continuing.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Cap de Roca et Cascais', en: 'Cabo da Roca and Cascais' },
        teaser: {
          fr: 'Le phare du cap de Roca face à l’immensité atlantique, la plage sauvage du Guincho, puis déjeuner de poisson à Cascais. Retour par la corniche de l’Estoril.',
          en: 'The Cabo da Roca lighthouse facing the vast Atlantic, the wild Guincho beach, then a seafood lunch in Cascais. Return along the Estoril coast road.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Sintra et palais de Monserrate', en: 'Sintra and Monserrate palace' },
        teaser: {
          fr: 'Le palais mauresque de Monserrate et son parc botanique, moins fréquenté, puis le château des Maures et son panorama sur la serra. Journée au rythme lent, loin des cars.',
          en: 'The Moorish Monserrate palace and its quieter botanical park, then the Castle of the Moors and its panorama over the serra. A slow-paced day, away from the tour buses.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Journée palais et océan', en: 'Palaces and ocean day' },
        teaser: {
          fr: 'La combinaison intégrale : Pena, Regaleira, cap de Roca et déjeuner à Cascais, orchestrée pour éviter files et embouteillages. Véhicule à disposition toute la journée.',
          en: 'The full combination: Pena, Regaleira, Cabo da Roca and lunch in Cascais, orchestrated to avoid queues and traffic. Vehicle on standby all day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Vaut-il mieux visiter Sintra avec un chauffeur privé ?',
          en: 'Is it better to visit Sintra with a private chauffeur?',
        },
        a: {
          fr: 'Oui, car les routes de Sintra sont étroites, sinueuses et saturées en saison, et le stationnement y est rare. Votre chauffeur vous dépose au plus près des entrées, patiente sur place et optimise l’ordre des visites selon l’affluence.',
          en: 'Yes, because Sintra’s roads are narrow, winding and congested in season, and parking is scarce. Your chauffeur drops you as close as possible to the entrances, waits on site and optimises the order of visits according to the crowds.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Sintra et Cascais dans la même journée ?',
          en: 'Can Sintra and Cascais be combined in the same day?',
        },
        a: {
          fr: 'Oui. Les deux sites sont distants d’une trentaine de minutes. En mise à disposition à la journée, votre chauffeur enchaîne palais de Sintra le matin, cap de Roca et déjeuner à Cascais l’après-midi, selon le rythme que vous souhaitez.',
          en: 'Yes. The two sites are about thirty minutes apart. With a full-day hire, your chauffeur links the Sintra palaces in the morning, Cabo da Roca and lunch in Cascais in the afternoon, at the pace you prefer.',
        },
      },
      {
        q: {
          fr: 'Depuis quel aéroport arrive-t-on à Sintra ?',
          en: 'From which airport do you reach Sintra?',
        },
        a: {
          fr: 'L’aéroport le plus proche est celui de Lisbonne (LIS), à 30 km. Votre chauffeur vous y accueille avec panneau nominatif et vous conduit directement à Sintra en 35 à 45 minutes, à prix fixe.',
          en: 'The nearest airport is Lisbon (LIS), 30 km away. Your chauffeur greets you there with a name board and drives you directly to Sintra in 35 to 45 minutes, at a fixed price.',
        },
      },
    ],
    nearby: ['lisbon', 'cascais'],
  },
  {
    slug: 'cascais',
    name: { fr: 'Cascais', en: 'Cascais' },
    country: { fr: 'Portugal', en: 'Portugal' },
    region: 'iberia',
    airport: 'Lisbonne (LIS)',
    airportTransfer: {
      fr: 'L’aéroport de Lisbonne (LIS) se trouve à 30 km à l’est de Cascais : comptez 30 à 45 minutes par l’A5 selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Lisbon Airport (LIS) lies 30 km east of Cascais: allow 30 to 45 minutes via the A5 depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ancien village de pêcheurs devenu station balnéaire de la cour portugaise, Cascais aligne marina élégante, plages abritées et villas Belle Époque à 30 km de Lisbonne. Votre **chauffeur privé à Cascais** dessert les hôtels de la baie, les golfs de l’Estoril et les restaurants du front de mer : transferts aéroport, mise à disposition à l’heure, prix fixes annoncés à l’avance. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Cascais est le point d’ancrage idéal de la côte de l’Estoril. La **serra de Sintra et ses palais**, le cap de Roca, la plage sauvage du Guincho prisée des surfeurs se rejoignent en quinze à trente minutes. En mise à disposition à la journée, votre chauffeur relie parcours de golf, dîners de fruits de mer et escapades à Sintra pendant que vous profitez de la douceur de l’Atlantique.',
      ],
      en: [
        'A former fishing village turned seaside resort of the Portuguese court, Cascais offers an elegant marina, sheltered beaches and Belle Époque villas 30 km from Lisbon. Your **private chauffeur in Cascais** serves the bay’s hotels, the Estoril golf courses and the seafront restaurants: airport transfers, hourly hire, fixed prices confirmed in advance. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Cascais is the ideal base for the Estoril coast. The **Sintra hills and their palaces**, Cabo da Roca and the wild Guincho beach favoured by surfers are fifteen to thirty minutes away. With a full-day hire, your chauffeur links golf rounds, seafood dinners and excursions to Sintra while you enjoy the mildness of the Atlantic.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Sintra depuis Cascais', en: 'Sintra from Cascais' },
        teaser: {
          fr: 'Vingt minutes de route jusqu’aux palais de la serra : Pena, Regaleira et centre historique, avec dépose au plus près des entrées. Retour par le cap de Roca au coucher du soleil.',
          en: 'Twenty minutes to the palaces of the serra: Pena, Regaleira and the historic centre, with drop-offs as close as possible to the entrances. Return via Cabo da Roca at sunset.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Guincho et cap de Roca', en: 'Guincho and Cabo da Roca' },
        teaser: {
          fr: 'La plage sauvage du Guincho battue par les vents, le phare du cap de Roca face à l’Atlantique, déjeuner de poisson en bord de mer. Balade côtière au rythme lent.',
          en: 'The wind-swept Guincho beach, the Cabo da Roca lighthouse facing the Atlantic, a seafood lunch by the sea. A slow-paced coastal drive.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Lisbonne à la journée', en: 'Lisbon day trip' },
        teaser: {
          fr: 'Trente minutes par l’A5 jusqu’à la capitale : Belém, Alfama et miradouros, dépose devant chaque site, véhicule en attente. Retour à Cascais pour le dîner.',
          en: 'Thirty minutes via the A5 to the capital: Belém, Alfama and the miradouros, door-to-door drop-offs, vehicle on standby. Back in Cascais for dinner.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '560',
      },
      {
        title: { fr: 'Golf sur la côte de l’Estoril', en: 'Golf on the Estoril coast' },
        teaser: {
          fr: 'Transferts et mise à disposition autour des parcours de l’Estoril, d’Oitavos Dunes et de Penha Longa. Votre chauffeur gère clubs et horaires pendant que vous jouez.',
          en: 'Transfers and standby around the Estoril, Oitavos Dunes and Penha Longa courses. Your chauffeur handles clubs and timings while you play.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '400',
      },
      {
        title: { fr: 'Soirée sur la baie', en: 'Evening on the bay' },
        teaser: {
          fr: 'Coucher de soleil sur la marina, dîner de fruits de mer face à l’océan, puis les terrasses animées du centre. Véhicule à disposition toute la soirée.',
          en: 'Sunset over the marina, a seafood dinner facing the ocean, then the lively terraces of the centre. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '360',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien de temps faut-il de l’aéroport de Lisbonne à Cascais ?',
          en: 'How long does it take from Lisbon Airport to Cascais?',
        },
        a: {
          fr: 'Comptez 30 à 45 minutes par l’autoroute A5, selon le trafic. Le transfert privé est facturé à prix fixe, avec accueil en salle d’arrivée, suivi du vol et 60 minutes d’attente offertes en cas de retard.',
          en: 'Allow 30 to 45 minutes via the A5 motorway, depending on traffic. The private transfer is charged at a fixed price, with a meet-and-greet in arrivals, flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Sintra facilement depuis Cascais ?',
          en: 'Can Sintra be reached easily from Cascais?',
        },
        a: {
          fr: 'Oui, Sintra est à une vingtaine de minutes de route. En mise à disposition à la journée, votre chauffeur combine les palais de Sintra, le cap de Roca et un déjeuner, puis vous ramène à Cascais.',
          en: 'Yes, Sintra is about twenty minutes away. With a full-day hire, your chauffeur combines the Sintra palaces, Cabo da Roca and lunch, then brings you back to Cascais.',
        },
      },
      {
        q: {
          fr: 'Vos chauffeurs à Cascais parlent-ils anglais ?',
          en: 'Do your chauffeurs in Cascais speak English?',
        },
        a: {
          fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande à la réservation, ainsi que d’autres langues selon les disponibilités.',
          en: 'Yes, English-speaking chauffeurs are available on request at booking, along with other languages subject to availability.',
        },
      },
    ],
    nearby: ['lisbon', 'sintra'],
  },
  {
    slug: 'faro',
    name: { fr: 'Faro', en: 'Faro' },
    country: { fr: 'Portugal', en: 'Portugal' },
    region: 'iberia',
    airport: 'Faro (FAO)',
    airportTransfer: {
      fr: 'L’aéroport de Faro (FAO) se trouve à 7 km à l’ouest du centre : comptez 15 minutes jusqu’à la vieille ville, et 40 à 70 minutes vers les stations de l’Algarve — Vilamoura, Albufeira, Lagos. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Faro Airport (FAO) lies 7 km west of the centre: allow 15 minutes to the old town, and 40 to 70 minutes to the Algarve resorts — Vilamoura, Albufeira, Lagos. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de l’Algarve et porte d’entrée du sud du Portugal, Faro veille sur la lagune de la Ria Formosa, ses îles et ses flamants roses. Votre **chauffeur privé à Faro** dessert la vieille ville aux remparts, l’aéroport et l’ensemble des stations de la côte : transferts à prix fixe, mise à disposition à l’heure, dépose au plus près des marinas et des plages. Berlines Mercedes et vans de grande capacité, chauffeurs anglophones sur demande.',
        'Depuis Faro rayonne tout l’**Algarve balnéaire** : les falaises ocre de la Ponta da Piedade à Lagos, les golfs de Vilamoura, les villages blancs de l’intérieur comme Silves ou Loulé. En mise à disposition à la journée, votre chauffeur relie criques, tables de poisson et parcours de golf pendant que vous profitez des 300 jours de soleil annuels de la région.',
      ],
      en: [
        'Capital of the Algarve and gateway to southern Portugal, Faro watches over the Ria Formosa lagoon, its islands and its flamingos. Your **private chauffeur in Faro** serves the walled old town, the airport and all the coastal resorts: fixed-price transfers, hourly hire, drop-offs as close as possible to the marinas and beaches. Mercedes sedans and full-size vans, English-speaking chauffeurs on request.',
        'From Faro radiates the whole **seaside Algarve**: the ochre cliffs of Ponta da Piedade at Lagos, the golf courses of Vilamoura, the white inland villages such as Silves and Loulé. With a full-day hire, your chauffeur links coves, seafood restaurants and golf courses while you enjoy the region’s 300 days of annual sunshine.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Lagos et la Ponta da Piedade', en: 'Lagos and Ponta da Piedade' },
        teaser: {
          fr: 'À l’ouest de Faro, les falaises dorées et les grottes marines de la Ponta da Piedade, la plage de Dona Ana, la vieille ville de Lagos. Déjeuner de poisson face à l’océan.',
          en: 'West of Faro, the golden cliffs and sea caves of Ponta da Piedade, Dona Ana beach, the old town of Lagos. A seafood lunch facing the ocean.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Ria Formosa et Olhão', en: 'Ria Formosa and Olhão' },
        teaser: {
          fr: 'Le parc naturel de la Ria Formosa, ses marais salants et ses îles-barrières, le marché aux poissons d’Olhão et les villages de pêcheurs. Balade nature au rythme lent.',
          en: 'The Ria Formosa nature park, its salt pans and barrier islands, the fish market of Olhão and the fishing villages. A slow-paced nature drive.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Villages blancs de l’intérieur', en: 'White villages inland' },
        teaser: {
          fr: 'Silves et son château maure de grès rouge, Loulé et son marché, Monchique et ses sources thermales dans la serra. Déjeuner du terroir loin de la côte.',
          en: 'Silves and its red-sandstone Moorish castle, Loulé and its market, Monchique and its thermal springs in the serra. A regional lunch away from the coast.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Golf en Algarve', en: 'Golf in the Algarve' },
        teaser: {
          fr: 'Transferts et mise à disposition autour des parcours de Vilamoura, de Quinta do Lago et de San Lorenzo. Votre chauffeur gère les horaires pendant que vous jouez.',
          en: 'Transfers and standby around the Vilamoura, Quinta do Lago and San Lorenzo courses. Your chauffeur handles the timings while you play.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '400',
      },
      {
        title: { fr: 'Séville depuis l’Algarve', en: 'Seville from the Algarve' },
        teaser: {
          fr: 'Deux heures de route vers l’Espagne : la Giralda, l’Alcázar et le quartier de Santa Cruz, déjeuner de tapas, retour en fin de journée. Passage de frontière sans formalité.',
          en: 'Two hours to Spain: the Giralda, the Alcázar and the Santa Cruz quarter, a tapas lunch, return at the end of the day. Border crossing with no formalities.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert de l’aéroport de Faro vers les stations de l’Algarve ?',
          en: 'How much does a transfer from Faro Airport to the Algarve resorts cost?',
        },
        a: {
          fr: 'Le transfert privé depuis Faro (FAO) vers Vilamoura, Albufeira, Lagos ou toute autre station est facturé à prix fixe selon la distance, confirmé à la réservation. Il comprend l’accueil avec panneau nominatif, le suivi du vol et 60 minutes d’attente offertes.',
          en: 'A private transfer from Faro (FAO) to Vilamoura, Albufeira, Lagos or any other resort is charged at a fixed price by distance, confirmed at booking. It includes a name-board meet-and-greet, flight tracking and 60 minutes of complimentary waiting time.',
        },
      },
      {
        q: {
          fr: 'Peut-on faire une excursion à Séville depuis l’Algarve ?',
          en: 'Can you take an excursion to Seville from the Algarve?',
        },
        a: {
          fr: 'Oui. Séville est à environ deux heures de route de Faro, sans formalité de frontière. En mise à disposition à la journée, votre chauffeur vous y conduit et vous ramène le soir même, à prix fixe.',
          en: 'Yes. Seville is about two hours’ drive from Faro, with no border formalities. With a full-day hire, your chauffeur takes you there and back the same evening, at a fixed price.',
        },
      },
      {
        q: {
          fr: 'Vos chauffeurs en Algarve parlent-ils anglais ?',
          en: 'Do your chauffeurs in the Algarve speak English?',
        },
        a: {
          fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.',
          en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.',
        },
      },
    ],
    nearby: ['seville', 'lisbon'],
  },
  {
    slug: 'funchal',
    name: { fr: 'Funchal', en: 'Funchal' },
    country: { fr: 'Portugal', en: 'Portugal' },
    region: 'iberia',
    airport: 'Madère – Cristiano Ronaldo (FNC)',
    airportTransfer: {
      fr: 'L’aéroport de Madère – Cristiano Ronaldo (FNC) se trouve à 18 km à l’est de Funchal : comptez 25 à 35 minutes le long de la côte. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Madeira – Cristiano Ronaldo Airport (FNC) lies 18 km east of Funchal: allow 25 to 35 minutes along the coast. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de l’île de Madère, Funchal étage ses jardins subtropicaux, ses quintas et son front de mer au pied de montagnes plongeant dans l’Atlantique. Votre **chauffeur privé à Funchal** connaît les routes escarpées de l’île, les points de vue du Cabo Girão et les villages de la côte : transferts aéroport, mise à disposition à la journée, dépose au plus près des sites. Berlines et 4x4 selon les itinéraires, prix fixes, chauffeurs anglophones sur demande.',
        'Madère se découvre à la journée depuis Funchal. Le **plateau du Paul da Serra**, les forêts de lauriers classées UNESCO, les piscines naturelles de Porto Moniz et les levadas se rejoignent par des routes de montagne exigeantes. En mise à disposition, votre chauffeur relie belvédères, dégustations de vin de Madère et déjeuners de village pendant que vous profitez du paysage volcanique.',
      ],
      en: [
        'Capital of Madeira, Funchal tiers its subtropical gardens, quintas and seafront at the foot of mountains plunging into the Atlantic. Your **private chauffeur in Funchal** knows the island’s steep roads, the Cabo Girão viewpoints and the coastal villages: airport transfers, full-day hire, drop-offs as close as possible to the sites. Sedans and 4x4s depending on the route, fixed prices, English-speaking chauffeurs on request.',
        'Madeira is best discovered on day trips from Funchal. The **Paul da Serra plateau**, the UNESCO-listed laurel forests, the natural pools of Porto Moniz and the levadas are reached by demanding mountain roads. With a chauffeur hire, your driver links viewpoints, Madeira wine tastings and village lunches while you enjoy the volcanic landscape.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Tour de l’île de Madère', en: 'Madeira island tour' },
        teaser: {
          fr: 'Le Cabo Girão, deuxième plus haute falaise d’Europe, les piscines volcaniques de Porto Moniz, la pointe de São Lourenço. Déjeuner de village et arrêts photo tout au long de la côte.',
          en: 'Cabo Girão, Europe’s second-highest cliff, the volcanic pools of Porto Moniz, the São Lourenço headland. A village lunch and photo stops all along the coast.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Monte et jardins tropicaux', en: 'Monte and tropical gardens' },
        teaser: {
          fr: 'Le jardin tropical de Monte Palace, l’église de Nossa Senhora et la fameuse descente en carro de cesto — luges d’osier. Retour par les quintas fleuries des hauteurs.',
          en: 'The Monte Palace tropical garden, the church of Nossa Senhora and the famous carro de cesto — wicker toboggan — descent. Return via the flowered quintas of the heights.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Pics et forêts de lauriers', en: 'Peaks and laurel forests' },
        teaser: {
          fr: 'Le Pico do Arieiro à 1 818 m au-dessus des nuages, la laurisylve classée UNESCO de Ribeiro Frio, une levada accessible. Journée montagne loin de la côte.',
          en: 'Pico do Arieiro at 1,818 m above the clouds, the UNESCO-listed laurisilva of Ribeiro Frio, an accessible levada. A mountain day away from the coast.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Câmara de Lobos et vin de Madère', en: 'Câmara de Lobos and Madeira wine' },
        teaser: {
          fr: 'Le village de pêcheurs cher à Churchill, dégustation de vin de Madère dans une adega historique, déjeuner d’espada aux bananes. Balade côtière tranquille.',
          en: 'The fishing village dear to Churchill, a Madeira wine tasting in a historic adega, a lunch of espada with banana. A relaxed coastal drive.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Soirée à Funchal', en: 'Evening in Funchal' },
        teaser: {
          fr: 'Coucher de soleil sur la baie depuis les hauteurs, dîner dans la vieille ville de la Zona Velha, puis les terrasses animées de l’Avenida do Mar. Véhicule à disposition.',
          en: 'Sunset over the bay from the heights, dinner in the old town of the Zona Velha, then the lively terraces of the Avenida do Mar. Vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '360',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte le transfert de l’aéroport de Madère à Funchal ?',
          en: 'How much does the transfer from Madeira Airport to Funchal cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport (FNC) et Funchal est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil avec panneau nominatif, le suivi du vol et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between the airport (FNC) and Funchal is charged at a fixed price, confirmed at booking. It includes a name-board meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Faut-il un 4x4 pour visiter Madère ?',
          en: 'Do you need a 4x4 to tour Madeira?',
        },
        a: {
          fr: 'Pas nécessairement : la plupart des sites sont accessibles en berline. Pour certains itinéraires de montagne, un véhicule adapté est proposé. Votre chauffeur choisit le véhicule selon le programme convenu.',
          en: 'Not necessarily: most sites are reachable by sedan. For certain mountain routes, a suitable vehicle is provided. Your chauffeur selects the vehicle according to the agreed programme.',
        },
      },
      {
        q: {
          fr: 'Vos chauffeurs à Madère parlent-ils anglais ?',
          en: 'Do your chauffeurs in Madeira speak English?',
        },
        a: {
          fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.',
          en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.',
        },
      },
    ],
    nearby: ['lisbon'],
  },
  {
    slug: 'evora',
    name: { fr: 'Évora', en: 'Évora' },
    country: { fr: 'Portugal', en: 'Portugal' },
    region: 'iberia',
    airport: 'Lisbonne (LIS)',
    airportTransfer: {
      fr: 'L’aéroport de Lisbonne (LIS) se trouve à 130 km à l’ouest d’Évora : comptez 1h15 à 1h30 par l’A6. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Lisbon Airport (LIS) lies 130 km west of Évora: allow 1h15 to 1h30 via the A6. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de l’Alentejo, Évora enferme dans ses remparts un temple romain, une cathédrale gothique et une chapelle des Os, deux mille ans d’histoire classés au patrimoine mondial. Votre **chauffeur privé à Évora** dessert la ville-musée, les domaines viticoles alentejans et les monts mégalithiques des environs : transferts depuis Lisbonne, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Autour d’Évora s’étend l’**Alentejo des vins et des mégalithes** : le cromlech des Almendres, plus grand ensemble mégalithique de la péninsule, les quintas de Reguengos et de Vidigueira, les villages blancs comme Monsaraz perché sur son piton. En mise à disposition, votre chauffeur relie caves, tables de terroir et sites préhistoriques à travers les plaines d’oliviers et de chênes-lièges.',
      ],
      en: [
        'Capital of the Alentejo, Évora holds within its walls a Roman temple, a Gothic cathedral and a Chapel of Bones — two thousand years of history listed as World Heritage. Your **private chauffeur in Évora** serves the museum town, the Alentejo wine estates and the surrounding megalithic hills: transfers from Lisbon, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Around Évora stretches the **Alentejo of wines and megaliths**: the Almendres Cromlech, the largest megalithic complex on the peninsula, the quintas of Reguengos and Vidigueira, white villages like Monsaraz perched on its outcrop. With a chauffeur hire, your driver links cellars, regional tables and prehistoric sites across the plains of olive and cork trees.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Évora, ville-musée', en: 'Évora, the museum town' },
        teaser: {
          fr: 'Le temple romain de Diane, la cathédrale, la chapelle des Os et ses murs d’ossements, l’université historique. Dépose aux portes de la vieille ville, promenade guidée à votre rythme.',
          en: 'The Roman Temple of Diana, the cathedral, the bone-lined Chapel of Bones, the historic university. Drop-off at the gates of the old town, a stroll at your own pace.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Mégalithes de l’Alentejo', en: 'Alentejo megaliths' },
        teaser: {
          fr: 'Le cromlech des Almendres et son cercle de menhirs, le dolmen d’Anta Grande do Zambujeiro, à travers les plaines de chênes-lièges. Voyage aux origines néolithiques.',
          en: 'The Almendres Cromlech and its circle of menhirs, the Anta Grande do Zambujeiro dolmen, across the cork-oak plains. A journey to Neolithic origins.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Route des vins de l’Alentejo', en: 'Alentejo wine route' },
        teaser: {
          fr: 'Deux ou trois quintas autour de Reguengos et de Vidigueira, dégustations et déjeuner au domaine. Votre chauffeur conduit pendant que vous goûtez.',
          en: 'Two or three quintas around Reguengos and Vidigueira, tastings and lunch at the estate. Your chauffeur drives while you taste.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Monsaraz et le lac d’Alqueva', en: 'Monsaraz and Lake Alqueva' },
        teaser: {
          fr: 'Le village fortifié de Monsaraz perché au-dessus du plus grand lac artificiel d’Europe, réserve de ciel étoilé. Déjeuner face aux remparts, retour au crépuscule.',
          en: 'The fortified village of Monsaraz perched above Europe’s largest artificial lake, a dark-sky reserve. Lunch facing the ramparts, return at dusk.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Évora depuis Lisbonne à la journée', en: 'Évora from Lisbon day trip' },
        teaser: {
          fr: '1h15 de route par l’A6 : la ville-musée le matin, une quinta et un déjeuner alentejan l’après-midi, retour à Lisbonne le soir. Journée complète clé en main.',
          en: '1h15 via the A6: the museum town in the morning, a quinta and an Alentejo lunch in the afternoon, back in Lisbon in the evening. A turnkey full day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Peut-on visiter Évora à la journée depuis Lisbonne ?',
          en: 'Can Évora be visited on a day trip from Lisbon?',
        },
        a: {
          fr: 'Oui. Évora est à 1h15 de Lisbonne par l’A6. En mise à disposition à la journée, votre chauffeur vous conduit à Évora, organise visites et déjeuner, et vous ramène le soir même, à prix fixe.',
          en: 'Yes. Évora is 1h15 from Lisbon via the A6. With a full-day hire, your chauffeur drives you to Évora, arranges visits and lunch, and brings you back the same evening, at a fixed price.',
        },
      },
      {
        q: {
          fr: 'La route des vins de l’Alentejo est-elle accessible avec chauffeur ?',
          en: 'Is the Alentejo wine route accessible with a chauffeur?',
        },
        a: {
          fr: 'Oui, c’est l’une des formules les plus demandées. Votre chauffeur organise les visites de quintas et conduit d’un domaine à l’autre pendant que vous profitez des dégustations en toute sérénité.',
          en: 'Yes, it is one of the most requested options. Your chauffeur arranges the quinta visits and drives from estate to estate while you enjoy the tastings with complete peace of mind.',
        },
      },
      {
        q: {
          fr: 'Vos chauffeurs en Alentejo parlent-ils anglais ?',
          en: 'Do your chauffeurs in the Alentejo speak English?',
        },
        a: {
          fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.',
          en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.',
        },
      },
    ],
    nearby: ['lisbon', 'seville'],
  },
  {
    slug: 'coimbra',
    name: { fr: 'Coimbra', en: 'Coimbra' },
    country: { fr: 'Portugal', en: 'Portugal' },
    region: 'iberia',
    airport: 'Porto (OPO)',
    airportTransfer: {
      fr: 'L’aéroport de Porto (OPO) se trouve à 120 km au nord de Coimbra : comptez 1h15 par l’A1. Depuis Lisbonne (LIS), à 200 km au sud, le trajet demande environ 2 heures. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Porto Airport (OPO) lies 120 km north of Coimbra: allow 1h15 via the A1. From Lisbon (LIS), 200 km south, the journey takes about 2 hours. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ancienne capitale du royaume et siège de la plus vieille université du Portugal, Coimbra domine le Mondego de ses ruelles étudiantes et de sa bibliothèque Joanina baroque. Votre **chauffeur privé à Coimbra** dessert la ville haute universitaire, classée UNESCO, les monastères et les villages du centre : transferts depuis Porto ou Lisbonne, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Coimbra commande le **centre historique du Portugal**. Le sanctuaire de Fátima, les monastères de Batalha et d’Alcobaça, le village schisteux de Piódão et les forêts de la serra da Estrela se rejoignent en une heure à peine. En mise à disposition à la journée, votre chauffeur relie sites classés, tables de terroir et panoramas de montagne au cœur du pays.',
      ],
      en: [
        'A former capital of the kingdom and home to Portugal’s oldest university, Coimbra overlooks the Mondego with its student lanes and its Baroque Joanina Library. Your **private chauffeur in Coimbra** serves the UNESCO-listed upper university town, the monasteries and the villages of the centre: transfers from Porto or Lisbon, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Coimbra commands the **historic heart of Portugal**. The sanctuary of Fátima, the monasteries of Batalha and Alcobaça, the schist village of Piódão and the forests of the Serra da Estrela are barely an hour away. With a full-day hire, your chauffeur links listed sites, regional tables and mountain panoramas in the middle of the country.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Université et bibliothèque Joanina', en: 'University and Joanina Library' },
        teaser: {
          fr: 'La bibliothèque baroque Joanina et ses rayonnages dorés, la salle des Actes, la cathédrale romane. Dépose au pied de la ville haute, promenade dans le dédale étudiant.',
          en: 'The Baroque Joanina Library with its gilded shelves, the Hall of Acts, the Romanesque cathedral. Drop-off at the foot of the upper town, a walk through the student maze.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Fátima et les monastères', en: 'Fátima and the monasteries' },
        teaser: {
          fr: 'Le sanctuaire de Fátima, puis les monastères gothiques de Batalha et d’Alcobaça classés UNESCO. Déjeuner en chemin, retour par le château de Leiria.',
          en: 'The sanctuary of Fátima, then the UNESCO-listed Gothic monasteries of Batalha and Alcobaça. Lunch en route, return via Leiria castle.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Serra da Estrela', en: 'Serra da Estrela' },
        teaser: {
          fr: 'Le plus haut massif du Portugal continental, ses lacs glaciaires et ses bergeries de fromage Serra. Déjeuner de montagne, arrêts panoramiques sur la route des cols.',
          en: 'Continental Portugal’s highest range, its glacial lakes and its Serra-cheese farms. A mountain lunch, panoramic stops along the pass road.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Village schisteux de Piódão', en: 'Schist village of Piódão' },
        teaser: {
          fr: 'Le village-crèche de Piódão, ses maisons de schiste étagées à flanc de montagne, l’un des plus beaux du Portugal. Déjeuner du terroir loin des circuits classiques.',
          en: 'The nativity-scene village of Piódão, its schist houses tiered on the mountainside, one of Portugal’s finest. A regional lunch off the beaten track.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '660',
      },
      {
        title: { fr: 'Étape sur la route Porto–Lisbonne', en: 'Stop on the Porto–Lisbon route' },
        teaser: {
          fr: 'Coimbra à mi-chemin entre les deux grandes villes : visite de l’université et déjeuner avant de reprendre la route, transfert prolongé à prix fixe. Idéal pour un road-trip.',
          en: 'Coimbra halfway between the two great cities: a visit to the university and lunch before continuing, an extended transfer at a fixed price. Ideal for a road trip.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Depuis quel aéroport rejoint-on Coimbra ?',
          en: 'From which airport do you reach Coimbra?',
        },
        a: {
          fr: 'Coimbra est à 1h15 de Porto (OPO) et à environ 2 heures de Lisbonne (LIS). Votre chauffeur vous accueille à l’aéroport de votre choix avec panneau nominatif et vous conduit directement, à prix fixe.',
          en: 'Coimbra is 1h15 from Porto (OPO) and about 2 hours from Lisbon (LIS). Your chauffeur greets you at the airport of your choice with a name board and drives you directly, at a fixed price.',
        },
      },
      {
        q: {
          fr: 'Peut-on faire étape à Coimbra entre Porto et Lisbonne ?',
          en: 'Can you stop in Coimbra between Porto and Lisbon?',
        },
        a: {
          fr: 'Oui, c’est une étape idéale à mi-chemin. Votre chauffeur intègre la visite de Coimbra et un déjeuner au transfert entre les deux villes, à prix fixe convenu à l’avance.',
          en: 'Yes, it is an ideal halfway stop. Your chauffeur incorporates a visit to Coimbra and lunch into the transfer between the two cities, at a fixed price agreed in advance.',
        },
      },
      {
        q: {
          fr: 'Vos chauffeurs à Coimbra parlent-ils anglais ?',
          en: 'Do your chauffeurs in Coimbra speak English?',
        },
        a: {
          fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.',
          en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.',
        },
      },
    ],
    nearby: ['porto', 'lisbon', 'braga'],
  },
  {
    slug: 'braga',
    name: { fr: 'Braga', en: 'Braga' },
    country: { fr: 'Portugal', en: 'Portugal' },
    region: 'iberia',
    airport: 'Porto (OPO)',
    airportTransfer: {
      fr: 'L’aéroport de Porto (OPO) se trouve à 50 km au sud de Braga : comptez 35 à 45 minutes par l’A3. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Porto Airport (OPO) lies 50 km south of Braga: allow 35 to 45 minutes via the A3. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville des archevêques et l’une des plus anciennes cités chrétiennes de la péninsule, Braga aligne cathédrale romane, palais baroques et le sanctuaire escalier du Bom Jesus do Monte. Votre **chauffeur privé à Braga** dessert le centre historique, le sanctuaire et les villes du Minho : transferts depuis Porto, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Braga commande le **Minho verdoyant**, berceau du Portugal. Guimarães et son château fondateur, le parc national de Peneda-Gerês et ses lagunes, les domaines de vinho verde se rejoignent en moins d’une heure. En mise à disposition à la journée, votre chauffeur relie sanctuaires, tables du terroir et paysages de montagne à travers la province la plus verte du pays.',
      ],
      en: [
        'City of archbishops and one of the oldest Christian cities on the peninsula, Braga lines up a Romanesque cathedral, Baroque palaces and the stairway sanctuary of Bom Jesus do Monte. Your **private chauffeur in Braga** serves the historic centre, the sanctuary and the towns of the Minho: transfers from Porto, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Braga commands the **green Minho**, cradle of Portugal. Guimarães and its founding castle, the Peneda-Gerês national park and its lagoons, the vinho verde estates are all less than an hour away. With a full-day hire, your chauffeur links sanctuaries, regional tables and mountain landscapes across the country’s greenest province.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Bom Jesus do Monte', en: 'Bom Jesus do Monte' },
        teaser: {
          fr: 'Le sanctuaire baroque et son escalier monumental en zigzag, le funiculaire à eau le plus ancien du monde, panorama sur la ville. Dépose au sommet, montée évitée.',
          en: 'The Baroque sanctuary and its monumental zigzag stairway, the world’s oldest water-powered funicular, a panorama over the city. Drop-off at the top, the climb avoided.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Guimarães, berceau du Portugal', en: 'Guimarães, cradle of Portugal' },
        teaser: {
          fr: 'Le château fondateur d’Afonso Henriques, le palais des ducs de Bragance, le centre médiéval classé UNESCO. Déjeuner dans la vieille ville avant le retour.',
          en: 'The founding castle of Afonso Henriques, the palace of the Dukes of Braganza, the UNESCO-listed medieval centre. Lunch in the old town before the return.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Parc national de Peneda-Gerês', en: 'Peneda-Gerês National Park' },
        teaser: {
          fr: 'L’unique parc national du Portugal, ses lagunes, cascades et villages de granit, les chevaux garranos en liberté. Déjeuner de montagne, route panoramique.',
          en: 'Portugal’s only national park, its lagoons, waterfalls and granite villages, the free-roaming garrano horses. A mountain lunch, a scenic road.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Route du vinho verde', en: 'Vinho verde route' },
        teaser: {
          fr: 'Les quintas du Minho et leurs treilles hautes, dégustation de vinho verde et déjeuner au domaine. Votre chauffeur conduit d’une propriété à l’autre.',
          en: 'The Minho quintas and their high trellises, a vinho verde tasting and lunch at the estate. Your chauffeur drives from one property to the next.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Braga et Porto combinés', en: 'Braga and Porto combined' },
        teaser: {
          fr: 'Le sanctuaire et le centre de Braga le matin, les caves de porto de Gaia l’après-midi, à 50 km. Journée complète orchestrée sans temps mort.',
          en: 'The sanctuary and centre of Braga in the morning, the port cellars of Gaia in the afternoon, 50 km away. A full day orchestrated with no downtime.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '660',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien de temps de l’aéroport de Porto à Braga ?',
          en: 'How long from Porto Airport to Braga?',
        },
        a: {
          fr: 'Comptez 35 à 45 minutes par l’A3. Le transfert privé est facturé à prix fixe, avec accueil en salle d’arrivée, suivi du vol et 60 minutes d’attente offertes en cas de retard.',
          en: 'Allow 35 to 45 minutes via the A3. The private transfer is charged at a fixed price, with a meet-and-greet in arrivals, flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Braga et Guimarães dans la journée ?',
          en: 'Can Braga and Guimarães be combined in one day?',
        },
        a: {
          fr: 'Oui, les deux villes sont distantes de 25 km. En mise à disposition à la journée, votre chauffeur enchaîne le Bom Jesus et le centre de Braga, puis le château et le centre médiéval de Guimarães.',
          en: 'Yes, the two cities are 25 km apart. With a full-day hire, your chauffeur links Bom Jesus and the centre of Braga, then the castle and medieval centre of Guimarães.',
        },
      },
      {
        q: {
          fr: 'Vos chauffeurs à Braga parlent-ils anglais ?',
          en: 'Do your chauffeurs in Braga speak English?',
        },
        a: {
          fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.',
          en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.',
        },
      },
    ],
    nearby: ['porto', 'coimbra'],
  },
  {
    slug: 'obidos',
    name: { fr: 'Óbidos', en: 'Óbidos' },
    country: { fr: 'Portugal', en: 'Portugal' },
    region: 'iberia',
    airport: 'Lisbonne (LIS)',
    airportTransfer: {
      fr: 'L’aéroport de Lisbonne (LIS) se trouve à 85 km au sud d’Óbidos : comptez 1 heure par l’A8. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Lisbon Airport (LIS) lies 85 km south of Óbidos: allow 1 hour via the A8. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Village médiéval blotti dans ses remparts, offert jadis par les rois à leurs reines, Óbidos aligne ruelles blanches ourlées de bougainvilliers, château et boutiques de ginjinha servie dans un gobelet de chocolat. Votre **chauffeur privé à Óbidos** dessert le village, la côte d’Argent voisine et les monastères du centre : transferts depuis Lisbonne, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Óbidos ouvre sur la **côte d’Argent atlantique**. Les vagues géantes de Nazaré, le monastère d’Alcobaça, la lagune d’Óbidos et la station de Peniche se rejoignent en moins de quarante minutes. En mise à disposition, votre chauffeur relie village fortifié, plages sauvages et tables de poisson pendant que vous profitez d’un Portugal authentique, loin des foules.',
      ],
      en: [
        'A medieval village nestled within its walls, once given by kings to their queens, Óbidos offers white lanes hemmed with bougainvillea, a castle and shops selling ginjinha in a chocolate cup. Your **private chauffeur in Óbidos** serves the village, the nearby Silver Coast and the monasteries of the centre: transfers from Lisbon, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Óbidos opens onto the **Atlantic Silver Coast**. The giant waves of Nazaré, the monastery of Alcobaça, the Óbidos lagoon and the resort of Peniche are all less than forty minutes away. With a chauffeur hire, your driver links the fortified village, wild beaches and seafood tables while you enjoy an authentic Portugal, away from the crowds.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Óbidos, village fortifié', en: 'Óbidos, fortified village' },
        teaser: {
          fr: 'Le chemin de ronde des remparts, la rue Direita et ses boutiques, un verre de ginjinha au gobelet de chocolat. Dépose aux portes du village, promenade à votre rythme.',
          en: 'The rampart walkway, the Rua Direita and its shops, a glass of ginjinha in a chocolate cup. Drop-off at the village gates, a stroll at your own pace.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Nazaré et les vagues géantes', en: 'Nazaré and the giant waves' },
        teaser: {
          fr: 'Le phare du Sítio d’où l’on observe les plus grosses vagues du monde, le funiculaire, un déjeuner de poisson sur la plage. Balade côtière face à l’Atlantique.',
          en: 'The Sítio lighthouse from which the world’s biggest waves are watched, the funicular, a seafood lunch on the beach. A coastal drive facing the Atlantic.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Monastères d’Alcobaça et Batalha', en: 'Alcobaça and Batalha monasteries' },
        teaser: {
          fr: 'Deux chefs-d’œuvre gothiques classés UNESCO en une journée, le tombeau de Pedro et Inês à Alcobaça, les voûtes de Batalha. Déjeuner en chemin.',
          en: 'Two UNESCO-listed Gothic masterpieces in one day, the tomb of Pedro and Inês at Alcobaça, the vaults of Batalha. Lunch en route.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Côte d’Argent et Peniche', en: 'Silver Coast and Peniche' },
        teaser: {
          fr: 'La presqu’île de Peniche, la forteresse et le monastère-île de Berlenga en toile de fond, les plages de surf de Baleal. Déjeuner de fruits de mer en bord de mer.',
          en: 'The Peniche peninsula, the fortress and the island monastery of Berlenga in the distance, the surf beaches of Baleal. A seafood lunch by the sea.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Óbidos depuis Lisbonne à la journée', en: 'Óbidos from Lisbon day trip' },
        teaser: {
          fr: 'Une heure de route par l’A8 : le village le matin, Nazaré ou les monastères l’après-midi, retour à Lisbonne le soir. Escapade complète sur la côte d’Argent.',
          en: 'One hour via the A8: the village in the morning, Nazaré or the monasteries in the afternoon, back in Lisbon in the evening. A complete Silver Coast getaway.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Peut-on visiter Óbidos à la journée depuis Lisbonne ?',
          en: 'Can Óbidos be visited on a day trip from Lisbon?',
        },
        a: {
          fr: 'Oui. Óbidos est à une heure de Lisbonne par l’A8. En mise à disposition à la journée, votre chauffeur combine le village, la côte d’Argent — Nazaré ou les monastères — et un déjeuner, puis vous ramène le soir.',
          en: 'Yes. Óbidos is an hour from Lisbon via the A8. With a full-day hire, your chauffeur combines the village, the Silver Coast — Nazaré or the monasteries — and lunch, then brings you back in the evening.',
        },
      },
      {
        q: {
          fr: 'Peut-on voir les vagues géantes de Nazaré depuis Óbidos ?',
          en: 'Can you see the giant waves of Nazaré from Óbidos?',
        },
        a: {
          fr: 'Oui, Nazaré est à environ 40 minutes d’Óbidos. Le spectacle des grandes vagues a lieu surtout d’octobre à mars ; votre chauffeur vous conduit au phare du Sítio, meilleur point d’observation.',
          en: 'Yes, Nazaré is about 40 minutes from Óbidos. The big-wave spectacle mainly occurs from October to March; your chauffeur takes you to the Sítio lighthouse, the best viewing point.',
        },
      },
      {
        q: {
          fr: 'Vos chauffeurs parlent-ils anglais ?',
          en: 'Do your chauffeurs speak English?',
        },
        a: {
          fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.',
          en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.',
        },
      },
    ],
    nearby: ['lisbon', 'coimbra'],
  },
];

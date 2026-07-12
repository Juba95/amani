/**
 * alps-attractions.ts — Région ALPES, ATTRACTIONS & EUROPE CENTRALE/EST (~55)
 * ─────────────────────────────────────────────────────────────────────────────
 * Stations alpines, Côte d'Azur élargie, attractions et destinations icônes,
 * + Europe centrale et de l'Est.
 * Suivre le modèle éditorial des exemples strasbourg/toulouse dans france.ts.
 *
 * Villes attendues (~55) :
 *   Alpes FR : courchevel, meribel, val-d-isere, tignes, val-thorens,
 *              les-arcs, la-plagne, alpe-d-huez, les-deux-alpes, avoriaz,
 *              morzine, les-gets, la-clusaz, le-grand-bornand, serre-chevalier,
 *              annecy, evian-les-bains, thonon-les-bains
 *   Alpes CH/AT/IT : gstaad, verbier, crans-montana, villars-sur-ollon,
 *                    st-moritz, davos, klosters, andermatt, interlaken,
 *                    saas-fee, arosa, lech-zurs, st-anton, soelden, ischgl
 *   Côte d'Azur élargie : cap-ferrat, cap-d-antibes, juan-les-pins,
 *                         villefranche-sur-mer, beaulieu-sur-mer, eze-village,
 *                         mougins-village, valbonne, porto-cervo-sardaigne
 *   Attractions & icônes : mykonos, santorini, athens, dubrovnik, split,
 *                          disneyland-paris-area, andorra-la-vella
 *   Europe centrale/est : prague, vienna, budapest, warsaw, krakow,
 *                         bratislava, ljubljana, zagreb, bucharest, sofia,
 *                         tallinn, riga, vilnius
 */

import type { Destination } from '../types';

export const CITIES: Destination[] = [
  {
    slug: 'courchevel',
    name: { fr: 'Courchevel', en: 'Courchevel' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA) — altiport de Courchevel (CVF)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) se trouve à environ 190 km de Courchevel : comptez 2 h 30 à 2 h 45 de route selon les conditions ; depuis Chambéry (CMF), 110 km et 1 h 45 environ. La station dispose aussi de son propre altiport (CVF) pour les arrivées en avion-taxi ou hélicoptère. Votre chauffeur vous accueille avec panneau nominatif, suit votre vol en temps réel et circule en véhicule 4x4 équipé pour l’hiver.',
      en: 'Geneva Airport (GVA) lies around 190 km from Courchevel: allow 2 h 30 to 2 h 45 on the road depending on conditions; from Chambéry (CMF), roughly 110 km and 1 h 45. The resort also has its own altiport (CVF) for air-taxi and helicopter arrivals. Your chauffeur greets you with a name board, tracks your flight in real time and drives a 4x4 vehicle fully equipped for winter.',
    },
    intro: {
      fr: [
        'À 1 850 mètres au cœur des Trois Vallées, Courchevel est la station la plus exclusive des Alpes françaises : palaces cinq étoiles, tables étoilées, boutiques de la Croisette et pistes damées avec un soin légendaire. Votre **chauffeur privé à Courchevel** assure vos transferts depuis Genève, Lyon ou Chambéry, vos trajets entre les niveaux — 1850, Moriond, Village, Le Praz — et vos soirées, en 4x4 premium chauffé, skis et bagages pris en charge.',
        'Courchevel ouvre le plus grand domaine skiable relié du monde : **Les 3 Vallées** et leurs 600 km de pistes vers Méribel et Val Thorens. Hors ski, la Saulire et son panorama sur la Vanoise, l’altiport le plus célèbre des Alpes, les spas des palaces et, l’été, cols mythiques et lacs d’altitude. Votre chauffeur enchaîne déjeuners d’altitude, rendez-vous et retours de soirée sans que la neige ne soit jamais votre problème.',
      ],
      en: [
        'At 1,850 metres in the heart of Les 3 Vallées, Courchevel is the most exclusive resort in the French Alps: five-star palace hotels, Michelin-starred tables, the boutiques of La Croisette and slopes groomed with legendary care. Your **private chauffeur in Courchevel** handles transfers from Geneva, Lyon or Chambéry, journeys between the villages — 1850, Moriond, Village, Le Praz — and your evenings out, in a heated premium 4x4, skis and luggage taken care of.',
        'Courchevel opens onto the world’s largest linked ski area: **Les 3 Vallées** and its 600 km of pistes towards Méribel and Val Thorens. Off the snow, La Saulire and its panorama over the Vanoise, the most famous altiport in the Alps, the palace spas and, in summer, legendary passes and high-altitude lakes. Your chauffeur strings together mountain lunches, meetings and late returns — the snow is never your problem.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Déjeuner d’altitude aux tables étoilées', en: 'Mountain lunch at the starred tables' },
        teaser: {
          fr: 'Dépose au pied des cabines pour rejoindre Le 1947 au Cheval Blanc, Le Montgomerie ou une table d’altitude du Cap Horn. Votre chauffeur attend et vous ramène à votre chalet, skis chargés à bord.',
          en: 'Drop-off at the lifts to reach Le 1947 at Cheval Blanc, Le Montgomerie or a mountain table at Cap Horn. Your chauffeur waits and returns you to your chalet, skis loaded on board.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Tour des villages de Courchevel', en: 'Tour of the Courchevel villages' },
        teaser: {
          fr: 'De Saint-Bon au Praz et son tremplin olympique de 1992, puis Courchevel Village, Moriond et 1850 : chaque niveau a son caractère. Arrêts photo, boutiques de la Croisette, chocolat chaud face à la Saulire.',
          en: 'From Saint-Bon to Le Praz and its 1992 Olympic ski jumps, then Courchevel Village, Moriond and 1850: each level has its own character. Photo stops, the boutiques of La Croisette, hot chocolate facing La Saulire.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Journée à Val Thorens et Méribel', en: 'Day trip to Val Thorens and Méribel' },
        teaser: {
          fr: 'Découvrez les Trois Vallées côté route : Méribel et ses chalets de bois, puis Val Thorens, la plus haute station d’Europe à 2 300 mètres. Déjeuner en altitude, retour à Courchevel en fin de journée.',
          en: 'Discover Les 3 Vallées by road: Méribel and its wooden chalets, then Val Thorens, Europe’s highest resort at 2,300 metres. Mountain lunch, return to Courchevel at the end of the day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Escapade à Annecy et son lac', en: 'Escape to Annecy and its lake' },
        teaser: {
          fr: 'À deux heures de route, la Venise des Alpes : vieille ville, canaux, rives du lac le plus pur d’Europe. Déjeuner au bord de l’eau, retour par les gorges de l’Arly ou l’autoroute selon la saison.',
          en: 'Two hours away by road, the Venice of the Alps: the old town, the canals, the shores of Europe’s purest lake. Lakeside lunch, return via the Arly gorges or the motorway depending on the season.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Soirée à Courchevel 1850', en: 'Courchevel 1850 evening' },
        teaser: {
          fr: 'Dîner au Chabichou, au Sarkara ou à la table de votre palace, puis nuit courchevelloise — Bagatelle, caves feutrées de la Croisette. Le véhicule reste à disposition, retour au chalet à toute heure.',
          en: 'Dinner at Le Chabichou, Sarkara or your palace’s own table, then Courchevel by night — Bagatelle, the discreet clubs of La Croisette. The vehicle stays on standby; back to the chalet at any hour.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '490',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Courchevel ?',
          en: 'How much does a transfer between Geneva Airport and Courchevel cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Courchevel est facturé à prix fixe, communiqué à la réservation, quelles que soient les conditions de circulation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Geneva (GVA) and Courchevel is charged at a fixed price, confirmed at booking, whatever the traffic conditions. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Vos véhicules sont-ils équipés pour la montée à Courchevel en hiver ?',
          en: 'Are your vehicles equipped for the winter climb to Courchevel?',
        },
        a: {
          fr: 'Oui. De novembre à avril, nous n’engageons sur la route de Courchevel que des véhicules 4x4 ou équipés de pneus neige et de chaînes, conduits par des chauffeurs habitués aux routes de Tarentaise. Skis, snowboards et bagages volumineux sont pris en charge sans supplément, dans la limite de la capacité du véhicule.',
          en: 'Yes. From November to April we only assign 4x4 vehicles, or vehicles fitted with snow tyres and chains, to the Courchevel road, driven by chauffeurs who know the Tarentaise routes well. Skis, snowboards and bulky luggage are carried at no extra charge, within the vehicle’s capacity.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer des trajets entre les différents niveaux de Courchevel et vers Méribel ?',
          en: 'Can you handle journeys between the Courchevel villages and to Méribel?',
        },
        a: {
          fr: 'Absolument. Nous relions Le Praz, Courchevel Village, Moriond et 1850 pour vos dîners, cours de ski ou rendez-vous, et assurons les liaisons routières vers Méribel, Val Thorens ou La Tania. En mise à disposition à l’heure, le véhicule reste à votre porte toute la journée ou toute la soirée.',
          en: 'Absolutely. We link Le Praz, Courchevel Village, Moriond and 1850 for your dinners, ski lessons or meetings, and provide road connections to Méribel, Val Thorens or La Tania. With hourly hire, the vehicle stays at your door all day or all evening.',
        },
      },
    ],
    nearby: ['meribel', 'val-thorens', 'la-plagne', 'les-arcs'],
  },
  {
    slug: 'meribel',
    name: { fr: 'Méribel', en: 'Méribel' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) est à environ 180 km de Méribel : comptez 2 h 30 de route ; depuis Chambéry (CMF), 100 km et 1 h 30 environ. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif, suit votre vol en temps réel et vous monte en station à bord d’un 4x4 équipé pour l’hiver, porte-skis compris.',
      en: 'Geneva Airport (GVA) is around 180 km from Méribel: allow 2 h 30 on the road; from Chambéry (CMF), roughly 100 km and 1 h 30. Your chauffeur waits in the arrivals hall with a name board, tracks your flight in real time and drives you up to the resort in a winter-equipped 4x4, ski rack included.',
    },
    intro: {
      fr: [
        'Fondée en 1938 dans la vallée des Allues, Méribel est la station-chalet par excellence : bois, lauze et pierre imposés par un urbanisme exigeant, du Village à Mottaret en passant par le cœur de la station à 1 450 mètres. Votre **chauffeur privé à Méribel** relie les hameaux, la Chaudanne et les résidences de Belvédère ou du Rond-Point, assure vos transferts depuis Genève ou Chambéry et vos soirées, skis et bagages chargés pour vous.',
        'Position centrale oblige, Méribel est la clé des **Trois Vallées** : Courchevel d’un côté, Val Thorens de l’autre, 600 km de pistes reliées. Hors ski, le parc national de la Vanoise commence aux crêtes, l’altiport accueille les vols panoramiques, et l’été transforme la vallée en terrain de golf, de trail et de cols cyclistes. Votre chauffeur organise excursions, déjeuners d’altitude et liaisons inter-stations à la demande.',
      ],
      en: [
        'Founded in 1938 in the Allues valley, Méribel is the definitive chalet resort: wood, slate and stone imposed by strict planning rules, from Méribel Village to Mottaret via the resort centre at 1,450 metres. Your **private chauffeur in Méribel** links the hamlets, La Chaudanne and the residences of Belvédère or Rond-Point, handles your transfers from Geneva or Chambéry and your evenings out, with skis and luggage loaded for you.',
        'Its central position makes Méribel the key to **Les 3 Vallées**: Courchevel on one side, Val Thorens on the other, 600 km of linked pistes. Beyond skiing, the Vanoise national park begins at the ridgelines, the altiport hosts panoramic flights, and summer turns the valley into golf, trail-running and cycling-col country. Your chauffeur arranges excursions, mountain lunches and inter-resort connections on request.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Journée Trois Vallées par la route', en: 'Les 3 Vallées by road' },
        teaser: {
          fr: 'Courchevel 1850 et la Croisette le matin, Val Thorens et la Cime Caron l’après-midi : le plus grand domaine du monde vu depuis la vallée. Déjeuner d’altitude réservé, retour à Méribel au crépuscule.',
          en: 'Courchevel 1850 and La Croisette in the morning, Val Thorens and the Cime Caron in the afternoon: the world’s largest ski area seen from the valley floor. Mountain lunch booked ahead, back in Méribel at dusk.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Hameaux des Allues et Méribel Village', en: 'The Allues hamlets and Méribel Village' },
        teaser: {
          fr: 'Descente de la vallée par Les Allues, ses fours à pain et ses chapelles baroques, puis remontée par Méribel Village et le Raffort. L’architecture savoyarde authentique derrière la station, à votre rythme.',
          en: 'Down the valley through Les Allues, its bread ovens and Baroque chapels, then back up via Méribel Village and Le Raffort. The authentic Savoyard architecture behind the resort, at your own pace.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Déjeuner d’altitude à la Folie Douce ou au Clos Bernard', en: 'Mountain lunch at La Folie Douce or Le Clos Bernard' },
        teaser: {
          fr: 'Dépose à la Chaudanne pour rejoindre les tables d’altitude de Méribel — Folie Douce festive ou Clos Bernard en forêt. Votre chauffeur récupère skieurs et non-skieurs au retour des pistes.',
          en: 'Drop-off at La Chaudanne to reach Méribel’s mountain tables — the festive Folie Douce or Le Clos Bernard in the forest. Your chauffeur collects skiers and non-skiers alike when the slopes close.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Excursion à Annecy ou Chambéry', en: 'Excursion to Annecy or Chambéry' },
        teaser: {
          fr: 'Quittez la neige pour une journée lacustre ou patrimoniale : Annecy et ses canaux, ou Chambéry, ancienne capitale des ducs de Savoie et sa fontaine des Éléphants. Retour en station pour le dîner.',
          en: 'Trade the snow for a day of lakes or heritage: Annecy and its canals, or Chambéry, former capital of the Dukes of Savoy with its Elephants fountain. Back in the resort in time for dinner.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '850',
      },
      {
        title: { fr: 'Soirée méribeloise', en: 'Méribel evening' },
        teaser: {
          fr: 'Dîner à L’Ekrin au Kaïla — la table étoilée de la station — ou dans un chalet d’alpage privatisé, puis dernier verre au Doron ou à la Folie Douce. Véhicule à disposition, retour au chalet sans conduite de nuit.',
          en: 'Dinner at L’Ekrin at Le Kaïla — the resort’s Michelin-starred table — or in a privatised mountain chalet, then a nightcap at Le Doron or La Folie Douce. Vehicle on standby; home to the chalet with no night driving.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '440',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Méribel ?',
          en: 'How much does a transfer between Geneva Airport and Méribel cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Méribel est facturé à prix fixe, confirmé à la réservation. Il inclut l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard — sans supplément neige ni majoration de nuit cachée.',
          en: 'A private transfer between Geneva (GVA) and Méribel is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay — with no hidden snow or night surcharges.',
        },
      },
      {
        q: {
          fr: 'Le matériel de ski et les bagages volumineux sont-ils pris en charge ?',
          en: 'Do you carry ski equipment and bulky luggage?',
        },
        a: {
          fr: 'Oui. Nos vans et 4x4 embarquent skis, snowboards, chaussures et valises de saison sans supplément, dans la limite de la capacité du véhicule. Indiquez le nombre de paires à la réservation : nous affectons le véhicule adapté, avec porte-skis ou coffre long si nécessaire.',
          en: 'Yes. Our vans and 4x4s carry skis, snowboards, boots and season luggage at no extra charge, within the vehicle’s capacity. Tell us the number of pairs when booking: we assign the right vehicle, with a ski rack or extended boot if needed.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les liaisons vers Courchevel ou Val Thorens en soirée ?',
          en: 'Do you provide evening connections to Courchevel or Val Thorens?',
        },
        a: {
          fr: 'Oui. Quand les remontées sont fermées, la route reste le seul lien entre les vallées : nous assurons dîners à Courchevel 1850, soirées à Val Thorens et retours tardifs à Méribel, à prix fixe convenu à l’avance, avec un chauffeur qui connaît chaque lacet de la Tarentaise.',
          en: 'Yes. Once the lifts close, the road is the only link between the valleys: we handle dinners in Courchevel 1850, evenings in Val Thorens and late returns to Méribel, at a fixed price agreed in advance, with a chauffeur who knows every hairpin of the Tarentaise.',
        },
      },
    ],
    nearby: ['courchevel', 'val-thorens', 'la-plagne'],
  },
  {
    slug: 'val-d-isere',
    name: { fr: 'Val d’Isère', en: 'Val d’Isère' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) se trouve à environ 220 km de Val d’Isère : comptez 3 heures de route par l’autoroute puis la haute Tarentaise ; depuis Chambéry (CMF), 145 km et 2 h 15 environ. Votre chauffeur vous accueille avec panneau nominatif, suit votre vol en temps réel et franchit les gorges de la Daille en 4x4 chaîné quand la neige l’exige.',
      en: 'Geneva Airport (GVA) lies around 220 km from Val d’Isère: allow 3 hours by motorway and then the upper Tarentaise; from Chambéry (CMF), roughly 145 km and 2 h 15. Your chauffeur greets you with a name board, tracks your flight in real time and takes the La Daille gorges in a chained 4x4 whenever the snow demands it.',
    },
    intro: {
      fr: [
        'Village de haute Tarentaise perché à 1 850 mètres, Val d’Isère marie clocher du XVIIe siècle, façades de pierre et de bois et palmarès sportif hors norme — Jean-Claude Killy, la face de Bellevarde des Jeux de 1992, le Critérium de la Première Neige chaque décembre. Votre **chauffeur privé à Val d’Isère** assure transferts aéroport, liaisons vers La Daille et Le Fornet, dîners et retours de piste, en véhicule 4x4 équipé pour la haute montagne.',
        'Avec Tignes, Val d’Isère forme l’**Espace Killy** — 300 km de pistes entre 1 550 et 3 456 mètres, du glacier du Pisaillas aux vallons du Fornet, skiables de fin novembre à début mai. L’été, le col de l’Iseran, plus haut col routier des Alpes à 2 764 mètres, ouvre la route de la Maurienne, et le parc national de la Vanoise déploie ses sentiers. Votre chauffeur transforme chaque saison en itinéraire sur mesure.',
      ],
      en: [
        'A high-Tarentaise village perched at 1,850 metres, Val d’Isère blends a 17th-century bell tower, stone-and-timber façades and an exceptional sporting pedigree — Jean-Claude Killy, the Bellevarde face of the 1992 Olympics, the Critérium de la Première Neige every December. Your **private chauffeur in Val d’Isère** covers airport transfers, connections to La Daille and Le Fornet, dinners and end-of-piste pick-ups, in a 4x4 equipped for the high mountains.',
        'Together with Tignes, Val d’Isère forms the **Espace Killy** — 300 km of pistes between 1,550 and 3,456 metres, from the Pisaillas glacier to the Fornet valleys, skiable from late November to early May. In summer, the Col de l’Iseran, the highest paved pass in the Alps at 2,764 metres, opens the road to the Maurienne, and the Vanoise national park unfolds its trails. Your chauffeur turns every season into a tailor-made itinerary.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Journée à Tignes et au barrage du Chevril', en: 'Day trip to Tignes and the Chevril dam' },
        teaser: {
          fr: 'La station sœur de l’Espace Killy par la route : le lac de Tignes à 2 100 mètres, le barrage du Chevril et sa fresque monumentale, le glacier de la Grande Motte en toile de fond. Déjeuner au bord du lac.',
          en: 'The Espace Killy’s sister resort by road: the Tignes lake at 2,100 metres, the Chevril dam and its monumental fresco, the Grande Motte glacier as a backdrop. Lunch by the lakeside.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Col de l’Iseran et Bonneval-sur-Arc', en: 'Col de l’Iseran and Bonneval-sur-Arc' },
        teaser: {
          fr: 'L’été seulement : montée au plus haut col routier des Alpes — 2 764 mètres — puis descente en Maurienne jusqu’à Bonneval-sur-Arc, l’un des plus beaux villages de France. Pique-nique d’altitude ou table d’alpage.',
          en: 'Summer only: up to the highest paved pass in the Alps — 2,764 metres — then down into the Maurienne to Bonneval-sur-Arc, one of France’s most beautiful villages. High-altitude picnic or a mountain-farm table.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Vieux village et hameau du Fornet', en: 'The old village and Le Fornet hamlet' },
        teaser: {
          fr: 'L’église Saint-Bernard-de-Menthon, les ruelles du vieux Val, puis Le Fornet, dernier hameau avant l’Iseran, et le front de neige de La Daille. Une lecture intime de la station, arrêts photo compris.',
          en: 'The Saint-Bernard-de-Menthon church, the lanes of the old village, then Le Fornet, the last hamlet before the Iseran, and the La Daille snow front. An intimate reading of the resort, photo stops included.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '330',
      },
      {
        title: { fr: 'Critérium de la Première Neige en décembre', en: 'Critérium de la Première Neige in December' },
        teaser: {
          fr: 'Chaque début de saison, la Coupe du monde de ski s’ouvre sur la face de Bellevarde. Dépose au plus près des tribunes, attente pendant les manches, retour au chalet ou dîner d’après-course réservé.',
          en: 'Every early season, the Ski World Cup opens on the Bellevarde face. Drop-off as close as possible to the stands, standby between runs, return to the chalet or a post-race dinner booked ahead.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Soirée avaline', en: 'Val d’Isère evening' },
        teaser: {
          fr: 'Dîner à L’Atelier d’Edmond au Fornet — deux étoiles — ou à La Table de l’Ours, puis la Folie Douce ou le Cocorico pour prolonger la nuit. Le véhicule vous raccompagne à toute heure, quelle que soit la météo.',
          en: 'Dinner at L’Atelier d’Edmond in Le Fornet — two Michelin stars — or La Table de l’Ours, then La Folie Douce or Cocorico to carry the night on. The vehicle takes you home at any hour, whatever the weather.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '470',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Val d’Isère ?',
          en: 'How much does a transfer between Geneva Airport and Val d’Isère cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Val d’Isère est facturé à prix fixe, communiqué à la réservation, y compris en cas de chute de neige. Il comprend l’accueil avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Geneva (GVA) and Val d’Isère is charged at a fixed price, confirmed at booking, snowfall included. It comes with a name-board meet-and-greet, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'La route de Val d’Isère est-elle praticable en plein hiver ?',
          en: 'Is the road to Val d’Isère passable in midwinter?',
        },
        a: {
          fr: 'Oui, la route de la haute Tarentaise est entretenue tout l’hiver, mais elle exige un équipement sérieux : nos chauffeurs montent en 4x4 avec pneus neige et chaînes à bord, et adaptent l’horaire de départ aux bulletins météo et aux fermetures ponctuelles des gorges de la Daille.',
          en: 'Yes, the upper Tarentaise road is maintained all winter, but it demands proper equipment: our chauffeurs drive up in 4x4s with snow tyres and chains on board, and adjust departure times to weather bulletins and occasional closures of the La Daille gorges.',
        },
      },
      {
        q: {
          fr: 'Jusqu’à quand la saison de ski dure-t-elle à Val d’Isère ?',
          en: 'How late does the ski season run in Val d’Isère?',
        },
        a: {
          fr: 'Grâce à son altitude et au glacier du Pisaillas, Val d’Isère skie de fin novembre à début mai — l’une des saisons les plus longues des Alpes. Nous assurons les transferts sur toute cette période, ainsi que l’été pour le cyclisme, la randonnée et le ski d’été sur glacier.',
          en: 'Thanks to its altitude and the Pisaillas glacier, Val d’Isère skis from late November to early May — one of the longest seasons in the Alps. We provide transfers throughout that window, and in summer for cycling, hiking and glacier summer skiing.',
        },
      },
    ],
    nearby: ['tignes', 'les-arcs', 'la-plagne'],
  },
  {
    slug: 'tignes',
    name: { fr: 'Tignes', en: 'Tignes' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) est à environ 215 km de Tignes : comptez 3 heures de route ; depuis Chambéry (CMF), 140 km et 2 heures environ ; depuis Lyon-Saint Exupéry (LYS), 230 km et 2 h 45. Votre chauffeur vous accueille avec panneau nominatif, suit votre vol en temps réel et monte jusqu’à Tignes-le-Lac ou Val Claret en 4x4 équipé neige.',
      en: 'Geneva Airport (GVA) is around 215 km from Tignes: allow 3 hours on the road; from Chambéry (CMF), 140 km and about 2 hours; from Lyon-Saint Exupéry (LYS), 230 km and 2 h 45. Your chauffeur greets you with a name board, tracks your flight in real time and drives up to Tignes-le-Lac or Val Claret in a snow-equipped 4x4.',
    },
    intro: {
      fr: [
        'Née de la construction du barrage du Chevril qui engloutit le vieux village en 1952, Tignes est la station de haute altitude par excellence : Tignes-le-Lac et Val Claret à 2 100 mètres, Les Brévières et Les Boisses en contrebas, un lac gelé l’hiver et un glacier en sentinelle. Votre **chauffeur privé à Tignes** relie les cinq villages, assure vos transferts depuis Genève, Chambéry ou Lyon et vos retours de soirée, en 4x4 équipé pour la haute montagne.',
        'Avec Val d’Isère, Tignes partage l’**Espace Killy** et ses 300 km de pistes ; le glacier de la Grande Motte, à 3 456 mètres, offre en prime l’un des rares skis d’été de France. Hors piste, plongée sous glace sur le lac, fresque monumentale du barrage du Chevril, golf d’altitude l’été et étapes régulières du Tour de France. Votre chauffeur orchestre excursions et liaisons inter-stations au fil des saisons.',
      ],
      en: [
        'Born of the Chevril dam that drowned the old village in 1952, Tignes is the definitive high-altitude resort: Tignes-le-Lac and Val Claret at 2,100 metres, Les Brévières and Les Boisses below, a frozen lake in winter and a glacier standing guard. Your **private chauffeur in Tignes** links the five villages, handles your transfers from Geneva, Chambéry or Lyon and your late returns, in a 4x4 built for the high mountains.',
        'With Val d’Isère, Tignes shares the **Espace Killy** and its 300 km of pistes; the Grande Motte glacier, at 3,456 metres, adds one of France’s rare summer-skiing areas. Off the snow: ice diving in the lake, the monumental fresco on the Chevril dam, high-altitude golf in summer and regular Tour de France stages. Your chauffeur orchestrates excursions and inter-resort connections through the seasons.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Les cinq villages de Tignes', en: 'The five villages of Tignes' },
        teaser: {
          fr: 'Des Brévières, village savoyard préservé sous le barrage, aux Boisses, au Lavachet, au Lac et à Val Claret : cinq altitudes, cinq ambiances. Halte devant la fresque du Chevril et vue sur la Grande Motte.',
          en: 'From Les Brévières, a preserved Savoyard village below the dam, to Les Boisses, Le Lavachet, Le Lac and Val Claret: five altitudes, five moods. A stop at the Chevril fresco, with the Grande Motte in view.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Val d’Isère et le vieux village', en: 'Val d’Isère and its old village' },
        teaser: {
          fr: 'La station jumelle de l’Espace Killy par la route : clocher du XVIIe siècle, hameau du Fornet, front de neige de La Daille. Déjeuner avaline puis retour à Tignes en fin d’après-midi.',
          en: 'The Espace Killy’s twin resort by road: the 17th-century bell tower, the Fornet hamlet, the La Daille snow front. Lunch in Val d’Isère, then back to Tignes in the late afternoon.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Ski d’été sur la Grande Motte', en: 'Summer skiing on the Grande Motte' },
        teaser: {
          fr: 'De juin à début août, le glacier skie au petit matin : dépose au funiculaire de Val Claret avant l’ouverture, récupération à midi, après-midi au golf du lac ou sur les sentiers de la Vanoise.',
          en: 'From June to early August the glacier skis in the early morning: drop-off at the Val Claret funicular before opening, pick-up at noon, afternoon at the lakeside golf course or on the Vanoise trails.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Journée Paradiski : Les Arcs et La Plagne', en: 'Paradiski day: Les Arcs and La Plagne' },
        teaser: {
          fr: 'Descente de la haute Tarentaise vers Bourg-Saint-Maurice, montée aux Arcs signés Charlotte Perriand, puis La Plagne et sa piste de bobsleigh olympique. Le grand voisin de l’Espace Killy en une journée.',
          en: 'Down the upper Tarentaise to Bourg-Saint-Maurice, up to Les Arcs and its Charlotte Perriand architecture, then La Plagne and its Olympic bobsleigh track. The Espace Killy’s great neighbour in one day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Soirée tignarde', en: 'Tignes evening' },
        teaser: {
          fr: 'Dîner à Ursus, la table étoilée de Val Claret plantée dans une forêt intérieure, ou au Panoramic à 3 032 mètres en motoneige, puis dernier verre au Lac. Retour au pied de votre résidence, sans conduite.',
          en: 'Dinner at Ursus, Val Claret’s Michelin-starred table set in an indoor forest, or at Le Panoramic at 3,032 metres by snowmobile, then a nightcap by the lake. Dropped at your residence door, no driving.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '450',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Tignes ?',
          en: 'How much does a transfer between Geneva Airport and Tignes cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Tignes est facturé à prix fixe, confirmé à la réservation, quel que soit l’état de la route. Il inclut l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Geneva (GVA) and Tignes is charged at a fixed price, confirmed at booking, whatever the road conditions. It includes a name-board meet-and-greet in the arrivals hall, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous les différents villages de Tignes, jusqu’à Val Claret ?',
          en: 'Do you serve all the Tignes villages, up to Val Claret?',
        },
        a: {
          fr: 'Oui. Nous déposons à l’adresse exacte de votre séjour — Les Brévières, Les Boisses, Le Lavachet, Tignes-le-Lac ou Val Claret — et assurons ensuite vos trajets entre villages pour les cours de ski, dîners et soirées, en mise à disposition à l’heure si vous le souhaitez.',
          en: 'Yes. We drop you at the exact address of your stay — Les Brévières, Les Boisses, Le Lavachet, Tignes-le-Lac or Val Claret — and then cover your journeys between villages for ski lessons, dinners and evenings out, with hourly hire if you wish.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Tignes hors saison d’hiver ?',
          en: 'Can I reach Tignes outside the winter season?',
        },
        a: {
          fr: 'Bien sûr. Tignes vit toute l’année : ski d’été sur la Grande Motte de juin à début août, golf et trail autour du lac, stages sportifs d’altitude. Nous assurons les transferts et mises à disposition en toute saison, avec des temps de trajet sensiblement plus courts qu’en février.',
          en: 'Of course. Tignes lives year-round: summer skiing on the Grande Motte from June to early August, golf and trail running around the lake, high-altitude training camps. We provide transfers and hourly hire in every season, with journey times noticeably shorter than in February.',
        },
      },
    ],
    nearby: ['val-d-isere', 'les-arcs', 'la-plagne'],
  },
  {
    slug: 'val-thorens',
    name: { fr: 'Val Thorens', en: 'Val Thorens' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) se trouve à environ 195 km de Val Thorens : comptez 2 h 45 à 3 heures de route ; depuis Chambéry (CMF), 115 km et environ 2 heures par la vallée des Belleville. Votre chauffeur vous accueille avec panneau nominatif, suit votre vol en temps réel et gravit les 36 lacets de la montée en 4x4 équipé neige.',
      en: 'Geneva Airport (GVA) lies around 195 km from Val Thorens: allow 2 h 45 to 3 hours on the road; from Chambéry (CMF), 115 km and about 2 hours via the Belleville valley. Your chauffeur greets you with a name board, tracks your flight in real time and climbs the 36 hairpins of the final ascent in a snow-equipped 4x4.',
    },
    intro: {
      fr: [
        'À 2 300 mètres au fond de la vallée des Belleville, Val Thorens est la plus haute station d’Europe — neige garantie de fin novembre à début mai, station piétonne, hôtels cinq étoiles et tables d’altitude régulièrement primées. Votre **chauffeur privé à Val Thorens** assure vos transferts depuis Genève, Lyon ou Chambéry, la dépose au plus près de votre résidence dans la station sans voitures, et vos liaisons vers Les Menuires ou Saint-Martin-de-Belleville.',
        'Val Thorens est le sommet des **Trois Vallées** : la Cime Caron à 3 200 mètres et son téléphérique panoramique, 600 km de pistes reliées vers Méribel et Courchevel, la piste de luge la plus longue de France. En contrebas, Saint-Martin-de-Belleville cache La Bouitte, trois étoiles Michelin dans un hameau savoyard. Votre chauffeur compose transferts, dîners d’exception et journées inter-stations à votre mesure.',
      ],
      en: [
        'At 2,300 metres at the head of the Belleville valley, Val Thorens is Europe’s highest resort — snow guaranteed from late November to early May, a pedestrianised centre, five-star hotels and repeatedly awarded mountain tables. Your **private chauffeur in Val Thorens** handles transfers from Geneva, Lyon or Chambéry, drop-off as close as possible to your residence in the car-free resort, and connections to Les Menuires or Saint-Martin-de-Belleville.',
        'Val Thorens is the summit of **Les 3 Vallées**: the Cime Caron at 3,200 metres with its panoramic cable car, 600 km of linked pistes towards Méribel and Courchevel, and France’s longest toboggan run. Lower down, Saint-Martin-de-Belleville hides La Bouitte, three Michelin stars in a Savoyard hamlet. Your chauffeur composes transfers, exceptional dinners and inter-resort days to your measure.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Dîner à La Bouitte, trois étoiles', en: 'Dinner at three-starred La Bouitte' },
        teaser: {
          fr: 'À Saint-Marcel, hameau de Saint-Martin-de-Belleville, la table des Meilleur cultive trois étoiles Michelin dans un décor de bois blond. Descente et remontée de vallée assurées, à toute heure, par tous les temps.',
          en: 'In Saint-Marcel, a hamlet of Saint-Martin-de-Belleville, the Meilleur family’s table holds three Michelin stars in a blond-wood setting. Descent and return up the valley handled at any hour, in any weather.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '480',
      },
      {
        title: { fr: 'Vallée des Belleville authentique', en: 'The authentic Belleville valley' },
        teaser: {
          fr: 'Saint-Martin-de-Belleville et ses toits de lauze, le sanctuaire Notre-Dame-de-la-Vie, les hameaux de Villarabout et du Châtelard : la Savoie d’avant les stations, à vingt minutes de Val Thorens.',
          en: 'Saint-Martin-de-Belleville and its slate roofs, the Notre-Dame-de-la-Vie sanctuary, the hamlets of Villarabout and Le Châtelard: Savoie as it was before the resorts, twenty minutes from Val Thorens.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Journée Courchevel et Méribel par la route', en: 'Courchevel and Méribel by road' },
        teaser: {
          fr: 'Les deux autres vallées du domaine vues d’en bas : les chalets de Méribel, la Croisette de Courchevel 1850 et ses boutiques, déjeuner étoilé ou table d’altitude. Retour à Val Thorens avant la nuit.',
          en: 'The ski area’s two other valleys seen from below: Méribel’s chalets, La Croisette in Courchevel 1850 and its boutiques, a starred lunch or a mountain table. Back in Val Thorens before nightfall.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '780',
      },
      {
        title: { fr: 'Cime Caron et sports de glisse', en: 'Cime Caron and snow sports' },
        teaser: {
          fr: 'Dépose au téléphérique de la Cime Caron pour le panorama à 3 200 mètres — Mont Blanc, Écrins, Vanoise —, puis luge sur la piste de 6 km ou motoneige en soirée. Votre chauffeur vous attend à chaque étape.',
          en: 'Drop-off at the Cime Caron cable car for the 3,200-metre panorama — Mont Blanc, the Écrins, the Vanoise — then the 6 km toboggan run or an evening snowmobile ride. Your chauffeur waits at every stage.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '370',
      },
      {
        title: { fr: 'Soirée à 2 300 mètres', en: 'An evening at 2,300 metres' },
        teaser: {
          fr: 'Dîner aux tables primées de la station — Le Diamant Noir au Koh-I Nor, Les Explorateurs au Pashmina — puis la Folie Douce ou le Malaysia pour la suite. Retour à votre porte dans la station piétonne.',
          en: 'Dinner at the resort’s awarded tables — Le Diamant Noir at Koh-I Nor, Les Explorateurs at Le Pashmina — then La Folie Douce or the Malaysia club afterwards. Returned to your door in the pedestrian resort.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '430',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Val Thorens ?',
          en: 'How much does a transfer between Geneva Airport and Val Thorens cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Val Thorens est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard, sans majoration liée à la neige.',
          en: 'A private transfer between Geneva (GVA) and Val Thorens is charged at a fixed price, confirmed at booking. It includes a name-board meet-and-greet in the arrivals hall, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay, with no snow-related surcharge.',
        },
      },
      {
        q: {
          fr: 'Comment se passe la dépose dans une station piétonne comme Val Thorens ?',
          en: 'How does drop-off work in a pedestrianised resort like Val Thorens?',
        },
        a: {
          fr: 'Val Thorens limite la circulation dans son cœur, mais chaque résidence et chaque hôtel dispose d’un point de dépose autorisé que nos chauffeurs connaissent. Nous vous déposons au plus près de votre porte, aidons au déchargement des skis et bagages et coordonnons si besoin la navette chenillée de votre hôtel.',
          en: 'Val Thorens restricts traffic in its core, but every residence and hotel has an authorised drop-off point our chauffeurs know. We drop you as close as possible to your door, help unload skis and luggage and, if needed, coordinate with your hotel’s tracked shuttle.',
        },
      },
      {
        q: {
          fr: 'La neige garantit-elle un transfert possible toute la saison ?',
          en: 'Can transfers run all season despite the snow?',
        },
        a: {
          fr: 'Oui. La route des Belleville est déneigée en continu et nos véhicules montent en 4x4 avec pneus neige et chaînes. En cas d’épisode exceptionnel, votre chauffeur adapte l’horaire de départ avec vous et reste en contact jusqu’à la prise en charge — le prix convenu, lui, ne change pas.',
          en: 'Yes. The Belleville road is cleared continuously and our vehicles climb in 4x4s with snow tyres and chains. During exceptional weather, your chauffeur adjusts the departure time with you and stays in contact until pick-up — the agreed price never changes.',
        },
      },
    ],
    nearby: ['meribel', 'courchevel', 'la-plagne'],
  },
  {
    slug: 'les-arcs',
    name: { fr: 'Les Arcs', en: 'Les Arcs' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) est à environ 200 km des Arcs : comptez 2 h 45 de route ; depuis Chambéry (CMF), 125 km et environ 2 heures ; depuis Lyon-Saint Exupéry (LYS), 215 km et 2 h 30. Votre chauffeur vous accueille avec panneau nominatif, suit votre vol en temps réel et vous monte à Arc 1600, 1800, 1950 ou 2000 en 4x4 équipé pour l’hiver.',
      en: 'Geneva Airport (GVA) is around 200 km from Les Arcs: allow 2 h 45 on the road; from Chambéry (CMF), 125 km and about 2 hours; from Lyon-Saint Exupéry (LYS), 215 km and 2 h 30. Your chauffeur greets you with a name board, tracks your flight in real time and drives you up to Arc 1600, 1800, 1950 or 2000 in a winter-equipped 4x4.',
    },
    intro: {
      fr: [
        'Au-dessus de Bourg-Saint-Maurice, Les Arcs étagent quatre stations — 1600, 1800, 1950 et 2000 — dont l’architecture signée Charlotte Perriand est classée Patrimoine du XXe siècle. Votre **chauffeur privé aux Arcs** assure vos transferts depuis Genève, Lyon ou Chambéry, la desserte de chaque village d’altitude et du funiculaire de Bourg-Saint-Maurice, ainsi que vos dîners et retours tardifs, en véhicule 4x4 équipé neige.',
        'Relié à La Plagne par le téléphérique Vanoise Express, Les Arcs forme le domaine **Paradiski** — 425 km de pistes jusqu’à l’Aiguille Rouge et ses 3 226 mètres, face au Mont Blanc. En contrebas, le village préservé du Pré-Saint-Esprit et les vergers de Haute Tarentaise ; l’été, le col du Petit-Saint-Bernard ouvre la route de l’Italie. Votre chauffeur relie les altitudes et les saisons sans effort.',
      ],
      en: [
        'Above Bourg-Saint-Maurice, Les Arcs stacks four resorts — 1600, 1800, 1950 and 2000 — whose Charlotte Perriand architecture is listed as 20th-century heritage. Your **private chauffeur in Les Arcs** covers transfers from Geneva, Lyon or Chambéry, serves every altitude village and the Bourg-Saint-Maurice funicular, and handles your dinners and late returns in a winter-equipped 4x4.',
        'Linked to La Plagne by the Vanoise Express cable car, Les Arcs forms the **Paradiski** area — 425 km of pistes rising to the Aiguille Rouge at 3,226 metres, facing Mont Blanc. Below, the preserved hamlets of the upper Tarentaise and their orchards; in summer, the Petit-Saint-Bernard pass opens the road to Italy. Your chauffeur links the altitudes and the seasons effortlessly.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Les quatre Arcs et l’œuvre de Charlotte Perriand', en: 'The four Arcs and Charlotte Perriand’s legacy' },
        teaser: {
          fr: 'D’Arc 1600, station pionnière de 1968, aux paquebots de neige d’Arc 1800, au village piéton d’Arc 1950 et à l’austère beauté d’Arc 2000 : une leçon d’architecture moderne à flanc de montagne.',
          en: 'From Arc 1600, the pioneering 1968 resort, to the snow-liner buildings of Arc 1800, the pedestrian village of Arc 1950 and the austere beauty of Arc 2000: a lesson in modern architecture on the mountainside.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'La Plagne par la route et le bobsleigh olympique', en: 'La Plagne by road and the Olympic bobsleigh' },
        teaser: {
          fr: 'L’autre versant de Paradiski : montée à Plagne Centre, descente en bob raft ou en bobsleigh sur la piste des Jeux d’Albertville 1992, vin chaud à Montchavin. Retour aux Arcs en soirée.',
          en: 'Paradiski’s other flank: up to Plagne Centre, a bob-raft or bobsleigh run down the 1992 Albertville Olympic track, mulled wine in Montchavin. Back in Les Arcs by evening.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Col du Petit-Saint-Bernard et La Thuile', en: 'Petit-Saint-Bernard pass and La Thuile' },
        teaser: {
          fr: 'L’été, la route du col à 2 188 mètres franchit la frontière vers le val d’Aoste : hospice millénaire, jardin alpin de la Chanousia, déjeuner italien à La Thuile. Une journée à cheval sur deux pays.',
          en: 'In summer, the 2,188-metre pass road crosses into the Aosta valley: the thousand-year-old hospice, the Chanousia alpine garden, an Italian lunch in La Thuile. A day astride two countries.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
      {
        title: { fr: 'Bourg-Saint-Maurice et les hameaux de Tarentaise', en: 'Bourg-Saint-Maurice and the Tarentaise hamlets' },
        teaser: {
          fr: 'Marché du samedi à Bourg-Saint-Maurice, beaufort d’alpage à la coopérative, églises baroques de Vulmix et de Hauteville-Gondon : la vallée vivante sous les pistes, à vingt minutes de votre résidence.',
          en: 'Saturday market in Bourg-Saint-Maurice, alpine Beaufort cheese at the cooperative, the Baroque churches of Vulmix and Hauteville-Gondon: the living valley beneath the pistes, twenty minutes from your residence.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '310',
      },
      {
        title: { fr: 'Soirée arcadienne', en: 'Les Arcs evening' },
        teaser: {
          fr: 'Dîner au village piéton d’Arc 1950 ou dans une table d’altitude accessible en chenillette, puis descente sur Bourg-Saint-Maurice ou dernier verre à 1800. Le véhicule vous ramène quelle que soit l’heure.',
          en: 'Dinner in the pedestrian village of Arc 1950 or at a mountain table reached by snowcat, then down to Bourg-Saint-Maurice or a nightcap in 1800. The vehicle brings you home whatever the hour.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '400',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Les Arcs ?',
          en: 'How much does a transfer between Geneva Airport and Les Arcs cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Les Arcs est facturé à prix fixe, confirmé à la réservation, quel que soit le village d’arrivée — 1600, 1800, 1950 ou 2000. Il inclut l’accueil avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Geneva (GVA) and Les Arcs is charged at a fixed price, confirmed at booking, whichever village you are staying in — 1600, 1800, 1950 or 2000. It includes a name-board meet-and-greet, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous le funiculaire de Bourg-Saint-Maurice et la gare TGV ?',
          en: 'Do you serve the Bourg-Saint-Maurice funicular and TGV station?',
        },
        a: {
          fr: 'Oui. La gare de Bourg-Saint-Maurice, terminus TGV et Eurostar des neiges, est l’un de nos points de prise en charge les plus fréquents : accueil sur le quai possible, chargement des skis, montée directe à votre résidence ou dépose au funiculaire selon votre préférence.',
          en: 'Yes. Bourg-Saint-Maurice station, the TGV and ski-season Eurostar terminus, is one of our most frequent pick-up points: platform meet-and-greet available, ski loading, then a direct drive to your residence or drop-off at the funicular, as you prefer.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre La Plagne depuis Les Arcs sans skier ?',
          en: 'Can I reach La Plagne from Les Arcs without skiing?',
        },
        a: {
          fr: 'Oui, de deux façons : le téléphérique Vanoise Express relie les deux domaines en quelques minutes pour les piétons, et nous assurons la liaison par la route — environ 45 minutes — pour les dîners, les soirées ou lorsque le téléphérique est fermé. Prix fixe convenu à l’avance dans les deux cas.',
          en: 'Yes, in two ways: the Vanoise Express cable car links the two areas in minutes for pedestrians, and we cover the road connection — around 45 minutes — for dinners, evenings out or when the cable car is closed. A fixed price agreed in advance, either way.',
        },
      },
    ],
    nearby: ['la-plagne', 'tignes', 'val-d-isere', 'courchevel'],
  },
  {
    slug: 'la-plagne',
    name: { fr: 'La Plagne', en: 'La Plagne' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) se trouve à environ 195 km de La Plagne : comptez 2 h 45 de route ; depuis Chambéry (CMF), 120 km et environ 2 heures ; depuis Lyon-Saint Exupéry (LYS), 210 km et 2 h 30. Votre chauffeur vous accueille avec panneau nominatif, suit votre vol en temps réel et rejoint votre village — d’Aime-la-Plagne à Belle Plagne — en 4x4 équipé neige.',
      en: 'Geneva Airport (GVA) lies around 195 km from La Plagne: allow 2 h 45 on the road; from Chambéry (CMF), 120 km and about 2 hours; from Lyon-Saint Exupéry (LYS), 210 km and 2 h 30. Your chauffeur greets you with a name board, tracks your flight in real time and reaches your village — from Aime-la-Plagne to Belle Plagne — in a snow-equipped 4x4.',
    },
    intro: {
      fr: [
        'La Plagne n’est pas une station mais une constellation : dix villages étagés de 1 250 à 2 100 mètres, de Montchavin-les-Coches à Belle Plagne, entre alpages et glacier de la Bellecôte. Votre **chauffeur privé à La Plagne** vous dépose au bon village dès l’aéroport, relie les altitudes pour vos dîners et cours de ski, et prend en charge matériel et bagages dans un 4x4 ou un van équipé pour l’hiver.',
        'Avec Les Arcs, reliés par le téléphérique Vanoise Express, La Plagne compose **Paradiski** et ses 425 km de pistes. Signature unique de la station : la piste de bobsleigh des Jeux olympiques d’Albertville 1992, seule de France, ouverte au public en bob raft comme en bob de course. En contrebas, les villages savoyards de Champagny-en-Vanoise et de Montchavin gardent l’âme de la Tarentaise d’avant.',
      ],
      en: [
        'La Plagne is not one resort but a constellation: ten villages tiered from 1,250 to 2,100 metres, from Montchavin-les-Coches to Belle Plagne, between alpine pastures and the Bellecôte glacier. Your **private chauffeur in La Plagne** delivers you to the right village straight from the airport, links the altitudes for dinners and ski lessons, and handles equipment and luggage in a winter-ready 4x4 or van.',
        'With Les Arcs, joined by the Vanoise Express cable car, La Plagne makes up **Paradiski** and its 425 km of pistes. The resort’s unique signature: the bobsleigh track of the 1992 Albertville Olympics, the only one in France, open to the public in bob rafts and racing bobs alike. Below, the Savoyard villages of Champagny-en-Vanoise and Montchavin keep the soul of the old Tarentaise.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Descente de la piste de bobsleigh olympique', en: 'Riding the Olympic bobsleigh track' },
        teaser: {
          fr: 'Les 19 virages et 1 500 mètres de la piste d’Albertville 1992, en bob raft à 80 km/h ou en bob de course piloté à plus de 110 km/h. Dépose à La Roche, boisson chaude et retour au village après l’adrénaline.',
          en: 'The 19 corners and 1,500 metres of the 1992 Albertville track, in a bob raft at 80 km/h or a piloted racing bob at over 110 km/h. Drop-off at La Roche, a hot drink and a ride home after the adrenaline.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Tour des dix villages de La Plagne', en: 'Tour of La Plagne’s ten villages' },
        teaser: {
          fr: 'De Montchavin, ancien hameau agricole, aux paquebots d’Aime-la-Plagne et à Belle Plagne la piétonne : dix altitudes et autant d’ambiances, avec les meilleurs points de vue sur le Mont Blanc en chemin.',
          en: 'From Montchavin, a former farming hamlet, to the liner-like Aime-la-Plagne and pedestrian Belle Plagne: ten altitudes and as many moods, with the best Mont Blanc viewpoints along the way.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '330',
      },
      {
        title: { fr: 'Champagny-en-Vanoise et le parc national', en: 'Champagny-en-Vanoise and the national park' },
        teaser: {
          fr: 'Le versant secret de La Plagne : Champagny-le-Haut et sa vallée glaciaire classée, l’église baroque Saint-Sigismond, les cascades du Py. Raquettes ou randonnée selon la saison, déjeuner d’alpage réservé.',
          en: 'La Plagne’s secret flank: Champagny-le-Haut and its protected glacial valley, the Baroque church of Saint-Sigismond, the Py waterfalls. Snowshoes or hiking by season, a mountain-farm lunch booked ahead.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Les Arcs et la haute Tarentaise', en: 'Les Arcs and the upper Tarentaise' },
        teaser: {
          fr: 'L’autre moitié de Paradiski par la route : les architectures de Charlotte Perriand aux Arcs, le marché de Bourg-Saint-Maurice, dégustation de beaufort à la coopérative. Retour par Aime et sa basilique romane.',
          en: 'Paradiski’s other half by road: Charlotte Perriand’s architecture in Les Arcs, the Bourg-Saint-Maurice market, Beaufort tasting at the cooperative. Return via Aime and its Romanesque basilica.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Soirée plagnarde', en: 'La Plagne evening' },
        teaser: {
          fr: 'Dîner igloo sous les étoiles, table savoyarde à Belle Plagne ou raclette d’alpage à Montchavin, puis retour au village par les lacets enneigés — votre chauffeur conduit, vous profitez.',
          en: 'An igloo dinner under the stars, a Savoyard table in Belle Plagne or an alpine raclette in Montchavin, then home through the snowy hairpins — your chauffeur drives, you enjoy.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et La Plagne ?',
          en: 'How much does a transfer between Geneva Airport and La Plagne cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et La Plagne est facturé à prix fixe, communiqué à la réservation, quel que soit votre village d’arrivée. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Geneva (GVA) and La Plagne is charged at a fixed price, confirmed at booking, whichever village you are heading to. It includes a name-board meet-and-greet in the arrivals hall, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Vers quel village de La Plagne le transfert s’effectue-t-il ?',
          en: 'Which La Plagne village does the transfer go to?',
        },
        a: {
          fr: 'Celui de votre séjour. Plagne Centre, Belle Plagne, Plagne Bellecôte, Aime-la-Plagne, Plagne 1800, Plagne Villages, Plagne Soleil, Montchavin, Les Coches ou Champagny : le prix fixe couvre la dépose à l’adresse exacte, et nous pouvons ensuite assurer vos trajets entre villages pendant le séjour.',
          en: 'The one you are staying in. Plagne Centre, Belle Plagne, Plagne Bellecôte, Aime-la-Plagne, Plagne 1800, Plagne Villages, Plagne Soleil, Montchavin, Les Coches or Champagny: the fixed price covers drop-off at the exact address, and we can then handle your journeys between villages during your stay.',
        },
      },
      {
        q: {
          fr: 'Vos véhicules sont-ils adaptés aux routes de montagne en hiver ?',
          en: 'Are your vehicles suited to mountain roads in winter?',
        },
        a: {
          fr: 'Oui. Toute la saison, la montée vers La Plagne s’effectue en 4x4 ou en van équipé de pneus neige, chaînes à bord, avec des chauffeurs rompus aux lacets de la Tarentaise. Skis, snowboards et poussettes sont chargés sans supplément, et l’horaire s’ajuste aux conditions météo annoncées.',
          en: 'Yes. All season long, the climb to La Plagne is made in 4x4s or vans fitted with snow tyres, chains on board, driven by chauffeurs well used to Tarentaise hairpins. Skis, snowboards and pushchairs are loaded at no extra charge, and timings adjust to forecast weather conditions.',
        },
      },
    ],
    nearby: ['les-arcs', 'courchevel', 'meribel', 'tignes'],
  },
  {
    slug: 'alpe-d-huez',
    name: { fr: 'Alpe d’Huez', en: 'Alpe d’Huez' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Grenoble Alpes-Isère (GNB)',
    airportTransfer: {
      fr: 'L’aéroport de Grenoble Alpes-Isère (GNB) se trouve à environ 105 km de l’Alpe d’Huez : comptez 1 h 30 à 1 h 45 de route, dont la montée des 21 lacets ; depuis Lyon-Saint Exupéry (LYS), 155 km et environ 2 heures. Votre chauffeur vous accueille avec panneau nominatif, suit votre vol en temps réel et gravit les virages mythiques en 4x4 équipé neige.',
      en: 'Grenoble Alpes-Isère Airport (GNB) lies around 105 km from Alpe d’Huez: allow 1 h 30 to 1 h 45 on the road, including the climb of the 21 hairpins; from Lyon-Saint Exupéry (LYS), 155 km and about 2 hours. Your chauffeur greets you with a name board, tracks your flight in real time and takes the legendary bends in a snow-equipped 4x4.',
    },
    intro: {
      fr: [
        'Sur son plateau ensoleillé à 1 860 mètres, face aux Grandes Rousses, l’Alpe d’Huez cultive une double légende : l’« île au soleil » des skieurs et la montée aux 21 lacets du Tour de France, gravée dans l’histoire du cyclisme depuis 1952. Votre **chauffeur privé à l’Alpe d’Huez** assure vos transferts depuis Grenoble ou Lyon, vos liaisons vers Huez village et les stations voisines de l’Oisans, et vos soirées, en 4x4 équipé pour la montagne.',
        'Le domaine grimpe jusqu’au **Pic Blanc à 3 330 mètres**, d’où s’élance la Sarenne — 16 km, la plus longue piste noire du monde — avec l’un des plus vastes panoramas des Alpes. L’été, la station devient capitale du vélo et accueille régulièrement le Tour ; Bourg-d’Oisans, les gorges de la Romanche et le col du Lautaret complètent les excursions. Votre chauffeur suit vos envies, cols compris.',
      ],
      en: [
        'On its sun-drenched plateau at 1,860 metres, facing the Grandes Rousses, Alpe d’Huez nurtures a double legend: the skiers’ “island in the sun” and the 21-hairpin climb of the Tour de France, etched into cycling history since 1952. Your **private chauffeur in Alpe d’Huez** covers transfers from Grenoble or Lyon, connections to Huez village and the neighbouring Oisans resorts, and your evenings out, in a mountain-ready 4x4.',
        'The ski area climbs to the **Pic Blanc at 3,330 metres**, launch point of the Sarenne — 16 km, the longest black run in the world — with one of the widest panoramas in the Alps. In summer the resort becomes a cycling capital and regularly hosts the Tour; Bourg-d’Oisans, the Romanche gorges and the Col du Lautaret round out the excursions. Your chauffeur follows your lead, mountain passes included.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Les 21 lacets en voiture, histoire du Tour', en: 'The 21 hairpins by car, a Tour de France story' },
        teaser: {
          fr: 'Chaque virage porte le nom d’un vainqueur, de Coppi à Pantani : montée commentée, arrêts aux lacets emblématiques, panorama sur la vallée de la Romanche depuis le plateau. Un pèlerinage cycliste sans coup de pédale.',
          en: 'Every bend bears a winner’s name, from Coppi to Pantani: a narrated climb, stops at the iconic hairpins, the Romanche valley panorama from the plateau. A cycling pilgrimage without a single pedal stroke.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Pic Blanc et la Sarenne', en: 'Pic Blanc and the Sarenne' },
        teaser: {
          fr: 'Dépose au pied du téléphérique pour le sommet à 3 330 mètres — un cinquième des Alpes françaises en vue —, pendant que les skieurs du groupe s’offrent les 16 km de la Sarenne. Récupération au bas des pistes.',
          en: 'Drop-off at the cable car for the 3,330-metre summit — a fifth of the French Alps in view — while the skiers in your party take on the 16 km Sarenne. Pick-up at the bottom of the slopes.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Villages de l’Oisans et gorges de la Romanche', en: 'Oisans villages and the Romanche gorges' },
        teaser: {
          fr: 'Bourg-d’Oisans et son marché, Villard-Reculas en balcon, le hameau classé de Besse-en-Oisans : la montagne rurale sous la station. Déjeuner de spécialités dauphinoises dans une auberge de vallée.',
          en: 'Bourg-d’Oisans and its market, balcony-perched Villard-Reculas, the listed hamlet of Besse-en-Oisans: the rural mountains beneath the resort. A lunch of Dauphiné specialities in a valley inn.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Journée aux Deux Alpes et à La Grave', en: 'Day trip to Les Deux Alpes and La Grave' },
        teaser: {
          fr: 'Les stations sœurs de l’Oisans : Les Deux Alpes et son glacier, puis La Grave, village-mythe du ski de haute montagne face à la Meije. Retour par le barrage du Chambon et les gorges de l’Infernet.',
          en: 'The Oisans sister resorts: Les Deux Alpes and its glacier, then La Grave, the legendary high-mountain skiing village facing La Meije. Return via the Chambon dam and the Infernet gorges.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '670',
      },
      {
        title: { fr: 'Soirée sur l’île au soleil', en: 'An evening on the island in the sun' },
        teaser: {
          fr: 'Dîner à l’Espérance ou au Passe-Montagne, patinoire ou cinéma d’altitude, puis dernier verre dans les bars du Coin des Neiges. Retour à votre chalet ou descente sur Huez village, sans souci de verglas.',
          en: 'Dinner at L’Espérance or Le Passe-Montagne, the ice rink or the altitude cinema, then a nightcap in the Coin des Neiges bars. Back to your chalet or down to Huez village, black ice not your problem.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Grenoble et l’Alpe d’Huez ?',
          en: 'How much does a transfer between Grenoble Airport and Alpe d’Huez cost?',
        },
        a: {
          fr: 'Le transfert privé entre Grenoble Alpes-Isère (GNB) et l’Alpe d’Huez est facturé à prix fixe, confirmé à la réservation. Il inclut l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard. Nous desservons aussi Lyon-Saint Exupéry et Genève.',
          en: 'A private transfer between Grenoble Alpes-Isère (GNB) and Alpe d’Huez is charged at a fixed price, confirmed at booking. It includes a name-board meet-and-greet in the arrivals hall, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay. We also serve Lyon-Saint Exupéry and Geneva.',
        },
      },
      {
        q: {
          fr: 'La montée des 21 lacets est-elle sûre en hiver ?',
          en: 'Is the 21-hairpin climb safe in winter?',
        },
        a: {
          fr: 'Oui. La route départementale est déneigée en priorité toute la saison, et nos chauffeurs la gravissent en 4x4 avec pneus neige, chaînes à bord. En cas de chutes importantes, nous ajustons l’horaire de départ avec vous et restons joignables tout au long de la montée.',
          en: 'Yes. The road is a priority for snow clearing all season, and our chauffeurs climb it in 4x4s with snow tyres, chains on board. During heavy snowfall we adjust the departure time with you and remain reachable throughout the climb.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous accompagner un séjour cycliste à l’Alpe d’Huez ?',
          en: 'Can you support a cycling stay in Alpe d’Huez?',
        },
        a: {
          fr: 'Volontiers. Nos vans embarquent vélos de route et matériel, suivent votre ascension des 21 lacets ou du col de Sarenne en voiture d’assistance, et assurent les transferts vers les autres cols de l’Oisans — Galibier, Lautaret, Croix de Fer. Ravitaillement et récupération inclus dans l’itinéraire convenu.',
          en: 'Gladly. Our vans carry road bikes and equipment, follow your ascent of the 21 hairpins or the Col de Sarenne as a support car, and handle transfers to the other Oisans passes — Galibier, Lautaret, Croix de Fer. Feed stops and pick-ups are built into the agreed itinerary.',
        },
      },
    ],
    nearby: ['les-deux-alpes', 'serre-chevalier'],
  },
  {
    slug: 'les-deux-alpes',
    name: { fr: 'Les Deux Alpes', en: 'Les Deux Alpes' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Grenoble Alpes-Isère (GNB)',
    airportTransfer: {
      fr: 'L’aéroport de Grenoble Alpes-Isère (GNB) est à environ 110 km des Deux Alpes : comptez 1 h 30 à 1 h 45 de route par la vallée de la Romanche ; depuis Lyon-Saint Exupéry (LYS), 160 km et environ 2 heures. Votre chauffeur vous accueille avec panneau nominatif, suit votre vol en temps réel et effectue la montée finale en 4x4 équipé de pneus neige et de chaînes.',
      en: 'Grenoble Alpes-Isère Airport (GNB) is around 110 km from Les Deux Alpes: allow 1 h 30 to 1 h 45 via the Romanche valley; from Lyon-Saint Exupéry (LYS), 160 km and about 2 hours. Your chauffeur greets you with a name board, tracks your flight in real time and makes the final climb in a 4x4 fitted with snow tyres and chains.',
    },
    intro: {
      fr: [
        'Étirée sur son plateau à 1 650 mètres entre les vallées du Vénéon et de la Romanche, Les Deux Alpes est l’une des grandes stations de l’Oisans : une avenue unique, animée du matin au soir, et un dénivelé vertigineux jusqu’au glacier. Votre **chauffeur privé aux Deux Alpes** assure vos transferts depuis Grenoble ou Lyon, la dépose à votre résidence le long de l’avenue de la Muzelle, et vos liaisons vers Venosc ou l’Alpe d’Huez.',
        'Son atout maître : le **glacier du Mont-de-Lans**, plus grand glacier skiable d’Europe, qui porte le domaine à 3 600 mètres et autorise le ski d’été. À ses pieds, Venosc et ses ruelles d’artisans se rejoignent en télécabine, La Grave et la Meije veillent de l’autre côté du col, et le parc national des Écrins déroule ses sentiers. Votre chauffeur relie glaciers, villages et cols au fil de vos envies.',
      ],
      en: [
        'Stretched along its plateau at 1,650 metres between the Vénéon and Romanche valleys, Les Deux Alpes is one of the great Oisans resorts: a single avenue, lively from morning to night, and a dizzying vertical drop beneath the glacier. Your **private chauffeur in Les Deux Alpes** handles transfers from Grenoble or Lyon, drop-off at your residence along Avenue de la Muzelle, and connections to Venosc or Alpe d’Huez.',
        'Its trump card: the **Mont-de-Lans glacier**, Europe’s largest skiable glacier, taking the ski area to 3,600 metres and allowing summer skiing. At its feet, Venosc and its artisan lanes are a gondola ride away, La Grave and La Meije stand watch across the pass, and the Écrins national park unrolls its trails. Your chauffeur links glaciers, villages and passes as the mood takes you.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Glacier à 3 600 mètres et ski d’été', en: 'The glacier at 3,600 metres and summer skiing' },
        teaser: {
          fr: 'Dépose au Jandri pour monter au plus grand glacier skiable d’Europe : ski d’été en juin-juillet, grotte de glace et terrasse panoramique sur les Écrins le reste de l’année. Récupération à l’heure convenue.',
          en: 'Drop-off at the Jandri lift for Europe’s largest skiable glacier: summer skiing in June and July, the ice cave and a panoramic terrace over the Écrins the rest of the year. Pick-up at the agreed time.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Venosc, village d’artisans', en: 'Venosc, village of artisans' },
        teaser: {
          fr: 'Au fond de la vallée du Vénéon, ruelles pavées, ateliers de potiers et de tisserands, église Saint-Benoît : le vieux pays sous la station. Descente en voiture ou en télécabine, retour à votre convenance.',
          en: 'Deep in the Vénéon valley: cobbled lanes, potters’ and weavers’ workshops, the Saint-Benoît church — the old country beneath the resort. Down by car or gondola, back whenever suits you.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'La Grave et la Meije', en: 'La Grave and La Meije' },
        teaser: {
          fr: 'Par le barrage du Chambon, le village mythique du ski de pente raide face au glacier de la Meije : téléphérique historique, hameaux du plateau d’Emparis, déjeuner d’auberge à 1 450 mètres.',
          en: 'Via the Chambon dam, the legendary steep-skiing village facing the Meije glacier: the historic cable car, the hamlets of the Emparis plateau, an inn lunch at 1,450 metres.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Alpe d’Huez et les 21 lacets', en: 'Alpe d’Huez and the 21 hairpins' },
        teaser: {
          fr: 'La grande voisine de l’Oisans : montée des lacets du Tour de France, plateau de l’île au soleil, redescente par Villard-Reculas. Une journée à deux stations, sans toucher un volant.',
          en: 'The great Oisans neighbour: up the Tour de France hairpins, across the island-in-the-sun plateau, down via Villard-Reculas. Two resorts in a day, without touching a steering wheel.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '610',
      },
      {
        title: { fr: 'Soirée sur l’avenue de la Muzelle', en: 'An evening on Avenue de la Muzelle' },
        teaser: {
          fr: 'Dîner au Chalet Mounier — table historique de la station — ou au P’tit Polyte, puis l’Avalanche ou les bars de l’avenue pour prolonger. Le véhicule vous raccompagne d’un bout à l’autre du plateau.',
          en: 'Dinner at Chalet Mounier — the resort’s historic table — or Le P’tit Polyte, then L’Avalanche or the avenue’s bars to carry on. The vehicle sees you home from one end of the plateau to the other.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '370',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Grenoble et Les Deux Alpes ?',
          en: 'How much does a transfer between Grenoble Airport and Les Deux Alpes cost?',
        },
        a: {
          fr: 'Le transfert privé entre Grenoble Alpes-Isère (GNB) et Les Deux Alpes est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard. Lyon-Saint Exupéry et Genève sont également desservis.',
          en: 'A private transfer between Grenoble Alpes-Isère (GNB) and Les Deux Alpes is charged at a fixed price, confirmed at booking. It includes a name-board meet-and-greet in the arrivals hall, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay. Lyon-Saint Exupéry and Geneva are also served.',
        },
      },
      {
        q: {
          fr: 'Peut-on skier aux Deux Alpes en été ?',
          en: 'Can I ski in Les Deux Alpes in summer?',
        },
        a: {
          fr: 'Oui, c’est l’une des signatures de la station : le glacier du Mont-de-Lans ouvre généralement en juin et juillet au petit matin, pour le ski d’été et les stages des équipes de compétition. Nous organisons les déposes matinales aux remontées et les récupérations à la fermeture du glacier, vers midi.',
          en: 'Yes, it is one of the resort’s signatures: the Mont-de-Lans glacier generally opens in June and July in the early morning, for summer skiing and race-team training camps. We arrange early drop-offs at the lifts and pick-ups when the glacier closes, around midday.',
        },
      },
      {
        q: {
          fr: 'Transportez-vous le matériel de ski et les vélos ?',
          en: 'Do you carry ski equipment and bikes?',
        },
        a: {
          fr: 'Oui. Skis, snowboards et chaussures voyagent sans supplément dans nos 4x4 et vans ; l’été, nous embarquons vélos de descente et vélos de route — Les Deux Alpes accueille des épreuves majeures de VTT — sur porte-vélos ou en soute, selon le véhicule affecté. Précisez le matériel à la réservation.',
          en: 'Yes. Skis, snowboards and boots travel free of charge in our 4x4s and vans; in summer we carry downhill and road bikes — Les Deux Alpes hosts major mountain-bike events — on racks or in the hold, depending on the assigned vehicle. Let us know your equipment when booking.',
        },
      },
    ],
    nearby: ['alpe-d-huez', 'serre-chevalier'],
  },
  {
    slug: 'avoriaz',
    name: { fr: 'Avoriaz', en: 'Avoriaz' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) se trouve à environ 90 km d’Avoriaz : comptez 1 h 30 à 1 h 45 selon les conditions hivernales. Avoriaz étant une station entièrement piétonne, votre chauffeur vous dépose aux accueils de la station, où traîneaux et chenillettes prennent le relais jusqu’à votre résidence. Accueil en salle d’arrivée avec panneau nominatif et suivi du vol en temps réel.',
      en: 'Geneva Airport (GVA) lies around 90 km from Avoriaz: allow 1 h 30 to 1 h 45 depending on winter conditions. As Avoriaz is an entirely car-free resort, your chauffeur drops you at the resort reception points, where sleighs and snowcats take over to your residence. Meet-and-greet in the arrivals hall with a name board and real-time flight tracking.',
    },
    intro: {
      fr: [
        'Perchée à 1 800 mètres sur sa falaise au-dessus de Morzine, Avoriaz est une station unique en Europe : entièrement piétonne, dessinée dans les années 1960 par Jacques Labro, ses immeubles-sculptures habillés de tavaillons se fondent dans la roche. Votre **chauffeur privé à Avoriaz** orchestre l’arrivée dans ce décor sans voiture — dépose aux accueils de la station, coordination avec les traîneaux et les conciergeries, bagages et matériel de ski pris en charge de bout en bout.',
        'Avoriaz est le cœur d’altitude des **Portes du Soleil**, l’un des plus grands domaines skiables du monde : 600 km de pistes entre France et Suisse, de Morzine à Champéry. L’été, la station se réinvente autour du VTT, du golf d’altitude et des sentiers du Chablais. Votre chauffeur relie Genève, les villages voisins de Morzine et Les Gets ou les rives du Léman, en berline ou van équipé pour la montagne, hiver comme été.',
      ],
      en: [
        'Perched at 1,800 metres on its cliff above Morzine, Avoriaz is unique in Europe: entirely car-free, designed in the 1960s by Jacques Labro, its sculptural, shingle-clad buildings melt into the rock face. Your **private chauffeur in Avoriaz** orchestrates the arrival in this car-free setting — drop-off at the resort reception points, coordination with the sleighs and concierge teams, luggage and ski equipment handled from door to door.',
        'Avoriaz is the high-altitude heart of the **Portes du Soleil**, one of the largest ski areas in the world: 600 km of slopes between France and Switzerland, from Morzine to Champéry. In summer the resort reinvents itself around mountain biking, high-altitude golf and the trails of the Chablais. Your chauffeur links Geneva, the neighbouring villages of Morzine and Les Gets or the shores of Lake Geneva, in a sedan or mountain-ready van, winter and summer alike.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Journée Portes du Soleil, versant suisse', en: 'Portes du Soleil day, Swiss side' },
        teaser: {
          fr: 'Dépose à l’accueil d’Avoriaz au petit matin pour skier vers Champéry et Morgins côté suisse, puis récupération à Châtel ou aux Crosets en fin de journée. Votre chauffeur suit votre itinéraire et s’adapte à votre descente finale.',
          en: 'Early-morning drop-off at the Avoriaz reception to ski towards Champéry and Morgins on the Swiss side, then pick-up in Châtel or Les Crosets at the end of the day. Your chauffeur follows your route and adapts to your final descent.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Transfert ski Morzine et Les Gets', en: 'Ski transfer to Morzine and Les Gets' },
        teaser: {
          fr: 'Variez les plaisirs du domaine : descente sur Morzine par la route des Ardoisières, matinée sur les pistes du Mont Chéry aux Gets, déjeuner en altitude. Le véhicule vous attend à chaque étape, matériel à bord.',
          en: 'Vary your days across the area: down to Morzine via the Ardoisières road, a morning on the Mont Chéry slopes in Les Gets, lunch on the mountain. The vehicle waits at every stage, equipment on board.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Escapade sur les rives du Léman', en: 'Lake Geneva shoreline escape' },
        teaser: {
          fr: 'À une heure d’Avoriaz, le lac Léman déroule Thonon, Évian et le village médiéval d’Yvoire, classé parmi les plus beaux de France. Déjeuner au bord de l’eau, retour en station avant la tombée du jour.',
          en: 'An hour from Avoriaz, Lake Geneva unfolds Thonon, Évian and the medieval village of Yvoire, listed among the most beautiful in France. Lunch at the water’s edge, back in the resort before nightfall.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Soirée gastronomique en altitude', en: 'Mountain gourmet evening' },
        teaser: {
          fr: 'Dîner dans les tables d’Avoriaz ou descente vers les adresses étoilées de Morzine et Megève. Votre chauffeur coordonne la dépose piétonne, l’attente et le retour de nuit jusqu’aux accueils de la station.',
          en: 'Dinner at Avoriaz’s finest tables or down to the starred addresses of Morzine and Megève. Your chauffeur coordinates the car-free drop-off, the standby and the late-night return to the resort reception.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '450',
      },
      {
        title: { fr: 'Genève en mise à disposition', en: 'Geneva at your disposal' },
        teaser: {
          fr: 'Une journée entre lac et vieille ville : rade de Genève, rue du Rhône et ses horlogers, quartier des Bains. Votre chauffeur enchaîne les adresses et vous ramène à Avoriaz dans la soirée, sans contrainte d’horaire.',
          en: 'A day between lake and old town: Geneva’s harbour, Rue du Rhône and its watchmakers, the Quartier des Bains. Your chauffeur links each address and brings you back to Avoriaz in the evening, free of any timetable.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Avoriaz ?',
          en: 'How much does a transfer between Geneva Airport and Avoriaz cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Avoriaz est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard, ainsi que la dépose coordonnée aux accueils de la station piétonne.',
          en: 'A private transfer between Geneva (GVA) and Avoriaz is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay, plus a coordinated drop-off at the car-free resort’s reception points.',
        },
      },
      {
        q: {
          fr: 'Comment se passe l’arrivée dans une station piétonne comme Avoriaz ?',
          en: 'How does arrival work in a car-free resort like Avoriaz?',
        },
        a: {
          fr: 'Les véhicules ne circulent pas dans Avoriaz. Votre chauffeur vous dépose aux accueils de la station, où des traîneaux tirés par des chevaux ou des navettes chenillées assurent le dernier kilomètre jusqu’à votre résidence. Nous coordonnons ce relais à l’avance avec votre hébergement pour que bagages et skis suivent sans attente.',
          en: 'Vehicles do not circulate inside Avoriaz. Your chauffeur drops you at the resort reception points, where horse-drawn sleighs or tracked shuttles cover the last stretch to your residence. We coordinate this handover in advance with your accommodation so that luggage and skis follow without delay.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous transporter les skis et l’équipement de toute la famille ?',
          en: 'Can you carry skis and equipment for the whole family?',
        },
        a: {
          fr: 'Oui. Nos vans de grande capacité embarquent skis, snowboards et bagages volumineux pour six à sept passagers, avec sièges enfants fournis sur demande. Précisez simplement la composition du groupe et le matériel à la réservation : le véhicule adapté est affecté automatiquement.',
          en: 'Yes. Our full-size vans carry skis, snowboards and bulky luggage for six to seven passengers, with child seats provided on request. Simply state the group size and equipment at booking: the appropriate vehicle is assigned automatically.',
        },
      },
    ],
    nearby: ['morzine', 'les-gets', 'thonon-les-bains', 'evian-les-bains'],
  },
  {
    slug: 'morzine',
    name: { fr: 'Morzine', en: 'Morzine' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) est à environ 75 km de Morzine : comptez 1 h 15 à 1 h 30 par l’autoroute A40 puis la vallée d’Aulps. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel pour ajuster la prise en charge.',
      en: 'Geneva Airport (GVA) is around 75 km from Morzine: allow 1 h 15 to 1 h 30 via the A40 motorway and the Aulps valley. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time to adjust the pick-up.',
    },
    intro: {
      fr: [
        'Ancien bourg d’ardoisiers devenu station de référence du Chablais, Morzine a conservé son âme de village savoyard : chalets de bois et de pierre, clocher à bulbe, torrents de la Dranse. Votre **chauffeur privé à Morzine** assure les transferts depuis Genève, les liaisons quotidiennes vers les télécabines du Pleney et de Super Morzine, les soirées au village comme les rendez-vous à l’heure — berlines Mercedes et vans adaptés à la montagne, prix fixes annoncés à l’avance.',
        'Au centre des **Portes du Soleil**, Morzine ouvre 600 km de pistes entre France et Suisse : Avoriaz au-dessus, Les Gets à dix minutes, Châtel et Champéry au fil du domaine. L’été, la station devient l’une des capitales mondiales du VTT et accueille régulièrement des étapes de renom. Lac Léman, Évian et Genève restent à moins d’une heure trente : votre chauffeur compose des journées mêlant montagne, lac et gastronomie.',
      ],
      en: [
        'A former slate-mining village turned benchmark resort of the Chablais, Morzine has kept its Savoyard soul: wood-and-stone chalets, an onion-domed bell tower, the rushing Dranse. Your **private chauffeur in Morzine** handles transfers from Geneva, daily runs to the Pleney and Super Morzine gondolas, evenings in the village and appointments on the hour — Mercedes sedans and mountain-ready vans, fixed prices confirmed in advance.',
        'At the centre of the **Portes du Soleil**, Morzine opens up 600 km of slopes between France and Switzerland: Avoriaz above, Les Gets ten minutes away, Châtel and Champéry along the circuit. In summer the resort becomes one of the world’s mountain-biking capitals and regularly hosts renowned events. Lake Geneva, Évian and Geneva remain under an hour and a half away: your chauffeur composes days blending mountains, lake and gastronomy.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Tour des Portes du Soleil', en: 'Portes du Soleil circuit' },
        teaser: {
          fr: 'Dépose au Pleney à l’ouverture, itinéraire vers Avoriaz, Châtel puis le versant suisse de Champéry. Votre chauffeur vous récupère au point d’arrivée de votre choix — plus besoin de boucler le circuit avant la fermeture.',
          en: 'Drop-off at the Pleney lift at opening time, route towards Avoriaz, Châtel and the Swiss side at Champéry. Your chauffeur collects you wherever you finish — no need to complete the loop before the lifts close.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Lac de Montriond et vallée d’Aulps', en: 'Lac de Montriond and the Aulps valley' },
        teaser: {
          fr: 'Le lac émeraude de Montriond sous les falaises du Roc d’Enfer, la cascade d’Ardent, puis l’abbaye cistercienne d’Aulps et son domaine de découverte. Une demi-journée hors des pistes, à quinze minutes du village.',
          en: 'The emerald Lac de Montriond beneath the Roc d’Enfer cliffs, the Ardent waterfall, then the Cistercian abbey of Aulps and its heritage centre. A half day away from the slopes, fifteen minutes from the village.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Évian et les rives du Léman', en: 'Évian and the shores of Lake Geneva' },
        teaser: {
          fr: 'À 45 minutes par la vallée de la Dranse : la buvette Cachat, les jardins de la Belle Époque, une partie sur le parcours de l’Evian Resort. Déjeuner face au lac avant de remonter en station.',
          en: '45 minutes down the Dranse valley: the Cachat spring hall, Belle Époque gardens, a round on the Evian Resort course. Lunch facing the lake before returning to the resort.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Journée VTT et remontées d’été', en: 'Mountain-bike and summer-lift day' },
        teaser: {
          fr: 'Transport des vélos vers les portes du bike park — Pleney, Super Morzine ou Les Gets —, assistance logistique entre les secteurs et récupération en fin de session. Idéal pour les groupes visant plusieurs domaines en une journée.',
          en: 'Bike transport to the bike-park gateways — Pleney, Super Morzine or Les Gets — logistical support between sectors and pick-up at the end of the session. Ideal for groups aiming to ride several areas in one day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '580',
      },
      {
        title: { fr: 'Soirée savoyarde au village', en: 'Savoyard evening in the village' },
        teaser: {
          fr: 'Dîner dans les fermes-auberges et tables d’altitude de Morzine — l’Atelier, la Ferme de la Fruitière —, puis retour au chalet en véhicule privé. Le chauffeur reste à disposition toute la soirée.',
          en: 'Dinner in Morzine’s farmhouse inns and mountain tables — L’Atelier, La Ferme de la Fruitière — then back to the chalet by private car. The chauffeur remains on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '300',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Morzine ?',
          en: 'How much does a transfer between Geneva Airport and Morzine cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Morzine est facturé à prix fixe, confirmé à la réservation. Il inclut l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard — aucun supplément de nuit ni de bagages.',
          en: 'A private transfer between Geneva (GVA) and Morzine is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay — no night or luggage surcharges.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les navettes quotidiennes vers les remontées mécaniques ?',
          en: 'Do you provide daily shuttles to the ski lifts?',
        },
        a: {
          fr: 'Oui. Pendant votre séjour, votre chauffeur peut assurer chaque matin la dépose au Pleney, à Super Morzine ou aux Prodains pour Avoriaz, puis la récupération à l’heure convenue. La formule séjour, à tarif dégressif, se réserve en une fois pour toute la semaine.',
          en: 'Yes. Throughout your stay, your chauffeur can drop you each morning at the Pleney, Super Morzine or the Prodains lift for Avoriaz, then collect you at the agreed time. The stay package, at a decreasing rate, can be booked once for the whole week.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre le versant suisse des Portes du Soleil en voiture avec vous ?',
          en: 'Can you drive us to the Swiss side of the Portes du Soleil?',
        },
        a: {
          fr: 'Absolument. Champéry, Morgins ou Les Crosets se rejoignent par la route en une heure environ, passage de frontière compris. Nos véhicules sont autorisés à circuler en Suisse et les trajets transfrontaliers sont devisés à prix fixe avant le départ.',
          en: 'Absolutely. Champéry, Morgins or Les Crosets can be reached by road in about an hour, border crossing included. Our vehicles are authorised to operate in Switzerland and cross-border journeys are quoted at a fixed price before departure.',
        },
      },
    ],
    nearby: ['avoriaz', 'les-gets', 'thonon-les-bains', 'evian-les-bains'],
  },
  {
    slug: 'les-gets',
    name: { fr: 'Les Gets', en: 'Les Gets' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) se situe à environ 70 km des Gets : comptez 1 h 10 à 1 h 25 par l’A40 et la montée de Taninges. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol pour adapter l’heure de prise en charge.',
      en: 'Geneva Airport (GVA) is around 70 km from Les Gets: allow 1 h 10 to 1 h 25 via the A40 and the climb from Taninges. Your chauffeur waits in the arrivals hall with a name board and tracks your flight to adjust the pick-up time.',
    },
    intro: {
      fr: [
        'Village-station posé sur un col à 1 172 mètres entre le mont Chéry et les Chavannes, Les Gets cultive une élégance discrète : chalets fleuris, front de neige au cœur du village, musée de la Musique mécanique unique en Europe. Votre **chauffeur privé aux Gets** prend en charge transferts aéroport, liaisons vers les télécabines et soirées au village, en berline ou van premium, avec un tarif fixe communiqué avant chaque trajet.',
        'Porte d’entrée des **Portes du Soleil**, la station relie Morzine en quelques minutes de télécabine et déploie 600 km de pistes jusqu’au Valais suisse. L’été, Les Gets vit au rythme du VTT — le village a accueilli les Championnats du monde en 2022 — et du golf 18 trous d’altitude. Annecy, le Léman et Genève restent à moins d’une heure trente : autant d’escapades que votre chauffeur organise à la journée.',
      ],
      en: [
        'A village-resort set on a pass at 1,172 metres between Mont Chéry and Les Chavannes, Les Gets cultivates a discreet elegance: flower-decked chalets, a snow front at the heart of the village, and a Mechanical Music Museum unique in Europe. Your **private chauffeur in Les Gets** covers airport transfers, runs to the gondolas and evenings in the village, in a premium sedan or van, with a fixed price confirmed before every journey.',
        'A gateway to the **Portes du Soleil**, the resort links to Morzine in a few minutes by gondola and opens 600 km of slopes reaching into the Swiss Valais. In summer, Les Gets lives to the rhythm of mountain biking — the village hosted the World Championships in 2022 — and its 18-hole mountain golf course. Annecy, Lake Geneva and Geneva all remain under an hour and a half away: day trips your chauffeur arranges on demand.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Ski aux Gets et sur le mont Chéry', en: 'Skiing Les Gets and Mont Chéry' },
        teaser: {
          fr: 'Dépose au front de neige des Chavannes à l’ouverture, transfert vers le versant confidentiel du mont Chéry pour l’après-midi — pentes soutenues et vue sur le mont Blanc. Récupération au pied des pistes à l’heure choisie.',
          en: 'Drop-off at the Chavannes snow front at opening time, transfer to the quieter Mont Chéry side for the afternoon — sustained pitches and Mont Blanc views. Pick-up at the foot of the slopes at your chosen time.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '380',
      },
      {
        title: { fr: 'Annecy et son lac', en: 'Annecy and its lake' },
        teaser: {
          fr: 'À une heure vingt des Gets, la Venise des Alpes : vieille ville traversée par le Thiou, château-musée, tour du lac par Talloires et Menthon-Saint-Bernard. Déjeuner au bord de l’eau avant la remontée en station.',
          en: 'An hour and twenty minutes from Les Gets, the Venice of the Alps: an old town threaded by the Thiou, the castle-museum, a lake loop via Talloires and Menthon-Saint-Bernard. Waterside lunch before heading back up.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Journée bike park des Portes du Soleil', en: 'Portes du Soleil bike-park day' },
        teaser: {
          fr: 'Transport des VTT vers les télécabines des Chavannes ou du Pleney à Morzine, assistance entre les secteurs du domaine et récupération en fin de session, protections et vélos à bord du van.',
          en: 'Bike transport to the Chavannes gondola or the Pleney in Morzine, support between the area’s sectors and end-of-session pick-up, with bikes and body armour loaded in the van.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '560',
      },
      {
        title: { fr: 'Genève, lac et vieille ville', en: 'Geneva, lake and old town' },
        teaser: {
          fr: 'Mise à disposition d’une journée entre la rade, le jet d’eau, les maisons horlogères de la rue du Rhône et les tables du quartier des Eaux-Vives. Retour aux Gets dans la soirée, sans contrainte d’horaire.',
          en: 'A full-day hire between the harbour, the Jet d’Eau, the watchmaking houses of Rue du Rhône and the tables of Eaux-Vives. Return to Les Gets in the evening, free of any timetable.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '850',
      },
      {
        title: { fr: 'Soirée village et musique mécanique', en: 'Village evening and mechanical music' },
        teaser: {
          fr: 'Visite privée du musée de la Musique mécanique — limonaires, orchestrions, pianos automatiques —, puis dîner dans les tables du village. Dépose devant chaque adresse, véhicule à disposition jusqu’au retour au chalet.',
          en: 'A private visit to the Mechanical Music Museum — fairground organs, orchestrions, self-playing pianos — followed by dinner at the village’s tables. Door-to-door drop-offs, vehicle on standby until you return to the chalet.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Les Gets ?',
          en: 'How much does a transfer between Geneva Airport and Les Gets cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Les Gets est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard, quelle que soit l’heure d’atterrissage.',
          en: 'A private transfer between Geneva (GVA) and Les Gets is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay, whatever your landing time.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous transporter des VTT de descente jusqu’au bike park ?',
          en: 'Can you carry downhill mountain bikes to the bike park?',
        },
        a: {
          fr: 'Oui. Nos vans embarquent jusqu’à cinq VTT avec leurs protections, sur porte-vélos ou en soute selon le modèle. Précisez le nombre de vélos à la réservation : nous affectons le véhicule adapté et coordonnons les déposes aux télécabines des Chavannes, du mont Chéry ou de Morzine.',
          en: 'Yes. Our vans carry up to five mountain bikes with their protective gear, on racks or in the hold depending on the model. State the number of bikes at booking: we assign the right vehicle and coordinate drop-offs at the Chavannes, Mont Chéry or Morzine gondolas.',
        },
      },
      {
        q: {
          fr: 'Les Gets sont-ils accessibles en hiver sans équipements spéciaux ?',
          en: 'Is Les Gets accessible in winter without special equipment?',
        },
        a: {
          fr: 'La route du col des Gets est bien entretenue, mais la loi Montagne impose des équipements hivernaux de novembre à mars. Tous nos véhicules en sont pourvus — pneus neige, chaînes ou chaussettes à bord — et nos chauffeurs pratiquent ces routes toute la saison.',
          en: 'The road over the Les Gets pass is well maintained, but French mountain law requires winter equipment from November to March. All our vehicles are fitted accordingly — snow tyres, with chains or socks on board — and our chauffeurs drive these roads all season long.',
        },
      },
    ],
    nearby: ['morzine', 'avoriaz', 'la-clusaz', 'annecy'],
  },
  {
    slug: 'la-clusaz',
    name: { fr: 'La Clusaz', en: 'La Clusaz' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) se trouve à environ 65 km de La Clusaz : comptez 55 minutes à 1 h 10 par l’A41 puis la vallée de Thônes. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel. La gare TGV d’Annecy, à 32 km, est également desservie.',
      en: 'Geneva Airport (GVA) lies around 65 km from La Clusaz: allow 55 minutes to 1 h 10 via the A41 and the Thônes valley. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time. Annecy’s TGV station, 32 km away, is also served.',
    },
    intro: {
      fr: [
        'Lovée au pied de la chaîne des Aravis, La Clusaz est restée un vrai village savoyard devenu station : clocher au centre, fermes d’alpage, cinq massifs skiables reliés jusqu’à 2 600 mètres. Votre **chauffeur privé à La Clusaz** organise les transferts depuis Genève et Annecy, les liaisons quotidiennes vers les télécabines de Beauregard ou de la Balme, et les soirées au village — berlines et vans équipés pour l’hiver, prix fixes convenus à l’avance.',
        'Le massif des **Aravis** est aussi un terroir : le reblochon fermier y est né, et les fermes du val de Thônes ou du col des Aravis se visitent toute l’année. Le Grand-Bornand est à quinze minutes, le lac d’Annecy à quarante, le plateau des Glières et sa mémoire résistante à une heure. Été comme hiver, votre chauffeur compose des journées entre alpages, lac et gastronomie, au départ de votre chalet.',
      ],
      en: [
        'Nestled at the foot of the Aravis range, La Clusaz remains a genuine Savoyard village turned resort: a bell tower at its centre, alpine farms, and five linked ski massifs rising to 2,600 metres. Your **private chauffeur in La Clusaz** arranges transfers from Geneva and Annecy, daily runs to the Beauregard or La Balme gondolas, and evenings in the village — winter-equipped sedans and vans, fixed prices agreed in advance.',
        'The **Aravis** massif is also a terroir: farmhouse Reblochon cheese was born here, and the farms of the Thônes valley and the Col des Aravis welcome visitors all year round. Le Grand-Bornand is fifteen minutes away, Lake Annecy forty, and the Glières plateau with its Resistance memorial an hour. Summer and winter alike, your chauffeur composes days between mountain pastures, lake and gastronomy, starting from your chalet.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Col des Aravis et fermes à reblochon', en: 'Col des Aravis and Reblochon farms' },
        teaser: {
          fr: 'Montée au col des Aravis face au mont Blanc, arrêt dans une ferme d’alpage pour assister à la fabrication du reblochon fermier et repartir avec les meules du jour. Retour par les Confins et son plateau nordique.',
          en: 'Up to the Col des Aravis facing Mont Blanc, a stop at an alpine farm to watch farmhouse Reblochon being made and leave with the day’s wheels. Return via Les Confins and its Nordic plateau.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Lac d’Annecy et vieille ville', en: 'Lake Annecy and the old town' },
        teaser: {
          fr: 'À quarante minutes du village, la Venise des Alpes : canaux du Thiou, palais de l’Île, déjeuner à Talloires face au Roc de Chère. Tour du lac par Menthon-Saint-Bernard et Duingt avant la remontée en station.',
          en: 'Forty minutes from the village, the Venice of the Alps: the Thiou canals, the Palais de l’Île, lunch in Talloires facing the Roc de Chère. A lake loop via Menthon-Saint-Bernard and Duingt before heading back up.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Journée ski cinq massifs', en: 'Five-massif ski day' },
        teaser: {
          fr: 'Dépose à la télécabine de la Balme pour les pentes les plus alpines du domaine, récupération côté Beauregard ou à l’Étale selon votre itinéraire. Le véhicule suit vos envies de glisse, matériel à bord.',
          en: 'Drop-off at the La Balme gondola for the area’s most alpine slopes, pick-up on the Beauregard side or at L’Étale depending on your route. The vehicle follows your skiing plans, equipment on board.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '360',
      },
      {
        title: { fr: 'Plateau des Glières et mémoire alpine', en: 'Glières plateau and Alpine remembrance' },
        teaser: {
          fr: 'À une heure de La Clusaz, le plateau des Glières, haut lieu de la Résistance : monument de Gilioli, sentiers d’alpage, ski nordique en hiver. Une parenthèse d’histoire et de grands espaces à deux pas des Aravis.',
          en: 'An hour from La Clusaz, the Glières plateau, a major site of the French Resistance: the Gilioli monument, mountain-pasture trails, Nordic skiing in winter. History and open space a stone’s throw from the Aravis.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Soirée gastronomique dans les Aravis', en: 'Gourmet evening in the Aravis' },
        teaser: {
          fr: 'Dîner dans les tables du village ou les fermes-auberges d’altitude — reblochonnade au feu de bois, cave de vins de Savoie —, dépose et retour au chalet en véhicule privé, chauffeur à disposition toute la soirée.',
          en: 'Dinner at the village’s tables or in high-pasture farmhouse inns — wood-fire Reblochon dishes, Savoie wine cellars — with private drop-off and return to the chalet, chauffeur on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '300',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et La Clusaz ?',
          en: 'How much does a transfer between Geneva Airport and La Clusaz cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et La Clusaz est facturé à prix fixe, confirmé à la réservation. Il inclut l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard — le tarif ne varie pas, même en cas d’atterrissage tardif.',
          en: 'A private transfer between Geneva (GVA) and La Clusaz is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay — the price does not change, even for a late landing.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous la gare TGV d’Annecy pour rejoindre La Clusaz ?',
          en: 'Do you serve Annecy’s TGV station for reaching La Clusaz?',
        },
        a: {
          fr: 'Oui. La gare d’Annecy est à 32 km, soit environ 40 minutes de route par la vallée de Thônes. Votre chauffeur vous attend sur le parvis avec panneau nominatif, suit l’horaire réel de votre train et charge skis et bagages jusqu’à votre chalet ou votre résidence.',
          en: 'Yes. Annecy station is 32 km away, around 40 minutes by road through the Thônes valley. Your chauffeur waits on the forecourt with a name board, tracks your train’s actual arrival time and loads skis and luggage through to your chalet or residence.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner La Clusaz et Le Grand-Bornand dans une même journée de ski ?',
          en: 'Can we ski both La Clusaz and Le Grand-Bornand in a single day?',
        },
        a: {
          fr: 'Facilement. Les deux stations, distantes de quinze minutes par la route, partagent le forfait Aravis. Votre chauffeur vous dépose le matin d’un côté, vous récupère à midi et vous conduit sur l’autre domaine pour l’après-midi — sans navette ni attente.',
          en: 'Easily. The two resorts, fifteen minutes apart by road, share the Aravis lift pass. Your chauffeur drops you on one side in the morning, collects you at midday and drives you to the other area for the afternoon — no shuttle, no waiting.',
        },
      },
    ],
    nearby: ['le-grand-bornand', 'annecy', 'les-gets'],
  },
  {
    slug: 'le-grand-bornand',
    name: { fr: 'Le Grand-Bornand', en: 'Le Grand-Bornand' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) est à environ 60 km du Grand-Bornand : comptez 55 minutes à 1 h 10 par l’A41 et la vallée de Thônes. Votre chauffeur vous attend en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel pour ajuster la prise en charge.',
      en: 'Geneva Airport (GVA) is around 60 km from Le Grand-Bornand: allow 55 minutes to 1 h 10 via the A41 and the Thônes valley. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time to adjust the pick-up.',
    },
    intro: {
      fr: [
        'Avec ses quatre cents chalets d’alpage et son marché du mercredi tenu depuis des siècles, Le Grand-Bornand est l’un des villages les plus authentiques des Alpes du Nord. Votre **chauffeur privé au Grand-Bornand** relie l’aéroport de Genève, le village et le Chinaillon — le hameau d’altitude au pied des pistes —, assure les navettes quotidiennes vers les remontées et vous conduit à vos soirées, en berline ou van adapté à la montagne, à prix fixe.',
        'Au cœur du massif des **Aravis**, la station partage son domaine et son terroir avec La Clusaz, à quinze minutes : reblochon fermier, fermes d’alpage, vallée du Bouchet. Le village accueille chaque hiver la Coupe du monde de biathlon et, l’été, le festival jeune public Au Bonheur des Mômes ainsi que des arrivées du Tour de France. Annecy et son lac restent à quarante minutes — votre chauffeur en fait une escapade d’une journée.',
      ],
      en: [
        'With its four hundred alpine chalets and a Wednesday market held for centuries, Le Grand-Bornand is one of the most authentic villages in the northern Alps. Your **private chauffeur in Le Grand-Bornand** links Geneva Airport, the village and Le Chinaillon — the high hamlet at the foot of the slopes — provides daily runs to the lifts and drives you to your evenings out, in a mountain-ready sedan or van, at a fixed price.',
        'At the heart of the **Aravis** massif, the resort shares its ski area and its terroir with La Clusaz, fifteen minutes away: farmhouse Reblochon, alpine farms, the Bouchet valley. Each winter the village hosts the Biathlon World Cup and, in summer, the Au Bonheur des Mômes children’s festival as well as Tour de France stage finishes. Annecy and its lake remain forty minutes away — your chauffeur turns them into a full-day escape.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Vallée du Bouchet et fermes d’alpage', en: 'Bouchet valley and alpine farms' },
        teaser: {
          fr: 'La vallée préservée du Bouchet, ses chalets du XVIIIᵉ siècle et ses fermes où le reblochon fermier se fabrique matin et soir. Dégustation à la ferme, arrêt à la chartreuse du Reposoir au retour.',
          en: 'The unspoilt Bouchet valley, its eighteenth-century chalets and the farms where farmhouse Reblochon is made morning and evening. Farm tasting, with a stop at the Le Reposoir charterhouse on the way back.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '330',
      },
      {
        title: { fr: 'Biathlon au stade Sylvie Becaert', en: 'Biathlon at the Sylvie Becaert stadium' },
        teaser: {
          fr: 'Initiation au tir et au ski de fond sur le site nordique qui accueille la Coupe du monde de biathlon, encadrée par un moniteur. Votre chauffeur gère la logistique entre le chalet, le stade et le déjeuner d’altitude.',
          en: 'An introduction to rifle shooting and cross-country skiing at the Nordic venue that hosts the Biathlon World Cup, led by an instructor. Your chauffeur handles logistics between chalet, stadium and mountain lunch.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Annecy, lac et vieille ville', en: 'Annecy, lake and old town' },
        teaser: {
          fr: 'À quarante minutes du village : les canaux du Thiou, le château-musée, déjeuner à Talloires ou Veyrier-du-Lac, croisière privée possible en saison. Retour au Grand-Bornand en fin d’après-midi.',
          en: 'Forty minutes from the village: the Thiou canals, the castle-museum, lunch in Talloires or Veyrier-du-Lac, with a private lake cruise possible in season. Back in Le Grand-Bornand by late afternoon.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Journée ski Aravis, deux stations', en: 'Aravis two-resort ski day' },
        teaser: {
          fr: 'Matinée sur les pentes du Chinaillon et du Maroly, transfert à La Clusaz pour l’après-midi sur la Balme ou Beauregard. Le forfait Aravis couvre les deux domaines ; votre chauffeur assure la liaison, matériel à bord.',
          en: 'A morning on the Chinaillon and Maroly slopes, then a transfer to La Clusaz for an afternoon on La Balme or Beauregard. The Aravis pass covers both areas; your chauffeur handles the link, equipment on board.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '360',
      },
      {
        title: { fr: 'Soirée savoyarde au village', en: 'Savoyard evening in the village' },
        teaser: {
          fr: 'Dîner dans les fermes-auberges du village ou du Chinaillon — fondue aux trois fromages des Aravis, tartiflette au reblochon fermier —, dépose devant la table et retour au chalet à l’heure qui vous convient.',
          en: 'Dinner in the farmhouse inns of the village or Le Chinaillon — three-cheese Aravis fondue, tartiflette with farmhouse Reblochon — with drop-off at the table and a return to the chalet whenever suits you.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '300',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Le Grand-Bornand ?',
          en: 'How much does a transfer between Geneva Airport and Le Grand-Bornand cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Le Grand-Bornand est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard, sans supplément de nuit ni de bagages.',
          en: 'A private transfer between Geneva (GVA) and Le Grand-Bornand is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay, with no night or luggage surcharges.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous la liaison entre le village et le Chinaillon pendant le séjour ?',
          en: 'Do you cover the link between the village and Le Chinaillon during a stay?',
        },
        a: {
          fr: 'Oui. Le Chinaillon se trouve à six kilomètres au-dessus du village, au pied des pistes. Votre chauffeur peut assurer chaque jour les montées du matin et les descentes du soir, à horaires convenus ou à la demande, dans le cadre d’une formule séjour à tarif dégressif.',
          en: 'Yes. Le Chinaillon sits six kilometres above the village, at the foot of the slopes. Your chauffeur can handle the morning runs up and evening runs down each day, at agreed times or on demand, as part of a stay package at a decreasing rate.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver plus tôt pendant la Coupe du monde de biathlon ou le festival Au Bonheur des Mômes ?',
          en: 'Should I book earlier during the Biathlon World Cup or the Au Bonheur des Mômes festival?',
        },
        a: {
          fr: 'Oui. Lors de la Coupe du monde de biathlon en décembre et du festival fin août, la demande est forte et la circulation dans le village est restreinte. Réservez au moins 72 heures à l’avance : votre chauffeur connaît les points de dépose autorisés au plus près des sites.',
          en: 'Yes. During the Biathlon World Cup in December and the festival in late August, demand is high and traffic in the village is restricted. Book at least 72 hours ahead: your chauffeur knows the authorised drop-off points closest to the venues.',
        },
      },
    ],
    nearby: ['la-clusaz', 'annecy', 'les-gets'],
  },
  {
    slug: 'serre-chevalier',
    name: { fr: 'Serre Chevalier', en: 'Serre Chevalier' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Turin (TRN)',
    airportTransfer: {
      fr: 'L’aéroport de Turin-Caselle (TRN) est à environ 110 km de Serre Chevalier : comptez 1 h 45 à 2 h par le col de Montgenèvre. Depuis Grenoble Alpes-Isère (GNB), comptez environ 150 km et 2 h 15 par le col du Lautaret. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Turin-Caselle Airport (TRN) is around 110 km from Serre Chevalier: allow 1 h 45 to 2 h via the Montgenèvre pass. From Grenoble Alpes-Isère (GNB), allow around 150 km and 2 h 15 via the Col du Lautaret. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Étirée le long de la vallée de la Guisane, entre le col du Lautaret et Briançon, Serre Chevalier aligne treize villages et hameaux sous 250 km de pistes baignées par le soleil des Hautes-Alpes. Votre **chauffeur privé à Serre Chevalier** relie Turin, Grenoble ou la gare de Briançon à votre résidence, assure les liaisons entre Chantemerle, Villeneuve et Le Monêtier-les-Bains, et reste à disposition pour vos soirées — véhicules équipés pour la haute montagne, prix fixes.',
        'Aux portes du domaine, **Briançon et sa cité Vauban**, classée au patrimoine mondial de l’UNESCO, veille sur la vallée à 1 326 mètres — la plus haute ville de France. Les Grands Bains du Monêtier puisent dans des sources chaudes connues depuis l’époque romaine, et le parc national des Écrins déploie ses glaciers à quelques kilomètres. L’Italie est à une demi-heure par Montgenèvre : votre chauffeur en fait une escapade gourmande à la journée.',
      ],
      en: [
        'Stretched along the Guisane valley between the Col du Lautaret and Briançon, Serre Chevalier strings together thirteen villages and hamlets beneath 250 km of slopes bathed in Hautes-Alpes sunshine. Your **private chauffeur in Serre Chevalier** connects Turin, Grenoble or Briançon station to your residence, covers the links between Chantemerle, Villeneuve and Le Monêtier-les-Bains, and stays on hand for your evenings — high-mountain-equipped vehicles, fixed prices.',
        'At the gateway to the ski area, **Briançon and its Vauban citadel**, a UNESCO World Heritage site, watches over the valley at 1,326 metres — the highest town in France. The Grands Bains du Monêtier draw on hot springs known since Roman times, and the Écrins national park unfolds its glaciers a few kilometres away. Italy is half an hour away via Montgenèvre: your chauffeur turns it into a gourmet day trip.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Briançon, cité Vauban', en: 'Briançon, the Vauban citadel' },
        teaser: {
          fr: 'À dix minutes du domaine, la plus haute ville de France : remparts de Vauban classés à l’UNESCO, gargouilles de la Grande Rue, fort du Château. Visite guidée privée possible, déjeuner dans la vieille ville.',
          en: 'Ten minutes from the ski area, the highest town in France: UNESCO-listed Vauban ramparts, the gargoyle channels of the Grande Rue, the Château fort. Private guided tour available, lunch in the old town.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Grands Bains du Monêtier', en: 'The Grands Bains du Monêtier' },
        teaser: {
          fr: 'Les eaux chaudes du Monêtier-les-Bains, captées à 44 °C et connues depuis l’Antiquité : bassins intérieurs et extérieurs face aux sommets, espace romain, soins sur réservation. Dépose et retour à votre résidence.',
          en: 'The hot springs of Le Monêtier-les-Bains, rising at 44 °C and known since antiquity: indoor and outdoor pools facing the peaks, a Roman-style bathing area, treatments on request. Drop-off and return to your residence.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Journée italienne par le Montgenèvre', en: 'Italian day via Montgenèvre' },
        teaser: {
          fr: 'Passage du col de Montgenèvre vers le val de Suse : la Sacra di San Michele, les cafés historiques de Turin ou le marché de Suse selon vos envies. Déjeuner piémontais, retour dans la vallée en soirée.',
          en: 'Over the Montgenèvre pass into the Susa valley: the Sacra di San Michele, Turin’s historic cafés or the Susa market as you please. Piedmontese lunch, back in the valley by evening.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Col du Lautaret et parc des Écrins', en: 'Col du Lautaret and the Écrins park' },
        teaser: {
          fr: 'Montée au col du Lautaret face à la Meije et ses glaciers, jardin alpin en été, village classé de La Grave en contrebas. Un décor de haute montagne à trente minutes de votre résidence, arrêts photo compris.',
          en: 'Up to the Col du Lautaret facing La Meije and its glaciers, the alpine botanical garden in summer, the listed village of La Grave below. High-mountain scenery thirty minutes from your residence, photo stops included.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Journée ski d’un bout à l’autre du domaine', en: 'Ski day across the whole area' },
        teaser: {
          fr: 'Dépose à Chantemerle à l’ouverture, traversée du domaine jusqu’au Monêtier, récupération au pied des pistes de votre choix. Votre chauffeur suit votre progression et déplace bagages et matériel entre les villages.',
          en: 'Drop-off in Chantemerle at opening time, a traverse of the area through to Le Monêtier, pick-up at the slopes of your choice. Your chauffeur follows your progress and moves luggage and equipment between the villages.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Turin et Serre Chevalier ?',
          en: 'How much does a transfer between Turin Airport and Serre Chevalier cost?',
        },
        a: {
          fr: 'Le transfert privé entre Turin-Caselle (TRN) et Serre Chevalier est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard. Les transferts depuis Grenoble (GNB) ou Marseille sont également devisés à prix fixe.',
          en: 'A private transfer between Turin-Caselle (TRN) and Serre Chevalier is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay. Transfers from Grenoble (GNB) or Marseille are also quoted at a fixed price.',
        },
      },
      {
        q: {
          fr: 'Le col de Montgenèvre est-il ouvert toute l’année ?',
          en: 'Is the Montgenèvre pass open all year round?',
        },
        a: {
          fr: 'Oui, le col de Montgenèvre (1 850 m) est maintenu ouvert toute l’année et constitue l’accès le plus direct depuis l’Italie. Nos véhicules sont équipés pour l’hiver et nos chauffeurs pratiquent ce passage en toute saison ; en cas de conditions exceptionnelles, l’itinéraire par le tunnel du Fréjus est proposé.',
          en: 'Yes, the Montgenèvre pass (1,850 m) is kept open all year and is the most direct approach from Italy. Our vehicles are winter-equipped and our chauffeurs drive this crossing in every season; in exceptional conditions, the Fréjus tunnel route is offered instead.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les liaisons entre les villages de la vallée pendant le séjour ?',
          en: 'Do you cover the links between the valley’s villages during a stay?',
        },
        a: {
          fr: 'Oui. Chantemerle, Villeneuve, Le Monêtier-les-Bains et Briançon s’égrènent sur une quinzaine de kilomètres. Votre chauffeur assure les liaisons quotidiennes vers les remontées, les restaurants et les thermes, à horaires convenus ou à la demande, dans le cadre d’une formule séjour.',
          en: 'Yes. Chantemerle, Villeneuve, Le Monêtier-les-Bains and Briançon are spread along some fifteen kilometres. Your chauffeur covers daily links to the lifts, restaurants and thermal baths, at agreed times or on demand, as part of a stay package.',
        },
      },
    ],
    nearby: ['alpe-d-huez', 'les-deux-alpes'],
  },
  {
    slug: 'annecy',
    name: { fr: 'Annecy', en: 'Annecy' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) se trouve à 40 km d’Annecy : comptez 40 à 45 minutes par l’autoroute A41 jusqu’à la vieille ville ou les rives du lac. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel. La gare TGV d’Annecy, en liaison directe avec Paris, est également desservie.',
      en: 'Geneva Airport (GVA) lies 40 km from Annecy: allow 40 to 45 minutes via the A41 motorway to the old town or the lakeshore. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time. Annecy’s TGV station, with direct trains from Paris, is also served.',
    },
    intro: {
      fr: [
        'Surnommée la Venise des Alpes, Annecy déroule ses canaux, son palais de l’Île et son château au bord d’un lac aux eaux parmi les plus pures d’Europe. Votre **chauffeur privé à Annecy** assure transferts aéroport et gare TGV, mises à disposition pour vos rendez-vous d’affaires, déposes au plus près de la vieille ville piétonne et tours du lac par Talloires, Menthon-Saint-Bernard et Duingt — berlines et vans premium, prix fixes.',
        'Annecy est aussi une base idéale entre lac et montagnes : le massif des **Aravis** et les stations de La Clusaz et du Grand-Bornand sont à quarante minutes, Genève à moins d’une heure, Chamonix et le mont Blanc à une heure et quart. En été, le lac impose sa saison — Fête du lac début août, terrasses de Talloires, sports nautiques — et votre chauffeur en maîtrise la circulation comme les points de dépose.',
      ],
      en: [
        'Known as the Venice of the Alps, Annecy unfolds its canals, its Palais de l’Île and its castle on the shore of one of Europe’s purest lakes. Your **private chauffeur in Annecy** handles airport and TGV station transfers, hourly hire for business meetings, drop-offs as close as possible to the pedestrian old town, and lake tours via Talloires, Menthon-Saint-Bernard and Duingt — premium sedans and vans, fixed prices.',
        'Annecy is also an ideal base between lake and mountains: the **Aravis** massif and the resorts of La Clusaz and Le Grand-Bornand are forty minutes away, Geneva under an hour, Chamonix and Mont Blanc an hour and a quarter. In summer the lake sets the pace — the Fête du Lac in early August, the terraces of Talloires, water sports — and your chauffeur knows its traffic patterns and drop-off points inside out.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Tour du lac d’Annecy', en: 'Lake Annecy grand tour' },
        teaser: {
          fr: 'Les 40 km du tour du lac en véhicule privé : Veyrier-du-Lac, le château de Menthon-Saint-Bernard, Talloires et son abbaye, la réserve du Bout-du-Lac, Duingt et Sévrier. Arrêts photo et baignade au gré de vos envies.',
          en: 'The 40 km lake loop by private car: Veyrier-du-Lac, the château of Menthon-Saint-Bernard, Talloires and its abbey, the Bout-du-Lac reserve, Duingt and Sévrier. Photo and swimming stops as the mood takes you.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Déjeuner étoilé à Talloires', en: 'Starred lunch in Talloires' },
        teaser: {
          fr: 'Dépose devant les grandes tables de la rive est — l’Auberge du Père Bise face au Roc de Chère —, puis sieste au bord de l’eau ou traversée du lac en bateau privé. Retour à votre hôtel en fin d’après-midi.',
          en: 'Drop-off at the great tables of the eastern shore — Auberge du Père Bise facing the Roc de Chère — followed by a lakeside rest or a private boat crossing. Return to your hotel in the late afternoon.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Aravis et fermes à reblochon', en: 'Aravis and Reblochon farms' },
        teaser: {
          fr: 'À quarante minutes d’Annecy, les villages de La Clusaz et du Grand-Bornand, le col des Aravis face au mont Blanc et une ferme d’alpage où naît le reblochon fermier. Dégustation et retour par la vallée de Thônes.',
          en: 'Forty minutes from Annecy, the villages of La Clusaz and Le Grand-Bornand, the Col des Aravis facing Mont Blanc, and an alpine farm where farmhouse Reblochon is born. Tasting, then return via the Thônes valley.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Chamonix et le mont Blanc', en: 'Chamonix and Mont Blanc' },
        teaser: {
          fr: 'Une heure et quart de route pour rejoindre Chamonix : téléphérique de l’Aiguille du Midi à 3 842 mètres, train du Montenvers et Mer de Glace, déjeuner face aux Drus. Votre chauffeur gère billets horodatés et logistique.',
          en: 'An hour and a quarter by road to Chamonix: the Aiguille du Midi cable car at 3,842 metres, the Montenvers railway and the Mer de Glace, lunch facing the Drus. Your chauffeur handles timed tickets and logistics.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '820',
      },
      {
        title: { fr: 'Soirée vieille ville et rives du Thiou', en: 'Old town and Thiou riverside evening' },
        teaser: {
          fr: 'Dîner dans les tables de la vieille ville — Le Clos des Sens à Annecy-le-Vieux ou une terrasse sur le Thiou —, puis promenade éclairée le long des canaux. Dépose au plus près des zones piétonnes, véhicule à disposition.',
          en: 'Dinner at the old town’s tables — Le Clos des Sens in Annecy-le-Vieux or a terrace on the Thiou — followed by an evening stroll along the lit canals. Drop-off as close as possible to the pedestrian zones, vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Annecy ?',
          en: 'How much does a transfer between Geneva Airport and Annecy cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Annecy est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard — le passage de frontière est sans formalité pour les voyageurs de l’espace Schengen.',
          en: 'A private transfer between Geneva (GVA) and Annecy is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay — the border crossing is formality-free for Schengen travellers.',
        },
      },
      {
        q: {
          fr: 'Peut-on approcher la vieille ville d’Annecy en voiture ?',
          en: 'Can we get close to Annecy’s old town by car?',
        },
        a: {
          fr: 'Le cœur historique est piéton, mais votre chauffeur connaît les points de dépose autorisés au plus près — quai Perrière, rue Royale, Hôtel de Ville — et adapte l’itinéraire aux jours de marché et aux grandes affluences d’été. Il vous récupère au même point ou ailleurs, selon votre promenade.',
          en: 'The historic core is pedestrianised, but your chauffeur knows the authorised drop-off points closest to it — Quai Perrière, Rue Royale, the Hôtel de Ville — and adapts the route on market days and during peak summer crowds. He collects you at the same spot or elsewhere, depending on your walk.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition pour la Fête du lac ou le Festival du film d’animation ?',
          en: 'Do you offer hourly hire for the Fête du Lac or the animation film festival?',
        },
        a: {
          fr: 'Oui. Lors de la Fête du lac début août et du Festival international du film d’animation en juin, la circulation est fortement restreinte autour du Pâquier. Réservez plusieurs jours à l’avance : votre chauffeur planifie les déposes autorisées et reste à disposition pendant toute la soirée.',
          en: 'Yes. During the Fête du Lac in early August and the international animation film festival in June, traffic is heavily restricted around the Pâquier. Book several days ahead: your chauffeur plans the authorised drop-offs and remains on standby throughout the evening.',
        },
      },
    ],
    nearby: ['la-clusaz', 'le-grand-bornand', 'les-gets'],
  },
  {
    slug: 'evian-les-bains',
    name: { fr: 'Évian-les-Bains', en: 'Évian-les-Bains' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) est à environ 45 km d’Évian-les-Bains : comptez 45 à 55 minutes par la rive sud du Léman, via Thonon. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel pour ajuster la prise en charge.',
      en: 'Geneva Airport (GVA) is around 45 km from Évian-les-Bains: allow 45 to 55 minutes along the southern shore of Lake Geneva, via Thonon. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time to adjust the pick-up.',
    },
    intro: {
      fr: [
        'Ville d’eaux de la Belle Époque posée entre le Léman et les préalpes du Chablais, Évian cultive un art de vivre hérité de ses grandes heures thermales : buvette Cachat, palais Lumière, funiculaire centenaire, jardins en terrasses au-dessus du lac. Votre **chauffeur privé à Évian-les-Bains** dessert l’Hôtel Royal et l’Ermitage, les thermes, l’embarcadère CGN et les propriétés des coteaux, en berline ou van premium, à prix fixe convenu à l’avance.',
        'Évian est aussi un belvédère sur le **lac Léman** : Lausanne se rejoint en trente-cinq minutes de traversée, Yvoire la médiévale et Thonon jalonnent la rive française, Genève reste à moins d’une heure. Le golf de l’Evian Resort, hôte de l’Amundi Evian Championship chaque été, domine le lac, et les vallées d’Abondance ouvrent la route des alpages et des Portes du Soleil. Votre chauffeur compose l’itinéraire, saison après saison.',
      ],
      en: [
        'A Belle Époque spa town set between Lake Geneva and the Chablais foothills, Évian cultivates a way of life inherited from its great thermal era: the Cachat spring hall, the Palais Lumière, a century-old funicular, terraced gardens above the lake. Your **private chauffeur in Évian-les-Bains** serves the Hôtel Royal and the Ermitage, the thermal baths, the CGN pier and the hillside estates, in a premium sedan or van, at a fixed price agreed in advance.',
        'Évian is also a balcony over **Lake Geneva**: Lausanne is a thirty-five-minute crossing away, medieval Yvoire and Thonon line the French shore, and Geneva remains under an hour. The Evian Resort golf course, host of the Amundi Evian Championship every summer, overlooks the lake, while the Abondance valleys open the road to the high pastures and the Portes du Soleil. Your chauffeur composes the itinerary, season after season.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Journée golf à l’Evian Resort', en: 'Golf day at the Evian Resort' },
        teaser: {
          fr: 'Dépose au club-house du parcours qui accueille l’Amundi Evian Championship, sacs de golf à bord, déjeuner en terrasse face au Léman. Votre chauffeur vous attend ou revient à l’heure convenue.',
          en: 'Drop-off at the club-house of the course that hosts the Amundi Evian Championship, golf bags on board, lunch on the terrace overlooking the lake. Your chauffeur waits or returns at the agreed time.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '420',
      },
      {
        title: { fr: 'Yvoire et la rive française du Léman', en: 'Yvoire and the French shore of Lake Geneva' },
        teaser: {
          fr: 'La côte lémanique jusqu’au village médiéval d’Yvoire — remparts, Jardin des Cinq Sens, ruelles fleuries —, en passant par Thonon et le port de Rives. Déjeuner face au lac, retour par les coteaux du vignoble de Marin.',
          en: 'The lakeside road to the medieval village of Yvoire — ramparts, the Garden of Five Senses, flower-filled lanes — via Thonon and the Rives harbour. Lakeside lunch, returning through the Marin vineyard slopes.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Vallée d’Abondance et fromages du Chablais', en: 'Abondance valley and Chablais cheeses' },
        teaser: {
          fr: 'À quarante minutes d’Évian, l’abbaye d’Abondance et ses fresques, les fermes où s’affine le fromage éponyme, puis Châtel aux portes du Soleil. Une journée d’alpages entre lac et haute vallée.',
          en: 'Forty minutes from Évian, Abondance abbey and its frescoes, the farms where the eponymous cheese matures, then Châtel at the gates of the Portes du Soleil. A day of mountain pastures between lake and high valley.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Lausanne par le lac', en: 'Lausanne across the lake' },
        teaser: {
          fr: 'Dépose à l’embarcadère CGN pour la traversée vers Ouchy, puis prise en charge par votre chauffeur côté suisse : musée Olympique, cathédrale, quais de Lausanne. Retour par bateau ou par la route, au choix.',
          en: 'Drop-off at the CGN pier for the crossing to Ouchy, then pick-up by your chauffeur on the Swiss side: the Olympic Museum, the cathedral, the Lausanne waterfront. Return by boat or by road, as you prefer.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '980',
      },
      {
        title: { fr: 'Soirée casino et palais Lumière', en: 'Casino and Palais Lumière evening' },
        teaser: {
          fr: 'Dîner dans les tables d’Évian ou de l’Hôtel Royal, exposition au palais Lumière puis soirée au casino Belle Époque face au lac. Dépose devant chaque adresse, véhicule à disposition jusqu’au retour.',
          en: 'Dinner at the tables of Évian or the Hôtel Royal, an exhibition at the Palais Lumière, then an evening at the Belle Époque casino facing the lake. Door-to-door drop-offs, vehicle on standby until your return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Évian-les-Bains ?',
          en: 'How much does a transfer between Geneva Airport and Évian-les-Bains cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Évian-les-Bains est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard, de jour comme de nuit.',
          en: 'A private transfer between Geneva (GVA) and Évian-les-Bains is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay, day or night.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous l’Hôtel Royal et l’Ermitage de l’Evian Resort ?',
          en: 'Do you serve the Hôtel Royal and the Ermitage at the Evian Resort?',
        },
        a: {
          fr: 'Oui. Nous déposons directement devant les entrées de l’Hôtel Royal, de l’Ermitage et du golf, en coordination avec les conciergeries. Pendant l’Amundi Evian Championship en juillet, les accès sont réglementés : votre chauffeur détient les autorisations nécessaires et anticipe les itinéraires.',
          en: 'Yes. We drop you directly at the entrances of the Hôtel Royal, the Ermitage and the golf course, in coordination with the concierge teams. During the Amundi Evian Championship in July, access is regulated: your chauffeur holds the necessary authorisations and plans routes ahead.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Évian avec une journée à Lausanne ou à Genève ?',
          en: 'Can we combine Évian with a day in Lausanne or Geneva?',
        },
        a: {
          fr: 'Facilement. Lausanne se rejoint en trente-cinq minutes par la traversée CGN depuis le port d’Évian, ou par la route en une heure et quart via Genève. Nos véhicules sont autorisés à circuler en Suisse et les journées transfrontalières sont devisées à prix fixe avant le départ.',
          en: 'Easily. Lausanne is thirty-five minutes away by CGN crossing from the Évian pier, or an hour and a quarter by road via Geneva. Our vehicles are authorised to operate in Switzerland and cross-border days are quoted at a fixed price before departure.',
        },
      },
    ],
    nearby: ['thonon-les-bains', 'morzine', 'avoriaz'],
  },
  {
    slug: 'thonon-les-bains',
    name: { fr: 'Thonon-les-Bains', en: 'Thonon-les-Bains' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) se trouve à environ 35 km de Thonon-les-Bains : comptez 40 à 45 minutes par la rive sud du Léman ou l’autoroute suisse via Lausanne selon le trafic. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Geneva Airport (GVA) lies around 35 km from Thonon-les-Bains: allow 40 to 45 minutes along the southern shore of Lake Geneva, or via the Swiss motorway through Lausanne depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale historique du Chablais, Thonon-les-Bains s’étage entre sa ville haute — belvédère planté de jardins au-dessus du Léman — et le port de Rives, où les pêcheurs débarquent encore féra et omble chevalier. Votre **chauffeur privé à Thonon-les-Bains** assure transferts depuis Genève, mises à disposition pour vos rendez-vous des deux côtés de la frontière et déposes au funiculaire, aux thermes ou au château de Ripaille, à prix fixe.',
        'Ville thermale depuis le XIXᵉ siècle, Thonon est surtout un carrefour : Yvoire la médiévale à vingt minutes, **Évian et son golf** à dix, les vallées d’Abondance et la route des Portes du Soleil — Morzine, Avoriaz — dans son arrière-pays. Lausanne se rejoint par la traversée CGN, Genève par la rive. Été comme hiver, votre chauffeur articule lac, vignoble de Ripaille et montagnes en journées sur mesure.',
      ],
      en: [
        'The historic capital of the Chablais, Thonon-les-Bains is tiered between its upper town — a garden-planted belvedere above Lake Geneva — and the Rives harbour, where fishermen still land féra and Arctic char. Your **private chauffeur in Thonon-les-Bains** provides transfers from Geneva, hourly hire for meetings on both sides of the border, and drop-offs at the funicular, the thermal baths or the Château de Ripaille, at a fixed price.',
        'A spa town since the nineteenth century, Thonon is above all a crossroads: medieval Yvoire twenty minutes away, **Évian and its golf course** ten, the Abondance valleys and the road to the Portes du Soleil — Morzine, Avoriaz — in its hinterland. Lausanne is reached by CGN crossing, Geneva along the shore. Summer and winter alike, your chauffeur weaves lake, the Ripaille vineyard and mountains into tailor-made days.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Château de Ripaille et son vignoble', en: 'Château de Ripaille and its vineyard' },
        teaser: {
          fr: 'Aux portes de la ville, l’ancienne résidence des ducs de Savoie entre lac et forêt : visite du château, dégustation des vins de Ripaille — cru du vignoble de Savoie — et promenade dans l’arboretum.',
          en: 'On the edge of town, the former residence of the Dukes of Savoy between lake and forest: a tour of the château, a tasting of Ripaille wines — a Savoie cru — and a walk in the arboretum.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Yvoire, perle du Léman', en: 'Yvoire, pearl of Lake Geneva' },
        teaser: {
          fr: 'À vingt minutes de Thonon, le village médiéval d’Yvoire, classé parmi les plus beaux de France : remparts du XIVᵉ siècle, Jardin des Cinq Sens, déjeuner de féra du lac en terrasse. Retour par les villages de la côte.',
          en: 'Twenty minutes from Thonon, the medieval village of Yvoire, listed among France’s most beautiful: fourteenth-century ramparts, the Garden of Five Senses, a lakeside lunch of féra. Return through the shoreline villages.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Gorges du pont du Diable et vallée d’Aulps', en: 'Pont du Diable gorges and the Aulps valley' },
        teaser: {
          fr: 'La route des Grandes Alpes s’ouvre à Thonon : gorges de la Dranse et pont du Diable, abbaye d’Aulps, montée vers Morzine et le lac de Montriond. Une journée entre patrimoine et haute vallée.',
          en: 'The Route des Grandes Alpes begins in Thonon: the Dranse gorges and the Pont du Diable, Aulps abbey, then up to Morzine and the Lac de Montriond. A day of heritage and high valley.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Genève, institutions et vieille ville', en: 'Geneva, institutions and old town' },
        teaser: {
          fr: 'Mise à disposition pour vos rendez-vous côté suisse — organisations internationales, banques privées — ou une journée entre la rade, la rue du Rhône et Carouge. Retour à Thonon sans contrainte d’horaire.',
          en: 'At your disposal for meetings on the Swiss side — international organisations, private banks — or a day between the harbour, Rue du Rhône and Carouge. Return to Thonon free of any timetable.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '780',
      },
      {
        title: { fr: 'Soirée au port de Rives', en: 'Evening at the Rives harbour' },
        teaser: {
          fr: 'Descente en funiculaire vers le port de Rives, dîner de poissons du lac — féra, omble chevalier — les pieds dans l’eau, puis remontée en ville haute. Dépose et retour en véhicule privé, chauffeur à disposition.',
          en: 'Down the funicular to the Rives harbour, a dinner of lake fish — féra, Arctic char — at the water’s edge, then back up to the upper town. Private drop-off and return, chauffeur on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '310',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Thonon-les-Bains ?',
          en: 'How much does a transfer between Geneva Airport and Thonon-les-Bains cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Thonon-les-Bains est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard, quelle que soit l’heure d’arrivée.',
          en: 'A private transfer between Geneva (GVA) and Thonon-les-Bains is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay, whatever your arrival time.',
        },
      },
      {
        q: {
          fr: 'Passez-vous par la Suisse ou par la rive française pour rejoindre Thonon ?',
          en: 'Do you drive via Switzerland or the French shore to reach Thonon?',
        },
        a: {
          fr: 'Les deux itinéraires sont possibles : la rive sud française, directe et sans péage suisse, ou l’autoroute par Lausanne quand le trafic frontalier l’exige. Votre chauffeur choisit en temps réel le trajet le plus fluide ; nos véhicules disposent de la vignette suisse et sont autorisés des deux côtés.',
          en: 'Both routes are possible: the French southern shore, direct and without a Swiss toll, or the motorway via Lausanne when border traffic demands it. Your chauffeur picks the smoothest route in real time; our vehicles carry the Swiss vignette and are authorised on both sides.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers Morzine, Avoriaz et les Portes du Soleil depuis Thonon ?',
          en: 'Do you provide transfers to Morzine, Avoriaz and the Portes du Soleil from Thonon?',
        },
        a: {
          fr: 'Oui. Thonon est la porte d’entrée naturelle des Portes du Soleil : Morzine se rejoint en 40 minutes par la vallée de la Dranse, Avoriaz en une heure — avec dépose coordonnée aux accueils de la station piétonne. Les trajets sont devisés à prix fixe, matériel de ski à bord.',
          en: 'Yes. Thonon is the natural gateway to the Portes du Soleil: Morzine is 40 minutes away via the Dranse valley, Avoriaz an hour — with a coordinated drop-off at the car-free resort’s reception points. Journeys are quoted at a fixed price, ski equipment on board.',
        },
      },
    ],
    nearby: ['evian-les-bains', 'morzine', 'avoriaz', 'les-gets'],
  },
  {
    slug: 'gstaad',
    name: { fr: 'Gstaad', en: 'Gstaad' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) se trouve à environ 150 km de Gstaad : comptez 1 h 50 à 2 h 15 de route par l’autoroute du Léman puis le Pays-d’Enhaut. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel pour ajuster la prise en charge.',
      en: 'Geneva Airport (GVA) lies around 150 km from Gstaad: allow 1 h 50 to 2 h 15 by road along Lake Geneva and up through the Pays-d’Enhaut. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time to adjust the pick-up.',
    },
    intro: {
      fr: [
        'Village de chalets au cœur du Saanenland, Gstaad cultive une discrétion que ses hôtes apprécient depuis un siècle : la Promenade piétonne, le Gstaad Palace dressé sur sa colline, les écoles internationales et l’aérodrome de Saanen. Votre **chauffeur privé à Gstaad** assure les transferts depuis Genève, la mise à disposition à l’heure entre chalets, restaurants d’altitude et clubs privés, en berline Mercedes ou van équipé pour les skis — prix fixe confirmé avant chaque trajet.',
        'Autour du village, le domaine s’étend de Zweisimmen aux Diablerets, où le **Glacier 3000** garantit la neige d’octobre à mai. L’été, Gstaad vit au rythme du Menuhin Festival, du tournoi de tennis Swiss Open et de la Hublot Polo Gold Cup ; les cols du Pillon et du Jaun ouvrent des itinéraires panoramiques vers Interlaken ou Gruyères. Votre chauffeur enchaîne ces étapes sans contrainte, hiver comme été.',
      ],
      en: [
        'A chalet village at the heart of the Saanenland, Gstaad has cultivated a discretion its guests have valued for a century: the pedestrian Promenade, the Gstaad Palace on its hillside, international schools and the Saanen airfield. Your **private chauffeur in Gstaad** handles transfers from Geneva and hourly hire between chalets, mountain restaurants and private clubs, in a Mercedes sedan or a ski-equipped van — with a fixed price confirmed before every journey.',
        'Around the village, the ski area stretches from Zweisimmen to Les Diablerets, where **Glacier 3000** guarantees snow from October to May. In summer, Gstaad follows the rhythm of the Menuhin Festival, the Swiss Open tennis tournament and the Hublot Polo Gold Cup; the Pillon and Jaun passes open scenic routes towards Interlaken or Gruyères. Your chauffeur links these stops effortlessly, winter and summer alike.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Glacier 3000 et col du Pillon', en: 'Glacier 3000 and the Pillon Pass' },
        teaser: {
          fr: 'À 20 minutes de Gstaad, le téléphérique du col du Pillon monte au Glacier 3000 : Peak Walk by Tissot, vue sur le Cervin et le Mont-Blanc, déjeuner au restaurant signé Mario Botta. Retour par Les Diablerets.',
          en: '20 minutes from Gstaad, the Col du Pillon cable car climbs to Glacier 3000: the Peak Walk by Tissot, views of the Matterhorn and Mont Blanc, lunch in the Mario Botta-designed restaurant. Return via Les Diablerets.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '590',
      },
      {
        title: { fr: 'Gruyères, château et fromagerie', en: 'Gruyères, castle and cheese dairy' },
        teaser: {
          fr: 'À 45 minutes par le col des Mosses ou le Pays-d’Enhaut : la cité médiévale de Gruyères, son château, la Maison du Gruyère et le musée HR Giger. Arrêt chocolat à la Maison Cailler de Broc possible au retour.',
          en: '45 minutes away via the Col des Mosses or the Pays-d’Enhaut: the medieval town of Gruyères, its castle, the Maison du Gruyère dairy and the HR Giger Museum. An optional chocolate stop at Maison Cailler in Broc on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Journée ski entre Saanenland et Diablerets', en: 'Ski day across the Saanenland and Les Diablerets' },
        teaser: {
          fr: 'Votre chauffeur vous dépose au pied des remontées — Eggli, Wispile, Zweisimmen ou Glacier 3000 selon l’enneigement — puis vous récupère skis chargés, où que vous terminiez. Van équipé porte-skis, boissons chaudes à bord.',
          en: 'Your chauffeur drops you at the lifts — Eggli, Wispile, Zweisimmen or Glacier 3000 depending on snow conditions — then collects you, skis loaded, wherever you finish. Ski-rack van, hot drinks on board.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '990',
      },
      {
        title: { fr: 'Riviera lémanique — Montreux et Lausanne', en: 'Lake Geneva Riviera — Montreux and Lausanne' },
        teaser: {
          fr: 'Descente sur le Léman en 1 h 15 : le château de Chillon, les terrasses de Lavaux classées UNESCO, déjeuner face au lac à Montreux ou Lausanne. Une parenthèse lacustre au départ des neiges du Saanenland.',
          en: 'Down to Lake Geneva in 1 h 15: Chillon Castle, the UNESCO-listed Lavaux terraces, lakeside lunch in Montreux or Lausanne. A lakeside interlude from the snows of the Saanenland.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1100',
      },
      {
        title: { fr: 'Soirée gastronomique à Gstaad', en: 'Gstaad gourmet evening' },
        teaser: {
          fr: 'Dépose devant votre table — Le Grill du Palace, la Chesery ou un restaurant d’alpage privatisé — puis retour de nuit à votre chalet, même par routes enneigées. Le véhicule reste à disposition toute la soirée.',
          en: 'Drop-off at your table — Le Grill at the Palace, the Chesery or a privatised alpine hut — then a late-night return to your chalet, even on snowy roads. The vehicle remains on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '490',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Gstaad ?',
          en: 'How much does a transfer between Geneva Airport and Gstaad cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Gstaad est facturé à prix fixe, confirmé à la réservation, quel que soit le trafic. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Geneva (GVA) and Gstaad is charged at a fixed price, confirmed at booking, regardless of traffic. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Vos véhicules sont-ils équipés pour l’hiver et les bagages de ski ?',
          en: 'Are your vehicles equipped for winter and ski luggage?',
        },
        a: {
          fr: 'Oui. En saison, tous nos véhicules circulent en pneus hiver, chaînes à bord, et nos vans acceptent skis, snowboards et bagages volumineux sans supplément caché. Précisez simplement le nombre de paires à la réservation pour que nous affections le véhicule adapté.',
          en: 'Yes. In season, all our vehicles run on winter tyres with chains on board, and our vans take skis, snowboards and bulky luggage with no hidden surcharge. Simply state the number of pairs at booking so we assign the right vehicle.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les trajets depuis la France ou d’autres stations suisses ?',
          en: 'Do you cover journeys from France or other Swiss resorts?',
        },
        a: {
          fr: 'Absolument. Nous relions régulièrement Gstaad à Genève, Verbier, Villars, Interlaken ou Megève. Les trajets transfrontaliers sont devisés à l’avance à prix fixe, avec un véhicule en règle des deux côtés de la frontière — vignette autoroutière suisse incluse.',
          en: 'Absolutely. We regularly link Gstaad with Geneva, Verbier, Villars, Interlaken and Megève. Cross-border journeys are quoted in advance at a fixed price, with a vehicle fully compliant on both sides of the border — Swiss motorway vignette included.',
        },
      },
    ],
    nearby: ['villars-sur-ollon', 'verbier', 'crans-montana'],
  },
  {
    slug: 'verbier',
    name: { fr: 'Verbier', en: 'Verbier' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) est à environ 160 km de Verbier : comptez 1 h 50 à 2 h 10 par l’autoroute du Rhône jusqu’au Châble, puis la montée finale. L’aéroport de Sion (SIR), à 60 km, offre une alternative pour l’aviation privée. Accueil avec panneau nominatif et suivi du vol en temps réel inclus.',
      en: 'Geneva Airport (GVA) is around 160 km from Verbier: allow 1 h 50 to 2 h 10 along the Rhône valley motorway to Le Châble, then the final climb. Sion Airport (SIR), 60 km away, is a convenient alternative for private aviation. Name-board welcome and real-time flight tracking included.',
    },
    intro: {
      fr: [
        'Perchée sur son plateau ensoleillé au-dessus du val de Bagnes, Verbier est la référence freeride des Alpes et le point d’ancrage du domaine des 4 Vallées — 410 km de pistes jusqu’au Mont-Fort, à 3 330 mètres. Votre **chauffeur privé à Verbier** assure les transferts depuis Genève ou Sion, les navettes entre chalet, remontées de Médran et tables d’altitude, en berline ou van porte-skis, à prix fixe et à toute heure.',
        'La station vit toute l’année : l’**Xtreme de Verbier**, finale du Freeride World Tour sur le Bec des Rosses, clôt l’hiver en mars, avant que le Verbier Festival ne réunisse chaque été les grands noms du classique. Autour, Sion et ses châteaux, les bains de Lavey, Chamonix par le col de la Forclaz — autant d’excursions que votre chauffeur organise à la journée, itinéraire et arrêts sur mesure.',
      ],
      en: [
        'Perched on its sunny plateau above the Val de Bagnes, Verbier is the freeride benchmark of the Alps and the anchor of the 4 Vallées ski area — 410 km of pistes reaching Mont-Fort at 3,330 metres. Your **private chauffeur in Verbier** covers transfers from Geneva or Sion and shuttles between chalet, the Médran lifts and mountain restaurants, in a sedan or ski-rack van, at a fixed price and at any hour.',
        'The resort lives year-round: the **Verbier Xtreme**, final of the Freeride World Tour on the Bec des Rosses, closes the winter in March, before the Verbier Festival gathers classical music’s great names each summer. Nearby, Sion and its castles, the Lavey thermal baths and Chamonix via the Col de la Forclaz make natural day trips your chauffeur arranges door to door, itinerary and stops tailored to you.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Journée 4 Vallées, dépose aux remontées', en: '4 Vallées ski day, lift-side drop-off' },
        teaser: {
          fr: 'Dépose à Médran à l’ouverture, récupération où vous terminez — Verbier, Nendaz, Veysonnaz ou Thyon. Votre chauffeur suit votre journée et adapte le point de rendez-vous ; skis et chaussures voyagent dans le van.',
          en: 'Drop-off at Médran for first lifts, pick-up wherever you finish — Verbier, Nendaz, Veysonnaz or Thyon. Your chauffeur follows your day and adjusts the meeting point; skis and boots travel in the van.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '950',
      },
      {
        title: { fr: 'Chamonix et l’aiguille du Midi', en: 'Chamonix and the Aiguille du Midi' },
        teaser: {
          fr: 'Par Martigny et le col de la Forclaz, Chamonix est à 1 h 15 de Verbier. Montée à l’aiguille du Midi face au Mont-Blanc, déjeuner en ville, retour par Vallorcine. Passage de frontière sans formalité.',
          en: 'Via Martigny and the Col de la Forclaz, Chamonix is 1 h 15 from Verbier. Ride up the Aiguille du Midi facing Mont Blanc, lunch in town, return through Vallorcine. Seamless border crossing.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1050',
      },
      {
        title: { fr: 'Sion, châteaux et caves valaisannes', en: 'Sion, castles and Valais wine cellars' },
        teaser: {
          fr: 'À 45 minutes, la capitale du Valais : les collines de Valère et Tourbillon, la vieille ville, puis dégustation de fendant et de petite arvine chez un encaveur de Sierre ou de Vétroz pendant que votre chauffeur conduit.',
          en: '45 minutes away, the capital of the Valais: the twin hills of Valère and Tourbillon, the old town, then a tasting of Fendant and Petite Arvine at a Sierre or Vétroz cellar while your chauffeur drives.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '590',
      },
      {
        title: { fr: 'Barrage de Mauvoisin et val de Bagnes', en: 'Mauvoisin Dam and the Val de Bagnes' },
        teaser: {
          fr: 'Au fond de la vallée, l’un des plus hauts barrages-voûtes du monde — 250 mètres — et les alpages de Bagnes, patrie du fromage à raclette. Route spectaculaire, arrêts photo, goûter dans une laiterie de village.',
          en: 'At the head of the valley, one of the world’s tallest arch dams — 250 metres — and the Bagnes pastures, home of raclette cheese. A spectacular road, photo stops, and a tasting at a village dairy.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '520',
      },
      {
        title: { fr: 'Soirée Verbier, du Farinet à votre chalet', en: 'Verbier evening, from the Farinet to your chalet' },
        teaser: {
          fr: 'Dîner au Chalet d’Adrien, à la Table d’Adrien ou au cœur de la place Centrale, après-ski au Farinet ou au Farm Club : votre chauffeur enchaîne les adresses et vous ramène au chalet, sans horaire imposé.',
          en: 'Dinner at Le Chalet d’Adrien, La Table d’Adrien or on the Place Centrale, après-ski at the Farinet or the Farm Club: your chauffeur links each address and brings you back to the chalet, on your schedule.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '450',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Verbier ?',
          en: 'How much does a transfer between Geneva Airport and Verbier cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Verbier est facturé à prix fixe, confirmé à la réservation, de jour comme de nuit. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont systématiquement inclus.',
          en: 'A private transfer between Geneva (GVA) and Verbier is charged at a fixed price, confirmed at booking, day or night. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay are always included.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer une prise en charge à l’aéroport de Sion pour un vol privé ?',
          en: 'Can you arrange a pick-up at Sion Airport for a private flight?',
        },
        a: {
          fr: 'Oui. L’aéroport de Sion (SIR) est à environ 45 minutes de Verbier et accueille l’aviation d’affaires. Votre chauffeur se positionne devant le terminal privé à l’heure exacte de votre atterrissage, coordonné avec votre équipage ou votre broker.',
          en: 'Yes. Sion Airport (SIR) is about 45 minutes from Verbier and serves business aviation. Your chauffeur positions at the private terminal at your exact landing time, coordinated with your crew or broker.',
        },
      },
      {
        q: {
          fr: 'La route de Verbier est-elle praticable en hiver avec de gros bagages ?',
          en: 'Is the road to Verbier manageable in winter with heavy luggage?',
        },
        a: {
          fr: 'Oui. La route du Châble à Verbier est déneigée en continu et nos véhicules circulent en pneus hiver, chaînes à bord. Nos vans emportent skis, snowboards et malles sans difficulté ; en cas de fermeture ponctuelle, votre chauffeur coordonne la correspondance avec la télécabine du Châble.',
          en: 'Yes. The road from Le Châble to Verbier is continuously cleared and our vehicles run on winter tyres with chains on board. Our vans carry skis, snowboards and trunks with ease; in the rare event of a closure, your chauffeur coordinates the connection with the Le Châble gondola.',
        },
      },
    ],
    nearby: ['crans-montana', 'gstaad', 'villars-sur-ollon'],
  },
  {
    slug: 'crans-montana',
    name: { fr: 'Crans-Montana', en: 'Crans-Montana' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) se situe à environ 180 km de Crans-Montana : comptez 2 h à 2 h 20 par la vallée du Rhône jusqu’à Sierre, puis la montée du haut plateau. Sion (SIR), à 30 minutes, sert l’aviation privée. Votre chauffeur vous attend avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Geneva Airport (GVA) lies around 180 km from Crans-Montana: allow 2 h to 2 h 20 along the Rhône valley to Sierre, then the climb to the high plateau. Sion (SIR), 30 minutes away, serves private aviation. Your chauffeur waits with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Sur son haut plateau exposé plein sud, face à la couronne des Alpes valaisannes, Crans-Montana réunit boutiques horlogères, palaces et l’un des parcours de golf les plus célèbres d’Europe. Votre **chauffeur privé à Crans-Montana** relie Genève, Sion et les stations voisines, enchaîne hôtels, remontées de Cry d’Er et tables du haut plateau — berline ou van premium, prix fixes, disponibilité de jour comme de nuit.',
        'Chaque été, l’**Omega European Masters** installe le grand golf mondial sur le parcours Severiano Ballesteros ; l’hiver, le funiculaire et les télécabines montent vers le glacier de la Plaine Morte, à 3 000 mètres. Autour, les vignobles en terrasses de Sierre, les bains thermaux d’Ovronnaz et le val d’Anniviers composent des excursions d’une demi-journée que votre chauffeur orchestre sans que vous touchiez un volant.',
      ],
      en: [
        'On its south-facing high plateau, looking across to the crown of the Valais Alps, Crans-Montana brings together watchmaking boutiques, palace hotels and one of Europe’s most celebrated golf courses. Your **private chauffeur in Crans-Montana** links Geneva, Sion and the neighbouring resorts, connecting hotels, the Cry d’Er lifts and the plateau’s restaurants — premium sedan or van, fixed prices, available day and night.',
        'Every summer the **Omega European Masters** brings world-class golf to the Severiano Ballesteros course; in winter, the funicular and gondolas climb towards the Plaine Morte glacier at 3,000 metres. All around, the terraced vineyards of Sierre, the Ovronnaz thermal baths and the Val d’Anniviers make ideal half-day excursions your chauffeur orchestrates while you never touch a steering wheel.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Golf sur le parcours Severiano Ballesteros', en: 'Golf on the Severiano Ballesteros course' },
        teaser: {
          fr: 'Dépose au club-house du Golf-Club Crans-sur-Sierre avec vos sacs, véhicule à disposition pendant votre parcours, puis déjeuner en terrasse face au Cervin et aux 4 000 valaisans. Green fees et départs réservés sur demande.',
          en: 'Drop-off at the Crans-sur-Sierre Golf Club clubhouse with your bags, vehicle on standby during your round, then a terrace lunch facing the Matterhorn and the Valais 4,000-metre peaks. Green fees and tee times arranged on request.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '850',
      },
      {
        title: { fr: 'Vignobles de Sierre et château de Villa', en: 'Sierre vineyards and Château de Villa' },
        teaser: {
          fr: 'À 20 minutes en contrebas, la capitale du soleil et ses coteaux : dégustation des cépages valaisans au château de Villa — cornalin, humagne, petite arvine — et promenade dans les vignes de Salgesch. Retour au plateau au coucher du soleil.',
          en: '20 minutes below the resort, the sunniest town in Switzerland and its slopes: a tasting of Valais grape varieties at Château de Villa — Cornalin, Humagne, Petite Arvine — and a walk through the Salgesch vines. Back on the plateau by sunset.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '520',
      },
      {
        title: { fr: 'Val d’Anniviers, Grimentz et Zinal', en: 'Val d’Anniviers, Grimentz and Zinal' },
        teaser: {
          fr: 'La route en balcon du val d’Anniviers dessert Grimentz et ses chalets noircis par les siècles, puis Zinal au pied de la couronne impériale. Raclette au feu de bois dans un restaurant d’alpage, arrêts photo à la demande.',
          en: 'The balcony road of the Val d’Anniviers leads to Grimentz and its centuries-blackened chalets, then Zinal at the foot of the Imperial Crown. Wood-fire raclette in a mountain restaurant, photo stops on request.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Glacier de la Plaine Morte', en: 'Plaine Morte glacier' },
        teaser: {
          fr: 'Dépose au funiculaire ou à la télécabine des Violettes, montée au glacier à 3 000 mètres : panorama du Mont-Blanc au Cervin, ski de printemps ou balade estivale sur la neige éternelle. Votre chauffeur vous attend à la descente.',
          en: 'Drop-off at the funicular or the Violettes gondola, then up to the glacier at 3,000 metres: a panorama from Mont Blanc to the Matterhorn, spring skiing or a summer walk on year-round snow. Your chauffeur waits for you at the bottom station.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '480',
      },
      {
        title: { fr: 'Soirée sur le haut plateau', en: 'Evening on the high plateau' },
        teaser: {
          fr: 'Dîner au LeMontBlanc, au Guarda Golf ou dans un restaurant d’altitude privatisé, puis verre au piano-bar et retour à votre chalet ou votre suite. Le véhicule reste à disposition, sans limite d’adresses.',
          en: 'Dinner at LeMontBlanc, the Guarda Golf or a privatised mountain restaurant, then a nightcap at the piano bar and a ride back to your chalet or suite. The vehicle stays on standby, with no limit on stops.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '450',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Crans-Montana ?',
          en: 'How much does a transfer between Geneva Airport and Crans-Montana cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Crans-Montana est facturé à prix fixe, communiqué à la réservation. Il inclut l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Geneva (GVA) and Crans-Montana is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous une mise à disposition pendant l’Omega European Masters ?',
          en: 'Do you offer hourly hire during the Omega European Masters?',
        },
        a: {
          fr: 'Oui, c’est notre période la plus demandée à Crans-Montana. Nous recommandons de réserver plusieurs semaines à l’avance : votre chauffeur gère les accès réglementés autour du golf, les navettes hôtel-parcours et les allers-retours vers Sion ou Genève pour vos invités.',
          en: 'Yes, it is our busiest week in Crans-Montana. We recommend booking several weeks ahead: your chauffeur handles the restricted access around the course, hotel-to-course shuttles and airport runs to Sion or Geneva for your guests.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous relier Crans-Montana aux autres stations du Valais ?',
          en: 'Can you connect Crans-Montana with other Valais resorts?',
        },
        a: {
          fr: 'Bien sûr. Verbier est à environ 1 h 15, Saas-Fee à 1 h 15 également, Zermatt (via Täsch) à 1 h 30. Chaque liaison inter-stations est devisée à prix fixe, avec van porte-skis si nécessaire et vignette autoroutière suisse incluse.',
          en: 'Of course. Verbier is about 1 h 15 away, Saas-Fee likewise 1 h 15, and Zermatt (via Täsch) 1 h 30. Every resort-to-resort journey is quoted at a fixed price, with a ski-rack van if needed and the Swiss motorway vignette included.',
        },
      },
    ],
    nearby: ['verbier', 'villars-sur-ollon', 'gstaad'],
  },
  {
    slug: 'villars-sur-ollon',
    name: { fr: 'Villars-sur-Ollon', en: 'Villars-sur-Ollon' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'alps-attractions',
    airport: 'Genève (GVA)',
    airportTransfer: {
      fr: 'L’aéroport de Genève (GVA) est à environ 120 km de Villars-sur-Ollon : comptez 1 h 20 à 1 h 40 par l’autoroute du Léman jusqu’à Aigle, puis la montée en lacets. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol pour ajuster la prise en charge.',
      en: 'Geneva Airport (GVA) is around 120 km from Villars-sur-Ollon: allow 1 h 20 to 1 h 40 on the Lake Geneva motorway to Aigle, then the hairpin climb. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight to adjust the pick-up time.',
    },
    intro: {
      fr: [
        'En balcon au-dessus de la vallée du Rhône, face aux Dents du Midi et au Mont-Blanc, Villars-sur-Ollon conjugue esprit de village et clientèle internationale — ses écoles privées, dont l’Aiglon College voisin de Chesières, en font l’une des adresses familiales les plus recherchées des Alpes vaudoises. Votre **chauffeur privé à Villars** gère transferts aéroport, trajets d’internat et navettes quotidiennes vers les remontées, avec ponctualité et discrétion.',
        'Le domaine relie Villars, Gryon et Les Diablerets, prolongé par le **Glacier 3000** et son Peak Walk ; le petit train à crémaillère monte de la gare au col de Bretaye, été comme hiver. En contrebas, le château d’Aigle et ses vignobles du Chablais, Montreux et la Riviera lémanique sont à moins d’une heure — des excursions que votre chauffeur compose à la carte, selon la saison et vos envies.',
      ],
      en: [
        'Set on a balcony above the Rhône valley, facing the Dents du Midi and Mont Blanc, Villars-sur-Ollon pairs village spirit with an international clientele — its private schools, including nearby Aiglon College in Chesières, make it one of the most sought-after family addresses in the Vaud Alps. Your **private chauffeur in Villars** handles airport transfers, boarding-school runs and daily shuttles to the lifts, with punctuality and discretion.',
        'The ski area links Villars, Gryon and Les Diablerets, extended by **Glacier 3000** and its Peak Walk; the little cogwheel train climbs from the station to the Col de Bretaye in summer and winter alike. Below, Aigle Castle and the Chablais vineyards, Montreux and the Lake Geneva Riviera are under an hour away — excursions your chauffeur composes à la carte, by season and by mood.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Glacier 3000 et Les Diablerets', en: 'Glacier 3000 and Les Diablerets' },
        teaser: {
          fr: 'Par le col de la Croix en été ou par Aigle en hiver, le téléphérique du Pillon monte au Glacier 3000 : Peak Walk suspendu entre deux sommets, luge d’altitude, déjeuner au restaurant Botta. Retour par le village des Diablerets.',
          en: 'Via the Col de la Croix in summer or through Aigle in winter, the Pillon cable car rises to Glacier 3000: the Peak Walk suspended between two summits, the alpine coaster, lunch at the Botta restaurant. Return through Les Diablerets village.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '490',
      },
      {
        title: { fr: 'Montreux, Chillon et les terrasses de Lavaux', en: 'Montreux, Chillon and the Lavaux terraces' },
        teaser: {
          fr: 'À 40 minutes en contrebas, le château de Chillon posé sur son rocher, les quais fleuris de Montreux et les vignobles de Lavaux classés UNESCO. Dégustation de chasselas face au Léman, retour en station avant le dîner.',
          en: '40 minutes below the resort, Chillon Castle on its lakeside rock, the flowered quays of Montreux and the UNESCO-listed Lavaux vineyards. A Chasselas tasting above Lake Geneva, back in resort before dinner.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Château d’Aigle et vignoble du Chablais', en: 'Aigle Castle and the Chablais vineyards' },
        teaser: {
          fr: 'Au pied de la montée de Villars, le château d’Aigle abrite le musée de la Vigne et du Vin au milieu des ceps. Visite, dégustation d’yvorne et d’aigle chez un encaveur, flânerie dans le bourg médiéval.',
          en: 'At the foot of the Villars road, Aigle Castle houses the Vine and Wine Museum amid the rows of vines. A visit, a tasting of Yvorne and Aigle wines at a local cellar, and a stroll through the medieval town.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Journée ski Villars-Gryon-Diablerets', en: 'Villars-Gryon-Diablerets ski day' },
        teaser: {
          fr: 'Dépose au Roc d’Orsay ou à la gare du Bretaye Express à l’ouverture, récupération à Gryon ou aux Diablerets selon votre itinéraire. Van porte-skis, chaussures au chaud, chocolat chaud au retour pour les enfants.',
          en: 'Drop-off at Roc d’Orsay or the Bretaye Express station for first lifts, pick-up in Gryon or Les Diablerets depending on your route. Ski-rack van, boots kept warm, hot chocolate on the return for the children.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Soirée fondue au col de Bretaye', en: 'Fondue evening at the Col de Bretaye' },
        teaser: {
          fr: 'Montée au coucher du soleil, fondue dans un restaurant d’altitude face aux Dents du Midi, redescente aux flambeaux ou en train selon la saison. Votre chauffeur vous attend à la gare de Villars pour le dernier kilomètre.',
          en: 'Up at sunset, fondue in a mountain restaurant facing the Dents du Midi, then a torchlit descent or the train down depending on the season. Your chauffeur waits at Villars station for the final stretch home.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Genève et Villars-sur-Ollon ?',
          en: 'How much does a transfer between Geneva Airport and Villars-sur-Ollon cost?',
        },
        a: {
          fr: 'Le transfert privé entre Genève (GVA) et Villars-sur-Ollon est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard sont inclus.',
          en: 'A private transfer between Geneva (GVA) and Villars-sur-Ollon is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les trajets réguliers pour les élèves des écoles internationales ?',
          en: 'Do you handle regular runs for international school pupils?',
        },
        a: {
          fr: 'Oui. Nous organisons des transferts récurrents entre Genève et les internats de Villars et Chesières — rentrées, exeats, fins de trimestre — avec chauffeur attitré, coordination directe avec l’école et prise en charge des mineurs selon un protocole convenu avec les parents.',
          en: 'Yes. We arrange recurring transfers between Geneva and the boarding schools of Villars and Chesières — term starts, exeats, end of term — with a dedicated chauffeur, direct coordination with the school and unaccompanied-minor handling agreed with the parents.',
        },
      },
      {
        q: {
          fr: 'La montée vers Villars est-elle sûre en plein hiver ?',
          en: 'Is the climb to Villars safe in midwinter?',
        },
        a: {
          fr: 'Oui. La route d’Aigle à Villars est large, régulièrement déneigée, et nos véhicules circulent en pneus hiver avec chaînes à bord. Vos bagages, skis et poussettes voyagent dans un van adapté ; le prix fixe reste identique quelles que soient les conditions.',
          en: 'Yes. The road from Aigle to Villars is wide and regularly cleared, and our vehicles run on winter tyres with chains on board. Luggage, skis and pushchairs travel in a suitable van; the fixed price stays the same whatever the conditions.',
        },
      },
    ],
    nearby: ['gstaad', 'crans-montana', 'verbier', 'evian-les-bains'],
  },
  {
    slug: 'st-moritz',
    name: { fr: 'Saint-Moritz', en: 'St. Moritz' },
    country: { fr: 'Suisse', en: 'Switzerland' },
    region: 'alps-attractions',
    airport: 'Zurich (ZRH)',
    airportTransfer: {
      fr: 'L’aéroport de Zurich (ZRH) se trouve à environ 200 km de Saint-Moritz : comptez 2 h 45 à 3 h de route par Coire puis le col du Julier. L’Engadin Airport de Samedan (SMV), à 10 minutes de la station, accueille l’aviation privée. Accueil avec panneau nominatif et suivi du vol en temps réel inclus.',
      en: 'Zurich Airport (ZRH) lies around 200 km from St. Moritz: allow 2 h 45 to 3 h by road via Chur and the Julier Pass. Engadin Airport in Samedan (SMV), 10 minutes from the resort, handles private aviation. Name-board welcome and real-time flight tracking included.',
    },
    intro: {
      fr: [
        'Berceau du tourisme d’hiver et deux fois ville olympique, Saint-Moritz règne sur la Haute-Engadine à 1 856 mètres : le Badrutt’s Palace, les boutiques de la via Serlas, le Corviglia et la lumière sèche de trois cents jours de soleil par an. Votre **chauffeur privé à Saint-Moritz** assure les transferts depuis Zurich ou l’Engadin Airport, les navettes entre palaces, remontées et restaurants d’altitude, à prix fixe et en toute discrétion.',
        'L’hiver, le **lac gelé** devient hippodrome pour le White Turf et terrain du Snow Polo World Cup, tandis que la Cresta Run perpétue le skeleton à l’ancienne depuis 1885. Le Glacier Express et le train rouge de la Bernina — ligne classée UNESCO — partent à deux pas ; Sils, Zuoz et les vallées de Fex et de Roseg complètent des excursions que votre chauffeur orchestre au fil des saisons.',
      ],
      en: [
        'Birthplace of winter tourism and twice an Olympic host, St. Moritz presides over the Upper Engadin at 1,856 metres: Badrutt’s Palace, the boutiques of Via Serlas, Corviglia and the dry light of three hundred days of sun a year. Your **private chauffeur in St. Moritz** covers transfers from Zurich or Engadin Airport and shuttles between palace hotels, lifts and mountain restaurants, at a fixed price and with complete discretion.',
        'In winter the **frozen lake** becomes a racecourse for White Turf and the arena of the Snow Polo World Cup, while the Cresta Run has kept old-school skeleton alive since 1885. The Glacier Express and the red Bernina train — a UNESCO-listed line — depart close by; Sils, Zuoz and the Fex and Roseg valleys round out excursions your chauffeur arranges through the seasons.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Train de la Bernina jusqu’à l’Alp Grüm', en: 'Bernina train to Alp Grüm' },
        teaser: {
          fr: 'Dépose à la gare de Saint-Moritz pour la ligne UNESCO de la Bernina : viaduc hélicoïdal de Brusio, glacier du Morteratsch, arrêt à l’Alp Grüm face au Palü. Votre chauffeur vous récupère à Pontresina au retour.',
          en: 'Drop-off at St. Moritz station for the UNESCO Bernina line: the Brusio spiral viaduct, the Morteratsch glacier, a stop at Alp Grüm facing Piz Palü. Your chauffeur collects you in Pontresina on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'White Turf et Snow Polo sur le lac gelé', en: 'White Turf and Snow Polo on the frozen lake' },
        teaser: {
          fr: 'Trois week-ends de février, les courses hippiques du White Turf et la Snow Polo World Cup investissent le lac. Dépose au plus près des tentes VIP, véhicule à disposition entre les épreuves, retour au palace sans attente.',
          en: 'Over three February weekends, the White Turf races and the Snow Polo World Cup take over the lake. Drop-off beside the VIP tents, vehicle on standby between events, straight back to your palace hotel with no waiting.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1200',
      },
      {
        title: { fr: 'Sils-Maria et la vallée de Fex', en: 'Sils-Maria and the Fex valley' },
        teaser: {
          fr: 'Le village de Nietzsche entre deux lacs, la presqu’île de Chastè chère à Anne Frank et aux poètes, puis la vallée de Fex en calèche — l’une des plus hautes vallées habitées d’Europe. Déjeuner au Waldhaus Sils.',
          en: 'Nietzsche’s village between two lakes, the Chastè peninsula beloved of poets, then the Fex valley by horse-drawn carriage — one of Europe’s highest inhabited valleys. Lunch at the Waldhaus Sils.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '650',
      },
      {
        title: { fr: 'Zuoz et les villages peints de l’Engadine', en: 'Zuoz and the painted villages of the Engadin' },
        teaser: {
          fr: 'Descente de la vallée jusqu’à Zuoz, le bourg le mieux préservé d’Engadine : façades aux sgraffites, place du village, galeries d’art. Arrêts à La Punt et S-chanf, retour par Celerina et l’église San Gian.',
          en: 'Down the valley to Zuoz, the best-preserved village in the Engadin: sgraffito façades, the village square, art galleries. Stops in La Punt and S-chanf, returning via Celerina and the San Gian church.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '590',
      },
      {
        title: { fr: 'Soirée engadinoise, du Kulm au Badrutt’s', en: 'Engadin evening, from the Kulm to Badrutt’s' },
        teaser: {
          fr: 'Apéritif au Kulm face à la patinoire olympique, dîner à la Chesa Veglia ou au restaurant IGNIV, dernier verre au King’s Social House : votre chauffeur enchaîne les adresses et vous raccompagne, sans horaire imposé.',
          en: 'An aperitif at the Kulm overlooking the Olympic ice rink, dinner at Chesa Veglia or IGNIV, a last drink at the King’s Social House: your chauffeur links each address and takes you home, on your own schedule.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '550',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Zurich et Saint-Moritz ?',
          en: 'How much does a transfer between Zurich Airport and St. Moritz cost?',
        },
        a: {
          fr: 'Le transfert privé entre Zurich (ZRH) et Saint-Moritz est facturé à prix fixe, confirmé à la réservation, quel que soit l’état des cols. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Zurich (ZRH) and St. Moritz is charged at a fixed price, confirmed at booking, whatever the pass conditions. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous m’accueillir à l’Engadin Airport de Samedan ?',
          en: 'Can you meet me at Engadin Airport in Samedan?',
        },
        a: {
          fr: 'Oui. L’Engadin Airport (SMV), plus haut aéroport d’Europe à 1 707 mètres, est à 10 minutes de Saint-Moritz et accueille jets privés et hélicoptères. Votre chauffeur se positionne devant le terminal à l’heure exacte de l’atterrissage, en coordination avec votre équipage.',
          en: 'Yes. Engadin Airport (SMV), Europe’s highest airport at 1,707 metres, is 10 minutes from St. Moritz and handles private jets and helicopters. Your chauffeur positions outside the terminal at your exact landing time, coordinated with your crew.',
        },
      },
      {
        q: {
          fr: 'Le col du Julier est-il praticable en hiver, et quid des bagages de ski ?',
          en: 'Is the Julier Pass passable in winter, and what about ski luggage?',
        },
        a: {
          fr: 'Le col du Julier reste ouvert toute l’année et déneigé en continu ; en cas de conditions extrêmes, votre chauffeur bascule sur le tunnel de la Vereina en train-navette depuis Klosters. Nos vans emportent skis, bob et malles sans supplément, pneus hiver et chaînes à bord.',
          en: 'The Julier Pass stays open year-round and is continuously cleared; in extreme conditions, your chauffeur switches to the Vereina car-shuttle tunnel from Klosters. Our vans carry skis, sledges and trunks at no extra charge, with winter tyres and chains on board.',
        },
      },
    ],
    nearby: [],
  },
  {
    slug: 'cap-ferrat',
    name: { fr: 'Saint-Jean-Cap-Ferrat', en: 'Saint-Jean-Cap-Ferrat' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Nice-Côte d’Azur (NCE)',
    airportTransfer: {
      fr: 'L’aéroport de Nice-Côte d’Azur (NCE) se trouve à environ 15 km de Saint-Jean-Cap-Ferrat : comptez 25 à 35 minutes par la basse corniche selon le trafic. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel pour ajuster la prise en charge.',
      en: 'Nice-Côte d’Azur Airport (NCE) lies about 15 km from Saint-Jean-Cap-Ferrat: allow 25 to 35 minutes along the lower corniche depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time to adjust the pick-up.',
    },
    intro: {
      fr: [
        'Presqu’île la plus convoitée de la Côte d’Azur, Saint-Jean-Cap-Ferrat aligne villas centenaires, jardins de la villa Ephrussi de Rothschild et sentier littoral face à la rade de Villefranche. Votre **chauffeur privé à Saint-Jean-Cap-Ferrat** dessert le Grand-Hôtel du Cap-Ferrat, la Voile d’Or et les résidences privées de la presqu’île, en berline Mercedes ou van. Transferts aéroport, mise à disposition à l’heure, accès aux portails de villa communiqués à l’avance : chaque trajet est préparé, à prix fixe.',
        'Depuis le Cap, tout est proche : Monaco à vingt minutes par la moyenne corniche, Nice et sa promenade, Èze suspendue au-dessus de la mer, Beaulieu et sa villa Kérylos à cinq minutes. En été, votre chauffeur gère les **accès plage et restaurants de bord de mer** — Paloma Beach, Club de la Voile — attente comprise ; hors saison, la presqu’île retrouve un calme que peu d’adresses de la Riviera peuvent offrir.',
      ],
      en: [
        'The most coveted peninsula on the French Riviera, Saint-Jean-Cap-Ferrat lines up century-old villas, the gardens of the Villa Ephrussi de Rothschild and a coastal path facing the bay of Villefranche. Your **private chauffeur in Saint-Jean-Cap-Ferrat** serves the Grand-Hôtel du Cap-Ferrat, La Voile d’Or and the peninsula’s private residences, in a Mercedes sedan or van. Airport transfers, hourly hire, villa gate codes confirmed in advance: every journey is prepared, at a fixed price.',
        'From the Cap, everything is close: Monaco twenty minutes away via the middle corniche, Nice and its promenade, Èze perched above the sea, Beaulieu and its Villa Kérylos five minutes along the shore. In summer your chauffeur handles **beach and waterfront restaurant access** — Paloma Beach, Club de la Voile — waiting time included; off season, the peninsula regains a calm few Riviera addresses can match.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Monaco en soirée', en: 'Monaco by night' },
        teaser: {
          fr: 'À vingt minutes du Cap, la Principauté au complet : dîner au Louis XV ou au Grill de l’Hôtel de Paris, Casino de Monte-Carlo, retour de nuit par la basse corniche. Le véhicule vous attend devant chaque adresse.',
          en: 'Twenty minutes from the Cap, the Principality in full: dinner at Le Louis XV or Le Grill at the Hôtel de Paris, the Casino de Monte-Carlo, a late-night return along the lower corniche. The vehicle waits outside each address.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '450',
      },
      {
        title: { fr: 'Les trois corniches', en: 'The three corniches' },
        teaser: {
          fr: 'Basse, moyenne et grande corniche entre Nice et Menton : Èze Village, le belvédère de la Turbie et son Trophée d’Auguste, Roquebrune-Cap-Martin. Arrêts photo au-dessus de la rade de Villefranche, itinéraire ajusté à votre rythme.',
          en: 'The lower, middle and upper corniches between Nice and Menton: Èze Village, the La Turbie belvedere and its Trophy of Augustus, Roquebrune-Cap-Martin. Photo stops above the bay of Villefranche, itinerary paced to suit you.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '520',
      },
      {
        title: { fr: 'Saint-Paul-de-Vence et l’arrière-pays', en: 'Saint-Paul-de-Vence and the hinterland' },
        teaser: {
          fr: 'Le village d’artistes et la Fondation Maeght, puis Vence et sa chapelle Matisse, Tourrettes-sur-Loup au retour. Déjeuner à la Colombe d’Or sur réservation, pendant que votre chauffeur gère stationnement et horaires.',
          en: 'The artists’ village and the Fondation Maeght, then Vence and its Matisse chapel, Tourrettes-sur-Loup on the way back. Lunch at La Colombe d’Or by reservation, while your chauffeur handles parking and timings.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '780',
      },
      {
        title: { fr: 'San Remo et la Riviera italienne', en: 'San Remo and the Italian Riviera' },
        teaser: {
          fr: 'Passage de frontière sans formalité vers la Ligurie : le marché de Vintimille le vendredi, San Remo et son casino Liberty, Dolceacqua et son pont médiéval peint par Monet. Retour par la grande corniche au couchant.',
          en: 'A seamless border crossing into Liguria: Ventimiglia’s Friday market, San Remo and its Liberty-style casino, Dolceacqua and the medieval bridge painted by Monet. Return along the upper corniche at sunset.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '850',
      },
      {
        title: { fr: 'Villa Ephrussi de Rothschild et tour de la presqu’île', en: 'Villa Ephrussi de Rothschild and peninsula tour' },
        teaser: {
          fr: 'La villa rose de la baronne Béatrice et ses neuf jardins à thème, puis le port de Saint-Jean, la pointe Saint-Hospice et une table de bord de mer. Une demi-journée entière consacrée à la presqu’île.',
          en: 'Baroness Béatrice’s rose-pink villa and its nine themed gardens, then the port of Saint-Jean, the Saint-Hospice point and a waterfront table. A full half day devoted to the peninsula itself.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nice et Saint-Jean-Cap-Ferrat ?',
          en: 'How much does a transfer between Nice Airport and Saint-Jean-Cap-Ferrat cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nice-Côte d’Azur (NCE) et Saint-Jean-Cap-Ferrat est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Nice-Côte d’Azur (NCE) and Saint-Jean-Cap-Ferrat is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous desservir directement les villas privées de la presqu’île ?',
          en: 'Can you serve the peninsula’s private villas directly?',
        },
        a: {
          fr: 'Oui. Communiquez-nous l’adresse exacte et les consignes d’accès — portail, gardien, code — à la réservation : votre chauffeur dépose et reprend directement devant la propriété, y compris sur les voies étroites de la pointe Saint-Hospice, avec un véhicule adapté.',
          en: 'Yes. Share the exact address and access instructions — gate, caretaker, entry code — at booking: your chauffeur drops off and collects directly at the property, including on the narrow lanes of the Saint-Hospice point, with a suitably sized vehicle.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts pendant le Grand Prix de Monaco ?',
          en: 'Do you operate transfers during the Monaco Grand Prix?',
        },
        a: {
          fr: 'Oui, mais la demande est extrême fin mai et certains axes de la Principauté ferment plusieurs heures par jour. Réservez au moins deux semaines à l’avance ; votre chauffeur connaît les itinéraires de contournement et les points de dépose autorisés au plus près du circuit.',
          en: 'Yes, but demand peaks in late May and several roads in the Principality close for hours each day. Book at least two weeks ahead; your chauffeur knows the bypass routes and the authorised drop-off points closest to the circuit.',
        },
      },
    ],
    nearby: ['beaulieu-sur-mer', 'villefranche-sur-mer', 'eze-village', 'cap-d-antibes'],
  },
  {
    slug: 'cap-d-antibes',
    name: { fr: 'Cap d’Antibes', en: 'Cap d’Antibes' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Nice-Côte d’Azur (NCE)',
    airportTransfer: {
      fr: 'L’aéroport de Nice-Côte d’Azur (NCE) est à environ 20 km du Cap d’Antibes : comptez 25 à 40 minutes par l’A8 ou le bord de mer selon le trafic. Votre chauffeur vous attend en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Nice-Côte d’Azur Airport (NCE) is about 20 km from Cap d’Antibes: allow 25 to 40 minutes via the A8 or the coast road depending on traffic. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Entre Antibes et Juan-les-Pins, le Cap d’Antibes déroule pinèdes, criques et propriétés cachées derrière leurs murs, avec le Grand-Hôtel du Cap-Eden-Roc en figure de proue depuis 1870. Votre **chauffeur privé au Cap d’Antibes** dessert l’Eden-Roc, l’Impérial Garoupe et les villas du boulevard John-Fitzgerald-Kennedy, en berline ou van premium. Transferts aéroport à prix fixe, mise à disposition à l’heure, discrétion absolue : le service s’aligne sur les standards du Cap.',
        'Le Cap est un point de départ idéal : le vieil Antibes et son musée Picasso à cinq minutes, Cannes et la Croisette à un quart d’heure, Saint-Paul-de-Vence et Grasse dans l’arrière-pays. En mai, votre chauffeur orchestre les navettes du **Festival de Cannes** — montée des marches, dîners, retours de nuit — ; l’été, il gère plages privées et restaurants de la Garoupe sans que vous pensiez ni au trafic ni au stationnement.',
      ],
      en: [
        'Between Antibes and Juan-les-Pins, Cap d’Antibes unfolds pine groves, coves and estates hidden behind their walls, with the Grand-Hôtel du Cap-Eden-Roc as its flagship since 1870. Your **private chauffeur at Cap d’Antibes** serves the Eden-Roc, the Impérial Garoupe and the villas of Boulevard John-Fitzgerald-Kennedy, in a premium sedan or van. Fixed-price airport transfers, hourly hire, absolute discretion: the service matches the Cap’s own standards.',
        'The Cap is an ideal base: old Antibes and its Picasso Museum five minutes away, Cannes and the Croisette in a quarter of an hour, Saint-Paul-de-Vence and Grasse in the hinterland. In May your chauffeur orchestrates **Cannes Film Festival shuttles** — red-carpet arrivals, dinners, late-night returns; in summer he handles private beaches and the restaurants of La Garoupe so you never think about traffic or parking.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Cannes et la Croisette', en: 'Cannes and the Croisette' },
        teaser: {
          fr: 'À quinze minutes du Cap : les boutiques de la Croisette, le Suquet et son marché Forville, déjeuner à la Palme d’Or ou sur une plage privée. Pendant le Festival, dépose au plus près du Palais, retour de nuit assuré.',
          en: 'Fifteen minutes from the Cap: the Croisette boutiques, Le Suquet and the Forville market, lunch at La Palme d’Or or on a private beach. During the Festival, drop-off as close as possible to the Palais, guaranteed late-night return.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '420',
      },
      {
        title: { fr: 'Grasse, capitale du parfum', en: 'Grasse, capital of perfume' },
        teaser: {
          fr: 'À 30 km dans l’arrière-pays, les maisons Fragonard, Molinard et Galimard, le Musée international de la Parfumerie et les champs de fleurs de Plascassier. Atelier de création de parfum sur réservation, retour par Mougins.',
          en: '30 km inland, the Fragonard, Molinard and Galimard houses, the International Perfume Museum and the flower fields of Plascassier. Perfume-creation workshop by reservation, return via Mougins.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Monaco en soirée', en: 'Monaco by night' },
        teaser: {
          fr: 'Une heure de route vers la Principauté : dîner à Monte-Carlo, casino, Rocher illuminé. Votre chauffeur reste à disposition toute la soirée et vous ramène au Cap sans contrainte d’horaire.',
          en: 'An hour’s drive to the Principality: dinner in Monte-Carlo, the casino, the illuminated Rock. Your chauffeur remains on standby all evening and brings you back to the Cap with no timetable to watch.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '590',
      },
      {
        title: { fr: 'Saint-Paul-de-Vence et la Fondation Maeght', en: 'Saint-Paul-de-Vence and the Fondation Maeght' },
        teaser: {
          fr: 'Le village fortifié des peintres, la collection Maeght — Miró, Giacometti, Chagall — et un déjeuner à la Colombe d’Or. Extension possible vers Vence et les gorges du Loup.',
          en: 'The fortified painters’ village, the Maeght collection — Miró, Giacometti, Chagall — and lunch at La Colombe d’Or. Optional extension to Vence and the Loup gorges.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '480',
      },
      {
        title: { fr: 'Tour du Cap et vieil Antibes', en: 'Cap tour and old Antibes' },
        teaser: {
          fr: 'Le sentier de Tire-Poil, la chapelle de la Garoupe et son phare, la villa Eilenroc et sa roseraie, puis les remparts du vieil Antibes, le musée Picasso et le marché provençal cours Masséna.',
          en: 'The Tire-Poil coastal path, the La Garoupe chapel and lighthouse, the Villa Eilenroc and its rose garden, then the ramparts of old Antibes, the Picasso Museum and the Provençal market on Cours Masséna.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nice et le Cap d’Antibes ?',
          en: 'How much does a transfer between Nice Airport and Cap d’Antibes cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nice-Côte d’Azur (NCE) et le Cap d’Antibes est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Nice-Côte d’Azur (NCE) and Cap d’Antibes is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les navettes vers Cannes pendant le Festival ?',
          en: 'Do you run shuttles to Cannes during the Film Festival?',
        },
        a: {
          fr: 'Oui. En mai, nous organisons des mises à disposition dédiées entre le Cap d’Antibes et le Palais des Festivals : dépose au plus près des points d’accès autorisés, attente pendant les projections et dîners, retour de nuit. Réservez plusieurs semaines à l’avance, la demande est très forte.',
          en: 'Yes. In May we arrange dedicated hire between Cap d’Antibes and the Palais des Festivals: drop-off as close as possible to the authorised access points, standby during screenings and dinners, late-night return. Book several weeks ahead — demand is very high.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous déposer directement au Grand-Hôtel du Cap-Eden-Roc ou dans une villa privée ?',
          en: 'Can you drop off directly at the Grand-Hôtel du Cap-Eden-Roc or at a private villa?',
        },
        a: {
          fr: 'Bien sûr. Nous déposons devant l’entrée de l’Eden-Roc, de l’Impérial Garoupe ou de toute villa du Cap, sur simple communication de l’adresse et des consignes d’accès à la réservation. Le chauffeur reste joignable pour avancer ou décaler la reprise.',
          en: 'Of course. We drop off at the entrance of the Eden-Roc, the Impérial Garoupe or any villa on the Cap — simply share the address and access instructions at booking. The chauffeur remains reachable to bring the pick-up forward or push it back.',
        },
      },
    ],
    nearby: ['juan-les-pins', 'mougins-village', 'valbonne', 'cap-ferrat'],
  },
  {
    slug: 'juan-les-pins',
    name: { fr: 'Juan-les-Pins', en: 'Juan-les-Pins' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Nice-Côte d’Azur (NCE)',
    airportTransfer: {
      fr: 'L’aéroport de Nice-Côte d’Azur (NCE) est à environ 22 km de Juan-les-Pins : comptez 25 à 40 minutes par l’A8 selon le trafic estival. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et adapte la prise en charge au suivi de votre vol en temps réel.',
      en: 'Nice-Côte d’Azur Airport (NCE) is about 22 km from Juan-les-Pins: allow 25 to 40 minutes via the A8 depending on summer traffic. Your chauffeur greets you in the arrivals hall with a name board and adjusts the pick-up to your flight, tracked in real time.',
    },
    intro: {
      fr: [
        'Station née dans les Années folles à l’ombre de sa pinède, Juan-les-Pins reste la scène balnéaire d’Antibes : plages de sable, casino, hôtels Belle Époque et le souvenir de Sidney Bechet. Votre **chauffeur privé à Juan-les-Pins** assure transferts aéroport, soirées sur la Croisette et navettes entre plages privées et restaurants, en berline ou van climatisé. Prix fixes confirmés à la réservation, chauffeur joignable à tout moment, dépose au plus près des zones piétonnes du bord de mer.',
        'Chaque mois de juillet, la pinède Gould accueille **Jazz à Juan**, le plus ancien festival de jazz d’Europe, où jouèrent Ella Fitzgerald et Miles Davis : votre chauffeur gère dépose avant concert, attente et retour de nuit. Le reste de l’année, le Cap d’Antibes est à cinq minutes, Cannes à quinze, et l’arrière-pays — Biot et sa verrerie, Vallauris et ses céramiques picassiennes — se découvre en demi-journée.',
      ],
      en: [
        'A resort born in the Roaring Twenties in the shade of its pine grove, Juan-les-Pins remains Antibes’ seaside stage: sandy beaches, a casino, Belle Époque hotels and the memory of Sidney Bechet. Your **private chauffeur in Juan-les-Pins** handles airport transfers, evenings on the Croisette and shuttles between private beaches and restaurants, in an air-conditioned sedan or van. Fixed prices confirmed at booking, a chauffeur reachable at any time, drop-off as close as possible to the seafront pedestrian zones.',
        'Every July the Gould pine grove hosts **Jazz à Juan**, Europe’s oldest jazz festival, where Ella Fitzgerald and Miles Davis once played: your chauffeur manages pre-concert drop-off, standby and the late-night return. The rest of the year, Cap d’Antibes is five minutes away, Cannes fifteen, and the hinterland — Biot and its glassworks, Vallauris and its Picasso ceramics — makes an easy half-day outing.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Soirée Jazz à Juan', en: 'Jazz à Juan evening' },
        teaser: {
          fr: 'En juillet, concert dans la pinède Gould face à la mer : dépose au plus près de l’entrée, dîner avant ou après sur le front de mer, véhicule en attente pendant tout le concert et retour de nuit sans contrainte.',
          en: 'In July, a concert in the Gould pine grove facing the sea: drop-off as close as possible to the entrance, dinner before or after on the seafront, vehicle on standby throughout the concert and an effortless late-night return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
      {
        title: { fr: 'Biot et Vallauris, villages d’artisans', en: 'Biot and Vallauris, artisan villages' },
        teaser: {
          fr: 'La verrerie de Biot et son verre bullé, le musée Fernand-Léger, puis Vallauris où Picasso réinventa la céramique — musée Magnelli et château. Une demi-journée d’ateliers et de galeries à dix minutes de Juan.',
          en: 'The Biot glassworks and its bubbled glass, the Fernand Léger museum, then Vallauris where Picasso reinvented ceramics — the Magnelli museum and the château. A half day of workshops and galleries ten minutes from Juan.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Cannes, shopping et plages', en: 'Cannes, shopping and beaches' },
        teaser: {
          fr: 'Quinze minutes de route : la rue d’Antibes et la Croisette pour les boutiques, déjeuner les pieds dans le sable, le Suquet au couchant. Votre chauffeur enchaîne les adresses et gère les paquets.',
          en: 'A fifteen-minute drive: Rue d’Antibes and the Croisette for the boutiques, lunch on the sand, Le Suquet at sunset. Your chauffeur links each address and looks after the shopping bags.',
        },
        duration: { fr: 'Journée ou demi-journée', en: 'Day or half day' },
        price: '430',
      },
      {
        title: { fr: 'Monaco et les corniches', en: 'Monaco and the corniches' },
        teaser: {
          fr: 'Journée vers la Principauté par la moyenne corniche : Èze Village en route, le Rocher et le Musée océanographique, Monte-Carlo. Retour en soirée par le bord de mer, arrêts photo au-dessus de Villefranche.',
          en: 'A day trip to the Principality via the middle corniche: Èze Village en route, the Rock and the Oceanographic Museum, Monte-Carlo. Evening return along the coast, photo stops above Villefranche.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '760',
      },
      {
        title: { fr: 'Antibes, remparts et musée Picasso', en: 'Antibes, ramparts and the Picasso Museum' },
        teaser: {
          fr: 'À cinq minutes : le château Grimaldi où Picasso peignit en 1946, le marché provençal cours Masséna, Port Vauban et ses yachts, la sortie par le bastion Saint-André. Retour par le tour du Cap.',
          en: 'Five minutes away: the Château Grimaldi where Picasso painted in 1946, the Provençal market on Cours Masséna, Port Vauban and its yachts, exiting via the Saint-André bastion. Return around the Cap.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nice et Juan-les-Pins ?',
          en: 'How much does a transfer between Nice Airport and Juan-les-Pins cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nice-Côte d’Azur (NCE) et Juan-les-Pins est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil avec panneau nominatif en salle d’arrivée, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Nice-Côte d’Azur (NCE) and Juan-les-Pins is charged at a fixed price, confirmed at booking. It includes a name-board meet-and-greet in the arrivals hall, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver longtemps à l’avance pendant le festival Jazz à Juan ?',
          en: 'How far ahead should I book during the Jazz à Juan festival?',
        },
        a: {
          fr: 'En juillet, pendant le festival, la circulation autour de la pinède Gould est restreinte et la demande très forte. Réservez au moins une semaine à l’avance ; votre chauffeur connaît les points de dépose autorisés au plus près de l’entrée des concerts et assure les retours de nuit.',
          en: 'In July, during the festival, traffic around the Gould pine grove is restricted and demand is very high. Book at least a week ahead; your chauffeur knows the authorised drop-off points closest to the concert entrance and covers the late-night returns.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous une mise à disposition à la journée pour rayonner depuis Juan-les-Pins ?',
          en: 'Do you offer full-day hire to explore from Juan-les-Pins?',
        },
        a: {
          fr: 'Oui. En mise à disposition à l’heure ou à la journée, votre chauffeur enchaîne plages, Cannes, Antibes ou l’arrière-pays selon vos envies, attend entre chaque étape et s’adapte aux changements de programme en temps réel. Le tarif est convenu à l’avance, kilomètres inclus.',
          en: 'Yes. With hourly or full-day hire, your chauffeur links beaches, Cannes, Antibes or the hinterland as you wish, waits between each stop and adapts to plan changes in real time. The rate is agreed in advance, mileage included.',
        },
      },
    ],
    nearby: ['cap-d-antibes', 'mougins-village', 'valbonne', 'cap-ferrat'],
  },
  {
    slug: 'villefranche-sur-mer',
    name: { fr: 'Villefranche-sur-Mer', en: 'Villefranche-sur-Mer' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Nice-Côte d’Azur (NCE)',
    airportTransfer: {
      fr: 'L’aéroport de Nice-Côte d’Azur (NCE) est à environ 10 km de Villefranche-sur-Mer : comptez 20 à 30 minutes par la basse corniche selon le trafic. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel pour ajuster l’heure de prise en charge.',
      en: 'Nice-Côte d’Azur Airport (NCE) is about 10 km from Villefranche-sur-Mer: allow 20 to 30 minutes along the lower corniche depending on traffic. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time to adjust the pick-up.',
    },
    intro: {
      fr: [
        'Sa rade profonde — l’une des plus belles de Méditerranée — a fait de Villefranche-sur-Mer une escale de yachts et de paquebots, entre citadelle Saint-Elme, chapelle Saint-Pierre décorée par Cocteau et façades ocre du quai Courbet. Votre **chauffeur privé à Villefranche-sur-Mer** assure transferts aéroport et port, prise en charge au débarcadère des navettes de croisière, mise à disposition à l’heure : chaque trajet est confirmé à prix fixe, avec un chauffeur qui connaît les ruelles étroites de la vieille ville.',
        'Villefranche est une base parfaite entre Nice et Monaco : la presqu’île de Cap-Ferrat ferme la rade au sud, Beaulieu et Èze sont à moins de dix minutes, la Principauté à vingt. En escale de croisière, une **excursion privée à la journée** couvre corniches, villages perchés et Monte-Carlo avec retour garanti à bord ; l’été, votre chauffeur gère plages de la darse et tables du port sans contrainte de stationnement.',
      ],
      en: [
        'Its deep harbour — one of the Mediterranean’s finest — has made Villefranche-sur-Mer a port of call for yachts and cruise ships, between the Saint-Elme citadel, the Saint-Pierre chapel decorated by Cocteau and the ochre façades of Quai Courbet. Your **private chauffeur in Villefranche-sur-Mer** covers airport and port transfers, pick-up at the cruise tender landing, hourly hire: every journey is confirmed at a fixed price, with a chauffeur who knows the old town’s narrow lanes.',
        'Villefranche is a perfect base between Nice and Monaco: the Cap-Ferrat peninsula closes the bay to the south, Beaulieu and Èze are under ten minutes away, the Principality twenty. On a cruise call, a **private full-day shore excursion** covers the corniches, perched villages and Monte-Carlo with a guaranteed return on board; in summer your chauffeur handles the darse beaches and harbour-front tables with no parking worries.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Escale croisière : Riviera en une journée', en: 'Cruise call: the Riviera in a day' },
        teaser: {
          fr: 'Prise en charge au débarcadère des navettes : Èze Village et sa vue, Monaco et le Rocher, Nice et la promenade des Anglais. Itinéraire calé sur les horaires du navire, retour à bord garanti avec marge de sécurité.',
          en: 'Pick-up at the tender landing: Èze Village and its view, Monaco and the Rock, Nice and the Promenade des Anglais. Itinerary set around the ship’s schedule, guaranteed return on board with a safety margin.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '820',
      },
      {
        title: { fr: 'Monaco en soirée', en: 'Monaco by night' },
        teaser: {
          fr: 'Vingt minutes par la basse corniche : dîner à Monte-Carlo, Casino, port Hercule illuminé. Votre chauffeur reste à disposition toute la soirée et vous redépose au pied de la vieille ville.',
          en: 'Twenty minutes along the lower corniche: dinner in Monte-Carlo, the Casino, the illuminated Port Hercule. Your chauffeur stays on standby all evening and drops you back at the foot of the old town.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '440',
      },
      {
        title: { fr: 'Cap-Ferrat et villa Ephrussi de Rothschild', en: 'Cap-Ferrat and the Villa Ephrussi de Rothschild' },
        teaser: {
          fr: 'La presqu’île voisine en demi-journée : les jardins de la villa Ephrussi, le port de Saint-Jean, la pointe Saint-Hospice, puis la villa Kérylos à Beaulieu. Déjeuner en bord de mer sur réservation.',
          en: 'The neighbouring peninsula in half a day: the Villa Ephrussi gardens, the port of Saint-Jean, the Saint-Hospice point, then the Villa Kérylos in Beaulieu. Waterfront lunch by reservation.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Les trois corniches jusqu’à Menton', en: 'The three corniches to Menton' },
        teaser: {
          fr: 'Grande corniche et Trophée d’Auguste à la Turbie, Roquebrune-Cap-Martin, Menton et le jardin Serre de la Madone. Retour par la moyenne corniche et Èze au couchant, arrêts photo au-dessus de la rade.',
          en: 'The upper corniche and the Trophy of Augustus at La Turbie, Roquebrune-Cap-Martin, Menton and the Serre de la Madone garden. Return via the middle corniche and Èze at sunset, photo stops above the bay.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '700',
      },
      {
        title: { fr: 'Nice, vieille ville et musées', en: 'Nice, old town and museums' },
        teaser: {
          fr: 'À dix minutes : le cours Saleya et son marché aux fleurs, la colline du Château, les musées Matisse et Chagall sur les hauteurs de Cimiez. Dépose au plus près des zones piétonnes, reprise à l’heure convenue.',
          en: 'Ten minutes away: Cours Saleya and its flower market, Castle Hill, the Matisse and Chagall museums on the Cimiez heights. Drop-off as close as possible to the pedestrian zones, pick-up at the agreed time.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nice et Villefranche-sur-Mer ?',
          en: 'How much does a transfer between Nice Airport and Villefranche-sur-Mer cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nice-Côte d’Azur (NCE) et Villefranche-sur-Mer est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Nice-Côte d’Azur (NCE) and Villefranche-sur-Mer is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Prenez-vous en charge les passagers de croisière au débarcadère ?',
          en: 'Do you pick up cruise passengers at the tender landing?',
        },
        a: {
          fr: 'Oui. Votre chauffeur vous attend au débarcadère des navettes, panneau nominatif en main, à l’heure convenue. L’excursion est calée sur les horaires du navire, avec une marge de sécurité pour le retour à bord ; nous suivons les éventuels changements d’escale annoncés par la compagnie.',
          en: 'Yes. Your chauffeur waits at the tender landing with a name board at the agreed time. The excursion is planned around the ship’s schedule, with a safety margin for the return on board; we monitor any itinerary changes announced by the cruise line.',
        },
      },
      {
        q: {
          fr: 'Peut-on accéder en voiture à la vieille ville de Villefranche ?',
          en: 'Can a car reach the old town of Villefranche?',
        },
        a: {
          fr: 'La vieille ville est en grande partie piétonne et pentue. Votre chauffeur vous dépose au plus près — quai Courbet, place Amélie-Pollonnais ou citadelle selon votre destination — et convient avec vous d’un point de reprise précis, joignable à tout moment pour l’avancer ou le décaler.',
          en: 'The old town is largely pedestrian and steep. Your chauffeur drops you as close as possible — Quai Courbet, Place Amélie-Pollonnais or the citadel depending on your destination — and agrees a precise pick-up point with you, remaining reachable to bring it forward or push it back.',
        },
      },
    ],
    nearby: ['beaulieu-sur-mer', 'cap-ferrat', 'eze-village', 'cap-d-antibes'],
  },
  {
    slug: 'beaulieu-sur-mer',
    name: { fr: 'Beaulieu-sur-Mer', en: 'Beaulieu-sur-Mer' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Nice-Côte d’Azur (NCE)',
    airportTransfer: {
      fr: 'L’aéroport de Nice-Côte d’Azur (NCE) est à environ 13 km de Beaulieu-sur-Mer : comptez 20 à 30 minutes par la basse corniche selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Nice-Côte d’Azur Airport (NCE) is about 13 km from Beaulieu-sur-Mer: allow 20 to 30 minutes along the lower corniche depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Abritée des vents entre Cap-Ferrat et la falaise d’Èze, Beaulieu-sur-Mer cultive une élégance Belle Époque : la Rotonde, le casino, le port de plaisance et la villa Kérylos, reconstitution d’une demeure grecque antique posée face à la baie des Fourmis. Votre **chauffeur privé à Beaulieu-sur-Mer** dessert La Réserve de Beaulieu, les résidences de la baie et les tables du port, en berline ou van premium. Transferts aéroport à prix fixe, mise à disposition à l’heure, ponctualité absolue.',
        'De Beaulieu, la Riviera entière se déploie : Saint-Jean-Cap-Ferrat et la villa Ephrussi à cinq minutes, Èze au-dessus, Monaco à un quart d’heure par la basse corniche. Votre chauffeur compose des **excursions sur mesure entre mer et villages perchés** — la Turbie, Peillon, Sainte-Agnès —, gère les soirées à Monte-Carlo avec retour de nuit et, l’été, les navettes vers plages et restaurants sans souci de stationnement.',
      ],
      en: [
        'Sheltered from the winds between Cap-Ferrat and the Èze cliff, Beaulieu-sur-Mer cultivates a Belle Époque elegance: the Rotonde, the casino, the marina and the Villa Kérylos, a recreation of an ancient Greek residence set facing the Baie des Fourmis. Your **private chauffeur in Beaulieu-sur-Mer** serves La Réserve de Beaulieu, the residences of the bay and the harbour-front tables, in a premium sedan or van. Fixed-price airport transfers, hourly hire, absolute punctuality.',
        'From Beaulieu the whole Riviera unfolds: Saint-Jean-Cap-Ferrat and the Villa Ephrussi five minutes away, Èze above, Monaco a quarter of an hour along the lower corniche. Your chauffeur composes **tailor-made excursions between the sea and the perched villages** — La Turbie, Peillon, Sainte-Agnès — handles Monte-Carlo evenings with a late-night return and, in summer, the shuttles to beaches and restaurants with no parking to think about.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Villa Kérylos et villa Ephrussi', en: 'Villa Kérylos and Villa Ephrussi' },
        teaser: {
          fr: 'Deux demeures d’exception à cinq minutes l’une de l’autre : la Grèce antique recréée par Théodore Reinach face à la baie des Fourmis, puis le palais rose de Béatrice de Rothschild et ses neuf jardins sur la presqu’île.',
          en: 'Two exceptional residences five minutes apart: ancient Greece recreated by Théodore Reinach facing the Baie des Fourmis, then Béatrice de Rothschild’s rose-pink palace and its nine gardens on the peninsula.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Monaco en soirée', en: 'Monaco by night' },
        teaser: {
          fr: 'Quinze minutes par la basse corniche : dîner à Monte-Carlo, casino, opéra ou concert au Sporting selon la saison. Le véhicule vous attend devant chaque adresse et vous redépose à Beaulieu sans contrainte d’horaire.',
          en: 'Fifteen minutes along the lower corniche: dinner in Monte-Carlo, the casino, the opera or a concert at the Sporting depending on the season. The vehicle waits outside each address and returns you to Beaulieu with no timetable to watch.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
      {
        title: { fr: 'Villages perchés de l’arrière-pays niçois', en: 'Perched villages of the Nice hinterland' },
        teaser: {
          fr: 'Peillon et son village accroché à la falaise, Peille, puis Sainte-Agnès — le village littoral le plus haut d’Europe — et la Turbie. Déjeuner en auberge de village, retour par la grande corniche.',
          en: 'Peillon and its cliff-hugging village, Peille, then Sainte-Agnès — Europe’s highest coastal village — and La Turbie. Lunch at a village inn, return via the upper corniche.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'San Remo et Dolceacqua', en: 'San Remo and Dolceacqua' },
        teaser: {
          fr: 'L’Italie à quarante minutes : le casino et la vieille ville de San Remo, puis Dolceacqua, son pont médiéval et le rossese de la vallée de la Nervia. Retour par Menton et sa vieille ville au couchant.',
          en: 'Italy forty minutes away: San Remo’s casino and old town, then Dolceacqua, its medieval bridge and the Rossese wines of the Nervia valley. Return via Menton and its old town at sunset.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '820',
      },
      {
        title: { fr: 'Èze et la Chèvre d’Or', en: 'Èze and La Chèvre d’Or' },
        teaser: {
          fr: 'Dix minutes de montée vers le village médiéval : jardin exotique au sommet, ruelles d’artisans, déjeuner ou dîner à la Chèvre d’Or face à la Méditerranée. Dépose à l’entrée du village, reprise à votre signal.',
          en: 'A ten-minute climb to the medieval village: the exotic garden at the summit, artisan lanes, lunch or dinner at La Chèvre d’Or overlooking the Mediterranean. Drop-off at the village entrance, pick-up on your signal.',
        },
        duration: { fr: 'Demi-journée ou soirée', en: 'Half day or evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nice et Beaulieu-sur-Mer ?',
          en: 'How much does a transfer between Nice Airport and Beaulieu-sur-Mer cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nice-Côte d’Azur (NCE) et Beaulieu-sur-Mer est facturé à prix fixe, confirmé à la réservation. Il inclut l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Nice-Côte d’Azur (NCE) and Beaulieu-sur-Mer is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous une mise à disposition à la semaine pour un séjour à Beaulieu ?',
          en: 'Do you offer weekly hire for a stay in Beaulieu?',
        },
        a: {
          fr: 'Oui. Pour un séjour à La Réserve ou en villa, nous proposons un chauffeur dédié à la demi-journée, à la journée ou à la semaine : même chauffeur, même véhicule, programme ajusté chaque matin. Le tarif est convenu à l’avance, kilomètres et attente inclus.',
          en: 'Yes. For a stay at La Réserve or in a villa, we offer a dedicated chauffeur by the half day, day or week: same chauffeur, same vehicle, programme adjusted each morning. The rate is agreed in advance, mileage and waiting time included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les trajets vers Monaco pendant le Grand Prix ?',
          en: 'Do you cover journeys to Monaco during the Grand Prix?',
        },
        a: {
          fr: 'Oui. Fin mai, plusieurs axes de la Principauté ferment aux heures de course : votre chauffeur adapte l’itinéraire par la moyenne ou la grande corniche et connaît les points de dépose autorisés au plus près des tribunes et des hôtels. Réservez au moins deux semaines à l’avance.',
          en: 'Yes. In late May several roads in the Principality close during race hours: your chauffeur adapts the route via the middle or upper corniche and knows the authorised drop-off points closest to the grandstands and hotels. Book at least two weeks ahead.',
        },
      },
    ],
    nearby: ['cap-ferrat', 'eze-village', 'villefranche-sur-mer', 'cap-d-antibes'],
  },
  {
    slug: 'eze-village',
    name: { fr: 'Èze', en: 'Èze Village' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Nice-Côte d’Azur (NCE)',
    airportTransfer: {
      fr: 'L’aéroport de Nice-Côte d’Azur (NCE) est à environ 12 km d’Èze Village : comptez 25 à 35 minutes par la moyenne corniche selon le trafic. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et ajuste la prise en charge au suivi de votre vol en temps réel.',
      en: 'Nice-Côte d’Azur Airport (NCE) is about 12 km from Èze Village: allow 25 to 35 minutes via the middle corniche depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and adjusts the pick-up to your flight, tracked in real time.',
    },
    intro: {
      fr: [
        'Perché à 429 mètres au-dessus de la Méditerranée, Èze est le nid d’aigle de la Riviera : ruelles médiévales, jardin exotique planté dans les ruines du château, ateliers d’artisans et la Chèvre d’Or accrochée à la falaise. Votre **chauffeur privé à Èze** vous dépose à l’entrée du village piéton — au plus près des hôtels et restaurants —, attend pendant votre visite ou votre dîner et gère les bagages jusqu’au portage organisé par les établissements.',
        'Sur la moyenne corniche, Èze est à mi-chemin exact entre Nice et Monaco : dix minutes vers la Principauté, quinze vers la promenade des Anglais, Beaulieu et Cap-Ferrat en contrebas. Votre chauffeur combine le village avec la **visite de la parfumerie Fragonard** à Èze-Bord-de-Mer ou une journée corniches et villages perchés ; au printemps et à l’automne, la lumière et le calme retrouvé font les plus belles visites.',
      ],
      en: [
        'Perched 429 metres above the Mediterranean, Èze is the Riviera’s eagle’s nest: medieval lanes, an exotic garden planted in the castle ruins, artisan workshops and La Chèvre d’Or clinging to the cliff. Your **private chauffeur in Èze** drops you at the entrance of the pedestrian village — as close as possible to the hotels and restaurants — waits during your visit or dinner and handles luggage up to the porterage arranged by the establishments.',
        'On the middle corniche, Èze sits exactly halfway between Nice and Monaco: ten minutes to the Principality, fifteen to the Promenade des Anglais, Beaulieu and Cap-Ferrat below. Your chauffeur pairs the village with a **visit to the Fragonard perfume factory** at Èze-Bord-de-Mer or a full day of corniches and perched villages; in spring and autumn, the light and the returning calm make for the finest visits.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Dîner à la Chèvre d’Or', en: 'Dinner at La Chèvre d’Or' },
        teaser: {
          fr: 'Dépose à l’entrée du village, accompagnement jusqu’à l’hôtel si besoin, dîner face à la Méditerranée dans l’une des salles les plus spectaculaires de la Riviera. Le véhicule attend et vous ramène à votre hôtel ou votre villa.',
          en: 'Drop-off at the village entrance, an escort to the hotel if needed, dinner overlooking the Mediterranean in one of the Riviera’s most spectacular dining rooms. The vehicle waits and returns you to your hotel or villa.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '400',
      },
      {
        title: { fr: 'Jardin exotique et parfumerie Fragonard', en: 'Exotic garden and Fragonard perfumery' },
        teaser: {
          fr: 'Le jardin de cactées au sommet du village et son panorama de Saint-Tropez à l’Italie, puis la visite guidée gratuite de l’usine Fragonard en contrebas. Une demi-journée entière consacrée à Èze.',
          en: 'The cactus garden at the top of the village with its panorama from Saint-Tropez to Italy, then the free guided tour of the Fragonard factory below. A full half day devoted to Èze.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Monaco et Monte-Carlo', en: 'Monaco and Monte-Carlo' },
        teaser: {
          fr: 'Dix minutes de descente vers la Principauté : le Rocher et le palais princier, le Musée océanographique, la place du Casino. Combinez avec Èze le matin pour une journée complète entre village médiéval et principauté.',
          en: 'A ten-minute descent to the Principality: the Rock and the Prince’s Palace, the Oceanographic Museum, the Place du Casino. Pair with Èze in the morning for a full day spanning medieval village and principality.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'La Turbie et la grande corniche', en: 'La Turbie and the upper corniche' },
        teaser: {
          fr: 'Au-dessus d’Èze, le Trophée d’Auguste domine Monaco de 480 mètres ; la grande corniche déroule ensuite ses belvédères jusqu’à Roquebrune-Cap-Martin et son château carolingien. Arrêts photo aux plus beaux points de vue.',
          en: 'Above Èze, the Trophy of Augustus towers 480 metres over Monaco; the upper corniche then unrolls its belvederes to Roquebrune-Cap-Martin and its Carolingian castle. Photo stops at the finest viewpoints.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Nice et la baie des Anges', en: 'Nice and the Baie des Anges' },
        teaser: {
          fr: 'Quinze minutes de moyenne corniche : le cours Saleya, la colline du Château, les musées Matisse et Chagall à Cimiez, un déjeuner sur la Promenade. Retour par Villefranche et sa rade.',
          en: 'Fifteen minutes down the middle corniche: Cours Saleya, Castle Hill, the Matisse and Chagall museums in Cimiez, lunch on the Promenade. Return via Villefranche and its bay.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nice et Èze Village ?',
          en: 'How much does a transfer between Nice Airport and Èze Village cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nice-Côte d’Azur (NCE) et Èze Village est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Nice-Côte d’Azur (NCE) and Èze Village is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Le village d’Èze est-il accessible en voiture ?',
          en: 'Is Èze Village accessible by car?',
        },
        a: {
          fr: 'Non, le village médiéval est entièrement piéton et en forte pente. Votre chauffeur vous dépose au plus près de l’entrée, sur la moyenne corniche ; la Chèvre d’Or et le Château Eza organisent le portage des bagages depuis ce point. La reprise se fait au même endroit, à l’heure de votre choix.',
          en: 'No, the medieval village is entirely pedestrian and steep. Your chauffeur drops you as close as possible to the entrance, on the middle corniche; La Chèvre d’Or and Château Eza arrange luggage porterage from that point. Pick-up is at the same spot, at the time of your choosing.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Èze avec Monaco ou Nice dans la même journée ?',
          en: 'Can Èze be combined with Monaco or Nice in the same day?',
        },
        a: {
          fr: 'Oui, c’est même l’itinéraire le plus demandé : Èze le matin avant l’affluence, déjeuner au village ou en bord de mer, puis Monaco ou Nice l’après-midi. En mise à disposition à la journée, l’ordre des étapes reste modifiable en cours de route.',
          en: 'Yes — it is in fact our most requested itinerary: Èze in the morning before the crowds, lunch in the village or by the sea, then Monaco or Nice in the afternoon. With full-day hire, the order of the stops can still be changed along the way.',
        },
      },
    ],
    nearby: ['beaulieu-sur-mer', 'cap-ferrat', 'villefranche-sur-mer'],
  },
  {
    slug: 'mougins-village',
    name: { fr: 'Mougins', en: 'Mougins' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Nice-Côte d’Azur (NCE)',
    airportTransfer: {
      fr: 'L’aéroport de Nice-Côte d’Azur (NCE) est à environ 25 km de Mougins : comptez 25 à 35 minutes par l’A8 selon le trafic. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel pour ajuster l’heure de prise en charge.',
      en: 'Nice-Côte d’Azur Airport (NCE) is about 25 km from Mougins: allow 25 to 35 minutes via the A8 depending on traffic. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time to adjust the pick-up.',
    },
    intro: {
      fr: [
        'Village en colimaçon posé sur sa colline au-dessus de Cannes, Mougins a séduit Picasso — qui y vécut ses douze dernières années — avant de devenir une capitale gastronomique : le Moulin de Mougins de Roger Vergé y inventa la cuisine du soleil, et les tables étoilées se succèdent autour de la place du Commandant-Lamy. Votre **chauffeur privé à Mougins** dessert hôtels, golfs et villas des collines, assure les transferts aéroport à prix fixe et les soirées gastronomiques avec attente comprise.',
        'À dix minutes de Cannes et de Grasse, Mougins rayonne sur tout l’ouest de la Côte d’Azur : la Croisette, les parfumeries, Valbonne et Sophia Antipolis, les golfs de Cannes-Mougins et de la Grande Bastide. Votre chauffeur compose des **journées entre gastronomie et villages perchés** — Auribeau, Cabris, Gourdon — et gère, en mai, les allers-retours du Festival de Cannes depuis le calme des collines.',
      ],
      en: [
        'A spiral-shaped village set on its hilltop above Cannes, Mougins won over Picasso — who spent his last twelve years here — before becoming a gastronomic capital: Roger Vergé’s Moulin de Mougins invented the cuisine du soleil, and starred tables cluster around Place du Commandant-Lamy. Your **private chauffeur in Mougins** serves the hotels, golf courses and hillside villas, provides fixed-price airport transfers and gourmet evenings with waiting time included.',
        'Ten minutes from Cannes and Grasse, Mougins commands the whole western Riviera: the Croisette, the perfume houses, Valbonne and Sophia Antipolis, the Cannes-Mougins and Grande Bastide golf courses. Your chauffeur composes **days that pair gastronomy with perched villages** — Auribeau, Cabris, Gourdon — and, in May, handles Cannes Film Festival runs from the calm of the hills.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Soirée gastronomique à Mougins', en: 'Mougins gourmet evening' },
        teaser: {
          fr: 'Dépose devant votre table — Paloma, le Candille ou le Moulin de Mougins — puis flânerie dans le village illuminé et le musée d’Art classique si l’horaire le permet. Le véhicule attend, retour sans contrainte.',
          en: 'Drop-off at your table — Paloma, Le Candille or the Moulin de Mougins — then a stroll through the illuminated village and the Museum of Classical Art if time allows. The vehicle waits; an effortless return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '330',
      },
      {
        title: { fr: 'Grasse et les parfumeries', en: 'Grasse and the perfume houses' },
        teaser: {
          fr: 'À dix minutes : Fragonard, Molinard, le Musée international de la Parfumerie et, en saison, les champs de roses et de jasmin. Atelier de création de votre propre parfum sur réservation.',
          en: 'Ten minutes away: Fragonard, Molinard, the International Perfume Museum and, in season, the rose and jasmine fields. A workshop to create your own perfume, by reservation.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Gourdon et les gorges du Loup', en: 'Gourdon and the Loup gorges' },
        teaser: {
          fr: 'Le village perché de Gourdon à 760 mètres, balcon sur tout le littoral, puis les gorges du Loup, Tourrettes-sur-Loup et ses violettes, Saint-Paul-de-Vence au retour. Déjeuner en auberge avec vue.',
          en: 'The perched village of Gourdon at 760 metres, a balcony over the whole coastline, then the Loup gorges, Tourrettes-sur-Loup and its violets, Saint-Paul-de-Vence on the way back. Lunch at an inn with a view.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
      {
        title: { fr: 'Cannes et les îles de Lérins', en: 'Cannes and the Lérins islands' },
        teaser: {
          fr: 'Dix minutes jusqu’à la Croisette, puis la navette pour Sainte-Marguerite — fort royal et prison du Masque de fer — ou Saint-Honorat et son abbaye viticole. Votre chauffeur vous reprend au débarcadère à votre retour.',
          en: 'Ten minutes to the Croisette, then the boat to Sainte-Marguerite — the royal fort and the Man in the Iron Mask’s cell — or Saint-Honorat and its wine-making abbey. Your chauffeur collects you at the landing stage on your return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Journée golf Cannes-Mougins', en: 'Cannes-Mougins golf day' },
        teaser: {
          fr: 'Transfert matinal vers le Golf Country Club de Cannes-Mougins — hôte historique de l’Open européen — ou la Grande Bastide, sacs pris en charge, véhicule à disposition au club-house et retour à l’heure convenue.',
          en: 'Morning transfer to the Cannes-Mougins Golf Country Club — historic host of the European Open — or La Grande Bastide, bags taken care of, vehicle on standby at the clubhouse and return at the agreed time.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '520',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nice et Mougins ?',
          en: 'How much does a transfer between Nice Airport and Mougins cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nice-Côte d’Azur (NCE) et Mougins est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Nice-Côte d’Azur (NCE) and Mougins is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Le vieux village de Mougins est-il accessible en voiture ?',
          en: 'Is the old village of Mougins accessible by car?',
        },
        a: {
          fr: 'Le cœur du village est piéton. Votre chauffeur vous dépose au plus près de la place du Commandant-Lamy ou de votre restaurant, attend pendant le dîner et convient d’un point de reprise précis. Les restaurants étoilés peuvent aussi indiquer leur dépose privée, que nous utilisons volontiers.',
          en: 'The heart of the village is pedestrian. Your chauffeur drops you as close as possible to Place du Commandant-Lamy or your restaurant, waits during dinner and agrees a precise pick-up point. The starred restaurants can also indicate their private drop-off, which we are happy to use.',
        },
      },
      {
        q: {
          fr: 'Est-ce pratique de loger à Mougins pendant le Festival de Cannes ?',
          en: 'Is Mougins a practical base during the Cannes Film Festival?',
        },
        a: {
          fr: 'Très pratique : à dix minutes de la Croisette, Mougins offre calme et disponibilité quand Cannes affiche complet. Nous organisons des mises à disposition dédiées pendant le Festival — allers-retours vers le Palais, attente entre les projections, retours de nuit. Réservez plusieurs semaines à l’avance.',
          en: 'Very practical: ten minutes from the Croisette, Mougins offers calm and availability when Cannes is fully booked. We arrange dedicated hire during the Festival — runs to the Palais, standby between screenings, late-night returns. Book several weeks ahead.',
        },
      },
    ],
    nearby: ['valbonne', 'cap-d-antibes', 'juan-les-pins'],
  },
  {
    slug: 'valbonne',
    name: { fr: 'Valbonne', en: 'Valbonne' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Nice-Côte d’Azur (NCE)',
    airportTransfer: {
      fr: 'L’aéroport de Nice-Côte d’Azur (NCE) est à environ 20 km de Valbonne : comptez 25 à 35 minutes par l’A8 et la pénétrante de Sophia Antipolis selon le trafic. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Nice-Côte d’Azur Airport (NCE) is about 20 km from Valbonne: allow 25 to 35 minutes via the A8 and the Sophia Antipolis expressway depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Village provençal dessiné au cordeau au XVIᵉ siècle — un damier de ruelles rare en Provence —, Valbonne aligne façades de pierre, place des Arcades et terrasses ombragées, à deux pas des pinèdes de la technopole Sophia Antipolis. Votre **chauffeur privé à Valbonne** relie l’aéroport de Nice, les entreprises et centres de recherche de Sophia, les golfs d’Opio-Valbonne et de la Grande Bastide et les villas des collines, en berline ou van premium, à prix fixe convenu à l’avance.',
        'Aux voyageurs d’affaires de la technopole, Valbonne offre un cadre de village entre deux réunions ; aux visiteurs, un point de départ vers **Grasse, Gourdon et les gorges du Loup**, Cannes à vingt minutes, Antibes et ses plages à un quart d’heure. Le vendredi matin, le marché provençal anime la vieille ville ; l’été, votre chauffeur enchaîne dîners de village et soirées sur la côte sans que le stationnement soit jamais votre affaire.',
      ],
      en: [
        'A Provençal village laid out on a grid in the 16th century — a chessboard of lanes rare in Provence — Valbonne lines up stone façades, the Place des Arcades and shaded terraces, a stone’s throw from the pine woods of the Sophia Antipolis technology park. Your **private chauffeur in Valbonne** links Nice Airport, the companies and research centres of Sophia, the Opio-Valbonne and Grande Bastide golf courses and the hillside villas, in a premium sedan or van, at a fixed price agreed in advance.',
        'For the technology park’s business travellers, Valbonne offers a village setting between meetings; for visitors, a base towards **Grasse, Gourdon and the Loup gorges**, with Cannes twenty minutes away and Antibes and its beaches a quarter of an hour. On Friday mornings the Provençal market fills the old town; in summer your chauffeur strings together village dinners and coastal evenings, with parking never your concern.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Journée d’affaires à Sophia Antipolis', en: 'Sophia Antipolis business day' },
        teaser: {
          fr: 'Mise à disposition dédiée entre les sites de la technopole — Garbejaire, les Bouillides, Saint-Philippe —, l’aéroport et vos hôtels. Le chauffeur attend entre chaque rendez-vous et s’adapte aux changements d’agenda en temps réel.',
          en: 'Dedicated hire between the technology park’s districts — Garbejaire, Les Bouillides, Saint-Philippe — the airport and your hotels. The chauffeur waits between each meeting and adapts to schedule changes in real time.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Grasse et le pays des parfums', en: 'Grasse and perfume country' },
        teaser: {
          fr: 'À vingt minutes : les maisons Fragonard et Molinard, le Musée international de la Parfumerie, puis Cabris et son belvédère sur l’Estérel. Atelier de création de parfum sur réservation, retour par Opio et ses oliveraies.',
          en: 'Twenty minutes away: the Fragonard and Molinard houses, the International Perfume Museum, then Cabris and its belvedere over the Estérel. Perfume-creation workshop by reservation, return via Opio and its olive groves.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '400',
      },
      {
        title: { fr: 'Gourdon, Tourrettes et les gorges du Loup', en: 'Gourdon, Tourrettes and the Loup gorges' },
        teaser: {
          fr: 'La route des gorges jusqu’à la cascade de Courmes, Gourdon en nid d’aigle à 760 mètres, Tourrettes-sur-Loup et ses ateliers. Déjeuner en auberge de village, retour par le plateau de Caussols si le ciel est dégagé.',
          en: 'The gorge road to the Courmes waterfall, Gourdon perched at 760 metres, Tourrettes-sur-Loup and its workshops. Lunch at a village inn, return across the Caussols plateau if the sky is clear.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Golf à Opio-Valbonne', en: 'Golf at Opio-Valbonne' },
        teaser: {
          fr: 'Transfert matinal vers le golf d’Opio-Valbonne, tracé dans un domaine de 220 hectares de chênes et de pins, ou la Grande Bastide voisine. Sacs pris en charge, véhicule à disposition au club-house, retour à l’heure convenue.',
          en: 'Morning transfer to the Opio-Valbonne golf course, laid out across a 220-hectare estate of oaks and pines, or the neighbouring Grande Bastide. Bags taken care of, vehicle on standby at the clubhouse, return at the agreed time.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '480',
      },
      {
        title: { fr: 'Soirée à Cannes ou Antibes', en: 'Evening in Cannes or Antibes' },
        teaser: {
          fr: 'Vingt minutes vers la côte : dîner sur la Croisette ou dans le vieil Antibes, casino ou concert selon la saison, retour de nuit vers les collines de Valbonne. Le véhicule vous attend devant chaque adresse.',
          en: 'Twenty minutes to the coast: dinner on the Croisette or in old Antibes, a casino or a concert depending on the season, a late-night return to the Valbonne hills. The vehicle waits outside each address.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nice et Valbonne ?',
          en: 'How much does a transfer between Nice Airport and Valbonne cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nice-Côte d’Azur (NCE) et Valbonne ou Sophia Antipolis est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Nice-Côte d’Azur (NCE) and Valbonne or Sophia Antipolis is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des formules régulières pour les entreprises de Sophia Antipolis ?',
          en: 'Do you offer regular arrangements for Sophia Antipolis companies?',
        },
        a: {
          fr: 'Oui. Nous travaillons avec des comptes entreprise : transferts aéroport récurrents pour vos visiteurs, mises à disposition pour les délégations, facturation mensuelle centralisée. Les réservations se font par e-mail ou téléphone avec confirmation immédiate du chauffeur et du véhicule.',
          en: 'Yes. We work with corporate accounts: recurring airport transfers for your visitors, dedicated hire for delegations, centralised monthly invoicing. Bookings are made by e-mail or phone with immediate confirmation of chauffeur and vehicle.',
        },
      },
      {
        q: {
          fr: 'Peut-on accéder en voiture au vieux village de Valbonne le jour du marché ?',
          en: 'Can a car reach the old village of Valbonne on market day?',
        },
        a: {
          fr: 'Le vendredi matin, le marché occupe la vieille ville et plusieurs rues ferment à la circulation. Votre chauffeur vous dépose au plus près de la place des Arcades, patiente le temps de vos achats et reprend vos paniers au point convenu — un service très apprécié des résidents des collines.',
          en: 'On Friday mornings the market fills the old town and several streets close to traffic. Your chauffeur drops you as close as possible to the Place des Arcades, waits while you shop and collects your baskets at the agreed point — a service much appreciated by hillside residents.',
        },
      },
    ],
    nearby: ['mougins-village', 'cap-d-antibes', 'juan-les-pins'],
  },
  {
    slug: 'porto-cervo-sardaigne',
    name: { fr: 'Porto Cervo', en: 'Porto Cervo' },
    country: { fr: 'Italie', en: 'Italy' },
    region: 'alps-attractions',
    airport: 'Olbia Costa Smeralda (OLB)',
    airportTransfer: {
      fr: 'L’aéroport d’Olbia Costa Smeralda (OLB) est à environ 30 km de Porto Cervo : comptez 30 à 40 minutes par la route côtière de la Costa Smeralda. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel pour ajuster la prise en charge.',
      en: 'Olbia Costa Smeralda Airport (OLB) is about 30 km from Porto Cervo: allow 30 to 40 minutes along the Costa Smeralda coast road. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time to adjust the pick-up.',
    },
    intro: {
      fr: [
        'Créé dans les années 1960 par l’Aga Khan au cœur de la Costa Smeralda, Porto Cervo est le port d’attache de la Méditerranée estivale : marina parmi les plus exclusives d’Europe, Piazzetta et ses boutiques, hôtels Cala di Volpe et Cervo, régates du Yacht Club Costa Smeralda. Votre **chauffeur privé à Porto Cervo** assure transferts depuis Olbia, navettes entre villas, plages et marina, et soirées au village, en berline ou van premium, à prix fixe.',
        'Autour du village, la Costa Smeralda égrène ses criques de granit rose et d’eau turquoise — Liscia Ruja, le Grande Pevero, Romazzino — et l’arrière-pays de la Gallura ses vignes de vermentino. Votre chauffeur compose des **journées entre plages, vignobles et villages sardes** — San Pantaleo et son marché du jeudi, Baja Sardinia, Porto Rotondo — de juin à septembre, quand la saison bat son plein, comme aux intersaisons plus douces.',
      ],
      en: [
        'Created in the 1960s by the Aga Khan at the heart of the Costa Smeralda, Porto Cervo is the summer Mediterranean’s home port: one of Europe’s most exclusive marinas, the Piazzetta and its boutiques, the Cala di Volpe and Cervo hotels, the regattas of the Yacht Club Costa Smeralda. Your **private chauffeur in Porto Cervo** provides transfers from Olbia, shuttles between villas, beaches and the marina, and evenings in the village, in a premium sedan or van, at a fixed price.',
        'Around the village, the Costa Smeralda strings together its coves of pink granite and turquoise water — Liscia Ruja, Grande Pevero, Romazzino — while the Gallura hinterland offers its Vermentino vineyards. Your chauffeur composes **days spanning beaches, vineyards and Sardinian villages** — San Pantaleo and its Thursday market, Baja Sardinia, Porto Rotondo — from June to September at the height of the season, and in the gentler shoulder months alike.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Plages de la Costa Smeralda', en: 'Beaches of the Costa Smeralda' },
        teaser: {
          fr: 'Liscia Ruja, le Grande Pevero, Capriccioli et Romazzino : votre chauffeur vous dépose au plus près du sable, transporte les affaires de plage et vous reprend à l’heure convenue — ou enchaîne deux criques dans la journée.',
          en: 'Liscia Ruja, Grande Pevero, Capriccioli and Romazzino: your chauffeur drops you as close as possible to the sand, carries the beach gear and collects you at the agreed time — or links two coves in a single day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '560',
      },
      {
        title: { fr: 'San Pantaleo et les vignes de Gallura', en: 'San Pantaleo and the Gallura vineyards' },
        teaser: {
          fr: 'Le village d’artistes au pied de ses pitons de granit — marché le jeudi matin —, puis dégustation de vermentino di Gallura DOCG dans un domaine d’Arzachena. Retour par la baie de Cala di Volpe.',
          en: 'The artists’ village at the foot of its granite peaks — market on Thursday mornings — then a tasting of Vermentino di Gallura DOCG at an Arzachena estate. Return via the Cala di Volpe bay.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Soirée à la Piazzetta et au Billionaire', en: 'Evening at the Piazzetta and the Billionaire' },
        teaser: {
          fr: 'Dîner sur le vieux port ou au Cala di Volpe, flânerie dans les boutiques de la Piazzetta, puis la nuit de Porto Cervo — Billionaire, Sottovento. Le véhicule vous attend et vous ramène à votre villa à l’heure que vous voulez.',
          en: 'Dinner on the old port or at the Cala di Volpe, a stroll through the Piazzetta boutiques, then Porto Cervo’s nightlife — Billionaire, Sottovento. The vehicle waits and returns you to your villa whenever you choose.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '450',
      },
      {
        title: { fr: 'Palau et l’archipel de la Maddalena', en: 'Palau and the Maddalena archipelago' },
        teaser: {
          fr: 'Transfert matinal vers Palau, embarquement pour la Maddalena et Caprera — maison de Garibaldi, plages de l’archipel classé parc national. Votre chauffeur vous reprend au débarcadère et vous ramène par la côte.',
          en: 'Morning transfer to Palau, boarding for La Maddalena and Caprera — Garibaldi’s house, the beaches of the national-park archipelago. Your chauffeur meets you back at the quay and returns along the coast.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Régates et Yacht Club Costa Smeralda', en: 'Regattas and the Yacht Club Costa Smeralda' },
        teaser: {
          fr: 'Pendant la Maxi Yacht Rolex Cup en septembre, navettes dédiées entre villas, marina et soirées du Yacht Club : dépose au plus près des pontons, attente pendant les courses et les remises de prix, retours de nuit.',
          en: 'During the Maxi Yacht Rolex Cup in September, dedicated shuttles between villas, the marina and the Yacht Club evenings: drop-off as close as possible to the pontoons, standby during races and prize-givings, late-night returns.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '590',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport d’Olbia et Porto Cervo ?',
          en: 'How much does a transfer between Olbia Airport and Porto Cervo cost?',
        },
        a: {
          fr: 'Le transfert privé entre Olbia Costa Smeralda (OLB) et Porto Cervo est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Olbia Costa Smeralda (OLB) and Porto Cervo is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous un chauffeur dédié à la semaine pendant la saison d’été ?',
          en: 'Do you offer a dedicated weekly chauffeur during the summer season?',
        },
        a: {
          fr: 'Oui, c’est la formule la plus demandée à Porto Cervo de juin à septembre : même chauffeur et même véhicule pour toute la durée du séjour, navettes plages, marina, restaurants et aéroport comprises. Réservez tôt — les disponibilités d’août partent plusieurs mois à l’avance.',
          en: 'Yes — it is our most requested arrangement in Porto Cervo from June to September: the same chauffeur and vehicle for your whole stay, covering beach, marina, restaurant and airport runs. Book early — August availability sells out months in advance.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous desservir les villas privées de la Costa Smeralda ?',
          en: 'Can you serve the private villas of the Costa Smeralda?',
        },
        a: {
          fr: 'Oui. Communiquez-nous l’adresse et les consignes d’accès — portail, gardiennage, code — à la réservation : votre chauffeur dépose et reprend directement dans la propriété, de Pantogia à Romazzino et Cala di Volpe, avec un véhicule adapté aux voies privées de la côte.',
          en: 'Yes. Share the address and access instructions — gate, security, entry code — at booking: your chauffeur drops off and collects directly at the property, from Pantogia to Romazzino and Cala di Volpe, with a vehicle suited to the coast’s private roads.',
        },
      },
    ],
    nearby: ['cap-ferrat', 'cap-d-antibes', 'mykonos', 'santorini'],
  },
  {
    slug: 'mykonos',
    name: { fr: 'Mykonos', en: 'Mykonos' },
    country: { fr: 'Grèce', en: 'Greece' },
    region: 'alps-attractions',
    airport: 'Mykonos (JMK)',
    airportTransfer: {
      fr: 'L’aéroport de Mykonos (JMK) se trouve à 4 km au sud-est de Chora : comptez 10 à 15 minutes pour rejoindre le centre, 20 à 30 minutes pour les plages de Psarou ou d’Elia. Votre chauffeur vous accueille à la sortie du terminal, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Mykonos Airport (JMK) lies 4 km south-east of Chora: allow 10 to 15 minutes to reach the town centre, and 20 to 30 minutes for the beaches of Psarou or Elia. Your chauffeur greets you at the terminal exit with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Île la plus courue des Cyclades, Mykonos aligne les ruelles blanchies de Chora, les moulins de Kato Mili et les façades colorées de la Petite Venise au ras de l’eau. Votre **chauffeur privé à Mykonos** relie l’aéroport, le nouveau port de Tourlos, les villas des hauteurs et les beach clubs du sud — Nammos à Psarou, Scorpios à Paraga. Transferts à prix fixe, mise à disposition à l’heure, van de grande capacité pour les groupes : chaque trajet est planifié malgré les routes étroites de l’île.',
        'Au-delà de Chora, l’île se découvre village par village : **Ano Mera et le monastère de la Panagia Tourliani**, les plages sauvages du nord, le point de vue du phare d’Armenistis au couchant. De juillet à août, la circulation autour du vieux port impose une logistique précise que votre chauffeur maîtrise — dépose au plus près des zones piétonnes, attente pendant le dîner, retour de nuit. Hors saison, l’île retrouve son calme et se prête aux journées complètes en mise à disposition.',
      ],
      en: [
        'The most sought-after island in the Cyclades, Mykonos lines up the whitewashed lanes of Chora, the Kato Mili windmills and the colourful waterfront façades of Little Venice. Your **private chauffeur in Mykonos** connects the airport, the new port of Tourlos, hillside villas and the beach clubs of the south coast — Nammos at Psarou, Scorpios at Paraga. Fixed-price transfers, hourly hire, a full-size van for groups: every journey is planned in advance despite the island’s narrow roads.',
        'Beyond Chora, the island reveals itself village by village: **Ano Mera and the Panagia Tourliani monastery**, the wild beaches of the north shore, the Armenistis lighthouse viewpoint at sunset. In July and August, traffic around the old port calls for precise logistics your chauffeur has mastered — drop-off as close as possible to the pedestrian zones, standby during dinner, late-night return. Out of season the island regains its calm and lends itself to full-day chauffeured tours.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Tour de l’île, de Chora à Ano Mera', en: 'Island tour, from Chora to Ano Mera' },
        teaser: {
          fr: 'Les moulins de Kato Mili, la Petite Venise et l’église de Paraportiani, puis Ano Mera et le monastère de la Panagia Tourliani. Arrêts photo sur les hauteurs, halte dans une taverne du village loin de la foule du port.',
          en: 'The Kato Mili windmills, Little Venice and the Paraportiani church, then Ano Mera and the Panagia Tourliani monastery. Photo stops on the heights, and a pause at a village taverna far from the harbour crowds.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Journée beach clubs de la côte sud', en: 'South coast beach club day' },
        teaser: {
          fr: 'Psarou, Paraga, Super Paradise et Elia : votre chauffeur enchaîne les criques de la côte sud, dépose au plus près du sable et attend pendant le déjeuner. Transats et tables réservés à l’avance sur demande.',
          en: 'Psarou, Paraga, Super Paradise and Elia: your chauffeur links the coves of the south coast, drops you as close to the sand as possible and waits through lunch. Sunbeds and tables reserved in advance on request.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '780',
      },
      {
        title: { fr: 'Délos au départ du vieux port', en: 'Delos from the old port' },
        teaser: {
          fr: 'Transfert matinal jusqu’à l’embarcadère pour l’îlot sacré de Délos — sanctuaire d’Apollon, terrasse des Lions, mosaïques hellénistiques —, à 30 minutes de bateau. Votre chauffeur vous récupère au retour de la traversée.',
          en: 'Morning transfer to the jetty for the sacred islet of Delos — the sanctuary of Apollo, the Terrace of the Lions, Hellenistic mosaics — a 30-minute boat ride away. Your chauffeur collects you when the crossing returns.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Coucher de soleil au phare d’Armenistis', en: 'Sunset at the Armenistis lighthouse' },
        teaser: {
          fr: 'Départ en fin d’après-midi vers la pointe nord-ouest de l’île : le phare d’Armenistis face à Tinos, la baie de Panormos, puis retour par les hauteurs de Chora pour l’heure dorée sur la Petite Venise.',
          en: 'Late-afternoon departure for the island’s north-western tip: the Armenistis lighthouse facing Tinos, Panormos bay, then a return over the heights of Chora for golden hour above Little Venice.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '360',
      },
      {
        title: { fr: 'Soirée dîner et clubs de Chora', en: 'Chora dinner and club evening' },
        teaser: {
          fr: 'Dépose devant votre table — Interni, Ling Ling ou la taverne de votre choix —, puis le véhicule reste à disposition pour la suite de la nuit, de la Petite Venise aux clubs de Paradise. Retour à votre villa sans contrainte.',
          en: 'Drop-off at your table — Interni, Ling Ling or the taverna of your choice — then the vehicle stays on standby for the rest of the night, from Little Venice to the Paradise clubs. Effortless return to your villa.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '520',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Mykonos et Chora ou les villas de l’île ?',
          en: 'How much does a transfer between Mykonos Airport and Chora or the island’s villas cost?',
        },
        a: {
          fr: 'Le transfert privé depuis Mykonos (JMK) vers Chora, Tourlos ou votre villa est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil à la sortie du terminal avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer from Mykonos (JMK) to Chora, Tourlos or your villa is charged at a fixed price, confirmed at booking. It includes a meet-and-greet at the terminal exit with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver longtemps à l’avance en juillet et en août à Mykonos ?',
          en: 'How far in advance should I book in July and August in Mykonos?',
        },
        a: {
          fr: 'En haute saison, la flotte de véhicules de l’île est très sollicitée et la circulation autour de Chora est restreinte. Nous recommandons de réserver au moins 72 heures à l’avance, davantage pour les vans et les mises à disposition à la journée.',
          en: 'In high season the island’s vehicle fleet is in heavy demand and traffic around Chora is restricted. We recommend booking at least 72 hours ahead — earlier for vans and full-day hires.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts depuis le nouveau port de Tourlos pour les croisières et ferries ?',
          en: 'Do you provide transfers from the new port of Tourlos for cruises and ferries?',
        },
        a: {
          fr: 'Oui. Le nouveau port de Tourlos, à 2 km au nord de Chora, accueille les ferries des Cyclades et les navires de croisière. Votre chauffeur vous attend à la descente de passerelle, panneau en main, et suit les horaires d’accostage en temps réel.',
          en: 'Yes. The new port of Tourlos, 2 km north of Chora, handles Cycladic ferries and cruise ships. Your chauffeur waits at the gangway with a name board and monitors docking times in real time.',
        },
      },
    ],
    nearby: ['santorini', 'athens'],
  },
  {
    slug: 'santorini',
    name: { fr: 'Santorin', en: 'Santorini' },
    country: { fr: 'Grèce', en: 'Greece' },
    region: 'alps-attractions',
    airport: 'Santorin (JTR)',
    airportTransfer: {
      fr: 'L’aéroport de Santorin (JTR) est à 6 km à l’est de Fira : comptez 15 minutes pour rejoindre la capitale de l’île et 25 à 30 minutes pour Oia, à 18 km au nord. Votre chauffeur vous accueille à la sortie du terminal avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Santorini Airport (JTR) is 6 km east of Fira: allow 15 minutes to reach the island’s capital and 25 to 30 minutes for Oia, 18 km to the north. Your chauffeur greets you at the terminal exit with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Née d’une éruption qui bouleversa la Méditerranée vers 1600 avant notre ère, Santorin déroule ses villages blancs au bord d’une caldeira de 300 mètres de haut. Votre **chauffeur privé à Santorin** relie l’aéroport, le port d’Athinios, Fira, Imerovigli et les hôtels troglodytes d’Oia, sur des routes en lacets où l’expérience locale fait la différence. Transferts à prix fixe, mise à disposition à l’heure, coordination avec les conciergeries des hôtels de la caldeira.',
        'L’île se prête aux itinéraires sur mesure : **le site préhistorique d’Akrotiri**, conservé sous la cendre comme une Pompéi égéenne, les vignobles d’assyrtiko de Santo Wines et de Sigalas, la plage Rouge et le phare d’Akrotiri, Pyrgos et son kastelli. D’avril à octobre, les couchers de soleil d’Oia attirent des milliers de visiteurs : votre chauffeur planifie l’arrivée en avance et gère la dépose au plus près des ruelles, puis le retour de nuit vers votre hôtel.',
      ],
      en: [
        'Born of an eruption that reshaped the Mediterranean around 1600 BC, Santorini strings its white villages along the rim of a 300-metre caldera. Your **private chauffeur in Santorini** links the airport, the port of Athinios, Fira, Imerovigli and the cave hotels of Oia, on hairpin roads where local experience makes all the difference. Fixed-price transfers, hourly hire, and coordination with the concierge desks of the caldera hotels.',
        'The island rewards tailor-made itineraries: **the prehistoric site of Akrotiri**, preserved under ash like an Aegean Pompeii, the Assyrtiko vineyards of Santo Wines and Sigalas, the Red Beach and the Akrotiri lighthouse, Pyrgos and its kastelli. From April to October, Oia’s sunsets draw thousands of visitors: your chauffeur plans an early arrival, manages the drop-off as close to the lanes as possible, then handles the late return to your hotel.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Akrotiri, la Pompéi de l’Égée', en: 'Akrotiri, the Pompeii of the Aegean' },
        teaser: {
          fr: 'À 15 km de Fira, la cité minoenne ensevelie vers 1600 avant notre ère : maisons à étages, fresques et rues préservées sous la cendre. Combinez avec la plage Rouge et le phare d’Akrotiri à la pointe sud-ouest.',
          en: '15 km from Fira, the Minoan city buried around 1600 BC: multi-storey houses, frescoes and streets preserved beneath the ash. Pair it with the Red Beach and the Akrotiri lighthouse on the south-western tip.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Route des vins d’assyrtiko', en: 'Assyrtiko wine route' },
        teaser: {
          fr: 'Les vignes de Santorin poussent en couronnes tressées à même le sol volcanique. Dégustations chez Santo Wines, Sigalas ou Gavalas — assyrtiko, vinsanto — face à la caldeira, pendant que votre chauffeur conduit.',
          en: 'Santorini’s vines grow in basket-woven crowns directly on the volcanic soil. Tastings at Santo Wines, Sigalas or Gavalas — Assyrtiko, Vinsanto — overlooking the caldera, while your chauffeur drives.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '460',
      },
      {
        title: { fr: 'Oia et le coucher de soleil de la caldeira', en: 'Oia and the caldera sunset' },
        teaser: {
          fr: 'Départ en fin d’après-midi vers Oia par Imerovigli et Finikia : les dômes bleus, les moulins et le château vénitien pour l’heure dorée. Votre chauffeur gère la dépose au plus près des ruelles et le retour de nuit.',
          en: 'Late-afternoon departure for Oia via Imerovigli and Finikia: blue domes, windmills and the Venetian castle at golden hour. Your chauffeur handles the drop-off closest to the lanes and the late-night return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
      {
        title: { fr: 'Tour complet de l’île, de Pyrgos à Profitis Ilias', en: 'Full island tour, from Pyrgos to Profitis Ilias' },
        teaser: {
          fr: 'Pyrgos et son kastelli médiéval, le monastère du Profitis Ilias au point culminant de l’île, Megalochori, Emporio et les plages noires de Perissa et Kamari. Déjeuner dans une taverne de village, arrêts photo à la demande.',
          en: 'Pyrgos and its medieval kastelli, the Profitis Ilias monastery at the island’s highest point, Megalochori, Emporio and the black-sand beaches of Perissa and Kamari. Lunch at a village taverna, photo stops on request.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Escale croisière sur mesure', en: 'Tailor-made cruise call' },
        teaser: {
          fr: 'Prise en charge au débarcadère du vieux port ou au port d’Athinios, itinéraire calibré sur l’horaire de votre navire — Oia, Akrotiri, dégustation face à la caldeira — et retour garanti avant le dernier tender.',
          en: 'Pick-up at the old port landing or the port of Athinios, an itinerary calibrated to your ship’s schedule — Oia, Akrotiri, a caldera-view tasting — and a guaranteed return before the last tender.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Santorin et Fira ou Oia ?',
          en: 'How much does a transfer between Santorini Airport and Fira or Oia cost?',
        },
        a: {
          fr: 'Le transfert privé depuis Santorin (JTR) vers Fira, Imerovigli ou Oia est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil à la sortie du terminal avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer from Santorini (JTR) to Fira, Imerovigli or Oia is charged at a fixed price, confirmed at booking. It includes a meet-and-greet at the terminal exit with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une excursion pendant une escale de croisière à Santorin ?',
          en: 'Can you arrange a shore excursion during a cruise call in Santorini?',
        },
        a: {
          fr: 'Oui. Nous prenons en charge les passagers au port d’Athinios ou en haut du téléphérique du vieux port, avec un itinéraire calibré sur l’horaire d’escale. Le retour au navire est planifié avec marge avant le dernier tender, et l’itinéraire reste modifiable en cours de route.',
          en: 'Yes. We collect passengers at the port of Athinios or at the top of the old-port cable car, with an itinerary calibrated to your call time. The return to the ship is planned with a margin before the last tender, and the route can still be adjusted along the way.',
        },
      },
      {
        q: {
          fr: 'Quelle est la meilleure période pour visiter Santorin avec chauffeur ?',
          en: 'When is the best time to visit Santorini with a chauffeur?',
        },
        a: {
          fr: 'De mai à début juillet et en septembre-octobre, l’île offre le meilleur équilibre entre climat et affluence. En plein été, les routes de la caldeira sont chargées en fin de journée : votre chauffeur anticipe les horaires et les points de dépose pour vous épargner l’attente.',
          en: 'From May to early July and in September-October the island offers the best balance of climate and crowds. At the height of summer the caldera roads are busy in the late afternoon: your chauffeur plans timings and drop-off points to spare you the wait.',
        },
      },
    ],
    nearby: ['mykonos', 'athens'],
  },
  {
    slug: 'athens',
    name: { fr: 'Athènes', en: 'Athens' },
    country: { fr: 'Grèce', en: 'Greece' },
    region: 'alps-attractions',
    airport: 'Athènes-Elefthérios-Venizélos (ATH)',
    airportTransfer: {
      fr: 'L’aéroport d’Athènes-Elefthérios-Venizélos (ATH) se trouve à 33 km à l’est du centre : comptez 35 à 45 minutes par l’Attiki Odos pour rejoindre Syntagma ou Kolonaki. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Athens Eleftherios Venizelos Airport (ATH) lies 33 km east of the centre: allow 35 to 45 minutes via the Attiki Odos to reach Syntagma or Kolonaki. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Sous le rocher de l’Acropole, Athènes superpose vingt-cinq siècles d’histoire aux terrasses de Plaka, aux galeries de Kolonaki et au front de mer de la Riviera athénienne. Votre **chauffeur privé à Athènes** relie l’aéroport, le port du Pirée, les hôtels de Syntagma et les musées — de l’Acropole au Musée archéologique national — en berline Mercedes ou van de grande capacité, à prix fixe annoncé à l’avance.',
        'La capitale grecque est aussi un point de départ vers l’Attique et au-delà : **le cap Sounion et le temple de Poséidon** à une heure de route le long de la côte, Delphes et son sanctuaire à flanc du Parnasse, le canal de Corinthe, Épidaure et Mycènes dans le Péloponnèse. D’avril à octobre, les escales de croisière au Pirée se combinent avec une journée complète en ville ; en hiver, Athènes se visite sans foule, sous une lumière qui fait le bonheur des photographes.',
      ],
      en: [
        'Beneath the rock of the Acropolis, Athens layers twenty-five centuries of history over the terraces of Plaka, the galleries of Kolonaki and the seafront of the Athens Riviera. Your **private chauffeur in Athens** links the airport, the port of Piraeus, the hotels of Syntagma and the museums — from the Acropolis Museum to the National Archaeological Museum — in a Mercedes sedan or a full-size van, at a fixed price confirmed in advance.',
        'The Greek capital is also a gateway to Attica and beyond: **Cape Sounion and the Temple of Poseidon** an hour’s drive along the coast, Delphi and its sanctuary on the slopes of Mount Parnassus, the Corinth Canal, Epidaurus and Mycenae in the Peloponnese. From April to October, cruise calls at Piraeus pair naturally with a full day in the city; in winter, Athens can be explored without the crowds, in a light photographers adore.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Athènes classique, de l’Acropole à Plaka', en: 'Classical Athens, from the Acropolis to Plaka' },
        teaser: {
          fr: 'Le Parthénon et l’Érechthéion, le musée de l’Acropole, l’Agora antique et le temple de Zeus Olympien, puis les ruelles de Plaka et d’Anafiotika. Votre chauffeur vous dépose au plus près de chaque site et attend entre les visites.',
          en: 'The Parthenon and the Erechtheion, the Acropolis Museum, the Ancient Agora and the Temple of Olympian Zeus, then the lanes of Plaka and Anafiotika. Your chauffeur drops you at each site and waits between visits.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Cap Sounion et le temple de Poséidon', en: 'Cape Sounion and the Temple of Poseidon' },
        teaser: {
          fr: 'À 70 km d’Athènes par la route côtière de la Riviera, le temple dorique de Poséidon domine l’Égée depuis son promontoire. Départ en fin d’après-midi pour le coucher de soleil, arrêt baignade à Vouliagmeni en été.',
          en: '70 km from Athens along the Riviera coastal road, the Doric Temple of Poseidon crowns its headland above the Aegean. Late-afternoon departure for sunset, with a swim stop at Vouliagmeni in summer.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '480',
      },
      {
        title: { fr: 'Delphes, le nombril du monde antique', en: 'Delphi, navel of the ancient world' },
        teaser: {
          fr: 'À 180 km au nord-ouest, le sanctuaire d’Apollon à flanc du Parnasse : la voie sacrée, le théâtre, la tholos d’Athéna Pronaia et l’Aurige du musée. Déjeuner à Arachova, village perché face à la vallée des oliviers.',
          en: '180 km north-west, the sanctuary of Apollo on the slopes of Parnassus: the Sacred Way, the theatre, the tholos of Athena Pronaia and the Charioteer in the museum. Lunch in Arachova, a hill village facing the olive-grove valley.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Péloponnèse : Corinthe, Mycènes, Épidaure', en: 'Peloponnese: Corinth, Mycenae, Epidaurus' },
        teaser: {
          fr: 'Le canal de Corinthe et ses parois vertigineuses, la porte des Lionnes de Mycènes, le théâtre d’Épidaure à l’acoustique légendaire, puis Nauplie et son front de mer vénitien. Une journée dense, sans toucher un volant.',
          en: 'The sheer walls of the Corinth Canal, the Lion Gate of Mycenae, the legendary acoustics of the theatre of Epidaurus, then Nafplio and its Venetian waterfront. A full day, without ever touching a steering wheel.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '980',
      },
      {
        title: { fr: 'Riviera athénienne et soirée à Vouliagmeni', en: 'Athens Riviera and an evening in Vouliagmeni' },
        teaser: {
          fr: 'De Glyfada à Vouliagmeni, la côte sud d’Athènes aligne marinas, lac thermal et tables face à la mer. Dépose devant votre restaurant, véhicule à disposition toute la soirée, retour de nuit vers le centre ou l’aéroport.',
          en: 'From Glyfada to Vouliagmeni, Athens’ southern coast lines up marinas, a thermal lake and seafront tables. Drop-off at your restaurant, vehicle on standby all evening, late return to the centre or the airport.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '430',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport d’Athènes et le centre-ville ?',
          en: 'How much does a transfer between Athens Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Athènes-Elefthérios-Venizélos (ATH) et le centre d’Athènes est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Athens Eleftherios Venizelos (ATH) and central Athens is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts et excursions depuis le port du Pirée ?',
          en: 'Do you provide transfers and excursions from the port of Piraeus?',
        },
        a: {
          fr: 'Oui. Le Pirée, à 12 km au sud-ouest du centre, est le premier port de croisière de Grèce. Votre chauffeur vous attend au terminal de débarquement, panneau en main, pour un transfert vers la ville ou une excursion calibrée sur votre horaire d’escale, retour au navire garanti.',
          en: 'Yes. Piraeus, 12 km south-west of the centre, is Greece’s largest cruise port. Your chauffeur waits at the disembarkation terminal with a name board, for a transfer into town or an excursion calibrated to your call time, with a guaranteed return to the ship.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Delphes ou le Péloponnèse à la journée depuis Athènes ?',
          en: 'Can Delphi or the Peloponnese be visited in a day from Athens?',
        },
        a: {
          fr: 'Absolument. Delphes se rejoint en 2 h 30 environ, Mycènes et Épidaure en moins de deux heures par le canal de Corinthe. L’itinéraire, les horaires et les arrêts sont définis avec vous avant le départ, à prix fixe, et restent modifiables en cours de route.',
          en: 'Absolutely. Delphi is around 2.5 hours away, Mycenae and Epidaurus under two hours via the Corinth Canal. The itinerary, timings and stops are agreed with you before departure, at a fixed price, and can still be adjusted along the way.',
        },
      },
    ],
    nearby: ['mykonos', 'santorini'],
  },
  {
    slug: 'dubrovnik',
    name: { fr: 'Dubrovnik', en: 'Dubrovnik' },
    country: { fr: 'Croatie', en: 'Croatia' },
    region: 'alps-attractions',
    airport: 'Dubrovnik (DBV)',
    airportTransfer: {
      fr: 'L’aéroport de Dubrovnik (DBV), à Čilipi, se trouve à 20 km au sud-est de la vieille ville : comptez 30 minutes par la route côtière jusqu’à la porte Pile ou aux hôtels de Ploče. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Dubrovnik Airport (DBV), at Čilipi, lies 20 km south-east of the old town: allow 30 minutes along the coastal road to reach the Pile Gate or the hotels of Ploče. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Perle de l’Adriatique et ancienne république de Raguse, Dubrovnik enserre dans ses remparts du XIIIe siècle le Stradun de marbre, le palais des Recteurs et les cloîtres franciscains. Votre **chauffeur privé à Dubrovnik** relie l’aéroport de Čilipi, le port de Gruž, les hôtels de Ploče et de Lapad et les villas de la côte, en berline ou van premium. La vieille ville étant piétonne, la dépose au plus près des portes Pile et Ploče demande une connaissance précise des accès.',
        'Depuis Dubrovnik, la côte dalmate et ses arrière-pays s’ouvrent à la journée : **les bouches de Kotor** au Monténégro, Mostar et son pont ottoman en Bosnie-Herzégovine, la presqu’île de Pelješac et ses vins de plavac mali, Cavtat et le mont Srđ au-dessus des remparts. De mai à octobre, les escales de croisière saturent la vieille ville en milieu de journée : votre chauffeur cale les visites tôt le matin ou en fin d’après-midi, quand le Stradun retrouve sa respiration.',
      ],
      en: [
        'Pearl of the Adriatic and former republic of Ragusa, Dubrovnik holds the marble Stradun, the Rector’s Palace and Franciscan cloisters within its thirteenth-century walls. Your **private chauffeur in Dubrovnik** connects Čilipi airport, the port of Gruž, the hotels of Ploče and Lapad and the villas along the coast, in a premium sedan or van. With the old town fully pedestrianised, dropping off as close as possible to the Pile and Ploče gates takes precise knowledge of the access roads.',
        'From Dubrovnik, the Dalmatian coast and its hinterlands open up as day trips: **the Bay of Kotor** in Montenegro, Mostar and its Ottoman bridge in Bosnia and Herzegovina, the Pelješac peninsula and its Plavac Mali wines, Cavtat and Mount Srđ above the ramparts. From May to October, cruise calls fill the old town at midday: your chauffeur schedules visits early in the morning or late in the afternoon, when the Stradun breathes again.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Remparts et vieille ville hors affluence', en: 'The walls and old town before the crowds' },
        teaser: {
          fr: 'Dépose à la porte Pile à l’ouverture des remparts : deux kilomètres de chemin de ronde entre les forts Minčeta et Sveti Ivan, puis le Stradun, le palais des Recteurs et la pharmacie franciscaine de 1317, avant l’arrivée des navires.',
          en: 'Drop-off at the Pile Gate as the walls open: two kilometres of wall-walk between the Minčeta and Sveti Ivan forts, then the Stradun, the Rector’s Palace and the 1317 Franciscan pharmacy, before the ships arrive.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Bouches de Kotor et Perast', en: 'The Bay of Kotor and Perast' },
        teaser: {
          fr: 'À 90 km au sud, le fjord le plus méridional d’Europe : Perast et l’îlot Notre-Dame-du-Rocher, les remparts vénitiens de Kotor, la route panoramique au-dessus de la baie. Passage de frontière monténégrine géré par votre chauffeur.',
          en: '90 km south, Europe’s southernmost fjord-like bay: Perast and the islet of Our Lady of the Rocks, the Venetian walls of Kotor, the panoramic road above the bay. The Montenegrin border crossing is handled by your chauffeur.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '860',
      },
      {
        title: { fr: 'Mostar et le pont ottoman', en: 'Mostar and the Ottoman bridge' },
        teaser: {
          fr: 'À 140 km au nord, le Stari Most enjambe la Neretva depuis 1566 — reconstruit à l’identique en 2004. Bazar de Kujundžiluk, maisons ottomanes, halte aux chutes de Kravica au retour. Deux frontières, une seule journée.',
          en: '140 km north, the Stari Most has spanned the Neretva since 1566 — rebuilt identically in 2004. The Kujundžiluk bazaar, Ottoman houses, and a stop at the Kravica waterfalls on the way back. Two borders, one day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '920',
      },
      {
        title: { fr: 'Pelješac, vins et huîtres de Ston', en: 'Pelješac, wines and Ston oysters' },
        teaser: {
          fr: 'La presqu’île de Pelješac et ses vignobles de plavac mali — Dingač, Postup —, les remparts de Ston, deuxième plus longue muraille d’Europe, et les huîtres de la baie de Mali Ston dégustées au ponton.',
          en: 'The Pelješac peninsula and its Plavac Mali vineyards — Dingač, Postup — the walls of Ston, Europe’s second-longest fortification, and Mali Ston bay oysters tasted right on the pontoon.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '780',
      },
      {
        title: { fr: 'Coucher de soleil au mont Srđ et dîner', en: 'Mount Srđ sunset and dinner' },
        teaser: {
          fr: 'Montée en voiture au sommet du Srđ, 412 mètres au-dessus des remparts, pour le couchant sur les îles Élaphites, puis dépose devant votre table — Nautika face aux forts, ou une konoba de Ploče. Retour à votre hôtel sans contrainte.',
          en: 'A drive up Mount Srđ, 412 metres above the ramparts, for sunset over the Elaphiti islands, then drop-off at your table — Nautika facing the forts, or a konoba in Ploče. Effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '360',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Dubrovnik et la vieille ville ?',
          en: 'How much does a transfer between Dubrovnik Airport and the old town cost?',
        },
        a: {
          fr: 'Le transfert privé entre Dubrovnik-Čilipi (DBV) et la vieille ville ou les hôtels de Lapad est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Dubrovnik-Čilipi (DBV) and the old town or the Lapad hotels is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Votre chauffeur peut-il passer les frontières vers le Monténégro ou la Bosnie-Herzégovine ?',
          en: 'Can your chauffeur cross the borders into Montenegro or Bosnia and Herzegovina?',
        },
        a: {
          fr: 'Oui. Kotor, Perast et Mostar font partie de nos excursions les plus demandées depuis Dubrovnik. Les trajets transfrontaliers sont devisés à l’avance, à prix fixe, avec un véhicule autorisé à circuler dans les pays traversés ; prévoyez simplement votre passeport.',
          en: 'Yes. Kotor, Perast and Mostar are among our most requested excursions from Dubrovnik. Cross-border journeys are quoted in advance at a fixed price, with a vehicle authorised in each country crossed; simply bring your passport.',
        },
      },
      {
        q: {
          fr: 'Comment éviter l’affluence des croisières dans la vieille ville de Dubrovnik ?',
          en: 'How can I avoid the cruise crowds in Dubrovnik’s old town?',
        },
        a: {
          fr: 'La vieille ville est la plus dense entre 10 h et 15 h les jours d’escale au port de Gruž. Votre chauffeur consulte le calendrier des navires et programme la dépose à la porte Pile à l’ouverture des remparts ou en fin d’après-midi, quand le Stradun se vide.',
          en: 'The old town is busiest between 10 am and 3 pm on days when ships call at Gruž. Your chauffeur checks the cruise schedule and plans your Pile Gate drop-off for the walls’ opening time or the late afternoon, when the Stradun empties.',
        },
      },
    ],
    nearby: ['split', 'zagreb'],
  },
  {
    slug: 'split',
    name: { fr: 'Split', en: 'Split' },
    country: { fr: 'Croatie', en: 'Croatia' },
    region: 'alps-attractions',
    airport: 'Split (SPU)',
    airportTransfer: {
      fr: 'L’aéroport de Split (SPU), à Kaštela, se trouve à 20 km à l’ouest du centre : comptez 25 à 35 minutes pour rejoindre la Riva et le palais de Dioclétien. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Split Airport (SPU), at Kaštela, lies 20 km west of the centre: allow 25 to 35 minutes to reach the Riva and Diocletian’s Palace. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Deuxième ville de Croatie, Split vit littéralement dans le palais que l’empereur Dioclétien s’offrit pour sa retraite vers 305 : le péristyle, la cathédrale Saint-Domnius et les caves voûtées forment le cœur battant de la cité. Votre **chauffeur privé à Split** relie l’aéroport de Kaštela, le port des ferries, la Riva et les hôtels de Bačvice ou de Meje, et gère la dépose au plus près du centre historique piéton, en berline ou van premium.',
        'La Dalmatie centrale se déploie autour de Split : **Trogir, îlot vénitien classé à l’UNESCO**, à 30 minutes, les chutes de la Krka et Šibenik vers le nord, Salona l’antique et la forteresse de Klis au-dessus de la ville, les vignobles de l’arrière-pays. En été, le port embarque vers Hvar et Brač et la Riva vibre jusqu’à la nuit ; hors saison, la ville retrouve un rythme dalmate que les visiteurs d’hiver apprécient, entre cafés du péristyle et marché du Pazar.',
      ],
      en: [
        'Croatia’s second city, Split literally lives inside the palace Emperor Diocletian built for his retirement around AD 305: the Peristyle, the cathedral of Saint Domnius and the vaulted cellars form the beating heart of the town. Your **private chauffeur in Split** links Kaštela airport, the ferry port, the Riva and the hotels of Bačvice or Meje, and handles drop-offs as close as possible to the pedestrian historic centre, in a premium sedan or van.',
        'Central Dalmatia unfolds around Split: **Trogir, a UNESCO-listed Venetian islet**, 30 minutes away, the Krka waterfalls and Šibenik to the north, ancient Salona and the Klis fortress above the city, and the vineyards of the hinterland. In summer the port sails for Hvar and Brač and the Riva hums late into the night; out of season the town settles back into a Dalmatian rhythm winter visitors relish, between Peristyle cafés and the Pazar market.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Palais de Dioclétien et vieille ville', en: 'Diocletian’s Palace and the old town' },
        teaser: {
          fr: 'Le péristyle, la cathédrale Saint-Domnius et son campanile, les caves voûtées et la porte d’Or, puis la Riva et le marché du Pazar. Dépose au plus près du centre piéton, guide privé sur demande, véhicule en attente.',
          en: 'The Peristyle, the cathedral of Saint Domnius and its bell tower, the vaulted cellars and the Golden Gate, then the Riva and the Pazar market. Drop-off by the pedestrian centre, private guide on request, vehicle on standby.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Trogir et la forteresse de Klis', en: 'Trogir and the Klis fortress' },
        teaser: {
          fr: 'À 30 minutes de Split, l’îlot de Trogir aligne cathédrale Saint-Laurent, loggia et palais vénitiens dans un plan médiéval intact. Au retour, la forteresse de Klis domine la ville et la baie depuis son éperon rocheux.',
          en: '30 minutes from Split, the islet of Trogir lines up the cathedral of Saint Lawrence, a loggia and Venetian palaces on an intact medieval plan. On the way back, the Klis fortress commands the city and the bay from its rocky spur.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '440',
      },
      {
        title: { fr: 'Chutes de la Krka et Šibenik', en: 'Krka waterfalls and Šibenik' },
        teaser: {
          fr: 'À 85 km au nord, le parc national de la Krka et les cascades de Skradinski Buk, puis Šibenik et la cathédrale Saint-Jacques, chef-d’œuvre Renaissance classé à l’UNESCO. Déjeuner au bord de la rivière à Skradin.',
          en: '85 km north, Krka National Park and the Skradinski Buk cascades, then Šibenik and the cathedral of Saint James, a UNESCO-listed Renaissance masterpiece. Riverside lunch in Skradin.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
      {
        title: { fr: 'Route de Dubrovnik par Ston et Pelješac', en: 'The road to Dubrovnik via Ston and Pelješac' },
        teaser: {
          fr: 'Transfert panoramique le long de la côte dalmate : le pont de Pelješac, les remparts et les huîtres de Ston, arrêts photo au-dessus de la Neretva. Un trajet de 230 km transformé en journée de découverte, bagages à bord.',
          en: 'A panoramic transfer along the Dalmatian coast: the Pelješac bridge, the walls and oysters of Ston, photo stops above the Neretva delta. A 230 km journey turned into a day of discovery, luggage on board.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '990',
      },
      {
        title: { fr: 'Soirée sur la Riva et tables de Split', en: 'Evening on the Riva and Split’s finest tables' },
        teaser: {
          fr: 'Dépose devant votre restaurant — Zoi face au port, une konoba du quartier de Varoš — puis le véhicule reste à disposition pour la promenade de la Riva illuminée et le retour vers votre hôtel ou votre villa des environs.',
          en: 'Drop-off at your restaurant — Zoi facing the harbour, or a konoba in the Varoš quarter — then the vehicle stays on standby for the illuminated Riva promenade and the return to your hotel or a villa nearby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Split et le centre-ville ?',
          en: 'How much does a transfer between Split Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Split-Kaštela (SPU) et le centre de Split est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Split-Kaštela (SPU) and central Split is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers le port de Split pour les ferries vers Hvar et Brač ?',
          en: 'Do you provide transfers to Split’s port for the ferries to Hvar and Brač?',
        },
        a: {
          fr: 'Oui. Le port des ferries jouxte la vieille ville et embarque vers Hvar, Brač, Vis et Korčula. Votre chauffeur cale la prise en charge sur l’horaire de votre traversée, aide au débarquement des bagages et vous attend au retour, panneau en main.',
          en: 'Yes. The ferry port sits beside the old town and sails for Hvar, Brač, Vis and Korčula. Your chauffeur times the pick-up to your crossing, helps with luggage at the quay and waits for you on the return, name board in hand.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Dubrovnik depuis Split avec arrêts en cours de route ?',
          en: 'Can I travel from Split to Dubrovnik with stops along the way?',
        },
        a: {
          fr: 'Absolument. Le trajet de 230 km par la côte et le pont de Pelješac se prête aux arrêts à Ston, dans les vignobles de Pelješac ou au-dessus du delta de la Neretva. Le transfert est devisé à prix fixe, bagages à bord, et l’itinéraire reste modifiable en cours de route.',
          en: 'Absolutely. The 230 km coastal route via the Pelješac bridge lends itself to stops in Ston, among the Pelješac vineyards or above the Neretva delta. The transfer is quoted at a fixed price, luggage on board, and the itinerary can still be adjusted along the way.',
        },
      },
    ],
    nearby: ['dubrovnik', 'zagreb', 'ljubljana'],
  },
  {
    slug: 'disneyland-paris-area',
    name: { fr: 'Disneyland Paris', en: 'Disneyland Paris' },
    country: { fr: 'France', en: 'France' },
    region: 'alps-attractions',
    airport: 'Paris-CDG (CDG) / Paris-Orly (ORY)',
    airportTransfer: {
      fr: 'L’aéroport de Paris-Charles-de-Gaulle (CDG) se trouve à environ 35 km au nord de Marne-la-Vallée : comptez 35 à 45 minutes jusqu’aux hôtels des parcs ; depuis Orly (ORY), 50 minutes environ. La gare TGV de Marne-la-Vallée–Chessy est au pied des parcs. Votre chauffeur vous accueille panneau nominatif en main et suit votre vol ou votre train en temps réel.',
      en: 'Paris-Charles-de-Gaulle Airport (CDG) lies around 35 km north of Marne-la-Vallée: allow 35 to 45 minutes to the park hotels; from Orly (ORY), around 50 minutes. The Marne-la-Vallée–Chessy TGV station sits at the foot of the parks. Your chauffeur greets you with a name board and tracks your flight or train in real time.',
    },
    intro: {
      fr: [
        'Première destination touristique d’Europe, Disneyland Paris réunit à Marne-la-Vallée deux parcs — Disneyland Park et son château de la Belle au Bois dormant, Walt Disney Studios —, le Disney Village et une constellation d’hôtels, du Disneyland Hotel au Newport Bay Club. Votre **chauffeur privé pour Disneyland Paris** assure les transferts depuis CDG, Orly et la gare TGV de Chessy, avec sièges enfants fournis, van de grande capacité pour les familles et prise en charge au plus près des lobbys.',
        'Le séjour se prolonge au-delà des parcs : **Paris est à 45 minutes** pour une journée Louvre, tour Eiffel et croisière sur la Seine, le centre commercial du Val d’Europe et le village de marques La Vallée Village sont à cinq minutes, Provins la médiévale à une demi-heure. Pendant les vacances scolaires et la saison de Noël, les horaires d’ouverture s’allongent : votre chauffeur adapte les prises en charge aux nocturnes, aux illuminations et au spectacle du soir, sans attente sur les parkings.',
      ],
      en: [
        'Europe’s leading tourist destination, Disneyland Paris gathers two parks at Marne-la-Vallée — Disneyland Park with Sleeping Beauty’s castle, and Walt Disney Studios — plus Disney Village and a constellation of hotels, from the Disneyland Hotel to the Newport Bay Club. Your **private chauffeur for Disneyland Paris** covers transfers from CDG, Orly and the Chessy TGV station, with child seats provided, a full-size van for families and pick-up as close to the hotel lobbies as possible.',
        'The stay extends well beyond the parks: **Paris is 45 minutes away** for a day of the Louvre, the Eiffel Tower and a Seine cruise, the Val d’Europe shopping centre and La Vallée Village outlet are five minutes from the gates, and medieval Provins half an hour. During school holidays and the Christmas season, opening hours stretch late: your chauffeur adjusts pick-ups to extended evenings, illuminations and the night-time show, with no car-park queues.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Journée à Paris depuis les parcs', en: 'A day in Paris from the parks' },
        teaser: {
          fr: 'À 45 minutes de Marne-la-Vallée : le Louvre ou Orsay le matin, déjeuner près de la tour Eiffel, croisière sur la Seine et galeries Lafayette avant le retour. Votre chauffeur enchaîne les étapes et attend à chaque arrêt.',
          en: '45 minutes from Marne-la-Vallée: the Louvre or Orsay in the morning, lunch near the Eiffel Tower, a Seine cruise and Galeries Lafayette before heading back. Your chauffeur links each stop and waits throughout.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Versailles, château et jardins', en: 'Versailles, palace and gardens' },
        teaser: {
          fr: 'À une heure de route des parcs, la galerie des Glaces, les Grands Appartements et les jardins de Le Nôtre — grandes eaux musicales en saison. Retour en fin d’après-midi pour le spectacle du soir à Disneyland.',
          en: 'An hour’s drive from the parks: the Hall of Mirrors, the State Apartments and Le Nôtre’s gardens — musical fountain shows in season. Back by late afternoon for the evening show at Disneyland.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Shopping au Val d’Europe et à La Vallée Village', en: 'Shopping at Val d’Europe and La Vallée Village' },
        teaser: {
          fr: 'À cinq minutes des parcs, le centre commercial du Val d’Europe et le village de marques La Vallée Village — plus de 110 boutiques de créateurs. Dépose aux entrées, coffre à disposition pour les achats, retour à l’hôtel quand vous le décidez.',
          en: 'Five minutes from the parks, the Val d’Europe shopping centre and La Vallée Village outlet — more than 110 designer boutiques. Door drop-offs, the boot at your disposal for purchases, return to the hotel whenever you decide.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Provins, cité médiévale classée', en: 'Provins, a listed medieval town' },
        teaser: {
          fr: 'À 35 minutes des parcs, la ville des foires de Champagne inscrite à l’UNESCO : remparts, tour César, grange aux dîmes et spectacle des Aigles en saison. Une parenthèse d’histoire vraie entre deux journées de parcs.',
          en: '35 minutes from the parks, the UNESCO-listed town of the Champagne fairs: ramparts, the César Tower, the tithe barn and the falconry show in season. A dose of real history between two park days.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Transfert familial CDG ou Orly vers les hôtels Disney', en: 'Family transfer from CDG or Orly to the Disney hotels' },
        teaser: {
          fr: 'Van jusqu’à sept passagers, sièges enfants et rehausseurs fournis, aide aux bagages et aux poussettes, dépose au plus près du lobby de votre hôtel — Disneyland Hotel, Newport Bay Club ou hôtels partenaires du Val de France.',
          en: 'A van for up to seven passengers, child seats and boosters provided, help with luggage and pushchairs, drop-off as close as possible to your hotel lobby — Disneyland Hotel, Newport Bay Club or the Val de France partner hotels.',
        },
        duration: { fr: 'Trajet simple', en: 'One-way journey' },
        price: '310',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Paris-CDG et les hôtels de Disneyland Paris ?',
          en: 'How much does a transfer between Paris-CDG and the Disneyland Paris hotels cost?',
        },
        a: {
          fr: 'Le transfert privé entre Paris-CDG et Marne-la-Vallée est facturé à prix fixe, confirmé à la réservation, sièges enfants inclus. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Paris-CDG and Marne-la-Vallée is charged at a fixed price, confirmed at booking, child seats included. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Fournissez-vous des sièges enfants pour les trajets vers Disneyland Paris ?',
          en: 'Do you provide child seats for journeys to Disneyland Paris?',
        },
        a: {
          fr: 'Oui, sans supplément. Indiquez l’âge et la taille des enfants à la réservation : sièges coques, sièges deuxième âge et rehausseurs sont installés avant la prise en charge. Les poussettes voyagent pliées dans le coffre du van.',
          en: 'Yes, at no extra charge. Tell us the children’s ages and heights at booking: infant carriers, toddler seats and boosters are fitted before pick-up. Pushchairs travel folded in the van’s boot.',
        },
      },
      {
        q: {
          fr: 'Comment éviter l’attente à l’ouverture et à la fermeture des parcs ?',
          en: 'How can I avoid the queues at park opening and closing?',
        },
        a: {
          fr: 'Votre chauffeur dépose au plus près des entrées avant l’ouverture — les clients des hôtels Disney bénéficient de l’Extra Magic Time — et vous attend à un point convenu après le spectacle du soir, pour un retour sans file sur les parkings ni attente de navette.',
          en: 'Your chauffeur drops you as close to the gates as possible before opening — Disney hotel guests enjoy Extra Magic Time — and waits at an agreed point after the night-time show, so you skip the car-park queues and shuttle waits.',
        },
      },
    ],
    nearby: ['annecy', 'la-clusaz'],
  },
  {
    slug: 'andorra-la-vella',
    name: { fr: 'Andorre-la-Vieille', en: 'Andorra la Vella' },
    country: { fr: 'Andorre', en: 'Andorra' },
    region: 'alps-attractions',
    airport: 'Toulouse-Blagnac (TLS) / Barcelone (BCN)',
    airportTransfer: {
      fr: 'La principauté d’Andorre n’a pas d’aéroport : les accès les plus pratiques sont Toulouse-Blagnac (TLS), à environ 185 km au nord (2 h 45 de route), et Barcelone-El Prat (BCN), à environ 200 km au sud (3 heures). Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, suit votre vol en temps réel et gère le passage de la frontière andorrane.',
      en: 'The Principality of Andorra has no airport: the most practical gateways are Toulouse-Blagnac (TLS), around 185 km to the north (a 2 h 45 drive), and Barcelona-El Prat (BCN), around 200 km to the south (3 hours). Your chauffeur greets you in the arrivals hall with a name board, tracks your flight in real time and handles the Andorran border crossing.',
    },
    intro: {
      fr: [
        'Capitale la plus haute d’Europe à 1 023 mètres, Andorre-la-Vieille étage ses avenues commerçantes le long de la Valira, entre le quartier ancien du Barri Antic et la Casa de la Vall, siège historique du Conseil général. Votre **chauffeur privé en Andorre** assure les liaisons depuis Toulouse et Barcelone, les transferts vers les stations de Grandvalira et Vallnord et les déplacements dans les sept paroisses, en berline ou van équipé pour la montagne.',
        'La principauté conjugue **shopping détaxé sur l’avinguda Meritxell** — horlogerie, électronique, parfumerie — et bien-être à Caldea, l’un des plus grands centres thermoludiques d’Europe du Sud, alimenté par des sources à 70 °C. L’hiver, Grandvalira aligne 210 km de pistes entre Soldeu, El Tarter et le Pas de la Case ; l’été, les vallées du Madriu-Perafita-Claror, classées à l’UNESCO, et les lacs de Tristaina ouvrent la montagne aux randonneurs. Votre chauffeur adapte l’équipement à la saison.',
      ],
      en: [
        'Europe’s highest capital at 1,023 metres, Andorra la Vella tiers its shopping avenues along the Valira river, between the old Barri Antic quarter and the Casa de la Vall, historic seat of the General Council. Your **private chauffeur in Andorra** covers connections from Toulouse and Barcelona, transfers to the Grandvalira and Vallnord ski areas and journeys across the seven parishes, in a sedan or a mountain-equipped van.',
        'The principality pairs **duty-free shopping on Avinguda Meritxell** — watches, electronics, perfumery — with wellness at Caldea, one of southern Europe’s largest thermal complexes, fed by 70 °C springs. In winter, Grandvalira lines up 210 km of slopes between Soldeu, El Tarter and Pas de la Case; in summer, the UNESCO-listed Madriu-Perafita-Claror valleys and the Tristaina lakes open the mountains to hikers. Your chauffeur matches the vehicle’s equipment to the season.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Transfert Toulouse ou Barcelone vers Andorre', en: 'Toulouse or Barcelona transfer to Andorra' },
        teaser: {
          fr: 'Prise en charge à TLS ou BCN, panneau nominatif en main, puis la route des Pyrénées jusqu’à votre hôtel d’Andorre-la-Vieille ou de Soldeu — passage de frontière et équipements neige gérés par votre chauffeur.',
          en: 'Pick-up at TLS or BCN with a name board, then the Pyrenean road to your hotel in Andorra la Vella or Soldeu — border crossing and winter equipment handled by your chauffeur.',
        },
        duration: { fr: 'Trajet simple', en: 'One-way journey' },
        price: '620',
      },
      {
        title: { fr: 'Journée ski à Grandvalira', en: 'Ski day at Grandvalira' },
        teaser: {
          fr: 'Dépose au pied des télécabines de Soldeu, d’El Tarter ou d’Encamp — 210 km de pistes, le plus grand domaine des Pyrénées. Le véhicule reste à disposition pour le retour à l’hôtel ou une fin de journée à Caldea.',
          en: 'Drop-off at the Soldeu, El Tarter or Encamp gondolas — 210 km of slopes, the largest ski area in the Pyrenees. The vehicle stays on standby for the return to your hotel or a late-day visit to Caldea.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '540',
      },
      {
        title: { fr: 'Caldea, thermes et lagons d’altitude', en: 'Caldea, thermal baths and mountain lagoons' },
        teaser: {
          fr: 'La tour de verre de Caldea, à Escaldes-Engordany, déploie lagons intérieurs et extérieurs, bains indo-romains et espace adultes Inúu, alimentés par des sources chaudes naturelles. Dépose à l’entrée, retour à l’heure convenue.',
          en: 'Caldea’s glass tower in Escaldes-Engordany offers indoor and outdoor lagoons, Indo-Roman baths and the adults-only Inúu space, fed by natural hot springs. Drop-off at the entrance, return at the agreed time.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Shopping détaxé sur l’avinguda Meritxell', en: 'Duty-free shopping on Avinguda Meritxell' },
        teaser: {
          fr: 'Deux kilomètres de vitrines détaxées — horlogerie, électronique, parfumerie, cave à cigares — entre Andorre-la-Vieille et Escaldes. Dépose devant les enseignes, coffre à disposition, conseils sur les franchises douanières au retour.',
          en: 'Two kilometres of duty-free windows — watches, electronics, perfumery, a cigar cellar — between Andorra la Vella and Escaldes. Door drop-offs, the boot at your disposal, guidance on customs allowances for the return.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Tour des paroisses et vallées de l’UNESCO', en: 'Parishes tour and the UNESCO valleys' },
        teaser: {
          fr: 'La Casa de la Vall et le Barri Antic, l’église romane de Santa Coloma, le sanctuaire de Meritxell reconstruit par Ricardo Bofill, puis les points de vue d’Ordino et du col d’Ordino vers les vallées classées du Madriu.',
          en: 'The Casa de la Vall and the Barri Antic, the Romanesque church of Santa Coloma, the Meritxell sanctuary rebuilt by Ricardo Bofill, then the Ordino viewpoints and the Ordino pass above the listed Madriu valleys.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Toulouse ou de Barcelone et Andorre ?',
          en: 'How much does a transfer between Toulouse or Barcelona airport and Andorra cost?',
        },
        a: {
          fr: 'Le transfert privé depuis Toulouse-Blagnac (TLS) ou Barcelone-El Prat (BCN) vers Andorre-la-Vieille est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer from Toulouse-Blagnac (TLS) or Barcelona-El Prat (BCN) to Andorra la Vella is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Que faut-il prévoir pour le passage de la frontière andorrane ?',
          en: 'What should I plan for the Andorran border crossing?',
        },
        a: {
          fr: 'L’Andorre n’appartient pas à l’espace Schengen : munissez-vous d’une pièce d’identité ou d’un passeport en cours de validité. Au retour, les achats détaxés sont soumis à des franchises douanières ; votre chauffeur connaît les plafonds en vigueur et les files les plus rapides aux postes du Pas de la Case et de la Farga de Moles.',
          en: 'Andorra is not part of the Schengen area: carry a valid ID card or passport. On the way back, duty-free purchases are subject to customs allowances; your chauffeur knows the current limits and the fastest lanes at the Pas de la Case and Farga de Moles posts.',
        },
      },
      {
        q: {
          fr: 'Le trajet vers Andorre est-il assuré en hiver malgré la neige ?',
          en: 'Is the journey to Andorra guaranteed in winter despite the snow?',
        },
        a: {
          fr: 'Oui. Nos véhicules sont équipés pour la montagne — pneus hiver, chaînes à bord — et votre chauffeur suit l’état des cols en temps réel, notamment le port d’Envalira côté français, en privilégiant le tunnel quand les conditions l’exigent. L’horaire de prise en charge intègre une marge de sécurité.',
          en: 'Yes. Our vehicles are mountain-equipped — winter tyres, chains on board — and your chauffeur monitors pass conditions in real time, notably the Port d’Envalira on the French side, favouring the tunnel whenever conditions require. Pick-up times include a safety margin.',
        },
      },
    ],
    nearby: ['serre-chevalier', 'alpe-d-huez'],
  },
  {
    slug: 'prague',
    name: { fr: 'Prague', en: 'Prague' },
    country: { fr: 'Tchéquie', en: 'Czech Republic' },
    region: 'alps-attractions',
    airport: 'Prague-Václav-Havel (PRG)',
    airportTransfer: {
      fr: 'L’aéroport de Prague-Václav-Havel (PRG) se situe à 17 km à l’ouest du centre : comptez 25 à 35 minutes pour rejoindre la place de la Vieille-Ville ou Malá Strana. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Prague Václav Havel Airport (PRG) lies 17 km west of the centre: allow 25 to 35 minutes to reach the Old Town Square or Malá Strana. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville aux cent clochers, Prague déploie le pont Charles, l’horloge astronomique et l’immense château dominant la Vltava. Votre **chauffeur privé à Prague** relie l’aéroport Václav-Havel aux hôtels de la Vieille-Ville, dessert Malá Strana, le quartier juif de Josefov et les salles de concert du Rudolfinum, en berline Mercedes ou van de grande capacité. Transferts à prix fixe, mise à disposition à l’heure, chauffeurs habitués aux ruelles pavées et aux zones à accès restreint du centre historique.',
        'Au-delà de la capitale, la Bohême se prête admirablement à l’excursion : **Karlovy Vary et ses colonnades thermales** à moins de deux heures, Český Krumlov classé à l’UNESCO au sud, le château de Karlštejn à quarante minutes. En hiver, les marchés de Noël de la place de la Vieille-Ville imposent une dépose au plus près des zones piétonnes ; en été, votre chauffeur ajuste les horaires pour éviter l’affluence sur le pont Charles.',
      ],
      en: [
        'The city of a hundred spires, Prague unfolds Charles Bridge, the Astronomical Clock and the vast castle overlooking the Vltava. Your **private chauffeur in Prague** links Václav Havel Airport to the Old Town hotels, serves Malá Strana, the Josefov Jewish quarter and the Rudolfinum concert halls, in a Mercedes sedan or a full-size van. Fixed-price transfers, hourly hire, and chauffeurs at ease with the cobbled lanes and restricted-access zones of the historic centre.',
        'Beyond the capital, Bohemia rewards the day trip: **Karlovy Vary and its spa colonnades** under two hours away, UNESCO-listed Český Krumlov to the south, Karlštejn Castle in forty minutes. In winter, the Christmas markets on the Old Town Square call for a drop-off as close as possible to the pedestrian zones; in summer, your chauffeur adjusts timings to avoid the crowds on Charles Bridge.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Château de Prague et Malá Strana', en: 'Prague Castle and Malá Strana' },
        teaser: {
          fr: 'Dépose au sommet de la colline de Hradčany : cathédrale Saint-Guy, ruelle d’Or, palais Lobkowicz. Descente à pied vers Malá Strana et l’église Saint-Nicolas, votre véhicule vous attend au bas de la colline.',
          en: 'Drop-off at the top of Hradčany hill: St Vitus Cathedral, the Golden Lane, Lobkowicz Palace. Walk down through Malá Strana and St Nicholas Church; your vehicle waits at the foot of the hill.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Český Krumlov, joyau de Bohême du Sud', en: 'Český Krumlov, jewel of South Bohemia' },
        teaser: {
          fr: 'À 170 km au sud de Prague, la petite ville UNESCO lovée dans un méandre de la Vltava : château Renaissance, théâtre baroque, ruelles médiévales intactes. Déjeuner en terrasse sur la rivière, retour en soirée.',
          en: '170 km south of Prague, the UNESCO town curled inside a bend of the Vltava: Renaissance castle, Baroque theatre, intact medieval lanes. Riverside lunch on a terrace, evening return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Karlovy Vary, ville d’eaux', en: 'Karlovy Vary spa town' },
        teaser: {
          fr: 'À 130 km à l’ouest, la station thermale la plus célèbre de Bohême : colonnade du Moulin, sources chaudes, Grandhotel Pupp. Dégustation de l’eau de source et pause au salon de thé, retour par la route des forêts.',
          en: '130 km west, Bohemia’s most celebrated spa resort: the Mill Colonnade, hot springs, the Grandhotel Pupp. A taste of the spring waters and a tea-room pause, returning through the forest roads.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Château de Karlštejn et Bohême centrale', en: 'Karlštejn Castle and central Bohemia' },
        teaser: {
          fr: 'À 40 minutes de Prague, la forteresse gothique élevée par Charles IV pour abriter les joyaux de la couronne. Combinez avec les jardins de Průhonice ou une cave de vignoble à Mělník au confluent de l’Elbe.',
          en: '40 minutes from Prague, the Gothic fortress raised by Charles IV to guard the crown jewels. Pair it with the Průhonice gardens or a vineyard cellar at Mělník, where the Vltava meets the Elbe.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Soirée pragoise, opéra et vieille ville', en: 'Prague evening, opera and Old Town' },
        teaser: {
          fr: 'Dépose devant le Théâtre national ou le Rudolfinum, dîner à La Degustation ou au Field — deux tables étoilées —, puis tour des illuminations du pont Charles et du château. Véhicule à disposition toute la soirée.',
          en: 'Drop-off at the National Theatre or the Rudolfinum, dinner at La Degustation or Field — two starred tables — then a tour of the illuminated Charles Bridge and castle. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Prague-Václav-Havel et le centre-ville ?',
          en: 'How much does a transfer between Prague Václav Havel Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport Václav-Havel (PRG) et le centre de Prague est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Václav Havel Airport (PRG) and central Prague is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous des trajets longue distance de Prague vers Vienne ou Budapest ?',
          en: 'Do you provide long-distance journeys from Prague to Vienna or Budapest?',
        },
        a: {
          fr: 'Oui. Prague–Vienne se parcourt en 3 h 30 environ, Prague–Budapest en 5 heures, avec arrêts à la demande — Brno, Bratislava ou le lac de Neusiedl. Chaque trajet inter-capitales est devisé à l’avance, à prix fixe, dans un véhicule autorisé à circuler dans les pays traversés.',
          en: 'Yes. Prague–Vienna takes around 3.5 hours and Prague–Budapest around 5, with stops on request — Brno, Bratislava or Lake Neusiedl. Every inter-capital journey is quoted in advance at a fixed price, in a vehicle authorised to operate in each country crossed.',
        },
      },
      {
        q: {
          fr: 'Peut-on régler en euros à Prague, ou faut-il des couronnes tchèques ?',
          en: 'Can I pay in euros in Prague, or do I need Czech koruna?',
        },
        a: {
          fr: 'La monnaie locale est la couronne tchèque (CZK). Nos prestations sont facturées en euros, à prix fixe et sans surprise, réglables par carte à l’avance. Pour vos achats sur place, votre chauffeur vous indique volontiers les bureaux de change fiables du centre.',
          en: 'The local currency is the Czech koruna (CZK). Our services are billed in euros at a fixed price, payable by card in advance. For purchases in town, your chauffeur will gladly point you to reliable exchange offices in the centre.',
        },
      },
    ],
    nearby: ['vienna', 'bratislava', 'krakow', 'budapest'],
  },
  {
    slug: 'vienna',
    name: { fr: 'Vienne', en: 'Vienna' },
    country: { fr: 'Autriche', en: 'Austria' },
    region: 'alps-attractions',
    airport: 'Vienne-Schwechat (VIE)',
    airportTransfer: {
      fr: 'L’aéroport de Vienne-Schwechat (VIE) se trouve à 18 km au sud-est du centre : comptez 25 à 30 minutes pour rejoindre le Ring ou la cathédrale Saint-Étienne. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol pour ajuster l’heure de prise en charge.',
      en: 'Vienna Schwechat Airport (VIE) lies 18 km south-east of the centre: allow 25 to 30 minutes to reach the Ring or St Stephen’s Cathedral. Your chauffeur waits in the arrivals hall with a name board and tracks your flight to adjust the pick-up time.',
    },
    intro: {
      fr: [
        'Capitale impériale, Vienne aligne le long du Ring l’Opéra d’État, la Hofburg, les musées jumeaux de Marie-Thérèse et le Burgtheater. Votre **chauffeur privé à Vienne** dessert les palais et les salles de concert, les sièges des organisations internationales du Danube comme les cafés historiques du centre — Sacher, Central, Demel. Transferts aéroport à prix fixe, mise à disposition à l’heure pour vos rendez-vous, berlines et vans premium avec chauffeurs discrets.',
        'Autour de Vienne, l’Autriche se découvre en étoile : **la vallée de la Wachau et ses vignobles en terrasses** à une heure, l’abbaye de Melk, le lac de Neusiedl, et Bratislava à soixante kilomètres à peine. De mai à septembre, les soirées aux concerts de Schönbrunn s’enchaînent avec un retour de nuit assuré ; en décembre, votre chauffeur vous dépose au plus près des marchés de Noël du Rathausplatz.',
      ],
      en: [
        'The imperial capital, Vienna lines the Ring with the State Opera, the Hofburg, Maria Theresa’s twin museums and the Burgtheater. Your **private chauffeur in Vienna** serves the palaces and concert halls, the international organisations along the Danube and the historic cafés of the centre — Sacher, Central, Demel. Fixed-price airport transfers, hourly hire for your appointments, premium sedans and vans with discreet chauffeurs.',
        'Around Vienna, Austria opens in every direction: **the Wachau Valley and its terraced vineyards** an hour away, Melk Abbey, Lake Neusiedl, and Bratislava barely sixty kilometres distant. From May to September, evenings at the Schönbrunn concerts end with a guaranteed late-night return; in December, your chauffeur drops you as close as possible to the Christmas markets on Rathausplatz.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Schönbrunn et la Vienne impériale', en: 'Schönbrunn and imperial Vienna' },
        teaser: {
          fr: 'Le château d’été des Habsbourg, la Gloriette et ses jardins, puis la Hofburg, la crypte des Capucins et le Ring au complet. Pause pâtisserie chez Demel ou au café Sacher, itinéraire modulable à votre rythme.',
          en: 'The Habsburgs’ summer palace, the Gloriette and its gardens, then the Hofburg, the Imperial Crypt and the full sweep of the Ring. A pastry stop at Demel or Café Sacher, with an itinerary paced to suit you.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Vallée de la Wachau et abbaye de Melk', en: 'Wachau Valley and Melk Abbey' },
        teaser: {
          fr: 'À une heure à l’ouest, les vignobles en terrasses classés UNESCO entre Melk et Krems : l’abbaye baroque, Dürnstein et sa tour bleue, dégustation de grüner veltliner chez un vigneron des coteaux du Danube.',
          en: 'An hour west, the UNESCO-listed terraced vineyards between Melk and Krems: the Baroque abbey, Dürnstein and its blue tower, a Grüner Veltliner tasting with a winegrower above the Danube.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Bratislava, l’escapade danubienne', en: 'Bratislava, the Danube excursion' },
        teaser: {
          fr: 'À 60 km de Vienne, la capitale slovaque et son château dominant le Danube, la vieille ville et la porte Saint-Michel. Deux capitales en une journée — un itinéraire que peu de villes européennes permettent.',
          en: '60 km from Vienna, the Slovak capital with its castle above the Danube, the Old Town and St Michael’s Gate. Two capitals in a single day — an itinerary few European cities can offer.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Soirée à l’Opéra ou au Musikverein', en: 'Evening at the Opera or the Musikverein' },
        teaser: {
          fr: 'Dépose devant l’Opéra d’État ou la salle dorée du Musikverein, dîner avant ou après la représentation — Steirereck ou Zum Schwarzen Kameel —, véhicule en attente pour un retour immédiat à votre hôtel.',
          en: 'Drop-off at the State Opera or the golden hall of the Musikverein, dinner before or after the performance — Steirereck or Zum Schwarzen Kameel — with the vehicle on standby for an immediate return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
      {
        title: { fr: 'Lac de Neusiedl et vignobles du Burgenland', en: 'Lake Neusiedl and the Burgenland vineyards' },
        teaser: {
          fr: 'À 50 minutes au sud-est, le lac de steppe classé UNESCO, Rust et ses nids de cigognes, les grands liquoreux de Ruster Ausbruch. Déjeuner au bord de l’eau et caves familiales, retour par Eisenstadt et le palais Esterházy.',
          en: '50 minutes south-east, the UNESCO steppe lake, Rust with its stork nests, and the great sweet wines of Ruster Ausbruch. Lunch by the water, family cellars, returning via Eisenstadt and the Esterházy Palace.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Vienne-Schwechat et le centre-ville ?',
          en: 'How much does a transfer between Vienna Schwechat Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Vienne-Schwechat (VIE) et le centre de Vienne est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Vienna Schwechat (VIE) and central Vienna is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des trajets directs Vienne–Bratislava ou Vienne–Budapest ?',
          en: 'Do you offer direct journeys from Vienna to Bratislava or Budapest?',
        },
        a: {
          fr: 'Oui. Bratislava se rejoint en 50 minutes environ et Budapest en 2 h 30 par autoroute. Ces trajets inter-capitales sont devisés à l’avance, à prix fixe, avec vignettes autoroutières et autorisations de circulation prises en charge par nos soins.',
          en: 'Yes. Bratislava is around 50 minutes away and Budapest 2.5 hours by motorway. These inter-capital journeys are quoted in advance at a fixed price, with motorway vignettes and cross-border permits handled by us.',
        },
      },
      {
        q: {
          fr: 'L’aéroport de Vienne peut-il servir de porte d’entrée pour un séjour à Bratislava ?',
          en: 'Can Vienna Airport serve as the gateway for a stay in Bratislava?',
        },
        a: {
          fr: 'Absolument. Vienne-Schwechat est à une cinquantaine de kilomètres de Bratislava et offre bien plus de liaisons long-courriers que l’aéroport slovaque. Votre chauffeur vous accueille à VIE et vous dépose au centre de Bratislava en moins d’une heure, à prix fixe.',
          en: 'Absolutely. Vienna Schwechat is some fifty kilometres from Bratislava and offers far more long-haul connections than the Slovak airport. Your chauffeur meets you at VIE and drops you in central Bratislava in under an hour, at a fixed price.',
        },
      },
    ],
    nearby: ['bratislava', 'budapest', 'prague', 'ljubljana'],
  },
  {
    slug: 'budapest',
    name: { fr: 'Budapest', en: 'Budapest' },
    country: { fr: 'Hongrie', en: 'Hungary' },
    region: 'alps-attractions',
    airport: 'Budapest-Ferenc-Liszt (BUD)',
    airportTransfer: {
      fr: 'L’aéroport de Budapest-Ferenc-Liszt (BUD) se situe à 22 km au sud-est du centre : comptez 30 à 40 minutes pour rejoindre le Parlement ou le quartier du château de Buda. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Budapest Ferenc Liszt Airport (BUD) lies 22 km south-east of the centre: allow 30 to 40 minutes to reach the Parliament or the Buda Castle district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'De part et d’autre du Danube, Budapest oppose le Parlement néogothique de Pest au bastion des Pêcheurs et au château de Buda. Votre **chauffeur privé à Budapest** franchit le pont des Chaînes entre les deux rives, dessert les bains Széchenyi et Gellért, l’avenue Andrássy et l’Opéra, en berline ou van premium. Transferts aéroport à prix fixe, mise à disposition à l’heure, chauffeurs rompus aux quais et aux collines de Buda.',
        'Les environs prolongent le séjour avec naturel : **la boucle du Danube — Szentendre, Visegrád, Esztergom** — se parcourt en une journée, le lac Balaton et les vignobles de Tokaj s’ouvrent aux amateurs de vin. L’été, les terrasses des ruin bars du quartier juif battent leur plein jusqu’à l’aube — retour de nuit assuré ; l’hiver, les bains fumants et les marchés de Noël de la place Vörösmarty imposent leurs propres horaires.',
      ],
      en: [
        'Facing each other across the Danube, Budapest sets Pest’s neo-Gothic Parliament against the Fishermen’s Bastion and Buda Castle. Your **private chauffeur in Budapest** crosses the Chain Bridge between the two banks, serves the Széchenyi and Gellért baths, Andrássy Avenue and the Opera, in a premium sedan or van. Fixed-price airport transfers, hourly hire, and chauffeurs at home on the embankments and the Buda hills.',
        'The surroundings extend the stay effortlessly: **the Danube Bend — Szentendre, Visegrád, Esztergom** — makes a natural day tour, while Lake Balaton and the Tokaj vineyards call to wine lovers. In summer, the ruin-bar terraces of the Jewish quarter run until dawn — late-night return guaranteed; in winter, the steaming baths and the Christmas markets on Vörösmarty Square set a rhythm of their own.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Buda et Pest, les deux rives', en: 'Buda and Pest, the two banks' },
        teaser: {
          fr: 'Le château de Buda et le bastion des Pêcheurs, la colline Gellért et sa citadelle, puis le Parlement, la basilique Saint-Étienne et l’avenue Andrássy côté Pest. Panoramas sur le Danube à chaque étape.',
          en: 'Buda Castle and the Fishermen’s Bastion, Gellért Hill and its citadel, then the Parliament, St Stephen’s Basilica and Andrássy Avenue on the Pest side. Danube panoramas at every stop.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Boucle du Danube — Szentendre, Visegrád, Esztergom', en: 'Danube Bend — Szentendre, Visegrád, Esztergom' },
        teaser: {
          fr: 'Le village d’artistes de Szentendre, la forteresse de Visegrád dominant le fleuve, puis la basilique d’Esztergom — la plus grande église de Hongrie — face à la Slovaquie. Déjeuner au bord de l’eau.',
          en: 'The artists’ village of Szentendre, the Visegrád fortress high above the river, then Esztergom Basilica — Hungary’s largest church — facing Slovakia. Lunch at the water’s edge.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Bains Széchenyi ou Gellért en privé', en: 'Széchenyi or Gellért baths in comfort' },
        teaser: {
          fr: 'Dépose à l’ouverture aux bains Széchenyi — les grands bassins extérieurs fumants du Bois-de-Ville — ou au décor Art nouveau du Gellért. Votre chauffeur vous attend, peignoirs et créneaux réservés à l’avance.',
          en: 'Drop-off at opening time at the Széchenyi baths — the great steaming outdoor pools of the City Park — or the Art Nouveau setting of the Gellért. Your chauffeur waits; robes and time slots booked ahead.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Vignobles de Tokaj', en: 'Tokaj vineyards' },
        teaser: {
          fr: 'À 2 h 30 au nord-est, la région du tokaji aszú classée UNESCO : caves creusées dans le tuf, dégustations chez les grands domaines, déjeuner vigneron à Mád ou Tarcal. Le « vin des rois » à sa source.',
          en: '2.5 hours north-east, the UNESCO-listed home of Tokaji aszú: cellars cut into volcanic tuff, tastings at leading estates, a winegrower’s lunch in Mád or Tarcal. The “wine of kings” at its source.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '990',
      },
      {
        title: { fr: 'Soirée danubienne, opéra et dîner', en: 'Danube evening, opera and dinner' },
        teaser: {
          fr: 'Dépose devant l’Opéra d’État hongrois de l’avenue Andrássy, dîner chez Onyx ou Costes — étoilés —, puis les ponts et le Parlement illuminés depuis les quais de Buda. Véhicule à disposition toute la soirée.',
          en: 'Drop-off at the Hungarian State Opera on Andrássy Avenue, dinner at Onyx or Costes — both starred — then the illuminated bridges and Parliament seen from the Buda embankment. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '400',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Budapest-Ferenc-Liszt et le centre-ville ?',
          en: 'How much does a transfer between Budapest Ferenc Liszt Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Budapest-Ferenc-Liszt (BUD) et le centre de Budapest est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Budapest Ferenc Liszt (BUD) and central Budapest is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Peut-on relier Budapest à Vienne ou Bratislava avec votre chauffeur ?',
          en: 'Can I travel from Budapest to Vienna or Bratislava with your chauffeur?',
        },
        a: {
          fr: 'Oui. Budapest–Vienne se parcourt en 2 h 30 environ et Budapest–Bratislava en 2 heures, par autoroute. Ces trajets sont devisés à l’avance à prix fixe, avec arrêts possibles à Győr ou au bord du Danube, dans un véhicule autorisé dans les trois pays.',
          en: 'Yes. Budapest–Vienna takes around 2.5 hours and Budapest–Bratislava about 2, by motorway. These journeys are quoted in advance at a fixed price, with optional stops in Győr or along the Danube, in a vehicle authorised in all three countries.',
        },
      },
      {
        q: {
          fr: 'La Hongrie utilise-t-elle l’euro ?',
          en: 'Does Hungary use the euro?',
        },
        a: {
          fr: 'Non, la monnaie locale est le forint (HUF). Nos prestations sont facturées en euros, à prix fixe et réglables par carte à l’avance — vous n’avez donc aucun change à prévoir pour vos trajets. Pour le reste du séjour, la carte bancaire est acceptée presque partout à Budapest.',
          en: 'No, the local currency is the forint (HUF). Our services are billed in euros at a fixed price, payable by card in advance — so no currency exchange is needed for your journeys. Elsewhere, cards are accepted almost everywhere in Budapest.',
        },
      },
    ],
    nearby: ['vienna', 'bratislava', 'zagreb', 'prague'],
  },
  {
    slug: 'warsaw',
    name: { fr: 'Varsovie', en: 'Warsaw' },
    country: { fr: 'Pologne', en: 'Poland' },
    region: 'alps-attractions',
    airport: 'Varsovie-Chopin (WAW)',
    airportTransfer: {
      fr: 'L’aéroport de Varsovie-Chopin (WAW) se trouve à 10 km au sud-ouest du centre : comptez 20 à 30 minutes pour rejoindre la place du Château ou le quartier d’affaires de Śródmieście. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Warsaw Chopin Airport (WAW) lies 10 km south-west of the centre: allow 20 to 30 minutes to reach Castle Square or the Śródmieście business district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Rasée en 1944 puis reconstruite pierre par pierre, la vieille ville de Varsovie — classée à l’UNESCO — fait face aux tours de verre d’une capitale économique en plein essor. Votre **chauffeur privé à Varsovie** relie l’aéroport Chopin aux hôtels du centre, dessert le château royal, le parc Łazienki et ses concerts Chopin, comme les sièges d’entreprises de la rue Emilii Plater. Prix fixes, berlines et vans premium, chauffeurs anglophones sur demande.',
        'Au départ de Varsovie, la Mazovie et au-delà se prêtent à l’excursion : **Żelazowa Wola, maison natale de Chopin**, à une heure à l’ouest ; le palais de Wilanów aux portes de la ville ; Cracovie à trois heures par autoroute pour qui souhaite relier les deux capitales historiques. L’été, les concerts en plein air du parc Łazienki rythment les dimanches ; l’hiver appelle plutôt musées, café-culture et scène gastronomique en plein renouveau.',
      ],
      en: [
        'Razed in 1944 and rebuilt stone by stone, Warsaw’s Old Town — a UNESCO site — faces the glass towers of a booming economic capital. Your **private chauffeur in Warsaw** links Chopin Airport to the city-centre hotels, serves the Royal Castle, Łazienki Park and its Chopin recitals, and the corporate headquarters along Emilii Plater Street. Fixed prices, premium sedans and vans, English-speaking chauffeurs on request.',
        'From Warsaw, Mazovia and beyond reward the day trip: **Żelazowa Wola, Chopin’s birthplace**, an hour to the west; the Wilanów Palace on the city’s edge; Krakow three hours away by motorway for those linking Poland’s two historic capitals. In summer, the open-air concerts in Łazienki Park set the rhythm of Sundays; winter favours museums, café culture and a restaurant scene in full renaissance.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Vieille ville et château royal', en: 'Old Town and the Royal Castle' },
        teaser: {
          fr: 'La place du Château et la colonne de Sigismond, le Rynek reconstruit à l’identique, la voie Royale jusqu’au palais présidentiel. Votre chauffeur vous dépose aux portes de la zone piétonne et vous retrouve à la sortie.',
          en: 'Castle Square and Sigismund’s Column, the faithfully rebuilt Rynek, the Royal Route down to the Presidential Palace. Your chauffeur drops you at the edge of the pedestrian zone and meets you on the way out.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Żelazowa Wola, sur les pas de Chopin', en: 'Żelazowa Wola, in Chopin’s footsteps' },
        teaser: {
          fr: 'À 55 km à l’ouest, le manoir natal de Frédéric Chopin et son parc au bord de l’Utrata ; récitals en saison. Combinez avec la cathédrale gothique de Brochów où le compositeur fut baptisé.',
          en: '55 km west, the manor where Frédéric Chopin was born, set in a park on the Utrata; recitals in season. Pair it with the fortified Gothic church of Brochów where the composer was baptised.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Palais de Wilanów et parc Łazienki', en: 'Wilanów Palace and Łazienki Park' },
        teaser: {
          fr: 'Le « Versailles polonais » de Jean III Sobieski et ses jardins baroques, puis le palais sur l’Île et le monument Chopin du parc Łazienki. Deux résidences royales en une journée, sans logistique.',
          en: 'Jan III Sobieski’s “Polish Versailles” and its Baroque gardens, then the Palace on the Isle and the Chopin monument in Łazienki Park. Two royal residences in one day, logistics-free.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '550',
      },
      {
        title: { fr: 'Musée POLIN et mémoire du ghetto', en: 'POLIN Museum and the Ghetto memorial' },
        teaser: {
          fr: 'Le musée de l’Histoire des Juifs polonais, primé pour sa muséographie, le monument aux Héros du ghetto et l’Umschlagplatz. Un parcours de mémoire mené à votre rythme, avec guide privé sur demande.',
          en: 'The award-winning Museum of the History of Polish Jews, the Ghetto Heroes Monument and the Umschlagplatz. A remembrance itinerary taken at your own pace, with a private guide on request.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Soirée varsovienne, opéra et nouvelle gastronomie', en: 'Warsaw evening, opera and new gastronomy' },
        teaser: {
          fr: 'Dépose au Teatr Wielki — l’une des plus grandes scènes d’opéra d’Europe —, dîner chez Bottiglieria 1881 à Varsovie ou aux tables du quartier de Powiśle, puis la ville illuminée depuis la rive de la Vistule.',
          en: 'Drop-off at the Teatr Wielki — one of Europe’s largest opera stages — dinner at the city’s starred tables or in the Powiśle district, then the illuminated skyline from the Vistula bank.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Varsovie-Chopin et le centre-ville ?',
          en: 'How much does a transfer between Warsaw Chopin Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Varsovie-Chopin (WAW) et le centre de Varsovie est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Warsaw Chopin (WAW) and central Warsaw is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer le trajet Varsovie–Cracovie par la route ?',
          en: 'Can you drive me from Warsaw to Krakow?',
        },
        a: {
          fr: 'Oui. Varsovie–Cracovie se parcourt en 3 heures environ par l’autoroute S7, avec arrêts à la demande — Kielce ou le château de Chęciny. Le trajet est devisé à l’avance à prix fixe, et peut se transformer en itinéraire de deux jours avec étape.',
          en: 'Yes. Warsaw–Krakow takes around 3 hours on the S7 motorway, with stops on request — Kielce or Chęciny Castle. The journey is quoted in advance at a fixed price and can become a two-day itinerary with an overnight stop.',
        },
      },
      {
        q: {
          fr: 'La Pologne utilise-t-elle l’euro ?',
          en: 'Does Poland use the euro?',
        },
        a: {
          fr: 'Non, la monnaie locale est le złoty (PLN). Nos prestations sont facturées en euros, à prix fixe et réglables par carte à l’avance, sans change à prévoir. Sur place, la carte bancaire est acceptée quasiment partout, y compris pour de petits montants.',
          en: 'No, the local currency is the złoty (PLN). Our services are billed in euros at a fixed price, payable by card in advance, with no exchange needed. In town, cards are accepted almost everywhere, even for small amounts.',
        },
      },
    ],
    nearby: ['krakow', 'vilnius', 'prague'],
  },
  {
    slug: 'krakow',
    name: { fr: 'Cracovie', en: 'Krakow' },
    country: { fr: 'Pologne', en: 'Poland' },
    region: 'alps-attractions',
    airport: 'Cracovie-Jean-Paul-II (KRK)',
    airportTransfer: {
      fr: 'L’aéroport de Cracovie-Jean-Paul-II (KRK) se situe à 15 km à l’ouest du centre : comptez 25 à 30 minutes pour rejoindre le Rynek Główny ou le quartier de Kazimierz. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Krakow John Paul II Airport (KRK) lies 15 km west of the centre: allow 25 to 30 minutes to reach the Rynek Główny or the Kazimierz district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale royale épargnée par la guerre, Cracovie a conservé intacts le Rynek Główny — la plus grande place médiévale d’Europe —, la halle aux Draps et la colline du Wawel, château et cathédrale des rois de Pologne. Votre **chauffeur privé à Cracovie** dessert la vieille ville, le quartier juif de Kazimierz et ses synagogues, les hôtels du centre et l’aéroport Jean-Paul-II, à prix fixe et en toute discrétion.',
        'Les environs comptent parmi les plus visités de Pologne : **les mines de sel de Wieliczka**, classées à l’UNESCO, à trente minutes, et le mémorial d’Auschwitz-Birkenau à une heure et quart — un lieu de mémoire que votre chauffeur dessert avec le recueillement qui s’impose, créneaux réservés à l’avance. Vers le sud, Zakopane et les Tatras offrent neige l’hiver et sentiers l’été, à deux heures de route.',
      ],
      en: [
        'A royal capital spared by the war, Krakow has kept intact the Rynek Główny — Europe’s largest medieval square — the Cloth Hall and Wawel Hill, castle and cathedral of Poland’s kings. Your **private chauffeur in Krakow** serves the Old Town, the Jewish district of Kazimierz and its synagogues, the city-centre hotels and John Paul II Airport, at a fixed price and with complete discretion.',
        'The surroundings are among the most visited in Poland: **the Wieliczka salt mines**, a UNESCO site, thirty minutes away, and the Auschwitz-Birkenau Memorial at an hour and a quarter — a place of remembrance your chauffeur serves with the solemnity it demands, entry slots booked in advance. To the south, Zakopane and the Tatras offer snow in winter and trails in summer, two hours by road.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Wawel, Rynek et Kazimierz', en: 'Wawel, the Rynek and Kazimierz' },
        teaser: {
          fr: 'La colline du Wawel — château, cathédrale, tombeaux royaux —, la halle aux Draps et la basilique Sainte-Marie, puis les synagogues et les cours de Kazimierz. Dépose aux portes de chaque zone piétonne.',
          en: 'Wawel Hill — castle, cathedral, royal tombs — the Cloth Hall and St Mary’s Basilica, then the synagogues and courtyards of Kazimierz. Drop-off at the edge of each pedestrian zone.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '550',
      },
      {
        title: { fr: 'Mémorial d’Auschwitz-Birkenau', en: 'Auschwitz-Birkenau Memorial' },
        teaser: {
          fr: 'À 70 km à l’ouest de Cracovie, l’ancien camp devenu musée d’État et lieu de mémoire. Créneaux d’entrée et guide agréé réservés à l’avance ; votre chauffeur vous attend sur place pour un retour sans attente.',
          en: '70 km west of Krakow, the former camp, now a state museum and place of remembrance. Entry slots and a licensed guide booked in advance; your chauffeur waits on site for a prompt return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Mines de sel de Wieliczka', en: 'Wieliczka salt mines' },
        teaser: {
          fr: 'À 30 minutes du centre, neuf siècles d’exploitation, des galeries à 135 mètres sous terre et la chapelle Sainte-Kinga entièrement sculptée dans le sel. Billets coupe-file et guide francophone sur demande.',
          en: '30 minutes from the centre, nine centuries of mining, galleries 135 metres underground and the St Kinga chapel carved entirely from salt. Skip-the-line tickets and an English-speaking guide on request.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Zakopane et les Tatras', en: 'Zakopane and the Tatras' },
        teaser: {
          fr: 'À 110 km au sud, la « capitale d’hiver » de la Pologne : chalets en bois de style góral, funiculaire de Gubałówka, lac de Morskie Oko en option. Ski l’hiver, randonnée l’été, oscypek fumé toute l’année.',
          en: '110 km south, Poland’s “winter capital”: timber chalets in górale style, the Gubałówka funicular, Morskie Oko lake as an option. Skiing in winter, hiking in summer, smoked oscypek all year round.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Soirée à Kazimierz', en: 'Kazimierz evening' },
        teaser: {
          fr: 'Dîner dans le quartier juif — tables klezmer de la rue Szeroka ou nouvelle scène de la rue Józefa —, puis les quais de la Vistule et le Wawel illuminé. Dépose devant chaque adresse, véhicule en attente.',
          en: 'Dinner in the Jewish quarter — klezmer tables on Szeroka Street or the new wave along Józefa Street — then the Vistula embankment and the illuminated Wawel. Door-to-door drop-offs, vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Cracovie-Jean-Paul-II et le centre-ville ?',
          en: 'How much does a transfer between Krakow John Paul II Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Cracovie-Jean-Paul-II (KRK) et le centre de Cracovie est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Krakow John Paul II (KRK) and central Krakow is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Comment organisez-vous une visite du mémorial d’Auschwitz-Birkenau depuis Cracovie ?',
          en: 'How do you organise a visit to the Auschwitz-Birkenau Memorial from Krakow?',
        },
        a: {
          fr: 'Le mémorial impose des créneaux d’entrée réservés à l’avance et, à certaines heures, une visite guidée obligatoire. Nous réservons vos billets et un guide agréé dans votre langue, votre chauffeur vous dépose à l’entrée du site et vous attend pendant toute la visite — comptez une journée avec le trajet.',
          en: 'The memorial requires pre-booked entry slots and, at certain times, a mandatory guided visit. We reserve your tickets and a licensed guide in your language; your chauffeur drops you at the site entrance and waits throughout the visit — allow a full day including the drive.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Wieliczka et Auschwitz-Birkenau le même jour ?',
          en: 'Can Wieliczka and Auschwitz-Birkenau be combined in a single day?',
        },
        a: {
          fr: 'C’est possible mais dense : les deux sites demandent chacun deux à trois heures de visite, plus les trajets. Nous recommandons de les répartir sur deux jours ; si votre séjour est court, nous construisons un itinéraire combiné avec des créneaux compatibles, en commençant tôt le matin.',
          en: 'It is possible but demanding: each site takes two to three hours to visit, plus the drives. We recommend spreading them over two days; if your stay is short, we build a combined itinerary with compatible time slots, starting early in the morning.',
        },
      },
    ],
    nearby: ['warsaw', 'bratislava', 'vienna', 'prague'],
  },
  {
    slug: 'bratislava',
    name: { fr: 'Bratislava', en: 'Bratislava' },
    country: { fr: 'Slovaquie', en: 'Slovakia' },
    region: 'alps-attractions',
    airport: 'Bratislava (BTS)',
    airportTransfer: {
      fr: 'L’aéroport de Bratislava (BTS) se trouve à 12 km au nord-est du centre : comptez 20 minutes pour rejoindre la vieille ville. L’aéroport de Vienne-Schwechat (VIE), à une soixantaine de kilomètres, se rejoint en 50 minutes environ. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Bratislava Airport (BTS) lies 12 km north-east of the centre: allow 20 minutes to reach the Old Town. Vienna Schwechat Airport (VIE), some sixty kilometres away, is around 50 minutes by road. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale à taille humaine posée sur le Danube, Bratislava se découvre depuis son château — quatre tours blanches dominant le fleuve — avant de plonger dans la vieille ville : porte Saint-Michel, palais Primatial, cathédrale Saint-Martin où furent couronnés les rois de Hongrie. Votre **chauffeur privé à Bratislava** dessert les aéroports de Bratislava et de Vienne, les hôtels du centre et les sites du bord du Danube, à prix fixe.',
        'La position de Bratislava est unique en Europe : **Vienne est à cinquante minutes**, Budapest à deux heures, et le triangle des trois capitales danubiennes se parcourt en une seule journée de route. Aux beaux jours, le château de Devín au confluent de la Morava et les vignobles des Petites Carpates — Modra, Pezinok — prolongent l’escapade ; l’hiver, les marchés de Noël de la place principale animent la vieille ville.',
      ],
      en: [
        'A human-scale capital set on the Danube, Bratislava is best first seen from its castle — four white towers above the river — before descending into the Old Town: St Michael’s Gate, the Primate’s Palace, St Martin’s Cathedral where Hungary’s kings were crowned. Your **private chauffeur in Bratislava** serves both Bratislava and Vienna airports, the city-centre hotels and the sites along the Danube, at a fixed price.',
        'Bratislava’s position is unique in Europe: **Vienna is fifty minutes away**, Budapest two hours, and the triangle of the three Danube capitals can be driven in a single day. In fine weather, Devín Castle at the confluence of the Morava and the Small Carpathian vineyards — Modra, Pezinok — extend the excursion; in winter, the Christmas markets on the main square bring the Old Town to life.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Château et vieille ville de Bratislava', en: 'Bratislava Castle and Old Town' },
        teaser: {
          fr: 'Montée au château pour le panorama sur le Danube et trois pays, puis la porte Saint-Michel, la place principale et le palais Primatial. Dépose aux portes de la zone piétonne, reprise à l’heure convenue.',
          en: 'Up to the castle for the panorama over the Danube and three countries, then St Michael’s Gate, the main square and the Primate’s Palace. Drop-off at the pedestrian zone, pick-up at the agreed time.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Château de Devín et confluent de la Morava', en: 'Devín Castle and the Morava confluence' },
        teaser: {
          fr: 'À 12 km à l’ouest, la forteresse en ruine dressée au confluent de la Morava et du Danube, face à l’Autriche — haut lieu de l’histoire slovaque et ancien poste du rideau de fer. Retour par les berges du fleuve.',
          en: '12 km west, the ruined fortress above the meeting of the Morava and the Danube, facing Austria — a landmark of Slovak history and a former Iron Curtain outpost. Return along the riverbank.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Route des vins des Petites Carpates', en: 'Small Carpathian wine route' },
        teaser: {
          fr: 'Svätý Jur, Pezinok et Modra à trente minutes du centre : caves familiales, cépages grüner veltliner et frankovka, céramique de Modra. Déjeuner vigneron et dégustations pendant que votre chauffeur conduit.',
          en: 'Svätý Jur, Pezinok and Modra thirty minutes from the centre: family cellars, Grüner Veltliner and Frankovka grapes, Modra ceramics. A winegrower’s lunch and tastings while your chauffeur drives.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Vienne depuis Bratislava', en: 'Vienna from Bratislava' },
        teaser: {
          fr: 'À 60 km à l’ouest, la capitale autrichienne pour une journée : Schönbrunn, le Ring, la Hofburg et un café viennois avant le retour. Deux capitales, une seule journée, aucune logistique à votre charge.',
          en: '60 km west, the Austrian capital for the day: Schönbrunn, the Ring, the Hofburg and a Viennese café before the return. Two capitals, one day, none of the logistics.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Soirée danubienne à Bratislava', en: 'Danube evening in Bratislava' },
        teaser: {
          fr: 'Dîner dans la vieille ville ou au restaurant UFO perché sur le pont SNP, vue sur le château illuminé, puis les quais du Danube de nuit. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Dinner in the Old Town or at the UFO restaurant atop the SNP Bridge, views of the illuminated castle, then the Danube embankment by night. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '300',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Bratislava ou de Vienne et le centre-ville ?',
          en: 'How much does a transfer between Bratislava or Vienna Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé depuis Bratislava (BTS) comme depuis Vienne-Schwechat (VIE) est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer from Bratislava (BTS) or from Vienna Schwechat (VIE) is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Vaut-il mieux atterrir à Bratislava ou à Vienne ?',
          en: 'Is it better to fly into Bratislava or Vienna?',
        },
        a: {
          fr: 'Vienne-Schwechat offre beaucoup plus de liaisons, notamment long-courriers, et se trouve à 50 minutes de Bratislava par autoroute. Bratislava (BTS) reste pratique pour les vols low-cost européens. Dans les deux cas, votre chauffeur vous accueille à l’arrivée, à prix fixe.',
          en: 'Vienna Schwechat offers far more connections, especially long-haul, and is 50 minutes from Bratislava by motorway. Bratislava (BTS) remains convenient for European low-cost flights. Either way, your chauffeur meets you on arrival, at a fixed price.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Vienne, Bratislava et Budapest lors du même séjour ?',
          en: 'Can Vienna, Bratislava and Budapest be visited in one trip?',
        },
        a: {
          fr: 'Oui, c’est l’un de nos itinéraires les plus demandés : les trois capitales danubiennes se suivent le long du fleuve — Vienne–Bratislava en 50 minutes, Bratislava–Budapest en 2 heures. Nous construisons l’itinéraire complet avec le même chauffeur, bagages à bord, hôtels desservis porte à porte.',
          en: 'Yes, it is one of our most requested itineraries: the three Danube capitals follow the river — Vienna–Bratislava in 50 minutes, Bratislava–Budapest in 2 hours. We build the full route with the same chauffeur, luggage on board, hotels served door to door.',
        },
      },
    ],
    nearby: ['vienna', 'budapest', 'prague', 'krakow'],
  },
  {
    slug: 'ljubljana',
    name: { fr: 'Ljubljana', en: 'Ljubljana' },
    country: { fr: 'Slovénie', en: 'Slovenia' },
    region: 'alps-attractions',
    airport: 'Ljubljana-Jože-Pučnik (LJU)',
    airportTransfer: {
      fr: 'L’aéroport de Ljubljana-Jože-Pučnik (LJU) se situe à 26 km au nord-ouest du centre : comptez 25 à 30 minutes par autoroute pour rejoindre le Triple Pont ou le quartier du château. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Ljubljana Jože Pučnik Airport (LJU) lies 26 km north-west of the centre: allow 25 to 30 minutes by motorway to reach the Triple Bridge or the castle district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Petite capitale verte traversée par la Ljubljanica, Ljubljana doit son visage à l’architecte Jože Plečnik : Triple Pont, marché aux colonnades, bibliothèque nationale. Au-dessus des façades baroques, le château veille sur les terrasses des quais. Votre **chauffeur privé à Ljubljana** relie l’aéroport Jože-Pučnik au centre — largement piéton — avec dépose au plus près des hôtels, et dessert toute la Slovénie en berline ou van premium, à prix fixe.',
        'La Slovénie entière tient dans un rayon d’une heure et demie : **le lac de Bled et son île à l’église** à quarante minutes, les gorges de Vintgar, le lac de Bohinj plus sauvage, les grottes de Postojna et le château de Predjama vers le sud. L’été, la côte adriatique et Piran s’ajoutent à l’itinéraire ; l’hiver, Kranjska Gora et les Alpes juliennes offrent la neige à moins d’une heure de route.',
      ],
      en: [
        'A small green capital threaded by the Ljubljanica, Ljubljana owes its face to the architect Jože Plečnik: the Triple Bridge, the colonnaded market, the National Library. Above the Baroque façades, the castle watches over the riverside terraces. Your **private chauffeur in Ljubljana** links Jože Pučnik Airport to the largely pedestrian centre — with drop-off as close as possible to the hotels — and serves all of Slovenia in a premium sedan or van, at a fixed price.',
        'The whole of Slovenia fits within a ninety-minute radius: **Lake Bled and its island church** forty minutes away, the Vintgar Gorge, wilder Lake Bohinj, the Postojna Caves and Predjama Castle to the south. In summer, the Adriatic coast and Piran join the itinerary; in winter, Kranjska Gora and the Julian Alps put snow less than an hour from the city.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Lac de Bled et gorges de Vintgar', en: 'Lake Bled and Vintgar Gorge' },
        teaser: {
          fr: 'À 40 minutes de Ljubljana, le lac émeraude, la traversée en pletna vers l’île et son église, le château médiéval sur sa falaise, puis les passerelles des gorges de Vintgar. Kremšnita — la crème de Bled — en terrasse.',
          en: '40 minutes from Ljubljana, the emerald lake, the pletna crossing to the island church, the clifftop medieval castle, then the walkways of Vintgar Gorge. Kremšnita — the Bled cream cake — on a terrace.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Grottes de Postojna et château de Predjama', en: 'Postojna Caves and Predjama Castle' },
        teaser: {
          fr: 'À 50 minutes au sud-ouest, 24 km de galeries karstiques parcourues en petit train souterrain, puis le château Renaissance encastré dans une falaise de 123 mètres. Billets coupe-file réservés à l’avance.',
          en: '50 minutes south-west, 24 km of karst galleries explored by underground train, then the Renaissance castle built into a 123-metre cliff. Skip-the-line tickets booked in advance.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Lac de Bohinj et Alpes juliennes', en: 'Lake Bohinj and the Julian Alps' },
        teaser: {
          fr: 'Le grand lac alpin du parc national du Triglav, la cascade de Savica, le téléphérique du Vogel pour le panorama sur les Alpes juliennes. Une Slovénie plus sauvage que Bled, à une heure de la capitale.',
          en: 'The great alpine lake of Triglav National Park, the Savica waterfall, the Vogel cable car for its Julian Alps panorama. A wilder Slovenia than Bled, one hour from the capital.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Piran et la côte adriatique', en: 'Piran and the Adriatic coast' },
        teaser: {
          fr: 'À une heure et quart, la plus vénitienne des villes slovènes : place Tartini, remparts, ruelles sur la presqu’île. Déjeuner de poissons face à la mer, salines de Sečovlje en option au retour.',
          en: 'An hour and a quarter away, the most Venetian of Slovene towns: Tartini Square, the walls, lanes along the peninsula. Seafood lunch facing the Adriatic, with the Sečovlje salt pans optional on the return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée sur les quais de la Ljubljanica', en: 'Evening on the Ljubljanica embankments' },
        teaser: {
          fr: 'Dîner aux meilleures tables de la capitale — la scène slovène s’est hissée au premier plan européen —, puis le château et le Triple Pont illuminés. Dépose au plus près des quais piétons, véhicule en attente.',
          en: 'Dinner at the capital’s finest tables — the Slovene scene now ranks among Europe’s best — then the illuminated castle and Triple Bridge. Drop-off as close as possible to the pedestrian quays, vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Ljubljana-Jože-Pučnik et le centre-ville ?',
          en: 'How much does a transfer between Ljubljana Jože Pučnik Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Ljubljana-Jože-Pučnik (LJU) et le centre de Ljubljana est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Ljubljana Jože Pučnik (LJU) and central Ljubljana is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter le lac de Bled et Postojna le même jour ?',
          en: 'Can Lake Bled and Postojna be visited on the same day?',
        },
        a: {
          fr: 'Oui, la Slovénie s’y prête : Bled le matin, Postojna et Predjama l’après-midi représentent environ 200 km de route au total. Nous réservons les billets des grottes sur un créneau compatible et votre chauffeur enchaîne les étapes pendant que vous profitez des sites.',
          en: 'Yes, Slovenia lends itself to it: Bled in the morning, Postojna and Predjama in the afternoon amount to roughly 200 km of driving in total. We book the cave tickets for a compatible slot and your chauffeur links the stages while you enjoy the sites.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous des trajets de Ljubljana vers Zagreb, Venise ou Vienne ?',
          en: 'Do you provide journeys from Ljubljana to Zagreb, Venice or Vienna?',
        },
        a: {
          fr: 'Oui. Zagreb est à 1 h 45, Venise à 2 h 30 et Vienne à 4 heures par autoroute. Ces trajets internationaux sont devisés à l’avance à prix fixe, vignettes et péages inclus, avec arrêts à la demande en cours de route.',
          en: 'Yes. Zagreb is 1 h 45 away, Venice 2.5 hours and Vienna 4 hours by motorway. These international journeys are quoted in advance at a fixed price, vignettes and tolls included, with stops on request along the way.',
        },
      },
    ],
    nearby: ['zagreb', 'vienna', 'split'],
  },
  {
    slug: 'zagreb',
    name: { fr: 'Zagreb', en: 'Zagreb' },
    country: { fr: 'Croatie', en: 'Croatia' },
    region: 'alps-attractions',
    airport: 'Zagreb-Franjo-Tuđman (ZAG)',
    airportTransfer: {
      fr: 'L’aéroport de Zagreb-Franjo-Tuđman (ZAG) se trouve à 15 km au sud-est du centre : comptez 20 à 30 minutes pour rejoindre la place Ban-Jelačić ou la ville haute. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Zagreb Franjo Tuđman Airport (ZAG) lies 15 km south-east of the centre: allow 20 to 30 minutes to reach Ban Jelačić Square or the Upper Town. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale continentale de la Croatie, Zagreb superpose la ville haute médiévale — église Saint-Marc au toit de tuiles vernissées, tour Lotrščak, cathédrale — et la ville basse austro-hongroise, ses parcs en fer à cheval et ses cafés. Votre **chauffeur privé à Zagreb** relie l’aéroport Franjo-Tuđman au centre, dessert le quartier d’affaires, le stade Maksimir et les collines de Medvednica, en berline ou van premium à prix fixe.',
        'Zagreb est aussi la porte des merveilles naturelles croates : **les lacs de Plitvice**, seize lacs en terrasses classés à l’UNESCO, à deux heures de route, les vignobles du Zagorje et le château de Trakošćan au nord, Ljubljana la slovène à moins de deux heures. L’été, la côte dalmate s’ouvre par l’autoroute A1 ; en décembre, l’Avent de Zagreb — plusieurs fois primé en Europe — transforme parcs et places en marché de Noël géant.',
      ],
      en: [
        'Croatia’s continental capital, Zagreb layers the medieval Upper Town — St Mark’s Church with its glazed-tile roof, the Lotrščak Tower, the cathedral — over the Austro-Hungarian Lower Town with its horseshoe of parks and its cafés. Your **private chauffeur in Zagreb** links Franjo Tuđman Airport to the centre and serves the business district, the Maksimir stadium and the Medvednica hills, in a premium sedan or van at a fixed price.',
        'Zagreb is also the gateway to Croatia’s natural wonders: **the Plitvice Lakes**, sixteen UNESCO-listed terraced lakes, two hours away by road, the Zagorje vineyards and Trakošćan Castle to the north, Slovene Ljubljana under two hours distant. In summer, the A1 motorway opens the Dalmatian coast; in December, Advent in Zagreb — repeatedly voted Europe’s best Christmas market — takes over the parks and squares.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Lacs de Plitvice', en: 'Plitvice Lakes' },
        teaser: {
          fr: 'À 130 km au sud, le parc national le plus célèbre de Croatie : seize lacs turquoise reliés par des cascades, passerelles de bois au ras de l’eau. Billets réservés à l’avance, départ matinal pour éviter l’affluence.',
          en: '130 km south, Croatia’s most celebrated national park: sixteen turquoise lakes linked by waterfalls, timber walkways skimming the water. Tickets booked ahead, early start to beat the crowds.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Ville haute et Zagreb austro-hongrois', en: 'Upper Town and Austro-Hungarian Zagreb' },
        teaser: {
          fr: 'Saint-Marc et son toit armorié, la porte de Pierre, le musée des Cœurs brisés, puis le fer à cheval de Lenuci et le marché Dolac. Dépose aux portes de la ville haute, funiculaire historique en option.',
          en: 'St Mark’s and its heraldic roof, the Stone Gate, the Museum of Broken Relationships, then the Lenuci Horseshoe and Dolac market. Drop-off at the Upper Town gates, historic funicular optional.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Zagorje — Trakošćan et Varaždin', en: 'Zagorje — Trakošćan and Varaždin' },
        teaser: {
          fr: 'Au nord de Zagreb, les collines vertes du Zagorje : le château romantique de Trakošćan sur son lac, puis Varaždin, ancienne capitale baroque de la Croatie. Déjeuner champêtre et štrukli au fromage en chemin.',
          en: 'North of Zagreb, the green Zagorje hills: the romantic lakeside castle of Trakošćan, then Varaždin, Croatia’s Baroque former capital. A country lunch and cheese štrukli along the way.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Vignobles de Plešivica', en: 'Plešivica vineyards' },
        teaser: {
          fr: 'À 30 minutes au sud-ouest, la « petite Champagne croate » : coteaux de Plešivica, caves familiales, méthode traditionnelle et rieslings frais. Dégustations commentées pendant que votre chauffeur conduit.',
          en: '30 minutes south-west, Croatia’s “little Champagne”: the Plešivica slopes, family cellars, traditional-method sparklings and crisp Rieslings. Guided tastings while your chauffeur drives.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Soirée zagreboise', en: 'Zagreb evening' },
        teaser: {
          fr: 'Dîner rue Tkalčićeva ou aux tables gastronomiques de la ville basse, puis la cathédrale et la ville haute illuminées depuis la promenade Strossmayer. Dépose devant chaque adresse, véhicule en attente.',
          en: 'Dinner on Tkalčićeva Street or at the Lower Town’s fine-dining tables, then the illuminated cathedral and Upper Town from the Strossmayer promenade. Door-to-door drop-offs, vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '300',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Zagreb-Franjo-Tuđman et le centre-ville ?',
          en: 'How much does a transfer between Zagreb Franjo Tuđman Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Zagreb-Franjo-Tuđman (ZAG) et le centre de Zagreb est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Zagreb Franjo Tuđman (ZAG) and central Zagreb is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Une excursion aux lacs de Plitvice depuis Zagreb tient-elle en une journée ?',
          en: 'Does a Plitvice Lakes trip from Zagreb fit into one day?',
        },
        a: {
          fr: 'Oui : comptez deux heures de route par trajet et quatre à cinq heures sur les sentiers du parc. Nous réservons les billets d’entrée sur créneau horaire, partons tôt le matin et votre chauffeur vous attend au parking pendant toute la visite.',
          en: 'Yes: allow two hours of driving each way and four to five hours on the park trails. We book timed entry tickets, leave early in the morning and your chauffeur waits at the car park throughout your visit.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous relier Zagreb à la côte dalmate ou à Ljubljana ?',
          en: 'Can you connect Zagreb with the Dalmatian coast or Ljubljana?',
        },
        a: {
          fr: 'Oui. Ljubljana est à 1 h 45, Split à 4 heures par l’autoroute A1 et Dubrovnik à 6 heures. Ces trajets sont devisés à l’avance à prix fixe, péages inclus, et se combinent volontiers avec un arrêt à Plitvice en cours de route vers la côte.',
          en: 'Yes. Ljubljana is 1 h 45 away, Split 4 hours via the A1 motorway and Dubrovnik 6 hours. These journeys are quoted in advance at a fixed price, tolls included, and pair naturally with a Plitvice stop en route to the coast.',
        },
      },
    ],
    nearby: ['ljubljana', 'split', 'budapest', 'dubrovnik'],
  },
  {
    slug: 'bucharest',
    name: { fr: 'Bucarest', en: 'Bucharest' },
    country: { fr: 'Roumanie', en: 'Romania' },
    region: 'alps-attractions',
    airport: 'Bucarest-Henri-Coandă (OTP)',
    airportTransfer: {
      fr: 'L’aéroport de Bucarest-Henri-Coandă (OTP) se situe à 18 km au nord du centre : comptez 30 à 45 minutes selon le trafic pour rejoindre la place de la Révolution ou le vieux Lipscani. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Bucharest Henri Coandă Airport (OTP) lies 18 km north of the centre: allow 30 to 45 minutes depending on traffic to reach Revolution Square or the old Lipscani quarter. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Surnommée jadis le « petit Paris », Bucarest juxtapose boulevards haussmanniens, églises orthodoxes, Athénée roumain à la coupole dorée et le colossal palais du Parlement hérité de Ceaușescu — l’un des plus vastes bâtiments du monde. Votre **chauffeur privé à Bucarest** relie l’aéroport Henri-Coandă aux hôtels de la Calea Victoriei, dessert le quartier d’affaires du nord et les tables du vieux Lipscani, à prix fixe et en toute discrétion.',
        'Au nord, les Carpates ouvrent la Roumanie des châteaux : **Peleș à Sinaia, résidence des rois de Roumanie**, à deux heures de route, puis Bran — associé à la légende de Dracula — et Brașov la saxonne un peu au-delà. L’été, les terrasses du lac Herăstrău prolongent les soirées ; l’hiver, la vallée de la Prahova devient le domaine skiable le plus accessible depuis la capitale.',
      ],
      en: [
        'Once nicknamed the “little Paris”, Bucharest sets Haussmann-style boulevards beside Orthodox churches, the gold-domed Romanian Athenaeum and the colossal Palace of the Parliament inherited from Ceaușescu — one of the largest buildings on earth. Your **private chauffeur in Bucharest** links Henri Coandă Airport to the Calea Victoriei hotels, serves the northern business district and the tables of old Lipscani, at a fixed price and with complete discretion.',
        'To the north, the Carpathians open the Romania of castles: **Peleș at Sinaia, residence of Romania’s kings**, two hours away by road, then Bran — tied to the Dracula legend — and Saxon Brașov just beyond. In summer, the Herăstrău lakeside terraces stretch the evenings; in winter, the Prahova Valley becomes the most accessible ski country from the capital.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Châteaux de Peleș et de Bran', en: 'Peleș and Bran castles' },
        teaser: {
          fr: 'La vallée de la Prahova jusqu’à Sinaia et le château de Peleș — chef-d’œuvre néo-Renaissance des Hohenzollern —, puis Bran et sa silhouette dressée sur le rocher. Retour possible par Brașov et sa place médiévale.',
          en: 'Up the Prahova Valley to Sinaia and Peleș Castle — the Hohenzollerns’ neo-Renaissance masterpiece — then Bran and its silhouette on the rock. Optional return via Brașov and its medieval square.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Palais du Parlement et Bucarest monumental', en: 'Palace of the Parliament and monumental Bucharest' },
        teaser: {
          fr: 'La visite guidée du palais de Ceaușescu — 1 100 pièces, marbres et lustres démesurés —, puis l’Athénée roumain, la place de la Révolution et le boulevard Unirii. Billets et créneaux réservés à l’avance.',
          en: 'A guided tour of Ceaușescu’s palace — 1,100 rooms of marble and outsized chandeliers — then the Romanian Athenaeum, Revolution Square and Unirii Boulevard. Tickets and slots booked in advance.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Brașov et la Transylvanie saxonne', en: 'Brașov and Saxon Transylvania' },
        teaser: {
          fr: 'À 170 km au nord, la vieille ville saxonne au pied du mont Tâmpa : l’église Noire, la rue Sforii, les remparts. Combinez avec Bran ou la citadelle de Râșnov pour une journée transylvaine complète.',
          en: '170 km north, the Saxon old town beneath Mount Tâmpa: the Black Church, Sforii Street, the ramparts. Pair it with Bran or the Râșnov citadel for a full Transylvanian day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '950',
      },
      {
        title: { fr: 'Domaines viticoles de Dealu Mare', en: 'Dealu Mare wine estates' },
        teaser: {
          fr: 'À une heure au nord, le plus grand vignoble rouge de Roumanie : fetească neagră et cabernets chez les domaines qui portent le renouveau du vin roumain. Dégustations et déjeuner au cœur des vignes.',
          en: 'An hour north, Romania’s greatest red-wine country: Fetească Neagră and Cabernets at the estates driving the Romanian wine revival. Tastings and lunch among the vines.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée bucarestoise, Athénée et Lipscani', en: 'Bucharest evening, Athenaeum and Lipscani' },
        teaser: {
          fr: 'Concert sous la coupole de l’Athénée roumain ou dîner chez Caru’ cu Bere — brasserie 1899 classée — puis les ruelles animées de Lipscani. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'A concert beneath the Athenaeum dome or dinner at Caru’ cu Bere — the listed 1899 beer hall — then the lively lanes of Lipscani. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Bucarest-Henri-Coandă et le centre-ville ?',
          en: 'How much does a transfer between Bucharest Henri Coandă Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Bucarest-Henri-Coandă (OTP) et le centre de Bucarest est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Bucharest Henri Coandă (OTP) and central Bucharest is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Peleș et Bran le même jour depuis Bucarest ?',
          en: 'Can Peleș and Bran be visited on the same day from Bucharest?',
        },
        a: {
          fr: 'Oui, c’est notre excursion la plus demandée : Sinaia à deux heures de route, Bran à quarante-cinq minutes de plus, retour possible par Brașov. Départ matinal recommandé — le week-end, la vallée de la Prahova se charge vite. Billets et guides réservés à l’avance.',
          en: 'Yes, it is our most requested excursion: Sinaia two hours away, Bran forty-five minutes further, with an optional return via Brașov. An early start is advisable — at weekends the Prahova Valley fills quickly. Tickets and guides booked in advance.',
        },
      },
      {
        q: {
          fr: 'La Roumanie utilise-t-elle l’euro ?',
          en: 'Does Romania use the euro?',
        },
        a: {
          fr: 'Non, la monnaie locale est le leu roumain (RON). Nos prestations sont facturées en euros, à prix fixe et réglables par carte à l’avance, sans change à prévoir pour vos trajets. En ville, la carte bancaire est très largement acceptée.',
          en: 'No, the local currency is the Romanian leu (RON). Our services are billed in euros at a fixed price, payable by card in advance, with no exchange needed for your journeys. In town, cards are very widely accepted.',
        },
      },
    ],
    nearby: ['sofia', 'budapest', 'athens'],
  },
  {
    slug: 'sofia',
    name: { fr: 'Sofia', en: 'Sofia' },
    country: { fr: 'Bulgarie', en: 'Bulgaria' },
    region: 'alps-attractions',
    airport: 'Sofia (SOF)',
    airportTransfer: {
      fr: 'L’aéroport de Sofia (SOF) se trouve à 10 km à l’est du centre : comptez 20 à 30 minutes pour rejoindre la cathédrale Alexandre-Nevski ou le boulevard Vitosha. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Sofia Airport (SOF) lies 10 km east of the centre: allow 20 to 30 minutes to reach the Alexander Nevsky Cathedral or Vitosha Boulevard. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Adossée au mont Vitosha, Sofia superpose trois mille ans d’histoire : vestiges de la Serdica romaine sous les rues du centre, rotonde Saint-Georges du IVe siècle, dômes dorés de la cathédrale Alexandre-Nevski, théâtre national Ivan-Vazov. Votre **chauffeur privé à Sofia** relie l’aéroport au centre en une vingtaine de minutes, dessert les hôtels du boulevard Vitosha et les quartiers d’affaires, en berline ou van premium à prix fixe.',
        'Deux excursions dominent tout séjour : **le monastère de Rila**, chef-d’œuvre orthodoxe aux fresques éclatantes niché à 1 150 mètres, à deux heures de route, et l’église médiévale de Boyana aux portes de la ville, classée à l’UNESCO. Le mont Vitosha, à trente minutes du centre, offre ski l’hiver et sentiers panoramiques l’été — une montagne aux portes d’une capitale, cas rare en Europe.',
      ],
      en: [
        'Set against Mount Vitosha, Sofia layers three thousand years of history: remains of Roman Serdica beneath the city-centre streets, the fourth-century St George Rotunda, the golden domes of the Alexander Nevsky Cathedral, the Ivan Vazov National Theatre. Your **private chauffeur in Sofia** links the airport to the centre in some twenty minutes and serves the Vitosha Boulevard hotels and the business districts, in a premium sedan or van at a fixed price.',
        'Two excursions define any stay: **the Rila Monastery**, an Orthodox masterpiece of vivid frescoes set at 1,150 metres, two hours away by road, and the UNESCO-listed medieval Boyana Church on the city’s edge. Mount Vitosha, thirty minutes from the centre, offers skiing in winter and panoramic trails in summer — a mountain at a capital’s doorstep, a rarity in Europe.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Monastère de Rila', en: 'Rila Monastery' },
        teaser: {
          fr: 'À 120 km au sud, le plus grand monastère orthodoxe des Balkans : arcades rayées, fresques du XIXe siècle, tour de Hrelyo. Classé à l’UNESCO, niché dans la forêt du massif de Rila. Déjeuner de truite au bord de la rivière.',
          en: '120 km south, the largest Orthodox monastery in the Balkans: striped arcades, nineteenth-century frescoes, the Hrelyo Tower. UNESCO-listed, folded into the Rila mountain forests. Trout lunch by the river.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Sofia antique et église de Boyana', en: 'Ancient Sofia and the Boyana Church' },
        teaser: {
          fr: 'La Serdica romaine, la rotonde Saint-Georges, Alexandre-Nevski et sa crypte aux icônes, puis les fresques de 1259 de l’église de Boyana — un jalon de la peinture médiévale européenne, classé à l’UNESCO.',
          en: 'Roman Serdica, the St George Rotunda, Alexander Nevsky and its icon crypt, then the 1259 frescoes of the Boyana Church — a milestone of European medieval painting, UNESCO-listed.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Mont Vitosha et lacs de montagne', en: 'Mount Vitosha and its mountain trails' },
        teaser: {
          fr: 'À 30 minutes du centre, le massif emblème de Sofia : plateau des moraines de Zlatnite Mostove, panorama sur la capitale, ski à Aleko l’hiver. Une demi-journée d’air pur sans quitter les abords de la ville.',
          en: '30 minutes from the centre, Sofia’s emblematic massif: the stone rivers of Zlatnite Mostove, panoramas over the capital, skiing at Aleko in winter. Half a day of mountain air without leaving the city’s edge.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Plovdiv, l’une des plus vieilles villes d’Europe', en: 'Plovdiv, one of Europe’s oldest cities' },
        teaser: {
          fr: 'À 145 km à l’est, le théâtre romain admirablement conservé, la vieille ville aux maisons de la Renaissance bulgare, le quartier créatif de Kapana. Capitale européenne de la culture 2019, à visiter à votre rythme.',
          en: '145 km east, the superbly preserved Roman theatre, the old town with its Bulgarian Revival houses, the creative Kapana quarter. European Capital of Culture 2019, explored at your own pace.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Soirée sofiote', en: 'Sofia evening' },
        teaser: {
          fr: 'Opéra national ou théâtre Ivan-Vazov, dîner aux nouvelles tables gastronomiques de la capitale, puis Alexandre-Nevski illuminée sous les étoiles. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'The National Opera or the Ivan Vazov Theatre, dinner at the capital’s new fine-dining tables, then Alexander Nevsky illuminated beneath the stars. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '300',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Sofia et le centre-ville ?',
          en: 'How much does a transfer between Sofia Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport de Sofia (SOF) et le centre est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Sofia Airport (SOF) and the city centre is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'L’excursion au monastère de Rila tient-elle en une demi-journée ?',
          en: 'Can the Rila Monastery be done in half a day?',
        },
        a: {
          fr: 'Nous la déconseillons en demi-journée : comptez deux heures de route par trajet et au moins deux heures sur place pour l’église, le musée et la tour. La journée complète permet d’ajouter l’église de Boyana au retour et un déjeuner au bord de la rivière Rilska.',
          en: 'We advise against a half-day: allow two hours of driving each way and at least two hours on site for the church, the museum and the tower. A full day also lets you add the Boyana Church on the return and lunch beside the Rilska river.',
        },
      },
      {
        q: {
          fr: 'La Bulgarie utilise-t-elle l’euro ?',
          en: 'Does Bulgaria use the euro?',
        },
        a: {
          fr: 'La monnaie locale est le lev (BGN), à parité fixe avec l’euro. Nos prestations sont facturées en euros, à prix fixe et réglables par carte à l’avance — aucun change n’est nécessaire pour vos trajets, et la carte est acceptée dans la plupart des commerces de Sofia.',
          en: 'The local currency is the lev (BGN), pegged to the euro at a fixed rate. Our services are billed in euros at a fixed price, payable by card in advance — no exchange is needed for your journeys, and cards are accepted in most Sofia establishments.',
        },
      },
    ],
    nearby: ['bucharest', 'athens', 'zagreb'],
  },
  {
    slug: 'tallinn',
    name: { fr: 'Tallinn', en: 'Tallinn' },
    country: { fr: 'Estonie', en: 'Estonia' },
    region: 'alps-attractions',
    airport: 'Tallinn-Lennart-Meri (TLL)',
    airportTransfer: {
      fr: 'L’aéroport de Tallinn-Lennart-Meri (TLL) se situe à 5 km à peine au sud-est du centre : 10 à 15 minutes suffisent pour rejoindre la vieille ville ou le port. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Tallinn Lennart Meri Airport (TLL) lies barely 5 km south-east of the centre: 10 to 15 minutes is enough to reach the Old Town or the harbour. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Derrière ses remparts hérissés de tours, Tallinn conserve l’une des vieilles villes médiévales les mieux préservées d’Europe : hôtel de ville gothique du Raekoja plats, colline de Toompea et cathédrale Alexandre-Nevski, passage Sainte-Catherine. Votre **chauffeur privé à Tallinn** relie en un quart d’heure l’aéroport Lennart-Meri à la vieille ville — fermée aux voitures — avec dépose au plus près des portes, et dessert le port des ferries pour Helsinki.',
        'À l’est, **le parc national de Lahemaa** déploie forêts, tourbières et manoirs baltes — Palmse, Sagadi — à une heure de route ; à l’ouest, la station balnéaire de Haapsalu et ses maisons de bois. L’été nordique étire les journées jusqu’aux nuits blanches de juin ; l’hiver, le marché de Noël du Raekoja plats, l’un des plus photogéniques d’Europe, se visite emmitouflé, votre véhicule à quelques pas.',
      ],
      en: [
        'Behind its tower-studded walls, Tallinn keeps one of Europe’s best-preserved medieval old towns: the Gothic town hall on Raekoja plats, Toompea hill and the Alexander Nevsky Cathedral, St Catherine’s Passage. Your **private chauffeur in Tallinn** links Lennart Meri Airport to the car-free Old Town in a quarter of an hour — with drop-off as close as possible to the gates — and serves the ferry terminal for Helsinki.',
        'To the east, **Lahemaa National Park** unfolds forests, bogs and Baltic manor houses — Palmse, Sagadi — an hour away by road; to the west, the seaside resort of Haapsalu and its wooden houses. The Nordic summer stretches the days into June’s white nights; in winter, the Christmas market on Raekoja plats — among Europe’s most photogenic — is best visited well wrapped, your vehicle a few steps away.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Vieille ville médiévale et Toompea', en: 'Medieval Old Town and Toompea' },
        teaser: {
          fr: 'Le Raekoja plats et sa pharmacie de 1422, les remparts et la tour Kiek in de Kök, puis Toompea : cathédrale Alexandre-Nevski, Dôme et belvédères sur les toits rouges. Dépose aux portes de la zone piétonne.',
          en: 'Raekoja plats and its 1422 pharmacy, the walls and the Kiek in de Kök tower, then Toompea: the Alexander Nevsky Cathedral, the Dome Church and viewpoints over the red rooftops. Drop-off at the pedestrian gates.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Parc national de Lahemaa et manoirs baltes', en: 'Lahemaa National Park and Baltic manors' },
        teaser: {
          fr: 'À une heure à l’est, forêts, tourbières de Viru et villages de pêcheurs de la côte — Käsmu, Altja —, puis les manoirs de Palmse et Sagadi. La nature estonienne dans toute son étendue, déjeuner de campagne inclus.',
          en: 'An hour east, forests, the Viru bog and the coastal fishing villages of Käsmu and Altja, then the Palmse and Sagadi manors. Estonian nature at full stretch, with a country lunch along the way.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Kadriorg et le musée Kumu', en: 'Kadriorg and the Kumu museum' },
        teaser: {
          fr: 'Le palais baroque élevé par Pierre le Grand pour Catherine Ière, ses jardins à la française, puis le Kumu — musée d’art estonien primé pour son architecture. Retour par le mémorial de Pirita et la baie.',
          en: 'The Baroque palace built by Peter the Great for Catherine I, its formal gardens, then Kumu — the award-winning museum of Estonian art. Return via the Pirita seafront and the bay.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Haapsalu et la côte ouest', en: 'Haapsalu and the west coast' },
        teaser: {
          fr: 'À 100 km à l’ouest, la ville d’eaux aimée de Tchaïkovski : château épiscopal, promenade de bord de mer, dentelles et maisons de bois. Un littoral balte paisible, loin des itinéraires les plus fréquentés.',
          en: '100 km west, the spa town beloved of Tchaikovsky: the episcopal castle, the seafront promenade, lacework and wooden houses. A tranquil Baltic shore, far from the busier routes.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Soirée tallinnoise', en: 'Tallinn evening' },
        teaser: {
          fr: 'Dîner dans la vieille ville — des salles gothiques d’Olde Hansa aux tables de la nouvelle cuisine nordique estonienne —, puis les remparts illuminés et le panorama de Patkuli de nuit. Véhicule en attente.',
          en: 'Dinner in the Old Town — from the Gothic halls of Olde Hansa to the tables of Estonia’s new Nordic cuisine — then the illuminated walls and the Patkuli viewpoint by night. Vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '300',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Tallinn-Lennart-Meri et le centre-ville ?',
          en: 'How much does a transfer between Tallinn Lennart Meri Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Tallinn-Lennart-Meri (TLL) et le centre est facturé à prix fixe, confirmé à la réservation — le trajet ne prend que 10 à 15 minutes. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Tallinn Lennart Meri (TLL) and the centre is charged at a fixed price, confirmed at booking — the journey takes only 10 to 15 minutes. Meet-and-greet with a name board, flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer la route des trois capitales baltes — Tallinn, Riga, Vilnius ?',
          en: 'Can you drive the three Baltic capitals route — Tallinn, Riga, Vilnius?',
        },
        a: {
          fr: 'Oui, c’est un itinéraire que nous construisons régulièrement : Tallinn–Riga en 4 heures, Riga–Vilnius en 4 heures également, avec étapes possibles à Pärnu, au château de Rundāle ou à la colline des Croix. Même chauffeur sur tout le parcours, bagages à bord, prix fixe global.',
          en: 'Yes, it is an itinerary we build regularly: Tallinn–Riga in 4 hours, Riga–Vilnius in another 4, with optional stops at Pärnu, Rundāle Palace or the Hill of Crosses. The same chauffeur throughout, luggage on board, one overall fixed price.',
        },
      },
      {
        q: {
          fr: 'La vieille ville de Tallinn étant piétonne, où le chauffeur peut-il déposer ?',
          en: 'Tallinn’s Old Town is pedestrian — where can the chauffeur drop me off?',
        },
        a: {
          fr: 'La vieille ville est fermée à la circulation, mais plusieurs points de dépose autorisés bordent les remparts — porte Viru, Toompea, place de la Liberté — à moins de cinq minutes à pied de la plupart des hôtels. Votre chauffeur choisit le point le plus proche de votre adresse et vous y retrouve au retour.',
          en: 'The Old Town is closed to traffic, but several authorised drop-off points line the walls — Viru Gate, Toompea, Freedom Square — within a five-minute walk of most hotels. Your chauffeur picks the point nearest your address and meets you there for the return.',
        },
      },
    ],
    nearby: ['riga', 'vilnius'],
  },
  {
    slug: 'riga',
    name: { fr: 'Riga', en: 'Riga' },
    country: { fr: 'Lettonie', en: 'Latvia' },
    region: 'alps-attractions',
    airport: 'Riga (RIX)',
    airportTransfer: {
      fr: 'L’aéroport de Riga (RIX) se trouve à 10 km au sud-ouest du centre : comptez 15 à 20 minutes pour rejoindre la vieille ville ou le quartier Art nouveau. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Riga Airport (RIX) lies 10 km south-west of the centre: allow 15 to 20 minutes to reach the Old Town or the Art Nouveau district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Plus grande ville des pays baltes, Riga conjugue une vieille ville hanséatique — maison des Têtes noires, cathédrale du Dôme, église Saint-Pierre — et la plus dense collection de façades **Art nouveau** d’Europe, concentrée rue Alberta et rue Elizabetes sous la signature de Mikhaïl Eisenstein. Votre chauffeur privé à Riga relie l’aéroport au centre en vingt minutes, dessert les hôtels des deux rives de la Daugava et le marché central sous ses halles à zeppelins.',
        'À trente minutes du centre, **Jūrmala aligne trente-trois kilomètres de plage** de sable blanc et ses villas de bois classées — la station balnéaire historique de la Baltique. Vers le sud, le palais baroque de Rundāle, dessiné par Rastrelli, l’architecte du palais d’Hiver, justifie l’excursion d’une journée ; vers l’est, le parc national de la Gauja ouvre Sigulda, Turaida et ses châteaux. L’été balte est doux, l’hiver photogénique.',
      ],
      en: [
        'The largest city in the Baltics, Riga pairs a Hanseatic old town — the House of the Blackheads, the Dome Cathedral, St Peter’s Church — with Europe’s densest collection of **Art Nouveau** façades, concentrated on Alberta and Elizabetes streets under Mikhail Eisenstein’s signature. Your private chauffeur in Riga links the airport to the centre in twenty minutes and serves the hotels on both banks of the Daugava and the central market beneath its Zeppelin halls.',
        'Thirty minutes from the centre, **Jūrmala lines up thirty-three kilometres of white-sand beach** and its listed wooden villas — the Baltic’s historic seaside resort. To the south, the Baroque palace of Rundāle, designed by Rastrelli — architect of the Winter Palace — deserves a full day; to the east, the Gauja National Park opens Sigulda, Turaida and their castles. The Baltic summer is gentle, the winter photogenic.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Vieille ville et quartier Art nouveau', en: 'Old Town and the Art Nouveau district' },
        teaser: {
          fr: 'La maison des Têtes noires, le Dôme et la flèche de Saint-Pierre, puis les façades exubérantes de la rue Alberta et le musée Art nouveau dans l’ancien appartement de Konstantīns Pēkšēns. Dépose aux portes de chaque quartier.',
          en: 'The House of the Blackheads, the Dome and St Peter’s spire, then the exuberant façades of Alberta Street and the Art Nouveau Museum in Konstantīns Pēkšēns’ former apartment. Drop-off at each district’s edge.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Jūrmala, la Baltique en villégiature', en: 'Jūrmala, the Baltic resort' },
        teaser: {
          fr: 'À 25 km à l’ouest, la station aux villas de bois entre pinède et mer : plage de Majori, rue piétonne Jomas, spas historiques. Déjeuner face à la Baltique, retour par le parc national de Ķemeri et sa tourbière en option.',
          en: '25 km west, the resort of wooden villas between pine forest and sea: Majori beach, pedestrian Jomas Street, historic spas. Lunch facing the Baltic, with the Ķemeri bog boardwalk optional on the return.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Palais de Rundāle', en: 'Rundāle Palace' },
        teaser: {
          fr: 'À 80 km au sud, le « Versailles balte » de Rastrelli : appartements dorés du duc de Courlande, roseraie de 2 400 variétés, jardins à la française. Combinez avec la colline des Croix lituanienne toute proche.',
          en: '80 km south, Rastrelli’s “Baltic Versailles”: the gilded apartments of the Duke of Courland, a rose garden of 2,400 varieties, formal French gardens. Pair it with Lithuania’s nearby Hill of Crosses.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Sigulda et la vallée de la Gauja', en: 'Sigulda and the Gauja valley' },
        teaser: {
          fr: 'À 55 km à l’est, la « Suisse lettone » : château de brique de Turaida, grottes de Gūtmanis, téléphérique au-dessus de la vallée boisée. Flamboyante à l’automne, la Gauja est le grand décor naturel de la Lettonie.',
          en: '55 km east, the “Latvian Switzerland”: the brick castle of Turaida, the Gūtmanis caves, a cable car above the wooded valley. Ablaze in autumn, the Gauja is Latvia’s great natural stage.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '560',
      },
      {
        title: { fr: 'Soirée rigoise, opéra et halles', en: 'Riga evening, opera and market halls' },
        teaser: {
          fr: 'L’Opéra national de Lettonie — maison de Wagner le temps de deux saisons —, dîner aux tables de la nouvelle cuisine balte, puis la vieille ville illuminée depuis la rive gauche de la Daugava. Véhicule en attente.',
          en: 'The Latvian National Opera — Wagner’s house for two seasons — dinner at the tables of the new Baltic cuisine, then the illuminated Old Town from the left bank of the Daugava. Vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '300',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Riga et le centre-ville ?',
          en: 'How much does a transfer between Riga Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport de Riga (RIX) et le centre est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Riga Airport (RIX) and the centre is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Tallinn ou Vilnius par la route depuis Riga ?',
          en: 'Can I reach Tallinn or Vilnius by road from Riga?',
        },
        a: {
          fr: 'Oui. Riga occupe le centre de la route balte : Tallinn au nord et Vilnius au sud sont chacune à 4 heures environ, avec étapes possibles à Pärnu, Rundāle ou la colline des Croix. Ces trajets sont devisés à l’avance à prix fixe, même chauffeur de bout en bout.',
          en: 'Yes. Riga sits at the midpoint of the Baltic route: Tallinn to the north and Vilnius to the south are each around 4 hours away, with optional stops at Pärnu, Rundāle or the Hill of Crosses. These journeys are quoted in advance at a fixed price, same chauffeur throughout.',
        },
      },
      {
        q: {
          fr: 'Jūrmala vaut-elle le détour hors saison estivale ?',
          en: 'Is Jūrmala worth visiting outside the summer season?',
        },
        a: {
          fr: 'Oui : la plage déserte bordée de pins, les villas de bois et les spas ouverts à l’année donnent à Jūrmala un charme nordique très recherché hors saison. Comptez une demi-journée depuis Riga, en combinant volontiers avec la passerelle de la tourbière de Ķemeri.',
          en: 'Yes: the empty pine-fringed beach, the wooden villas and the year-round spas give Jūrmala a Nordic charm much sought after off season. Allow half a day from Riga, ideally paired with the Ķemeri bog boardwalk.',
        },
      },
    ],
    nearby: ['tallinn', 'vilnius'],
  },
  {
    slug: 'vilnius',
    name: { fr: 'Vilnius', en: 'Vilnius' },
    country: { fr: 'Lituanie', en: 'Lithuania' },
    region: 'alps-attractions',
    airport: 'Vilnius (VNO)',
    airportTransfer: {
      fr: 'L’aéroport de Vilnius (VNO) se situe à 7 km au sud du centre : comptez 15 à 20 minutes pour rejoindre la place de la Cathédrale ou la vieille ville. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Vilnius Airport (VNO) lies 7 km south of the centre: allow 15 to 20 minutes to reach Cathedral Square or the Old Town. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale baroque des pays baltes, Vilnius déroule l’une des plus vastes vieilles villes d’Europe de l’Est — classée à l’UNESCO : cathédrale néoclassique et tour de Gediminas, église Sainte-Anne au gothique flamboyant, porte de l’Aurore et sa Vierge miraculeuse, université fondée en 1579. Votre **chauffeur privé à Vilnius** relie l’aéroport au centre en un quart d’heure et dessert hôtels, ambassades et la république autoproclamée des artistes d’Užupis.',
        'À moins d’une heure, **le château de Trakai** dresse ses briques rouges sur une île du lac Galvė — résidence des grands-ducs de Lituanie et cœur de la communauté karaïte, dont les kibinai se dégustent au bord de l’eau. Plus loin, la colline des Croix près de Šiauliai et le parc national de l’Aukštaitija étendent l’itinéraire. L’été balte invite aux terrasses d’Užupis ; l’hiver, la vieille ville enneigée se découvre entre cafés et églises.',
      ],
      en: [
        'The Baroque capital of the Baltics, Vilnius unrolls one of Eastern Europe’s largest old towns — UNESCO-listed: the neoclassical cathedral and Gediminas Tower, the flamboyant Gothic of St Anne’s, the Gate of Dawn with its miraculous Madonna, a university founded in 1579. Your **private chauffeur in Vilnius** links the airport to the centre in a quarter of an hour and serves hotels, embassies and the self-declared artists’ republic of Užupis.',
        'Under an hour away, **Trakai Castle** raises its red brick on an island in Lake Galvė — residence of Lithuania’s grand dukes and heart of the Karaite community, whose kibinai pastries are best eaten by the water. Further out, the Hill of Crosses near Šiauliai and the Aukštaitija National Park extend the itinerary. The Baltic summer fills the Užupis terraces; in winter, the snowbound Old Town unfolds between cafés and churches.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Vieille ville baroque et Užupis', en: 'Baroque Old Town and Užupis' },
        teaser: {
          fr: 'La place de la Cathédrale et la tour de Gediminas, Sainte-Anne et le quartier des églises, la porte de l’Aurore, puis la « république » bohème d’Užupis et sa constitution affichée en vingt langues. Dépose aux portes des zones piétonnes.',
          en: 'Cathedral Square and Gediminas Tower, St Anne’s and the churches quarter, the Gate of Dawn, then the bohemian “republic” of Užupis and its constitution posted in twenty languages. Drop-off at the pedestrian gates.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Château de Trakai et village karaïte', en: 'Trakai Castle and the Karaite village' },
        teaser: {
          fr: 'À 28 km à l’ouest, la forteresse insulaire de brique rouge sur le lac Galvė, le musée des grands-ducs, puis les maisons de bois karaïtes et un déjeuner de kibinai au bord de l’eau. Barque ou yacht privé en option l’été.',
          en: '28 km west, the red-brick island fortress on Lake Galvė, the grand dukes’ museum, then the Karaite wooden houses and a kibinai lunch at the water’s edge. Rowing boat or private yacht optional in summer.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Colline des Croix', en: 'Hill of Crosses' },
        teaser: {
          fr: 'À 215 km au nord-ouest, près de Šiauliai, le tertre couvert de dizaines de milliers de croix — lieu de pèlerinage et de résistance unique au monde, visité par Jean-Paul II en 1993. Une journée de route à travers la Lituanie profonde.',
          en: '215 km north-west, near Šiauliai, the mound covered in tens of thousands of crosses — a place of pilgrimage and resistance unlike any other, visited by John Paul II in 1993. A day’s drive through deepest Lithuania.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Kernavė et le parc de l’Aukštaitija', en: 'Kernavė and the Aukštaitija lakeland' },
        teaser: {
          fr: 'Les tumulus de Kernavė — première capitale lituanienne, classée à l’UNESCO — à 35 km, puis les lacs et forêts de l’Aukštaitija, villages de bois et apiculture traditionnelle. La Lituanie païenne et lacustre en une journée.',
          en: 'The mounds of Kernavė — Lithuania’s first capital, UNESCO-listed — 35 km away, then the lakes and forests of Aukštaitija, timber villages and traditional beekeeping. Pagan, lakeland Lithuania in a day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée vilnioise', en: 'Vilnius evening' },
        teaser: {
          fr: 'Dîner aux tables de la nouvelle gastronomie lituanienne — plusieurs adresses de la vieille ville figurent désormais aux classements européens —, puis les clochers baroques illuminés depuis la colline des Trois-Croix. Véhicule en attente.',
          en: 'Dinner at the tables of Lithuania’s new gastronomy — several Old Town addresses now feature in the European rankings — then the illuminated Baroque spires from the Hill of Three Crosses. Vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '300',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Vilnius et le centre-ville ?',
          en: 'How much does a transfer between Vilnius Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport de Vilnius (VNO) et le centre est facturé à prix fixe, confirmé à la réservation — le trajet ne prend que 15 à 20 minutes. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Vilnius Airport (VNO) and the centre is charged at a fixed price, confirmed at booking — the journey takes only 15 to 20 minutes. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Trakai se visite-t-il en demi-journée depuis Vilnius ?',
          en: 'Can Trakai be visited in half a day from Vilnius?',
        },
        a: {
          fr: 'Oui : le château est à trente minutes de route, et deux à trois heures suffisent pour la forteresse, le musée et une promenade au bord du lac Galvė. En été, ajoutez une sortie en barque ou un déjeuner karaïte pour transformer l’escapade en journée détendue.',
          en: 'Yes: the castle is thirty minutes away by road, and two to three hours cover the fortress, the museum and a stroll along Lake Galvė. In summer, add a boat outing or a Karaite lunch to turn the excursion into a leisurely full day.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser la route des capitales baltes au départ de Vilnius ?',
          en: 'Can you arrange the Baltic capitals route starting from Vilnius?',
        },
        a: {
          fr: 'Oui. Vilnius–Riga se parcourt en 4 heures avec un arrêt naturel à la colline des Croix ou au palais de Rundāle, puis Riga–Tallinn en 4 heures également. Nous construisons l’itinéraire complet — hôtels desservis porte à porte, même chauffeur, prix fixe global communiqué à l’avance.',
          en: 'Yes. Vilnius–Riga takes 4 hours with a natural stop at the Hill of Crosses or Rundāle Palace, then Riga–Tallinn another 4. We build the complete itinerary — hotels served door to door, the same chauffeur throughout, one overall fixed price confirmed in advance.',
        },
      },
    ],
    nearby: ['riga', 'tallinn', 'warsaw'],
  },
];

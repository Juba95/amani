/**
 * france.ts — Région FRANCE (~55 villes)
 * ─────────────────────────────────────────────────────────────────────────────
 * Villes françaises NON couvertes par les pages chauffeur-prive-* existantes
 * (Paris, Bordeaux, Lyon, Nice, Cannes, Monaco, Marseille, Saint-Tropez,
 * Deauville, Chamonix, Megève, Haute-Savoie ont déjà leurs pages dédiées).
 *
 * Villes attendues (~55) :
 *   strasbourg ✅, toulouse ✅, nantes, montpellier, lille, rennes, reims,
 *   dijon, tours, orleans, angers, aix-en-provence, avignon, arles, nimes,
 *   toulon, hyeres, antibes, saint-paul-de-vence, grasse, menton, biarritz,
 *   bayonne, saint-jean-de-luz, pau, la-rochelle, cognac, poitiers, limoges,
 *   clermont-ferrand, vichy, saint-etienne, grenoble, valence, beaune,
 *   epernay, troyes, metz, nancy, colmar, mulhouse, besancon, caen, rouen,
 *   le-havre, honfleur, etretat, bayeux, mont-saint-michel-ville, saint-malo,
 *   dinard, brest, quimper, vannes, le-mans, chartres, giverny-village,
 *   fontainebleau-ville, versailles-ville, perpignan, carcassonne-ville, ajaccio
 *
 * Les deux premières entrées (strasbourg, toulouse) servent de RÉFÉRENCE de
 * qualité éditoriale : ton, longueur, structure, gras. S'y conformer.
 */

import type { Destination } from '../types';

export const CITIES: Destination[] = [
  {
    slug: 'strasbourg',
    name: { fr: 'Strasbourg', en: 'Strasbourg' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Strasbourg-Entzheim (SXB)',
    airportTransfer: {
      fr: 'L’aéroport de Strasbourg-Entzheim (SXB) se trouve à 12 km au sud-ouest du centre : comptez 15 à 20 minutes de trajet jusqu’à la place Kléber ou au quartier de la Petite France. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Strasbourg-Entzheim Airport (SXB) lies 12 km south-west of the city centre: allow 15 to 20 minutes to reach Place Kléber or the Petite France district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale européenne et joyau alsacien, Strasbourg conjugue institutions internationales, cathédrale de grès rose et ruelles à colombages de la Petite France. Votre **chauffeur privé à Strasbourg** vous accompagne du Parlement européen aux winstubs de la Krutenau, en berline Mercedes ou van de grande capacité. Transferts aéroport et gare, mise à disposition à l’heure, trajets transfrontaliers vers Kehl, Baden-Baden ou Francfort : chaque déplacement est planifié à l’avance, à prix fixe, avec un chauffeur qui connaît la ville et ses accès.',
        'Au-delà des transferts, Strasbourg est la porte d’entrée idéale de l’Alsace. La **route des Vins d’Alsace** commence à trente minutes du centre, Colmar et le Haut-Kœnigsbourg se rejoignent en moins d’une heure, et l’Allemagne voisine ouvre Baden-Baden et la Forêt-Noire à votre itinéraire. En décembre, le marché de Noël — le plus ancien de France — impose une logistique précise que votre chauffeur maîtrise : dépose au plus près des zones piétonnes, attente et retour de nuit sans contrainte.',
      ],
      en: [
        'European capital and the jewel of Alsace, Strasbourg combines international institutions, a rose-sandstone cathedral and the half-timbered lanes of Petite France. Your **private chauffeur in Strasbourg** takes you from the European Parliament to the winstubs of the Krutenau, in a Mercedes sedan or a full-size van. Airport and station transfers, hourly hire, cross-border journeys to Kehl, Baden-Baden or Frankfurt: every trip is planned in advance, at a fixed price, with a chauffeur who knows the city and its access routes.',
        'Beyond transfers, Strasbourg is the ideal gateway to Alsace. The **Alsace Wine Route** begins thirty minutes from the centre, Colmar and Haut-Kœnigsbourg castle are under an hour away, and neighbouring Germany brings Baden-Baden and the Black Forest within reach. In December, the Christmas market — the oldest in France — demands precise logistics your chauffeur has mastered: drop-off as close as possible to the pedestrian zones, standby throughout, and a late-night return with zero hassle.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Route des Vins d’Alsace', en: 'Alsace Wine Route' },
        teaser: {
          fr: 'Obernai, Ribeauvillé, Riquewihr et Eguisheim : 170 km de vignes au pied des Vosges. Dégustations chez les grands domaines — riesling, gewurztraminer — pendant que votre chauffeur conduit. Déjeuner dans une winstub de village.',
          en: 'Obernai, Ribeauvillé, Riquewihr and Eguisheim: 170 km of vineyards at the foot of the Vosges. Tastings at leading estates — Riesling, Gewurztraminer — while your chauffeur drives. Lunch in a village winstub.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Colmar et la Petite Venise', en: 'Colmar and Little Venice' },
        teaser: {
          fr: 'À 70 km au sud de Strasbourg, la ville la plus alsacienne d’Alsace : le musée Unterlinden et le retable d’Issenheim, les canaux de la Petite Venise, la maison des Têtes. Retour par Eguisheim.',
          en: '70 km south of Strasbourg, the most Alsatian town in Alsace: the Unterlinden Museum and the Isenheim Altarpiece, the canals of Little Venice, the Maison des Têtes. Return via Eguisheim.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '490',
      },
      {
        title: { fr: 'Château du Haut-Kœnigsbourg', en: 'Haut-Kœnigsbourg Castle' },
        teaser: {
          fr: 'À 55 minutes de Strasbourg, la forteresse restaurée par Guillaume II domine la plaine d’Alsace à 757 mètres. Combinez avec Sélestat et sa Bibliothèque humaniste, ou la volerie des aigles de Kintzheim.',
          en: '55 minutes from Strasbourg, the fortress restored by Kaiser Wilhelm II overlooks the Alsace plain from 757 metres. Pair it with Sélestat and its Humanist Library, or the eagle sanctuary at Kintzheim.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Baden-Baden, thermes et casino', en: 'Baden-Baden, spa and casino' },
        teaser: {
          fr: 'À 60 km de Strasbourg, la ville d’eaux la plus élégante d’Allemagne : thermes de Caracalla, Kurhaus et son casino Belle Époque, Lichtentaler Allee. Passage de frontière sans formalité, retour de nuit assuré.',
          en: '60 km from Strasbourg, Germany’s most elegant spa town: the Caracalla baths, the Kurhaus and its Belle Époque casino, Lichtentaler Allee. Seamless border crossing, guaranteed late-night return.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '590',
      },
      {
        title: { fr: 'Soirée gastronomique strasbourgeoise', en: 'Strasbourg gourmet evening' },
        teaser: {
          fr: 'Dépose devant votre table — Au Crocodile, Buerehiesel ou la winstub de votre choix — puis tour des illuminations de la cathédrale et des quais. Le véhicule vous attend, retour à votre hôtel sans contrainte.',
          en: 'Drop-off at your table — Au Crocodile, Buerehiesel or the winstub of your choice — followed by a tour of the illuminated cathedral and quays. The vehicle waits for you; effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Strasbourg-Entzheim et le centre-ville ?',
          en: 'How much does a transfer between Strasbourg-Entzheim Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Strasbourg-Entzheim (SXB) et le centre de Strasbourg est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Strasbourg-Entzheim (SXB) and central Strasbourg is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Votre chauffeur peut-il assurer des trajets transfrontaliers vers l’Allemagne ou la Suisse ?',
          en: 'Can your chauffeur handle cross-border journeys to Germany or Switzerland?',
        },
        a: {
          fr: 'Oui. Depuis Strasbourg, nous assurons régulièrement Kehl, Baden-Baden, Francfort, Stuttgart ou Bâle. Les trajets transfrontaliers sont devisés à l’avance, à prix fixe, avec un véhicule autorisé à circuler dans les pays traversés.',
          en: 'Yes. From Strasbourg we regularly serve Kehl, Baden-Baden, Frankfurt, Stuttgart and Basel. Cross-border journeys are quoted in advance at a fixed price, with a vehicle authorised to operate in each country crossed.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver longtemps à l’avance pendant le marché de Noël de Strasbourg ?',
          en: 'How far in advance should I book during the Strasbourg Christmas market?',
        },
        a: {
          fr: 'De fin novembre à fin décembre, la demande est très forte et le centre-ville est partiellement fermé à la circulation. Nous recommandons de réserver au moins 72 heures à l’avance ; votre chauffeur connaît les points de dépose autorisés au plus près des zones piétonnes.',
          en: 'From late November to late December demand is very high and the city centre is partially closed to traffic. We recommend booking at least 72 hours ahead; your chauffeur knows the authorised drop-off points closest to the pedestrian zones.',
        },
      },
    ],
    nearby: [],
  },
  {
    slug: 'toulouse',
    name: { fr: 'Toulouse', en: 'Toulouse' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Toulouse-Blagnac (TLS)',
    airportTransfer: {
      fr: 'L’aéroport de Toulouse-Blagnac (TLS) est à 8 km au nord-ouest du centre : 20 minutes suffisent pour rejoindre la place du Capitole hors heures de pointe. Votre chauffeur vous attend en zone d’arrivée avec panneau nominatif et suit votre vol pour ajuster l’heure de prise en charge.',
      en: 'Toulouse-Blagnac Airport (TLS) is 8 km north-west of the centre: 20 minutes is enough to reach Place du Capitole outside rush hour. Your chauffeur waits in the arrivals area with a name board and tracks your flight to adjust the pick-up time.',
    },
    intro: {
      fr: [
        'Quatrième ville de France et capitale européenne de l’aéronautique, Toulouse mérite son surnom de Ville rose : briques foraines du Capitole, basilique Saint-Sernin, hôtels particuliers de la Renaissance et rives de la Garonne. Votre **chauffeur privé à Toulouse** dessert le siège d’Airbus, les cliniques et laboratoires du sud-est toulousain, les stades et salles de congrès, comme les meilleures tables de la ville. Berlines et vans premium, prix fixes annoncés à l’avance, chauffeurs bilingues sur demande.',
        'Toulouse est aussi un point de départ exceptionnel vers le Grand Sud : **Carcassonne et sa cité médiévale** à moins d’une heure, Albi la cathédrale-forteresse, Cordes-sur-Ciel suspendue au-dessus du Cérou, les vignobles de Gaillac et de Fronton, les Pyrénées à l’horizon. En mise à disposition à la journée, votre chauffeur enchaîne les étapes sans que vous touchiez un volant — itinéraires sur mesure, arrêts photo, tables réservées.',
      ],
      en: [
        'France’s fourth-largest city and the European capital of aerospace, Toulouse earns its nickname of the Pink City: the terracotta bricks of the Capitole, the Saint-Sernin basilica, Renaissance mansions and the banks of the Garonne. Your **private chauffeur in Toulouse** serves the Airbus headquarters, the clinics and laboratories of the city’s south-east, its stadiums and convention centres, as well as its finest restaurants. Premium sedans and vans, fixed prices confirmed in advance, bilingual chauffeurs on request.',
        'Toulouse is also an exceptional gateway to the Grand Sud: **Carcassonne and its medieval citadel** under an hour away, Albi and its fortress cathedral, Cordes-sur-Ciel perched above the Cérou valley, the Gaillac and Fronton vineyards, the Pyrenees on the horizon. With a full-day chauffeur hire, you move from one stop to the next without ever touching a steering wheel — tailor-made itineraries, photo stops, tables booked ahead.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Carcassonne, cité médiévale', en: 'Carcassonne medieval citadel' },
        teaser: {
          fr: 'À 95 km au sud-est de Toulouse, la plus grande cité fortifiée d’Europe : 52 tours, la basilique Saint-Nazaire, les lices hautes. Déjeuner dans la Cité, retour par le canal du Midi et les vignes du Minervois.',
          en: '95 km south-east of Toulouse, Europe’s largest fortified city: 52 towers, the Saint-Nazaire basilica, the upper ramparts. Lunch inside the citadel, return via the Canal du Midi and the Minervois vineyards.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Albi et le musée Toulouse-Lautrec', en: 'Albi and the Toulouse-Lautrec Museum' },
        teaser: {
          fr: 'À 80 km au nord-est, la cathédrale Sainte-Cécile — la plus grande cathédrale de brique au monde — et le palais de la Berbie, qui abrite la première collection Toulouse-Lautrec. Vieux pont et berges du Tarn.',
          en: '80 km north-east, the Sainte-Cécile cathedral — the largest brick cathedral in the world — and the Berbie Palace, home to the leading Toulouse-Lautrec collection. Old bridge and the banks of the Tarn.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Cordes-sur-Ciel et les bastides', en: 'Cordes-sur-Ciel and the bastide towns' },
        teaser: {
          fr: 'La bastide de 1222 suspendue au-dessus de la brume du Cérou, ses façades gothiques et ses ateliers d’artisans, puis Castelnau-de-Montmiral ou Puycelsi. Dégustation dans le vignoble de Gaillac au retour.',
          en: 'The 1222 hilltop bastide floating above the Cérou mists, its Gothic façades and artisan workshops, then Castelnau-de-Montmiral or Puycelsi. A Gaillac vineyard tasting on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Aeroscopia et les coulisses d’Airbus', en: 'Aeroscopia and behind the scenes at Airbus' },
        teaser: {
          fr: 'À Blagnac, le musée Aeroscopia aligne Concorde, A300B et Super Guppy ; en complément, la visite guidée des chaînes d’assemblage A350 (sur réservation). L’aventure aéronautique toulousaine en une demi-journée.',
          en: 'In Blagnac, the Aeroscopia museum lines up Concorde, the A300B and the Super Guppy; add a guided tour of the A350 final assembly line (advance booking required). Toulouse’s aerospace story in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Soirée Ville rose', en: 'Pink City evening' },
        teaser: {
          fr: 'Dîner place du Capitole ou aux tables étoilées des Carmes — Michel Sarran, Py-r —, puis les quais de la Garonne et le dôme de la Grave illuminés. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Dinner on Place du Capitole or at the starred tables of Les Carmes — Michel Sarran, Py-r — then the illuminated Garonne quays and La Grave dome. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Toulouse-Blagnac et le centre-ville ?',
          en: 'How much does a transfer between Toulouse-Blagnac Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Toulouse-Blagnac (TLS) et le centre de Toulouse est facturé à prix fixe, confirmé à la réservation. Accueil en zone d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Toulouse-Blagnac (TLS) and central Toulouse is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals area with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition pour les déplacements professionnels autour d’Airbus ?',
          en: 'Do you offer hourly hire for business travel around Airbus?',
        },
        a: {
          fr: 'Oui. La mise à disposition à l’heure ou à la journée est notre formule la plus demandée à Toulouse : votre chauffeur enchaîne les sites de Blagnac, Colomiers et Labège, attend entre chaque rendez-vous et s’adapte aux changements d’agenda en temps réel.',
          en: 'Yes. Hourly or full-day hire is our most requested service in Toulouse: your chauffeur links the Blagnac, Colomiers and Labège sites, waits between each meeting and adapts to schedule changes in real time.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une excursion à Carcassonne ou Albi depuis Toulouse ?',
          en: 'Can you arrange a day trip to Carcassonne or Albi from Toulouse?',
        },
        a: {
          fr: 'Absolument. Carcassonne, Albi, Cordes-sur-Ciel ou le vignoble de Gaillac se visitent à la journée en aller-retour depuis Toulouse, à prix fixe. L’itinéraire, les horaires et les arrêts sont définis avec vous avant le départ, et restent modifiables en cours de route.',
          en: 'Absolutely. Carcassonne, Albi, Cordes-sur-Ciel or the Gaillac vineyards can all be visited as a round-trip day tour from Toulouse at a fixed price. The itinerary, timings and stops are agreed with you before departure and can still be adjusted along the way.',
        },
      },
    ],
    nearby: ['montpellier', 'biarritz'],
  },
  {
    slug: 'nantes',
    name: { fr: 'Nantes', en: 'Nantes' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Nantes Atlantique (NTE)',
    airportTransfer: {
      fr: 'L’aéroport de Nantes Atlantique (NTE) se situe à 8 km au sud-ouest du centre : comptez 20 minutes pour rejoindre la place Graslin ou le château des ducs de Bretagne. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Nantes Atlantique Airport (NTE) lies 8 km south-west of the centre: allow 20 minutes to reach Place Graslin or the Château des Ducs de Bretagne. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ancienne capitale des ducs de Bretagne devenue métropole créative de l’Ouest, Nantes aligne château médiéval, passage Pommeraye, île de Nantes et les Machines de l’île. Votre **chauffeur privé à Nantes** relie l’aéroport, la gare TGV, le quartier d’affaires Euronantes et les sièges du vignoble en berline Mercedes ou van premium. Transferts à prix fixe, mise à disposition à l’heure, chauffeurs bilingues sur demande : chaque trajet est confirmé à l’avance, sans surprise.',
        'Nantes ouvre aussi la Loire-Atlantique et au-delà : le **vignoble du Muscadet** commence aux portes de la ville, Clisson l’italienne est à trente minutes, La Baule et Guérande à une heure, et l’estuaire de la Loire déroule son parcours d’art contemporain jusqu’à Saint-Nazaire. En mise à disposition à la journée, votre chauffeur compose l’itinéraire avec vous — domaines réservés, arrêts photo, retour au port de plaisance ou à votre hôtel.',
      ],
      en: [
        'Former seat of the Dukes of Brittany turned creative capital of western France, Nantes lines up a medieval castle, the Passage Pommeraye, the Île de Nantes and the Machines de l’île. Your **private chauffeur in Nantes** links the airport, the TGV station, the Euronantes business district and the wine estates in a Mercedes sedan or premium van. Fixed-price transfers, hourly hire, bilingual chauffeurs on request: every journey is confirmed in advance, with no surprises.',
        'Nantes also opens up the Loire-Atlantique and beyond: the **Muscadet vineyards** begin at the city gates, Italianate Clisson is thirty minutes away, La Baule and Guérande one hour, and the Loire estuary unrolls its contemporary-art trail all the way to Saint-Nazaire. With a full-day hire, your chauffeur builds the itinerary with you — estates booked ahead, photo stops, return to the marina or your hotel.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Vignoble du Muscadet et Clisson', en: 'Muscadet vineyards and Clisson' },
        teaser: {
          fr: 'À trente minutes du centre, les coteaux de Sèvre-et-Maine et leurs domaines de melon de Bourgogne, puis Clisson, ses halles médiévales et son étonnante architecture italienne au bord de la Sèvre. Dégustations réservées, déjeuner de terroir.',
          en: 'Thirty minutes from the centre, the Sèvre-et-Maine slopes and their Melon de Bourgogne estates, then Clisson, its medieval market halls and its surprising Italianate architecture on the Sèvre. Pre-booked tastings, a lunch of local produce.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'La Baule et la presqu’île de Guérande', en: 'La Baule and the Guérande peninsula' },
        teaser: {
          fr: 'La plus belle baie d’Europe et ses villas Belle Époque, les remparts de Guérande, les marais salants et le petit port de Piriac. Déjeuner face à la mer, retour par Saint-Nazaire et le pont sur l’estuaire.',
          en: 'One of Europe’s finest bays and its Belle Époque villas, the ramparts of Guérande, the salt marshes and the little port of Piriac. Lunch facing the sea, return via Saint-Nazaire and the estuary bridge.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Les Machines de l’île en famille', en: 'The Machines de l’île with the family' },
        teaser: {
          fr: 'Le Grand Éléphant, le Carrousel des mondes marins et la Galerie des machines sur l’ancien site des chantiers navals. Votre van vous dépose à l’entrée, vous attend, puis enchaîne avec le château et le musée d’Arts.',
          en: 'The Great Elephant, the Marine Worlds Carousel and the Machine Gallery on the former shipyards. Your van drops you at the entrance, waits, then continues to the castle and the Musée d’Arts.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Estuaire de la Loire jusqu’à Saint-Nazaire', en: 'Loire estuary to Saint-Nazaire' },
        teaser: {
          fr: 'Le parcours d’art Estuaire au fil des rives — la Villa cheminée, le Serpent d’océan de Saint-Brevin —, les chantiers de l’Atlantique et Escal’Atlantic. Un itinéraire entre art contemporain et géants des mers.',
          en: 'The Estuaire art trail along the banks — the Villa Cheminée, the Serpent d’Océan at Saint-Brevin — then the Chantiers de l’Atlantique shipyard and Escal’Atlantic. An itinerary of contemporary art and ocean giants.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Soirée nantaise', en: 'Nantes evening' },
        teaser: {
          fr: 'Dîner à La Cigale, brasserie classée de 1895 face au théâtre Graslin, ou aux tables gastronomiques du quartier Bouffay, puis les anneaux lumineux de l’île de Nantes. Véhicule à disposition toute la soirée.',
          en: 'Dinner at La Cigale, the listed 1895 brasserie facing the Graslin theatre, or at the fine tables of the Bouffay quarter, then the illuminated rings of the Île de Nantes. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '330',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport Nantes Atlantique et le centre-ville ?',
          en: 'How much does a transfer between Nantes Atlantique Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nantes Atlantique (NTE) et le centre de Nantes est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard.',
          en: 'A private transfer between Nantes Atlantique (NTE) and central Nantes is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les liaisons entre Nantes et La Baule ou Pornic en saison ?',
          en: 'Do you cover journeys between Nantes and La Baule or Pornic in season?',
        },
        a: {
          fr: 'Oui, toute l’année. La Baule se rejoint en une heure environ, Pornic en cinquante minutes. En été, nous recommandons de réserver 48 heures à l’avance ; le prix reste fixe quelle que soit la circulation sur la route bleue.',
          en: 'Yes, all year round. La Baule is about an hour away, Pornic fifty minutes. In summer we recommend booking 48 hours ahead; the price stays fixed whatever the traffic on the coast road.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des vans pour les groupes au départ de Nantes ?',
          en: 'Do you offer vans for groups departing from Nantes?',
        },
        a: {
          fr: 'Oui. Nos vans Mercedes accueillent jusqu’à sept passagers avec bagages — idéal pour un mariage au vignoble, un séminaire à La Baule ou un transfert de groupe vers la gare ou l’aéroport. Plusieurs véhicules peuvent être coordonnés pour les effectifs plus importants.',
          en: 'Yes. Our Mercedes vans seat up to seven passengers with luggage — ideal for a vineyard wedding, a seminar in La Baule or a group transfer to the station or airport. Several vehicles can be coordinated for larger parties.',
        },
      },
    ],
    nearby: ['rennes', 'angers'],
  },
  {
    slug: 'montpellier',
    name: { fr: 'Montpellier', en: 'Montpellier' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Montpellier-Méditerranée (MPL)',
    airportTransfer: {
      fr: 'L’aéroport de Montpellier-Méditerranée (MPL) se trouve à 8 km au sud-est du centre, près de l’étang de Mauguio : comptez 15 à 20 minutes jusqu’à la place de la Comédie. Votre chauffeur vous attend en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Montpellier-Méditerranée Airport (MPL) lies 8 km south-east of the centre, near the Mauguio lagoon: allow 15 to 20 minutes to Place de la Comédie. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville universitaire depuis le Moyen Âge et métropole la plus dynamique du Languedoc, Montpellier marie hôtels particuliers de l’Écusson, place de la Comédie et quartiers signés Ricardo Bofill ou Philippe Starck. Votre **chauffeur privé à Montpellier** dessert l’aéroport, les deux gares TGV, les cliniques et centres de recherche, ainsi que les plages de Carnon et de La Grande-Motte. Berlines et vans premium, prix fixes confirmés à la réservation, ponctualité garantie.',
        'Autour de la ville, le Languedoc déroule ses trésors : **Saint-Guilhem-le-Désert et les gorges de l’Hérault**, le pic Saint-Loup et ses domaines viticoles, la Camargue et Aigues-Mortes, Sète et son port coloré. En mise à disposition à la journée, votre chauffeur enchaîne villages, caves et tables réservées pendant que vous profitez du paysage — un itinéraire sur mesure, modifiable en cours de route.',
      ],
      en: [
        'A university city since the Middle Ages and the most dynamic metropolis in Languedoc, Montpellier blends the mansions of the Écusson, Place de la Comédie and districts signed by Ricardo Bofill or Philippe Starck. Your **private chauffeur in Montpellier** serves the airport, both TGV stations, the clinics and research centres, as well as the beaches of Carnon and La Grande-Motte. Premium sedans and vans, fixed prices confirmed at booking, guaranteed punctuality.',
        'Around the city, Languedoc unfolds its treasures: **Saint-Guilhem-le-Désert and the Hérault gorges**, the Pic Saint-Loup and its wine estates, the Camargue and Aigues-Mortes, Sète and its colourful port. With a full-day hire, your chauffeur strings together villages, cellars and pre-booked tables while you enjoy the scenery — a tailor-made itinerary, adjustable along the way.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Saint-Guilhem-le-Désert et les gorges de l’Hérault', en: 'Saint-Guilhem-le-Désert and the Hérault gorges' },
        teaser: {
          fr: 'À 45 minutes du centre, l’abbaye de Gellone classée à l’UNESCO, le pont du Diable et les eaux turquoise de l’Hérault. Halte à la grotte de Clamouse, déjeuner sur la place du village sous le platane centenaire.',
          en: '45 minutes from the centre, the UNESCO-listed Gellone abbey, the Devil’s Bridge and the turquoise waters of the Hérault. A stop at the Clamouse cave, lunch on the village square beneath the ancient plane tree.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Vignobles du pic Saint-Loup', en: 'Pic Saint-Loup wine estates' },
        teaser: {
          fr: 'L’appellation la plus réputée du Languedoc, entre garrigue et falaises de l’Hortus. Dégustations dans deux ou trois domaines choisis avec vous, déjeuner vigneron, retour par les villages de Claret et Valflaunès.',
          en: 'Languedoc’s most celebrated appellation, between garrigue and the Hortus cliffs. Tastings at two or three estates chosen with you, a winegrower’s lunch, return via the villages of Claret and Valflaunès.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Camargue et Aigues-Mortes', en: 'The Camargue and Aigues-Mortes' },
        teaser: {
          fr: 'Les remparts intacts de Saint Louis, les salins roses et les flamants du petit delta, puis Le Grau-du-Roi et la pointe de l’Espiguette. Une journée entre histoire, sel et chevaux blancs.',
          en: 'The intact ramparts built by Saint Louis, the pink salt pans and flamingos of the little delta, then Le Grau-du-Roi and the Espiguette headland. A day of history, salt and white horses.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Sète et l’étang de Thau', en: 'Sète and the Thau lagoon' },
        teaser: {
          fr: 'Le mont Saint-Clair, les canaux de la « Venise du Languedoc », le cimetière marin cher à Valéry et Brassens, puis dégustation d’huîtres de Bouzigues face aux parcs, verre de picpoul à la main.',
          en: 'Mont Saint-Clair, the canals of the “Venice of Languedoc”, the marine cemetery beloved of Valéry and Brassens, then Bouzigues oysters tasted facing the beds, a glass of Picpoul in hand.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Soirée Comédie et Écusson', en: 'Comédie and Écusson evening' },
        teaser: {
          fr: 'Dîner aux tables gastronomiques de la ville — la Réserve Rimbaud au bord du Lez, les adresses des frères Pourcel — puis flânerie dans l’Écusson illuminé. Dépose au plus près, véhicule à disposition.',
          en: 'Dinner at the city’s fine tables — La Réserve Rimbaud on the Lez, the Pourcel brothers’ addresses — then a stroll through the illuminated Écusson. Door-to-door drop-off, vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '330',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Montpellier-Méditerranée et le centre-ville ?',
          en: 'How much does a transfer between Montpellier-Méditerranée Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Montpellier-Méditerranée (MPL) et le centre est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Montpellier-Méditerranée (MPL) and the centre is charged at a fixed price, confirmed at booking. Meet-and-greet with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous la gare Montpellier Sud de France ?',
          en: 'Do you serve Montpellier Sud de France station?',
        },
        a: {
          fr: 'Oui. Nous assurons les prises en charge aux deux gares — Saint-Roch en centre-ville et Sud de France, à 6 km au sud-est. Votre chauffeur suit l’horaire du train en temps réel et vous attend à la descente, quel que soit le retard.',
          en: 'Yes. We handle pick-ups at both stations — Saint-Roch in the city centre and Sud de France, 6 km south-east. Your chauffeur tracks the train in real time and waits as you step off, whatever the delay.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une journée dans les vignobles du Languedoc ?',
          en: 'Can you arrange a day in the Languedoc vineyards?',
        },
        a: {
          fr: 'Absolument. Pic Saint-Loup, Terrasses du Larzac ou étang de Thau : nous composons l’itinéraire avec vous, réservons les dégustations et une table vigneronne. Vous goûtez sans compter, votre chauffeur conduit — prix fixe convenu avant le départ.',
          en: 'Absolutely. Pic Saint-Loup, Terrasses du Larzac or the Thau lagoon: we build the itinerary with you, book the tastings and a winegrower’s table. You taste freely, your chauffeur drives — fixed price agreed before departure.',
        },
      },
    ],
    nearby: ['nimes', 'avignon', 'aix-en-provence'],
  },
  {
    slug: 'lille',
    name: { fr: 'Lille', en: 'Lille' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Lille-Lesquin (LIL)',
    airportTransfer: {
      fr: 'L’aéroport de Lille-Lesquin (LIL) est à 11 km au sud-est du centre : comptez 20 minutes jusqu’à la Grand’Place hors heures de pointe. Nous desservons aussi les gares Lille-Europe et Lille-Flandres, ainsi que Bruxelles-Zaventem et Paris-CDF sur demande. Accueil avec panneau nominatif et suivi du vol inclus.',
      en: 'Lille-Lesquin Airport (LIL) is 11 km south-east of the centre: allow 20 minutes to the Grand’Place outside rush hour. We also serve Lille-Europe and Lille-Flandres stations, plus Brussels-Zaventem and Paris-CDG on request. Name-board meet-and-greet and flight tracking included.',
    },
    intro: {
      fr: [
        'Capitale des Flandres, ville d’art et carrefour de l’Europe du Nord, Lille aligne façades flamandes de la Grand’Place, Vieille Bourse, Palais des Beaux-Arts et la Piscine de Roubaix à quelques minutes. Votre **chauffeur privé à Lille** relie les gares Lille-Europe et Lille-Flandres, l’aéroport de Lesquin, les sièges d’EuraLille et les sites industriels de la métropole. Berlines et vans premium, prix fixes, chauffeurs habitués aux trajets transfrontaliers vers la Belgique.',
        'Depuis Lille, tout est proche : **Bruges et Gand** à moins d’une heure trente, Bruxelles à une heure, la Côte d’Opale et ses caps à quatre-vingt-dix minutes, les champs de bataille de la Somme et les mémoriaux de l’Artois sur la route. Pendant la braderie de septembre ou Lille 3000, votre chauffeur maîtrise les fermetures du centre et les points de dépose autorisés — une logistique sans faille, de jour comme de nuit.',
      ],
      en: [
        'Capital of Flanders, a city of art and the crossroads of northern Europe, Lille lines up the Flemish façades of the Grand’Place, the Vieille Bourse, the Palais des Beaux-Arts and La Piscine in Roubaix minutes away. Your **private chauffeur in Lille** connects Lille-Europe and Lille-Flandres stations, Lesquin airport, the EuraLille headquarters and the metropolitan industrial sites. Premium sedans and vans, fixed prices, chauffeurs at ease with cross-border runs into Belgium.',
        'From Lille, everything is close: **Bruges and Ghent** under ninety minutes away, Brussels one hour, the Opal Coast and its capes ninety minutes, the Somme battlefields and Artois memorials on the way. During the September braderie or Lille 3000, your chauffeur knows the centre’s road closures and authorised drop-off points — faultless logistics, day and night.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Bruges, la Venise du Nord', en: 'Bruges, Venice of the North' },
        teaser: {
          fr: 'À 75 minutes de Lille, les canaux, le beffroi et le béguinage de la ville la mieux préservée de Flandre. Déjeuner au bord du Dijver, chocolatiers et dentellières, retour possible par Gand et son château des Comtes.',
          en: '75 minutes from Lille: the canals, belfry and beguinage of Flanders’ best-preserved city. Lunch beside the Dijver, chocolatiers and lacemakers, with an optional return via Ghent and its Gravensteen castle.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Côte d’Opale, caps Blanc-Nez et Gris-Nez', en: 'Opal Coast, Cap Blanc-Nez and Cap Gris-Nez' },
        teaser: {
          fr: 'Les falaises de craie face à l’Angleterre, Wissant et sa baie, déjeuner iodé à Audresselles puis Boulogne-sur-Mer et Nausicaá, le plus grand aquarium d’Europe. Grand air garanti à quatre-vingt-dix minutes de Lille.',
          en: 'Chalk cliffs facing England, Wissant and its bay, a seafood lunch in Audresselles, then Boulogne-sur-Mer and Nausicaá, Europe’s largest aquarium. Sea air guaranteed, ninety minutes from Lille.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Mémoriaux de la Grande Guerre', en: 'Great War memorials' },
        teaser: {
          fr: 'Vimy et ses tranchées canadiennes, Notre-Dame-de-Lorette et l’Anneau de la Mémoire, puis les cimetières de l’Artois ou la Somme selon votre histoire familiale. Un itinéraire du souvenir préparé avec vous.',
          en: 'Vimy and its Canadian trenches, Notre-Dame-de-Lorette and the Ring of Remembrance, then the Artois cemeteries or the Somme according to your family history. A remembrance itinerary prepared with you.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'La Piscine de Roubaix et le Louvre-Lens', en: 'La Piscine in Roubaix and the Louvre-Lens' },
        teaser: {
          fr: 'Deux musées qui ont réinventé le Nord : l’Art déco de la Piscine, bassin et mosaïques intacts, puis la Galerie du temps du Louvre-Lens posée sur un ancien carreau de mine. Transferts et attente compris.',
          en: 'Two museums that reinvented the North: the Art Deco of La Piscine, pool and mosaics intact, then the Galerie du Temps at the Louvre-Lens, set on a former colliery. Transfers and waiting time included.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Soirée flamande dans le Vieux-Lille', en: 'Flemish evening in Vieux-Lille' },
        teaser: {
          fr: 'Dîner dans un estaminet ou aux tables gastronomiques du Vieux-Lille — Rouge Barre, la Table du Clarance —, puis la Grand’Place et la Vieille Bourse illuminées. Dépose au plus près des rues pavées, retour sans contrainte.',
          en: 'Dinner in an estaminet or at the fine tables of Vieux-Lille — Rouge Barre, La Table du Clarance — then the illuminated Grand’Place and Vieille Bourse. Drop-off as close as the cobbled lanes allow, effortless return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Assurez-vous les transferts entre Lille et les aéroports de Bruxelles ou Paris-CDG ?',
          en: 'Do you provide transfers between Lille and Brussels or Paris-CDG airports?',
        },
        a: {
          fr: 'Oui. Bruxelles-Zaventem se rejoint en 1 h 15 environ, Paris-CDG en 2 heures, Charleroi en 1 h 30. Ces trajets longue distance sont devisés à prix fixe, avec suivi du vol et attente incluse à l’arrivée.',
          en: 'Yes. Brussels-Zaventem is about 1 h 15 away, Paris-CDG 2 hours, Charleroi 1 h 30. These long-distance journeys are quoted at a fixed price, with flight tracking and waiting time included on arrival.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous prendre en charge à la descente de l’Eurostar à Lille-Europe ?',
          en: 'Can you pick up straight off the Eurostar at Lille-Europe?',
        },
        a: {
          fr: 'Bien sûr. Votre chauffeur suit l’horaire du train en temps réel et vous attend en gare, panneau nominatif en main, à la sortie des quais. La prise en charge fonctionne de la même façon à Lille-Flandres pour les TGV.',
          en: 'Of course. Your chauffeur tracks the train in real time and waits in the station with a name board at the platform exit. Pick-ups work the same way at Lille-Flandres for TGV arrivals.',
        },
      },
      {
        q: {
          fr: 'Circulez-vous pendant la Braderie de Lille ?',
          en: 'Do you operate during the Braderie de Lille?',
        },
        a: {
          fr: 'Oui, avec une logistique adaptée : le premier week-end de septembre, le centre est fermé à la circulation. Votre chauffeur utilise les points de dépose autorisés en périphérie immédiate et ajuste l’itinéraire en temps réel. Réservez plusieurs jours à l’avance.',
          en: 'Yes, with adapted logistics: on the first weekend of September the centre is closed to traffic. Your chauffeur uses the authorised drop-off points on the immediate edge of the pedestrian zone and adjusts the route in real time. Book several days ahead.',
        },
      },
    ],
    nearby: ['reims'],
  },
  {
    slug: 'rennes',
    name: { fr: 'Rennes', en: 'Rennes' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Rennes Bretagne (RNS)',
    airportTransfer: {
      fr: 'L’aéroport de Rennes Bretagne (RNS), à Saint-Jacques-de-la-Lande, se trouve à 7 km au sud-ouest du centre : comptez 15 minutes jusqu’à la place des Lices. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Rennes Bretagne Airport (RNS), at Saint-Jacques-de-la-Lande, lies 7 km south-west of the centre: allow 15 minutes to Place des Lices. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de la Bretagne à 1 h 25 de Paris en TGV, Rennes conjugue maisons à pans de bois de la place Sainte-Anne, parlement de Bretagne, marché des Lices et technopoles de Rennes Atalante. Votre **chauffeur privé à Rennes** assure transferts gare et aéroport, mises à disposition pour vos rendez-vous d’affaires et trajets vers tout l’Ouest, en berline Mercedes ou van de grande capacité. Prix fixes annoncés à la réservation, ponctualité garantie.',
        'Rennes est surtout la porte d’entrée idéale de la Bretagne : **Saint-Malo et le Mont-Saint-Michel** à moins d’une heure, Dinan et la Rance, la forêt de Brocéliande et ses légendes arthuriennes, la côte d’Émeraude jusqu’au cap Fréhel. En mise à disposition à la journée, votre chauffeur compose un itinéraire breton sur mesure — marées vérifiées, tables réservées, retour à l’heure de votre TGV.',
      ],
      en: [
        'Brittany’s capital, 1 h 25 from Paris by TGV, Rennes combines the half-timbered houses of Place Sainte-Anne, the Parliament of Brittany, the Lices market and the Rennes Atalante tech campuses. Your **private chauffeur in Rennes** handles station and airport transfers, hourly hire for business meetings and journeys across western France, in a Mercedes sedan or full-size van. Fixed prices confirmed at booking, guaranteed punctuality.',
        'Above all, Rennes is the ideal gateway to Brittany: **Saint-Malo and Mont-Saint-Michel** under an hour away, Dinan and the Rance valley, the Brocéliande forest and its Arthurian legends, the Emerald Coast out to Cap Fréhel. With a full-day hire, your chauffeur shapes a bespoke Breton itinerary — tides checked, tables booked, back in time for your TGV.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Mont-Saint-Michel à la journée', en: 'Mont-Saint-Michel day tour' },
        teaser: {
          fr: 'À 55 minutes de Rennes, la Merveille de l’Occident : l’abbaye au sommet, les remparts, la baie aux plus grandes marées d’Europe. Dépose aux navettes, attente incluse, déjeuner réservé face au Mont.',
          en: '55 minutes from Rennes, the Wonder of the West: the abbey at the summit, the ramparts, the bay with Europe’s highest tides. Drop-off at the shuttles, waiting time included, lunch booked facing the Mount.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Saint-Malo et Dinard', en: 'Saint-Malo and Dinard' },
        teaser: {
          fr: 'Les remparts de la cité corsaire, la maison de Chateaubriand au Grand Bé à marée basse, puis les villas Belle Époque de Dinard de l’autre côté de la Rance. Huîtres de Cancale en option au retour.',
          en: 'The ramparts of the corsair city, Chateaubriand’s tomb on the Grand Bé at low tide, then the Belle Époque villas of Dinard across the Rance. Cancale oysters as an option on the way back.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Brocéliande, forêt des légendes', en: 'Brocéliande, forest of legends' },
        teaser: {
          fr: 'À 40 minutes de Rennes, le Val sans Retour, le tombeau de Merlin et la fontaine de Barenton dans la forêt de Paimpont. Halte au château de Comper, centre de l’imaginaire arthurien. Une échappée hors du temps.',
          en: '40 minutes from Rennes: the Valley of No Return, Merlin’s tomb and the Barenton fountain in the Paimpont forest. A stop at Comper castle, home of the Arthurian imagination centre. An escape out of time.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Dinan et la vallée de la Rance', en: 'Dinan and the Rance valley' },
        teaser: {
          fr: 'La plus belle cité médiévale de Bretagne : remparts de trois kilomètres, rue du Jerzual pavée descendant au port, ateliers d’artisans. Retour par Léhon et les rives de la Rance jusqu’à l’usine marémotrice.',
          en: 'Brittany’s finest medieval town: three kilometres of ramparts, the cobbled Rue du Jerzual descending to the port, artisan workshops. Return via Léhon and the banks of the Rance to the tidal power station.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Soirée rennaise', en: 'Rennes evening' },
        teaser: {
          fr: 'Dîner aux tables reconnues de la ville — Ima, Racines, Holen — puis les façades à colombages illuminées de la place Sainte-Anne et du Champ-Jacquet. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Dinner at the city’s acclaimed tables — Ima, Racines, Holen — then the illuminated half-timbered façades of Place Sainte-Anne and Champ-Jacquet. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre la gare de Rennes et le Mont-Saint-Michel ?',
          en: 'How much does a transfer between Rennes station and Mont-Saint-Michel cost?',
        },
        a: {
          fr: 'Le trajet direct gare de Rennes → Mont-Saint-Michel prend environ 55 minutes et est facturé à prix fixe, communiqué à la réservation. Votre chauffeur suit l’horaire de votre TGV et peut attendre sur place pour le retour ou revenir vous chercher à l’heure convenue.',
          en: 'The direct journey from Rennes station to Mont-Saint-Michel takes around 55 minutes and is charged at a fixed price, confirmed at booking. Your chauffeur tracks your TGV and can either wait on site for the return or come back at an agreed time.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des circuits de plusieurs jours en Bretagne au départ de Rennes ?',
          en: 'Do you offer multi-day tours of Brittany from Rennes?',
        },
        a: {
          fr: 'Oui. Côte d’Émeraude, Finistère, golfe du Morbihan : nous construisons des itinéraires de deux à cinq jours avec le même chauffeur, hôtels et tables réservés selon vos souhaits. Devis global à prix fixe avant le départ.',
          en: 'Yes. The Emerald Coast, Finistère, the Gulf of Morbihan: we build two- to five-day itineraries with the same chauffeur, hotels and restaurants booked to your wishes. A single fixed-price quote before departure.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer un transfert direct entre Rennes et Paris ?',
          en: 'Can you provide a direct transfer between Rennes and Paris?',
        },
        a: {
          fr: 'Oui, en 3 h 30 environ porte à porte, à prix fixe. C’est une alternative appréciée au TGV quand vous voyagez en famille, avec des bagages volumineux ou vers une adresse mal desservie — le véhicule reste à votre disposition aux pauses.',
          en: 'Yes, in around 3 h 30 door to door, at a fixed price. It is a popular alternative to the TGV when travelling as a family, with bulky luggage or to an address poorly served by rail — the vehicle stays at your disposal during breaks.',
        },
      },
    ],
    nearby: ['nantes'],
  },
  {
    slug: 'reims',
    name: { fr: 'Reims', en: 'Reims' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airportTransfer: {
      fr: 'Reims se rejoint depuis Paris-CDG en 1 h 30 environ (145 km par l’A4) : votre chauffeur vous accueille en salle d’arrivée et vous dépose devant votre maison de champagne ou votre hôtel. La gare Champagne-Ardenne TGV, à 10 km au sud-ouest, place Paris à 45 minutes de train — prise en charge à quai suivie en temps réel.',
      en: 'Reims is about 1 h 30 from Paris-CDG (145 km via the A4): your chauffeur meets you in arrivals and drops you at your champagne house or hotel. Champagne-Ardenne TGV station, 10 km south-west, puts Paris 45 minutes away by train — platform pick-up tracked in real time.',
    },
    intro: {
      fr: [
        'Ville des sacres où trente-trois rois de France furent couronnés, Reims aligne cathédrale gothique classée à l’UNESCO, basilique Saint-Remi, façades Art déco de la reconstruction et les caves des plus grandes maisons de champagne. Votre **chauffeur privé à Reims** relie Paris et ses aéroports, la gare Champagne-Ardenne TGV, les maisons Veuve Clicquot, Ruinart, Taittinger ou Pommery, en berline Mercedes ou van premium. Prix fixes, ponctualité, discrétion.',
        'Reims est le point de départ naturel de la **route touristique du Champagne** : la montagne de Reims et ses villages grand cru — Verzenay, Bouzy, Ambonnay —, Épernay et l’avenue de Champagne à trente minutes, Hautvillers où repose dom Pérignon. Votre chauffeur enchaîne les dégustations réservées pendant que vous goûtez sans compter, et vous ramène à votre hôtel ou à votre train sans la moindre contrainte.',
      ],
      en: [
        'The coronation city where thirty-three kings of France were crowned, Reims lines up a UNESCO-listed Gothic cathedral, the Saint-Remi basilica, Art Deco façades from the reconstruction and the cellars of the greatest champagne houses. Your **private chauffeur in Reims** connects Paris and its airports, Champagne-Ardenne TGV station, and the houses of Veuve Clicquot, Ruinart, Taittinger or Pommery, in a Mercedes sedan or premium van. Fixed prices, punctuality, discretion.',
        'Reims is the natural starting point of the **Champagne tourist route**: the Montagne de Reims and its grand cru villages — Verzenay, Bouzy, Ambonnay — Épernay and the Avenue de Champagne thirty minutes away, Hautvillers where Dom Pérignon rests. Your chauffeur links the pre-booked tastings while you sip freely, then returns you to your hotel or train without the slightest constraint.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Grandes maisons de champagne', en: 'The great champagne houses' },
        teaser: {
          fr: 'Ruinart, Veuve Clicquot, Taittinger, Pommery : les crayères gallo-romaines classées à l’UNESCO et les cuvées de prestige, visites et dégustations réservées à l’avance. Déjeuner accordé mets et champagnes entre deux caves.',
          en: 'Ruinart, Veuve Clicquot, Taittinger, Pommery: the UNESCO-listed Gallo-Roman chalk cellars and prestige cuvées, with visits and tastings booked ahead. A food-and-champagne pairing lunch between two cellars.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Montagne de Reims et villages grand cru', en: 'Montagne de Reims and grand cru villages' },
        teaser: {
          fr: 'Verzenay et son phare au milieu des vignes, Bouzy, Ambonnay, les vignerons indépendants qui reçoivent au domaine. Panoramas sur l’océan de ceps, dégustations confidentielles, retour par le moulin de Verzenay.',
          en: 'Verzenay and its lighthouse amid the vines, Bouzy, Ambonnay, independent growers who welcome you at the estate. Views over an ocean of vines, confidential tastings, return via the Verzenay windmill.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Épernay et Hautvillers', en: 'Épernay and Hautvillers' },
        teaser: {
          fr: 'L’avenue de Champagne et ses maisons de prestige — Moët & Chandon, Perrier-Jouët —, puis le village de Hautvillers et l’abbatiale où repose dom Pérignon, au-dessus des coteaux classés à l’UNESCO.',
          en: 'The Avenue de Champagne and its prestigious houses — Moët & Chandon, Perrier-Jouët — then the village of Hautvillers and the abbey church where Dom Pérignon rests, above the UNESCO-listed slopes.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '490',
      },
      {
        title: { fr: 'Reims des sacres et Art déco', en: 'Coronation and Art Deco Reims' },
        teaser: {
          fr: 'La cathédrale et ses vitraux de Chagall, le palais du Tau, la basilique Saint-Remi, puis les façades Art déco du centre reconstruit, la bibliothèque Carnegie et une halte aux Halles du Boulingrin.',
          en: 'The cathedral with its Chagall windows, the Palais du Tau, the Saint-Remi basilica, then the Art Deco façades of the rebuilt centre, the Carnegie library and a stop at the Boulingrin market halls.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Soirée gastronomique en Champagne', en: 'Gourmet evening in Champagne' },
        teaser: {
          fr: 'Dîner aux grandes tables de la région — l’Assiette Champenoise de la famille Lallement, le Royal Champagne à Champillon — avec dépose devant la table et retour de nuit à votre hôtel, où qu’il soit.',
          en: 'Dinner at the region’s great tables — the Lallement family’s Assiette Champenoise, the Royal Champagne in Champillon — with drop-off at the door and a late-night return to your hotel, wherever it is.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Paris ou Paris-CDG et Reims ?',
          en: 'How much does a transfer between Paris or Paris-CDG and Reims cost?',
        },
        a: {
          fr: 'Le transfert Paris-CDG → Reims (145 km, environ 1 h 30) est facturé à prix fixe, confirmé à la réservation, suivi du vol et attente inclus. Depuis le centre de Paris, comptez 1 h 45 environ ; le tarif reste fixe quelle que soit la circulation.',
          en: 'The Paris-CDG → Reims transfer (145 km, about 1 h 30) is charged at a fixed price, confirmed at booking, with flight tracking and waiting time included. From central Paris allow about 1 h 45; the fare stays fixed whatever the traffic.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser les visites et dégustations dans les maisons de champagne ?',
          en: 'Can you arrange visits and tastings at the champagne houses?',
        },
        a: {
          fr: 'Oui. Les grandes maisons reçoivent uniquement sur réservation : nous coordonnons les créneaux de visite avec votre itinéraire et pouvons suggérer des vignerons indépendants plus confidentiels. Votre chauffeur conduit, vous dégustez librement.',
          en: 'Yes. The great houses receive visitors by appointment only: we coordinate the visit slots with your itinerary and can suggest more confidential independent growers. Your chauffeur drives, you taste freely.',
        },
      },
      {
        q: {
          fr: 'Une journée suffit-elle pour découvrir Reims et Épernay ?',
          en: 'Is one day enough to see both Reims and Épernay?',
        },
        a: {
          fr: 'Une journée bien construite permet la cathédrale, une grande maison à Reims et l’avenue de Champagne à Épernay, distantes de trente minutes. Pour ajouter la montagne de Reims ou des vignerons de village, prévoyez deux jours — nous composons le programme avec vous.',
          en: 'A well-planned day covers the cathedral, one great house in Reims and the Avenue de Champagne in Épernay, thirty minutes apart. To add the Montagne de Reims or village growers, allow two days — we shape the programme with you.',
        },
      },
    ],
    nearby: ['lille'],
  },
  {
    slug: 'dijon',
    name: { fr: 'Dijon', en: 'Dijon' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airportTransfer: {
      fr: 'Dijon se rejoint depuis l’aéroport de Lyon-Saint-Exupéry en 2 heures environ (190 km) et depuis Paris-CDG en 3 heures ; Genève est à 2 h 15. La gare de Dijon-Ville, à 1 h 35 de Paris en TGV, est notre point de prise en charge le plus fréquent — accueil à quai, panneau nominatif, horaire du train suivi en temps réel.',
      en: 'Dijon is about 2 hours from Lyon-Saint-Exupéry Airport (190 km) and 3 hours from Paris-CDG; Geneva is 2 h 15 away. Dijon-Ville station, 1 h 35 from Paris by TGV, is our most frequent pick-up point — platform meet-and-greet with a name board, train times tracked in real time.',
    },
    intro: {
      fr: [
        'Capitale des ducs de Bourgogne, Dijon déploie palais ducal, hôtels particuliers aux toits vernissés, chouette porte-bonheur de Notre-Dame et Cité internationale de la gastronomie et du vin. Votre **chauffeur privé à Dijon** assure transferts gare et aéroports, mises à disposition pour vos rendez-vous et trajets d’affaires vers Paris, Lyon ou Genève, en berline Mercedes ou van premium. Prix fixes confirmés à la réservation, chauffeurs bilingues sur demande.',
        'Dijon ouvre surtout la **route des Grands Crus**, « Champs-Élysées de la Bourgogne » : Gevrey-Chambertin, Vougeot, Vosne-Romanée et Nuits-Saint-Georges s’égrènent sur trente kilomètres jusqu’à Beaune. Les climats de Bourgogne, classés à l’UNESCO, se découvrent au rythme des dégustations que nous réservons pour vous — votre chauffeur conduit, vous goûtez, et l’itinéraire s’ajuste à vos coups de cœur.',
      ],
      en: [
        'Capital of the Dukes of Burgundy, Dijon unfolds its ducal palace, mansions with glazed-tile roofs, the lucky owl of Notre-Dame and the International City of Gastronomy and Wine. Your **private chauffeur in Dijon** handles station and airport transfers, hourly hire for meetings and business journeys to Paris, Lyon or Geneva, in a Mercedes sedan or premium van. Fixed prices confirmed at booking, bilingual chauffeurs on request.',
        'Above all, Dijon opens the **Route des Grands Crus**, the “Champs-Élysées of Burgundy”: Gevrey-Chambertin, Vougeot, Vosne-Romanée and Nuits-Saint-Georges follow one another over thirty kilometres down to Beaune. The UNESCO-listed climats of Burgundy reveal themselves at the pace of tastings we book for you — your chauffeur drives, you taste, and the itinerary bends to your discoveries.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Route des Grands Crus', en: 'Route des Grands Crus' },
        teaser: {
          fr: 'De Gevrey-Chambertin à Nuits-Saint-Georges par Vougeot et Vosne-Romanée : les climats classés à l’UNESCO, le château du Clos de Vougeot, dégustations dans les domaines réservés pour vous. Déjeuner vigneron en cours de route.',
          en: 'From Gevrey-Chambertin to Nuits-Saint-Georges via Vougeot and Vosne-Romanée: the UNESCO-listed climats, the Château du Clos de Vougeot, tastings at estates booked for you. A winegrower’s lunch along the way.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Beaune et les Hospices', en: 'Beaune and the Hospices' },
        teaser: {
          fr: 'À 45 minutes par la route des vins, l’Hôtel-Dieu et ses toits polychromes, les caves des maisons de négoce, les remparts. Retour par Pommard et Meursault pour prolonger la dégustation côté côte de Beaune.',
          en: '45 minutes down the wine route: the Hôtel-Dieu and its polychrome roofs, the merchant houses’ cellars, the ramparts. Return via Pommard and Meursault to extend the tasting on the Côte de Beaune.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Dijon des ducs et de la gastronomie', en: 'Ducal and gastronomic Dijon' },
        teaser: {
          fr: 'Le palais des ducs et le musée des Beaux-Arts, la chouette de Notre-Dame, les halles signées Eiffel, puis la Cité internationale de la gastronomie. Moutarderie et cassis de Dijon en dégustation.',
          en: 'The ducal palace and the Musée des Beaux-Arts, the owl of Notre-Dame, the Eiffel-designed market halls, then the International City of Gastronomy. Mustard house and Dijon blackcurrant tastings included.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Abbaye de Fontenay et Flavigny', en: 'Fontenay Abbey and Flavigny' },
        teaser: {
          fr: 'À une heure de Dijon, l’abbaye cistercienne de Fontenay, la mieux conservée du monde et classée à l’UNESCO, puis Flavigny-sur-Ozerain, village des anis et décor du film « Chocolat ». Auxois secret et intact.',
          en: 'An hour from Dijon, the Cistercian abbey of Fontenay, the world’s best preserved and UNESCO-listed, then Flavigny-sur-Ozerain, village of aniseed sweets and setting of the film “Chocolat”. The secret, untouched Auxois.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Soirée dijonnaise', en: 'Dijon evening' },
        teaser: {
          fr: 'Dîner aux grandes tables de la ville — William Frachot, la Maison des Cariatides — puis les rues médiévales et le palais ducal illuminés. Dépose devant la table, véhicule à disposition pour la soirée.',
          en: 'Dinner at the city’s great tables — William Frachot, La Maison des Cariatides — then the illuminated medieval streets and ducal palace. Drop-off at the door, vehicle on standby for the evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Comment rejoindre Dijon depuis les aéroports parisiens ou lyonnais ?',
          en: 'How do I reach Dijon from the Paris or Lyon airports?',
        },
        a: {
          fr: 'Nous assurons les transferts directs depuis Paris-CDG (3 heures), Paris-Orly, Lyon-Saint-Exupéry (2 heures) et Genève (2 h 15), à prix fixe avec suivi du vol. Beaucoup de clients préfèrent le TGV jusqu’à Dijon-Ville, où votre chauffeur vous attend à quai.',
          en: 'We provide direct transfers from Paris-CDG (3 hours), Paris-Orly, Lyon-Saint-Exupéry (2 hours) and Geneva (2 h 15), at a fixed price with flight tracking. Many clients prefer the TGV to Dijon-Ville, where your chauffeur waits on the platform.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une journée complète sur la route des Grands Crus ?',
          en: 'Can you arrange a full day on the Route des Grands Crus?',
        },
        a: {
          fr: 'Oui, c’est notre demande la plus fréquente à Dijon. Nous réservons deux à trois domaines selon vos goûts — grands noms ou vignerons confidentiels —, une table vigneronne pour le déjeuner, et l’itinéraire reste modifiable en cours de journée. Prix fixe convenu avant le départ.',
          en: 'Yes, it is our most requested service in Dijon. We book two or three estates to your taste — famous names or confidential growers — plus a winegrower’s table for lunch, and the itinerary stays flexible through the day. Fixed price agreed before departure.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver longtemps à l’avance pendant la vente des vins des Hospices de Beaune ?',
          en: 'How far ahead should I book during the Hospices de Beaune wine auction?',
        },
        a: {
          fr: 'Le troisième week-end de novembre, la côte de Beaune affiche complet et la demande de chauffeurs est très forte. Réservez idéalement deux à trois semaines à l’avance ; nous bloquons alors véhicule et chauffeur pour l’ensemble de votre séjour.',
          en: 'On the third weekend of November the Côte de Beaune is fully booked and chauffeur demand is very high. Ideally book two to three weeks ahead; we then reserve the vehicle and chauffeur for your entire stay.',
        },
      },
    ],
    nearby: [],
  },
  {
    slug: 'tours',
    name: { fr: 'Tours', en: 'Tours' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Tours Val de Loire (TUF)',
    airportTransfer: {
      fr: 'L’aéroport de Tours Val de Loire (TUF) est à 6 km au nord-est du centre : comptez 15 minutes jusqu’à la place Plumereau. Depuis Paris-CDG, comptez 2 h 30 par l’A10 (240 km) ; la gare de Saint-Pierre-des-Corps, à 1 heure de Paris en TGV, est notre point de prise en charge le plus courant.',
      en: 'Tours Val de Loire Airport (TUF) is 6 km north-east of the centre: allow 15 minutes to Place Plumereau. From Paris-CDG allow 2 h 30 via the A10 (240 km); Saint-Pierre-des-Corps station, one hour from Paris by TGV, is our most common pick-up point.',
    },
    intro: {
      fr: [
        'Ancienne capitale royale au cœur du Val de Loire classé à l’UNESCO, Tours séduit par le vieux Tours et la place Plumereau, la cathédrale Saint-Gatien et les bords de Loire. Votre **chauffeur privé à Tours** vous prend en charge à Saint-Pierre-des-Corps, à l’aéroport ou à votre hôtel, pour des transferts à prix fixe, des mises à disposition à l’heure et des journées châteaux entièrement organisées, en berline Mercedes ou van premium.',
        'Tours est la base idéale pour les **châteaux de la Loire** : Chenonceau et Amboise à trente minutes, Villandry et ses jardins à vingt, Azay-le-Rideau, Chambord et Cheverny dans la journée. Ajoutez les caves de Vouvray et de Montlouis, les tables gastronomiques de la région, et laissez votre chauffeur orchestrer horaires, billets coupe-file et déjeuners — vous n’avez plus qu’à visiter.',
      ],
      en: [
        'A former royal capital at the heart of the UNESCO-listed Loire Valley, Tours charms with old Tours and Place Plumereau, the Saint-Gatien cathedral and the banks of the Loire. Your **private chauffeur in Tours** picks you up at Saint-Pierre-des-Corps, at the airport or at your hotel, for fixed-price transfers, hourly hire and fully organised château days, in a Mercedes sedan or premium van.',
        'Tours is the ideal base for the **châteaux of the Loire**: Chenonceau and Amboise thirty minutes away, Villandry and its gardens twenty, Azay-le-Rideau, Chambord and Cheverny within a day. Add the cellars of Vouvray and Montlouis and the region’s gourmet tables, and let your chauffeur orchestrate timings, skip-the-line tickets and lunches — all you have to do is visit.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Chenonceau et Amboise', en: 'Chenonceau and Amboise' },
        teaser: {
          fr: 'Le château des Dames enjambant le Cher, puis le château royal d’Amboise et le Clos Lucé, dernière demeure de Léonard de Vinci. Billets coupe-file, déjeuner en cours de route, rythme adapté à vos envies.',
          en: 'The Ladies’ Château spanning the Cher, then the royal château of Amboise and Clos Lucé, Leonardo da Vinci’s final home. Skip-the-line tickets, lunch along the way, a pace set to your wishes.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Chambord et Cheverny', en: 'Chambord and Cheverny' },
        teaser: {
          fr: 'Le colosse de François Iᵉʳ et son escalier à double révolution, puis Cheverny, toujours habité, qui inspira Moulinsart. Halte possible à Blois ou dans une cave de Cour-Cheverny au retour.',
          en: 'François I’s colossus with its double-helix staircase, then Cheverny, still inhabited, the model for Tintin’s Marlinspike Hall. An optional stop in Blois or a Cour-Cheverny cellar on the return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Villandry et Azay-le-Rideau', en: 'Villandry and Azay-le-Rideau' },
        teaser: {
          fr: 'Les jardins en terrasses les plus célèbres de France — potager décoratif, jardin d’ornement — puis le joyau Renaissance d’Azay-le-Rideau posé sur son miroir d’eau. Une demi-journée d’élégance pure à vingt minutes de Tours.',
          en: 'France’s most celebrated terraced gardens — ornamental kitchen garden included — then the Renaissance jewel of Azay-le-Rideau resting on its water mirror. A half day of pure elegance, twenty minutes from Tours.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Vouvray et Montlouis, caves de tuffeau', en: 'Vouvray and Montlouis tuffeau cellars' },
        teaser: {
          fr: 'Les deux rives de la Loire et leurs chenins : caves troglodytiques creusées dans le tuffeau, fines bulles et moelleux de garde, rencontres avec les vignerons. Dégustations réservées, retour serein — vous ne conduisez pas.',
          en: 'Both banks of the Loire and their Chenins: troglodyte cellars carved into tuffeau stone, fine bubbles and age-worthy sweet wines, meetings with the growers. Pre-booked tastings, a serene return — you are not driving.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Soirée place Plumereau', en: 'Place Plumereau evening' },
        teaser: {
          fr: 'Dîner dans le vieux Tours ou aux tables étoilées des environs — Charles Barrier historique, les maisons de Rochecorbon — puis les façades à colombages illuminées. Dépose au plus près, retour à votre hôtel ou château-hôtel.',
          en: 'Dinner in old Tours or at the starred tables nearby — the historic Charles Barrier, the houses of Rochecorbon — then the illuminated half-timbered façades. Drop-off close by, return to your hotel or château-hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien de châteaux peut-on visiter en une journée depuis Tours ?',
          en: 'How many châteaux can I visit in one day from Tours?',
        },
        a: {
          fr: 'Deux châteaux se visitent confortablement dans la journée, trois si vous acceptez un rythme soutenu. Nous conseillons d’associer des sites proches — Chenonceau et Amboise, Villandry et Azay-le-Rideau — et de réserver les billets coupe-file, inclus dans notre organisation.',
          en: 'Two châteaux fit comfortably into a day, three at a brisker pace. We advise pairing nearby sites — Chenonceau and Amboise, or Villandry and Azay-le-Rideau — and booking skip-the-line tickets, which we handle as part of the arrangement.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous la prise en charge à la gare de Saint-Pierre-des-Corps ?',
          en: 'Do you pick up at Saint-Pierre-des-Corps station?',
        },
        a: {
          fr: 'Oui, c’est notre point de rendez-vous le plus fréquent : le TGV met Paris à une heure. Votre chauffeur suit l’horaire du train en temps réel et vous attend à la descente avec panneau nominatif, puis la journée châteaux commence directement.',
          en: 'Yes, it is our most frequent meeting point: the TGV puts Paris one hour away. Your chauffeur tracks the train in real time and waits at the platform with a name board, and your château day begins immediately.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des circuits châteaux de plusieurs jours ?',
          en: 'Do you offer multi-day château tours?',
        },
        a: {
          fr: 'Oui. Sur deux ou trois jours, nous couvrons l’essentiel du Val de Loire — Chambord, Chenonceau, Villandry, Azay-le-Rideau, Chinon — avec le même chauffeur, hôtels et tables réservés selon vos envies. Devis global à prix fixe avant le départ.',
          en: 'Yes. Over two or three days we cover the essentials of the Loire Valley — Chambord, Chenonceau, Villandry, Azay-le-Rideau, Chinon — with the same chauffeur, hotels and restaurants booked to your wishes. A single fixed-price quote before departure.',
        },
      },
    ],
    nearby: ['angers', 'orleans'],
  },
  {
    slug: 'orleans',
    name: { fr: 'Orléans', en: 'Orléans' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airportTransfer: {
      fr: 'Orléans se rejoint depuis Paris-Orly en 1 h 15 environ (110 km par l’A10) et depuis Paris-CDG en 1 h 45. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif, suit votre vol en temps réel et vous dépose place du Martroi ou à votre hôtel des bords de Loire.',
      en: 'Orléans is about 1 h 15 from Paris-Orly (110 km via the A10) and 1 h 45 from Paris-CDG. Your chauffeur greets you in arrivals with a name board, tracks your flight in real time and drops you at Place du Martroi or your hotel on the banks of the Loire.',
    },
    intro: {
      fr: [
        'Ville de Jeanne d’Arc aux portes du Val de Loire classé à l’UNESCO, Orléans a retrouvé tout son éclat : cathédrale Sainte-Croix, rue Royale et place du Martroi, quais de Loire réaménagés et vieilles rues à pans de bois. Votre **chauffeur privé à Orléans** assure transferts vers Paris et ses aéroports, mises à disposition pour vos rendez-vous dans la métropole et la Cosmetic Valley, en berline Mercedes ou van premium, à prix fixe.',
        'Orléans ouvre la Loire des châteaux par l’amont : **Chambord à 45 minutes**, Sully-sur-Loire et Saint-Benoît-sur-Loire au fil du fleuve, Blois et Cheverny dans la journée. Ajoutez la Sologne des étangs et des chasses, les roseraies et le vinaigre d’Orléans, et composez avec votre chauffeur une journée ligérienne sur mesure — départs matinaux, billets réservés, retour à l’heure dite.',
      ],
      en: [
        'Joan of Arc’s city at the gateway to the UNESCO-listed Loire Valley, Orléans has regained all its lustre: the Sainte-Croix cathedral, Rue Royale and Place du Martroi, redesigned Loire quays and old half-timbered streets. Your **private chauffeur in Orléans** provides transfers to Paris and its airports and hourly hire for meetings across the metropolis and the Cosmetic Valley, in a Mercedes sedan or premium van, at a fixed price.',
        'Orléans opens the château country from upstream: **Chambord 45 minutes away**, Sully-sur-Loire and Saint-Benoît-sur-Loire along the river, Blois and Cheverny within a day. Add the Sologne of ponds and hunting estates, the rose gardens and Orléans vinegar, and shape a bespoke Loire day with your chauffeur — early departures, pre-booked tickets, back at the agreed hour.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Chambord par la Sologne', en: 'Chambord via the Sologne' },
        teaser: {
          fr: 'À 45 minutes d’Orléans, le plus vaste château de la Loire : l’escalier à double révolution, les terrasses, le domaine forestier clos de 32 kilomètres de murs. Traversée de la Sologne des étangs à l’aller ou au retour.',
          en: '45 minutes from Orléans, the largest château of the Loire: the double-helix staircase, the rooftop terraces, the forest estate enclosed by 32 kilometres of walls. A drive through the pond-dotted Sologne on the way.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Blois et Cheverny', en: 'Blois and Cheverny' },
        teaser: {
          fr: 'Le château royal de Blois et ses quatre façades, quatre époques, puis Cheverny et son mobilier intact, modèle de Moulinsart. Déjeuner à Blois, halte dégustation en appellation cour-cheverny possible.',
          en: 'The royal château of Blois with its four façades from four eras, then Cheverny with its intact furnishings, the model for Marlinspike Hall. Lunch in Blois, with an optional Cour-Cheverny tasting stop.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Loire à l’amont : Sully et Saint-Benoît', en: 'Upstream Loire: Sully and Saint-Benoît' },
        teaser: {
          fr: 'Le château de Sully-sur-Loire posé dans ses douves, l’abbaye de Fleury à Saint-Benoît-sur-Loire et son chant grégorien, puis Germigny-des-Prés, l’un des plus anciens sanctuaires de France. La Loire secrète.',
          en: 'The moated château of Sully-sur-Loire, Fleury Abbey at Saint-Benoît-sur-Loire with its Gregorian chant, then Germigny-des-Prés, one of France’s oldest sanctuaries. The secret Loire.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '430',
      },
      {
        title: { fr: 'Orléans de Jeanne d’Arc', en: 'Joan of Arc’s Orléans' },
        teaser: {
          fr: 'La cathédrale Sainte-Croix et ses vitraux johanniques, la maison de Jeanne d’Arc, l’hôtel Groslot, puis les quais de Loire et une halte chez un vinaigrier historique. La ville en deux heures trente, sans marche inutile.',
          en: 'The Sainte-Croix cathedral and its Joan of Arc windows, the Maison de Jeanne d’Arc, the Hôtel Groslot, then the Loire quays and a stop at a historic vinegar maker. The city in two and a half hours, no wasted steps.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Soirée orléanaise', en: 'Orléans evening' },
        teaser: {
          fr: 'Dîner aux meilleures tables du centre ancien ou des bords de Loire, puis la cathédrale et la place du Martroi illuminées, la statue équestre de Jeanne d’Arc en majesté. Dépose devant la table, véhicule à disposition.',
          en: 'Dinner at the finest tables of the old centre or the Loire banks, then the illuminated cathedral and Place du Martroi, Joan of Arc’s equestrian statue in full glory. Drop-off at the door, vehicle on standby.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Paris-Orly et Orléans ?',
          en: 'How much does a transfer between Paris-Orly and Orléans cost?',
        },
        a: {
          fr: 'Le transfert Paris-Orly → Orléans (110 km, environ 1 h 15) est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil avec panneau nominatif, le suivi du vol en temps réel et une attente offerte en cas de retard. Depuis CDG, comptez 1 h 45.',
          en: 'The Paris-Orly → Orléans transfer (110 km, about 1 h 15) is charged at a fixed price, confirmed at booking. It includes a name-board meet-and-greet, real-time flight tracking and complimentary waiting time in case of delay. From CDG allow 1 h 45.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre Chambord directement depuis Orléans ?',
          en: 'Can I reach Chambord directly from Orléans?',
        },
        a: {
          fr: 'Oui, en 45 minutes environ. Votre chauffeur vous dépose à l’entrée du domaine, vous attend pendant la visite puis enchaîne, si vous le souhaitez, avec Cheverny, Blois ou une table de Sologne. Le tout à prix fixe convenu avant le départ.',
          en: 'Yes, in about 45 minutes. Your chauffeur drops you at the estate entrance, waits during the visit and can then continue to Cheverny, Blois or a Sologne restaurant if you wish. All at a fixed price agreed before departure.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous des trajets réguliers entre Orléans et Paris pour les professionnels ?',
          en: 'Do you provide regular Orléans–Paris journeys for business travellers?',
        },
        a: {
          fr: 'Oui. De nombreux clients de la Cosmetic Valley et de la métropole utilisent nos berlines pour rejoindre Paris, La Défense ou les aéroports : environ 1 h 30 porte à porte, wifi à bord, facturation entreprise et prix fixes sur toutes les liaisons récurrentes.',
          en: 'Yes. Many Cosmetic Valley and metropolitan clients use our sedans to reach Paris, La Défense or the airports: about 1 h 30 door to door, onboard wifi, corporate invoicing and fixed prices on all recurring routes.',
        },
      },
    ],
    nearby: ['tours'],
  },
  {
    slug: 'angers',
    name: { fr: 'Angers', en: 'Angers' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airportTransfer: {
      fr: 'Angers se rejoint depuis l’aéroport Nantes Atlantique en 1 heure environ (95 km par l’A11). La gare d’Angers-Saint-Laud, à 1 h 25 de Paris en TGV, est notre point de prise en charge le plus fréquent : votre chauffeur vous attend à quai, panneau nominatif en main, horaire du train suivi en temps réel.',
      en: 'Angers is about one hour from Nantes Atlantique Airport (95 km via the A11). Angers-Saint-Laud station, 1 h 25 from Paris by TGV, is our most frequent pick-up point: your chauffeur waits at the platform with a name board, train times tracked in real time.',
    },
    intro: {
      fr: [
        'Ancienne capitale de l’Anjou et porte occidentale du Val de Loire classé à l’UNESCO, Angers veille sur la tenture de l’Apocalypse depuis les dix-sept tours de sa forteresse. Ville d’art et de douceur angevine, elle aligne maison d’Adam, galerie David d’Angers et quartier de la Doutre. Votre **chauffeur privé à Angers** assure transferts gare et aéroports, rendez-vous d’affaires du végétal et de l’électronique, en berline Mercedes ou van premium, à prix fixe.',
        'Autour d’Angers, la Loire angevine déroule ses trésors : **les vignobles de Savennières et du Layon**, Saumur et son cadre noir à quarante-cinq minutes, les villages troglodytiques, l’abbaye de Fontevraud où repose Aliénor d’Aquitaine, Terra Botanica pour les familles. Votre chauffeur compose l’itinéraire avec vous, réserve caves et tables, et vous ramène à l’heure de votre TGV.',
      ],
      en: [
        'Former capital of Anjou and the western gateway to the UNESCO-listed Loire Valley, Angers watches over the Apocalypse Tapestry from the seventeen towers of its fortress. A city of art and Angevin gentleness, it lines up the Maison d’Adam, the David d’Angers gallery and the Doutre quarter. Your **private chauffeur in Angers** handles station and airport transfers and business meetings in the plant-science and electronics sectors, in a Mercedes sedan or premium van, at a fixed price.',
        'Around Angers, the Angevin Loire unrolls its treasures: **the Savennières and Layon vineyards**, Saumur and its Cadre Noir riding school forty-five minutes away, troglodyte villages, Fontevraud Abbey where Eleanor of Aquitaine rests, Terra Botanica for families. Your chauffeur shapes the itinerary with you, books cellars and tables, and gets you back in time for your TGV.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Saumur et Fontevraud', en: 'Saumur and Fontevraud' },
        teaser: {
          fr: 'Le château de Saumur dominant la Loire, les fines bulles des maisons de la côte, puis l’abbaye royale de Fontevraud, la plus vaste cité monastique d’Europe, où reposent les Plantagenêts. Déjeuner troglodytique en option.',
          en: 'The château of Saumur above the Loire, the sparkling wines of the hillside houses, then the royal abbey of Fontevraud, Europe’s largest monastic city, where the Plantagenets rest. Optional troglodyte lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Savennières et coteaux du Layon', en: 'Savennières and the Layon slopes' },
        teaser: {
          fr: 'Les deux visages du chenin angevin : la Coulée de Serrant et les secs racés de Savennières, puis les liquoreux du Layon jusqu’aux quarts-de-chaume. Dégustations réservées chez les vignerons, déjeuner au bord de la Loire.',
          en: 'The two faces of Angevin Chenin: the Coulée de Serrant and the racy dry whites of Savennières, then the sweet wines of the Layon up to Quarts-de-Chaume. Tastings booked with the growers, lunch by the Loire.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Château d’Angers et tenture de l’Apocalypse', en: 'Château d’Angers and the Apocalypse Tapestry' },
        teaser: {
          fr: 'La forteresse aux dix-sept tours de schiste et la plus grande tapisserie médiévale du monde — 104 mètres conservés —, puis la cathédrale Saint-Maurice et la maison d’Adam. Angers essentiel en une demi-journée.',
          en: 'The seventeen-towered schist fortress and the world’s largest medieval tapestry — 104 metres preserved — then the Saint-Maurice cathedral and the Maison d’Adam. Essential Angers in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Villages troglodytiques et Loire sauvage', en: 'Troglodyte villages and the wild Loire' },
        teaser: {
          fr: 'Rochemenier et ses fermes creusées, les caves demeurantes de Souzay, Turquant et ses artisans, puis la corniche angevine au-dessus du fleuve. Un itinéraire souterrain et fluvial que peu de visiteurs connaissent.',
          en: 'Rochemenier and its underground farms, the dwelling caves of Souzay, Turquant and its artisans, then the Corniche Angevine above the river. An underground and riverside itinerary few visitors know.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Soirée angevine', en: 'Angers evening' },
        teaser: {
          fr: 'Dîner aux meilleures tables de la ville — Le Favre d’Anne, Lait Thym Sel — puis le château et la Maine illuminés, un guignolet ou un Cointreau en digestif, la liqueur étant née ici. Véhicule à disposition toute la soirée.',
          en: 'Dinner at the city’s finest tables — Le Favre d’Anne, Lait Thym Sel — then the illuminated castle and river Maine, with a Guignolet or Cointreau to finish, the liqueur having been born here. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '330',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Assurez-vous la prise en charge à la gare d’Angers-Saint-Laud ?',
          en: 'Do you pick up at Angers-Saint-Laud station?',
        },
        a: {
          fr: 'Oui, c’est notre point de rendez-vous le plus fréquent : le TGV met Paris à 1 h 25. Votre chauffeur suit l’horaire du train en temps réel, vous attend à la descente avec panneau nominatif et la journée commence immédiatement — visites, vignoble ou rendez-vous d’affaires.',
          en: 'Yes, it is our most frequent meeting point: the TGV puts Paris 1 h 25 away. Your chauffeur tracks the train in real time, waits at the platform with a name board, and your day begins at once — visits, vineyards or business meetings.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Angers et Saumur dans la même journée ?',
          en: 'Can Angers and Saumur be combined in a single day?',
        },
        a: {
          fr: 'Oui : quarante-cinq minutes séparent les deux villes par la Loire. Une journée type associe le château d’Angers le matin, déjeuner à Saumur, puis Fontevraud ou une maison de fines bulles l’après-midi. Prix fixe convenu avant le départ, itinéraire modifiable.',
          en: 'Yes: forty-five minutes separate the two cities along the Loire. A typical day pairs the Château d’Angers in the morning, lunch in Saumur, then Fontevraud or a sparkling-wine house in the afternoon. Fixed price agreed before departure, itinerary adjustable.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des vans pour les groupes et séminaires à Angers ?',
          en: 'Do you offer vans for groups and seminars in Angers?',
        },
        a: {
          fr: 'Oui. Nos vans Mercedes accueillent jusqu’à sept passagers — idéal pour un séminaire au vignoble, un mariage dans un château de la Loire ou des navettes gare-hôtel coordonnées. Plusieurs véhicules peuvent rouler de concert pour les groupes plus importants.',
          en: 'Yes. Our Mercedes vans seat up to seven passengers — ideal for a vineyard seminar, a wedding in a Loire château or coordinated station-to-hotel shuttles. Several vehicles can run in convoy for larger groups.',
        },
      },
    ],
    nearby: ['nantes', 'tours'],
  },
  {
    slug: 'aix-en-provence',
    name: { fr: 'Aix-en-Provence', en: 'Aix-en-Provence' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Marseille-Provence (MRS)',
    airportTransfer: {
      fr: 'L’aéroport Marseille-Provence (MRS) se trouve à 30 km au sud-ouest d’Aix : comptez 25 à 30 minutes jusqu’au cours Mirabeau. Nous desservons aussi la gare d’Aix TGV, à 15 minutes du centre, qui place Paris à trois heures. Accueil avec panneau nominatif et suivi du vol ou du train en temps réel.',
      en: 'Marseille-Provence Airport (MRS) lies 30 km south-west of Aix: allow 25 to 30 minutes to the Cours Mirabeau. We also serve Aix TGV station, 15 minutes from the centre, which puts Paris three hours away. Name-board meet-and-greet with real-time flight or train tracking.',
    },
    intro: {
      fr: [
        'Ville d’eau et d’art née autour de ses fontaines, Aix-en-Provence déroule le cours Mirabeau, les hôtels particuliers du quartier Mazarin, l’atelier de Cézanne et la montagne Sainte-Victoire en toile de fond. Votre **chauffeur privé à Aix-en-Provence** relie l’aéroport Marseille-Provence, la gare d’Aix TGV, les bastides des environs et les sièges d’entreprise de la Duranne, en berline Mercedes ou van premium, à prix fixe et avec une ponctualité sans faille.',
        'Aix est aussi la plus élégante des bases provençales : le **Luberon de Gordes et Lourmarin** à quarante-cinq minutes, les vignobles de la Sainte-Victoire et de Palette, Cassis et ses calanques, Marseille et le MuCEM à trente minutes. Pendant le festival d’art lyrique en juillet, votre chauffeur gère déposes et retours de nuit au plus près des théâtres — vous n’avez plus qu’à applaudir.',
      ],
      en: [
        'A city of water and art built around its fountains, Aix-en-Provence unrolls the Cours Mirabeau, the mansions of the Mazarin quarter, Cézanne’s studio and Montagne Sainte-Victoire as a backdrop. Your **private chauffeur in Aix-en-Provence** links Marseille-Provence airport, Aix TGV station, the surrounding bastides and the corporate campuses of La Duranne, in a Mercedes sedan or premium van, at a fixed price and with faultless punctuality.',
        'Aix is also the most elegant of Provençal bases: **the Luberon of Gordes and Lourmarin** forty-five minutes away, the Sainte-Victoire and Palette vineyards, Cassis and its calanques, Marseille and the MuCEM thirty minutes off. During the July opera festival, your chauffeur handles drop-offs and late-night returns as close as possible to the theatres — all you have to do is applaud.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Villages du Luberon', en: 'Villages of the Luberon' },
        teaser: {
          fr: 'Gordes suspendu à sa falaise, l’abbaye de Sénanque et ses lavandes en saison, Roussillon et ses ocres, Lourmarin et son château. Déjeuner en terrasse de village, itinéraire ajusté à la lumière et à vos envies.',
          en: 'Gordes clinging to its cliff, Sénanque Abbey and its lavender in season, the ochres of Roussillon, Lourmarin and its château. Lunch on a village terrace, the route adjusted to the light and your wishes.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Sainte-Victoire et vignobles de Cézanne', en: 'Sainte-Victoire and Cézanne’s vineyards' },
        teaser: {
          fr: 'La montagne cent fois peinte par Cézanne, la route du Tholonet, puis dégustations dans les domaines de l’appellation Sainte-Victoire et le minuscule cru Palette. L’atelier du peintre en ouverture ou en clôture.',
          en: 'The mountain Cézanne painted a hundred times, the Route du Tholonet, then tastings in the Sainte-Victoire appellation estates and the tiny Palette cru. The painter’s studio to open or close the day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Cassis et la route des Crêtes', en: 'Cassis and the Route des Crêtes' },
        teaser: {
          fr: 'Le port de Cassis, une sortie en bateau vers les calanques d’En-Vau et de Port-Pin, puis la route des Crêtes au sommet des plus hautes falaises maritimes de France, jusqu’à La Ciotat. Blanc de Cassis au déjeuner.',
          en: 'The port of Cassis, a boat trip to the En-Vau and Port-Pin calanques, then the Route des Crêtes along France’s highest sea cliffs to La Ciotat. A white Cassis wine with lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Marseille, MuCEM et Vieux-Port', en: 'Marseille, MuCEM and the Vieux-Port' },
        teaser: {
          fr: 'À trente minutes d’Aix : le MuCEM et le fort Saint-Jean, le Panier, Notre-Dame-de-la-Garde et la corniche Kennedy. Bouillabaisse ou table étoilée face à la mer, retour à Aix en début de soirée.',
          en: 'Thirty minutes from Aix: the MuCEM and Fort Saint-Jean, Le Panier, Notre-Dame-de-la-Garde and the Corniche Kennedy. Bouillabaisse or a starred table facing the sea, back in Aix by early evening.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Soirée aixoise et festival', en: 'Aix evening and festival' },
        teaser: {
          fr: 'Dîner aux tables gastronomiques du centre ancien — Mickaël Féval, les terrasses du Mazarin — puis dépose au Grand Théâtre de Provence ou à l’Archevêché pour l’opéra. Retour de nuit assuré vers votre bastide ou hôtel.',
          en: 'Dinner at the old town’s fine tables — Mickaël Féval, the Mazarin terraces — then drop-off at the Grand Théâtre de Provence or the Archevêché for the opera. Guaranteed late-night return to your bastide or hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport Marseille-Provence et Aix-en-Provence ?',
          en: 'How much does a transfer between Marseille-Provence Airport and Aix-en-Provence cost?',
        },
        a: {
          fr: 'Le transfert privé entre Marseille-Provence (MRS) et Aix (30 km, 25 à 30 minutes) est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Marseille-Provence (MRS) and Aix (30 km, 25 to 30 minutes) is charged at a fixed price, confirmed at booking. Arrivals-hall meet-and-greet with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous les bastides et domaines autour d’Aix ?',
          en: 'Do you serve the bastides and estates around Aix?',
        },
        a: {
          fr: 'Oui. Villa Gallici, Château de la Gaude, domaines du Tholonet ou de Puyricard : nous prenons en charge et déposons à toute adresse de la campagne aixoise, y compris pour des mises à disposition à la semaine pendant l’été et le festival.',
          en: 'Yes. Villa Gallici, Château de la Gaude, estates in Le Tholonet or Puyricard: we pick up and drop off at any address in the Aix countryside, including weekly hire arrangements during summer and the festival.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver à l’avance pendant le festival d’Aix en juillet ?',
          en: 'Should I book ahead during the Aix festival in July?',
        },
        a: {
          fr: 'Oui, fortement : en juillet, la demande est maximale et le centre ancien est largement piéton. Réservez au moins 72 heures à l’avance ; votre chauffeur connaît les points de dépose autorisés au plus près des théâtres et assure les retours après minuit.',
          en: 'Yes, strongly: demand peaks in July and the old centre is largely pedestrianised. Book at least 72 hours ahead; your chauffeur knows the authorised drop-off points nearest the theatres and covers returns after midnight.',
        },
      },
    ],
    nearby: ['avignon', 'arles', 'toulon', 'nimes'],
  },
  {
    slug: 'avignon',
    name: { fr: 'Avignon', en: 'Avignon' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Marseille-Provence (MRS)',
    airportTransfer: {
      fr: 'L’aéroport Marseille-Provence (MRS) se trouve à 85 km au sud-est d’Avignon : comptez une heure de trajet par l’A7 jusqu’aux remparts. La gare d’Avignon TGV, à 6 km du centre, place Paris à 2 h 40 — votre chauffeur vous y attend à quai, panneau nominatif en main, horaire suivi en temps réel.',
      en: 'Marseille-Provence Airport (MRS) lies 85 km south-east of Avignon: allow one hour via the A7 to the ramparts. Avignon TGV station, 6 km from the centre, puts Paris 2 h 40 away — your chauffeur waits at the platform with a name board, times tracked in real time.',
    },
    intro: {
      fr: [
        'Cité des papes ceinte de quatre kilomètres de remparts, Avignon garde le plus grand palais gothique du monde, le pont Saint-Bénezet et un centre classé à l’UNESCO. Votre **chauffeur privé à Avignon** relie la gare TGV, l’aéroport Marseille-Provence, les mas et hôtels particuliers de la région, en berline Mercedes ou van premium. Transferts à prix fixe, mises à disposition à l’heure, logistique rodée pendant le festival de juillet.',
        'D’Avignon, la Provence rayonne dans toutes les directions : **Châteauneuf-du-Pape à vingt minutes**, les Alpilles de Saint-Rémy et des Baux-de-Provence, le Luberon de Gordes et Roussillon, le pont du Gard et l’Isle-sur-la-Sorgue des antiquaires. Votre chauffeur compose la journée avec vous — dégustations réservées, tables retenues, lumière du soir sur les oliveraies au retour.',
      ],
      en: [
        'City of the popes ringed by four kilometres of ramparts, Avignon keeps the largest Gothic palace in the world, the Saint-Bénezet bridge and a UNESCO-listed centre. Your **private chauffeur in Avignon** connects the TGV station, Marseille-Provence airport and the region’s mas and mansions, in a Mercedes sedan or premium van. Fixed-price transfers, hourly hire, and well-honed logistics during the July festival.',
        'From Avignon, Provence radiates in every direction: **Châteauneuf-du-Pape twenty minutes away**, the Alpilles of Saint-Rémy and Les Baux-de-Provence, the Luberon of Gordes and Roussillon, the Pont du Gard and the antique dealers of L’Isle-sur-la-Sorgue. Your chauffeur shapes the day with you — tastings booked, tables reserved, evening light on the olive groves as you return.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Châteauneuf-du-Pape', en: 'Châteauneuf-du-Pape' },
        teaser: {
          fr: 'À vingt minutes des remparts, l’appellation la plus célèbre du Rhône : galets roulés, treize cépages, caves historiques et domaines confidentiels. Deux à trois dégustations réservées, déjeuner au village sous les ruines du château papal.',
          en: 'Twenty minutes from the ramparts, the Rhône’s most famous appellation: rolled pebbles, thirteen grape varieties, historic cellars and confidential estates. Two or three pre-booked tastings, lunch in the village below the papal castle ruins.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '490',
      },
      {
        title: { fr: 'Les Baux et Saint-Rémy-de-Provence', en: 'Les Baux and Saint-Rémy-de-Provence' },
        teaser: {
          fr: 'Les Carrières de Lumières et la citadelle des Baux, puis Saint-Rémy, ses boutiques et le cloître Saint-Paul-de-Mausole où Van Gogh peignit les cyprès. Huile d’olive de la vallée des Baux en dégustation.',
          en: 'The Carrières de Lumières and the citadel of Les Baux, then Saint-Rémy, its boutiques and the Saint-Paul-de-Mausole cloister where Van Gogh painted his cypresses. A tasting of Vallée des Baux olive oil.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Pont du Gard et Uzès', en: 'Pont du Gard and Uzès' },
        teaser: {
          fr: 'L’aqueduc romain le plus haut du monde, classé à l’UNESCO, à trente minutes d’Avignon, puis Uzès, son duché et sa place aux Herbes. Retour possible par les vignes de Tavel, premier rosé de France.',
          en: 'The world’s tallest Roman aqueduct, UNESCO-listed, thirty minutes from Avignon, then Uzès, its ducal palace and the Place aux Herbes. An optional return through the Tavel vineyards, France’s first rosé.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Luberon et Isle-sur-la-Sorgue', en: 'Luberon and L’Isle-sur-la-Sorgue' },
        teaser: {
          fr: 'Gordes, Roussillon et le sentier des ocres, Ménerbes ou Bonnieux selon l’heure, puis les antiquaires et les roues à aubes de l’Isle-sur-la-Sorgue. Le dimanche, le marché flottant des brocanteurs vaut le détour.',
          en: 'Gordes, Roussillon and the ochre trail, Ménerbes or Bonnieux depending on the hour, then the antique dealers and waterwheels of L’Isle-sur-la-Sorgue. On Sundays, the brocante market is worth the detour alone.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Soirée au palais des Papes', en: 'Evening at the Palais des Papes' },
        teaser: {
          fr: 'Dîner aux grandes tables d’Avignon — La Mirande au pied du palais, Pollen — puis les remparts et le pont Saint-Bénezet illuminés. Pendant le festival, dépose au plus près des cours d’honneur et retour de nuit garanti.',
          en: 'Dinner at Avignon’s great tables — La Mirande at the foot of the palace, Pollen — then the illuminated ramparts and Saint-Bénezet bridge. During the festival, drop-off as close as possible to the venues and a guaranteed late-night return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Assurez-vous la liaison entre la gare d’Avignon TGV et le centre ou les mas des environs ?',
          en: 'Do you connect Avignon TGV station with the centre or nearby mas?',
        },
        a: {
          fr: 'Oui. La gare TGV est à 10 minutes des remparts ; nous desservons aussi tous les mas, bastides et hôtels de la région — Gordes, Saint-Rémy, Uzès. Votre chauffeur suit l’horaire du train et vous attend à quai, quel que soit le retard.',
          en: 'Yes. The TGV station is 10 minutes from the ramparts; we also serve every mas, bastide and hotel in the region — Gordes, Saint-Rémy, Uzès. Your chauffeur tracks the train and waits at the platform, whatever the delay.',
        },
      },
      {
        q: {
          fr: 'Comment circuler à Avignon pendant le festival de juillet ?',
          en: 'How do I get around Avignon during the July festival?',
        },
        a: {
          fr: 'L’intra-muros est largement fermé à la circulation en juillet. Votre chauffeur utilise les portes et points de dépose autorisés au plus près de vos spectacles, attend pendant les représentations et assure les retours après minuit. Réservez au moins 72 heures à l’avance.',
          en: 'The walled city is largely closed to traffic in July. Your chauffeur uses the authorised gates and drop-off points nearest your performances, waits during the shows and covers returns after midnight. Book at least 72 hours ahead.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Châteauneuf-du-Pape et le Luberon le même jour ?',
          en: 'Can Châteauneuf-du-Pape and the Luberon be visited on the same day?',
        },
        a: {
          fr: 'Oui, en journée complète : dégustation à Châteauneuf le matin, déjeuner à Gordes ou Ménerbes, ocres de Roussillon l’après-midi. L’itinéraire est défini avec vous avant le départ et reste modifiable en route — votre chauffeur conduit, vous dégustez.',
          en: 'Yes, as a full day: a Châteauneuf tasting in the morning, lunch in Gordes or Ménerbes, the Roussillon ochres in the afternoon. The route is agreed with you before departure and stays flexible — your chauffeur drives, you taste.',
        },
      },
    ],
    nearby: ['arles', 'nimes', 'aix-en-provence'],
  },
  {
    slug: 'arles',
    name: { fr: 'Arles', en: 'Arles' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Marseille-Provence (MRS)',
    airportTransfer: {
      fr: 'L’aéroport Marseille-Provence (MRS) est à 65 km à l’est d’Arles : comptez 45 à 50 minutes jusqu’aux arènes. L’aéroport de Nîmes-Garons se trouve à 25 km et la gare d’Avignon TGV à 40 minutes. Accueil en salle d’arrivée avec panneau nominatif, vol suivi en temps réel.',
      en: 'Marseille-Provence Airport (MRS) is 65 km east of Arles: allow 45 to 50 minutes to the amphitheatre. Nîmes-Garons airport is 25 km away and Avignon TGV station 40 minutes. Arrivals-hall meet-and-greet with a name board, flight tracked in real time.',
    },
    intro: {
      fr: [
        'Rome des Gaules et muse de Van Gogh, Arles superpose arènes et théâtre antiques classés à l’UNESCO, cloître Saint-Trophime, Rencontres de la photographie et tour Luma signée Frank Gehry. Votre **chauffeur privé à Arles** assure transferts aéroport et gares, mises à disposition pour les vernissages et rendez-vous, trajets vers vos mas de Camargue ou des Alpilles, en berline Mercedes ou van premium, à prix fixe.',
        'Aux portes de la ville commence la **Camargue** : flamants roses de l’étang du Fangassier, manades de taureaux et chevaux blancs, Saintes-Maries-de-la-Mer et le sel d’Aigues-Mortes. Au nord, les Alpilles alignent Les Baux, Saint-Rémy et les oliveraies. Votre chauffeur compose l’itinéraire selon la saison et la lumière — safari camarguais à l’aube ou pierres antiques au couchant.',
      ],
      en: [
        'The Rome of Gaul and Van Gogh’s muse, Arles layers a UNESCO-listed amphitheatre and ancient theatre, the Saint-Trophime cloister, the Rencontres photography festival and the Frank Gehry-designed Luma tower. Your **private chauffeur in Arles** handles airport and station transfers, hourly hire for openings and meetings, and journeys to your mas in the Camargue or Alpilles, in a Mercedes sedan or premium van, at a fixed price.',
        'At the city gates begins the **Camargue**: pink flamingos on the Fangassier lagoon, bull and white-horse manades, Saintes-Maries-de-la-Mer and the salt of Aigues-Mortes. To the north, the Alpilles line up Les Baux, Saint-Rémy and the olive groves. Your chauffeur shapes the route to the season and the light — a Camargue safari at dawn or ancient stones at sunset.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Safari en Camargue', en: 'Camargue safari' },
        teaser: {
          fr: 'Étangs et sansouires du parc naturel régional, flamants du Pont de Gau, visite d’une manade avec démonstration de tri du bétail, puis Saintes-Maries-de-la-Mer. Riz de Camargue et taureau AOP au déjeuner.',
          en: 'Lagoons and salt flats of the regional park, flamingos at Pont de Gau, a manade visit with a cattle-sorting demonstration, then Saintes-Maries-de-la-Mer. Camargue rice and AOP bull at lunch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Arles antique et Van Gogh', en: 'Ancient Arles and Van Gogh' },
        teaser: {
          fr: 'Arènes, théâtre antique, cryptoportiques et musée départemental Arles antique, puis le parcours Van Gogh — l’espace de l’Hôtel-Dieu, le café de la place du Forum — et la tour Luma. La ville en une demi-journée dense.',
          en: 'Amphitheatre, ancient theatre, cryptoporticus and the Arles antiquity museum, then the Van Gogh trail — the Hôtel-Dieu gardens, the café on Place du Forum — and the Luma tower. The city in one dense half day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Les Baux-de-Provence et les Alpilles', en: 'Les Baux-de-Provence and the Alpilles' },
        teaser: {
          fr: 'À trente minutes d’Arles, la citadelle des Baux et les Carrières de Lumières, puis les oliveraies de Maussane et Fontvieille, le moulin de Daudet en passant. Dégustation d’huiles AOP de la vallée des Baux.',
          en: 'Thirty minutes from Arles, the citadel of Les Baux and the Carrières de Lumières, then the olive groves of Maussane and Fontvieille, passing Daudet’s windmill. A tasting of AOP Vallée des Baux oils.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Aigues-Mortes et les salins', en: 'Aigues-Mortes and the salt pans' },
        teaser: {
          fr: 'Les remparts de Saint Louis intacts au milieu des marais, la tour de Constance, puis les salins roses et leurs montagnes de sel. Retour par Le Grau-du-Roi ou les vignes des sables de Listel.',
          en: 'Saint Louis’s intact ramparts amid the marshes, the Constance tower, then the pink salt pans and their salt mountains. Return via Le Grau-du-Roi or the Listel sand-grown vineyards.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '460',
      },
      {
        title: { fr: 'Soirée arlésienne', en: 'Arles evening' },
        teaser: {
          fr: 'Dîner chez les grandes tables d’Arles — L’Atelier de Jean-Luc Rabanel, la Chassagnette en Camargue — puis les arènes et les quais du Rhône illuminés. Dépose devant la table, retour à votre mas sans contrainte.',
          en: 'Dinner at Arles’ great tables — Jean-Luc Rabanel’s Atelier, La Chassagnette in the Camargue — then the illuminated amphitheatre and Rhône quays. Drop-off at the door, effortless return to your mas.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Quel aéroport choisir pour rejoindre Arles ?',
          en: 'Which airport should I use for Arles?',
        },
        a: {
          fr: 'Marseille-Provence (65 km, 45 minutes) offre le plus de vols ; Nîmes-Garons (25 km) et Montpellier (80 km) sont des alternatives selon votre provenance. La gare d’Avignon TGV, à 40 minutes, place Paris à moins de trois heures. Tous ces transferts sont à prix fixe.',
          en: 'Marseille-Provence (65 km, 45 minutes) has the most flights; Nîmes-Garons (25 km) and Montpellier (80 km) are alternatives depending on where you fly from. Avignon TGV station, 40 minutes away, puts Paris under three hours off. All these transfers are fixed-price.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition pendant les Rencontres de la photographie ?',
          en: 'Do you offer hire during the Rencontres photography festival?',
        },
        a: {
          fr: 'Oui. De juillet à septembre, nous accompagnons collectionneurs et galeristes entre les lieux d’exposition, les vernissages et les dîners — mise à disposition à l’heure, à la journée ou à la semaine, avec un chauffeur qui connaît chaque site du festival.',
          en: 'Yes. From July to September we accompany collectors and gallerists between exhibition venues, openings and dinners — hourly, daily or weekly hire, with a chauffeur who knows every festival site.',
        },
      },
      {
        q: {
          fr: 'La Camargue se visite-t-elle facilement en berline ?',
          en: 'Is the Camargue easy to visit by sedan?',
        },
        a: {
          fr: 'Oui : les routes du parc naturel sont parfaitement carrossables et nos chauffeurs connaissent les points d’observation des flamants et les manades qui reçoivent. Pour les pistes des salins ou une visite à cheval, nous coordonnons les prestataires locaux.',
          en: 'Yes: the regional park roads are perfectly drivable and our chauffeurs know the flamingo viewpoints and the manades that welcome visitors. For the salt-pan tracks or a ride on horseback, we coordinate with local providers.',
        },
      },
    ],
    nearby: ['avignon', 'nimes', 'aix-en-provence'],
  },
  {
    slug: 'nimes',
    name: { fr: 'Nîmes', en: 'Nîmes' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Nîmes-Alès-Camargue-Cévennes (FNI)',
    airportTransfer: {
      fr: 'L’aéroport de Nîmes-Alès-Camargue-Cévennes (FNI), à Garons, se trouve à 12 km au sud du centre : comptez 15 à 20 minutes jusqu’aux arènes. Marseille-Provence (MRS) est à une heure et la gare de Nîmes-Pont-du-Gard TGV à 15 minutes. Accueil avec panneau nominatif et suivi du vol en temps réel.',
      en: 'Nîmes-Alès-Camargue-Cévennes Airport (FNI), at Garons, lies 12 km south of the centre: allow 15 to 20 minutes to the amphitheatre. Marseille-Provence (MRS) is one hour away and Nîmes-Pont-du-Gard TGV station 15 minutes. Name-board meet-and-greet with real-time flight tracking.',
    },
    intro: {
      fr: [
        'Rome française aux monuments d’une conservation stupéfiante, Nîmes aligne arènes, Maison carrée classée à l’UNESCO, tour Magne et jardins de la Fontaine, avec le musée de la Romanité signé Elizabeth de Portzamparc en contrepoint. Votre **chauffeur privé à Nîmes** relie l’aéroport de Garons, les deux gares, les mas des Costières et les sièges d’entreprise, en berline Mercedes ou van premium, à prix fixe confirmé à la réservation.',
        'Nîmes rayonne entre Provence, Camargue et Cévennes : le **pont du Gard à vingt-cinq minutes**, Uzès et sa place aux Herbes, les vignobles des Costières et de Tavel, Sommières et les gorges du Gardon. Pendant les férias de Pentecôte et des Vendanges, votre chauffeur maîtrise fermetures de rues et retours de nuit — la fête sans la moindre contrainte logistique.',
      ],
      en: [
        'The French Rome with astonishingly preserved monuments, Nîmes lines up its amphitheatre, the UNESCO-listed Maison Carrée, the Magne tower and the Jardins de la Fontaine, with the Elizabeth de Portzamparc-designed Musée de la Romanité as a counterpoint. Your **private chauffeur in Nîmes** connects Garons airport, both stations, the mas of the Costières and corporate offices, in a Mercedes sedan or premium van, at a fixed price confirmed at booking.',
        'Nîmes radiates between Provence, the Camargue and the Cévennes: **the Pont du Gard twenty-five minutes away**, Uzès and its Place aux Herbes, the Costières and Tavel vineyards, Sommières and the Gardon gorges. During the Pentecost and Grape Harvest férias, your chauffeur masters street closures and late-night returns — the fiesta without a single logistical worry.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Pont du Gard et Uzès', en: 'Pont du Gard and Uzès' },
        teaser: {
          fr: 'Le chef-d’œuvre de l’aqueduc romain à vingt-cinq minutes de Nîmes — rive gauche au matin pour la lumière —, puis Uzès, premier duché de France, sa place aux Herbes et ses ruelles Renaissance. Truffe et vins du Duché en saison.',
          en: 'The masterpiece Roman aqueduct twenty-five minutes from Nîmes — left bank in the morning for the light — then Uzès, France’s premier duchy, its Place aux Herbes and Renaissance lanes. Truffles and Duché wines in season.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Nîmes romaine', en: 'Roman Nîmes' },
        teaser: {
          fr: 'Les arènes parmi les mieux conservées du monde romain, la Maison carrée, la tour Magne au sommet des jardins de la Fontaine, puis le musée de la Romanité et sa mosaïque de Penthée. Deux mille ans en une demi-journée.',
          en: 'One of the best-preserved amphitheatres of the Roman world, the Maison Carrée, the Magne tower above the Jardins de la Fontaine, then the Musée de la Romanité and its Pentheus mosaic. Two thousand years in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '370',
      },
      {
        title: { fr: 'Camargue gardoise et Aigues-Mortes', en: 'The Gard Camargue and Aigues-Mortes' },
        teaser: {
          fr: 'Les remparts de Saint Louis, les salins roses et la tour Carbonnière au milieu des marais, puis une manade de taureaux ou les plages de l’Espiguette. Vins des sables et fougasse d’Aigues-Mortes en chemin.',
          en: 'Saint Louis’s ramparts, the pink salt pans and the Carbonnière tower amid the marshes, then a bull manade or the Espiguette beaches. Sand-grown wines and Aigues-Mortes fougasse along the way.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Vignobles de Tavel et Lirac', en: 'Tavel and Lirac vineyards' },
        teaser: {
          fr: 'Sur la rive droite du Rhône, le premier rosé de France et les rouges généreux de Lirac, entre garrigue et villages de pierre blonde. Dégustations réservées dans deux domaines, déjeuner vigneron à Tavel.',
          en: 'On the Rhône’s right bank, France’s first rosé and the generous reds of Lirac, between garrigue and blond-stone villages. Pre-booked tastings at two estates, a winegrower’s lunch in Tavel.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '440',
      },
      {
        title: { fr: 'Soirée nîmoise et féria', en: 'Nîmes evening and féria' },
        teaser: {
          fr: 'Dîner aux tables reconnues de l’Écusson — Jérôme Nutile, Skab — puis les arènes et la Maison carrée illuminées. Pendant les férias, dépose au plus près des bodegas et retour de nuit garanti vers votre hôtel ou mas.',
          en: 'Dinner at the Écusson’s acclaimed tables — Jérôme Nutile, Skab — then the illuminated amphitheatre and Maison Carrée. During the férias, drop-off as close as possible to the bodegas and a guaranteed late-night return to your hotel or mas.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nîmes-Garons et le centre-ville ?',
          en: 'How much does a transfer between Nîmes-Garons Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nîmes-Garons (FNI) et le centre (12 km, 15 à 20 minutes) est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus. Depuis Marseille-Provence, comptez une heure.',
          en: 'A private transfer between Nîmes-Garons (FNI) and the centre (12 km, 15 to 20 minutes) is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included. From Marseille-Provence allow one hour.',
        },
      },
      {
        q: {
          fr: 'Peut-on circuler à Nîmes pendant les férias ?',
          en: 'Can you get around Nîmes during the férias?',
        },
        a: {
          fr: 'L’Écusson est fermé à la circulation pendant les férias de Pentecôte et des Vendanges. Votre chauffeur utilise les points de dépose autorisés en bordure immédiate du centre, attend pendant les corridas ou concerts et assure les retours de nuit. Réservez plusieurs jours à l’avance.',
          en: 'The Écusson is closed to traffic during the Pentecost and Grape Harvest férias. Your chauffeur uses the authorised drop-off points on the immediate edge of the centre, waits during the corridas or concerts and covers late-night returns. Book several days ahead.',
        },
      },
      {
        q: {
          fr: 'Le pont du Gard se combine-t-il avec Avignon ou Arles dans la journée ?',
          en: 'Can the Pont du Gard be combined with Avignon or Arles in a day?',
        },
        a: {
          fr: 'Oui : le pont du Gard est à vingt-cinq minutes de Nîmes, Avignon à quarante et Arles à trente-cinq. Une journée complète permet d’associer l’aqueduc et l’une des deux villes, déjeuner compris — l’itinéraire est défini avec vous et reste modifiable.',
          en: 'Yes: the Pont du Gard is twenty-five minutes from Nîmes, Avignon forty and Arles thirty-five. A full day pairs the aqueduct with either city, lunch included — the route is agreed with you and stays flexible.',
        },
      },
    ],
    nearby: ['avignon', 'arles', 'montpellier'],
  },
  {
    slug: 'toulon',
    name: { fr: 'Toulon', en: 'Toulon' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Toulon-Hyères (TLN)',
    airportTransfer: {
      fr: 'L’aéroport de Toulon-Hyères (TLN) se trouve à 25 km à l’est du centre : comptez 30 minutes jusqu’au port ou à la gare. Marseille-Provence (MRS) est à une heure. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel — prise en charge possible aussi au terminal croisières.',
      en: 'Toulon-Hyères Airport (TLN) lies 25 km east of the centre: allow 30 minutes to the port or station. Marseille-Provence (MRS) is one hour away. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time — cruise-terminal pick-ups also available.',
    },
    intro: {
      fr: [
        'Adossée au mont Faron face à l’une des plus belles rades d’Europe, Toulon a retrouvé son éclat : port de la Marine nationale, halles et rues piétonnes rénovées, stade Mayol et téléphérique du Faron. Votre **chauffeur privé à Toulon** dessert l’aéroport de Hyères, la gare TGV, le port des ferries vers la Corse et les terminaux croisières, en berline Mercedes ou van premium. Prix fixes, ponctualité militaire — ville oblige.',
        'De Toulon, le littoral varois se déploie dans les deux sens : **les plages du Mourillon et les calanques du cap Sicié**, Sanary et Bandol côté couchant, la presqu’île de Giens et Porquerolles côté levant, Le Castellet et son circuit dans l’arrière-pays. Votre chauffeur compose vos journées entre criques, vignobles de Bandol et tables du bord de mer, à l’heure ou à la journée.',
      ],
      en: [
        'Backed by Mont Faron and facing one of Europe’s finest natural harbours, Toulon has regained its shine: the national navy port, renovated market halls and pedestrian streets, the Mayol stadium and the Faron cable car. Your **private chauffeur in Toulon** serves Hyères airport, the TGV station, the Corsica ferry port and the cruise terminals, in a Mercedes sedan or premium van. Fixed prices and military punctuality — as befits the city.',
        'From Toulon, the Var coastline unfolds in both directions: **the Mourillon beaches and the Cap Sicié creeks**, Sanary and Bandol to the west, the Giens peninsula and Porquerolles to the east, Le Castellet and its racing circuit inland. Your chauffeur shapes your days between coves, Bandol vineyards and seaside tables, by the hour or by the day.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Vignobles de Bandol', en: 'Bandol vineyards' },
        teaser: {
          fr: 'À trente minutes de Toulon, l’appellation reine du mourvèdre : Château de Pibarnon, domaines de La Cadière et du Castellet, villages perchés au-dessus des restanques. Dégustations réservées, déjeuner face aux vignes.',
          en: 'Thirty minutes from Toulon, the kingdom of Mourvèdre: Château de Pibarnon, estates in La Cadière and Le Castellet, villages perched above the terraced vines. Pre-booked tastings, lunch overlooking the rows.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '680',
      },
      {
        title: { fr: 'Porquerolles depuis la Tour Fondue', en: 'Porquerolles from the Tour Fondue' },
        teaser: {
          fr: 'Dépose à l’embarcadère de la presqu’île de Giens, traversée de quinze minutes, puis plages d’Argent et de Notre-Dame, vignobles insulaires et fondation Carmignac. Votre chauffeur vous attend au retour du bateau.',
          en: 'Drop-off at the Giens peninsula jetty, a fifteen-minute crossing, then the Plage d’Argent and Notre-Dame beaches, island vineyards and the Carmignac foundation. Your chauffeur awaits your return ferry.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Mont Faron et rade de Toulon', en: 'Mont Faron and Toulon harbour' },
        teaser: {
          fr: 'Le sommet du Faron par la route en lacets — mémorial du débarquement de Provence, fauverie —, panorama sur la rade entière, puis descente vers les halles et le marché du cours Lafayette. Toulon vu d’en haut et goûté d’en bas.',
          en: 'The summit of Mont Faron by the hairpin road — Provence landings memorial, big-cat sanctuary — a panorama over the whole harbour, then down to the market halls and Cours Lafayette market. Toulon seen from above and tasted below.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Sanary et Cassis par la côte', en: 'Sanary and Cassis along the coast' },
        teaser: {
          fr: 'Le port de pêche de Sanary et ses pointus, Bandol et sa baie, puis Cassis et une sortie en bateau vers les calanques. Retour par la route des Crêtes au sommet des falaises de Soubeyranes si le vent le permet.',
          en: 'Sanary’s fishing port and its wooden pointus, Bandol and its bay, then Cassis and a boat trip to the calanques. Return via the Route des Crêtes atop the Soubeyranes cliffs, weather permitting.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Circuit Paul Ricard au Castellet', en: 'Circuit Paul Ricard at Le Castellet' },
        teaser: {
          fr: 'Transferts et mises à disposition pour les Grands Prix, roulages et incentives au circuit du Castellet, à 40 minutes de Toulon. Dépose au paddock, attente sur site, combinaison possible avec le village médiéval du Castellet.',
          en: 'Transfers and hire for Grands Prix, track days and corporate events at the Circuit Paul Ricard, 40 minutes from Toulon. Paddock drop-off, on-site standby, with an optional visit to the medieval village of Le Castellet.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '650',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Assurez-vous les transferts vers le port des ferries et les terminaux croisières de Toulon ?',
          en: 'Do you cover transfers to Toulon’s ferry port and cruise terminals?',
        },
        a: {
          fr: 'Oui. Nous déposons et prenons en charge aux embarquements Corsica Ferries vers la Corse comme aux terminaux croisières de la Seyne et de Toulon, horaires de navire suivis en temps réel. Prix fixe depuis l’aéroport, la gare ou votre hôtel.',
          en: 'Yes. We drop off and pick up at the Corsica Ferries departures as well as the La Seyne and Toulon cruise terminals, with ship schedules tracked in real time. Fixed price from the airport, the station or your hotel.',
        },
      },
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Toulon-Hyères et le centre de Toulon ?',
          en: 'How much does a transfer between Toulon-Hyères Airport and central Toulon cost?',
        },
        a: {
          fr: 'Le transfert privé entre Toulon-Hyères (TLN) et le centre (25 km, environ 30 minutes) est facturé à prix fixe, confirmé à la réservation, accueil avec panneau nominatif et attente en cas de retard inclus. Marseille-Provence est desservi en une heure.',
          en: 'A private transfer between Toulon-Hyères (TLN) and the centre (25 km, about 30 minutes) is charged at a fixed price, confirmed at booking, with name-board meet-and-greet and waiting time for delays included. Marseille-Provence is served in one hour.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des navettes pour les matchs du RCT au stade Mayol ?',
          en: 'Do you offer shuttles for RCT matches at the Mayol stadium?',
        },
        a: {
          fr: 'Oui. Les soirs de match, votre chauffeur vous dépose au plus près de Mayol malgré les fermetures, attend pendant la rencontre et vous ramène après le coup de sifflet final — en berline pour deux ou en van jusqu’à sept supporters.',
          en: 'Yes. On match nights your chauffeur drops you as close to Mayol as closures allow, waits through the game and takes you home after the final whistle — by sedan for two or by van for up to seven supporters.',
        },
      },
    ],
    nearby: ['hyeres', 'aix-en-provence', 'antibes'],
  },
  {
    slug: 'hyeres',
    name: { fr: 'Hyères', en: 'Hyères' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Toulon-Hyères (TLN)',
    airportTransfer: {
      fr: 'L’aéroport de Toulon-Hyères (TLN) se trouve à 7 km au sud du centre, entre la ville et la presqu’île de Giens : comptez 10 à 15 minutes jusqu’à la vieille ville et 15 minutes jusqu’à la Tour Fondue. Accueil en salle d’arrivée avec panneau nominatif, vol suivi en temps réel.',
      en: 'Toulon-Hyères Airport (TLN) lies 7 km south of the centre, between the town and the Giens peninsula: allow 10 to 15 minutes to the old town and 15 minutes to the Tour Fondue. Arrivals-hall meet-and-greet with a name board, flight tracked in real time.',
    },
    intro: {
      fr: [
        'Doyenne des stations climatiques de la Côte d’Azur, Hyères-les-Palmiers cultive vieille ville médiévale, villa Noailles moderniste, jardins luxuriants et dix mille palmiers. Votre **chauffeur privé à Hyères** vous attend à l’aéroport de Toulon-Hyères, à cinq minutes des plages, pour rejoindre votre hôtel, votre villa de la presqu’île de Giens ou les embarcadères des îles d’Or, en berline Mercedes ou van premium, à prix fixe.',
        'Hyères est la porte des **îles d’Or — Porquerolles, Port-Cros, Le Levant** — et d’un littoral resté sauvage : plage de l’Almanarre chère aux kitesurfeurs, route du sel, marais salins aux flamants roses, vignobles des Côtes de Provence de la presqu’île. Votre chauffeur synchronise chaque trajet avec les navettes maritimes et compose vos journées entre îles, criques et villages perchés du massif des Maures.',
      ],
      en: [
        'The doyenne of Riviera resorts, Hyères-les-Palmiers cultivates a medieval old town, the modernist Villa Noailles, lush gardens and ten thousand palm trees. Your **private chauffeur in Hyères** awaits you at Toulon-Hyères airport, five minutes from the beaches, to reach your hotel, your villa on the Giens peninsula or the Golden Islands ferry jetties, in a Mercedes sedan or premium van, at a fixed price.',
        'Hyères is the gateway to the **Golden Islands — Porquerolles, Port-Cros, Le Levant** — and to a coastline still wild: the Almanarre beach beloved of kitesurfers, the salt road, flamingo-dotted salt marshes, and the Côtes de Provence vineyards of the peninsula. Your chauffeur synchronises every journey with the island shuttles and shapes your days between islands, coves and the hilltop villages of the Maures.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Porquerolles, l’île aux plages', en: 'Porquerolles, island of beaches' },
        teaser: {
          fr: 'Dépose à la Tour Fondue, quinze minutes de traversée, puis plage Notre-Dame élue parmi les plus belles d’Europe, vélo entre les vignes, fondation Carmignac. Votre chauffeur vous récupère au bateau de retour.',
          en: 'Drop-off at the Tour Fondue, a fifteen-minute crossing, then Notre-Dame beach — ranked among Europe’s finest — cycling between the vines, the Carmignac foundation. Your chauffeur meets your return ferry.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '520',
      },
      {
        title: { fr: 'Port-Cros, parc national', en: 'Port-Cros national park' },
        teaser: {
          fr: 'La plus ancienne réserve marine d’Europe : sentier sous-marin de la Palud, forts et calanques, fonds classés au départ du port du Lavandou ou de Hyères. Une journée nature coordonnée avec les horaires des navettes.',
          en: 'Europe’s oldest marine reserve: the Palud underwater trail, forts and creeks, protected seabeds reached from Le Lavandou or Hyères. A nature day coordinated with the shuttle timetables.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '560',
      },
      {
        title: { fr: 'Villa Noailles et vieille ville', en: 'Villa Noailles and the old town' },
        teaser: {
          fr: 'Le manifeste moderniste de Mallet-Stevens et ses expositions de design et de mode, puis les ruelles médiévales, la collégiale Saint-Paul et le parc Saint-Bernard en balcon sur les îles. Hyères en concentré.',
          en: 'Mallet-Stevens’ modernist manifesto and its design and fashion exhibitions, then the medieval lanes, the Saint-Paul collegiate church and the Saint-Bernard garden overlooking the islands. Hyères distilled.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Route du sel et presqu’île de Giens', en: 'Salt road and the Giens peninsula' },
        teaser: {
          fr: 'Les salins des Pesquiers et leurs flamants roses, la plage de l’Almanarre et ses kitesurfeurs, le tour de la presqu’île par la Madrague et le port du Niel. Coucher de soleil depuis les hauteurs de Giens.',
          en: 'The Pesquiers salt pans and their flamingos, the Almanarre beach and its kitesurfers, the peninsula loop via La Madrague and the tiny Port du Niel. Sunset from the heights of Giens.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Villages du massif des Maures', en: 'Villages of the Maures' },
        teaser: {
          fr: 'Bormes-les-Mimosas fleuri en toute saison, le fort de Brégançon vu de la plage, Collobrières et ses marrons, la chartreuse de la Verne au cœur des forêts de chênes-lièges. L’arrière-pays varois authentique.',
          en: 'Bormes-les-Mimosas in bloom year round, Fort de Brégançon seen from the beach, Collobrières and its chestnuts, the La Verne charterhouse deep in the cork-oak forests. The authentic Var hinterland.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Toulon-Hyères et le centre de Hyères ou Giens ?',
          en: 'How much does a transfer between Toulon-Hyères Airport and central Hyères or Giens cost?',
        },
        a: {
          fr: 'Le transfert privé depuis Toulon-Hyères (TLN) vers le centre (7 km, 10 à 15 minutes) ou la presqu’île de Giens est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol et attente offerte en cas de retard inclus.',
          en: 'A private transfer from Toulon-Hyères (TLN) to the centre (7 km, 10 to 15 minutes) or the Giens peninsula is charged at a fixed price, confirmed at booking. Name-board meet-and-greet, flight tracking and complimentary waiting time are included.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous synchroniser le transfert avec la navette pour Porquerolles ?',
          en: 'Can you synchronise the transfer with the Porquerolles shuttle?',
        },
        a: {
          fr: 'Oui. Nous calons la prise en charge sur les horaires des navettes de la Tour Fondue — renforcés en été — et votre chauffeur vous attend au débarcadère au retour. En haute saison, nous conseillons de viser les traversées du matin pour profiter pleinement de l’île.',
          en: 'Yes. We time the pick-up to the Tour Fondue shuttle schedule — expanded in summer — and your chauffeur meets you at the jetty on your return. In high season we suggest the morning crossings to make the most of the island.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous Saint-Tropez et le littoral des Maures depuis Hyères ?',
          en: 'Do you serve Saint-Tropez and the Maures coastline from Hyères?',
        },
        a: {
          fr: 'Oui. Le Lavandou est à 30 minutes, Saint-Tropez à une heure par la corniche des Maures — davantage en été, mais le prix reste fixe quel que soit le trafic. Mises à disposition à la journée pour combiner plages, villages perchés et dîner sur le port.',
          en: 'Yes. Le Lavandou is 30 minutes away, Saint-Tropez one hour along the Maures corniche — longer in summer, though the price stays fixed whatever the traffic. Full-day hire lets you combine beaches, hilltop villages and dinner on the harbour.',
        },
      },
    ],
    nearby: ['toulon', 'antibes', 'aix-en-provence'],
  },
  {
    slug: 'antibes',
    name: { fr: 'Antibes', en: 'Antibes' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Nice Côte d’Azur (NCE)',
    airportTransfer: {
      fr: 'L’aéroport de Nice Côte d’Azur (NCE) se trouve à 22 km à l’est d’Antibes : comptez 25 à 30 minutes par l’A8 jusqu’au vieil Antibes ou au Cap. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif, suit votre vol en temps réel et vous dépose à votre hôtel, votre villa ou directement au ponton de votre yacht.',
      en: 'Nice Côte d’Azur Airport (NCE) lies 22 km east of Antibes: allow 25 to 30 minutes via the A8 to old Antibes or the Cap. Your chauffeur greets you in arrivals with a name board, tracks your flight in real time and drops you at your hotel, your villa or directly at your yacht’s berth.',
    },
    intro: {
      fr: [
        'Entre Nice et Cannes, Antibes conjugue remparts du vieil Antibes, musée Picasso dans le château Grimaldi, marché provençal du cours Masséna et Port Vauban, premier port de plaisance d’Europe où mouillent les plus grands yachts du monde. Votre **chauffeur privé à Antibes** relie l’aéroport de Nice, les pontons du Quai des Milliardaires, les villas du Cap et les palaces de la Croisette, en berline Mercedes ou van premium, à prix fixe.',
        'Le **cap d’Antibes** déroule ses pinèdes, le sentier de Tire-Poil et les légendes de l’Eden-Roc, tandis que Juan-les-Pins vibre chaque été au rythme de Jazz à Juan. À trente minutes, l’arrière-pays offre Biot et ses verreries, Vallauris et ses céramiques signées Picasso, Saint-Paul-de-Vence et ses galeries. Votre chauffeur orchestre équipages, escales et soirées avec la discrétion attendue sur cette côte.',
      ],
      en: [
        'Between Nice and Cannes, Antibes combines the ramparts of the old town, the Picasso museum in the Grimaldi castle, the Provençal market on Cours Masséna and Port Vauban, Europe’s largest marina, where the world’s greatest yachts moor. Your **private chauffeur in Antibes** links Nice airport, the pontoons of the Quai des Milliardaires, the villas of the Cap and the palaces of the Croisette, in a Mercedes sedan or premium van, at a fixed price.',
        'The **Cap d’Antibes** unrolls its pine woods, the Tire-Poil coastal path and the legends of the Eden-Roc, while Juan-les-Pins pulses each summer to Jazz à Juan. Thirty minutes inland lie Biot and its glassblowers, Vallauris and its Picasso ceramics, Saint-Paul-de-Vence and its galleries. Your chauffeur orchestrates crews, port calls and evenings with the discretion this coast expects.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Tour du cap d’Antibes', en: 'Tour of the Cap d’Antibes' },
        teaser: {
          fr: 'Le boulevard de Bacon et ses vues sur les Alpes, la villa Eilenroc et sa roseraie, le phare de la Garoupe et sa chapelle des marins, puis un déjeuner les pieds dans l’eau à la plage Keller. Le Cap dans toute sa légende.',
          en: 'Boulevard de Bacon and its Alpine views, the Villa Eilenroc and its rose garden, the Garoupe lighthouse and its sailors’ chapel, then a lunch by the water at Plage Keller. The Cap in all its legend.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Picasso, de Grimaldi à Vallauris', en: 'Picasso, from Grimaldi to Vallauris' },
        teaser: {
          fr: 'Le musée Picasso du château Grimaldi, où le maître travailla en 1946, puis Vallauris, ses ateliers de céramique et « La Guerre et la Paix ». Halte chez un potier en activité, retour par la baignoire de Golfe-Juan.',
          en: 'The Picasso museum in the Grimaldi castle, where the master worked in 1946, then Vallauris, its ceramic workshops and “War and Peace”. A stop at a working potter’s studio, returning via the bay of Golfe-Juan.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Saint-Paul-de-Vence et la Fondation Maeght', en: 'Saint-Paul-de-Vence and the Fondation Maeght' },
        teaser: {
          fr: 'À trente minutes d’Antibes, le village d’artistes le plus célèbre de France, la Colombe d’Or et ses toiles de maîtres, puis les Giacometti du jardin de la Fondation Maeght. Biot et sa verrerie en chemin.',
          en: 'Thirty minutes from Antibes, France’s most famous artists’ village, the Colombe d’Or and its master paintings, then the Giacometti courtyard of the Fondation Maeght. Biot and its glassworks on the way.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Cannes et les îles de Lérins', en: 'Cannes and the Lérins islands' },
        teaser: {
          fr: 'La Croisette et le Suquet, puis quinze minutes de traversée vers Sainte-Marguerite — fort du Masque de fer, eaux turquoise — ou l’abbaye de Lérins et son vin de moines. Votre chauffeur vous attend au vieux port.',
          en: 'The Croisette and Le Suquet, then a fifteen-minute crossing to Sainte-Marguerite — the Iron Mask fort, turquoise waters — or the Lérins abbey and its monks’ wine. Your chauffeur waits at the old port.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Soirée à Juan-les-Pins', en: 'Juan-les-Pins evening' },
        teaser: {
          fr: 'Dîner face à la baie — Les Pêcheurs au Cap, la Passagère de la villa Belles Rives où vécut Fitzgerald — puis concert sous les pins pendant Jazz à Juan ou casino. Retour de nuit vers votre villa ou votre yacht.',
          en: 'Dinner facing the bay — Les Pêcheurs on the Cap, La Passagère at the Belles Rives where Fitzgerald lived — then a concert beneath the pines during Jazz à Juan, or the casino. Late-night return to your villa or yacht.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '420',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nice et Antibes ou le cap d’Antibes ?',
          en: 'How much does a transfer between Nice Airport and Antibes or the Cap d’Antibes cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nice Côte d’Azur (NCE) et Antibes (22 km, 25 à 30 minutes) est facturé à prix fixe, confirmé à la réservation, y compris vers les villas du Cap. Accueil en salle d’arrivée, suivi du vol et attente en cas de retard inclus.',
          en: 'A private transfer between Nice Côte d’Azur (NCE) and Antibes (22 km, 25 to 30 minutes) is charged at a fixed price, confirmed at booking, including to villas on the Cap. Arrivals meet-and-greet, flight tracking and waiting time for delays are included.',
        },
      },
      {
        q: {
          fr: 'Prenez-vous en charge les équipages et passagers de yachts à Port Vauban ?',
          en: 'Do you serve yacht crews and guests at Port Vauban?',
        },
        a: {
          fr: 'Oui, quotidiennement. Nous déposons au plus près des pontons, y compris au Quai des Milliardaires, coordonnons les rotations équipage-aéroport et assurons provisioning et courses techniques en van. Facturation à la société de gestion ou au central agent possible.',
          en: 'Yes, daily. We drop off as close as possible to the pontoons, including the Quai des Milliardaires, coordinate crew-airport rotations and handle provisioning runs by van. Invoicing to the management company or central agent is available.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver à l’avance pendant le Festival de Cannes ou Jazz à Juan ?',
          en: 'Should I book ahead during the Cannes Festival or Jazz à Juan?',
        },
        a: {
          fr: 'Oui : en mai et en juillet, la demande sur la côte est maximale et la circulation dense. Réservez idéalement une semaine à l’avance ; nos prix restent fixes malgré le trafic et votre chauffeur connaît les accès réservés et itinéraires de délestage.',
          en: 'Yes: in May and July demand on the coast peaks and traffic is heavy. Ideally book a week ahead; our prices stay fixed despite the congestion and your chauffeur knows the reserved-access points and relief routes.',
        },
      },
    ],
    nearby: ['saint-paul-de-vence', 'grasse', 'menton'],
  },
  {
    slug: 'saint-paul-de-vence',
    name: { fr: 'Saint-Paul-de-Vence', en: 'Saint-Paul-de-Vence' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Nice Côte d’Azur (NCE)',
    airportTransfer: {
      fr: 'L’aéroport de Nice Côte d’Azur (NCE) se trouve à 20 km au sud-est de Saint-Paul-de-Vence : comptez 25 à 30 minutes par la vallée du Var et La Colle-sur-Loup. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et vous dépose au plus près des remparts, le village étant entièrement piéton.',
      en: 'Nice Côte d’Azur Airport (NCE) lies 20 km south-east of Saint-Paul-de-Vence: allow 25 to 30 minutes via the Var valley and La Colle-sur-Loup. Your chauffeur greets you in arrivals with a name board and drops you as close as possible to the ramparts, the village itself being fully pedestrian.',
    },
    intro: {
      fr: [
        'Village fortifié suspendu entre mer et Alpes, Saint-Paul-de-Vence fut le refuge de Chagall, Prévert et Montand : galeries d’art dans chaque ruelle, partie de pétanque sur la place du jeu de boules, remparts de François Iᵉʳ intacts. Votre **chauffeur privé à Saint-Paul-de-Vence** vous dépose aux portes du village piéton, dessert la Colombe d’Or et les hôtels des collines, et relie l’aéroport de Nice en trente minutes, à prix fixe.',
        'Autour du village, la **Fondation Maeght** aligne Giacometti, Miró et Calder dans ses jardins de pins, Vence garde la chapelle du Rosaire entièrement dessinée par Matisse, et les gorges du Loup mènent à Tourrettes-sur-Loup, cité des violettes. Votre chauffeur compose des journées d’art et de villages perchés, avec tables réservées et retours au coucher du soleil sur les remparts.',
      ],
      en: [
        'A fortified village suspended between sea and Alps, Saint-Paul-de-Vence sheltered Chagall, Prévert and Montand: art galleries in every lane, pétanque on the Place du Jeu de Boules, François I’s ramparts intact. Your **private chauffeur in Saint-Paul-de-Vence** drops you at the gates of the pedestrian village, serves the Colombe d’Or and the hillside hotels, and links Nice airport in thirty minutes, at a fixed price.',
        'Around the village, the **Fondation Maeght** displays Giacometti, Miró and Calder in its pine gardens, Vence keeps the Rosary Chapel entirely designed by Matisse, and the Loup gorges lead to Tourrettes-sur-Loup, city of violets. Your chauffeur shapes days of art and hilltop villages, with tables booked and returns timed to sunset on the ramparts.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Fondation Maeght et galeries du village', en: 'Fondation Maeght and village galleries' },
        teaser: {
          fr: 'Le labyrinthe Miró, la cour aux Giacometti et les collections de la plus belle fondation d’art moderne d’Europe, puis les galeries des remparts et la tombe de Chagall au petit cimetière. Une journée entière dans l’art.',
          en: 'The Miró labyrinth, the Giacometti courtyard and the collections of Europe’s finest modern-art foundation, then the rampart galleries and Chagall’s grave in the small cemetery. A whole day inside art.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Vence et la chapelle Matisse', en: 'Vence and the Matisse chapel' },
        teaser: {
          fr: 'À dix minutes, la chapelle du Rosaire que Matisse considérait comme son chef-d’œuvre — vitraux, céramiques, chasubles —, puis la vieille ville de Vence, sa cathédrale et sa mosaïque de Chagall. Art sacré et places ombragées.',
          en: 'Ten minutes away, the Rosary Chapel Matisse considered his masterpiece — stained glass, ceramics, vestments — then old Vence, its cathedral and its Chagall mosaic. Sacred art and shaded squares.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '360',
      },
      {
        title: { fr: 'Gorges du Loup et Tourrettes', en: 'Loup gorges and Tourrettes' },
        teaser: {
          fr: 'La route des gorges du Loup, le saut du Loup et ses cascades, Gourdon en nid d’aigle à 760 mètres, puis Tourrettes-sur-Loup et ses confiseries à la violette. Panoramas sur toute la côte au retour.',
          en: 'The Loup gorge road, the Saut du Loup waterfalls, Gourdon perched like an eyrie at 760 metres, then Tourrettes-sur-Loup and its violet confectionery. Panoramas over the whole coast on the way back.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Renoir à Cagnes et bord de mer', en: 'Renoir in Cagnes and the seaside' },
        teaser: {
          fr: 'Le domaine des Collettes où Renoir peignit ses dernières années parmi les oliviers millénaires, le Haut-de-Cagnes et son château Grimaldi, puis déjeuner de poissons au Cros-de-Cagnes. L’autre versant de l’art azuréen.',
          en: 'Les Collettes, where Renoir painted his final years among thousand-year-old olive trees, Haut-de-Cagnes and its Grimaldi castle, then a fish lunch at Cros-de-Cagnes. The other side of Riviera art.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Dîner à la Colombe d’Or', en: 'Dinner at the Colombe d’Or' },
        teaser: {
          fr: 'La table la plus mythique de la côte, où Picasso et Matisse payaient en toiles : dîner sous le Léger de la terrasse, puis flânerie sur les remparts illuminés. Dépose aux portes du village, retour de nuit à votre hôtel.',
          en: 'The coast’s most storied table, where Picasso and Matisse paid in paintings: dinner beneath the Léger on the terrace, then a stroll along the illuminated ramparts. Drop-off at the village gates, late-night hotel return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '400',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Peut-on entrer en voiture dans Saint-Paul-de-Vence ?',
          en: 'Can cars enter Saint-Paul-de-Vence?',
        },
        a: {
          fr: 'Non, le village intra-muros est entièrement piéton. Votre chauffeur vous dépose au plus près des portes des remparts, patiente à proximité et revient vous chercher au même point à l’heure convenue — utile le soir, quand les parkings publics affichent complet.',
          en: 'No, the walled village is fully pedestrian. Your chauffeur drops you as close as possible to the rampart gates, waits nearby and returns to the same point at the agreed time — invaluable in the evening, when the public car parks fill up.',
        },
      },
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nice et Saint-Paul-de-Vence ?',
          en: 'How much does a transfer between Nice Airport and Saint-Paul-de-Vence cost?',
        },
        a: {
          fr: 'Le transfert privé depuis Nice Côte d’Azur (20 km, 25 à 30 minutes) est facturé à prix fixe, confirmé à la réservation, accueil en salle d’arrivée et suivi du vol inclus. Nous desservons également les hôtels des collines — Saint-Paul, La Colle-sur-Loup, Vence.',
          en: 'A private transfer from Nice Côte d’Azur (20 km, 25 to 30 minutes) is charged at a fixed price, confirmed at booking, with arrivals meet-and-greet and flight tracking included. We also serve the hillside hotels — Saint-Paul, La Colle-sur-Loup, Vence.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Saint-Paul-de-Vence, la Fondation Maeght et Vence le même jour ?',
          en: 'Can Saint-Paul-de-Vence, the Fondation Maeght and Vence be combined in one day?',
        },
        a: {
          fr: 'Oui, très confortablement : les trois sites tiennent dans un rayon de dix minutes. Une journée type associe la Fondation le matin, déjeuner au village, la chapelle Matisse l’après-midi — votre chauffeur ajuste le rythme à vos envies, sans horaire imposé.',
          en: 'Yes, very comfortably: all three sit within a ten-minute radius. A typical day pairs the foundation in the morning, lunch in the village and the Matisse chapel in the afternoon — your chauffeur adjusts the pace to your wishes, with no imposed schedule.',
        },
      },
    ],
    nearby: ['antibes', 'grasse', 'menton'],
  },
  {
    slug: 'grasse',
    name: { fr: 'Grasse', en: 'Grasse' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Nice Côte d’Azur (NCE)',
    airportTransfer: {
      fr: 'L’aéroport de Nice Côte d’Azur (NCE) se trouve à 38 km à l’est de Grasse : comptez 40 à 45 minutes par la pénétrante Cannes-Grasse. Cannes est à 20 minutes. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel, jusqu’à votre bastide ou votre hôtel des hauteurs.',
      en: 'Nice Côte d’Azur Airport (NCE) lies 38 km east of Grasse: allow 40 to 45 minutes via the Cannes-Grasse expressway. Cannes is 20 minutes away. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time, up to your bastide or hillside hotel.',
    },
    intro: {
      fr: [
        'Capitale mondiale du parfum inscrite à l’UNESCO pour ses savoir-faire, Grasse étage sa vieille ville ocre au-dessus des champs de roses de mai et de jasmin. Maisons historiques — Fragonard, Molinard, Galimard —, musée international de la Parfumerie et laboratoires des grands nez : votre **chauffeur privé à Grasse** relie l’aéroport de Nice, Cannes et les domaines de fleurs, en berline Mercedes ou van premium, à prix fixe confirmé à la réservation.',
        'Autour de Grasse, le pays grassois déploie **villages perchés et routes de caractère** : Cabris en balcon sur l’Esterel, Gourdon au bord de son à-pic, les gorges du Loup, Mougins la gastronome à quinze minutes. En saison, les cueillettes de rose centifolia et de jasmin se visitent à l’aube — votre chauffeur organise l’accès aux domaines partenaires des grandes maisons de couture.',
      ],
      en: [
        'World capital of perfume, UNESCO-listed for its craftsmanship, Grasse tiers its ochre old town above fields of May rose and jasmine. Historic houses — Fragonard, Molinard, Galimard — the International Perfume Museum and the laboratories of the great noses: your **private chauffeur in Grasse** links Nice airport, Cannes and the flower estates, in a Mercedes sedan or premium van, at a fixed price confirmed at booking.',
        'Around Grasse, the countryside unfolds **hilltop villages and roads of character**: Cabris overlooking the Esterel, Gourdon at the edge of its precipice, the Loup gorges, gastronomic Mougins fifteen minutes away. In season, the centifolia rose and jasmine harvests can be visited at dawn — your chauffeur arranges access to the estates that supply the great couture houses.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Ateliers de parfumeur', en: 'Perfumer workshops' },
        teaser: {
          fr: 'Créez votre propre fragrance à l’orgue à parfums chez Fragonard, Molinard ou Galimard, puis le musée international de la Parfumerie et la villa-musée Fragonard. Votre création vous suit en flacon gravé.',
          en: 'Compose your own fragrance at the perfume organ at Fragonard, Molinard or Galimard, then the International Perfume Museum and the Fragonard villa-museum. Your creation leaves with you in an engraved bottle.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Champs de roses et de jasmin', en: 'Rose and jasmine fields' },
        teaser: {
          fr: 'En mai pour la rose centifolia, d’août à octobre pour le jasmin : cueillette à l’aube dans un domaine partenaire des grandes maisons, rencontre avec les producteurs, puis extraction expliquée en atelier. Sur réservation, selon la floraison.',
          en: 'May for the centifolia rose, August to October for jasmine: a dawn harvest at an estate supplying the great houses, meeting the growers, then the extraction process explained in the workshop. By reservation, subject to flowering.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '520',
      },
      {
        title: { fr: 'Villages perchés du pays grassois', en: 'Hilltop villages of the Grasse country' },
        teaser: {
          fr: 'Cabris et sa vue jusqu’au lac de Saint-Cassien, Gourdon en nid d’aigle au-dessus du Loup, Tourrettes-sur-Loup la violette, retour par les gorges. Pierre sèche, placettes ombragées et panoramas à couper le souffle.',
          en: 'Cabris with its view to Lake Saint-Cassien, Gourdon perched above the Loup, violet-growing Tourrettes-sur-Loup, returning through the gorges. Dry stone, shaded squares and breathtaking panoramas.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Mougins et Cannes', en: 'Mougins and Cannes' },
        teaser: {
          fr: 'Le village en escargot où Picasso vécut ses dernières années, ses galeries et son centre de la photographie, puis la Croisette, le Suquet et le marché Forville à Cannes. Déjeuner gastronomique à Mougins en option.',
          en: 'The snail-shaped village where Picasso spent his final years, its galleries and photography centre, then the Croisette, Le Suquet and the Forville market in Cannes. Optional gourmet lunch in Mougins.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '440',
      },
      {
        title: { fr: 'Route Napoléon et Saint-Vallier', en: 'Route Napoléon and Saint-Vallier' },
        teaser: {
          fr: 'Sur les traces de l’Empereur remonté de Golfe-Juan en 1815 : la route Napoléon au-dessus de Grasse, Saint-Vallier-de-Thiey et ses plateaux, les préalpes d’Azur jusqu’au col de Valferrière. Grand air et lacets historiques.',
          en: 'In the footsteps of the Emperor’s 1815 march from Golfe-Juan: the Route Napoléon above Grasse, Saint-Vallier-de-Thiey and its plateaux, the Azur pre-Alps up to the Valferrière pass. Fresh air and historic hairpins.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '400',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nice et Grasse ?',
          en: 'How much does a transfer between Nice Airport and Grasse cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nice Côte d’Azur (38 km, 40 à 45 minutes) et Grasse est facturé à prix fixe, confirmé à la réservation, accueil en salle d’arrivée et suivi du vol inclus. Nous desservons aussi Cannes (20 minutes) et toutes les bastides du pays grassois.',
          en: 'A private transfer between Nice Côte d’Azur (38 km, 40 to 45 minutes) and Grasse is charged at a fixed price, confirmed at booking, with arrivals meet-and-greet and flight tracking included. We also serve Cannes (20 minutes) and every bastide in the Grasse countryside.',
        },
      },
      {
        q: {
          fr: 'Quand faut-il venir pour voir les fleurs à parfum en cueillette ?',
          en: 'When should I come to see the perfume flowers being harvested?',
        },
        a: {
          fr: 'La rose centifolia se cueille en mai, le jasmin d’août à octobre, tôt le matin. Les visites de domaines se font sur réservation et dépendent de la floraison : indiquez-nous vos dates et nous organisons l’accès avec les producteurs partenaires.',
          en: 'The centifolia rose is picked in May, jasmine from August to October, early in the morning. Estate visits are by reservation and depend on flowering: give us your dates and we arrange access with the partner growers.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Grasse depuis Cannes ou Nice à la demi-journée ?',
          en: 'Can Grasse be visited from Cannes or Nice as a half day?',
        },
        a: {
          fr: 'Oui. Depuis Cannes (20 minutes), une demi-journée couvre une maison de parfum, la vieille ville et un village perché ; depuis Nice, prévoyez plutôt cinq à six heures. Le véhicule reste à disposition pendant les visites, prix fixe convenu à l’avance.',
          en: 'Yes. From Cannes (20 minutes), a half day covers a perfume house, the old town and one hilltop village; from Nice, allow five to six hours. The vehicle stays at your disposal throughout, at a fixed price agreed in advance.',
        },
      },
    ],
    nearby: ['antibes', 'saint-paul-de-vence', 'menton'],
  },
  {
    slug: 'menton',
    name: { fr: 'Menton', en: 'Menton' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Nice Côte d’Azur (NCE)',
    airportTransfer: {
      fr: 'L’aéroport de Nice Côte d’Azur (NCE) se trouve à 40 km à l’ouest de Menton : comptez 40 à 45 minutes par l’A8, davantage par la basse corniche et Monaco. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif, suit votre vol en temps réel et choisit l’itinéraire selon le trafic.',
      en: 'Nice Côte d’Azur Airport (NCE) lies 40 km west of Menton: allow 40 to 45 minutes via the A8, longer along the lower corniche through Monaco. Your chauffeur greets you in arrivals with a name board, tracks your flight in real time and picks the route to suit the traffic.',
    },
    intro: {
      fr: [
        'Dernière ville française avant l’Italie, Menton doit à son microclimat ses citronniers, ses jardins d’exception et ses façades ocre serrées autour de la basilique Saint-Michel. Ville du citron IGP, de Jean Cocteau et du restaurant Mirazur, elle cultive une douceur unique sur la Riviera. Votre **chauffeur privé à Menton** relie l’aéroport de Nice, Monaco à quinze minutes, l’Italie voisine et les villas des hauteurs, à prix fixe, en berline ou van premium.',
        'Depuis Menton, la frontière n’existe plus : **Vintimille et son marché du vendredi**, Dolceacqua chère à Monet, San Remo et Bordighera se rejoignent en moins d’une heure ; côté France, Roquebrune-Cap-Martin, le village perché de Sainte-Agnès et les jardins Serre de la Madone composent des journées entre deux rivieras. En février, la Fête du Citron impose sa logistique — votre chauffeur la connaît par cœur.',
      ],
      en: [
        'The last French town before Italy, Menton owes its lemon trees, exceptional gardens and tightly packed ochre façades around the Saint-Michel basilica to its microclimate. City of the IGP lemon, of Jean Cocteau and of the restaurant Mirazur, it cultivates a gentleness unique on the Riviera. Your **private chauffeur in Menton** links Nice airport, Monaco fifteen minutes away, neighbouring Italy and the hillside villas, at a fixed price, by sedan or premium van.',
        'From Menton, the border melts away: **Ventimiglia and its Friday market**, Monet’s beloved Dolceacqua, San Remo and Bordighera are under an hour away; on the French side, Roquebrune-Cap-Martin, the perched village of Sainte-Agnès and the Serre de la Madone gardens fill days between two rivieras. In February, the Lemon Festival imposes its own logistics — your chauffeur knows them by heart.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Jardins de Menton', en: 'The gardens of Menton' },
        teaser: {
          fr: 'Le val Rahmeh et ses collections botaniques, Serre de la Madone dessiné par Lawrence Johnston, les agrumes du palais Carnolès. Une journée de jardins d’acclimatation uniques en Europe, sécateurs interdits, émerveillement garanti.',
          en: 'Val Rahmeh and its botanical collections, Serre de la Madone designed by Lawrence Johnston, the citrus grove of the Palais Carnolès. A day of acclimatisation gardens unique in Europe — no secateurs, wonder guaranteed.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Dolceacqua et la Riviera italienne', en: 'Dolceacqua and the Italian Riviera' },
        teaser: {
          fr: 'Le pont médiéval peint par Monet et le château des Doria, dégustation de rossese de Dolceacqua, puis Vintimille ou Bordighera selon l’heure. Passage de frontière sans formalité, déjeuner de pâtes fraîches au village.',
          en: 'The medieval bridge Monet painted and the Doria castle, a tasting of Rossese di Dolceacqua, then Ventimiglia or Bordighera as time allows. A seamless border crossing, fresh pasta lunch in the village.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Cocteau, vieille ville et citronniers', en: 'Cocteau, old town and lemon groves' },
        teaser: {
          fr: 'Le musée du Bastion décoré par Cocteau et la salle des mariages qu’il peignit, la basilique Saint-Michel et ses rampes, puis une confiserie de citron de Menton IGP. La ville en trois heures, sans une côte à monter.',
          en: 'The Cocteau-decorated Bastion museum and the wedding hall he painted, the Saint-Michel basilica and its ramps, then a Menton IGP lemon confectioner. The town in three hours, without climbing a single hill.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Sainte-Agnès et Gorbio', en: 'Sainte-Agnès and Gorbio' },
        teaser: {
          fr: 'Le plus haut village littoral d’Europe à 780 mètres, son fort de la ligne Maginot et sa vue jusqu’à la Corse par temps clair, puis Gorbio et ses ruelles médiévales sous les oliviers. L’arrière-pays mentonnais vertical.',
          en: 'Europe’s highest coastal village at 780 metres, its Maginot Line fort and a view reaching Corsica on clear days, then Gorbio and its medieval lanes beneath the olive trees. Menton’s vertical hinterland.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Soirée Monaco et retour de nuit', en: 'Monaco evening with late return' },
        teaser: {
          fr: 'À quinze minutes de Menton : dîner au Louis XV ou sur le port Hercule, casino de Monte-Carlo, Opéra Garnier. Votre chauffeur attend le temps qu’il faudra et vous ramène par la corniche illuminée.',
          en: 'Fifteen minutes from Menton: dinner at the Louis XV or on Port Hercule, the Monte-Carlo casino, the Salle Garnier opera. Your chauffeur waits as long as it takes and brings you home along the illuminated corniche.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '450',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Nice et Menton ?',
          en: 'How much does a transfer between Nice Airport and Menton cost?',
        },
        a: {
          fr: 'Le transfert privé entre Nice Côte d’Azur (40 km, 40 à 45 minutes par l’A8) et Menton est facturé à prix fixe, confirmé à la réservation, accueil et suivi du vol inclus. Le tarif ne change pas si le trafic impose la corniche ou un détour par Monaco.',
          en: 'A private transfer between Nice Côte d’Azur (40 km, 40 to 45 minutes via the A8) and Menton is charged at a fixed price, confirmed at booking, meet-and-greet and flight tracking included. The fare does not change if traffic forces the corniche or a detour through Monaco.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer des excursions en Italie depuis Menton ?',
          en: 'Can you run excursions into Italy from Menton?',
        },
        a: {
          fr: 'Oui. Vintimille est à quinze minutes, Dolceacqua à trente, San Remo à quarante : nos véhicules sont autorisés à circuler en Italie et les trajets transfrontaliers sont devisés à prix fixe. Le marché de Vintimille du vendredi est notre demande la plus courante.',
          en: 'Yes. Ventimiglia is fifteen minutes away, Dolceacqua thirty, San Remo forty: our vehicles are authorised to operate in Italy and cross-border journeys are quoted at a fixed price. The Friday market in Ventimiglia is our most frequent request.',
        },
      },
      {
        q: {
          fr: 'Comment circuler à Menton pendant la Fête du Citron ?',
          en: 'How do I get around Menton during the Lemon Festival?',
        },
        a: {
          fr: 'De mi-février à début mars, les corsos ferment le bord de mer et les jardins Biovès. Votre chauffeur connaît les points de dépose autorisés au plus près des tribunes et assure les retours après les corsos nocturnes. Réservez au moins 72 heures à l’avance.',
          en: 'From mid-February to early March, the parades close the seafront and the Biovès gardens. Your chauffeur knows the authorised drop-off points nearest the stands and covers returns after the night parades. Book at least 72 hours ahead.',
        },
      },
    ],
    nearby: ['antibes', 'grasse', 'saint-paul-de-vence'],
  },
  {
    slug: 'biarritz',
    name: { fr: 'Biarritz', en: 'Biarritz' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Biarritz Pays Basque (BIQ)',
    airportTransfer: {
      fr: 'L’aéroport de Biarritz Pays Basque (BIQ) se trouve à 5 km au sud-est du centre : comptez 10 à 15 minutes jusqu’à la Grande Plage ou l’Hôtel du Palais. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Biarritz Pays Basque Airport (BIQ) lies 5 km south-east of the centre: allow 10 to 15 minutes to the Grande Plage or the Hôtel du Palais. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Station impériale née d’un caprice d’Eugénie, Biarritz conjugue Hôtel du Palais, rocher de la Vierge, villas Belle Époque et la meilleure vague d’Europe à la Côte des Basques. Votre **chauffeur privé à Biarritz** relie l’aéroport, la gare, les golfs — Le Phare, Chiberta, Arcangues —, la halle du marché et les tables étoilées de la côte, en berline Mercedes ou van premium, à prix fixe et avec la ponctualité d’un set de surf bien réglé.',
        'Biarritz ouvre tout le **Pays basque** : Saint-Jean-de-Luz et sa baie à vingt minutes, Espelette et ses piments, Ainhoa et Sare parmi les plus beaux villages de France, la Rhune en petit train à crémaillère, et San Sebastián, capitale mondiale des pintxos, à quarante-cinq minutes. Votre chauffeur compose des journées entre océan et montagne, ventas espagnoles comprises.',
      ],
      en: [
        'An imperial resort born of Eugénie’s whim, Biarritz combines the Hôtel du Palais, the Rocher de la Vierge, Belle Époque villas and Europe’s finest wave at the Côte des Basques. Your **private chauffeur in Biarritz** links the airport, the station, the golf courses — Le Phare, Chiberta, Arcangues — the market hall and the coast’s starred tables, in a Mercedes sedan or premium van, at a fixed price and with the punctuality of a well-timed surf set.',
        'Biarritz opens up the whole **Basque Country**: Saint-Jean-de-Luz and its bay twenty minutes away, Espelette and its peppers, Ainhoa and Sare among France’s most beautiful villages, La Rhune by rack railway, and San Sebastián, world capital of pintxos, forty-five minutes off. Your chauffeur shapes days between ocean and mountain, Spanish ventas included.',
      ],
    },
    experiences: [
      {
        title: { fr: 'San Sebastián et les pintxos', en: 'San Sebastián and pintxos' },
        teaser: {
          fr: 'À quarante-cinq minutes de Biarritz, la baie de la Concha, la vieille ville et la plus forte densité d’étoiles Michelin d’Europe. Tournée de pintxos dans la parte vieja ou table triplement étoilée — votre chauffeur vous ramène de nuit.',
          en: 'Forty-five minutes from Biarritz: La Concha bay, the old town and Europe’s highest density of Michelin stars. A pintxos crawl through the Parte Vieja or a three-starred table — your chauffeur drives you home at night.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '690',
      },
      {
        title: { fr: 'Villages basques : Espelette, Ainhoa, Sare', en: 'Basque villages: Espelette, Ainhoa, Sare' },
        teaser: {
          fr: 'Les façades à colombages rouge et vert, les piments en guirlandes, le gâteau basque chez un artisan, puis la montée de la Rhune en train à crémaillère pour embrasser toute la côte. Le Labourd essentiel en une journée.',
          en: 'Red-and-green timbered façades, garlands of peppers, gâteau basque from an artisan baker, then the rack railway up La Rhune to take in the whole coastline. The essential Labourd in a single day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Saint-Jean-de-Luz et la corniche', en: 'Saint-Jean-de-Luz and the corniche' },
        teaser: {
          fr: 'La baie où Louis XIV épousa l’infante, la maison de l’Infante et les macarons Adam, puis la corniche basque et ses falaises de flysch jusqu’à Hendaye. Retour par le petit port de Guéthary au coucher du soleil.',
          en: 'The bay where Louis XIV married the Infanta, the Maison de l’Infante and Adam macarons, then the Basque corniche and its flysch cliffs to Hendaye. Return via the little port of Guéthary at sunset.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Golfs du Pays basque', en: 'Basque Country golf' },
        teaser: {
          fr: 'Transferts et mises à disposition vers les parcours mythiques de la côte : Le Phare dessiné en 1888, Chiberta entre pins et océan, Arcangues et son clubhouse de charme. Sacs et voiturettes gérés, tee-times respectés.',
          en: 'Transfers and hire to the coast’s legendary courses: Le Phare laid out in 1888, Chiberta between pines and ocean, Arcangues and its charming clubhouse. Bags and buggies handled, tee times honoured.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Soirée impériale à Biarritz', en: 'Imperial Biarritz evening' },
        teaser: {
          fr: 'Dîner face à l’océan — L’Impertinent, les tables du Palais — puis le phare et le rocher de la Vierge illuminés, un dernier verre au bar du Palais. Dépose devant chaque porte, retour sans contrainte.',
          en: 'Dinner facing the ocean — L’Impertinent, the tables of the Palais — then the illuminated lighthouse and Rocher de la Vierge, a nightcap at the Palais bar. Door-to-door drop-offs, an effortless return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Biarritz et le centre-ville ?',
          en: 'How much does a transfer between Biarritz Airport and the town centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Biarritz Pays Basque (BIQ) et le centre (5 km, 10 à 15 minutes) est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Biarritz Pays Basque (BIQ) and the centre (5 km, 10 to 15 minutes) is charged at a fixed price, confirmed at booking. Arrivals-hall meet-and-greet with a name board, flight tracking and complimentary waiting time are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les trajets vers San Sebastián et l’Espagne ?',
          en: 'Do you cover journeys to San Sebastián and Spain?',
        },
        a: {
          fr: 'Oui, quotidiennement. San Sebastián est à quarante-cinq minutes, Bilbao et le Guggenheim à 1 h 45 : les trajets transfrontaliers sont devisés à prix fixe, avec attente sur place ou retour de nuit après votre dîner. Nos véhicules sont autorisés à circuler en Espagne.',
          en: 'Yes, daily. San Sebastián is forty-five minutes away, Bilbao and the Guggenheim 1 h 45: cross-border journeys are quoted at a fixed price, with on-site waiting or a late return after dinner. Our vehicles are authorised to operate in Spain.',
        },
      },
      {
        q: {
          fr: 'Peut-on transporter des planches de surf ou des sacs de golf ?',
          en: 'Can you carry surfboards or golf bags?',
        },
        a: {
          fr: 'Oui. Nos vans embarquent planches (jusqu’aux longboards), sacs de golf et bagages volumineux sans supplément déraisonnable — précisez simplement le matériel à la réservation pour que nous affections le véhicule adapté.',
          en: 'Yes. Our vans take boards (up to longboards), golf bags and bulky luggage — simply mention the equipment at booking so we assign the right vehicle.',
        },
      },
    ],
    nearby: [],
  },
  {
    slug: 'bayonne',
    name: { fr: 'Bayonne', en: 'Bayonne' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Biarritz Pays Basque (BIQ)',
    airportTransfer: {
      fr: 'L’aéroport de Biarritz Pays Basque (BIQ) se trouve à 8 km au sud-ouest de Bayonne : comptez 15 minutes jusqu’aux quais de la Nive. La gare de Bayonne, sur la ligne TGV Paris-Hendaye, est desservie en 5 minutes depuis le centre. Accueil avec panneau nominatif et suivi du vol en temps réel.',
      en: 'Biarritz Pays Basque Airport (BIQ) lies 8 km south-west of Bayonne: allow 15 minutes to the Nive quaysides. Bayonne station, on the Paris-Hendaye TGV line, is 5 minutes from the centre. Name-board meet-and-greet with real-time flight tracking.',
    },
    intro: {
      fr: [
        'Capitale historique et culturelle du Pays basque, Bayonne serre ses maisons à colombages entre Nive et Adour : cathédrale Sainte-Marie et son cloître, remparts de Vauban, halles animées et ateliers de chocolatiers installés depuis le XVIIᵉ siècle. Votre **chauffeur privé à Bayonne** relie l’aéroport de Biarritz, la gare, les arènes et les tables de la côte, en berline Mercedes ou van premium, à prix fixe confirmé à la réservation.',
        'De Bayonne, tout le Pays basque intérieur s’offre à vous : **la vallée de la Nive vers Cambo-les-Bains et la villa Arnaga d’Edmond Rostand**, Espelette et ses piments, Saint-Jean-Pied-de-Port au pied des cols de Compostelle, les vignobles d’Irouléguy. Pendant les Fêtes de Bayonne, fin juillet, votre chauffeur maîtrise fermetures et flux — cinq jours de blanc et rouge sans souci logistique.',
      ],
      en: [
        'The historic and cultural capital of the Basque Country, Bayonne packs its half-timbered houses between the Nive and the Adour: the Sainte-Marie cathedral and its cloister, Vauban’s ramparts, lively market halls and chocolate makers established since the 17th century. Your **private chauffeur in Bayonne** links Biarritz airport, the station, the arena and the coast’s tables, in a Mercedes sedan or premium van, at a fixed price confirmed at booking.',
        'From Bayonne, the whole inland Basque Country opens up: **the Nive valley towards Cambo-les-Bains and Edmond Rostand’s Villa Arnaga**, Espelette and its peppers, Saint-Jean-Pied-de-Port at the foot of the Compostela passes, the Irouléguy vineyards. During the Fêtes de Bayonne in late July, your chauffeur masters closures and crowds — five days of red and white without a single logistical worry.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Saint-Jean-Pied-de-Port et l’Irouléguy', en: 'Saint-Jean-Pied-de-Port and Irouléguy' },
        teaser: {
          fr: 'La citadelle et la porte Saint-Jacques sur le chemin de Compostelle, la Nive des Aldudes et ses truites, puis dégustation dans le plus petit vignoble AOC de montagne de France. Jambon Kintoa chez un éleveur en chemin.',
          en: 'The citadel and Saint-Jacques gate on the Compostela way, the Aldudes valley and its trout, then a tasting in France’s smallest mountain AOC vineyard. Kintoa ham from a breeder along the route.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Bayonne gourmande : chocolat et jambon', en: 'Gourmet Bayonne: chocolate and ham' },
        teaser: {
          fr: 'Les ateliers de chocolatiers historiques de la rue Port-Neuf — le chocolat entra en France par Bayonne —, les halles au bord de la Nive, puis un affineur de jambon de Bayonne AOP. Dégustations à chaque étape.',
          en: 'The historic chocolate workshops of Rue Port-Neuf — chocolate entered France through Bayonne — the market halls on the Nive, then a Bayonne AOP ham curer. Tastings at every stop.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Cambo-les-Bains et la villa Arnaga', en: 'Cambo-les-Bains and Villa Arnaga' },
        teaser: {
          fr: 'La demeure néo-basque d’Edmond Rostand et ses jardins à la française face à la Rhune, les thermes de Cambo, puis Itxassou et ses cerises noires au pied du pas de Roland. La vallée de la Nive en douceur.',
          en: 'Edmond Rostand’s neo-Basque mansion and its formal gardens facing La Rhune, the Cambo thermal baths, then Itxassou and its black cherries below the Pas de Roland. The Nive valley at a gentle pace.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Côte basque de Bayonne à Hendaye', en: 'Basque coast from Bayonne to Hendaye' },
        teaser: {
          fr: 'Biarritz et le rocher de la Vierge, Guéthary et Saint-Jean-de-Luz, la corniche de flysch jusqu’à la baie d’Hendaye face à l’Espagne. Déjeuner de poisson sauvage au port, arrêts photo au gré des vagues.',
          en: 'Biarritz and the Rocher de la Vierge, Guéthary and Saint-Jean-de-Luz, the flysch corniche down to Hendaye bay facing Spain. Wild-caught fish for lunch at the port, photo stops with the waves.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Soirée bayonnaise', en: 'Bayonne evening' },
        teaser: {
          fr: 'Dîner dans les tables du Petit Bayonne ou sur les quais de la Nive — la Table de Sébastien Gravé, l’Auberge du Cheval Blanc — puis les remparts et la cathédrale illuminés. Véhicule à disposition toute la soirée.',
          en: 'Dinner in Petit Bayonne or on the Nive quays — Sébastien Gravé’s Table, the Auberge du Cheval Blanc — then the illuminated ramparts and cathedral. Vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '330',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Biarritz et Bayonne ?',
          en: 'How much does a transfer between Biarritz Airport and Bayonne cost?',
        },
        a: {
          fr: 'Le transfert privé entre Biarritz Pays Basque (BIQ) et Bayonne (8 km, 15 minutes) est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Biarritz Pays Basque (BIQ) and Bayonne (8 km, 15 minutes) is charged at a fixed price, confirmed at booking. Arrivals-hall meet-and-greet with a name board, flight tracking and complimentary waiting time are included.',
        },
      },
      {
        q: {
          fr: 'Circulez-vous pendant les Fêtes de Bayonne ?',
          en: 'Do you operate during the Fêtes de Bayonne?',
        },
        a: {
          fr: 'Oui, avec une logistique adaptée : fin juillet, le centre est fermé à la circulation et près d’un million de festayres convergent vers la ville. Votre chauffeur utilise les points de dépose autorisés en périphérie immédiate et assure les retours de nuit. Réservez au moins une semaine à l’avance.',
          en: 'Yes, with adapted logistics: in late July the centre is closed to traffic and nearly a million festival-goers converge on the city. Your chauffeur uses the authorised drop-off points on the immediate periphery and covers late-night returns. Book at least a week ahead.',
        },
      },
      {
        q: {
          fr: 'Peut-on rayonner dans le Pays basque intérieur depuis Bayonne ?',
          en: 'Can I explore the inland Basque Country from Bayonne?',
        },
        a: {
          fr: 'Oui, c’est la base idéale : Espelette est à 25 minutes, Saint-Jean-Pied-de-Port à 50, la vallée des Aldudes à une heure. En mise à disposition à la journée, votre chauffeur enchaîne villages, producteurs et cols — itinéraire défini avec vous, prix fixe.',
          en: 'Yes, it is the ideal base: Espelette is 25 minutes away, Saint-Jean-Pied-de-Port 50, the Aldudes valley one hour. On a full-day hire, your chauffeur links villages, producers and mountain passes — itinerary agreed with you, fixed price.',
        },
      },
    ],
    nearby: ['biarritz', 'saint-jean-de-luz', 'pau'],
  },
  {
    slug: 'saint-jean-de-luz',
    name: { fr: 'Saint-Jean-de-Luz', en: 'Saint-Jean-de-Luz' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Biarritz Pays Basque (BIQ)',
    airportTransfer: {
      fr: 'L’aéroport de Biarritz Pays Basque (BIQ) se trouve à 15 km au nord-est de Saint-Jean-de-Luz : comptez 20 minutes par l’A63 jusqu’à la place Louis XIV ou au Grand Hôtel. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Biarritz Pays Basque Airport (BIQ) lies 15 km north-east of Saint-Jean-de-Luz: allow 20 minutes via the A63 to Place Louis XIV or the Grand Hôtel. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Cité des corsaires blottie dans la baie la plus abritée de la côte basque, Saint-Jean-de-Luz garde la maison de l’Infante, l’église Saint-Jean-Baptiste où Louis XIV épousa Marie-Thérèse, un port de pêche coloré et la rue Gambetta aux linges basques. Votre **chauffeur privé à Saint-Jean-de-Luz** relie l’aéroport de Biarritz en vingt minutes, dessert villas et hôtels de la baie, à prix fixe et en toute discrétion.',
        'De part et d’autre de la baie, le meilleur du Pays basque : **la corniche de flysch vers Hendaye et l’Espagne**, Ciboure et le fort de Socoa, la Rhune en train à crémaillère depuis le col de Saint-Ignace, Espelette et Sare à vingt minutes, San Sebastián à trente-cinq. Votre chauffeur compose vos journées entre plage, villages et pintxos, marées et tee-times respectés.',
      ],
      en: [
        'A corsair town nestled in the most sheltered bay of the Basque coast, Saint-Jean-de-Luz keeps the Maison de l’Infante, the church where Louis XIV married Marie-Thérèse, a colourful fishing port and Rue Gambetta with its Basque linens. Your **private chauffeur in Saint-Jean-de-Luz** links Biarritz airport in twenty minutes and serves the villas and hotels of the bay, at a fixed price and with complete discretion.',
        'Either side of the bay lies the best of the Basque Country: **the flysch corniche towards Hendaye and Spain**, Ciboure and the Socoa fort, La Rhune by rack railway from the Saint-Ignace pass, Espelette and Sare twenty minutes away, San Sebastián thirty-five. Your chauffeur shapes your days between beach, villages and pintxos, with tides and tee times respected.',
      ],
    },
    experiences: [
      {
        title: { fr: 'La Rhune et les villages du Labourd', en: 'La Rhune and the Labourd villages' },
        teaser: {
          fr: 'Le train à crémaillère de 1924 jusqu’au sommet à 905 mètres — pottoks, vautours et vue sur deux mers —, puis Sare et Ainhoa, classés parmi les plus beaux villages de France. Gâteau basque et cidre en redescendant.',
          en: 'The 1924 rack railway to the 905-metre summit — pottok ponies, vultures and a two-sea view — then Sare and Ainhoa, listed among France’s most beautiful villages. Gâteau basque and cider on the way down.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'San Sebastián à l’heure des pintxos', en: 'San Sebastián at pintxos hour' },
        teaser: {
          fr: 'Trente-cinq minutes de route et la parte vieja s’ouvre à vous : comptoirs de pintxos, baie de la Concha, mont Igueldo. Votre chauffeur vous attend le temps qu’il faut et vous ramène de nuit vers la baie luzienne.',
          en: 'Thirty-five minutes down the road and the Parte Vieja is yours: pintxos counters, La Concha bay, Mount Igueldo. Your chauffeur waits as long as it takes and drives you home to the bay at night.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '590',
      },
      {
        title: { fr: 'Corniche basque et baie d’Hendaye', en: 'Basque corniche and Hendaye bay' },
        teaser: {
          fr: 'Les falaises de flysch de Socoa à Hendaye, le château-observatoire Abbadia d’Antoine d’Abbadie, la grande plage face aux Deux Jumeaux. Arrêts photo aux belvédères, retour par Ciboure et la maison de Ravel.',
          en: 'The flysch cliffs from Socoa to Hendaye, Antoine d’Abbadie’s château-observatory, the great beach facing the Twin Rocks. Photo stops at the belvederes, returning via Ciboure and Ravel’s birthplace.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Saint-Jean-de-Luz royal et gourmand', en: 'Royal and gourmet Saint-Jean-de-Luz' },
        teaser: {
          fr: 'L’église du mariage royal et la maison de l’Infante, les macarons Adam fournisseurs de Louis XIV, la criée du port et les mouchous de la maison Pariès. Une flânerie guidée entre histoire et douceurs.',
          en: 'The church of the royal wedding and the Maison de l’Infante, Adam macarons once supplied to Louis XIV, the port’s fish auction and Maison Pariès’ mouchous. A guided stroll of history and sweet things.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Soirée luzienne', en: 'Saint-Jean-de-Luz evening' },
        teaser: {
          fr: 'Dîner de poisson sauvage sur le port ou aux tables reconnues de la baie — le Kaïku, l’Océan du Grand Hôtel — puis la digue-promenade et la baie illuminée. Dépose devant la table, retour à votre villa sans contrainte.',
          en: 'A wild-fish dinner on the port or at the bay’s acclaimed tables — Le Kaïku, the Grand Hôtel’s Océan — then the promenade dyke and the illuminated bay. Drop-off at the door, an effortless return to your villa.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Biarritz et Saint-Jean-de-Luz ?',
          en: 'How much does a transfer between Biarritz Airport and Saint-Jean-de-Luz cost?',
        },
        a: {
          fr: 'Le transfert privé entre Biarritz Pays Basque (BIQ) et Saint-Jean-de-Luz (15 km, 20 minutes) est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée, suivi du vol et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Biarritz Pays Basque (BIQ) and Saint-Jean-de-Luz (15 km, 20 minutes) is charged at a fixed price, confirmed at booking. Arrivals meet-and-greet, flight tracking and complimentary waiting time are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les trajets vers l’Espagne depuis Saint-Jean-de-Luz ?',
          en: 'Do you cover journeys into Spain from Saint-Jean-de-Luz?',
        },
        a: {
          fr: 'Oui. San Sebastián est à trente-cinq minutes, Hondarribia à vingt, Bilbao à 1 h 30 : nos véhicules sont autorisés à circuler en Espagne et chaque trajet transfrontalier est devisé à prix fixe, retour de nuit compris après un dîner de pintxos.',
          en: 'Yes. San Sebastián is thirty-five minutes away, Hondarribia twenty, Bilbao 1 h 30: our vehicles are authorised to operate in Spain and every cross-border journey is quoted at a fixed price, late-night return after a pintxos dinner included.',
        },
      },
      {
        q: {
          fr: 'La ville est-elle accessible en voiture l’été ?',
          en: 'Is the town accessible by car in summer?',
        },
        a: {
          fr: 'Le cœur de ville est partiellement piéton en saison et les parkings saturent vite. Votre chauffeur vous dépose au plus près de la plage, du port ou de votre table, patiente à proximité et vous récupère au même point — le luxe d’ignorer la question du stationnement.',
          en: 'The town core is partly pedestrianised in season and the car parks fill quickly. Your chauffeur drops you as close as possible to the beach, the port or your table, waits nearby and collects you at the same spot — the luxury of never thinking about parking.',
        },
      },
    ],
    nearby: ['biarritz', 'bayonne', 'pau'],
  },
  {
    slug: 'pau',
    name: { fr: 'Pau', en: 'Pau' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Pau Pyrénées (PUF)',
    airportTransfer: {
      fr: 'L’aéroport de Pau Pyrénées (PUF), à Uzein, se trouve à 12 km au nord du centre : comptez 15 à 20 minutes jusqu’au boulevard des Pyrénées. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Pau Pyrénées Airport (PUF), at Uzein, lies 12 km north of the centre: allow 15 to 20 minutes to the Boulevard des Pyrénées. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville natale d’Henri IV posée en balcon face à la chaîne des Pyrénées, Pau aligne son château Renaissance, le boulevard des Pyrénées et ses palmiers, le funiculaire centenaire et les villas anglaises de l’âge d’or thermal. Votre **chauffeur privé à Pau** dessert l’aéroport d’Uzein, la gare, les sièges de l’industrie et l’université, en berline Mercedes ou van premium, à prix fixe confirmé à la réservation.',
        'Pau est la porte du **Béarn et des grands cols pyrénéens** : le vignoble de Jurançon commence aux portes de la ville, Lourdes et sa grotte sont à quarante minutes, les cols d’Aubisque et du Tourmalet, mythes du Tour de France, à une heure trente. Vallée d’Ossau, pic du Midi, gave et fromages de bergers : votre chauffeur compose des journées entre vignes et sommets.',
      ],
      en: [
        'Henri IV’s birthplace set on a balcony facing the Pyrenean chain, Pau lines up its Renaissance castle, the palm-fringed Boulevard des Pyrénées, the century-old funicular and the English villas of the thermal golden age. Your **private chauffeur in Pau** serves Uzein airport, the station, the industrial headquarters and the university, in a Mercedes sedan or premium van, at a fixed price confirmed at booking.',
        'Pau is the gateway to **Béarn and the great Pyrenean passes**: the Jurançon vineyards begin at the city gates, Lourdes and its grotto are forty minutes away, the Aubisque and Tourmalet passes, legends of the Tour de France, an hour and a half. The Ossau valley, the Pic du Midi, mountain streams and shepherds’ cheeses: your chauffeur shapes days between vines and summits.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Vignoble de Jurançon', en: 'Jurançon vineyards' },
        teaser: {
          fr: 'Les coteaux qui baptisèrent Henri IV : manseng sec et moelleux de garde, domaines familiaux en balcon face aux Pyrénées. Deux à trois dégustations réservées, déjeuner de garbure et fromage de brebis chez un producteur.',
          en: 'The slopes whose wine christened Henri IV: dry and age-worthy sweet Manseng, family estates on balconies facing the Pyrenees. Two or three pre-booked tastings, a garbure-and-ewe’s-cheese lunch at a producer’s.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Vallée d’Ossau et col d’Aubisque', en: 'Ossau valley and Col d’Aubisque' },
        teaser: {
          fr: 'Le pic du Midi d’Ossau en toile de fond, les lacets de l’Aubisque chers au Tour de France, les vautours de la falaise d’Aste-Béon, fromage de bergers à Laruns. La haute montagne béarnaise sans conduire un mètre.',
          en: 'The Pic du Midi d’Ossau as a backdrop, the Aubisque hairpins beloved of the Tour de France, the vultures of the Aste-Béon cliff, shepherds’ cheese in Laruns. The high Béarn mountains without driving a metre.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Lourdes et les sanctuaires', en: 'Lourdes and the sanctuaries' },
        teaser: {
          fr: 'À quarante minutes de Pau, la grotte de Massabielle, les basiliques superposées et le château fort dominant le gave. Prise en charge adaptée aux personnes à mobilité réduite, attente pendant les célébrations.',
          en: 'Forty minutes from Pau, the Massabielle grotto, the tiered basilicas and the fortress overlooking the mountain stream. Pick-ups adapted for reduced mobility, waiting time during services.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Pau d’Henri IV', en: 'Henri IV’s Pau' },
        teaser: {
          fr: 'Le château natal du bon roi et sa carapace de tortue-berceau, le boulevard des Pyrénées et sa table d’orientation face aux sommets, les villas anglaises du quartier Trespoey. Deux heures trente d’histoire en balcon.',
          en: 'The good king’s birth castle and his turtle-shell cradle, the Boulevard des Pyrénées with its orientation table facing the peaks, the English villas of Trespoey. Two and a half hours of history on a balcony.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '340',
      },
      {
        title: { fr: 'Grands cols du Tour de France', en: 'Great passes of the Tour de France' },
        teaser: {
          fr: 'Aubisque, Soulor, Tourmalet : la trilogie pyrénéenne en une journée, avec assistance pour les cyclistes — vélos en soute, ravitaillement, récupération au sommet. Ou simple contemplation depuis la banquette arrière.',
          en: 'Aubisque, Soulor, Tourmalet: the Pyrenean trilogy in one day, with rider support — bikes on board, refuelling stops, summit pick-up. Or pure contemplation from the back seat.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Pau Pyrénées et le centre-ville ?',
          en: 'How much does a transfer between Pau Pyrénées Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Pau Pyrénées (PUF) et le centre (12 km, 15 à 20 minutes) est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Pau Pyrénées (PUF) and the centre (12 km, 15 to 20 minutes) is charged at a fixed price, confirmed at booking. Arrivals-hall meet-and-greet with a name board, flight tracking and complimentary waiting time are included.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition pour les déplacements professionnels autour de Pau ?',
          en: 'Do you offer hourly hire for business travel around Pau?',
        },
        a: {
          fr: 'Oui. Sites industriels de Lacq et Mourenx, technopole Hélioparc, université : la mise à disposition à l’heure ou à la journée permet d’enchaîner les rendez-vous avec un chauffeur qui attend entre chaque étape. Facturation entreprise et reporting disponibles.',
          en: 'Yes. The Lacq and Mourenx industrial sites, the Hélioparc technology park, the university: hourly or full-day hire lets you chain meetings with a chauffeur waiting between each stop. Corporate invoicing and reporting available.',
        },
      },
      {
        q: {
          fr: 'Peut-on rejoindre les stations de ski des Pyrénées depuis Pau ?',
          en: 'Can I reach the Pyrenean ski resorts from Pau?',
        },
        a: {
          fr: 'Oui. Gourette est à une heure, Artouste à 1 h 15, La Pierre Saint-Martin à 1 h 30 : nos véhicules sont équipés pour la montagne en hiver et les transferts skis et bagages compris sont facturés à prix fixe, depuis l’aéroport ou votre domicile.',
          en: 'Yes. Gourette is one hour away, Artouste 1 h 15, La Pierre Saint-Martin 1 h 30: our vehicles are winter-equipped for the mountains and transfers, skis and luggage included, are charged at a fixed price from the airport or your home.',
        },
      },
    ],
    nearby: ['biarritz', 'bayonne', 'toulouse'],
  },
  {
    slug: 'la-rochelle',
    name: { fr: 'La Rochelle', en: 'La Rochelle' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'La Rochelle-Île de Ré (LRH)',
    airportTransfer: {
      fr: 'L’aéroport de La Rochelle-Île de Ré (LRH) se trouve à 5 km au nord-ouest du centre : comptez 10 à 15 minutes jusqu’au Vieux-Port et ses tours. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'La Rochelle-Île de Ré Airport (LRH) lies 5 km north-west of the centre: allow 10 to 15 minutes to the Vieux-Port and its towers. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Belle et rebelle, La Rochelle garde ses trois tours médiévales à l’entrée du Vieux-Port, ses rues à arcades, son aquarium parmi les plus grands d’Europe et le plus vaste port de plaisance de la façade atlantique aux Minimes. Votre **chauffeur privé à La Rochelle** relie l’aéroport, la gare et les pontons, dessert congrès et salons — dont le Grand Pavois —, en berline Mercedes ou van premium, à prix fixe.',
        'Au large et alentour, un archipel de merveilles : **l’île de Ré et ses villages blancs à volets verts** de l’autre côté du pont, l’île d’Aix sans voitures, Rochefort et sa Corderie royale, Brouage la fortifiée, le Marais poitevin en barque. Huîtres de Marennes-Oléron, pineau et cognac complètent des journées que votre chauffeur orchestre au fil des marées.',
      ],
      en: [
        'Beautiful and rebellious, La Rochelle keeps its three medieval towers at the mouth of the Vieux-Port, its arcaded streets, one of Europe’s largest aquariums and the Atlantic coast’s biggest marina at Les Minimes. Your **private chauffeur in La Rochelle** links the airport, the station and the pontoons, and serves congresses and boat shows — including the Grand Pavois — in a Mercedes sedan or premium van, at a fixed price.',
        'Offshore and around, an archipelago of wonders: **the Île de Ré and its white villages with green shutters** across the bridge, car-free Île d’Aix, Rochefort and its royal ropeworks, fortified Brouage, the Marais Poitevin by flat-bottomed boat. Marennes-Oléron oysters, pineau and cognac round out days your chauffeur orchestrates to the rhythm of the tides.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Île de Ré, villages et phare des Baleines', en: 'Île de Ré, villages and the Baleines lighthouse' },
        teaser: {
          fr: 'Saint-Martin-de-Ré et ses fortifications Vauban classées, Ars et son clocher noir et blanc, les marais salants de Loix, le phare des Baleines. Huîtres au retour dans une cabane ostréicole face au pertuis.',
          en: 'Saint-Martin-de-Ré and its listed Vauban fortifications, Ars and its black-and-white steeple, the Loix salt marshes, the Baleines lighthouse. Oysters on the way back in a shack facing the strait.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Marais poitevin, la Venise verte', en: 'Marais Poitevin, the Green Venice' },
        teaser: {
          fr: 'À quarante-cinq minutes de La Rochelle, embarquement à Coulon ou Arçais pour une promenade en barque sous les frênes têtards, puis déjeuner au bord de la Sèvre niortaise. Silence, lentilles d’eau et anguilles grillées.',
          en: 'Forty-five minutes from La Rochelle, board a flat-bottomed boat at Coulon or Arçais to glide beneath the pollarded ash trees, then lunch beside the Sèvre Niortaise. Silence, duckweed and grilled eel.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '620',
      },
      {
        title: { fr: 'Rochefort et Brouage', en: 'Rochefort and Brouage' },
        teaser: {
          fr: 'La Corderie royale de Colbert et le chantier de l’Hermione, frégate de La Fayette, puis les remparts de Brouage posés au milieu des marais. Retour par le pont transbordeur du Martrou, dernier de France.',
          en: 'Colbert’s royal ropeworks and the shipyard of the Hermione, La Fayette’s frigate, then the ramparts of Brouage set amid the marshes. Return via the Martrou transporter bridge, the last in France.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'La Rochelle maritime', en: 'Maritime La Rochelle' },
        teaser: {
          fr: 'Les tours Saint-Nicolas et de la Chaîne, les arcades de la rue du Palais, l’aquarium et ses requins, puis le port des Minimes et une dégustation de pineau des Charentes. La cité atlantique en une demi-journée.',
          en: 'The Saint-Nicolas and Chaîne towers, the arcades of Rue du Palais, the aquarium and its sharks, then the Minimes marina and a Pineau des Charentes tasting. The Atlantic city in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Soirée sur le Vieux-Port', en: 'Evening on the Vieux-Port' },
        teaser: {
          fr: 'Dîner iodé aux tables reconnues du port ou du marché — Christopher Coutanceau, les bancs d’écailler — puis les tours illuminées et le front de mer. Dépose devant la table, retour à votre hôtel ou villa de Ré.',
          en: 'A seafood dinner at the acclaimed tables of the port or the market — Christopher Coutanceau, the oyster bars — then the illuminated towers and the waterfront. Drop-off at the door, return to your hotel or Ré villa.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de La Rochelle et le centre ou l’île de Ré ?',
          en: 'How much does a transfer between La Rochelle Airport and the centre or the Île de Ré cost?',
        },
        a: {
          fr: 'Le transfert privé entre La Rochelle-Île de Ré (LRH) et le centre (5 km, 10 à 15 minutes) est facturé à prix fixe, tout comme les liaisons vers l’île de Ré — Saint-Martin est à 30 minutes, péage du pont inclus dans le tarif annoncé.',
          en: 'A private transfer between La Rochelle-Île de Ré (LRH) and the centre (5 km, 10 to 15 minutes) is charged at a fixed price, as are journeys to the Île de Ré — Saint-Martin is 30 minutes away, with the bridge toll included in the quoted fare.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous les villas de l’île de Ré en été ?',
          en: 'Do you serve villas on the Île de Ré in summer?',
        },
        a: {
          fr: 'Oui, toute l’année et quotidiennement en été. Nous connaissons chaque village — Les Portes, Ars, La Flotte — et anticipons le trafic du pont en haute saison : le prix reste fixe même quand la traversée s’allonge. Réservez 48 heures à l’avance en juillet-août.',
          en: 'Yes, all year round and daily in summer. We know every village — Les Portes, Ars, La Flotte — and anticipate the bridge traffic in high season: the price stays fixed even when the crossing slows. Book 48 hours ahead in July-August.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts pendant le Grand Pavois et les Francofolies ?',
          en: 'Do you provide transfers during the Grand Pavois and the Francofolies?',
        },
        a: {
          fr: 'Oui. Pendant le salon nautique de septembre et le festival de juillet, nous renforçons nos équipes : navettes exposants vers les Minimes, déposes au plus près des scènes malgré les fermetures, retours de nuit. Réservez tôt, la demande est forte.',
          en: 'Yes. During the September boat show and the July festival we scale up: exhibitor shuttles to Les Minimes, drop-offs as close to the stages as closures allow, late-night returns. Book early, demand is high.',
        },
      },
    ],
    nearby: ['cognac', 'nantes'],
  },
  {
    slug: 'cognac',
    name: { fr: 'Cognac', en: 'Cognac' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airportTransfer: {
      fr: 'Cognac se rejoint depuis l’aéroport de Bordeaux-Mérignac en 1 h 15 environ (110 km par l’A10 et la N141) ; La Rochelle-Île de Ré est à une heure et la gare d’Angoulême TGV, à 45 minutes, place Paris à moins de trois heures. Accueil avec panneau nominatif, vol ou train suivi en temps réel.',
      en: 'Cognac is about 1 h 15 from Bordeaux-Mérignac Airport (110 km via the A10 and N141); La Rochelle-Île de Ré is one hour away and Angoulême TGV station, 45 minutes off, puts Paris under three hours away. Name-board meet-and-greet, flight or train tracked in real time.',
    },
    intro: {
      fr: [
        'Petite ville de pierre blonde au bord de la Charente, Cognac a donné son nom à l’eau-de-vie la plus célèbre du monde : chais centenaires aux murs noircis par la part des anges, maisons Hennessy, Martell, Rémy Martin et Courvoisier, tonnellerie et verrerie d’art. Votre **chauffeur privé à Cognac** relie Bordeaux, Angoulême et La Rochelle, dessert les maisons de négoce et les distilleries familiales, à prix fixe, en berline ou van premium.',
        'Autour de la ville, les **crus de Grande et Petite Champagne** déroulent leurs vignes d’ugni blanc jusqu’à Segonzac et Bouteville. Visites de chais sur rendez-vous, dégustations verticales, assemblage de votre propre carafe chez un maître de chai : votre chauffeur conduit de domaine en domaine pendant que vous goûtez, puis vous ramène par les villages romans de la vallée de la Charente.',
      ],
      en: [
        'A small blond-stone town on the Charente, Cognac gave its name to the world’s most famous eau-de-vie: century-old cellars blackened by the angels’ share, the houses of Hennessy, Martell, Rémy Martin and Courvoisier, cooperage and art glassworks. Your **private chauffeur in Cognac** connects Bordeaux, Angoulême and La Rochelle, and serves the trading houses and family distilleries, at a fixed price, by sedan or premium van.',
        'Around the town, the **Grande and Petite Champagne crus** unroll their Ugni Blanc vines towards Segonzac and Bouteville. Cellar visits by appointment, vertical tastings, blending your own carafe with a cellar master: your chauffeur drives from estate to estate while you taste, then brings you home through the Romanesque villages of the Charente valley.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Grandes maisons de cognac', en: 'The great cognac houses' },
        teaser: {
          fr: 'Hennessy et sa traversée de la Charente, Martell la plus ancienne, Rémy Martin et ses chais de Grande Champagne : visites et dégustations de cuvées rares réservées à l’avance. Déjeuner au bord du fleuve entre deux maisons.',
          en: 'Hennessy with its Charente river crossing, Martell the oldest, Rémy Martin and its Grande Champagne cellars: visits and rare-cuvée tastings booked in advance. Riverside lunch between two houses.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Distilleries familiales de Grande Champagne', en: 'Family distilleries of Grande Champagne' },
        teaser: {
          fr: 'Segonzac, Bouteville, Lignières : bouilleurs de cru et domaines familiaux où l’on visite l’alambic en chauffe l’hiver, dégustations au fût dans les chais. Le cognac des connaisseurs, loin des circuits classiques.',
          en: 'Segonzac, Bouteville, Lignières: grower-distillers and family estates where the still runs hot in winter, with cask tastings in the cellars. Connoisseurs’ cognac, far from the beaten track.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Atelier d’assemblage chez un maître de chai', en: 'Blending workshop with a cellar master' },
        teaser: {
          fr: 'Composez votre propre cognac à partir d’eaux-de-vie de différents âges, guidé par un maître de chai, et repartez avec votre carafe personnalisée. Une expérience confidentielle qui se réserve longtemps à l’avance.',
          en: 'Blend your own cognac from eaux-de-vie of different ages, guided by a cellar master, and leave with your personalised carafe. A confidential experience that books up far in advance.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '520',
      },
      {
        title: { fr: 'Vallée de la Charente et villages romans', en: 'Charente valley and Romanesque villages' },
        teaser: {
          fr: 'Bourg-Charente et son château, Jarnac où repose François Mitterrand, Bassac et son abbaye, écluses et gabares au fil du fleuve. Pineau des Charentes et galette charentaise en cours de route.',
          en: 'Bourg-Charente and its château, Jarnac where François Mitterrand rests, Bassac and its abbey, locks and flat-bottomed gabares along the river. Pineau des Charentes and galette charentaise along the way.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Soirée cognac et gastronomie', en: 'Cognac and gastronomy evening' },
        teaser: {
          fr: 'Dîner aux tables reconnues de la région — Les Foudres au château de Chanteloup, la Ribaudière à Bourg-Charente — puis dégustation de vieux millésimes au bar à cognacs. Retour de nuit à votre hôtel ou chambre de chais.',
          en: 'Dinner at the region’s acclaimed tables — Les Foudres at Château de Chanteloup, La Ribaudière in Bourg-Charente — then old vintages at a cognac bar. Late-night return to your hotel or cellar-house room.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Comment rejoindre Cognac depuis Bordeaux ou Paris ?',
          en: 'How do I reach Cognac from Bordeaux or Paris?',
        },
        a: {
          fr: 'Depuis Bordeaux-Mérignac, comptez 1 h 15 de transfert privé à prix fixe. Depuis Paris, le TGV rejoint Angoulême en moins de deux heures ; votre chauffeur vous y attend à quai et Cognac est à 45 minutes. Nous assurons aussi le trajet complet Paris-Cognac sur demande.',
          en: 'From Bordeaux-Mérignac, allow 1 h 15 by fixed-price private transfer. From Paris, the TGV reaches Angoulême in under two hours; your chauffeur waits at the platform and Cognac is 45 minutes away. We also cover the full Paris-Cognac journey on request.',
        },
      },
      {
        q: {
          fr: 'Les maisons de cognac se visitent-elles sans réservation ?',
          en: 'Can the cognac houses be visited without booking?',
        },
        a: {
          fr: 'Rarement : les grandes maisons comme les domaines familiaux reçoivent sur rendez-vous, et les dégustations de cuvées rares se réservent parfois des semaines à l’avance. Indiquez-nous vos envies et nous coordonnons les créneaux avec votre itinéraire.',
          en: 'Rarely: the great houses and family estates alike receive visitors by appointment, and rare-cuvée tastings can book out weeks ahead. Tell us your wishes and we coordinate the slots with your itinerary.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Cognac et Saint-Émilion ou Bordeaux dans un même séjour ?',
          en: 'Can Cognac be combined with Saint-Émilion or Bordeaux in one trip?',
        },
        a: {
          fr: 'Oui : Saint-Émilion est à 1 h 15 et Bordeaux à 1 h 30. Nous composons des itinéraires de deux à quatre jours entre vignobles et chais, avec le même chauffeur, hôtels et tables réservés. Devis global à prix fixe avant le départ.',
          en: 'Yes: Saint-Émilion is 1 h 15 away and Bordeaux 1 h 30. We build two- to four-day itineraries across vineyards and cellars with the same chauffeur, hotels and tables booked. A single fixed-price quote before departure.',
        },
      },
    ],
    nearby: ['la-rochelle'],
  },
  {
    slug: 'colmar',
    name: { fr: 'Colmar', en: 'Colmar' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'EuroAirport Bâle-Mulhouse (MLH)',
    airportTransfer: {
      fr: 'L’EuroAirport Bâle-Mulhouse (MLH) se trouve à 65 km au sud de Colmar : comptez 45 minutes par l’autoroute A35. Depuis Strasbourg (SXB), à 70 km au nord, comptez 50 minutes. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'EuroAirport Basel-Mulhouse (MLH) lies 65 km south of Colmar: allow 45 minutes via the A35 motorway. From Strasbourg (SXB), 70 km north, allow 50 minutes. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale des vins d’Alsace, Colmar déroule ses maisons à colombages, ses canaux fleuris de la Petite Venise et son musée Unterlinden abritant le retable d’Issenheim. Votre **chauffeur privé à Colmar** dessert le centre historique piéton, les domaines de la route des vins et les hôtels de charme : transferts depuis Bâle-Mulhouse ou Strasbourg, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Colmar est le cœur de la **route des vins d’Alsace**. Les villages classés parmi les plus beaux de France — Riquewihr, Eguisheim, Kaysersberg — s’égrènent au pied des Vosges à quelques minutes, le château du Haut-Kœnigsbourg domine la plaine. En mise à disposition à la journée, votre chauffeur relie caves, villages fleuris et châteaux pendant que vous dégustez sans souci de conduite.',
      ],
      en: [
        'Capital of the Alsace wines, Colmar unrolls its half-timbered houses, the flowered canals of the Petite Venise and its Unterlinden Museum housing the Isenheim Altarpiece. Your **private chauffeur in Colmar** serves the pedestrian historic centre, the wine-route estates and the boutique hotels: transfers from Basel-Mulhouse or Strasbourg, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Colmar is the heart of the **Alsace wine route**. The villages ranked among France’s finest — Riquewihr, Eguisheim, Kaysersberg — string along the foot of the Vosges minutes away, the Haut-Kœnigsbourg castle dominates the plain. With a full-day hire, your chauffeur links cellars, flowered villages and castles while you taste with no driving worry.',
      ],
    },
    experiences: [
      { title: { fr: 'Route des vins d’Alsace', en: 'Alsace wine route' }, teaser: { fr: 'Riquewihr, Eguisheim et Kaysersberg, dégustations de riesling et gewurztraminer dans des domaines familiaux, déjeuner en winstub. Votre chauffeur conduit, vous savourez.', en: 'Riquewihr, Eguisheim and Kaysersberg, tastings of riesling and gewurztraminer at family estates, lunch in a winstub. Your chauffeur drives, you savour.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Colmar et la Petite Venise', en: 'Colmar and the Petite Venise' }, teaser: { fr: 'Les canaux fleuris, le quartier des Tanneurs, le musée Unterlinden et le retable d’Issenheim. Dépose au centre piéton, promenade au fil de l’eau.', en: 'The flowered canals, the Tanners’ quarter, the Unterlinden Museum and the Isenheim Altarpiece. Drop-off in the pedestrian centre, a stroll along the water.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Château du Haut-Kœnigsbourg', en: 'Haut-Kœnigsbourg castle' }, teaser: { fr: 'La forteresse médiévale restaurée dominant la plaine d’Alsace, son panorama sur les Vosges et la Forêt-Noire, un village viticole au retour. Demi-journée patrimoine.', en: 'The restored medieval fortress dominating the Alsace plain, its panorama over the Vosges and the Black Forest, a wine village on the way back. A heritage half-day.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '380' },
      { title: { fr: 'Strasbourg depuis Colmar', en: 'Strasbourg from Colmar' }, teaser: { fr: 'À 70 km, la cathédrale, la Petite France et le quartier européen. Journée dans la capitale alsacienne, chauffeur en attente entre les étapes.', en: '70 km away, the cathedral, the Petite France and the European quarter. A day in the Alsatian capital, chauffeur waiting between stops.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Soirée alsacienne', en: 'Alsatian evening' }, teaser: { fr: 'Dîner dans une winstub, la Petite Venise illuminée, un dernier verre de crémant. Véhicule à disposition toute la soirée. Marché de Noël en décembre.', en: 'Dinner in a winstub, the illuminated Petite Venise, a last glass of crémant. Vehicle on standby all evening. Christmas market in December.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Peut-on faire la route des vins d’Alsace avec un chauffeur ?', en: 'Can you do the Alsace wine route with a chauffeur?' }, a: { fr: 'Oui, c’est la formule la plus demandée. Votre chauffeur organise et relie les domaines et villages viticoles, vous permettant de déguster en toute sérénité, sur une journée à prix fixe.', en: 'Yes, it is the most requested option. Your chauffeur arranges and links the estates and wine villages, letting you taste with complete peace of mind, over a fixed-price day.' } },
      { q: { fr: 'Depuis quel aéroport rejoint-on Colmar ?', en: 'From which airport do you reach Colmar?' }, a: { fr: 'Bâle-Mulhouse (MLH) est à 45 minutes, Strasbourg (SXB) à 50 minutes. Votre chauffeur vous accueille à l’aéroport de votre choix avec panneau nominatif, à prix fixe.', en: 'Basel-Mulhouse (MLH) is 45 minutes away, Strasbourg (SXB) 50 minutes. Your chauffeur greets you at the airport of your choice with a name board, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs à Colmar parlent-ils anglais ?', en: 'Do your chauffeurs in Colmar speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['strasbourg', 'mulhouse'],
  },
  {
    slug: 'mulhouse',
    name: { fr: 'Mulhouse', en: 'Mulhouse' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'EuroAirport Bâle-Mulhouse (MLH)',
    airportTransfer: {
      fr: 'L’EuroAirport Bâle-Mulhouse (MLH) se trouve à 25 km au sud de Mulhouse : comptez 25 minutes. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'EuroAirport Basel-Mulhouse (MLH) lies 25 km south of Mulhouse: allow 25 minutes. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ancienne capitale industrielle du sud de l’Alsace, Mulhouse conserve la plus belle collection automobile du monde — la Cité de l’Automobile et ses Bugatti — et un patrimoine textile unique. Votre **chauffeur privé à Mulhouse** dessert le centre, les musées techniques et les rendez-vous industriels de la région des trois frontières : transferts depuis l’EuroAirport, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Mulhouse est au carrefour de la **France, de l’Allemagne et de la Suisse**. Bâle et ses musées sont à 25 km, la Forêt-Noire de l’autre côté du Rhin, la route des vins et Colmar au nord. En mise à disposition à la journée, votre chauffeur relie musées, villages viticoles et villes frontalières dans le confort d’une berline privée.',
      ],
      en: [
        'A former industrial capital of southern Alsace, Mulhouse holds the world’s finest car collection — the Cité de l’Automobile and its Bugattis — and a unique textile heritage. Your **private chauffeur in Mulhouse** serves the centre, the technical museums and the industrial meetings of the three-borders region: transfers from the EuroAirport, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Mulhouse is at the crossroads of **France, Germany and Switzerland**. Basel and its museums are 25 km away, the Black Forest across the Rhine, the wine route and Colmar to the north. With a full-day hire, your chauffeur links museums, wine villages and border cities in the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Cité de l’Automobile', en: 'Cité de l’Automobile' }, teaser: { fr: 'La collection Schlumpf, plus de 400 voitures dont les Bugatti Royale, temple mondial de l’automobile. Demi-journée pour passionnés, dépose à l’entrée.', en: 'The Schlumpf Collection, over 400 cars including the Bugatti Royale, a world temple of the automobile. A half-day for enthusiasts, drop-off at the entrance.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Route des vins et Colmar', en: 'Wine route and Colmar' }, teaser: { fr: 'Les villages viticoles du sud de l’Alsace, Eguisheim et Colmar, dégustations en domaine. Journée vin et villages fleuris au nord de Mulhouse.', en: 'The wine villages of southern Alsace, Eguisheim and Colmar, estate tastings. A day of wine and flowered villages north of Mulhouse.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Bâle et ses musées', en: 'Basel and its museums' }, teaser: { fr: 'À 25 km en Suisse, la Fondation Beyeler, le Kunstmuseum, la vieille ville sur le Rhin. Journée d’art contemporain de l’autre côté de la frontière.', en: '25 km away in Switzerland, the Fondation Beyeler, the Kunstmuseum, the old town on the Rhine. A day of contemporary art across the border.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Écomusée et Forêt-Noire', en: 'Écomusée and Black Forest' }, teaser: { fr: 'L’Écomusée d’Alsace, plus grand musée à ciel ouvert de France, puis un aperçu de la Forêt-Noire allemande. Journée traditions et nature.', en: 'The Écomusée d’Alsace, France’s largest open-air museum, then a glimpse of the German Black Forest. A day of traditions and nature.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Soirée aux trois frontières', en: 'Three-borders evening' }, teaser: { fr: 'Dîner alsacien dans le centre, une tarte flambée en winstub, l’ambiance frontalière de la ville. Véhicule à disposition toute la soirée.', en: 'An Alsatian dinner in the centre, a tarte flambée in a winstub, the border-town atmosphere. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’EuroAirport à Mulhouse ?', en: 'How long from the EuroAirport to Mulhouse?' }, a: { fr: 'Comptez 25 minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 25 minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on visiter Bâle et la Suisse depuis Mulhouse ?', en: 'Can you visit Basel and Switzerland from Mulhouse?' }, a: { fr: 'Oui, Bâle est à 25 km, sans formalité de frontière particulière. En mise à disposition à la journée, votre chauffeur combine musées suisses et villes alsaciennes, à prix fixe.', en: 'Yes, Basel is 25 km away, with no particular border formalities. With a full-day hire, your chauffeur combines Swiss museums and Alsatian cities, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['colmar', 'strasbourg'],
  },
  {
    slug: 'metz',
    name: { fr: 'Metz', en: 'Metz' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Metz-Nancy-Lorraine (ETZ)',
    airportTransfer: {
      fr: 'L’aéroport de Metz-Nancy-Lorraine (ETZ) se trouve à 25 km au sud de Metz : comptez 25 minutes. Depuis Luxembourg (LUX), à 65 km au nord, comptez 50 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Metz-Nancy-Lorraine Airport (ETZ) lies 25 km south of Metz: allow 25 minutes. From Luxembourg (LUX), 65 km north, allow 50 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Cité impériale au confluent de la Moselle et de la Seille, Metz marie une cathédrale de pierre jaune aux plus grandes verrières gothiques de France, un quartier impérial allemand et le Centre Pompidou-Metz. Votre **chauffeur privé à Metz** dessert le centre, le quartier des affaires et les rendez-vous transfrontaliers : transferts depuis l’aéroport ou Luxembourg, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Metz est au cœur de la **Grande Région**. Luxembourg et ses institutions sont à 50 minutes, Nancy et sa place Stanislas à 45 km, la frontière allemande et la Sarre tout près. En mise à disposition à la journée, votre chauffeur relie musées, villes d’art et rendez-vous d’affaires dans ce carrefour de l’Europe.',
      ],
      en: [
        'An imperial city at the confluence of the Moselle and the Seille, Metz marries a yellow-stone cathedral with France’s largest Gothic stained-glass windows, a German imperial quarter and the Centre Pompidou-Metz. Your **private chauffeur in Metz** serves the centre, the business district and cross-border meetings: transfers from the airport or Luxembourg, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Metz lies at the heart of the **Greater Region**. Luxembourg and its institutions are 50 minutes away, Nancy and its Place Stanislas 45 km, the German border and the Saarland nearby. With a full-day hire, your chauffeur links museums, art cities and business meetings in this crossroads of Europe.',
      ],
    },
    experiences: [
      { title: { fr: 'Metz et le Centre Pompidou', en: 'Metz and the Centre Pompidou' }, teaser: { fr: 'La cathédrale Saint-Étienne et ses verrières, le quartier impérial, le Centre Pompidou-Metz. Dépose au centre, promenade entre gothique et art contemporain.', en: 'Saint-Étienne Cathedral and its stained glass, the imperial quarter, the Centre Pompidou-Metz. Drop-off in the centre, a stroll between Gothic and contemporary art.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Luxembourg depuis Metz', en: 'Luxembourg from Metz' }, teaser: { fr: 'À 50 minutes, la vieille ville classée UNESCO, les casemates, le quartier européen du Kirchberg. Journée dans le Grand-Duché, chauffeur en attente.', en: '50 minutes away, the UNESCO-listed old town, the casemates, the European Kirchberg district. A day in the Grand Duchy, chauffeur waiting.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Nancy et la place Stanislas', en: 'Nancy and the Place Stanislas' }, teaser: { fr: 'À 45 km, la plus belle place royale d’Europe classée UNESCO, l’Art nouveau de l’École de Nancy. Journée d’art et d’élégance lorraine.', en: '45 km away, Europe’s finest royal square, UNESCO-listed, the Art Nouveau of the École de Nancy. A day of Lorraine art and elegance.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Verdun et la mémoire', en: 'Verdun and remembrance' }, teaser: { fr: 'À une heure, les champs de bataille de 1916, l’ossuaire de Douaumont, le mémorial. Journée d’histoire au cœur de la Grande Guerre.', en: 'An hour away, the 1916 battlefields, the Douaumont ossuary, the memorial. A day of history at the heart of the Great War.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Soirée messine', en: 'Metz evening' }, teaser: { fr: 'Dîner dans le centre, la cathédrale illuminée dite « lanterne du Bon Dieu », les quais de la Moselle. Véhicule à disposition toute la soirée.', en: 'Dinner in the centre, the illuminated cathedral known as the “Good Lord’s Lantern”, the Moselle quays. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport à Metz ?', en: 'How long from the airport to Metz?' }, a: { fr: 'Comptez 25 minutes depuis Metz-Nancy-Lorraine (ETZ) et 50 minutes depuis Luxembourg (LUX). Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes.', en: 'Allow 25 minutes from Metz-Nancy-Lorraine (ETZ) and 50 minutes from Luxembourg (LUX). The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time.' } },
      { q: { fr: 'Proposez-vous un service transfrontalier vers le Luxembourg ?', en: 'Do you offer a cross-border service to Luxembourg?' }, a: { fr: 'Oui, les liaisons Metz–Luxembourg sont fréquentes. Transferts et mises à disposition pour rendez-vous d’affaires ou institutionnels, avec chauffeurs habitués à la Grande Région. Compte corporate disponible.', en: 'Yes, Metz–Luxembourg links are frequent. Transfers and hire for business or institutional meetings, with chauffeurs used to the Greater Region. Corporate account available.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['nancy', 'strasbourg', 'luxembourg-city'],
  },
  {
    slug: 'nancy',
    name: { fr: 'Nancy', en: 'Nancy' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Metz-Nancy-Lorraine (ETZ)',
    airportTransfer: {
      fr: 'L’aéroport de Metz-Nancy-Lorraine (ETZ) se trouve à 45 km au nord de Nancy : comptez 40 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Metz-Nancy-Lorraine Airport (ETZ) lies 45 km north of Nancy: allow 40 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ancienne capitale des ducs de Lorraine, Nancy possède avec la place Stanislas la plus belle place royale d’Europe, classée UNESCO, et fut le berceau de l’Art nouveau avec l’École de Nancy. Votre **chauffeur privé à Nancy** dessert le centre historique, les musées et les rendez-vous d’affaires : transferts depuis l’aéroport, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Nancy est au cœur de la **Lorraine**. Metz et son Centre Pompidou sont à 45 km, les côtes de Toul et leurs vins gris tout près, les Vosges à l’est. En mise à disposition à la journée, votre chauffeur relie places royales, verreries d’art — Baccarat, Daum — et paysages lorrains dans le confort d’une berline privée.',
      ],
      en: [
        'A former capital of the Dukes of Lorraine, Nancy has in the Place Stanislas Europe’s finest royal square, UNESCO-listed, and was the cradle of Art Nouveau with the École de Nancy. Your **private chauffeur in Nancy** serves the historic centre, the museums and business meetings: transfers from the airport, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Nancy lies at the heart of **Lorraine**. Metz and its Centre Pompidou are 45 km away, the Toul hillsides and their vin gris nearby, the Vosges to the east. With a full-day hire, your chauffeur links royal squares, art glassworks — Baccarat, Daum — and Lorraine landscapes in the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Place Stanislas et Art nouveau', en: 'Place Stanislas and Art Nouveau' }, teaser: { fr: 'La place royale et ses grilles dorées, le musée de l’École de Nancy, la villa Majorelle. Dépose au centre, promenade entre XVIIIe siècle et Art nouveau.', en: 'The royal square and its gilded gates, the École de Nancy museum, the Villa Majorelle. Drop-off in the centre, a stroll between the 18th century and Art Nouveau.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Baccarat et le cristal', en: 'Baccarat and crystal' }, teaser: { fr: 'La manufacture et le musée Baccarat, l’église aux vitraux de cristal, la vallée de la Meurthe. Journée art du cristal dans la Lorraine profonde.', en: 'The Baccarat factory and museum, the church with its crystal windows, the Meurthe valley. A day of crystal art in deep Lorraine.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Metz depuis Nancy', en: 'Metz from Nancy' }, teaser: { fr: 'À 45 km, la cathédrale aux verrières, le quartier impérial, le Centre Pompidou-Metz. Journée d’art entre les deux capitales lorraines.', en: '45 km away, the cathedral with its stained glass, the imperial quarter, the Centre Pompidou-Metz. A day of art between the two Lorraine capitals.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Vignoble et côtes de Toul', en: 'Toul vineyard' }, teaser: { fr: 'Les côtes de Toul et leur vin gris, la cathédrale de Toul, les villages vignerons. Journée œnologie et patrimoine à l’ouest de Nancy.', en: 'The Toul hillsides and their vin gris, Toul cathedral, the wine villages. A day of oenology and heritage west of Nancy.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Soirée place Stanislas', en: 'Place Stanislas evening' }, teaser: { fr: 'Dîner dans une brasserie Belle Époque, la place royale illuminée, un dernier verre sous les arcades. Véhicule à disposition toute la soirée.', en: 'Dinner in a Belle Époque brasserie, the illuminated royal square, a nightcap under the arcades. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport à Nancy ?', en: 'How long from the airport to Nancy?' }, a: { fr: 'Comptez 40 minutes depuis Metz-Nancy-Lorraine (ETZ). Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 40 minutes from Metz-Nancy-Lorraine (ETZ). The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on combiner Nancy et Metz dans la journée ?', en: 'Can Nancy and Metz be combined in one day?' }, a: { fr: 'Oui, les deux villes sont à 45 km. En mise à disposition à la journée, votre chauffeur enchaîne place Stanislas, musées et centre de Metz, avec un déjeuner lorrain.', en: 'Yes, the two cities are 45 km apart. With a full-day hire, your chauffeur links the Place Stanislas, museums and the centre of Metz, with a Lorraine lunch.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['metz', 'strasbourg'],
  },
  {
    slug: 'besancon',
    name: { fr: 'Besançon', en: 'Besançon' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'EuroAirport Bâle-Mulhouse (MLH)',
    airportTransfer: {
      fr: 'L’EuroAirport Bâle-Mulhouse (MLH) se trouve à 140 km à l’est de Besançon : comptez 1h30. Depuis l’aéroport de Dole-Jura (DLE), à 50 km, comptez 45 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'EuroAirport Basel-Mulhouse (MLH) lies 140 km east of Besançon: allow 1h30. From Dole-Jura Airport (DLE), 50 km away, allow 45 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de la Franche-Comté lovée dans une boucle du Doubs, Besançon veille depuis sa citadelle de Vauban classée UNESCO, patrie de Victor Hugo et de l’horlogerie française. Votre **chauffeur privé à Besançon** dessert le centre historique, la citadelle et les rendez-vous d’affaires : transferts depuis Dole ou Bâle, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Besançon est la porte du **Jura et des vignobles comtois**. Les reculées et cascades du Jura, Arbois et ses vins jaunes, les salines royales d’Arc-et-Senans classées UNESCO sont à portée. En mise à disposition à la journée, votre chauffeur relie citadelle, nature et domaines viticoles dans une région verte et authentique.',
      ],
      en: [
        'Capital of Franche-Comté nestled in a bend of the Doubs, Besançon watches from its UNESCO-listed Vauban citadel, home of Victor Hugo and of French watchmaking. Your **private chauffeur in Besançon** serves the historic centre, the citadel and business meetings: transfers from Dole or Basel, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Besançon is the gateway to the **Jura and the Comté vineyards**. The Jura gorges and waterfalls, Arbois and its yellow wines, the UNESCO-listed royal saltworks of Arc-et-Senans are within reach. With a full-day hire, your chauffeur links citadel, nature and wine estates in a green, authentic region.',
      ],
    },
    experiences: [
      { title: { fr: 'Citadelle de Vauban', en: 'Vauban citadel' }, teaser: { fr: 'La citadelle classée UNESCO dominant la boucle du Doubs, ses musées, son panorama. Dépose au sommet, promenade sur les remparts, montée évitée.', en: 'The UNESCO-listed citadel dominating the bend of the Doubs, its museums, its panorama. Drop-off at the top, a walk on the ramparts, the climb avoided.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Vignoble du Jura à Arbois', en: 'Jura vineyard at Arbois' }, teaser: { fr: 'Les domaines du vin jaune et du savagnin, dégustation en cave, la maison de Pasteur à Arbois. Journée œnologie dans un vignoble confidentiel.', en: 'The estates of yellow wine and savagnin, a cellar tasting, Pasteur’s house in Arbois. An oenology day in a little-known vineyard.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Reculées et cascades du Jura', en: 'Jura gorges and waterfalls' }, teaser: { fr: 'Les reculées de Baume-les-Messieurs, les cascades du Hérisson, les paysages verdoyants du Jura. Journée nature au rythme lent.', en: 'The gorges of Baume-les-Messieurs, the Hérisson waterfalls, the green Jura landscapes. A slow-paced nature day.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Salines royales d’Arc-et-Senans', en: 'Royal saltworks of Arc-et-Senans' }, teaser: { fr: 'La manufacture idéale de Claude-Nicolas Ledoux classée UNESCO, chef-d’œuvre de l’architecture des Lumières. Demi-journée patrimoine à 30 minutes.', en: 'The ideal factory of Claude-Nicolas Ledoux, UNESCO-listed, a masterpiece of Enlightenment architecture. A heritage half-day 30 minutes away.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '360' },
      { title: { fr: 'Soirée bisontine', en: 'Besançon evening' }, teaser: { fr: 'Dîner dans le centre historique, la citadelle illuminée dominant le Doubs, l’ambiance d’une ville étudiante et verte. Véhicule à disposition.', en: 'Dinner in the historic centre, the illuminated citadel dominating the Doubs, the atmosphere of a green student city. Vehicle on standby.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Depuis quel aéroport rejoint-on Besançon ?', en: 'From which airport do you reach Besançon?' }, a: { fr: 'Dole-Jura (DLE) est à 45 minutes, Bâle-Mulhouse (MLH) à 1h30, Lyon-Saint-Exupéry à 2h. Votre chauffeur vous accueille à l’aéroport de votre choix avec panneau nominatif, à prix fixe.', en: 'Dole-Jura (DLE) is 45 minutes away, Basel-Mulhouse (MLH) 1h30, Lyon-Saint-Exupéry 2h. Your chauffeur greets you at the airport of your choice with a name board, at a fixed price.' } },
      { q: { fr: 'Peut-on visiter le vignoble du Jura avec un chauffeur ?', en: 'Can you visit the Jura vineyard with a chauffeur?' }, a: { fr: 'Oui. Votre chauffeur organise et relie les domaines d’Arbois et les villages viticoles du Jura, vous permettant de déguster le vin jaune en toute sérénité, sur une journée à prix fixe.', en: 'Yes. Your chauffeur arranges and links the Arbois estates and the Jura wine villages, letting you taste the yellow wine with peace of mind, over a fixed-price day.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['beaune', 'dijon', 'geneva'],
  },
  {
    slug: 'beaune',
    name: { fr: 'Beaune', en: 'Beaune' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Lyon-Saint-Exupéry (LYS)',
    airportTransfer: {
      fr: 'L’aéroport de Lyon-Saint-Exupéry (LYS) se trouve à 150 km au sud de Beaune : comptez 1h30 par l’autoroute A6. Depuis Dijon, à 45 km au nord, comptez 40 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Lyon-Saint-Exupéry Airport (LYS) lies 150 km south of Beaune: allow 1h30 via the A6 motorway. From Dijon, 45 km north, allow 40 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale des vins de Bourgogne, Beaune enferme dans ses remparts les Hospices et leur toit de tuiles vernissées, au cœur des climats classés UNESCO. Votre **chauffeur privé à Beaune** dessert le centre historique, les domaines de la Côte d’Or et les hôtels de charme : transferts depuis Lyon ou Dijon, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Beaune est le cœur de la **Côte d’Or et de ses grands crus**. Les villages mythiques — Pommard, Meursault, Puligny-Montrachet, la Romanée-Conti — s’égrènent à quelques minutes le long de la route des grands crus. En mise à disposition à la journée, votre chauffeur relie domaines, caves et tables étoilées pendant que vous dégustez les plus grands vins du monde sans souci de conduite.',
      ],
      en: [
        'Capital of the Burgundy wines, Beaune encloses within its walls the Hospices and their glazed-tile roof, at the heart of the UNESCO-listed climats. Your **private chauffeur in Beaune** serves the historic centre, the Côte d’Or estates and the boutique hotels: transfers from Lyon or Dijon, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Beaune is the heart of the **Côte d’Or and its grands crus**. The legendary villages — Pommard, Meursault, Puligny-Montrachet, La Romanée-Conti — string along the grands crus route minutes away. With a full-day hire, your chauffeur links estates, cellars and starred tables while you taste the world’s greatest wines with no driving worry.',
      ],
    },
    experiences: [
      { title: { fr: 'Route des grands crus', en: 'Grands crus route' }, teaser: { fr: 'Pommard, Volnay, Meursault et Puligny-Montrachet, dégustations dans des domaines familiaux, déjeuner au cœur des vignes. Votre chauffeur conduit, vous dégustez.', en: 'Pommard, Volnay, Meursault and Puligny-Montrachet, tastings at family estates, lunch among the vines. Your chauffeur drives, you taste.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '690' },
      { title: { fr: 'Hospices et centre de Beaune', en: 'Hospices and centre of Beaune' }, teaser: { fr: 'L’Hôtel-Dieu et son toit de tuiles vernissées, le retable du Jugement dernier, le marché aux vins. Dépose au centre, promenade dans la cité vigneronne.', en: 'The Hôtel-Dieu and its glazed-tile roof, the Last Judgement altarpiece, the wine market. Drop-off in the centre, a stroll through the wine city.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Côte de Nuits et grands rouges', en: 'Côte de Nuits and great reds' }, teaser: { fr: 'Nuits-Saint-Georges, Vosne-Romanée, Gevrey-Chambertin et le clos de Vougeot, les plus grands pinots noirs. Journée dans le saint des saints du vin.', en: 'Nuits-Saint-Georges, Vosne-Romanée, Gevrey-Chambertin and the Clos de Vougeot, the greatest pinot noirs. A day in the holy of holies of wine.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '720' },
      { title: { fr: 'Dijon et la Bourgogne des ducs', en: 'Dijon and ducal Burgundy' }, teaser: { fr: 'À 45 km, le palais des ducs, la moutarde, les hôtels particuliers. Journée patrimoine dans la capitale bourguignonne.', en: '45 km away, the palace of the dukes, the mustard, the private mansions. A heritage day in the Burgundian capital.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Soirée gastronomique', en: 'Gastronomic evening' }, teaser: { fr: 'Dîner dans une table étoilée de la Côte, accord mets et grands crus, les remparts illuminés. Véhicule à disposition toute la soirée.', en: 'Dinner at a starred table on the Côte, food and grand cru pairings, the illuminated ramparts. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '420' },
    ],
    faq: [
      { q: { fr: 'Peut-on faire la route des grands crus avec un chauffeur ?', en: 'Can you do the grands crus route with a chauffeur?' }, a: { fr: 'Oui, c’est la raison d’être d’un chauffeur à Beaune : vous dégustez les plus grands vins du monde sans conduire. Votre chauffeur organise et relie les domaines sur une journée à prix fixe.', en: 'Yes, it is the very reason for a chauffeur in Beaune: you taste the world’s greatest wines without driving. Your chauffeur arranges and links the estates over a fixed-price day.' } },
      { q: { fr: 'Depuis quel aéroport rejoint-on Beaune ?', en: 'From which airport do you reach Beaune?' }, a: { fr: 'Lyon-Saint-Exupéry (LYS) est à 1h30, Dijon à 40 minutes, Genève à 2h. Votre chauffeur vous accueille à l’aéroport de votre choix avec panneau nominatif, à prix fixe.', en: 'Lyon-Saint-Exupéry (LYS) is 1h30 away, Dijon 40 minutes, Geneva 2h. Your chauffeur greets you at the airport of your choice with a name board, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs à Beaune parlent-ils anglais ?', en: 'Do your chauffeurs in Beaune speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['dijon', 'besancon'],
  },
  {
    slug: 'epernay',
    name: { fr: 'Épernay', en: 'Épernay' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Paris-Charles de Gaulle (CDG)',
    airportTransfer: {
      fr: 'L’aéroport de Paris-Charles de Gaulle (CDG) se trouve à 120 km à l’ouest d’Épernay : comptez 1h15 par l’autoroute A4. Depuis Reims, à 28 km au nord, comptez 30 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Paris-Charles de Gaulle Airport (CDG) lies 120 km west of Épernay: allow 1h15 via the A4 motorway. From Reims, 28 km north, allow 30 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale du champagne, Épernay aligne sur son avenue de Champagne les maisons les plus prestigieuses — Moët & Chandon, Perrier-Jouët — au-dessus de 110 kilomètres de caves. Votre **chauffeur privé à Épernay** dessert les grandes maisons, les vignerons des coteaux classés UNESCO et les hôtels : transferts depuis Paris ou Reims, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Épernay est le cœur du **vignoble de Champagne**. Les coteaux d’Aÿ et de Hautvillers, où Dom Pérignon élabora sa méthode, la Côte des Blancs et ses chardonnays sont à quelques minutes. En mise à disposition à la journée, votre chauffeur relie grandes maisons, vignerons indépendants et tables gastronomiques pendant que vous dégustez les plus grandes bulles du monde.',
      ],
      en: [
        'Capital of champagne, Épernay lines its Avenue de Champagne with the most prestigious houses — Moët & Chandon, Perrier-Jouët — above 110 kilometres of cellars. Your **private chauffeur in Épernay** serves the great houses, the growers of the UNESCO-listed slopes and the hotels: transfers from Paris or Reims, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Épernay is the heart of the **Champagne vineyard**. The slopes of Aÿ and Hautvillers, where Dom Pérignon developed his method, the Côte des Blancs and its chardonnays are minutes away. With a full-day hire, your chauffeur links great houses, independent growers and gourmet tables while you taste the world’s greatest bubbles.',
      ],
    },
    experiences: [
      { title: { fr: 'Grandes maisons de Champagne', en: 'Great Champagne houses' }, teaser: { fr: 'L’avenue de Champagne, une visite de cave chez Moët & Chandon ou Perrier-Jouët, dégustation. Votre chauffeur vous conduit d’une maison à l’autre.', en: 'The Avenue de Champagne, a cellar visit at Moët & Chandon or Perrier-Jouët, a tasting. Your chauffeur drives you from one house to the next.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '390' },
      { title: { fr: 'Vignerons et Côte des Blancs', en: 'Growers and Côte des Blancs' }, teaser: { fr: 'Hautvillers et l’abbaye de Dom Pérignon, les vignerons indépendants de la Côte des Blancs, dégustations plus intimes. Journée champagne authentique.', en: 'Hautvillers and Dom Pérignon’s abbey, the independent growers of the Côte des Blancs, more intimate tastings. An authentic champagne day.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '640' },
      { title: { fr: 'Reims et sa cathédrale', en: 'Reims and its cathedral' }, teaser: { fr: 'À 30 minutes, la cathédrale du sacre des rois, les caves Pommery ou Veuve Clicquot. Journée patrimoine et champagne dans la cité des rois.', en: '30 minutes away, the coronation cathedral, the Pommery or Veuve Clicquot cellars. A day of heritage and champagne in the city of kings.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Champagne depuis Paris', en: 'Champagne from Paris' }, teaser: { fr: 'Une escapade à la journée depuis la capitale : maisons de champagne, dégustation et déjeuner, retour le soir. Alternative privée aux excursions en groupe.', en: 'A day trip from the capital: champagne houses, a tasting and lunch, return in the evening. A private alternative to group excursions.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '890' },
      { title: { fr: 'Soirée sur l’avenue de Champagne', en: 'Evening on the Avenue de Champagne' }, teaser: { fr: 'Dîner gastronomique accordé aux cuvées, l’avenue et ses hôtels particuliers illuminés, une flûte de prestige. Véhicule à disposition toute la soirée.', en: 'A gourmet dinner paired with the cuvées, the avenue and its illuminated mansions, a prestige flute. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '420' },
    ],
    faq: [
      { q: { fr: 'Peut-on visiter les maisons de champagne avec un chauffeur ?', en: 'Can you visit the champagne houses with a chauffeur?' }, a: { fr: 'Oui, c’est l’essence même du service à Épernay : vous dégustez sans conduire. Votre chauffeur organise et relie grandes maisons et vignerons sur une journée à prix fixe.', en: 'Yes, it is the essence of the service in Épernay: you taste without driving. Your chauffeur arranges and links great houses and growers over a fixed-price day.' } },
      { q: { fr: 'Peut-on faire la Champagne à la journée depuis Paris ?', en: 'Can you do Champagne as a day trip from Paris?' }, a: { fr: 'Oui, Épernay est à 1h15 de Paris. En mise à disposition à la journée, votre chauffeur vous conduit dans le vignoble, organise visites et déjeuner, et vous ramène le soir, à prix fixe.', en: 'Yes, Épernay is 1h15 from Paris. With a full-day hire, your chauffeur drives you into the vineyard, arranges visits and lunch, and brings you back in the evening, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['reims', 'troyes'],
  },
  {
    slug: 'troyes',
    name: { fr: 'Troyes', en: 'Troyes' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Paris-Charles de Gaulle (CDG)',
    airportTransfer: {
      fr: 'L’aéroport de Paris-Charles de Gaulle (CDG) se trouve à 170 km au nord-ouest de Troyes : comptez 1h45. Depuis Paris-Orly, à 160 km, comptez 1h45 également. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Paris-Charles de Gaulle Airport (CDG) lies 170 km north-west of Troyes: allow 1h45. From Paris-Orly, 160 km away, also allow 1h45. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ancienne capitale de la Champagne médiévale, Troyes déploie le plus vaste centre à pans de bois de France, dessiné en forme de bouchon de champagne, et une constellation d’églises gothiques aux vitraux exceptionnels. Votre **chauffeur privé à Troyes** dessert le centre historique, les magasins d’usine et les rendez-vous d’affaires : transferts depuis Paris, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Troyes est aussi la **capitale du shopping d’usine**. Les plus grandes marques y bradent leurs collections dans d’immenses centres de marques ; le vignoble de la Côte des Bar et les lacs de la forêt d’Orient sont tout proches. En mise à disposition à la journée, votre chauffeur relie centre médiéval, magasins d’usine et vignobles pendant que vous profitez sans souci de logistique.',
      ],
      en: [
        'A former capital of medieval Champagne, Troyes displays France’s largest half-timbered centre, laid out in the shape of a champagne cork, and a constellation of Gothic churches with exceptional stained glass. Your **private chauffeur in Troyes** serves the historic centre, the factory outlets and business meetings: transfers from Paris, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Troyes is also the **factory-outlet capital**. The biggest brands discount their collections in huge outlet centres; the Côte des Bar vineyard and the lakes of the Orient forest are nearby. With a full-day hire, your chauffeur links medieval centre, outlets and vineyards while you enjoy the trip with no logistics worry.',
      ],
    },
    experiences: [
      { title: { fr: 'Troyes médiéval', en: 'Medieval Troyes' }, teaser: { fr: 'Les ruelles à pans de bois, la ruelle des Chats, les églises gothiques et leurs vitraux, la cité du vitrail. Dépose au centre, promenade dans le bouchon de champagne.', en: 'The half-timbered lanes, the Ruelle des Chats, the Gothic churches and their stained glass, the stained-glass centre. Drop-off in the centre, a stroll through the champagne cork.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Magasins d’usine', en: 'Factory outlets' }, teaser: { fr: 'Les grands centres de marques de McArthurGlen et Marques Avenue, les plus grandes maisons à prix d’usine. Votre chauffeur transporte vos achats entre les enseignes.', en: 'The McArthurGlen and Marques Avenue outlet centres, the biggest brands at factory prices. Your chauffeur carries your purchases between the stores.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Côte des Bar et champagne', en: 'Côte des Bar and champagne' }, teaser: { fr: 'Le vignoble méridional de la Champagne, les vignerons de la Côte des Bar, dégustation et déjeuner du terroir. Journée bulles hors des sentiers battus.', en: 'The southern Champagne vineyard, the growers of the Côte des Bar, a tasting and a regional lunch. A bubbles day off the beaten track.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Lacs de la forêt d’Orient', en: 'Lakes of the Orient forest' }, teaser: { fr: 'Le parc naturel régional, ses grands lacs, ses villages et sa réserve d’oiseaux. Journée nature à trente minutes de Troyes.', en: 'The regional nature park, its great lakes, its villages and its bird reserve. A nature day thirty minutes from Troyes.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Soirée à Troyes', en: 'Evening in Troyes' }, teaser: { fr: 'Dîner dans une maison à pans de bois, les ruelles médiévales illuminées, un verre de rosé des Riceys. Véhicule à disposition toute la soirée.', en: 'Dinner in a half-timbered house, the illuminated medieval lanes, a glass of Riceys rosé. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de Paris à Troyes ?', en: 'How long from Paris to Troyes?' }, a: { fr: 'Comptez environ 1h45. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow about 1h45. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Proposez-vous une journée shopping dans les magasins d’usine ?', en: 'Do you offer a shopping day at the factory outlets?' }, a: { fr: 'Oui, c’est une demande fréquente. Votre chauffeur vous conduit entre les centres de marques, transporte vos achats et combine éventuellement avec le centre médiéval, sur une journée à prix fixe.', en: 'Yes, a frequent request. Your chauffeur drives you between the outlet centres, carries your purchases and optionally combines with the medieval centre, over a fixed-price day.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['epernay', 'reims'],
  },
  {
    slug: 'grenoble',
    name: { fr: 'Grenoble', en: 'Grenoble' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Lyon-Saint-Exupéry (LYS)',
    airportTransfer: {
      fr: 'L’aéroport de Lyon-Saint-Exupéry (LYS) se trouve à 100 km au nord-ouest de Grenoble : comptez 1h par l’autoroute. L’aéroport de Grenoble-Alpes-Isère (GNB) est à 40 km. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Lyon-Saint-Exupéry Airport (LYS) lies 100 km north-west of Grenoble: allow 1h by motorway. Grenoble-Alpes-Isère Airport (GNB) is 40 km away. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale des Alpes cernée de trois massifs, Grenoble marie patrimoine dauphinois, pôle scientifique de rang mondial et téléphérique vers la Bastille. Votre **chauffeur privé à Grenoble** dessert le centre, les campus technologiques et les rendez-vous d’affaires, ainsi que les stations de ski des environs : transferts depuis Lyon ou Grenoble, mise à disposition à la journée, prix fixes. Berlines et 4x4 selon la saison, chauffeurs anglophones sur demande.',
        'Grenoble est la **porte des Alpes du Sud**. Les massifs de la Chartreuse, du Vercors et de Belledonne l’entourent, les stations des Deux Alpes et de l’Alpe d’Huez sont à une heure, la Provence commence au sud. En mise à disposition à la journée, votre chauffeur relie campus, sommets et villages de montagne dans le confort d’une berline privée.',
      ],
      en: [
        'Capital of the Alps ringed by three ranges, Grenoble marries Dauphiné heritage, a world-class science hub and a cable car to the Bastille. Your **private chauffeur in Grenoble** serves the centre, the technology campuses and business meetings, as well as the surrounding ski resorts: transfers from Lyon or Grenoble, full-day hire, fixed prices. Sedans and 4x4s depending on the season, English-speaking chauffeurs on request.',
        'Grenoble is the **gateway to the southern Alps**. The Chartreuse, Vercors and Belledonne ranges surround it, the Deux Alpes and Alpe d’Huez resorts are an hour away, Provence begins to the south. With a full-day hire, your chauffeur links campuses, peaks and mountain villages in the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Massif de la Chartreuse', en: 'Chartreuse range' }, teaser: { fr: 'Le monastère de la Grande Chartreuse et son musée, les gorges et villages du parc naturel, la liqueur des moines. Journée nature et spiritualité.', en: 'The Grande Chartreuse monastery and its museum, the gorges and villages of the nature park, the monks’ liqueur. A day of nature and spirituality.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Grenoble et la Bastille', en: 'Grenoble and the Bastille' }, teaser: { fr: 'Le téléphérique et le fort de la Bastille, le musée de Grenoble, le centre dauphinois. Dépose au centre, panorama sur les trois massifs.', en: 'The cable car and the Bastille fort, the Grenoble museum, the Dauphiné centre. Drop-off in the centre, a panorama over the three ranges.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Vercors et ses paysages', en: 'Vercors and its landscapes' }, teaser: { fr: 'Les gorges de la Bourne, les grottes de Choranche, les hauts plateaux du Vercors, un déjeuner de montagne. Journée nature dans un massif sauvage.', en: 'The Bourne gorges, the Choranche caves, the Vercors highlands, a mountain lunch. A nature day in a wild range.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Transferts stations de ski', en: 'Ski resort transfers' }, teaser: { fr: 'Liaison vers l’Alpe d’Huez, les Deux Alpes ou Chamrousse, gestion des skis, reprise à l’heure convenue. La montagne sans conduite en lacets.', en: 'Link to Alpe d’Huez, Les Deux Alpes or Chamrousse, ski handling, pick-up at the agreed time. The mountain without hairpin driving.' }, duration: { fr: 'Transfert', en: 'Transfer' }, price: '360' },
      { title: { fr: 'Soirée grenobloise', en: 'Grenoble evening' }, teaser: { fr: 'Dîner dans le centre, la Bastille illuminée dominant la ville, l’ambiance d’une cité alpine et étudiante. Véhicule à disposition toute la soirée.', en: 'Dinner in the centre, the illuminated Bastille dominating the city, the atmosphere of an Alpine student city. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de Lyon à Grenoble ?', en: 'How long from Lyon to Grenoble?' }, a: { fr: 'Comptez 1 heure depuis Lyon-Saint-Exupéry. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 1 hour from Lyon-Saint-Exupéry. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Assurez-vous les transferts vers les stations de ski ?', en: 'Do you handle transfers to the ski resorts?' }, a: { fr: 'Oui. Alpe d’Huez, Les Deux Alpes, Chamrousse et les stations de l’Oisans sont à portée. Nous adaptons le véhicule à la saison et gérons skis et bagages, à prix fixe.', en: 'Yes. Alpe d’Huez, Les Deux Alpes, Chamrousse and the Oisans resorts are within reach. We adapt the vehicle to the season and handle skis and luggage, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['valence', 'geneva'],
  },
  {
    slug: 'valence',
    name: { fr: 'Valence', en: 'Valence' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Lyon-Saint-Exupéry (LYS)',
    airportTransfer: {
      fr: 'L’aéroport de Lyon-Saint-Exupéry (LYS) se trouve à 100 km au nord de Valence : comptez 1h par l’autoroute A7. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Lyon-Saint-Exupéry Airport (LYS) lies 100 km north of Valence: allow 1h via the A7 motorway. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Porte du Midi sur les rives du Rhône, Valence marie douceur méridionale, kiosque Peynet et haute gastronomie — la maison Pic y règne depuis un siècle. Votre **chauffeur privé à Valence** dessert le centre, la gare TGV et les rendez-vous d’affaires de la vallée du Rhône : transferts depuis Lyon, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Valence est le carrefour du **Rhône méridional**. Les vignobles des côtes du Rhône — Hermitage, Crozes, Saint-Péray — sont tout proches, l’Ardèche et ses gorges à l’ouest, la Provence commence au sud. En mise à disposition à la journée, votre chauffeur relie domaines viticoles, villages perchés et tables étoilées à la frontière du Nord et du Midi.',
      ],
      en: [
        'Gateway to the Midi on the banks of the Rhône, Valence marries southern gentleness, the Peynet bandstand and haute cuisine — the Maison Pic has reigned here for a century. Your **private chauffeur in Valence** serves the centre, the high-speed rail station and the business meetings of the Rhône valley: transfers from Lyon, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Valence is the crossroads of the **southern Rhône**. The Côtes du Rhône vineyards — Hermitage, Crozes, Saint-Péray — are nearby, the Ardèche and its gorges to the west, Provence begins to the south. With a full-day hire, your chauffeur links wine estates, perched villages and starred tables on the border of the North and the Midi.',
      ],
    },
    experiences: [
      { title: { fr: 'Vignobles des côtes du Rhône', en: 'Côtes du Rhône vineyards' }, teaser: { fr: 'Les coteaux de l’Hermitage et de Crozes-Hermitage, les syrahs et les blancs de Saint-Péray, dégustations en domaine. Journée œnologie sur le Rhône.', en: 'The slopes of Hermitage and Crozes-Hermitage, the syrahs and whites of Saint-Péray, estate tastings. An oenology day on the Rhône.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Gorges de l’Ardèche', en: 'Ardèche gorges' }, teaser: { fr: 'Le pont d’Arc, les belvédères sur les gorges, la grotte Chauvet 2 et ses fresques préhistoriques. Journée nature et préhistoire à l’ouest.', en: 'The Pont d’Arc, the gorge viewpoints, the Chauvet 2 cave and its prehistoric frescoes. A day of nature and prehistory to the west.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Villages perchés de la Drôme', en: 'Perched villages of the Drôme' }, teaser: { fr: 'Le village de Mirmande, la Drôme provençale, les champs de lavande en été, un déjeuner du terroir. Journée dans la Provence naissante.', en: 'The village of Mirmande, the Drôme Provençale, the lavender fields in summer, a regional lunch. A day in emerging Provence.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Étape gastronomique', en: 'Gastronomic stop' }, teaser: { fr: 'Déjeuner ou dîner à la maison Pic, triplement étoilée, ou dans une table de la vallée du Rhône, accord avec les grands crus locaux. Souplesse totale.', en: 'Lunch or dinner at the triple-starred Maison Pic, or at a Rhône valley table, paired with the great local wines. Total flexibility.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '420' },
      { title: { fr: 'Valence et le Rhône', en: 'Valence and the Rhône' }, teaser: { fr: 'Le vieux Valence, le kiosque Peynet, les bords du Rhône et le parc Jouvet. Dépose au centre, promenade dans la porte du Midi.', en: 'Old Valence, the Peynet bandstand, the banks of the Rhône and the Jouvet park. Drop-off in the centre, a stroll through the gateway to the Midi.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de Lyon à Valence ?', en: 'How long from Lyon to Valence?' }, a: { fr: 'Comptez 1 heure par l’A7. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 1 hour via the A7. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on visiter les vignobles du Rhône depuis Valence ?', en: 'Can you visit the Rhône vineyards from Valence?' }, a: { fr: 'Oui, Hermitage et Crozes sont tout proches. En mise à disposition à la journée, votre chauffeur organise les dégustations et vous conduit d’un domaine à l’autre, à prix fixe.', en: 'Yes, Hermitage and Crozes are nearby. With a full-day hire, your chauffeur arranges the tastings and drives you from one estate to the next, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['grenoble', 'avignon'],
  },
  {
    slug: 'clermont-ferrand',
    name: { fr: 'Clermont-Ferrand', en: 'Clermont-Ferrand' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Clermont-Ferrand-Auvergne (CFE)',
    airportTransfer: {
      fr: 'L’aéroport de Clermont-Ferrand-Auvergne (CFE) se trouve à 7 km à l’est du centre : comptez 15 minutes. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Clermont-Ferrand-Auvergne Airport (CFE) lies 7 km east of the centre: allow 15 minutes. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de l’Auvergne au pied de la chaîne des Puys, Clermont-Ferrand marie une cathédrale de pierre volcanique noire, le siège mondial de Michelin et les volcans classés UNESCO. Votre **chauffeur privé à Clermont-Ferrand** dessert le centre, les sites industriels et les rendez-vous d’affaires : transferts depuis l’aéroport, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Clermont-Ferrand est la porte des **volcans d’Auvergne**. Le puy de Dôme et son panorama, le parc des volcans, les stations thermales de La Bourboule et du Mont-Dore sont à portée. En mise à disposition à la journée, votre chauffeur relie sommets volcaniques, villages romans et thermes dans le poumon vert du centre de la France.',
      ],
      en: [
        'Capital of the Auvergne at the foot of the Chaîne des Puys, Clermont-Ferrand marries a cathedral of black volcanic stone, the world headquarters of Michelin and the UNESCO-listed volcanoes. Your **private chauffeur in Clermont-Ferrand** serves the centre, the industrial sites and business meetings: transfers from the airport, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Clermont-Ferrand is the gateway to the **Auvergne volcanoes**. The Puy de Dôme and its panorama, the volcanoes park, the thermal resorts of La Bourboule and Le Mont-Dore are within reach. With a full-day hire, your chauffeur links volcanic peaks, Romanesque villages and spas in the green lung of central France.',
      ],
    },
    experiences: [
      { title: { fr: 'Puy de Dôme et chaîne des Puys', en: 'Puy de Dôme and the Chaîne des Puys' }, teaser: { fr: 'Le plus célèbre volcan d’Auvergne classé UNESCO, le train à crémaillère, le panorama sur 80 volcans. Journée nature au sommet du Massif central.', en: 'The most famous Auvergne volcano, UNESCO-listed, the rack railway, the panorama over 80 volcanoes. A nature day at the top of the Massif Central.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Clermont et la cathédrale noire', en: 'Clermont and the black cathedral' }, teaser: { fr: 'La cathédrale de pierre de Volvic, la basilique romane Notre-Dame-du-Port, le vieux Montferrand. Dépose au centre, promenade dans la cité volcanique.', en: 'The Volvic-stone cathedral, the Romanesque basilica of Notre-Dame-du-Port, old Montferrand. Drop-off in the centre, a stroll through the volcanic city.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Villages et thermes du Sancy', en: 'Sancy villages and spas' }, teaser: { fr: 'Le massif du Sancy, les stations thermales du Mont-Dore et de La Bourboule, les villages de pierre. Journée nature et bien-être en montagne.', en: 'The Sancy massif, the thermal resorts of Le Mont-Dore and La Bourboule, the stone villages. A day of nature and wellness in the mountains.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Vichy Belle Époque', en: 'Belle Époque Vichy' }, teaser: { fr: 'À une heure, la reine des villes d’eaux, ses sources, son opéra et ses villas thermales. Journée patrimoine et thermalisme au bord de l’Allier.', en: 'An hour away, the queen of spa towns, its springs, its opera house and its thermal villas. A day of heritage and thermalism on the Allier.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Soirée clermontoise', en: 'Clermont evening' }, teaser: { fr: 'Dîner dans le centre, la cathédrale noire illuminée, un verre de saint-pourçain. Véhicule à disposition toute la soirée.', en: 'Dinner in the centre, the illuminated black cathedral, a glass of saint-pourçain. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Clermont au centre ?', en: 'How long from Clermont Airport to the centre?' }, a: { fr: 'Comptez 15 minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 15 minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on visiter les volcans d’Auvergne avec un chauffeur ?', en: 'Can you visit the Auvergne volcanoes with a chauffeur?' }, a: { fr: 'Oui. Le puy de Dôme et le parc des volcans sont à portée. Votre chauffeur vous conduit aux départs, organise le train à crémaillère et combine avec villages et thermes, à prix fixe.', en: 'Yes. The Puy de Dôme and the volcanoes park are within reach. Your chauffeur drives you to the departure points, arranges the rack railway and combines with villages and spas, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['vichy', 'lyon'],
  },
  {
    slug: 'vichy',
    name: { fr: 'Vichy', en: 'Vichy' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Clermont-Ferrand-Auvergne (CFE)',
    airportTransfer: {
      fr: 'L’aéroport de Clermont-Ferrand-Auvergne (CFE) se trouve à 60 km au sud de Vichy : comptez 45 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Clermont-Ferrand-Auvergne Airport (CFE) lies 60 km south of Vichy: allow 45 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Reine des villes d’eaux, Vichy déroule au bord de l’Allier ses sources thermales, son opéra Art nouveau et ses villas Belle Époque, aujourd’hui inscrite au patrimoine mondial. Votre **chauffeur privé à Vichy** dessert les thermes, le centre patrimonial et les rendez-vous de cure ou d’affaires : transferts depuis Clermont, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Vichy est au cœur du **Bourbonnais et de l’Auvergne**. Les volcans et le puy de Dôme sont à une heure, les châteaux du Bourbonnais tout proches, les vignobles du Saint-Pourçain à quelques minutes. En mise à disposition à la journée, votre chauffeur relie thermes, patrimoine et nature volcanique dans le confort d’une berline privée.',
      ],
      en: [
        'Queen of spa towns, Vichy unrolls along the Allier its thermal springs, its Art Nouveau opera house and its Belle Époque villas, now inscribed as World Heritage. Your **private chauffeur in Vichy** serves the baths, the heritage centre and cure or business meetings: transfers from Clermont, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Vichy lies at the heart of the **Bourbonnais and the Auvergne**. The volcanoes and the Puy de Dôme are an hour away, the Bourbonnais castles nearby, the Saint-Pourçain vineyards minutes away. With a full-day hire, your chauffeur links spas, heritage and volcanic nature in the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Vichy thermale et Belle Époque', en: 'Thermal and Belle Époque Vichy' }, teaser: { fr: 'Les sources et le hall des sources, l’opéra Art nouveau, le parc des Sources et les villas. Dépose au centre, promenade dans la reine des villes d’eaux.', en: 'The springs and the Hall des Sources, the Art Nouveau opera house, the Parc des Sources and the villas. Drop-off in the centre, a stroll through the queen of spa towns.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Volcans d’Auvergne', en: 'Auvergne volcanoes' }, teaser: { fr: 'À une heure, le puy de Dôme et la chaîne des Puys classés UNESCO, le panorama sur 80 volcans. Journée nature au sommet du Massif central.', en: 'An hour away, the Puy de Dôme and the UNESCO-listed Chaîne des Puys, the panorama over 80 volcanoes. A nature day at the top of the Massif Central.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Châteaux du Bourbonnais', en: 'Bourbonnais castles' }, teaser: { fr: 'Les forteresses des ducs de Bourbon, le château de Lapalisse, les villages du bocage. Journée patrimoine médiéval au cœur de la France.', en: 'The fortresses of the Dukes of Bourbon, the château of Lapalisse, the bocage villages. A day of medieval heritage in the heart of France.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Vignoble de Saint-Pourçain', en: 'Saint-Pourçain vineyard' }, teaser: { fr: 'L’un des plus anciens vignobles de France, dégustations chez les vignerons, déjeuner du terroir bourbonnais. Journée œnologie confidentielle.', en: 'One of France’s oldest vineyards, tastings at the growers, a Bourbonnais lunch. A day of little-known oenology.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Soirée à Vichy', en: 'Evening in Vichy' }, teaser: { fr: 'Dîner dans une brasserie Belle Époque, l’opéra et le parc illuminés, les bords de l’Allier. Véhicule à disposition toute la soirée.', en: 'Dinner in a Belle Époque brasserie, the illuminated opera house and park, the banks of the Allier. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Clermont à Vichy ?', en: 'How long from Clermont Airport to Vichy?' }, a: { fr: 'Comptez 45 minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 45 minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on combiner Vichy et les volcans d’Auvergne ?', en: 'Can Vichy and the Auvergne volcanoes be combined?' }, a: { fr: 'Oui, le puy de Dôme est à une heure. En mise à disposition à la journée, votre chauffeur combine patrimoine thermal de Vichy et nature volcanique, à prix fixe.', en: 'Yes, the Puy de Dôme is an hour away. With a full-day hire, your chauffeur combines Vichy’s thermal heritage and volcanic nature, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['clermont-ferrand'],
  },
  {
    slug: 'caen',
    name: { fr: 'Caen', en: 'Caen' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Caen-Carpiquet (CFR)',
    airportTransfer: {
      fr: 'L’aéroport de Caen-Carpiquet (CFR) se trouve à 8 km à l’ouest du centre : comptez 15 minutes. Depuis Paris-Charles de Gaulle (CDG), à 230 km, comptez 2h30. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Caen-Carpiquet Airport (CFR) lies 8 km west of the centre: allow 15 minutes. From Paris-Charles de Gaulle (CDG), 230 km away, allow 2h30. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Cité de Guillaume le Conquérant, Caen conserve deux abbayes romanes, un château ducal et le Mémorial dédié à la paix, capitale de la Basse-Normandie reconstruite après 1944. Votre **chauffeur privé à Caen** dessert le centre, le port de Ouistreham et les rendez-vous d’affaires : transferts depuis l’aéroport ou le ferry, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Caen est la porte des **plages du Débarquement**. Les plages du 6 juin — Sword, Juno, Gold, Omaha — le cimetière américain de Colleville et les batteries s’égrènent sur la côte à une demi-heure. En mise à disposition à la journée, votre chauffeur relie sites de mémoire, abbayes et campagne normande dans le recueillement et le confort d’une berline privée.',
      ],
      en: [
        'City of William the Conqueror, Caen preserves two Romanesque abbeys, a ducal castle and the Memorial dedicated to peace, capital of Lower Normandy rebuilt after 1944. Your **private chauffeur in Caen** serves the centre, the port of Ouistreham and business meetings: transfers from the airport or the ferry, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Caen is the gateway to the **D-Day beaches**. The 6 June beaches — Sword, Juno, Gold, Omaha — the Colleville American cemetery and the batteries string along the coast half an hour away. With a full-day hire, your chauffeur links memorial sites, abbeys and Norman countryside in reflection and the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Plages du Débarquement', en: 'D-Day beaches' }, teaser: { fr: 'Omaha Beach et le cimetière américain, la pointe du Hoc, Arromanches et son port artificiel. Journée de mémoire sur les lieux du 6 juin 1944.', en: 'Omaha Beach and the American cemetery, the Pointe du Hoc, Arromanches and its artificial harbour. A day of remembrance on the sites of 6 June 1944.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Caen de Guillaume', en: 'William’s Caen' }, teaser: { fr: 'Le château ducal, l’Abbaye aux Hommes et l’Abbaye aux Dames, le Mémorial pour la Paix. Dépose au centre, promenade dans la cité normande.', en: 'The ducal castle, the Abbaye aux Hommes and the Abbaye aux Dames, the Memorial for Peace. Drop-off in the centre, a stroll through the Norman city.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Bayeux et sa tapisserie', en: 'Bayeux and its tapestry' }, teaser: { fr: 'À 30 km, la célèbre tapisserie de la conquête de l’Angleterre, la cathédrale et la première ville libérée. Journée patrimoine médiéval.', en: '30 km away, the famous tapestry of the conquest of England, the cathedral and the first liberated town. A day of medieval heritage.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Côte de Nacre et Honfleur', en: 'Côte de Nacre and Honfleur' }, teaser: { fr: 'Les stations de la côte, Cabourg et Deauville, le vieux bassin de Honfleur cher aux peintres. Journée bord de mer et villégiature normande.', en: 'The coastal resorts, Cabourg and Deauville, the old dock of Honfleur dear to painters. A day of seaside and Norman resorts.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Soirée caennaise', en: 'Caen evening' }, teaser: { fr: 'Dîner dans le quartier du Vaugueux, le château illuminé, une spécialité de tripes à la mode de Caen. Véhicule à disposition toute la soirée.', en: 'Dinner in the Vaugueux quarter, the illuminated castle, a speciality of tripes à la mode de Caen. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Peut-on visiter les plages du Débarquement avec un chauffeur ?', en: 'Can you visit the D-Day beaches with a chauffeur?' }, a: { fr: 'Oui, c’est la formule la plus demandée à Caen. Votre chauffeur vous conduit d’Omaha à la pointe du Hoc et Arromanches, à votre rythme, sur une journée à prix fixe.', en: 'Yes, it is the most requested option in Caen. Your chauffeur drives you from Omaha to the Pointe du Hoc and Arromanches, at your pace, over a fixed-price day.' } },
      { q: { fr: 'Combien de temps de l’aéroport de Caen au centre ?', en: 'How long from Caen Airport to the centre?' }, a: { fr: 'Comptez 15 minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 15 minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['bayeux', 'honfleur', 'rouen'],
  },
  {
    slug: 'rouen',
    name: { fr: 'Rouen', en: 'Rouen' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Paris-Charles de Gaulle (CDG)',
    airportTransfer: {
      fr: 'L’aéroport de Paris-Charles de Gaulle (CDG) se trouve à 130 km à l’est de Rouen : comptez 1h30 par l’autoroute A13. Depuis Paris-Beauvais, à 90 km, comptez 1h15. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Paris-Charles de Gaulle Airport (CDG) lies 130 km east of Rouen: allow 1h30 via the A13 motorway. From Paris-Beauvais, 90 km away, allow 1h15. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale historique de la Normandie, Rouen déploie une forêt de flèches gothiques, la cathédrale peinte par Monet, le Gros-Horloge et la place où périt Jeanne d’Arc. Votre **chauffeur privé à Rouen** dessert le centre médiéval piéton, le port sur la Seine et les rendez-vous d’affaires : transferts depuis Paris, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Rouen commande la **vallée de la Seine impressionniste**. Les boucles du fleuve, l’abbaye de Jumièges, Giverny et le jardin de Monet, la côte d’Albâtre sont à portée. En mise à disposition à la journée, votre chauffeur relie abbayes, jardins de peintres et falaises pendant que vous suivez les pas des impressionnistes sans souci de conduite.',
      ],
      en: [
        'Historic capital of Normandy, Rouen unfolds a forest of Gothic spires, the cathedral painted by Monet, the Gros-Horloge and the square where Joan of Arc perished. Your **private chauffeur in Rouen** serves the pedestrian medieval centre, the port on the Seine and business meetings: transfers from Paris, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Rouen commands the **Impressionist Seine valley**. The river’s bends, the Jumièges abbey, Giverny and Monet’s garden, the Alabaster Coast are within reach. With a full-day hire, your chauffeur links abbeys, painters’ gardens and cliffs while you follow in the Impressionists’ footsteps with no driving worry.',
      ],
    },
    experiences: [
      { title: { fr: 'Rouen médiéval', en: 'Medieval Rouen' }, teaser: { fr: 'La cathédrale et ses façades peintes par Monet, le Gros-Horloge, l’aître Saint-Maclou, la place du Vieux-Marché. Dépose au centre, promenade dans la ville aux cent clochers.', en: 'The cathedral and its façades painted by Monet, the Gros-Horloge, the Aître Saint-Maclou, the Place du Vieux-Marché. Drop-off in the centre, a stroll through the city of a hundred spires.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Giverny et Monet', en: 'Giverny and Monet' }, teaser: { fr: 'La maison et les jardins de Claude Monet, le bassin aux nymphéas, le pont japonais. Journée impressionniste à une heure de Rouen.', en: 'Claude Monet’s house and gardens, the water-lily pond, the Japanese bridge. An Impressionist day an hour from Rouen.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Abbayes de la Seine', en: 'Seine abbeys' }, teaser: { fr: 'La route des abbayes le long des boucles de la Seine, Jumièges et Saint-Wandrille, les villages du parc régional. Journée patrimoine et nature.', en: 'The abbey route along the Seine’s bends, Jumièges and Saint-Wandrille, the villages of the regional park. A day of heritage and nature.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Étretat et la côte d’Albâtre', en: 'Étretat and the Alabaster Coast' }, teaser: { fr: 'Les falaises et l’aiguille d’Étretat, les arches immortalisées par les peintres, la côte crayeuse. Journée nature et paysages spectaculaires.', en: 'The cliffs and the needle of Étretat, the arches immortalised by painters, the chalk coast. A day of nature and spectacular landscapes.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Soirée rouennaise', en: 'Rouen evening' }, teaser: { fr: 'Dîner dans une maison à pans de bois, la cathédrale illuminée, un verre de cidre ou de calvados. Véhicule à disposition toute la soirée.', en: 'Dinner in a half-timbered house, the illuminated cathedral, a glass of cider or calvados. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de Paris à Rouen ?', en: 'How long from Paris to Rouen?' }, a: { fr: 'Comptez 1h30 par l’A13. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 1h30 via the A13. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on visiter Giverny depuis Rouen ?', en: 'Can you visit Giverny from Rouen?' }, a: { fr: 'Oui, Giverny est à une heure. En mise à disposition à la journée, votre chauffeur vous conduit aux jardins de Monet et combine avec les abbayes de la Seine, à prix fixe.', en: 'Yes, Giverny is an hour away. With a full-day hire, your chauffeur drives you to Monet’s gardens and combines with the Seine abbeys, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['le-havre', 'etretat', 'honfleur'],
  },
  {
    slug: 'le-havre',
    name: { fr: 'Le Havre', en: 'Le Havre' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Paris-Charles de Gaulle (CDG)',
    airportTransfer: {
      fr: 'L’aéroport de Paris-Charles de Gaulle (CDG) se trouve à 200 km à l’est du Havre : comptez 2h15 par l’autoroute A13. Depuis Deauville-Normandie (DOL), à 45 km via le pont de Normandie, comptez 40 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Paris-Charles de Gaulle Airport (CDG) lies 200 km east of Le Havre: allow 2h15 via the A13 motorway. From Deauville-Normandie (DOL), 45 km away via the Pont de Normandie, allow 40 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Reconstruite par Auguste Perret après 1945, la ville-centre du Havre est un chef-d’œuvre du béton classé UNESCO, ouvert sur le plus grand port de commerce de la façade atlantique. Votre **chauffeur privé au Havre** dessert le centre, le terminal de croisière et les rendez-vous d’affaires portuaires : transferts et accueil des escales, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Le Havre est un **point d’entrée sur la Normandie**. Honfleur et son vieux bassin sont de l’autre côté du pont de Normandie, Étretat et ses falaises au nord, la côte fleurie et Deauville à proximité. En mise à disposition à la journée, votre chauffeur relie villes de peintres, falaises et stations balnéaires, ou assure les excursions pour les escales de croisière.',
      ],
      en: [
        'Rebuilt by Auguste Perret after 1945, Le Havre’s city centre is a masterpiece of concrete, UNESCO-listed, open onto the largest commercial port of the Atlantic seaboard. Your **private chauffeur in Le Havre** serves the centre, the cruise terminal and port business meetings: transfers and cruise-call welcomes, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Le Havre is an **entry point to Normandy**. Honfleur and its old dock are across the Pont de Normandie, Étretat and its cliffs to the north, the Côte Fleurie and Deauville nearby. With a full-day hire, your chauffeur links painters’ towns, cliffs and seaside resorts, or handles excursions for cruise calls.',
      ],
    },
    experiences: [
      { title: { fr: 'Le Havre de Perret', en: 'Perret’s Le Havre' }, teaser: { fr: 'La ville reconstruite classée UNESCO, l’église Saint-Joseph et sa tour-lanterne, le musée Malraux et ses impressionnistes. Dépose au centre, promenade architecturale.', en: 'The UNESCO-listed rebuilt city, the Saint-Joseph church and its lantern tower, the Malraux museum and its Impressionists. Drop-off in the centre, an architectural stroll.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Honfleur et la côte fleurie', en: 'Honfleur and the Côte Fleurie' }, teaser: { fr: 'Le pont de Normandie, le vieux bassin de Honfleur, Deauville et Trouville. Journée bord de mer et villégiature de l’autre côté de l’estuaire.', en: 'The Pont de Normandie, the old dock of Honfleur, Deauville and Trouville. A day of seaside and resorts across the estuary.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Étretat et la côte d’Albâtre', en: 'Étretat and the Alabaster Coast' }, teaser: { fr: 'Les falaises et l’aiguille d’Étretat, les jardins suspendus, la côte crayeuse. Journée nature au nord du Havre, arrêts photo légendaires.', en: 'The cliffs and needle of Étretat, the hanging gardens, the chalk coast. A nature day north of Le Havre, legendary photo stops.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Escale de croisière', en: 'Cruise call' }, teaser: { fr: 'Accueil au terminal, excursion vers Honfleur, Étretat ou Paris et retour à quai dans les temps du navire. Escale optimisée sans stress.', en: 'Welcome at the terminal, an excursion to Honfleur, Étretat or Paris and return to the quay on the ship’s schedule. An optimised call with no stress.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Soirée havraise', en: 'Le Havre evening' }, teaser: { fr: 'Dîner de poisson face au port de plaisance, la plage et sa promenade, le centre lumineux de Perret. Véhicule à disposition toute la soirée.', en: 'A seafood dinner facing the marina, the beach and its promenade, Perret’s luminous centre. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Assurez-vous les excursions pour les escales de croisière au Havre ?', en: 'Do you handle cruise-call excursions in Le Havre?' }, a: { fr: 'Oui. Nous organisons l’accueil au terminal et les excursions vers Honfleur, Étretat, Rouen ou Paris, avec retour à quai dans les temps du navire et chauffeur en attente tout au long de l’escale.', en: 'Yes. We arrange the terminal welcome and excursions to Honfleur, Étretat, Rouen or Paris, with return to the quay on the ship’s schedule and the chauffeur on standby throughout the call.' } },
      { q: { fr: 'Combien de temps du Havre à Honfleur ?', en: 'How long from Le Havre to Honfleur?' }, a: { fr: 'Comptez 30 minutes par le pont de Normandie. Le transfert privé est à prix fixe, avec accueil et suivi de votre horaire.', en: 'Allow 30 minutes via the Pont de Normandie. The private transfer is at a fixed price, with a meet-and-greet and schedule tracking.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['honfleur', 'etretat', 'rouen'],
  },
  {
    slug: 'honfleur',
    name: { fr: 'Honfleur', en: 'Honfleur' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Deauville-Normandie (DOL)',
    airportTransfer: {
      fr: 'L’aéroport de Deauville-Normandie (DOL) se trouve à 15 km à l’ouest de Honfleur : comptez 15 minutes. Depuis Le Havre, à 25 km via le pont de Normandie, comptez 25 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Deauville-Normandie Airport (DOL) lies 15 km west of Honfleur: allow 15 minutes. From Le Havre, 25 km away via the Pont de Normandie, allow 25 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Petit port pittoresque de l’estuaire de la Seine, Honfleur a séduit les peintres impressionnistes avec son Vieux Bassin, ses maisons à ardoises et son église de bois Sainte-Catherine. Votre **chauffeur privé à Honfleur** dessert le centre piéton, les hôtels de charme et les rendez-vous : transferts depuis Deauville ou Le Havre, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Honfleur est le cœur de la **côte fleurie**. Deauville et Trouville et leurs planches sont à quinze minutes, le pays d’Auge et ses manoirs à colombages à l’intérieur, les plages du Débarquement à l’ouest. En mise à disposition à la journée, votre chauffeur relie ports de peintres, stations chics et campagne cidricole dans le confort d’une berline privée.',
      ],
      en: [
        'A picturesque little port on the Seine estuary, Honfleur charmed the Impressionist painters with its Vieux Bassin, its slate-clad houses and its wooden Sainte-Catherine church. Your **private chauffeur in Honfleur** serves the pedestrian centre, the boutique hotels and meetings: transfers from Deauville or Le Havre, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Honfleur is the heart of the **Côte Fleurie**. Deauville and Trouville and their boardwalks are fifteen minutes away, the Pays d’Auge and its half-timbered manors inland, the D-Day beaches to the west. With a full-day hire, your chauffeur links painters’ ports, chic resorts and cider countryside in the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Honfleur et le Vieux Bassin', en: 'Honfleur and the Vieux Bassin' }, teaser: { fr: 'Le Vieux Bassin et ses maisons hautes, l’église de bois Sainte-Catherine, les ruelles chères aux peintres. Dépose au plus près, promenade dans le port impressionniste.', en: 'The Vieux Bassin and its tall houses, the wooden Sainte-Catherine church, the lanes dear to painters. Drop-off nearby, a stroll through the Impressionist port.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Deauville et la côte fleurie', en: 'Deauville and the Côte Fleurie' }, teaser: { fr: 'Les planches de Deauville, les villas de Trouville, le casino et l’hippodrome. Journée villégiature chic sur la côte normande.', en: 'The Deauville boardwalk, the Trouville villas, the casino and the racecourse. A day of chic resorts on the Norman coast.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Pays d’Auge et route du cidre', en: 'Pays d’Auge and cider route' }, teaser: { fr: 'Les manoirs à colombages, les fermes cidricoles et calvados, le village de Beuvron-en-Auge. Journée terroir et traditions dans l’arrière-pays.', en: 'The half-timbered manors, the cider and calvados farms, the village of Beuvron-en-Auge. A day of produce and traditions inland.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Étretat depuis Honfleur', en: 'Étretat from Honfleur' }, teaser: { fr: 'Le pont de Normandie, les falaises et l’aiguille d’Étretat, la côte d’Albâtre. Journée nature et paysages de l’autre côté de l’estuaire.', en: 'The Pont de Normandie, the cliffs and needle of Étretat, the Alabaster Coast. A day of nature and landscapes across the estuary.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Soirée à Honfleur', en: 'Evening in Honfleur' }, teaser: { fr: 'Dîner de fruits de mer sur le Vieux Bassin, les façades illuminées se reflétant dans l’eau, un verre de calvados. Véhicule à disposition.', en: 'A seafood dinner on the Vieux Bassin, the illuminated façades reflected in the water, a glass of calvados. Vehicle on standby.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Deauville à Honfleur ?', en: 'How long from Deauville Airport to Honfleur?' }, a: { fr: 'Comptez 15 minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 15 minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on combiner Honfleur et Deauville dans la journée ?', en: 'Can Honfleur and Deauville be combined in one day?' }, a: { fr: 'Oui, les deux sont à quinze minutes. En mise à disposition à la journée, votre chauffeur relie le Vieux Bassin, les planches de Deauville et le pays d’Auge, à prix fixe.', en: 'Yes, the two are fifteen minutes apart. With a full-day hire, your chauffeur links the Vieux Bassin, the Deauville boardwalk and the Pays d’Auge, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['le-havre', 'rouen', 'caen'],
  },
  {
    slug: 'etretat',
    name: { fr: 'Étretat', en: 'Étretat' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Le Havre-Octeville (LEH)',
    airportTransfer: {
      fr: 'L’aéroport du Havre-Octeville (LEH) se trouve à 30 km au sud d’Étretat : comptez 30 minutes. Depuis Paris-Charles de Gaulle (CDG), à 200 km, comptez 2h30. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Le Havre-Octeville Airport (LEH) lies 30 km south of Étretat: allow 30 minutes. From Paris-Charles de Gaulle (CDG), 200 km away, allow 2h30. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Perle de la côte d’Albâtre, Étretat dresse ses falaises de craie, ses arches et son Aiguille, paysage immortalisé par Monet, Courbet et Maupassant. Votre **chauffeur privé à Étretat** dessert le village, les jardins suspendus et les hôtels : transferts depuis Le Havre ou Paris, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Étretat est le joyau de la **côte d’Albâtre**. Les autres stations crayeuses — Fécamp et son palais Bénédictine, Yport — jalonnent la côte, Honfleur et Le Havre sont au sud. En mise à disposition à la journée, votre chauffeur relie falaises, villages de pêcheurs et ports de peintres pendant que vous profitez de l’un des plus beaux littoraux de France.',
      ],
      en: [
        'Pearl of the Alabaster Coast, Étretat raises its chalk cliffs, its arches and its Needle, a landscape immortalised by Monet, Courbet and Maupassant. Your **private chauffeur in Étretat** serves the village, the hanging gardens and the hotels: transfers from Le Havre or Paris, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Étretat is the jewel of the **Alabaster Coast**. The other chalk resorts — Fécamp and its Bénédictine palace, Yport — dot the coast, Honfleur and Le Havre lie to the south. With a full-day hire, your chauffeur links cliffs, fishing villages and painters’ ports while you enjoy one of France’s finest coastlines.',
      ],
    },
    experiences: [
      { title: { fr: 'Falaises et Aiguille d’Étretat', en: 'Étretat cliffs and Needle' }, teaser: { fr: 'La falaise d’Aval et son arche, l’Aiguille, la falaise d’Amont et la chapelle, les jardins suspendus. Dépose au village, promenade sur les sentiers du littoral.', en: 'The Aval cliff and its arch, the Needle, the Amont cliff and the chapel, the hanging gardens. Drop-off in the village, a walk on the coastal paths.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Fécamp et la Bénédictine', en: 'Fécamp and the Bénédictine' }, teaser: { fr: 'Le palais Bénédictine et sa liqueur, l’abbaye de la Trinité, le port de pêche. Journée patrimoine et gastronomie sur la côte d’Albâtre.', en: 'The Bénédictine palace and its liqueur, the Trinité abbey, the fishing port. A day of heritage and gastronomy on the Alabaster Coast.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Honfleur depuis Étretat', en: 'Honfleur from Étretat' }, teaser: { fr: 'Le pont de Normandie, le vieux bassin de Honfleur, la côte fleurie. Journée ports de peintres au sud de l’estuaire.', en: 'The Pont de Normandie, the old dock of Honfleur, the Côte Fleurie. A day of painters’ ports south of the estuary.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Côte d’Albâtre panoramique', en: 'Panoramic Alabaster Coast' }, teaser: { fr: 'Les villages crayeux, Yport et Veules-les-Roses parmi les plus beaux de France, les valleuses. Journée nature et villages au fil des falaises.', en: 'The chalk villages, Yport and Veules-les-Roses among France’s finest, the valleuses. A day of nature and villages along the cliffs.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Soirée à Étretat', en: 'Evening in Étretat' }, teaser: { fr: 'Dîner face à la mer, les falaises rougies par le couchant, le calme du village hors saison. Véhicule à disposition toute la soirée.', en: 'Dinner facing the sea, the cliffs reddened by the sunset, the calm of the off-season village. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps du Havre à Étretat ?', en: 'How long from Le Havre to Étretat?' }, a: { fr: 'Comptez 30 minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 30 minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on venir à Étretat à la journée depuis Paris ?', en: 'Can you come to Étretat as a day trip from Paris?' }, a: { fr: 'Oui, Étretat est à 2h30 de Paris. En mise à disposition à la journée, votre chauffeur vous conduit aux falaises, combine avec Honfleur ou Rouen et vous ramène le soir, à prix fixe.', en: 'Yes, Étretat is 2h30 from Paris. With a full-day hire, your chauffeur drives you to the cliffs, combines with Honfleur or Rouen and brings you back in the evening, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['le-havre', 'honfleur', 'rouen'],
  },
  {
    slug: 'bayeux',
    name: { fr: 'Bayeux', en: 'Bayeux' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Caen-Carpiquet (CFR)',
    airportTransfer: {
      fr: 'L’aéroport de Caen-Carpiquet (CFR) se trouve à 30 km à l’est de Bayeux : comptez 30 minutes. Depuis Paris-Charles de Gaulle (CDG), à 260 km, comptez 2h45. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Caen-Carpiquet Airport (CFR) lies 30 km east of Bayeux: allow 30 minutes. From Paris-Charles de Gaulle (CDG), 260 km away, allow 2h45. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Première ville libérée de France, épargnée par les bombardements, Bayeux conserve sa cathédrale gothique, son centre médiéval intact et la célèbre tapisserie racontant la conquête de l’Angleterre. Votre **chauffeur privé à Bayeux** dessert le centre historique et les sites de mémoire : transferts depuis Caen, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Bayeux est la porte des **plages du Débarquement**. Omaha Beach et le cimetière américain de Colleville sont à quinze minutes, la pointe du Hoc et Arromanches tout proches, les cimetières militaires britanniques et allemands aux alentours. En mise à disposition à la journée, votre chauffeur relie sites de mémoire, cathédrale et campagne du Bessin dans le recueillement et le confort.',
      ],
      en: [
        'The first liberated town in France, spared from bombing, Bayeux preserves its Gothic cathedral, its intact medieval centre and the famous tapestry recounting the conquest of England. Your **private chauffeur in Bayeux** serves the historic centre and the memorial sites: transfers from Caen, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Bayeux is the gateway to the **D-Day beaches**. Omaha Beach and the Colleville American cemetery are fifteen minutes away, the Pointe du Hoc and Arromanches nearby, the British and German war cemeteries around. With a full-day hire, your chauffeur links memorial sites, cathedral and Bessin countryside in reflection and comfort.',
      ],
    },
    experiences: [
      { title: { fr: 'Plages du Débarquement', en: 'D-Day beaches' }, teaser: { fr: 'Omaha Beach et le cimetière américain, la pointe du Hoc, Arromanches et son port artificiel. Journée de mémoire au départ de la première ville libérée.', en: 'Omaha Beach and the American cemetery, the Pointe du Hoc, Arromanches and its artificial harbour. A day of remembrance from the first liberated town.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Bayeux et sa tapisserie', en: 'Bayeux and its tapestry' }, teaser: { fr: 'La tapisserie de la reine Mathilde, la cathédrale gothique, le centre médiéval intact et le moulin. Dépose au centre, promenade dans la ville épargnée.', en: 'Queen Matilda’s tapestry, the Gothic cathedral, the intact medieval centre and the mill. Drop-off in the centre, a stroll through the spared town.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Mont-Saint-Michel depuis Bayeux', en: 'Mont-Saint-Michel from Bayeux' }, teaser: { fr: 'À 1h30, l’abbaye dressée dans sa baie, la merveille de l’Occident, les remparts. Journée patrimoine dans l’un des sites les plus visités de France.', en: '1h30 away, the abbey rising in its bay, the Wonder of the West, the ramparts. A heritage day at one of France’s most visited sites.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Côte et campagne du Bessin', en: 'Bessin coast and countryside' }, teaser: { fr: 'Le port de Port-en-Bessin, les falaises, les manoirs et fermes du bocage normand. Journée nature et terroir dans l’arrière-pays.', en: 'The port of Port-en-Bessin, the cliffs, the manors and farms of the Norman bocage. A day of nature and produce inland.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '540' },
      { title: { fr: 'Soirée à Bayeux', en: 'Evening in Bayeux' }, teaser: { fr: 'Dîner dans le centre médiéval, la cathédrale illuminée, un verre de cidre du Bessin. Véhicule à disposition toute la soirée.', en: 'Dinner in the medieval centre, the illuminated cathedral, a glass of Bessin cider. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Bayeux est-elle une bonne base pour les plages du Débarquement ?', en: 'Is Bayeux a good base for the D-Day beaches?' }, a: { fr: 'Oui, c’est la base idéale : Omaha et le cimetière américain sont à quinze minutes. Votre chauffeur vous conduit sur tous les sites à votre rythme, sur une journée à prix fixe.', en: 'Yes, it is the ideal base: Omaha and the American cemetery are fifteen minutes away. Your chauffeur drives you to all the sites at your pace, over a fixed-price day.' } },
      { q: { fr: 'Combien de temps de Caen à Bayeux ?', en: 'How long from Caen to Bayeux?' }, a: { fr: 'Comptez 30 minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 30 minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['caen', 'mont-saint-michel-ville', 'honfleur'],
  },
  {
    slug: 'mont-saint-michel-ville',
    name: { fr: 'Mont-Saint-Michel', en: 'Mont-Saint-Michel' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Rennes-Saint-Jacques (RNS)',
    airportTransfer: {
      fr: 'L’aéroport de Rennes-Saint-Jacques (RNS) se trouve à 65 km au sud du Mont-Saint-Michel : comptez 1h. Depuis Caen (CFR), à 130 km, comptez 1h30. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Rennes-Saint-Jacques Airport (RNS) lies 65 km south of Mont-Saint-Michel: allow 1h. From Caen (CFR), 130 km away, allow 1h30. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Merveille de l’Occident dressée sur son rocher dans une immense baie aux plus grandes marées d’Europe, le Mont-Saint-Michel et son abbaye millénaire figurent parmi les sites les plus visités de France, classés UNESCO. Votre **chauffeur privé au Mont-Saint-Michel** dessert le barrage et la navette, les hôtels de la baie et les rendez-vous : transferts depuis Rennes ou Caen, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Le Mont est au carrefour de la **Normandie et de la Bretagne**. Saint-Malo et sa cité corsaire sont à 50 km, Cancale et ses huîtres tout proches, Avranches et la baie côté normand. En mise à disposition à la journée, votre chauffeur relie l’abbaye, les cités bretonnes et les rivages de la baie pendant que vous découvrez ce chef-d’œuvre sans souci de stationnement.',
      ],
      en: [
        'Wonder of the West rising on its rock in a vast bay with Europe’s greatest tides, Mont-Saint-Michel and its thousand-year-old abbey rank among France’s most visited sites, UNESCO-listed. Your **private chauffeur at Mont-Saint-Michel** serves the dam and the shuttle, the bay hotels and meetings: transfers from Rennes or Caen, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'The Mont is at the crossroads of **Normandy and Brittany**. Saint-Malo and its corsair city are 50 km away, Cancale and its oysters nearby, Avranches and the bay on the Norman side. With a full-day hire, your chauffeur links the abbey, the Breton cities and the bay shores while you discover this masterpiece with no parking worry.',
      ],
    },
    experiences: [
      { title: { fr: 'Abbaye du Mont-Saint-Michel', en: 'Mont-Saint-Michel abbey' }, teaser: { fr: 'Dépose au barrage, la navette ou la traversée à pied vers le Mont, l’abbaye, les remparts et la baie. Demi-journée dans la merveille de l’Occident.', en: 'Drop-off at the dam, the shuttle or the walk across to the Mont, the abbey, the ramparts and the bay. A half-day in the Wonder of the West.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '360' },
      { title: { fr: 'Saint-Malo et Cancale', en: 'Saint-Malo and Cancale' }, teaser: { fr: 'À 50 km, la cité corsaire de Saint-Malo et ses remparts, Cancale et ses huîtres, la côte d’Émeraude. Journée cités bretonnes et fruits de mer.', en: '50 km away, the corsair city of Saint-Malo and its ramparts, Cancale and its oysters, the Emerald Coast. A day of Breton cities and seafood.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Traversée de la baie', en: 'Crossing the bay' }, teaser: { fr: 'La traversée guidée des grèves à pied, les sables mouvants et les marées, le Mont vu du large. Journée nature et sensations dans la baie.', en: 'The guided walk across the sands, the quicksand and the tides, the Mont seen from afar. A day of nature and thrills in the bay.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Saint-Malo et la côte d’Émeraude', en: 'Saint-Malo and the Emerald Coast' }, teaser: { fr: 'Dinard et ses villas Belle Époque, la pointe du Grouin, les plages de la côte d’Émeraude. Journée bord de mer côté breton.', en: 'Dinard and its Belle Époque villas, the Pointe du Grouin, the Emerald Coast beaches. A seaside day on the Breton side.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Le Mont au crépuscule', en: 'The Mont at dusk' }, teaser: { fr: 'La visite en fin de journée quand les cars sont partis, l’abbaye illuminée, un dîner d’agneau de pré-salé dans la baie. Véhicule à disposition.', en: 'A late-day visit once the coaches have left, the illuminated abbey, a salt-marsh lamb dinner in the bay. Vehicle on standby.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '400' },
    ],
    faq: [
      { q: { fr: 'Comment accède-t-on au Mont-Saint-Michel avec un chauffeur ?', en: 'How do you reach Mont-Saint-Michel with a chauffeur?' }, a: { fr: 'Votre chauffeur vous dépose au barrage, d’où une navette gratuite ou une marche de 45 minutes mène au Mont, la circulation étant interdite sur le site. Il vous attend et vous reprend à l’heure convenue, à prix fixe.', en: 'Your chauffeur drops you at the dam, from where a free shuttle or a 45-minute walk leads to the Mont, as traffic is banned on the site. He waits and picks you up at the agreed time, at a fixed price.' } },
      { q: { fr: 'Peut-on combiner le Mont et Saint-Malo dans la journée ?', en: 'Can the Mont and Saint-Malo be combined in one day?' }, a: { fr: 'Oui, Saint-Malo est à 50 km. En mise à disposition à la journée, votre chauffeur relie l’abbaye, la cité corsaire et Cancale, à prix fixe.', en: 'Yes, Saint-Malo is 50 km away. With a full-day hire, your chauffeur links the abbey, the corsair city and Cancale, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['saint-malo', 'dinard', 'rennes'],
  },
  {
    slug: 'saint-malo',
    name: { fr: 'Saint-Malo', en: 'Saint-Malo' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Dinard-Pleurtuit-Saint-Malo (DNR)',
    airportTransfer: {
      fr: 'L’aéroport de Dinard-Pleurtuit-Saint-Malo (DNR) se trouve à 15 km à l’ouest de Saint-Malo : comptez 20 minutes. Depuis Rennes (RNS), à 70 km au sud, comptez 1h. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Dinard-Pleurtuit-Saint-Malo Airport (DNR) lies 15 km west of Saint-Malo: allow 20 minutes. From Rennes (RNS), 70 km south, allow 1h. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Cité corsaire ceinte de remparts face à la Manche, Saint-Malo dresse ses hautes maisons de granit derrière ses murailles, patrie de Chateaubriand et des grands navigateurs. Votre **chauffeur privé à Saint-Malo** dessert la ville intra-muros, le port et les hôtels du front de mer : transferts depuis Dinard ou Rennes, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Saint-Malo commande la **côte d’Émeraude**. Dinard et ses villas Belle Époque sont de l’autre côté de la Rance, Cancale et ses parcs à huîtres à l’est, le Mont-Saint-Michel à 50 km. En mise à disposition à la journée, votre chauffeur relie cités corsaires, stations balnéaires et l’abbaye de la baie pendant que vous profitez du littoral breton.',
      ],
      en: [
        'A corsair city ringed by ramparts facing the Channel, Saint-Malo raises its tall granite houses behind its walls, home of Chateaubriand and the great navigators. Your **private chauffeur in Saint-Malo** serves the intra-muros town, the port and the seafront hotels: transfers from Dinard or Rennes, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Saint-Malo commands the **Emerald Coast**. Dinard and its Belle Époque villas are across the Rance, Cancale and its oyster beds to the east, Mont-Saint-Michel 50 km away. With a full-day hire, your chauffeur links corsair cities, seaside resorts and the bay abbey while you enjoy the Breton coast.',
      ],
    },
    experiences: [
      { title: { fr: 'Saint-Malo intra-muros', en: 'Saint-Malo intra-muros' }, teaser: { fr: 'Le tour des remparts, la cité corsaire, le tombeau de Chateaubriand au Grand Bé à marée basse, le fort National. Dépose aux portes, promenade dans la cité de granit.', en: 'The rampart walk, the corsair city, Chateaubriand’s tomb at the Grand Bé at low tide, the Fort National. Drop-off at the gates, a stroll through the granite city.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Cancale et la côte d’Émeraude', en: 'Cancale and the Emerald Coast' }, teaser: { fr: 'Cancale et ses parcs à huîtres, la pointe du Grouin, les plages de la côte d’Émeraude. Journée bord de mer et dégustation de fruits de mer.', en: 'Cancale and its oyster beds, the Pointe du Grouin, the Emerald Coast beaches. A seaside day and seafood tasting.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Mont-Saint-Michel depuis Saint-Malo', en: 'Mont-Saint-Michel from Saint-Malo' }, teaser: { fr: 'À 50 km, l’abbaye dressée dans sa baie, la merveille de l’Occident. Journée patrimoine à l’un des sites les plus visités de France.', en: '50 km away, the abbey rising in its bay, the Wonder of the West. A heritage day at one of France’s most visited sites.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Dinard et la Rance', en: 'Dinard and the Rance' }, teaser: { fr: 'Dinard et ses villas Belle Époque, l’estuaire de la Rance et son barrage, Dinan la médiévale en amont. Journée villégiature et patrimoine.', en: 'Dinard and its Belle Époque villas, the Rance estuary and its dam, medieval Dinan upstream. A day of resorts and heritage.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Soirée corsaire', en: 'Corsair evening' }, teaser: { fr: 'Dîner de fruits de mer intra-muros, les remparts battus par les marées, un verre au coucher du soleil. Véhicule à disposition toute la soirée.', en: 'A seafood dinner intra-muros, the ramparts battered by the tides, a drink at sunset. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Dinard à Saint-Malo ?', en: 'How long from Dinard Airport to Saint-Malo?' }, a: { fr: 'Comptez 20 minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 20 minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on combiner Saint-Malo et le Mont-Saint-Michel ?', en: 'Can Saint-Malo and Mont-Saint-Michel be combined?' }, a: { fr: 'Oui, le Mont est à 50 km. En mise à disposition à la journée, votre chauffeur relie la cité corsaire, Cancale et l’abbaye de la baie, à prix fixe.', en: 'Yes, the Mont is 50 km away. With a full-day hire, your chauffeur links the corsair city, Cancale and the bay abbey, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['dinard', 'mont-saint-michel-ville', 'rennes'],
  },
  {
    slug: 'dinard',
    name: { fr: 'Dinard', en: 'Dinard' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Dinard-Pleurtuit-Saint-Malo (DNR)',
    airportTransfer: {
      fr: 'L’aéroport de Dinard-Pleurtuit-Saint-Malo (DNR) se trouve à 5 km au sud de Dinard : comptez 10 minutes. Depuis Rennes (RNS), à 65 km, comptez 1h. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Dinard-Pleurtuit-Saint-Malo Airport (DNR) lies 5 km south of Dinard: allow 10 minutes. From Rennes (RNS), 65 km away, allow 1h. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Perle de la côte d’Émeraude et villégiature élue de l’aristocratie britannique au XIXe siècle, Dinard aligne face à Saint-Malo ses villas Belle Époque, ses plages et sa promenade du Clair de Lune. Votre **chauffeur privé à Dinard** dessert le front de mer, les villas et les hôtels de charme : transferts depuis l’aéroport, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Dinard commande la **côte d’Émeraude et l’estuaire de la Rance**. Saint-Malo et sa cité corsaire sont de l’autre côté de la Rance, Dinan la médiévale en amont, le cap Fréhel et Fort-la-Latte à l’ouest. En mise à disposition à la journée, votre chauffeur relie villas Belle Époque, caps sauvages et cités médiévales dans le confort d’une berline privée.',
      ],
      en: [
        'Pearl of the Emerald Coast and the chosen resort of the British aristocracy in the 19th century, Dinard lines up facing Saint-Malo its Belle Époque villas, its beaches and its Clair de Lune promenade. Your **private chauffeur in Dinard** serves the seafront, the villas and the boutique hotels: transfers from the airport, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Dinard commands the **Emerald Coast and the Rance estuary**. Saint-Malo and its corsair city are across the Rance, medieval Dinan upstream, Cap Fréhel and Fort-la-Latte to the west. With a full-day hire, your chauffeur links Belle Époque villas, wild capes and medieval cities in the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Dinard Belle Époque', en: 'Belle Époque Dinard' }, teaser: { fr: 'La promenade du Clair de Lune, les villas anglo-normandes, la plage de l’Écluse et les tentes rayées. Dépose au front de mer, promenade dans la villégiature chic.', en: 'The Clair de Lune promenade, the Anglo-Norman villas, the Écluse beach and the striped tents. Drop-off at the seafront, a stroll through the chic resort.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Cap Fréhel et Fort-la-Latte', en: 'Cap Fréhel and Fort-la-Latte' }, teaser: { fr: 'Les landes et falaises du cap Fréhel, le château de Fort-la-Latte face à la mer, les plages sauvages. Journée nature sur la côte d’Émeraude.', en: 'The heaths and cliffs of Cap Fréhel, the Fort-la-Latte castle facing the sea, the wild beaches. A nature day on the Emerald Coast.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Saint-Malo et Cancale', en: 'Saint-Malo and Cancale' }, teaser: { fr: 'La cité corsaire de Saint-Malo et ses remparts, Cancale et ses huîtres, la pointe du Grouin. Journée cités et fruits de mer de l’autre côté de la Rance.', en: 'The corsair city of Saint-Malo and its ramparts, Cancale and its oysters, the Pointe du Grouin. A day of cities and seafood across the Rance.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Dinan la médiévale', en: 'Medieval Dinan' }, teaser: { fr: 'La cité médiévale de Dinan sur la Rance, ses remparts, ses maisons à pans de bois et son port. Journée patrimoine en remontant l’estuaire.', en: 'The medieval city of Dinan on the Rance, its ramparts, its half-timbered houses and its port. A heritage day up the estuary.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '540' },
      { title: { fr: 'Soirée à Dinard', en: 'Evening in Dinard' }, teaser: { fr: 'Dîner face à la mer, la promenade illuminée, Saint-Malo scintillant de l’autre côté de la baie. Véhicule à disposition toute la soirée.', en: 'Dinner facing the sea, the illuminated promenade, Saint-Malo glittering across the bay. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Dinard au centre ?', en: 'How long from Dinard Airport to the centre?' }, a: { fr: 'Comptez 10 minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 10 minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on rejoindre Saint-Malo depuis Dinard ?', en: 'Can you reach Saint-Malo from Dinard?' }, a: { fr: 'Oui, Saint-Malo est de l’autre côté de la Rance, à vingt minutes en voiture. En mise à disposition, votre chauffeur relie les deux stations et la côte d’Émeraude, à prix fixe.', en: 'Yes, Saint-Malo is across the Rance, twenty minutes by car. With a hire, your chauffeur links the two resorts and the Emerald Coast, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['saint-malo', 'mont-saint-michel-ville', 'rennes'],
  },
  {
    slug: 'brest',
    name: { fr: 'Brest', en: 'Brest' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Brest-Bretagne (BES)',
    airportTransfer: {
      fr: 'L’aéroport de Brest-Bretagne (BES) se trouve à 10 km au nord-est de Brest : comptez 15 minutes. Votre chauffeur vous accueille en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Brest-Bretagne Airport (BES) lies 10 km north-east of Brest: allow 15 minutes. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Grand port militaire au bout du Finistère, Brest ouvre sur l’une des plus belles rades du monde et abrite Océanopolis, immense parc de découverte des océans. Votre **chauffeur privé à Brest** dessert le centre, l’arsenal et les rendez-vous d’affaires maritimes : transferts depuis l’aéroport, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Brest est la porte du **Finistère et de ses pointes sauvages**. La presqu’île de Crozon et ses falaises, la pointe Saint-Mathieu et son phare, les abers de la côte des Légendes sont à portée. En mise à disposition à la journée, votre chauffeur relie caps battus par les vents, ports de pêche et villages du bout du monde dans le confort d’une berline privée.',
      ],
      en: [
        'A great naval port at the tip of Finistère, Brest opens onto one of the world’s finest harbours and houses Océanopolis, a vast ocean-discovery park. Your **private chauffeur in Brest** serves the centre, the arsenal and maritime business meetings: transfers from the airport, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Brest is the gateway to **Finistère and its wild headlands**. The Crozon peninsula and its cliffs, the Pointe Saint-Mathieu and its lighthouse, the abers of the Côte des Légendes are within reach. With a full-day hire, your chauffeur links wind-battered capes, fishing ports and end-of-the-world villages in the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Presqu’île de Crozon', en: 'Crozon peninsula' }, teaser: { fr: 'Les falaises et pointes de Pen-Hir et de Dinan, les plages sauvages, le parc naturel d’Armorique. Journée nature sur l’une des plus belles presqu’îles de Bretagne.', en: 'The cliffs and points of Pen-Hir and Dinan, the wild beaches, the Armorique nature park. A nature day on one of Brittany’s finest peninsulas.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Brest et Océanopolis', en: 'Brest and Océanopolis' }, teaser: { fr: 'Océanopolis et ses pavillons polaires et tropicaux, le château et l’arsenal, les Ateliers des Capucins. Dépose au centre, journée découverte des océans.', en: 'Océanopolis and its polar and tropical pavilions, the castle and the arsenal, the Ateliers des Capucins. Drop-off in the centre, a day discovering the oceans.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Pointe Saint-Mathieu et abers', en: 'Pointe Saint-Mathieu and abers' }, teaser: { fr: 'Le phare et l’abbaye de la pointe Saint-Mathieu, la côte des Légendes et ses abers, les villages de pêcheurs. Journée bout du monde.', en: 'The lighthouse and abbey of the Pointe Saint-Mathieu, the Côte des Légendes and its abers, the fishing villages. An end-of-the-world day.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Quimper et la Cornouaille', en: 'Quimper and Cornouaille' }, teaser: { fr: 'À 70 km, la cathédrale et la vieille ville de Quimper, la faïence, les enclos paroissiaux. Journée patrimoine et culture bretonne.', en: '70 km away, the cathedral and old town of Quimper, the faience, the parish closes. A day of Breton heritage and culture.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Soirée brestoise', en: 'Brest evening' }, teaser: { fr: 'Dîner de fruits de mer sur le port, les Ateliers des Capucins animés, la rade au crépuscule. Véhicule à disposition toute la soirée.', en: 'A seafood dinner at the port, the lively Ateliers des Capucins, the harbour at dusk. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Brest au centre ?', en: 'How long from Brest Airport to the centre?' }, a: { fr: 'Comptez 15 minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 15 minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on visiter la presqu’île de Crozon depuis Brest ?', en: 'Can you visit the Crozon peninsula from Brest?' }, a: { fr: 'Oui, Crozon est à portée en contournant la rade. En mise à disposition à la journée, votre chauffeur vous conduit aux pointes et plages sauvages du Finistère, à prix fixe.', en: 'Yes, Crozon is within reach around the harbour. With a full-day hire, your chauffeur drives you to the wild points and beaches of Finistère, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['quimper', 'rennes'],
  },
  {
    slug: 'quimper',
    name: { fr: 'Quimper', en: 'Quimper' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Quimper-Cornouaille (UIP)',
    airportTransfer: {
      fr: 'L’aéroport de Quimper-Cornouaille (UIP) se trouve à 8 km au sud-ouest du centre : comptez 15 minutes. Depuis Brest-Bretagne (BES), à 70 km, comptez 1h. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Quimper-Cornouaille Airport (UIP) lies 8 km south-west of the centre: allow 15 minutes. From Brest-Bretagne (BES), 70 km away, allow 1h. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale historique de la Cornouaille, Quimper marie sa cathédrale gothique aux flèches jumelles, ses ruelles à pans de bois et sa faïence renommée, cœur battant de la culture bretonne. Votre **chauffeur privé à Quimper** dessert le centre historique, les ateliers de faïence et les rendez-vous : transferts depuis l’aéroport, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Quimper est la porte du **pays bigouden et de la Cornouaille**. Les ports de Concarneau et sa ville close, la pointe du Raz et son cap sauvage, Locronan parmi les plus beaux villages de France sont à portée. En mise à disposition à la journée, votre chauffeur relie villes closes, caps de bout du monde et enclos paroissiaux dans le confort d’une berline privée.',
      ],
      en: [
        'Historic capital of Cornouaille, Quimper marries its Gothic cathedral with twin spires, its half-timbered lanes and its renowned faience, the beating heart of Breton culture. Your **private chauffeur in Quimper** serves the historic centre, the faience workshops and meetings: transfers from the airport, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Quimper is the gateway to the **Pays Bigouden and Cornouaille**. The port of Concarneau and its walled town, the Pointe du Raz and its wild cape, Locronan among France’s finest villages are within reach. With a full-day hire, your chauffeur links walled towns, end-of-the-world capes and parish closes in the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Quimper et la faïence', en: 'Quimper and the faience' }, teaser: { fr: 'La cathédrale Saint-Corentin, la vieille ville à pans de bois, les ateliers de faïence de Quimper. Dépose au centre, promenade dans la capitale de la Cornouaille.', en: 'Saint-Corentin cathedral, the half-timbered old town, the Quimper faience workshops. Drop-off in the centre, a stroll through the capital of Cornouaille.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Pointe du Raz et cap Sizun', en: 'Pointe du Raz and Cap Sizun' }, teaser: { fr: 'La pointe du Raz battue par les vents, le phare de la Vieille, les landes du cap Sizun, la baie des Trépassés. Journée bout du monde breton.', en: 'The wind-battered Pointe du Raz, the Vieille lighthouse, the Cap Sizun heaths, the Baie des Trépassés. A Breton end-of-the-world day.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Concarneau et Locronan', en: 'Concarneau and Locronan' }, teaser: { fr: 'La ville close de Concarneau dans son port, Locronan et ses maisons de granit parmi les plus beaux villages de France. Journée cités bretonnes.', en: 'The walled town of Concarneau in its port, Locronan and its granite houses among France’s finest villages. A day of Breton towns.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '540' },
      { title: { fr: 'Pays bigouden et côte', en: 'Pays Bigouden and coast' }, teaser: { fr: 'Les ports de pêche du pays bigouden, Pont-l’Abbé et ses coiffes, les plages de la baie d’Audierne. Journée traditions et littoral.', en: 'The fishing ports of the Pays Bigouden, Pont-l’Abbé and its coiffes, the beaches of the Baie d’Audierne. A day of traditions and coast.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '540' },
      { title: { fr: 'Soirée quimpéroise', en: 'Quimper evening' }, teaser: { fr: 'Dîner de crêpes et fruits de mer dans la vieille ville, les quais de l’Odet, l’ambiance d’une capitale bretonne. Véhicule à disposition.', en: 'A dinner of crêpes and seafood in the old town, the quays of the Odet, the atmosphere of a Breton capital. Vehicle on standby.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Quimper au centre ?', en: 'How long from Quimper Airport to the centre?' }, a: { fr: 'Comptez 15 minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 15 minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on visiter la pointe du Raz depuis Quimper ?', en: 'Can you visit the Pointe du Raz from Quimper?' }, a: { fr: 'Oui, la pointe du Raz est à une heure. En mise à disposition à la journée, votre chauffeur combine le cap Sizun, Locronan et les ports bigoudens, à prix fixe.', en: 'Yes, the Pointe du Raz is an hour away. With a full-day hire, your chauffeur combines the Cap Sizun, Locronan and the Bigouden ports, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['brest', 'vannes', 'rennes'],
  },
  {
    slug: 'vannes',
    name: { fr: 'Vannes', en: 'Vannes' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Nantes-Atlantique (NTE)',
    airportTransfer: {
      fr: 'L’aéroport de Nantes-Atlantique (NTE) se trouve à 110 km au sud-est de Vannes : comptez 1h15 par la voie express. Depuis Lorient (LRT), à 60 km, comptez 45 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Nantes-Atlantique Airport (NTE) lies 110 km south-east of Vannes: allow 1h15 by expressway. From Lorient (LRT), 60 km away, allow 45 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Cité médiévale au fond du golfe du Morbihan, Vannes conserve ses remparts fleuris, ses maisons à pans de bois et sa cathédrale, ouverte sur l’une des plus belles baies du monde. Votre **chauffeur privé à Vannes** dessert le centre historique, le port et les rendez-vous : transferts depuis Nantes ou Lorient, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Vannes commande le **golfe du Morbihan et ses mégalithes**. Les alignements de Carnac, les plus grands ensembles mégalithiques du monde, la presqu’île de Rhuys et la Roche-Bernard sont à portée, les îles du golfe au large. En mise à disposition à la journée, votre chauffeur relie sites préhistoriques, ports du golfe et cités de caractère dans le confort d’une berline privée.',
      ],
      en: [
        'A medieval city at the head of the Gulf of Morbihan, Vannes preserves its flowered ramparts, its half-timbered houses and its cathedral, open onto one of the world’s finest bays. Your **private chauffeur in Vannes** serves the historic centre, the port and meetings: transfers from Nantes or Lorient, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Vannes commands the **Gulf of Morbihan and its megaliths**. The Carnac alignments, the world’s largest megalithic complexes, the Rhuys peninsula and La Roche-Bernard are within reach, the gulf islands offshore. With a full-day hire, your chauffeur links prehistoric sites, gulf ports and character towns in the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Vannes et le golfe', en: 'Vannes and the gulf' }, teaser: { fr: 'Les remparts fleuris, la vieille ville à pans de bois, le port et la promenade de la Rabine. Dépose au centre, promenade dans la cité du golfe du Morbihan.', en: 'The flowered ramparts, the half-timbered old town, the port and the Rabine promenade. Drop-off in the centre, a stroll through the Gulf of Morbihan city.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Alignements de Carnac', en: 'Carnac alignments' }, teaser: { fr: 'Les milliers de menhirs alignés de Carnac, les tumulus, le musée de préhistoire, la presqu’île de Quiberon. Journée mégalithes et côte sauvage.', en: 'The thousands of aligned menhirs of Carnac, the tumuli, the prehistory museum, the Quiberon peninsula. A day of megaliths and wild coast.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Presqu’île de Rhuys', en: 'Rhuys peninsula' }, teaser: { fr: 'Le château de Suscinio des ducs de Bretagne, les ports de la presqu’île, les huîtres du golfe. Journée patrimoine et fruits de mer.', en: 'The Suscinio castle of the Dukes of Brittany, the peninsula ports, the gulf oysters. A day of heritage and seafood.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '540' },
      { title: { fr: 'Îles et ports du Morbihan', en: 'Morbihan islands and ports' }, teaser: { fr: 'Les ports de Larmor-Baden et du golfe, une embarcation vers l’île aux Moines, les villages ostréicoles. Journée au fil de la petite mer.', en: 'The ports of Larmor-Baden and the gulf, a boat to the Île aux Moines, the oyster villages. A day along the little sea.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Soirée à Vannes', en: 'Evening in Vannes' }, teaser: { fr: 'Dîner de fruits de mer dans la vieille ville, les remparts illuminés, un verre au bord du port. Véhicule à disposition toute la soirée.', en: 'A seafood dinner in the old town, the illuminated ramparts, a drink by the port. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Peut-on visiter les alignements de Carnac depuis Vannes ?', en: 'Can you visit the Carnac alignments from Vannes?' }, a: { fr: 'Oui, Carnac est à trente minutes. En mise à disposition à la journée, votre chauffeur combine les mégalithes, la presqu’île de Quiberon et la côte, à prix fixe.', en: 'Yes, Carnac is thirty minutes away. With a full-day hire, your chauffeur combines the megaliths, the Quiberon peninsula and the coast, at a fixed price.' } },
      { q: { fr: 'Combien de temps de Nantes à Vannes ?', en: 'How long from Nantes to Vannes?' }, a: { fr: 'Comptez 1h15. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 1h15. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['rennes', 'nantes', 'quimper'],
  },
  {
    slug: 'le-mans',
    name: { fr: 'Le Mans', en: 'Le Mans' },
    country: { fr: 'France', en: 'France' },
    region: 'france',
    airport: 'Paris-Charles de Gaulle (CDG)',
    airportTransfer: {
      fr: 'L’aéroport de Paris-Charles de Gaulle (CDG) se trouve à 230 km à l’est du Mans : comptez 2h15 par l’autoroute A11. Depuis Nantes-Atlantique (NTE), à 190 km, comptez 1h45. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Paris-Charles de Gaulle Airport (CDG) lies 230 km east of Le Mans: allow 2h15 via the A11 motorway. From Nantes-Atlantique (NTE), 190 km away, allow 1h45. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Célèbre dans le monde entier pour ses 24 Heures, Le Mans cache derrière son circuit une Cité Plantagenêt médiévale exceptionnelle, ceinte de remparts romains parmi les mieux conservés d’Europe. Votre **chauffeur privé au Mans** dessert le centre historique, le circuit et les rendez-vous d’affaires : transferts depuis Paris, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Le Mans est au carrefour des **Pays de la Loire**. Les châteaux de la Loire et Tours sont à une heure au sud, l’abbaye de Solesmes et la Sarthe verte à proximité, Angers à l’ouest. En mise à disposition à la journée, votre chauffeur relie circuit mythique, cité médiévale et châteaux ligériens dans le confort d’une berline privée.',
      ],
      en: [
        'Famous worldwide for its 24 Hours, Le Mans hides behind its circuit an exceptional medieval Plantagenet City, ringed by Roman walls among the best preserved in Europe. Your **private chauffeur in Le Mans** serves the historic centre, the circuit and business meetings: transfers from Paris, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Le Mans is at the crossroads of the **Pays de la Loire**. The Loire châteaux and Tours are an hour to the south, the Solesmes abbey and the green Sarthe nearby, Angers to the west. With a full-day hire, your chauffeur links legendary circuit, medieval city and Loire châteaux in the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Circuit des 24 Heures', en: '24 Hours circuit' }, teaser: { fr: 'Le circuit des 24 Heures, le musée des 24 Heures et sa collection, la ligne droite des Hunaudières. Demi-journée pour les passionnés de sport automobile.', en: 'The 24 Hours circuit, the 24 Hours museum and its collection, the Hunaudières straight. A half-day for motorsport enthusiasts.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '360' },
      { title: { fr: 'Cité Plantagenêt', en: 'Plantagenet City' }, teaser: { fr: 'La cité médiévale et ses maisons à pans de bois, la cathédrale, les remparts romains illuminés. Dépose au centre, promenade dans le vieux Mans.', en: 'The medieval city and its half-timbered houses, the cathedral, the illuminated Roman walls. Drop-off in the centre, a stroll through old Le Mans.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Châteaux de la Loire', en: 'Loire châteaux' }, teaser: { fr: 'À une heure, les châteaux de la vallée de la Loire, Chambord ou Chenonceau, les vignobles. Journée patrimoine Renaissance au sud du Mans.', en: 'An hour away, the châteaux of the Loire valley, Chambord or Chenonceau, the vineyards. A day of Renaissance heritage south of Le Mans.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Sarthe et abbaye de Solesmes', en: 'Sarthe and Solesmes abbey' }, teaser: { fr: 'L’abbaye de Solesmes et son chant grégorien, les villages de la vallée de la Sarthe, la campagne verte. Journée nature et spiritualité.', en: 'The Solesmes abbey and its Gregorian chant, the villages of the Sarthe valley, the green countryside. A day of nature and spirituality.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '540' },
      { title: { fr: 'Soirée mancelle', en: 'Le Mans evening' }, teaser: { fr: 'Dîner dans la Cité Plantagenêt, les remparts romains illuminés le soir, un verre dans la vieille ville. Véhicule à disposition toute la soirée.', en: 'Dinner in the Plantagenet City, the Roman walls illuminated at night, a drink in the old town. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de Paris au Mans ?', en: 'How long from Paris to Le Mans?' }, a: { fr: 'Comptez 2h15 par l’A11. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 2h15 via the A11. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Proposez-vous un service pendant les 24 Heures du Mans ?', en: 'Do you offer a service during the 24 Hours of Le Mans?' }, a: { fr: 'Oui, pendant l’épreuve nous assurons transferts et mises à disposition entre hôtels, circuit et réceptions, avec chauffeurs habitués à l’affluence de l’événement. Réservation anticipée recommandée.', en: 'Yes, during the event we handle transfers and hire between hotels, circuit and receptions, with chauffeurs used to the event’s crowds. Early booking recommended.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['tours', 'angers', 'rennes'],
  },
];

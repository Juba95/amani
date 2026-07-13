/**
 * uk-benelux.ts — Région UK & BENELUX (~50 villes)
 * ─────────────────────────────────────────────────────────────────────────────
 * Royaume-Uni, Irlande, Belgique, Pays-Bas, Luxembourg.
 * Suivre le modèle éditorial des exemples strasbourg/toulouse dans france.ts.
 *
 * Villes attendues (~50) :
 *   UK : london, manchester, birmingham, edinburgh, glasgow, liverpool,
 *        leeds, bristol, oxford, cambridge, bath, brighton, windsor,
 *        stratford-upon-avon, york, canterbury, cotswolds, stonehenge-salisbury,
 *        southampton, cardiff, belfast
 *   Irlande : dublin, cork, galway, killarney, limerick
 *   Belgique : brussels, bruges, ghent, antwerp, liege, namur, waterloo, spa
 *   Pays-Bas : amsterdam, rotterdam, the-hague, utrecht, eindhoven, maastricht,
 *              haarlem, delft, leiden, giethoorn, keukenhof-lisse, zaanse-schans
 *   Luxembourg : luxembourg-city, mondorf-les-bains, vianden, echternach
 */

import type { Destination } from '../types';

export const CITIES: Destination[] = [
  {
    slug: 'bath',
    name: { fr: 'Bath', en: 'Bath' },
    country: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    region: 'uk-benelux',
    airport: 'Bristol (BRS)',
    airportTransfer: {
      fr: 'L’aéroport de Bristol (BRS) se trouve à 32 km à l’ouest de Bath : comptez 40 à 50 minutes de trajet jusqu’au Royal Crescent ou aux thermes romains. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Bristol Airport (BRS) lies 32 km west of Bath: allow 40 to 50 minutes to reach the Royal Crescent or the Roman Baths. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Seule ville du Royaume-Uni inscrite dans son intégralité au patrimoine mondial de l’UNESCO, Bath aligne thermes romains, abbaye gothique et croissants georgiens en pierre dorée. Votre **chauffeur privé à Bath** vous conduit du Royal Crescent au Thermae Bath Spa, des boutiques de Milsom Street aux tables du quartier de l’abbaye. Transferts depuis Bristol ou Heathrow, mise à disposition à l’heure, chaque trajet est confirmé à l’avance, à prix fixe, avec un chauffeur qui connaît les accès du centre historique.',
        'Bath est aussi une base idéale pour rayonner dans le sud-ouest de l’Angleterre. **Stonehenge** se rejoint en une heure, les villages des Cotswolds du sud — Castle Combe, Lacock — en trente minutes, et Bristol, sa cathédrale et son pont suspendu de Clifton sont à vingt kilomètres. En mise à disposition à la journée, votre chauffeur enchaîne les étapes pendant que vous profitez du paysage du Somerset et du Wiltshire.',
      ],
      en: [
        'The only city in the United Kingdom listed in its entirety as a UNESCO World Heritage Site, Bath lines up Roman baths, a Gothic abbey and golden-stone Georgian crescents. Your **private chauffeur in Bath** takes you from the Royal Crescent to the Thermae Bath Spa, from the boutiques of Milsom Street to the restaurants around the abbey. Transfers from Bristol or Heathrow, hourly hire: every journey is confirmed in advance, at a fixed price, with a chauffeur who knows the access routes of the historic centre.',
        'Bath is also an ideal base for exploring the south-west of England. **Stonehenge** is an hour away, the southern Cotswolds villages — Castle Combe, Lacock — thirty minutes, and Bristol, its cathedral and the Clifton Suspension Bridge lie twenty kilometres away. With a full-day chauffeur hire, you move from one stop to the next while enjoying the landscapes of Somerset and Wiltshire.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Bath georgienne et thermes romains', en: 'Georgian Bath and the Roman Baths' },
        teaser: {
          fr: 'Royal Crescent, The Circus, Pulteney Bridge et les thermes romains vieux de deux mille ans, suivis d’un bain sur le toit du Thermae Bath Spa. Votre chauffeur vous dépose au plus près de chaque site du centre piéton.',
          en: 'The Royal Crescent, The Circus, Pulteney Bridge and the two-thousand-year-old Roman Baths, followed by a rooftop soak at the Thermae Bath Spa. Your chauffeur drops you as close as possible to each site of the pedestrian centre.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Stonehenge et Salisbury', en: 'Stonehenge and Salisbury' },
        teaser: {
          fr: 'À 60 km à l’est de Bath, le cercle de pierres le plus célèbre du monde, puis Salisbury, sa cathédrale à la flèche de 123 mètres et son exemplaire de la Magna Carta. Retour par la vallée de l’Avon.',
          en: '60 km east of Bath, the most famous stone circle in the world, then Salisbury, its cathedral with a 123-metre spire and its copy of the Magna Carta. Return through the Avon valley.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Castle Combe et Lacock', en: 'Castle Combe and Lacock' },
        teaser: {
          fr: 'À trente minutes de Bath, deux des plus beaux villages d’Angleterre : Castle Combe et ses cottages de pierre, puis Lacock, son abbaye du XIIIe siècle et ses ruelles connues des tournages de Harry Potter et Downton Abbey.',
          en: 'Thirty minutes from Bath, two of England’s prettiest villages: Castle Combe and its stone cottages, then Lacock, its thirteenth-century abbey and lanes familiar from the Harry Potter and Downton Abbey shoots.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Bristol et le pont de Clifton', en: 'Bristol and the Clifton Suspension Bridge' },
        teaser: {
          fr: 'À 20 km au nord-ouest, la grande voisine de Bath : le pont suspendu de Clifton signé Brunel, le SS Great Britain, les fresques de Banksy et le port historique. Dîner sur les quais avant le retour de nuit.',
          en: '20 km north-west, Bath’s big neighbour: Brunel’s Clifton Suspension Bridge, the SS Great Britain, Banksy’s murals and the historic harbourside. Dinner on the quays before a late-night return.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '490',
      },
      {
        title: { fr: 'Cotswolds du sud à la journée', en: 'Southern Cotswolds day tour' },
        teaser: {
          fr: 'Tetbury et ses antiquaires, Bibury et Arlington Row, Cirencester la capitale des Cotswolds : une journée de collines et de villages de pierre dorée au départ de Bath, avec déjeuner dans un pub de campagne réservé à l’avance.',
          en: 'Tetbury and its antique dealers, Bibury and Arlington Row, Cirencester the capital of the Cotswolds: a day of rolling hills and golden-stone villages from Bath, with lunch at a country pub booked ahead.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Bristol et le centre de Bath ?',
          en: 'How much does a transfer between Bristol Airport and central Bath cost?',
        },
        a: {
          fr: 'Le transfert privé entre Bristol (BRS) et le centre de Bath est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Bristol (BRS) and central Bath is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer un transfert direct entre Heathrow et Bath ?',
          en: 'Can you arrange a direct transfer between Heathrow and Bath?',
        },
        a: {
          fr: 'Oui. Heathrow se trouve à 160 km de Bath, soit environ deux heures de route par la M4. Le trajet est devisé à prix fixe avant le départ, avec accueil en zone d’arrivée, aide aux bagages et arrêt en route sur simple demande.',
          en: 'Yes. Heathrow lies 160 km from Bath, around two hours by road via the M4. The journey is quoted at a fixed price before departure, with a meet-and-greet in the arrivals area, luggage assistance and a stop en route on request.',
        },
      },
      {
        q: {
          fr: 'Le centre historique de Bath est-il accessible en voiture ?',
          en: 'Is the historic centre of Bath accessible by car?',
        },
        a: {
          fr: 'Le cœur de Bath est en grande partie piéton et soumis à une zone air pur (Clean Air Zone). Nos véhicules y sont conformes et votre chauffeur connaît les points de dépose autorisés au plus près des thermes, de l’abbaye et des hôtels du centre.',
          en: 'The heart of Bath is largely pedestrianised and sits within a Clean Air Zone. Our vehicles are compliant, and your chauffeur knows the authorised drop-off points closest to the baths, the abbey and the city-centre hotels.',
        },
      },
    ],
    nearby: [],
  },
  {
    slug: 'brighton',
    name: { fr: 'Brighton', en: 'Brighton' },
    country: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    region: 'uk-benelux',
    airport: 'Gatwick (LGW)',
    airportTransfer: {
      fr: 'L’aéroport de Londres-Gatwick (LGW) se trouve à 40 km au nord de Brighton : comptez 40 à 45 minutes par la M23 pour rejoindre le front de mer ou le Royal Pavilion. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol en temps réel.',
      en: 'London Gatwick Airport (LGW) lies 40 km north of Brighton: allow 40 to 45 minutes via the M23 to reach the seafront or the Royal Pavilion. Your chauffeur waits in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Station balnéaire préférée des Londoniens depuis la Régence, Brighton mêle le Royal Pavilion et ses dômes indo-mauresques, les ruelles commerçantes des Lanes et un front de mer ponctué par le Palace Pier et la tour i360. Votre **chauffeur privé à Brighton** assure vos transferts depuis Gatwick ou Londres, vos soirées sur la côte et vos rendez-vous d’affaires, en berline Mercedes ou van de grande capacité, à prix fixe confirmé avant chaque trajet.',
        'Brighton ouvre aussi sur l’un des plus beaux littoraux d’Angleterre. Les **falaises des Seven Sisters** et Beachy Head se dressent à trente minutes à l’est, les vignobles effervescents du Sussex — Ridgeview, Rathfinny — parsèment les South Downs, et Arundel dresse son château médiéval à quarante minutes à l’ouest. En mise à disposition à la journée, votre chauffeur compose l’itinéraire côtier qui vous ressemble.',
      ],
      en: [
        'London’s favourite seaside escape since the Regency, Brighton blends the Royal Pavilion with its Indo-Saracenic domes, the shopping alleys of The Lanes and a seafront punctuated by the Palace Pier and the i360 tower. Your **private chauffeur in Brighton** handles your transfers from Gatwick or London, your evenings on the coast and your business meetings, in a Mercedes sedan or a full-size van, at a fixed price confirmed before every journey.',
        'Brighton also opens onto one of England’s finest stretches of coastline. The **Seven Sisters cliffs** and Beachy Head rise thirty minutes to the east, the sparkling-wine estates of Sussex — Ridgeview, Rathfinny — dot the South Downs, and Arundel raises its medieval castle forty minutes to the west. With a full-day chauffeur hire, your driver shapes the coastal itinerary that suits you.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Seven Sisters et Beachy Head', en: 'Seven Sisters and Beachy Head' },
        teaser: {
          fr: 'À 35 km à l’est de Brighton, les falaises de craie les plus photographiées d’Angleterre : le belvédère de Birling Gap, le phare de Beachy Head à 162 mètres au-dessus de la Manche, puis le village de pêcheurs d’Alfriston.',
          en: '35 km east of Brighton, the most photographed chalk cliffs in England: the Birling Gap viewpoint, the Beachy Head lighthouse 162 metres above the Channel, then the old smuggling village of Alfriston.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Vignobles effervescents du Sussex', en: 'Sussex sparkling wine estates' },
        teaser: {
          fr: 'Les South Downs produisent des effervescents qui rivalisent avec la Champagne. Visites et dégustations chez Ridgeview et Rathfinny, déjeuner au domaine, pendant que votre chauffeur conduit entre les vignes.',
          en: 'The South Downs produce sparkling wines that rival Champagne. Tours and tastings at Ridgeview and Rathfinny, lunch at the estate, while your chauffeur drives between the vineyards.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Arundel, château et cathédrale', en: 'Arundel, castle and cathedral' },
        teaser: {
          fr: 'À 40 km à l’ouest, la silhouette la plus spectaculaire du Sussex : le château des ducs de Norfolk, habité depuis près de mille ans, ses jardins et la cathédrale néogothique. Retour par les villages des South Downs.',
          en: '40 km west, the most dramatic silhouette in Sussex: the castle of the Dukes of Norfolk, inhabited for almost a thousand years, its gardens and the neo-Gothic cathedral. Return through the South Downs villages.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '490',
      },
      {
        title: { fr: 'Goodwood, moteurs et courses', en: 'Goodwood, motoring and racing' },
        teaser: {
          fr: 'À 50 km de Brighton, le domaine de Goodwood accueille le Festival of Speed, le Revival et l’hippodrome le plus élégant d’Angleterre. Dépose au plus près des enceintes, attente sur place et retour aux horaires que vous fixez.',
          en: '50 km from Brighton, the Goodwood estate hosts the Festival of Speed, the Revival and England’s most elegant racecourse. Drop-off as close as possible to the gates, on-site standby and a return at whatever time you choose.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Soirée Royal Pavilion et Lanes', en: 'Royal Pavilion and Lanes evening' },
        teaser: {
          fr: 'Dîner dans les Lanes ou sur le front de mer, passage devant le Royal Pavilion illuminé, puis les lumières du Palace Pier. Le véhicule vous attend à chaque étape et vous ramène à votre hôtel ou à Londres sans contrainte.',
          en: 'Dinner in The Lanes or on the seafront, a pass by the illuminated Royal Pavilion, then the lights of the Palace Pier. The vehicle waits at every stop and returns you to your hotel or to London with zero hassle.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Gatwick et le centre de Brighton ?',
          en: 'How much does a transfer between Gatwick and central Brighton cost?',
        },
        a: {
          fr: 'Le transfert privé entre Gatwick (LGW) et le centre de Brighton est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard sont inclus.',
          en: 'A private transfer between Gatwick (LGW) and central Brighton is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous des trajets entre Londres et Brighton en soirée ?',
          en: 'Do you cover evening journeys between London and Brighton?',
        },
        a: {
          fr: 'Oui. Brighton se trouve à 85 km au sud de Londres, soit environ 1 h 30 de route. Nous assurons les allers-retours en soirée — dîner, concert au Brighton Centre, événement privé — avec attente sur place et retour de nuit à prix fixe.',
          en: 'Yes. Brighton lies 85 km south of London, around 1 hour 30 minutes by road. We handle evening round trips — dinner, a concert at the Brighton Centre, a private event — with on-site standby and a late-night return at a fixed price.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner les Seven Sisters et un vignoble dans la même journée ?',
          en: 'Can the Seven Sisters and a vineyard be combined in a single day?',
        },
        a: {
          fr: 'Absolument. Les falaises des Seven Sisters et les domaines des South Downs se trouvent à moins de quarante minutes les uns des autres. Votre chauffeur construit l’itinéraire avec vous — falaises le matin, dégustation et déjeuner au domaine l’après-midi — et réserve les visites à l’avance.',
          en: 'Absolutely. The Seven Sisters cliffs and the South Downs estates are within forty minutes of each other. Your chauffeur builds the itinerary with you — cliffs in the morning, tasting and lunch at the estate in the afternoon — and books the visits ahead.',
        },
      },
    ],
    nearby: ['london', 'canterbury', 'windsor'],
  },
  {
    slug: 'windsor',
    name: { fr: 'Windsor', en: 'Windsor' },
    country: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    region: 'uk-benelux',
    airport: 'Heathrow (LHR)',
    airportTransfer: {
      fr: 'L’aéroport de Londres-Heathrow (LHR) se trouve à 11 km à l’est de Windsor : comptez 15 à 20 minutes de trajet jusqu’au château ou aux hôtels du centre. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'London Heathrow Airport (LHR) lies 11 km east of Windsor: allow 15 to 20 minutes to reach the castle or the town-centre hotels. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Résidence royale depuis Guillaume le Conquérant, Windsor s’organise autour du plus grand château habité du monde : la chapelle Saint-Georges, les appartements d’État, la relève de la garde et, de l’autre côté de la Tamise, le collège d’Eton. Votre **chauffeur privé à Windsor** vous y conduit depuis Heathrow en vingt minutes, gère la dépose au plus près des grilles et vous attend pendant la visite, en berline ou van premium, à prix fixe.',
        'À la lisière ouest de Londres, Windsor est aussi une base élégante pour rayonner : **Ascot et son hippodrome royal** à quinze minutes, Henley-on-Thames et la vallée de la Tamise, Oxford à une heure de route. Le Great Park déroule ses 2 000 hectares jusqu’à la statue du Copper Horse, et les tables du Fat Duck à Bray — trois étoiles Michelin — se trouvent à dix minutes. Votre chauffeur orchestre chaque étape.',
      ],
      en: [
        'A royal residence since William the Conqueror, Windsor is built around the largest inhabited castle in the world: St George’s Chapel, the State Apartments, the Changing of the Guard and, across the Thames, Eton College. Your **private chauffeur in Windsor** brings you from Heathrow in twenty minutes, handles the drop-off as close as possible to the gates and waits during your visit, in a premium sedan or van, at a fixed price.',
        'On the western edge of London, Windsor is also an elegant base for touring: **Ascot and its royal racecourse** fifteen minutes away, Henley-on-Thames and the Thames Valley, Oxford an hour by road. The Great Park unrolls its 2,000 hectares up to the Copper Horse statue, and the tables of the Fat Duck in Bray — three Michelin stars — are ten minutes away. Your chauffeur orchestrates every step.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Château de Windsor et Eton', en: 'Windsor Castle and Eton' },
        teaser: {
          fr: 'Les appartements d’État, la chapelle Saint-Georges où reposent dix monarques, la relève de la garde, puis Eton et sa grande rue d’un autre siècle, de l’autre côté du pont. Dépose au plus près des grilles, véhicule en attente.',
          en: 'The State Apartments, St George’s Chapel where ten monarchs rest, the Changing of the Guard, then Eton and its high street from another century, just across the bridge. Drop-off by the gates, vehicle on standby.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Journée aux courses d’Ascot', en: 'A day at Ascot races' },
        teaser: {
          fr: 'À 10 km au sud de Windsor, l’hippodrome le plus prestigieux du monde. Dépose à l’entrée de votre enceinte, attente sur place pendant les courses et retour à l’heure que vous fixez — indispensable pendant le Royal Ascot de juin.',
          en: '10 km south of Windsor, the most prestigious racecourse in the world. Drop-off at your enclosure entrance, on-site standby during the races and a return at the time you choose — essential during Royal Ascot in June.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Oxford et Blenheim Palace', en: 'Oxford and Blenheim Palace' },
        teaser: {
          fr: 'À une heure de Windsor, les collèges d’Oxford — Christ Church, la Bodléienne, le Radcliffe Camera — puis Blenheim Palace, lieu de naissance de Churchill et chef-d’œuvre baroque au cœur d’un parc dessiné par Capability Brown.',
          en: 'An hour from Windsor, the Oxford colleges — Christ Church, the Bodleian, the Radcliffe Camera — then Blenheim Palace, Churchill’s birthplace and a Baroque masterpiece set in parkland designed by Capability Brown.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Hampton Court et la Tamise', en: 'Hampton Court and the Thames' },
        teaser: {
          fr: 'À 25 km à l’est, le palais favori d’Henri VIII : la grande halle Tudor, les cuisines royales, le labyrinthe et les jardins au bord de la Tamise. Retour par Runnymede, la prairie où fut scellée la Magna Carta en 1215.',
          en: '25 km east, Henry VIII’s favourite palace: the Tudor Great Hall, the royal kitchens, the maze and the riverside gardens. Return via Runnymede, the meadow where the Magna Carta was sealed in 1215.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '490',
      },
      {
        title: { fr: 'Dîner au Fat Duck à Bray', en: 'Dinner at the Fat Duck in Bray' },
        teaser: {
          fr: 'À dix minutes de Windsor, le village de Bray aligne deux tables triplement étoilées — le Fat Duck de Heston Blumenthal et le Waterside Inn des frères Roux. Dépose devant la table, attente discrète et retour à votre hôtel.',
          en: 'Ten minutes from Windsor, the village of Bray boasts two three-starred tables — Heston Blumenthal’s Fat Duck and the Roux brothers’ Waterside Inn. Drop-off at the door, discreet standby and a return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Heathrow et Windsor ?',
          en: 'How much does a transfer between Heathrow and Windsor cost?',
        },
        a: {
          fr: 'Le transfert privé entre Heathrow (LHR) et Windsor est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Heathrow (LHR) and Windsor is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Windsor lors d’une escale à Heathrow ?',
          en: 'Can Windsor be visited during a layover at Heathrow?',
        },
        a: {
          fr: 'Oui, c’est l’une de nos demandes les plus fréquentes. Avec une escale de cinq heures ou plus, votre chauffeur vous prend en charge à l’arrivée, vous conduit au château en vingt minutes, vous attend pendant la visite et vous redépose au terminal de départ avec la marge nécessaire.',
          en: 'Yes, it is one of our most frequent requests. With a layover of five hours or more, your chauffeur collects you on arrival, reaches the castle in twenty minutes, waits during your visit and returns you to your departure terminal with time to spare.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous un service dédié pendant le Royal Ascot ?',
          en: 'Do you offer a dedicated service during Royal Ascot?',
        },
        a: {
          fr: 'Oui. Pendant la semaine du Royal Ascot en juin, la circulation autour de l’hippodrome est très encadrée. Nous recommandons de réserver plusieurs semaines à l’avance ; votre chauffeur connaît les accès réservés, dépose au plus près de votre enceinte et reste en attente jusqu’à la dernière course.',
          en: 'Yes. During Royal Ascot week in June, traffic around the racecourse is tightly controlled. We recommend booking several weeks ahead; your chauffeur knows the designated approaches, drops you as close as possible to your enclosure and remains on standby until the last race.',
        },
      },
    ],
    nearby: ['london'],
  },
  {
    slug: 'stratford-upon-avon',
    name: { fr: 'Stratford-upon-Avon', en: 'Stratford-upon-Avon' },
    country: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    region: 'uk-benelux',
    airport: 'Birmingham (BHX)',
    airportTransfer: {
      fr: 'L’aéroport de Birmingham (BHX) se trouve à 40 km au nord de Stratford-upon-Avon : comptez 35 à 45 minutes de trajet jusqu’au centre-ville et aux théâtres de la Royal Shakespeare Company. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Birmingham Airport (BHX) lies 40 km north of Stratford-upon-Avon: allow 35 to 45 minutes to reach the town centre and the Royal Shakespeare Company theatres. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville natale de William Shakespeare, Stratford-upon-Avon conserve la maison où le dramaturge est né en 1564, le cottage d’Anne Hathaway, l’église Holy Trinity où il repose et les scènes de la Royal Shakespeare Company au bord de l’Avon. Votre **chauffeur privé à Stratford-upon-Avon** relie ces sites entre eux, assure vos soirées théâtre avec dépose devant l’entrée et attente jusqu’au rideau final, et gère vos transferts depuis Birmingham ou Londres à prix fixe.',
        'Le Warwickshire qui l’entoure compte parmi les plus belles campagnes d’Angleterre. **Warwick et son château médiéval** se trouvent à quinze minutes, les villages du nord des Cotswolds — Chipping Campden, Broadway — à moins de trente, et Oxford à une heure de route. En mise à disposition à la journée, votre chauffeur compose un itinéraire entre patrimoine élisabéthain, jardins et manoirs, avec tables et visites réservées à l’avance.',
      ],
      en: [
        'William Shakespeare’s birthplace, Stratford-upon-Avon preserves the house where the playwright was born in 1564, Anne Hathaway’s cottage, Holy Trinity Church where he rests and the Royal Shakespeare Company stages on the banks of the Avon. Your **private chauffeur in Stratford-upon-Avon** links these sites together, handles your theatre evenings with a drop-off at the door and standby until the final curtain, and manages your transfers from Birmingham or London at a fixed price.',
        'The surrounding Warwickshire ranks among England’s loveliest countryside. **Warwick and its medieval castle** are fifteen minutes away, the northern Cotswolds villages — Chipping Campden, Broadway — under thirty, and Oxford an hour by road. With a full-day chauffeur hire, your driver shapes an itinerary of Elizabethan heritage, gardens and manor houses, with tables and visits booked in advance.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Sur les pas de Shakespeare', en: 'In Shakespeare’s footsteps' },
        teaser: {
          fr: 'La maison natale de Henley Street, le cottage d’Anne Hathaway à Shottery, New Place et l’église Holy Trinity où repose le dramaturge. Votre chauffeur relie les cinq maisons shakespeariennes sans que vous perdiez une minute.',
          en: 'The Henley Street birthplace, Anne Hathaway’s cottage in Shottery, New Place and Holy Trinity Church where the playwright rests. Your chauffeur links the five Shakespeare houses without you losing a minute.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Soirée à la Royal Shakespeare Company', en: 'An evening at the Royal Shakespeare Company' },
        teaser: {
          fr: 'Dîner au bord de l’Avon puis représentation au Royal Shakespeare Theatre ou au Swan. Dépose devant l’entrée, véhicule en attente pendant le spectacle et retour à votre hôtel — à Stratford, dans les Cotswolds ou à Birmingham.',
          en: 'Dinner on the banks of the Avon, then a performance at the Royal Shakespeare Theatre or the Swan. Drop-off at the entrance, vehicle on standby during the show and a return to your hotel — in Stratford, the Cotswolds or Birmingham.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
      {
        title: { fr: 'Château de Warwick', en: 'Warwick Castle' },
        teaser: {
          fr: 'À 13 km au nord-est, l’un des châteaux médiévaux les mieux conservés d’Angleterre : donjon de Guillaume le Conquérant, remparts, grande halle et spectacles de fauconnerie. Retour par Kenilworth et ses ruines romantiques.',
          en: '13 km north-east, one of England’s best-preserved medieval castles: William the Conqueror’s motte, the ramparts, the Great Hall and falconry displays. Return via Kenilworth and its romantic ruins.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Cotswolds du nord : Broadway et Chipping Campden', en: 'Northern Cotswolds: Broadway and Chipping Campden' },
        teaser: {
          fr: 'À trente minutes au sud, les villages de pierre miel du nord des Cotswolds : la grande rue de Broadway, la halle du XVIIe siècle de Chipping Campden, la tour de Broadway et ses vues sur treize comtés. Déjeuner dans une auberge de village.',
          en: 'Thirty minutes south, the honey-stone villages of the northern Cotswolds: Broadway’s high street, Chipping Campden’s seventeenth-century market hall, Broadway Tower and its views over thirteen counties. Lunch at a village inn.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Blenheim Palace et Oxford', en: 'Blenheim Palace and Oxford' },
        teaser: {
          fr: 'À 50 km au sud-est, le palais baroque des ducs de Marlborough, lieu de naissance de Winston Churchill, puis les collèges d’Oxford en fin de journée. Une journée entre grandeur aristocratique et pierre universitaire.',
          en: '50 km south-east, the Baroque palace of the Dukes of Marlborough, birthplace of Winston Churchill, then the Oxford colleges at the end of the day. A day of aristocratic grandeur and university stone.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Birmingham et Stratford-upon-Avon ?',
          en: 'How much does a transfer between Birmingham Airport and Stratford-upon-Avon cost?',
        },
        a: {
          fr: 'Le transfert privé entre Birmingham (BHX) et Stratford-upon-Avon est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Birmingham (BHX) and Stratford-upon-Avon is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Attendez-vous pendant les représentations de la Royal Shakespeare Company ?',
          en: 'Do you wait during Royal Shakespeare Company performances?',
        },
        a: {
          fr: 'Oui. Pour les soirées théâtre, le véhicule reste en attente pendant toute la représentation et vous reprend devant l’entrée à la sortie. Le retour de nuit vers votre hôtel, les Cotswolds, Birmingham ou Londres est inclus dans le devis à prix fixe.',
          en: 'Yes. For theatre evenings, the vehicle remains on standby throughout the performance and collects you at the entrance afterwards. The late-night return to your hotel, the Cotswolds, Birmingham or London is included in the fixed-price quote.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Stratford-upon-Avon à la journée depuis Londres ?',
          en: 'Can Stratford-upon-Avon be visited as a day trip from London?',
        },
        a: {
          fr: 'Oui. Stratford-upon-Avon se trouve à 160 km au nord-ouest de Londres, soit environ deux heures de route. En aller-retour à la journée, votre chauffeur combine les maisons shakespeariennes avec Warwick ou les Cotswolds du nord, à prix fixe convenu avant le départ.',
          en: 'Yes. Stratford-upon-Avon lies 160 km north-west of London, around two hours by road. As a round-trip day tour, your chauffeur combines the Shakespeare houses with Warwick or the northern Cotswolds, at a fixed price agreed before departure.',
        },
      },
    ],
    nearby: ['birmingham'],
  },
  {
    slug: 'york',
    name: { fr: 'York', en: 'York' },
    country: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    region: 'uk-benelux',
    airport: 'Leeds Bradford (LBA)',
    airportTransfer: {
      fr: 'L’aéroport de Leeds Bradford (LBA) se trouve à 45 km à l’ouest de York : comptez 50 minutes à une heure de trajet jusqu’à la cathédrale ou aux hôtels du centre. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Leeds Bradford Airport (LBA) lies 45 km west of York: allow 50 minutes to an hour to reach the Minster or the city-centre hotels. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Deux mille ans d’histoire tiennent dans les remparts de York : fondations romaines, héritage viking de Jorvik, cathédrale gothique la plus vaste d’Europe du Nord et ruelles médiévales des Shambles. Votre **chauffeur privé à York** vous conduit au plus près du centre historique — largement piéton —, assure vos transferts depuis Leeds Bradford ou Manchester et vos trajets vers les grandes maisons du Yorkshire, en berline ou van premium, à prix fixe confirmé avant chaque course.',
        'York est aussi la porte des paysages les plus spectaculaires du nord de l’Angleterre. **Castle Howard**, décor de Brideshead Revisited, se dresse à vingt-cinq minutes, les landes des North York Moors filent vers Whitby et la côte, et les vallées des Yorkshire Dales déroulent murets de pierre sèche et villages perdus. À la journée, votre chauffeur enchaîne abbayes, manoirs et pubs de campagne au rythme que vous choisissez.',
      ],
      en: [
        'Two thousand years of history sit within York’s walls: Roman foundations, the Viking legacy of Jorvik, the largest Gothic cathedral in northern Europe and the medieval lanes of the Shambles. Your **private chauffeur in York** takes you as close as possible to the largely pedestrianised historic centre, handles your transfers from Leeds Bradford or Manchester and your journeys to Yorkshire’s great houses, in a premium sedan or van, at a fixed price confirmed before every trip.',
        'York is also the gateway to the most dramatic landscapes in the north of England. **Castle Howard**, the setting of Brideshead Revisited, stands twenty-five minutes away, the North York Moors sweep towards Whitby and the coast, and the Yorkshire Dales unroll dry-stone walls and hidden villages. On a full-day hire, your chauffeur strings together abbeys, manor houses and country pubs at whatever pace you choose.',
      ],
    },
    experiences: [
      {
        title: { fr: 'York médiévale : Minster et Shambles', en: 'Medieval York: the Minster and the Shambles' },
        teaser: {
          fr: 'La cathédrale et ses vitraux du XVe siècle, le chemin de ronde des remparts, les Shambles aux façades penchées et le musée viking de Jorvik. Votre chauffeur vous dépose aux portes du centre piéton et reste à disposition.',
          en: 'The Minster and its fifteenth-century stained glass, the walk along the city walls, the leaning façades of the Shambles and the Jorvik Viking Centre. Your chauffeur drops you at the gates of the pedestrian centre and remains on call.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Castle Howard', en: 'Castle Howard' },
        teaser: {
          fr: 'À 25 km au nord-est de York, l’une des plus grandioses demeures d’Angleterre : dôme baroque de Vanbrugh, collections des Howard, jardins et temple des Quatre Vents. Le décor de Brideshead Revisited et de Bridgerton.',
          en: '25 km north-east of York, one of England’s most magnificent houses: Vanbrugh’s Baroque dome, the Howard collections, the gardens and the Temple of the Four Winds. The setting of Brideshead Revisited and Bridgerton.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'North York Moors et Whitby', en: 'The North York Moors and Whitby' },
        teaser: {
          fr: 'À travers les landes de bruyère du parc national jusqu’à Whitby, ses ruines d’abbaye qui inspirèrent Dracula et son port de pêche. Arrêt à Goathland et sur les hauteurs des moors, fish and chips face à la mer du Nord.',
          en: 'Across the heather moorland of the national park to Whitby, its abbey ruins that inspired Dracula and its fishing harbour. Stops at Goathland and on the high moors, fish and chips facing the North Sea.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Fountains Abbey et Harrogate', en: 'Fountains Abbey and Harrogate' },
        teaser: {
          fr: 'À 45 km à l’ouest, la plus vaste abbaye en ruine d’Angleterre, classée à l’UNESCO avec le jardin d’eau de Studley Royal, puis Harrogate, ses thermes victoriens et le thé chez Bettys. Retour par Knaresborough et sa gorge.',
          en: '45 km west, England’s largest monastic ruin, UNESCO-listed with the Studley Royal water garden, then Harrogate, its Victorian spa heritage and tea at Bettys. Return via Knaresborough and its gorge.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Yorkshire Dales', en: 'The Yorkshire Dales' },
        teaser: {
          fr: 'Wharfedale et les ruines de Bolton Abbey, les cascades d’Aysgarth, Grassington et ses ruelles pavées : une journée dans les vallées aux murets de pierre sèche, avec déjeuner dans un pub de village réservé à l’avance.',
          en: 'Wharfedale and the ruins of Bolton Abbey, the Aysgarth Falls, Grassington and its cobbled lanes: a day among dry-stone-walled valleys, with lunch at a village pub booked ahead.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Leeds Bradford et le centre de York ?',
          en: 'How much does a transfer between Leeds Bradford and central York cost?',
        },
        a: {
          fr: 'Le transfert privé entre Leeds Bradford (LBA) et le centre de York est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Leeds Bradford (LBA) and central York is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous aussi les transferts depuis l’aéroport de Manchester vers York ?',
          en: 'Do you also cover transfers from Manchester Airport to York?',
        },
        a: {
          fr: 'Oui. Manchester (MAN) se trouve à 120 km de York, soit environ 1 h 30 par la M62. Le trajet est devisé à prix fixe avant le départ, avec accueil en zone d’arrivée, aide aux bagages et arrêt en route sur simple demande.',
          en: 'Yes. Manchester (MAN) lies 120 km from York, around 1 hour 30 minutes via the M62. The journey is quoted at a fixed price before departure, with a meet-and-greet in the arrivals area, luggage assistance and a stop en route on request.',
        },
      },
      {
        q: {
          fr: 'Le centre historique de York est-il accessible en voiture ?',
          en: 'Is the historic centre of York accessible by car?',
        },
        a: {
          fr: 'Le cœur de York, à l’intérieur des remparts, est en grande partie piéton en journée. Votre chauffeur connaît les points de dépose autorisés au plus près de la cathédrale, des Shambles et des hôtels du centre, et adapte les horaires de prise en charge aux restrictions de circulation.',
          en: 'The heart of York, inside the walls, is largely pedestrianised during the day. Your chauffeur knows the authorised drop-off points closest to the Minster, the Shambles and the central hotels, and times pick-ups around the traffic restrictions.',
        },
      },
    ],
    nearby: ['manchester', 'edinburgh', 'liverpool'],
  },
  {
    slug: 'canterbury',
    name: { fr: 'Canterbury', en: 'Canterbury' },
    country: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    region: 'uk-benelux',
    airport: 'Gatwick (LGW)',
    airportTransfer: {
      fr: 'L’aéroport de Londres-Gatwick (LGW) se trouve à 95 km à l’ouest de Canterbury : comptez 1 h 15 à 1 h 30 de trajet par la M25 et la M20 jusqu’à la cathédrale. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'London Gatwick Airport (LGW) lies 95 km west of Canterbury: allow 1 hour 15 minutes to 1 hour 30 minutes via the M25 and M20 to reach the cathedral. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Siège de l’Église d’Angleterre et but du pèlerinage des Canterbury Tales, Canterbury conserve sa cathédrale classée à l’UNESCO — théâtre du meurtre de Thomas Becket en 1170 —, les ruines de l’abbaye Saint-Augustin et des ruelles médiévales traversées par la Stour. Votre **chauffeur privé à Canterbury** gère vos transferts depuis Gatwick, Londres ou le terminal Eurotunnel de Folkestone, et vos visites dans le Kent, à prix fixe confirmé à l’avance.',
        'Autour de la ville, le « jardin de l’Angleterre » déploie vergers, vignobles et côte crayeuse. Les **falaises blanches de Douvres** et leur château se dressent à trente minutes, les huîtres de Whitstable à quinze, Leeds Castle — « le plus beau château du monde » selon Lord Conway — à trente-cinq. En mise à disposition à la journée, votre chauffeur compose l’itinéraire entre patrimoine, dégustations et bord de mer.',
      ],
      en: [
        'Seat of the Church of England and the destination of the Canterbury Tales pilgrimage, Canterbury preserves its UNESCO-listed cathedral — the scene of Thomas Becket’s murder in 1170 —, the ruins of St Augustine’s Abbey and medieval lanes crossed by the River Stour. Your **private chauffeur in Canterbury** handles your transfers from Gatwick, London or the Folkestone Eurotunnel terminal, and your visits across Kent, at a fixed price confirmed in advance.',
        'Around the city, the Garden of England unfolds orchards, vineyards and a chalk coastline. The **White Cliffs of Dover** and their castle rise thirty minutes away, the Whitstable oyster beds fifteen, Leeds Castle — “the loveliest castle in the world” according to Lord Conway — thirty-five. With a full-day chauffeur hire, your driver shapes the itinerary between heritage, tastings and the seaside.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Cathédrale et Canterbury médiévale', en: 'The cathedral and medieval Canterbury' },
        teaser: {
          fr: 'La cathédrale mère de l’Église anglicane, le lieu du martyre de Becket, le cloître, puis les ruines de l’abbaye Saint-Augustin et la porte de Westgate. Votre chauffeur vous dépose aux abords du centre piéton et reste à disposition.',
          en: 'The mother church of the Anglican Communion, the site of Becket’s martyrdom, the cloister, then the ruins of St Augustine’s Abbey and the Westgate. Your chauffeur drops you at the edge of the pedestrian centre and remains on call.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Douvres : falaises blanches et château', en: 'Dover: the White Cliffs and the castle' },
        teaser: {
          fr: 'À 30 km au sud-est, les falaises de craie qui gardent le détroit et le château médiéval le plus vaste d’Angleterre, avec ses tunnels de guerre creusés sous la garnison. Par temps clair, la côte française se dessine à l’horizon.',
          en: '30 km south-east, the chalk cliffs guarding the Strait and England’s largest medieval castle, with its wartime tunnels dug beneath the garrison. On a clear day, the French coast appears on the horizon.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Whitstable, huîtres et bord de mer', en: 'Whitstable, oysters and the seaside' },
        teaser: {
          fr: 'À 12 km au nord, le port ostréicole qui fournit Londres depuis l’époque romaine : cabanes de pêcheurs, galeries et déjeuner d’huîtres natives face à l’estuaire de la Tamise. Retour par la station balnéaire victorienne de Herne Bay.',
          en: '12 km north, the oyster harbour that has supplied London since Roman times: fishermen’s huts, galleries and a lunch of native oysters facing the Thames Estuary. Return via the Victorian seaside town of Herne Bay.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Leeds Castle et le Kent des jardins', en: 'Leeds Castle and garden Kent' },
        teaser: {
          fr: 'À 35 km à l’ouest, le château posé sur ses deux îles au milieu d’un lac, résidence de six reines médiévales, puis les jardins de Sissinghurst créés par Vita Sackville-West. Une journée dans le jardin de l’Angleterre.',
          en: '35 km west, the castle set on two islands in the middle of a lake, home to six medieval queens, then the Sissinghurst gardens created by Vita Sackville-West. A day in the Garden of England.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Vignobles du Kent : Chapel Down', en: 'Kent vineyards: Chapel Down' },
        teaser: {
          fr: 'Le Kent produit les effervescents anglais les plus primés. Visite et dégustation chez Chapel Down à Tenterden, puis un second domaine — Simpsons ou Gusbourne — avec déjeuner au vignoble, pendant que votre chauffeur conduit.',
          en: 'Kent produces England’s most awarded sparkling wines. A tour and tasting at Chapel Down in Tenterden, then a second estate — Simpsons or Gusbourne — with lunch at the vineyard, while your chauffeur drives.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Gatwick et Canterbury ?',
          en: 'How much does a transfer between Gatwick and Canterbury cost?',
        },
        a: {
          fr: 'Le transfert privé entre Gatwick (LGW) et Canterbury est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Gatwick (LGW) and Canterbury is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les prises en charge à l’Eurotunnel ou au port de Douvres ?',
          en: 'Do you cover pick-ups at the Eurotunnel or the Port of Dover?',
        },
        a: {
          fr: 'Oui. Le terminal Eurotunnel de Folkestone se trouve à 25 km de Canterbury et le port de Douvres à 30 km. Nous suivons l’horaire de votre navette ou de votre traversée comme celui d’un vol, et votre chauffeur vous attend à la sortie, panneau nominatif en main.',
          en: 'Yes. The Folkestone Eurotunnel terminal lies 25 km from Canterbury and the Port of Dover 30 km. We track your shuttle or crossing time just as we would a flight, and your chauffeur waits at the exit with a name board.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter Canterbury et Douvres dans la même journée depuis Londres ?',
          en: 'Can Canterbury and Dover be visited in the same day from London?',
        },
        a: {
          fr: 'Oui, c’est notre itinéraire le plus demandé dans le Kent. Départ de Londres le matin, cathédrale et vieille ville de Canterbury, déjeuner à Whitstable ou dans le centre, falaises blanches et château de Douvres l’après-midi, retour à Londres en début de soirée — le tout à prix fixe.',
          en: 'Yes, it is our most requested Kent itinerary. Morning departure from London, Canterbury’s cathedral and old town, lunch in Whitstable or the city centre, the White Cliffs and Dover Castle in the afternoon, and a return to London in the early evening — all at a fixed price.',
        },
      },
    ],
    nearby: ['london', 'brighton'],
  },
  {
    slug: 'dublin',
    name: { fr: 'Dublin', en: 'Dublin' },
    country: { fr: 'Irlande', en: 'Ireland' },
    region: 'uk-benelux',
    airport: 'Dublin (DUB)',
    airportTransfer: {
      fr: 'L’aéroport de Dublin (DUB) se situe à 10 km au nord du centre : comptez 25 à 35 minutes pour rejoindre Trinity College ou St Stephen’s Green selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Dublin Airport (DUB) lies 10 km north of the city centre: allow 25 to 35 minutes to reach Trinity College or St Stephen’s Green depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale littéraire et siège des grandes entreprises technologiques européennes, Dublin conjugue les pierres géorgiennes de Merrion Square, le Livre de Kells à Trinity College et l’effervescence des Docklands. Votre **chauffeur privé à Dublin** dessert les sièges de Grand Canal Dock, les hôtels de St Stephen’s Green et les tables du quartier de Ballsbridge, en berline Mercedes ou van de grande capacité. Transferts aéroport, mise à disposition à l’heure, trajets vers Belfast ou l’ouest de l’île : chaque déplacement est confirmé à prix fixe.',
        'Dublin est aussi la porte d’entrée idéale de l’Irlande. Les **jardins de Powerscourt et les monts Wicklow** commencent à quarante minutes du centre, la vallée monastique de Glendalough se rejoint en une heure, et les tombes néolithiques de Newgrange — antérieures aux pyramides — dominent la vallée de la Boyne à cinquante kilomètres au nord. Votre chauffeur compose l’itinéraire, réserve les créneaux de visite et vous ramène en ville pour le dîner.',
      ],
      en: [
        'A literary capital and home to Europe’s major technology headquarters, Dublin combines the Georgian stone of Merrion Square, the Book of Kells at Trinity College and the energy of the Docklands. Your **private chauffeur in Dublin** serves the offices of Grand Canal Dock, the hotels of St Stephen’s Green and the restaurants of Ballsbridge, in a Mercedes sedan or a full-size van. Airport transfers, hourly hire, journeys to Belfast or the west of the island: every trip is confirmed at a fixed price.',
        'Dublin is also the ideal gateway to Ireland. The **Powerscourt gardens and the Wicklow Mountains** begin forty minutes from the centre, the monastic valley of Glendalough is an hour away, and the Neolithic tombs of Newgrange — older than the pyramids — overlook the Boyne Valley fifty kilometres to the north. Your chauffeur shapes the itinerary, books the visiting slots and brings you back to the city for dinner.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Wicklow et Glendalough', en: 'Wicklow and Glendalough' },
        teaser: {
          fr: 'Au sud de Dublin, le « jardin de l’Irlande » : les jardins à l’italienne de Powerscourt, la route militaire à travers les tourbières du Sally Gap, puis la vallée monastique de Glendalough et ses deux lacs. Déjeuner à Roundwood.',
          en: 'South of Dublin, the “Garden of Ireland”: the Italianate gardens of Powerscourt, the Military Road across the Sally Gap bogland, then the monastic valley of Glendalough and its two lakes. Lunch in Roundwood.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '740',
      },
      {
        title: { fr: 'Newgrange et la vallée de la Boyne', en: 'Newgrange and the Boyne Valley' },
        teaser: {
          fr: 'À 50 km au nord, le tumulus de Newgrange — 3 200 ans avant notre ère — et le site de Knowth, classés à l’UNESCO. Poursuite vers la colline de Tara, siège des Hauts Rois d’Irlande, et le champ de bataille de la Boyne.',
          en: '50 km north, the Newgrange passage tomb — built around 3200 BC — and the Knowth mounds, both UNESCO-listed. Continue to the Hill of Tara, seat of the High Kings of Ireland, and the Boyne battlefield.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Howth et Malahide', en: 'Howth and Malahide' },
        teaser: {
          fr: 'La péninsule de Howth à 25 minutes du centre : sentier des falaises face à l’île d’Ireland’s Eye, déjeuner de fruits de mer sur le port, puis le château de Malahide et ses jardins botaniques. Retour par la baie de Dublin.',
          en: 'The Howth peninsula, 25 minutes from the centre: the cliff path facing Ireland’s Eye island, a seafood lunch on the harbour, then Malahide Castle and its botanic gardens. Return along Dublin Bay.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Kildare, chevaux et whiskey', en: 'Kildare, horses and whiskey' },
        teaser: {
          fr: 'À 50 km à l’ouest, l’Irish National Stud et ses jardins japonais, cœur de l’élevage irlandais, puis dégustation à la distillerie Kilbeggan ou au Kildare Village pour une parenthèse shopping. L’Irlande des haras à la journée.',
          en: '50 km west, the Irish National Stud and its Japanese Gardens, the heart of Irish horse breeding, followed by a tasting at Kilbeggan Distillery or a shopping stop at Kildare Village. Ireland’s stud country in a day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée dublinoise', en: 'Dublin evening' },
        teaser: {
          fr: 'Dépose devant votre table — Chapter One, Patrick Guilbaud ou une adresse de Temple Bar —, puis les quais de la Liffey, le Ha’penny Bridge et Trinity College illuminés. Le véhicule vous attend, retour à l’hôtel sans contrainte.',
          en: 'Drop-off at your table — Chapter One, Patrick Guilbaud or a Temple Bar address — then the illuminated Liffey quays, Ha’penny Bridge and Trinity College. The vehicle waits for you; effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '380',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Dublin et le centre-ville ?',
          en: 'How much does a transfer between Dublin Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport de Dublin (DUB) et le centre est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Dublin Airport (DUB) and the city centre is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous assurer un trajet entre Dublin et Belfast ou l’ouest de l’Irlande ?',
          en: 'Can you handle a journey between Dublin and Belfast or the west of Ireland?',
        },
        a: {
          fr: 'Oui. Belfast se rejoint en deux heures par l’autoroute M1, Galway et Killarney en deux heures trente à trois heures trente. Ces trajets longue distance sont devisés à l’avance, à prix fixe, avec arrêts possibles en cours de route.',
          en: 'Yes. Belfast is two hours away via the M1 motorway, Galway and Killarney two and a half to three and a half hours. These long-distance journeys are quoted in advance at a fixed price, with stops possible along the way.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition pour les déplacements professionnels dans les Docklands ?',
          en: 'Do you offer hourly hire for business travel in the Docklands?',
        },
        a: {
          fr: 'Oui. La mise à disposition à l’heure ou à la journée est très demandée à Dublin : votre chauffeur enchaîne Grand Canal Dock, l’IFSC et les campus de Sandyford ou Leopardstown, attend entre chaque rendez-vous et s’adapte aux changements d’agenda.',
          en: 'Yes. Hourly or full-day hire is in high demand in Dublin: your chauffeur links Grand Canal Dock, the IFSC and the Sandyford or Leopardstown campuses, waits between each meeting and adapts to schedule changes.',
        },
      },
    ],
    nearby: ['cork', 'galway', 'limerick'],
  },
  {
    slug: 'cork',
    name: { fr: 'Cork', en: 'Cork' },
    country: { fr: 'Irlande', en: 'Ireland' },
    region: 'uk-benelux',
    airport: 'Cork (ORK)',
    airportTransfer: {
      fr: 'L’aéroport de Cork (ORK) se trouve à 8 km au sud du centre : 15 à 20 minutes suffisent pour rejoindre St Patrick’s Street ou l’English Market. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol pour ajuster l’heure de prise en charge.',
      en: 'Cork Airport (ORK) lies 8 km south of the city centre: 15 to 20 minutes is enough to reach St Patrick’s Street or the English Market. Your chauffeur waits in the arrivals hall with a name board and tracks your flight to adjust the pick-up time.',
    },
    intro: {
      fr: [
        'Deuxième ville d’Irlande, bâtie sur une île de la rivière Lee, Cork revendique une identité fière : l’English Market et ses étals depuis 1788, la cathédrale Saint-Finbarr, les clochers de Shandon et une scène gastronomique reconnue comme la plus dense du pays. Votre **chauffeur privé à Cork** relie l’aéroport, les laboratoires pharmaceutiques de Ringaskiddy et les tables du quartier victorien, à prix fixe et en toute discrétion. Berlines et vans premium, chauffeurs anglophones et francophones sur demande.',
        'Autour de Cork, les grands classiques du sud irlandais se succèdent : le **château de Blarney et sa pierre de l’éloquence** à quinze minutes, le port de Cobh — dernière escale du Titanic —, Kinsale et ses façades colorées au bord de l’Atlantique, la distillerie Jameson de Midleton. En mise à disposition à la journée, votre chauffeur enchaîne ces étapes sans que vous touchiez un volant, arrêts photo et tables réservées inclus.',
      ],
      en: [
        'Ireland’s second city, built on an island in the River Lee, Cork wears its pride openly: the English Market trading since 1788, Saint Fin Barre’s Cathedral, the Shandon bells and a food scene regarded as the densest in the country. Your **private chauffeur in Cork** links the airport, the pharmaceutical plants of Ringaskiddy and the tables of the Victorian Quarter, at a fixed price and with complete discretion. Premium sedans and vans, English- and French-speaking chauffeurs on request.',
        'Around Cork, the great classics of southern Ireland follow one another: **Blarney Castle and its Stone of Eloquence** fifteen minutes away, the harbour town of Cobh — the Titanic’s last port of call — Kinsale and its coloured façades on the Atlantic, and the Jameson Distillery at Midleton. With a full-day chauffeur hire you move between them without ever touching a steering wheel, photo stops and booked tables included.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Blarney Castle et ses jardins', en: 'Blarney Castle and its gardens' },
        teaser: {
          fr: 'À 8 km au nord-ouest de Cork, la forteresse du XVe siècle et sa célèbre pierre de l’éloquence, entourée de 24 hectares de jardins — Poison Garden, allée des fougères. Arrêt au Blarney Woollen Mills au retour.',
          en: '8 km north-west of Cork, the fifteenth-century keep and its famous Stone of Eloquence, set in 24 hectares of gardens — the Poison Garden, the fern walks. A stop at Blarney Woollen Mills on the way back.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Cobh, sur les traces du Titanic', en: 'Cobh, in the wake of the Titanic' },
        teaser: {
          fr: 'À 24 km à l’est, le port d’où le Titanic appareilla pour la dernière fois en 1912 : la Titanic Experience, la cathédrale Saint-Colman dominant la rade, les maisons colorées de West View. Retour par l’île de Fota et sa faune.',
          en: '24 km east, the harbour from which the Titanic sailed for the last time in 1912: the Titanic Experience, Saint Colman’s Cathedral above the bay, the coloured houses of West View. Return via Fota Island and its wildlife park.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '400',
      },
      {
        title: { fr: 'Kinsale et la côte sud', en: 'Kinsale and the south coast' },
        teaser: {
          fr: 'À 25 km au sud, la capitale gastronomique de l’Irlande : ruelles colorées, fort Charles en étoile au-dessus de l’estuaire, déjeuner de fruits de mer face au port. Poursuite possible vers le phare de l’Old Head of Kinsale.',
          en: '25 km south, Ireland’s gourmet capital: colourful lanes, the star-shaped Charles Fort above the estuary, a seafood lunch overlooking the harbour. Continue to the Old Head of Kinsale lighthouse if you wish.',
        },
        duration: { fr: 'Demi-journée ou journée', en: 'Half day or full day' },
        price: '450',
      },
      {
        title: { fr: 'Midleton et la distillerie Jameson', en: 'Midleton and the Jameson Distillery' },
        teaser: {
          fr: 'À 20 km à l’est de Cork, la maison mère du whiskey irlandais : visite des chais historiques de Midleton, dégustation comparée, puis les jardins de Ballymaloe et la côte d’East Cork. Votre chauffeur conduit, vous dégustez.',
          en: '20 km east of Cork, the home of Irish whiskey: a tour of the historic Midleton warehouses, a comparative tasting, then the Ballymaloe gardens and the East Cork coastline. Your chauffeur drives; you taste.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'West Cork et Mizen Head', en: 'West Cork and Mizen Head' },
        teaser: {
          fr: 'La côte sauvage du comté : Clonakilty, Skibbereen, le pont suspendu de Mizen Head — point le plus au sud-ouest de l’Irlande — et les criques de Barleycove. Une journée entière d’Atlantique, déjeuner dans un pub de village.',
          en: 'The county’s wild coastline: Clonakilty, Skibbereen, the Mizen Head footbridge — Ireland’s most south-westerly point — and the coves of Barleycove. A full day of Atlantic scenery, lunch in a village pub.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '820',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Cork et le centre-ville ?',
          en: 'How much does a transfer between Cork Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport de Cork (ORK) et le centre est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Cork Airport (ORK) and the city centre is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une excursion sur le Ring of Kerry depuis Cork ?',
          en: 'Can you arrange a Ring of Kerry excursion from Cork?',
        },
        a: {
          fr: 'Oui. Killarney se rejoint en une heure trente depuis Cork ; le Ring of Kerry complet représente ensuite une boucle de 179 km. Nous recommandons une journée longue au départ de Cork, ou une nuit à Killarney pour un rythme plus confortable — les deux formules sont devisées à prix fixe.',
          en: 'Yes. Killarney is an hour and a half from Cork; the full Ring of Kerry then adds a 179 km loop. We recommend a long day from Cork, or an overnight stay in Killarney for a gentler pace — both options are quoted at a fixed price.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous les sites industriels et pharmaceutiques autour de Cork ?',
          en: 'Do you serve the industrial and pharmaceutical sites around Cork?',
        },
        a: {
          fr: 'Oui. Ringaskiddy, Little Island, Carrigtwohill et Model Farm Road font partie de nos dessertes régulières. En mise à disposition, votre chauffeur enchaîne les sites, attend entre chaque rendez-vous et s’adapte aux changements d’agenda en temps réel.',
          en: 'Yes. Ringaskiddy, Little Island, Carrigtwohill and Model Farm Road are among our regular destinations. With hourly hire, your chauffeur links the sites, waits between each meeting and adapts to schedule changes in real time.',
        },
      },
    ],
    nearby: ['killarney', 'limerick', 'dublin'],
  },
  {
    slug: 'galway',
    name: { fr: 'Galway', en: 'Galway' },
    country: { fr: 'Irlande', en: 'Ireland' },
    region: 'uk-benelux',
    airport: 'Shannon (SNN)',
    airportTransfer: {
      fr: 'L’aéroport de Shannon (SNN), principale porte d’entrée de l’ouest irlandais, se trouve à 90 km au sud de Galway : comptez environ 1 heure par la M18 pour rejoindre Eyre Square. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Shannon Airport (SNN), the main gateway to the west of Ireland, lies 90 km south of Galway: allow about 1 hour via the M18 to reach Eyre Square. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale culturelle de l’ouest irlandais, Galway aligne ses façades colorées le long de la Corrib, entre le Quartier latin, l’arche espagnole et les pubs à musique de Quay Street. Votre **chauffeur privé à Galway** assure les transferts depuis Shannon ou Dublin, les mises à disposition pour le festival international des arts en juillet ou les courses de Ballybrit, et les trajets d’affaires vers les campus technologiques de Parkmore. Berlines et vans premium, prix fixes confirmés à l’avance.',
        'Galway est surtout le point de départ des plus grands paysages d’Irlande. Les **falaises de Moher**, hautes de 214 mètres, se rejoignent en une heure trente par le désert calcaire du Burren ; au nord, le **Connemara** déroule ses tourbières, ses lacs et l’abbaye de Kylemore. Votre chauffeur compose l’itinéraire selon la lumière et la marée, réserve les visites et vous ramène pour le dîner sur les quais.',
      ],
      en: [
        'The cultural capital of the Irish west, Galway lines its coloured façades along the Corrib, between the Latin Quarter, the Spanish Arch and the music pubs of Quay Street. Your **private chauffeur in Galway** handles transfers from Shannon or Dublin, hourly hire for the International Arts Festival in July or the Ballybrit races, and business journeys to the Parkmore technology campuses. Premium sedans and vans, fixed prices confirmed in advance.',
        'Above all, Galway is the departure point for Ireland’s greatest landscapes. The **Cliffs of Moher**, 214 metres high, are an hour and a half away across the limestone desert of the Burren; to the north, **Connemara** unrolls its boglands, its lakes and Kylemore Abbey. Your chauffeur shapes the route around the light and the tide, books the visits and brings you back for dinner on the quays.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Falaises de Moher et le Burren', en: 'Cliffs of Moher and the Burren' },
        teaser: {
          fr: 'À 75 km au sud de Galway, 8 km de falaises dressées à 214 mètres au-dessus de l’Atlantique, la tour O’Brien et les îles d’Aran à l’horizon. Retour par le plateau calcaire du Burren, le dolmen de Poulnabrone et Ballyvaughan.',
          en: '75 km south of Galway, 8 km of cliffs rising 214 metres above the Atlantic, O’Brien’s Tower and the Aran Islands on the horizon. Return across the Burren limestone plateau, the Poulnabrone dolmen and Ballyvaughan.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '780',
      },
      {
        title: { fr: 'Connemara et l’abbaye de Kylemore', en: 'Connemara and Kylemore Abbey' },
        teaser: {
          fr: 'Tourbières, lacs noirs et moutons à tête noire : la route de Clifden par Maam Cross et le fjord de Killary, puis l’abbaye néogothique de Kylemore et son jardin victorien clos. L’ouest irlandais dans sa version la plus sauvage.',
          en: 'Boglands, dark lakes and black-faced sheep: the Clifden road via Maam Cross and Killary fjord, then the neo-Gothic Kylemore Abbey and its walled Victorian garden. The Irish west at its wildest.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Îles d’Aran depuis Rossaveal', en: 'Aran Islands from Rossaveal' },
        teaser: {
          fr: 'Votre chauffeur vous dépose à l’embarcadère de Rossaveal, à 40 minutes de Galway, pour la traversée vers Inis Mór : le fort préhistorique de Dún Aonghasa au bord de falaises de 100 mètres. Véhicule à quai à votre retour.',
          en: 'Your chauffeur drops you at the Rossaveal pier, 40 minutes from Galway, for the crossing to Inis Mór: the prehistoric fort of Dún Aonghasa perched on 100-metre cliffs. The vehicle is waiting on the quay when you return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '640',
      },
      {
        title: { fr: 'Côte du Wild Atlantic Way', en: 'Wild Atlantic Way coastal drive' },
        teaser: {
          fr: 'De Galway à la plage corallienne de Carraroe par la côte du Connemara gaélique : Spiddal et ses ateliers d’artisans, les criques de Lettermore, la lumière changeante sur la baie. Arrêts photo au gré de la météo.',
          en: 'From Galway to the coral strand at Carraroe along the coast of Gaelic Connemara: Spiddal and its craft studios, the Lettermore inlets, the shifting light on the bay. Photo stops as the weather allows.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '430',
      },
      {
        title: { fr: 'Soirée à Galway', en: 'Galway evening' },
        teaser: {
          fr: 'Dépose devant votre table — Aniar, étoilé Michelin, ou une adresse de Kirwan’s Lane —, puis musique traditionnelle dans les pubs de Quay Street. Le véhicule vous attend et vous raccompagne à votre hôtel, même tard.',
          en: 'Drop-off at your table — Michelin-starred Aniar or an address on Kirwan’s Lane — followed by traditional music in the Quay Street pubs. The vehicle waits and takes you back to your hotel, however late.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '360',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Shannon et Galway ?',
          en: 'How much does a transfer between Shannon Airport and Galway cost?',
        },
        a: {
          fr: 'Le transfert privé entre Shannon (SNN) et le centre de Galway — environ 90 km, 1 heure de route — est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil avec panneau nominatif, le suivi du vol en temps réel et l’attente offerte en cas de retard.',
          en: 'A private transfer between Shannon (SNN) and central Galway — around 90 km, a 1-hour drive — is charged at a fixed price, confirmed at booking. It includes a name-board meet-and-greet, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter les falaises de Moher et le Connemara lors du même séjour ?',
          en: 'Can the Cliffs of Moher and Connemara be visited during the same stay?',
        },
        a: {
          fr: 'Oui, mais sur deux journées distinctes : chaque circuit représente une journée complète dans des directions opposées. Depuis Galway, votre chauffeur peut enchaîner les deux sur deux jours consécutifs, avec un itinéraire ajusté à la météo atlantique.',
          en: 'Yes, but as two separate days: each circuit is a full day in opposite directions. From Galway, your chauffeur can run both on consecutive days, with the route adjusted to the Atlantic weather.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts depuis Dublin vers Galway ?',
          en: 'Do you provide transfers from Dublin to Galway?',
        },
        a: {
          fr: 'Oui. Dublin et son aéroport se rejoignent en 2 heures 30 environ par la M6. Le trajet est devisé à prix fixe, avec arrêts possibles à Athlone ou au monastère de Clonmacnoise en cours de route.',
          en: 'Yes. Dublin and its airport are about 2 hours 30 away via the M6. The journey is quoted at a fixed price, with optional stops at Athlone or the Clonmacnoise monastery along the way.',
        },
      },
    ],
    nearby: ['limerick', 'dublin', 'killarney'],
  },
  {
    slug: 'killarney',
    name: { fr: 'Killarney', en: 'Killarney' },
    country: { fr: 'Irlande', en: 'Ireland' },
    region: 'uk-benelux',
    airport: 'Kerry (KIR)',
    airportTransfer: {
      fr: 'L’aéroport de Kerry (KIR), à Farranfore, se trouve à 15 km au nord de Killarney : comptez 20 minutes de trajet jusqu’au centre-ville. Depuis l’aéroport de Cork (ORK), à 90 km, prévoyez 1 heure 15. Dans les deux cas, votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Kerry Airport (KIR), at Farranfore, lies 15 km north of Killarney: allow 20 minutes to reach the town centre. From Cork Airport (ORK), 90 km away, allow 1 hour 15. In both cases your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Aux portes du parc national le plus ancien d’Irlande, Killarney est la capitale touristique du Kerry : lacs encaissés sous les monts MacGillycuddy’s Reeks, manoir victorien de Muckross, cathédrale néogothique de Pugin. Votre **chauffeur privé à Killarney** assure les transferts depuis Kerry, Cork ou Shannon, les mises à disposition pour les hôtels cinq étoiles de la région — Killarney Park, Europe Hotel — et les liaisons vers les golfs de Killarney et de Waterville. Prix fixes, véhicules premium, ponctualité irlandaise comprise.',
        'Killarney est le point de départ naturel du **Ring of Kerry**, boucle de 179 km entre océan et montagnes, et de la péninsule de Dingle chère à la carte postale irlandaise. Le Gap of Dunloe, les jardins de Muckross et le point de vue de Ladies View se rejoignent en quelques minutes. Votre chauffeur connaît le sens de circulation des cars — et l’évite : départs décalés, routes secondaires, arrêts au calme.',
      ],
      en: [
        'At the gateway to Ireland’s oldest national park, Killarney is the tourist capital of Kerry: lakes framed by the MacGillycuddy’s Reeks, the Victorian manor of Muckross, Pugin’s neo-Gothic cathedral. Your **private chauffeur in Killarney** covers transfers from Kerry, Cork or Shannon, hourly hire for the region’s five-star hotels — the Killarney Park, the Europe Hotel — and journeys to the Killarney and Waterville golf links. Fixed prices, premium vehicles, punctuality included.',
        'Killarney is the natural starting point of the **Ring of Kerry**, a 179 km loop between ocean and mountains, and of the Dingle Peninsula so dear to the Irish postcard. The Gap of Dunloe, the Muckross gardens and the Ladies View lookout are minutes away. Your chauffeur knows which way the coaches drive — and avoids them: staggered departures, back roads, quiet stops.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Ring of Kerry intégral', en: 'The full Ring of Kerry' },
        teaser: {
          fr: 'La boucle de 179 km dans le sens inverse des cars : Killorglin, Cahersiveen, le point de vue sur les îles Skellig, Waterville, le col de Coomakista, Sneem et Ladies View. Déjeuner face à l’Atlantique, arrêts photo à la demande.',
          en: 'The 179 km loop driven against the coach flow: Killorglin, Cahersiveen, the Skellig Islands viewpoint, Waterville, the Coomakista pass, Sneem and Ladies View. Lunch facing the Atlantic, photo stops on request.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '840',
      },
      {
        title: { fr: 'Péninsule de Dingle et Slea Head', en: 'Dingle Peninsula and Slea Head' },
        teaser: {
          fr: 'À 65 km à l’ouest, le port de Dingle et ses façades peintes, puis la route de Slea Head : oratoire de Gallarus, huttes de pierre, îles Blasket au large. La péninsule préférée des Irlandais, à votre rythme.',
          en: '65 km west, Dingle harbour and its painted façades, then the Slea Head Drive: the Gallarus Oratory, beehive stone huts, the Blasket Islands offshore. Ireland’s favourite peninsula, at your own pace.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '820',
      },
      {
        title: { fr: 'Gap of Dunloe et lacs de Killarney', en: 'Gap of Dunloe and the Lakes of Killarney' },
        teaser: {
          fr: 'Le défilé glaciaire entre les Reeks et la Purple Mountain, à 20 minutes du centre : montée en calèche ou à pied jusqu’au lac Auger, puis les trois lacs du parc national et le château de Ross. Killarney en version essentielle.',
          en: 'The glacial defile between the Reeks and Purple Mountain, 20 minutes from town: up by jaunting car or on foot to Auger Lake, then the national park’s three lakes and Ross Castle. Killarney at its most essential.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '410',
      },
      {
        title: { fr: 'Muckross House et Torc Waterfall', en: 'Muckross House and Torc Waterfall' },
        teaser: {
          fr: 'Le manoir victorien de 1843 qui reçut la reine Victoria, ses jardins au bord du Muckross Lake, l’abbaye franciscaine du XVe siècle et la cascade de Torc sous les chênes. Un condensé du parc national en une demi-journée.',
          en: 'The 1843 Victorian manor that hosted Queen Victoria, its gardens on Muckross Lake, the fifteenth-century Franciscan friary and Torc Waterfall beneath the oaks. The national park distilled into half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '380',
      },
      {
        title: { fr: 'Golfs du Kerry', en: 'The golf links of Kerry' },
        teaser: {
          fr: 'Killarney Golf & Fishing Club au bord du Lough Leane, Waterville Golf Links battu par l’Atlantique, Tralee dessiné par Arnold Palmer : votre chauffeur dépose sacs et joueurs au départ et vous attend au club-house.',
          en: 'Killarney Golf & Fishing Club on Lough Leane, Waterville Golf Links whipped by the Atlantic, Tralee designed by Arnold Palmer: your chauffeur delivers players and bags to the first tee and waits at the clubhouse.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Kerry ou de Cork et Killarney ?',
          en: 'How much does a transfer between Kerry or Cork Airport and Killarney cost?',
        },
        a: {
          fr: 'Le transfert privé depuis Kerry (KIR, 20 minutes) ou Cork (ORK, 1 heure 15) est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil avec panneau nominatif, le suivi du vol en temps réel et l’attente offerte en cas de retard.',
          en: 'A private transfer from Kerry (KIR, 20 minutes) or Cork (ORK, 1 hour 15) is charged at a fixed price, confirmed at booking. It includes a name-board meet-and-greet, real-time flight tracking and complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Le Ring of Kerry se fait-il en une journée avec chauffeur ?',
          en: 'Can the Ring of Kerry be done in one day with a chauffeur?',
        },
        a: {
          fr: 'Oui. Comptez 7 à 9 heures avec les arrêts, déjeuner compris. Votre chauffeur part dans le sens inverse des autocars pour éviter les convois, et adapte les haltes — Skellig Ring, Valentia Island — à la lumière et à vos envies.',
          en: 'Yes. Allow 7 to 9 hours including stops and lunch. Your chauffeur drives against the coach flow to avoid the convoys, and adapts the stops — the Skellig Ring, Valentia Island — to the light and to your wishes.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser un circuit de plusieurs jours dans le sud-ouest irlandais ?',
          en: 'Can you organise a multi-day tour of south-west Ireland?',
        },
        a: {
          fr: 'Absolument. Killarney, Dingle, Kinsale et Cork s’enchaînent naturellement sur trois à cinq jours, avec le même chauffeur et le même véhicule. L’itinéraire, les hôtels et les visites sont définis avec vous à l’avance, à prix fixe global.',
          en: 'Absolutely. Killarney, Dingle, Kinsale and Cork flow naturally into a three- to five-day itinerary, with the same chauffeur and vehicle throughout. Route, hotels and visits are agreed with you in advance, at an overall fixed price.',
        },
      },
    ],
    nearby: ['cork', 'limerick', 'galway'],
  },
  {
    slug: 'limerick',
    name: { fr: 'Limerick', en: 'Limerick' },
    country: { fr: 'Irlande', en: 'Ireland' },
    region: 'uk-benelux',
    airport: 'Shannon (SNN)',
    airportTransfer: {
      fr: 'L’aéroport de Shannon (SNN) se trouve à 24 km à l’ouest de Limerick : comptez 20 à 25 minutes par la N18 pour rejoindre le centre et les quais du Shannon. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Shannon Airport (SNN) lies 24 km west of Limerick: allow 20 to 25 minutes via the N18 to reach the city centre and the Shannon quays. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Troisième ville d’Irlande, posée sur le fleuve Shannon, Limerick assemble le château du roi Jean sur King’s Island, la Milk Market du samedi, le Hunt Museum et le stade Thomond Park, temple du rugby du Munster. Votre **chauffeur privé à Limerick** relie l’aéroport de Shannon, les campus de l’université et les zones d’affaires de Raheen et Castletroy, à prix fixe et en berline ou van premium. Chauffeurs anglophones et francophones sur demande.',
        'La position de Limerick en fait une base idéale pour rayonner dans l’ouest : le **village d’Adare et ses chaumières**, souvent cité parmi les plus beaux d’Irlande, se trouve à 16 km ; le château médiéval de Bunratty à 15 minutes ; les **falaises de Moher** à 80 km par le comté de Clare. Votre chauffeur enchaîne ces étapes à la journée, réservations et arrêts photo compris.',
      ],
      en: [
        'Ireland’s third city, set on the River Shannon, Limerick brings together King John’s Castle on King’s Island, the Saturday Milk Market, the Hunt Museum and Thomond Park, the cathedral of Munster rugby. Your **private chauffeur in Limerick** links Shannon Airport, the university campuses and the business parks of Raheen and Castletroy, at a fixed price in a premium sedan or van. English- and French-speaking chauffeurs on request.',
        'Limerick’s position makes it an ideal base for the west: the **thatched village of Adare**, often listed among Ireland’s prettiest, lies 16 km away; the medieval Bunratty Castle is 15 minutes from town; the **Cliffs of Moher** are 80 km away across County Clare. Your chauffeur strings these stops into a full day, bookings and photo halts included.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Falaises de Moher par le Clare', en: 'Cliffs of Moher through Clare' },
        teaser: {
          fr: 'À 80 km au nord-ouest, les falaises de 214 mètres face à l’Atlantique, précédées du village de musiciens de Doolin et suivies du plateau du Burren et du dolmen de Poulnabrone. Déjeuner de crabe à Doolin ou Lahinch.',
          en: '80 km north-west, the 214-metre cliffs facing the Atlantic, preceded by the musicians’ village of Doolin and followed by the Burren plateau and the Poulnabrone dolmen. A crab lunch in Doolin or Lahinch.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '760',
      },
      {
        title: { fr: 'Adare, le plus joli village d’Irlande', en: 'Adare, Ireland’s prettiest village' },
        teaser: {
          fr: 'À 16 km au sud-ouest, chaumières fleuries, abbaye augustinienne et boutiques d’artisans le long de la Maigue. Déjeuner ou thé au manoir néogothique d’Adare Manor, hôte de la Ryder Cup 2027. Retour par le château de Desmond.',
          en: '16 km south-west, flowered thatched cottages, an Augustinian friary and craft shops along the Maigue. Lunch or afternoon tea at the neo-Gothic Adare Manor, host of the 2027 Ryder Cup. Return via Desmond Castle.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Bunratty Castle et Folk Park', en: 'Bunratty Castle and Folk Park' },
        teaser: {
          fr: 'À mi-chemin de Shannon, le donjon de 1425 le mieux conservé d’Irlande et son village reconstitué du XIXe siècle : cottages, forge, échoppes. En soirée, banquet médiéval dans la grande salle du château, sur réservation.',
          en: 'Halfway to Shannon, Ireland’s best-preserved 1425 tower house and its recreated nineteenth-century village: cottages, forge, shopfronts. In the evening, a medieval banquet in the castle’s great hall, by reservation.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Loop Head et la côte du Clare', en: 'Loop Head and the Clare coast' },
        teaser: {
          fr: 'La péninsule confidentielle du sud du Clare : Kilkee et ses falaises en fer à cheval, le phare de Loop Head face à l’estuaire du Shannon, dauphins en saison. Une journée d’Atlantique sans les foules de Moher.',
          en: 'South Clare’s confidential peninsula: Kilkee and its horseshoe cliffs, the Loop Head lighthouse facing the Shannon estuary, dolphins in season. A full Atlantic day without the Moher crowds.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '720',
      },
      {
        title: { fr: 'Limerick géorgien et Thomond Park', en: 'Georgian Limerick and Thomond Park' },
        teaser: {
          fr: 'Le château du roi Jean, la cathédrale St Mary de 1168, les rues géorgiennes de Newtown Pery et le Hunt Museum, puis Thomond Park les soirs de match du Munster — dépose au stade, véhicule à la sortie.',
          en: 'King John’s Castle, St Mary’s Cathedral of 1168, the Georgian streets of Newtown Pery and the Hunt Museum, then Thomond Park on Munster match nights — stadium drop-off, vehicle waiting at the final whistle.',
        },
        duration: { fr: 'Demi-journée ou soirée', en: 'Half day or evening' },
        price: '340',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Shannon et Limerick ?',
          en: 'How much does a transfer between Shannon Airport and Limerick cost?',
        },
        a: {
          fr: 'Le transfert privé entre Shannon (SNN) et le centre de Limerick — 24 km, 20 à 25 minutes — est facturé à prix fixe, confirmé à la réservation. Accueil avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Shannon (SNN) and central Limerick — 24 km, 20 to 25 minutes — is charged at a fixed price, confirmed at booking. A name-board meet-and-greet, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers Adare Manor et les golfs de la région ?',
          en: 'Do you provide transfers to Adare Manor and the region’s golf courses?',
        },
        a: {
          fr: 'Oui. Adare Manor, Dromoland Castle, Ballybunion et Lahinch font partie de nos dessertes régulières depuis Limerick et Shannon. Nous transportons les sacs de golf sans supplément dans nos vans, et le chauffeur attend au club-house pendant votre parcours.',
          en: 'Yes. Adare Manor, Dromoland Castle, Ballybunion and Lahinch are among our regular routes from Limerick and Shannon. Golf bags travel free in our vans, and the chauffeur waits at the clubhouse during your round.',
        },
      },
      {
        q: {
          fr: 'Limerick est-elle une bonne base pour visiter l’ouest de l’Irlande ?',
          en: 'Is Limerick a good base for exploring the west of Ireland?',
        },
        a: {
          fr: 'Excellente. Les falaises de Moher, le Burren, Galway et même Killarney se rejoignent en 1 à 2 heures de route. En mise à disposition à la journée, votre chauffeur compose un itinéraire différent chaque jour depuis votre hôtel.',
          en: 'Excellent. The Cliffs of Moher, the Burren, Galway and even Killarney are all within 1 to 2 hours by road. With full-day hire, your chauffeur builds a different itinerary from your hotel each day.',
        },
      },
    ],
    nearby: ['galway', 'killarney', 'cork'],
  },
  {
    slug: 'amsterdam',
    name: { fr: 'Amsterdam', en: 'Amsterdam' },
    country: { fr: 'Pays-Bas', en: 'Netherlands' },
    region: 'uk-benelux',
    airport: 'Amsterdam-Schiphol (AMS)',
    airportTransfer: {
      fr: 'L’aéroport d’Amsterdam-Schiphol (AMS) se trouve à 18 km au sud-ouest du centre : comptez 25 à 35 minutes pour rejoindre le Museumplein ou la ceinture des canaux. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Amsterdam-Schiphol Airport (AMS) lies 18 km south-west of the centre: allow 25 to 35 minutes to reach Museumplein or the canal ring. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale des Pays-Bas et ville-musée à ciel ouvert, Amsterdam déploie sa ceinture de canaux du XVIIᵉ siècle, classée à l’UNESCO, entre maisons de marchands et ponts de brique. Votre **chauffeur privé à Amsterdam** vous conduit du Rijksmuseum au quartier du Jordaan, de la Zuidas d’affaires aux quais de l’IJ, en berline Mercedes ou van de grande capacité. Transferts Schiphol, mise à disposition à l’heure, trajets vers Rotterdam ou La Haye : chaque déplacement est confirmé à prix fixe, avec un chauffeur qui maîtrise les accès d’une ville largement piétonne.',
        'Amsterdam est aussi le point de départ le plus commode des Pays-Bas. Les **moulins du Zaanse Schans** sont à vingt-cinq minutes, Haarlem et les champs de fleurs de la Bollenstreek à moins d’une demi-heure, Giethoorn et ses canaux sans voitures à une heure et demie. Au printemps, le parc du Keukenhof impose une logistique précise — départ matinal, dépose au plus près des entrées — que votre chauffeur organise sans que vous ayez à y penser.',
      ],
      en: [
        'Capital of the Netherlands and an open-air museum city, Amsterdam unfolds its UNESCO-listed seventeenth-century canal ring between merchants’ houses and brick bridges. Your **private chauffeur in Amsterdam** takes you from the Rijksmuseum to the Jordaan district, from the Zuidas business district to the IJ waterfront, in a Mercedes sedan or a full-size van. Schiphol transfers, hourly hire, journeys to Rotterdam or The Hague: every trip is confirmed at a fixed price, with a chauffeur who knows the access routes of a largely pedestrian city.',
        'Amsterdam is also the most convenient starting point in the Netherlands. The **windmills of Zaanse Schans** are twenty-five minutes away, Haarlem and the flower fields of the Bollenstreek under half an hour, Giethoorn and its car-free canals an hour and a half. In spring, Keukenhof park demands precise logistics — an early departure, drop-off as close as possible to the entrances — which your chauffeur arranges so you never have to think about it.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Keukenhof et les champs de tulipes', en: 'Keukenhof and the tulip fields' },
        teaser: {
          fr: 'De mi-mars à mi-mai, le plus grand parc floral du monde s’ouvre à 35 km d’Amsterdam : sept millions de bulbes sur 32 hectares. Départ matinal pour éviter l’affluence, détour par les champs colorés de la Bollenstreek entre Lisse et Hillegom.',
          en: 'From mid-March to mid-May, the world’s largest flower garden opens 35 km from Amsterdam: seven million bulbs across 32 hectares. Early departure to beat the crowds, with a detour through the coloured fields of the Bollenstreek between Lisse and Hillegom.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Zaanse Schans, Volendam et Marken', en: 'Zaanse Schans, Volendam and Marken' },
        teaser: {
          fr: 'Les moulins à vent en activité du Zaanse Schans, puis le port de pêche de Volendam et l’ancienne île de Marken, à moins de 30 km au nord d’Amsterdam. Fromageries, ateliers de sabots et maisons de bois : la Hollande du XVIIᵉ siècle en une journée.',
          en: 'The working windmills of Zaanse Schans, then the fishing harbour of Volendam and the former island of Marken, all within 30 km north of Amsterdam. Cheese farms, clog workshops and timber houses: seventeenth-century Holland in a single day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Giethoorn, la Venise du Nord', en: 'Giethoorn, the Venice of the North' },
        teaser: {
          fr: 'À 120 km au nord-est, un village sans voitures traversé de canaux et de ponts de bois, au cœur du parc national de Weerribben-Wieden. Barque privée entre les fermes à toit de chaume, déjeuner au bord de l’eau, retour en fin d’après-midi.',
          en: '120 km north-east, a car-free village threaded with canals and wooden bridges, at the heart of the Weerribben-Wieden national park. Private boat between the thatched farmhouses, waterside lunch, return in the late afternoon.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Rijksmuseum et Van Gogh en majesté', en: 'Rijksmuseum and Van Gogh in style' },
        teaser: {
          fr: 'Dépose au Museumplein pour la Ronde de nuit de Rembrandt et les Tournesols de Van Gogh, puis les galeries des maîtres du Siècle d’or. Votre chauffeur attend entre chaque étape ; billets coupe-file et guide privé sur demande.',
          en: 'Drop-off at Museumplein for Rembrandt’s Night Watch and Van Gogh’s Sunflowers, followed by the galleries of the Golden Age masters. Your chauffeur waits between each stop; skip-the-line tickets and a private guide on request.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Soirée sur les canaux', en: 'Canal-ring evening' },
        teaser: {
          fr: 'Dîner dans le Jordaan ou aux tables étoilées du centre — De Kas, Ciel Bleu —, puis embarquement pour une croisière privée sur les canaux illuminés. Le véhicule vous attend à chaque quai, retour à votre hôtel sans contrainte.',
          en: 'Dinner in the Jordaan or at the city’s starred tables — De Kas, Ciel Bleu — followed by a private cruise along the illuminated canals. The vehicle waits at each quay; effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '490',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Schiphol et le centre d’Amsterdam ?',
          en: 'How much does a transfer between Schiphol Airport and central Amsterdam cost?',
        },
        a: {
          fr: 'Le transfert privé entre Amsterdam-Schiphol (AMS) et le centre d’Amsterdam est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Amsterdam-Schiphol (AMS) and central Amsterdam is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Le centre d’Amsterdam est-il accessible en voiture ?',
          en: 'Is central Amsterdam accessible by car?',
        },
        a: {
          fr: 'Le centre historique est largement piéton et la circulation y est strictement encadrée, mais nos chauffeurs connaissent les points de dépose autorisés au plus près des hôtels, des musées et des quais. Vous êtes déposé à quelques mètres de votre destination, jamais à l’autre bout d’un quartier.',
          en: 'The historic centre is largely pedestrianised and traffic is tightly regulated, but our chauffeurs know the authorised drop-off points closest to the hotels, museums and quays. You are dropped a few metres from your destination, never at the far end of a district.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une journée complète hors d’Amsterdam ?',
          en: 'Can you arrange a full day outside Amsterdam?',
        },
        a: {
          fr: 'Oui. Keukenhof, le Zaanse Schans, Giethoorn, La Haye ou Rotterdam se visitent à la journée en aller-retour depuis Amsterdam, à prix fixe. L’itinéraire et les horaires sont définis avec vous avant le départ, et restent modifiables en cours de route.',
          en: 'Yes. Keukenhof, Zaanse Schans, Giethoorn, The Hague or Rotterdam can all be visited as a round-trip day tour from Amsterdam at a fixed price. The itinerary and timings are agreed with you before departure and can still be adjusted along the way.',
        },
      },
    ],
    nearby: ['utrecht'],
  },
  {
    slug: 'rotterdam',
    name: { fr: 'Rotterdam', en: 'Rotterdam' },
    country: { fr: 'Pays-Bas', en: 'Netherlands' },
    region: 'uk-benelux',
    airport: 'Rotterdam The Hague (RTM)',
    airportTransfer: {
      fr: 'L’aéroport de Rotterdam The Hague (RTM) est à 8 km au nord-ouest du centre : 15 à 20 minutes suffisent pour rejoindre le Markthal ou les quais de la Meuse. Pour les vols long-courriers via Schiphol (60 km), comptez 45 minutes. Votre chauffeur vous attend avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Rotterdam The Hague Airport (RTM) is 8 km north-west of the centre: 15 to 20 minutes is enough to reach the Markthal or the banks of the Maas. For long-haul flights via Schiphol (60 km), allow 45 minutes. Your chauffeur waits with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Reconstruite après 1940, Rotterdam est devenue le laboratoire d’architecture de l’Europe : maisons cubiques de Piet Blom, Markthal en arche habitée, pont Érasme tendu au-dessus de la Meuse, Depot Boijmans Van Beuningen et sa façade miroir. Votre **chauffeur privé à Rotterdam** relie le centre d’affaires, le port — premier d’Europe —, les terminaux de croisière de la Wilhelminapier et les grandes tables de la ville, en berline ou van premium, à prix fixe confirmé à l’avance.',
        'La deuxième ville des Pays-Bas est aussi une base d’excursions remarquable. Les **dix-neuf moulins de Kinderdijk**, classés à l’UNESCO, sont à quinze kilomètres ; Delft et ses faïenceries à un quart d’heure ; La Haye, le Mauritshuis et la plage de Scheveningen à moins de trente minutes. En mise à disposition à la journée, votre chauffeur enchaîne les étapes pendant que vous profitez de chaque site.',
      ],
      en: [
        'Rebuilt after 1940, Rotterdam has become Europe’s architecture laboratory: Piet Blom’s cube houses, the inhabited arch of the Markthal, the Erasmus Bridge stretched over the Maas, and the mirrored façade of Depot Boijmans Van Beuningen. Your **private chauffeur in Rotterdam** links the business district, the port — Europe’s largest —, the cruise terminals of the Wilhelminapier and the city’s finest restaurants, in a premium sedan or van, at a fixed price confirmed in advance.',
        'The Netherlands’ second city is also a remarkable base for excursions. The **nineteen windmills of Kinderdijk**, a UNESCO site, are fifteen kilometres away; Delft and its potteries a quarter of an hour; The Hague, the Mauritshuis and Scheveningen beach under thirty minutes. With a full-day hire, your chauffeur strings the stops together while you make the most of every site.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Kinderdijk, les moulins de l’UNESCO', en: 'Kinderdijk, the UNESCO windmills' },
        teaser: {
          fr: 'À 15 km au sud-est de Rotterdam, dix-neuf moulins de 1740 alignés le long des canaux de drainage de l’Alblasserwaard. Visite des moulins-musées, promenade en bateau entre les biefs, lumière superbe en fin de journée.',
          en: '15 km south-east of Rotterdam, nineteen windmills from 1740 lined along the drainage canals of the Alblasserwaard. Visit the museum mills, take a boat ride between the waterways, and enjoy superb light at the end of the day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Rotterdam, capitale de l’architecture', en: 'Rotterdam, capital of architecture' },
        teaser: {
          fr: 'Maisons cubiques, Markthal, gare Centraal, Depot Boijmans et sa terrasse panoramique, puis l’Euromast à 185 mètres au-dessus de la Meuse. Un circuit commenté entre les icônes du renouveau rotterdamois, dépose au pied de chaque site.',
          en: 'Cube houses, the Markthal, Centraal station, Depot Boijmans and its rooftop terrace, then the Euromast 185 metres above the Maas. A guided circuit of the icons of Rotterdam’s renewal, with drop-off at the foot of each site.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Delft et la faïence royale', en: 'Delft and Royal Delftware' },
        teaser: {
          fr: 'À 15 km au nord, la ville de Vermeer et de Guillaume d’Orange : la manufacture Royal Delft fondée en 1653, la Nieuwe Kerk et les tombeaux royaux, les canaux bordés de façades gothiques. Retour par le campus de la TU Delft.',
          en: '15 km north, the city of Vermeer and William of Orange: the Royal Delft factory founded in 1653, the Nieuwe Kerk with its royal tombs, and canals lined with Gothic façades. Return via the TU Delft campus.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '370',
      },
      {
        title: { fr: 'La Haye et le Mauritshuis', en: 'The Hague and the Mauritshuis' },
        teaser: {
          fr: 'À 25 km, la Jeune Fille à la perle de Vermeer au Mauritshuis, le Binnenhof, le palais de la Paix, puis la plage et la jetée de Scheveningen. Une journée entre chefs-d’œuvre du Siècle d’or et mer du Nord, sans toucher un volant.',
          en: '25 km away, Vermeer’s Girl with a Pearl Earring at the Mauritshuis, the Binnenhof, the Peace Palace, then the beach and pier at Scheveningen. A day between Golden Age masterpieces and the North Sea, without touching a steering wheel.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Soirée sur la Meuse', en: 'Evening on the Maas' },
        teaser: {
          fr: 'Dîner sur la Wilhelminapier — Hotel New York, tables du Katendrecht — puis le pont Érasme et la skyline illuminée depuis les quais. Dépose devant chaque adresse, véhicule à disposition toute la soirée, retour de nuit assuré.',
          en: 'Dinner on the Wilhelminapier — Hotel New York, the tables of Katendrecht — then the Erasmus Bridge and the illuminated skyline from the quays. Door-to-door drop-offs, vehicle on standby all evening, guaranteed late-night return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Rotterdam The Hague et le centre-ville ?',
          en: 'How much does a transfer between Rotterdam The Hague Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Rotterdam The Hague (RTM) et le centre de Rotterdam est facturé à prix fixe, confirmé à la réservation. Accueil en zone d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus. Nous assurons également les transferts depuis Schiphol.',
          en: 'A private transfer between Rotterdam The Hague (RTM) and central Rotterdam is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals area with a name board, real-time flight tracking and complimentary waiting time in case of delay are included. We also cover transfers from Schiphol.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts vers les terminaux de croisière de Rotterdam ?',
          en: 'Do you cover transfers to Rotterdam’s cruise terminals?',
        },
        a: {
          fr: 'Oui. Le Cruise Terminal Rotterdam, sur la Wilhelminapier, est desservi depuis Schiphol, RTM ou toute adresse aux Pays-Bas et en Belgique. Votre chauffeur gère les bagages, s’adapte aux horaires d’embarquement et vous dépose au plus près de la passerelle.',
          en: 'Yes. Cruise Terminal Rotterdam, on the Wilhelminapier, is served from Schiphol, RTM or any address in the Netherlands and Belgium. Your chauffeur handles the luggage, adapts to boarding times and drops you as close as possible to the gangway.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Kinderdijk et Delft dans la même journée ?',
          en: 'Can Kinderdijk and Delft be combined in the same day?',
        },
        a: {
          fr: 'Absolument. Les deux sites encadrent Rotterdam à quinze kilomètres chacun : moulins de Kinderdijk le matin, déjeuner sur le Markthal ou à Delft, faïencerie et vieille ville l’après-midi. L’itinéraire est devisé à prix fixe et reste modifiable en cours de route.',
          en: 'Absolutely. The two sites flank Rotterdam at fifteen kilometres each: the Kinderdijk windmills in the morning, lunch at the Markthal or in Delft, then the pottery and old town in the afternoon. The itinerary is quoted at a fixed price and can still be adjusted along the way.',
        },
      },
    ],
    nearby: ['the-hague', 'utrecht'],
  },
  {
    slug: 'the-hague',
    name: { fr: 'La Haye', en: 'The Hague' },
    country: { fr: 'Pays-Bas', en: 'Netherlands' },
    region: 'uk-benelux',
    airport: 'Rotterdam The Hague (RTM)',
    airportTransfer: {
      fr: 'L’aéroport de Rotterdam The Hague (RTM) se trouve à 20 km au sud-est du centre de La Haye : comptez 20 à 25 minutes jusqu’au Binnenhof. Depuis Amsterdam-Schiphol (AMS), à 45 km, prévoyez 35 à 45 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Rotterdam The Hague Airport (RTM) lies 20 km south-east of central The Hague: allow 20 to 25 minutes to the Binnenhof. From Amsterdam-Schiphol (AMS), 45 km away, allow 35 to 45 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Siège du gouvernement néerlandais, de la Cour internationale de justice et de plus de deux cents organisations internationales, La Haye conjugue palais, ambassades et musées de premier plan. Votre **chauffeur privé à La Haye** dessert le palais de la Paix, le Binnenhof, le quartier des ambassades et le World Forum, comme les hôtels de Scheveningen face à la mer du Nord. Berlines et vans premium, discrétion absolue, prix fixes confirmés à l’avance : la formule attendue par une clientèle diplomatique et d’affaires.',
        'La ville royale est aussi l’une des plus belles étapes culturelles du pays. Le **Mauritshuis** expose la Jeune Fille à la perle de Vermeer et la Leçon d’anatomie de Rembrandt à deux pas du Binnenhof ; le Kunstmuseum détient la plus grande collection Mondrian au monde. Delft est à dix minutes, Leyde à vingt, la plage de Scheveningen à un quart d’heure du centre — autant d’escapades que votre chauffeur enchaîne à la demande.',
      ],
      en: [
        'Seat of the Dutch government, the International Court of Justice and more than two hundred international organisations, The Hague combines palaces, embassies and first-rank museums. Your **private chauffeur in The Hague** serves the Peace Palace, the Binnenhof, the embassy district and the World Forum, as well as the Scheveningen hotels facing the North Sea. Premium sedans and vans, absolute discretion, fixed prices confirmed in advance: the service a diplomatic and business clientele expects.',
        'The royal city is also one of the country’s finest cultural stops. The **Mauritshuis** shows Vermeer’s Girl with a Pearl Earring and Rembrandt’s Anatomy Lesson a few steps from the Binnenhof; the Kunstmuseum holds the world’s largest Mondrian collection. Delft is ten minutes away, Leiden twenty, Scheveningen beach a quarter of an hour from the centre — escapes your chauffeur strings together on request.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Mauritshuis et Binnenhof', en: 'Mauritshuis and Binnenhof' },
        teaser: {
          fr: 'La Jeune Fille à la perle, le Chardonneret de Fabritius et les Rembrandt du Mauritshuis, puis la cour gothique du Binnenhof, cœur politique des Pays-Bas depuis le XIIIᵉ siècle. Dépose au plus près, billets coupe-file sur demande.',
          en: 'Girl with a Pearl Earring, Fabritius’s Goldfinch and the Rembrandts of the Mauritshuis, then the Gothic courtyard of the Binnenhof, the political heart of the Netherlands since the thirteenth century. Closest-possible drop-off, skip-the-line tickets on request.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Palais de la Paix et quartier des ambassades', en: 'Peace Palace and the embassy district' },
        teaser: {
          fr: 'Le siège de la Cour internationale de justice, offert par Andrew Carnegie en 1913, puis les avenues du Statenkwartier et le panorama Mesdag, toile circulaire de 120 mètres sur le Scheveningen de 1881. La Haye diplomatique et picturale.',
          en: 'The seat of the International Court of Justice, donated by Andrew Carnegie in 1913, then the avenues of the Statenkwartier and the Panorama Mesdag, a 120-metre circular canvas of Scheveningen in 1881. Diplomatic and painterly The Hague.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Scheveningen, plage et jetée', en: 'Scheveningen, beach and pier' },
        teaser: {
          fr: 'À 4 km du centre, la grande station balnéaire des Pays-Bas : le Kurhaus de 1885, la jetée et sa grande roue au-dessus de la mer du Nord, les pavillons de plage pour déjeuner face aux vagues. Idéal en fin de journée d’été.',
          en: '4 km from the centre, the Netherlands’ great seaside resort: the 1885 Kurhaus, the pier and its Ferris wheel above the North Sea, and beach pavilions for lunch facing the waves. Ideal at the end of a summer day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Delft et Leyde, villes du Siècle d’or', en: 'Delft and Leiden, Golden Age towns' },
        teaser: {
          fr: 'Delft à 10 km — canaux de Vermeer, manufacture Royal Delft, tombeaux d’Orange-Nassau — puis Leyde à 20 km, sa vieille université de 1575 et le moulin De Valk. Deux joyaux du Siècle d’or en une seule journée.',
          en: 'Delft, 10 km away — Vermeer’s canals, the Royal Delft factory, the Orange-Nassau tombs — then Leiden, 20 km on, with its old university of 1575 and the De Valk windmill. Two Golden Age jewels in a single day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Journée congrès et diplomatie', en: 'Conference and diplomacy day' },
        teaser: {
          fr: 'Mise à disposition autour du World Forum, de la Cour pénale internationale et des ambassades : votre chauffeur attend entre chaque rendez-vous, gère les changements d’agenda et assure les liaisons vers Schiphol ou Bruxelles en fin de journée.',
          en: 'Hourly hire around the World Forum, the International Criminal Court and the embassies: your chauffeur waits between each meeting, absorbs schedule changes and handles the onward run to Schiphol or Brussels at the end of the day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport et le centre de La Haye ?',
          en: 'How much does a transfer between the airport and central The Hague cost?',
        },
        a: {
          fr: 'Le transfert privé depuis Rotterdam The Hague (RTM) ou Amsterdam-Schiphol (AMS) vers La Haye est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer from Rotterdam The Hague (RTM) or Amsterdam-Schiphol (AMS) to The Hague is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous un service adapté aux délégations et aux institutions internationales ?',
          en: 'Do you offer a service suited to delegations and international institutions?',
        },
        a: {
          fr: 'Oui. Nous servons régulièrement les organisations installées à La Haye : chauffeurs discrets et ponctuels, véhicules récents, coordination de plusieurs voitures pour les délégations, facturation centralisée. Les demandes de confidentialité particulières sont traitées au cas par cas.',
          en: 'Yes. We regularly serve the organisations based in The Hague: discreet, punctual chauffeurs, late-model vehicles, multi-car coordination for delegations and centralised invoicing. Specific confidentiality requirements are handled case by case.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter le Mauritshuis et Scheveningen le même jour ?',
          en: 'Can the Mauritshuis and Scheveningen be visited on the same day?',
        },
        a: {
          fr: 'Facilement. Le musée se visite en deux heures environ, et la plage de Scheveningen n’est qu’à un quart d’heure du centre. Votre chauffeur vous dépose au Plein, attend pendant la visite, puis vous conduit au Kurhaus ou aux pavillons de plage pour la fin de journée.',
          en: 'Easily. The museum takes around two hours, and Scheveningen beach is only a quarter of an hour from the centre. Your chauffeur drops you at the Plein, waits during the visit, then drives you to the Kurhaus or the beach pavilions for the end of the day.',
        },
      },
    ],
    nearby: ['rotterdam', 'amsterdam'],
  },
  {
    slug: 'utrecht',
    name: { fr: 'Utrecht', en: 'Utrecht' },
    country: { fr: 'Pays-Bas', en: 'Netherlands' },
    region: 'uk-benelux',
    airportTransfer: {
      fr: 'Utrecht ne dispose pas d’aéroport propre : Amsterdam-Schiphol (AMS), à 45 km au nord-ouest, se rejoint en 35 à 45 minutes par l’A2. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, suit votre vol en temps réel et vous dépose au pied de votre hôtel dans le centre historique.',
      en: 'Utrecht has no airport of its own: Amsterdam-Schiphol (AMS), 45 km to the north-west, is 35 to 45 minutes away via the A2. Your chauffeur greets you in the arrivals hall with a name board, tracks your flight in real time and drops you at the door of your hotel in the historic centre.',
    },
    intro: {
      fr: [
        'Cœur géographique et ferroviaire des Pays-Bas, Utrecht s’organise autour de la tour du Dom — 112 mètres, la plus haute du pays — et de ses canaux à double niveau, uniques au monde : les anciens quais d’entrepôts, les werven, abritent aujourd’hui cafés et restaurants au ras de l’eau. Votre **chauffeur privé à Utrecht** dessert le centre historique, le quartier d’affaires autour de la gare Centraal, le parc des expositions Jaarbeurs et le Science Park, à prix fixe confirmé à l’avance.',
        'Utrecht conjugue patrimoine médiéval et modernité classée : la **maison Rietveld Schröder**, manifeste du mouvement De Stijl inscrit à l’UNESCO, se visite à dix minutes du centre, et le château De Haar — le plus grand des Pays-Bas — à un quart d’heure. Amsterdam, La Haye et Rotterdam sont chacune à moins de 45 minutes : une position centrale idéale pour rayonner dans tout le pays avec un seul chauffeur.',
      ],
      en: [
        'The geographic and railway heart of the Netherlands, Utrecht is arranged around the Dom Tower — 112 metres, the country’s tallest — and its two-level canals, unique in the world: the old warehouse quays, the werven, now house cafés and restaurants at water level. Your **private chauffeur in Utrecht** serves the historic centre, the business district around Centraal station, the Jaarbeurs exhibition halls and the Science Park, at a fixed price confirmed in advance.',
        'Utrecht pairs medieval heritage with listed modernity: the **Rietveld Schröder House**, a UNESCO-listed manifesto of the De Stijl movement, is ten minutes from the centre, and De Haar Castle — the largest in the Netherlands — a quarter of an hour away. Amsterdam, The Hague and Rotterdam are each under 45 minutes: an ideal central position for covering the whole country with a single chauffeur.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Château De Haar et ses jardins', en: 'De Haar Castle and its gardens' },
        teaser: {
          fr: 'À 15 km à l’ouest d’Utrecht, le plus grand château des Pays-Bas, reconstruit en style néogothique par Pierre Cuypers pour les Van Zuylen, avec le concours des Rothschild. Douves, tourelles et 55 hectares de jardins à la française.',
          en: '15 km west of Utrecht, the largest castle in the Netherlands, rebuilt in neo-Gothic style by Pierre Cuypers for the Van Zuylen family with Rothschild backing. Moats, turrets and 55 hectares of formal gardens.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Maison Rietveld Schröder et De Stijl', en: 'Rietveld Schröder House and De Stijl' },
        teaser: {
          fr: 'La maison construite par Gerrit Rietveld en 1924, classée à l’UNESCO, chef-d’œuvre du mouvement De Stijl aux plans coulissants et aux couleurs primaires. Complétez par le Centraal Museum, qui conserve la plus grande collection Rietveld au monde.',
          en: 'The house Gerrit Rietveld built in 1924, now UNESCO-listed, a De Stijl masterpiece of sliding planes and primary colours. Pair it with the Centraal Museum, home to the world’s largest Rietveld collection.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Tour du Dom et canaux à deux niveaux', en: 'Dom Tower and the two-level canals' },
        teaser: {
          fr: 'L’ascension des 465 marches de la tour du Dom, le cloître de la cathédrale Saint-Martin, puis les werven de l’Oudegracht au fil de l’eau. Votre chauffeur vous attend à chaque étape ; croisière privée sur les canaux en option.',
          en: 'The 465-step climb of the Dom Tower, the cloister of Saint Martin’s cathedral, then the werven of the Oudegracht along the water. Your chauffeur waits at each stop; a private canal cruise is available as an option.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Amsterdam ou La Haye à la journée', en: 'Amsterdam or The Hague in a day' },
        teaser: {
          fr: 'Depuis Utrecht, Amsterdam est à 45 km, La Haye à 60 km : Rijksmuseum et ceinture de canaux, ou Mauritshuis et Scheveningen — votre chauffeur compose l’itinéraire, attend sur place et vous ramène le soir, sans horaire imposé.',
          en: 'From Utrecht, Amsterdam is 45 km away and The Hague 60 km: the Rijksmuseum and the canal ring, or the Mauritshuis and Scheveningen — your chauffeur shapes the itinerary, waits on site and brings you back in the evening, with no fixed timetable.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée sur l’Oudegracht', en: 'Evening on the Oudegracht' },
        teaser: {
          fr: 'Dîner dans les caves voûtées des werven, au ras de l’eau, puis les ruelles éclairées du Museumkwartier et la tour du Dom illuminée. Dépose au plus près des quais piétons, véhicule à disposition, retour à votre hôtel sans contrainte.',
          en: 'Dinner in the vaulted wharf cellars at water level, followed by the lit lanes of the Museumkwartier and the illuminated Dom Tower. Drop-off as close as possible to the pedestrian quays, vehicle on standby, effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '330',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Schiphol et Utrecht ?',
          en: 'How much does a transfer between Schiphol and Utrecht cost?',
        },
        a: {
          fr: 'Le transfert privé entre Amsterdam-Schiphol (AMS) et Utrecht est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Amsterdam-Schiphol (AMS) and Utrecht is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Le centre historique d’Utrecht est-il accessible en voiture ?',
          en: 'Is Utrecht’s historic centre accessible by car?',
        },
        a: {
          fr: 'Le cœur d’Utrecht est largement piéton et les quais de l’Oudegracht sont fermés à la circulation, mais nos chauffeurs connaissent les points de dépose autorisés au plus près des hôtels et des restaurants. Vous marchez quelques mètres, jamais plus.',
          en: 'The heart of Utrecht is largely pedestrianised and the Oudegracht quays are closed to traffic, but our chauffeurs know the authorised drop-off points closest to the hotels and restaurants. You walk a few metres, never more.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition pour les salons du Jaarbeurs ?',
          en: 'Do you offer hourly hire for trade fairs at the Jaarbeurs?',
        },
        a: {
          fr: 'Oui. Pendant les salons et congrès du Jaarbeurs, la mise à disposition à l’heure ou à la journée est notre formule la plus demandée : navettes entre hôtel, halls d’exposition et dîners d’affaires, avec un chauffeur qui s’adapte à votre agenda en temps réel.',
          en: 'Yes. During Jaarbeurs fairs and conferences, hourly or full-day hire is our most requested service: shuttles between hotel, exhibition halls and business dinners, with a chauffeur who adapts to your schedule in real time.',
        },
      },
    ],
    nearby: ['amsterdam', 'the-hague', 'rotterdam', 'eindhoven'],
  },
  {
    slug: 'eindhoven',
    name: { fr: 'Eindhoven', en: 'Eindhoven' },
    country: { fr: 'Pays-Bas', en: 'Netherlands' },
    region: 'uk-benelux',
    airport: 'Eindhoven (EIN)',
    airportTransfer: {
      fr: 'L’aéroport d’Eindhoven (EIN) est à 8 km au nord-ouest du centre : 15 minutes suffisent pour rejoindre le Stratumseind ou le quartier de Strijp-S. Votre chauffeur vous attend en zone d’arrivée avec panneau nominatif et suit votre vol pour ajuster l’heure de prise en charge.',
      en: 'Eindhoven Airport (EIN) is 8 km north-west of the centre: 15 minutes is enough to reach Stratumseind or the Strijp-S district. Your chauffeur waits in the arrivals area with a name board and tracks your flight to adjust the pick-up time.',
    },
    intro: {
      fr: [
        'Ville natale de Philips et cinquième agglomération des Pays-Bas, Eindhoven s’est réinventée en capitale du design et des technologies : les anciennes usines de Strijp-S accueillent studios et galeries, la Dutch Design Week rassemble chaque octobre des milliers de créateurs, et le High Tech Campus concentre l’une des plus fortes densités de brevets d’Europe. Votre **chauffeur privé à Eindhoven** relie l’aéroport, le campus, ASML à Veldhoven et les sièges du Brainport, à prix fixe confirmé à l’avance.',
        'Le sud du Brabant se prête aussi aux escapades. À dix kilomètres, Nuenen conserve les paysages où **Van Gogh peignit Les Mangeurs de pommes de terre** ; Bois-le-Duc et la cathédrale Saint-Jean sont à une demi-heure, le parc Efteling à quarante minutes, Anvers et Maastricht à moins de 90 minutes. Le Van Abbemuseum, l’une des grandes collections d’art moderne du pays, complète le tableau en centre-ville.',
      ],
      en: [
        'Birthplace of Philips and the Netherlands’ fifth-largest urban area, Eindhoven has reinvented itself as a capital of design and technology: the former factories of Strijp-S now host studios and galleries, Dutch Design Week gathers thousands of creators every October, and the High Tech Campus holds one of Europe’s highest patent densities. Your **private chauffeur in Eindhoven** links the airport, the campus, ASML in Veldhoven and the Brainport headquarters, at a fixed price confirmed in advance.',
        'The southern Brabant also lends itself to excursions. Ten kilometres away, Nuenen preserves the landscapes where **Van Gogh painted The Potato Eaters**; ’s-Hertogenbosch and Saint John’s cathedral are half an hour away, the Efteling park forty minutes, Antwerp and Maastricht under 90 minutes. The Van Abbemuseum, one of the country’s great modern art collections, completes the picture in the city centre.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Nuenen, sur les pas de Van Gogh', en: 'Nuenen, in Van Gogh’s footsteps' },
        teaser: {
          fr: 'À 10 km d’Eindhoven, le village où Vincent van Gogh vécut de 1883 à 1885 et peignit Les Mangeurs de pommes de terre : le Van Gogh Village Museum, le moulin, les presbytères et les paysages restés intacts. Une matinée hors du temps.',
          en: '10 km from Eindhoven, the village where Vincent van Gogh lived from 1883 to 1885 and painted The Potato Eaters: the Van Gogh Village Museum, the mill, the parsonages and landscapes still intact. A morning out of time.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Strijp-S et le Van Abbemuseum', en: 'Strijp-S and the Van Abbemuseum' },
        teaser: {
          fr: 'Les anciennes usines Philips reconverties en quartier créatif — ateliers, Piet Hein Eek, food halls —, puis le Van Abbemuseum et ses Picasso, Kandinsky, Mondrian et El Lissitzky. Le design d’Eindhoven, de l’ampoule à l’art contemporain.',
          en: 'The former Philips factories reborn as a creative district — workshops, Piet Hein Eek, food halls — then the Van Abbemuseum with its Picassos, Kandinskys, Mondrians and El Lissitzkys. Eindhoven design, from the light bulb to contemporary art.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Bois-le-Duc et la cathédrale Saint-Jean', en: '’s-Hertogenbosch and Saint John’s cathedral' },
        teaser: {
          fr: 'À 35 km au nord, la ville de Jérôme Bosch : la cathédrale Saint-Jean, sommet du gothique brabançon, les canaux voûtés du Binnendieze en barque, et le Bossche bol en pâtisserie. Retour par les villages du Brabant.',
          en: '35 km north, the city of Hieronymus Bosch: Saint John’s cathedral, the summit of Brabant Gothic, the vaulted Binnendieze canals by boat, and the Bossche bol at a patisserie. Return through the villages of Brabant.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Journée Brainport et High Tech Campus', en: 'Brainport and High Tech Campus day' },
        teaser: {
          fr: 'Mise à disposition entre l’aéroport, le High Tech Campus, ASML à Veldhoven et les sites du Brainport : votre chauffeur attend entre chaque rendez-vous, absorbe les changements d’agenda et assure la liaison retour vers EIN ou Schiphol.',
          en: 'Hourly hire between the airport, the High Tech Campus, ASML in Veldhoven and the Brainport sites: your chauffeur waits between each meeting, absorbs schedule changes and handles the return run to EIN or Schiphol.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '750',
      },
      {
        title: { fr: 'Anvers ou Maastricht à la journée', en: 'Antwerp or Maastricht in a day' },
        teaser: {
          fr: 'Depuis Eindhoven, Anvers est à 90 km, Maastricht à 85 km : cathédrale et diamantaires flamands, ou Vrijthof et caves de Saint-Pierre — passage de frontière sans formalité, itinéraire à prix fixe, retour en soirée assuré.',
          en: 'From Eindhoven, Antwerp is 90 km away and Maastricht 85 km: the Flemish cathedral and diamond district, or the Vrijthof and the Saint Peter caves — seamless border crossing, fixed-price itinerary, guaranteed evening return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport d’Eindhoven et le centre-ville ?',
          en: 'How much does a transfer between Eindhoven Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Eindhoven (EIN) et le centre-ville est facturé à prix fixe, confirmé à la réservation. Accueil en zone d’arrivée avec panneau nominatif, suivi du vol en temps réel et attente offerte en cas de retard sont inclus.',
          en: 'A private transfer between Eindhoven (EIN) and the city centre is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals area with a name board, real-time flight tracking and complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Faut-il réserver à l’avance pendant la Dutch Design Week ?',
          en: 'Should I book ahead during Dutch Design Week?',
        },
        a: {
          fr: 'Oui. Fin octobre, la Dutch Design Week attire plus de 350 000 visiteurs et sature l’hôtellerie comme la circulation autour de Strijp-S. Nous recommandons de réserver au moins 72 heures à l’avance ; votre chauffeur connaît les accès et points de dépose de chaque site d’exposition.',
          en: 'Yes. In late October, Dutch Design Week draws more than 350,000 visitors and saturates both hotels and traffic around Strijp-S. We recommend booking at least 72 hours ahead; your chauffeur knows the access routes and drop-off points of every exhibition venue.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les liaisons entre Eindhoven et Schiphol ou Bruxelles ?',
          en: 'Do you cover runs between Eindhoven and Schiphol or Brussels?',
        },
        a: {
          fr: 'Oui. Schiphol est à 125 km (environ 1 h 20) et l’aéroport de Bruxelles à 140 km (environ 1 h 30) : deux liaisons que nous assurons quotidiennement à prix fixe, avec suivi de vol et véhicule autorisé à circuler dans les pays traversés.',
          en: 'Yes. Schiphol is 125 km away (around 1 h 20) and Brussels Airport 140 km (around 1 h 30): two routes we cover daily at a fixed price, with flight tracking and a vehicle authorised to operate in each country crossed.',
        },
      },
    ],
    nearby: ['utrecht', 'maastricht', 'rotterdam'],
  },
  {
    slug: 'maastricht',
    name: { fr: 'Maastricht', en: 'Maastricht' },
    country: { fr: 'Pays-Bas', en: 'Netherlands' },
    region: 'uk-benelux',
    airport: 'Maastricht Aachen (MST)',
    airportTransfer: {
      fr: 'L’aéroport de Maastricht Aachen (MST) se trouve à 10 km au nord du centre : comptez 15 à 20 minutes jusqu’au Vrijthof. Depuis Bruxelles (BRU), à 100 km, prévoyez environ 1 h 10. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Maastricht Aachen Airport (MST) lies 10 km north of the centre: allow 15 to 20 minutes to the Vrijthof. From Brussels (BRU), 100 km away, allow around 1 h 10. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville la plus méridionale des Pays-Bas, posée sur la Meuse entre Belgique et Allemagne, Maastricht a donné son nom au traité fondateur de l’Union européenne en 1992. Basilique Saint-Servais, Vrijthof bordé de terrasses, librairie Dominicanen installée dans une église gothique, ruelles du Wyck : la ville se vit à pied, et votre **chauffeur privé à Maastricht** vous dépose au plus près de chaque adresse, à prix fixe confirmé à l’avance, avant d’assurer vos trajets transfrontaliers.',
        'Chaque mois de mars, la **TEFAF** — la plus grande foire d’art et d’antiquités au monde — attire au MECC collectionneurs et musées ; la demande de chauffeurs y est très forte. Le reste de l’année, les caves de la montagne Saint-Pierre, les vignobles du Limbourg, Aix-la-Chapelle et Liège à trente minutes composent un arrière-pays rare, à cheval sur trois frontières.',
      ],
      en: [
        'The southernmost city in the Netherlands, set on the Maas between Belgium and Germany, Maastricht gave its name to the founding treaty of the European Union in 1992. The basilica of Saint Servatius, the terrace-lined Vrijthof, the Dominicanen bookshop housed in a Gothic church, the lanes of Wyck: the city is best explored on foot, and your **private chauffeur in Maastricht** drops you as close as possible to every address, at a fixed price confirmed in advance, before handling your cross-border journeys.',
        'Every March, **TEFAF** — the world’s largest art and antiques fair — draws collectors and museums to the MECC; chauffeur demand runs very high. The rest of the year, the caves of Mount Saint Peter, the Limburg vineyards, and Aachen and Liège thirty minutes away make up a rare hinterland straddling three borders.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Caves de la montagne Saint-Pierre', en: 'Caves of Mount Saint Peter' },
        teaser: {
          fr: 'Aux portes de la ville, un labyrinthe de galeries creusées dans la marne depuis le Moyen Âge — des kilomètres de couloirs où furent cachées, en 1942, la Ronde de nuit et d’autres toiles majeures. Visite guidée à la lanterne, fort Sint Pieter en surface.',
          en: 'On the edge of the city, a labyrinth of galleries cut into the marl since the Middle Ages — kilometres of corridors where the Night Watch and other major canvases were hidden in 1942. Lantern-lit guided visit, with Fort Sint Pieter above ground.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '320',
      },
      {
        title: { fr: 'Vignobles du Limbourg', en: 'Limburg vineyards' },
        teaser: {
          fr: 'À dix minutes du centre, les coteaux du Louwberg et le domaine Apostelhoeve, pionnier du vin néerlandais : riesling, auxerrois et pinot gris dégustés face à la vallée du Jeker. Poursuite vers les villages à colombages du Heuvelland.',
          en: 'Ten minutes from the centre, the Louwberg slopes and the Apostelhoeve estate, pioneer of Dutch wine: Riesling, Auxerrois and Pinot Gris tasted above the Jeker valley. Continue through the half-timbered villages of the Heuvelland.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Aix-la-Chapelle, cité de Charlemagne', en: 'Aachen, city of Charlemagne' },
        teaser: {
          fr: 'À 35 km, la chapelle palatine de Charlemagne — premier site allemand classé à l’UNESCO —, le trésor de la cathédrale et les thermes Carolus. Passage de frontière sans formalité, retour par les trois frontières du Vaalserberg.',
          en: '35 km away, Charlemagne’s Palatine Chapel — Germany’s first UNESCO site —, the cathedral treasury and the Carolus thermal baths. Seamless border crossing, returning via the three-border point on the Vaalserberg.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Liège et Spa, escapade belge', en: 'Liège and Spa, a Belgian escape' },
        teaser: {
          fr: 'Liège à 35 km — gare de Calatrava, montagne de Bueren, collégiale Saint-Barthélemy — puis Spa, ses thermes et les collines de l’Ardenne. Une journée belge complète au départ de Maastricht, itinéraire et tables réservées à l’avance.',
          en: 'Liège, 35 km away — Calatrava’s station, the Montagne de Bueren, the collegiate church of Saint Bartholomew — then Spa, its thermal baths and the Ardennes hills. A full Belgian day from Maastricht, with itinerary and tables booked ahead.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée maastrichtoise', en: 'Maastricht evening' },
        teaser: {
          fr: 'Dîner dans le Wyck ou aux grandes tables de la ville — Château Neercanne, Beluga —, puis le Vrijthof illuminé et les quais de la Meuse. Dépose devant chaque adresse, véhicule à disposition toute la soirée, retour sans contrainte.',
          en: 'Dinner in Wyck or at the city’s great tables — Château Neercanne, Beluga — then the illuminated Vrijthof and the banks of the Maas. Door-to-door drop-offs, vehicle on standby all evening, effortless return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Maastricht Aachen et le centre-ville ?',
          en: 'How much does a transfer between Maastricht Aachen Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Maastricht Aachen (MST) et le centre de Maastricht est facturé à prix fixe, communiqué à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard. Nous assurons aussi Bruxelles, Düsseldorf et Schiphol.',
          en: 'A private transfer between Maastricht Aachen (MST) and central Maastricht is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay. We also serve Brussels, Düsseldorf and Schiphol.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous un service dédié pendant la TEFAF ?',
          en: 'Do you offer a dedicated service during TEFAF?',
        },
        a: {
          fr: 'Oui. Pendant la foire, en mars, nous assurons les navettes entre aéroports, hôtels et MECC, ainsi que la mise à disposition à la journée pour les collectionneurs et les galeries. La demande étant très forte, nous recommandons de réserver plusieurs semaines à l’avance.',
          en: 'Yes. During the fair in March we run shuttles between airports, hotels and the MECC, along with full-day hire for collectors and galleries. As demand runs very high, we recommend booking several weeks ahead.',
        },
      },
      {
        q: {
          fr: 'Votre chauffeur peut-il assurer des trajets vers la Belgique et l’Allemagne ?',
          en: 'Can your chauffeur handle journeys into Belgium and Germany?',
        },
        a: {
          fr: 'Oui. Depuis Maastricht, nous desservons régulièrement Liège, Aix-la-Chapelle, Cologne, Düsseldorf et Bruxelles. Les trajets transfrontaliers sont devisés à l’avance, à prix fixe, avec un véhicule autorisé à circuler dans les pays traversés.',
          en: 'Yes. From Maastricht we regularly serve Liège, Aachen, Cologne, Düsseldorf and Brussels. Cross-border journeys are quoted in advance at a fixed price, with a vehicle authorised to operate in each country crossed.',
        },
      },
    ],
    nearby: ['eindhoven', 'luxembourg-city'],
  },
  {
    slug: 'luxembourg-city',
    name: { fr: 'Luxembourg-Ville', en: 'Luxembourg City' },
    country: { fr: 'Luxembourg', en: 'Luxembourg' },
    region: 'uk-benelux',
    airport: 'Luxembourg-Findel (LUX)',
    airportTransfer: {
      fr: 'L’aéroport de Luxembourg-Findel (LUX) se trouve à 8 km à l’est du centre : comptez 15 minutes pour rejoindre la place d’Armes ou le plateau du Kirchberg. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel pour ajuster la prise en charge.',
      en: 'Luxembourg-Findel Airport (LUX) lies 8 km east of the centre: allow 15 minutes to reach Place d’Armes or the Kirchberg plateau. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time to adjust the pick-up.',
    },
    intro: {
      fr: [
        'Capitale du Grand-Duché et **place financière** de premier plan, Luxembourg-Ville superpose les casemates du Bock creusées dans la falaise, la vieille ville classée à l’UNESCO et les tours de verre du Kirchberg, siège de la Cour de justice de l’Union européenne et de la Banque européenne d’investissement. Votre **chauffeur privé à Luxembourg** dessert les institutions, les banques du boulevard Royal et les cabinets de la Cloche d’Or, en berline Mercedes ou van de grande capacité, à prix fixe confirmé avant chaque trajet.',
        'La ville est aussi un carrefour : Metz et Trèves à moins d’une heure, Bruxelles à deux heures trente, la **Moselle luxembourgeoise** et ses caves de crémant à vingt minutes. En mise à disposition à l’heure ou à la journée, votre chauffeur enchaîne conseils d’administration au Kirchberg, déjeuner en ville haute et départ de gare ou d’aéroport sans temps mort — ponctualité, discrétion et connaissance fine des accès et des zones de dépose.',
      ],
      en: [
        'Capital of the Grand Duchy and a leading **financial centre**, Luxembourg City layers the Bock casemates carved into the cliff, a UNESCO-listed old town and the glass towers of Kirchberg, home to the Court of Justice of the European Union and the European Investment Bank. Your **private chauffeur in Luxembourg** serves the institutions, the banks of Boulevard Royal and the firms of Cloche d’Or, in a Mercedes sedan or a full-size van, at a fixed price confirmed before every journey.',
        'The city is also a crossroads: Metz and Trier under an hour away, Brussels in two and a half hours, the **Luxembourg Moselle** and its crémant cellars twenty minutes from the centre. With hourly or full-day hire, your chauffeur links board meetings in Kirchberg, lunch in the upper town and a station or airport departure without a wasted minute — punctuality, discretion and precise knowledge of access routes and drop-off zones.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Moselle luxembourgeoise et crémants', en: 'Luxembourg Moselle and crémant cellars' },
        teaser: {
          fr: 'De Remich à Grevenmacher, 42 km de vignes en terrasses le long de la Moselle. Dégustations chez Bernard-Massard et dans les caves coopératives de Wormeldange — crémant, riesling, auxerrois — pendant que votre chauffeur conduit. Déjeuner au bord du fleuve.',
          en: 'From Remich to Grevenmacher, 42 km of terraced vines along the Moselle. Tastings at Bernard-Massard and the Wormeldange cooperative cellars — crémant, Riesling, Auxerrois — while your chauffeur drives. Lunch on the riverbank.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Trèves, la Rome du Nord', en: 'Trier, the Rome of the North' },
        teaser: {
          fr: 'À 50 km de Luxembourg, la plus ancienne ville d’Allemagne : la Porta Nigra, la basilique de Constantin, les thermes impériaux et la cathédrale Saint-Pierre. Passage de frontière sans formalité, retour par la vallée de la Moselle.',
          en: '50 km from Luxembourg, Germany’s oldest city: the Porta Nigra, the Basilica of Constantine, the imperial baths and Saint Peter’s cathedral. Seamless border crossing, return through the Moselle valley.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Casemates du Bock et ville haute', en: 'Bock casemates and the upper town' },
        teaser: {
          fr: 'Les 17 km de galeries creusées dans le grès dès 1644, le chemin de la Corniche — « le plus beau balcon d’Europe » —, le palais grand-ducal et le Grund en contrebas. Dépose au plus près de chaque site, véhicule à disposition.',
          en: 'The 17 km of galleries cut into the sandstone from 1644, the Chemin de la Corniche — “Europe’s most beautiful balcony” —, the Grand Ducal Palace and the Grund below. Drop-off as close as possible to each site, vehicle on standby.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Metz et le Centre Pompidou-Metz', en: 'Metz and the Centre Pompidou-Metz' },
        teaser: {
          fr: 'À 65 km au sud, la cathédrale Saint-Étienne et ses 6 500 m² de vitraux — Chagall compris —, le quartier impérial allemand et le Centre Pompidou-Metz signé Shigeru Ban. Trajet transfrontalier à prix fixe, retour en soirée possible.',
          en: '65 km south, the Saint-Étienne cathedral and its 6,500 m² of stained glass — Chagall included —, the German imperial quarter and the Centre Pompidou-Metz by Shigeru Ban. Fixed-price cross-border journey, evening return available.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Liaison Luxembourg – Bruxelles', en: 'Luxembourg to Brussels transfer' },
        teaser: {
          fr: 'À 215 km, Bruxelles se rejoint en deux heures trente par l’E411 : institutions européennes, sièges sociaux ou correspondance Eurostar à Midi. Wi-Fi à bord, temps de travail préservé, prise en charge et dépose à l’adresse exacte.',
          en: '215 km away, Brussels is two and a half hours via the E411: European institutions, corporate headquarters or a Eurostar connection at Midi. On-board Wi-Fi, working time preserved, door-to-door pick-up and drop-off.',
        },
        duration: { fr: 'Aller simple ou aller-retour', en: 'One way or round trip' },
        price: '650',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Luxembourg-Findel et le centre-ville ?',
          en: 'How much does a transfer between Luxembourg-Findel Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre Luxembourg-Findel (LUX) et le centre de Luxembourg-Ville est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Luxembourg-Findel (LUX) and central Luxembourg City is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des mises à disposition pour les déplacements professionnels au Kirchberg ?',
          en: 'Do you offer hourly hire for business travel in Kirchberg?',
        },
        a: {
          fr: 'Oui. La mise à disposition à l’heure ou à la journée est notre formule la plus demandée à Luxembourg : votre chauffeur enchaîne le Kirchberg, le boulevard Royal et la Cloche d’Or, attend entre chaque rendez-vous et s’adapte aux changements d’agenda en temps réel, en toute confidentialité.',
          en: 'Yes. Hourly or full-day hire is our most requested service in Luxembourg: your chauffeur links Kirchberg, Boulevard Royal and Cloche d’Or, waits between each meeting and adapts to schedule changes in real time, with complete confidentiality.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous des trajets transfrontaliers vers la France, l’Allemagne ou la Belgique ?',
          en: 'Do you handle cross-border journeys to France, Germany or Belgium?',
        },
        a: {
          fr: 'Oui. Depuis Luxembourg-Ville, nous assurons régulièrement Metz, Thionville, Trèves, Sarrebruck, Arlon ou Bruxelles. Les trajets transfrontaliers sont devisés à l’avance, à prix fixe, avec un véhicule autorisé à circuler dans chaque pays traversé.',
          en: 'Yes. From Luxembourg City we regularly serve Metz, Thionville, Trier, Saarbrücken, Arlon and Brussels. Cross-border journeys are quoted in advance at a fixed price, with a vehicle authorised to operate in each country crossed.',
        },
      },
    ],
    nearby: ['mondorf-les-bains', 'vianden', 'echternach'],
  },
  {
    slug: 'mondorf-les-bains',
    name: { fr: 'Mondorf-les-Bains', en: 'Mondorf-les-Bains' },
    country: { fr: 'Luxembourg', en: 'Luxembourg' },
    region: 'uk-benelux',
    airportTransfer: {
      fr: 'L’aéroport de Luxembourg-Findel (LUX) se trouve à 20 km au nord de Mondorf-les-Bains : comptez 20 à 25 minutes de trajet jusqu’au Domaine Thermal. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel pour ajuster la prise en charge.',
      en: 'Luxembourg-Findel Airport (LUX) lies 20 km north of Mondorf-les-Bains: allow 20 to 25 minutes to reach the Domaine Thermal. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time to adjust the pick-up.',
    },
    intro: {
      fr: [
        'À la frontière française, Mondorf-les-Bains est la seule station thermale du Grand-Duché. Les **thermes de Mondorf**, exploités depuis 1847, puisent une eau à 24 °C riche en minéraux ; le Domaine Thermal réunit bains, spa, centre de remise en forme et un parc de 42 hectares aux arbres centenaires. Votre **chauffeur privé à Mondorf-les-Bains** assure vos transferts depuis Findel, la dépose devant le Casino 2000 et vos allers-retours vers Luxembourg-Ville, à prix fixe et à l’horaire qui vous convient.',
        'La station est aussi une base discrète pour rayonner : la **Moselle luxembourgeoise** et ses caves de crémant commencent à Remich, à dix minutes ; Luxembourg-Ville est à vingt minutes, Metz à quarante-cinq. Entre deux soins, votre chauffeur compose des sorties à la demi-journée — vignobles, vieille ville, dîner au casino — et vous ramène au Domaine sans que vous ayez à penser au retour.',
      ],
      en: [
        'On the French border, Mondorf-les-Bains is the Grand Duchy’s only thermal resort. The **Mondorf thermal baths**, operating since 1847, draw mineral-rich water at 24 °C; the Domaine Thermal combines baths, a spa, a fitness centre and a 42-hectare park of century-old trees. Your **private chauffeur in Mondorf-les-Bains** handles your transfers from Findel, drop-off at Casino 2000 and return journeys to Luxembourg City, at a fixed price and at the time that suits you.',
        'The resort is also a discreet base for exploring: the **Luxembourg Moselle** and its crémant cellars begin at Remich, ten minutes away; Luxembourg City is twenty minutes, Metz forty-five. Between treatments, your chauffeur arranges half-day outings — vineyards, the old town, dinner at the casino — and brings you back to the Domaine without a thought for the return journey.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Remich et les caves de la Moselle', en: 'Remich and the Moselle cellars' },
        teaser: {
          fr: 'À 10 km de Mondorf, Remich ouvre la route du vin luxembourgeoise : caves Saint-Martin creusées dans la roche, esplanade au bord de la Moselle, dégustations de crémant et de riesling jusqu’à Wormeldange. Retour au Domaine Thermal en fin d’après-midi.',
          en: '10 km from Mondorf, Remich opens the Luxembourg wine route: the Saint-Martin cellars carved into the rock, the Moselle riverside esplanade, crémant and Riesling tastings up to Wormeldange. Return to the Domaine Thermal in the late afternoon.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Luxembourg-Ville en demi-journée', en: 'Luxembourg City in half a day' },
        teaser: {
          fr: 'À 20 minutes de la station, la capitale : casemates du Bock, chemin de la Corniche, palais grand-ducal et boutiques de la Grand-Rue. Dépose au plus près de la vieille ville, véhicule à disposition, retour aux thermes à l’heure convenue.',
          en: '20 minutes from the resort, the capital: the Bock casemates, the Chemin de la Corniche, the Grand Ducal Palace and the boutiques of the Grand-Rue. Drop-off beside the old town, vehicle on standby, return to the baths at the agreed time.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Soirée au Casino 2000', en: 'Evening at Casino 2000' },
        teaser: {
          fr: 'Dîner aux Roses — la table gastronomique du Casino 2000 —, salles de jeux et programmation de concerts, à quelques minutes du Domaine Thermal. Dépose devant l’entrée, véhicule en attente toute la soirée, retour à votre hôtel sans contrainte.',
          en: 'Dinner at Les Roses — the gourmet restaurant of Casino 2000 —, gaming rooms and a concert programme, minutes from the Domaine Thermal. Drop-off at the entrance, vehicle on standby all evening, effortless return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '300',
      },
      {
        title: { fr: 'Metz, cathédrale et Pompidou', en: 'Metz, cathedral and the Pompidou' },
        teaser: {
          fr: 'À 45 km au sud, Metz déploie la cathédrale Saint-Étienne et ses vitraux de Chagall, la place Saint-Louis et le Centre Pompidou-Metz. Trajet transfrontalier sans formalité, déjeuner réservé sur demande, retour à Mondorf en fin de journée.',
          en: '45 km south, Metz offers the Saint-Étienne cathedral with its Chagall windows, Place Saint-Louis and the Centre Pompidou-Metz. Seamless cross-border journey, lunch booked on request, return to Mondorf at the end of the day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '550',
      },
      {
        title: { fr: 'Trèves et la vallée de la Moselle', en: 'Trier and the Moselle valley' },
        teaser: {
          fr: 'À 45 minutes de Mondorf, la Porta Nigra, les thermes impériaux et la cathédrale de la plus ancienne ville d’Allemagne, puis la route des vins allemande le long du fleuve. Trois pays en une journée, un seul chauffeur.',
          en: '45 minutes from Mondorf, the Porta Nigra, the imperial baths and the cathedral of Germany’s oldest city, then the German wine route along the river. Three countries in one day, a single chauffeur.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Luxembourg-Findel et Mondorf-les-Bains ?',
          en: 'How much does a transfer between Luxembourg-Findel Airport and Mondorf-les-Bains cost?',
        },
        a: {
          fr: 'Le transfert privé entre Luxembourg-Findel (LUX) et Mondorf-les-Bains est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Luxembourg-Findel (LUX) and Mondorf-les-Bains is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser mes trajets quotidiens entre mon hôtel et le Domaine Thermal ?',
          en: 'Can you arrange my daily journeys between my hotel and the Domaine Thermal?',
        },
        a: {
          fr: 'Oui. Pour un séjour de cure ou de bien-être, nous mettons en place des navettes privées à horaires fixes entre votre hôtel, le Domaine Thermal et le Casino 2000, avec le même chauffeur pendant toute la durée du séjour lorsque c’est possible.',
          en: 'Yes. For a spa or wellness stay, we set up private shuttles at fixed times between your hotel, the Domaine Thermal and Casino 2000, with the same chauffeur throughout your stay whenever possible.',
        },
      },
      {
        q: {
          fr: 'Peut-on visiter la Moselle luxembourgeoise depuis Mondorf-les-Bains ?',
          en: 'Can I visit the Luxembourg Moselle from Mondorf-les-Bains?',
        },
        a: {
          fr: 'Absolument. Remich est à dix minutes de la station et la route du vin remonte la Moselle jusqu’à Grevenmacher. Votre chauffeur organise les dégustations — crémant, riesling, pinot gris — chez les domaines et caves coopératives, et vous ramène aux thermes à l’heure convenue.',
          en: 'Absolutely. Remich is ten minutes from the resort and the wine route follows the Moselle up to Grevenmacher. Your chauffeur arranges the tastings — crémant, Riesling, Pinot Gris — at estates and cooperative cellars, and returns you to the baths at the agreed time.',
        },
      },
    ],
    nearby: ['luxembourg-city', 'echternach', 'vianden'],
  },
  {
    slug: 'vianden',
    name: { fr: 'Vianden', en: 'Vianden' },
    country: { fr: 'Luxembourg', en: 'Luxembourg' },
    region: 'uk-benelux',
    airportTransfer: {
      fr: 'L’aéroport de Luxembourg-Findel (LUX) se trouve à 40 km au sud de Vianden : comptez 40 à 45 minutes de trajet à travers l’Oesling jusqu’aux rives de l’Our. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Luxembourg-Findel Airport (LUX) lies 40 km south of Vianden: allow 40 to 45 minutes through the Oesling hills to the banks of the Our. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Blotti dans la vallée de l’Our, aux Ardennes luxembourgeoises, Vianden vit à l’ombre de son château : le **château de Vianden**, forteresse des IXᵉ-XIVᵉ siècles restaurée dans les années 1980, compte parmi les plus grands monuments féodaux d’Europe. En contrebas, le bourg médiéval aligne ses façades le long de la rivière, avec la maison où Victor Hugo séjourna en exil en 1871, devenue musée. Votre **chauffeur privé à Vianden** vous y conduit depuis Findel ou Luxembourg-Ville, à prix fixe, sans les contraintes du stationnement en haute saison.',
        'Vianden est aussi un point de départ vers le nord du pays : le parc naturel de l’Our, le télésiège qui domine la vallée, la centrale de pompage-turbinage du mont Saint-Nicolas et, à vingt minutes, Clervaux et l’exposition **The Family of Man** d’Edward Steichen, classée à l’UNESCO. En mise à disposition à la journée, votre chauffeur relie châteaux, points de vue et tables des Ardennes à votre rythme.',
      ],
      en: [
        'Nestled in the Our valley in the Luxembourg Ardennes, Vianden lives in the shadow of its castle: **Vianden Castle**, a 9th-to-14th-century fortress restored in the 1980s, ranks among Europe’s largest feudal monuments. Below, the medieval town lines the river, with the house where Victor Hugo stayed in exile in 1871, now a museum. Your **private chauffeur in Vianden** brings you here from Findel or Luxembourg City at a fixed price, free of the parking constraints of high season.',
        'Vianden is also a gateway to the north of the country: the Our nature park, the chairlift overlooking the valley, the Mont Saint-Nicolas pumped-storage power station and, twenty minutes away, Clervaux and Edward Steichen’s UNESCO-listed **The Family of Man** exhibition. With a full-day hire, your chauffeur links castles, viewpoints and Ardennes tables at your own pace.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Château de Vianden en privé', en: 'Vianden Castle in private' },
        teaser: {
          fr: 'Dépose au pied de la forteresse avant l’affluence, visite des salles gothiques et de la galerie byzantine, puis montée en télésiège pour le point de vue sur la vallée de l’Our. Déjeuner au bourg, véhicule à disposition toute la journée.',
          en: 'Drop-off at the foot of the fortress ahead of the crowds, a tour of the Gothic halls and the Byzantine gallery, then the chairlift up to the viewpoint over the Our valley. Lunch in the town, vehicle on standby all day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Clervaux et The Family of Man', en: 'Clervaux and The Family of Man' },
        teaser: {
          fr: 'À 20 km au nord, le château de Clervaux abrite les 503 photographies de l’exposition d’Edward Steichen, inscrite au registre Mémoire du monde de l’UNESCO. Abbaye bénédictine Saint-Maurice en surplomb, retour par les crêtes de l’Oesling.',
          en: '20 km north, Clervaux Castle houses the 503 photographs of Edward Steichen’s exhibition, inscribed on UNESCO’s Memory of the World register. The Benedictine abbey of Saint-Maurice above, return along the Oesling ridges.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Circuit des châteaux des Ardennes', en: 'Ardennes castles circuit' },
        teaser: {
          fr: 'Vianden, Bourscheid — la plus vaste enceinte fortifiée du pays, dominant la Sûre à 150 mètres — et Esch-sur-Sûre, village enroulé dans un méandre de la rivière. Trois sites majeurs du nord luxembourgeois en une journée, arrêts photo compris.',
          en: 'Vianden, Bourscheid — the country’s largest fortified complex, 150 metres above the Sûre — and Esch-sur-Sûre, a village wrapped in a river meander. Three major sites of northern Luxembourg in one day, photo stops included.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Sur les pas de Victor Hugo', en: 'In the footsteps of Victor Hugo' },
        teaser: {
          fr: 'La maison-musée où l’écrivain vécut en 1871, ses dessins de la forteresse en ruine, le pont sur l’Our et son buste par Rodin. Une demi-journée littéraire complétée par la vieille église trinitaire et les remparts du bourg.',
          en: 'The museum house where the writer lived in 1871, his drawings of the ruined fortress, the bridge over the Our and his bust by Rodin. A literary half day rounded off by the old Trinitarian church and the town ramparts.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Liaison Vianden – Luxembourg-Ville', en: 'Vianden to Luxembourg City transfer' },
        teaser: {
          fr: 'À 45 km, la capitale se rejoint en 45 minutes par la N7 : rendez-vous au Kirchberg, dîner en ville haute ou correspondance ferroviaire. Prise en charge à votre hôtel des Ardennes, dépose à l’adresse exacte, retour de nuit possible.',
          en: '45 km away, the capital is 45 minutes via the N7: a meeting in Kirchberg, dinner in the upper town or a rail connection. Pick-up at your Ardennes hotel, drop-off at the exact address, late-night return available.',
        },
        duration: { fr: 'Aller simple ou aller-retour', en: 'One way or round trip' },
        price: '300',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Luxembourg-Findel et Vianden ?',
          en: 'How much does a transfer between Luxembourg-Findel Airport and Vianden cost?',
        },
        a: {
          fr: 'Le transfert privé entre Luxembourg-Findel (LUX) et Vianden est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Luxembourg-Findel (LUX) and Vianden is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Le chauffeur peut-il nous attendre pendant la visite du château de Vianden ?',
          en: 'Can the chauffeur wait for us during the visit to Vianden Castle?',
        },
        a: {
          fr: 'Oui. En mise à disposition, votre chauffeur vous dépose au pied du château, attend pendant la visite et vous reprend à la sortie ou en bas du télésiège, selon votre préférence. En haute saison, cette formule vous épargne toute recherche de stationnement dans le bourg.',
          en: 'Yes. With hourly hire, your chauffeur drops you at the foot of the castle, waits during the visit and collects you at the exit or at the bottom of the chairlift, as you prefer. In high season, this spares you any search for parking in the town.',
        },
      },
      {
        q: {
          fr: 'Peut-on combiner Vianden avec d’autres sites des Ardennes luxembourgeoises ?',
          en: 'Can Vianden be combined with other sites in the Luxembourg Ardennes?',
        },
        a: {
          fr: 'Absolument. Clervaux et l’exposition The Family of Man, le château de Bourscheid, Esch-sur-Sûre ou le lac de la Haute-Sûre se combinent à la journée depuis Vianden. L’itinéraire est défini avec vous avant le départ et reste modifiable en cours de route.',
          en: 'Absolutely. Clervaux and The Family of Man exhibition, Bourscheid Castle, Esch-sur-Sûre or the Upper Sûre lake can all be combined in a day from Vianden. The itinerary is agreed with you before departure and can still be adjusted along the way.',
        },
      },
    ],
    nearby: ['echternach', 'luxembourg-city'],
  },
  {
    slug: 'echternach',
    name: { fr: 'Echternach', en: 'Echternach' },
    country: { fr: 'Luxembourg', en: 'Luxembourg' },
    region: 'uk-benelux',
    airportTransfer: {
      fr: 'L’aéroport de Luxembourg-Findel (LUX) se trouve à 30 km au sud-ouest d’Echternach : comptez 30 minutes de trajet jusqu’à la place du Marché. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel pour ajuster la prise en charge.',
      en: 'Luxembourg-Findel Airport (LUX) lies 30 km south-west of Echternach: allow 30 minutes to reach the Place du Marché. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time to adjust the pick-up.',
    },
    intro: {
      fr: [
        'Plus ancienne ville du Grand-Duché, Echternach s’est construite autour de l’**abbaye bénédictine** fondée par saint Willibrord en 698 : la basilique qui abrite son tombeau, les bâtiments abbatiaux du XVIIIᵉ siècle et le Denzelt gothique de la place du Marché. Chaque mardi de Pentecôte, la procession dansante — inscrite au patrimoine immatériel de l’UNESCO — traverse la ville. Votre **chauffeur privé à Echternach** vous y amène depuis Findel ou Luxembourg-Ville, à prix fixe, et reste à disposition le temps de votre séjour.',
        'Aux portes de la ville s’ouvre le **Mullerthal**, la « Petite Suisse luxembourgeoise » : gorges de grès, cascade du Schiessentümpel, formations de la Wolfsschlucht et 112 km de sentiers du Mullerthal Trail. Votre chauffeur vous dépose au départ des randonnées et vous récupère à l’arrivée, puis prolonge la journée vers Trèves, la Moselle ou les châteaux de Beaufort et de Larochette.',
      ],
      en: [
        'The oldest town in the Grand Duchy, Echternach grew around the **Benedictine abbey** founded by Saint Willibrord in 698: the basilica holding his tomb, the 18th-century abbey buildings and the Gothic Denzelt on the Place du Marché. Every Whit Tuesday, the hopping procession — inscribed on UNESCO’s intangible heritage list — moves through the town. Your **private chauffeur in Echternach** brings you here from Findel or Luxembourg City at a fixed price, and remains at your disposal for the length of your stay.',
        'At the town’s edge begins the **Mullerthal**, Luxembourg’s Little Switzerland: sandstone gorges, the Schiessentümpel waterfall, the Wolfsschlucht rock formations and the 112 km Mullerthal Trail. Your chauffeur drops you at the trailheads and collects you at the finish, then extends the day towards Trier, the Moselle or the castles of Beaufort and Larochette.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Mullerthal, la Petite Suisse', en: 'Mullerthal, Little Switzerland' },
        teaser: {
          fr: 'Cascade du Schiessentümpel, gorge du Loup et rochers de la Perekop : les sites majeurs du Mullerthal Trail rejoints en voiture, avec dépose au départ des sentiers et reprise à l’arrivée. Marchez léger, votre chauffeur porte la logistique.',
          en: 'The Schiessentümpel waterfall, the Wolfsschlucht gorge and the Perekop rocks: the Mullerthal Trail’s major sites reached by car, with drop-off at the trailheads and pick-up at the finish. Walk light — your chauffeur carries the logistics.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '590',
      },
      {
        title: { fr: 'Abbaye et vieille ville d’Echternach', en: 'Echternach abbey and old town' },
        teaser: {
          fr: 'La basilique Saint-Willibrord et sa crypte mérovingienne, le musée de l’Abbaye et ses manuscrits enluminés, la place du Marché et le Denzelt, puis le lac d’Echternach et sa villa romaine. Une demi-journée dans treize siècles d’histoire.',
          en: 'The Saint Willibrord basilica and its Merovingian crypt, the Abbey Museum with its illuminated manuscripts, the Place du Marché and the Denzelt, then Echternach lake and its Roman villa. Half a day across thirteen centuries of history.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Trèves par la vallée de la Sûre', en: 'Trier via the Sûre valley' },
        teaser: {
          fr: 'À 35 km d’Echternach, la Porta Nigra, les thermes impériaux et la cathédrale de la plus ancienne ville d’Allemagne. Route le long de la Sûre frontalière, passage sans formalité, déjeuner réservé sur demande, retour en fin de journée.',
          en: '35 km from Echternach, the Porta Nigra, the imperial baths and the cathedral of Germany’s oldest city. A drive along the border river Sûre, seamless crossing, lunch booked on request, return at the end of the day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '550',
      },
      {
        title: { fr: 'Châteaux de Beaufort et de Larochette', en: 'Beaufort and Larochette castles' },
        teaser: {
          fr: 'À 15 km, les ruines médiévales de Beaufort et leur château Renaissance voisin — avec dégustation de la liqueur de cassis du domaine —, puis Larochette perché au-dessus de l’Ernz blanche. Retour par les villages du Mullerthal.',
          en: '15 km away, the medieval ruins of Beaufort and the neighbouring Renaissance château — with a tasting of the estate’s blackcurrant liqueur — then Larochette perched above the White Ernz. Return through the Mullerthal villages.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '420',
      },
      {
        title: { fr: 'Moselle luxembourgeoise et crémants', en: 'Luxembourg Moselle and crémant cellars' },
        teaser: {
          fr: 'À 30 minutes au sud, Grevenmacher ouvre la route du vin : caves Bernard-Massard, coopérative de Wormeldange, esplanade de Remich. Dégustations de crémant et de riesling au fil de la Moselle pendant que votre chauffeur conduit.',
          en: '30 minutes south, Grevenmacher opens the wine route: the Bernard-Massard cellars, the Wormeldange cooperative, the Remich esplanade. Crémant and Riesling tastings along the Moselle while your chauffeur drives.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Luxembourg-Findel et Echternach ?',
          en: 'How much does a transfer between Luxembourg-Findel Airport and Echternach cost?',
        },
        a: {
          fr: 'Le transfert privé entre Luxembourg-Findel (LUX) et Echternach est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Luxembourg-Findel (LUX) and Echternach is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une journée de randonnée dans le Mullerthal sans voiture ?',
          en: 'Can you arrange a car-free hiking day in the Mullerthal?',
        },
        a: {
          fr: 'Oui. Votre chauffeur vous dépose au départ du sentier choisi — Schiessentümpel, gorge du Loup, boucles du Mullerthal Trail — et vous récupère au point d’arrivée à l’heure convenue. Vous randonnez en boucle ouverte, sans jamais revenir sur vos pas ni chercher un parking.',
          en: 'Yes. Your chauffeur drops you at the chosen trailhead — Schiessentümpel, the Wolfsschlucht gorge, sections of the Mullerthal Trail — and collects you at the end point at the agreed time. You hike point to point, never retracing your steps or hunting for parking.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les transferts pendant la procession dansante de Pentecôte ?',
          en: 'Do you handle transfers during the Whit Tuesday hopping procession?',
        },
        a: {
          fr: 'Oui, en anticipant : le mardi de Pentecôte, le centre d’Echternach est fermé à la circulation et la demande est très forte. Nous recommandons de réserver au moins 72 heures à l’avance ; votre chauffeur connaît les points de dépose autorisés au plus près du parcours.',
          en: 'Yes, with planning: on Whit Tuesday the centre of Echternach is closed to traffic and demand is very high. We recommend booking at least 72 hours ahead; your chauffeur knows the authorised drop-off points closest to the route.',
        },
      },
    ],
    nearby: ['luxembourg-city', 'vianden', 'mondorf-les-bains'],
  },
  {
    slug: 'london',
    name: { fr: 'Londres', en: 'London' },
    country: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    region: 'uk-benelux',
    airport: 'Heathrow (LHR)',
    airportTransfer: {
      fr: 'L’aéroport de Heathrow (LHR) se situe à 25 km à l’ouest du centre de Londres : comptez 45 à 60 minutes pour rejoindre Mayfair ou Knightsbridge selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Heathrow Airport (LHR) lies 25 km west of central London: allow 45 to 60 minutes to reach Mayfair or Knightsbridge depending on traffic. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Première place financière d’Europe et capitale aux mille visages, Londres réunit la City et Canary Wharf, les palais de Westminster et de Buckingham, les théâtres du West End et les maisons de vente de St James’s. Votre **chauffeur privé à Londres** dessert les cinq aéroports, les gares de St Pancras et Paddington, les sièges sociaux comme les grands hôtels de Mayfair. Berlines et vans premium, prix fixes confirmés à la réservation, chauffeurs rompus à la circulation londonienne et à la zone de péage urbain.',
        'Au-delà des transferts, Londres ouvre sur les plus belles excursions d’Angleterre : **le château de Windsor** à 40 km, Oxford et ses collèges à une heure et quart, Stonehenge et Bath vers l’ouest, les Cotswolds pour une journée entière. En mise à disposition, votre chauffeur enchaîne rendez-vous d’affaires, boutiques de Bond Street et dîner à Covent Garden sans que vous cherchiez jamais un taxi — le véhicule vous attend, chaque étape est planifiée.',
      ],
      en: [
        'Europe’s leading financial centre and a capital of many faces, London brings together the City and Canary Wharf, the palaces of Westminster and Buckingham, the West End theatres and the auction houses of St James’s. Your **private chauffeur in London** serves all five airports, St Pancras and Paddington stations, corporate headquarters and the grand hotels of Mayfair alike. Premium sedans and vans, fixed prices confirmed at booking, chauffeurs at ease with London traffic and the congestion charge zone.',
        'Beyond transfers, London opens onto the finest day trips in England: **Windsor Castle** 40 km away, Oxford and its colleges in an hour and a quarter, Stonehenge and Bath to the west, the Cotswolds for a full day. With hourly hire, your chauffeur links business meetings, the boutiques of Bond Street and dinner in Covent Garden without you ever hailing a cab — the vehicle waits, every stop is planned.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Château de Windsor et Eton', en: 'Windsor Castle and Eton' },
        teaser: {
          fr: 'À 40 km à l’ouest de Londres, la plus ancienne résidence royale habitée au monde : appartements d’État, chapelle Saint-Georges, relève de la garde. Traversée de la Tamise vers Eton et son collège, retour par la Long Walk.',
          en: '40 km west of London, the oldest inhabited royal residence in the world: the State Apartments, St George’s Chapel, the Changing of the Guard. Cross the Thames to Eton and its college, return along the Long Walk.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '490',
      },
      {
        title: { fr: 'Stonehenge et Bath', en: 'Stonehenge and Bath' },
        teaser: {
          fr: 'Le cercle de pierres de Salisbury Plain, vieux de 4 500 ans, puis Bath la géorgienne : thermes romains, Royal Crescent, abbaye. Deux sites classés à l’UNESCO en une journée, déjeuner réservé, retour à votre hôtel en soirée.',
          en: 'The 4,500-year-old stone circle on Salisbury Plain, then Georgian Bath: the Roman Baths, the Royal Crescent, the abbey. Two UNESCO World Heritage sites in a single day, lunch booked ahead, evening return to your hotel.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '990',
      },
      {
        title: { fr: 'Oxford et Blenheim Palace', en: 'Oxford and Blenheim Palace' },
        teaser: {
          fr: 'À 90 km au nord-ouest, la ville universitaire aux clochers rêveurs : Christ Church, la Bodleian Library, la Radcliffe Camera. En complément, Blenheim Palace, lieu de naissance de Churchill et chef-d’œuvre baroque au cœur d’un parc de Capability Brown.',
          en: '90 km north-west, the university city of dreaming spires: Christ Church, the Bodleian Library, the Radcliffe Camera. Add Blenheim Palace, birthplace of Churchill and a baroque masterpiece set in parkland by Capability Brown.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Journée dans les Cotswolds', en: 'A day in the Cotswolds' },
        teaser: {
          fr: 'Bibury et ses cottages d’Arlington Row, Bourton-on-the-Water, Stow-on-the-Wold : les villages de pierre dorée à deux heures de Londres. Itinéraire modulable, déjeuner dans un pub historique, arrêts photo à la demande.',
          en: 'Bibury and the cottages of Arlington Row, Bourton-on-the-Water, Stow-on-the-Wold: the honey-stone villages two hours from London. Flexible itinerary, lunch in a historic pub, photo stops whenever you wish.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '1090',
      },
      {
        title: { fr: 'Soirée West End et Mayfair', en: 'West End and Mayfair evening' },
        teaser: {
          fr: 'Dépose devant votre théâtre du West End ou votre table — The Ritz, Sketch, Core by Clare Smyth — puis tour des illuminations de Westminster et de Tower Bridge. Le véhicule reste à disposition, retour à votre hôtel sans attente.',
          en: 'Drop-off at your West End theatre or your table — The Ritz, Sketch, Core by Clare Smyth — followed by a drive past the illuminated Westminster and Tower Bridge. The vehicle stays on standby; no waiting for your return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '450',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre Heathrow et le centre de Londres ?',
          en: 'How much does a transfer between Heathrow and central London cost?',
        },
        a: {
          fr: 'Le transfert privé entre Heathrow (LHR) et le centre de Londres est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Heathrow (LHR) and central London is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Desservez-vous les cinq aéroports de Londres et la gare de St Pancras ?',
          en: 'Do you serve all five London airports and St Pancras station?',
        },
        a: {
          fr: 'Oui. Heathrow, Gatwick, Stansted, Luton et London City sont desservis à prix fixe, de même que St Pancras International pour l’Eurostar. Votre chauffeur adapte la prise en charge aux horaires réels du vol ou du train, sans supplément en cas de retard raisonnable.',
          en: 'Yes. Heathrow, Gatwick, Stansted, Luton and London City are all served at a fixed price, as is St Pancras International for the Eurostar. Your chauffeur adjusts the pick-up to the actual flight or train arrival, with no surcharge for reasonable delays.',
        },
      },
      {
        q: {
          fr: 'Le péage urbain et la zone ULEZ sont-ils inclus dans vos tarifs à Londres ?',
          en: 'Are the congestion charge and ULEZ fees included in your London rates?',
        },
        a: {
          fr: 'Oui. Le prix communiqué à la réservation inclut le péage urbain (Congestion Charge), la zone ULEZ et les frais de stationnement liés à la course. Aucun supplément ne vous sera demandé à bord : le montant confirmé est le montant facturé.',
          en: 'Yes. The price confirmed at booking includes the Congestion Charge, the ULEZ fee and any parking costs related to your journey. No extra will be requested on board: the amount confirmed is the amount charged.',
        },
      },
    ],
    nearby: ['windsor', 'brighton'],
  },
  {
    slug: 'manchester',
    name: { fr: 'Manchester', en: 'Manchester' },
    country: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    region: 'uk-benelux',
    airport: 'Manchester (MAN)',
    airportTransfer: {
      fr: 'L’aéroport de Manchester (MAN) se trouve à 14 km au sud du centre-ville : comptez 20 à 30 minutes pour rejoindre Deansgate ou Spinningfields selon le trafic. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol pour ajuster l’heure de prise en charge.',
      en: 'Manchester Airport (MAN) lies 14 km south of the city centre: allow 20 to 30 minutes to reach Deansgate or Spinningfields depending on traffic. Your chauffeur waits in the arrivals hall with a name board and tracks your flight to adjust the pick-up time.',
    },
    intro: {
      fr: [
        'Berceau de la révolution industrielle devenu capitale du nord de l’Angleterre, Manchester conjugue entrepôts victoriens reconvertis, quartier d’affaires de Spinningfields, scène musicale légendaire et deux clubs de football au rayonnement mondial. Votre **chauffeur privé à Manchester** dessert MediaCityUK à Salford Quays, les stades d’Old Trafford et de l’Etihad, les salles de congrès et les tables du Northern Quarter. Berlines et vans premium, prix fixes annoncés à l’avance, chauffeurs disponibles jour et nuit.',
        'Manchester est aussi une porte d’entrée idéale vers le nord : **le Peak District**, premier parc national d’Angleterre, commence à trente minutes du centre, Chester et ses remparts romains se rejoignent en moins d’une heure, et le Lake District s’atteint en une heure trente. Les soirs de match ou de concert à la Co-op Live et à l’AO Arena, votre chauffeur maîtrise les fermetures de voirie et vous dépose au plus près, puis vous attend pour un retour sans contrainte.',
      ],
      en: [
        'Cradle of the industrial revolution turned capital of the North, Manchester combines converted Victorian warehouses, the Spinningfields business district, a legendary music scene and two football clubs of global standing. Your **private chauffeur in Manchester** serves MediaCityUK at Salford Quays, the Old Trafford and Etihad stadiums, the convention venues and the tables of the Northern Quarter. Premium sedans and vans, fixed prices confirmed in advance, chauffeurs available day and night.',
        'Manchester is also an ideal gateway to the North: **the Peak District**, England’s first national park, begins thirty minutes from the centre, Chester and its Roman walls are under an hour away, and the Lake District can be reached in an hour and a half. On match nights or concert evenings at Co-op Live and the AO Arena, your chauffeur knows the road closures, drops you as close as possible and waits for a hassle-free return.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Peak District et Chatsworth House', en: 'Peak District and Chatsworth House' },
        teaser: {
          fr: 'À 50 km au sud-est, les vallées du premier parc national anglais : Bakewell et sa tarte fameuse, la route de la Snake Pass, puis Chatsworth House, demeure des ducs de Devonshire et ses jardins dessinés par Capability Brown.',
          en: '50 km south-east, the valleys of England’s first national park: Bakewell and its famous pudding, the Snake Pass road, then Chatsworth House, seat of the Dukes of Devonshire, with gardens by Capability Brown.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Old Trafford et l’Etihad', en: 'Old Trafford and the Etihad' },
        teaser: {
          fr: 'Le théâtre des rêves de Manchester United, puis l’Etihad Stadium et le campus de Manchester City : visites des vestiaires, musées des clubs, boutiques officielles. Les soirs de match, dépose et reprise au plus près des tribunes.',
          en: 'Manchester United’s Theatre of Dreams, then the Etihad Stadium and the Manchester City campus: dressing-room tours, club museums, official stores. On match nights, drop-off and pick-up as close to the stands as permitted.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Chester et ses remparts romains', en: 'Chester and its Roman walls' },
        teaser: {
          fr: 'À 65 km au sud-ouest, la ville fortifiée la mieux conservée d’Angleterre : deux kilomètres de remparts, les galeries à colombages des Rows, la cathédrale et l’amphithéâtre romain. Déjeuner en ville, retour par le vignoble du Cheshire.',
          en: '65 km south-west, England’s best-preserved walled city: two kilometres of ramparts, the half-timbered galleries of the Rows, the cathedral and the Roman amphitheatre. Lunch in town, return through the Cheshire countryside.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Lake District, Windermere et Grasmere', en: 'Lake District, Windermere and Grasmere' },
        teaser: {
          fr: 'À une heure trente au nord, le parc national classé à l’UNESCO : croisière sur le lac Windermere, village de Grasmere et cottage de Wordsworth, cols et vallées glaciaires. Une journée entière hors du temps, itinéraire ajusté à la météo.',
          en: 'An hour and a half north, the UNESCO-listed national park: a cruise on Lake Windermere, Grasmere village and Wordsworth’s cottage, mountain passes and glacial valleys. A full day out of time, with the route adjusted to the weather.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '990',
      },
      {
        title: { fr: 'Soirée mancunienne', en: 'Manchester evening' },
        teaser: {
          fr: 'Dîner à Mana — la table étoilée d’Ancoats — ou dans le Northern Quarter, puis concert à la Co-op Live ou à l’AO Arena. Dépose devant chaque adresse, véhicule à disposition toute la soirée, retour à votre hôtel sans attente.',
          en: 'Dinner at Mana — the starred table in Ancoats — or in the Northern Quarter, then a concert at Co-op Live or the AO Arena. Door-to-door drop-offs, vehicle on standby all evening, no waiting for the return to your hotel.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Manchester et le centre-ville ?',
          en: 'How much does a transfer between Manchester Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport de Manchester (MAN) et le centre-ville est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard sont inclus.',
          en: 'A private transfer between Manchester Airport (MAN) and the city centre is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les déposes et reprises les soirs de match à Old Trafford ou à l’Etihad ?',
          en: 'Do you handle drop-offs and pick-ups on match nights at Old Trafford or the Etihad?',
        },
        a: {
          fr: 'Oui. Les soirs de match, la circulation autour des stades est fortement restreinte : votre chauffeur connaît les points de dépose autorisés au plus près des tribunes et convient avec vous d’un point de reprise précis pour éviter toute attente à la sortie.',
          en: 'Yes. On match nights, traffic around the stadiums is heavily restricted: your chauffeur knows the authorised drop-off points closest to the stands and agrees a precise pick-up spot with you so you never wait at the exit.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une excursion dans le Peak District ou le Lake District depuis Manchester ?',
          en: 'Can you arrange a day trip to the Peak District or the Lake District from Manchester?',
        },
        a: {
          fr: 'Absolument. Le Peak District se visite à la demi-journée ou à la journée, le Lake District à la journée complète, en aller-retour depuis Manchester à prix fixe. L’itinéraire et les arrêts sont définis avec vous avant le départ et restent modifiables en cours de route.',
          en: 'Absolutely. The Peak District works as a half-day or full-day trip, the Lake District as a full day, both round trips from Manchester at a fixed price. The itinerary and stops are agreed before departure and can still be adjusted along the way.',
        },
      },
    ],
    nearby: ['liverpool', 'birmingham'],
  },
  {
    slug: 'birmingham',
    name: { fr: 'Birmingham', en: 'Birmingham' },
    country: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    region: 'uk-benelux',
    airport: 'Birmingham (BHX)',
    airportTransfer: {
      fr: 'L’aéroport de Birmingham (BHX) se situe à 13 km à l’est du centre-ville : comptez 20 à 25 minutes pour rejoindre le quartier de la cathédrale ou Brindleyplace. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Birmingham Airport (BHX) lies 13 km east of the city centre: allow 20 to 25 minutes to reach the cathedral quarter or Brindleyplace. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Deuxième ville du Royaume-Uni et cœur industriel des Midlands, Birmingham s’est réinventée : canaux réaménagés de Brindleyplace, Bibliothèque monumentale de Centenary Square, Jewellery Quarter où se fabrique encore l’essentiel de la joaillerie britannique, et une scène gastronomique parmi les plus étoilées du pays hors Londres. Votre **chauffeur privé à Birmingham** dessert le parc des expositions NEC, l’Utilita Arena, les sièges sociaux et les campus universitaires, à prix fixe et en toute discrétion.',
        'La position centrale de Birmingham en fait un point de départ privilégié : **Stratford-upon-Avon, la ville de Shakespeare**, est à 40 km, le château de Warwick à trente-cinq minutes, les Cotswolds à une heure, et Oxford à une heure et quart. En mise à disposition à la journée, votre chauffeur relie salons professionnels du NEC, rendez-vous en centre-ville et dîner au restaurant étoilé, pendant que vous travaillez ou vous reposez à bord.',
      ],
      en: [
        'The United Kingdom’s second city and the industrial heart of the Midlands, Birmingham has reinvented itself: the redeveloped canals of Brindleyplace, the monumental Library on Centenary Square, the Jewellery Quarter where most of Britain’s jewellery is still made, and one of the most Michelin-starred dining scenes outside London. Your **private chauffeur in Birmingham** serves the NEC exhibition centre, the Utilita Arena, corporate headquarters and university campuses, at a fixed price and with complete discretion.',
        'Birmingham’s central position makes it a privileged starting point: **Stratford-upon-Avon, Shakespeare’s town**, is 40 km away, Warwick Castle thirty-five minutes, the Cotswolds an hour, and Oxford an hour and a quarter. With full-day hire, your chauffeur links trade shows at the NEC, city-centre meetings and dinner at a starred restaurant, while you work or rest on board.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Stratford-upon-Avon, ville de Shakespeare', en: 'Stratford-upon-Avon, Shakespeare’s town' },
        teaser: {
          fr: 'À 40 km au sud, la ville natale du dramaturge : maison de Henley Street, cottage d’Anne Hathaway, église de la Sainte-Trinité où il repose. Représentation de la Royal Shakespeare Company en option, retour de nuit assuré.',
          en: '40 km south, the playwright’s birthplace: the Henley Street house, Anne Hathaway’s cottage, Holy Trinity Church where he is buried. An optional Royal Shakespeare Company performance, with a guaranteed late-night return.',
        },
        duration: { fr: 'Journée ou soirée', en: 'Day or evening' },
        price: '590',
      },
      {
        title: { fr: 'Château de Warwick', en: 'Warwick Castle' },
        teaser: {
          fr: 'À 35 minutes au sud-est, l’une des forteresses médiévales les mieux conservées d’Angleterre, dressée sur l’Avon depuis Guillaume le Conquérant : remparts, donjon, spectacles de fauconnerie. Combinez avec Royal Leamington Spa et ses façades Regency.',
          en: '35 minutes south-east, one of England’s best-preserved medieval fortresses, standing over the Avon since William the Conqueror: ramparts, towers, falconry displays. Pair it with Royal Leamington Spa and its Regency façades.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '450',
      },
      {
        title: { fr: 'Cotswolds du Nord', en: 'The northern Cotswolds' },
        teaser: {
          fr: 'À une heure au sud, les villages de pierre dorée les plus proches de Birmingham : Chipping Campden et sa halle du XVIIe siècle, Broadway et sa tour-folie, Stow-on-the-Wold. Déjeuner dans un pub classé, arrêts photo à la demande.',
          en: 'An hour south, the honey-stone villages closest to Birmingham: Chipping Campden and its seventeenth-century market hall, Broadway and its folly tower, Stow-on-the-Wold. Lunch in a listed pub, photo stops on request.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Jewellery Quarter et musées', en: 'Jewellery Quarter and museums' },
        teaser: {
          fr: 'Le quartier historique de la joaillerie britannique : ateliers en activité, musée de la Coffin Works, cimetières victoriens de Warstone Lane, puis le Birmingham Museum et les préraphaélites. Une demi-journée dans la ville aux mille métiers.',
          en: 'The historic home of British jewellery: working ateliers, the Coffin Works museum, the Victorian catacombs of Warstone Lane, then Birmingham Museum and its Pre-Raphaelites. Half a day in the city of a thousand trades.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Soirée étoilée à Birmingham', en: 'Michelin evening in Birmingham' },
        teaser: {
          fr: 'Dîner dans l’une des tables étoilées de la ville — Simpsons, Opheem, Adam’s — puis tour des canaux illuminés de Gas Street Basin et de Brindleyplace. Dépose devant votre table, véhicule à disposition, retour sans contrainte.',
          en: 'Dinner at one of the city’s starred tables — Simpsons, Opheem, Adam’s — followed by a drive past the illuminated canals of Gas Street Basin and Brindleyplace. Drop-off at the door, vehicle on standby, effortless return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Birmingham et le centre-ville ?',
          en: 'How much does a transfer between Birmingham Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport de Birmingham (BHX) et le centre-ville est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Birmingham Airport (BHX) and the city centre is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des navettes pour les salons du NEC de Birmingham ?',
          en: 'Do you offer transfers for trade shows at the Birmingham NEC?',
        },
        a: {
          fr: 'Oui. Le NEC jouxte l’aéroport et la gare de Birmingham International : nous assurons transferts et mises à disposition pendant toute la durée des salons, avec dépose aux entrées exposants ou visiteurs et un chauffeur joignable entre chaque trajet. Réservez tôt lors des grands événements.',
          en: 'Yes. The NEC sits next to the airport and Birmingham International station: we provide transfers and hourly hire for the full duration of trade shows, with drop-off at the exhibitor or visitor entrances and a chauffeur reachable between journeys. Book early for major events.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une excursion à Stratford-upon-Avon avec spectacle de la Royal Shakespeare Company ?',
          en: 'Can you arrange a Stratford-upon-Avon trip with a Royal Shakespeare Company performance?',
        },
        a: {
          fr: 'Absolument. Nous combinons la visite des maisons de Shakespeare l’après-midi et la représentation du soir au Royal Shakespeare Theatre : votre chauffeur vous attend pendant le spectacle et vous ramène à Birmingham dans la nuit, à prix fixe convenu à l’avance.',
          en: 'Absolutely. We combine an afternoon visit to the Shakespeare houses with an evening performance at the Royal Shakespeare Theatre: your chauffeur waits during the show and drives you back to Birmingham that night, at a fixed price agreed in advance.',
        },
      },
    ],
    nearby: ['stratford-upon-avon', 'manchester'],
  },
  {
    slug: 'edinburgh',
    name: { fr: 'Édimbourg', en: 'Edinburgh' },
    country: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    region: 'uk-benelux',
    airport: 'Édimbourg (EDI)',
    airportTransfer: {
      fr: 'L’aéroport d’Édimbourg (EDI) se trouve à 13 km à l’ouest du centre : comptez 25 à 30 minutes pour rejoindre Princes Street ou le Royal Mile. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Edinburgh Airport (EDI) lies 13 km west of the centre: allow 25 to 30 minutes to reach Princes Street or the Royal Mile. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de l’Écosse dressée sur ses volcans éteints, Édimbourg superpose le château médiéval, les closes de la vieille ville et les places géorgiennes de la New Town, l’ensemble classé à l’UNESCO. Votre **chauffeur privé à Édimbourg** dessert le palais de Holyrood, le quartier financier d’Exchange, les distilleries et les grands hôtels de Princes Street. Berlines et vans premium, prix fixes confirmés à la réservation, chauffeurs qui connaissent chaque côte et chaque sens unique de la ville haute.',
        'Édimbourg ouvre sur toute l’Écosse du Sud : **St Andrews, berceau du golf**, est à une heure et quart, Stirling et son château à cinquante minutes, le Loch Lomond et les Trossachs à une heure trente, la chapelle de Rosslyn à vingt minutes. En août, pendant le Festival et le Military Tattoo, la vieille ville ferme largement à la circulation : votre chauffeur maîtrise les points de dépose autorisés et les créneaux horaires pour vous éviter toute attente.',
      ],
      en: [
        'Scotland’s capital, built on extinct volcanoes, Edinburgh layers its medieval castle, the closes of the Old Town and the Georgian squares of the New Town, the whole ensemble UNESCO-listed. Your **private chauffeur in Edinburgh** serves the Palace of Holyroodhouse, the Exchange financial district, the whisky distilleries and the grand hotels of Princes Street. Premium sedans and vans, fixed prices confirmed at booking, chauffeurs who know every hill and one-way street of the upper town.',
        'Edinburgh opens onto the whole of southern Scotland: **St Andrews, the home of golf**, is an hour and a quarter away, Stirling and its castle fifty minutes, Loch Lomond and the Trossachs an hour and a half, Rosslyn Chapel twenty minutes. In August, during the Festival and the Military Tattoo, much of the Old Town closes to traffic: your chauffeur knows the authorised drop-off points and time windows, so you never wait.',
      ],
    },
    experiences: [
      {
        title: { fr: 'St Andrews, berceau du golf', en: 'St Andrews, the home of golf' },
        teaser: {
          fr: 'À 80 km au nord-est, la ville du Old Course, le plus ancien parcours de golf au monde : le Swilcan Bridge, le R&A, la cathédrale en ruine et la plus vieille université d’Écosse. Sacs de golf transportés, horaires ajustés à votre départ.',
          en: '80 km north-east, the town of the Old Course, the oldest golf links in the world: the Swilcan Bridge, the R&A, the ruined cathedral and Scotland’s oldest university. Golf bags carried, timings adjusted to your tee time.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Loch Lomond et les Trossachs', en: 'Loch Lomond and the Trossachs' },
        teaser: {
          fr: 'À une heure trente à l’ouest, le plus grand loch de Grande-Bretagne et les collines des Trossachs : village de Luss, croisière en option, single tracks au bord de l’eau. Les Highlands du Sud en une journée, itinéraire ajusté à la lumière.',
          en: 'An hour and a half west, the largest loch in Great Britain and the Trossachs hills: the village of Luss, an optional cruise, single-track roads along the water. The southern Highlands in a day, with the route adjusted to the light.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '890',
      },
      {
        title: { fr: 'Château de Stirling et le Kelpies', en: 'Stirling Castle and the Kelpies' },
        teaser: {
          fr: 'À 60 km au nord-ouest, la forteresse des Stuarts qui domine le champ de bataille de Bannockburn, puis le monument à William Wallace et les Kelpies, les deux têtes de cheval monumentales de Falkirk. L’histoire écossaise en une demi-journée.',
          en: '60 km north-west, the Stuart fortress overlooking the battlefield of Bannockburn, then the William Wallace monument and the Kelpies, the monumental horse heads of Falkirk. Scottish history in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '490',
      },
      {
        title: { fr: 'Rosslyn Chapel et les Borders', en: 'Rosslyn Chapel and the Borders' },
        teaser: {
          fr: 'À 12 km au sud, la chapelle du XVe siècle aux sculptures énigmatiques rendue célèbre par le Da Vinci Code, puis les abbayes en ruine de Melrose et l’Abbotsford de Walter Scott dans les collines des Borders. Retour par la côte est.',
          en: '12 km south, the fifteenth-century chapel with enigmatic carvings made famous by The Da Vinci Code, then the ruined abbey of Melrose and Walter Scott’s Abbotsford in the Borders hills. Return along the east coast.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Soirée whisky et Royal Mile', en: 'Whisky and Royal Mile evening' },
        teaser: {
          fr: 'Dégustation privée de single malts — Scotch Whisky Experience ou distillerie de Glenkinchie à trente minutes — puis dîner dans la vieille ville et tour du château illuminé. Le véhicule vous attend à chaque étape, retour sans contrainte.',
          en: 'A private single malt tasting — the Scotch Whisky Experience or Glenkinchie distillery thirty minutes away — then dinner in the Old Town and a drive past the illuminated castle. The vehicle waits at every stop; effortless return.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '390',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport d’Édimbourg et le centre-ville ?',
          en: 'How much does a transfer between Edinburgh Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport d’Édimbourg (EDI) et le centre-ville est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Edinburgh Airport (EDI) and the city centre is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Comment circuler à Édimbourg pendant le Festival et le Military Tattoo en août ?',
          en: 'How do you get around Edinburgh during the Festival and the Military Tattoo in August?',
        },
        a: {
          fr: 'En août, le Royal Mile et une partie de la vieille ville sont fermés à la circulation et la demande est au plus haut de l’année. Nous recommandons de réserver plusieurs jours à l’avance ; votre chauffeur connaît les points de dépose autorisés au plus près de l’Esplanade et des salles de spectacle.',
          en: 'In August, the Royal Mile and part of the Old Town are closed to traffic and demand is at its yearly peak. We recommend booking several days ahead; your chauffeur knows the authorised drop-off points closest to the Esplanade and the festival venues.',
        },
      },
      {
        q: {
          fr: 'Proposez-vous des journées golf à St Andrews ou sur les parcours de l’East Lothian ?',
          en: 'Do you offer golf days to St Andrews or the East Lothian courses?',
        },
        a: {
          fr: 'Oui. St Andrews, Muirfield, North Berwick ou Gleneagles se rejoignent en aller-retour à la journée depuis Édimbourg, à prix fixe. Le véhicule accueille sacs et chariots, votre chauffeur ajuste la prise en charge à votre heure de départ et vous attend pendant le parcours.',
          en: 'Yes. St Andrews, Muirfield, North Berwick and Gleneagles all work as round-trip day journeys from Edinburgh at a fixed price. The vehicle takes bags and trolleys, and your chauffeur times the pick-up to your tee time and waits during your round.',
        },
      },
    ],
    nearby: ['glasgow', 'york'],
  },
  {
    slug: 'glasgow',
    name: { fr: 'Glasgow', en: 'Glasgow' },
    country: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    region: 'uk-benelux',
    airport: 'Glasgow (GLA)',
    airportTransfer: {
      fr: 'L’aéroport de Glasgow (GLA) se situe à 13 km à l’ouest du centre-ville : comptez 20 à 25 minutes pour rejoindre George Square ou le West End par la M8. Votre chauffeur vous attend en salle d’arrivée avec panneau nominatif et suit votre vol pour ajuster l’heure de prise en charge.',
      en: 'Glasgow Airport (GLA) lies 13 km west of the city centre: allow 20 to 25 minutes to reach George Square or the West End via the M8. Your chauffeur waits in the arrivals hall with a name board and tracks your flight to adjust the pick-up time.',
    },
    intro: {
      fr: [
        'Première ville d’Écosse par la population, Glasgow a troqué ses chantiers navals contre les musées, l’architecture de Charles Rennie Mackintosh et l’une des scènes musicales les plus vivantes du Royaume-Uni. Votre **chauffeur privé à Glasgow** dessert le centre de congrès SEC et l’OVO Hydro sur la Clyde, la Kelvingrove Art Gallery, les campus universitaires du West End et les tables de Finnieston. Berlines et vans premium, prix fixes annoncés à l’avance, service disponible jour et nuit.',
        'Glasgow est la porte des Highlands de l’Ouest : **le Loch Lomond** commence à quarante-cinq minutes du centre, la vallée de Glencoe se rejoint en deux heures, la côte d’Ayrshire et le pays de Robert Burns en moins d’une heure. Les amateurs de single malt rejoignent la distillerie de Glengoyne en trente minutes ; les golfeurs, les links de Troon et de Turnberry sur la côte. Chaque excursion est devisée à prix fixe, avec un itinéraire défini ensemble avant le départ.',
      ],
      en: [
        'Scotland’s largest city, Glasgow has traded its shipyards for museums, the architecture of Charles Rennie Mackintosh and one of the liveliest music scenes in the United Kingdom. Your **private chauffeur in Glasgow** serves the SEC conference centre and the OVO Hydro on the Clyde, the Kelvingrove Art Gallery, the West End university campuses and the tables of Finnieston. Premium sedans and vans, fixed prices confirmed in advance, service available day and night.',
        'Glasgow is the gateway to the western Highlands: **Loch Lomond** begins forty-five minutes from the centre, Glencoe is two hours away, and the Ayrshire coast and Robert Burns country under an hour. Single malt enthusiasts reach Glengoyne distillery in thirty minutes; golfers, the links of Troon and Turnberry on the coast. Every excursion is quoted at a fixed price, with an itinerary agreed together before departure.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Loch Lomond et Glengoyne', en: 'Loch Lomond and Glengoyne' },
        teaser: {
          fr: 'À 45 minutes au nord, les rives du plus grand loch de Grande-Bretagne : village de Luss, point de vue de Duncryne, croisière en option. Au retour, dégustation à la distillerie de Glengoyne, au pied des Campsie Fells, pendant que votre chauffeur conduit.',
          en: '45 minutes north, the shores of the largest loch in Great Britain: Luss village, the Duncryne viewpoint, an optional cruise. On the way back, a tasting at Glengoyne distillery below the Campsie Fells while your chauffeur drives.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '690',
      },
      {
        title: { fr: 'Glencoe et les Highlands de l’Ouest', en: 'Glencoe and the western Highlands' },
        teaser: {
          fr: 'Par le Loch Lomond et le Rannoch Moor jusqu’à la vallée de Glencoe, la plus spectaculaire d’Écosse : les Three Sisters, le Buachaille Etive Mòr, arrêts photo aux points de vue. Déjeuner à Fort William ou au Clachaig Inn, retour en soirée.',
          en: 'Up past Loch Lomond and across Rannoch Moor to Glencoe, Scotland’s most dramatic glen: the Three Sisters, Buachaille Etive Mòr, photo stops at the viewpoints. Lunch in Fort William or at the Clachaig Inn, evening return.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '990',
      },
      {
        title: { fr: 'Côte d’Ayrshire et pays de Burns', en: 'Ayrshire coast and Burns country' },
        teaser: {
          fr: 'À 60 km au sud-ouest, le château de Culzean dressé sur sa falaise face à l’île d’Arran, le cottage natal de Robert Burns à Alloway et les links légendaires de Troon et Turnberry. La côte écossaise de l’Ouest en une journée.',
          en: '60 km south-west, Culzean Castle on its clifftop facing the Isle of Arran, Robert Burns’s birthplace cottage in Alloway and the legendary links of Troon and Turnberry. Scotland’s west coast in a single day.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '790',
      },
      {
        title: { fr: 'Glasgow selon Mackintosh', en: 'Mackintosh’s Glasgow' },
        teaser: {
          fr: 'La ville à travers l’œuvre de Charles Rennie Mackintosh : House for an Art Lover, les Mackintosh at the Willow Tea Rooms de Sauchiehall Street, la Queen’s Cross Church, puis la Kelvingrove Art Gallery. Une demi-journée d’architecture, sans chercher une place.',
          en: 'The city through the work of Charles Rennie Mackintosh: House for an Art Lover, Mackintosh at the Willow tea rooms on Sauchiehall Street, Queen’s Cross Church, then Kelvingrove Art Gallery. Half a day of architecture, no parking required.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Soirée Finnieston et OVO Hydro', en: 'Finnieston and OVO Hydro evening' },
        teaser: {
          fr: 'Dîner sur l’Argyle Street de Finnieston — The Gannet, Ox and Finch, Crabshakk — puis concert à l’OVO Hydro sur les quais de la Clyde. Dépose devant chaque adresse, véhicule à disposition, reprise convenue à la sortie de salle.',
          en: 'Dinner on Finnieston’s Argyle Street — The Gannet, Ox and Finch, Crabshakk — then a concert at the OVO Hydro on the Clyde. Door-to-door drop-offs, vehicle on standby, pick-up agreed right at the venue exit.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '350',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport de Glasgow et le centre-ville ?',
          en: 'How much does a transfer between Glasgow Airport and the city centre cost?',
        },
        a: {
          fr: 'Le transfert privé entre l’aéroport de Glasgow (GLA) et le centre-ville est facturé à prix fixe, confirmé à la réservation. Accueil en salle d’arrivée avec panneau nominatif, suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard sont inclus.',
          en: 'A private transfer between Glasgow Airport (GLA) and the city centre is charged at a fixed price, confirmed at booking. Meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay are included.',
        },
      },
      {
        q: {
          fr: 'Assurez-vous les liaisons entre Glasgow et Édimbourg ou l’aéroport de Prestwick ?',
          en: 'Do you cover journeys between Glasgow and Edinburgh or Prestwick Airport?',
        },
        a: {
          fr: 'Oui. Édimbourg se rejoint en une heure environ par la M8, l’aéroport de Glasgow Prestwick (PIK) en quarante minutes vers la côte. Ces liaisons sont facturées à prix fixe, quel que soit le trafic, et se réservent aussi bien en aller simple qu’en aller-retour avec attente.',
          en: 'Yes. Edinburgh is about an hour away via the M8, Glasgow Prestwick Airport (PIK) forty minutes towards the coast. Both journeys are charged at a fixed price regardless of traffic, and can be booked one-way or as a return with waiting time.',
        },
      },
      {
        q: {
          fr: 'Pouvez-vous organiser une excursion à la journée vers le Loch Lomond ou Glencoe ?',
          en: 'Can you arrange a full-day trip to Loch Lomond or Glencoe?',
        },
        a: {
          fr: 'Absolument. Le Loch Lomond se visite à la demi-journée ou à la journée, Glencoe et les Highlands de l’Ouest à la journée complète, en aller-retour depuis Glasgow à prix fixe. L’itinéraire et les arrêts photo sont définis avec vous avant le départ et restent modifiables en route.',
          en: 'Absolutely. Loch Lomond works as a half-day or full-day trip, Glencoe and the western Highlands as a full day, both round trips from Glasgow at a fixed price. The itinerary and photo stops are agreed before departure and can still be adjusted en route.',
        },
      },
    ],
    nearby: ['edinburgh'],
  },
  {
    slug: 'liverpool',
    name: { fr: 'Liverpool', en: 'Liverpool' },
    country: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    region: 'uk-benelux',
    airport: 'Liverpool John Lennon (LPL)',
    airportTransfer: {
      fr: 'L’aéroport de Liverpool John Lennon (LPL) se trouve à 12 km au sud-est du centre : comptez 20 à 30 minutes pour rejoindre l’Albert Dock ou le quartier des affaires. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Liverpool John Lennon Airport (LPL) lies 12 km south-east of the centre: allow 20 to 30 minutes to reach the Albert Dock or the business district. Your chauffeur greets you in the arrivals hall with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Grand port de l’Empire devenu capitale mondiale de la pop, Liverpool aligne sur la Mersey les Three Graces du Pier Head, les entrepôts du Royal Albert Dock et la Tate Liverpool. Votre **chauffeur privé à Liverpool** dessert le terminal de croisière, les stades d’Anfield et de Goodison Park, l’ACC Liverpool et les grands hôtels du front de mer. Berlines et vans premium, prix fixes confirmés à la réservation, chauffeurs disponibles pour les arrivées matinales de paquebots comme pour les sorties de concert.',
        'La ville des Beatles se raconte de Penny Lane à Strawberry Field, du Cavern Club aux maisons d’enfance de Lennon et McCartney — un itinéraire que votre chauffeur déroule sans file d’attente. Au-delà, **Chester et ses remparts romains** sont à quarante-cinq minutes, la péninsule de Wirral en face, Manchester à une heure. Les jours de match à Anfield, la logistique est millimétrée : dépose au plus près, reprise convenue, retour direct à votre hôtel.',
      ],
      en: [
        'A great port of the Empire turned world capital of pop, Liverpool lines the Mersey with the Three Graces of the Pier Head, the warehouses of the Royal Albert Dock and Tate Liverpool. Your **private chauffeur in Liverpool** serves the cruise terminal, the Anfield and Goodison Park stadiums, ACC Liverpool and the grand waterfront hotels. Premium sedans and vans, fixed prices confirmed at booking, chauffeurs available for early-morning liner arrivals as well as late concert finishes.',
        'The Beatles’ city unfolds from Penny Lane to Strawberry Field, from the Cavern Club to the childhood homes of Lennon and McCartney — an itinerary your chauffeur delivers without queues. Beyond, **Chester and its Roman walls** are forty-five minutes away, the Wirral peninsula just across the river, Manchester an hour. On match days at Anfield, logistics are precise: drop-off as close as permitted, an agreed pick-up point, and a direct return to your hotel.',
      ],
    },
    experiences: [
      {
        title: { fr: 'Liverpool des Beatles', en: 'Beatles Liverpool' },
        teaser: {
          fr: 'Penny Lane, Strawberry Field, les maisons d’enfance de Mendips et Forthlin Road, puis The Beatles Story à l’Albert Dock et le Cavern Club de Mathew Street. L’itinéraire complet des Fab Four, dans l’ordre et sans attente.',
          en: 'Penny Lane, Strawberry Field, the childhood homes at Mendips and Forthlin Road, then The Beatles Story at the Albert Dock and the Cavern Club on Mathew Street. The complete Fab Four itinerary, in order and without queues.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '390',
      },
      {
        title: { fr: 'Anfield et Goodison Park', en: 'Anfield and Goodison Park' },
        teaser: {
          fr: 'La visite d’Anfield — tunnel des joueurs, panneau This Is Anfield, musée du Liverpool FC — et, de l’autre côté de Stanley Park, le stade d’Everton. Les jours de match, dépose et reprise au plus près des tribunes.',
          en: 'The Anfield tour — the players’ tunnel, the This Is Anfield sign, the Liverpool FC museum — and, across Stanley Park, Everton’s ground. On match days, drop-off and pick-up as close to the stands as permitted.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '350',
      },
      {
        title: { fr: 'Chester et la péninsule de Wirral', en: 'Chester and the Wirral peninsula' },
        teaser: {
          fr: 'À 45 minutes au sud, la ville fortifiée la mieux conservée d’Angleterre : remparts, galeries des Rows, cathédrale. Retour par la Wirral, le village modèle de Port Sunlight et sa Lady Lever Art Gallery, face à la skyline de Liverpool.',
          en: '45 minutes south, England’s best-preserved walled city: the ramparts, the galleried Rows, the cathedral. Return via the Wirral, the model village of Port Sunlight and its Lady Lever Art Gallery, facing the Liverpool skyline.',
        },
        duration: { fr: 'Journée complète', en: 'Full day' },
        price: '650',
      },
      {
        title: { fr: 'Front de mer et cathédrales', en: 'Waterfront and cathedrals' },
        teaser: {
          fr: 'Les Three Graces du Pier Head, le Royal Albert Dock et la Tate Liverpool, puis les deux cathédrales de Hope Street : la gothique — la plus vaste de Grande-Bretagne — et la moderne, dite Paddy’s Wigwam. Le grand récit de la ville en une demi-journée.',
          en: 'The Three Graces at the Pier Head, the Royal Albert Dock and Tate Liverpool, then the two cathedrals of Hope Street: the Gothic — the largest in Britain — and the modern one known as Paddy’s Wigwam. The city’s story in half a day.',
        },
        duration: { fr: 'Demi-journée', en: 'Half day' },
        price: '300',
      },
      {
        title: { fr: 'Soirée sur la Mersey', en: 'Evening on the Mersey' },
        teaser: {
          fr: 'Dîner sur le front de mer ou dans le Georgian Quarter — The Art School, Panoramic 34 au 34e étage —, puis les docks illuminés et un dernier verre sur Hope Street. Dépose devant chaque adresse, véhicule à disposition toute la soirée.',
          en: 'Dinner on the waterfront or in the Georgian Quarter — The Art School, Panoramic 34 on the 34th floor — then the illuminated docks and a nightcap on Hope Street. Door-to-door drop-offs, vehicle on standby all evening.',
        },
        duration: { fr: 'Soirée', en: 'Evening' },
        price: '320',
      },
    ],
    faq: [
      {
        q: {
          fr: 'Combien coûte un transfert entre l’aéroport John Lennon et le centre de Liverpool ?',
          en: 'How much does a transfer between John Lennon Airport and central Liverpool cost?',
        },
        a: {
          fr: 'Le transfert privé entre Liverpool John Lennon (LPL) et le centre-ville est facturé à prix fixe, confirmé à la réservation. Il comprend l’accueil en salle d’arrivée avec panneau nominatif, le suivi du vol en temps réel et 60 minutes d’attente offertes en cas de retard.',
          en: 'A private transfer between Liverpool John Lennon (LPL) and the city centre is charged at a fixed price, confirmed at booking. It includes a meet-and-greet in the arrivals hall with a name board, real-time flight tracking and 60 minutes of complimentary waiting time in case of delay.',
        },
      },
      {
        q: {
          fr: 'Prenez-vous en charge les passagers du terminal de croisière de Liverpool ?',
          en: 'Do you pick up passengers from the Liverpool cruise terminal?',
        },
        a: {
          fr: 'Oui. Le Liverpool Cruise Terminal se trouve au Pier Head, en plein centre : votre chauffeur vous attend à la sortie du terminal, panneau nominatif en main, pour un transfert vers l’aéroport de Manchester, Londres ou toute autre destination, avec suivi des horaires d’accostage.',
          en: 'Yes. The Liverpool Cruise Terminal sits at the Pier Head, right in the centre: your chauffeur waits at the terminal exit with a name board for a transfer to Manchester Airport, London or any other destination, tracking the ship’s actual docking time.',
        },
      },
      {
        q: {
          fr: 'Le tour des Beatles peut-il inclure l’intérieur des maisons de Lennon et McCartney ?',
          en: 'Can the Beatles tour include going inside the Lennon and McCartney homes?',
        },
        a: {
          fr: 'Oui, sous réserve de billets : Mendips et le 20 Forthlin Road appartiennent au National Trust et se visitent uniquement sur réservation, par petits groupes. Nous calons l’itinéraire sur votre créneau de visite ; le reste du tour — Penny Lane, Strawberry Field, Cavern Club — s’organise librement autour.',
          en: 'Yes, subject to tickets: Mendips and 20 Forthlin Road belong to the National Trust and can only be visited on pre-booked small-group tours. We build the itinerary around your time slot; the rest of the tour — Penny Lane, Strawberry Field, the Cavern Club — fits freely around it.',
        },
      },
    ],
    nearby: ['manchester', 'birmingham'],
  },
  {
    slug: 'brussels',
    name: { fr: 'Bruxelles', en: 'Brussels' },
    country: { fr: 'Belgique', en: 'Belgium' },
    region: 'uk-benelux',
    airport: 'Bruxelles-Zaventem (BRU)',
    airportTransfer: {
      fr: 'L’aéroport de Bruxelles-Zaventem (BRU) se trouve à 12 km au nord-est du centre : comptez 20 à 35 minutes pour rejoindre la Grand-Place ou le quartier européen selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel. Depuis Bruxelles-Sud Charleroi (CRL), à 50 km, comptez 50 à 60 minutes.',
      en: 'Brussels Airport (BRU) lies 12 km north-east of the centre: allow 20 to 35 minutes to reach the Grand-Place or the European quarter depending on traffic. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time. From Brussels-South Charleroi (CRL), 50 km away, allow 50 to 60 minutes.',
    },
    intro: {
      fr: [
        'Capitale de la Belgique et de l’Union européenne, Bruxelles superpose Grand-Place baroque, maisons Art nouveau et institutions du quartier Schuman. Votre **chauffeur privé à Bruxelles** dessert les sommets européens, l’OTAN, les hôtels du Sablon et les tables étoilées de la ville : transferts aéroport et Eurostar, mise à disposition à l’heure, prix fixes annoncés à l’avance. Berlines Mercedes et vans, chauffeurs francophones et anglophones.',
        'Bruxelles commande les **villes d’art flamandes**. Bruges, Gand et Anvers se rejoignent en moins d’une heure, le champ de bataille de Waterloo est à vingt minutes. En mise à disposition à la journée, votre chauffeur relie réunions institutionnelles, dîners d’affaires et escapades culturelles pendant que vous travaillez ou vous reposez à bord.',
      ],
      en: [
        'Capital of Belgium and of the European Union, Brussels layers a Baroque Grand-Place, Art Nouveau houses and the institutions of the Schuman quarter. Your **private chauffeur in Brussels** serves EU summits, NATO, the hotels of the Sablon and the city’s starred restaurants: airport and Eurostar transfers, hourly hire, fixed prices confirmed in advance. Mercedes sedans and vans, French- and English-speaking chauffeurs.',
        'Brussels commands the **Flemish art cities**. Bruges, Ghent and Antwerp are all less than an hour away, the Waterloo battlefield twenty minutes. With a full-day hire, your chauffeur links institutional meetings, business dinners and cultural excursions while you work or rest on board.',
      ],
    },
    experiences: [
      { title: { fr: 'Bruges à la journée', en: 'Bruges day trip' }, teaser: { fr: 'À 100 km, la Venise du Nord : le beffroi, les canaux, la place du Markt et le béguinage. Déjeuner de moules avant le retour par la campagne flamande.', en: '100 km away, the Venice of the North: the belfry, the canals, the Markt square and the beguinage. A mussels lunch before returning through the Flemish countryside.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '690' },
      { title: { fr: 'Gand, ville médiévale', en: 'Ghent, medieval city' }, teaser: { fr: 'Le château des comtes, les quais du Graslei, la cathédrale Saint-Bavon et l’Agneau mystique des Van Eyck. Escapade à 55 km, déjeuner dans le centre.', en: 'The Gravensteen castle, the Graslei quays, Saint Bavo’s Cathedral and the Van Eyck Mystic Lamb. A getaway 55 km away, lunch in the centre.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Waterloo et la butte du Lion', en: 'Waterloo and the Lion’s Mound' }, teaser: { fr: 'À 20 km, le champ de bataille de 1815, le panorama de la butte du Lion, le Mémorial. Demi-journée d’histoire aux portes de Bruxelles.', en: '20 km away, the 1815 battlefield, the Lion’s Mound panorama, the Memorial. A half-day of history at the gates of Brussels.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '360' },
      { title: { fr: 'Bruxelles Art nouveau', en: 'Art Nouveau Brussels' }, teaser: { fr: 'Les maisons Horta classées UNESCO, le quartier des Étangs d’Ixelles, les galeries Saint-Hubert. Dépose devant chaque site, véhicule en attente.', en: 'The UNESCO-listed Horta houses, the Ixelles ponds quarter, the Saint-Hubert galleries. Door-to-door drop-offs, vehicle on standby.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Soirée gastronomique', en: 'Gastronomic evening' }, teaser: { fr: 'Dîner dans une table étoilée du Sablon ou une brasserie historique, la Grand-Place illuminée, un dernier verre dans une estaminet. Véhicule à disposition toute la soirée.', en: 'Dinner at a starred Sablon table or a historic brasserie, the illuminated Grand-Place, a nightcap in an estaminet. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '390' },
    ],
    faq: [
      { q: { fr: 'Combien coûte un transfert entre l’aéroport de Bruxelles et le centre ?', en: 'How much does a transfer between Brussels Airport and the centre cost?' }, a: { fr: 'Le transfert privé entre Bruxelles-Zaventem (BRU) et le centre est facturé à prix fixe, confirmé à la réservation, avec accueil en salle d’arrivée, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'A private transfer between Brussels Airport (BRU) and the centre is charged at a fixed price, confirmed at booking, with a meet-and-greet in arrivals, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Proposez-vous un service pour les institutions européennes ?', en: 'Do you offer a service for the EU institutions?' }, a: { fr: 'Oui. Nous assurons des mises à disposition et transferts pour sommets, délégations et rendez-vous au quartier européen et à l’OTAN, avec chauffeurs habitués au protocole et à la sécurité. Compte corporate disponible.', en: 'Yes. We provide hire and transfers for summits, delegations and meetings in the European quarter and at NATO, with chauffeurs versed in protocol and security. Corporate account available.' } },
      { q: { fr: 'Vos chauffeurs à Bruxelles parlent-ils anglais ?', en: 'Do your chauffeurs in Brussels speak English?' }, a: { fr: 'Oui, nos chauffeurs sont francophones et anglophones ; d’autres langues sont disponibles sur demande selon les disponibilités.', en: 'Yes, our chauffeurs speak French and English; other languages are available on request subject to availability.' } },
    ],
    nearby: ['bruges', 'ghent', 'antwerp'],
  },
  {
    slug: 'bruges',
    name: { fr: 'Bruges', en: 'Bruges' },
    country: { fr: 'Belgique', en: 'Belgium' },
    region: 'uk-benelux',
    airport: 'Bruxelles-Zaventem (BRU)',
    airportTransfer: {
      fr: 'L’aéroport de Bruxelles-Zaventem (BRU) se trouve à 100 km de Bruges : comptez 1h15 par l’autoroute. Depuis l’aéroport d’Ostende-Bruges (OST), à 25 km, comptez 30 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Brussels Airport (BRU) lies 100 km from Bruges: allow 1h15 by motorway. From Ostend-Bruges Airport (OST), 25 km away, allow 30 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Cité médiévale intacte inscrite au patrimoine mondial, Bruges déroule canaux, beffroi et places pavées à l’abri des voitures. Votre **chauffeur privé à Bruges** vous dépose aux portes du centre piéton, gère les accès réglementés et vous attend pendant vos visites : transferts depuis Bruxelles ou Ostende, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Bruges ouvre sur la **côte belge et les villes d’art**. Ostende et ses plages, Gand à 45 km, les champs de bataille des Flandres autour d’Ypres se rejoignent en moins d’une heure. En mise à disposition, votre chauffeur relie musées, chocolatiers et brasseries pendant que vous profitez de la ville sans souci de stationnement.',
      ],
      en: [
        'An intact medieval city inscribed as World Heritage, Bruges unrolls canals, a belfry and cobbled squares sheltered from cars. Your **private chauffeur in Bruges** drops you at the gates of the pedestrian centre, handles the restricted-access zones and waits during your visits: transfers from Brussels or Ostend, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Bruges opens onto the **Belgian coast and the art cities**. Ostend and its beaches, Ghent 45 km away, the Flanders battlefields around Ypres are all less than an hour away. With a chauffeur hire, your driver links museums, chocolatiers and breweries while you enjoy the city with no parking worries.',
      ],
    },
    experiences: [
      { title: { fr: 'Bruges historique', en: 'Historic Bruges' }, teaser: { fr: 'Le beffroi, la place du Markt, le lac d’Amour et le béguinage, une croisière sur les canaux. Dépose aux portes du centre, promenade à votre rythme.', en: 'The belfry, the Markt square, the Lake of Love and the beguinage, a canal cruise. Drop-off at the gates of the centre, a stroll at your own pace.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Ypres et les champs de bataille', en: 'Ypres and the battlefields' }, teaser: { fr: 'Les mémoriaux de la Grande Guerre autour d’Ypres, la porte de Menin et le Last Post, les cimetières des Flandres. Journée de mémoire à 55 km.', en: 'The Great War memorials around Ypres, the Menin Gate and the Last Post, the Flanders cemeteries. A day of remembrance 55 km away.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Côte belge et Ostende', en: 'Belgian coast and Ostend' }, teaser: { fr: 'La digue d’Ostende, les villas balnéaires de Knokke-le-Zoute, les plages de la mer du Nord. Déjeuner de fruits de mer face à la mer.', en: 'The Ostend promenade, the seaside villas of Knokke, the North Sea beaches. A seafood lunch facing the sea.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '360' },
      { title: { fr: 'Gand depuis Bruges', en: 'Ghent from Bruges' }, teaser: { fr: 'À 45 km, le château des comtes, les quais du Graslei et l’Agneau mystique. Combinaison possible des deux villes d’art dans la journée.', en: '45 km away, the Gravensteen castle, the Graslei quays and the Mystic Lamb. The two art cities can be combined in one day.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '360' },
      { title: { fr: 'Chocolat et brasseries', en: 'Chocolate and breweries' }, teaser: { fr: 'Les chocolatiers artisanaux, la brasserie De Halve Maan et sa bière servie par canalisation, dégustations à travers la ville. Véhicule en attente entre les étapes.', en: 'The artisan chocolatiers, the De Halve Maan brewery with its pipeline-served beer, tastings across the city. Vehicle on standby between stops.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Peut-on circuler en voiture dans le centre de Bruges ?', en: 'Can you drive in the centre of Bruges?' }, a: { fr: 'Le centre historique est en grande partie piéton et à accès réglementé. Votre chauffeur vous dépose au plus près, gère les zones autorisées et vous attend à un point convenu, vous évitant tout souci de stationnement.', en: 'The historic centre is largely pedestrian and access-restricted. Your chauffeur drops you as close as possible, handles the permitted zones and waits at an agreed point, saving you any parking concerns.' } },
      { q: { fr: 'Depuis quel aéroport rejoint-on Bruges ?', en: 'From which airport do you reach Bruges?' }, a: { fr: 'Bruges est à 1h15 de Bruxelles (BRU) et à 30 minutes d’Ostende-Bruges (OST). Votre chauffeur vous accueille à l’aéroport de votre choix avec panneau nominatif, à prix fixe.', en: 'Bruges is 1h15 from Brussels (BRU) and 30 minutes from Ostend-Bruges (OST). Your chauffeur greets you at the airport of your choice with a name board, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['ghent', 'brussels', 'antwerp'],
  },
  {
    slug: 'ghent',
    name: { fr: 'Gand', en: 'Ghent' },
    country: { fr: 'Belgique', en: 'Belgium' },
    region: 'uk-benelux',
    airport: 'Bruxelles-Zaventem (BRU)',
    airportTransfer: {
      fr: 'L’aéroport de Bruxelles-Zaventem (BRU) se trouve à 55 km de Gand : comptez 45 minutes à 1 heure par l’autoroute. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Brussels Airport (BRU) lies 55 km from Ghent: allow 45 minutes to 1 hour by motorway. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Puissante cité drapière au Moyen Âge, Gand aligne le long de la Lys ses quais médiévaux, son château comtal et sa cathédrale abritant l’Agneau mystique. Votre **chauffeur privé à Gand** dessert le centre historique, l’université et les tables branchées de la ville la plus étudiante de Flandre : transferts depuis Bruxelles, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Gand se trouve au cœur des **Flandres**. Bruges à 45 km, Anvers à 60 km, Bruxelles à 55 km composent un triangle d’art parcouru en une journée. En mise à disposition, votre chauffeur relie musées, ateliers de créateurs et brasseries pendant que vous découvrez une ville médiévale restée vivante et authentique.',
      ],
      en: [
        'A powerful cloth city in the Middle Ages, Ghent lines the Lys with medieval quays, its comital castle and its cathedral housing the Mystic Lamb. Your **private chauffeur in Ghent** serves the historic centre, the university and the trendy tables of Flanders’ most student city: transfers from Brussels, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Ghent lies at the heart of **Flanders**. Bruges 45 km away, Antwerp 60 km, Brussels 55 km form an art triangle covered in a day. With a chauffeur hire, your driver links museums, designer studios and breweries while you discover a medieval city that has stayed alive and authentic.',
      ],
    },
    experiences: [
      { title: { fr: 'Gand médiéval', en: 'Medieval Ghent' }, teaser: { fr: 'Le château des comtes, les quais du Graslei et du Korenlei, la cathédrale Saint-Bavon et l’Agneau mystique restauré. Dépose au centre, promenade à votre rythme.', en: 'The Gravensteen castle, the Graslei and Korenlei quays, Saint Bavo’s Cathedral and the restored Mystic Lamb. Drop-off in the centre, a stroll at your own pace.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Bruges depuis Gand', en: 'Bruges from Ghent' }, teaser: { fr: 'À 45 km, la Venise du Nord et ses canaux, croisière et déjeuner de moules. Deux villes d’art flamandes combinées dans la journée.', en: '45 km away, the Venice of the North and its canals, a cruise and a mussels lunch. Two Flemish art cities combined in one day.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '360' },
      { title: { fr: 'Anvers, mode et diamants', en: 'Antwerp, fashion and diamonds' }, teaser: { fr: 'À 60 km, la cathédrale et les Rubens, le quartier des diamantaires, les créateurs de l’Académie. Déjeuner dans le centre avant le retour.', en: '60 km away, the cathedral and the Rubens, the diamond quarter, the Academy designers. Lunch in the centre before the return.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Triangle d’art flamand', en: 'Flemish art triangle' }, teaser: { fr: 'Gand, Bruges et un arrêt à Bruxelles en une journée orchestrée : trois centres médiévaux, un déjeuner en chemin, véhicule à disposition. Confort d’un circuit privé.', en: 'Ghent, Bruges and a Brussels stop in one orchestrated day: three medieval centres, lunch en route, vehicle on standby. The comfort of a private tour.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '790' },
      { title: { fr: 'Soirée sur les quais', en: 'Evening on the quays' }, teaser: { fr: 'Les quais illuminés du Graslei à la tombée de la nuit, dîner dans une table du Patershol, un dernier verre en terrasse. Véhicule à disposition toute la soirée.', en: 'The illuminated Graslei quays at nightfall, dinner at a Patershol table, a nightcap on a terrace. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '360' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Bruxelles à Gand ?', en: 'How long from Brussels Airport to Ghent?' }, a: { fr: 'Comptez 45 minutes à 1 heure par l’autoroute. Le transfert privé est à prix fixe, avec accueil en salle d’arrivée, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 45 minutes to 1 hour by motorway. The private transfer is at a fixed price, with a meet-and-greet in arrivals, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on combiner Gand et Bruges dans la journée ?', en: 'Can Ghent and Bruges be combined in one day?' }, a: { fr: 'Oui, les deux villes sont distantes de 45 km. En mise à disposition à la journée, votre chauffeur enchaîne les deux centres médiévaux avec un déjeuner en chemin, à votre rythme.', en: 'Yes, the two cities are 45 km apart. With a full-day hire, your chauffeur links the two medieval centres with lunch en route, at your pace.' } },
      { q: { fr: 'Vos chauffeurs à Gand parlent-ils anglais ?', en: 'Do your chauffeurs in Ghent speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['bruges', 'brussels', 'antwerp'],
  },
  {
    slug: 'antwerp',
    name: { fr: 'Anvers', en: 'Antwerp' },
    country: { fr: 'Belgique', en: 'Belgium' },
    region: 'uk-benelux',
    airport: 'Bruxelles-Zaventem (BRU)',
    airportTransfer: {
      fr: 'L’aéroport de Bruxelles-Zaventem (BRU) se trouve à 45 km au sud d’Anvers : comptez 40 à 55 minutes par l’autoroute. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Brussels Airport (BRU) lies 45 km south of Antwerp: allow 40 to 55 minutes by motorway. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Deuxième port d’Europe et capitale mondiale du diamant, Anvers marie la cathédrale gothique de Rubens, la gare-cathédrale et l’avant-garde de la mode flamande. Votre **chauffeur privé à Anvers** dessert le quartier des diamantaires, les showrooms de créateurs et les tables du Zuid : transferts depuis Bruxelles, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Anvers commande le nord de la **Flandre**. Gand à 60 km, Bruges à 95 km, la frontière néerlandaise et Rotterdam à moins d’une heure ouvrent les excursions. En mise à disposition à la journée, votre chauffeur relie rendez-vous d’affaires portuaires, shopping mode et musées Rubens pendant que vous vous concentrez sur l’essentiel.',
      ],
      en: [
        'Europe’s second port and the world diamond capital, Antwerp marries Rubens’ Gothic cathedral, the cathedral-like railway station and the avant-garde of Flemish fashion. Your **private chauffeur in Antwerp** serves the diamond quarter, the designer showrooms and the tables of the Zuid: transfers from Brussels, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Antwerp commands northern **Flanders**. Ghent 60 km away, Bruges 95 km, the Dutch border and Rotterdam less than an hour away open up excursions. With a full-day hire, your chauffeur links port business meetings, fashion shopping and Rubens museums while you focus on what matters.',
      ],
    },
    experiences: [
      { title: { fr: 'Anvers, Rubens et diamants', en: 'Antwerp, Rubens and diamonds' }, teaser: { fr: 'La cathédrale Notre-Dame et ses Rubens, la maison du maître, le quartier des diamantaires. Dépose devant chaque site, véhicule en attente.', en: 'The Cathedral of Our Lady and its Rubens, the master’s house, the diamond quarter. Door-to-door drop-offs, vehicle on standby.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Mode et shopping flamand', en: 'Flemish fashion and shopping' }, teaser: { fr: 'Les créateurs de la Modenatie, les boutiques du Wilde Zee, le MoMu. Votre chauffeur transporte vos achats pendant que vous poursuivez la balade.', en: 'The Modenatie designers, the Wilde Zee boutiques, the MoMu. Your chauffeur carries your purchases while you continue browsing.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Gand depuis Anvers', en: 'Ghent from Antwerp' }, teaser: { fr: 'À 60 km, le château des comtes, les quais du Graslei et l’Agneau mystique. Déjeuner dans le centre médiéval avant le retour.', en: '60 km away, the Gravensteen castle, the Graslei quays and the Mystic Lamb. Lunch in the medieval centre before the return.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '360' },
      { title: { fr: 'Rotterdam et l’architecture', en: 'Rotterdam and architecture' }, teaser: { fr: 'À moins d’une heure au nord, la ville-manifeste de l’architecture contemporaine, le marché couvert, le port. Journée design de part et d’autre de la frontière.', en: 'Less than an hour north, the manifesto city of contemporary architecture, the covered market, the port. A design day either side of the border.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Soirée au Zuid', en: 'Evening in the Zuid' }, teaser: { fr: 'Dîner dans une table étoilée du quartier Sud, les quais de l’Escaut au coucher du soleil, un dernier verre design. Véhicule à disposition toute la soirée.', en: 'Dinner at a starred table in the Zuid, the Scheldt quays at sunset, a stylish nightcap. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '380' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Bruxelles à Anvers ?', en: 'How long from Brussels Airport to Antwerp?' }, a: { fr: 'Comptez 40 à 55 minutes par l’autoroute. Le transfert privé est à prix fixe, avec accueil en salle d’arrivée, suivi du vol et 60 minutes d’attente offertes.', en: 'Allow 40 to 55 minutes by motorway. The private transfer is at a fixed price, with a meet-and-greet in arrivals, flight tracking and 60 minutes of complimentary waiting time.' } },
      { q: { fr: 'Proposez-vous un service pour le quartier des diamantaires ?', en: 'Do you offer a service for the diamond quarter?' }, a: { fr: 'Oui, avec des chauffeurs discrets et ponctuels, habitués à une clientèle exigeante. Mise à disposition à l’heure ou à la journée, compte corporate disponible.', en: 'Yes, with discreet, punctual chauffeurs used to a demanding clientele. Hourly or daily hire, corporate account available.' } },
      { q: { fr: 'Vos chauffeurs à Anvers parlent-ils anglais ?', en: 'Do your chauffeurs in Antwerp speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['ghent', 'brussels', 'rotterdam'],
  },
  {
    slug: 'liege',
    name: { fr: 'Liège', en: 'Liège' },
    country: { fr: 'Belgique', en: 'Belgium' },
    region: 'uk-benelux',
    airport: 'Bruxelles-Zaventem (BRU)',
    airportTransfer: {
      fr: 'L’aéroport de Bruxelles-Zaventem (BRU) se trouve à 100 km à l’ouest de Liège : comptez 1 heure à 1h15 par l’autoroute E40. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Brussels Airport (BRU) lies 100 km west of Liège: allow 1 hour to 1h15 via the E40 motorway. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ancienne principauté épiscopale sur les rives de la Meuse, Liège cultive une identité frondeuse, une gastronomie généreuse et la spectaculaire gare des Guillemins signée Calatrava. Votre **chauffeur privé à Liège** dessert le centre, la gare TGV et les rendez-vous d’affaires du bassin mosan : transferts, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs francophones et anglophones.',
        'Liège ouvre sur les **Ardennes belges**. Spa et son circuit de Francorchamps, les châteaux de la vallée de la Meuse, la citadelle de Namur se rejoignent en moins d’une heure. En mise à disposition à la journée, votre chauffeur relie rendez-vous professionnels, tables du terroir et escapades vertes au cœur de la Wallonie.',
      ],
      en: [
        'A former episcopal principality on the banks of the Meuse, Liège cultivates a rebellious identity, a generous cuisine and the spectacular Calatrava-designed Guillemins station. Your **private chauffeur in Liège** serves the centre, the high-speed rail station and the business meetings of the Meuse basin: transfers, hourly hire, fixed prices. Mercedes sedans and vans, French- and English-speaking chauffeurs.',
        'Liège opens onto the **Belgian Ardennes**. Spa and its Francorchamps circuit, the castles of the Meuse valley, the Namur citadel are all less than an hour away. With a full-day hire, your chauffeur links business meetings, regional tables and green getaways in the heart of Wallonia.',
      ],
    },
    experiences: [
      { title: { fr: 'Spa-Francorchamps', en: 'Spa-Francorchamps' }, teaser: { fr: 'Le mythique circuit de Formule 1, le Raidillon de l’Eau Rouge, la ville thermale de Spa et ses bains. Journée sport et détente à 40 km.', en: 'The legendary Formula 1 circuit, the Eau Rouge corner, the spa town of Spa and its baths. A day of sport and relaxation 40 km away.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Vallée de la Meuse et Namur', en: 'Meuse valley and Namur' }, teaser: { fr: 'Les châteaux et falaises de la Meuse, la citadelle de Namur, le village de Dinant et sa collégiale. Déjeuner en bord de fleuve.', en: 'The castles and cliffs of the Meuse, the Namur citadel, the village of Dinant and its collegiate church. A riverside lunch.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Liège historique', en: 'Historic Liège' }, teaser: { fr: 'La montagne de Bueren et ses 374 marches, le palais des princes-évêques, la gare des Guillemins de Calatrava. Dépose devant chaque site.', en: 'The Montagne de Bueren and its 374 steps, the Palace of the Prince-Bishops, Calatrava’s Guillemins station. Door-to-door drop-offs.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Ardennes vertes', en: 'Green Ardennes' }, teaser: { fr: 'Les forêts et vallées des Hautes Fagnes, les villages de pierre, une table du terroir. Journée nature loin de l’agitation urbaine.', en: 'The forests and valleys of the High Fens, the stone villages, a regional table. A nature day away from urban bustle.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Soirée mosane', en: 'Meuse evening' }, teaser: { fr: 'Dîner dans une table du Carré, les quais de la Meuse illuminés, l’ambiance chaleureuse des estaminets liégeois. Véhicule à disposition toute la soirée.', en: 'Dinner at a table in the Carré, the illuminated Meuse quays, the warm atmosphere of Liège’s estaminets. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '360' },
    ],
    faq: [
      { q: { fr: 'Peut-on visiter le circuit de Spa-Francorchamps ?', en: 'Can you visit the Spa-Francorchamps circuit?' }, a: { fr: 'Oui, le circuit est à 40 km de Liège. Votre chauffeur vous y conduit, combine la visite avec la ville thermale de Spa et un déjeuner, à prix fixe. Idéal les jours d’événement automobile.', en: 'Yes, the circuit is 40 km from Liège. Your chauffeur takes you there, combines the visit with the spa town of Spa and lunch, at a fixed price. Ideal on motorsport event days.' } },
      { q: { fr: 'Combien de temps de l’aéroport de Bruxelles à Liège ?', en: 'How long from Brussels Airport to Liège?' }, a: { fr: 'Comptez 1 heure à 1h15 par l’E40. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 1 hour to 1h15 via the E40. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Vos chauffeurs à Liège parlent-ils anglais ?', en: 'Do your chauffeurs in Liège speak English?' }, a: { fr: 'Oui, nos chauffeurs sont francophones et anglophones ; d’autres langues sont disponibles sur demande selon les disponibilités.', en: 'Yes, our chauffeurs speak French and English; other languages are available on request subject to availability.' } },
    ],
    nearby: ['namur', 'spa', 'brussels'],
  },
  {
    slug: 'namur',
    name: { fr: 'Namur', en: 'Namur' },
    country: { fr: 'Belgique', en: 'Belgium' },
    region: 'uk-benelux',
    airport: 'Bruxelles-Zaventem (BRU)',
    airportTransfer: {
      fr: 'L’aéroport de Bruxelles-Zaventem (BRU) se trouve à 65 km au nord de Namur : comptez 50 minutes à 1 heure par l’autoroute. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Brussels Airport (BRU) lies 65 km north of Namur: allow 50 minutes to 1 hour by motorway. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Capitale de la Wallonie au confluent de la Sambre et de la Meuse, Namur veille depuis sa citadelle sur une vieille ville pavée et un fleuve bordé de guinguettes. Votre **chauffeur privé à Namur** dessert le Parlement wallon, le centre historique et les rendez-vous institutionnels : transferts depuis Bruxelles, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs francophones et anglophones.',
        'Namur est la **porte des Ardennes et de la Meuse**. Dinant et sa collégiale à 30 km, les châteaux de la vallée, les grottes de Han se rejoignent en moins d’une heure. En mise à disposition à la journée, votre chauffeur relie rendez-vous, tables du terroir et escapades nature au fil du fleuve.',
      ],
      en: [
        'Capital of Wallonia at the confluence of the Sambre and the Meuse, Namur watches from its citadel over a cobbled old town and a river lined with guinguettes. Your **private chauffeur in Namur** serves the Walloon Parliament, the historic centre and institutional meetings: transfers from Brussels, hourly hire, fixed prices. Mercedes sedans and vans, French- and English-speaking chauffeurs.',
        'Namur is the **gateway to the Ardennes and the Meuse**. Dinant and its collegiate church 30 km away, the valley castles, the Han caves are all less than an hour away. With a full-day hire, your chauffeur links meetings, regional tables and nature getaways along the river.',
      ],
    },
    experiences: [
      { title: { fr: 'Citadelle et vieille ville', en: 'Citadel and old town' }, teaser: { fr: 'La citadelle et son panorama sur les deux vallées, les ruelles pavées, le beffroi classé UNESCO. Dépose au sommet, montée évitée.', en: 'The citadel and its panorama over the two valleys, the cobbled lanes, the UNESCO-listed belfry. Drop-off at the top, the climb avoided.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Dinant et la Meuse', en: 'Dinant and the Meuse' }, teaser: { fr: 'La collégiale accrochée à la falaise, la citadelle, la maison de Sax. Croisière sur la Meuse et déjeuner en bord de fleuve à 30 km.', en: 'The collegiate church clinging to the cliff, the citadel, the Sax house. A Meuse cruise and a riverside lunch 30 km away.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '360' },
      { title: { fr: 'Grottes de Han et nature', en: 'Han caves and nature' }, teaser: { fr: 'Les célèbres grottes de Han-sur-Lesse et leur parc animalier, les paysages de la Famenne. Journée nature en famille à moins d’une heure.', en: 'The famous Han-sur-Lesse caves and their wildlife park, the Famenne landscapes. A family nature day less than an hour away.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Châteaux de la vallée', en: 'Valley castles' }, teaser: { fr: 'Les châteaux de la vallée de la Meuse — Annevoie et ses jardins d’eau, Freÿr et ses jardins à la française. Journée patrimoine et déjeuner du terroir.', en: 'The castles of the Meuse valley — Annevoie and its water gardens, Freÿr and its formal gardens. A heritage day and a regional lunch.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Soirée au confluent', en: 'Evening at the confluence' }, teaser: { fr: 'Le confluent illuminé, dîner dans une table du centre, l’ambiance des quais. Véhicule à disposition toute la soirée.', en: 'The illuminated confluence, dinner at a table in the centre, the atmosphere of the quays. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Bruxelles à Namur ?', en: 'How long from Brussels Airport to Namur?' }, a: { fr: 'Comptez 50 minutes à 1 heure par l’autoroute. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 50 minutes to 1 hour by motorway. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on combiner Namur et Dinant dans la journée ?', en: 'Can Namur and Dinant be combined in one day?' }, a: { fr: 'Oui, Dinant est à 30 km de Namur. En mise à disposition à la journée, votre chauffeur combine citadelle, croisière sur la Meuse et déjeuner en bord de fleuve.', en: 'Yes, Dinant is 30 km from Namur. With a full-day hire, your chauffeur combines the citadel, a Meuse cruise and a riverside lunch.' } },
      { q: { fr: 'Vos chauffeurs à Namur parlent-ils anglais ?', en: 'Do your chauffeurs in Namur speak English?' }, a: { fr: 'Oui, nos chauffeurs sont francophones et anglophones ; d’autres langues sont disponibles sur demande selon les disponibilités.', en: 'Yes, our chauffeurs speak French and English; other languages are available on request subject to availability.' } },
    ],
    nearby: ['liege', 'brussels'],
  },
  {
    slug: 'waterloo',
    name: { fr: 'Waterloo', en: 'Waterloo' },
    country: { fr: 'Belgique', en: 'Belgium' },
    region: 'uk-benelux',
    airport: 'Bruxelles-Zaventem (BRU)',
    airportTransfer: {
      fr: 'L’aéroport de Bruxelles-Zaventem (BRU) se trouve à 35 km au nord de Waterloo : comptez 40 à 50 minutes selon le trafic. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Brussels Airport (BRU) lies 35 km north of Waterloo: allow 40 to 50 minutes depending on traffic. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Théâtre de la bataille qui mit fin à l’épopée napoléonienne en 1815, Waterloo conjugue mémoire historique et banlieue résidentielle cossue au sud de Bruxelles. Votre **chauffeur privé à Waterloo** dessert le champ de bataille, la butte du Lion et les demeures des environs : transferts depuis Bruxelles, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs francophones et anglophones.',
        'Waterloo est aux portes de **Bruxelles**. La capitale et sa Grand-Place sont à 20 minutes, le Brabant wallon et ses châteaux tout autour. En mise à disposition à la journée, votre chauffeur combine site historique, escapade dans la capitale et déjeuner de campagne, dans le confort d’une berline privée.',
      ],
      en: [
        'Scene of the battle that ended the Napoleonic epic in 1815, Waterloo blends historical memory with an affluent residential suburb south of Brussels. Your **private chauffeur in Waterloo** serves the battlefield, the Lion’s Mound and the surrounding estates: transfers from Brussels, hourly hire, fixed prices. Mercedes sedans and vans, French- and English-speaking chauffeurs.',
        'Waterloo is at the gates of **Brussels**. The capital and its Grand-Place are 20 minutes away, the Walloon Brabant and its castles all around. With a full-day hire, your chauffeur combines the historic site, a capital getaway and a country lunch, in the comfort of a private sedan.',
      ],
    },
    experiences: [
      { title: { fr: 'Champ de bataille de 1815', en: '1815 battlefield' }, teaser: { fr: 'La butte du Lion et son panorama, le Mémorial 1815, la ferme d’Hougoumont. Demi-journée d’histoire napoléonienne avec dépose devant chaque site.', en: 'The Lion’s Mound and its panorama, the Memorial 1815, the Hougoumont farm. A half-day of Napoleonic history with door-to-door drop-offs.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Bruxelles depuis Waterloo', en: 'Brussels from Waterloo' }, teaser: { fr: 'À 20 minutes, la Grand-Place, le Sablon et le quartier européen. Journée dans la capitale, véhicule en attente entre les étapes.', en: '20 minutes away, the Grand-Place, the Sablon and the European quarter. A day in the capital, vehicle on standby between stops.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Châteaux du Brabant wallon', en: 'Walloon Brabant castles' }, teaser: { fr: 'Le château de La Hulpe et sa fondation Folon, les domaines et jardins du Brabant. Journée nature et art aux portes de Bruxelles.', en: 'The La Hulpe castle and its Folon foundation, the estates and gardens of the Brabant. A day of nature and art at the gates of Brussels.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Villes d’art flamandes', en: 'Flemish art cities' }, teaser: { fr: 'Gand ou Bruges à la journée depuis Waterloo : villes médiévales, canaux, déjeuner sur place. Circuit privé confortable au départ de la banlieue sud.', en: 'Ghent or Bruges on a day trip from Waterloo: medieval cities, canals, lunch on site. A comfortable private tour from the southern suburb.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '690' },
      { title: { fr: 'Soirée à Bruxelles', en: 'Evening in Brussels' }, teaser: { fr: 'Dîner dans une table de la capitale, la Grand-Place illuminée, retour tranquille à Waterloo. Véhicule à disposition toute la soirée.', en: 'Dinner at a table in the capital, the illuminated Grand-Place, a quiet return to Waterloo. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '380' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de l’aéroport de Bruxelles à Waterloo ?', en: 'How long from Brussels Airport to Waterloo?' }, a: { fr: 'Comptez 40 à 50 minutes selon le trafic. Le transfert privé est à prix fixe, avec accueil, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 40 to 50 minutes depending on traffic. The private transfer is at a fixed price, with a meet-and-greet, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on combiner Waterloo et Bruxelles ?', en: 'Can Waterloo and Brussels be combined?' }, a: { fr: 'Oui, la capitale est à 20 minutes. En mise à disposition à la journée, votre chauffeur combine le champ de bataille le matin et Bruxelles l’après-midi, à votre rythme.', en: 'Yes, the capital is 20 minutes away. With a full-day hire, your chauffeur combines the battlefield in the morning and Brussels in the afternoon, at your pace.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, nos chauffeurs sont francophones et anglophones ; d’autres langues sont disponibles sur demande selon les disponibilités.', en: 'Yes, our chauffeurs speak French and English; other languages are available on request subject to availability.' } },
    ],
    nearby: ['brussels', 'namur'],
  },
  {
    slug: 'spa',
    name: { fr: 'Spa', en: 'Spa' },
    country: { fr: 'Belgique', en: 'Belgium' },
    region: 'uk-benelux',
    airport: 'Bruxelles-Zaventem (BRU)',
    airportTransfer: {
      fr: 'L’aéroport de Bruxelles-Zaventem (BRU) se trouve à 130 km à l’ouest de Spa : comptez 1h15 à 1h30 par l’autoroute. Depuis Liège (LGG), à 40 km, comptez 40 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Brussels Airport (BRU) lies 130 km west of Spa: allow 1h15 to 1h30 by motorway. From Liège (LGG), 40 km away, allow 40 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville d’eau qui a donné son nom à toutes les stations thermales du monde, Spa niche ses sources, son casino historique et ses hôtels de cure dans les forêts des Ardennes. Votre **chauffeur privé à Spa** dessert les thermes, le circuit de Francorchamps et les demeures de la région : transferts depuis Liège ou Bruxelles, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Spa est au cœur des **Ardennes belges**. Le mythique circuit de Spa-Francorchamps est à 10 km, les Hautes Fagnes et leurs tourbières tout autour, l’Allemagne et le Luxembourg à moins d’une heure. En mise à disposition, votre chauffeur relie cure thermale, week-end automobile et escapades nature dans un décor de forêts et de vallons.',
      ],
      en: [
        'The spa town that gave its name to every thermal resort in the world, Spa nestles its springs, historic casino and cure hotels in the Ardennes forests. Your **private chauffeur in Spa** serves the baths, the Francorchamps circuit and the region’s estates: transfers from Liège or Brussels, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Spa lies at the heart of the **Belgian Ardennes**. The legendary Spa-Francorchamps circuit is 10 km away, the High Fens and their peat bogs all around, Germany and Luxembourg less than an hour away. With a chauffeur hire, your driver links thermal cures, a motorsport weekend and nature getaways in a setting of forests and valleys.',
      ],
    },
    experiences: [
      { title: { fr: 'Circuit de Spa-Francorchamps', en: 'Spa-Francorchamps circuit' }, teaser: { fr: 'À 10 km, le Raidillon de l’Eau Rouge, les tribunes du temple de la vitesse. Journée idéale les week-ends de Grand Prix ou d’endurance, transferts et attente inclus.', en: '10 km away, the Eau Rouge corner, the grandstands of the temple of speed. An ideal day on Grand Prix or endurance weekends, transfers and waiting included.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Thermes et Hautes Fagnes', en: 'Baths and High Fens' }, teaser: { fr: 'Les Thermes de Spa perchés sur la colline, les tourbières des Hautes Fagnes, un déjeuner ardennais. Journée bien-être et nature.', en: 'The Thermes de Spa perched on the hill, the High Fens peat bogs, an Ardennes lunch. A day of wellness and nature.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Spa historique', en: 'Historic Spa' }, teaser: { fr: 'Le casino, plus ancien du monde, les sources Pouhon, les villas de la Belle Époque. Demi-journée patrimoine avec dépose devant chaque site.', en: 'The world’s oldest casino, the Pouhon springs, the Belle Époque villas. A half-day of heritage with door-to-door drop-offs.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Vallée de la Meuse', en: 'Meuse valley' }, teaser: { fr: 'Les châteaux et falaises de la Meuse, Dinant et sa collégiale, une croisière sur le fleuve. Journée patrimoine à travers la Wallonie.', en: 'The castles and cliffs of the Meuse, Dinant and its collegiate church, a river cruise. A heritage day across Wallonia.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Soirée thermale', en: 'Thermal evening' }, teaser: { fr: 'Dîner dans un hôtel de cure, une soirée au casino, le calme des forêts ardennaises. Véhicule à disposition toute la soirée.', en: 'Dinner at a cure hotel, an evening at the casino, the calm of the Ardennes forests. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '360' },
    ],
    faq: [
      { q: { fr: 'Peut-on assister à un Grand Prix à Spa-Francorchamps avec chauffeur ?', en: 'Can you attend a Grand Prix at Spa-Francorchamps with a chauffeur?' }, a: { fr: 'Oui, c’est même l’usage le plus demandé les week-ends d’événement, où le stationnement est saturé. Votre chauffeur vous dépose au plus près, vous attend et vous ramène sans les embouteillages de sortie.', en: 'Yes, it is the most requested use on event weekends, when parking is saturated. Your chauffeur drops you as close as possible, waits and brings you back without the exit traffic.' } },
      { q: { fr: 'Depuis quel aéroport rejoint-on Spa ?', en: 'From which airport do you reach Spa?' }, a: { fr: 'Spa est à 40 minutes de Liège (LGG) et à 1h15-1h30 de Bruxelles (BRU). Votre chauffeur vous accueille à l’aéroport de votre choix avec panneau nominatif, à prix fixe.', en: 'Spa is 40 minutes from Liège (LGG) and 1h15-1h30 from Brussels (BRU). Your chauffeur greets you at the airport of your choice with a name board, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['liege', 'namur'],
  },
  {
    slug: 'haarlem',
    name: { fr: 'Haarlem', en: 'Haarlem' },
    country: { fr: 'Pays-Bas', en: 'Netherlands' },
    region: 'uk-benelux',
    airport: 'Amsterdam-Schiphol (AMS)',
    airportTransfer: {
      fr: 'L’aéroport d’Amsterdam-Schiphol (AMS) se trouve à 15 km au sud-est de Haarlem : comptez 20 à 30 minutes selon le trafic. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Amsterdam-Schiphol Airport (AMS) lies 15 km south-east of Haarlem: allow 20 to 30 minutes depending on traffic. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ancienne cité drapière et ville de Frans Hals, Haarlem aligne sa Grote Markt, ses hofjes secrets et ses canaux à quinze minutes d’Amsterdam, sans la foule. Votre **chauffeur privé à Haarlem** dessert le centre, le musée Frans Hals et les champs de fleurs voisins : transferts depuis Schiphol, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Haarlem est la porte des **champs de tulipes du Bollenstreek**. Le parc de Keukenhof et la station balnéaire de Zandvoort sont à quinze minutes, Amsterdam à vingt. En mise à disposition à la journée, votre chauffeur relie musées, jardins fleuris au printemps et plages de la mer du Nord dans un rayon très court.',
      ],
      en: [
        'A former cloth city and the town of Frans Hals, Haarlem offers its Grote Markt, secret hofjes and canals fifteen minutes from Amsterdam, without the crowds. Your **private chauffeur in Haarlem** serves the centre, the Frans Hals Museum and the nearby flower fields: transfers from Schiphol, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Haarlem is the gateway to the **Bollenstreek tulip fields**. The Keukenhof park and the seaside resort of Zandvoort are fifteen minutes away, Amsterdam twenty. With a full-day hire, your chauffeur links museums, spring flower gardens and North Sea beaches within a very short radius.',
      ],
    },
    experiences: [
      { title: { fr: 'Haarlem et Frans Hals', en: 'Haarlem and Frans Hals' }, teaser: { fr: 'La Grote Markt et son église Saint-Bavon, le musée Frans Hals, les hofjes cachés. Dépose au centre, promenade au calme à quinze minutes d’Amsterdam.', en: 'The Grote Markt and its Saint Bavo church, the Frans Hals Museum, the hidden hofjes. Drop-off in the centre, a quiet stroll fifteen minutes from Amsterdam.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Keukenhof et champs de tulipes', en: 'Keukenhof and tulip fields' }, teaser: { fr: 'Le plus grand jardin de bulbes au monde (mars à mai), les champs de tulipes du Bollenstreek en damiers colorés. Journée fleurie au printemps.', en: 'The world’s largest bulb garden (March to May), the chequerboard tulip fields of the Bollenstreek. A flowery day in spring.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '520' },
      { title: { fr: 'Zandvoort et la mer du Nord', en: 'Zandvoort and the North Sea' }, teaser: { fr: 'La plage et la digue de Zandvoort, le circuit de Formule 1, les dunes. Demi-journée iodée à quinze minutes de la ville.', en: 'The beach and promenade of Zandvoort, the Formula 1 circuit, the dunes. A seaside half-day fifteen minutes from town.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Amsterdam depuis Haarlem', en: 'Amsterdam from Haarlem' }, teaser: { fr: 'À vingt minutes, les canaux, le Rijksmuseum et le quartier des musées. Journée dans la capitale, véhicule en attente, retour au calme le soir.', en: 'Twenty minutes away, the canals, the Rijksmuseum and the museum quarter. A day in the capital, vehicle on standby, a quiet return in the evening.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Soirée à Haarlem', en: 'Evening in Haarlem' }, teaser: { fr: 'Dîner sur la Grote Markt, les canaux illuminés, l’ambiance des cafés bruns loin de l’effervescence d’Amsterdam. Véhicule à disposition toute la soirée.', en: 'Dinner on the Grote Markt, the illuminated canals, the atmosphere of the brown cafés far from Amsterdam’s buzz. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de Schiphol à Haarlem ?', en: 'How long from Schiphol to Haarlem?' }, a: { fr: 'Comptez 20 à 30 minutes selon le trafic. Le transfert privé est à prix fixe, avec accueil en salle d’arrivée, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 20 to 30 minutes depending on traffic. The private transfer is at a fixed price, with a meet-and-greet in arrivals, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on visiter Keukenhof avec un chauffeur privé ?', en: 'Can you visit Keukenhof with a private chauffeur?' }, a: { fr: 'Oui. Keukenhof est à quinze minutes de Haarlem et ouvre de mars à mai. Votre chauffeur vous dépose à l’entrée, vous évite le stationnement saturé et prolonge par les champs de tulipes.', en: 'Yes. Keukenhof is fifteen minutes from Haarlem and open from March to May. Your chauffeur drops you at the entrance, spares you the saturated parking and extends to the tulip fields.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['amsterdam', 'keukenhof-lisse', 'leiden'],
  },
  {
    slug: 'delft',
    name: { fr: 'Delft', en: 'Delft' },
    country: { fr: 'Pays-Bas', en: 'Netherlands' },
    region: 'uk-benelux',
    airport: 'Amsterdam-Schiphol (AMS)',
    airportTransfer: {
      fr: 'L’aéroport d’Amsterdam-Schiphol (AMS) se trouve à 60 km au nord de Delft : comptez 45 minutes à 1 heure. Depuis Rotterdam-La Haye (RTM), à 10 km, comptez 15 minutes. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Amsterdam-Schiphol Airport (AMS) lies 60 km north of Delft: allow 45 minutes to 1 hour. From Rotterdam-The Hague (RTM), 10 km away, allow 15 minutes. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Ville de Vermeer et berceau de la faïence bleue, Delft déroule ses canaux, sa place du marché et ses églises entre La Haye et Rotterdam. Votre **chauffeur privé à Delft** dessert le centre historique, les manufactures de faïence et les rendez-vous d’affaires de la Randstad : transferts depuis Schiphol ou Rotterdam, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Delft est au cœur de la **Randstad hollandaise**. La Haye et ses institutions à 10 km, Rotterdam et son port à 15 km, les plages de Scheveningen tout près. En mise à disposition à la journée, votre chauffeur relie rendez-vous professionnels, musées et centres historiques d’une conurbation dense en un temps record.',
      ],
      en: [
        'The town of Vermeer and cradle of blue earthenware, Delft unrolls its canals, market square and churches between The Hague and Rotterdam. Your **private chauffeur in Delft** serves the historic centre, the earthenware factories and the business meetings of the Randstad: transfers from Schiphol or Rotterdam, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Delft lies at the heart of the **Dutch Randstad**. The Hague and its institutions 10 km away, Rotterdam and its port 15 km, the Scheveningen beaches nearby. With a full-day hire, your chauffeur links business meetings, museums and historic centres of a dense conurbation in record time.',
      ],
    },
    experiences: [
      { title: { fr: 'Delft et la faïence bleue', en: 'Delft and blue earthenware' }, teaser: { fr: 'La Nieuwe Kerk, la place du marché, une manufacture historique de faïence de Delft. Dépose au centre, promenade le long des canaux.', en: 'The Nieuwe Kerk, the market square, a historic Delft earthenware factory. Drop-off in the centre, a stroll along the canals.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'La Haye et le Mauritshuis', en: 'The Hague and the Mauritshuis' }, teaser: { fr: 'À 10 km, le Mauritshuis et la Jeune Fille à la perle de Vermeer, le Binnenhof, la plage de Scheveningen. Journée capitale et art.', en: '10 km away, the Mauritshuis and Vermeer’s Girl with a Pearl Earring, the Binnenhof, Scheveningen beach. A day of capital and art.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Rotterdam et l’architecture', en: 'Rotterdam and architecture' }, teaser: { fr: 'À 15 km, la ville moderne, le Markthal, les maisons cubiques, le port. Demi-journée design de l’autre côté de la Randstad.', en: '15 km away, the modern city, the Markthal, the cube houses, the port. A design half-day on the other side of the Randstad.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '360' },
      { title: { fr: 'Randstad en une journée', en: 'Randstad in a day' }, teaser: { fr: 'Delft, La Haye et Rotterdam enchaînées : art, institutions et architecture, un déjeuner en chemin, véhicule à disposition. Confort d’un circuit privé.', en: 'Delft, The Hague and Rotterdam in sequence: art, institutions and architecture, lunch en route, vehicle on standby. The comfort of a private tour.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '690' },
      { title: { fr: 'Soirée sur les canaux', en: 'Evening on the canals' }, teaser: { fr: 'Dîner au bord de l’eau, les canaux et la Nieuwe Kerk illuminés, l’ambiance étudiante paisible. Véhicule à disposition toute la soirée.', en: 'Dinner by the water, the illuminated canals and Nieuwe Kerk, the peaceful student atmosphere. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Depuis quel aéroport rejoint-on Delft ?', en: 'From which airport do you reach Delft?' }, a: { fr: 'Delft est à 15 minutes de Rotterdam-La Haye (RTM) et à 45 minutes-1 heure de Schiphol (AMS). Votre chauffeur vous accueille à l’aéroport de votre choix avec panneau nominatif, à prix fixe.', en: 'Delft is 15 minutes from Rotterdam-The Hague (RTM) and 45 minutes-1 hour from Schiphol (AMS). Your chauffeur greets you at the airport of your choice with a name board, at a fixed price.' } },
      { q: { fr: 'Peut-on visiter plusieurs villes de la Randstad dans la journée ?', en: 'Can you visit several Randstad cities in one day?' }, a: { fr: 'Oui, les villes sont très proches. En mise à disposition à la journée, votre chauffeur combine Delft, La Haye et Rotterdam avec un déjeuner, sans temps perdu en transports.', en: 'Yes, the cities are very close. With a full-day hire, your chauffeur combines Delft, The Hague and Rotterdam with lunch, with no time lost in transport.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['the-hague', 'rotterdam', 'leiden'],
  },
  {
    slug: 'leiden',
    name: { fr: 'Leyde', en: 'Leiden' },
    country: { fr: 'Pays-Bas', en: 'Netherlands' },
    region: 'uk-benelux',
    airport: 'Amsterdam-Schiphol (AMS)',
    airportTransfer: {
      fr: 'L’aéroport d’Amsterdam-Schiphol (AMS) se trouve à 20 km au nord-est de Leyde : comptez 20 à 30 minutes. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Amsterdam-Schiphol Airport (AMS) lies 20 km north-east of Leiden: allow 20 to 30 minutes. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Plus ancienne ville universitaire des Pays-Bas et berceau de Rembrandt, Leyde entrelace canaux, cours secrètes et musées savants à vingt minutes d’Amsterdam. Votre **chauffeur privé à Leyde** dessert le centre historique, l’université et les champs de fleurs voisins : transferts depuis Schiphol, mise à disposition à l’heure, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Leyde est au cœur du **Bollenstreek fleuri**. Le parc de Keukenhof est à dix minutes, La Haye et sa côte à quinze, Amsterdam à vingt. En mise à disposition à la journée, votre chauffeur relie musées, jardins de tulipes au printemps et centres historiques dans un rayon très resserré.',
      ],
      en: [
        'The oldest university city in the Netherlands and birthplace of Rembrandt, Leiden weaves canals, secret courtyards and scholarly museums twenty minutes from Amsterdam. Your **private chauffeur in Leiden** serves the historic centre, the university and the nearby flower fields: transfers from Schiphol, hourly hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Leiden lies at the heart of the **flowering Bollenstreek**. The Keukenhof park is ten minutes away, The Hague and its coast fifteen, Amsterdam twenty. With a full-day hire, your chauffeur links museums, spring tulip gardens and historic centres within a very tight radius.',
      ],
    },
    experiences: [
      { title: { fr: 'Leyde et Rembrandt', en: 'Leiden and Rembrandt' }, teaser: { fr: 'Les canaux, le moulin De Valk, le musée national des Antiquités, la maison natale de Rembrandt. Dépose au centre, promenade le long des cours d’eau.', en: 'The canals, the De Valk windmill, the National Museum of Antiquities, Rembrandt’s birthplace. Drop-off in the centre, a stroll along the waterways.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '340' },
      { title: { fr: 'Keukenhof et le Bollenstreek', en: 'Keukenhof and the Bollenstreek' }, teaser: { fr: 'À dix minutes, le plus grand jardin de bulbes au monde et les champs de tulipes en damiers (mars à mai). Journée fleurie au printemps.', en: 'Ten minutes away, the world’s largest bulb garden and the chequerboard tulip fields (March to May). A flowery day in spring.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '520' },
      { title: { fr: 'La Haye et la côte', en: 'The Hague and the coast' }, teaser: { fr: 'À 15 km, le Mauritshuis, le Binnenhof et la plage de Scheveningen. Journée art et mer du Nord depuis Leyde.', en: '15 km away, the Mauritshuis, the Binnenhof and Scheveningen beach. A day of art and North Sea from Leiden.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Amsterdam depuis Leyde', en: 'Amsterdam from Leiden' }, teaser: { fr: 'À vingt minutes, les canaux, le Rijksmuseum et le quartier des musées. Journée dans la capitale, retour au calme le soir.', en: 'Twenty minutes away, the canals, the Rijksmuseum and the museum quarter. A day in the capital, a quiet return in the evening.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Soirée universitaire', en: 'University evening' }, teaser: { fr: 'Dîner au bord d’un canal, les poèmes muraux de la ville, l’ambiance des cafés étudiants. Véhicule à disposition toute la soirée.', en: 'Dinner by a canal, the city’s wall poems, the atmosphere of the student cafés. Vehicle on standby all evening.' }, duration: { fr: 'Soirée', en: 'Evening' }, price: '340' },
    ],
    faq: [
      { q: { fr: 'Combien de temps de Schiphol à Leyde ?', en: 'How long from Schiphol to Leiden?' }, a: { fr: 'Comptez 20 à 30 minutes. Le transfert privé est à prix fixe, avec accueil en salle d’arrivée, suivi du vol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow 20 to 30 minutes. The private transfer is at a fixed price, with a meet-and-greet in arrivals, flight tracking and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Leyde est-elle proche des champs de tulipes ?', en: 'Is Leiden close to the tulip fields?' }, a: { fr: 'Oui, Keukenhof et le Bollenstreek sont à dix minutes. Au printemps, votre chauffeur combine la ville et les champs fleuris dans une même journée, à prix fixe.', en: 'Yes, Keukenhof and the Bollenstreek are ten minutes away. In spring, your chauffeur combines the city and the flowering fields in a single day, at a fixed price.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['keukenhof-lisse', 'the-hague', 'haarlem'],
  },
  {
    slug: 'giethoorn',
    name: { fr: 'Giethoorn', en: 'Giethoorn' },
    country: { fr: 'Pays-Bas', en: 'Netherlands' },
    region: 'uk-benelux',
    airport: 'Amsterdam-Schiphol (AMS)',
    airportTransfer: {
      fr: 'L’aéroport d’Amsterdam-Schiphol (AMS) se trouve à 130 km au sud-ouest de Giethoorn : comptez 1h30 par l’autoroute. Votre chauffeur vous accueille avec panneau nominatif et suit votre vol en temps réel.',
      en: 'Amsterdam-Schiphol Airport (AMS) lies 130 km south-west of Giethoorn: allow 1h30 by motorway. Your chauffeur greets you with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Village sans routes surnommé la « Venise du Nord », Giethoorn s’égrène le long de canaux paisibles, entre chaumières et ponts de bois, au cœur du parc national de Weerribben-Wieden. Votre **chauffeur privé à Giethoorn** vous conduit depuis Amsterdam ou Schiphol jusqu’aux abords du village, où la promenade se poursuit en barque électrique : transferts à prix fixe, mise à disposition à la journée. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Giethoorn se découvre en excursion depuis Amsterdam. À 1h30 de route, ce village-carte-postale offre une parenthèse hors du temps, souvent combinée avec les villages de pêcheurs de l’ancienne mer du Zuiderzee. En mise à disposition à la journée, votre chauffeur vous attend pendant votre balade en barque et vous ramène en fin d’après-midi, sans la contrainte des trains régionaux.',
      ],
      en: [
        'A road-free village nicknamed the “Venice of the North”, Giethoorn threads along peaceful canals, among thatched cottages and wooden bridges, in the heart of the Weerribben-Wieden national park. Your **private chauffeur in Giethoorn** drives you from Amsterdam or Schiphol to the edge of the village, where the visit continues by electric boat: fixed-price transfers, full-day hire. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Giethoorn is best discovered on an excursion from Amsterdam. A 1h30 drive away, this postcard village offers a timeless interlude, often combined with the fishing villages of the former Zuiderzee. With a full-day hire, your chauffeur waits during your boat ride and brings you back in the late afternoon, without the constraint of regional trains.',
      ],
    },
    experiences: [
      { title: { fr: 'Giethoorn en barque', en: 'Giethoorn by boat' }, teaser: { fr: 'Le village sans voitures, ses canaux, ses chaumières et ponts de bois, une promenade en barque électrique. Votre chauffeur vous attend à l’embarcadère.', en: 'The car-free village, its canals, thatched cottages and wooden bridges, a ride by electric boat. Your chauffeur waits at the jetty.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Villages du Zuiderzee', en: 'Zuiderzee villages' }, teaser: { fr: 'Les anciens ports de pêche de Volendam et Marken, les maisons de bois, un déjeuner de hareng. Journée traditions au bord de l’ancienne mer intérieure.', en: 'The former fishing ports of Volendam and Marken, the wooden houses, a herring lunch. A day of traditions on the shore of the former inland sea.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Giethoorn et Kampen', en: 'Giethoorn and Kampen' }, teaser: { fr: 'Le village-canaux le matin, la cité hanséatique de Kampen et ses quais sur l’IJssel l’après-midi. Journée patrimoine hors des sentiers battus.', en: 'The canal village in the morning, the Hanseatic town of Kampen and its IJssel quays in the afternoon. A heritage day off the beaten track.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
      { title: { fr: 'Nature de Weerribben-Wieden', en: 'Weerribben-Wieden nature' }, teaser: { fr: 'Le plus grand marais de tourbe d’Europe occidentale, ses roselières et sa faune, une balade au fil de l’eau. Journée nature au rythme lent.', en: 'Western Europe’s largest peat marsh, its reed beds and wildlife, a waterside walk. A slow-paced nature day.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Excursion depuis Amsterdam', en: 'Excursion from Amsterdam' }, teaser: { fr: '1h30 de route depuis la capitale : le village, la barque et un déjeuner, retour à Amsterdam le soir. Journée clé en main loin de la foule.', en: '1h30 from the capital: the village, the boat and lunch, back in Amsterdam in the evening. A turnkey day away from the crowds.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '690' },
    ],
    faq: [
      { q: { fr: 'Peut-on visiter Giethoorn à la journée depuis Amsterdam ?', en: 'Can Giethoorn be visited on a day trip from Amsterdam?' }, a: { fr: 'Oui. Giethoorn est à 1h30 d’Amsterdam. En mise à disposition à la journée, votre chauffeur vous y conduit, vous attend pendant la balade en barque et vous ramène en fin d’après-midi, à prix fixe.', en: 'Yes. Giethoorn is 1h30 from Amsterdam. With a full-day hire, your chauffeur takes you there, waits during the boat ride and brings you back in the late afternoon, at a fixed price.' } },
      { q: { fr: 'Y a-t-il des routes dans Giethoorn ?', en: 'Are there roads in Giethoorn?' }, a: { fr: 'Le cœur du village est sans voitures : on s’y déplace à pied ou en barque. Votre chauffeur vous dépose à l’entrée et vous attend, la visite se poursuivant au fil de l’eau.', en: 'The heart of the village is car-free: you move around on foot or by boat. Your chauffeur drops you at the entrance and waits, the visit continuing along the water.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['amsterdam'],
  },
  {
    slug: 'keukenhof-lisse',
    name: { fr: 'Keukenhof – Lisse', en: 'Keukenhof – Lisse' },
    country: { fr: 'Pays-Bas', en: 'Netherlands' },
    region: 'uk-benelux',
    airport: 'Amsterdam-Schiphol (AMS)',
    airportTransfer: {
      fr: 'L’aéroport d’Amsterdam-Schiphol (AMS) se trouve à 15 km au nord de Keukenhof et Lisse : comptez 20 à 30 minutes. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Amsterdam-Schiphol Airport (AMS) lies 15 km north of Keukenhof and Lisse: allow 20 to 30 minutes. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Au cœur du Bollenstreek, le parc de Keukenhof déploie chaque printemps sept millions de bulbes en fleurs, entouré de champs de tulipes en damiers colorés. Votre **chauffeur privé à Keukenhof** vous dépose à l’entrée du parc, vous évite le stationnement saturé de la haute saison et prolonge la journée dans les villages fleuris de Lisse : transferts depuis Schiphol, mise à disposition à la journée, prix fixes. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Le Bollenstreek se prolonge vers la **côte et les villes d’art**. La station de Noordwijk et ses dunes, Leyde et ses canaux, Haarlem et Amsterdam sont à moins de trente minutes. En mise à disposition, votre chauffeur combine jardins de tulipes, plages de la mer du Nord et centres historiques dans une même journée de printemps.',
      ],
      en: [
        'At the heart of the Bollenstreek, the Keukenhof park unfurls seven million flowering bulbs each spring, surrounded by chequerboard tulip fields. Your **private chauffeur at Keukenhof** drops you at the park entrance, spares you the high-season parking congestion and extends the day into the flowering villages of Lisse: transfers from Schiphol, full-day hire, fixed prices. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'The Bollenstreek extends toward the **coast and the art cities**. The resort of Noordwijk and its dunes, Leiden and its canals, Haarlem and Amsterdam are all less than thirty minutes away. With a chauffeur hire, your driver combines tulip gardens, North Sea beaches and historic centres in a single spring day.',
      ],
    },
    experiences: [
      { title: { fr: 'Parc de Keukenhof', en: 'Keukenhof park' }, teaser: { fr: 'Le plus grand jardin de bulbes au monde (mi-mars à mi-mai), ses parterres de tulipes, jacinthes et narcisses. Dépose à l’entrée, stationnement évité.', en: 'The world’s largest bulb garden (mid-March to mid-May), its beds of tulips, hyacinths and daffodils. Drop-off at the entrance, parking avoided.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '400' },
      { title: { fr: 'Champs de tulipes du Bollenstreek', en: 'Bollenstreek tulip fields' }, teaser: { fr: 'Les champs en damiers colorés autour de Lisse et Hillegom, les meilleurs points de vue au fil des routes de campagne. Arrêts photo tout au long du parcours.', en: 'The colourful chequerboard fields around Lisse and Hillegom, the best viewpoints along the country roads. Photo stops all along the route.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '380' },
      { title: { fr: 'Keukenhof et la côte', en: 'Keukenhof and the coast' }, teaser: { fr: 'Le parc le matin, la station de Noordwijk et ses dunes l’après-midi, un déjeuner face à la mer du Nord. Journée fleurs et grand air.', en: 'The park in the morning, the resort of Noordwijk and its dunes in the afternoon, a lunch facing the North Sea. A day of flowers and fresh air.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Fleurs et villes d’art', en: 'Flowers and art cities' }, teaser: { fr: 'Keukenhof puis Leyde ou Haarlem, canaux et musées à quinze minutes. Journée complète alliant nature fleurie et patrimoine hollandais.', en: 'Keukenhof then Leiden or Haarlem, canals and museums fifteen minutes away. A full day combining flowering nature and Dutch heritage.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Amsterdam et les tulipes', en: 'Amsterdam and the tulips' }, teaser: { fr: 'Les champs fleuris le matin, les canaux d’Amsterdam et le Rijksmuseum l’après-midi. La quintessence des Pays-Bas en une journée.', en: 'The flowering fields in the morning, the Amsterdam canals and the Rijksmuseum in the afternoon. The essence of the Netherlands in one day.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '620' },
    ],
    faq: [
      { q: { fr: 'Quand le parc de Keukenhof est-il ouvert ?', en: 'When is the Keukenhof park open?' }, a: { fr: 'Keukenhof ouvre chaque année de la mi-mars à la mi-mai. En dehors de cette période, votre chauffeur vous propose les champs du Bollenstreek et les villes voisines. Le transfert reste à prix fixe.', en: 'Keukenhof opens each year from mid-March to mid-May. Outside this period, your chauffeur offers the Bollenstreek fields and the neighbouring cities. The transfer remains at a fixed price.' } },
      { q: { fr: 'Faut-il un chauffeur pour visiter Keukenhof ?', en: 'Do you need a chauffeur to visit Keukenhof?' }, a: { fr: 'C’est fortement conseillé en haute saison : le stationnement est saturé et les files interminables. Votre chauffeur vous dépose à l’entrée, vous attend et prolonge vers les champs et villages fleuris.', en: 'It is strongly advised in high season: parking is saturated and queues endless. Your chauffeur drops you at the entrance, waits and extends to the fields and flowering villages.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['leiden', 'haarlem', 'amsterdam'],
  },
  {
    slug: 'zaanse-schans',
    name: { fr: 'Zaanse Schans', en: 'Zaanse Schans' },
    country: { fr: 'Pays-Bas', en: 'Netherlands' },
    region: 'uk-benelux',
    airport: 'Amsterdam-Schiphol (AMS)',
    airportTransfer: {
      fr: 'L’aéroport d’Amsterdam-Schiphol (AMS) se trouve à 30 km au sud de Zaanse Schans : comptez 30 à 40 minutes. Votre chauffeur vous accueille en salle d’arrivée, panneau nominatif en main, et suit votre vol en temps réel.',
      en: 'Amsterdam-Schiphol Airport (AMS) lies 30 km south of Zaanse Schans: allow 30 to 40 minutes. Your chauffeur greets you in arrivals with a name board and tracks your flight in real time.',
    },
    intro: {
      fr: [
        'Musée à ciel ouvert au bord de la Zaan, Zaanse Schans aligne moulins à vent en activité, maisons de bois vertes et ateliers traditionnels, à vingt minutes d’Amsterdam. Votre **chauffeur privé à Zaanse Schans** vous conduit depuis la capitale ou Schiphol jusqu’au site, vous évitant les cars de tourisme et le stationnement bondé : transferts à prix fixe, mise à disposition à la journée. Berlines Mercedes et vans, chauffeurs anglophones sur demande.',
        'Zaanse Schans se combine avec les **villages de l’ancien Zuiderzee**. Volendam, Marken et Edam, patrie du fromage, sont à quinze minutes ; Amsterdam à vingt. En mise à disposition à la journée, votre chauffeur relie moulins, fromageries et ports de pêche traditionnels dans un circuit privé au cœur de la Hollande-Septentrionale.',
      ],
      en: [
        'An open-air museum on the banks of the Zaan, Zaanse Schans lines up working windmills, green wooden houses and traditional workshops, twenty minutes from Amsterdam. Your **private chauffeur at Zaanse Schans** drives you from the capital or Schiphol to the site, sparing you the tour buses and the crowded parking: fixed-price transfers, full-day hire. Mercedes sedans and vans, English-speaking chauffeurs on request.',
        'Zaanse Schans combines with the **villages of the former Zuiderzee**. Volendam, Marken and Edam, home of the cheese, are fifteen minutes away; Amsterdam twenty. With a full-day hire, your chauffeur links windmills, cheese farms and traditional fishing ports in a private tour at the heart of North Holland.',
      ],
    },
    experiences: [
      { title: { fr: 'Moulins de Zaanse Schans', en: 'Zaanse Schans windmills' }, teaser: { fr: 'Les moulins à vent en activité, les ateliers de sabots et de fromage, les maisons de bois vertes au bord de la Zaan. Dépose au site, stationnement évité.', en: 'The working windmills, the clog and cheese workshops, the green wooden houses by the Zaan. Drop-off at the site, parking avoided.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '360' },
      { title: { fr: 'Villages du Zuiderzee', en: 'Zuiderzee villages' }, teaser: { fr: 'Volendam et son port, l’île de Marken et ses maisons de bois, Edam et son marché aux fromages. Journée traditions au bord de l’ancienne mer.', en: 'Volendam and its harbour, the island of Marken and its wooden houses, Edam and its cheese market. A day of traditions by the former sea.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Moulins et fromages', en: 'Windmills and cheese' }, teaser: { fr: 'Zaanse Schans le matin, une fromagerie d’Edam et une dégustation l’après-midi. Journée artisanat et terroir de Hollande-Septentrionale.', en: 'Zaanse Schans in the morning, an Edam cheese farm and a tasting in the afternoon. A day of North Holland crafts and produce.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '560' },
      { title: { fr: 'Amsterdam et Zaanse Schans', en: 'Amsterdam and Zaanse Schans' }, teaser: { fr: 'Les moulins le matin, les canaux et musées d’Amsterdam l’après-midi. La carte postale hollandaise complète en une journée.', en: 'The windmills in the morning, the Amsterdam canals and museums in the afternoon. The complete Dutch postcard in one day.' }, duration: { fr: 'Journée complète', en: 'Full day' }, price: '590' },
      { title: { fr: 'Excursion depuis Amsterdam', en: 'Excursion from Amsterdam' }, teaser: { fr: 'Vingt minutes depuis la capitale : les moulins, un déjeuner de village, retour à Amsterdam. Escapade authentique loin de la foule du centre.', en: 'Twenty minutes from the capital: the windmills, a village lunch, back in Amsterdam. An authentic getaway away from the city-centre crowds.' }, duration: { fr: 'Demi-journée', en: 'Half day' }, price: '380' },
    ],
    faq: [
      { q: { fr: 'Combien de temps d’Amsterdam à Zaanse Schans ?', en: 'How long from Amsterdam to Zaanse Schans?' }, a: { fr: 'Comptez une vingtaine de minutes. Le transfert privé est à prix fixe, avec accueil, suivi du vol depuis Schiphol et 60 minutes d’attente offertes en cas de retard.', en: 'Allow about twenty minutes. The private transfer is at a fixed price, with a meet-and-greet, flight tracking from Schiphol and 60 minutes of complimentary waiting time in case of delay.' } },
      { q: { fr: 'Peut-on combiner Zaanse Schans et les villages de pêcheurs ?', en: 'Can Zaanse Schans and the fishing villages be combined?' }, a: { fr: 'Oui, Volendam, Marken et Edam sont tout proches. En mise à disposition à la journée, votre chauffeur enchaîne moulins, ports traditionnels et dégustation de fromage.', en: 'Yes, Volendam, Marken and Edam are very close. With a full-day hire, your chauffeur links windmills, traditional harbours and a cheese tasting.' } },
      { q: { fr: 'Vos chauffeurs parlent-ils anglais ?', en: 'Do your chauffeurs speak English?' }, a: { fr: 'Oui, des chauffeurs anglophones sont disponibles sur demande, ainsi que d’autres langues selon les disponibilités.', en: 'Yes, English-speaking chauffeurs are available on request, along with other languages subject to availability.' } },
    ],
    nearby: ['amsterdam', 'haarlem'],
  },
];

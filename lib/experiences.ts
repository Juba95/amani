/**
 * Catalogue des expériences signature Amani Limousines.
 * Source de vérité unique pour le hub /experiences, les pages détail
 * et la section expériences de la home. Bilingue FR/EN.
 */

export type ExpLocale = 'fr' | 'en';

export interface Experience {
  slug: string;
  image: string;
  price: string;              // "390 €" affiché tel quel (EN convertit € devant)
  category: { fr: string; en: string };
  duration: { fr: string; en: string };
  title: { fr: string; en: string };
  teaser: { fr: string; en: string };
  description: { fr: string[]; en: string[] };
  highlights: { fr: string[]; en: string[] };
  included: { fr: string[]; en: string[] };
  notIncluded: { fr: string[]; en: string[] };
}

export const EXPERIENCE_CATEGORIES: { id: string; fr: string; en: string }[] = [
  { id: 'all',        fr: 'Toutes',              en: 'All' },
  { id: 'by-night',   fr: 'Soirée',              en: 'By night' },
  { id: 'day-trip',   fr: 'Excursions',          en: 'Day trips' },
  { id: 'wine',       fr: 'Vin & gastronomie',   en: 'Wine & gastronomy' },
];

export const EXPERIENCES: (Experience & { categoryId: string })[] = [
  {
    slug: 'paris-by-night',
    image: '/images/home/parisnight.jpg',
    price: '390',
    categoryId: 'by-night',
    category: { fr: 'Soirée', en: 'By night' },
    duration: { fr: '4 à 5 heures', en: '4–5 hours' },
    title: { fr: 'Paris by Night', en: 'Paris by Night' },
    teaser: {
      fr: 'La tour Eiffel scintillante, Montmartre au crépuscule, dépose dîner sur les Champs-Élysées — votre chauffeur toute la soirée.',
      en: 'The Eiffel Tower sparkling, Montmartre at dusk, dinner drop-off on the Champs-Élysées — with your chauffeur all evening.',
    },
    description: {
      fr: [
        'Paris se révèle à la nuit tombée. Votre chauffeur vous prend à votre hôtel en début de soirée et compose un itinéraire au rythme des illuminations : la tour Eiffel qui scintille à l\'heure pile, la place de la Concorde, les ponts de la Seine, Montmartre et son panorama depuis le Sacré-Cœur.',
        'Le véhicule vous attend à chaque arrêt — pas de recherche de taxi, pas de contrainte horaire. Envie de prolonger par un dîner ? Votre chauffeur vous dépose devant le restaurant et reste à disposition pour le retour.',
      ],
      en: [
        'Paris reveals itself after dark. Your chauffeur collects you from your hotel in the early evening and builds a route around the illuminations: the Eiffel Tower sparkling on the hour, place de la Concorde, the Seine bridges, Montmartre and its panorama from the Sacré-Cœur.',
        'The car waits at every stop — no taxi hunting, no fixed schedule. Fancy extending with dinner? Your chauffeur drops you at the restaurant door and remains at your disposal for the ride back.',
      ],
    },
    highlights: {
      fr: ['La tour Eiffel scintillante depuis le Trocadéro', 'Montmartre et le Sacré-Cœur au crépuscule', 'Itinéraire adapté à vos envies, arrêts photo illimités'],
      en: ['The sparkling Eiffel Tower from the Trocadéro', 'Montmartre and the Sacré-Cœur at dusk', 'Route adapted to your wishes, unlimited photo stops'],
    },
    included: {
      fr: ['Chauffeur privé dédié toute la soirée', 'Véhicule premium (Mercedes Classe E, S ou V)', 'Eau minérale et chargeurs à bord', 'Prise en charge et retour à votre hôtel'],
      en: ['Dedicated private chauffeur all evening', 'Premium vehicle (Mercedes E, S or V-Class)', 'Mineral water and chargers on board', 'Hotel pick-up and drop-off'],
    },
    notIncluded: {
      fr: ['Dîner et consommations', 'Billets d\'entrée éventuels'],
      en: ['Dinner and drinks', 'Any entrance tickets'],
    },
  },
  {
    slug: 'champagne-day-trip',
    image: '/images/home/champagne.jpg',
    price: '890',
    categoryId: 'wine',
    category: { fr: 'Vin & gastronomie', en: 'Wine & gastronomy' },
    duration: { fr: 'Journée complète', en: 'Full day' },
    title: { fr: 'Escapade Champagne', en: 'Champagne Day Trip' },
    teaser: {
      fr: 'Reims et Épernay depuis Paris : visites de maisons, dégustations privées et déjeuner — votre chauffeur gère chaque kilomètre.',
      en: 'Reims & Épernay from Paris: maisons visits, private tastings and lunch — your chauffeur handles every kilometre.',
    },
    description: {
      fr: [
        'À 1h45 de Paris, la Champagne. Départ de votre hôtel le matin, arrivée à Reims pour la visite d\'une grande maison — Veuve Clicquot, Taittinger ou Ruinart selon vos préférences et les disponibilités. Déjeuner à Épernay, sur la mythique avenue de Champagne.',
        'L\'après-midi, cap sur un vigneron indépendant pour une dégustation plus intime, au cœur des vignes. Votre chauffeur connaît les routes des coteaux et vous ramène à Paris en début de soirée. Vous dégustez, il conduit.',
      ],
      en: [
        'Champagne is 1h45 from Paris. Depart your hotel in the morning, arrive in Reims for a tour of a grande maison — Veuve Clicquot, Taittinger or Ruinart depending on your preference and availability. Lunch in Épernay on the legendary avenue de Champagne.',
        'In the afternoon, head to an independent grower for a more intimate tasting among the vines. Your chauffeur knows the hillside roads and brings you back to Paris in the early evening. You taste, he drives.',
      ],
    },
    highlights: {
      fr: ['Visite d\'une grande maison de Champagne', 'Déjeuner sur l\'avenue de Champagne à Épernay', 'Dégustation chez un vigneron indépendant'],
      en: ['Tour of a grande maison de Champagne', 'Lunch on the avenue de Champagne in Épernay', 'Tasting at an independent grower'],
    },
    included: {
      fr: ['Chauffeur privé la journée entière (10-12 h)', 'Véhicule premium, péages et carburant', 'Organisation des visites sur demande', 'Prise en charge à votre hôtel parisien'],
      en: ['Private chauffeur for the whole day (10-12 h)', 'Premium vehicle, tolls and fuel', 'Visit arrangements on request', 'Pick-up at your Paris hotel'],
    },
    notIncluded: {
      fr: ['Entrées des maisons et dégustations', 'Déjeuner'],
      en: ['Maison entrance fees and tastings', 'Lunch'],
    },
  },
  {
    slug: 'loire-valley-castles',
    image: '/images/home/chambord.jpg',
    price: '990',
    categoryId: 'day-trip',
    category: { fr: 'Excursion', en: 'Day trip' },
    duration: { fr: 'Journée complète', en: 'Full day' },
    title: { fr: 'Châteaux de la Loire', en: 'Loire Valley Castles' },
    teaser: {
      fr: 'Chambord, Chenonceau et déjeuner étoilé. Départ de votre hôtel à 8h, retour pour dîner à Paris.',
      en: 'Chambord, Chenonceau and a starred lunch stop. Depart your hotel at 8am, return for dinner in Paris.',
    },
    description: {
      fr: [
        'Deux châteaux en une journée, sans la contrainte des cars de tourisme. Chambord d\'abord — le colossal rêve de François Ier et son escalier à double révolution. Puis Chenonceau, le « château des Dames », posé sur le Cher.',
        'Entre les deux, déjeuner dans une adresse choisie — auberge de charme ou table étoilée selon votre envie. Votre chauffeur ajuste le rythme : plus de temps à Chambord, un détour par Amboise ou Cheverny, tout est possible.',
      ],
      en: [
        'Two castles in one day, without the constraints of tour buses. Chambord first — François I\'s colossal dream and its double-helix staircase. Then Chenonceau, the "château des Dames", spanning the river Cher.',
        'In between, lunch at a hand-picked address — a charming auberge or a starred table, as you wish. Your chauffeur adjusts the pace: more time at Chambord, a detour via Amboise or Cheverny — everything is possible.',
      ],
    },
    highlights: {
      fr: ['Chambord et son escalier à double révolution', 'Chenonceau, le château sur l\'eau', 'Déjeuner dans une adresse sélectionnée'],
      en: ['Chambord and its double-helix staircase', 'Chenonceau, the castle on the water', 'Lunch at a hand-picked address'],
    },
    included: {
      fr: ['Chauffeur privé la journée entière (11-12 h)', 'Véhicule premium, péages et carburant', 'Itinéraire personnalisable en cours de journée', 'Prise en charge à votre hôtel parisien'],
      en: ['Private chauffeur for the whole day (11-12 h)', 'Premium vehicle, tolls and fuel', 'Route adjustable during the day', 'Pick-up at your Paris hotel'],
    },
    notIncluded: {
      fr: ['Billets d\'entrée des châteaux', 'Déjeuner'],
      en: ['Castle entrance tickets', 'Lunch'],
    },
  },
  {
    slug: 'versailles-private',
    image: '/images/home/versailles.jpg',
    price: '450',
    categoryId: 'day-trip',
    category: { fr: 'Excursion', en: 'Day trip' },
    duration: { fr: 'Demi-journée', en: 'Half day' },
    title: { fr: 'Versailles en privé', en: 'Versailles in Private' },
    teaser: {
      fr: 'Le château, les jardins de Le Nôtre et le domaine de Marie-Antoinette — à votre rythme, votre chauffeur vous attend.',
      en: 'The palace, Le Nôtre\'s gardens and Marie-Antoinette\'s estate — at your own pace, your chauffeur waits for you.',
    },
    description: {
      fr: [
        'À 45 minutes de Paris, Versailles mérite mieux qu\'un aller-retour en RER. Votre chauffeur vous dépose à l\'entrée la plus adaptée à l\'affluence du jour, vous conseille sur le parcours, et reste joignable pendant toute votre visite.',
        'Galerie des Glaces, jardins de Le Nôtre, Grand et Petit Trianon, hameau de la Reine — composez votre visite librement. À la sortie, le véhicule est là. Extension possible vers la vallée de Chevreuse ou retour direct.',
      ],
      en: [
        '45 minutes from Paris, Versailles deserves better than a round trip on the commuter train. Your chauffeur drops you at the most suitable entrance given the day\'s crowds, advises you on the route, and stays reachable throughout your visit.',
        'Hall of Mirrors, Le Nôtre\'s gardens, the Grand and Petit Trianon, the Queen\'s hamlet — compose your visit freely. When you come out, the car is there. Possible extension to the Chevreuse valley or direct return.',
      ],
    },
    highlights: {
      fr: ['Dépose à l\'entrée optimale selon l\'affluence', 'Visite à votre rythme, véhicule en attente', 'Conseils d\'itinéraire de votre chauffeur'],
      en: ['Drop-off at the optimal entrance given the crowds', 'Visit at your own pace, car on standby', 'Route advice from your chauffeur'],
    },
    included: {
      fr: ['Chauffeur privé en demi-journée (5-6 h)', 'Véhicule premium, péages et carburant', 'Attente sur place incluse', 'Prise en charge à votre hôtel parisien'],
      en: ['Private chauffeur for a half day (5-6 h)', 'Premium vehicle, tolls and fuel', 'On-site waiting included', 'Pick-up at your Paris hotel'],
    },
    notIncluded: {
      fr: ['Billets d\'entrée du château', 'Guide conférencier (sur demande)'],
      en: ['Palace entrance tickets', 'Licensed guide (on request)'],
    },
  },
  {
    slug: 'mont-saint-michel',
    image: '/images/home/montsaintmichel.jpg',
    price: '1290',
    categoryId: 'day-trip',
    category: { fr: 'Excursion', en: 'Day trip' },
    duration: { fr: 'Journée complète', en: 'Full day' },
    title: { fr: 'Mont Saint-Michel', en: 'Mont Saint-Michel' },
    teaser: {
      fr: 'La Merveille de l\'Occident en une journée depuis Paris — abbaye, baie et déjeuner face à la mer.',
      en: 'The Wonder of the West in a day from Paris — abbey, bay and lunch facing the sea.',
    },
    description: {
      fr: [
        'Le Mont Saint-Michel en une journée depuis Paris, c\'est possible — à condition de ne pas conduire soi-même les 720 km aller-retour. Départ matinal, autoroute de Normandie, arrivée avant les cars de tourisme.',
        'Montée vers l\'abbaye par les remparts, déjeuner face à la baie, temps libre dans les ruelles. Sur le retour, arrêt possible à Honfleur ou Deauville. Vous dormez dans la voiture si vous voulez — votre chauffeur, lui, connaît la route par cœur.',
      ],
      en: [
        'Mont Saint-Michel in a day from Paris is possible — provided you don\'t drive the 450-mile round trip yourself. Early departure, Normandy motorway, arrival before the tour buses.',
        'Climb to the abbey along the ramparts, lunch facing the bay, free time in the medieval lanes. On the way back, an optional stop in Honfleur or Deauville. Sleep in the car if you like — your chauffeur knows the road by heart.',
      ],
    },
    highlights: {
      fr: ['Arrivée avant l\'affluence des cars', 'Déjeuner face à la baie', 'Arrêt possible à Honfleur ou Deauville au retour'],
      en: ['Arrival before the tour-bus crowds', 'Lunch facing the bay', 'Optional stop in Honfleur or Deauville on the way back'],
    },
    included: {
      fr: ['Chauffeur privé la journée entière (13-14 h)', 'Véhicule premium, péages et carburant', 'Itinéraire retour personnalisable', 'Prise en charge à votre hôtel parisien'],
      en: ['Private chauffeur for the whole day (13-14 h)', 'Premium vehicle, tolls and fuel', 'Customisable return route', 'Pick-up at your Paris hotel'],
    },
    notIncluded: {
      fr: ['Entrée de l\'abbaye', 'Déjeuner'],
      en: ['Abbey entrance', 'Lunch'],
    },
  },
  {
    slug: 'giverny-monet',
    image: '/images/home/giverny.jpg',
    price: '590',
    categoryId: 'day-trip',
    category: { fr: 'Excursion', en: 'Day trip' },
    duration: { fr: 'Demi-journée', en: 'Half day' },
    title: { fr: 'Giverny — les jardins de Monet', en: 'Giverny — Monet\'s Gardens' },
    teaser: {
      fr: 'La maison du peintre, le jardin d\'eau et les nymphéas — l\'impressionnisme grandeur nature à 1h de Paris.',
      en: 'The painter\'s house, the water garden and the water lilies — Impressionism life-size, one hour from Paris.',
    },
    description: {
      fr: [
        'Giverny, c\'est le tableau avant le tableau : le pont japonais, l\'étang aux nymphéas, la maison rose aux volets verts où Claude Monet vécut 43 ans. À une heure de Paris par l\'autoroute de Normandie.',
        'Votre chauffeur vous dépose à l\'entrée de la Fondation Monet, vous visitez à votre rythme — comptez deux heures — puis flânez dans le village et ses galeries. Extension possible vers Vernon ou La Roche-Guyon au retour.',
      ],
      en: [
        'Giverny is the painting before the painting: the Japanese bridge, the water-lily pond, the pink house with green shutters where Claude Monet lived for 43 years. One hour from Paris along the Normandy motorway.',
        'Your chauffeur drops you at the entrance of the Monet Foundation, you visit at your own pace — allow two hours — then wander the village and its galleries. Optional extension to Vernon or La Roche-Guyon on the return.',
      ],
    },
    highlights: {
      fr: ['Le jardin d\'eau et le pont japonais', 'La maison de Claude Monet', 'Le village de Giverny et ses galeries'],
      en: ['The water garden and the Japanese bridge', 'Claude Monet\'s house', 'Giverny village and its galleries'],
    },
    included: {
      fr: ['Chauffeur privé en demi-journée (5-6 h)', 'Véhicule premium, péages et carburant', 'Attente sur place incluse', 'Prise en charge à votre hôtel parisien'],
      en: ['Private chauffeur for a half day (5-6 h)', 'Premium vehicle, tolls and fuel', 'On-site waiting included', 'Pick-up at your Paris hotel'],
    },
    notIncluded: {
      fr: ['Entrée de la Fondation Monet', 'Guide conférencier (sur demande)'],
      en: ['Monet Foundation entrance', 'Licensed guide (on request)'],
    },
  },
];

export function getExperience(slug: string) {
  return EXPERIENCES.find((e) => e.slug === slug);
}

// lib/vehicles.ts
// ============================================================
// TARIFICATION AMANI LIMOUSINES
// Pour modifier les prix : change les valeurs ici, tout le site se met à jour.
// ============================================================

export interface Vehicle {
  id: string;
  nameKey: string;
  image: string;
  pax: number;
  bags: number;
  basePrice: number;       // prix minimum en ville
  airportPrice: number;    // forfait aéroport IDF (CDG, Orly, Le Bourget)
  pricePerKm: number;
}

export const VEHICLES: Vehicle[] = [
  {
    id: 'classe_e',
    nameKey: 'classe_e',
    image: '/vehicles/mercedes-classe-e.png',
    pax: 3, bags: 2,
    basePrice: 100,
    airportPrice: 150,     // Forfait aéroport Classe E
    pricePerKm: 3.00,
  },
  {
    id: 'classe_s',
    nameKey: 'classe_s',
    image: '/vehicles/mercedes-classe-s.png',
    pax: 3, bags: 2,
    basePrice: 150,
    airportPrice: 200,     // Forfait aéroport Classe S
    pricePerKm: 4.00,
  },
  {
    id: 'classe_v',
    nameKey: 'classe_v',
    image: '/vehicles/mercedes-classe-v.png',
    pax: 7, bags: 6,
    basePrice: 100,
    airportPrice: 160,     // Forfait aéroport Classe V
    pricePerKm: 3.00,
  },
  {
    id: 'classe_g',
    nameKey: 'classe_g',
    image: '/vehicles/mercedes-classe-g.png',
    pax: 4, bags: 3,
    basePrice: 250,
    airportPrice: 250,     // Forfait aéroport Classe G
    pricePerKm: 5.00,
  },
  {
    id: 'sprinter',
    nameKey: 'sprinter',
    image: '/vehicles/mercedes-sprinter.png',
    pax: 16, bags: 16,
    basePrice: 300,
    airportPrice: 350,     // Forfait aéroport Sprinter VIP
    pricePerKm: 5.00,
  },
  {
    id: 'range_rover_evoque',
    nameKey: 'range_rover_evoque',
    image: '/vehicles/range-rover-evoque.png',
    pax: 3, bags: 2,
    basePrice: 200,
    airportPrice: 250,     // Forfait aéroport Range Rover
    pricePerKm: 5.00,
  },
  {
    id: 'classe_s_maybach',
    nameKey: 'classe_s_maybach',
    image: '/vehicles/mercedes-classe-s-maybach.png',
    pax: 3, bags: 2,
    basePrice: 200,
    airportPrice: 250,     // Forfait aéroport Maybach
    pricePerKm: 5.00,
  },
  {
    id: 'eqs',
    nameKey: 'eqs',
    image: '/vehicles/mercedes-eqe.png',
    pax: 3, bags: 2,
    basePrice: 150,
    airportPrice: 200,     // Forfait aéroport EQS = même que Classe S
    pricePerKm: 4.00,
  },
];

// ── Détection transfert aéroport IDF ────────────────────────────────────────
const AIRPORT_KEYWORDS = [
  'cdg', 'charles de gaulle', 'roissy',
  'orly',
  'bourget', 'le bourget',
  'beauvais',
];

/**
 * Détecte si le trajet est un transfert aéroport IDF.
 * Retourne true si le départ OU l'arrivée contient un mot-clé aéroport.
 */
export function isAirportTransfer(from: string, to: string): boolean {
  const f = from.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const t = to.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return AIRPORT_KEYWORDS.some(kw => f.includes(kw) || t.includes(kw));
}

/**
 * Calcule le prix d'un trajet.
 *
 * Logique :
 * - Transfert aéroport IDF : prix = max(forfaitAéroport, distance × €/km)
 *   → Le forfait est le prix minimum garanti. Si la distance fait dépasser
 *     (ex: destination au fond du 77), on passe au prix/km.
 * - Trajet ville classique : prix = max(prixMinimumVille, distance × €/km)
 */
export function calculatePrice(vehicle: Vehicle, distanceKm: number, airport = false): number {
  const kmPrice = vehicle.pricePerKm * distanceKm;
  const minimum = airport ? vehicle.airportPrice : vehicle.basePrice;
  return Math.max(Math.round(kmPrice), minimum);
}

export const PREDEFINED_ROUTES: Record<string, { km: number; minutes: number }> = {
  'cdg|paris': { km: 32, minutes: 45 },
  'cdg|la defense': { km: 35, minutes: 40 },
  'cdg|disneyland': { km: 45, minutes: 40 },
  'cdg|versailles': { km: 55, minutes: 55 },
  'cdg|gare du nord': { km: 28, minutes: 35 },
  'cdg|gare de lyon': { km: 35, minutes: 45 },
  'cdg|ritz': { km: 30, minutes: 40 },
  'cdg|george v': { km: 32, minutes: 45 },
  'cdg|bristol': { km: 30, minutes: 40 },
  'cdg|plaza': { km: 32, minutes: 45 },
  'cdg|shangri': { km: 33, minutes: 45 },
  'cdg|meurice': { km: 30, minutes: 40 },
  'orly|paris': { km: 18, minutes: 30 },
  'orly|la defense': { km: 30, minutes: 40 },
  'orly|versailles': { km: 25, minutes: 30 },
  'le bourget|paris': { km: 15, minutes: 25 },
  'paris|deauville': { km: 200, minutes: 150 },
  'paris|reims': { km: 145, minutes: 100 },
  'paris|bruxelles': { km: 310, minutes: 200 },
};

export function findRoute(from: string, to: string) {
  const f = from.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const t = to.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  for (const [key, route] of Object.entries(PREDEFINED_ROUTES)) {
    const [rF, rT] = key.split('|');
    if ((f.includes(rF) && t.includes(rT)) || (t.includes(rF) && f.includes(rT))) return route;
  }
  return null;
}

export const SUPPORTED_LOCALES = ['fr', 'en', 'ar', 'zh'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const RTL_LOCALES: Locale[] = ['ar'];
export const DEFAULT_LOCALE: Locale = 'fr';

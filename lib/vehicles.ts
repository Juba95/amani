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
  hourlyPrice: number;     // mise à disposition : tarif horaire
}

export const VEHICLES: Vehicle[] = [
  {
    id: 'classe_e',
    nameKey: 'classe_e',
    image: '/vehicles/mercedes-classe-e.png',
    pax: 3, bags: 2,
    basePrice: 100,        // Tarif minimum ville Classe E
    airportPrice: 150,     // Forfait aéroport Classe E
    pricePerKm: 3.00,
    hourlyPrice: 90,       // Mise à disposition (€/h)
  },
  {
    id: 'eqs',
    nameKey: 'eqs',
    image: '/vehicles/mercedes-eqe.png',
    pax: 3, bags: 2,
    basePrice: 150,
    airportPrice: 200,     // Forfait aéroport EQS = même que Classe S
    pricePerKm: 4.00,
    hourlyPrice: 120,      // Mise à disposition (€/h)
  },
  {
    id: 'classe_s',
    nameKey: 'classe_s',
    image: '/vehicles/mercedes-classe-s.png',
    pax: 3, bags: 2,
    basePrice: 150,        // Tarif minimum ville Classe S
    airportPrice: 220,     // Forfait aéroport Classe S
    pricePerKm: 4.00,
    hourlyPrice: 120,      // Mise à disposition (€/h)
  },
  {
    id: 'classe_s_maybach',
    nameKey: 'classe_s_maybach',
    image: '/vehicles/mercedes-classe-s-maybach.png',
    pax: 3, bags: 2,
    basePrice: 200,        // Transfert ville Maybach
    airportPrice: 400,     // Transfert aéroport Maybach
    pricePerKm: 6.00,
    hourlyPrice: 200,      // Mise à disposition (€/h)
  },
  {
    id: 'classe_v',
    nameKey: 'classe_v',
    image: '/vehicles/mercedes-classe-v.png',
    pax: 7, bags: 6,
    basePrice: 100,        // Tarif minimum ville Classe V
    airportPrice: 160,     // Forfait aéroport Classe V
    pricePerKm: 3.00,
    hourlyPrice: 100,      // Mise à disposition (€/h)
  },
  {
    id: 'range_rover_evoque',
    nameKey: 'range_rover_evoque',
    image: '/vehicles/range-rover.png',
    pax: 4, bags: 3,
    basePrice: 200,        // Transfert ville Range Rover
    airportPrice: 400,     // Transfert aéroport Range Rover
    pricePerKm: 6.00,
    hourlyPrice: 200,      // Mise à disposition (€/h)
  },
  {
    id: 'classe_g',
    nameKey: 'classe_g',
    image: '/vehicles/mercedes-classe-g.png',
    pax: 4, bags: 3,
    basePrice: 250,
    airportPrice: 500,     // Forfait aéroport Classe G
    pricePerKm: 5.00,
    hourlyPrice: 150,      // Mise à disposition (€/h)
  },
  {
    id: 'sprinter',
    nameKey: 'sprinter',
    image: '/vehicles/mercedes-sprinter.png',
    pax: 8, bags: 8,
    basePrice: 200,        // Transfert ville Sprinter VIP 8 places
    airportPrice: 400,     // Transfert aéroport Sprinter VIP 8 places
    pricePerKm: 6.00,
    hourlyPrice: 200,      // Mise à disposition (€/h)
  },
  {
    id: 'sprinter_15',
    nameKey: 'sprinter_15',
    image: '/vehicles/mercedes-sprinter-15.png',
    pax: 15, bags: 15,
    basePrice: 200,        // Transfert ville Sprinter 15 places
    airportPrice: 400,     // Transfert aéroport Sprinter 15 places
    pricePerKm: 6.00,
    hourlyPrice: 200,      // Mise à disposition (€/h)
  },
  {
    id: 'sprinter_vip_19',
    nameKey: 'sprinter_vip_19',
    image: '/vehicles/mercedes-sprinter-vip-19.png',
    pax: 19, bags: 19,
    basePrice: 200,        // Transfert ville Sprinter VIP 19 places
    airportPrice: 400,     // Transfert aéroport Sprinter VIP 19 places
    pricePerKm: 6.00,
    hourlyPrice: 200,      // Mise à disposition (€/h)
  },
  {
    id: 'tourismo_50',
    nameKey: 'tourismo_50',
    image: '/vehicles/mercedes-tourismo.png',
    pax: 50, bags: 50,
    basePrice: 200,        // Transfert ville Tourismo 50 places
    airportPrice: 600,     // Transfert aéroport Tourismo 50 places
    pricePerKm: 8.00,
    hourlyPrice: 200,      // Mise à disposition (€/h)
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

/** Durées proposées en mise à disposition (heures). */
export const DISPOSAL_HOURS = [4, 8, 12] as const;

/**
 * Prix d'une mise à disposition : tarif horaire du véhicule × nombre d'heures.
 * Aucune distance n'entre en compte, le chauffeur reste avec le client.
 */
export function calculateDisposalPrice(vehicle: Vehicle, hours: number): number {
  const h = Number.isFinite(hours) && hours > 0 ? hours : 4;
  return Math.round(vehicle.hourlyPrice * h);
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

export const SUPPORTED_LOCALES = ['fr', 'en', 'de', 'es', 'ar', 'zh'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const RTL_LOCALES: Locale[] = ['ar'];
export const DEFAULT_LOCALE: Locale = 'fr';

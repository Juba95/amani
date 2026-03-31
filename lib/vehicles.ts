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
  basePrice: number;
  pricePerKm: number;
}

export const VEHICLES: Vehicle[] = [
  {
    id: 'classe_e',
    nameKey: 'classe_e',
    image: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/mercedes_benz_classe_e_hr-dvpu.png',
    pax: 3, bags: 2,
    basePrice: 80,
    pricePerKm: 2.50,    // Classe E / EQE = 2,5€/km
  },
  {
    id: 'classe_s',
    nameKey: 'classe_s',
    image: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/s-Class-1-600x380.jpg',
    pax: 3, bags: 2,
    basePrice: 96,
    pricePerKm: 3.00,    // Classe S = 3€/km
  },
  {
    id: 'classe_v',
    nameKey: 'classe_v',
    image: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/PngItem_816085-600x380.png',
    pax: 7, bags: 6,
    basePrice: 80,
    pricePerKm: 2.50,    // Classe V = 2,5€/km
  },
  {
    id: 'bmw_7',
    nameKey: 'bmw_7',
    image: 'https://www.amani-limousines.com/wp-content/uploads/2023/06/bmwI7-redim.jpg',
    pax: 3, bags: 2,
    basePrice: 96,
    pricePerKm: 3.00,    // BMW Série 7 = 3€/km
  },
  {
    id: 'sprinter',
    nameKey: 'sprinter',
    image: 'https://www.amani-limousines.com/wp-content/uploads/2023/07/sprinter-vip.jpg',
    pax: 16, bags: 16,
    basePrice: 200,
    pricePerKm: 4.00,    // Sprinter VIP = 4€/km
  },
];

export function calculatePrice(vehicle: Vehicle, distanceKm: number): number {
  const calculated = vehicle.pricePerKm * distanceKm;
  return Math.max(Math.round(calculated), vehicle.basePrice);
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

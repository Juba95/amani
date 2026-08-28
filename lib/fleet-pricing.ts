// lib/fleet-pricing.ts
// ============================================================
// Source unique des tableaux de tarifs affichés sur les pages flotte.
// Les prix viennent de lib/vehicles.ts, les noms des fichiers locales/*.json :
// on modifie un prix à un seul endroit et toutes les grilles suivent.
// ============================================================

import { VEHICLES, DISPOSAL_HOURS, type Vehicle } from './vehicles';

import fr from '../locales/fr.json';
import en from '../locales/en.json';
import de from '../locales/de.json';
import es from '../locales/es.json';
import ar from '../locales/ar.json';
import zh from '../locales/zh.json';

const NAMES: Record<string, any> = { fr, en, de, es, ar, zh };

export interface FleetRate {
  id: string;
  name: string;
  pax: number;
  /** Forfait transfert aéroport IDF (CDG, Orly, Le Bourget), en euros. */
  airport: number;
  /** Transfert ville / tarif minimum Paris & Île-de-France, en euros. */
  city: number;
  /** Prix au kilomètre au-delà du forfait. */
  perKm: number;
  /** Mise à disposition, en euros par heure. */
  hourly: number;
}

/** Nom commercial d'un véhicule dans la langue demandée. */
export function vehicleName(id: string, locale = 'fr'): string {
  const dict = NAMES[locale] ?? NAMES.fr;
  return dict?.fleet?.vehicles?.[id]?.name ?? NAMES.fr?.fleet?.vehicles?.[id]?.name ?? id;
}

/** Grille tarifaire complète, dans l'ordre d'affichage de la flotte. */
export function fleetRates(locale = 'fr'): FleetRate[] {
  return VEHICLES.map((v: Vehicle) => ({
    id: v.id,
    name: vehicleName(v.id, locale),
    pax: v.pax,
    airport: v.airportPrice,
    city: v.basePrice,
    perKm: v.pricePerKm,
    hourly: v.hourlyPrice,
  }));
}

/** Durée minimale d'une mise à disposition (heures). */
export const MIN_DISPOSAL_HOURS = DISPOSAL_HOURS[0];

/** Formate un montant en euros sans décimale inutile : 400 → « 400 € ». */
export function eur(amount: number): string {
  return `${Number.isInteger(amount) ? amount : amount.toFixed(2)} €`;
}

/** Idem au format anglais : 400 → « €400 ». */
export function eurEn(amount: number): string {
  return `€${Number.isInteger(amount) ? amount : amount.toFixed(2)}`;
}

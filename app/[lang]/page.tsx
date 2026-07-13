import LocaleHomeClient from './LocaleHomeClient';
import { groupByCountryIso } from '@/lib/destinations';

/**
 * Home localisée (en/es/ar/zh) — server component : les données de la carte
 * d'Europe sont calculées côté serveur et passées sérialisées au client.
 */
export default function LocalePage() {
  return <LocaleHomeClient countries={groupByCountryIso('en')} />;
}

import HomeClient from './HomeClient';
import { groupByCountryIso } from '@/lib/destinations';

/**
 * Home FR — server component : calcule côté serveur les données de la carte
 * d'Europe (pays → villes) et les passe sérialisées au client. Le registre
 * complet des destinations (intros, FAQ…) ne part jamais dans le bundle.
 */
export default function HomePage() {
  return <HomeClient countries={groupByCountryIso('fr')} />;
}

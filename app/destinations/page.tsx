import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import EuropeMap from '@/components/EuropeMap';
import { groupByCountryIso } from '@/lib/destinations';
import { DestinationsHub } from '@/components/DestinationViews';

const BASE = 'https://www.amani-limousines.com';

export const metadata: Metadata = {
  title: 'Destinations — Chauffeur Privé dans toute l’Europe | Amani Limousines',
  description:
    'Transferts, mises à disposition et expériences avec chauffeur privé dans toute l’Europe : France, Royaume-Uni, Suisse, Italie, Espagne, stations alpines et capitales. Prix fixes, véhicules premium.',
  alternates: {
    canonical: `${BASE}/destinations`,
    languages: {
      fr: `${BASE}/destinations`,
      en: `${BASE}/en/destinations`,
      'x-default': `${BASE}/en/destinations`,
    },
  },
};

export default function DestinationsHubPage() {
  return (
    <SEOLayout>
      <section className="px-6 md:px-10 pb-4">
        <div className="max-w-6xl mx-auto">
          <EuropeMap locale="fr" countries={groupByCountryIso('fr')} />
        </div>
      </section>
      <DestinationsHub locale="fr" />
    </SEOLayout>
  );
}

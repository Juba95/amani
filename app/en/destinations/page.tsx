import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import EuropeMap from '@/components/EuropeMap';
import { groupByCountryIso } from '@/lib/destinations';
import { DestinationsHub } from '@/components/DestinationViews';

const BASE = 'https://www.amani-limousines.com';

export const metadata: Metadata = {
  title: 'Destinations — Private Chauffeur Across Europe | Amani Limousines',
  description:
    'Transfers, hourly hire and private chauffeur experiences across Europe: France, United Kingdom, Switzerland, Italy, Spain, alpine resorts and capital cities. Fixed prices, premium vehicles.',
  alternates: {
    canonical: `${BASE}/en/destinations`,
    languages: {
      fr: `${BASE}/destinations`,
      en: `${BASE}/en/destinations`,
      'x-default': `${BASE}/en/destinations`,
    },
  },
};

export default function DestinationsHubPageEN() {
  return (
    <SEOLayoutEN>
      <section className="px-6 md:px-10 pb-4">
        <div className="max-w-6xl mx-auto">
          <EuropeMap locale="en" countries={groupByCountryIso('en')} />
        </div>
      </section>
      <DestinationsHub locale="en" />
    </SEOLayoutEN>
  );
}

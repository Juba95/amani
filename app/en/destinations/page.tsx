import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
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
      <DestinationsHub locale="en" />
    </SEOLayoutEN>
  );
}

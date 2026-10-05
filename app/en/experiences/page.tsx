import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import { ExperiencesHub } from '@/components/ExperiencesViews';
import { localizedAlternates } from '@/lib/get-content';
import { withRegionalVariants } from '@/lib/hreflang';

export const metadata: Metadata = {
  title: 'Signature Experiences — Private Chauffeur Excursions from Paris | Amani Limousines',
  description: 'Paris by Night, Champagne, Loire Valley castles, Versailles, Mont Saint-Michel, Giverny — private excursions with a dedicated chauffeur. Fixed prices.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/experiences',
    languages: withRegionalVariants({
      fr: 'https://www.amani-limousines.com/experiences',
      'x-default': 'https://www.amani-limousines.com/en/experiences',
      ...localizedAlternates('en/experiences'),
    }),
  },
};

export default function ExperiencesPageEN({ searchParams }: { searchParams: { cat?: string } }) {
  return (
    <SEOLayoutEN>
      <ExperiencesHub locale="en" cat={searchParams?.cat ?? 'all'} />
    </SEOLayoutEN>
  );
}

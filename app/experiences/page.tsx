import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { ExperiencesHub } from '@/components/ExperiencesViews';

export const metadata: Metadata = {
  title: 'Expériences Signature — Excursions avec Chauffeur Privé | Amani Limousines',
  description: 'Paris by Night, Champagne, châteaux de la Loire, Versailles, Mont Saint-Michel, Giverny — excursions privées avec chauffeur dédié. Prix fixes.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/experiences',
    languages: { en: 'https://www.amani-limousines.com/en/experiences', 'x-default': 'https://www.amani-limousines.com/en/experiences' },
  },
};

export default function ExperiencesPage({ searchParams }: { searchParams: { cat?: string } }) {
  return (
    <SEOLayout>
      <ExperiencesHub locale="fr" cat={searchParams?.cat ?? 'all'} />
    </SEOLayout>
  );
}

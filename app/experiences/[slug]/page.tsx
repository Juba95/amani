import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SEOLayout from '@/components/SEOLayout';
import { ExperienceDetail } from '@/components/ExperiencesViews';
import { EXPERIENCES, getExperience } from '@/lib/experiences';

export function generateStaticParams() {
  return EXPERIENCES.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const e = getExperience(params.slug);
  if (!e) return {};
  return {
    title: `${e.title.fr} — Excursion avec Chauffeur Privé | Amani Limousines`,
    description: e.teaser.fr,
    alternates: {
      canonical: `https://www.amani-limousines.com/experiences/${e.slug}`,
      languages: {
        en: `https://www.amani-limousines.com/en/experiences/${e.slug}`,
        'x-default': `https://www.amani-limousines.com/en/experiences/${e.slug}`,
      },
    },
  };
}

export default function ExperiencePage({ params }: { params: { slug: string } }) {
  const e = getExperience(params.slug);
  if (!e) notFound();
  return (
    <SEOLayout>
      <ExperienceDetail e={e} locale="fr" />
    </SEOLayout>
  );
}

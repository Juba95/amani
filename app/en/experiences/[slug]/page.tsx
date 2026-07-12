import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import { ExperienceDetail } from '@/components/ExperiencesViews';
import { EXPERIENCES, getExperience } from '@/lib/experiences';

export function generateStaticParams() {
  return EXPERIENCES.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const e = getExperience(params.slug);
  if (!e) return {};
  return {
    title: `${e.title.en} — Private Chauffeur Excursion | Amani Limousines`,
    description: e.teaser.en,
    alternates: {
      canonical: `https://www.amani-limousines.com/en/experiences/${e.slug}`,
      languages: {
        fr: `https://www.amani-limousines.com/experiences/${e.slug}`,
        'x-default': `https://www.amani-limousines.com/en/experiences/${e.slug}`,
      },
    },
  };
}

export default function ExperiencePageEN({ params }: { params: { slug: string } }) {
  const e = getExperience(params.slug);
  if (!e) notFound();
  return (
    <SEOLayoutEN>
      <ExperienceDetail e={e} locale="en" />
    </SEOLayoutEN>
  );
}

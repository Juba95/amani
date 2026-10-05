import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SEOLayout from '@/components/SEOLayout';
import { DestinationDetail } from '@/components/DestinationViews';
import { PUBLISHED_DESTINATIONS, getDestination } from '@/lib/destinations';

const BASE = 'https://www.amani-limousines.com';

function metaDescription(paragraphs: string[]): string {
  const text = (paragraphs[0] ?? '').replace(/\*\*/g, '');
  return text.length > 158 ? `${text.slice(0, 155).trimEnd()}…` : text;
}

/**
 * Seules les villes listées par generateStaticParams sont servies. Sans cela,
 * Next rend aussi les slugs hors liste à la demande — et les entrées qui
 * n'existent que pour la traduction ressortiraient en français.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return PUBLISHED_DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = getDestination(params.slug);
  if (!d) return {};
  return {
    title: `Chauffeur Privé ${d.name.fr} — VTC de Luxe, Transferts & Expériences | Amani Limousines`,
    description: metaDescription(d.intro.fr),
    alternates: {
      canonical: `${BASE}/destinations/${d.slug}`,
      languages: {
        fr: `${BASE}/destinations/${d.slug}`,
        en: `${BASE}/en/destinations/${d.slug}`,
        'x-default': `${BASE}/en/destinations/${d.slug}`,
      },
    },
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const d = getDestination(params.slug);
  if (!d) notFound();
  return (
    <SEOLayout>
      <DestinationDetail d={d} locale="fr" />
    </SEOLayout>
  );
}

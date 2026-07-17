import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import { DestinationDetail } from '@/components/DestinationViews';
import { ALL_DESTINATIONS, getDestination } from '@/lib/destinations';

const BASE = 'https://www.amani-limousines.com';

function metaDescription(paragraphs: string[]): string {
  const text = (paragraphs[0] ?? '').replace(/\*\*/g, '');
  return text.length > 158 ? `${text.slice(0, 155).trimEnd()}…` : text;
}

export function generateStaticParams() {
  return ALL_DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const d = getDestination(params.slug);
  if (!d) return {};
  return {
    title: `Private Chauffeur ${d.name.en} — Luxury Car Service & Experiences | Amani Limousines`,
    description: metaDescription(d.intro.en),
    alternates: {
      canonical: `${BASE}/en/destinations/${d.slug}`,
      languages: {
        fr: `${BASE}/destinations/${d.slug}`,
        en: `${BASE}/en/destinations/${d.slug}`,
        'x-default': `${BASE}/en/destinations/${d.slug}`,
      },
    },
  };
}

export default function DestinationPageEN({ params }: { params: { slug: string } }) {
  const d = getDestination(params.slug);
  if (!d) notFound();
  return (
    <SEOLayoutEN>
      <DestinationDetail d={d} locale="en" />
    </SEOLayoutEN>
  );
}

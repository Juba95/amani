import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import DestinationExperienceView from '@/components/DestinationExperienceView';
import { getDestination } from '@/lib/destinations';
import {
  getAllExperienceDetailParams,
  getCityExperienceDetails,
} from '@/lib/experience-details';

const BASE = 'https://www.amani-limousines.com';

export function generateStaticParams() {
  return getAllExperienceDetailParams();
}
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string; exp: string } }): Metadata {
  const d = getDestination(params.slug);
  const city = getCityExperienceDetails(params.slug);
  const exp = city?.experiences.find((e) => e.slug === params.exp);
  if (!d || !exp) return {};
  const desc = exp.intro.en[0] ?? '';
  return {
    title: `${exp.title.en} — Private Chauffeur Experience in ${d.name.en} | Amani Limousines`,
    description: desc.length > 158 ? `${desc.slice(0, 155).trimEnd()}…` : desc,
    alternates: {
      canonical: `${BASE}/en/destinations/${d.slug}/${exp.slug}`,
      languages: {
        fr: `${BASE}/destinations/${d.slug}/${exp.slug}`,
        en: `${BASE}/en/destinations/${d.slug}/${exp.slug}`,
        'x-default': `${BASE}/en/destinations/${d.slug}/${exp.slug}`,
      },
    },
  };
}

export default function DestinationExperiencePageEN({ params }: { params: { slug: string; exp: string } }) {
  const d = getDestination(params.slug);
  const city = getCityExperienceDetails(params.slug);
  const exp = city?.experiences.find((e) => e.slug === params.exp);
  if (!d || !city || !exp) notFound();

  const siblings = city.experiences.filter((e) => e.slug !== exp.slug);
  const source = d.experiences[exp.index];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${exp.title.en} — ${d.name.en}`,
    description: exp.intro.en[0],
    brand: { '@type': 'Brand', name: 'Amani Limousines' },
    offers: {
      '@type': 'Offer',
      price: source?.price ?? '',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${BASE}/en/destinations/${d.slug}/${exp.slug}`,
    },
  };

  return (
    <SEOLayoutEN>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DestinationExperienceView d={d} exp={exp} siblings={siblings} locale="en" />
    </SEOLayoutEN>
  );
}

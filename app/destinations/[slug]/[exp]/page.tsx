import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SEOLayout from '@/components/SEOLayout';
import DestinationExperienceView from '@/components/DestinationExperienceView';
import { getDestination } from '@/lib/destinations';
import {
  getAllExperienceDetailParams,
  getCityExperienceDetails,
} from '@/lib/experience-details';

const BASE = 'https://www.amani-limousines.com';

// Seules les expériences dont le contenu a été généré existent en tant que pages.
export function generateStaticParams() {
  return getAllExperienceDetailParams();
}
export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string; exp: string } }): Metadata {
  const d = getDestination(params.slug);
  const city = getCityExperienceDetails(params.slug);
  const exp = city?.experiences.find((e) => e.slug === params.exp);
  if (!d || !exp) return {};
  const desc = exp.intro.fr[0] ?? '';
  return {
    title: `${exp.title.fr} — Expérience avec Chauffeur Privé à ${d.name.fr} | Amani Limousines`,
    description: desc.length > 158 ? `${desc.slice(0, 155).trimEnd()}…` : desc,
    alternates: {
      canonical: `${BASE}/destinations/${d.slug}/${exp.slug}`,
      languages: {
        fr: `${BASE}/destinations/${d.slug}/${exp.slug}`,
        en: `${BASE}/en/destinations/${d.slug}/${exp.slug}`,
        'x-default': `${BASE}/en/destinations/${d.slug}/${exp.slug}`,
      },
    },
  };
}

export default function DestinationExperiencePage({ params }: { params: { slug: string; exp: string } }) {
  const d = getDestination(params.slug);
  const city = getCityExperienceDetails(params.slug);
  const exp = city?.experiences.find((e) => e.slug === params.exp);
  if (!d || !city || !exp) notFound();

  const siblings = city.experiences.filter((e) => e.slug !== exp.slug);
  const source = d.experiences[exp.index];

  // Schema.org — offre de service touristique
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${exp.title.fr} — ${d.name.fr}`,
    description: exp.intro.fr[0],
    brand: { '@type': 'Brand', name: 'Amani Limousines' },
    offers: {
      '@type': 'Offer',
      price: source?.price ?? '',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${BASE}/destinations/${d.slug}/${exp.slug}`,
    },
  };

  return (
    <SEOLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DestinationExperienceView d={d} exp={exp} siblings={siblings} locale="fr" />
    </SEOLayout>
  );
}

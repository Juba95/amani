/**
 * Fabrique la route détail d'expérience pour une page ville dédiée.
 * Chaque dossier app/chauffeur-prive-<ville>/[exp]/page.tsx en importe un.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SEOLayout from '@/components/SEOLayout';
import CityExperienceDetailView from '@/components/CityExperienceDetailView';
import { CITY_EXPERIENCES } from '@/lib/city-experiences';
import { getCityExpContent, getCityExpDetail, getCityExpImage, getCityExpParams, cityExpSlug } from '@/lib/city-experience-content';

const BASE = 'https://www.amani-limousines.com';

export function cityExpRoute(pageSlug: string) {
  const data = CITY_EXPERIENCES[pageSlug];
  const pageHref = `/${pageSlug}`;

  function generateStaticParams() {
    return getCityExpParams(pageSlug);
  }

  function generateMetadata({ params }: { params: { exp: string } }): Metadata {
    const exp = getCityExpDetail(pageSlug, params.exp);
    if (!exp || !data) return {};
    const desc = exp.intro[0] ?? '';
    return {
      title: `${exp.title} — Expérience avec Chauffeur Privé à ${data.city} | Amani Limousines`,
      description: desc.length > 158 ? `${desc.slice(0, 155).trimEnd()}…` : desc,
      alternates: { canonical: `${BASE}${pageHref}/${exp.slug}` },
      robots: { index: true, follow: true },
    };
  }

  function Page({ params }: { params: { exp: string } }) {
    const exp = getCityExpDetail(pageSlug, params.exp);
    if (!data || !exp) notFound();
    const source = data.experiences.find((e) => cityExpSlug(e.title) === exp.slug);
    if (!source) notFound();
    const siblings = getCityExpContent(pageSlug).filter((e) => e.slug !== exp.slug);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `${exp.title} — ${data.city}`,
      description: exp.intro[0],
      brand: { '@type': 'Brand', name: 'Amani Limousines' },
      offers: {
        '@type': 'Offer',
        price: source.price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `${BASE}${pageHref}/${exp.slug}`,
      },
    };

    return (
      <SEOLayout>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CityExperienceDetailView
          cityName={data.city}
          pageSlug={pageSlug}
          pageHref={pageHref}
          source={source}
          exp={exp}
          siblings={siblings}
          image={getCityExpImage(pageSlug)}
        />
      </SEOLayout>
    );
  }

  return { generateStaticParams, generateMetadata, Page };
}

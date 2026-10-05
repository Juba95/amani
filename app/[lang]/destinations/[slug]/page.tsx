import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import { DestinationDetail } from '@/components/DestinationViews';
import {
  getTranslatedDestination,
  translatedSlugs,
  TRANSLATED_LOCALES,
  type TranslatedLocale,
} from '@/lib/destinations/i18n';

import de from '@/locales/de.json';
import es from '@/locales/es.json';
import { withRegionalVariants } from '@/lib/hreflang';

const BASE = 'https://www.amani-limousines.com';

/** Villes dont les versions française et anglaise vivent sur une page dédiée. */
const DEDICATED_PAGES: Record<string, { fr: string; en: string }> = {
  paris: { fr: '/chauffeur-prive-paris', en: '/en/private-chauffeur-paris' },
  nice: { fr: '/chauffeur-prive-nice', en: '/en/private-chauffeur-paris' },
  cannes: { fr: '/chauffeur-prive-cannes', en: '/en/private-chauffeur-paris' },
  'saint-tropez': { fr: '/chauffeur-prive-saint-tropez', en: '/en/private-chauffeur-paris' },
  bordeaux: { fr: '/chauffeur-prive-bordeaux', en: '/en/private-chauffeur-bordeaux' },
};
const UI: Record<TranslatedLocale, any> = { de, es };

const META: Record<TranslatedLocale, { title: (c: string) => string }> = {
  de: { title: (c) => `Privatchauffeur ${c} — Luxustransfers & Erlebnisse | Amani Limousines` },
  es: { title: (c) => `Chófer privado en ${c} — traslados de lujo y experiencias | Amani Limousines` },
};

function isTranslated(lang: string): lang is TranslatedLocale {
  return (TRANSLATED_LOCALES as readonly string[]).includes(lang);
}

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
  return TRANSLATED_LOCALES.flatMap((lang) =>
    translatedSlugs(lang).map((slug) => ({ lang, slug })),
  );
}

export function generateMetadata({ params }: { params: { lang: string; slug: string } }): Metadata {
  if (!isTranslated(params.lang)) return {};
  const d = getTranslatedDestination(params.slug, params.lang);
  if (!d) return {};
  const name = d.name[params.lang] ?? d.name.en;

  // Les hreflang ne listent que les langues où la page existe réellement :
  // le français et l'anglais couvrent les 297 villes, l'allemand et l'espagnol
  // seulement celles qui sont traduites.
  // Les villes à page dédiée ont leurs équivalents français et anglais à une
  // autre adresse : /chauffeur-prive-paris plutôt que /destinations/paris.
  const dedicated = DEDICATED_PAGES[d.slug];
  const frUrl = dedicated ? `${BASE}${dedicated.fr}` : `${BASE}/destinations/${d.slug}`;
  const enUrl = dedicated ? `${BASE}${dedicated.en}` : `${BASE}/en/destinations/${d.slug}`;
  const languages: Record<string, string> = {
    fr: frUrl,
    en: enUrl,
    'x-default': enUrl,
  };
  for (const l of TRANSLATED_LOCALES) {
    if (getTranslatedDestination(d.slug, l)) languages[l] = `${BASE}/${l}/destinations/${d.slug}`;
  }

  return {
    title: META[params.lang].title(name),
    description: metaDescription(d.intro[params.lang] ?? d.intro.en),
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${BASE}/${params.lang}/destinations/${d.slug}`,
      languages: withRegionalVariants(languages),
    },
  };
}

export default function TranslatedDestinationPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  if (!isTranslated(params.lang)) notFound();
  const d = getTranslatedDestination(params.slug, params.lang);
  if (!d) notFound();
  const t = UI[params.lang];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar t={t} locale={params.lang} />
      <main>
        <DestinationDetail d={d} locale={params.lang} />
      </main>
      <CTA t={t} />
      <Footer t={t} locale={params.lang} />
    </div>
  );
}

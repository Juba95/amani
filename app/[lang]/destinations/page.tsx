import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import { DestinationsHub } from '@/components/DestinationViews';
import {
  translatedDestinations,
  TRANSLATED_LOCALES,
  type TranslatedLocale,
} from '@/lib/destinations/i18n';

import de from '@/locales/de.json';
import es from '@/locales/es.json';
import { withRegionalVariants } from '@/lib/hreflang';

const BASE = 'https://www.amani-limousines.com';
const UI: Record<TranslatedLocale, any> = { de, es };

const META: Record<TranslatedLocale, { title: string; description: string }> = {
  de: {
    title: 'Ziele — Privatchauffeur in ganz Europa | Amani Limousines',
    description:
      'Transfers, Stundenmiete und Erlebnisse mit Privatchauffeur in Europa: Frankreich, Italien, Spanien, die Schweiz, Alpenorte und Hauptstädte. Festpreise, Premiumfahrzeuge.',
  },
  es: {
    title: 'Destinos — chófer privado en toda Europa | Amani Limousines',
    description:
      'Traslados, disposición horaria y experiencias con chófer privado en Europa: Francia, Italia, España, Suiza, estaciones alpinas y capitales. Precios cerrados, vehículos premium.',
  },
};

function isTranslated(lang: string): lang is TranslatedLocale {
  return (TRANSLATED_LOCALES as readonly string[]).includes(lang);
}

/**
 * Seules les villes listées par generateStaticParams sont servies. Sans cela,
 * Next rend aussi les slugs hors liste à la demande — et les entrées qui
 * n'existent que pour la traduction ressortiraient en français.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return TRANSLATED_LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isTranslated(params.lang)) return {};
  return {
    ...META[params.lang],
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${BASE}/${params.lang}/destinations`,
      languages: withRegionalVariants({
        fr: `${BASE}/destinations`,
        en: `${BASE}/en/destinations`,
        de: `${BASE}/de/destinations`,
        es: `${BASE}/es/destinations`,
        'x-default': `${BASE}/en/destinations`,
      }),
    },
  };
}

export default function TranslatedDestinationsHubPage({ params }: { params: { lang: string } }) {
  if (!isTranslated(params.lang)) notFound();
  const list = translatedDestinations(params.lang);
  if (list.length === 0) notFound();
  const t = UI[params.lang];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar t={t} locale={params.lang} />
      <main>
        {/* Pas de carte d'Europe ici : elle renvoie vers le hub français ou
            anglais, et la couverture allemande/espagnole est partielle. */}
        <DestinationsHub locale={params.lang} destinations={list} />
      </main>
      <CTA t={t} />
      <Footer t={t} locale={params.lang} />
    </div>
  );
}

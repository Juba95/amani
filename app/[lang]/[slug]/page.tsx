import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import LocalizedPageView from '@/components/LocalizedPageView';
import {
  PAGE_LOCALES,
  SITE_PAGES,
  allLocalizedPageParams,
  getLocalizedPage,
  getPageMeta,
  type PageLocale,
} from '@/lib/site-pages';

import de from '@/locales/de.json';
import es from '@/locales/es.json';
import ar from '@/locales/ar.json';
import zh from '@/locales/zh.json';
import { withRegionalVariants } from '@/lib/hreflang';

const BASE = 'https://www.amani-limousines.com';
const UI: Record<PageLocale, any> = { de, es, ar, zh };

/** Code hreflang réel : le chinois simplifié ne se déclare pas « zh ». */
const HREFLANG: Record<PageLocale, string> = { de: 'de', es: 'es', ar: 'ar', zh: 'zh-Hans' };

function isPageLocale(lang: string): lang is PageLocale {
  return (PAGE_LOCALES as readonly string[]).includes(lang);
}

/**
 * Seules les pages réellement produites sont servies. Sans cela Next rend
 * aussi /de/n-importe-quoi à la demande, et le segment dynamique avalerait
 * des adresses qui doivent répondre 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return allLocalizedPageParams();
}

export function generateMetadata({ params }: { params: { lang: string; slug: string } }): Metadata {
  if (!isPageLocale(params.lang)) return {};
  const page = getLocalizedPage(params.slug, params.lang);
  const src = getPageMeta(params.slug);
  if (!page || !src) return {};

  // Les hreflang pointent vers les pages rédigées à la main en français et en
  // anglais, pas vers une adresse /fr/<slug> qui n'existe pas.
  const languages: Record<string, string> = {
    fr: `${BASE}${src.fr}`,
    en: `${BASE}${src.en}`,
    'x-default': `${BASE}${src.en}`,
  };
  for (const l of PAGE_LOCALES) {
    if (getLocalizedPage(params.slug, l)) languages[HREFLANG[l]] = `${BASE}/${l}/${params.slug}`;
  }

  return {
    title: page.meta.title,
    description: page.meta.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${BASE}/${params.lang}/${params.slug}`,
      languages: withRegionalVariants(languages),
    },
  };
}

export default function LocalizedServicePage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  if (!isPageLocale(params.lang)) notFound();
  if (!SITE_PAGES.some((p) => p.slug === params.slug)) notFound();
  const page = getLocalizedPage(params.slug, params.lang);
  if (!page) notFound();
  const t = UI[params.lang];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar t={t} locale={params.lang} />
      <main>
        <LocalizedPageView page={page} rtl={params.lang === 'ar'} />
      </main>
      <CTA t={t} />
      <Footer t={t} locale={params.lang} />
    </div>
  );
}

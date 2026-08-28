import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HtmlLangSetter from '@/components/HtmlLangSetter';

import en from '@/locales/en.json';
import de from '@/locales/de.json';
import es from '@/locales/es.json';
import ar from '@/locales/ar.json';
import zh from '@/locales/zh.json';

const VALID_LOCALES = new Set(['en', 'de', 'es', 'ar', 'zh']);
const meta: Record<string, any> = { en, de, es, ar, zh };

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }, { lang: 'es' }, { lang: 'ar' }, { lang: 'zh' }];
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // Si la langue n'est pas valide, on ne génère pas de metadata
  if (!VALID_LOCALES.has(params.lang)) return {};
  const t = meta[params.lang] || en;

  const BASE = 'https://www.amani-limousines.com';
  return {
    title: t?.metadata?.title ?? '',
    description: t?.metadata?.description ?? '',
    // Toutes les homepages (EN, AR, ZH) sont indexées — clientèle internationale
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${BASE}/${params.lang}`,
      languages: {
        fr: `${BASE}/`,
        en: `${BASE}/en`,
        de: `${BASE}/de`,
        es: `${BASE}/es`,
        ar: `${BASE}/ar`,
        'zh-Hans': `${BASE}/zh`,
        'x-default': `${BASE}/`,
      },
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // Protection : si la locale n'est pas reconnue (ex. ancien slug WordPress sans
  // trailing slash capturé par le segment dynamique), on renvoie une 404 propre
  // plutôt que d'afficher la page avec un "langue" invalide.
  if (!VALID_LOCALES.has(params.lang)) {
    notFound();
  }

  const isRtl = params.lang === 'ar';
  return (
    <>
      <HtmlLangSetter lang={params.lang} dir={isRtl ? 'rtl' : 'ltr'} />
      {children}
    </>
  );
}

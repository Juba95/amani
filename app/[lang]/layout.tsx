import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../../styles/globals.css';

import en from '@/locales/en.json';
import ar from '@/locales/ar.json';
import zh from '@/locales/zh.json';

const VALID_LOCALES = new Set(['en', 'ar', 'zh']);
const meta: Record<string, any> = { en, ar, zh };

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }, { lang: 'zh' }];
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // Si la langue n'est pas valide, on ne génère pas de metadata
  if (!VALID_LOCALES.has(params.lang)) return {};
  const t = meta[params.lang] || en;

  return {
    title: t?.metadata?.title ?? '',
    description: t?.metadata?.description ?? '',
    // Toutes les homepages (EN, AR, ZH) sont indexées — clientèle internationale
    robots: { index: true, follow: true },
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
    <html lang={params.lang} dir={isRtl ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}

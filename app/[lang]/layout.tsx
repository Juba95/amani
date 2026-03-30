import type { Metadata } from 'next';
import '../../styles/globals.css';

import en from '@/locales/en.json';
import ar from '@/locales/ar.json';
import zh from '@/locales/zh.json';

const meta: Record<string, any> = { en, ar, zh };

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }, { lang: 'zh' }];
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = meta[params.lang] || en;
  return {
    title: t.metadata.title,
    description: t.metadata.description,
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const isRtl = params.lang === 'ar';
  return (
    <html lang={params.lang} dir={isRtl ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}

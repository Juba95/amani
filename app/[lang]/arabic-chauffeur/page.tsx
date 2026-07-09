import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import Link from 'next/link';
import ar from '@/locales/ar.json';

type Lang = 'ar';
const VALID = new Set<Lang>(['ar']);

const BASE = 'https://www.amani-limousines.com';

const content: Record<Lang, {
  lang: string;
  dir: 'rtl' | 'ltr';
  tag: string;
  h1: string;
  h1em: string;
  intro: string;
  sections: { title: string; body: string }[];
  cta: string;
  ctaPhone: string;
  related: { label: string; href: string }[];
}> = {
  ar: {
    lang: 'ar',
    dir: 'rtl',
    tag: 'سائق يتحدث العربية — باريس وفرنسا وأوروبا',
    h1: 'سائق خاص يتحدث العربية في باريس',
    h1em: 'خدمة فاخرة على مدار الساعة',
    intro:
      'تستقبل أماني ليموزين بانتظام عائلات وضيوفاً من العالم العربي في باريس. السائق الذي يتحدث لغتك يعني تواصلاً مباشراً دون وسيط: المسارات، العناوين، تنظيم اليوم — كل شيء يُرتَّب بالعربية. سائقونا يعرفون أرقى العناوين الباريسية ويلبّون متطلبات النخبة من الضيوف. الخدمة متاحة على مدار الساعة، طوال أيام الأسبوع، في باريس وفي جميع أنحاء فرنسا وأوروبا.',
    sections: [
      {
        title: 'استقبال VIP ونقل من المطارات',
        body: 'تهبط طائرتك في مطار شارل ديغول أو أورلي أو لو بورجيه، وسائق يتحدث العربية بانتظارك. يتولى الأمتعة، وينسّق مع مرافقك أو مساعدك عند الحاجة، ويوصلك مباشرة إلى فندقك أو إقامتك. استقبال يليق بضيوف العالم العربي، ببروتوكول وحفاوة.',
      },
      {
        title: 'أيام التسوق في مونتين وفاندوم',
        body: 'شارع مونتين، فوبور سانت أونوريه، ساحة فاندوم، غاليري لافاييت: السائق يعرف هذه العناوين ومواعيدها وأفضل أماكن التوقف. ويمكنه التواصل مع مستشار تسوق خاص لدى ديور أو شانيل للإعلان عن وصولك وتجهيز زيارتك.',
      },
      {
        title: 'السياحة العلاجية والمواعيد الطبية',
        body: 'تقصد عائلات كثيرة من الخليج باريس لاستشارات طبية متخصصة. السائق يؤمّن التنقل بين الفندق والعيادات في الدائرتين السادسة عشرة والثامنة، ويمكنه أن يكون همزة الوصل بالعربية مع أقسام الاستقبال في المستشفيات عند الحاجة.',
      },
      {
        title: 'العائلات والإقامات الطويلة',
        body: 'للإقامات العائلية التي تمتد أسابيع، توفّر أماني ليموزين سائقاً أو سائقين يتحدثان العربية بشكل حصري لعائلتك. يتأقلمان بسرعة مع إيقاع كل عائلة وأولوياتها — ديزني لاند، لو بون مارشيه، مواعيد في الدائرة الثامنة — وينظّمان الأيام وفقاً لذلك.',
      },
    ],
    cta: 'احجز الآن',
    ctaPhone: '+33 6 87 16 97 47',
    related: [
      { label: 'الصفحة الرئيسية', href: '/ar' },
      { label: 'سائق خاص إلى ميجيف', href: '/ar/megeve' },
      { label: 'سائق خاص إلى شامونيه', href: '/ar/chamonix' },
      { label: 'اتصل بنا', href: '/ar#contact' },
    ],
  },
};

export async function generateStaticParams() {
  return [{ lang: 'ar' }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  if (!VALID.has(params.lang as Lang)) return {};
  return {
    title: 'سائق خاص يتحدث العربية في باريس | أماني ليموزين',
    description:
      'سائق خاص يتحدث العربية في باريس وفرنسا وأوروبا. استقبال VIP في مطارات CDG وأورلي ولو بورجيه، تسوق فاخر، سياحة علاجية. متاح على مدار الساعة.',
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${BASE}/ar/arabic-chauffeur`,
      languages: {
        fr: `${BASE}/chauffeur-arabophone`,
        en: `${BASE}/en/arabic-speaking-chauffeur-paris`,
        ar: `${BASE}/ar/arabic-chauffeur`,
      },
    },
  };
}

export default function ArabicChauffeurPage({ params }: { params: { lang: string } }) {
  if (!VALID.has(params.lang as Lang)) notFound();
  const lang = params.lang as Lang;
  const c = content[lang];
  const t = ar;

  return (
    <div className="min-h-screen bg-white text-gray-900" dir={c.dir}>
      <Navbar t={t} locale={lang} />
      <main>
        <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="tag">{c.tag}</p>
            <h1 className="heading mt-3">
              <strong>{c.h1}</strong> — <em>{c.h1em}</em>
            </h1>
            <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">{c.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reservation"
                className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
                style={{ background: '#0a0908' }}
              >
                {c.cta}
              </Link>
              <a
                href={`tel:${c.ctaPhone.replace(/\s/g, '')}`}
                className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
                dir="ltr"
              >
                {c.ctaPhone}
              </a>
            </div>
          </div>
        </section>
        <section className="py-14 px-6 md:px-10 bg-warm-50">
          <div className="max-w-4xl mx-auto space-y-10">
            {c.sections.map((s) => (
              <div key={s.title} className="border-l-2 border-stone-200 pl-6">
                <h2 className="font-serif text-xl text-gray-900 mb-3">{s.title}</h2>
                <p className="sf text-stone-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-14 px-6 md:px-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {c.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="block text-center py-4 px-6 border border-stone-200 font-sans text-sm text-gray-700 hover:border-stone-500 transition-colors"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTA t={t} />
      <Footer t={t} locale={lang} />
    </div>
  );
}

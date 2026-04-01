import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import Link from 'next/link';
import ar from '@/locales/ar.json';
import zh from '@/locales/zh.json';

type Lang = 'ar' | 'zh';
const VALID = new Set<Lang>(['ar', 'zh']);

const content: Record<Lang, {
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
    dir: 'rtl',
    tag: 'CDG · أورلي · بوفيه',
    h1: 'نقل المطار من باريس',
    h1em: 'سعر ثابت بلا عداد',
    intro:
      'سعر التاكسي من CDG قد يبلغ 55 يورو أو 110 يورو حسب الحركة المرورية والوقت. مع سائق أماني، السعر يُعلن قبل الصعود إلى السيارة ولا يتغير. CDG وأورلي وبوفيه، على مدار الساعة طوال الأسبوع.',
    sections: [
      {
        title: 'ما الذي يعنيه السعر الثابت',
        body: 'السعر يُحسب مسبقاً على أساس المسافة. لا يتغير إذا كانت الطرق مزدحمة. لا توجد رسوم إضافية في ساعات الذروة أو الليل أو عطلات نهاية الأسبوع.',
      },
      {
        title: 'تتبع الرحلة مشمول',
        body: 'إذا هبطت طائرتك في CDG أو أورلي متأخرة، يتابع السائق الرحلة تلقائياً. وقت انتظار استلام الأمتعة مشمول في السعر الثابت.',
      },
      {
        title: 'المطارات المخدومة',
        body: 'شارل ديغول (جميع المحطات)، وأورلي (الجنوب والغرب والمحطة الموحدة)، وبوفيه-تيلي (85 كم من باريس، يُخدم بشكل رئيسي من شركات الطيران منخفضة التكلفة).',
      },
    ],
    cta: 'طلب عرض سعر',
    ctaPhone: '+33 6 62 02 73 44',
    related: [
      { label: 'نقل مطار CDG', href: '/ar#services' },
      { label: 'نقل مطار أورلي', href: '/ar#services' },
      { label: 'استقبال وترحيب', href: '/ar#services' },
      { label: 'الصفحة الرئيسية', href: '/ar' },
    ],
  },
  zh: {
    dir: 'ltr',
    tag: 'CDG · 奥利 · 博韦',
    h1: '巴黎机场接送',
    h1em: '固定价格，无计价器',
    intro:
      '从CDG乘出租车到巴黎市区，费用可能是55欧元，也可能是110欧元，取决于交通和计价器。乘坐阿曼尼司机，上车前就知道确切金额，且价格不会改变。CDG、奥利及博韦机场，全天候服务。',
    sections: [
      {
        title: '固定价格的意义',
        body: '价格根据里程预先计算。无论道路是否拥堵，价格都不会变动。无高峰时段附加费，无夜间加价，无周末涨价。',
      },
      {
        title: '航班追踪已含',
        body: '如果您在CDG或奥利的航班延误，司机自动追踪。落地后取行李的等候时间已含在固定价格中。',
      },
      {
        title: '覆盖机场',
        body: '戴高乐机场（全部航站楼）、奥利机场（南、西航站楼及新统一航站楼）、博韦-提勒机场（距巴黎85公里，主要由廉价航空使用）。',
      },
    ],
    cta: '索取报价',
    ctaPhone: '+33 6 62 02 73 44',
    related: [
      { label: '戴高乐机场接送', href: '/zh#services' },
      { label: '奥利机场接送', href: '/zh#services' },
      { label: '贵宾迎接', href: '/zh#services' },
      { label: '首页', href: '/zh' },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  if (!VALID.has(params.lang as Lang)) return {};
  const isAr = params.lang === 'ar';
  return {
    title: isAr
      ? 'نقل المطار من باريس — سعر ثابت | أماني ليموزين'
      : '巴黎机场接送 — 固定价格 | Amani Limousines',
    description: isAr
      ? 'نقل المطار من باريس CDG وأورلي وبوفيه. سعر ثابت بلا عداد. متاح 24/7.'
      : '巴黎CDG、奥利及博韦机场接送。固定价格，无计价器。全天候服务。',
    robots: { index: false, follow: true },
  };
}

export default function EconomicalAirportLangPage({ params }: { params: { lang: string } }) {
  if (!VALID.has(params.lang as Lang)) notFound();
  const lang = params.lang as Lang;
  const c = content[lang];
  const t = lang === 'ar' ? ar : zh;

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

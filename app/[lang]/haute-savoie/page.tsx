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
  destinations: { city: string; info: string }[];
  sections: { title: string; body: string }[];
  cta: string;
  ctaPhone: string;
  related: { label: string; href: string }[];
}> = {
  ar: {
    dir: 'rtl',
    tag: 'المنطقة 74 — أوت-سافوا',
    h1: 'سائق خاص في أوت-سافوا',
    h1em: 'شامونيه، ميجيف، آنسي وأبعد',
    intro:
      'منطقة أوت-سافوا تضم وجهات كثيرة لا تخدمها شبكة القطار بشكل مناسب: شامونيه، ميجيف، موريزين، والشاطئ الفرنسي لبحيرة جنيف. أماني ليموزين تغطي المنطقة بالكامل من باريس ومطار CDG ومطار أورلي، بسيارات مرسيدس حديثة وسعر ثابت.',
    destinations: [
      { city: 'شامونيه', info: '600 كم — 6 ساعات تقريباً' },
      { city: 'ميجيف', info: '640 كم — 6.5 ساعة تقريباً' },
      { city: 'آنسي', info: '540 كم — 5.5 ساعة تقريباً' },
      { city: 'توينون-ليبان', info: '580 كم — 6 ساعات تقريباً' },
      { city: 'إيفيان-ليبان', info: '590 كم — 6 ساعات تقريباً' },
    ],
    sections: [
      {
        title: 'سعر ثابت بلا عداد',
        body: 'السعر يُحسب على المسافة الفعلية ويُؤكد قبل الانطلاق. لا رسوم إضافية في ساعات الذروة أو الليل. في حالة تأخر الطائرة، يُعدّل السائق موعد الاستقبال تلقائياً.',
      },
      {
        title: 'المجموعات والبعثات',
        body: 'للمجموعات التي تصل في رحلات مختلفة، يمكننا تنسيق عدة سيارات من المطار ذاته بأوقات مستقلة. للبعثات ذات الإقامات متعددة الأيام، يمكن للسائق أن يبقى متاحاً محلياً.',
      },
    ],
    cta: 'طلب عرض سعر',
    ctaPhone: '+33 6 62 02 73 44',
    related: [
      { label: 'شامونيه', href: '/ar/chamonix' },
      { label: 'ميجيف', href: '/ar/megeve' },
      { label: 'الصفحة الرئيسية', href: '/ar' },
      { label: 'اتصل بنا', href: '/ar#contact' },
    ],
  },
  zh: {
    dir: 'ltr',
    tag: '上萨瓦省 — 74省',
    h1: '上萨瓦省私人司机',
    h1em: '霞慕尼、梅杰夫、安纳西及更多',
    intro:
      '上萨瓦省包含众多火车服务不佳的目的地：霞慕尼、梅杰夫、莫尔济讷以及日内瓦湖法国岸。阿曼尼礼宾车覆盖整个省份，从巴黎、戴高乐机场及奥利机场出发，乘坐近年款梅赛德斯车型，价格固定且在预订前确认。',
    destinations: [
      { city: '霞慕尼', info: '600公里 — 约6小时' },
      { city: '梅杰夫', info: '640公里 — 约6.5小时' },
      { city: '安纳西', info: '540公里 — 约5.5小时' },
      { city: '托农莱班', info: '580公里 — 约6小时' },
      { city: '依云莱班', info: '590公里 — 约6小时' },
    ],
    sections: [
      {
        title: '固定价格，无计价器',
        body: '价格根据实际里程计算，出发前确认。无高峰附加费，无夜间加价。航班延误时，司机自动追踪并调整接机时间。',
      },
      {
        title: '团体及商务出行',
        body: '对于不同航班抵达的团队，可协调同一机场的多辆车独立出发。多日行程可安排司机在当地随时待命。',
      },
    ],
    cta: '索取报价',
    ctaPhone: '+33 6 62 02 73 44',
    related: [
      { label: '霞慕尼', href: '/zh/chamonix' },
      { label: '梅杰夫', href: '/zh/megeve' },
      { label: '首页', href: '/zh' },
      { label: '联系我们', href: '/zh#contact' },
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
      ? 'سائق خاص أوت-سافوا — شامونيه ، ميجيف ، آنسي | أماني ليموزين'
      : '上萨瓦省私人司机 — 霞慕尼、梅杰夫、安纳西 | Amani Limousines',
    description: isAr
      ? 'سائق خاص من باريس إلى كامل منطقة أوت-سافوا. سعر ثابت. من CDG أو أورلي.'
      : '巴黎至上萨瓦省全区私人司机。固定价格。从CDG或奥利机场出发。',
    robots: { index: false, follow: true },
  };
}

export default function HauteSavoieLangPage({ params }: { params: { lang: string } }) {
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

        {/* Destinations grid */}
        <section className="py-14 px-6 md:px-10 bg-warm-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {c.destinations.map((d) => (
                <div key={d.city} className="card">
                  <p className="font-serif text-lg text-gray-900 mb-1">{d.city}</p>
                  <p className="sf text-stone-500 text-sm">{d.info}</p>
                </div>
              ))}
            </div>
            {c.sections.map((s) => (
              <div key={s.title} className="border-l-2 border-stone-200 pl-6 mb-8">
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

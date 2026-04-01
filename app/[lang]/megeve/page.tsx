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
    tag: 'أوت-سافوا — جبل مون بلان',
    h1: 'سائق خاص إلى ميجيف',
    h1em: 'من باريس والمطارات',
    intro:
      'ميجيف تبعد 640 كم عن باريس، نحو 6 ساعات ونصف بالسيارة. أقرب محطة قطار هي سالانش على بعد 12 كم من المنتجع. أماني ليموزين تقدم خدمة نقل مباشر طوال العام بسعر ثابت، من باريس ومطار شارل ديغول ومطار أورلي.',
    sections: [
      {
        title: 'نقل مباشر إلى ميجيف',
        body: 'الانطلاق من أي عنوان في باريس أو من المطار. وقت الانتظار بعد الهبوط مشمول. السائق يتابع رحلتك الجوية تلقائياً في حالة التأخير.',
      },
      {
        title: 'سعر ثابت',
        body: 'السعر يُحدد قبل الحجز على أساس المسافة الفعلية. لا ساعة ذروة، لا تعريفة ليلية. الأسعار تبدأ من نحو 620 يورو لسيارة E-Class.',
      },
      {
        title: 'المناطق المخدومة في ميجيف',
        body: 'المركز التجاري، لو جاييه، روشبرون، مون داربوا، سان نيكولا دو فيروس، وكومبلو (3 كم). للشاليهات ذات الوصول الصعب في الشتاء، يُرجى الاتصال مسبقاً.',
      },
    ],
    cta: 'طلب عرض سعر',
    ctaPhone: '+33 6 62 02 73 44',
    related: [
      { label: 'شامونيه', href: '/ar/chamonix' },
      { label: 'أوت-سافوا', href: '/ar/haute-savoie' },
      { label: 'الصفحة الرئيسية', href: '/ar' },
      { label: 'اتصل بنا', href: '/ar#contact' },
    ],
  },
  zh: {
    lang: 'zh',
    dir: 'ltr',
    tag: '上萨瓦省 — 勃朗峰山区',
    h1: '梅杰夫私人司机',
    h1em: '从巴黎及各机场出发',
    intro:
      '巴黎至梅杰夫约640公里，驾车约6.5小时。最近的火车站萨朗什距离度假村12公里。阿曼尼礼宾车全年提供直达接送服务，从巴黎市区、戴高乐机场及奥利机场出发，固定价格预订前锁定。',
    sections: [
      {
        title: '直达梅杰夫',
        body: '可从巴黎任意地址或机场出发。机场提供抵达大厅持名牌迎接服务。落地后等候行李的时间已含在价格中，航班延误时司机自动调整。',
      },
      {
        title: '固定价格',
        body: '价格根据实际里程预先确定。无高峰时段附加费，无夜间加价。E级轿车巴黎至梅杰夫价格约从620欧元起。',
      },
      {
        title: '梅杰夫服务区域',
        body: '市中心、勒加耶特、罗什布伦、蒙达布瓦、圣尼古拉德韦罗斯及孔布洛（3公里外）。冬季难以进入的山地小屋，请提前联系确认路况。',
      },
    ],
    cta: '索取报价',
    ctaPhone: '+33 6 62 02 73 44',
    related: [
      { label: '霞慕尼', href: '/zh/chamonix' },
      { label: '上萨瓦省', href: '/zh/haute-savoie' },
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
      ? 'سائق خاص ميجيف — باريس إلى ميجيف | أماني ليموزين'
      : '梅杰夫私人司机 — 巴黎至梅杰夫 | Amani Limousines',
    description: isAr
      ? 'نقل خاص من باريس إلى ميجيف. 640 كم، سعر ثابت. من CDG أو أورلي أو باريس.'
      : '巴黎至梅杰夫私人司机。640公里，固定价格。从CDG、奥利或巴黎出发。',
    robots: { index: false, follow: true },
  };
}

export default function MegeveLangPage({ params }: { params: { lang: string } }) {
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

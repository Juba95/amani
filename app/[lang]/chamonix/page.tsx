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
    tag: 'شامونيه — جبل مون بلان',
    h1: 'سائق خاص إلى شامونيه',
    h1em: 'من باريس والمطارات',
    intro:
      'باريس إلى شامونيه: 600 كم على الطريق السريع، نحو 6 ساعات بالسيارة. لا توجد رحلة قطار مباشرة بين المدينتين. أماني ليموزين تغطي هذا المسار طوال العام من باريس، ومطار شارل ديغول، ومطار أورلي — بسيارات مرسيدس حديثة وسعر ثابت يُحدد قبل الحجز.',
    sections: [
      {
        title: 'مسارات المتاحة',
        body: 'الانطلاق من أي عنوان في باريس أو من المطار. الاستقبال في قاعة الوصول مع لوحة باسم العميل. وقت الانتظار بعد الهبوط مشمول في السعر.',
      },
      {
        title: 'سعر ثابت بلا عداد',
        body: 'السعر يُحسب على أساس المسافة ويُؤكد قبل الرحلة. لا توجد أسعار إضافية في ساعات الذروة أو الليل. في حالة تأخر الطائرة، يتابع السائق الرحلة تلقائياً ويعدّل توقيت الاستقبال.',
      },
      {
        title: 'وادي شامونيه',
        body: 'نغطي كامل الوادي: شامونيه المركز، ليزو، أرجنتيير، لو بوسون، فالورسين. في الشتاء تكون محطات التزلج مفتوحة من ديسمبر حتى أبريل، وفي الصيف تنشط رياضة التسلق والمشي.',
      },
    ],
    cta: 'طلب عرض سعر',
    ctaPhone: '+33 6 62 02 73 44',
    related: [
      { label: 'ميجيف', href: '/ar/megeve' },
      { label: 'أوت-سافوا', href: '/ar/haute-savoie' },
      { label: 'نقل مطار CDG', href: '/ar#services' },
      { label: 'الصفحة الرئيسية', href: '/ar' },
    ],
  },
  zh: {
    lang: 'zh',
    dir: 'ltr',
    tag: '霞慕尼 — 勃朗峰山区',
    h1: '霞慕尼私人司机',
    h1em: '从巴黎及各机场出发',
    intro:
      '巴黎至霞慕尼约600公里，驾车约6小时。两城之间无直达火车。阿曼尼礼宾车全年承接这条路线，从巴黎市区、戴高乐机场及奥利机场出发，全程乘坐近年款梅赛德斯车型，价格在预订前确认锁定。',
    sections: [
      {
        title: '可承接线路',
        body: '可从巴黎任意地址或机场出发。在机场抵达大厅提供持名牌迎接服务。落地后的行李等候时间已含在固定价格中。',
      },
      {
        title: '固定价格，无计价器',
        body: '费用根据实际里程计算，出发前确认。无早晚高峰附加费，无夜间加价。若航班延误，司机自动追踪并调整接机时间。',
      },
      {
        title: '霞慕尼山谷',
        body: '服务覆盖山谷全域：霞慕尼市中心、莱豪什、阿尔让蒂耶尔、莱博松、瓦洛尔辛。冬季滑雪（12月至4月），夏季登山徒步（7月至9月）。',
      },
    ],
    cta: '索取报价',
    ctaPhone: '+33 6 62 02 73 44',
    related: [
      { label: '梅杰夫', href: '/zh/megeve' },
      { label: '上萨瓦省', href: '/zh/haute-savoie' },
      { label: '戴高乐机场接送', href: '/zh#services' },
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
      ? 'سائق خاص شامونيه — باريس إلى شامونيه | أماني ليموزين'
      : '霞慕尼私人司机 — 巴黎至霞慕尼 | Amani Limousines',
    description: isAr
      ? 'خدمة سائق خاص من باريس إلى شامونيه. 600 كم، سعر ثابت. الانطلاق من CDG أو أورلي أو باريس.'
      : '巴黎至霞慕尼私人司机服务。600公里，固定价格。从CDG、奥利机场或巴黎出发。',
    robots: { index: false, follow: true },
  };
}

export default function ChamonixLangPage({
  params,
}: {
  params: { lang: string };
}) {
  if (!VALID.has(params.lang as Lang)) notFound();
  const lang = params.lang as Lang;
  const c = content[lang];
  const t = lang === 'ar' ? ar : zh;

  return (
    <div className="min-h-screen bg-white text-gray-900" dir={c.dir}>
      <Navbar t={t} locale={lang} />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="tag">{c.tag}</p>
            <h1 className="heading mt-3">
              <strong>{c.h1}</strong> — <em>{c.h1em}</em>
            </h1>
            <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
              {c.intro}
            </p>
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

        {/* Sections */}
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

        {/* Related */}
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

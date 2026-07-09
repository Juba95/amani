import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import Link from 'next/link';
import zh from '@/locales/zh.json';

type Lang = 'zh';
const VALID = new Set<Lang>(['zh']);

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
  zh: {
    lang: 'zh',
    dir: 'ltr',
    tag: '中文司机 — 巴黎、法国及欧洲',
    h1: '巴黎中文私人司机',
    h1em: '高端礼宾专车，全天候服务',
    intro:
      '阿曼尼礼宾车（Amani Limousines）为您提供巴黎中文私人司机服务。无论是奢侈品购物、商务考察、文化观光还是外省深度游，每一次出行都以高端客户的标准精心安排。我们的司机讲普通话，熟悉中国宾客在巴黎钟爱的各个地址，沟通无需翻译，直接高效。服务全天候24小时，覆盖巴黎、法国全境及欧洲。',
    sections: [
      {
        title: '机场中文接机服务',
        body: '接机牌以中文和法文书写，司机讲普通话，车辆提前备妥。从上海或北京长途飞行抵达戴高乐、奥利或勒布尔热机场后，这些细节让抵达体验截然不同。行李由司机全程照料，落地后等候时间已包含在价格中。',
      },
      {
        title: '奢侈品购物 — 圣奥诺雷街、春天百货、老佛爷',
        body: '巴黎是奢侈品购物的殿堂。香榭丽舍大道的路易威登、圣奥诺雷街的爱马仕、奥斯曼春天百货的香奈儿：司机熟悉这些地址及其最佳停靠方案，并可提前以中文联系店内团队，为您的到访做好准备。',
      },
      {
        title: '商务代表团与投资考察',
        body: '我们的司机经常陪同中国企业家与投资人在巴黎度过高强度的一天——第八区的律所与事务所、物业实地考察、商务午宴。全程中文沟通，路线了然于胸，每一个约会都准时抵达。',
      },
      {
        title: '专属出游 — 凡尔赛、香槟区、卢瓦尔河城堡',
        body: '半天游览凡尔赛宫，一天前往香槟区品鉴，或用两天走访卢瓦尔河谷城堡群。司机负责规划路线，用中文为您讲解沿途看点，并根据您的兴致随时调整行程——想在某处多停留，随时可以。',
      },
    ],
    cta: '立即预订',
    ctaPhone: '+33 6 87 16 97 47',
    related: [
      { label: '首页', href: '/zh' },
      { label: '梅杰夫私人司机', href: '/zh/megeve' },
      { label: '霞慕尼私人司机', href: '/zh/chamonix' },
      { label: '联系我们', href: '/zh#contact' },
    ],
  },
};

export async function generateStaticParams() {
  return [{ lang: 'zh' }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  if (!VALID.has(params.lang as Lang)) return {};
  return {
    title: '巴黎中文私人司机 — 高端礼宾专车 | Amani Limousines',
    description:
      '巴黎讲中文的私人司机，服务法国及欧洲。机场中文接机（CDG、奥利、勒布尔热）、奢侈品购物、商务代表团、专属出游。全天候24小时服务。',
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${BASE}/zh/mandarin-chauffeur`,
      languages: {
        fr: `${BASE}/chauffeur-mandarin`,
        en: `${BASE}/en/mandarin-speaking-chauffeur-paris`,
        'zh-Hans': `${BASE}/zh/mandarin-chauffeur`,
      },
    },
  };
}

export default function MandarinChauffeurPage({ params }: { params: { lang: string } }) {
  if (!VALID.has(params.lang as Lang)) notFound();
  const lang = params.lang as Lang;
  const c = content[lang];
  const t = zh;

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

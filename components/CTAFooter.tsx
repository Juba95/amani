'use client';

import Link from 'next/link';

// ── Liens footer par locale ──────────────────────────────────────────────────
const FOOTER_LINKS_FR: Record<string, { label: string; href: string }[]> = {
  col1: [
    { label: 'Chauffeur privé Paris',        href: '/' },
    { label: 'Chauffeur privé Bordeaux',     href: '/chauffeur-prive-bordeaux' },
    { label: 'Chauffeur privé Lyon',         href: '/chauffeur-prive-lyon' },
    { label: 'Chauffeur privé Nice',         href: '/chauffeur-prive-nice' },
    { label: 'Transfert aéroport CDG',       href: '/transfert-aeroport-cdg' },
    { label: 'Transfert aéroport Orly',      href: '/transfert-aeroport-orly' },
  ],
  col2: [
    { label: 'Mise à disposition',           href: '/mise-a-disposition' },
    { label: 'Transfert privé',              href: '/transfert-prive' },
    { label: 'Meet and Greet',               href: '/meet-and-greet' },
    { label: 'Convoi & délégations',         href: '/convoi-delegations' },
    { label: 'Sécurité rapprochée',          href: '/securite-rapprochee' },
    { label: 'Garde du corps',               href: '/garde-du-corps' },
    { label: 'Taxi moto',                    href: '/taxi-moto' },
  ],

  col3: [
    { label: 'Paris Fashion Week',           href: '/evenements/paris-fashion-week' },
    { label: 'Paris Air Show',               href: '/evenements/paris-air-show' },
    { label: 'Roland Garros',                href: '/evenements/roland-garros' },
    { label: 'Salons professionnels',        href: '/evenements' },
  ],
  col4: [
    { label: 'Nous contacter',              href: '/contact' },
    { label: 'Mentions légales',             href: '/mentions-legales' },
    { label: 'CGV',                          href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/mentions-legales' },
    { label: 'Plan du site',                href: '/plan-du-site' },
  ],
};

const FOOTER_LINKS_EN: Record<string, { label: string; href: string }[]> = {
  col1: [
    { label: 'Private chauffeur Paris',      href: '/en' },
    { label: 'CDG airport transfer',         href: '/en/cdg-airport-transfer' },
    { label: 'Orly airport transfer',        href: '/en/orly-airport-transfer' },
    { label: 'Le Bourget transfer',          href: '/en/cdg-airport-transfer' },
  ],
  col2: [
    { label: 'Hourly hire',                  href: '/en/hourly-hire' },
    { label: 'Private transfer',             href: '/en/cdg-airport-transfer' },
    { label: 'Meet & Greet',                 href: '/en/meet-and-greet' },
    { label: 'Convoy & delegations',         href: '/en/delegation-transport' },
    { label: 'Close protection',             href: '/en/close-protection' },
    { label: 'Private excursion',            href: '/en/private-excursion' },
    { label: 'Long distance',                href: '/en/long-distance' },
  ],
  col3: [
    { label: 'Paris Fashion Week',           href: '/en/events' },
    { label: 'Paris Air Show',               href: '/en/events' },
    { label: 'Roland Garros',                href: '/en/events' },
    { label: 'Trade fairs',                  href: '/en/events' },
  ],
  col4: [
    { label: 'Legal notice',                 href: '/en/contact' },
    { label: 'Terms & conditions',           href: '/en/contact' },
    { label: 'Privacy policy',               href: '/en/contact' },
    { label: 'Sitemap',                      href: '/plan-du-site' },
  ],
};

const FOOTER_LINKS_AR: Record<string, { label: string; href: string }[]> = {
  col1: [
    { label: 'شوفير خاص — باريس',         href: '/ar' },
    { label: 'نقل مطار CDG',               href: '/ar#services' },
    { label: 'نقل مطار أورلي',             href: '/ar#services' },
    { label: 'نقل لو بورجيه',              href: '/ar#services' },
  ],
  col2: [
    { label: 'تأجير بالساعة',             href: '/ar#services' },
    { label: 'نقل خاص',                   href: '/ar#services' },
    { label: 'استقبال وترحيب',            href: '/ar#services' },
    { label: 'قافلة مركبات',              href: '/ar#services' },
    { label: 'حماية أمنية',               href: '/ar#services' },
    { label: 'رحلة خاصة',                 href: '/ar#services' },
    { label: 'مسافات طويلة',              href: '/ar#services' },
  ],
  col3: [
    { label: 'Paris Fashion Week',         href: '/ar#events' },
    { label: 'Paris Air Show',             href: '/ar#events' },
    { label: 'Roland Garros',             href: '/ar#events' },
    { label: 'Salons professionnels',      href: '/ar#events' },
  ],
  col4: [
    { label: 'ذكر قانوني',                href: '/mentions-legales' },
    { label: 'الشروط والأحكام',           href: '/mentions-legales' },
    { label: 'سياسة الخصوصية',            href: '/mentions-legales' },
  ],
};

const FOOTER_LINKS_ZH: Record<string, { label: string; href: string }[]> = {
  col1: [
    { label: '巴黎私人司机',               href: '/zh' },
    { label: '戴高乐机场接送',             href: '/zh#services' },
    { label: '奥利机场接送',               href: '/zh#services' },
    { label: '勒布尔热接送',               href: '/zh#services' },
  ],
  col2: [
    { label: '包时服务',                   href: '/zh#services' },
    { label: '私人接送',                   href: '/zh#services' },
    { label: '贵宾迎接',                   href: '/zh#services' },
    { label: '车队护送',                   href: '/zh#services' },
    { label: '安全护卫',                   href: '/zh#services' },
    { label: '私人游览',                   href: '/zh#services' },
    { label: '长途出行',                   href: '/zh#services' },
  ],
  col3: [
    { label: 'Paris Fashion Week',         href: '/zh#events' },
    { label: 'Paris Air Show',             href: '/zh#events' },
    { label: 'Roland Garros',             href: '/zh#events' },
    { label: '专业展览',                   href: '/zh#events' },
  ],
  col4: [
    { label: '法律声明',                   href: '/mentions-legales' },
    { label: '条款与条件',                 href: '/mentions-legales' },
    { label: '隐私政策',                   href: '/mentions-legales' },
  ],
};

function getFooterLinks(locale: string) {
  if (locale === 'en') return FOOTER_LINKS_EN;
  if (locale === 'ar') return FOOTER_LINKS_AR;
  if (locale === 'zh') return FOOTER_LINKS_ZH;
  return FOOTER_LINKS_FR;
}

interface CTAProps {
  t: any;
}

export function CTA({ t }: CTAProps) {
  const phone = t?.nav?.phone?.replace(/\s/g, '') ?? '';
  const waNumber = '33662027344';

  return (
    <section id="contact" className="py-20 px-6 md:px-10 text-center relative gold-glow"
      style={{ background: 'linear-gradient(180deg, #0a0908, #111009, #0a0908)' }}>
      <div className="relative z-10">
        <h2 className="font-serif text-stone-100 font-normal mb-4"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
          {t?.cta?.title} <em className="italic" style={{ color: '#8a7340' }}>{t?.cta?.title_em}</em>
        </h2>
        <p className="font-sans text-sm text-stone-500 font-light leading-relaxed max-w-md mx-auto mb-8">
          {t?.cta?.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`tel:${phone}`} dir="ltr"
            className="px-6 py-3 border border-gold-400/20 rounded-xl font-sans text-sm text-gold-400 hover:bg-gold-400/[0.06] hover:border-gold-400/40 transition-all">
            ✆ <span dir="ltr">{t?.nav?.phone ?? ''}</span>
          </a>
          <a href="mailto:contact@amani-limousines.com"
            className="px-6 py-3 border border-gold-400/20 rounded-xl font-sans text-sm text-gold-400 hover:bg-gold-400/[0.06] hover:border-gold-400/40 transition-all">
            ✉ contact@amani-limousines.com
          </a>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 border border-gold-400/20 rounded-xl font-sans text-sm text-gold-400 hover:bg-gold-400/[0.06] hover:border-gold-400/40 transition-all">
            {t?.cta?.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}

interface FooterProps {
  t: any;
  locale?: string;
}

export function Footer({ t, locale = 'fr' }: FooterProps) {
  const links = getFooterLinks(locale);
  const cols = [
    { title: t?.footer?.col1_title ?? 'Amani Limousines', links: links.col1 },
    { title: t?.footer?.col2_title ?? 'Prestations',      links: links.col2 },
    { title: t?.footer?.col3_title ?? 'Événements',       links: links.col3 },
    { title: t?.footer?.col4_title ?? 'Informations',     links: links.col4 },
  ];

  return (
    <>
      <footer className="flex flex-wrap justify-between gap-8 px-6 md:px-10 py-12"
        style={{ borderTop: '1px solid #ece9e3', background: '#faf8f5' }}>
        {cols.map((col, i) => (
          <div key={i}>
            <h4 className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold-400 mb-4">
              {col.title}
            </h4>
            {col.links.map((link, j) => (
              <Link key={j} href={link.href}
                className="block font-sans text-xs text-stone-500 font-light mb-2 hover:text-gold-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </footer>
      <div className="font-sans text-[0.6rem] text-stone-400 text-center tracking-[0.12em] px-6 py-5"
        style={{ background: '#faf8f5', borderTop: '1px solid #ece9e3' }}>
        {t?.footer?.copyright ?? '© 2026 AMANI LIMOUSINES'}
      </div>
    </>
  );
}

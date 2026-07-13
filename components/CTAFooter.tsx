'use client';

import Link from 'next/link';

// ── Liens footer par locale ──────────────────────────────────────────────────
// ── Colonnes du footer par locale (titre + liens) ───────────────────────────
type FooterCol = { title: string; links: { label: string; href: string }[] };

const FOOTER_COLS_FR: FooterCol[] = [
  {
    title: 'Chauffeur privé',
    links: [
      { label: 'Chauffeur privé Paris',     href: '/chauffeur-prive-paris' },
      { label: 'Chauffeur privé Nice',      href: '/chauffeur-prive-nice' },
      { label: 'Chauffeur privé Cannes',    href: '/chauffeur-prive-cannes' },
      { label: 'Chauffeur privé Lyon',      href: '/chauffeur-prive-lyon' },
      { label: 'Chauffeur privé Bordeaux',  href: '/chauffeur-prive-bordeaux' },
      { label: 'Chauffeur privé Marseille', href: '/chauffeur-prive-marseille' },
      { label: 'Saint-Tropez',              href: '/chauffeur-prive-saint-tropez' },
    ],
  },
  {
    title: 'Transferts',
    links: [
      { label: 'Mise à disposition',        href: '/mise-a-disposition' },
      { label: 'Transfert aéroport CDG',    href: '/transfert-aeroport-cdg' },
      { label: 'Transfert aéroport Orly',   href: '/transfert-aeroport-orly' },
      { label: 'Transfert Le Bourget',      href: '/transfert-le-bourget' },
      { label: 'Meet and Greet',            href: '/meet-and-greet' },
      { label: 'Longue distance',           href: '/longue-distance' },
      { label: 'Convoi & délégations',      href: '/convoi-delegations' },
    ],
  },
  {
    title: 'Notre flotte',
    links: [
      { label: 'Mercedes Classe E',         href: '/notre-flotte' },
      { label: 'Mercedes Classe S',         href: '/notre-flotte' },
      { label: 'Mercedes Classe V',         href: '/notre-flotte' },
      { label: 'Mercedes Classe S Maybach', href: '/notre-flotte' },
      { label: 'Mercedes Classe G',         href: '/notre-flotte' },
      { label: 'Mercedes Sprinter VIP',     href: '/notre-flotte' },
      { label: 'Mercedes EQS électrique',   href: '/notre-flotte' },
      { label: 'Range Rover Evoque',        href: '/notre-flotte' },
    ],
  },
  {
    title: 'Destinations & Événements',
    links: [
      { label: 'Toutes les destinations',   href: '/destinations' },
      { label: 'Paris Fashion Week',        href: '/evenements/paris-fashion-week' },
      { label: 'Roland Garros',             href: '/evenements/roland-garros' },
      { label: 'Festival de Cannes',        href: '/evenements/festival-de-cannes' },
      { label: 'Grand Prix de Monaco',      href: '/evenements/grand-prix-monaco' },
      { label: 'Chauffeur mariage',         href: '/chauffeur-mariage' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'Corporate',                 href: '/corporate' },
      { label: 'Devenir chauffeur',         href: '/devenir-chauffeur' },
      { label: 'Nous contacter',            href: '/contact' },
      { label: 'À propos',                  href: '/a-propos' },
      { label: 'Plan du site',              href: '/plan-du-site' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales',              href: '/mentions-legales' },
      { label: 'CGV',                           href: '/cgv' },
      { label: 'Politique de confidentialité',  href: '/politique-confidentialite' },
    ],
  },
];

const FOOTER_COLS_EN: FooterCol[] = [
  {
    title: 'Private chauffeur',
    links: [
      { label: 'Private chauffeur Paris',   href: '/en/private-chauffeur-paris' },
      { label: 'Private chauffeur Bordeaux',href: '/en/private-chauffeur-bordeaux' },
      { label: 'Chamonix chauffeur',        href: '/en/chamonix-chauffeur' },
      { label: 'Megève chauffeur',          href: '/en/megeve-chauffeur' },
      { label: 'Haute-Savoie chauffeur',    href: '/en/haute-savoie-chauffeur' },
    ],
  },
  {
    title: 'Transfers',
    links: [
      { label: 'Hourly hire',               href: '/en/hourly-hire' },
      { label: 'CDG airport transfer',      href: '/en/cdg-airport-transfer' },
      { label: 'Orly airport transfer',     href: '/en/orly-airport-transfer' },
      { label: 'Meet & Greet',              href: '/en/meet-and-greet' },
      { label: 'Long distance',             href: '/en/long-distance' },
      { label: 'Convoy & delegations',      href: '/en/delegation-transport' },
      { label: 'Close protection',          href: '/en/close-protection' },
    ],
  },
  {
    title: 'Our fleet',
    links: [
      { label: 'Mercedes E-Class',          href: '/en/our-fleet' },
      { label: 'Mercedes S-Class',          href: '/en/our-fleet' },
      { label: 'Mercedes V-Class',          href: '/en/our-fleet' },
      { label: 'Mercedes S-Class Maybach',  href: '/en/our-fleet' },
      { label: 'Mercedes G-Class',          href: '/en/our-fleet' },
      { label: 'Mercedes Sprinter VIP',     href: '/en/our-fleet' },
      { label: 'Mercedes EQS electric',     href: '/en/our-fleet' },
      { label: 'Range Rover Evoque',        href: '/en/our-fleet' },
    ],
  },
  {
    title: 'Destinations & Events',
    links: [
      { label: 'All destinations',          href: '/en/destinations' },
      { label: 'Paris Fashion Week',        href: '/en/events' },
      { label: 'Roland Garros',             href: '/en/events' },
      { label: 'Cannes Film Festival',      href: '/en/events' },
      { label: 'Monaco Grand Prix',         href: '/en/events' },
      { label: 'Trade fairs',               href: '/en/events' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Corporate',                 href: '/en/corporate' },
      { label: 'Become a chauffeur',        href: '/en/become-a-chauffeur' },
      { label: 'Contact',                   href: '/en/contact' },
      { label: 'Sitemap',                   href: '/plan-du-site' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Legal notice',              href: '/mentions-legales' },
      { label: 'Terms & conditions',        href: '/cgv' },
      { label: 'Privacy policy',            href: '/politique-confidentialite' },
    ],
  },
];

const FOOTER_COLS_AR: FooterCol[] = [
  {
    title: 'سائق خاص',
    links: [
      { label: 'سائق خاص في باريس',  href: '/ar' },
      { label: 'سائق خاص في نيس',    href: '/ar' },
      { label: 'سائق خاص في كان',    href: '/ar' },
      { label: 'سائق خاص في ليون',   href: '/ar' },
      { label: 'سائق خاص في بوردو',  href: '/ar' },
    ],
  },
  {
    title: 'خدمات النقل',
    links: [
      { label: 'تأجير بالساعة',      href: '/ar#services' },
      { label: 'نقل مطار شارل ديغول', href: '/ar#services' },
      { label: 'نقل مطار أورلي',     href: '/ar#services' },
      { label: 'استقبال وترحيب',     href: '/ar#services' },
      { label: 'مسافات طويلة',       href: '/ar#services' },
      { label: 'قوافل ووفود',        href: '/ar#services' },
    ],
  },
  {
    title: 'أسطولنا',
    links: [
      { label: 'مرسيدس الفئة E',        href: '/ar#fleet' },
      { label: 'مرسيدس الفئة S',        href: '/ar#fleet' },
      { label: 'مرسيدس الفئة V',        href: '/ar#fleet' },
      { label: 'مرسيدس-مايباخ الفئة S', href: '/ar#fleet' },
      { label: 'مرسيدس الفئة G',        href: '/ar#fleet' },
      { label: 'مرسيدس سبرينتر VIP',    href: '/ar#fleet' },
      { label: 'مرسيدس EQS',            href: '/ar#fleet' },
      { label: 'رينج روفر إيفوك',       href: '/ar#fleet' },
    ],
  },
  {
    title: 'الوجهات والفعاليات',
    links: [
      { label: 'جميع الوجهات',           href: '/ar#services' },
      { label: 'أسبوع الموضة في باريس',  href: '/ar#events' },
      { label: 'رولان غاروس',            href: '/ar#events' },
      { label: 'مهرجان كان',             href: '/ar#events' },
      { label: 'جائزة موناكو الكبرى',    href: '/ar#events' },
    ],
  },
  {
    title: 'الشركة',
    links: [
      { label: 'خدمات الشركات',   href: '/ar' },
      { label: 'كن سائقاً',       href: '/ar' },
      { label: 'اتصل بنا',        href: '/ar/contact' },
    ],
  },
  {
    title: 'قانوني',
    links: [
      { label: 'إشعارات قانونية', href: '/mentions-legales' },
      { label: 'الشروط والأحكام', href: '/cgv' },
      { label: 'سياسة الخصوصية',  href: '/politique-confidentialite' },
    ],
  },
];

const FOOTER_COLS_ZH: FooterCol[] = [
  {
    title: '私人司机',
    links: [
      { label: '巴黎私人司机',   href: '/zh' },
      { label: '尼斯私人司机',   href: '/zh' },
      { label: '戛纳私人司机',   href: '/zh' },
      { label: '里昂私人司机',   href: '/zh' },
      { label: '波尔多私人司机', href: '/zh' },
    ],
  },
  {
    title: '接送服务',
    links: [
      { label: '包时租车',       href: '/zh#services' },
      { label: '戴高乐机场接送', href: '/zh#services' },
      { label: '奥利机场接送',   href: '/zh#services' },
      { label: '贵宾迎接',       href: '/zh#services' },
      { label: '长途出行',       href: '/zh#services' },
      { label: '车队与代表团',   href: '/zh#services' },
    ],
  },
  {
    title: '我们的车队',
    links: [
      { label: '梅赛德斯 E 级',      href: '/zh#fleet' },
      { label: '梅赛德斯 S 级',      href: '/zh#fleet' },
      { label: '梅赛德斯 V 级',      href: '/zh#fleet' },
      { label: '迈巴赫 S 级',        href: '/zh#fleet' },
      { label: '梅赛德斯 G 级',      href: '/zh#fleet' },
      { label: 'Sprinter VIP 商务车', href: '/zh#fleet' },
      { label: '梅赛德斯 EQS',       href: '/zh#fleet' },
      { label: '路虎揽胜极光',       href: '/zh#fleet' },
    ],
  },
  {
    title: '目的地与活动',
    links: [
      { label: '所有目的地',     href: '/zh#services' },
      { label: '巴黎时装周',     href: '/zh#events' },
      { label: '法国网球公开赛', href: '/zh#events' },
      { label: '戛纳电影节',     href: '/zh#events' },
      { label: '摩纳哥大奖赛',   href: '/zh#events' },
    ],
  },
  {
    title: '公司',
    links: [
      { label: '企业服务', href: '/zh' },
      { label: '成为司机', href: '/zh' },
      { label: '联系我们', href: '/zh/contact' },
    ],
  },
  {
    title: '法律',
    links: [
      { label: '法律声明', href: '/mentions-legales' },
      { label: '服务条款', href: '/cgv' },
      { label: '隐私政策', href: '/politique-confidentialite' },
    ],
  },
];

function getFooterCols(locale: string): FooterCol[] {
  if (locale === 'en') return FOOTER_COLS_EN;
  if (locale === 'ar') return FOOTER_COLS_AR;
  if (locale === 'zh') return FOOTER_COLS_ZH;
  return FOOTER_COLS_FR;
}

// Liens institutionnels compacts du pré-footer, localisés. Chaque page légale
// est désormais distincte : mentions légales, confidentialité, CGV.
function getPreFooterLinks(locale: string): { label: string; href: string }[] {
  const legal = '/mentions-legales';
  const privacy = '/politique-confidentialite';
  const terms = '/cgv';
  if (locale === 'en') return [
    { label: 'Further information', href: '/en/contact' },
    { label: 'Legal notice',       href: legal },
    { label: 'Privacy policy',     href: privacy },
    { label: 'Terms & Conditions', href: terms },
    { label: 'Contact',            href: '/en/contact' },
  ];
  if (locale === 'ar') return [
    { label: 'مزيد من المعلومات', href: '/ar/contact' },
    { label: 'إشعارات قانونية',   href: legal },
    { label: 'سياسة الخصوصية',    href: privacy },
    { label: 'الشروط والأحكام',   href: terms },
    { label: 'اتصل بنا',          href: '/ar/contact' },
  ];
  if (locale === 'zh') return [
    { label: '更多信息',   href: '/zh/contact' },
    { label: '法律声明',   href: legal },
    { label: '隐私政策',   href: privacy },
    { label: '服务条款',   href: terms },
    { label: '联系我们',   href: '/zh/contact' },
  ];
  return [
    { label: 'Plus d’informations',          href: '/a-propos' },
    { label: 'Mentions légales',             href: legal },
    { label: 'Politique de confidentialité', href: privacy },
    { label: 'CGV',                          href: terms },
    { label: 'Contact',                      href: '/contact' },
  ];
}

interface CTAProps {
  t: any;
}

export function CTA({ t }: CTAProps) {
  const phone = t?.nav?.phone?.replace(/\s/g, '') ?? '';
  const waNumber = '33687169747';

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
  const cols = getFooterCols(locale);
  const rtl = locale === 'ar';

  return (
    <>
      <footer
        dir={rtl ? 'rtl' : 'ltr'}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 px-6 md:px-10 py-14"
        style={{ borderTop: '1px solid #ece9e3', background: '#faf8f5' }}
      >
        {cols.map((col, i) => (
          <div key={i}>
            <h4 className="font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-gold-400 mb-4">
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
      {/* Pre-footer : liens institutionnels compacts */}
      <div className="px-6 py-4 flex flex-wrap justify-center gap-x-7 gap-y-2"
        style={{ background: '#f5f2ed', borderTop: '1px solid #ece9e3' }}>
        {getPreFooterLinks(locale).map((l) => (
          <Link key={l.label} href={l.href}
            className="font-sans text-[0.68rem] text-stone-500 hover:text-gold-400 transition-colors tracking-wide">
            {l.label}
          </Link>
        ))}
      </div>
      <div className="font-sans text-[0.6rem] text-stone-400 text-center tracking-[0.12em] px-6 py-5"
        style={{ background: '#faf8f5', borderTop: '1px solid #ece9e3' }}>
        {t?.footer?.copyright ?? '© 2026 AMANI LIMOUSINES'}
      </div>
    </>
  );
}

'use client';

import Link from 'next/link';

interface ServicesGridProps {
  t: any;
  locale?: string;
}

const SERVICE_KEYS = ['disposition', 'transfer', 'meetgreet', 'convoy', 'security', 'excursion', 'longdistance'];

const SERVICE_ICONS: Record<string, string> = {
  disposition:  '◷',
  transfer:     '→',
  meetgreet:    '◈',
  convoy:       '⬥',
  security:     '◉',
  excursion:    '☆',
  longdistance: '◇',
};

// Slugs des pages FR
const SERVICE_HREFS_FR: Record<string, string> = {
  disposition:  '/mise-a-disposition',
  transfer:     '/transfert-prive',
  meetgreet:    '/meet-and-greet',
  convoy:       '/convoi-delegations',
  security:     '/securite-rapprochee',
  excursion:    '/excursion-privee',
  longdistance: '/longue-distance',
};

// Slugs des pages EN
const SERVICE_HREFS_EN: Record<string, string> = {
  disposition:  '/en/hourly-hire',
  transfer:     '/en/private-transfer',
  meetgreet:    '/en/meet-and-greet',
  convoy:       '/en/delegation-transport',
  security:     '/en/close-protection',
  excursion:    '/en/private-excursion',
  longdistance: '/en/long-distance',
};

function getServiceHref(key: string, locale: string) {
  if (locale === 'en') return SERVICE_HREFS_EN[key] ?? '/';
  return SERVICE_HREFS_FR[key] ?? '/';
}

export default function ServicesGrid({ t, locale = 'fr' }: ServicesGridProps) {
  const total = SERVICE_KEYS.length; // 7 items
  const isOdd = total % 3 !== 0;

  return (
    <section id="services" className="py-20 px-6 md:px-10 text-center"
      style={{ background: '#fff' }}>
      <p className="tag-gold mb-3">{t?.services?.tag}</p>
      <h2 className="heading-section mb-10">
        {t?.services?.title} <em>{t?.services?.title_em}</em>
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold-400/[0.04]">
        {SERVICE_KEYS.map((key, idx) => {
          const service = t?.services?.items?.[key];
          if (!service) return null;

          // Centre le dernier élément seul dans une grille à 3 colonnes
          const isLastAndAlone = isOdd && idx === total - 1;

          return (
            <Link
              key={key}
              href={getServiceHref(key, locale)}
              className="bg-white p-7 text-center hover:bg-gold-400/[0.03] transition-all group block"
              style={isLastAndAlone ? { gridColumn: '2 / span 1' } : undefined}
            >
              <div className="text-xl text-gold-400 mb-4 group-hover:scale-110 transition-transform">
                {SERVICE_ICONS[key]}
              </div>
              <h3 className="text-base font-normal mb-0.5">{service.title}</h3>
              <p className="font-sans text-[0.6rem] tracking-[0.15em] uppercase text-stone-700 mb-3">
                {service.subtitle}
              </p>
              <p className="font-sans text-[0.72rem] text-stone-600 font-light leading-relaxed mb-4">
                {service.desc}
              </p>
              {/* CTA discret */}
              <span
                className="inline-block font-sans text-[0.65rem] tracking-[0.12em] uppercase transition-colors"
                style={{ color: 'rgba(138,115,64,0.7)' }}
              >
                {t?.services?.learn_more ?? 'En savoir plus'} →
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

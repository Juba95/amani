'use client';

interface ServicesGridProps {
  t: any;
}

const SERVICE_KEYS = ['disposition', 'transfer', 'meetgreet', 'convoy', 'security', 'excursion', 'longdistance'];

const SERVICE_ICONS: Record<string, string> = {
  disposition: '◷',
  transfer: '→',
  meetgreet: '◈',
  convoy: '⬥',
  security: '◉',
  excursion: '☆',
  longdistance: '◇',
};

export default function ServicesGrid({ t }: ServicesGridProps) {
  return (
    <section id="services" className="py-20 px-6 md:px-10 text-center"
      style={{ background: 'linear-gradient(180deg, #060504, #080706)' }}>
      <p className="tag-gold mb-3">{t.services.tag}</p>
      <h2 className="heading-section mb-10">
        {t.services.title} <em>{t.services.title_em}</em>
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold-400/[0.04]">
        {SERVICE_KEYS.map((key) => {
          const service = t.services.items[key];
          if (!service) return null;
          return (
            <div key={key} className="bg-dark-500 p-7 text-center hover:bg-gold-400/[0.03] transition-all cursor-pointer group">
              <div className="text-xl text-gold-400 mb-4 group-hover:scale-110 transition-transform">
                {SERVICE_ICONS[key]}
              </div>
              <h3 className="text-base font-normal mb-0.5">{service.title}</h3>
              <p className="font-sans text-[0.6rem] tracking-[0.15em] uppercase text-stone-700 mb-3">
                {service.subtitle}
              </p>
              <p className="font-sans text-[0.72rem] text-stone-600 font-light leading-relaxed">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

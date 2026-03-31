'use client';

interface CTAProps {
  t: any;
}

export function CTA({ t }: CTAProps) {
  const phone = t?.nav?.phone?.replace(/\s/g, '') ?? '';
  const waNumber = '33662027344';

  return (
    <section id="contact" className="py-20 px-6 md:px-10 text-center relative gold-glow"
      style={{ background: 'linear-gradient(180deg, #060504, #0a0908, #060504)' }}>
      <div className="relative z-10">
        <h2 className="heading-section mb-4">
          {t?.cta?.title} <em>{t?.cta?.title_em}</em>
        </h2>
        <p className="font-sans text-sm text-stone-600 font-light leading-relaxed max-w-md mx-auto mb-8">
          {t?.cta?.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`tel:${phone}`}
            className="px-6 py-3 border border-gold-400/15 rounded-xl font-sans text-sm text-gold-400 hover:bg-gold-400/[0.06] hover:border-gold-400/30 transition-all">
            ✆ {t?.nav?.phone ?? ''}
          </a>
          <a href={`mailto:contact@amani-limousines.com`}
            className="px-6 py-3 border border-gold-400/15 rounded-xl font-sans text-sm text-gold-400 hover:bg-gold-400/[0.06] hover:border-gold-400/30 transition-all">
            ✉ contact@amani-limousines.com
          </a>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 border border-gold-400/15 rounded-xl font-sans text-sm text-gold-400 hover:bg-gold-400/[0.06] hover:border-gold-400/30 transition-all">
            {t?.cta?.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}

interface FooterProps {
  t: any;
}

export function Footer({ t }: FooterProps) {
  const cols = [
    { title: t?.footer?.col1_title ?? '', links: t?.footer?.col1_links },
    { title: t?.footer?.col2_title ?? '', links: t?.footer?.col2_links },
    { title: t?.footer?.col3_title ?? '', links: t?.footer?.col3_links },
    { title: t?.footer?.col4_title ?? '', links: t?.footer?.col4_links },
  ];

  return (
    <>
      <footer className="flex flex-wrap justify-between gap-8 px-6 md:px-10 py-12 section-divider">
        {cols.map((col, i) => (
          <div key={i}>
            <h4 className="text-sm text-gold-400 font-normal mb-3">{col.title}</h4>
            {col.links?.map((link: string, j: number) => (
              <p key={j} className="font-sans text-xs text-stone-700 font-light mb-1.5 cursor-pointer hover:text-stone-500 transition-colors">
                {link}
              </p>
            ))}
          </div>
        ))}
      </footer>
      <div className="font-sans text-[0.6rem] text-stone-800 text-center tracking-[0.1em] px-6 py-5">
        {t?.footer?.copyright ?? ''}
      </div>
    </>
  );
}

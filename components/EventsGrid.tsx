'use client';

interface EventsGridProps {
  t: any;
}

const EVENT_KEYS = ['fashionweek', 'airshow', 'rolandgarros', 'cannes', 'sports', 'salons'];

// SVG icons for each event category
const EVENT_ICONS: Record<string, JSX.Element> = {
  fashionweek: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.7 2.8 1.8 3.7L5 21h14l-2.8-10.3C17.3 9.8 18 8.5 18 7c0-2.5-2.5-5-6-5z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 7h6M10 10h4" strokeLinecap="round"/>
    </svg>
  ),
  airshow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M21 16.5L15.5 11l1-7.5L14 3l-4 6H5L3 11l4.5 1.5L6 17l3 1 2-3 3 3 1-3 3 1z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  rolandgarros: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 3c4 4 4 14 0 18M3 12c4-4 14-4 18 0" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2" fill="currentColor" strokeWidth="0"/>
    </svg>
  ),
  cannes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/>
      <path d="M10 8l6 4-6 4V8z" fill="currentColor" strokeWidth="0"/>
    </svg>
  ),
  sports: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <path d="M19 7L5 7M5 12h14M3 17h18" strokeLinecap="round"/>
      <path d="M7 4v3M12 4v3M17 4v3M7 17v3M12 17v3M17 17v3" strokeLinecap="round"/>
    </svg>
  ),
  salons: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      <path d="M12 12v4M10 14h4" strokeLinecap="round"/>
    </svg>
  ),
};

export default function EventsGrid({ t }: EventsGridProps) {
  return (
    <section id="events" className="py-20 px-6 md:px-10 text-center section-divider">
      <p className="tag-gold mb-3">{t?.events?.tag}</p>
      <h2 className="heading-section mb-3">
        {t?.events?.title} <em>{t?.events?.title_em}</em>
      </h2>
      <p className="font-sans text-sm text-stone-500 font-light mb-10">
        {t?.events?.subtitle ?? 'Transport VIP pour les grands rendez-vous parisiens'}
      </p>

      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
        {EVENT_KEYS.map((key) => {
          const event = t?.events?.items?.[key];
          if (!event) return null;
          return (
            <div key={key} className="card-luxury !p-6 text-center group">
              <div
                className="inline-flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ color: '#8a7340' }}
              >
                {EVENT_ICONS[key]}
              </div>
              <h3 className="text-sm font-normal mb-1 text-gray-800">{event.title}</h3>
              <p className="font-sans text-[0.7rem] font-light" style={{ color: '#8a7340', opacity: 0.8 }}>
                {event.period}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

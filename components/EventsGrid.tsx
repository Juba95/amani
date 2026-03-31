'use client';

interface EventsGridProps {
  t: any;
}

const EVENT_KEYS = ['fashionweek', 'airshow', 'rolandgarros', 'cannes', 'sports', 'salons'];

export default function EventsGrid({ t }: EventsGridProps) {
  return (
    <section id="events" className="py-20 px-6 md:px-10 text-center section-divider">
      <p className="tag-gold mb-3">{t?.events?.tag}</p>
      <h2 className="heading-section mb-10">
        {t?.events?.title} <em>{t?.events?.title_em}</em>
      </h2>

      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
        {EVENT_KEYS.map((key) => {
          const event = t?.events?.items?.[key];
          if (!event) return null;
          return (
            <div key={key} className="card-luxury !p-5 text-center">
              <h3 className="text-sm font-normal mb-1">{event.title}</h3>
              <p className="font-sans text-[0.7rem] text-gold-400/70 font-light">{event.period}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

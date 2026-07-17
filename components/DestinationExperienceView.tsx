/**
 * Page détail d'une expérience de destination (contenu long généré par
 * scripts/generate-experience-details.mjs). Server component — style aligné
 * sur DestinationViews / ExperiencesViews.
 */
import Link from 'next/link';
import type { Destination } from '@/lib/destinations';
import type { ExperienceDetail } from '@/lib/experience-details';

type L = 'fr' | 'en';

const T = {
  fr: {
    base: '/destinations',
    crumb: 'Toutes les destinations',
    tag: 'Expérience signature',
    from: 'À partir de',
    duration: 'Durée',
    price: 'Prix',
    vehicle: 'Véhicule & chauffeur dédiés',
    stepsTitle: 'Votre itinéraire',
    includedTitle: 'Ce qui est inclus',
    tipTitle: 'Le conseil de votre chauffeur',
    otherTitle: (city: string) => `Les autres expériences à ${city}`,
    backCity: (city: string) => `Chauffeur privé ${city}`,
    ctaTitle: 'Réservez cette expérience',
    ctaSub: 'Confirmation sous 30 minutes · Prix fixe communiqué à l’avance',
    book: 'Demander un devis',
  },
  en: {
    base: '/en/destinations',
    crumb: 'All destinations',
    tag: 'Signature experience',
    from: 'From',
    duration: 'Duration',
    price: 'Price',
    vehicle: 'Dedicated vehicle & chauffeur',
    stepsTitle: 'Your itinerary',
    includedTitle: 'What’s included',
    tipTitle: 'Your chauffeur’s tip',
    otherTitle: (city: string) => `Other experiences in ${city}`,
    backCity: (city: string) => `Private chauffeur ${city}`,
    ctaTitle: 'Book this experience',
    ctaSub: 'Confirmed within 30 minutes · Fixed price quoted in advance',
    book: 'Request a quote',
  },
};

export default function DestinationExperienceView({
  d,
  exp,
  siblings,
  locale,
}: {
  d: Destination;
  exp: ExperienceDetail;
  siblings: ExperienceDetail[];
  locale: L;
}) {
  const t = T[locale];
  const source = d.experiences[exp.index];
  const price = locale === 'fr' ? `${source?.price ?? ''} €` : `€${source?.price ?? ''}`;
  const duration = source?.duration[locale] ?? '';
  const cityName = d.name[locale];

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-10 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <nav className="font-sans text-xs text-stone-400 mb-6 flex flex-wrap gap-1.5">
            <Link href={t.base} className="hover:text-gold-400">{t.crumb}</Link>
            <span>/</span>
            <Link href={`${t.base}/${d.slug}`} className="hover:text-gold-400">{cityName}</Link>
            <span>/</span>
            <span className="text-stone-500">{exp.title[locale]}</span>
          </nav>
          <p className="tag">{t.tag} — {cityName}</p>
          <h1 className="heading mt-3">{exp.title[locale]}</h1>

          {/* Bandeau infos */}
          <div className="mt-8 grid grid-cols-3 max-w-lg border border-warm-200 rounded-lg overflow-hidden text-center divide-x divide-warm-200">
            <div className="py-4 px-2">
              <p className="font-sans text-[0.6rem] tracking-[0.14em] uppercase text-stone-400">{t.duration}</p>
              <p className="font-serif text-sm text-gray-900 mt-1">{duration}</p>
            </div>
            <div className="py-4 px-2">
              <p className="font-sans text-[0.6rem] tracking-[0.14em] uppercase text-stone-400">{t.price}</p>
              <p className="font-serif text-sm text-gray-900 mt-1">{t.from} <b className="font-normal">{price}</b></p>
            </div>
            <div className="py-4 px-2">
              <p className="font-sans text-[0.6rem] tracking-[0.14em] uppercase text-stone-400">Mercedes</p>
              <p className="font-serif text-sm text-gray-900 mt-1">{t.vehicle}</p>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {exp.intro[locale].map((p, i) => (
              <p key={i} className="sf text-stone-600 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Itinéraire */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-2xl">{t.stepsTitle}</h2>
          <ol className="mt-7 space-y-4">
            {exp.steps.map((s, i) => (
              <li key={i} className="card flex items-start gap-4">
                <span className="font-serif text-xl shrink-0 w-8" style={{ color: '#c9b27c' }}>
                  {['I', 'II', 'III', 'IV', 'V'][i]}
                </span>
                <p className="sf text-sm text-stone-600 leading-relaxed pt-0.5">{s[locale]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Inclus + conseil */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="heading text-2xl">{t.includedTitle}</h2>
            <ul className="mt-6 space-y-2.5">
              {exp.included[locale].map((item) => (
                <li key={item} className="sf text-sm text-stone-600 flex items-start gap-2.5">
                  <span style={{ color: '#8a7340' }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-warm-50 border border-warm-200 rounded-lg p-6">
            <h2 className="font-serif text-lg text-gray-900">{t.tipTitle}</h2>
            <p className="sf text-sm text-stone-600 leading-relaxed mt-3">{exp.tip[locale]}</p>
          </div>
        </div>
      </section>

      {/* Autres expériences de la ville */}
      {siblings.length > 0 && (
        <section className="py-14 px-6 md:px-10 bg-warm-50">
          <div className="max-w-4xl mx-auto">
            <p className="tag">{cityName}</p>
            <h2 className="heading text-2xl mt-2">{t.otherTitle(cityName)}</h2>
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              {siblings.map((s) => {
                const src = d.experiences[s.index];
                return (
                  <Link key={s.slug} href={`${t.base}/${d.slug}/${s.slug}`}
                    className="card block hover:-translate-y-0.5 hover:shadow-lg transition-all">
                    <h3 className="font-serif text-base text-gray-900">{s.title[locale]}</h3>
                    <p className="font-sans text-xs text-stone-400 mt-1.5">
                      {src?.duration[locale]} · {t.from}{' '}
                      <b className="font-serif text-sm text-gray-900 font-normal">
                        {locale === 'fr' ? `${src?.price} €` : `€${src?.price}`}
                      </b>
                    </p>
                  </Link>
                );
              })}
            </div>
            <Link href={`${t.base}/${d.slug}`}
              className="inline-block mt-7 font-sans text-xs font-bold tracking-[0.12em] uppercase"
              style={{ color: '#6d5a30' }}>
              ← {t.backCity(cityName)}
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6 md:px-10 text-center" style={{ background: '#0f0d0b' }}>
        <h2 className="heading text-white">{t.ctaTitle}</h2>
        <p className="font-sans text-sm mt-3" style={{ color: '#bdb5a4' }}>{t.ctaSub}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Link href="/reservation"
            className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase text-white transition-opacity hover:opacity-90"
            style={{ background: '#8a7340' }}>
            {t.book}
          </Link>
          <a href="tel:+33687169747"
            className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase transition-colors border"
            style={{ borderColor: '#c9b27c', color: '#c9b27c' }}>
            +33 6 87 16 97 47
          </a>
        </div>
      </section>
    </>
  );
}

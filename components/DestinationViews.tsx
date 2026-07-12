/**
 * Vues du système « destinations européennes » : page détail (hero, transfert
 * aéroport, 5 expériences numérotées, FAQ + JSON-LD, villes proches, CTA)
 * et hub (liste de toutes les destinations groupées par pays).
 * Styles cohérents avec CityExperiences.tsx / ExperiencesViews.tsx.
 */
import Link from 'next/link';
import {
  ALL_DESTINATIONS,
  getNearbyDestinations,
  type Destination,
} from '@/lib/destinations';

type DestLocale = 'fr' | 'en';

const T = {
  fr: {
    base: '/destinations',
    h1: (city: string) => `Chauffeur privé à ${city}`,
    airportTag: 'Transfert aéroport',
    airportTitle: (city: string) => `Aéroport de ${city} — transfert privé`,
    expTag: 'Expériences',
    expTitle: (city: string) => `5 expériences avec votre chauffeur à ${city}`,
    expIntro:
      'Au-delà des transferts, votre chauffeur devient la clé de la région — itinéraires privés, prix fixes, véhicule à disposition à chaque étape.',
    from: 'À partir de',
    faqTag: 'Questions fréquentes',
    faqTitle: (city: string) => `Chauffeur privé ${city} — vos questions`,
    nearbyTag: 'Villes proches',
    nearbyTitle: 'Poursuivez votre itinéraire',
    ctaTitle: 'Réservez votre chauffeur',
    ctaSub: 'Confirmation sous 30 minutes · Prix fixe communiqué à l’avance',
    book: 'Demander un devis',
    call: '+33 6 87 16 97 47',
    allDest: 'Toutes les destinations',
    hubTag: 'Destinations',
    hubH1: 'Chauffeur privé dans toute l’Europe',
    hubIntro:
      'De Paris aux capitales européennes, des stations alpines aux rivages méditerranéens : un chauffeur privé, un véhicule premium et un prix fixe, où que vous alliez.',
  },
  en: {
    base: '/en/destinations',
    h1: (city: string) => `Private chauffeur in ${city}`,
    airportTag: 'Airport transfer',
    airportTitle: (city: string) => `${city} airport — private transfer`,
    expTag: 'Experiences',
    expTitle: (city: string) => `5 experiences with your chauffeur in ${city}`,
    expIntro:
      'Beyond transfers, your chauffeur becomes the key to the region — private itineraries, fixed prices, vehicle on standby at every stop.',
    from: 'From',
    faqTag: 'Frequently asked questions',
    faqTitle: (city: string) => `Private chauffeur ${city} — your questions`,
    nearbyTag: 'Nearby cities',
    nearbyTitle: 'Continue your journey',
    ctaTitle: 'Book your chauffeur',
    ctaSub: 'Confirmed within 30 minutes · Fixed price quoted in advance',
    book: 'Request a quote',
    call: '+33 6 87 16 97 47',
    allDest: 'All destinations',
    hubTag: 'Destinations',
    hubH1: 'Private chauffeur across Europe',
    hubIntro:
      'From Paris to the European capitals, from alpine resorts to Mediterranean shores: a private chauffeur, a premium vehicle and a fixed price, wherever you go.',
  },
};

/** Rend un texte dont les segments **entre doubles astérisques** passent en <strong>. */
function Strong({ text }: { text: string }) {
  const parts = text.split('**');
  return (
    <>
      {parts.map((p, i) => (i % 2 === 1 ? <strong key={i}>{p}</strong> : p))}
    </>
  );
}

function Price({ price, locale }: { price: string; locale: DestLocale }) {
  return (
    <b className="font-serif text-base text-gray-900 font-normal">
      {locale === 'fr' ? `${price} €` : `€${price}`}
    </b>
  );
}

export function DestinationDetail({ d, locale }: { d: Destination; locale: DestLocale }) {
  const t = T[locale];
  const nearby = getNearbyDestinations(d);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.faq.map((f) => ({
      '@type': 'Question',
      name: f.q[locale],
      acceptedAnswer: { '@type': 'Answer', text: f.a[locale] },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero : pays + h1 + intro */}
      <section className="pt-36 pb-12 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">{d.country[locale]}</p>
          <h1 className="heading mt-3">{t.h1(d.name[locale])}</h1>
          <div className="mt-6 space-y-5">
            {d.intro[locale].map((p, i) => (
              <p key={i} className="sf text-stone-600 leading-relaxed">
                <Strong text={p} />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Transfert aéroport */}
      <section className="py-12 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <p className="tag">{t.airportTag}</p>
          <div className="card mt-4">
            <h2 className="font-serif text-lg text-gray-900">
              {d.airport ?? t.airportTitle(d.name[locale])}
            </h2>
            <p className="sf text-sm text-stone-600 leading-relaxed mt-2">
              {d.airportTransfer[locale]}
            </p>
          </div>
        </div>
      </section>

      {/* 5 expériences numérotées I-V */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">{t.expTag}</p>
          <h2 className="heading mt-2">{t.expTitle(d.name[locale])}</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">{t.expIntro}</p>
          <div className="space-y-4">
            {d.experiences.map((e, i) => (
              <div key={e.title.en} className="card flex flex-col sm:flex-row sm:items-center gap-4">
                <span className="font-serif text-2xl shrink-0 w-10" style={{ color: '#c9b27c' }}>
                  {['I', 'II', 'III', 'IV', 'V'][i]}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-gray-900">{e.title[locale]}</h3>
                  <p className="sf text-sm text-stone-600 leading-relaxed mt-1">{e.teaser[locale]}</p>
                </div>
                <div className="shrink-0 text-left sm:text-right font-sans text-xs text-stone-400">
                  <span className="block">{e.duration[locale]}</span>
                  <span className="block mt-0.5">
                    {t.from} <Price price={e.price} locale={locale} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <p className="tag">{t.faqTag}</p>
          <h2 className="heading mt-2 mb-8">{t.faqTitle(d.name[locale])}</h2>
          <div className="space-y-4">
            {d.faq.map((f) => (
              <div key={f.q.en} className="card">
                <h3 className="font-serif text-lg text-gray-900">{f.q[locale]}</h3>
                <p className="sf text-sm text-stone-600 leading-relaxed mt-2">{f.a[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villes proches (maillage interne) */}
      {nearby.length > 0 && (
        <section className="py-14 px-6 md:px-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="tag">{t.nearbyTag}</p>
            <h2 className="heading mt-2 mb-8">{t.nearbyTitle}</h2>
            <div className="flex flex-wrap gap-3">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`${t.base}/${n.slug}`}
                  className="font-sans text-sm px-5 py-2.5 rounded-full border border-warm-200 text-stone-600 hover:border-stone-500 hover:text-gray-900 transition-colors"
                >
                  {n.name[locale]}
                </Link>
              ))}
              <Link
                href={t.base}
                className="font-sans text-sm px-5 py-2.5 rounded-full border border-warm-200 text-stone-400 hover:border-stone-500 hover:text-gray-900 transition-colors"
              >
                {t.allDest} →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA devis */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading mb-3">{t.ctaTitle}</h2>
          <p className="sf text-stone-500 mb-8 text-sm">{t.ctaSub}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/reservation"
              className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase text-white"
              style={{ background: '#0a0908' }}
            >
              {t.book}
            </Link>
            <a
              href="tel:+33687169747"
              className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 hover:border-stone-600 transition-colors"
            >
              {t.call}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export function DestinationsHub({ locale }: { locale: DestLocale }) {
  const t = T[locale];

  // Groupement par pays, dans l'ordre d'apparition du registre
  const byCountry = new Map<string, Destination[]>();
  for (const d of ALL_DESTINATIONS) {
    const key = d.country[locale];
    const list = byCountry.get(key) ?? [];
    list.push(d);
    byCountry.set(key, list);
  }

  return (
    <>
      <section className="pt-36 pb-12 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="tag">{t.hubTag}</p>
          <h1 className="heading mt-3">{t.hubH1}</h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">{t.hubIntro}</p>
        </div>
      </section>
      <section className="pb-20 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {[...byCountry.entries()].map(([country, cities]) => (
            <div key={country}>
              <h2 className="font-serif text-xl text-gray-900 border-b border-warm-200 pb-3 mb-5">{country}</h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2.5">
                {cities.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`${t.base}/${d.slug}`}
                      className="sf text-sm text-stone-600 hover:text-gray-900 transition-colors"
                    >
                      {d.name[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

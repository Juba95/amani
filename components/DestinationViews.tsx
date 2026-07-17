/**
 * Vues du système « destinations européennes » : page détail (hero, transfert
 * aéroport, 5 expériences numérotées, FAQ + JSON-LD, villes proches, CTA)
 * et hub (liste de toutes les destinations groupées par pays).
 * Styles cohérents avec CityExperiences.tsx / ExperiencesViews.tsx.
 */
import Image from 'next/image';
import Link from 'next/link';
import { getCityExperienceDetails, getExperienceImage, getImageCredit } from '@/lib/experience-details';
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
  // Contenu long des expériences (null tant que non généré pour cette ville)
  const expDetails = getCityExperienceDetails(d.slug);
  // Image héros de la ville (null tant que non générée)
  const cityImage = getExperienceImage(d.slug);
  const cityImageCredit = getImageCredit(d.slug, cityImage);
  const nearby = getNearbyDestinations(d);
  // Maillage pays : jusqu'à 12 autres villes du même pays (hors ville courante
  // et hors villes proches déjà listées juste au-dessus)
  const nearbySlugs = new Set(nearby.map((n) => n.slug));
  const countrySisters = ALL_DESTINATIONS
    .filter((x) => x.country.en === d.country.en && x.slug !== d.slug && !nearbySlugs.has(x.slug))
    .slice(0, 12);

  const BASE_URL = 'https://www.amani-limousines.com';
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Amani Limousines', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: locale === 'fr' ? 'Destinations' : 'Destinations', item: `${BASE_URL}${t.base}` },
      { '@type': 'ListItem', position: 3, name: d.name[locale], item: `${BASE_URL}${t.base}/${d.slug}` },
    ],
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero : pays + h1 + image (si générée) + intro */}
      <section className="pt-36 pb-12 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">{d.country[locale]}</p>
          <h1 className="heading mt-3">{t.h1(d.name[locale])}</h1>
          {cityImage && (
            <div className="relative aspect-[3/2] sm:aspect-[21/9] rounded-lg overflow-hidden mt-8">
              <Image
                src={cityImage}
                alt={`${d.name[locale]} — ${d.country[locale]}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
              {cityImageCredit && (
                <span className="absolute bottom-1.5 right-2 font-sans text-[0.55rem] text-white/70 bg-black/30 px-1.5 py-0.5 rounded-sm">
                  {cityImageCredit}
                </span>
              )}
            </div>
          )}
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

      {/* Services VTC — bloc sémantique (mots-clés à fort volume : VTC,
          chauffeur de maître, voiture avec chauffeur, transfert aéroport) */}
      <section className="py-12 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-2xl">
            {locale === 'fr'
              ? `VTC de luxe à ${d.name.fr} — nos services avec chauffeur`
              : `Luxury chauffeur services in ${d.name.en}`}
          </h2>
          <div className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {(locale === 'fr'
              ? [
                  [`Transfert aéroport ${d.name.fr}`, <>Accueil personnalisé, suivi de vol et <strong>prix fixe</strong> — votre <strong>VTC à {d.name.fr}</strong> vous attend, même en cas de retard.</>],
                  ['Mise à disposition avec chauffeur', <>Une <strong>voiture avec chauffeur</strong> à l’heure ou à la journée : rendez-vous d’affaires, shopping, visites — l’itinéraire s’adapte à vous.</>],
                  ['Chauffeur de maître', <>Un <strong>chauffeur de maître</strong> dédié pour vos séjours : discrétion, ponctualité et connaissance parfaite de {d.name.fr} et de sa région.</>],
                  ['Excursions et expériences', <>Cinq itinéraires signés au départ de {d.name.fr}, avec <strong>chauffeur privé</strong> et véhicule Mercedes à chaque étape.</>],
                ]
              : [
                  [`${d.name.en} airport transfer`, <>Personal meet-and-greet, flight tracking and <strong>fixed prices</strong> — your <strong>private driver in {d.name.en}</strong> waits for you, even when flights run late.</>],
                  ['Chauffeur hire by the hour', <>A <strong>car with driver</strong> by the hour or the day: business meetings, shopping, sightseeing — the itinerary adapts to you.</>],
                  ['Personal chauffeur service', <>A dedicated <strong>personal chauffeur</strong> for your stay: discretion, punctuality and intimate knowledge of {d.name.en} and its region.</>],
                  ['Excursions and experiences', <>Five signature itineraries departing {d.name.en}, with a <strong>private chauffeur</strong> and a Mercedes on standby at every stop.</>],
                ]
            ).map(([title, body], i) => (
              <div key={i}>
                <h3 className="font-serif text-base text-gray-900">{title}</h3>
                <p className="sf text-sm text-stone-600 leading-relaxed mt-1.5">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 expériences numérotées I-V — cliquables si le contenu long existe
          (content/experience-details/<slug>.json, généré par script) */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">{t.expTag}</p>
          <h2 className="heading mt-2">{t.expTitle(d.name[locale])}</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">{t.expIntro}</p>
          <div className="space-y-4">
            {d.experiences.map((e, i) => {
              const detail = expDetails?.experiences.find((x) => x.index === i);
              const inner = (
                <>
                  <span className="font-serif text-2xl shrink-0 w-10" style={{ color: '#c9b27c' }}>
                    {['I', 'II', 'III', 'IV', 'V'][i]}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-gray-900">{e.title[locale]}</h3>
                    <p className="sf text-sm text-stone-600 leading-relaxed mt-1">{e.teaser[locale]}</p>
                    {detail && (
                      <span className="inline-block mt-2 font-sans text-[0.65rem] font-bold tracking-[0.12em] uppercase"
                        style={{ color: '#6d5a30' }}>
                        {locale === 'fr' ? 'Découvrir l’itinéraire →' : 'View the itinerary →'}
                      </span>
                    )}
                  </div>
                  <div className="shrink-0 text-left sm:text-right font-sans text-xs text-stone-400">
                    <span className="block">{e.duration[locale]}</span>
                    <span className="block mt-0.5">
                      {t.from} <Price price={e.price} locale={locale} />
                    </span>
                  </div>
                </>
              );
              return detail ? (
                <Link key={e.title.en} href={`${t.base}/${d.slug}/${detail.slug}`}
                  className="card flex flex-col sm:flex-row sm:items-center gap-4 hover:-translate-y-0.5 hover:shadow-lg transition-all">
                  {inner}
                </Link>
              ) : (
                <div key={e.title.en} className="card flex flex-col sm:flex-row sm:items-center gap-4">
                  {inner}
                </div>
              );
            })}
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

      {/* Villes proches (maillage interne) + expériences à proximité */}
      {nearby.length > 0 && (
        <section className="py-14 px-6 md:px-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="tag">{t.nearbyTag}</p>
            <h2 className="heading mt-2 mb-8">{t.nearbyTitle}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nearby.map((n) => {
                const nDetails = getCityExperienceDetails(n.slug);
                const firstExp = nDetails?.experiences[0];
                return (
                  <div key={n.slug} className="card">
                    <Link href={`${t.base}/${n.slug}`} className="font-serif text-lg text-gray-900 hover:text-gold-500 transition-colors">
                      {locale === 'fr' ? `Chauffeur privé ${n.name.fr}` : `Private chauffeur ${n.name.en}`}
                    </Link>
                    {firstExp && (
                      <Link href={`${t.base}/${n.slug}/${firstExp.slug}`}
                        className="block font-sans text-xs text-stone-500 hover:text-gold-500 mt-2 transition-colors">
                        → {firstExp.title[locale]}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Maillage pays : les autres villes desservies dans le même pays */}
      {countrySisters.length > 0 && (
        <section className="py-14 px-6 md:px-10 bg-warm-50">
          <div className="max-w-4xl mx-auto">
            <p className="tag">{d.country[locale]}</p>
            <h2 className="heading mt-2 mb-4">
              {locale === 'fr'
                ? `Chauffeur privé en ${d.country.fr} — nos autres destinations`
                : `Private chauffeur in ${d.country.en} — our other destinations`}
            </h2>
            <p className="sf text-sm text-stone-500 mb-8 leading-relaxed">
              {locale === 'fr'
                ? <>Votre <strong>chauffeur de maître</strong> vous accompagne dans tout le pays : mise à disposition, transferts inter-villes et excursions au départ de {d.name.fr}.</>
                : <>Your <strong>personal chauffeur</strong> covers the whole country: hourly hire, inter-city transfers and excursions departing from {d.name.en}.</>}
            </p>
            <div className="flex flex-wrap gap-3">
              {countrySisters.map((n) => (
                <Link
                  key={n.slug}
                  href={`${t.base}/${n.slug}`}
                  className="font-sans text-sm px-5 py-2.5 rounded-full border border-warm-200 bg-white text-stone-600 hover:border-stone-500 hover:text-gray-900 transition-colors"
                >
                  {n.name[locale]}
                </Link>
              ))}
              <Link
                href={t.base}
                className="font-sans text-sm px-5 py-2.5 rounded-full border border-warm-200 bg-white text-stone-400 hover:border-stone-500 hover:text-gray-900 transition-colors"
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

/** Destinations phares illustrées (slugs du registre disposant d'une photo). */
const HUB_HIGHLIGHTS: { slug: string; img: string; label: { fr: string; en: string } }[] = [
  { slug: 'versailles-ville', img: '/images/home/versailles.jpg', label: { fr: 'Versailles', en: 'Versailles' } },
  { slug: 'giverny-village', img: '/images/home/giverny.jpg', label: { fr: 'Giverny', en: 'Giverny' } },
  { slug: 'mont-saint-michel-ville', img: '/images/home/montsaintmichel.jpg', label: { fr: 'Mont-Saint-Michel', en: 'Mont-Saint-Michel' } },
  { slug: 'epernay', img: '/images/home/champagne.jpg', label: { fr: 'Épernay', en: 'Épernay' } },
  { slug: 'tours', img: '/images/home/chambord.jpg', label: { fr: 'Châteaux de la Loire', en: 'Loire Valley' } },
];

export function DestinationsHub({ locale, children }: { locale: DestLocale; children?: React.ReactNode }) {
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

      {/* Carte d'Europe interactive (slot fourni par la page) */}
      {children && (
        <section className="pb-14 px-6 md:px-10 bg-white">
          <div className="max-w-6xl mx-auto">{children}</div>
        </section>
      )}

      {/* Destinations phares illustrées */}
      <section className="pb-14 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {HUB_HIGHLIGHTS.map((h) => (
            <Link key={h.slug} href={`${t.base}/${h.slug}`}
              className="group relative aspect-[3/4] rounded-md overflow-hidden hover:-translate-y-1 transition-transform">
              <Image src={h.img} alt={h.label[locale]} fill sizes="(max-width:640px) 45vw, 220px" quality={65}
                className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,.05) 35%, rgba(0,0,0,.78))' }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-lg text-white">{h.label[locale]}</h3>
                <p className="font-sans text-[0.6rem] tracking-[0.12em] uppercase text-white/75">
                  {locale === 'en' ? 'Private chauffeur' : 'Chauffeur privé'}
                </p>
              </div>
            </Link>
          ))}
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

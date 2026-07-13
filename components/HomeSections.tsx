/**
 * Sections de la home issues de la refonte (maquette V3) :
 * preuve sociale, expériences, top destinations, trajets populaires, recrutement.
 * Bilingue FR/EN — server component (aucun état).
 */
import Image from 'next/image';
import Link from 'next/link';
import EuropeMap, { type MapCountry } from './EuropeMap';

type L = 'fr' | 'en';

/* ── Preuve sociale ──────────────────────────────────────────────────────── */
export function SocialProofStrip({ locale = 'fr' as L }) {
  const items =
    locale === 'en'
      ? ['<b>4.9/5</b> Google Reviews', 'Trusted by <b>embassies & palaces</b>', '<b>Fixed prices</b>, no surprises', 'Free waiting time at airports']
      : ['<b>4,9/5</b> avis Google', 'Partenaire des <b>ambassades & palaces</b>', '<b>Prix fixes</b>, sans surprise', 'Attente gratuite aux aéroports'];
  return (
    <div className="bg-white border-b border-warm-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
        {items.map((h) => (
          <span key={h} className="font-sans text-xs text-stone-500 [&>b]:text-gray-900 [&>b]:font-semibold"
            dangerouslySetInnerHTML={{ __html: h }} />
        ))}
      </div>
    </div>
  );
}

/* ── Expériences signature ───────────────────────────────────────────────── */
const EXPERIENCES = {
  fr: [
    { slug: 'paris-by-night', img: '/images/home/parisnight.jpg', badge: '4–5 heures', cat: 'Soirée', title: 'Paris by Night',
      text: 'La tour Eiffel scintillante, Montmartre au crépuscule, dépose dîner sur les Champs-Élysées — votre chauffeur toute la soirée.', price: '390 €' },
    { slug: 'champagne-day-trip', img: '/images/home/champagne.jpg', badge: 'Journée', cat: 'Vin & gastronomie', title: 'Escapade Champagne',
      text: 'Reims & Épernay depuis Paris : visites de maisons, dégustations privées et déjeuner — votre chauffeur gère chaque kilomètre.', price: '890 €' },
    { slug: 'loire-valley-castles', img: '/images/home/chambord.jpg', badge: 'Journée', cat: 'Excursion', title: 'Châteaux de la Loire',
      text: 'Chambord, Chenonceau et déjeuner étoilé. Départ de votre hôtel à 8h, retour pour dîner à Paris.', price: '990 €' },
  ],
  en: [
    { slug: 'paris-by-night', img: '/images/home/parisnight.jpg', badge: '4–5 hours', cat: 'By night', title: 'Paris by Night',
      text: 'The Eiffel Tower sparkling, Montmartre at dusk, dinner drop-off on the Champs-Élysées — with your chauffeur all evening.', price: '€390' },
    { slug: 'champagne-day-trip', img: '/images/home/champagne.jpg', badge: 'Full day', cat: 'Wine & gastronomy', title: 'Champagne Day Trip',
      text: 'Reims & Épernay from Paris: maisons visits, private tastings and lunch — your chauffeur handles every kilometre.', price: '€890' },
    { slug: 'loire-valley-castles', img: '/images/home/chambord.jpg', badge: 'Full day', cat: 'Day trip', title: 'Loire Valley Castles',
      text: 'Chambord, Chenonceau and a starred lunch stop. Depart your hotel at 8am, return for dinner in Paris.', price: '€990' },
  ],
};

export function ExperiencesSection({ locale = 'fr' as L }) {
  const en = locale === 'en';
  const base = en ? '/en/experiences' : '/experiences';
  return (
    <section className="py-20 px-6 md:px-10 bg-warm-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="tag">{en ? 'Signature experiences' : 'Expériences signature'}</p>
          <h2 className="heading mt-3">
            {en ? 'More than a transfer — a curated experience' : 'Plus qu’un transfert — une expérience sur mesure'}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {EXPERIENCES[locale].map((e) => (
            <Link key={e.title} href={`${base}/${e.slug}`}
              className="group bg-white border border-warm-200 rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={e.img} alt={e.title} fill sizes="(max-width:768px) 90vw, 380px" quality={70}
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 right-3 font-sans text-[0.55rem] tracking-[0.16em] uppercase bg-black/55 text-white px-2.5 py-1 rounded-full">{e.badge}</span>
                <span className="absolute left-3 bottom-3 font-sans text-[0.55rem] tracking-[0.14em] uppercase text-white px-2.5 py-1 rounded-sm" style={{ background: 'rgba(138,115,64,.92)' }}>{e.cat}</span>
              </div>
              <div className="p-6 flex flex-col gap-2 flex-1">
                <h3 className="font-serif text-xl text-gray-900">{e.title}</h3>
                <p className="font-sans text-sm text-stone-500 leading-relaxed">{e.text}</p>
                <div className="mt-auto pt-4 border-t border-warm-200 flex items-center justify-between">
                  <span className="font-sans text-xs text-stone-400">{en ? 'From' : 'À partir de'} <b className="font-serif text-base text-gray-900 font-normal">{e.price}</b></span>
                  <span className="font-sans text-[0.65rem] font-bold tracking-[0.12em] uppercase" style={{ color: '#6d5a30' }}>
                    {en ? 'Discover →' : 'Découvrir →'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Top destinations ────────────────────────────────────────────────────── */
const DESTS: { name: string; img: string; fr: string; en: string }[] = [
  { name: 'Paris',        img: 'paris',        fr: '/chauffeur-prive-paris',        en: '/en/private-chauffeur-paris' },
  { name: 'Nice',         img: 'nice',         fr: '/chauffeur-prive-nice',         en: '/chauffeur-prive-nice' },
  { name: 'Cannes',       img: 'cannes',       fr: '/chauffeur-prive-cannes',       en: '/chauffeur-prive-cannes' },
  { name: 'Monaco',       img: 'monaco',       fr: '/chauffeur-prive-monaco',       en: '/chauffeur-prive-monaco' },
  { name: 'Saint-Tropez', img: 'sainttropez',  fr: '/chauffeur-prive-saint-tropez', en: '/chauffeur-prive-saint-tropez' },
  { name: 'Lyon',         img: 'lyon',         fr: '/chauffeur-prive-lyon',         en: '/chauffeur-prive-lyon' },
  { name: 'Bordeaux',     img: 'bordeaux',     fr: '/chauffeur-prive-bordeaux',     en: '/en/private-chauffeur-bordeaux' },
  { name: 'Deauville',    img: 'deauville',    fr: '/chauffeur-prive-deauville',    en: '/chauffeur-prive-deauville' },
  { name: 'Megève',       img: 'megeve',       fr: '/chauffeur-prive-megeve',       en: '/en/megeve-chauffeur' },
  { name: 'Marseille',    img: 'marseille',    fr: '/chauffeur-prive-marseille',    en: '/en/marseille-airport-transfer' },
];

export function DestinationsSection({ locale = 'fr' as L }) {
  const en = locale === 'en';
  return (
    <section className="py-20 px-6 md:px-10" style={{ background: '#0f0d0b' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="tag">{en ? 'Top destinations' : 'Top destinations'}</p>
          <h2 className="heading mt-3 text-white">
            {en ? 'Your chauffeur, all across France' : 'Votre chauffeur, partout en France'}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {DESTS.map((d) => (
            <Link key={d.name} href={en ? d.en : d.fr}
              className="group relative aspect-[3/4] rounded-md overflow-hidden hover:-translate-y-1 transition-transform">
              <Image src={`/images/home/${d.img}.jpg`} alt={d.name} fill sizes="(max-width:640px) 45vw, 220px" quality={65}
                className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,.05) 35%, rgba(0,0,0,.78))' }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-lg text-white">{d.name}</h3>
                <p className="font-sans text-[0.6rem] tracking-[0.12em] uppercase text-white/75">
                  {en ? 'Private chauffeur' : 'Chauffeur privé'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Carte d'Europe interactive ──────────────────────────────────────────── */
export function DestinationsMapSection({ locale = 'fr' as L, countries }: { locale?: L; countries: Record<string, MapCountry> }) {
  const en = locale === 'en';
  const total = Object.values(countries).reduce((n, c) => n + c.cities.length, 0);
  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="tag">{en ? 'Across Europe' : 'Partout en Europe'}</p>
          <h2 className="heading mt-3">
            {en ? `${total} destinations, one chauffeur` : `${total} destinations, un seul chauffeur`}
          </h2>
          <p className="font-sans text-sm text-stone-500 leading-relaxed mt-4">
            {en
              ? 'Hover over a country to discover our cities — each with airport transfers, hourly hire and 5 curated experiences.'
              : 'Survolez un pays pour découvrir nos villes — chacune avec transferts aéroport, mise à disposition et 5 expériences sur mesure.'}
          </p>
        </div>
        <EuropeMap locale={locale} countries={countries} />
        <div className="text-center mt-10">
          <Link href={en ? '/en/destinations' : '/destinations'}
            className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase text-white transition-opacity hover:opacity-90"
            style={{ background: '#8a7340' }}>
            {en ? 'All destinations' : 'Toutes les destinations'}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Trajets populaires ──────────────────────────────────────────────────── */
const ROUTES = {
  fr: [
    { label: 'Paris ↔ Aéroport CDG', info: '45 min · 34 km', href: '/transfert-cdg-paris' },
    { label: 'Paris ↔ Deauville',    info: '2 h 15 · 200 km', href: '/chauffeur-prive-deauville' },
    { label: 'Paris ↔ Reims',        info: '1 h 45 · 145 km', href: '/longue-distance' },
    { label: 'Nice ↔ Monaco',        info: '35 min · 22 km', href: '/chauffeur-prive-monaco' },
  ],
  en: [
    { label: 'Paris ↔ CDG Airport', info: '45 min · 34 km', href: '/en/cdg-airport-transfer' },
    { label: 'Paris ↔ Deauville',   info: '2 h 15 · 200 km', href: '/en/long-distance' },
    { label: 'Paris ↔ Reims',       info: '1 h 45 · 145 km', href: '/en/long-distance' },
    { label: 'Nice ↔ Monaco',       info: '35 min · 22 km', href: '/en/long-distance' },
  ],
};

export function RoutesStrip({ locale = 'fr' as L }) {
  const en = locale === 'en';
  return (
    <section className="py-16 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="tag">{en ? 'Popular routes' : 'Trajets populaires'}</p>
          <h2 className="heading mt-3" style={{ fontSize: '1.6rem' }}>
            {en ? 'Fixed-price journeys, door to door' : 'Prix fixe, porte à porte'}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROUTES[locale].map((r) => (
            <Link key={r.label} href={r.href}
              className="border border-warm-200 rounded-sm px-5 py-4 bg-warm-50 hover:border-stone-400 transition-colors">
              <span className="block font-sans text-sm font-semibold text-gray-900">{r.label}</span>
              <span className="block font-sans text-xs text-stone-400 mt-1">{r.info}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Recrutement chauffeurs ──────────────────────────────────────────────── */
export function RecruitBlock({ locale = 'fr' as L }) {
  const en = locale === 'en';
  const href = en ? '/en/become-a-chauffeur' : '/devenir-chauffeur';
  return (
    <section className="py-20 px-6 md:px-10 bg-warm-50">
      <div className="max-w-5xl mx-auto rounded-lg px-8 py-14 md:px-16 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(120deg, #171410, #241d12)' }}>
        <p className="tag" style={{ color: '#c9b27c' }}>{en ? 'Careers' : 'Recrutement'}</p>
        <h2 className="heading mt-3 text-white">
          {en ? 'Become an Amani chauffeur' : 'Devenez chauffeur Amani'}
        </h2>
        <p className="font-sans text-sm font-light leading-relaxed max-w-xl mx-auto mt-4" style={{ color: '#bdb5a4' }}>
          {en
            ? 'We are always looking for exceptional chauffeurs — multilingual, impeccably presented, passionate about service.'
            : 'Nous recherchons en permanence des chauffeurs d’exception — multilingues, d’une présentation irréprochable, passionnés par le service.'}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={href}
            className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase text-white transition-opacity hover:opacity-90"
            style={{ background: '#8a7340' }}>
            {en ? 'Apply as a chauffeur' : 'Postuler comme chauffeur'}
          </Link>
          <Link href={href}
            className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase transition-colors border"
            style={{ borderColor: '#c9b27c', color: '#c9b27c' }}>
            {en ? 'Partner with your own vehicle' : 'Devenir partenaire avec votre véhicule'}
          </Link>
        </div>
      </div>
    </section>
  );
}

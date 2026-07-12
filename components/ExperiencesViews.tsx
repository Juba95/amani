/**
 * Vues du catalogue d'expériences : hub (grille filtrable par catégorie via
 * liens ?cat=) et page détail (modèle DeluxeFrance amélioré : durée, prix,
 * highlights, inclus/non inclus, CTA devis, expériences liées).
 */
import Image from 'next/image';
import Link from 'next/link';
import { EXPERIENCES, EXPERIENCE_CATEGORIES, type Experience, type ExpLocale } from '@/lib/experiences';

const T = {
  fr: {
    tag: 'Expériences signature', h1: 'Plus qu’un transfert — une expérience sur mesure',
    intro: 'Chaque expérience comprend votre chauffeur privé dédié, un véhicule premium et un itinéraire pensé pour vous. Prix fixes, sans surprise.',
    from: 'À partir de', discover: 'Découvrir', base: '/experiences',
    highlights: 'Points forts', included: 'Inclus', notIncluded: 'Non inclus',
    cta: 'Réserver cette expérience', ctaSub: 'Confirmation sous 30 minutes · Annulation gratuite jusqu’à 24 h avant',
    book: 'Demander un devis', call: '+33 6 87 16 97 47', related: 'Vous aimerez aussi', all: 'Toutes les expériences',
    duration: 'Durée', priceLabel: 'Prix', perVehicle: 'par véhicule',
  },
  en: {
    tag: 'Signature experiences', h1: 'More than a transfer — a curated experience',
    intro: 'Every experience includes your dedicated private chauffeur, a premium vehicle and an itinerary designed around you. Fixed prices, no surprises.',
    from: 'From', discover: 'Discover', base: '/en/experiences',
    highlights: 'Highlights', included: 'Included', notIncluded: 'Not included',
    cta: 'Book this experience', ctaSub: 'Confirmed within 30 minutes · Free cancellation up to 24 h before',
    book: 'Request a quote', call: '+33 6 87 16 97 47', related: 'You may also like', all: 'All experiences',
    duration: 'Duration', priceLabel: 'Price', perVehicle: 'per vehicle',
  },
};

function Price({ e, locale }: { e: Experience; locale: ExpLocale }) {
  return <b className="font-serif text-lg text-gray-900 font-normal">{locale === 'fr' ? `${e.price} €` : `€${e.price}`}</b>;
}

export function ExperienceCard({ e, locale }: { e: Experience & { categoryId: string }; locale: ExpLocale }) {
  const t = T[locale];
  return (
    <Link href={`${t.base}/${e.slug}`}
      className="group bg-white border border-warm-200 rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={e.image} alt={e.title[locale]} fill sizes="(max-width:768px) 90vw, 380px" quality={70}
          className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 right-3 font-sans text-[0.55rem] tracking-[0.16em] uppercase bg-black/55 text-white px-2.5 py-1 rounded-full">{e.duration[locale]}</span>
        <span className="absolute left-3 bottom-3 font-sans text-[0.55rem] tracking-[0.14em] uppercase text-white px-2.5 py-1 rounded-sm" style={{ background: 'rgba(138,115,64,.92)' }}>{e.category[locale]}</span>
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1">
        <h3 className="font-serif text-xl text-gray-900">{e.title[locale]}</h3>
        <p className="font-sans text-sm text-stone-500 leading-relaxed">{e.teaser[locale]}</p>
        <div className="mt-auto pt-4 border-t border-warm-200 flex items-center justify-between">
          <span className="font-sans text-xs text-stone-400">{t.from} <Price e={e} locale={locale} /></span>
          <span className="font-sans text-[0.65rem] font-bold tracking-[0.12em] uppercase" style={{ color: '#6d5a30' }}>{t.discover} →</span>
        </div>
      </div>
    </Link>
  );
}

export function ExperiencesHub({ locale, cat = 'all' }: { locale: ExpLocale; cat?: string }) {
  const t = T[locale];
  const list = cat === 'all' ? EXPERIENCES : EXPERIENCES.filter((e) => e.categoryId === cat);
  return (
    <>
      <section className="pt-36 pb-12 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="tag">{t.tag}</p>
          <h1 className="heading mt-3">{t.h1}</h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">{t.intro}</p>
        </div>
      </section>
      <section className="pb-20 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {EXPERIENCE_CATEGORIES.map((c) => (
              <Link key={c.id} href={c.id === 'all' ? t.base : `${t.base}?cat=${c.id}`}
                className={`font-sans text-xs px-5 py-2 rounded-full border transition-colors ${
                  cat === c.id ? 'bg-gray-900 text-white border-gray-900 font-semibold' : 'border-warm-200 text-stone-500 hover:border-stone-400'}`}>
                {c[locale]}
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {list.map((e) => <ExperienceCard key={e.slug} e={e} locale={locale} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export function ExperienceDetail({ e, locale }: { e: Experience & { categoryId: string }; locale: ExpLocale }) {
  const t = T[locale];
  const related = EXPERIENCES.filter((x) => x.slug !== e.slug).slice(0, 3);
  return (
    <>
      {/* Hero image + titre */}
      <section className="pt-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
            <Image src={e.image} alt={e.title[locale]} fill priority sizes="(max-width:1024px) 100vw, 960px" quality={75} className="object-cover" />
          </div>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="tag">{e.category[locale]}</p>
              <h1 className="heading mt-2">{e.title[locale]}</h1>
            </div>
            <div className="flex gap-8 font-sans text-sm text-stone-500">
              <div><span className="block text-[0.6rem] tracking-[0.16em] uppercase text-stone-400">{t.duration}</span>{e.duration[locale]}</div>
              <div><span className="block text-[0.6rem] tracking-[0.16em] uppercase text-stone-400">{t.priceLabel}</span>{t.from} <Price e={e} locale={locale} /> <span className="text-xs text-stone-400">{t.perVehicle}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Description + highlights */}
      <section className="py-12 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.5fr,1fr] gap-12">
          <div className="space-y-5">
            {e.description[locale].map((p, i) => (
              <p key={i} className="sf text-stone-600 leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="bg-warm-50 border border-warm-200 rounded-md p-7 h-fit">
            <h2 className="font-serif text-lg text-gray-900 mb-4">{t.highlights}</h2>
            <ul className="space-y-3">
              {e.highlights[locale].map((h) => (
                <li key={h} className="flex items-start gap-3 sf text-sm text-stone-600">
                  <span style={{ color: '#8a7340' }}>✓</span>{h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Inclus / non inclus */}
      <section className="py-12 px-6 md:px-10 bg-warm-50">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="font-serif text-lg text-gray-900 mb-4">{t.included}</h2>
            <ul className="space-y-2.5">
              {e.included[locale].map((i) => (
                <li key={i} className="flex items-start gap-3 sf text-sm text-stone-600"><span style={{ color: '#8a7340' }}>✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2 className="font-serif text-lg text-gray-900 mb-4">{t.notIncluded}</h2>
            <ul className="space-y-2.5">
              {e.notIncluded[locale].map((i) => (
                <li key={i} className="flex items-start gap-3 sf text-sm text-stone-500"><span className="text-stone-300">—</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA devis */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading mb-3">{t.cta}</h2>
          <p className="sf text-stone-500 mb-8 text-sm">{t.ctaSub}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reservation" className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase text-white" style={{ background: '#0a0908' }}>{t.book}</Link>
            <a href="tel:+33687169747" className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 hover:border-stone-600 transition-colors">{t.call}</a>
          </div>
        </div>
      </section>

      {/* Expériences liées */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <h2 className="heading" style={{ fontSize: '1.5rem' }}>{t.related}</h2>
            <Link href={t.base} className="font-sans text-xs font-semibold tracking-[0.08em] uppercase" style={{ color: '#6d5a30' }}>{t.all} →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {related.map((r) => <ExperienceCard key={r.slug} e={r} locale={locale} />)}
          </div>
        </div>
      </section>
    </>
  );
}

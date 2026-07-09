import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/german-speaking-chauffeur-paris';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'German-Speaking Chauffeur in Paris — Private Driver | Amani Limousines',
  description: 'Private chauffeur fluent in German, available across Paris, France and Europe. Airport and rail transfers, trade shows, business travel. Available 24/7.',
  canonical: 'https://www.amani-limousines.com/en/german-speaking-chauffeur-paris',
  alternates: {
    languages: {
      fr: 'https://www.amani-limousines.com/chauffeur-germanophone',
      'x-default': 'https://www.amani-limousines.com/en/german-speaking-chauffeur-paris',
    },
  },
});

const services = [
  {
    title: 'Airport and rail-station transfers',
    text:
      'Arriving at CDG from Munich, or stepping off the ICE at Gare de l’Est from Frankfurt: your chauffeur is there at the agreed time, vehicle ready. Pick-up is swift, conducted in German, and you are driven straight to your destination without delay.',
  },
  {
    title: 'Business travel and industrial trade shows',
    text:
      'France and Germany share close economic ties. Our chauffeurs regularly drive executives from major industrial groups between La Défense, Villepinte and the Paris business districts. They speak German and adjust the schedule in real time as your meetings evolve.',
  },
  {
    title: 'Sightseeing for German-speaking visitors',
    text:
      'For visitors from Germany, Austria or Switzerland, your chauffeur handles cultural outings in Paris and beyond — the Grand Palais, Versailles, Champagne. He knows the routes, anticipates traffic, and communicates in German throughout your stay.',
  },
  {
    title: 'Conventions and Franco-German forums',
    text:
      'For the major trade fairs at Paris-Nord Villepinte and Franco-German economic forums, we deploy several vehicles with German-speaking chauffeurs. Each driver works from a precise schedule with all drop-off and pick-up points, for flawless coordination.',
  },
];

const situations = [
  'Automotive-industry engineers and executives travelling to Paris',
  'Trade fairs at Villepinte — Mondial de l’Auto, Equip Auto, JEC World',
  'Visitors from Germany, Austria or Switzerland on cultural stays',
  'ICE arrivals at Gare de l’Est from Frankfurt, Stuttgart or Cologne',
  'Industrial delegations visiting plants across the Paris region',
  'Franco-German economic forums and meetings at the Chamber of Commerce',
  'Gastronomic weekends and Champagne excursions from Paris',
];

export default function GermanSpeakingChauffeurPage() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">German-Speaking Chauffeur</p>
          <h1 className="heading mt-3">
            {c('h1', 'German-speaking private chauffeur in Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines provides German-speaking private chauffeurs in Paris for professionals and visitors from Germany, Austria and Switzerland. Punctuality, complete command of the Paris road network and precise communication in German: every journey is managed with the rigour a demanding German-speaking clientele expects. Available 24/7 across the Paris region.')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Book now
            </Link>
            <a
              href="tel:+33687169747"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              +33 6 87 16 97 47
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">What we do for you, in German</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Rail stations, airports, trade shows, sightseeing —
            in German, with the punctuality and efficiency you expect.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{s.title}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Who we drive</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {situations.map((s) => (
              <div key={s} className="flex items-start gap-3 p-4 rounded-xl bg-warm-50 border border-warm-200">
                <span style={{ color: '#8a7340' }}>✓</span>
                <p className="sf text-sm text-stone-600">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading mb-4">Book your German-speaking chauffeur</h2>
          <p className="sf text-stone-500 mb-8">
            Available 24/7. Booking confirmed within 30 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Book now
            </Link>
            <Link
              href="/en/contact"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Related services</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Private chauffeur Paris', href: '/en/private-chauffeur-paris' },
              { label: 'CDG airport transfer', href: '/en/cdg-airport-transfer' },
              { label: 'Hourly hire', href: '/en/hourly-hire' },
              { label: 'Delegation transport', href: '/en/delegation-transport' },
              { label: 'Long distance', href: '/en/long-distance' },
              { label: 'Private excursion', href: '/en/private-excursion' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block text-center py-4 px-6 border border-stone-200 font-sans text-sm text-gray-700 hover:border-stone-500 transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

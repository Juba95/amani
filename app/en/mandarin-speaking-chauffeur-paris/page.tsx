import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/mandarin-speaking-chauffeur-paris';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Mandarin-Speaking Chauffeur in Paris — Private Driver | Amani Limousines',
  description: 'Private chauffeur fluent in Mandarin, available across Paris, France and Europe. Luxury shopping, business delegations, excursions. Available 24/7.',
  canonical: 'https://www.amani-limousines.com/en/mandarin-speaking-chauffeur-paris',
  alternates: {
    languages: {
      fr: 'https://www.amani-limousines.com/chauffeur-mandarin',
      'x-default': 'https://www.amani-limousines.com/en/mandarin-speaking-chauffeur-paris',
    },
  },
});

const services = [
  {
    title: 'Airport welcome in Mandarin',
    text:
      'The name board is written in Chinese and French. The chauffeur speaks Mandarin, the vehicle is prepared. After a long flight from Shanghai or Beijing, these details transform the arrival: luggage is taken care of immediately, and the journey begins in the best possible conditions.',
  },
  {
    title: 'Luxury shopping — Faubourg Saint-Honoré, Printemps, Galeries Lafayette',
    text:
      'Paris is a world capital of luxury shopping. Louis Vuitton on the Champs-Élysées, Hermès on rue du Faubourg Saint-Honoré, Chanel at Printemps Haussmann: your chauffeur knows these addresses and how to reach them, and can call the boutique teams in Mandarin to prepare your visit.',
  },
  {
    title: 'Business delegations and investors',
    text:
      'Our chauffeurs regularly accompany Chinese executives and investors through packed Paris schedules — law and advisory firms in the 8th arrondissement, site visits, business lunches. Communication in Mandarin, mastery of the routes, and punctuality guaranteed at every meeting.',
  },
  {
    title: 'Excursions — Versailles, Champagne, the Loire châteaux',
    text:
      'Versailles in half a day, a Champagne outing with a tasting, the Loire châteaux over two days. Your chauffeur organises the itinerary, tells you in Mandarin what there is to see, and adapts the programme if you want to linger somewhere or change plans.',
  },
];

const situations = [
  'Luxury shopping — Champs-Élysées, Faubourg Saint-Honoré, Printemps Haussmann',
  'Chinese travel groups touring Paris and the French regions',
  'Investors and executives attending business meetings in Paris',
  'Families visiting universities — Sciences Po, the Sorbonne, HEC',
  'Vineyard days in Champagne or Bordeaux',
  'Trade shows — Vinexpo, Maison & Objet, Fashion Week',
  'Transfers to La Vallée Village for outlet shopping',
  'Welcoming Chinese public figures at official events',
];

export default function MandarinSpeakingChauffeurPage() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Mandarin-Speaking Chauffeur</p>
          <h1 className="heading mt-3">
            {c('h1', 'Mandarin-speaking private chauffeur in Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines provides Mandarin-speaking private chauffeurs in Paris. Luxury shopping, business delegations, cultural sightseeing or excursions beyond the capital: every journey is organised around the expectations of a discerning clientele. Our chauffeurs know the addresses favoured by Chinese visitors to Paris and communicate directly in Mandarin. Available 24/7, in Paris and across France.')}
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
          <h2 className="heading">What we do for you, in Mandarin</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Airports, shopping, business travel, excursions beyond Paris —
            in Mandarin, from the first journey to the last.
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
          <h2 className="heading mb-4">Book your Mandarin-speaking chauffeur</h2>
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
              { label: 'Private excursion', href: '/en/private-excursion' },
              { label: 'Meet & Greet', href: '/en/meet-and-greet' },
              { label: 'Long distance', href: '/en/long-distance' },
              { label: 'Events', href: '/en/events' },
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

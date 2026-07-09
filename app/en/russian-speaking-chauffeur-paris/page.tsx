import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/russian-speaking-chauffeur-paris';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Russian-Speaking Chauffeur in Paris — Private Driver | Amani Limousines',
  description: 'Private chauffeur fluent in Russian, available across Paris, France and Europe. Luxury shopping, galas, long stays and airport transfers. Available 24/7.',
  canonical: 'https://www.amani-limousines.com/en/russian-speaking-chauffeur-paris',
  alternates: {
    languages: {
      fr: 'https://www.amani-limousines.com/chauffeur-russophone',
      'x-default': 'https://www.amani-limousines.com/en/russian-speaking-chauffeur-paris',
    },
  },
});

const services = [
  {
    title: 'Airport transfers and welcome in Russian',
    text:
      'You land at CDG or Le Bourget — your chauffeur is already there. He speaks Russian, has tracked your flight, and knows if you are running late. Name board, luggage handled, premium vehicle parked as close as possible. The drive to your hotel on the Champs-Élysées or in the 16th unfolds calmly, in Russian.',
  },
  {
    title: 'Shopping — Faubourg Saint-Honoré, Vendôme, rue de la Paix',
    text:
      'Paris and luxury shopping are a combination Russian-speaking clients know well. Your chauffeur knows the jewellers of place Vendôme, the boutiques of the Faubourg Saint-Honoré and the exclusive corners of Le Bon Marché. He drops you at the entrance, handles the parking and returns at the agreed time.',
  },
  {
    title: 'Galas, premieres and Parisian society evenings',
    text:
      'A private view at the Palais de Tokyo, a premiere at the Opéra Garnier, a gala in a 7th-arrondissement mansion. Your chauffeur delivers you to the door precisely on time, remains reachable in Russian all evening, and collects you the moment you decide. No hunting for a taxi at midnight on a dark street.',
  },
  {
    title: 'Long stays and a dedicated chauffeur',
    text:
      'For a stay of two weeks or more, we assign you a dedicated Russian-speaking chauffeur. He quickly learns your habits: the restaurant where you lunch, the time you go out, your favourite addresses. Property viewings in the 16th, medical appointments, excursions to Monaco or the French Riviera — he manages it all.',
  },
];

const situations = [
  'Luxury shopping stays — Champs-Élysées, Vendôme, Faubourg Saint-Honoré',
  'Private views, galas and society evenings in the finest districts',
  'Apartment viewings and property investment in Paris',
  'Medical appointments at the clinics of the 16th and 8th',
  'Combined trips: Paris, the French Riviera and Monaco',
  'Family holidays over the festive season or the summer',
  'Private events — weddings, birthdays, receptions',
  'Winter transfers to Courchevel and the Alpine resorts',
];

export default function RussianSpeakingChauffeurPage() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Russian-Speaking Chauffeur</p>
          <h1 className="heading mt-3">
            {c('h1', 'Russian-speaking private chauffeur in Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Paris has long attracted a discerning Russian-speaking clientele — luxury shopping, evenings at the palace hotels, cultural visits and extended stays. A chauffeur who speaks Russian lets you organise every journey with precision, adjust a programme in real time and communicate without constraint. Our Russian-speaking chauffeurs are available 24/7.')}
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
          <h2 className="heading">What we do for you, in Russian</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Airports, luxury shopping, evenings out, long stays —
            in Russian, with the discretion and precision you expect.
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
          <h2 className="heading mb-4">Book your Russian-speaking chauffeur</h2>
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
              { label: 'Private excursion', href: '/en/private-excursion' },
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

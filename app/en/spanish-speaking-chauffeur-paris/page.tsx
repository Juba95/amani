import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/spanish-speaking-chauffeur-paris';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Spanish-Speaking Chauffeur in Paris — Private Driver | Amani Limousines',
  description: 'Private chauffeur fluent in Spanish, available across Paris, France and Europe. Airport transfers, sightseeing, business and diplomacy. Available 24/7.',
  canonical: 'https://www.amani-limousines.com/en/spanish-speaking-chauffeur-paris',
  alternates: {
    languages: {
      fr: 'https://www.amani-limousines.com/chauffeur-hispanophone',
      'x-default': 'https://www.amani-limousines.com/en/spanish-speaking-chauffeur-paris',
    },
  },
});

const services = [
  {
    title: 'Airport transfers, handled in Spanish',
    text:
      'Landing at CDG from Mexico City, Madrid or Buenos Aires: your chauffeur is waiting at arrivals with a name board. He speaks Spanish, helps with the luggage, and on the way to your hotel keeps you posted — journey time, traffic on the A1, what to expect. Simple and direct, en español.',
  },
  {
    title: 'Discovering Paris with a local who speaks your language',
    text:
      'Spanish-speaking visitors deserve more than the standard tourist loop. Your chauffeur knows the passage du Grand-Cerf, the good addresses of the 11th arrondissement, the quieter routes past the landmarks — and shares these recommendations in Spanish, for a different level of discovery.',
  },
  {
    title: 'Business meetings and diplomacy',
    text:
      'Spanish companies, Latin American embassies, the Maison de l’Amérique latine on boulevard Saint-Germain: your chauffeur knows the embassy district, where to stop near the OECD, and how to manage the timing between appointments. Everything happens in Spanish — including last-minute calls to shift a meeting.',
  },
  {
    title: 'Spanish-speaking groups and delegations',
    text:
      'A Mexican trade delegation, an Argentine group on a gastronomic tour, a Spanish team attending a trade fair at Villepinte: Amani Limousines deploys several vehicles with Spanish-speaking chauffeurs and coordinates every transfer for a punctual arrival at each stop.',
  },
];

const situations = [
  'Latin American travellers who want to see the real Paris',
  'Diplomats and officials with meetings near the Maison de l’Amérique latine',
  'Spanish companies in Paris for trade fairs and conferences',
  'Families on holiday from Mexico, Colombia or Argentina',
  'Day trips to the vineyards of Bordeaux or Champagne',
  'Roland-Garros and sporting events for Spanish-speaking fans',
  'Cultural stays — the Louvre, Orsay, shows and the Latin Quarter',
];

export default function SpanishSpeakingChauffeurPage() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Spanish-Speaking Chauffeur</p>
          <h1 className="heading mt-3">
            {c('h1', 'Spanish-speaking private chauffeur in Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines provides Spanish-speaking private chauffeurs in Paris for tourists, executives and diplomats from Spain and Latin America. Speaking Spanish with your chauffeur fundamentally changes a stay in Paris: exchanges are direct, and every journey is organised with precision. Available 24/7.')}
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
          <h2 className="heading">What we do for you, in Spanish</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Airports, sightseeing, business travel, groups and delegations —
            en español, from the first journey to the last.
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
          <h2 className="heading mb-4">Book your Spanish-speaking chauffeur</h2>
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

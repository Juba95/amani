import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/english-speaking-chauffeur-paris';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'English-Speaking Chauffeur in Paris — Private Driver | Amani Limousines',
  description: 'Private chauffeur fluent in English, available across Paris, France and Europe. Airport transfers, business meetings, luxury sightseeing. Available 24/7.',
  canonical: 'https://www.amani-limousines.com/en/english-speaking-chauffeur-paris',
  alternates: {
    languages: {
      fr: 'https://www.amani-limousines.com/chauffeur-anglophone',
      'x-default': 'https://www.amani-limousines.com/en/english-speaking-chauffeur-paris',
    },
  },
});

const services = [
  {
    title: 'Airport pick-up, welcomed in English',
    text:
      'Landing at CDG from New York, London or Singapore: your chauffeur is waiting at arrivals with a name board, takes your luggage immediately, and briefs you — in English — on the journey time to your hotel and the traffic ahead. No effort required on your side.',
  },
  {
    title: 'Business meetings between La Défense and the 8th',
    text:
      'Three meetings in one day — La Défense, boulevard Haussmann, rue de Rivoli. Your chauffeur knows the routes, anticipates traffic, and tells you in plain English when it is time to leave to stay on schedule. No misunderstandings, no lost time.',
  },
  {
    title: 'Seeing Paris without the language barrier',
    text:
      'Montmartre in the morning, Saint-Germain for lunch, the Marais in the afternoon. Your chauffeur knows the addresses guidebooks miss — place Dauphine, passage des Panoramas, the Left Bank riverside — and shares them in English, adapting the route to your pace.',
  },
  {
    title: 'A dedicated chauffeur for your whole stay',
    text:
      'For a week-long stay, a conference series or a delegation from New York, Amani assigns you one dedicated chauffeur. He learns your habits and preferences quickly, giving you seamless service from the first day to the last.',
  },
];

const situations = [
  'Bankers from the City or Wall Street on a tight Paris schedule',
  'American and British travellers staying at the Ritz, the Bristol or the Meurice',
  'Tech conferences and trade shows — VivaTech, OECD, UNESCO',
  'Investor road-shows between Paris, London and Frankfurt',
  'Executives travelling from New York or Singapore',
  'Off-sites and team-building around Paris for international teams',
  'English-speaking families who want to see more than the Eiffel Tower',
];

export default function EnglishSpeakingChauffeurPage() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">English-Speaking Chauffeur</p>
          <h1 className="heading mt-3">
            {c('h1', 'English-speaking private chauffeur in Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines provides English-speaking private chauffeurs in Paris for business and leisure travellers. Fluent communication, deep knowledge of the capital and absolute discretion: every journey runs with the clarity and efficiency an international clientele expects. Available 24/7.')}
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
          <h2 className="heading">What we do for you, in English</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Airports, business meetings, sightseeing, multi-day hire —
            in English, from the first exchange to the last ride.
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
          <h2 className="heading mb-4">Book your English-speaking chauffeur</h2>
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

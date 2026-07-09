import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/korean-speaking-chauffeur-paris';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Korean-Speaking Chauffeur in Paris — Private Driver | Amani Limousines',
  description: 'Private chauffeur fluent in Korean, available across Paris, France and Europe. K-beauty and fashion shopping, corporate travel, sightseeing. Available 24/7.',
  canonical: 'https://www.amani-limousines.com/en/korean-speaking-chauffeur-paris',
  alternates: {
    languages: {
      fr: 'https://www.amani-limousines.com/chauffeur-coreen',
      'x-default': 'https://www.amani-limousines.com/en/korean-speaking-chauffeur-paris',
    },
  },
});

const services = [
  {
    title: 'Airport welcome in Korean',
    text:
      'Your name board is written in Hangul as well as French. Your chauffeur greets you in Korean, takes your luggage immediately and drives you to your hotel. From the moment you land in Paris, you are looked after in your own language — no intermediaries, no confusion.',
  },
  {
    title: 'Fashion, beauty and Parisian shopping',
    text:
      'Paris and Korea share the same passion for fashion and beauty. Your chauffeur knows the concept stores of the Marais, the 6th-arrondissement pharmacies famous for their dermo-cosmetics, the Chanel and Dior flagships on avenue Montaigne and the K-beauty space at Galeries Lafayette Haussmann. Drop-offs and pick-ups are handled with precision.',
  },
  {
    title: 'Corporate travel — Samsung, LG, Hyundai',
    text:
      'Major Korean groups have offices throughout France. For a Samsung director or a Hyundai engineer on a week-long assignment, your chauffeur handles the daily transfers, knows the La Défense headquarters and the R&D centres around Paris, and communicates directly in Korean.',
  },
  {
    title: 'Sightseeing and excursions in Korean',
    text:
      'Eiffel Tower, Versailles, Giverny, Champagne: your chauffeur plans the day, selects the routes and comments on the sights in Korean. Personal guidance that makes any audio guide redundant.',
  },
];

const situations = [
  'Korean fashion buyers during Paris Fashion Week',
  'K-beauty itineraries and the trend-setting pharmacies of the 6th',
  'Samsung, LG and Hyundai executives on business trips',
  'Korean travellers touring Paris, Provence and the French Riviera',
  'Korean influencers and creators attending fashion events in Paris',
  'Wine tastings in Champagne or Bordeaux',
  'Korean students and families visiting Paris universities',
  'Group excursions to Versailles, Giverny or Mont-Saint-Michel',
];

export default function KoreanSpeakingChauffeurPage() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Korean-Speaking Chauffeur</p>
          <h1 className="heading mt-3">
            {c('h1', 'Korean-speaking private chauffeur in Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines provides Korean-speaking private chauffeurs in Paris. Fashion buyers, leisure travellers, executives of major corporations: the Korean clientele in Paris is diverse and demanding. A chauffeur who speaks Korean guarantees direct, precise communication — for a stay organised down to the last detail. Available 24/7.')}
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
          <h2 className="heading">What we do for you, in Korean</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Airports, shopping, business travel, excursions —
            in Korean, from the first ride to the last.
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
          <h2 className="heading mb-4">Book your Korean-speaking chauffeur</h2>
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
              { label: 'Hourly hire', href: '/en/hourly-hire' },
              { label: 'Long distance', href: '/en/long-distance' },
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

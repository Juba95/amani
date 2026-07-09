import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/arabic-speaking-chauffeur-paris';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Arabic-Speaking Chauffeur in Paris — Private Driver | Amani Limousines',
  description: 'Private chauffeur fluent in Arabic, available across Paris, France and Europe. VIP arrivals, luxury shopping, medical stays, family visits. Available 24/7.',
  canonical: 'https://www.amani-limousines.com/en/arabic-speaking-chauffeur-paris',
  alternates: {
    languages: {
      fr: 'https://www.amani-limousines.com/chauffeur-arabophone',
      'x-default': 'https://www.amani-limousines.com/en/arabic-speaking-chauffeur-paris',
    },
  },
});

const services = [
  {
    title: 'VIP welcome and airport transfers',
    text:
      'Your aircraft lands at Roissy-CDG or Le Bourget, and an Arabic-speaking chauffeur is already waiting. He handles the luggage, coordinates with your assistant if needed, and drives you straight to your hotel or residence — with the protocol and warmth a clientele from the Arab world rightfully expects.',
  },
  {
    title: 'Shopping days on avenue Montaigne and place Vendôme',
    text:
      'Avenue Montaigne, Faubourg Saint-Honoré, place Vendôme, Galeries Lafayette: your chauffeur knows these addresses, their opening hours and the best drop-off points. He can call ahead to a personal shopper at Dior or Chanel to announce your arrival and have your visit prepared.',
  },
  {
    title: 'Medical stays and specialist appointments',
    text:
      'Many families from the Gulf come to Paris for specialist medical consultations. Your chauffeur manages every transfer between your hotel and the clinics of the 16th and 8th arrondissements, and can liaise in Arabic with the reception teams whenever it helps.',
  },
  {
    title: 'Families and extended stays',
    text:
      'For a family stay of several weeks, Amani Limousines assigns one or two dedicated Arabic-speaking chauffeurs. They quickly adapt to each family’s rhythm and priorities — Disneyland, Le Bon Marché, appointments in the 8th — and organise the days accordingly.',
  },
];

const situations = [
  'Gulf families spending the summer season in Paris',
  'Luxury shopping days — Montaigne, Vendôme, Galeries Lafayette',
  'Medical consultations at the private clinics of the 16th arrondissement',
  'Real-estate investors viewing properties in western Paris',
  'Official delegations from the Middle East',
  'Combined itineraries — Paris, the French Riviera and London',
  'Private events — weddings and receptions in the palace hotels',
  'Accompanying public figures during trade shows and conferences',
];

export default function ArabicSpeakingChauffeurPage() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Arabic-Speaking Chauffeur</p>
          <h1 className="heading mt-3">
            {c('h1', 'Arabic-speaking private chauffeur in Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines regularly welcomes families and travellers from the Arab world in Paris. An Arabic-speaking chauffeur means communicating without an intermediary: routes, addresses, the shape of each day — everything is handled directly in your language. Our chauffeurs know the Parisian addresses that matter and meet the standards of a discerning clientele. Available 24/7.')}
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
          <h2 className="heading">What we do for you, in Arabic</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            From touchdown to the final journey, everything is handled in your language.
            Shopping, medical stays, family visits.
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
          <h2 className="heading mb-4">Book your Arabic-speaking chauffeur</h2>
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
              { label: 'Close protection', href: '/en/close-protection' },
              { label: 'Delegation transport', href: '/en/delegation-transport' },
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

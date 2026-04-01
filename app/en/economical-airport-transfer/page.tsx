import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/economical-airport-transfer';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Economical Airport Transfer Paris — Fixed Price, No Meter | Amani Limousines',
  description: 'Airport transfer from Paris CDG, Orly and Beauvais with fixed price. No meter, no peak surcharges. Know your fare before you book. Available 24/7.',
  canonical: 'https://www.amani-limousines.com/en/economical-airport-transfer',
  alternates: {
    languages: {
      fr: 'https://www.amani-limousines.com/transfert-aeroport-economique',
      'x-default': 'https://www.amani-limousines.com/en/economical-airport-transfer',
    },
  },
});

const rates = [
  {
    route: 'CDG → Paris city centre',
    eClass: '€80–100',
    vClass: '€130–150',
    note: 'Varies by terminal and arrondissement.',
  },
  {
    route: 'Orly → Paris city centre',
    eClass: '€70–90',
    vClass: '€110–130',
    note: 'Same rate for Orly South and Orly West.',
  },
  {
    route: 'Beauvais → Paris',
    eClass: '€130–150',
    vClass: '€180–200',
    note: '85 km from Beauvais centre. No night surcharge.',
  },
  {
    route: 'CDG → La Défense',
    eClass: '€90–110',
    vClass: '€140–160',
    note: 'Business district and surrounding hotels.',
  },
];

const advantages = [
  {
    point: 'The price is set before you travel',
    detail:
      'Unlike a metered taxi, you know the exact amount when you confirm the booking. That number does not change if there is congestion on the A1 or the ring road.',
  },
  {
    point: 'No peak-hour surcharge',
    detail:
      'A 5am departure costs the same as a 2pm one. No weekend rates, no night multiplier. One price, confirmed upfront.',
  },
  {
    point: 'Flight tracking at no extra cost',
    detail:
      'If your flight into CDG or Orly lands late, the driver tracks it and adjusts. You do not need to call and update anyone.',
  },
  {
    point: 'Waiting time is included',
    detail:
      'The time it takes to collect luggage after landing is built into the fixed price. No per-minute billing from wheels-down.',
  },
];

export default function EconomicalAirportTransfer() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">CDG · Orly · Beauvais</p>
          <h1 className="heading mt-3">
            {c('h1', 'Airport transfer Paris — fixed price, no meter')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'A Paris taxi from CDG can cost €55 or €110 depending on traffic, time of day and how fast the meter runs. With an Amani driver, you have a price before you get in the car, and that price does not change. CDG, Orly and Beauvais, 24 hours a day, seven days a week.')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Get a quote
            </Link>
            <a
              href="tel:+33662027344"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              +33 6 62 02 73 44
            </a>
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Indicative rates</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            These ranges reflect typical fares. For your exact address, use the
            booking form or call directly.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="font-sans text-xs text-left py-3 pr-6 text-stone-500 font-medium tracking-wide uppercase">Route</th>
                  <th className="font-sans text-xs text-left py-3 pr-6 text-stone-500 font-medium tracking-wide uppercase">E-Class</th>
                  <th className="font-sans text-xs text-left py-3 pr-6 text-stone-500 font-medium tracking-wide uppercase">V-Class</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r) => (
                  <tr key={r.route} className="border-b border-stone-100">
                    <td className="py-4 pr-6">
                      <p className="font-serif text-sm text-gray-900">{r.route}</p>
                      <p className="font-sans text-xs text-stone-400 mt-1">{r.note}</p>
                    </td>
                    <td className="py-4 pr-6 font-sans text-sm text-gray-700">{r.eClass}</td>
                    <td className="py-4 pr-6 font-sans text-sm text-gray-700">{r.vClass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="sf text-stone-400 text-xs mt-4">
            E-Class for 1–3 passengers. V-Class for 1–7 passengers. Fixed price confirmed at booking.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">What a fixed price actually means</h2>
          <div className="mt-8 space-y-6">
            {advantages.map((a) => (
              <div key={a.point} className="border-l-2 border-stone-200 pl-6">
                <p className="font-serif text-gray-900 mb-2">{a.point}</p>
                <p className="sf text-stone-600 text-sm leading-relaxed">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airports */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Airports covered</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            <strong>Charles de Gaulle (CDG)</strong> — Terminals 1, 2A through 2G and
            Terminal 3. We meet you in the arrivals hall with a name board. Meet &amp; Greet
            with escort to the vehicle is available.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            <strong>Orly (ORY)</strong> — Orly South, Orly West and the unified terminal.
            Same greeting service, same fixed pricing model.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            <strong>Beauvais-Tillé (BVA)</strong> — 85 km from Paris, mostly served by
            budget carriers. The official shuttle takes 1h15 and drops you at Porte Maillot.
            A private transfer goes directly to your address without any change. On this
            longer route, the price difference compared to the shuttle plus a taxi is
            often smaller than expected.
          </p>
        </div>
      </section>

      {/* Booking */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">How to book</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Enter your airport, destination address and travel dates in the booking form.
            You get a fixed price by return. No prepayment is required for most routes —
            payment is on the day. For groups or longer trips, a deposit may apply.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Book online
            </Link>
            <Link
              href="/en/cdg-airport-transfer"
              className="font-sans text-sm tracking-widest uppercase border-b border-stone-400 pb-0.5 hover:border-stone-700 transition-colors mt-3"
            >
              CDG transfer in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Other airport transfers</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'CDG airport transfer', href: '/en/cdg-airport-transfer' },
              { label: 'Orly airport transfer', href: '/en/orly-airport-transfer' },
              { label: 'Meet & Greet', href: '/en/meet-and-greet' },
              { label: 'Hourly hire', href: '/en/hourly-hire' },
              { label: 'Our fleet', href: '/en/our-fleet' },
              { label: 'Contact', href: '/en/contact' },
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

import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/lyon-airport-transfer';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Lyon Airport Transfer — Private Driver from Paris | Amani Limousines',
  description: 'Private driver Paris to Lyon and Lyon-Saint Exupéry airport. Mercedes fleet, fixed rates. Paris–Lyon in 4h30 or Lyon airport pickup.',
  canonical: 'https://www.amani-limousines.com/en/lyon-airport-transfer',
  alternates: {
    languages: { fr: 'https://www.amani-limousines.com/transfert-lyon' },
  },
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Private driver Paris to Lyon',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Paris, Lyon, Lyon-Saint Exupéry Airport',
  description:
    'Private transfer service from Paris to Lyon and Lyon-Saint Exupéry airport. 465 km, fixed price, door-to-door.',
  offers: [
    { '@type': 'Offer', name: 'Mercedes E-Class — Paris–Lyon', price: '175', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes S-Class — Paris–Lyon', price: '220', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes V-Class — Paris–Lyon', price: '240', priceCurrency: 'EUR' },
  ],
};

export default function LyonAirportTransferEN() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Long distance — Paris ↔ Lyon</p>
          <h1 className="heading mt-3">
            {c('h1', 'Private chauffeur Paris–Lyon — 465 km, door to door')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Lyon-Saint Exupéry (LYS) is served by direct flights from London, Amsterdam, Frankfurt and elsewhere in Europe. The airport is 25 km east of the city center — not exactly walking distance. A private transfer from Paris covers the full journey or just the airport leg. The A6 motorway is direct, and traffic around Lyon is predictable.')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/en/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white"
              style={{ background: '#0a0908' }}
            >
              Request a quote
            </Link>
            <a
              href="tel:+33662027344"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700"
            >
              +33 6 62 02 73 44
            </a>
          </div>
        </div>
      </section>

      {/* Journey time */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Paris to Lyon in 4 hours 30 minutes</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            The route follows the A6 motorway south from Paris through Auxerre and into Burgundy,
            then continues through the Maçon bypass and down into Lyon. The landscape is mostly
            motorway, but the drive is smooth and predictable. Traffic is rarely a problem unless
            you leave Paris during rush hour on a Friday afternoon — something to keep in mind when
            booking. The car has Wi-Fi if you want to work during the journey. Leather seats
            recline, climate control is automatic, and the cabin is insulated from road noise. A
            220V socket is available for device charging. Total distance is 465 km. Tolls are
            included in the price.
          </p>
        </div>
      </section>

      {/* Airport pickup */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Airport pickup at Lyon-Saint Exupéry</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Lyon-Saint Exupéry is a single-terminal airport with clear arrivals and departures
            areas. Our driver monitors your flight via Eurocontrol data and arrives at the
            designated pickup zone with a name sign. The driver will be waiting when you exit the
            terminal — no surprises, no guessing which carousel to watch. If your flight is
            delayed, the driver adjusts automatically. Waiting time caused by airline delays is
            never charged to you. The transfer from the airport to your hotel or business address
            in Lyon is included in the quoted fare.
          </p>
        </div>
      </section>

      {/* Lyon city transfers */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Transfers within Lyon</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Lyon's main business and residential districts are Confluence, Part-Dieu, Vieux-Lyon
            (Old Town), and Presqu'île. If you need multiple moves during your stay — from the
            airport to your hotel, then to a business meeting, then to dinner — the driver can
            stay on hourly hire. Hourly rates are calculated from when you first get in the car
            until the driver drops you at your final destination. There are no hidden charges or
            "minimum hours" policies.
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Fleet and fixed rates</h2>
          <div className="mt-8 space-y-3">
            {[
              {
                vehicle: 'Mercedes E-Class (1–3 passengers)',
                rate: 'from €175',
                notes: 'Sedan, leather, quiet',
              },
              {
                vehicle: 'Mercedes S-Class (1–3 passengers)',
                rate: 'from €220',
                notes: 'Executive travel, premium comfort',
              },
              {
                vehicle: 'Mercedes V-Class (up to 7 passengers)',
                rate: 'from €240',
                notes: 'Group transfer, individual seats',
              },
            ].map((option) => (
              <div key={option.vehicle} className="border border-warm-200 rounded p-4">
                <p className="sf font-medium text-gray-900">{option.vehicle}</p>
                <div className="mt-2 flex justify-between items-center">
                  <p className="sf text-xs text-stone-500">{option.notes}</p>
                  <p className="sf font-semibold text-sm" style={{ color: '#8a7340' }}>
                    {option.rate}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="sf text-xs text-stone-400 mt-4">
            All prices are fixed and agreed before departure. Tolls, fuel and driver included.
          </p>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">More services</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {[
              { title: 'Long-distance transfers', href: '/en/long-distance' },
              { title: 'CDG airport transfer', href: '/en/cdg-airport-transfer' },
              { title: 'Hourly hire', href: '/en/hourly-hire' },
              { title: 'Our fleet', href: '/en/our-fleet' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-center py-4 px-6 border border-stone-200 font-sans text-sm text-gray-700 hover:border-stone-500 transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

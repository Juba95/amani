import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marseille Airport Transfer — Private Chauffeur from Paris | Amani Limousines',
  description:
    'Private chauffeur Paris to Marseille and Marseille-Provence airport. 780 km, fixed rate. Cannes, Nice and the Côte d\u2019Azur also covered.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/marseille-airport-transfer',
    languages: { fr: 'https://www.amani-limousines.com/transfert-marseille' },
  },
  openGraph: {
    title: 'Marseille Airport Transfer — Private Chauffeur from Paris | Amani Limousines',
    description: 'Private chauffeur Paris to Marseille. Fixed rates, Mediterranean coast.',
    url: 'https://www.amani-limousines.com/en/marseille-airport-transfer',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Private chauffeur Paris to Marseille',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Paris, Marseille, Marseille-Provence Airport, Côte d\u2019Azur',
  description:
    'Private transfer service from Paris to Marseille and Marseille-Provence airport. 780 km, fixed price, door-to-door, Côte d\u2019Azur extensions available.',
  offers: [
    { '@type': 'Offer', name: 'Mercedes E-Class — Paris–Marseille', price: '280', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes S-Class — Paris–Marseille', price: '340', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes V-Class — Paris–Marseille', price: '360', priceCurrency: 'EUR' },
  ],
};

export default function MarseilleAirportTransferEN() {
  return (
    <SEOLayoutEN>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Long distance — Paris ↔ Marseille & Côte d'Azur</p>
          <h1 className="heading mt-3">
            <strong>Private chauffeur Paris–Marseille</strong> — 780 km along the A6 and A7
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Marseille-Provence (MRS) serves the whole western Mediterranean coast. It's also 780
            km from Paris — close to 8 hours by road, which makes it a full working day in the
            car. Most clients who make this journey have a reason: a superyacht, a real estate
            deal, or a property in the hills above Cassis. The drive is manageable in a single
            stretch, or you can break it in Lyon (halfway).
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

      {/* Route details */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Paris to Marseille — 7 hours 30 minutes</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            The route is straightforward: A6 south from Paris through Burgundy to Lyon, then A7
            continuing south along the Rhône valley toward Marseille. This is France's main
            north-south motorway corridor and the drive is predictable. Total distance is 780 km.
            Tolls are included in the quoted price. Traffic from Paris is heaviest on Friday
            afternoons and Sundays; midweek travel is smoother. Many clients choose to break the
            journey in Lyon and stop for a proper lunch and a rest, which extends the day but
            reduces fatigue. If you prefer a single drive, the car has Wi-Fi, reclined seating,
            and climate control. A 220V socket keeps your devices charged. The driver can stop for
            fuel and refreshments without adding to your final bill — these costs are built in.
          </p>
        </div>
      </section>

      {/* Airport */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Marseille-Provence airport pickup</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Marseille-Provence is a modern, single-terminal airport 30 km north of the city. Air
            France, Vueling, Ryanair and other carriers operate regular European schedules. Your
            driver tracks the flight in real time and meets you at the arrivals exit with a name
            sign. No confusion about terminals, no guessing which carousel — the driver knows
            exactly where to be. If your flight lands early or late, the driver adjusts. Delays
            caused by the airline are not charged to you. The transfer to your hotel, office, or
            yacht club in Marseille or the surrounding region is covered in the agreed fare.
          </p>
        </div>
      </section>

      {/* Côte d'Azur extensions */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Côte d'Azur extensions</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            From Marseille, the driver can continue east to Cannes (180 km), Nice (210 km), Monaco
            (240 km), or west to Saint-Tropez (120 km). These routes are typically booked as
            multi-day assignments, where the driver remains at your disposal for meetings,
            appointments and transfers. Hourly rates apply once the initial Paris–Marseille leg is
            complete. Saint-Tropez is a popular weekend destination for clients with properties in
            Provence or business interests in the Var department. Nice and Monaco are frequent
            stops for those conducting business along the Côte d'Azur or preparing for yacht
            movements in these ports.
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Fleet and pricing</h2>
          <div className="mt-8 space-y-3">
            {[
              {
                vehicle: 'Mercedes E-Class (1–3 passengers)',
                rate: 'from €280',
                notes: 'Sedan, leather, climate control',
              },
              {
                vehicle: 'Mercedes S-Class (1–3 passengers)',
                rate: 'from €340',
                notes: 'Executive travel, premium comfort',
              },
              {
                vehicle: 'Mercedes V-Class (up to 7 passengers)',
                rate: 'from €360',
                notes: 'Group transfer, individual seats',
              },
              {
                vehicle: 'Sprinter VIP (8–14 passengers)',
                rate: 'from €400',
                notes: 'Large groups, business delegations',
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

      {/* Superyachts and business */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Superyacht, real estate and business travel</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Marseille and the Côte d'Azur attract clients with specific business purposes. If you
            are arriving to oversee a yacht crew change, view a property, or attend meetings with
            brokers and agents, the driver is available for the full duration of your stay. Daily
            rates and multi-day assignments are offered at fixed prices. The driver is discreet,
            familiar with the ports and marinas, and knows the region's addresses — private
            estates, boat yards, brokers' offices, and restaurants where deals are discussed.
          </p>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-14 px-6 md:px-10 bg-white">
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

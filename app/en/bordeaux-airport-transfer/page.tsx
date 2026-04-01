import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/bordeaux-airport-transfer';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Bordeaux Airport Transfer — Private Chauffeur from Paris | Amani Limousines',
  description: 'Private chauffeur from Paris to Bordeaux and Bordeaux-Mérignac airport. Mercedes fleet, fixed price. Paris to Bordeaux in 5h30 or airport pickup on your schedule.',
  canonical: 'https://www.amani-limousines.com/en/bordeaux-airport-transfer',
  alternates: {
    languages: { fr: 'https://www.amani-limousines.com/transfert-bordeaux' },
  },
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Private chauffeur Paris to Bordeaux',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Paris, Bordeaux, Bordeaux-Mérignac Airport',
  description:
    'Private transfer service from Paris to Bordeaux and Bordeaux-Mérignac airport. 580 km, fixed price, door-to-door.',
  offers: [
    { '@type': 'Offer', name: 'Mercedes E-Class — Paris–Bordeaux', price: '200', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes S-Class — Paris–Bordeaux', price: '250', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes V-Class — Paris–Bordeaux', price: '280', priceCurrency: 'EUR' },
  ],
};

export default function BordeauxAirportTransferEN() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Long distance — Paris ↔ Bordeaux</p>
          <h1 className="heading mt-3">
            {c('h1', 'Private chauffeur Paris–Bordeaux — 580 km, fixed price')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Bordeaux-Mérignac (BOD) is 580 km from Paris. By train it\'s fast, but the TGV drops you at Saint-Jean station, not at your client\'s office in the Mériadeck district or a winery in the Médoc. A private chauffeur covers door to door. Paris to Bordeaux in approximately 5 hours 30 minutes, depending on traffic at the Orléans junction.')}
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

      {/* Airport pickups */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Airport pickups at Bordeaux-Mérignac</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Bordeaux-Mérignac receives direct flights from Paris, London, Amsterdam and other
            European cities. Vueling, Transavia, Air France and Air Corsica operate regular
            schedules. Our drivers track your flight in real time. When you walk through the
            arrivals door, your chauffeur is waiting at the designated pickup zone with a
            discrete name sign. If your flight is delayed — Transavia and Vueling often are —
            the driver adjusts without charge or notification needed. You pay the agreed rate
            regardless of when you land.
          </p>
        </div>
      </section>

      {/* Route details */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">The route: Paris–Bordeaux</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            The drive north-south via the A10 motorway is straightforward. Paris to Orléans
            (120 km, roughly 1h15m), then Orléans to Tours, Tours to Poitiers, Poitiers to
            Angoulême, and finally south into Bordeaux. Total distance 580 km, typical time 5
            hours 30 minutes under normal traffic. Tolls are included in the price. The car has
            Wi-Fi — you can work during the journey. A 220V socket is available if you need to
            charge devices. Climate control, leather seating and a quiet cabin mean the time
            passes quickly. Should you need a break, the driver can stop for a coffee or fuel
            without adding to the final bill.
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Fleet and pricing</h2>
          <div className="mt-8 space-y-3">
            {[
              {
                vehicle: 'Mercedes E-Class (1–3 passengers)',
                rate: 'from €200',
                notes: 'Sedan, leather, quiet',
              },
              {
                vehicle: 'Mercedes S-Class (1–3 passengers)',
                rate: 'from €250',
                notes: 'Executive travel, premium comfort',
              },
              {
                vehicle: 'Mercedes V-Class (up to 7 passengers)',
                rate: 'from €280',
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

      {/* Other routes */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Other routes from Bordeaux</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Once in Bordeaux, the driver can take you on to Biarritz (190 km), Arcachon (65 km),
            Cognac (120 km), or any other destination in the region. These are typically booked
            as hourly transfers or as extensions to the original Paris–Bordeaux journey.
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

import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/private-chauffeur-bordeaux';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Private Chauffeur Bordeaux — Paris to Bordeaux Transfer | Amani Limousines',
  description: 'Private chauffeur service Paris to Bordeaux. Driver available in Bordeaux for business and leisure. Fixed price, Mercedes fleet.',
  canonical: 'https://www.amani-limousines.com/en/private-chauffeur-bordeaux',
  alternates: {
    languages: { fr: 'https://www.amani-limousines.com/longue-distance' },
  },
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Private chauffeur Paris–Bordeaux',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Bordeaux, France',
  description: 'Long-distance private driver transfer between Paris and Bordeaux. Fixed price service with Mercedes fleet.',
  offers: [
    { '@type': 'Offer', name: 'Mercedes E-Class', price: '200', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes S-Class', price: '250', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes V-Class', price: '280', priceCurrency: 'EUR' },
  ],
};

export default function PrivateChauffeurBordeauxPage() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Long distance — Paris ↔ Bordeaux</p>
          <h1 className="heading mt-3">
            {c('h1', 'Private chauffeur Paris–Bordeaux — and Bordeaux area')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Bordeaux sits 580 km southwest of Paris on the A10. By TGV it is two hours, but the train leaves you at Saint-Jean station, not at the Château Pichon Baron or the conference centre at Bordeaux Lac. A private driver covers the last mile — and the first one. The journey itself takes around 5 hours 30 minutes by road, which for some clients is enough time to work through a set of documents or a few calls without the constraints of a train carriage.')}
          </p>
        </div>
      </section>

      {/* Bordeaux-Mérignac Airport */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Bordeaux-Mérignac airport (BOD) — France's seventh-busiest hub</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Bordeaux-Mérignac is France's seventh-busiest airport, handling around 6 million passengers annually. Unlike Paris CDG or Orly, it avoids the metropolitan congestion. Our drivers pick you up at the terminal exit with a name board and are equipped to monitor flight tracking. If your inbound flight arrives early, the driver is already en route. If it's delayed, they adjust accordingly. Whether you're transferring to a hotel in central Bordeaux, the wine estates to the east, or continuing on an onward journey, your pickup at arrivals is aligned to the minute.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            For departures, we calculate pickups based on your flight time and include a buffer for check-in. Luggage delays — common on some regional carriers — mean our drivers wait without surcharge for the first hour.
          </p>
        </div>
      </section>

      {/* Around Bordeaux */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Destinations around Bordeaux</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Bordeaux is not a single point; it is a region. Saint-Émilion (40 km east) requires a driver who knows the narrow lanes of the medieval town and where to park a Mercedes discreetly near the Monolithe church. Arcachon and the Dune du Pilat (65 km southwest) are a day trip — long enough that our drivers are briefed on weather conditions and coastal road hazards. Biarritz (190 km) is a weekend excursion for clients staying at the seaside: six destinations a month mean our routes are known and our times are accurate.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            For multi-day stays in the region, the driver remains available on hourly hire. Corporate guests surveying vineyards or attending seminars at the wine school find this more efficient than arranging fresh pickups each time. A single driver, a single vehicle, consistent timing.
          </p>
        </div>
      </section>

      {/* Fleet and Pricing */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Fleet and fixed pricing</h2>
          <div className="mt-6 space-y-4">
            {[
              { v: 'Mercedes E-Class (1–3 passengers)', p: 'from €200' },
              { v: 'Mercedes S-Class (1–3 passengers)', p: 'from €250' },
              { v: 'Mercedes V-Class (up to 7 passengers)', p: 'from €280' },
            ].map((r) => (
              <div key={r.v} className="flex justify-between items-center py-3 border-b border-warm-200">
                <span className="sf text-sm text-gray-700">{r.v}</span>
                <span className="sf font-semibold text-sm" style={{ color: '#8a7340' }}>{r.p}</span>
              </div>
            ))}
          </div>
          <p className="sf text-xs text-stone-400 mt-4">All prices fixed and confirmed before the journey · Tolls and highway costs included</p>
          <p className="sf text-stone-600 mt-6 leading-relaxed">
            No hidden charges. The quote you receive at the time of booking is the amount you pay, regardless of traffic or road works. Return journeys are invoiced separately, and we can arrange pick-up schedules around your meetings and events.
          </p>
        </div>
      </section>

      {/* Bordeaux for Business */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Bordeaux for business — congresses and wine fairs</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            The Bordeaux Congrès expo centre, located at Lac de Bordeaux, is the city's main venue for trade shows and conferences. Wine industry participants, logistics experts and government delegations cycle through multiple seminars in a single day. Our drivers understand the layout of the Congress centre and the location of secondary parking zones where Mercedes vehicles can be staged without blocking the main entrance.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            The Cité du Vin (Wine Museum) is another frequent destination for corporate groups and media delegations. We have moved clients between the Cité du Vin, the Hôtel de Ville reception rooms, and the historic Chartreuse district for tasting events and official receptions. Our drivers are familiar with limited-access routes, secure car parks and the timing of wine fair schedules, which often require rapid turnarounds between venues.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            During peak fair season — usually May to September — we position extra vehicles in the Bordeaux region to ensure availability for last-minute bookings and delegation convoys.
          </p>
        </div>
      </section>

      {/* CTA Links */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Related services and routes</h2>
          <div className="mt-6 space-y-3">
            <p className="sf text-stone-600">
              <a href="/en/long-distance" className="font-medium hover:underline" style={{ color: '#8a7340' }}>
                Other long-distance routes →
              </a>
            </p>
            <p className="sf text-stone-600">
              <a href="/en/cdg-airport-transfer" className="font-medium hover:underline" style={{ color: '#8a7340' }}>
                CDG airport transfers →
              </a>
            </p>
            <p className="sf text-stone-600">
              <a href="/en/our-fleet" className="font-medium hover:underline" style={{ color: '#8a7340' }}>
                Complete vehicle fleet →
              </a>
            </p>
            <p className="sf text-stone-600">
              <a href="/en/contact" className="font-medium hover:underline" style={{ color: '#8a7340' }}>
                Request a quote →
              </a>
            </p>
          </div>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

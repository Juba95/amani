import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';

export const metadata: Metadata = {
  title: 'Private Driver Orly Airport Paris — ORY Transfer | Amani Limousines',
  description:
    'Private chauffeur at Orly airport Paris. Terminals 1–4 covered. Fixed price from €80, flight tracking, 24/7 availability. Closest airport to Paris centre.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/orly-airport-transfer',
    languages: { fr: 'https://www.amani-limousines.com/transfert-aeroport-orly' },
  },
};

export default function OrlyAirportTransferEN() {
  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Paris-Orly Airport</p>
          <h1 className="heading mt-3">
            <strong>Private driver Orly airport Paris</strong> —{' '}
            <em>18 km from the centre, the shortest airport run</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Orly sits just 18 kilometres south of central Paris — closer than CDG by a long margin.
            In normal traffic, the drive from Orly 4 to the Place d'Italie takes 25 to 30 minutes.
            A <strong>private chauffeur at Orly airport</strong> skips the OrlyVal tram, the RER B
            connection and the stairs — you go straight from the arrivals hall to your Mercedes.
          </p>
        </div>
      </section>

      {/* Terminals */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Orly terminals 1 to 4</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Since the 2021 restructuring, Orly operates four terminals. Terminal 4 (formerly
              Orly Sud) handles Air France overseas routes and many international carriers.
              Terminals 1, 2 and 3 (formerly Orly Ouest) serve Transavia, easyJet and Vueling.
              Your driver positions at the correct exit for your airline, name board ready.
            </p>
          </div>
          <div>
            <h2 className="heading">Fixed fares — Orly to Paris</h2>
            <div className="mt-4 space-y-3">
              {[
                { v: 'Mercedes E-Class', p: 'from €80' },
                { v: 'Mercedes S-Class', p: 'from €96' },
                { v: 'Mercedes V-Class (up to 7)', p: 'from €80' },
              ].map((r) => (
                <div key={r.v} className="flex justify-between py-2 border-b border-warm-200">
                  <span className="sf text-sm text-gray-700">{r.v}</span>
                  <span className="sf font-semibold text-sm" style={{ color: '#8a7340' }}>{r.p}</span>
                </div>
              ))}
            </div>
            <p className="sf text-xs text-stone-400 mt-3">Flat rate · Tolls included · All Paris districts</p>
          </div>
        </div>
      </section>

      {/* Advantage */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Why Orly transfers are different from CDG</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            CDG approaches Paris from the north, through some of the most congested ring-road
            sections. Orly enters the city from the south, via the A6B, feeding naturally into
            the Left Bank (5th, 6th, 14th, 15th) — districts that are often less congested.
            For hotels near Saint-Germain, Montparnasse or the Latin Quarter, Orly is simply
            the more practical airport. The same fixed price applies to all Paris districts
            regardless of which side of the Seine you're heading to.
          </p>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

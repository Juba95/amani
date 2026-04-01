import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur to Chamonix — Paris to Chamonix Private Transfer | Amani Limousines',
  description:
    'Private chauffeur from Paris to Chamonix. 600 km, fixed price. Departure from CDG, Orly or any Paris address. Recent Mercedes, available year-round.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/chamonix-chauffeur',
    languages: {
      fr: 'https://www.amani-limousines.com/chauffeur-prive-chamonix',
      'x-default': 'https://www.amani-limousines.com/en/chamonix-chauffeur',
    },
  },
};

const routes = [
  {
    title: 'Paris — Chamonix',
    detail:
      'Around 600 km via the A6 and A40, taking 6 to 6.5 hours depending on conditions in Savoie. Early morning or evening departures avoid the Friday evening traffic on the A6 during ski season.',
  },
  {
    title: 'CDG — Chamonix',
    detail:
      'Collection at the arrivals terminal with a name board. Flight tracked in real time. Approximately 6h45 door to door. Waiting time is included in the fixed price.',
  },
  {
    title: 'Orly — Chamonix',
    detail:
      'From Orly South or West, around 6h15 depending on the Francilienne. Large boot for ski bags or hiking gear — confirm at booking what you are bringing.',
  },
  {
    title: 'Chamonix — Paris (return)',
    detail:
      'Pick-up from Chamonix town centre, Les Houches, Argentière or Les Bossons. Departure time set by you the evening before, with flexibility if your morning plans run long.',
  },
];

const whyPrivate = [
  {
    point: 'No train exists',
    detail:
      'There is no direct train from Paris to Chamonix. The rail route goes via Geneva and takes at least 5h30 with connections, often longer. With ski bags and a group, a private transfer is frequently faster.',
  },
  {
    point: 'Fixed price',
    detail:
      'The price is calculated upfront on distance. It does not change if traffic through Annecy or around Cluses adds an hour.',
  },
  {
    point: 'Door to door',
    detail:
      'Your driver drops you at your chalet, hotel or apartment in Chamonix — not at a station 12 km from the resort, not at a bus stop.',
  },
  {
    point: 'Flight tracking',
    detail:
      'If your flight into CDG or Orly is delayed, the driver adjusts without you needing to call. The wait is included.',
  },
];

const fleet = [
  { model: 'Mercedes E-Class', info: '1–3 passengers with luggage. From €590 for Paris–Chamonix.' },
  { model: 'Mercedes S-Class', info: 'Best comfort for long journeys. Massage seats, quieter cabin.' },
  { model: 'Mercedes V-Class', info: 'Up to 7 passengers. Suitable for groups with ski equipment.' },
  { model: 'Mercedes Sprinter VIP', info: 'Groups of 8 to 12, or large amounts of equipment.' },
];

export default function ChamonixChauffeur() {
  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Haute-Savoie — Mont-Blanc Massif</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur to Chamonix</strong> —{' '}
            <em>from Paris and the airports</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Paris to Chamonix is 600 km and about 6 hours by road. There is no direct
            train. Amani Limousines covers this route year-round from Paris, CDG and
            Orly in recent Mercedes vehicles, with a fixed price agreed before the booking
            is confirmed. No meter, no surprises at the end of a long drive.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Request a quote
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

      {/* Routes */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Routes covered</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Departures from any Paris address, hotel, airport or station. Airport collections
            include a named greeting in the arrivals hall.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {routes.map((r) => (
              <div key={r.title} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{r.title}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why private */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Why private transfer for Chamonix</h2>
          <div className="mt-8 space-y-6">
            {whyPrivate.map((w) => (
              <div key={w.point} className="border-l-2 border-stone-200 pl-6">
                <p className="font-serif text-gray-900 mb-2">{w.point}</p>
                <p className="sf text-stone-600 text-sm leading-relaxed">{w.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Fleet</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            All vehicles are recent Mercedes, air-conditioned and maintained regularly.
            The price is calculated on distance and confirmed before departure.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {fleet.map((f) => (
              <div key={f.model} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-2">{f.model}</h3>
                <p className="sf text-stone-600 text-sm leading-relaxed">{f.info}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/en/our-fleet"
              className="font-sans text-sm tracking-widest uppercase border-b border-stone-400 pb-0.5 hover:border-stone-700 transition-colors"
            >
              View the full fleet →
            </Link>
          </div>
        </div>
      </section>

      {/* About Chamonix */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Chamonix Mont-Blanc</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Chamonix has two main seasons. Ski runs from December to April across several
            linked areas including Le Tour, La Flégère and Les Grands Montets. The summer
            season draws hikers, mountaineers and Haute Route trekkers from July through
            September. We cover the full valley: Les Houches, Les Bossons, Chamonix centre,
            Argentière and Vallorcine.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            For groups arriving on different flights, we can coordinate two or three vehicles
            from CDG or Orly with independent departure times. For multi-day stays, a driver
            can remain on call in Chamonix for local transfers.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Other destinations</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Megève chauffeur', href: '/en/megeve-chauffeur' },
              { label: 'Haute-Savoie chauffeur', href: '/en/haute-savoie-chauffeur' },
              { label: 'Long distance', href: '/en/long-distance' },
              { label: 'Hourly hire', href: '/en/hourly-hire' },
              { label: 'CDG airport transfer', href: '/en/cdg-airport-transfer' },
              { label: 'Our fleet', href: '/en/our-fleet' },
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

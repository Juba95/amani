import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';

export const metadata: Metadata = {
  title: 'Long Distance Private Driver from Paris — France & Europe | Amani Limousines',
  description:
    'Long distance chauffeur service from Paris. Paris–Deauville, Paris–Brussels, Paris–Lyon, Paris–Monaco. Wi-Fi equipped Mercedes and VIP vans. Fixed price.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/long-distance',
    languages: { fr: 'https://www.amani-limousines.com/longue-distance' },
  },
};

const routes = [
  { route: 'Paris → Deauville', km: '200 km', time: '2h30', note: 'Weekends, horse races, film festival' },
  { route: 'Paris → Brussels', km: '310 km', time: '3h00', note: 'EU institutions, corporate headquarters' },
  { route: 'Paris → Reims', km: '145 km', time: '1h45', note: 'Champagne houses, cathedral' },
  { route: 'Paris → Lyon', km: '465 km', time: '4h30', note: 'Alternative to TGV for groups' },
  { route: 'Paris → Monaco', km: '940 km', time: '9h00', note: 'Grand Prix, private residences' },
  { route: 'Paris → Geneva', km: '555 km', time: '5h30', note: 'UN, CERN, private banking' },
  { route: 'Paris → Amsterdam', km: '500 km', time: '5h00', note: 'Port, Schiphol, business district' },
  { route: 'Paris → London', km: '460 km', time: '6h00*', note: '* via Channel Tunnel. Documents required.' },
];

export default function LongDistanceEN() {
  return (
    <SEOLayoutEN>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Long distance — France & Europe</p>
          <h1 className="heading mt-3">
            <strong>Long distance private driver from Paris</strong> —{' '}
            <em>your rolling office</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            The train doesn't always reach your destination. The plane forces airports that are
            often far from where you actually need to be. For journeys between 150 and 1,000 km,
            a <strong>long distance private chauffeur from Paris</strong> offers something neither
            the TGV nor an aircraft can match: a working environment where you control the schedule,
            the stops and the pace. Wi-Fi, 220V sockets, individual air conditioning, silence.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Most requested long-distance routes</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {routes.map((r) => (
              <div key={r.route} className="card">
                <p className="sf font-semibold text-gray-900">{r.route}</p>
                <p className="sf text-xs text-stone-400 mt-1">{r.km} · {r.time}</p>
                <p className="sf text-sm text-stone-500 mt-2">{r.note}</p>
              </div>
            ))}
          </div>
          <p className="sf text-xs text-stone-400 mt-4">
            Any unlisted destination is available on request. Contact us with your departure point,
            destination and date.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Vehicle equipment for long journeys</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Our dedicated long-distance sedans and VIP vans are equipped with 4G/5G Wi-Fi,
              220V and USB-C sockets, multi-zone climate control and generous luggage capacity.
              In the S-Class and BMW i7, rear seats recline for rest on longer runs.
            </p>
          </div>
          <div>
            <h2 className="heading">Driver changeover on extended runs</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Beyond 8 hours of driving (Paris–Monaco, Paris–Barcelona), we schedule a driver
              changeover at the halfway point to maintain full attention. This happens at a
              service area or in an intermediate city, with no disruption from your perspective.
            </p>
          </div>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

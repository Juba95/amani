import type { Metadata } from 'next';
import Image from 'next/image';
import SEOLayoutEN from '@/components/SEOLayoutEN';

export const metadata: Metadata = {
  title: 'Our Fleet — Prestige Vehicles Paris | Mercedes, Range Rover, Sprinter VIP | Amani',
  description:
    'Discover Amani Limousines\' fleet of prestige vehicles in Paris. Mercedes E-Class, EQS, S-Class, Maybach, V-Class, G-Class, Range Rover Evoque and Sprinter VIP. 300+ vehicles, renewed annually.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/our-fleet',
    languages: { fr: 'https://www.amani-limousines.com/notre-flotte' },
  },
};

const vehicles = [
  {
    id: 'classe_e',
    name: 'Mercedes E-Class',
    cat: 'Business Saloon',
    pax: '3 passengers · 2 bags',
    price: 'From €100',
    img: '/vehicles/mercedes-classe-e.png',
    desc: 'The most versatile vehicle in our fleet. The E-Class combines genuine comfort with dimensions suited to central Paris streets. Ideal for solo or paired airport transfers and as-directed hire within the city.',
    eq: ['Premium Wi-Fi', 'Nappa leather', 'Dual-zone climate', 'Wireless charger', 'Mineral water'],
  },
  {
    id: 'eqs',
    name: 'Mercedes EQS',
    cat: 'Electric Business Saloon',
    pax: '3 passengers · 2 bags',
    price: 'From €100',
    img: '/vehicles/mercedes-eqe.png',
    desc: 'The fully electric version of our business range. The EQS offers the same comfort level as the E-Class with zero emissions. Absolute silence, perfect for environmentally conscious clients.',
    eq: ['100% electric', 'Absolute silence', 'Premium leather', 'Dual-zone climate', 'USB-C chargers'],
  },
  {
    id: 'classe_s',
    name: 'Mercedes S-Class',
    cat: 'Executive Saloon',
    pax: '3 passengers · 2 bags',
    price: 'From €150',
    img: '/vehicles/mercedes-classe-s.png',
    desc: 'The reference vehicle for heads of state, CEOs and first-rank delegations. Massaging rear seats, LCD screens, reinforced sound insulation and an acoustic cabin that functions as a true mobile workspace.',
    eq: ['Massaging seats', 'Rear LCD screens', 'On-board bar', 'Burmester® 4D audio', 'Ambient lighting'],
  },
  {
    id: 'classe_s_maybach',
    name: 'Mercedes S-Class Maybach',
    cat: 'Ultra-Prestige Saloon',
    pax: '3 passengers · 2 bags',
    price: 'From €200',
    img: '/vehicles/mercedes-classe-s-maybach.png',
    desc: 'The pinnacle of automotive luxury. The Maybach features an extended wheelbase, rear seats reclining to 43.5°, an integrated champagne cooler and superior sound insulation. Reserved for clients who demand absolute excellence.',
    eq: ['43.5° reclining seats', 'Champagne cooler', 'Privacy partition', 'Burmester® 4D', 'First-class ambiance'],
  },
  {
    id: 'range_rover_evoque',
    name: 'Range Rover Evoque',
    cat: 'Premium SUV',
    pax: '3 passengers · 2 bags',
    price: 'From €200',
    img: '/vehicles/range-rover-evoque.png',
    desc: 'The SUV alternative in our fleet. The Range Rover Evoque combines a raised driving position with a refined interior. Ideal for transfers to ski resorts, wine estates or any journey requiring a premium yet robust vehicle.',
    eq: ['All-wheel drive', 'Windsor leather', 'Meridian™ system', 'Terrain Response', 'Elevated position'],
  },
  {
    id: 'classe_v',
    name: 'Mercedes V-Class',
    cat: 'Luxury Minivan',
    pax: '7 passengers · 6 bags',
    price: 'From €100',
    img: '/vehicles/mercedes-classe-v.png',
    desc: 'The solution for families, colleague groups and medium-sized delegations. Can be configured in lounge mode (face-to-face seating) or standard layout. Luggage space accommodates oversized bags without compromising passenger comfort.',
    eq: ['Lounge configuration', 'High-speed Wi-Fi', 'XXL luggage space', 'Blackout blinds', '7 approved seatbelts'],
  },
  {
    id: 'classe_g',
    name: 'Mercedes G-Class',
    cat: 'Prestige SUV',
    pax: '4 passengers · 3 bags',
    price: 'From €250',
    img: '/vehicles/mercedes-classe-g.png',
    desc: 'The icon of luxury all-terrain motoring, the G-Class pairs a commanding presence with an interior worthy of a prestige saloon. The preferred choice for premium events, weddings and clients who wish to make a grand entrance.',
    eq: ['All-wheel drive', 'designo Nappa leather', 'Burmester® surround', '64-colour ambient lighting', 'Iconic presence'],
  },
  {
    id: 'sprinter',
    name: 'Mercedes Sprinter VIP',
    cat: 'Luxury Minibus',
    pax: '16 passengers · 16 bags',
    price: 'From €300',
    img: '/vehicles/mercedes-sprinter.png',
    desc: 'The solution for large groups, official delegations and event shuttles. Leather captain\'s chairs, premium sound system, ambient lighting and multi-zone air conditioning throughout. Can carry 16 passengers with their luggage.',
    eq: ['Leather captain\'s chairs', 'Premium sound', 'Multi-zone climate', 'Luggage gallery', 'Radio comms ready'],
  },
];

const faq = [
  {
    q: 'How many vehicles are in your fleet?',
    a: 'Over 300 vehicles renewed annually. Our vehicles average under three years old and are maintained to manufacturer specifications.',
  },
  {
    q: 'Can I choose a specific vehicle?',
    a: 'Absolutely. When booking, you can select the exact model that suits you. If a vehicle is unavailable, we will offer an equivalent or superior alternative.',
  },
  {
    q: 'Do you provide armoured vehicles?',
    a: 'Yes, on request and with sufficient notice. Contact us to discuss your close protection requirements.',
  },
  {
    q: 'Are child seats available?',
    a: 'Yes, we provide child seats (group 0+, 1 and 2/3) on request when booking. This is a complimentary service.',
  },
  {
    q: 'Which vehicle is best suited for groups?',
    a: 'The Mercedes V-Class accommodates up to 7 passengers with luggage. For larger groups, the Sprinter VIP can carry up to 16 people.',
  },
];

export default function OurFleetEN() {
  return (
    <SEOLayoutEN>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Our fleet</p>
          <h1 className="heading mt-3">
            Prestige vehicles <em>in Paris</em> — over 300 units
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            At Amani Limousines, the fleet is renewed annually to guarantee that passengers
            travel in recent vehicles. No ageing models kept because they still run. Our{' '}
            <strong>prestige vehicles in Paris</strong> average under three years old and are
            maintained to manufacturer specifications at every service interval.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto space-y-10">
          {vehicles.map((v) => (
            <div key={v.id} className="card md:flex gap-8">
              <div className="md:w-64 flex-shrink-0 relative">
                <Image
                  src={v.img}
                  alt={`${v.name} — Amani Limousines Paris`}
                  width={600}
                  height={380}
                  className="w-full h-40 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 md:mt-0">
                <p className="sf text-xs text-stone-400 uppercase tracking-wider">{v.cat}</p>
                <p className="heading text-2xl mt-1">{v.name}</p>
                <p className="sf text-sm text-stone-500 mt-1">{v.pax}</p>
                <p className="sf text-stone-600 text-sm mt-3 leading-relaxed">{v.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {v.eq.map((eq) => (
                    <span key={eq} className="sf text-xs px-3 py-1 rounded-full border border-warm-300 text-stone-500">
                      {eq}
                    </span>
                  ))}
                </div>
                <p className="sf font-semibold mt-4" style={{ color: '#8a7340' }}>{v.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing grid */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Our rates</h2>
          <p className="sf text-stone-500 mt-3 mb-8 text-sm">Fixed prices, all-inclusive — no meter, no surprises.</p>

          {/* Airport transfers */}
          <h3 className="font-serif text-lg text-gray-900 mb-4">Airport transfer rates <span className="sf text-sm text-stone-400">(CDG, Orly, Le Bourget)</span></h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full sf text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-3 pr-4 text-stone-400 font-normal">Vehicle</th>
                  <th className="py-3 px-4 text-stone-400 font-normal">Airport rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mercedes E-Class / V-Class', '€150'],
                  ['Mercedes EQS Electric', '€150'],
                  ['Mercedes S-Class', '€200'],
                  ['Mercedes S-Class Maybach', '€250'],
                  ['Range Rover Evoque', '€250'],
                  ['Mercedes G-Class', '€300'],
                  ['Mercedes Sprinter VIP', '€350'],
                ].map(([v, p]) => (
                  <tr key={v} className="border-b border-stone-100">
                    <td className="py-3 pr-4 text-gray-900">{v}</td>
                    <td className="py-3 px-4 font-semibold" style={{ color: '#8a7340' }}>{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* City rates */}
          <h3 className="font-serif text-lg text-gray-900 mb-4">City transfers <span className="sf text-sm text-stone-400">(minimum fare)</span></h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full sf text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-3 pr-4 text-stone-400 font-normal">Vehicle</th>
                  <th className="py-3 px-4 text-stone-400 font-normal">Minimum fare</th>
                  <th className="py-3 px-4 text-stone-400 font-normal">Rate / km</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mercedes E-Class / V-Class', '€100', '€3/km'],
                  ['Mercedes EQS Electric', '€100', '€3/km'],
                  ['Mercedes S-Class', '€150', '€4/km'],
                  ['Mercedes S-Class Maybach', '€200', '€5/km'],
                  ['Range Rover Evoque', '€200', '€5/km'],
                  ['Mercedes G-Class', '€250', '€5/km'],
                  ['Mercedes Sprinter VIP', '€300', '€5/km'],
                ].map(([v, p, km]) => (
                  <tr key={v} className="border-b border-stone-100">
                    <td className="py-3 pr-4 text-gray-900">{v}</td>
                    <td className="py-3 px-4 font-semibold" style={{ color: '#8a7340' }}>{p}</td>
                    <td className="py-3 px-4 text-stone-500">{km}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Hourly hire */}
          <h3 className="font-serif text-lg text-gray-900 mb-4">Hourly hire <span className="sf text-sm text-stone-400">(as-directed)</span></h3>
          <div className="overflow-x-auto">
            <table className="w-full sf text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-3 pr-4 text-stone-400 font-normal">Vehicle</th>
                  <th className="py-3 px-4 text-stone-400 font-normal">Rate / hour</th>
                  <th className="py-3 px-4 text-stone-400 font-normal">Minimum</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mercedes E-Class / V-Class', '€95/h', '4 hours'],
                  ['Mercedes EQS Electric', '€95/h', '4 hours'],
                  ['Mercedes S-Class', '€130/h', '4 hours'],
                  ['Mercedes S-Class Maybach', '€220/h', '5 hours'],
                  ['Range Rover Evoque', '€190/h', '5 hours'],
                  ['Mercedes G-Class', '€190/h', '5 hours'],
                  ['Sprinter VIP 12 seats', '€120/h', '5 hours'],
                  ['Sprinter VIP 16 seats', '€140/h', '5 hours'],
                  ['Sprinter VIP 20 seats', '€160/h', '5 hours'],
                ].map(([v, p, min]) => (
                  <tr key={v} className="border-b border-stone-100">
                    <td className="py-3 pr-4 text-gray-900">{v}</td>
                    <td className="py-3 px-4 font-semibold" style={{ color: '#8a7340' }}>{p}</td>
                    <td className="py-3 px-4 text-stone-500">{min}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Presentation standards</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Every vehicle is cleaned inside and out before each pickup. Carpets and upholstery
            are vacuumed, windows are treated, and leather surfaces are maintained to manufacturer
            specifications. Consumables (mineral water, wipes, chargers) are checked and replaced
            after every journey. An Amani vehicle has no reason to smell of cigarettes, carry
            handprints on the windows or have a boot cluttered with driver equipment.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faq.map((f) => (
              <div key={f.q} className="border-l-2 border-stone-200 pl-6">
                <p className="font-serif text-gray-900 mb-2">{f.q}</p>
                <p className="sf text-stone-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import { content, contentMetadata } from '@/lib/get-content';
import { fleetRates, MIN_DISPOSAL_HOURS, eurEn } from '@/lib/fleet-pricing';

const SLUG = 'en/our-fleet';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Our Fleet — Prestige Vehicles Paris | Mercedes, Range Rover, Sprinter VIP | Amani',
  description: 'Discover Amani Limousines\' fleet of prestige vehicles in Paris. Mercedes E-Class, EQS, S-Class, Maybach, V-Class, G-Class, Range Rover, Sprinter VIP 8 / 15 / 19 seats and a 50-seat Tourismo coach. 300+ vehicles, renewed annually.',
  canonical: 'https://www.amani-limousines.com/en/our-fleet',
  alternates: {
    languages: { fr: 'https://www.amani-limousines.com/notre-flotte' },
  },
});

const vehicles = [
  {
    id: 'classe_e',
    name: 'Mercedes E-Class',
    cat: 'Business Saloon',
    pax: '3 passengers · 2 bags',
    price: 'From €150',
    img: '/vehicles/mercedes-classe-e.png',
    desc: 'The most versatile vehicle in our fleet. The E-Class combines genuine comfort with dimensions suited to central Paris streets. Ideal for solo or paired airport transfers and as-directed hire within the city.',
    eq: ['Premium Wi-Fi', 'Nappa leather', 'Dual-zone climate', 'Wireless charger', 'Mineral water'],
  },
  {
    id: 'eqs',
    name: 'Mercedes EQS',
    cat: 'Electric Business Saloon',
    pax: '3 passengers · 2 bags',
    price: 'From €150',
    img: '/vehicles/mercedes-eqe.png',
    desc: 'The fully electric version of our business range. The EQS offers the same comfort level as the E-Class with zero emissions. Absolute silence, perfect for environmentally conscious clients.',
    eq: ['100% electric', 'Absolute silence', 'Premium leather', 'Dual-zone climate', 'USB-C chargers'],
  },
  {
    id: 'classe_s',
    name: 'Mercedes S-Class',
    cat: 'Executive Saloon',
    pax: '3 passengers · 2 bags',
    price: 'From €220',
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
    name: 'Range Rover',
    cat: 'Prestige SUV',
    pax: '4 passengers · 3 bags',
    price: 'From €200',
    img: '/vehicles/range-rover.png',
    desc: 'The SUV alternative in our fleet. The Range Rover combines a raised driving position with a refined interior and full-time all-wheel drive. Ideal for transfers to ski resorts, wine estates or any journey requiring a premium yet robust vehicle.',
    eq: ['All-wheel drive', 'Windsor leather', 'Meridian™ system', 'Terrain Response', 'Elevated position'],
  },
  {
    id: 'classe_v',
    name: 'Mercedes V-Class',
    cat: 'Luxury Minivan',
    pax: '7 passengers · 6 bags',
    price: 'From €160',
    img: '/vehicles/mercedes-classe-v.png',
    desc: 'The solution for families, colleague groups and medium-sized delegations. Can be configured in lounge mode (face-to-face seating) or standard layout. Luggage space accommodates oversized bags without compromising passenger comfort.',
    eq: ['Lounge configuration', 'High-speed Wi-Fi', 'XXL luggage space', 'Blackout blinds', '7 approved seatbelts'],
  },
  {
    id: 'classe_g',
    name: 'Mercedes G-Class',
    cat: 'Prestige SUV',
    pax: '4 passengers · 3 bags',
    price: 'From €500',
    img: '/vehicles/mercedes-classe-g.png',
    desc: 'The icon of luxury all-terrain motoring, the G-Class pairs a commanding presence with an interior worthy of a prestige saloon. The preferred choice for premium events, weddings and clients who wish to make a grand entrance.',
    eq: ['All-wheel drive', 'designo Nappa leather', 'Burmester® surround', '64-colour ambient lighting', 'Iconic presence'],
  },
  {
    id: 'sprinter',
    name: 'Mercedes Sprinter VIP 8 seats',
    cat: 'VIP Minibus',
    pax: '8 passengers · 8 bags',
    price: 'From €200',
    img: '/vehicles/mercedes-sprinter.png',
    desc: 'The most luxurious Sprinter layout: eight leather captain\'s chairs, generous legroom, work tables and ambient lighting. The choice of small delegations, large families and executive teams who want to travel together without giving up saloon-level comfort.',
    eq: ['8 leather captain\'s chairs', 'Premium sound', 'Multi-zone climate', 'Work tables', 'Ambient lighting'],
  },
  {
    id: 'sprinter_15',
    name: 'Mercedes Sprinter 15 seats',
    cat: 'Minibus',
    pax: '15 passengers · 15 bags',
    price: 'From €200',
    img: '/vehicles/mercedes-sprinter-15.png',
    desc: 'The most efficient way to move a full team. Fifteen seats, a rear hold that takes the whole group\'s cabin and check-in luggage, and a footprint that still works inside central Paris. Hotel shuttles, seminars, film crews.',
    eq: ['15 seats', 'Luggage hold', 'Air conditioning', 'USB sockets', 'Central Paris access'],
  },
  {
    id: 'sprinter_vip_19',
    name: 'Mercedes Sprinter VIP 19 seats',
    cat: 'VIP Minibus',
    pax: '19 passengers · 19 bags',
    price: 'From €200',
    img: '/vehicles/mercedes-sprinter-vip-19.png',
    desc: 'The long-wheelbase Sprinter in VIP trim: nineteen seats, a PA system with microphone for guides and tour managers, blackout curtains and individual storage. Built for business groups, delegations and multi-day private itineraries.',
    eq: ['19 seats', 'VIP fit-out', 'PA system & mic', 'Blackout curtains', 'Large luggage hold'],
  },
  {
    id: 'tourismo_50',
    name: 'Mercedes Tourismo 50 seats',
    cat: 'Touring coach',
    pax: '50 passengers · 50 bags',
    price: 'From €200',
    img: '/vehicles/mercedes-tourismo.jpg',
    desc: 'The Mercedes touring coach for groups of fifty: reclining seats, on-board WC, high-capacity luggage holds and full air conditioning. The answer for congresses, incentives, weddings and full-team airport transfers.',
    eq: ['50 seats', 'Reclining seats', 'On-board WC', 'High-capacity holds', 'PA system & mic'],
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
    a: 'The Mercedes V-Class accommodates up to 7 passengers with luggage. Beyond that, the Sprinter VIP comes in 8- and 19-seat layouts, the standard Sprinter seats 15, and the Mercedes Tourismo coach carries 50 people with their luggage in the hold.',
  },
];

export default function OurFleetEN() {
  const c = content(SLUG);
  const rates = fleetRates('en');

  return (
    <SEOLayoutEN>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Our fleet</p>
          <h1 className="heading mt-3">
            {c('h1', 'Prestige vehicles in Paris — over 300 units')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'At Amani Limousines, the fleet is renewed annually to guarantee that passengers travel in recent vehicles. No ageing models kept because they still run. Our prestige vehicles in Paris average under three years old and are maintained to manufacturer specifications at every service interval.')}
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
                  sizes="(max-width: 768px) 100vw, 256px"
                  quality={65}
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

          <div className="overflow-x-auto mb-8">
            <table className="w-full sf text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-3 pr-4 text-stone-400 font-normal">Vehicle</th>
                  <th className="py-3 px-4 text-stone-400 font-normal text-right">Airport transfer</th>
                  <th className="py-3 px-4 text-stone-400 font-normal text-right">City transfer</th>
                  <th className="py-3 px-4 text-stone-400 font-normal text-right">Beyond</th>
                  <th className="py-3 pl-4 text-stone-400 font-normal text-right">Hourly hire</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r) => (
                  <tr key={r.id} className="border-b border-stone-100">
                    <td className="py-3 pr-4 text-gray-900 whitespace-nowrap">{r.name}</td>
                    <td className="py-3 px-4 text-right font-semibold" style={{ color: '#8a7340' }}>{eurEn(r.airport)}</td>
                    <td className="py-3 px-4 text-right font-semibold" style={{ color: '#8a7340' }}>{eurEn(r.city)}</td>
                    <td className="py-3 px-4 text-right text-stone-500 whitespace-nowrap">{eurEn(r.perKm)}/km</td>
                    <td className="py-3 pl-4 text-right text-stone-500 whitespace-nowrap">{eurEn(r.hourly)}/h</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="sf text-xs text-stone-400 leading-relaxed">
            Airport transfer: fixed fare between CDG, Orly, Le Bourget or Beauvais and Paris
            and its inner suburbs. City transfer: minimum fare within Paris &amp; Île-de-France.
            Beyond the fixed fare, journeys are billed per kilometre. Hourly hire:{' '}
            {MIN_DISPOSAL_HOURS} hours minimum, with the car and chauffeur staying with you
            throughout. All prices include VAT, tolls and fuel.
          </p>
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

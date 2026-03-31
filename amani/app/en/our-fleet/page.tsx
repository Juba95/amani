import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';

export const metadata: Metadata = {
  title: 'Our Fleet — Prestige Vehicles Paris | Mercedes S-Class, BMW i7, Sprinter VIP | Amani',
  description:
    'Discover Amani Limousines\' fleet of prestige vehicles in Paris. Mercedes E-Class, S-Class, V-Class, BMW i7 and Sprinter VIP. 300+ vehicles, renewed annually.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/our-fleet',
    languages: { fr: 'https://www.amani-limousines.com/notre-flotte' },
  },
};

const vehicles = [
  {
    name: 'Mercedes E-Class',
    cat: 'Business Saloon',
    pax: '3 passengers · 2 bags',
    price: 'From €125',
    img: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/mercedes_benz_classe_e_hr-dvpu.png',
    desc: 'The most versatile vehicle in our fleet. The E-Class combines genuine comfort with dimensions suited to central Paris streets. Ideal for solo or paired airport transfers and as-directed hire within the city.',
    eq: ['Premium Wi-Fi', 'Nappa leather', 'Dual-zone climate', 'USB-C chargers'],
  },
  {
    name: 'Mercedes S-Class',
    cat: 'Executive Saloon',
    pax: '3 passengers · 2 bags',
    price: 'From €225',
    img: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/s-Class-1-600x380.jpg',
    desc: 'The reference vehicle for heads of state, CEOs and first-rank delegations. Massaging rear seats, LCD screens, reinforced sound insulation and an acoustic cabin that functions as a true mobile workspace.',
    eq: ['Massaging seats', 'Rear LCD screens', 'On-board bar', 'Burmester® 4D audio'],
  },
  {
    name: 'Mercedes V-Class',
    cat: 'Luxury Minivan',
    pax: '7 passengers · 6 bags',
    price: 'From €125',
    img: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/PngItem_816085-600x380.png',
    desc: 'The solution for families, colleague groups and medium-sized delegations. Can be configured in lounge mode (face-to-face seating) or standard layout. Luggage space accommodates oversized bags without compromising passenger comfort.',
    eq: ['Lounge configuration available', 'High-speed Wi-Fi', 'XXL luggage space', 'Blackout blinds'],
  },
  {
    name: 'BMW i7',
    cat: 'Prestige Electric Saloon',
    pax: '3 passengers · 2 bags',
    price: 'From €250',
    img: 'https://www.amani-limousines.com/wp-content/uploads/2023/06/bmwI7-redim.jpg',
    desc: 'Fully electric, zero compromise on luxury. The i7\'s 31.3-inch rear theatre screen, absolute engine silence and five-zone massage system make it the vehicle of choice for clients who value sustainability alongside comfort.',
    eq: ['100% electric', '31" theatre screen', '600 km range', '5-zone massage', 'Absolute silence'],
  },
  {
    name: 'Mercedes Sprinter VIP',
    cat: 'Luxury Minibus',
    pax: '16 passengers · 16 bags',
    price: 'From €350',
    img: 'https://www.amani-limousines.com/wp-content/uploads/2023/07/sprinter-vip.jpg',
    desc: 'The solution for large groups, official delegations and event shuttles. Leather captain\'s chairs, premium sound system, ambient lighting and multi-zone air conditioning throughout.',
    eq: ['Leather captain\'s chairs', 'Premium sound', 'Multi-zone climate', 'Radio comms ready'],
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
            <div key={v.name} className="card md:flex gap-8">
              <div className="md:w-64 flex-shrink-0">
                <img src={v.img} alt={`${v.name} — Amani Limousines Paris`}
                  className="w-full h-40 object-cover rounded-xl" loading="lazy" />
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

      <section className="py-14 px-6 md:px-10 bg-white">
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
    </SEOLayoutEN>
  );
}

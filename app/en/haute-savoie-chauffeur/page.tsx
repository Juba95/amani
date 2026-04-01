import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Haute-Savoie Chauffeur — Paris to Chamonix, Megève, Annecy | Amani Limousines',
  description:
    'Private chauffeur from Paris to all of Haute-Savoie: Chamonix, Megève, Annecy, Thonon, Évian. Fixed price. From CDG, Orly or any Paris address.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/haute-savoie-chauffeur',
    languages: {
      fr: 'https://www.amani-limousines.com/chauffeur-prive-haute-savoie',
      'x-default': 'https://www.amani-limousines.com/en/haute-savoie-chauffeur',
    },
  },
};

const destinations = [
  {
    city: 'Chamonix',
    distance: '600 km',
    time: '6–6.5h',
    info: 'Chamonix valley, Les Houches, Argentière, Les Bossons, Vallorcine.',
  },
  {
    city: 'Megève',
    distance: '640 km',
    time: '6–6.5h',
    info: 'Town centre, Le Jaillet, Rochebrune, Mont d\'Arbois, Combloux.',
  },
  {
    city: 'Annecy',
    distance: '540 km',
    time: '5–5.5h',
    info: 'Town centre, Annecy-le-Vieux, lakeside addresses.',
  },
  {
    city: 'Thonon-les-Bains',
    distance: '580 km',
    time: '5.5–6h',
    info: 'French shore of Lake Geneva. Évian 12 km further.',
  },
  {
    city: 'Évian-les-Bains',
    distance: '590 km',
    time: '5.75–6.25h',
    info: 'Lakeside resort. Hôtel Royal, casino, thermal centre.',
  },
  {
    city: 'Sallanches / Cluses',
    distance: '610 km',
    time: '6–6.5h',
    info: 'Gateway to the Mont-Blanc resorts. Good connection point for multiple drop-offs.',
  },
];

export default function HauteSavoieChauffeur() {
  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Département 74 — Haute-Savoie</p>
          <h1 className="heading mt-3">
            <strong>Haute-Savoie chauffeur</strong> —{' '}
            <em>Chamonix, Megève, Annecy and beyond</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Haute-Savoie includes destinations that the train serves poorly: Chamonix,
            Megève, Morzine, the French shore of Lake Geneva. Amani Limousines covers
            the whole department from Paris, CDG and Orly in recent Mercedes, with a
            fixed price. The drive is between 5 and 7 hours depending on the destination,
            with no connections or local shuttles to coordinate on arrival.
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

      {/* Destinations */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Destinations in Haute-Savoie</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Approximate distances and journey times from central Paris. Add 20 to 30 minutes
            from CDG.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {destinations.map((d) => (
              <div key={d.city} className="card">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-lg text-gray-900">{d.city}</h3>
                  <span className="font-sans text-xs text-stone-400">{d.distance} · {d.time}</span>
                </div>
                <p className="sf text-stone-600 leading-relaxed text-sm">{d.info}</p>
              </div>
            ))}
          </div>
          <p className="sf text-stone-500 mt-6 text-sm leading-relaxed">
            We also cover Morzine, Les Gets, La Clusaz and Saint-Gervais-les-Bains.
            Request a quote with your exact destination.
          </p>
        </div>
      </section>

      {/* Why private for Haute-Savoie */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Why private for Haute-Savoie</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Most Haute-Savoie resorts have no direct train from Paris. Chamonix requires
            a change in Geneva. Megève's nearest station is 12 km away. Annecy is reachable
            by TGV but still needs a transfer from the station to your final address.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            With ski bags, a group of four, or a corporate retreat where everyone needs
            to arrive together, a private transfer from Paris or CDG removes three or
            four coordination steps in one go. Fixed price means you know what you
            are spending before you leave.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            For groups arriving on different flights, we coordinate separate vehicles
            from the same airport with independent timing. For multi-day visits, a driver
            can remain available locally.
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Fleet for Haute-Savoie</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            For a solo traveller or a couple with light luggage: <strong>E-Class</strong>
            (from €530 to Annecy, €600 to Chamonix or Megève). For a couple with ski bags:
            <strong> V-Class</strong>. For a group of 4 to 7 with equipment: V-Class or
            VIP Sprinter. All prices are fixed and confirmed at booking.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/en/our-fleet"
              className="font-sans text-sm tracking-widest uppercase border-b border-stone-400 pb-0.5 hover:border-stone-700 transition-colors"
            >
              View the fleet →
            </Link>
            <Link
              href="/en/long-distance"
              className="font-sans text-sm tracking-widest uppercase border-b border-stone-400 pb-0.5 hover:border-stone-700 transition-colors"
            >
              Long distance service →
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Related pages</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Chamonix chauffeur', href: '/en/chamonix-chauffeur' },
              { label: 'Megève chauffeur', href: '/en/megeve-chauffeur' },
              { label: 'Long distance', href: '/en/long-distance' },
              { label: 'Hourly hire', href: '/en/hourly-hire' },
              { label: 'CDG airport transfer', href: '/en/cdg-airport-transfer' },
              { label: 'Contact', href: '/en/contact' },
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

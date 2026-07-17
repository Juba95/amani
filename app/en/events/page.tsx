import type { Metadata } from 'next';
import Link from 'next/link';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/events';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'VIP Event Transport Paris — Fashion Week, Air Show, Roland Garros | Amani',
  description: 'VIP transport for Paris events. Fashion Week, Paris Air Show, Roland Garros, Cannes Film Festival, trade shows. Dedicated fleet, on-site coordinator.',
  canonical: 'https://www.amani-limousines.com/en/events',
  alternates: {
    languages: { fr: 'https://www.amani-limousines.com/evenements' },
  },
});

// href → page détail existante (contenu en français pour l'instant, comme
// sur le hub FR ; les cartes sans page dédiée restent non cliquables)
const events = [
  { name: 'Paris Fashion Week', period: 'February & September', desc: 'Shuttles between fashion houses, Triangle d\'Or hotels and Marais showrooms.', href: '/evenements/paris-fashion-week' },
  { name: 'Paris Air Show', period: 'June (odd years)', desc: 'Transfers to Le Bourget, FBO welcome, government and industry delegation convoys.', href: '/evenements/paris-air-show' },
  { name: 'Roland Garros', period: 'May — June', desc: 'Porte d\'Auteuil transfers, VIP hospitality access, corporate lounge shuttles.', href: '/evenements/roland-garros' },
  { name: 'Cannes Film Festival', period: 'May', desc: 'Nice–Cannes transfers, Croisette access, Red Carpet drop-off, yacht port shuttles.', href: '/evenements/festival-de-cannes' },
  { name: 'Monaco Grand Prix', period: 'May', desc: 'Nice–Monaco transfers, paddock and yacht hospitality access, circuit road closures handled.', href: '/evenements/grand-prix-monaco' },
  { name: 'Deauville Racecourse', period: 'August', desc: 'Paris–Deauville transfers for race days, polo and the yearling sales.', href: '/evenements/hippodrome-deauville' },
  { name: 'Maison & Objet', period: 'January & September', desc: 'Villepinte shuttles and CDG transfers for international buyers and exhibitors.', href: '/evenements/salons-professionnels' },
  { name: 'Salon Nautic', period: 'December', desc: 'Porte de Versailles — transfers and as-directed hire for trade professionals.', href: '/evenements/salons-professionnels' },
];

export default function EventsEN() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Event transport</p>
          <h1 className="heading mt-3">
            {c('h1', 'VIP transport for your events in Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Paris hosts the world\'s most prestigious events. Fashion Week, Air Show, Roland Garros, Cannes Film Festival — each generates intense transport demand that only teams experienced with those specific constraints can absorb. Amani Limousines deploys for every major edition with dedicated fleets, on-site coordinators and vehicles reserved well in advance.')}
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Events we cover</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {events.map((e) => (
              <div key={e.name} className="card">
                <p className="sf text-xs text-stone-400 uppercase tracking-wider">{e.period}</p>
                <p className="heading text-xl mt-1">{e.name}</p>
                <p className="sf text-stone-500 text-sm mt-3 leading-relaxed">{e.desc}</p>
                {e.href && (
                  <Link href={e.href} className="sf text-xs mt-4 inline-block" style={{ color: '#8a7340' }}>
                    Learn more →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Book early, travel smoothly</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            During Fashion Week or Roland Garros, quality vehicles book up weeks in advance.
            If you are an exhibitor, accredited buyer, journalist or corporate hospitality host,
            plan your transport logistics with the same lead time as your tickets and
            accommodation. Our team can block vehicles months in advance and adjust schedules
            as your programme firms up.
          </p>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

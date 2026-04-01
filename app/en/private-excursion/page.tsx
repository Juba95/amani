import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/private-excursion';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Private Excursion from Paris — Versailles, Champagne, Normandy | Amani Limousines',
  description: 'Private day trips from Paris with a chauffeur. Versailles, Champagne, Normandy, Loire Valley, Giverny. Fully tailored itineraries, culinary guide available.',
  canonical: 'https://www.amani-limousines.com/en/private-excursion',
  alternates: {
    languages: { fr: 'https://www.amani-limousines.com/excursion-privee' },
  },
});

const excursions = [
  { name: 'Versailles', km: '35 km · 45 min', desc: 'The Palace, gardens, Grand Trianon and Hameau de la Reine. Your driver drops you at the main gate and organises pick-up according to your visit schedule.' },
  { name: 'Champagne & Reims', km: '145 km · 1h45', desc: 'Reims cathedral and the great Champagne houses: Taittinger, Ruinart, Mumm, Veuve Clicquot. Private cellar visits can be arranged in advance.' },
  { name: 'Normandy', km: '200 km · 2h15', desc: 'D-Day beaches, the Caen Memorial, Mont Saint-Michel. Itinerary tailored to your historical or gastronomic priorities.' },
  { name: 'Giverny', km: '75 km · 1h', desc: 'Monet\'s house and water lily gardens. Best visited April to June. Combinable with Vernon or Les Andelys.' },
  { name: 'Loire Valley Châteaux', km: '230 km · 2h30', desc: 'Chambord, Chenonceau, Amboise and the island where Leonardo da Vinci spent his final years.' },
  { name: 'Épernay & Wine Route', km: '130 km · 1h30', desc: 'The Avenue de Champagne, Moët & Chandon, Pol Roger. Private tastings can be arranged with several houses.' },
];

export default function PrivateExcursionEN() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Day trips & excursions</p>
          <h1 className="heading mt-3">
            {c('h1', 'Private excursion from Paris — with a chauffeur, at your pace')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Paris is two hours from Versailles, the Champagne vineyards and the D-Day beaches. A private chauffeur for a day trip from Paris means no train to catch, no parking to manage at the destination, and no departure time imposed by anyone but yourself. You arrive rested, and you leave when you are ready.')}
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Our most requested excursions</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {excursions.map((e) => (
              <div key={e.name} className="card">
                <p className="sf text-xs text-stone-400 uppercase tracking-wider">{e.km}</p>
                <p className="heading text-xl mt-1">{e.name}</p>
                <p className="sf text-stone-500 text-sm mt-3 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Culinary guide option</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            On certain excursions — particularly Champagne, Normandy and wine country — we
            can arrange the services of a local culinary guide. Someone who knows the producers,
            the unlisted tables and the cellars that don't receive tour groups. If you want the
            gastronomic dimension of a trip to be taken seriously, this is the option to consider.
          </p>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

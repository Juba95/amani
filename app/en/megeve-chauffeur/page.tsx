import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur to Megève — Paris to Megève Private Transfer | Amani Limousines',
  description:
    'Private chauffeur from Paris to Megève. 640 km, fixed price. Departures from CDG, Orly or any address. Mercedes vehicles, 7 days a week, year-round.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/megeve-chauffeur',
    languages: {
      fr: 'https://www.amani-limousines.com/chauffeur-prive-megeve',
      'x-default': 'https://www.amani-limousines.com/en/megeve-chauffeur',
    },
  },
};

const routes = [
  {
    title: 'Paris — Megève',
    detail:
      'About 640 km via the A6 and A40, then exit at Sallanches. The drive takes 6 to 6.5 hours in normal conditions. During the school holiday weeks in February, roads around Sallanches can add up to an hour.',
  },
  {
    title: 'CDG — Megève',
    detail:
      'Collection at the terminal with a name board. Flight tracked in real time. Around 7 hours door to door. The wait after landing is included in the fixed price.',
  },
  {
    title: 'Orly — Megève',
    detail:
      'From Orly, approximately 6h30 depending on the Francilienne. Large boot available for ski bags — confirm at booking what you are transporting.',
  },
  {
    title: 'Megève — Paris (return)',
    detail:
      'Collection from Megève town centre, Le Jaillet, Rochebrune or Mont d\'Arbois. Departure time set by you, with flexibility if your morning plans change.',
  },
];

const areas = [
  'Megève town centre',
  'Le Jaillet',
  'Rochebrune',
  'Mont d\'Arbois',
  'Saint-Nicolas-de-Véroce',
  'Combloux (3 km away)',
];

export default function MegeveChauffeur() {
  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Haute-Savoie — Mont-Blanc Massif</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur to Megève</strong> —{' '}
            <em>from Paris and the airports</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Megève has no direct train link from Paris. The closest station is Sallanches,
            12 km from the resort, with a change at Geneva or Annecy. For a group with ski
            bags, a private car from Paris is often faster and always more direct. Amani
            Limousines covers this route year-round with a fixed price confirmed before departure.
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
            Departures from any address in Paris, or from CDG and Orly with an airport
            greeting included in the fixed price.
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

      {/* Areas */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Drop-off areas in Megève</h2>
          <p className="sf text-stone-600 mt-4 mb-8 leading-relaxed">
            We deliver to any address in and around Megève:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {areas.map((a) => (
              <div key={a} className="py-3 px-5 border border-stone-200 font-sans text-sm text-gray-700">
                {a}
              </div>
            ))}
          </div>
          <p className="sf text-stone-500 mt-6 text-sm leading-relaxed">
            For chalets with difficult winter access, contact us in advance to confirm
            road conditions on the specific route.
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Fleet</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            For 1 to 3 passengers on a long journey, the <strong>S-Class</strong> offers
            massage seats and a notably quieter cabin compared to the E-Class. For groups
            up to 7 with ski equipment, the <strong>V-Class</strong>. For larger groups,
            the VIP Sprinter.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Paris–Megève rates start from around €620 in the E-Class. Fixed price,
            no meter, no late-night surcharge.
          </p>
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

      {/* Season info */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Season and timing</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            High demand periods are Christmas week, New Year and the French school
            holiday weeks in February. These trips book up several weeks in advance.
            Outside those peaks, 48 to 72 hours notice is usually sufficient.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Megève also works in summer for golf and hiking. Traffic is lighter,
            journey times are more predictable.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Other destinations</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Chamonix chauffeur', href: '/en/chamonix-chauffeur' },
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

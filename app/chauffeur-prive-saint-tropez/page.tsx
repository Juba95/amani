import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Privé Saint-Tropez — Prestige, Yachting & Pampelonne | Amani Limousines',
  description:
    'Chauffeur privé à Saint-Tropez : transferts depuis Nice ou La Môle, plages de Pampelonne, yachting et soirées privées. Mercedes haut de gamme, tarif fixe.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-prive-saint-tropez',
  },
};

const zones = [
  { zone: 'Port de Saint-Tropez', note: 'Quai Jean-Jaurès, yachts, Sénéquier, place des Lices' },
  { zone: 'Pampelonne', note: 'Club 55, Nikki Beach, Bagatelle, plages privées' },
  { zone: 'Ramatuelle', note: 'Village perché, domaines viticoles, route des plages' },
  { zone: 'Gassin', note: 'Village classé, panorama sur le golfe, hôtels de charme' },
  { zone: 'Aéroport de La Môle', note: 'Aérodrome privé, jets et hélicoptères, 15 min du port' },
];

const occasions = [
  {
    titre: 'Yachting',
    texte:
      'Vous arrivez par la mer et avez besoin d\'un véhicule à terre. Le chauffeur vous attend au port de Saint-Tropez ou au port de Cogolin et vous conduit où vous le souhaitez : restaurant, plage, village de l\'arrière-pays. Il reste disponible toute la journée.',
  },
  {
    titre: 'Événements estivaux',
    texte:
      'De juin à septembre, Saint-Tropez enchaîne les événements privés, les inaugurations et les soirées. La route du littoral est saturée, les parkings pleins. Un chauffeur qui connaît les alternatives par l\'intérieur des terres vous évite les embouteillages.',
  },
  {
    titre: 'Soirées privées',
    texte:
      'Les soirées tropéziennes commencent tard et finissent au lever du soleil. Le chauffeur s\'adapte à votre programme sans limite horaire. Vous rentrez quand vous voulez, au tarif convenu, sans avoir à chercher un VTC à quatre heures du matin.',
  },
];

export default function ChauffeurPriveSaintTropez() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Saint-Tropez — Golfe de Saint-Tropez</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé Saint-Tropez</strong> —{' '}
            <em>prestige, plages et soirées</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Saint-Tropez est un village de 4 000 habitants qui accueille 80 000 personnes
            par jour en été. La route départementale qui y mène est à voie unique sur
            plusieurs kilomètres, et les bouchons du week-end peuvent durer deux heures.
            Un <strong>chauffeur privé à Saint-Tropez</strong> connaît les créneaux, les
            raccourcis par Grimaud et les accès par la route des plages. Amani Limousines
            vous y conduit depuis Nice, l'aéroport de La Môle ou votre yacht, en Mercedes,
            au tarif fixe.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Demander un tarif
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

      {/* Occasions */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Quand réserver un chauffeur à Saint-Tropez</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Arrivée en yacht, journée à Pampelonne ou soirée privée : chaque situation
            a ses propres contraintes dans la presqu'île de Saint-Tropez.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {occasions.map((o) => (
              <div key={o.titre} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{o.titre}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{o.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Zones desservies autour de Saint-Tropez</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            Du port de Saint-Tropez aux plages de Pampelonne, en passant par les
            villages perchés du golfe et l'aérodrome de La Môle.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {zones.map((z) => (
              <div key={z.zone} className="flex items-start gap-4 py-4 border-b border-stone-100">
                <span
                  className="mt-0.5 h-2 w-2 rounded-full shrink-0"
                  style={{ background: '#c9a84c' }}
                />
                <div>
                  <p className="font-sans text-sm font-medium text-gray-900">{z.zone}</p>
                  <p className="font-sans text-xs text-stone-500 mt-0.5">{z.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Amani */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pourquoi choisir Amani à Saint-Tropez</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Accès maîtrisé</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                La presqu'île de Saint-Tropez est un goulot d'étranglement en été.
                Nos chauffeurs connaissent les itinéraires par l'intérieur, les horaires
                à éviter et les accès directs aux plages de Pampelonne.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Discrétion totale</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Saint-Tropez est un village où tout le monde se croise. La discrétion
                du chauffeur n'est pas un bonus, c'est une nécessité. Nos équipes sont
                formées en conséquence.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Disponibilité sans limite</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Journée plage, déjeuner au Club 55, apéritif au Sénéquier, dîner à
                Ramatuelle, soirée aux Caves du Roy : le chauffeur vous accompagne du
                matin au petit matin, sans supplément horaire.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Liaison aéroport de La Môle</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                L'aérodrome de La Môle–Saint-Tropez est à quinze minutes du port. Le
                chauffeur vous attend à l'arrivée de votre jet ou hélicoptère et vous
                conduit directement à destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Destinations Côte d'Azur</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Chauffeur privé Nice', href: '/chauffeur-prive-nice' },
              { label: 'Chauffeur privé Cannes', href: '/chauffeur-prive-cannes' },
              { label: 'Chauffeur privé Monaco', href: '/chauffeur-prive-monaco' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Notre flotte', href: '/notre-flotte' },
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
    </SEOLayout>
  );
}

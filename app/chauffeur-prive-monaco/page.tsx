import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Privé Monaco — Monte-Carlo, Grand Prix & Yacht Show | Amani Limousines',
  description:
    'Chauffeur privé à Monaco : Monte-Carlo, Port Hercule, Grand Prix, Yacht Show. Service Mercedes haut de gamme, discrétion garantie, tarif fixe.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-prive-monaco',
  },
};

const zones = [
  { zone: 'Monte-Carlo', note: 'Casino, Hôtel de Paris, Hermitage, Métropole' },
  { zone: 'Port Hercule', note: 'Yachts, Club nautique, quai des milliardaires' },
  { zone: 'Casino de Monte-Carlo', note: 'Place du Casino, Café de Paris, jardins' },
  { zone: 'Fontvieille', note: 'Centre commercial, stade Louis-II, héliport' },
  { zone: 'Aéroport Nice', note: 'Transfert Nice–Monaco en 25 minutes hors pointe' },
  { zone: 'Héliport Monaco', note: 'Liaison hélicoptère depuis Nice, prise en charge à l\'arrivée' },
];

const occasions = [
  {
    titre: 'Grand Prix de Monaco',
    texte:
      'Pendant le Grand Prix, les rues du circuit sont fermées plusieurs jours avant la course. Se déplacer dans la Principauté devient un exercice de précision. Nos chauffeurs connaissent les itinéraires alternatifs, les accès piétons et les points de dépose autorisés.',
  },
  {
    titre: 'Yacht Show',
    texte:
      'Le Monaco Yacht Show rassemble les plus grands yachts du monde à Port Hercule. Les quais sont bondés, les accès filtrés. Le chauffeur vous dépose au plus près de votre invitation et vous récupère à l\'heure convenue.',
  },
  {
    titre: 'Événements',
    texte:
      'Bal de la Rose, Gala de la Croix-Rouge, soirées au Sporting Monte-Carlo : Monaco organise des événements de prestige tout au long de l\'année. Un chauffeur qui connaît les protocoles d\'accès est un atout, pas un luxe.',
  },
  {
    titre: 'Casinos et vie nocturne',
    texte:
      'Soirée au Casino de Monte-Carlo, dîner au Louis XV, verre au Jimmy\'z : la nuit monégasque ne s\'arrête pas à minuit. Le chauffeur reste à votre disposition jusqu\'à votre retour, sans majoration.',
  },
];

export default function ChauffeurPriveMonaco() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Monaco — Principauté</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé Monaco</strong> —{' '}
            <em>Monte-Carlo, Grand Prix et prestige</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Monaco est un territoire de deux kilomètres carrés où la moindre fermeture
            de rue paralyse la circulation. Un <strong>chauffeur privé à Monaco</strong>{' '}
            connaît chaque virage, chaque tunnel et chaque accès réservé de la Principauté.
            Amani Limousines assure vos déplacements à Monaco et entre Monaco et l'aéroport
            de Nice en Mercedes, avec un tarif fixe et une discrétion adaptée au standing
            monégasque.
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
          <h2 className="heading">Quand réserver un chauffeur privé à Monaco</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Grand Prix, Yacht Show, gala ou soirée au Casino : chaque événement monégasque
            a ses propres règles de circulation et d'accès.
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
          <h2 className="heading">Zones desservies à Monaco et alentours</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            Nous couvrons l'ensemble de la Principauté ainsi que les liaisons avec
            l'aéroport de Nice et l'héliport de Fontvieille.
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
          <h2 className="heading">Pourquoi choisir Amani à Monaco</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Discrétion de rigueur</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Monaco est un microcosme où tout se sait. Nos chauffeurs respectent
                une confidentialité absolue sur les trajets, les passagers et les
                destinations.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Connaissance du territoire</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Tunnels, sens uniques, accès souterrains, parkings réservés : Monaco est
                un labyrinthe pour qui ne le pratique pas quotidiennement. Nos chauffeurs
                le connaissent par coeur.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Véhicules à la hauteur</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Mercedes Classe S, Classe V, Sprinter VIP : des véhicules qui ne dénotent
                pas devant l'Hôtel de Paris ou le Casino de Monte-Carlo.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Liaison Nice–Monaco fiable</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Le trajet aéroport de Nice–Monaco prend 25 minutes hors pointe, mais peut
                dépasser l'heure en été. Le chauffeur anticipe et choisit entre l'autoroute,
                la Moyenne Corniche et la Basse Corniche selon les conditions.
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
              { label: 'Chauffeur privé Saint-Tropez', href: '/chauffeur-prive-saint-tropez' },
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

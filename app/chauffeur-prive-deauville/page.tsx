import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Privé Deauville — Hippodrome, Planches & Événements | Amani Limousines',
  description:
    'Chauffeur privé à Deauville pour les courses hippiques, mariages, Festival du cinéma américain et week-ends sur la côte normande. Mercedes, tarif fixe.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-prive-deauville',
  },
};

const zones = [
  { zone: 'Hippodrome de Deauville', note: 'Courses, ventes de yearlings, Galop' },
  { zone: 'Les Planches', note: 'Promenade mythique, cabines de bain, front de mer' },
  { zone: 'Hôtel Normandy', note: 'Palace historique, événements et séminaires' },
  { zone: 'Hôtel Royal', note: 'Thalasso, spa, congrès et réceptions' },
  { zone: 'Trouville', note: 'Casino, marché aux poissons, plage des Rois' },
  { zone: 'Cabourg', note: 'Grand Hôtel, promenade Marcel-Proust' },
  { zone: 'Honfleur', note: 'Vieux bassin, galeries d\'art, restaurants du port' },
];

const occasions = [
  {
    titre: 'Courses hippiques',
    texte:
      'L\'hippodrome de Deauville–La Touques accueille les plus grandes courses de galop et de trot de l\'été. Les ventes de yearlings d\'Arqana drainent le gratin international des propriétaires. Le chauffeur vous dépose à l\'entrée des tribunes et vous attend à la fin des courses.',
  },
  {
    titre: 'Mariages',
    texte:
      'Les mariages en Normandie se déroulent dans des manoirs, des domaines ou des hôtels de charme souvent éloignés des axes principaux. Nous assurons le transport des mariés et des invités avec des véhicules adaptés au nombre de personnes.',
  },
  {
    titre: 'Festival du cinéma américain',
    texte:
      'Chaque septembre, Deauville accueille le Festival du film américain. La ville double de population en quelques jours. Les hôtels affichent complet, les taxis se raréfient. Un chauffeur réservé à l\'avance est la seule garantie de mobilité.',
  },
  {
    titre: 'Polo',
    texte:
      'L\'International Polo Club de Deauville organise des tournois tout l\'été. Les terrains sont accessibles en voiture uniquement. Le chauffeur connaît les accès et les parkings réservés.',
  },
];

export default function ChauffeurPriveDeauville() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Deauville — Côte Fleurie</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé Deauville</strong> —{' '}
            <em>courses, festivals et côte normande</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Deauville est à deux heures de Paris par l'autoroute, mais la ville n'a ni
            gare TGV directe ni aéroport commercial. Pour y arriver sereinement, un{' '}
            <strong>chauffeur privé depuis Paris</strong> est souvent la meilleure option.
            Amani Limousines assure les transferts Paris–Deauville et les déplacements
            sur la Côte Fleurie en Mercedes, avec un tarif fixe communiqué à la réservation.
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
          <h2 className="heading">Les occasions de réserver à Deauville</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Courses hippiques, mariages, festival, polo : Deauville est une ville
            d'événements, et chaque événement a ses propres contraintes d'accès.
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
          <h2 className="heading">Zones desservies sur la Côte Fleurie</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            Nous couvrons Deauville, Trouville, Honfleur, Cabourg et l'ensemble
            de la côte normande entre Caen et Le Havre.
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
          <h2 className="heading">Pourquoi choisir Amani pour Deauville</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Trajet Paris–Deauville maîtrisé</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                200 km par l'A13, environ 2h de route. Le chauffeur connaît les ralentissements
                du vendredi soir et les alternatives par la nationale. Départ et retour à
                l'heure que vous choisissez.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Connaissance de la Côte Fleurie</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Manoirs isolés, domaines privés, restaurants de Honfleur, plages de Cabourg :
                nos chauffeurs savent où aller et comment y accéder, même hors saison.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Week-end clé en main</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Le chauffeur vous conduit le vendredi, reste disponible sur place le samedi
                et vous ramène le dimanche. Une mise à disposition souple, adaptée aux
                week-ends normands.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Tarif fixe, sans surprise</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Le prix est communiqué avant le départ. Pas de péage en plus, pas de
                supplément embouteillage, pas de frais de retour à vide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Nos services associés</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Chauffeur privé Paris', href: '/chauffeur-prive-paris' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Notre flotte', href: '/notre-flotte' },
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Réservation', href: '/reservation' },
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

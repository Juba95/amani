import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Privé Megève — Transfert Paris Megève | Amani Limousines',
  description:
    'Transfert en voiture avec chauffeur Paris–Megève. 640 km, prix fixe. Départ depuis CDG, Orly ou votre adresse. Mercedes récente, disponible 7j/7.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-prive-megeve',
    languages: {
      en: 'https://www.amani-limousines.com/en/megeve-chauffeur',
      'x-default': 'https://www.amani-limousines.com/chauffeur-prive-megeve',
    },
  },
};

const itineraires = [
  {
    titre: 'Paris — Megève',
    detail:
      'Environ 640 km via l\'A6 et l\'A40, puis sortie Sallanches. Le trajet prend 6h à 6h30 selon la circulation, plus en période de départ en vacances. Départ recommandé avant 7h ou après 21h le vendredi de début de saison.',
  },
  {
    titre: 'CDG — Megève',
    detail:
      'Prise en charge au terminal avec accueil nominatif, itinéraire direct. Comptez 7h environ. Suivi de vol en temps réel : si votre avion a du retard, le chauffeur ajuste.',
  },
  {
    titre: 'Orly — Megève',
    detail:
      'Depuis Orly, environ 6h30 de route. Départ dès la récupération des bagages, sans délai d\'attente. Grand coffre pour skis et bagages volumineux.',
  },
  {
    titre: 'Megève — Paris (retour)',
    detail:
      'Depuis le centre de Megève, le Jaillet, Rochebrune ou les chalets en altitude. Horaire à convenir la veille. Souplesse possible si votre matinée de ski se prolonge.',
  },
];

const quartiers = [
  'Centre-ville de Megève',
  'Le Jaillet',
  'Rochebrune',
  'Mont d\'Arbois',
  'Saint-Nicolas-de-Véroce',
  'Combloux (à 3 km)',
];

export default function ChauffeurPriveMegeve() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Haute-Savoie — Massif du Mont-Blanc</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé Megève</strong> —{' '}
            <em>depuis Paris et les aéroports</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Megève est à 640 km de Paris, 6h30 de route avec un chauffeur, et aucune
            correspondance à gérer. Amani Limousines couvre ce trajet depuis Paris, CDG
            et Orly en Mercedes récentes, avec prix fixe confirmé avant le départ.
            L'accès à la station en voiture privée reste la solution la plus directe pour
            les clients avec des bagages de ski ou plusieurs membres d'un groupe.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Demander un devis
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

      {/* Itinéraires */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Trajets et prises en charge</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Le départ peut se faire depuis n'importe quelle adresse : Paris intramuros,
            banlieue, aéroport ou gare. Pour les aéroports, l'accueil se fait en salle
            d'arrivée avec panneau nominatif.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {itineraires.map((it) => (
              <div key={it.titre} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{it.titre}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{it.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Ce que le train ne fait pas</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Il n'y a pas de train direct Paris–Megève. La connexion ferroviaire la plus
            proche est Sallanches, à 12 km de la station, avec un changement à Genève ou
            Annecy. Avec des bagages de ski, des enfants ou un groupe, la voiture avec
            chauffeur est souvent plus simple que cette combinaison de trains, bus navettes
            et taxis locaux.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            En période de haute saison (fin décembre, vacances de février), les routes
            d'accès à Megève peuvent être chargées. Nos chauffeurs connaissent les
            variantes par Flumet ou Praz-sur-Arly et les utilisent si besoin.
          </p>
        </div>
      </section>

      {/* Quartiers desservis */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Lieux de dépose à Megève</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            Nous déposons (et récupérons) à toute adresse dans et autour de Megève :
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {quartiers.map((q) => (
              <div key={q} className="py-3 px-5 border border-stone-200 font-sans text-sm text-gray-700">
                {q}
              </div>
            ))}
          </div>
          <p className="sf text-stone-500 mt-6 text-sm leading-relaxed">
            Pour les chalets isolés avec accès difficile en hiver, contactez-nous à l'avance
            afin de confirmer l'accessibilité selon les conditions neigeuses.
          </p>
        </div>
      </section>

      {/* Flotte */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">La flotte</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour Paris–Megève, nous recommandons la Classe S pour 1 à 3 passagers
            sur un long trajet (sièges massants, habitacle silencieux), la Classe V pour
            les groupes jusqu'à 7 personnes avec bagages de ski. Le Sprinter VIP accueille
            jusqu'à 12 passagers.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le tarif Paris–Megève commence à partir de 620 € en Classe E. Prix fixe,
            sans compteur, sans supplément nocturne.
          </p>
          <div className="mt-8">
            <Link
              href="/notre-flotte"
              className="font-sans text-sm tracking-widest uppercase border-b border-stone-400 pb-0.5 hover:border-stone-700 transition-colors"
            >
              Voir la flotte complète →
            </Link>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Autres destinations</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Chauffeur privé Chamonix', href: '/chauffeur-prive-chamonix' },
              { label: 'Chauffeur privé Haute-Savoie', href: '/chauffeur-prive-haute-savoie' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Transfert aéroport CDG', href: '/transfert-aeroport-cdg' },
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

import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Mariage France — Voiture avec Chauffeur pour Mariage | Amani Limousines',
  description:
    'Chauffeur mariage partout en France : Paris, Deauville, Côte d\'Azur, châteaux, vignobles. Voiture des mariés, navettes invités, coordination jour J. Mercedes Classe S, Classe G, Maybach.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-mariage',
    languages: {
      en: 'https://www.amani-limousines.com/en/wedding-chauffeur',
      'x-default': 'https://www.amani-limousines.com/chauffeur-mariage',
    },
  },
};

const services = [
  {
    titre: 'Voiture des mariés',
    texte:
      "Le moment où vous montez dans la voiture après la cérémonie est l'un des rares instants de calme de la journée. Nous mettons à votre disposition une Mercedes Classe S, Classe G ou Maybach décorée selon vos souhaits. Le chauffeur connaît le timing, les lieux de photos et les détours prévus.",
  },
  {
    titre: 'Navettes invités',
    texte:
      "Quand le lieu de réception est un château en Sologne ou un domaine viticole en Provence, vos invités ont besoin d'un transport fiable. Nos Classe V et Sprinter VIP assurent des rotations entre l'hôtel, le lieu de cérémonie et le lieu de réception, sans que personne ne se perde en route.",
  },
  {
    titre: 'Coordination jour J',
    texte:
      "Nous travaillons en amont avec votre wedding planner ou directement avec vous. Horaires, itinéraires, ordre de passage des véhicules — tout est calé avant le jour J. Le jour même, un coordinateur transport est joignable en permanence.",
  },
  {
    titre: 'Décorations et mise en scène',
    texte:
      "Rubans, compositions florales, pétales de roses, champagne à bord — nous préparons le véhicule des mariés selon vos indications. Si vous avez un fleuriste attitré, nous coordonnons avec lui la décoration du véhicule le matin même.",
  },
];

const destinations = [
  { lieu: 'Paris & Île-de-France', note: 'Mairies, églises, hôtels particuliers, péniches' },
  { lieu: 'Deauville & Normandie', note: 'Manoirs normands, plages, casino' },
  { lieu: 'Côte d\'Azur', note: 'Saint-Tropez, Cannes, Nice, villas avec vue mer' },
  { lieu: 'Châteaux de la Loire', note: 'Chambord, Chenonceau, domaines viticoles' },
  { lieu: 'Provence & Luberon', note: 'Mas provençaux, champs de lavande, bastides' },
  { lieu: 'Vignobles de Bordeaux', note: 'Châteaux viticoles, Saint-Émilion, Médoc' },
];

export default function ChauffeurMariage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Mariage — France entière</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur mariage en France</strong> —{' '}
            <em>de Paris aux vignobles, un transport à la hauteur du jour J</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Un mariage ne se déroule pas toujours à Paris. Il a lieu dans un château en Touraine,
            un mas en Provence, un domaine viticole à Saint-Émilion ou une villa face à la
            Méditerranée. Amani Limousines assure le transport des mariés et des invités partout
            en France, avec des véhicules à la mesure de l'événement : Mercedes Classe S,
            Classe G ou Maybach. Le chauffeur porte le costume, connaît le programme et reste
            disponible du matin jusqu'au bout de la nuit.
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

      {/* Services */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Nos prestations mariage</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Chaque mariage a ses particularités. Nous nous adaptons au format, au lieu et
            au nombre d'invités. Voici les prestations les plus courantes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.titre} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{s.titre}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{s.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Destinations de mariage couvertes</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            Nous intervenons sur l'ensemble du territoire français. Voici les régions
            les plus fréquemment demandées pour les mariages.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {destinations.map((d) => (
              <div key={d.lieu} className="flex items-start gap-4 py-4 border-b border-stone-100">
                <span
                  className="mt-0.5 h-2 w-2 rounded-full shrink-0"
                  style={{ background: '#c9a84c' }}
                />
                <div>
                  <p className="font-sans text-sm font-medium text-gray-900">{d.lieu}</p>
                  <p className="font-sans text-xs text-stone-500 mt-0.5">{d.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Véhicules */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Les véhicules pour votre mariage</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            La <strong>Mercedes Classe S</strong> est le choix classique pour les mariés :
            élégante, spacieuse, silencieuse. La <strong>Mercedes Classe G</strong> apporte
            une touche plus affirmée, parfaite pour les mariages en pleine nature ou les
            arrivées remarquées. Le <strong>Mercedes-Maybach</strong> offre le niveau de
            prestige le plus élevé, avec un habitacle digne d'un salon privé.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour les invités, la <strong>Classe V</strong> accueille jusqu'à sept passagers
            et le <strong>Sprinter VIP</strong> transporte des groupes plus importants dans
            un confort premium.
          </p>
          <div className="mt-8">
            <Link
              href="/notre-flotte"
              className="font-sans text-sm tracking-widest uppercase border-b border-stone-400 pb-0.5 hover:border-stone-700 transition-colors"
            >
              Voir toute la flotte →
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi Amani */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pourquoi confier le transport de votre mariage à Amani</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Expérience des mariages haut de gamme</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Nous avons assuré le transport de mariages dans des lieux aussi variés que
                le Château de Vaux-le-Vicomte, des domaines viticoles bordelais et des villas
                sur la Côte d'Azur. Nos chauffeurs savent gérer les imprévus d'un jour J.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Un interlocuteur unique</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Vous avez déjà assez de prestataires à coordonner. Chez Amani, un seul
                interlocuteur gère l'ensemble du dispositif transport : voiture des mariés,
                navettes invités, transferts aéroport pour les invités étrangers.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Disponibilité du matin au bout de la nuit</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Les mariages ne finissent pas à minuit. Nos chauffeurs restent disponibles
                jusqu'à la fin de la réception, aussi tardive soit-elle. Pas de supplément
                pour les heures de nuit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pages associées</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Mariage à Paris', href: '/chauffeur-mariage-paris' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Notre flotte', href: '/notre-flotte' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Chauffeur privé Paris', href: '/chauffeur-prive-paris' },
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

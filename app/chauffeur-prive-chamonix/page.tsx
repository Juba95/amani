import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Privé Chamonix — Transfert Paris Chamonix | Amani Limousines',
  description:
    'Chauffeur privé Paris Chamonix en Mercedes. 600 km, prix fixe sans compteur. Départ CDG, Orly ou Paris intramuros. Disponible 7j/7, toute l\'année.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-prive-chamonix',
    languages: {
      en: 'https://www.amani-limousines.com/en/chamonix-chauffeur',
      'x-default': 'https://www.amani-limousines.com/chauffeur-prive-chamonix',
    },
  },
};

const itineraires = [
  {
    titre: 'Paris — Chamonix',
    detail:
      'Le trajet direct par l\'A6 puis l\'A40 fait environ 610 km pour 6h à 6h30 de route selon la circulation en Savoie. Départ tôt le matin ou en soirée pour éviter les bouchons du vendredi sur l\'A6.',
  },
  {
    titre: 'CDG — Chamonix',
    detail:
      'Prise en charge à l\'arrivée au terminal avec accueil personnalisé, puis route directe vers la Haute-Savoie. Environ 6h45 de trajet, suivi de vol en temps réel inclus.',
  },
  {
    titre: 'Orly — Chamonix',
    detail:
      'Depuis Orly Sud ou Ouest, comptez 6h15 environ selon la fluidité de la Francilienne. Véhicule avec grand coffre pour vos bagages de ski ou de randonnée.',
  },
  {
    titre: 'Chamonix — Paris',
    detail:
      'Retour depuis le centre-ville de Chamonix, les Houches, Argentière ou Les Bossons. Horaire au choix, souplesse sur l\'heure de départ selon votre programme.',
  },
];

const vehicules = [
  {
    modele: 'Mercedes Classe E',
    detail: 'Pour 1 à 3 passagers avec bagages. À partir de 590 € pour Paris–Chamonix.',
  },
  {
    modele: 'Mercedes Classe S',
    detail: 'Confort maximal pour les longs trajets. Sièges massants, habitacle silencieux.',
  },
  {
    modele: 'Mercedes Classe V',
    detail: 'Jusqu\'à 7 passagers. Idéal pour les groupes avec équipements de sport.',
  },
  {
    modele: 'Mercedes Sprinter VIP',
    detail: 'Pour les groupes de 8 à 12 personnes ou les bagages volumineux.',
  },
];

export default function ChauffeurPriveChamonix() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Haute-Savoie — Massif du Mont-Blanc</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé Chamonix</strong> —{' '}
            <em>depuis Paris et les aéroports</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Paris–Chamonix en voiture avec chauffeur : 600 km de trajet, prix fixe annoncé avant
            la réservation, aucun supplément. Amani Limousines couvre ce trajet toute l'année,
            saison de ski comme saison estivale, avec des véhicules Mercedes récents et des
            chauffeurs habitués aux routes de montagne.
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
          <h2 className="heading">Trajets couverts</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Le départ peut se faire depuis n'importe quelle adresse parisienne, un hôtel,
            un aéroport ou une gare. La prise en charge aux aéroports inclut l'accueil en salle
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

      {/* Pourquoi ce trajet en chauffeur privé */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Paris–Chamonix en voiture avec chauffeur</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le train Paris–Chamonix passe par Genève et prend 5h30 minimum, souvent plus avec
            les correspondances. L'avion n'existe pas pour cette destination. La voiture reste
            la solution la plus directe, et avec un chauffeur elle devient productive : vous
            travaillez, vous vous reposez, vous arrivez sans chercher à vous garer dans
            le centre de Chamonix.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            En hiver, le tunnel du Mont-Blanc peut imposer des conditions de circulation
            particulières. Nos chauffeurs connaissent ces itinéraires et s'adaptent en temps réel.
          </p>
        </div>
      </section>

      {/* Véhicules */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Véhicules disponibles</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Tous les véhicules sont des Mercedes récents, climatisés et régulièrement entretenus.
            Le tarif est calculé sur la distance et confirmé avant le départ.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {vehicules.map((v) => (
              <div key={v.modele} className="border-l-2 border-stone-200 pl-6">
                <p className="font-serif text-gray-900 mb-2">{v.modele}</p>
                <p className="sf text-stone-600 text-sm leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
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

      {/* Destination */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Chamonix Mont-Blanc</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Chamonix est accessible depuis Paris en voiture, sans escale, sans correspondance
            ferroviaire. La ville accueille des visiteurs toute l'année : skieurs de décembre
            à avril, randonneurs et alpinistes d'été en juillet-août, chasseurs de couleurs
            d'automne en septembre-octobre. Nous couvrons tous les quartiers de la vallée,
            des Houches jusqu'à Vallorcine en passant par Argentière.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour un groupe ou une famille, nous pouvons coordonner plusieurs véhicules
            au départ du même point. Pour les séjours de plusieurs jours, un chauffeur
            mis à disposition reste sur place.
          </p>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Autres destinations Haute-Savoie</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Chauffeur privé Megève', href: '/chauffeur-prive-megeve' },
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

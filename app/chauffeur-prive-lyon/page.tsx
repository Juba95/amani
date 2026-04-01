import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-prive-lyon';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Lyon — Aéroport Saint Exupéry & Affaires | Amani Limousines',
  description: 'Chauffeur privé à Lyon : transferts aéroport Saint Exupéry, salons Eurexpo, déplacements d\'affaires à la Part-Dieu et mise à disposition. Mercedes, tarif fixe.',
  canonical: 'https://www.amani-limousines.com/chauffeur-prive-lyon',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/lyon-airport-transfer',
      'x-default': 'https://www.amani-limousines.com/chauffeur-prive-lyon',
    },
  },
});

const zones = [
  { zone: 'Aéroport Lyon-Saint Exupéry', note: 'Accueil terminal, suivi des vols, parking couvert' },
  { zone: 'Presqu\'île', note: 'Place Bellecour, Hôtel-Dieu, quartier des affaires' },
  { zone: 'Vieux Lyon', note: 'Traboules, restaurants gastronomiques, Saint-Jean' },
  { zone: 'Part-Dieu', note: 'Gare TGV, tour Incity, bureaux et sièges sociaux' },
  { zone: 'Eurexpo', note: 'Parc des expositions, salons professionnels, Sirha' },
  { zone: 'Villeurbanne', note: 'Campus La Doua, Gratte-Ciel, entreprises tech' },
];

const occasions = [
  {
    titre: 'Transferts aéroport',
    texte:
      'Saint Exupéry est à trente minutes du centre-ville quand la circulation est fluide, mais peut dépasser l\'heure aux heures de pointe. Le chauffeur anticipe, suit votre vol et vous attend à la sortie du terminal avec un panneau à votre nom.',
  },
  {
    titre: 'Salons Eurexpo',
    texte:
      'Sirha, Pollutec, Global Industrie : les grands salons lyonnais drainent des milliers de visiteurs. Trouver un taxi à la fermeture relève du défi. Avec un chauffeur dédié, vous quittez le salon sans attente et regagnez votre hôtel ou l\'aéroport immédiatement.',
  },
  {
    titre: 'Événements d\'affaires',
    texte:
      'Lyon est le deuxième pôle économique français. Réunions à la Part-Dieu le matin, déjeuner à Confluence, rendez-vous à Écully l\'après-midi : le chauffeur enchaîne les points sans que vous perdiez de temps à chercher un stationnement.',
  },
  {
    titre: 'Gastronomie',
    texte:
      'Capitale de la gastronomie, Lyon compte plus de bouchons et d\'étoilés au mètre carré que n\'importe quelle autre ville française. Votre chauffeur vous dépose devant la porte et vous récupère après le repas, à l\'heure que vous voulez.',
  },
];

export default function ChauffeurPriveLyon() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Lyon — Auvergne-Rhône-Alpes</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé Lyon — aéroport, affaires et gastronomie')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Lyon mêle quartiers d\'affaires, patrimoine UNESCO et tables étoilées. Se déplacer entre la Presqu\'île, la Part-Dieu et Saint Exupéry demande un chauffeur qui connaît les raccourcis et les horaires de bouchon. Amani Limousines assure vos transferts dans toute l\'agglomération lyonnaise avec des véhicules Mercedes, un tarif fixe et une ponctualité rigoureuse.')}
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
          <h2 className="heading">Quand réserver un chauffeur privé à Lyon</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Transfert aéroport, journée de salon, rendez-vous d'affaires ou soirée
            gastronomique : voici les situations les plus courantes.
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
          <h2 className="heading">Zones desservies à Lyon et ses environs</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            Du centre historique aux zones d'activité périphériques, nous couvrons
            l'ensemble de la métropole de Lyon.
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
          <h2 className="heading">Pourquoi choisir Amani à Lyon</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Maîtrise du trafic lyonnais</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Tunnel de Fourvière, périphérique nord, autoroute A7 : nos chauffeurs
                connaissent les points noirs et les alternatives pour vous faire gagner
                du temps, quelle que soit l'heure.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Tarif fixe garanti</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Le prix est confirmé à la réservation. Pas de compteur, pas de majoration
                pendant les salons ou les heures de pointe.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Suivi des vols</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Votre vol a du retard à Saint Exupéry ? Le chauffeur le sait avant vous.
                Il ajuste son arrivée pour être là quand vous sortez, pas avant, pas après.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Flotte Mercedes complète</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Classe E, Classe S, Classe V et Sprinter VIP. Chaque véhicule est adapté
                à votre besoin : déplacement solo, représentation client ou groupe.
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

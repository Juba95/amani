import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-prive-paris';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Paris — Service 24h/24, Flotte Mercedes | Amani Limousines',
  description: "Chauffeur privé à Paris pour transferts aéroport, mise à disposition et longue distance. Flotte Mercedes Classe E, S et V. Tarif fixe, ponctualité garantie.",
  canonical: 'https://www.amani-limousines.com/chauffeur-prive-paris',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/private-chauffeur-paris',
      'x-default': 'https://www.amani-limousines.com/chauffeur-prive-paris',
    },
  },
});

const zones = [
  { zone: '1er – 8ème arrondissement', note: 'Triangle d\u2019or, Opéra, Louvre, palaces' },
  { zone: 'La Défense', note: 'Tours CNIT, Grande Arche, sièges sociaux' },
  { zone: 'CDG & Orly', note: 'Transferts aéroport avec suivi des vols' },
  { zone: 'Le Bourget', note: 'Paris Air Show, aviation d\u2019affaires' },
  { zone: 'Versailles & banlieue ouest', note: 'Château, Saint-Cloud, Neuilly, Levallois' },
  { zone: 'Île-de-France complète', note: 'Disneyland, Roissy, Marne-la-Vallée' },
];

const occasions = [
  {
    titre: 'Transfert aéroport',
    texte:
      "Le chauffeur suit l'évolution de votre vol en temps réel. Qu'il atterrisse avec une heure d'avance ou de retard, il est là. À CDG, il vous retrouve au terminal avant même que vos bagages n'arrivent.",
  },
  {
    titre: 'Mise à disposition',
    texte:
      "Vous avez plusieurs rendez-vous dans la journée — réunions, déjeuner d'affaires, visite de site — et vous ne voulez pas jongler avec les taxis. Le chauffeur reste à votre disposition à la demi-journée ou à la journée.",
  },
  {
    titre: 'Événements à Paris',
    texte:
      "Roland Garros, Paris Fashion Week, Salon du Bourget, Cannes en navette depuis Paris — les événements parisiens ont leurs propres codes de circulation. Nos chauffeurs les connaissent et anticipent.",
  },
  {
    titre: 'Longue distance depuis Paris',
    texte:
      "Paris vers Deauville (200 km), Bruxelles (310 km), Monaco (940 km). Quand le train ne va pas jusqu'à votre destination, ou que vous avez besoin de travailler en route.",
  },
];

export default function ChauffeurPriveParis() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Paris — Île-de-France</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé à Paris — disponible 24h/24, sept jours sur sept')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', "Paris est une ville où le temps de trajet peut basculer d'une demi-heure à deux heures selon l'heure et l'itinéraire. Un chauffeur privé à Paris connaît ces variations, les contourne et vous livre à l'heure. Amani Limousines opère dans toute l'Île-de-France depuis 2012 : aéroports, palaces, sièges sociaux, événements. Tarifs fixes, flotte Mercedes, disponibilité sept jours sur sept.")}
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
          <h2 className="heading">Quand faire appel à un chauffeur privé à Paris</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Il n'y a pas de profil type. Certains clients réservent un transfert aéroport
            ponctuel. D'autres ont un chauffeur attitré plusieurs jours par semaine. Voici
            les cas les plus fréquents.
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
          <h2 className="heading">Zones desservies en Île-de-France</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            Nous intervenons dans tout Paris intramuros et la grande couronne. Voici les
            zones les plus fréquemment demandées.
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

      {/* Flotte */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">La flotte</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Toutes les voitures sont des Mercedes récentes, entretenues et climatisées.
            Pour un déplacement seul ou en binôme, la <strong>Classe E</strong> (100 € minimum)
            est la solution habituelle. Pour les dirigeants qui reçoivent un client ou un associé,
            la <strong>Classe S</strong> (150 € minimum) offre un espace et un silence
            d'habitacle différents. Pour les groupes jusqu'à sept personnes, la{' '}
            <strong>Classe V</strong>. Pour les groupes plus importants, le Sprinter VIP.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Les tarifs sont fixés à l'avance, calculés sur la distance. Pas de supplément
            heure de pointe, pas de compteur qui tourne.
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
          <h2 className="heading">Ce qui distingue un chauffeur Amani</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Discrétion systématique</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Les chauffeurs ne parlent pas de leurs clients. C'est une règle non négociable,
                qui vaut pour les célébrités comme pour les décideurs qui préfèrent voyager
                sans que ça se sache.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Suivi des vols en temps réel</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Retard, avance, changement de terminal — le chauffeur s'adapte. Vous n'avez
                pas à l'appeler pour lui donner votre nouvelle heure d'atterrissage.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Pas de frais cachés</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Le prix communiqué à la réservation est le prix final. Aucun supplément
                de nuit, aucun forfait bagages, aucun pourboire obligatoire.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Disponible 24h/24</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Vol à 5h du matin, dîner d'affaires tardif, retour de soirée — nous couvrons
                toutes les plages horaires. Les réservations de nuit ne coûtent pas plus cher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Nos services à Paris</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Transfert Orly', href: '/transfert-aeroport-orly' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Meet & Greet', href: '/meet-and-greet' },
              { label: 'Sécurité rapprochée', href: '/securite-rapprochee' },
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

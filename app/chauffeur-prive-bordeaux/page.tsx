import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-prive-bordeaux';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Bordeaux — Vignobles, Aéroport & Événements | Amani Limousines',
  description: 'Chauffeur privé à Bordeaux pour transferts aéroport Mérignac, circuits dans les vignobles de Saint-Émilion et du Médoc, mariages et événements. Flotte Mercedes, tarif fixe.',
  canonical: 'https://www.amani-limousines.com/chauffeur-prive-bordeaux',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/private-chauffeur-bordeaux',
      'x-default': 'https://www.amani-limousines.com/chauffeur-prive-bordeaux',
    },
  },
});

const zones = [
  { zone: 'Aéroport Bordeaux-Mérignac', note: 'Accueil en terminal, suivi des vols en temps réel' },
  { zone: 'Centre historique', note: 'Place de la Bourse, Grand Théâtre, quartier Saint-Pierre' },
  { zone: 'Saint-Émilion', note: 'Vignobles classés UNESCO, châteaux et dégustations' },
  { zone: 'Arcachon', note: 'Bassin d\'Arcachon, Dune du Pilat, Cap Ferret' },
  { zone: 'Médoc', note: 'Route des châteaux, Margaux, Pauillac, Saint-Julien' },
  { zone: 'Pauillac', note: 'Grands crus classés, Lafite Rothschild, Mouton Rothschild' },
];

const occasions = [
  {
    titre: 'Transferts aéroport',
    texte:
      'Prise en charge directe à l\'arrivée à Bordeaux-Mérignac. Le chauffeur suit votre vol et ajuste son horaire à la minute. Vous retrouvez un véhicule prêt dès la sortie du terminal, sans file d\'attente ni application à rafraîchir.',
  },
  {
    titre: 'Vignobles et châteaux',
    texte:
      'Saint-Émilion, Pauillac, Margaux, Graves : les appellations bordelaises se visitent en voiture, pas en bus. Votre chauffeur vous conduit de domaine en domaine à votre rythme, sans contrainte horaire. Vous dégustez, il conduit.',
  },
  {
    titre: 'Événements d\'affaires',
    texte:
      'Bordeaux accueille Vinexpo, des congrès au Palais de la Bourse et des séminaires dans les châteaux du Médoc. Le chauffeur gère les rotations entre l\'hôtel, le lieu de l\'événement et l\'aéroport sans que vous ayez à y penser.',
  },
  {
    titre: 'Mariages',
    texte:
      'Les mariages bordelais se déroulent souvent dans des propriétés viticoles accessibles uniquement en voiture. Nous assurons le transport des mariés comme celui des invités, avec des véhicules décorés sur demande.',
  },
];

export default function ChauffeurPriveBordeaux() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Bordeaux — Nouvelle-Aquitaine</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé Bordeaux — vignobles, aéroport et événements')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Bordeaux se parcourt en voiture : les châteaux du Médoc sont à quarante minutes du centre, Saint-Émilion à une heure, Arcachon à cinquante minutes. Un chauffeur privé à Bordeaux transforme chaque déplacement en moment de calme. Amani Limousines vous conduit dans toute la Gironde avec des Mercedes récentes, un tarif fixe communiqué avant la réservation et une ponctualité sans négociation.')}
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
          <h2 className="heading">Quand réserver un chauffeur privé à Bordeaux</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Transfert d'aéroport, journée dans les vignobles, mariage dans un château ou
            congrès au centre-ville : chaque situation a ses contraintes, et le chauffeur
            les connaît.
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
          <h2 className="heading">Zones desservies autour de Bordeaux</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            Nous couvrons Bordeaux Métropole et l'ensemble de la Gironde, des rives de la
            Garonne jusqu'au littoral atlantique.
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
          <h2 className="heading">Pourquoi choisir Amani à Bordeaux</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Connaissance du vignoble</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Nos chauffeurs connaissent les routes des appellations, les accès privés des
                châteaux et les horaires de visite. Ils savent où se garer à Saint-Émilion
                un samedi de vendanges.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Tarif fixe, sans compteur</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Le prix est communiqué avant la réservation. Pas de supplément pour les
                embouteillages sur la rocade, pas de majoration en période de Vinexpo.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Flotte Mercedes</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Classe E pour les transferts, Classe S pour la représentation, Classe V
                pour les groupes. Chaque véhicule est récent, climatisé et entretenu.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Disponibilité 7j/7</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Vol matinal à Mérignac, dîner tardif dans le Médoc, retour de mariage
                à deux heures du matin : nous couvrons toutes les plages horaires.
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

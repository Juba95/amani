import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Privé Marseille — Aéroport Provence, Calanques & Affaires | Amani Limousines',
  description:
    'Chauffeur privé à Marseille : transferts aéroport Marseille-Provence, croisières au Vieux-Port, déplacements vers Aix-en-Provence et les Calanques. Mercedes, tarif fixe.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-prive-marseille',
    languages: {
      en: 'https://www.amani-limousines.com/en/marseille-airport-transfer',
      'x-default': 'https://www.amani-limousines.com/chauffeur-prive-marseille',
    },
  },
};

const zones = [
  { zone: 'Aéroport Marseille-Provence', note: 'Accueil terminal, suivi des vols, Marignane' },
  { zone: 'Vieux-Port', note: 'Hôtels, restaurants, Mucem, quartier du Panier' },
  { zone: 'Calanques', note: 'Parc national, Sormiou, Morgiou, En-Vau' },
  { zone: 'Cassis', note: 'Port, falaises, vignobles, Cap Canaille' },
  { zone: 'Aix-en-Provence', note: 'Cours Mirabeau, thermes, festivals, TGV' },
];

const occasions = [
  {
    titre: 'Transferts aéroport',
    texte:
      'L\'aéroport Marseille-Provence est à 25 km du centre-ville, mais le trajet peut prendre 45 minutes aux heures de pointe sur l\'autoroute A7. Le chauffeur suit votre vol, vous attend au terminal et vous conduit directement à votre destination, sans détour ni attente.',
  },
  {
    titre: 'Croisières',
    texte:
      'Le port de Marseille est une escale majeure en Méditerranée. À l\'arrivée de votre paquebot, le chauffeur vous attend au terminal croisière pour une excursion vers les Calanques, Aix-en-Provence ou le centre historique. Au retour, il vous dépose à l\'embarquement.',
  },
  {
    titre: 'Événements d\'affaires',
    texte:
      'Euroméditerranée, Parc Chanot, Palais du Pharo : Marseille accueille des congrès et salons tout au long de l\'année. Le chauffeur assure les rotations entre votre hôtel, le lieu de l\'événement et l\'aéroport sans que vous ayez à coordonner quoi que ce soit.',
  },
];

export default function ChauffeurPriveMarseille() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Marseille — Provence</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé Marseille</strong> —{' '}
            <em>aéroport, croisières et Provence</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Marseille est une ville immense qui s'étire sur 57 kilomètres de littoral.
            De l'aéroport de Marignane au Vieux-Port, de la gare Saint-Charles aux
            Calanques, les distances sont trompeuses et la circulation imprévisible. Un{' '}
            <strong>chauffeur privé à Marseille</strong> vous fait gagner du temps et de
            la sérénité. Amani Limousines couvre Marseille, Aix-en-Provence, Cassis et
            l'ensemble des Bouches-du-Rhône en Mercedes, au tarif fixe.
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
          <h2 className="heading">Quand réserver un chauffeur privé à Marseille</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Transfert aéroport, escale de croisière ou déplacement professionnel :
            chaque situation appelle un service adapté aux réalités marseillaises.
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
          <h2 className="heading">Zones desservies à Marseille et en Provence</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            De l'aéroport de Marignane aux Calanques, en passant par Aix-en-Provence
            et Cassis, nous couvrons l'ensemble des Bouches-du-Rhône.
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
          <h2 className="heading">Pourquoi choisir Amani à Marseille</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Maîtrise de la circulation marseillaise</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Tunnel du Prado, autoroute du Littoral, corniche Kennedy : Marseille a ses
                points noirs que seul un chauffeur local peut contourner efficacement.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Liaison Marseille–Aix fiable</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Le trajet Marseille–Aix-en-Provence prend 30 à 50 minutes selon l'heure.
                Le chauffeur choisit entre l'autoroute A51 et les itinéraires alternatifs
                pour vous y conduire dans les temps.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Service croisière dédié</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Le terminal croisière de Marseille accueille des paquebots toute l'année.
                Nous assurons les transferts entre le quai et vos points d'intérêt, avec
                retour à l'heure pour l'embarquement.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Tarif fixe, pas de compteur</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Embouteillages sur l'A7, détour par les Calanques, attente à l'aéroport :
                le tarif reste celui convenu à la réservation. Aucune surprise.
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
              { label: 'Chauffeur privé Nice', href: '/chauffeur-prive-nice' },
              { label: 'Chauffeur privé Paris', href: '/chauffeur-prive-paris' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Notre flotte', href: '/notre-flotte' },
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

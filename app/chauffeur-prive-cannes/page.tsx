import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Privé Cannes — Festival, MIPIM & Croisette | Amani Limousines',
  description:
    'Chauffeur privé à Cannes pour le Festival, le MIPIM, Cannes Lions et vos déplacements sur la Croisette. Mercedes haut de gamme, tarif fixe, service 7j/7.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-prive-cannes',
  },
};

const zones = [
  { zone: 'Palais des Festivals', note: 'Accès privilégié, dépose Croisette, montée des marches' },
  { zone: 'La Croisette', note: 'Carlton, Martinez, Majestic, hôtels de luxe' },
  { zone: 'Aéroport Nice', note: 'Transfert direct Nice–Cannes en 35 minutes' },
  { zone: 'Mougins', note: 'Restaurants gastronomiques, résidences privées' },
  { zone: 'Grasse', note: 'Capitale du parfum, arrière-pays cannois' },
  { zone: 'Saint-Raphaël', note: 'Littoral Esterel, golf, port de plaisance' },
];

const occasions = [
  {
    titre: 'Festival de Cannes',
    texte:
      'Pendant les douze jours du Festival, la ville est en état de siège. Les rues autour du Palais sont bouclées, les hôtels complets, les taxis introuvables. Un chauffeur dédié vous garantit l\'accès au bon endroit au bon moment, de la montée des marches à la soirée privée.',
  },
  {
    titre: 'MIPIM',
    texte:
      'Le salon de l\'immobilier transforme Cannes en capitale mondiale de la promotion immobilière chaque mars. Les rendez-vous s\'enchaînent entre le Palais, les yachts du port et les hôtels. Le chauffeur vous fait gagner un temps précieux entre chaque point.',
  },
  {
    titre: 'Cannes Lions',
    texte:
      'Le festival international de la créativité attire les agences du monde entier. Les soirées se prolongent, les lieux changent d\'une heure à l\'autre. Votre chauffeur reste disponible jusqu\'à la fin, sans supplément horaire.',
  },
  {
    titre: 'Événements privés et yachting',
    texte:
      'Dîner sur un yacht au port Canto, soirée dans une villa du Suquet, mariage à Mougins : Cannes vit au rythme des événements privés. Le chauffeur s\'adapte à vos horaires, pas l\'inverse.',
  },
];

export default function ChauffeurPriveCannes() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Cannes — Côte d'Azur</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé Cannes</strong> —{' '}
            <em>Festival, salons et Croisette</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Cannes est une ville compacte mais saturée dès qu'un événement majeur s'y
            installe. La Croisette devient piétonne, les parkings sont pleins, les VTC
            classiques débordés. Un <strong>chauffeur privé à Cannes</strong> connaît les
            accès alternatifs, les dépose-minutes et les horaires de fermeture des rues.
            Amani Limousines vous conduit partout à Cannes et dans ses environs, en Mercedes,
            au tarif fixe convenu avant votre arrivée.
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
          <h2 className="heading">Les occasions de réserver à Cannes</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Cannes vit au rythme de ses événements. Chacun a ses propres contraintes
            de circulation et de logistique.
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
          <h2 className="heading">Zones desservies autour de Cannes</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            De la Croisette à l'arrière-pays, en passant par l'aéroport de Nice
            et les communes voisines.
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
          <h2 className="heading">Pourquoi choisir Amani à Cannes</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Expérience des grands événements</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Festival de Cannes, MIPIM, Cannes Lions : nos chauffeurs ont assuré des
                centaines de transferts pendant ces événements. Ils connaissent les accès,
                les fermetures de rues et les alternatives.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Présentation irréprochable</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                À Cannes, l'image compte. Nos véhicules Mercedes sont impeccables et nos
                chauffeurs se présentent en tenue professionnelle, adaptée au standing
                de vos événements.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Disponibilité nocturne</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Les soirées cannoises se terminent rarement avant deux heures du matin.
                Le chauffeur reste disponible sans limite horaire, au tarif convenu.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Liaison Nice–Cannes optimisée</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Le trajet Nice Côte d'Azur–Cannes varie de 25 à 70 minutes selon l'heure.
                Le chauffeur anticipe les conditions pour vous déposer à l'heure à chaque fois.
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
              { label: 'Chauffeur privé Monaco', href: '/chauffeur-prive-monaco' },
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

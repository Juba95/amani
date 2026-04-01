import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-russophone';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Russophone Paris — Chauffeur Privé Parlant Russe | Amani Limousines',
  description: 'Chauffeur privé parlant russe à Paris. Tourisme de luxe, shopping, événements mondains. Communication en russe. Disponible 24h/24.',
  canonical: 'https://www.amani-limousines.com/chauffeur-russophone',
});

const services = [
  {
    titre: 'Transferts aéroport et accueil en russe',
    texte:
      "Vous arrivez à CDG ou au Bourget, le chauffeur est déjà là. Il parle russe, il a suivi votre vol, et il sait si vous avez du retard. Panneau à votre nom, bagages pris en charge, véhicule premium garé au plus près. Le trajet jusqu'à votre hôtel des Champs-Élysées ou du 16e se fait tranquillement, en russe.",
  },
  {
    titre: 'Shopping — Faubourg-Saint-Honoré, Vendôme, rue de la Paix',
    texte:
      "On ne va pas se mentir : Paris et le shopping de luxe, c'est une combinaison que la clientèle russophone connaît bien. Le chauffeur sait exactement où se trouvent les joailliers de la place Vendôme, les boutiques du Faubourg, et les corners exclusifs du Bon Marché. Il vous dépose devant la porte, gère le stationnement, et revient vous chercher avec les sacs.",
  },
  {
    titre: 'Soirées, galas et vie mondaine parisienne',
    texte:
      "Un vernissage au Palais de Tokyo, une première à l'Opéra Garnier, un gala dans un hôtel particulier du 7e. Le chauffeur vous dépose à l'entrée pile à l'heure, reste joignable en russe toute la soirée, et vient vous récupérer quand vous le décidez. Pas de taxi à chercher à minuit dans une rue mal éclairée.",
  },
  {
    titre: 'Séjours longue durée et mise à disposition',
    texte:
      "Pour un séjour de deux semaines ou plus, on vous attribue un chauffeur russophone dédié. Il apprend vite vos habitudes : le restaurant où vous allez déjeuner, l'heure à laquelle vous sortez, vos adresses préférées. Visites immobilières dans le 16e, rendez-vous médicaux, excursions à Monaco ou sur la Côte d'Azur — il gère tout.",
  },
];

const situations = [
  'Séjours shopping luxe — Champs-Élysées, Vendôme, Faubourg-Saint-Honoré',
  'Vernissages, galas et soirées privées dans les beaux quartiers',
  'Visites d\'appartements et investissements immobiliers à Paris',
  'Rendez-vous médicaux dans les cliniques du 16e et du 8e',
  'Voyages combinés Paris, Côte d\'Azur et Monaco',
  'Vacances en famille pendant les fêtes ou l\'été',
  'Événements privés — mariages, anniversaires, réceptions',
  'Transferts vers Courchevel et les stations alpines en hiver',
];

export default function ChauffeurRussophonePage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Russophone</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé russophone à Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Paris a toujours attiré la clientèle russophone. Shopping sur les Champs-Élysées, expos au Grand Palais, soirées dans les palaces du 8e. Avoir un chauffeur qui parle russe, c\'est pouvoir dire exactement où vous voulez aller, demander un détour par la rue de la Paix, ou changer de programme à la dernière minute — sans que ça devienne compliqué. Nos chauffeurs russophones connaissent Paris par coeur et sont dispo jour et nuit.')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Réserver maintenant
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
          <h2 className="heading">Ce qu'on fait, en russe</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Aéroport, shopping, soirées, séjours longue durée.
            Tout en russe, sans prise de tête.
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

      {/* Situations */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pour qui, concrètement</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {situations.map((s) => (
              <div key={s} className="flex items-start gap-3 p-4 rounded-xl bg-warm-50 border border-warm-200">
                <span style={{ color: '#8a7340' }}>✓</span>
                <p className="sf text-sm text-stone-600">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading mb-4">Réservez votre chauffeur russophone</h2>
          <p className="sf text-stone-500 mb-8">
            Dispo 24h/24, 7j/7. Confirmation en moins de 30 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Réserver maintenant
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Services associés</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Chauffeur diplomatique', href: '/chauffeur-diplomatique' },
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Excursion privée', href: '/excursion-privee' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Événements', href: '/evenements' },
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

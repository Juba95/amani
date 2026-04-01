import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Arabophone Paris — Chauffeur Privé Parlant Arabe | Amani Limousines',
  description:
    'Chauffeur privé parlant arabe à Paris. Accueil délégations du Golfe, shopping de luxe, tourisme médical. Communication en arabe. Disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-arabophone',
  },
};

const services = [
  {
    titre: 'Accueil VIP et transferts aéroports',
    texte:
      "Votre avion se pose à Roissy ou au Bourget, et quelqu'un vous attend qui parle arabe. Pas un traducteur, un vrai chauffeur qui connaît Paris et qui sait accueillir comme il faut. Il s'occupe des bagages, coordonne avec votre assistant si besoin, et vous emmène directement à votre hôtel ou résidence. L'accueil est chaleureux, c'est naturel chez nous.",
  },
  {
    titre: 'Journées shopping avenue Montaigne et Vendôme',
    texte:
      "Avenue Montaigne, Faubourg-Saint-Honoré, place Vendôme, Galeries Lafayette... Votre chauffeur connaît toutes ces adresses par coeur. Il sait quand les boutiques ouvrent, où se garer sans perdre de temps, et il peut appeler un personal shopper chez Dior ou Chanel pour annoncer votre arrivée. Vous n'avez qu'à choisir ce qui vous plaît.",
  },
  {
    titre: 'Tourisme médical et rendez-vous spécialisés',
    texte:
      "Beaucoup de familles du Golfe viennent à Paris pour des consultations médicales pointues. Le chauffeur fait les allers-retours entre l'hôtel et la clinique, il connaît les établissements du 16e et du 8e, et il peut servir de relais en arabe avec l'accueil si vous en avez besoin. C'est un souci en moins dans un moment déjà stressant.",
  },
  {
    titre: 'Familles et séjours longue durée',
    texte:
      "Quand une famille arrive pour trois semaines l'été, il faut un chauffeur qui s'adapte. Les enfants veulent Disneyland, madame veut le Bon Marché, monsieur a des rendez-vous dans le 8e. On met à disposition un ou deux chauffeurs arabophones dédiés, qui connaissent vite les habitudes de la famille et s'organisent en fonction.",
  },
];

const situations = [
  'Familles du Golfe en séjour estival à Paris',
  'Journées shopping de luxe — Montaigne, Vendôme, Galeries Lafayette',
  'Consultations médicales dans les cliniques parisiennes du 16e',
  'Investisseurs immobiliers qui visitent des biens dans l\'Ouest parisien',
  'Délégations officielles du Moyen-Orient',
  'Voyages combinés Paris, Côte d\'Azur et Londres',
  'Événements privés — mariages, réceptions dans les palaces',
  'Accompagnement de personnalités lors de salons et conférences',
];

export default function ChauffeurArabophonePage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Arabophone</p>
          <h1 className="heading mt-3">
            Chauffeur privé <em>arabophone</em> à <strong>Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            On reçoit beaucoup de familles et de voyageurs du monde arabe à Paris.
            Ce qu'ils nous disent souvent : le plus important, c'est d'avoir quelqu'un
            qui parle leur langue et qui connaît la ville. Un{' '}
            <strong>chauffeur arabophone</strong>, ça veut dire zéro galère pour
            expliquer où vous allez, ce dont vous avez besoin, ou comment organiser
            la journée. Il connaît les bonnes adresses, il sait comment ça marche
            à Paris, et il est dispo quand vous en avez besoin.
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
          <h2 className="heading">Ce qu'on fait, en arabe</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            De l'atterrissage au dernier trajet, tout se fait dans votre langue.
            Shopping, médical, tourisme — on gère.
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
          <h2 className="heading mb-4">Réservez votre chauffeur arabophone</h2>
          <p className="sf text-stone-500 mb-8">
            Dispo 24h/24, 7j/7. On vous confirme en moins de 30 minutes.
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
              { label: 'Meet & Greet', href: '/meet-and-greet' },
              { label: 'Shopping & luxe', href: '/excursion-privee' },
              { label: 'Longue distance', href: '/longue-distance' },
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

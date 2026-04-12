import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-arabophone';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Arabophone — Chauffeur Privé Parlant Arabe | France & Europe | Amani Limousines',
  description: 'Chauffeur privé parlant arabe, disponible partout en France et en Europe. Accueil délégations du Golfe, shopping de luxe, tourisme médical. Disponible 24h/24.',
  canonical: 'https://www.amani-limousines.com/chauffeur-arabophone',
});

const services = [
  {
    titre: 'Accueil VIP et transferts aéroports',
    texte:
      "Votre avion se pose à Roissy ou au Bourget, et un chauffeur arabophone vous attend. Il prend en charge les bagages, coordonne avec votre assistant si nécessaire, et vous conduit directement à votre hôtel ou résidence. L'accueil se fait avec le protocole et la chaleur qu'attend une clientèle du monde arabe.",
  },
  {
    titre: 'Journées shopping avenue Montaigne et Vendôme',
    texte:
      "Avenue Montaigne, Faubourg-Saint-Honoré, place Vendôme, Galeries Lafayette : le chauffeur maîtrise ces adresses, leurs horaires d'ouverture et les meilleures options de stationnement. Il peut contacter un personal shopper chez Dior ou Chanel pour annoncer votre arrivée et préparer votre visite.",
  },
  {
    titre: 'Tourisme médical et rendez-vous spécialisés',
    texte:
      "De nombreuses familles du Golfe viennent à Paris pour des consultations médicales spécialisées. Le chauffeur assure les transferts entre l'hôtel et les établissements du 16e et du 8e, et peut servir de relais en arabe avec les services d'accueil des cliniques si nécessaire.",
  },
  {
    titre: 'Familles et séjours longue durée',
    texte:
      "Pour un séjour familial de plusieurs semaines, Amani Limousines met à disposition un ou deux chauffeurs arabophones dédiés. Ils s'adaptent rapidement au rythme et aux priorités de chaque famille — Disneyland, Le Bon Marché, rendez-vous dans le 8e — et organisent les journées en conséquence.",
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
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Arabophone</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé arabophone à Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines accueille régulièrement des familles et voyageurs du monde arabe à Paris. Un chauffeur arabophone, c\'est la garantie de communiquer sans intermédiaire : itinéraires, adresses, organisation de la journée — tout se traite directement dans votre langue. Nos chauffeurs maîtrisent les adresses parisiennes incontournables et s\'adaptent aux exigences d\'une clientèle haut de gamme. Disponibles 24h/24, 7j/7.')}
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
          <h2 className="heading">Nos prestations en langue arabe</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            De l'atterrissage au dernier trajet, tout se traite dans votre langue.
            Shopping, tourisme médical, séjours familiaux.
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
          <h2 className="heading">Occasions et clientèle</h2>
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
            Disponible 24h/24, 7j/7. Confirmation de réservation sous 30 minutes.
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

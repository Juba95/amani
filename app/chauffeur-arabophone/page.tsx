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
      "Accueil en arabe dès votre arrivée à Roissy-CDG, Orly ou au terminal d'aviation privée du Bourget. Nos chauffeurs arabophones maîtrisent les codes d'hospitalité et assurent un accueil chaleureux conforme aux usages du Moyen-Orient. Prise en charge des bagages, coordination avec votre assistant personnel et transfert vers votre hôtel ou résidence.",
  },
  {
    titre: 'Shopping et adresses de luxe',
    texte:
      "Paris est une destination incontournable pour le shopping de luxe. Votre chauffeur arabophone vous accompagne avenue Montaigne, rue du Faubourg-Saint-Honoré, place Vendôme et dans les grands magasins. Il connaît les horaires, les accès VIP et peut coordonner vos rendez-vous avec les personal shoppers des maisons de couture.",
  },
  {
    titre: 'Tourisme médical et bien-être',
    texte:
      "De nombreux visiteurs arabophones viennent à Paris pour des consultations médicales spécialisées ou des séjours de bien-être. Votre chauffeur assure les transferts entre l'hôtel, les cliniques et les centres de soins, et peut servir de relais linguistique avec le personnel d'accueil.",
  },
  {
    titre: 'Délégations et séjours prolongés',
    texte:
      "Pour les délégations officielles ou les familles en séjour long, nous mettons à disposition un ou plusieurs chauffeurs arabophones dédiés. Coordination des plannings, gestion des imprévus, flexibilité totale — votre chauffeur s'adapte à votre rythme et à vos besoins.",
  },
];

const situations = [
  'Délégations officielles des pays du Golfe en visite à Paris',
  'Séjours shopping de luxe — avenue Montaigne, Place Vendôme',
  'Tourisme médical : transferts cliniques et hôpitaux parisiens',
  'Familles en séjour estival à Paris et en Île-de-France',
  'Investisseurs immobiliers en tournée de visites',
  'Événements culturels et religieux de la communauté arabophone',
  'Accueil de personnalités lors de salons et conférences internationales',
  'Voyages combinés Paris – Côte d\'Azur – Londres',
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
            Paris accueille chaque année des milliers de visiteurs du monde arabe — délégations
            du Golfe, familles en vacances, investisseurs et patients en tourisme médical.
            Un <strong>chauffeur parlant arabe</strong> facilite chaque étape du séjour,
            du transfert aéroport aux courses dans les maisons de luxe. Nos chauffeurs
            arabophones sont à votre disposition 24h/24 à Paris et partout en France.
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
          <h2 className="heading">Nos services en arabe</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Un accompagnement sur mesure pour la clientèle arabophone,
            du premier contact à l'aéroport jusqu'au dernier transfert.
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
          <h2 className="heading">Situations idéales</h2>
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
            Disponible 24h/24, 7j/7 — confirmation sous 30 minutes.
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

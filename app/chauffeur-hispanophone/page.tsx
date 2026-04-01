import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Hispanophone Paris — Chauffeur Privé Parlant Espagnol | Amani Limousines',
  description:
    'Chauffeur privé parlant espagnol à Paris. Tourisme, affaires, visites diplomatiques. Communication fluide en español. Disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-hispanophone',
  },
};

const services = [
  {
    titre: 'Transferts aéroports avec accueil en espagnol',
    texte:
      "Votre chauffeur hispanophone vous attend à CDG, Orly ou Le Bourget avec un panneau à votre nom. Il vous accueille en espagnol, prend en charge vos bagages et vous briefe sur le trajet jusqu'à votre hôtel. Pour les groupes venant d'Espagne ou d'Amérique latine, nous coordonnons l'arrivée de plusieurs véhicules si nécessaire.",
  },
  {
    titre: 'Accompagnement touristique en espagnol',
    texte:
      "Les visiteurs hispanophones représentent une part importante du tourisme parisien. Nos chauffeurs connaissent les incontournables comme les adresses moins connues, et peuvent échanger avec vous en espagnol sur l'histoire des quartiers, les meilleures tables et les événements en cours. Un vrai compagnon de voyage, pas un simple conducteur.",
  },
  {
    titre: 'Rendez-vous professionnels et diplomatiques',
    texte:
      "Pour les entreprises espagnoles et latino-américaines implantées à Paris ou en visite, nos chauffeurs hispaniques facilitent la logistique des journées de rendez-vous. Ils connaissent les sièges sociaux des grands groupes, les institutions européennes et les ambassades d'Amérique latine à Paris.",
  },
  {
    titre: 'Mise à disposition pour groupes et délégations',
    texte:
      "Qu'il s'agisse d'une délégation commerciale mexicaine, d'un groupe de touristes argentins ou d'une équipe espagnole en déplacement, nous organisons un dispositif complet avec plusieurs véhicules et chauffeurs hispanophones. Coordination centralisée et communication en espagnol tout au long du séjour.",
  },
];

const situations = [
  'Groupes touristiques hispanophones en visite à Paris',
  'Délégations commerciales d\'Espagne et d\'Amérique latine',
  'Visites diplomatiques — ambassades d\'Amérique latine à Paris',
  'Congrès et salons avec participation hispanophone importante',
  'Séjours culturels : musées, spectacles, gastronomie française',
  'Transferts entre Paris et les régions viticoles (Bordeaux, Champagne)',
  'Événements sportifs : Roland-Garros, Coupe du monde de rugby',
];

export default function ChauffeurHispanophonePage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Hispanophone</p>
          <h1 className="heading mt-3">
            Chauffeur privé <em>hispanophone</em> à <strong>Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            L'espagnol est la deuxième langue la plus parlée au monde, et les visiteurs
            hispanophones affluent à Paris depuis l'Espagne, le Mexique, la Colombie,
            l'Argentine et bien d'autres pays. Un{' '}
            <strong>chauffeur parlant espagnol</strong> rend chaque déplacement plus simple
            et plus agréable — de la première prise en charge à l'aéroport jusqu'au
            dernier transfert. Nos chauffeurs hispanophones sont disponibles 24h/24.
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
          <h2 className="heading">Nos services en espagnol</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Un service de transport haut de gamme entièrement en espagnol,
            adapté aux voyageurs d'affaires comme aux touristes.
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
          <h2 className="heading mb-4">Réservez votre chauffeur hispanophone</h2>
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
              { label: 'Excursion privée', href: '/excursion-privee' },
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
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

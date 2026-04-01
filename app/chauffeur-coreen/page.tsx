import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Coréen Paris — Chauffeur Privé Parlant Coréen | Amani Limousines',
  description:
    'Chauffeur privé parlant coréen à Paris. K-beauty, mode, tourisme, événements corporate. Communication en coréen. Disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-coreen',
  },
};

const services = [
  {
    titre: 'Transferts aéroport avec accueil en coréen',
    texte:
      "Votre chauffeur coréanophone vous attend à CDG avec un panneau à votre nom, en caractères coréens et latins. Il vous accueille dans votre langue, prend en charge vos bagages et vous conduit à votre hôtel en vous informant sur les conditions de circulation. Un accueil soigné qui donne le ton pour l'ensemble de votre séjour à Paris.",
  },
  {
    titre: 'Mode, beauté et shopping à Paris',
    texte:
      "La Corée du Sud est à la pointe de la beauté et de la mode, et Paris est la capitale qui complète naturellement cet univers. Nos chauffeurs coréanophones connaissent les concept stores, les boutiques de créateurs du Marais, les pharmacies parisiennes prisées pour les soins dermatologiques, et les flagships des grandes maisons de luxe.",
  },
  {
    titre: 'Événements corporate et Tech',
    texte:
      "Samsung, LG, Hyundai, Kia — les grands groupes coréens sont très présents en France. Nos chauffeurs parlant coréen accompagnent les cadres et dirigeants coréens lors de leurs déplacements professionnels à Paris : rendez-vous au siège, visites de sites, salons comme VivaTech ou le CES européen.",
  },
  {
    titre: 'Tourisme et excursions en coréen',
    texte:
      "Les touristes coréens adorent Paris et ses environs : la Tour Eiffel, Versailles, Giverny, la Champagne. Votre chauffeur coréanophone organise des circuits à la journée et vous fait découvrir la France dans votre langue, avec des recommandations adaptées aux goûts de la clientèle coréenne.",
  },
];

const situations = [
  'Séjours shopping et K-beauty dans les quartiers parisiens tendance',
  'Tourisme culturel : musées, monuments et galeries d\'art',
  'Événements corporate pour les grandes entreprises coréennes',
  'Groupes touristiques coréens en circuit Paris – Provence – Côte d\'Azur',
  'Paris Fashion Week et défilés de mode',
  'Visites de vignobles et dégustations en Champagne ou à Bordeaux',
  'Transferts pour étudiants coréens et familles en visite universitaire',
  'Accueil de créateurs et influenceurs coréens lors d\'événements mode',
];

export default function ChauffeurCoreenPage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Coréen</p>
          <h1 className="heading mt-3">
            Chauffeur privé parlant <em>coréen</em> à <strong>Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            La Corée du Sud et la France partagent une passion commune pour la mode,
            la gastronomie et l'art de vivre. Les visiteurs coréens à Paris — qu'ils
            soient touristes, professionnels ou créateurs — méritent un{' '}
            <strong>chauffeur parlant coréen</strong> qui comprend leurs attentes et
            leur culture. Nos chauffeurs coréanophones sont disponibles 24h/24 pour
            rendre votre séjour parisien fluide et agréable.
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
          <h2 className="heading">Nos services en coréen</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Un accompagnement premium en coréen pour les voyageurs exigeants,
            du transfert aéroport aux excursions hors de Paris.
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
          <h2 className="heading mb-4">Réservez votre chauffeur parlant coréen</h2>
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
              { label: 'Fashion Week', href: '/chauffeur-fashion-week' },
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Excursion privée', href: '/excursion-privee' },
              { label: 'Meet & Greet', href: '/meet-and-greet' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
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

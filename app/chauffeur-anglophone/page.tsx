import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Anglophone Paris — Chauffeur Privé Parlant Anglais | Amani Limousines',
  description:
    'Chauffeur privé parlant anglais à Paris. Transferts aéroports, rendez-vous d\'affaires, tourisme de luxe. Communication fluide en anglais. Disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-anglophone',
  },
};

const services = [
  {
    titre: 'Transferts aéroports avec accueil en anglais',
    texte:
      "Accueil personnalisé à CDG, Orly ou Le Bourget avec un chauffeur parfaitement anglophone. Panneau nominatif, assistance bagages, briefing sur le trajet et les conditions de circulation — tout se fait dans votre langue. Idéal pour les voyageurs d'affaires internationaux qui atterrissent à Paris sans parler français.",
  },
  {
    titre: 'Rendez-vous d\'affaires et événements corporate',
    texte:
      "Votre chauffeur anglophone connaît les quartiers d'affaires parisiens — La Défense, Opéra, Saint-Lazare — et peut coordonner un programme de rendez-vous sur la journée. Il communique avec vos interlocuteurs, gère les imprévus et vous tient informé en anglais de l'état du trafic et des délais.",
  },
  {
    titre: 'Tourisme et découverte de Paris',
    texte:
      "Pour les visiteurs anglophones souhaitant découvrir Paris au-delà des circuits classiques, nos chauffeurs connaissent l'histoire des quartiers, les bonnes adresses et les itinéraires les plus agréables. Ils peuvent recommander des restaurants, des galeries et des expériences authentiques — en anglais, naturellement.",
  },
  {
    titre: 'Mise à disposition longue durée',
    texte:
      "Pour les séjours prolongés, les tournées de conférences ou les délégations en visite, nous proposons un chauffeur anglophone dédié à la journée ou à la semaine. Un interlocuteur unique qui connaît vos habitudes, vos horaires et vos préférences.",
  },
];

const situations = [
  'Voyages d\'affaires avec planning serré de rendez-vous à Paris',
  'Séjour touristique de luxe pour visiteurs américains ou britanniques',
  'Congrès et salons internationaux (OECD, UNESCO, Paris Expo)',
  'Transferts entre aéroports et hôtels pour clientèle corporate',
  'Road-shows investisseurs et tournées de présentations',
  'Séminaires d\'entreprise et team-building en Île-de-France',
  'Accueil de cadres dirigeants en déplacement depuis Londres ou New York',
];

export default function ChauffeurAnglophonePage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Anglophone</p>
          <h1 className="heading mt-3">
            Chauffeur privé <em>anglophone</em> à <strong>Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Paris reste la première destination européenne pour les voyageurs anglophones,
            qu'ils viennent pour affaires ou pour le plaisir. Avoir un{' '}
            <strong>chauffeur parlant couramment anglais</strong> supprime la barrière
            linguistique et transforme chaque trajet en moment productif ou agréable.
            Nos chauffeurs anglophones sont disponibles 24h/24 pour tous vos déplacements
            à Paris et en Île-de-France.
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
          <h2 className="heading">Nos services en anglais</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            De l'accueil à l'aéroport à la mise à disposition sur plusieurs jours,
            chaque prestation est assurée par un chauffeur maîtrisant parfaitement l'anglais.
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
          <h2 className="heading mb-4">Réservez votre chauffeur anglophone</h2>
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

import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Japonais Paris — Chauffeur Privé Parlant Japonais | Amani Limousines',
  description:
    'Chauffeur privé parlant japonais à Paris. Haute couture, restaurants étoilés, affaires. Communication en japonais. Disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-japonais',
  },
};

const services = [
  {
    titre: 'Accueil aéroport aux standards japonais',
    texte:
      "Nos chauffeurs japonophones vous accueillent à CDG ou Orly avec la courtoisie et l'attention au détail que vous attendez. Panneau nominatif, salut approprié, prise en charge immédiate des bagages, véhicule impeccable avec eau fraîche et serviettes rafraîchissantes. Chaque détail compte, et nous le savons.",
  },
  {
    titre: 'Haute couture et maisons de luxe',
    texte:
      "Les visiteurs japonais entretiennent une relation privilégiée avec la haute couture parisienne. Votre chauffeur japonophone vous conduit aux défilés, aux showrooms privés et aux boutiques historiques des grandes maisons — Chanel, Hermès, Louis Vuitton, Dior. Il connaît les adresses, les horaires et peut coordonner vos rendez-vous en japonais.",
  },
  {
    titre: 'Gastronomie et restaurants étoilés',
    texte:
      "Paris et Tokyo partagent le plus grand nombre de restaurants étoilés au monde. Nos chauffeurs parlant japonais connaissent les tables les plus prisées — des trois étoiles classiques aux bistronomies d'avant-garde — et peuvent vous y conduire en vous donnant le contexte nécessaire sur le chef et la carte.",
  },
  {
    titre: 'Voyages d\'affaires et déplacements corporate',
    texte:
      "Les entreprises japonaises implantées en France — automobile, électronique, finance — ont besoin de chauffeurs fiables et ponctuels pour leurs cadres en déplacement. Nos chauffeurs japonophones comprennent les codes professionnels japonais : ponctualité absolue, discrétion, anticipation des besoins.",
  },
];

const situations = [
  'Haute couture : défilés, showrooms privés et ateliers parisiens',
  'Gastronomie : parcours des restaurants étoilés Michelin de Paris',
  'Voyages d\'affaires pour cadres et dirigeants japonais',
  'Tourisme culturel : impressionnisme à Giverny, Versailles, Louvre',
  'Lune de miel et séjours romantiques à Paris',
  'Salons professionnels : Maison & Objet, Paris Photo, SIAL',
  'Excursions viticoles en Bourgogne et en Champagne',
  'Accueil de délégations officielles japonaises',
];

export default function ChauffeurJaponaisPage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Japonais</p>
          <h1 className="heading mt-3">
            Chauffeur privé parlant <em>japonais</em> à <strong>Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Les Japonais qui visitent Paris recherchent l'excellence dans chaque détail —
            et le transport n'échappe pas à cette exigence. Un{' '}
            <strong>chauffeur parlant japonais</strong> offre bien plus qu'une simple
            traduction : il comprend les codes culturels, anticipe les besoins et assure
            un service irréprochable. Nos chauffeurs japonophones sont disponibles 24h/24
            pour accompagner votre séjour à Paris et en France.
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
          <h2 className="heading">Nos services en japonais</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Un service de transport pensé pour la clientèle japonaise,
            avec l'attention au détail et la ponctualité que vous exigez.
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
          <h2 className="heading mb-4">Réservez votre chauffeur parlant japonais</h2>
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
              { label: 'Chauffeur diplomatique', href: '/chauffeur-diplomatique' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Meet & Greet', href: '/meet-and-greet' },
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

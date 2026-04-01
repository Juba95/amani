import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Mandarin Paris — Chauffeur Privé Parlant Chinois | Amani Limousines',
  description:
    'Chauffeur privé parlant mandarin à Paris. Shopping de luxe, tourisme en groupe, délégations d\'affaires chinoises. Communication en chinois. Disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-mandarin',
  },
};

const services = [
  {
    titre: 'Accueil aéroport et transferts en mandarin',
    texte:
      "Nos chauffeurs sinophones vous accueillent à CDG ou Orly avec un panneau en caractères chinois et latins. Ils parlent mandarin couramment et connaissent les attentes spécifiques de la clientèle chinoise : ponctualité, discrétion, température du véhicule, bouteilles d'eau à bord. Un accueil pensé pour que vous vous sentiez chez vous dès l'atterrissage.",
  },
  {
    titre: 'Shopping de luxe accompagné',
    texte:
      "Paris est la capitale mondiale du luxe, et les visiteurs chinois y viennent pour les grandes maisons : Louis Vuitton, Hermès, Chanel, Dior. Votre chauffeur sinophone connaît les boutiques, les horaires de détaxe, les galeries Lafayette et le Printemps Haussmann. Il vous accompagne d'adresse en adresse et peut communiquer avec les vendeurs si besoin.",
  },
  {
    titre: 'Délégations d\'affaires et investisseurs',
    texte:
      "Les investisseurs et dirigeants chinois en déplacement à Paris ont besoin d'un transport fiable et d'un interlocuteur qui comprend leur langue et leurs usages professionnels. Nos chauffeurs sinophones assurent les transferts entre rendez-vous, sièges sociaux, cabinets d'avocats et banques, avec une parfaite maîtrise du mandarin des affaires.",
  },
  {
    titre: 'Circuits touristiques sur mesure',
    texte:
      "Versailles, les châteaux de la Loire, la Champagne, le Mont-Saint-Michel — nos chauffeurs parlant mandarin peuvent organiser des excursions à la journée ou sur plusieurs jours. Ils connaissent les sites les plus appréciés par la clientèle chinoise et peuvent adapter l'itinéraire à vos centres d'intérêt.",
  },
];

const situations = [
  'Shopping de luxe — Champs-Élysées, Montaigne, Faubourg-Saint-Honoré',
  'Groupes touristiques chinois en circuit Paris et régions',
  'Délégations d\'affaires et investisseurs en provenance de Chine',
  'Étudiants et familles en visite d\'universités parisiennes',
  'Tourisme viticole en Champagne et à Bordeaux',
  'Salons professionnels : Vinexpo, Maison & Objet, Paris Fashion Week',
  'Transferts entre Paris et les outlets (La Vallée Village)',
  'Accueil de personnalités chinoises lors d\'événements officiels',
];

export default function ChauffeurMandarinPage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Mandarin</p>
          <h1 className="heading mt-3">
            Chauffeur privé parlant <em>mandarin</em> à <strong>Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            La clientèle chinoise est devenue incontournable à Paris, que ce soit pour
            le tourisme de luxe, les affaires ou les investissements. Un{' '}
            <strong>chauffeur parlant mandarin</strong> fait toute la différence : il comprend
            vos besoins, connaît les adresses qui comptent et assure une communication
            sans faille dans votre langue. Nos chauffeurs sinophones sont à votre
            disposition 24h/24 à Paris et dans toute la France.
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
          <h2 className="heading">Nos services en mandarin</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Un accompagnement complet en mandarin, du transfert aéroport
            aux excursions en dehors de Paris.
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
          <h2 className="heading mb-4">Réservez votre chauffeur parlant mandarin</h2>
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
              { label: 'Excursion privée', href: '/excursion-privee' },
              { label: 'Meet & Greet', href: '/meet-and-greet' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Fashion Week', href: '/chauffeur-fashion-week' },
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

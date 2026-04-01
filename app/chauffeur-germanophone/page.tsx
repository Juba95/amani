import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Germanophone Paris — Chauffeur Privé Parlant Allemand | Amani Limousines',
  description:
    'Chauffeur privé parlant allemand à Paris. Industrie automobile, conventions professionnelles, tourisme. Communication en allemand. Disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-germanophone',
  },
};

const services = [
  {
    titre: 'Transferts aéroports et gares',
    texte:
      "Accueil en allemand à CDG, Orly ou à la Gare de l'Est — point d'arrivée des ICE et Thalys depuis Francfort, Munich et Cologne. Nos chauffeurs germanophones assurent une prise en charge ponctuelle et professionnelle, avec un niveau de service qui correspond aux standards attendus par la clientèle d'affaires allemande.",
  },
  {
    titre: 'Déplacements professionnels et industriels',
    texte:
      "L'Allemagne est le premier partenaire commercial de la France. Nos chauffeurs germanophones accompagnent les cadres et dirigeants allemands lors de leurs rendez-vous à Paris — sièges sociaux, cabinets de conseil, salons professionnels comme le Mondial de l'Auto ou Equip Auto. Ils comprennent le vocabulaire des affaires et assurent une communication fluide.",
  },
  {
    titre: 'Tourisme culturel en allemand',
    texte:
      "Les visiteurs germanophones apprécient la richesse culturelle de Paris. Votre chauffeur peut vous orienter vers les expositions du moment, les quartiers historiques et les adresses gastronomiques. Il échange avec vous en allemand sur l'histoire et l'architecture des lieux traversés, rendant chaque trajet informatif.",
  },
  {
    titre: 'Mise à disposition pour conventions et salons',
    texte:
      "Pour les grandes conventions professionnelles réunissant des participants germanophones — salons de l'industrie, congrès médicaux, forums économiques franco-allemands — nous déployons une flotte de véhicules avec chauffeurs parlant allemand. Organisation centralisée, ponctualité irréprochable.",
  },
];

const situations = [
  'Cadres de l\'industrie automobile en déplacement à Paris',
  'Conventions et salons professionnels franco-allemands',
  'Tourisme culturel pour visiteurs d\'Allemagne, d\'Autriche et de Suisse',
  'Réunions d\'affaires dans les quartiers financiers de Paris',
  'Transferts Gare de l\'Est pour arrivées en ICE depuis Francfort',
  'Délégations industrielles visitant les sites de production en Île-de-France',
  'Séjours gastronomiques et oenotouristiques en Champagne',
];

export default function ChauffeurGermanophonePage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Germanophone</p>
          <h1 className="heading mt-3">
            Chauffeur privé <em>germanophone</em> à <strong>Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Les échanges franco-allemands sont au coeur de l'économie européenne, et Paris
            reçoit en permanence des visiteurs germanophones pour affaires ou tourisme.
            Un <strong>chauffeur parlant allemand</strong> garantit une communication directe
            et efficace, sans malentendu, à chaque étape de votre séjour.
            Nos chauffeurs germanophones sont disponibles 24h/24 à Paris et en région.
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
          <h2 className="heading">Nos services en allemand</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Un transport premium pensé pour la clientèle germanophone,
            avec la rigueur et la ponctualité que vous attendez.
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
          <h2 className="heading mb-4">Réservez votre chauffeur germanophone</h2>
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
              { label: 'Événements sportifs', href: '/chauffeur-evenements-sportifs' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Excursion privée', href: '/excursion-privee' },
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

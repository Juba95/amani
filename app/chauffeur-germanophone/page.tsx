import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-germanophone';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Germanophone — Chauffeur Privé Parlant Allemand | France & Europe | Amani Limousines',
  description: 'Chauffeur privé parlant allemand, disponible partout en France et en Europe. Industrie automobile, conventions professionnelles, tourisme. Disponible 24h/24.',
  canonical: 'https://www.amani-limousines.com/chauffeur-germanophone',
});

const services = [
  {
    titre: 'Transferts gares et aéroports',
    texte:
      "Arrivée à CDG depuis Munich ou descente de l'ICE Gare de l'Est depuis Francfort : le chauffeur est présent à l'heure convenue, véhicule prêt. La prise en charge s'effectue rapidement, en allemand, pour un transfert direct vers votre destination sans délai.",
  },
  {
    titre: 'Déplacements business et salons industriels',
    texte:
      "La France et l'Allemagne entretiennent des liens économiques étroits. Nos chauffeurs accompagnent régulièrement des cadres de grandes entreprises industrielles entre La Défense, Villepinte et les quartiers d'affaires parisiens. Ils s'expriment en allemand et adaptent le planning en temps réel selon l'évolution de vos rendez-vous.",
  },
  {
    titre: 'Tourisme pour visiteurs germanophones',
    texte:
      "Pour les visiteurs d'Allemagne, d'Autriche ou de Suisse, le chauffeur assure des transferts culturels dans Paris et ses environs — Grand Palais, Versailles, Champagne. Il connaît les itinéraires, anticipe les contraintes de circulation et communique en allemand tout au long du séjour.",
  },
  {
    titre: 'Conventions et forums franco-allemands',
    texte:
      "Lors des grands salons à Paris-Nord Villepinte ou des forums économiques franco-allemands, plusieurs véhicules avec chauffeurs germanophones sont déployés. Chaque chauffeur dispose de son planning précis, des adresses de dépôt et de récupération, pour une coordination sans faille.",
  },
];

const situations = [
  'Ingénieurs et cadres de l\'industrie automobile en déplacement à Paris',
  'Salons industriels à Villepinte — Mondial de l\'Auto, Equip Auto, JEC World',
  'Visiteurs d\'Allemagne, d\'Autriche ou de Suisse en séjour culturel',
  'Arrivées en ICE Gare de l\'Est depuis Francfort, Stuttgart ou Cologne',
  'Délégations industrielles visitant des usines en Île-de-France',
  'Forums économiques franco-allemands et rendez-vous à la CCI',
  'Week-ends gastronomiques et excursions en Champagne depuis Paris',
];

export default function ChauffeurGermanophonePage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Germanophone</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé germanophone à Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines met à disposition des chauffeurs privés germanophones à Paris pour les professionnels et visiteurs venus d\'Allemagne, d\'Autriche ou de Suisse. Ponctualité, maîtrise du réseau parisien et communication en allemand sans approximation : chaque déplacement est géré avec la rigueur qu\'attend une clientèle germanophone exigeante. Service disponible 24h/24, dans toute l\'Île-de-France.')}
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
          <h2 className="heading">Nos prestations en langue allemande</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Gares, aéroports, salons professionnels, tourisme.
            En allemand, avec la ponctualité et l'efficacité attendues.
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
          <h2 className="heading mb-4">Réservez votre chauffeur germanophone</h2>
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

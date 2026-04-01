import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-germanophone';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Germanophone Paris — Chauffeur Privé Parlant Allemand | Amani Limousines',
  description: 'Chauffeur privé parlant allemand à Paris. Industrie automobile, conventions professionnelles, tourisme. Communication en allemand. Disponible 24h/24.',
  canonical: 'https://www.amani-limousines.com/chauffeur-germanophone',
});

const services = [
  {
    titre: 'Transferts gares et aéroports',
    texte:
      "Vous descendez de l'ICE Gare de l'Est après trois heures depuis Francfort, ou vous atterrissez à CDG depuis Munich. Le chauffeur est là, à l'heure, il parle allemand, et il ne va pas vous faire attendre dix minutes pendant qu'il cherche où il s'est garé. Prise en charge rapide, pas de bavardage inutile, et un trajet direct vers votre destination.",
  },
  {
    titre: 'Déplacements business et salons industriels',
    texte:
      "La France et l'Allemagne, c'est le duo économique de l'Europe. On transporte régulièrement des ingénieurs de chez BMW ou Siemens qui enchaînent les rendez-vous entre La Défense et le parc des expos de Villepinte. Le chauffeur parle allemand, comprend quand vous dites que le rendez-vous de 14h est passé à 14h30, et ajuste le planning en conséquence.",
  },
  {
    titre: 'Tourisme pour visiteurs germanophones',
    texte:
      "Les Allemands, les Autrichiens, les Suisses alémaniques — ils aiment Paris mais ils aiment aussi qu'on soit carré. Votre chauffeur connaît les expos du moment au Grand Palais, le meilleur itinéraire pour éviter les bouchons autour de l'Opéra, et deux ou trois bistrots où la cuisine vaut le détour. En allemand, sans tourner autour du pot.",
  },
  {
    titre: 'Conventions et forums franco-allemands',
    texte:
      "Quand il y a un grand salon à Paris-Nord Villepinte ou un forum économique franco-allemand, on déploie plusieurs voitures avec des chauffeurs germanophones. Chacun a son planning, chacun sait où déposer et récupérer ses passagers. C'est de la logistique, et on aime bien ça.",
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
            {c('intro', 'On va être direct : si vous venez d\'Allemagne, d\'Autriche ou de Suisse pour bosser à Paris, vous avez besoin d\'un chauffeur ponctuel, qui parle allemand, et qui ne perd pas votre temps. C\'est exactement ce qu\'on propose. Un chauffeur germanophone qui connaît le périph, les gares, les quartiers d\'affaires, et qui communique dans votre langue sans approximation. Dispo 24h/24, partout en Île-de-France.')}
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
          <h2 className="heading">Ce qu'on fait, en allemand</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Gare, aéroport, salons pro, tourisme. Ponctuel, efficace,
            et en allemand du début à la fin.
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
          <h2 className="heading mb-4">Réservez votre chauffeur germanophone</h2>
          <p className="sf text-stone-500 mb-8">
            Dispo 24h/24, 7j/7. Confirmation en moins de 30 minutes.
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

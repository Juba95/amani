import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-japonais';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Japonais Paris — Chauffeur Privé Parlant Japonais | Amani Limousines',
  description: 'Chauffeur privé parlant japonais à Paris. Haute couture, restaurants étoilés, affaires. Communication en japonais. Disponible 24h/24.',
  canonical: 'https://www.amani-limousines.com/chauffeur-japonais',
});

const services = [
  {
    titre: 'Accueil aéroport à la japonaise',
    texte:
      "On sait que pour un voyageur japonais, les détails comptent. Le chauffeur est là cinq minutes en avance, le véhicule est impeccable, il y a de l'eau fraîche à bord. Il vous accueille en japonais, s'incline comme il faut, et prend vos bagages sans qu'on ait besoin de demander. Le trajet jusqu'à l'hôtel se fait dans le calme, sauf si vous avez envie de discuter.",
  },
  {
    titre: 'Haute couture et ateliers parisiens',
    texte:
      "Les Japonais ont un rapport unique avec la mode parisienne. Le chauffeur connaît les ateliers de la rue Cambon chez Chanel, les showrooms privés de Saint-Germain, les boutiques Hermès du Faubourg. Il vous y conduit, vous dépose devant la porte, et revient vous chercher quand vous avez fini. En japonais, pas de quiproquo sur l'heure ou l'adresse.",
  },
  {
    titre: 'Restaurants étoilés et gastronomie',
    texte:
      "Paris et Tokyo se disputent le titre de capitale mondiale de la gastronomie. Le chauffeur connaît les adresses — le Guy Savoy à la Monnaie de Paris, le Cinq au George V, les bistronomies cachées du 11e. Il vous y amène pile à l'heure de la réservation, parce qu'arriver en retard dans un trois-étoiles, c'est pas le genre de la maison.",
  },
  {
    titre: 'Déplacements d\'affaires pour cadres japonais',
    texte:
      "Toyota, Sony, Mitsubishi, les banques japonaises — beaucoup ont des bureaux à Paris. Quand un dirigeant arrive de Tokyo pour une semaine de rendez-vous, le chauffeur est là chaque matin à l'heure convenue. Il parle japonais, comprend que la ponctualité n'est pas une option, et connaît le quartier de l'Opéra — le Little Tokyo parisien — comme sa poche.",
  },
];

const situations = [
  'Haute couture — défilés, ateliers et showrooms du Triangle d\'Or',
  'Parcours gastronomique des étoilés Michelin parisiens',
  'Cadres et dirigeants japonais en déplacement d\'affaires',
  'Quartier Opéra et ses adresses japonaises — restos, librairies, épiceries',
  'Lune de miel à Paris pour couples japonais',
  'Salons pro — Maison & Objet, Paris Photo, SIAL',
  'Excursions à Giverny, Versailles et en Bourgogne',
  'Délégations officielles et accueil protocolaire',
];

export default function ChauffeurJaponaisPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Japonais</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé parlant japonais à Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Quand un voyageur japonais arrive à Paris, il s\'attend à un certain niveau de service. On le sait. C\'est pour ça qu\'on a des chauffeurs qui parlent japonais et qui connaissent les codes : la ponctualité à la minute, la propreté du véhicule, la discrétion. Pas de blabla inutile, pas de retard, pas d\'à-peu-près. Le chauffeur est là quand il faut, où il faut, et il parle votre langue. Dispo 24h/24, tous les jours.')}
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
          <h2 className="heading">Ce qu'on fait, en japonais</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Accueil aéroport, haute couture, gastronomie, affaires.
            Toujours en japonais, toujours à l'heure.
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
          <h2 className="heading mb-4">Réservez votre chauffeur parlant japonais</h2>
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

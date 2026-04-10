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
      "Le chauffeur se présente à l'avance, véhicule préparé, eau fraîche à bord. L'accueil se fait en japonais, avec le protocole attendu. Les bagages sont pris en charge sans qu'il soit nécessaire de le demander. Le trajet vers l'hôtel s'effectue dans le calme, selon vos préférences.",
  },
  {
    titre: 'Haute couture et ateliers parisiens',
    texte:
      "Nos chauffeurs connaissent les adresses incontournables de la mode parisienne : rue Cambon, Saint-Germain, Faubourg Saint-Honoré. Ils assurent vos transferts entre maisons de couture et showrooms, vous déposent à l'entrée et reviennent à l'heure convenue. Les échanges en japonais évitent tout malentendu sur les horaires ou les adresses.",
  },
  {
    titre: 'Restaurants étoilés et gastronomie',
    texte:
      "Le chauffeur connaît les tables de référence à Paris : Guy Savoy, Le Cinq au George V, les meilleures adresses du 11e. Il vous y conduit à l'heure exacte de votre réservation. En matière de gastronomie étoilée, la ponctualité est aussi importante que le repas lui-même.",
  },
  {
    titre: 'Déplacements d\'affaires pour cadres japonais',
    texte:
      "Les grandes entreprises japonaises — Toyota, Sony, Mitsubishi — disposent de bureaux à Paris. Pour les dirigeants en déplacement, le chauffeur assure les transferts quotidiens à l'heure fixée, avec la rigueur qu'impose un agenda chargé. Il maîtrise le quartier de l'Opéra, centre de la communauté japonaise à Paris, et communique directement en japonais.",
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
            {c('intro', 'Amani Limousines propose un service de chauffeur privé en langue japonaise à Paris. Nos chauffeurs maîtrisent les codes d\'hospitalité japonais : ponctualité rigoureuse, tenue irréprochable, véhicule soigné et discrétion absolue. Chaque prise en charge est organisée avec le soin qu\'attendrait une clientèle venue de Tokyo. Service disponible 24h/24, 7j/7.')}
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
          <h2 className="heading">Nos prestations en langue japonaise</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Aéroports, haute couture, gastronomie, déplacements d'affaires.
            En japonais, avec la rigueur qui s'impose.
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
          <h2 className="heading mb-4">Réservez votre chauffeur parlant japonais</h2>
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

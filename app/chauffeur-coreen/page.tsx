import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-coreen';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Coréen Paris — Chauffeur Privé Parlant Coréen | Amani Limousines',
  description: 'Chauffeur privé parlant coréen à Paris. K-beauty, mode, tourisme, événements corporate. Communication en coréen. Disponible 24h/24.',
  canonical: 'https://www.amani-limousines.com/chauffeur-coreen',
});

const services = [
  {
    titre: 'Accueil aéroport en coréen',
    texte:
      "Le panneau d'accueil est en hangeul et en français. Le chauffeur vous accueille en coréen, prend en charge vos bagages et vous conduit à votre hôtel. Dès votre arrivée à Paris, vous êtes pris en charge dans votre langue, sans intermédiaire.",
  },
  {
    titre: 'Mode, beauté et shopping parisien',
    texte:
      "Paris et la Corée partagent une passion commune pour la mode et la beauté. Le chauffeur connaît les concept stores du Marais, les pharmacies du 6e reconnues pour leurs soins dermato, les flagships Chanel et Dior avenue Montaigne et l'espace K-beauty des Galeries Lafayette Haussmann. Il assure les dépôts et récupérations avec précision.",
  },
  {
    titre: 'Déplacements corporate — Samsung, LG, Hyundai',
    texte:
      "Les grands groupes coréens disposent de bureaux à travers la France. Pour un directeur de Samsung ou un ingénieur de Hyundai en déplacement d'une semaine, le chauffeur assure les transferts quotidiens, connaît les sièges de La Défense et les centres R&D en région parisienne, et communique directement en coréen.",
  },
  {
    titre: 'Tourisme et excursions en coréen',
    texte:
      "Tour Eiffel, Versailles, Giverny, Champagne : le chauffeur organise les journées, sélectionne les itinéraires et commente les sites en coréen. Un accompagnement personnalisé qui rend tout audioguide superflu.",
  },
];

const situations = [
  'Acheteurs mode coréens pendant la Fashion Week de Paris',
  'Parcours K-beauty et pharmacies parisiennes tendance du 6e',
  'Cadres de Samsung, LG ou Hyundai en déplacement professionnel',
  'Touristes coréens en circuit Paris, Provence et Côte d\'Azur',
  'Influenceurs et créateurs coréens en événements mode à Paris',
  'Dégustations en Champagne ou à Bordeaux pour amateurs de vin',
  'Étudiants coréens et familles en visite d\'universités parisiennes',
  'Groupes en excursion à Versailles, Giverny ou au Mont-Saint-Michel',
];

export default function ChauffeurCoreenPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Coréen</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé parlant coréen à Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines propose un service de chauffeur privé en langue coréenne à Paris. Acheteurs mode, touristes, cadres de grandes entreprises : la clientèle coréenne à Paris est diverse et exigeante. Un chauffeur parlant coréen garantit des échanges directs et sans approximation, pour un séjour organisé avec précision. Service disponible 24h/24, 7j/7.')}
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
          <h2 className="heading">Nos prestations en langue coréenne</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Aéroports, shopping, déplacements d'affaires, excursions.
            En coréen, du premier au dernier trajet.
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
          <h2 className="heading mb-4">Réservez votre chauffeur parlant coréen</h2>
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

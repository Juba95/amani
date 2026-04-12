import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-mandarin';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Mandarin — Chauffeur Privé Parlant Chinois | France & Europe | Amani Limousines',
  description: 'Chauffeur privé parlant mandarin, disponible partout en France et en Europe. Shopping de luxe, tourisme en groupe, délégations d\'affaires chinoises. Disponible 24h/24.',
  canonical: 'https://www.amani-limousines.com/chauffeur-mandarin',
});

const services = [
  {
    titre: 'Accueil aéroport en mandarin',
    texte:
      "Le panneau est en chinois et en français. Le chauffeur parle mandarin, le véhicule est préparé. Après un long vol depuis Shanghai ou Pékin, ces attentions changent l'expérience de l'arrivée. Les bagages sont pris en charge et le trajet s'organise dans les meilleures conditions.",
  },
  {
    titre: 'Shopping luxe — Faubourg-Saint-Honoré, Printemps, Galeries Lafayette',
    texte:
      "Paris est une destination de référence pour le shopping de luxe. Louis Vuitton sur les Champs, Hermès rue du Faubourg, Chanel au Printemps Haussmann : le chauffeur maîtrise ces adresses et leurs accès. Il peut contacter en mandarin les équipes des boutiques pour préparer votre visite.",
  },
  {
    titre: 'Délégations d\'affaires et investisseurs',
    texte:
      "Nos chauffeurs accompagnent régulièrement des dirigeants et investisseurs chinois lors de journées chargées à Paris — cabinets du 8e, visites de locaux, déjeuners d'affaires. Communication en mandarin, maîtrise des itinéraires et ponctualité garantie à chaque rendez-vous.",
  },
  {
    titre: 'Excursions — Versailles, Champagne, châteaux de la Loire',
    texte:
      "Versailles en une demi-journée, une virée en Champagne avec dégustation, les châteaux de la Loire sur deux jours. Le chauffeur organise le circuit, il parle mandarin pour vous raconter ce qu'il y a à voir, et il adapte le programme si vous voulez rester plus longtemps quelque part ou changer de plan.",
  },
];

const situations = [
  'Shopping de luxe — Champs-Élysées, Faubourg-Saint-Honoré, Printemps Haussmann',
  'Groupes touristiques chinois en circuit Paris et régions',
  'Investisseurs et dirigeants en rendez-vous d\'affaires à Paris',
  'Familles en visite d\'universités — Sciences Po, Sorbonne, HEC',
  'Journées vignobles en Champagne ou à Bordeaux',
  'Salons pro — Vinexpo, Maison & Objet, Fashion Week',
  'Transferts vers La Vallée Village pour le shopping outlet',
  'Accueil de personnalités chinoises lors d\'événements officiels',
];

export default function ChauffeurMandarinPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Mandarin</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé parlant mandarin à Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines met à disposition des chauffeurs privés parlant mandarin à Paris. Shopping de luxe, délégations d\'affaires, tourisme culturel ou excursions en région : chaque déplacement est organisé en tenant compte des attentes d\'une clientèle exigeante. Nos chauffeurs connaissent les adresses prisées de la clientèle chinoise à Paris et communiquent directement en mandarin. Disponibles 24h/24, à Paris et en province.')}
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
          <h2 className="heading">Nos prestations en langue mandarine</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Aéroports, shopping, déplacements d'affaires, excursions en région —
            en mandarin, du premier au dernier trajet.
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
          <h2 className="heading mb-4">Réservez votre chauffeur parlant mandarin</h2>
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

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
    titre: 'Accueil aéroport en mandarin',
    texte:
      "Le panneau est en chinois et en français. Le chauffeur parle mandarin. Il y a de l'eau dans la voiture et la clim est réglée. Ça a l'air basique dit comme ça, mais quand vous débarquez à CDG après douze heures de vol depuis Shanghai ou Pékin, ces détails font toute la différence. On s'occupe des valises, on gère le trajet, et vous pouvez souffler.",
  },
  {
    titre: 'Shopping luxe — Faubourg-Saint-Honoré, Printemps, Galeries Lafayette',
    texte:
      "Soyons honnêtes : beaucoup de visiteurs chinois viennent à Paris pour le shopping. Louis Vuitton sur les Champs, Hermès rue du Faubourg, le corner Chanel au Printemps Haussmann... Le chauffeur connaît toutes ces adresses, il sait où déposer et récupérer sans perdre de temps, et il peut même passer un coup de fil en mandarin au vendeur pour préparer votre visite.",
  },
  {
    titre: 'Délégations d\'affaires et investisseurs',
    texte:
      "On transporte régulièrement des dirigeants et investisseurs chinois qui ont des journées chargées à Paris — rendez-vous dans des cabinets d'avocats du 8e, visites de locaux commerciaux, déjeuners d'affaires. Le chauffeur parle mandarin, il comprend le contexte professionnel, et il ne vous fera pas arriver en retard à cause d'un mauvais itinéraire.",
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
            Paris attire énormément de visiteurs chinois, et on le voit tous les jours.
            Le problème, c'est que la barrière de la langue peut vite devenir un vrai
            casse-tête ici. Avec un{' '}
            <strong>chauffeur qui parle mandarin</strong>, tout se simplifie. Il connaît
            les adresses que la clientèle chinoise aime, il sait comment fonctionne
            Paris, et il parle votre langue. Nos chauffeurs sinophones sont dispo
            24h/24, à Paris comme en province.
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
          <h2 className="heading">Ce qu'on fait, en mandarin</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Aéroport, shopping, business, excursions hors de Paris —
            tout se fait en mandarin, du premier au dernier trajet.
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
          <h2 className="heading mb-4">Réservez votre chauffeur parlant mandarin</h2>
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

import type { Metadata } from 'next';
import Link from 'next/link';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Plan du site — Amani Limousines | Chauffeur privé Paris',
  description:
    'Plan du site Amani Limousines. Retrouvez toutes les pages : services, transferts aéroports, destinations, événements et informations.',
  alternates: { canonical: 'https://www.amani-limousines.com/plan-du-site' },
};

interface SitemapSection {
  title: string;
  links: { label: string; href: string }[];
}

const sections: SitemapSection[] = [
  {
    title: 'Pages principales',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Notre flotte', href: '/notre-flotte' },
      { label: 'Nous contacter', href: '/contact' },
      { label: 'À propos', href: '/a-propos' },
      { label: 'Devis en ligne', href: '/devis' },
      { label: 'Réservation', href: '/reservation' },
      { label: 'Mentions légales', href: '/mentions-legales' },
    ],
  },
  {
    title: 'Nos services',
    links: [
      { label: 'Transfert privé', href: '/transfert-prive' },
      { label: 'Mise à disposition', href: '/mise-a-disposition' },
      { label: 'Meet and Greet', href: '/meet-and-greet' },
      { label: 'Convoi & délégations', href: '/convoi-delegations' },
      { label: 'Sécurité rapprochée', href: '/securite-rapprochee' },
      { label: 'Garde du corps', href: '/garde-du-corps' },
      { label: 'Excursion privée', href: '/excursion-privee' },
      { label: 'Longue distance', href: '/longue-distance' },
      { label: 'Taxi moto', href: '/taxi-moto' },
      { label: 'Chauffeur diplomatique', href: '/chauffeur-diplomatique' },
    ],
  },
  {
    title: 'Transferts aéroports',
    links: [
      { label: 'Transfert aéroport CDG', href: '/transfert-aeroport-cdg' },
      { label: 'Transfert aéroport Orly', href: '/transfert-aeroport-orly' },
      { label: 'Transfert Le Bourget', href: '/transfert-le-bourget' },
      { label: 'Transfert aéroport Beauvais', href: '/transfert-aeroport-beauvais' },
      { label: 'Transfert aéroport économique', href: '/transfert-aeroport-economique' },
      { label: 'CDG → Paris', href: '/transfert-cdg-paris' },
      { label: 'CDG → La Défense', href: '/transfert-cdg-la-defense' },
      { label: 'CDG → Versailles', href: '/transfert-cdg-versailles' },
      { label: 'CDG → Disneyland', href: '/transfert-cdg-disneyland' },
      { label: 'CDG → Gare du Nord', href: '/transfert-cdg-gare-du-nord' },
      { label: 'CDG → Gare de Lyon', href: '/transfert-cdg-gare-de-lyon' },
      { label: 'CDG → Hôtel Ritz', href: '/transfert-cdg-hotel-ritz' },
      { label: 'CDG → Hôtel George V', href: '/transfert-cdg-hotel-george-v' },
      { label: 'CDG → Hôtel Bristol', href: '/transfert-cdg-hotel-bristol' },
      { label: 'Orly → Paris', href: '/transfert-orly-paris' },
      { label: 'Transfert hôtel de luxe Paris', href: '/transfert-hotel-luxe-paris' },
    ],
  },
  {
    title: 'Chauffeur privé — Destinations',
    links: [
      { label: 'Chauffeur privé Paris', href: '/chauffeur-prive-paris' },
      { label: 'Chauffeur privé Bordeaux', href: '/chauffeur-prive-bordeaux' },
      { label: 'Chauffeur privé Lyon', href: '/chauffeur-prive-lyon' },
      { label: 'Chauffeur privé Nice', href: '/chauffeur-prive-nice' },
      { label: 'Chauffeur privé Cannes', href: '/chauffeur-prive-cannes' },
      { label: 'Chauffeur privé Monaco', href: '/chauffeur-prive-monaco' },
      { label: 'Chauffeur privé Marseille', href: '/chauffeur-prive-marseille' },
      { label: 'Chauffeur privé Saint-Tropez', href: '/chauffeur-prive-saint-tropez' },
      { label: 'Chauffeur privé Deauville', href: '/chauffeur-prive-deauville' },
      { label: 'Chauffeur privé Chamonix', href: '/chauffeur-prive-chamonix' },
      { label: 'Chauffeur privé Megève', href: '/chauffeur-prive-megeve' },
      { label: 'Chauffeur privé Haute-Savoie', href: '/chauffeur-prive-haute-savoie' },
    ],
  },
  {
    title: 'Mariages & occasions',
    links: [
      { label: 'Chauffeur mariage', href: '/chauffeur-mariage' },
      { label: 'Chauffeur mariage Paris', href: '/chauffeur-mariage-paris' },
    ],
  },
  {
    title: 'Événements',
    links: [
      { label: 'Événements', href: '/evenements' },
      { label: 'Paris Fashion Week', href: '/evenements/paris-fashion-week' },
      { label: 'Chauffeur Fashion Week', href: '/chauffeur-fashion-week' },
      { label: 'Paris Air Show', href: '/evenements/paris-air-show' },
      { label: 'Roland Garros', href: '/evenements/roland-garros' },
      { label: 'Festival de Cannes', href: '/evenements/festival-de-cannes' },
      { label: 'Grand Prix de Monaco', href: '/evenements/grand-prix-monaco' },
      { label: 'Hippodrome de Deauville', href: '/evenements/hippodrome-deauville' },
      { label: 'Salons professionnels', href: '/evenements/salons-professionnels' },
      { label: 'Événements sportifs', href: '/chauffeur-evenements-sportifs' },
    ],
  },
  {
    title: 'English pages',
    links: [
      { label: 'Private chauffeur Paris', href: '/en/private-chauffeur-paris' },
      { label: 'Private chauffeur Bordeaux', href: '/en/private-chauffeur-bordeaux' },
      { label: 'CDG airport transfer', href: '/en/cdg-airport-transfer' },
      { label: 'Orly airport transfer', href: '/en/orly-airport-transfer' },
      { label: 'Bordeaux airport transfer', href: '/en/bordeaux-airport-transfer' },
      { label: 'Lyon airport transfer', href: '/en/lyon-airport-transfer' },
      { label: 'Marseille airport transfer', href: '/en/marseille-airport-transfer' },
      { label: 'Economical airport transfer', href: '/en/economical-airport-transfer' },
      { label: 'Hourly hire', href: '/en/hourly-hire' },
      { label: 'Meet & Greet', href: '/en/meet-and-greet' },
      { label: 'Delegation transport', href: '/en/delegation-transport' },
      { label: 'Close protection', href: '/en/close-protection' },
      { label: 'Private excursion', href: '/en/private-excursion' },
      { label: 'Long distance', href: '/en/long-distance' },
      { label: 'Chamonix chauffeur', href: '/en/chamonix-chauffeur' },
      { label: 'Megève chauffeur', href: '/en/megeve-chauffeur' },
      { label: 'Haute-Savoie chauffeur', href: '/en/haute-savoie-chauffeur' },
      { label: 'Our fleet', href: '/en/our-fleet' },
      { label: 'Events', href: '/en/events' },
      { label: 'Contact', href: '/en/contact' },
    ],
  },
];

export default function PlanDuSitePage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-12 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Navigation</p>
          <h1 className="heading mt-3">Plan du site</h1>
          <p className="sf text-stone-500 mt-4 text-sm">
            Retrouvez l'ensemble des pages du site Amani Limousines.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-lg text-gray-900 mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="sf text-sm text-stone-600 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SEOLayout>
  );
}

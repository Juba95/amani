import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Russophone Paris — Chauffeur Privé Parlant Russe | Amani Limousines',
  description:
    'Chauffeur privé parlant russe à Paris. Tourisme de luxe, shopping, événements mondains. Communication en russe. Disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-russophone',
  },
};

const services = [
  {
    titre: 'Transferts aéroport et accueil en russe',
    texte:
      "Accueil personnalisé en russe à CDG, Orly ou au terminal d'aviation privée du Bourget. Votre chauffeur russophone vous attend avec un panneau nominatif, prend en charge vos bagages et vous conduit à votre destination dans un véhicule premium. Communication fluide en russe du début à la fin du trajet.",
  },
  {
    titre: 'Shopping de luxe et adresses exclusives',
    texte:
      "Paris est une destination de choix pour le shopping haut de gamme. Votre chauffeur russophone connaît les boutiques de la rue du Faubourg-Saint-Honoré, l'avenue Montaigne, la Place Vendôme et les joailliers de la rue de la Paix. Il vous accompagne d'adresse en adresse, gère le stationnement et peut coordonner avec les personal shoppers.",
  },
  {
    titre: 'Événements mondains et soirées',
    texte:
      "Galas, premières à l'Opéra Garnier, vernissages, soirées privées dans les hôtels particuliers du 8e — la vie mondaine parisienne attire une clientèle russophone exigeante. Votre chauffeur assure les arrivées et départs avec ponctualité et élégance, et reste joignable en russe tout au long de la soirée.",
  },
  {
    titre: 'Séjours prolongés et mise à disposition',
    texte:
      "Pour les séjours de plusieurs jours ou semaines, nous mettons à disposition un chauffeur russophone dédié qui s'adapte à votre rythme. Visites de biens immobiliers, rendez-vous médicaux, sorties culturelles, excursions hors de Paris — un seul interlocuteur qui parle votre langue et connaît vos préférences.",
  },
];

const situations = [
  'Tourisme de luxe et découverte de Paris en toute sérénité',
  'Shopping haut de gamme — joaillerie, haute couture, maroquinerie',
  'Soirées et événements mondains à Paris',
  'Séjours immobiliers : visites d\'appartements et résidences',
  'Tourisme médical et rendez-vous dans les cliniques parisiennes',
  'Excursions vers la Côte d\'Azur, Courchevel et les stations alpines',
  'Transferts pour événements privés : mariages, anniversaires',
  'Accompagnement de familles en vacances scolaires à Paris',
];

export default function ChauffeurRussophonePage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Russophone</p>
          <h1 className="heading mt-3">
            Chauffeur privé <em>russophone</em> à <strong>Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Paris exerce une fascination durable sur la clientèle russophone, qu'il
            s'agisse de tourisme de luxe, de shopping ou d'événements mondains.
            Un <strong>chauffeur parlant russe</strong> vous permet de profiter pleinement
            de votre séjour sans barrière linguistique — il connaît les adresses,
            les usages et la ville sur le bout des doigts. Nos chauffeurs russophones
            sont à votre service 24h/24 à Paris et dans toute la France.
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
          <h2 className="heading">Nos services en russe</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Un service de transport sur mesure pour la clientèle russophone,
            alliant luxe, discrétion et communication dans votre langue.
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
          <h2 className="heading mb-4">Réservez votre chauffeur russophone</h2>
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
              { label: 'Excursion privée', href: '/excursion-privee' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Événements', href: '/evenements' },
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

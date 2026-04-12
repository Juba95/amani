import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-anglophone';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Anglophone — Chauffeur Privé Parlant Anglais | France & Europe | Amani Limousines',
  description: 'Chauffeur privé parlant anglais, disponible partout en France et en Europe. Transferts aéroports, rendez-vous d\'affaires, tourisme de luxe. Disponible 24h/24.',
  canonical: 'https://www.amani-limousines.com/chauffeur-anglophone',
});

const services = [
  {
    titre: 'Transferts aéroports avec accueil en anglais',
    texte:
      "Arrivée à CDG depuis New York, Londres ou Singapour : le chauffeur attend à la sortie, panneau nominatif, prise en charge des bagages immédiate. Il vous informe du temps de trajet estimé jusqu'à votre hôtel et des conditions de circulation. Tout se passe en anglais, sans effort de votre côté.",
  },
  {
    titre: 'Rendez-vous d\'affaires entre La Défense et le 8e',
    texte:
      "Trois meetings dans la journée — La Défense, boulevard Haussmann, rue de Rivoli. Le chauffeur connaît les itinéraires, anticipe les contraintes de circulation et vous prévient en anglais lorsqu'il convient de partir pour respecter les horaires. Aucun malentendu sur le planning.",
  },
  {
    titre: 'Visiter Paris sans la barrière de la langue',
    texte:
      "Montmartre le matin, Saint-Germain pour déjeuner, le Marais l'après-midi. Le chauffeur connaît les adresses que les guides ne mentionnent pas — place Dauphine, passage des Panoramas, quais de Seine rive gauche. Il les partage en anglais et adapte le parcours selon vos préférences.",
  },
  {
    titre: 'Mise à disposition sur plusieurs jours',
    texte:
      "Pour un séjour d'une semaine, une série de conférences ou une délégation venue de New York, Amani vous attribue un chauffeur dédié. Il s'adapte rapidement à vos habitudes et préférences, assurant une continuité de service tout au long du séjour.",
  },
];

const situations = [
  'Banquiers de la City ou de Wall Street avec un agenda serré à Paris',
  'Touristes américains ou britanniques en séjour au Ritz, au Bristol ou au Meurice',
  'Conférences tech et salons pro — VivaTech, OECD, UNESCO',
  'Road-shows investisseurs entre Paris, Londres et Francfort',
  'Cadres dirigeants en déplacement depuis New York ou Singapour',
  'Séminaires et team-building en Île-de-France pour équipes internationales',
  'Familles anglophones en vacances qui veulent voir plus que la Tour Eiffel',
];

export default function ChauffeurAnglophonePage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Anglophone</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé anglophone à Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines met à disposition des chauffeurs privés anglophones à Paris pour les voyageurs d\'affaires et de loisirs venus des pays anglophones. Communication fluide en anglais, connaissance approfondie de la capitale et discrétion absolue : chaque déplacement s\'effectue avec la clarté et l\'efficacité qu\'attend une clientèle internationale exigeante. Service disponible 24h/24, 7j/7.')}
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
          <h2 className="heading">Nos prestations en langue anglaise</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Aéroports, rendez-vous d'affaires, tourisme, mise à disposition longue durée —
            en anglais, du premier échange au dernier trajet.
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
          <h2 className="heading mb-4">Réservez votre chauffeur anglophone</h2>
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
              { label: 'Meet & Greet', href: '/meet-and-greet' },
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

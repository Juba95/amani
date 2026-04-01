import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'meet-and-greet';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Meet and Greet Paris — Accueil VIP Aéroport CDG & Orly | Amani Limousines',
  description: 'Service Meet and Greet à Paris. Accueil avec pancarte nominative, assistance bagages, Fast Track CDG et Orly. Transfert VIP depuis les salles d\'arrivée.',
  canonical: 'https://www.amani-limousines.com/meet-and-greet',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/meet-and-greet',
      'x-default': 'https://www.amani-limousines.com/meet-and-greet',
    },
  },
});

export default function MeetAndGreetPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Accueil VIP aéroport</p>
          <h1 className="heading mt-3">
            {c('h1', 'Service Meet and Greet Paris — l\'accueil qui fait la différence')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Le service Meet and Greet à Paris comble l\'espace entre la sortie de l\'avion et l\'intérieur du véhicule. Un assistant dédié vous attend en zone d\'arrivée — après la douane — avec une pancarte à votre nom, prend en charge vos bagages et vous conduit directement au véhicule sans que vous ayez à chercher votre chauffeur dans une foule de dizaines de pancartes.')}
          </p>
        </div>
      </section>

      {/* Détail du service */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Ce que comprend le Meet & Greet</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {[
              {
                titre: 'Accueil nominatif',
                desc: 'L\'assistant est positionné après les portiques de douane avec une pancarte au nom de votre passager, visible dès la sortie du couloir d\'arrivée.',
              },
              {
                titre: 'Assistance bagages',
                desc: 'Prise en charge des bagages dès la sortie du tapis roulant. L\'assistant porte ou accompagne les valises jusqu\'au véhicule.',
              },
              {
                titre: 'Liaison vers le véhicule',
                desc: 'Accompagnement jusqu\'à la Mercedes ou au van VIP stationné dans la zone réservée la plus proche du terminal.',
              },
              {
                titre: 'Option Fast Track',
                desc: 'À CDG et Orly, une option Fast Track permet de traverser les contrôles de sécurité en file prioritaire lors des départs — utile pour les passagers avec peu de temps.',
              },
            ].map((item) => (
              <div key={item.titre} className="card">
                <p className="sf font-semibold text-gray-900">{item.titre}</p>
                <p className="sf text-stone-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pour qui ce service est-il fait ?</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le <strong>Meet and Greet aéroport Paris</strong> est particulièrement apprécié des
            clients des grands palaces parisiens qui souhaitent que leurs hôtes soient pris en
            charge dès la sortie de l'avion, des agences de voyage haut de gamme qui gèrent des
            voyages sur mesure, des familles avec enfants ou personnes âgées pour qui l'aéroport
            peut être déstabilisant, et des délégations officielles dont le temps est compté entre
            chaque rendez-vous protocolaire.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Ce service est disponible à Charles de Gaulle (tous terminaux), Orly (terminaux 1 à 4)
            et au Bourget. À CDG, il est possible de positionner l'assistant dans l'espace "attente"
            côté arrivées internationales, entre la sortie douane et le hall public.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

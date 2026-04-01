import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'transfert-cdg-versailles';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Transfert CDG Versailles — Chauffeur Privé Charles de Gaulle Versailles | Amani',
  description: 'Transfert entre l\'aéroport CDG et Versailles avec chauffeur privé. 55 km, 55 minutes. Château de Versailles, Trianon, hôtels. Prix fixe tout compris.',
  canonical: 'https://www.amani-limousines.com/transfert-cdg-versailles',
});

export default function TransfertCDGVersaillesPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">CDG ↔ Versailles</p>
          <h1 className="heading mt-3">
            {c('h1', 'Transfert CDG Versailles avec chauffeur privé — 55 km, sans changement')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Versailles attire chaque année des millions de visiteurs internationaux qui arrivent majoritairement à Charles de Gaulle. En transports en commun, le trajet CDG–Versailles implique au moins deux correspondances et plus d\'une heure trente. Avec un chauffeur privé CDG Versailles, vous êtes devant le Château en 55 minutes environ, directement depuis le terminal, sans rupture de charge.')}
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Tarifs et informations</h2>
            <div className="mt-6 space-y-3">
              {[
                { label: 'Distance', val: '55 km environ' },
                { label: 'Durée estimée', val: '50–65 min' },
                { label: 'Classe E / Classe V', val: 'à partir de 155 €' },
                { label: 'Classe S / BMW i7', val: 'à partir de 230 €' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between items-center py-2 border-b border-warm-200">
                  <span className="sf text-sm text-stone-500">{r.label}</span>
                  <span className="sf font-medium text-sm text-gray-700">{r.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading">Destinations à Versailles</h2>
            <p className="sf text-stone-600 mt-4 text-sm leading-relaxed">
              Château de Versailles (Entrée principale, Grille d'Honneur), Grand Trianon,
              Petit Trianon, Hameau de la Reine, hôtels de Versailles (Le Trianon Palace,
              Airelles Château de Versailles), jardins, Potager du Roi, Salle du Jeu de Paume.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Visites privées et événements au Château</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Versailles accueille régulièrement des événements corporates, des dîners de gala
            et des visites privées hors ouverture au public. Pour ces occasions, le besoin de
            transport est souvent important : navettes depuis Paris et les hôtels de la région,
            convois pour les délégations, retours tardifs après les dîners de prestige.
            Notre équipe peut organiser l'ensemble de la logistique transport autour de votre
            événement au Château de Versailles.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Transfert CDG Paris Centre — Chauffeur Privé Charles de Gaulle | Amani',
  description:
    'Transfert entre l\'aéroport CDG et Paris centre avec chauffeur privé. 32 km, 45 minutes. Prix fixe à partir de 125 €. Suivi de vol, disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/transfert-cdg-paris',
  },
};

export default function TransfertCDGParisPage() {
  return (
    <SEOLayout>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">CDG ↔ Paris Centre</p>
          <h1 className="heading mt-3">
            <strong>Transfert CDG Paris</strong> avec chauffeur privé —{' '}
            <em>32 km, prix fixe</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Le trajet entre l'aéroport Charles de Gaulle et Paris intra-muros est l'un des
            plus empruntés d'Île-de-France. 32 kilomètres séparent le Terminal 2E de Notre-Dame
            de Paris. En conditions normales, comptez 40 à 50 minutes. Avec un{' '}
            <strong>chauffeur privé CDG Paris</strong> Amani, le prix est fixé à l'avance
            et ne varie pas selon la durée réelle du trajet.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Tarifs CDG → Paris Centre</h2>
            <div className="mt-6 space-y-3">
              {[
                { v: 'Classe E (3 pax)', p: '125 €' },
                { v: 'Classe S (3 pax)', p: '225 €' },
                { v: 'Classe V (7 pax)', p: '125 €' },
                { v: 'BMW i7 (3 pax)', p: '250 €' },
                { v: 'Sprinter VIP (16 pax)', p: 'Sur devis' },
              ].map((r) => (
                <div key={r.v} className="flex justify-between items-center py-2 border-b border-warm-200">
                  <span className="sf text-sm text-gray-700">{r.v}</span>
                  <span className="sf font-semibold text-sm" style={{ color: '#8a7340' }}>{r.p}</span>
                </div>
              ))}
            </div>
            <p className="sf text-xs text-stone-400 mt-3">Prix tout compris, péages inclus</p>
          </div>
          <div>
            <h2 className="heading">Informations pratiques</h2>
            <div className="mt-6 space-y-4">
              {[
                { label: 'Distance', val: '32 km environ' },
                { label: 'Durée estimée', val: '40–55 min (variable)' },
                { label: 'Attente gratuite', val: '60 min après atterrissage' },
                { label: 'Suivi de vol', val: 'Inclus systématiquement' },
                { label: 'Accueil', val: 'Pancarte nominative' },
              ].map((i) => (
                <div key={i.label} className="flex gap-4">
                  <span className="sf text-xs text-stone-400 w-32 flex-shrink-0 pt-0.5">{i.label}</span>
                  <span className="sf text-sm text-gray-700">{i.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Quartiers desservis depuis CDG</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le tarif CDG–Paris s'applique pour l'ensemble des arrondissements de Paris intra-muros.
            Que vous rejoigniez un hôtel du 8ème, un appartement dans le Marais (4ème),
            un palace du 1er arrondissement ou un domicile dans le 15ème, le prix reste
            identique. Pour les destinations en proche banlieue (Neuilly, Boulogne,
            Vincennes, Saint-Cloud), un tarif spécifique est calculé selon le kilométrage exact.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'transfert-cdg-disneyland';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Transfert CDG Disneyland Paris — Chauffeur Privé Marne-la-Vallée | Amani',
  description: 'Transfert aéroport CDG vers Disneyland Paris avec chauffeur privé. 45 km, 40 minutes. Familles et groupes bienvenus. Mercedes Classe V disponible. Prix fixe.',
  canonical: 'https://www.amani-limousines.com/transfert-cdg-disneyland',
});

export default function TransfertCDGDisneylandPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">CDG ↔ Disneyland Paris</p>
          <h1 className="heading mt-3">
            {c('h1', 'Transfert CDG Disneyland Paris avec chauffeur privé — familles et groupes')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Marne-la-Vallée et Disneyland Paris sont à 45 km de Charles de Gaulle — bien plus proche que Paris intra-muros, et en direction opposée. La Navette officielle Disney Express existe, mais avec des bagages de famille, de jeunes enfants et des horaires décalés, un chauffeur privé CDG Disneyland en Classe V (7 passagers) ou en Sprinter (16 passagers) reste la solution la plus confortable.')}
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Tarifs CDG → Disneyland Paris</h2>
            <div className="mt-6 space-y-3">
              {[
                { label: 'Distance', val: '45 km environ' },
                { label: 'Durée estimée', val: '35–50 min' },
                { label: 'Classe E (3 pax)', val: 'à partir de 125 €' },
                { label: 'Classe V (7 pax)', val: 'à partir de 125 €' },
                { label: 'Sprinter VIP (16 pax)', val: 'à partir de 200 €' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between items-center py-2 border-b border-warm-200">
                  <span className="sf text-sm text-stone-500">{r.label}</span>
                  <span className="sf font-medium text-sm text-gray-700">{r.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading">Hôtels desservis</h2>
            <p className="sf text-stone-600 mt-4 text-sm leading-relaxed">
              Disneyland Hotel, Newport Bay Club, Sequoia Lodge, Hotel New York – The Art of Marvel,
              Santa Fe, Cheyenne, Vienna House Magic Circus, Adagio Marne-la-Vallée, Dream Castle Hotel.
              Livraison à l'entrée principale de l'hôtel, aide aux bagages incluse.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pourquoi choisir la Classe V pour les familles ?</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            La Mercedes Classe V accueille 7 passagers avec leurs bagages dans un confort
            réel. Les sièges peuvent être configurés en face-à-face, et l'espace de chargement
            est suffisamment grand pour des poussettes pliées, des sacs de voyage familiaux
            et les inévitables achats de dernière minute avant le départ. Les sièges
            enfants peuvent être fournis sur demande — à préciser lors de la réservation.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour les groupes de plus de 7 personnes, le Mercedes Sprinter VIP (16 places)
            reste la solution la plus économique par tête, tout en maintenant un niveau
            de confort nettement supérieur aux navettes partagées.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

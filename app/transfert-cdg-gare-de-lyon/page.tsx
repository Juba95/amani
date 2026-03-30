import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Chauffeur Privé CDG Gare de Lyon — Transfert Aéroport Paris | Amani Limousines',
  description:
    'Transfert entre l\'aéroport CDG et la Gare de Lyon avec chauffeur privé. 35 km, 45 min. TGV Lyon, Marseille, Cannes. Prix fixe, disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/transfert-cdg-gare-de-lyon',
  },
};

export default function TransfertCDGGareLyonPage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">CDG ↔ Gare de Lyon · 35 km</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé CDG Gare de Lyon</strong> —{' '}
            <em>TGV Sud, correspondance directe</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            La Gare de Lyon dessert Lyon, Marseille, Montpellier, Cannes, Nice, Genève et
            l'Italie. Depuis CDG, elle est à 35 km — traversant Paris du nord au sud-est.
            Ce trajet est particulièrement utilisé par les voyageurs internationaux qui arrivent
            à Charles de Gaulle et poursuivent vers le sud de la France ou la Côte d'Azur en TGV.
            Un <strong>chauffeur privé CDG Gare de Lyon</strong> rend cette correspondance
            fiable, même avec des bagages importants.
          </p>
        </div>
      </section>

      {/* Trajet */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Durée et itinéraire</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              L'itinéraire standard passe par l'A1, le boulevard Périphérique intérieur
              direction Porte de Bercy, puis descend vers le 12ème arrondissement. En dehors
              des heures de pointe, 40 à 45 minutes suffisent. Aux heures chargées (vendredi
              soir, dimanche soir), l'itinéraire peut passer par les quais de Seine pour éviter
              le périphérique saturé.
            </p>
            <div className="mt-6 space-y-2">
              {[
                { label: 'Distance', val: '35 km environ' },
                { label: 'Durée normale', val: '40–50 min' },
                { label: 'Heure de pointe', val: '55–70 min' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between py-1.5 border-b border-warm-200">
                  <span className="sf text-sm text-stone-500">{r.label}</span>
                  <span className="sf text-sm text-gray-700 font-medium">{r.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading">Tarifs CDG → Gare de Lyon</h2>
            <div className="mt-6 space-y-3">
              {[
                { v: 'Mercedes Classe E (1–3 pax)', p: 'à partir de 125 €' },
                { v: 'Mercedes Classe S (1–3 pax)', p: 'à partir de 165 €' },
                { v: 'Mercedes Classe V (jusqu\'à 7 pax)', p: 'à partir de 130 €' },
              ].map((r) => (
                <div key={r.v} className="flex justify-between items-center py-2 border-b border-warm-200">
                  <span className="sf text-sm text-gray-700">{r.v}</span>
                  <span className="sf font-semibold text-sm" style={{ color: '#8a7340' }}>{r.p}</span>
                </div>
              ))}
            </div>
            <p className="sf text-xs text-stone-400 mt-3">Prix fixe · Péages inclus</p>
          </div>
        </div>
      </section>

      {/* Conseils */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Conseils pour la correspondance CDG → TGV</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Si votre avion arrive à CDG et que vous prenez un TGV à la Gare de Lyon dans les
            heures qui suivent, prévoyez une marge d'au moins 1h30 entre l'heure d'atterrissage
            réelle et le départ du train. Cela tient compte du passage douane, de la récupération
            des bagages, du trajet en voiture et du temps de validation billet à la gare.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Si votre vol accuse un retard qui compromet votre TGV, votre chauffeur peut vous
            recommander l'itinéraire de remplacement — train suivant ou, si la destination
            le justifie, un <strong>transfert longue distance Paris</strong> directement
            jusqu'à Lyon, Marseille ou Cannes.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

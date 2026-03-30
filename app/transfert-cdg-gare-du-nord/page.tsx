import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Chauffeur Privé CDG Gare du Nord — Transfert Aéroport Charles de Gaulle | Amani',
  description:
    'Transfert entre l\'aéroport CDG et la Gare du Nord avec chauffeur privé. 28 km, 35 min. Correspondance Eurostar, Thalys, TGV. Prix fixe à partir de 125 €.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/transfert-cdg-gare-du-nord',
  },
};

export default function TransfertCDGGareNordPage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">CDG ↔ Gare du Nord · 28 km</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé CDG Gare du Nord</strong> —{' '}
            <em>Eurostar, Thalys, correspondances sans stress</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            La Gare du Nord est à 28 km de l'aéroport Charles de Gaulle — le trajet le plus
            court parmi tous les grands nœuds ferroviaires parisiens. En conditions normales,
            comptez 30 à 40 minutes. Pour les voyageurs qui enchaînent un vol international
            et un Eurostar vers Londres, un Thalys vers Bruxelles ou Amsterdam, ou un TGV
            vers Lille, un <strong>chauffeur privé CDG Gare du Nord</strong> supprime le RER B
            avec les valises et garantit l'heure de correspondance.
          </p>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Correspondances ferroviaires depuis CDG</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            La Gare du Nord est le hub des trains à grande vitesse vers le nord de l'Europe.
            L'Eurostar part d'un terminal dédié (Hall 3, niveau -1) — bien différent des quais
            SNCF habituels. Les contrôles de sécurité et de passeport prennent du temps :
            prévoyez 30 à 40 minutes supplémentaires avant le départ si vous prenez l'Eurostar
            depuis CDG en correspondance.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Un <strong>transfert CDG Gare du Nord en berline privée</strong> vous permet d'arriver
            directement dans la bonne zone de la gare, sans chercher les escaliers du RER,
            sans correspondances et avec vos bagages déjà à la main.
          </p>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Tarifs CDG → Gare du Nord</h2>
            <div className="mt-6 space-y-3">
              {[
                { v: 'Mercedes Classe E (1–3 pax)', p: 'à partir de 125 €' },
                { v: 'Mercedes Classe S (1–3 pax)', p: 'à partir de 150 €' },
                { v: 'Mercedes Classe V (jusqu\'à 7 pax)', p: 'à partir de 125 €' },
              ].map((r) => (
                <div key={r.v} className="flex justify-between items-center py-2 border-b border-warm-200">
                  <span className="sf text-sm text-gray-700">{r.v}</span>
                  <span className="sf font-semibold text-sm" style={{ color: '#8a7340' }}>{r.p}</span>
                </div>
              ))}
            </div>
            <p className="sf text-xs text-stone-400 mt-3">Prix fixe · Péages inclus</p>
          </div>
          <div>
            <h2 className="heading">Informations pratiques</h2>
            <div className="mt-6 space-y-2">
              {[
                { label: 'Distance CDG → Gare du Nord', val: '28 km' },
                { label: 'Durée normale', val: '30–40 min' },
                { label: 'Durée heure de pointe', val: '45–60 min' },
                { label: 'Suivi de vol', val: 'Inclus' },
                { label: 'Attente gratuite', val: '60 min après atterrissage' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between py-1.5 border-b border-warm-200 gap-4">
                  <span className="sf text-sm text-stone-500 flex-shrink-0">{r.label}</span>
                  <span className="sf text-sm text-gray-700 font-medium text-right">{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inverse */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Également : Gare du Nord → CDG</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le trajet fonctionne dans les deux sens. Pour les départs matinaux depuis la Gare
            du Nord vers CDG (premier vol à 6h30, par exemple), un départ en voiture à 5h00
            depuis la gare permet d'être au terminal en 35 minutes sans dépendre des premiers
            RER. Le chauffeur attend à l'entrée de la gare à l'heure convenue.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

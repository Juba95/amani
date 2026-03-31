import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Chauffeur Privé CDG Hôtel Le Bristol Paris — Transfert Faubourg Saint-Honoré | Amani',
  description:
    'Transfert CDG vers l\'Hôtel Le Bristol Paris avec chauffeur privé. 30 km, 40–50 min. Mercedes Classe S. Prix fixe tout compris. Suivi de vol, disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/transfert-cdg-hotel-bristol',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transfert CDG — Hôtel Le Bristol Paris',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Aéroport CDG → Rue du Faubourg Saint-Honoré, Paris 8ème',
  offers: [
    { '@type': 'Offer', name: 'Mercedes Classe S — CDG → Bristol', price: '225', priceCurrency: 'EUR' },
  ],
};

export default function TransfertCDGBristolPage() {
  return (
    <SEOLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">CDG → Hôtel Le Bristol Paris · Faubourg Saint-Honoré</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé CDG Hôtel Le Bristol Paris</strong> —{' '}
            <em>Rue du Faubourg, 30 km</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Le Bristol Paris est au 112, rue du Faubourg Saint-Honoré, dans le 8ème. À 30 km de
            Charles de Gaulle, ce trajet prend entre 40 et 50 minutes selon la circulation.
            Le <strong>transfert CDG Le Bristol Paris avec chauffeur privé</strong> est le
            standard que la clientèle de ce palace attend : véhicule haut de gamme, chauffeur
            en tenue, pancarte nominative en zone d'arrivée, bagages pris en charge dès la sortie
            du tapis roulant.
          </p>
        </div>
      </section>

      {/* Trajet */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Infos pratiques</h2>
            <div className="mt-6 space-y-2">
              {[
                { label: 'Distance', val: '30 km environ' },
                { label: 'Durée normale', val: '40–50 min' },
                { label: 'Heure de pointe', val: '55–65 min' },
                { label: 'Itinéraire', val: 'A1 → Périph. → Av. Hoche → Faubourg' },
                { label: 'Suivi de vol', val: 'Inclus' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between py-1.5 border-b border-warm-200 gap-4">
                  <span className="sf text-sm text-stone-500 flex-shrink-0">{r.label}</span>
                  <span className="sf text-sm text-gray-700 font-medium text-right">{r.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading">Tarifs</h2>
            <div className="mt-6 space-y-3">
              {[
                { v: 'Mercedes Classe S', p: '225 €' },
                { v: 'BMW i7', p: '250 €' },
                { v: 'Mercedes Classe E', p: '125 €' },
                { v: 'Classe V (groupe)', p: '125 €' },
              ].map((r) => (
                <div key={r.v} className="flex justify-between items-center py-2 border-b border-warm-200">
                  <span className="sf text-sm text-gray-700">{r.v}</span>
                  <span className="sf font-semibold text-sm" style={{ color: '#8a7340' }}>{r.p}</span>
                </div>
              ))}
            </div>
            <p className="sf text-xs text-stone-400 mt-3">Prix fixes tout compris · Péages inclus</p>
          </div>
        </div>
      </section>

      {/* Contexte */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Le 8ème arrondissement, depuis CDG</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le 8ème arrondissement concentre plusieurs palaces à proximité : Bristol,
            Plaza Athénée, Park Hyatt Vendôme. Pour les déplacements entre l'aéroport CDG
            et ce quartier, l'itinéraire passe généralement par l'avenue Hoche ou l'avenue
            de la Grande Armée selon les conditions de circulation. Votre chauffeur choisit
            le meilleur accès en temps réel.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Si plusieurs hôtes arrivent sur le même vol avec des destinations différentes
            dans le 8ème, nous pouvons coordonner plusieurs véhicules simultanément —
            un pour le Bristol, un autre pour le Plaza Athénée — avec un dispatch centralisé.
          </p>
        </div>
      </section>

      {/* Maillage */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Autres transferts CDG vers les palaces</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { label: 'CDG → Hôtel Ritz Paris', href: '/transfert-cdg-hotel-ritz' },
              { label: 'CDG → Four Seasons George V', href: '/transfert-cdg-hotel-george-v' },
              { label: 'Tous les transferts CDG', href: '/transfert-aeroport-cdg' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="card sf text-sm text-gray-700 hover:text-gray-900">
                {l.label} →
              </a>
            ))}
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

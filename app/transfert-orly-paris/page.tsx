import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Transfert Orly Paris Centre — Chauffeur Privé Aéroport Orly | Amani Limousines',
  description:
    'Transfert entre l\'aéroport Orly et Paris centre avec chauffeur privé. 18 km, 25–35 min. Prix fixe à partir de 80 €. Tous terminaux couverts, disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/transfert-orly-paris',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transfert Orly — Paris Centre',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Aéroport Orly → Paris intra-muros',
  offers: [
    { '@type': 'Offer', name: 'Mercedes Classe E — Orly → Paris', price: '80', priceCurrency: 'EUR' },
  ],
};

export default function TransfertOrlyParisPage() {
  return (
    <SEOLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Orly ↔ Paris Centre</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé Orly Paris</strong> —{' '}
            <em>18 km, le trajet aéroport le plus rapide de la capitale</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Orly est l'aéroport géographiquement le plus proche du cœur de Paris. 18 kilomètres
            séparent Orly 4 de la Place d'Italie — une distance que l'on avale en 25 à 35 minutes
            par l'A6B, hors heures de pointe. Avec un <strong>chauffeur privé Orly Paris centre</strong>,
            vous êtes dans votre hôtel ou votre domicile bien avant que vos bagages aient eu le
            temps de vous peser.
          </p>
        </div>
      </section>

      {/* Avantages Orly */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Orly vs CDG : pourquoi le trajet est différent</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Depuis CDG, la grande majorité des routes vers Paris passent par le nord de la ville,
            via l'A1 ou la N2. Depuis Orly, on entre dans Paris par le sud — 13ème, 14ème,
            15ème — des arrondissements souvent moins embouteillés que les axes nord.
            Pour les hôtels de la rive gauche (Saint-Germain, Luxembourg, Montparnasse,
            Saint-Michel), Orly est souvent plus pratique que CDG, même pour un même nombre
            de kilomètres totaux depuis la province.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le <strong>transfert Orly–Paris</strong> est également apprécié pour les vols
            en fin de soirée : Transavia et easyJet opèrent depuis Orly des départs jusqu'à
            22h30. Votre chauffeur Amani est disponible toute la nuit.
          </p>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Tarifs Orly → Paris Centre (tous arrondissements)</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Mercedes Classe E', detail: '80 € · 1–3 passagers' },
              { name: 'Mercedes Classe S', detail: '96 € · 1–3 passagers' },
              { name: 'Mercedes Classe V', detail: '80 € · jusqu\'à 7 passagers' },
            ].map((v) => (
              <div key={v.name} className="card">
                <p className="heading text-xl">{v.name}</p>
                <p className="sf font-semibold mt-3" style={{ color: '#8a7340' }}>{v.detail}</p>
              </div>
            ))}
          </div>
          <p className="sf text-xs text-stone-400 mt-4">
            Tarif valable pour l'ensemble des arrondissements de Paris intra-muros.
            Pour les destinations en banlieue proche (Boulogne, Vincennes, Neuilly), un tarif
            kilométrique s'applique depuis Orly.
          </p>
        </div>
      </section>

      {/* Quartiers */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Quartiers parisiens desservis depuis Orly</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              { q: 'Rive Gauche (5ème, 6ème, 14ème)', note: '20–28 min · Proche géographiquement, accès fluide' },
              { q: 'Paris Centre (1er, 2ème, 4ème)', note: '28–35 min · Marais, Île de la Cité' },
              { q: '8ème arrondissement', note: '30–40 min · Champs-Élysées, palaces' },
              { q: '16ème / Trocadéro', note: '32–42 min · Résidentiel, ambassades' },
            ].map((q) => (
              <div key={q.q} className="card">
                <p className="sf font-medium text-gray-900">{q.q}</p>
                <p className="sf text-sm text-stone-500 mt-1">{q.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

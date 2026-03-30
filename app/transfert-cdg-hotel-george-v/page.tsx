import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Chauffeur Privé CDG Four Seasons George V — Transfert Aéroport Avenue George V | Amani',
  description:
    'Transfert CDG vers le Four Seasons Hotel George V avec chauffeur privé. 32 km, 45 min. Mercedes Classe S ou BMW i7. Prix fixe, accueil VIP. Réservation 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/transfert-cdg-hotel-george-v',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transfert CDG — Four Seasons Hotel George V Paris',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Aéroport CDG → Avenue George V, Paris 8ème',
  description: 'Transfert avec chauffeur privé entre Charles de Gaulle et le Four Seasons George V.',
  offers: [
    { '@type': 'Offer', name: 'Mercedes Classe S — CDG → George V', price: '225', priceCurrency: 'EUR' },
  ],
};

export default function TransfertCDGGeorgeVPage() {
  return (
    <SEOLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">CDG → Four Seasons George V · 8ème arrondissement</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé CDG Four Seasons George V</strong> —{' '}
            <em>avenue George V, 32 km</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Le Four Seasons Hotel George V est situé au 31, avenue George V, à quelques pas des
            Champs-Élysées. Depuis Charles de Gaulle, le trajet couvre 32 km. Un{' '}
            <strong>chauffeur privé CDG George V Paris</strong> en Classe S ou BMW i7 garantit
            une arrivée en accord avec le niveau du palace — l'entrée principale du George V
            dispose d'un dépose-minute couvert, à l'abri des regards.
          </p>
        </div>
      </section>

      {/* Infos trajet */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Trajet et durée</h2>
            <div className="mt-6 space-y-2">
              {[
                { label: 'Distance', val: '32 km environ' },
                { label: 'Horaires normaux', val: '40–50 min' },
                { label: 'Pointe 17h–20h', val: '55–70 min' },
                { label: 'Itinéraire principal', val: 'A1 → Périph. → Porte Maillot → Av. Georges V' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between py-1.5 border-b border-warm-200 gap-4">
                  <span className="sf text-sm text-stone-500 flex-shrink-0">{r.label}</span>
                  <span className="sf text-sm text-gray-700 font-medium text-right">{r.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading">Tarifs CDG → George V</h2>
            <div className="mt-6 space-y-3">
              {[
                { v: 'Mercedes Classe S', p: '225 €' },
                { v: 'BMW i7', p: '250 €' },
                { v: 'Mercedes Classe E', p: '125 €' },
                { v: 'Mercedes Classe V (jusqu\'à 7 pax)', p: '125 €' },
              ].map((r) => (
                <div key={r.v} className="flex justify-between items-center py-2 border-b border-warm-200">
                  <span className="sf text-sm text-gray-700">{r.v}</span>
                  <span className="sf font-semibold text-sm" style={{ color: '#8a7340' }}>{r.p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service pour les hôtes */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Service coordonné avec la conciergerie</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le Four Seasons George V accueille une clientèle internationale exigeante, souvent
            en transit depuis les grandes capitales mondiales. Lorsque la prise en charge est
            organisée via la conciergerie de l'hôtel, notre chauffeur se synchronise directement
            avec le responsable de cour pour l'heure d'arrivée. Si votre vol atterrit à
            l'heure, votre véhicule est prêt. Si un retard survient, le suivi de vol en temps
            réel ajuste automatiquement le créneau.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour les hôtes qui souhaitent une <strong>mise à disposition chauffeur privé Paris</strong>
            depuis le George V pendant toute la durée de leur séjour, nous pouvons prévoir un
            véhicule et un chauffeur dédié, disponible 24h/24 depuis l'hôtel.
          </p>
        </div>
      </section>

      {/* Maillage */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Autres palaces desservis depuis CDG</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { label: 'CDG → Hôtel Ritz Paris', href: '/transfert-cdg-hotel-ritz' },
              { label: 'CDG → Hôtel Le Bristol', href: '/transfert-cdg-hotel-bristol' },
              { label: 'CDG → Paris Centre', href: '/transfert-cdg-paris' },
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

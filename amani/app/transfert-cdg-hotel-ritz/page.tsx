import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Chauffeur Privé CDG Hôtel Ritz Paris — Transfert Aéroport Place Vendôme | Amani',
  description:
    'Transfert CDG vers l\'Hôtel Ritz Paris (Place Vendôme) avec chauffeur privé. 30 km, 40 min. Mercedes Classe S, accueil VIP, bagagiste à bord. Prix fixe 225 €.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/transfert-cdg-hotel-ritz',
  },
  openGraph: {
    title: 'Chauffeur Privé CDG → Hôtel Ritz Paris | Amani Limousines',
    description: 'Transfert aéroport CDG vers le Ritz Paris. Mercedes Classe S, prix fixe.',
    url: 'https://www.amani-limousines.com/transfert-cdg-hotel-ritz',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transfert CDG — Hôtel Ritz Paris',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Aéroport CDG → Place Vendôme, Paris 1er',
  description: 'Transfert avec chauffeur privé entre l\'aéroport Charles de Gaulle et l\'Hôtel Ritz Paris.',
  offers: [
    { '@type': 'Offer', name: 'Mercedes Classe S — CDG → Ritz', price: '225', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'BMW i7 — CDG → Ritz', price: '250', priceCurrency: 'EUR' },
  ],
};

export default function TransfertCDGRitzPage() {
  return (
    <SEOLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">CDG → Hôtel Ritz Paris · Place Vendôme</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé CDG Hôtel Ritz Paris</strong> —{' '}
            <em>Place Vendôme, 30 km, 40 minutes</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Le Ritz Paris est situé au 15, place Vendôme, dans le 1er arrondissement. Depuis
            l'aéroport Charles de Gaulle, le trajet couvre environ 30 km par l'A1 puis la
            traversée de Paris jusqu'à la Rue de la Paix. Un{' '}
            <strong>chauffeur privé CDG Hôtel Ritz Paris</strong> en Mercedes Classe S ou BMW i7
            est la seule arrivée cohérente avec le niveau du palace. L'entrée principale
            de l'hôtel dispose d'un espace dépose-minute réservé aux véhicules de prestige —
            votre chauffeur le connaît.
          </p>
        </div>
      </section>

      {/* Trajet */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Le trajet CDG — Place Vendôme</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              L'itinéraire standard emprunte l'A1 depuis CDG, puis le périphérique intérieur
              direction Porte Maillot avant de rejoindre les Champs-Élysées et la Rue de Rivoli.
              En cas d'embouteillages sur l'A1 (fréquents entre 17h et 20h), votre chauffeur
              bascule par la Francilienne puis la RN2, ou coupe par Roissy-en-France et
              l'A104 selon les conditions en temps réel.
            </p>
            <div className="mt-6 space-y-2">
              {[
                { label: 'Distance', val: '30 km environ' },
                { label: 'Horaires creux', val: '35–40 min' },
                { label: 'Heures de pointe', val: '50–65 min' },
                { label: 'Attente incluse', val: '60 min après atterrissage' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between py-1.5 border-b border-warm-200">
                  <span className="sf text-sm text-stone-500">{r.label}</span>
                  <span className="sf text-sm text-gray-700 font-medium">{r.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading">Tarifs recommandés</h2>
            <p className="sf text-stone-500 mt-4 text-sm">
              Pour une arrivée au Ritz, nous recommandons la Classe S ou le BMW i7.
              La Classe E reste disponible pour les trajets plus budgétaires.
            </p>
            <div className="mt-6 space-y-3">
              {[
                { v: 'Mercedes Classe S', p: '225 €' },
                { v: 'BMW i7 (électrique)', p: '250 €' },
                { v: 'Mercedes Classe E', p: '125 €' },
                { v: 'Mercedes Classe V (groupe)', p: '125 €' },
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

      {/* Clientèle du Ritz */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Un transfert à la hauteur du palace</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Les clients du Ritz Paris attendent un niveau de service zéro-défaut depuis le
            moment où leur avion touche le sol. Amani Limousines travaille régulièrement avec
            la conciergerie du Ritz pour les prises en charge des hôtes en arrivée. Si votre
            réservation est organisée par la conciergerie de l'hôtel, le chauffeur se coordonne
            directement avec les équipes de réception pour synchroniser l'heure d'arrivée au
            niveau du portail de la Place Vendôme.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour les séjours prolongés, la mise à disposition d'un <strong>chauffeur privé
            Paris</strong> à la journée ou à la semaine peut être organisée depuis l'hôtel.
            Le véhicule reste disponible pour les courses en ville, les visites de galeries,
            les dîners chez Joël Robuchon ou les déplacements vers Versailles.
          </p>
        </div>
      </section>

      {/* Maillage interne */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Autres transferts CDG vers les palaces parisiens</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { label: 'CDG → Four Seasons George V', href: '/transfert-cdg-hotel-george-v' },
              { label: 'CDG → Hôtel Le Bristol', href: '/transfert-cdg-hotel-bristol' },
              { label: 'CDG → Paris Centre', href: '/transfert-cdg-paris' },
            ].map((l) => (
              <a key={l.href} href={l.href}
                className="card text-sm sf text-gray-700 hover:text-gray-900 transition-colors">
                {l.label} →
              </a>
            ))}
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

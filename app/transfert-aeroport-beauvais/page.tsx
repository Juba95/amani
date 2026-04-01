import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Transfert Aéroport Beauvais-Tillé Paris — Chauffeur Privé | Amani Limousines',
  description:
    'Transfert depuis et vers l\'aéroport de Beauvais-Tillé (BVA). Navette privée vers Paris, 85 km en Mercedes. Tarif fixe, suivi des vols, disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/transfert-aeroport-beauvais',
    languages: { en: 'https://www.amani-limousines.com/en/cdg-airport-transfer' },
  },
  openGraph: {
    title: 'Transfert Aéroport Beauvais-Tillé | Amani Limousines',
    description: 'Chauffeur privé depuis Beauvais vers Paris. 85 km, tarif fixe, suivi des vols.',
    url: 'https://www.amani-limousines.com/transfert-aeroport-beauvais',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transfert aéroport Beauvais-Tillé vers Paris',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Aéroport de Beauvais-Tillé, Île-de-France',
  description: 'Service de transfert privé depuis et vers l\'aéroport Beauvais-Tillé. Tarif fixe, suivi de vol, disponibilité 24/7.',
  offers: [
    { '@type': 'Offer', name: 'Mercedes Classe E — Beauvais', price: '120', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes Classe V — Beauvais', price: '140', priceCurrency: 'EUR' },
  ],
};

export default function TransfertAeroportBeauvaisPage() {
  return (
    <SEOLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Transfert aéroport — Beauvais-Tillé (BVA)</p>
          <h1 className="heading mt-3">
            <strong>Transfert aéroport Beauvais-Tillé</strong> —{' '}
            <em>navette privée vers Paris en Mercedes</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            L'aéroport de Beauvais-Tillé est à 85 km au nord de Paris. Les compagnies low-cost — Ryanair en tête — en font un point de départ pour toute l'Île-de-France. Problème : les navettes officielles mettent une heure et demie et ne vont qu'aux portes Maillot ou Persier. Un chauffeur privé depuis Beauvais vous dépose à votre adresse, pas à un arrêt de bus.
          </p>
        </div>
      </section>

      {/* Depuis Beauvais vers Paris */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Depuis Beauvais vers Paris — 85 km, 1h10</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            L'aéroport de Beauvais-Tillé situé à 85 km au nord de Paris. Hors circulation, le trajet prend environ 1 heure 10 minutes jusqu'au centre de Paris. En heure de pointe (7h-9h et 17h-20h), comptez 20 à 30 minutes supplémentaires. Votre chauffeur privé vous dépose directement à votre domicile, votre hôtel ou votre bureau — pas de détour, pas d'arrêt intermédiaire.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le suivi de vol est inclus. Si votre Ryanair atterrit en avance ou accumule du retard, le chauffeur s'adapte et vous êtes informé par SMS. Pas de supplément d'attente dans la limite d'une heure après l'atterrissage effectif, même si vous aviez prévu une heure de plus.
          </p>
        </div>
      </section>

      {/* Depuis Paris vers Beauvais */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Depuis Paris vers Beauvais — prise en charge à domicile</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Prise en charge à votre domicile ou hôtel à l'heure convenue. Le chauffeur arrive 15 minutes en avance pour vérifier les conditions de circulation et les éventuels retards de l'aéroport avant votre départ. Dépose aux départs de Beauvais-Tillé, face aux comptoirs d'enregistrement Ryanair ou des autres compagnies faisant escale à Beauvais.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour les vols matinaux — Ryanair programme parfois des départs à 6h00 — le chauffeur peut être là à 4h30 sans surcharge. Les bagages surdimensionnés de Ryanair sont gérés sans problème : nos Mercedes V-Class offrent assez de place pour les gros cabas de voyage, et nos Classe E coupent bien en manœuvre pour les parkings étroits.
          </p>
        </div>
      </section>

      {/* Destinations accessibles */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Destinations accessibles depuis Beauvais</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            L'aéroport de Beauvais-Tillé accueille environ 30 destinations Ryanair : Barcelone, Dublin, Faro, Marrakech, Porto, Cracovie, Budapest, Prague et bien d'autres. Chaque destination a son calendrier (notamment en été), mais Beauvais reste la porte de sortie la moins chère pour les courts séjours en Europe.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le tarif du chauffeur couvre le trajet complet depuis votre adresse parisienne jusqu'à Beauvais, quelle que soit la destination finale de votre vol. Pas de surcharge « vol international » ni de frais cachés. Vous payez un seul prix pour un trajet Paris–Beauvais, peu importe où Ryanair vous envoie ensuite.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour les groupes ou les familles avec bagages volumineux, la Classe V (7 places) offre plus d'espace. Les petits groupes ou couples trouvent l'E-Class plus économique : une différence souvent minime en partage.
          </p>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Tarifs fixes — Paris ↔ Beauvais</h2>
          <div className="mt-6 space-y-4">
            {[
              { v: 'Mercedes Classe E (1–3 passagers)', p: 'à partir de 120 €' },
              { v: 'Mercedes Classe S (1–3 passagers)', p: 'à partir de 160 €' },
              { v: 'Mercedes Classe V (jusqu\'à 7 passagers)', p: 'à partir de 140 €' },
            ].map((r) => (
              <div key={r.v} className="flex justify-between items-center py-3 border-b border-warm-200">
                <span className="sf text-sm text-gray-700">{r.v}</span>
                <span className="sf font-semibold text-sm" style={{ color: '#8a7340' }}>{r.p}</span>
              </div>
            ))}
          </div>
          <p className="sf text-xs text-stone-400 mt-4">Tous les tarifs incluent péages, carburant et assurance · Pas de frais supplémentaires</p>
        </div>
      </section>

      {/* Comparaison */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Comparaison : navette officielle vs. chauffeur privé</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-warm-300">
                  <th className="sf text-left py-3 pr-4 text-gray-900">Critère</th>
                  <th className="sf text-left py-3 pr-4 text-gray-700">Bus officiel</th>
                  <th className="sf text-left py-3 text-gray-700">Chauffeur privé</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warm-200">
                  <td className="sf py-3 pr-4 text-gray-700">Durée du trajet</td>
                  <td className="sf py-3 pr-4 text-gray-600">1h30</td>
                  <td className="sf py-3 text-gray-600">1h10 (hors pic)</td>
                </tr>
                <tr className="border-b border-warm-200">
                  <td className="sf py-3 pr-4 text-gray-700">Point de dépose</td>
                  <td className="sf py-3 pr-4 text-gray-600">Porte Maillot, Persier</td>
                  <td className="sf py-3 text-gray-600">Votre adresse</td>
                </tr>
                <tr className="border-b border-warm-200">
                  <td className="sf py-3 pr-4 text-gray-700">Tarif par personne</td>
                  <td className="sf py-3 pr-4 text-gray-600">~18 € / pers.</td>
                  <td className="sf py-3 text-gray-600">120 € le véhicule</td>
                </tr>
                <tr className="border-b border-warm-200">
                  <td className="sf py-3 pr-4 text-gray-700">Pour 2 personnes</td>
                  <td className="sf py-3 pr-4 text-gray-600">36 € total</td>
                  <td className="sf py-3 text-gray-600">120 € total (60 €/pers.)</td>
                </tr>
                <tr>
                  <td className="sf py-3 pr-4 text-gray-700">Pour 3 personnes</td>
                  <td className="sf py-3 pr-4 text-gray-600">54 € total</td>
                  <td className="sf py-3 text-gray-600">120 € total (40 €/pers.)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="sf text-stone-600 mt-6 leading-relaxed">
            Pour les passagers isolés ou les couples, la navette officielle reste moins chère. Mais dès que vous êtes trois (famille, collègues, amis), le chauffeur privé coûte moins cher par personne et vous épargne un trajet supplémentaire jusqu'à Porte Maillot. Et vous n'êtes jamais en attente : le chauffeur arrive à l'heure prévue, réadaptée en temps réel selon votre atterrissage.
          </p>
        </div>
      </section>

      {/* CTA Links */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Autres transferts aéroport et services</h2>
          <div className="mt-6 space-y-3">
            <p className="sf text-stone-600">
              <a href="/transfert-aeroport-cdg" className="font-medium hover:underline" style={{ color: '#8a7340' }}>
                Transfert aéroport CDG →
              </a>
            </p>
            <p className="sf text-stone-600">
              <a href="/transfert-aeroport-orly" className="font-medium hover:underline" style={{ color: '#8a7340' }}>
                Transfert aéroport Orly →
              </a>
            </p>
            <p className="sf text-stone-600">
              <a href="/longue-distance" className="font-medium hover:underline" style={{ color: '#8a7340' }}>
                Routes longue distance →
              </a>
            </p>
            <p className="sf text-stone-600">
              <a href="/notre-flotte" className="font-medium hover:underline" style={{ color: '#8a7340' }}>
                Notre flotte complète →
              </a>
            </p>
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

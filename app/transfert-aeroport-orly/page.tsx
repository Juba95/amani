import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Chauffeur Privé Aéroport Orly Paris — Transfert ORY | Amani Limousines',
  description:
    'Transfert avec chauffeur privé à l\'aéroport d\'Orly. Terminaux 1, 2, 3 et 4 couverts. Prix fixe, suivi de vol, accueil personnalisé. Réservation 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/transfert-aeroport-orly',
    languages: {
      en: 'https://www.amani-limousines.com/en/orly-airport-transfer',
    },
  },
  openGraph: {
    title: 'Chauffeur Privé Orly Paris | Amani Limousines',
    description: 'Transfert aéroport Orly avec chauffeur privé. Prix fixe, disponible 24h/24.',
    url: 'https://www.amani-limousines.com/transfert-aeroport-orly',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transfert chauffeur privé aéroport Orly Paris',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Aéroport de Paris-Orly',
  description: 'Service de transfert avec chauffeur privé depuis et vers l\'aéroport d\'Orly. Prix fixe, disponible 24h/24.',
  offers: [
    { '@type': 'Offer', name: 'Mercedes Classe E — Orly', price: '80', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes Classe V — Orly', price: '80', priceCurrency: 'EUR' },
  ],
};

export default function TransfertOrlyPage() {
  return (
    <SEOLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Aéroport Paris-Orly</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé Orly Paris</strong> —{' '}
            <em>18 km du centre</em>, zéro stress
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Orly est l'aéroport le plus proche de Paris intra-muros. Dix-huit kilomètres séparent
            le terminal 4 de la Place d'Italie — soit 25 à 35 minutes selon la circulation.
            Pourtant, sans <strong>chauffeur privé à l'aéroport Orly</strong>, ces vingt minutes
            peuvent facilement devenir une heure entre la queue taxi, le rechargement de compte
            Navigo et un Orlyval parfois bondé. Amani Limousines couvre les quatre terminaux d'Orly
            avec le même niveau de service que Charles de Gaulle.
          </p>
        </div>
      </section>

      {/* Terminaux */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Les terminaux d'Orly</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Depuis la refonte de 2021, Orly est organisé en quatre terminaux : Orly 1, 2, 3 et 4.
            Orly 4 (anciennement Orly Sud) accueille principalement Air France sur ses vols vers
            l'outre-mer et l'Afrique, ainsi qu'une grande partie des compagnies étrangères.
            Orly 1, 2 et 3 (anciennement Orly Ouest) concentrent les vols de Transavia, Vueling,
            easyJet et d'autres low cost. Votre <strong>chauffeur privé Orly</strong> connaît
            l'implantation de chaque compagnie et se place au bon niveau de sortie, pancarte en main.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Une jonction piétonne relie Orly 4 aux terminaux 1-2-3. En cas de correspondance entre
            les deux zones, un temps supplémentaire est à prévoir — votre chauffeur en tient compte
            dans le calcul de l'heure de prise en charge.
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Tarifs plus accessibles qu'à CDG</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              La courte distance Paris–Orly se traduit directement sur la facture. Un
              <strong> transfert chauffeur privé Orly Paris</strong> en Mercedes Classe E démarre
              à 80 € vers le centre de Paris — le tarif minimum garanti. Pour les adresses
              excentrées (La Défense, Versailles), le tarif reste calculé au kilométrique sans
              majoration de nuit ni de weekend.
            </p>
          </div>
          <div>
            <h2 className="heading">Idéal pour les vols tôt le matin</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Orly est réputé pour ses départs à 6h du matin. Un taxi à cette heure peut prendre
              30 minutes à arriver. Votre chauffeur Amani est confirmé la veille au soir, départ
              de votre domicile à l'heure prévue, sans aléa. Le service fonctionne 24h/24,
              y compris les jours fériés et en période de grève RATP.
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Tarifs Orly — Paris</h2>
          <p className="sf text-stone-500 mt-2 text-sm">Prix fixes tout compris • Péages inclus</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Mercedes Classe E', cat: 'Berline Business', detail: 'Paris centre : 80 €' },
              { name: 'Mercedes Classe S', cat: 'Berline Executive', detail: 'Paris centre : 96 €' },
              { name: 'Mercedes Classe V', cat: 'Minivan Luxe', detail: 'Paris centre : 80 €' },
            ].map((v) => (
              <div key={v.name} className="card">
                <p className="sf text-xs text-stone-400 uppercase tracking-wider">{v.cat}</p>
                <p className="heading text-xl mt-1">{v.name}</p>
                <p className="sf font-semibold mt-3" style={{ color: '#8a7340' }}>{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations depuis Orly */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Destinations fréquentes depuis Orly</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              { dest: 'Orly → Paris Centre (13ème, 14ème, 5ème)', km: '18 km', time: '25–35 min', price: 'à partir de 80 €' },
              { dest: 'Orly → La Défense', km: '30 km', time: '35–45 min', price: 'à partir de 95 €' },
              { dest: 'Orly → Versailles', km: '25 km', time: '30–40 min', price: 'à partir de 85 €' },
              { dest: 'Orly → Marne-la-Vallée / Disneyland', km: '42 km', time: '45–55 min', price: 'à partir de 115 €' },
            ].map((r) => (
              <div key={r.dest} className="card flex items-start gap-4">
                <div>
                  <p className="sf text-sm font-medium text-gray-900">{r.dest}</p>
                  <p className="sf text-xs text-stone-400 mt-1">{r.km} · {r.time}</p>
                  <p className="sf text-sm mt-1" style={{ color: '#8a7340' }}>{r.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

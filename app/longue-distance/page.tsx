import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'longue-distance';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Longue Distance depuis Paris — France & Europe | Amani Limousines',
  description: 'Transferts longue distance avec chauffeur privé depuis Paris. Paris–Deauville, Paris–Bruxelles, Paris–Lyon, Paris–Cannes. Berlines et vans VIP équipés Wi-Fi.',
  canonical: 'https://www.amani-limousines.com/longue-distance',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/long-distance',
      'x-default': 'https://www.amani-limousines.com/longue-distance',
    },
  },
});

const routes = [
  { route: 'Paris → Deauville', km: '200 km', duree: '2h30', note: 'Week-ends, Coupes d\'Amérique, Festival du film' },
  { route: 'Paris → Bruxelles', km: '310 km', duree: '3h00', note: 'Institutions européennes, sièges corporate' },
  { route: 'Paris → Reims', km: '145 km', duree: '1h45', note: 'Maisons de Champagne, cathédrale' },
  { route: 'Paris → Lyon', km: '465 km', duree: '4h30', note: 'Alternative au TGV pour les groupes et délégations' },
  { route: 'Paris → Monaco', km: '940 km', duree: '9h00', note: 'Grand Prix, résidences, affaires privées' },
  { route: 'Paris → Genève', km: '555 km', duree: '5h30', note: 'CERN, ONU, banques, forums' },
  { route: 'Paris → Amsterdam', km: '500 km', duree: '5h00', note: 'Ports, AMS, quartier des affaires' },
  { route: 'Paris → Londres', km: '460 km', duree: '6h00*', note: '* via Eurotunnel. Documents requis.' },
];

export default function LongueDistancePage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Longue distance — France & Europe</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé longue distance depuis Paris — votre bureau roulant')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Le train n\'arrive pas toujours à destination, l\'avion impose des aéroports souvent excentrés. Pour les trajets de 150 à 1 000 km, un chauffeur privé longue distance Paris offre une alternative que ni le TGV ni l\'avion ne peuvent concurrencer sur le critère du confort de travail. Wi-Fi, prises 220V, climatisation individuelle, silence : vous travaillez ou vous dormez, le chauffeur gère.')}
          </p>
        </div>
      </section>

      {/* Routes */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Trajets longue distance les plus demandés</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {routes.map((r) => (
              <div key={r.route} className="card">
                <p className="sf font-semibold text-gray-900">{r.route}</p>
                <p className="sf text-xs text-stone-400 mt-1">{r.km} · {r.duree}</p>
                <p className="sf text-sm text-stone-500 mt-2">{r.note}</p>
              </div>
            ))}
          </div>
          <p className="sf text-xs text-stone-400 mt-4">
            Toute destination non listée est réalisable sur devis. Contactez-nous avec votre
            point de départ, d'arrivée et la date souhaitée.
          </p>
        </div>
      </section>

      {/* Équipement */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Équipement des véhicules longue distance</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Nos berlines et vans VIP dédiés aux longs trajets sont équipés d'un Wi-Fi 4G/5G,
              de prises 220V et USB-C pour les appareils professionnels, d'une climatisation
              multi-zones et d'un espace de rangement adapté aux bagages volumineux. Dans la
              Classe S et le BMW i7, les sièges arrière bénéficient d'un appuie-tête électrique
              et d'une inclinaison large pour le repos.
            </p>
          </div>
          <div>
            <h2 className="heading">Relève de chauffeur sur les grands trajets</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Au-delà de 8 heures de route (Paris–Monaco, Paris–Barcelone), nous prévoyons
              une relève de chauffeur à mi-parcours pour maintenir un niveau d'attention optimal.
              Cela se passe dans une aire de service ou directement dans une ville intermédiaire,
              sans interruption perceptible de votre point de vue.
            </p>
          </div>
        </div>
      </section>

      {/* Avantage vs train */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pourquoi choisir la voiture plutôt que le train ?</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour un groupe de 3 à 7 personnes, le coût d'un <strong>transfert longue distance
            Paris</strong> en van VIP est souvent comparable à plusieurs billets de TGV première
            classe — sans les contraintes de gare, de correspondance et de bagages limités.
            Pour les délégations avec des équipements spécifiques (matériel de présentation,
            bagages diplomatiques, appareils médicaux), la voiture reste la seule solution viable.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

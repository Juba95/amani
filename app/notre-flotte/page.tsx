import type { Metadata } from 'next';
import Image from 'next/image';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';
import { fleetRates, MIN_DISPOSAL_HOURS, eur } from '@/lib/fleet-pricing';

const SLUG = 'notre-flotte';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Flotte de Véhicules de Prestige — Mercedes, Range Rover, Sprinter VIP, Autocar | Amani Limousines',
  description: 'Découvrez notre flotte de véhicules de prestige à Paris. Mercedes Classe E, EQS, S, Maybach, V, G, Range Rover, Sprinter VIP 8 / 15 / 19 places et autocar Tourismo 50 places. Plus de 300 véhicules renouvelés chaque année.',
  canonical: 'https://www.amani-limousines.com/notre-flotte',
  alternates: {
    languages: { en: 'https://www.amani-limousines.com/en/our-fleet' },
  },
});

const vehicules = [
  {
    id: 'classe_e',
    nom: 'Mercedes Classe E',
    categorie: 'Berline Business',
    pax: '3 passagers',
    bagages: '2 valises',
    image: '/vehicles/mercedes-classe-e.png',
    details: 'La plus polyvalente de notre flotte. La Classe E combine un niveau de confort élevé avec des dimensions adaptées à Paris intra-muros. Idéale pour les transferts aéroport solo ou en binôme, et pour les mises à disposition dans le centre de Paris.',
    equipements: ['Wi-Fi 4G inclus', 'Cuir Nappa', 'Climatisation bi-zone', 'Chargeur sans fil', 'Eau minérale'],
  },
  {
    id: 'eqs',
    nom: 'Mercedes EQS',
    categorie: 'Berline Executive Électrique',
    pax: '3 passagers',
    bagages: '2 valises',
    image: '/vehicles/mercedes-eqe.png',
    details: 'La version 100 % électrique de la Classe S. La EQS offre le même niveau de confort et de prestige que la Classe S avec zéro émission. Silence de fonctionnement absolu, sièges massants, système Burmester® — l\'excellence en mode électrique.',
    equipements: ['100% électrique', 'Silence absolu', 'Sièges massants', 'Burmester® surround', 'Confort Classe S'],
  },
  {
    id: 'classe_s',
    nom: 'Mercedes Classe S',
    categorie: 'Berline Executive',
    pax: '3 passagers',
    bagages: '2 valises',
    image: '/vehicles/mercedes-classe-s.png',
    details: 'La référence absolue du transport de prestige. La Classe S est la voiture des présidents, des PDG et des délégations de premier rang. Insonorisation renforcée, sièges massants arrière, écrans LCD et une isolation acoustique qui transforme l\'habitacle en espace de travail silencieux.',
    equipements: ['Sièges massants', 'Écrans LCD arrière', 'Bar à bord', 'Burmester® 4D', 'Ambiance lumineuse'],
  },
  {
    id: 'classe_s_maybach',
    nom: 'Mercedes Classe S Maybach',
    categorie: 'Berline Ultra-Prestige',
    pax: '3 passagers',
    bagages: '2 valises',
    image: '/vehicles/mercedes-classe-s-maybach.png',
    details: 'Le summum du luxe automobile. La Maybach offre un empattement allongé, des sièges arrière inclinables à 43,5°, un réfrigérateur à champagne intégré et une isolation phonique de classe supérieure. Réservée aux clients qui exigent l\'excellence absolue.',
    equipements: ['Sièges inclinables 43,5°', 'Réfrigérateur champagne', 'Séparation vitrage', 'Burmester® 4D', 'Ambiance première classe'],
  },
  {
    id: 'range_rover_evoque',
    nom: 'Range Rover',
    categorie: 'SUV de prestige',
    pax: '4 passagers',
    bagages: '3 valises',
    image: '/vehicles/range-rover.png',
    details: 'L\'alternative SUV de notre flotte. Le Range Rover combine une position de conduite surélevée avec un intérieur raffiné et une transmission intégrale. Idéal pour les transferts vers les stations de ski, les domaines viticoles ou tout trajet nécessitant un véhicule haut de gamme plus robuste.',
    equipements: ['Transmission intégrale', 'Cuir Windsor', 'Système Meridian™', 'Terrain Response', 'Position surélevée'],
  },
  {
    id: 'classe_v',
    nom: 'Mercedes Classe V',
    categorie: 'Minivan Luxe',
    pax: '7 passagers',
    bagages: '6 valises',
    image: '/vehicles/mercedes-classe-v.png',
    details: 'La solution pour les familles, les groupes de collègues et les délégations de taille moyenne. La Classe V peut être configurée en salon (sièges face à face) ou en configuration standard. L\'espace de chargement accepte des bagages volumineux sans compromettre le confort des passagers.',
    equipements: ['Configuration salon possible', 'Wi-Fi haut débit', 'Espace bagages XXL', 'Stores occultants', '7 ceintures homologuées'],
  },
  {
    id: 'classe_g',
    nom: 'Mercedes Classe G',
    categorie: 'SUV Prestige',
    pax: '4 passagers',
    bagages: '3 valises',
    image: '/vehicles/mercedes-classe-g.png',
    details: 'Icône du luxe tout-terrain, le Classe G allie une présence imposante à un intérieur digne d\'une berline de prestige. Choix de prédilection pour les événements de prestige, les mariages et les clients qui souhaitent faire une entrée remarquée.',
    equipements: ['Transmission intégrale', 'Cuir Nappa designo', 'Burmester® surround', 'Ambiance lumineuse 64 couleurs', 'Présence iconique'],
  },
  {
    id: 'sprinter',
    nom: 'Mercedes Sprinter VIP 8 places',
    categorie: 'Minibus VIP',
    pax: '8 passagers',
    bagages: '8 valises',
    image: '/vehicles/mercedes-sprinter.png',
    details: 'La version la plus luxueuse du Sprinter : huit sièges capitaine en cuir, espace aux jambes généreux, tablettes et éclairage d\'ambiance. Le choix des délégations restreintes, des familles nombreuses et des comités de direction qui veulent voyager ensemble sans sacrifier le confort d\'une berline.',
    equipements: ['8 sièges capitaine cuir', 'Sono premium', 'Climatisation zones', 'Tablettes de travail', 'Éclairage d\'ambiance'],
  },
  {
    id: 'sprinter_15',
    nom: 'Mercedes Sprinter 15 places',
    categorie: 'Minibus',
    pax: '15 passagers',
    bagages: '15 valises',
    image: '/vehicles/mercedes-sprinter-15.png',
    details: 'Le format le plus efficace pour déplacer une équipe complète. Quinze places assises, une soute arrière qui accepte les valises cabine et soute de tout le groupe, et un gabarit qui passe encore dans Paris intra-muros. Navettes hôtel, séminaires, équipes de tournage.',
    equipements: ['15 places assises', 'Soute à bagages', 'Climatisation', 'Prises USB', 'Accès Paris intra-muros'],
  },
  {
    id: 'sprinter_vip_19',
    nom: 'Mercedes Sprinter VIP 19 places',
    categorie: 'Minibus VIP',
    pax: '19 passagers',
    bagages: '19 valises',
    image: '/vehicles/mercedes-sprinter-vip-19.png',
    details: 'Le grand Sprinter en aménagement VIP : dix-neuf places, sono avec micro pour les guides et accompagnateurs, rideaux occultants et rangements individuels. Conçu pour les groupes d\'affaires, les délégations et les circuits privés de plusieurs jours.',
    equipements: ['19 places assises', 'Aménagement VIP', 'Sono & micro', 'Rideaux occultants', 'Grande soute'],
  },
  {
    id: 'tourismo_50',
    nom: 'Mercedes Tourismo 50 places',
    categorie: 'Autocar de tourisme',
    pax: '50 passagers',
    bagages: '50 valises',
    image: '/vehicles/mercedes-tourismo.jpg',
    details: 'L\'autocar de tourisme Mercedes pour les groupes de cinquante personnes : sièges inclinables, WC à bord, soutes de grande capacité et climatisation intégrale. La solution des congrès, des incentives, des mariages et des transferts d\'équipes complètes depuis les aéroports.',
    equipements: ['50 places assises', 'Sièges inclinables', 'WC à bord', 'Soutes grande capacité', 'Sono & micro'],
  },
];

const faq = [
  {
    q: 'Combien de véhicules avez-vous dans votre flotte ?',
    a: 'Plus de 300 véhicules renouvelés chaque année. Nos véhicules ont moins de trois ans en moyenne et sont entretenus selon les préconisations constructeur.',
  },
  {
    q: 'Puis-je choisir un véhicule spécifique ?',
    a: 'Absolument. Lors de votre réservation, vous pouvez sélectionner le modèle exact qui vous convient. Si un véhicule n\'est pas disponible, nous vous proposerons un équivalent ou supérieur.',
  },
  {
    q: 'Proposez-vous des véhicules blindés ?',
    a: 'Oui, sur demande et avec un préavis suffisant. Contactez-nous pour discuter de vos besoins en sécurité rapprochée.',
  },
  {
    q: 'Les véhicules sont-ils équipés de sièges enfants ?',
    a: 'Oui, nous fournissons des sièges enfants (groupe 0+, 1 et 2/3) sur simple demande lors de la réservation. Service gratuit.',
  },
  {
    q: 'Quel est le véhicule le plus adapté pour un groupe ?',
    a: 'La Mercedes Classe V accueille jusqu\'à 7 passagers avec leurs bagages. Au-delà, le Sprinter VIP existe en 8 et 19 places, le Sprinter standard en 15 places, et le Mercedes Tourismo emmène 50 personnes avec leurs bagages en soute.',
  },
];

export default function NotreFlottePage() {
  const c = content(SLUG);
  const rates = fleetRates('fr');

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Notre flotte</p>
          <h1 className="heading mt-3">
            {c('h1', 'Véhicules de prestige à Paris — plus de 300 unités')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Chez Amani Limousines, la flotte est renouvelée chaque année pour garantir que vos passagers voyagent dans des véhicules récents. Pas de modèles vieillissants tolérés sous prétexte qu\'ils sont encore en état de marche. Nos véhicules de prestige à Paris ont moins de trois ans en moyenne, et sont entretenus selon les préconisations constructeur à chaque intervention.')}
          </p>
        </div>
      </section>

      {/* Véhicules */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto space-y-10">
          {vehicules.map((v) => (
            <div key={v.id} className="card md:flex gap-8">
              <div className="w-full md:w-56 flex-shrink-0">
                <div className="relative w-full aspect-[16/10] md:aspect-auto md:h-36">
                  <Image
                    src={v.image}
                    alt={v.nom}
                    fill
                    sizes="(max-width: 768px) 100vw, 224px"
                    quality={65}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="sf text-xs text-stone-400 uppercase tracking-wider">{v.categorie}</p>
                <p className="heading text-2xl mt-1">{v.nom}</p>
                <p className="sf text-sm text-stone-500 mt-1">{v.pax} · {v.bagages}</p>
                <p className="sf text-stone-600 text-sm mt-3 leading-relaxed">{v.details}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {v.equipements.map((eq) => (
                    <span key={eq} className="sf text-xs px-3 py-1 rounded-full border border-warm-300 text-stone-500">
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Forfaits Transferts */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Nos forfaits transferts</h2>
          <p className="sf text-stone-500 mt-3 mb-10 text-sm">
            Prix fixes, tout compris — pas de compteur, pas de surprise. Accueil personnalisé, suivi du vol en temps réel.
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-warm-300">
                  <th className="sf text-xs text-stone-400 uppercase tracking-wider py-3 pr-4">Véhicule</th>
                  <th className="sf text-xs text-stone-400 uppercase tracking-wider py-3 px-4 text-right">Transfert aéroport</th>
                  <th className="sf text-xs text-stone-400 uppercase tracking-wider py-3 px-4 text-right">Transfert ville</th>
                  <th className="sf text-xs text-stone-400 uppercase tracking-wider py-3 px-4 text-right">Au-delà</th>
                  <th className="sf text-xs text-stone-400 uppercase tracking-wider py-3 pl-4 text-right">Mise à disposition</th>
                </tr>
              </thead>
              <tbody className="sf text-sm">
                {rates.map((r) => (
                  <tr key={r.id} className="border-b border-warm-200">
                    <td className="py-3.5 pr-4 text-gray-800 whitespace-nowrap">{r.name}</td>
                    <td className="py-3.5 px-4 text-right font-medium" style={{ color: '#8a7340' }}>{eur(r.airport)}</td>
                    <td className="py-3.5 px-4 text-right font-medium" style={{ color: '#8a7340' }}>{eur(r.city)}</td>
                    <td className="py-3.5 px-4 text-right text-stone-500 whitespace-nowrap">{eur(r.perKm)}/km</td>
                    <td className="py-3.5 pl-4 text-right text-stone-500 whitespace-nowrap">{eur(r.hourly)}/h</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="sf text-xs text-stone-400 leading-relaxed mb-8">
            Transfert aéroport : forfait CDG, Orly, Le Bourget et Beauvais ↔ Paris et proche
            couronne. Transfert ville : tarif minimum Paris &amp; Île-de-France. Au-delà du
            forfait, la course est facturée au kilomètre. Mise à disposition : minimum{' '}
            {MIN_DISPOSAL_HOURS} heures, le chauffeur et le véhicule restent avec vous.
            Tous les prix sont TTC, péages et carburant inclus.
          </p>

          <div className="text-center">
            <a href="/devis" className="btn-primary inline-block">
              Obtenir un devis instantané
            </a>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Standards d'entretien et de présentation</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Chaque véhicule est nettoyé intérieur et extérieur avant chaque prise en charge.
            Les tapis et revêtements sont aspirés, les vitres dégraissées, et les surfaces
            en cuir traitées selon les recommandations du constructeur. Les consommables
            (eau minérale, lingettes, chargeurs) sont vérifiés et remplacés systématiquement.
            Un véhicule Amani n'a aucune raison de sentir la cigarette, d'avoir des traces
            de mains sur les vitres ou un coffre encombré de matériel de chauffeur.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Questions fréquentes</h2>
          <div className="mt-8 space-y-6">
            {faq.map((f) => (
              <div key={f.q} className="border-l-2 border-stone-200 pl-6">
                <p className="font-serif text-gray-900 mb-2">{f.q}</p>
                <p className="sf text-stone-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

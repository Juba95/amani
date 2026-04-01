import type { Metadata } from 'next';
import Image from 'next/image';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Flotte de Véhicules de Prestige Paris — Mercedes, Range Rover, Sprinter VIP | Amani',
  description:
    'Découvrez notre flotte de véhicules de prestige à Paris. Mercedes Classe E, EQS, S, Maybach, V, G, Range Rover Evoque et Sprinter VIP. Plus de 300 véhicules renouvelés chaque année.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/notre-flotte',
    languages: { en: 'https://www.amani-limousines.com/en/our-fleet' },
  },
};

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
    categorie: 'Berline Business Électrique',
    pax: '3 passagers',
    bagages: '2 valises',
    image: '/vehicles/mercedes-eqe.png',
    details: 'La version 100 % électrique de notre gamme business. La EQS offre le même niveau de confort que la Classe E avec zéro émission. Silence de fonctionnement absolu, parfaite pour les clients sensibles à l\'impact environnemental.',
    equipements: ['100% électrique', 'Silence absolu', 'Cuir premium', 'Climatisation bi-zone', 'Chargeur USB-C'],
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
    nom: 'Range Rover Evoque',
    categorie: 'SUV Premium',
    pax: '3 passagers',
    bagages: '2 valises',
    image: '/vehicles/range-rover-evoque.png',
    details: 'L\'alternative SUV de notre flotte. Le Range Rover Evoque combine une position de conduite surélevée avec un intérieur raffiné. Idéal pour les transferts vers les stations de ski, les domaines viticoles ou tout trajet nécessitant un véhicule haut de gamme plus robuste.',
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
    nom: 'Mercedes Sprinter VIP',
    categorie: 'Minibus Luxe',
    pax: '16 passagers',
    bagages: '16 valises',
    image: '/vehicles/mercedes-sprinter.png',
    details: 'Le Sprinter VIP est la solution pour les groupes importants, les délégations officielles et les navettes d\'événements. Aménagement intérieur luxe avec sièges capitaine en cuir, sono premium, éclairage d\'ambiance et climatisation multi-zones. Peut transporter 16 personnes avec leurs bagages.',
    equipements: ['Sièges capitaine cuir', 'Sono premium', 'Climatisation zones', 'Galerie bagages', 'Communication radio'],
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
    a: 'La Mercedes Classe V accueille jusqu\'à 7 passagers avec leurs bagages. Pour les groupes plus importants, le Sprinter VIP peut transporter jusqu\'à 16 personnes.',
  },
];

export default function NotreFlottePage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Notre flotte</p>
          <h1 className="heading mt-3">
            Véhicules de <em>prestige</em>{' '}
            <strong>à Paris</strong> — plus de 300 unités
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Chez Amani Limousines, la flotte est renouvelée chaque année pour garantir que vos
            passagers voyagent dans des véhicules récents. Pas de modèles vieillissants tolérés
            sous prétexte qu'ils sont encore en état de marche. Nos <strong>véhicules de
            prestige à Paris</strong> ont moins de trois ans en moyenne, et sont entretenus
            selon les préconisations constructeur à chaque intervention.
          </p>
        </div>
      </section>

      {/* Véhicules */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto space-y-10">
          {vehicules.map((v) => (
            <div key={v.id} className="card md:flex gap-8">
              <div className="md:w-64 flex-shrink-0 relative">
                <Image
                  src={v.image}
                  alt={v.nom}
                  width={600}
                  height={380}
                  sizes="(max-width: 768px) 100vw, 256px"
                  quality={65}
                  className="w-full h-40 object-cover rounded-xl"
                  loading="lazy"
                />
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

      {/* Forfaits aéroports */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Nos forfaits aéroports</h2>
          <p className="sf text-stone-500 mt-3 mb-8 text-sm">
            Prix fixes, tout compris — pas de compteur, pas de surprise. Accueil personnalisé, suivi du vol en temps réel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                route: 'Paris \u2194 CDG',
                description: 'Roissy Charles de Gaulle \u2194 Paris centre, La Défense, Neuilly',
                duree: '~45 min',
                icon: '\u2708',
              },
              {
                route: 'Paris \u2194 Orly',
                description: 'Aéroport d\'Orly \u2194 Paris centre, Montparnasse, Saint-Germain',
                duree: '~30 min',
                icon: '\u2708',
              },
              {
                route: 'Paris \u2194 Le Bourget',
                description: 'Aviation privée Le Bourget \u2194 Paris centre, Champs-Élysées',
                duree: '~25 min',
                icon: '\u2708',
              },
              {
                route: 'CDG \u2194 La Défense',
                description: 'Roissy CDG \u2194 quartier d\'affaires de La Défense',
                duree: '~40 min',
                icon: '\ud83c\udfe2',
              },
              {
                route: 'CDG \u2194 Disneyland',
                description: 'Roissy CDG \u2194 Disneyland Paris, Val d\'Europe',
                duree: '~40 min',
                icon: '\ud83c\udff0',
              },
              {
                route: 'Paris \u2194 Beauvais',
                description: 'Aéroport de Beauvais-Tillé \u2194 Paris centre',
                duree: '~1h15',
                icon: '\u2708',
              },
            ].map((f) => (
              <div key={f.route} className="bg-warm-50 rounded-xl border border-stone-200 p-6 hover:border-gold-400 transition-all group">
                <span className="text-2xl">{f.icon}</span>
                <p className="font-serif text-lg text-gray-900 mt-3">{f.route}</p>
                <p className="sf text-xs text-stone-500 mt-2 leading-relaxed">{f.description}</p>
                <p className="sf text-xs mt-3" style={{ color: '#8a7340' }}>{f.duree}</p>
                <a href="/devis" className="inline-block mt-4 sf text-xs font-medium tracking-wide uppercase hover:underline" style={{ color: '#8a7340' }}>
                  Obtenir un devis &rarr;
                </a>
              </div>
            ))}
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

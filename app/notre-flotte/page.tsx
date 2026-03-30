import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Flotte de Véhicules de Prestige Paris — Mercedes, BMW i7, Sprinter VIP | Amani',
  description:
    'Découvrez notre flotte de véhicules de prestige à Paris. Mercedes Classe E, S, V, BMW i7 et Sprinter VIP. Plus de 300 véhicules renouvelés chaque année.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/notre-flotte',
  },
};

const vehicules = [
  {
    id: 'classe_e',
    nom: 'Mercedes Classe E',
    categorie: 'Berline Business',
    pax: '3 passagers',
    bagages: '2 valises',
    prix: 'À partir de 125 €',
    image: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/mercedes_benz_classe_e_hr-dvpu.png',
    details: 'La plus polyvalente de notre flotte. La Classe E (ou sa variante électrique EQE) combine un niveau de confort élevé avec des dimensions adaptées à Paris intra-muros. Idéale pour les transferts aéroport solo ou en binôme, et pour les mises à disposition dans le centre de Paris.',
    equipements: ['Wi-Fi 4G inclus', 'Cuir Nappa', 'Climatisation bi-zone', 'Chargeur sans fil', 'Eau minérale'],
  },
  {
    id: 'classe_s',
    nom: 'Mercedes Classe S',
    categorie: 'Berline Executive',
    pax: '3 passagers',
    bagages: '2 valises',
    prix: 'À partir de 225 €',
    image: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/s-Class-1-600x380.jpg',
    details: 'La référence absolue du transport de prestige. La Classe S est la voiture des présidents, des PDG et des délégations de premier rang. Insonorisation renforcée, sièges massants arrière, écrans LCD et une isolation acoustique qui transforme l\'habitacle en espace de travail silencieux.',
    equipements: ['Sièges massants', 'Écrans LCD arrière', 'Bar à bord', 'Burmester® 4D', 'Ambiance lumineuse'],
  },
  {
    id: 'classe_v',
    nom: 'Mercedes Classe V',
    categorie: 'Minivan Luxe',
    pax: '7 passagers',
    bagages: '6 valises',
    prix: 'À partir de 125 €',
    image: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/PngItem_816085-600x380.png',
    details: 'La solution pour les familles, les groupes de collègues et les délégations de taille moyenne. La Classe V peut être configurée en salon (sièges face à face) ou en configuration standard. L\'espace de chargement accepte des bagages volumineux sans compromettre le confort des passagers.',
    equipements: ['Configuration salon possible', 'Wi-Fi haut débit', 'Espace bagages XXL', 'Stores occultants', '7 ceintures homologuées'],
  },
  {
    id: 'bmw_i7',
    nom: 'BMW i7',
    categorie: 'Berline Prestige Électrique',
    pax: '3 passagers',
    bagages: '2 valises',
    prix: 'À partir de 250 €',
    image: 'https://www.amani-limousines.com/wp-content/uploads/2023/06/bmwI7-redim.jpg',
    details: 'Entièrement électrique, la BMW i7 combine zéro émission et luxe de très haut niveau. Son écran cinéma 31,3 pouces en configuration arrière, son silence absolu et son système d\'ambiance lumineuse en font le véhicule de choix pour les clients sensibles à la durabilité et au confort.',
    equipements: ['100% électrique', 'Écran cinéma 31"', 'Autonomie 600 km', 'Massage 5 zones', 'Silence moteur absolu'],
  },
  {
    id: 'sprinter',
    nom: 'Mercedes Sprinter VIP',
    categorie: 'Minibus Luxe',
    pax: '16 passagers',
    bagages: '16 valises',
    prix: 'À partir de 350 €',
    image: 'https://www.amani-limousines.com/wp-content/uploads/2023/07/sprinter-vip.jpg',
    details: 'Le Sprinter VIP est la solution pour les groupes importants, les délégations officielles et les navettes d\'événements. Aménagement intérieur luxe avec sièges capitaine en cuir, sono premium, éclairage d\'ambiance et climatisation multi-zones. Peut transporter 16 personnes avec leurs bagages.',
    equipements: ['Sièges capitaine cuir', 'Sono premium', 'Climatisation zones', 'Galerie bagages', 'Communication radio'],
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
              <div className="md:w-64 flex-shrink-0">
                <img
                  src={v.image}
                  alt={v.nom}
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
                <p className="sf font-semibold mt-4" style={{ color: '#8a7340' }}>{v.prix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standards */}
      <section className="py-14 px-6 md:px-10 bg-white">
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
    </SEOLayout>
  );
}

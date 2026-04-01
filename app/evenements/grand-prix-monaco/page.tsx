import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Chauffeur Privé Grand Prix de Monaco — Transport VIP Monaco | Amani Limousines',
  description:
    'Transport privé pour le Grand Prix de Monaco. Paris–Monaco en berline de prestige ou Sprinter VIP pour les groupes. Accès paddock, tribunes, yachts en Méditerranée.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/evenements/grand-prix-monaco',
    languages: {
      en: 'https://www.amani-limousines.com/en/events',
    },
  },
};

export default function GrandPrixMonacoPage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Événement — Monaco, mai</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé pour le Grand Prix de Monaco</strong> —{' '}
            <em>940 km depuis Paris</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Monaco en mai, c'est 940 km depuis Paris, environ neuf heures de route — ou deux heures
            d'avion jusqu'à Nice, suivies d'un transfert de 25 km vers la Principauté. La plupart
            des clients qui font le déplacement pour le Grand Prix mixent les deux : vol jusqu'à Nice,
            puis chauffeur pour Monaco et les jours autour. D'autres font le trajet complet en voiture
            quand la taille du groupe ou les bagages le justifient.
          </p>
        </div>
      </section>

      {/* Organisation logistique */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Organisation du transport autour du Grand Prix</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le week-end de course, les routes de Monaco sont bloquées par mesure de sécurité.
            L'accès en voiture doit être anticipé bien en amont. Nos chauffeurs connaissent les
            postes de contrôle et les timings d'accès selon les zones : paddock pour les équipes
            mécaniques et responsables, tribunes côté mer pour les invités, accès par l'Hôtel de Paris
            pour le secteur Montecarlo. Les accréditations véhicule sont vérifées à plusieurs barrages.
            On vous aide à constituer votre dossier et on coordonne l'arrivée avec la direction de course.
            Réservation conseillée au moins six semaines avant l'événement pour sécuriser les accès.
          </p>
        </div>
      </section>

      {/* Nice CDG vers Monaco */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Transfert Nice–Monaco : l'option la plus fluide</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            L'aéroport de Nice Côte d'Azur est à 25 kilomètres de Monaco. Le chauffeur vous retrouve
            à la sortie des douanes, au niveau des arrivées, et rejoint la Principauté en 30 à 45 minutes
            hors trafic de course. C'est l'option préférée des clients internationaux, qui échappent
            aux neuf heures de route de Paris et arrivent frais. Pendant le week-end du Grand Prix,
            les routes côtières peuvent être saturées en fin d'après-midi (dimanche soir particulièrement).
            Nos chauffeurs adaptent les itinéraires : corniche par Théoule-sur-Mer, ou détour par
            l'arrière-pays selon les conditions.
          </p>
        </div>
      </section>

      {/* Paris-Monaco en voiture */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Paris–Monaco en voiture : pour les groupes et les bagages</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour les groupes ou les clients qui préfèrent la route, 940 kilomètres se parcourent en
            Sprinter VIP pouvant accueillir jusqu'à 16 passagers. Tarif devis selon l'effectif.
            Le trajet prend neuf heures environ. Beaucoup préfèrent le scinder en deux jours avec
            une étape à Lyon ou Marseille, arrivée fraîche le lendemain vers 10 heures. C'est aussi
            l'option choisie par les clients qui voyagent avec enfants ou qui réalisent un road trip
            Côte d'Azur intégrant le Grand Prix à un séjour plus large.
          </p>
        </div>
      </section>

      {/* Flotte */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Classe E et Classe S</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Pour les transferts duo ou familles réduites : Classe E avec chauffeur privé, cuir,
              climatisation tri-zone, écran vidéo. Confort et discrétion.
            </p>
          </div>
          <div>
            <h2 className="heading">Classe G et Sprinter VIP</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Pour les groupes ou les longs trajets : Sprinter VIP climatisé jusqu'à 16 passagers,
              configuration chauffeuse + client VIP possible. Classe G pour entrée imposante à Monaco.
            </p>
          </div>
        </div>
      </section>

      {/* Activités Monaco */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Monaco au-delà de la course : tribunes, paddock et yachts</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Outre le circuit, Monaco propose tribunes côté mer (spectaculaire vue sur la baie),
            accès paddock pour les partenaires sponseurs, et les réceptions privées sur yachts amarrés
            dans la rade. Nos chauffeurs organisent les navettes entre votre hôtel (Fairmont,
            Métropole, Hôtel de Paris), les tribunes, les paddocks et les pontons d'amarrage du port.
            Monaco est très compact (2 km de long), les trajets internes sont rapides.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="sf text-stone-600 leading-relaxed">
            Vous préparez votre déplacement pour le Grand Prix de Monaco. Nous gérons l'accréditation
            véhicule, les itinéraires, les transferts depuis Nice ou Paris, la mise à disposition
            chauffeur pendant l'événement. Consultez aussi nos services de <strong>longue distance</strong>,
            <strong> mise à disposition</strong> et <strong>transfert aéroport CDG</strong>.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Chauffeur Privé Festival de Cannes — Transport Nice-Cannes VIP | Amani',
  description:
    'Transport VIP pour le Festival de Cannes. Transferts Nice CDG, accès Croisette, Red Carpet. Chauffeur privé Cannes disponible toute la durée du festival.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/evenements/festival-de-cannes',
  },
};

export default function FestivalDeCannesPage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Événement — Mai</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur privé Festival de Cannes</strong> —{' '}
            <em>Croisette, Red Carpet, yachts</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Cannes en mai, c'est deux semaines où la Côte d'Azur concentre plus de personnalités
            au mètre carré que n'importe quel autre endroit au monde. Le transport y est une
            affaire de positionnement, de timing et de discrétion. Amani Limousines déploie
            une équipe dédiée pendant toute la durée du festival pour les transferts{' '}
            <strong>Nice–Cannes avec chauffeur privé</strong>, les navettes Croisette et les
            accès réservés aux projections et soirées.
          </p>
        </div>
      </section>

      {/* Nice-Cannes */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Transferts Nice-Cannes — 35 km, sans stress</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            L'aéroport de Nice Côte d'Azur (NCE) est la principale porte d'entrée pour le festival.
            Les 35 kilomètres Nice–Cannes par l'A8 prennent normalement 35 à 40 minutes, mais
            pendant le festival, la circulation peut être très dense sur certains créneaux.
            Nos chauffeurs anticipent les heures de pointe liées aux arrivées de vols
            intercontinentaux et adaptent les itinéraires (autoroute, bord de mer ou route
            des collines selon les conditions en temps réel).
          </p>
        </div>
      </section>

      {/* Services Croisette */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Accès Croisette et Red Carpet</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Le soir des projections officielles, l'accès au Palais des Festivals est réservé
              aux véhicules accrédités. Nos chauffeurs connaissent les zones de dépose officielles,
              les créneaux de passage autorisés selon le niveau d'accréditation de vos invités
              et les itinéraires alternatifs si les accès habituels sont saturés.
            </p>
          </div>
          <div>
            <h2 className="heading">Navettes Port de Cannes — yachts</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Pendant le festival, le Port de Cannes (Vieux Port et Port Canto) est le hub
              des soirées privées et des réceptions sur yachts. Nous organisons les navettes
              entre les hôtels, les soirées sur la Croisette et les pontons d'accès aux
              bateaux amarrés.
            </p>
          </div>
        </div>
      </section>

      {/* Depuis Paris */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Depuis Paris vers Cannes</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour les clients qui souhaitent rejoindre Cannes en voiture depuis Paris (940 km,
            environ 9 heures), nous organisons la longue distance avec relève de chauffeur
            à mi-parcours. C'est une option prisée par les familles qui souhaitent ne pas
            avoir de contraintes d'aéroport avec de jeunes enfants, et par les personnalités
            qui préfèrent éviter les terminaux pendant le festival.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

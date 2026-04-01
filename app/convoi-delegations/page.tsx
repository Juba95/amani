import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'convoi-delegations';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Convoi de Véhicules Paris — Transport Délégation & Mission Diplomatique | Amani',
  description: 'Transport de délégations officielles à Paris. Convois de 2 à 30 véhicules, missions diplomatiques, ambassades. Chauffeurs formés, coordination centralisée, disponible 24h/24.',
  canonical: 'https://www.amani-limousines.com/convoi-delegations',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/delegation-transport',
      'x-default': 'https://www.amani-limousines.com/convoi-delegations',
    },
  },
});

export default function ConvoiDelegationsPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Convoi & délégations officielles</p>
          <h1 className="heading mt-3">
            {c('h1', 'Convoi de véhicules et transport de délégation à Paris — coordination sans faille')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Certaines missions nécessitent plus d\'un véhicule. Une délégation ministérielle, une visite d\'État, un summit corporate, un groupe de dirigeants en tournée : dans ces situations, la coordination entre plusieurs voitures est aussi importante que le confort de chacune. Le transport de délégation à Paris d\'Amani Limousines repose sur un dispatching centralisé, une communication radio continue entre les chauffeurs et un chef de convoi disponible sur le terrain.')}
          </p>
        </div>
      </section>

      {/* Organisation */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Organisation d'un convoi</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            La préparation d'un <strong>convoi de véhicules Paris</strong> commence par la collecte
            des informations logistiques : nombre de passagers, rang protocolaire (qui va dans
            quelle voiture), les adresses successives avec les horaires contraints, et les éventuelles
            fenêtres de sécurité imposées par les services de protection.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le jour J, chaque chauffeur dispose d'une feuille de route détaillée. Un coordinateur
            pilote l'ensemble du convoi en temps réel, anticipe les bouchons grâce aux données de
            circulation, et réorganise les itinéraires si nécessaire. Les chauffeurs sont en
            communication radio permanente, pas simplement en contact téléphonique.
          </p>
        </div>
      </section>

      {/* Missions diplomatiques */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Missions diplomatiques</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Nous travaillons régulièrement avec des ambassades, consulats et représentations
              permanentes à Paris. Pour les visites officielles, les véhicules sont préparés
              selon les protocoles demandés par les équipes de sécurité : vitres teintées,
              communications isolées, itinéraires validés à l'avance par les services de l'État.
            </p>
          </div>
          <div>
            <h2 className="heading">Événements d'entreprise</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Pour les séminaires, les assemblées générales et les journées de délégations
              corporate, nous organisons la logistique transport de A à Z : navettes hôtel–lieu
              d'événement, transferts aéroport pour les délégations entrantes, voitures de
              représentation pour les intervenants.
            </p>
          </div>
        </div>
      </section>

      {/* Flotte */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Une flotte pour tous les rangs</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Un convoi peut mêler différentes catégories de véhicules selon le rang des passagers.
            La délégation principale voyage en Mercedes Classe S ou BMW i7, les conseillers
            en Classe E, et les bagages ou l'équipement en Classe V ou Sprinter. La coordination
            visuelle du convoi — tous les véhicules de la même marque et couleur — est soignable
            sur demande.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

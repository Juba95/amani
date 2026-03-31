import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'À Propos — Amani Limousines | Service de Chauffeur Privé de Prestige à Paris',
  description:
    'Amani Limousines, service de chauffeur privé de prestige à Paris. Notre histoire, nos valeurs, notre flotte de 300+ véhicules. Ambassades, palaces, aviation privée.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/a-propos',
  },
};

export default function AProposPage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Notre histoire</p>
          <h1 className="heading mt-3">
            Amani Limousines — <em>service de</em>{' '}
            <strong>chauffeur privé de prestige à Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Amani Limousines est un prestataire de transport de prestige basé à Paris,
            spécialisé dans le service aux ambassades, aux États étrangers, aux family offices,
            aux palaces parisiens et à l'aviation privée. Nous opérons 24 heures sur 24,
            365 jours par an, avec une flotte de plus de 300 véhicules de moins de trois ans.
          </p>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Ce qui nous distingue</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                titre: 'Fiabilité sans compromis',
                desc: 'Un chauffeur en retard, c\'est un client perdu. Notre taux de ponctualité dépasse 98 %. Le suivi de vol en temps réel et les chauffeurs en stand-by garantissent que vous ne serez jamais laissé à quai.',
              },
              {
                titre: 'Discrétion absolue',
                desc: 'Nos chauffeurs ne commentent pas vos déplacements, ne partagent pas vos informations et ne prennent aucune initiative non demandée. Chaque mission est traitée en toute confidentialité.',
              },
              {
                titre: 'Flotte renouvelée',
                desc: 'Tous nos véhicules ont moins de trois ans. Pas de berline vieillissante tolérée parce qu\'elle roule encore. Chaque entretien est fait selon les préconisations constructeur.',
              },
            ].map((v) => (
              <div key={v.titre} className="card">
                <p className="sf font-semibold text-gray-900">{v.titre}</p>
                <p className="sf text-stone-500 text-sm mt-3 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientèle */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Notre clientèle</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Amani Limousines travaille principalement avec des structures qui ont des exigences
            de service non négociables. Des ambassades et représentations diplomatiques étrangères
            à Paris — notamment du Golfe (Qatar, Arabie Saoudite, Émirats), d'Asie (Chine,
            Japon, Corée) et des États-Unis — aux palaces du Triangle d'Or qui exigent un
            niveau d'accueil irréprochable pour leurs hôtes.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Nous travaillons également avec des family offices qui organisent les déplacements
            de leurs clients à Paris, des agences de voyage haut de gamme pour leurs groupes
            en visite, et des opérateurs d'aviation privée pour les liaisons entre les FBO
            du Bourget et les destinations parisiennes.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              'Ambassades & consulats',
              'Palaces parisiens',
              'Family offices',
              'Aviation privée (FBO)',
              'Agences de voyage premium',
              'Événements corporate',
            ].map((c) => (
              <div key={c} className="px-4 py-3 rounded-xl border border-warm-300 sf text-sm text-stone-600 text-center">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chauffeurs */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Nos chauffeurs</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Chaque chauffeur Amani est titulaire de la carte professionnelle VTC délivrée par
            le Registre des Voitures de Tourisme avec Chauffeur. Ils sont sélectionnés sur leur
            connaissance de Paris et de l'Île-de-France, leur maîtrise de l'anglais, leur
            présentation et leur discrétion. La plupart parlent deux ou trois langues.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Nos chauffeurs ne sont pas des sous-traitants de plateformes. Ce sont des
            professionnels qui connaissent nos standards de service, nos clients réguliers
            et nos protocoles pour les missions sensibles. Un chauffeur Amani sait comment
            se comporter chez un chef d'État étranger, dans un palace parisien ou sur le
            tarmac d'un aéroport d'aviation privée.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

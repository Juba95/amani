import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Excursion Privée au Départ de Paris — Versailles, Champagne, Normandie | Amani',
  description:
    'Excursions privées en voiture avec chauffeur depuis Paris. Versailles, Champagne, Giverny, Normandie, Loire. Journées sur mesure, guide culinaire disponible.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/excursion-privee',
  },
};

const excursions = [
  {
    titre: 'Versailles',
    distance: '35 km — 45 min',
    desc: 'La visite incontournable au départ de Paris. Château, jardins, Trianon, hameau de la Reine. Votre chauffeur vous dépose au portail principal et organise les temps de reprise selon votre programme de visite.',
  },
  {
    titre: 'Champagne & Reims',
    distance: '145 km — 1h45',
    desc: 'Reims et ses maisons de Champagne (Taittinger, Ruinart, Mumm, Veuve Clicquot), les caves creusées dans la craie, et quelques vignobles sur la route du retour. Réservations en maisons disponibles sur demande.',
  },
  {
    titre: 'Normandie',
    distance: '200 km — 2h15',
    desc: 'Les plages du débarquement, le mémorial de Caen, le mont Saint-Michel. Itinéraire personnalisé selon vos priorités historiques ou gastronomiques. La Normandie mérite une nuit sur place — nous coordonnons également les hébergements sur demande.',
  },
  {
    titre: 'Giverny',
    distance: '75 km — 1h',
    desc: 'La maison et les jardins de Claude Monet, le bassin aux nymphéas. La visite est idéale au printemps (avril–juin). Journée combinable avec une étape à Vernon ou les Andelys.',
  },
  {
    titre: 'Châteaux de la Loire',
    distance: '230 km — 2h30',
    desc: 'Chambord, Chenonceau, Amboise et l\'Île d\'Or où Léonard de Vinci finit ses jours. Excursion à la journée ou sur deux jours avec nuit à Tours ou Amboise.',
  },
  {
    titre: 'Épernay & Route des vins',
    distance: '130 km — 1h30',
    desc: 'L\'Avenue de Champagne, les caves Moët & Chandon, Pol Roger. Dégustation privée possible dans plusieurs maisons. Format idéal pour les clients corporate et les familles œnophiles.',
  },
];

export default function ExcursionPriveePage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Journées & excursions</p>
          <h1 className="heading mt-3">
            <strong>Excursion privée au départ de Paris</strong> —{' '}
            <em>avec chauffeur, à votre rythme</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Paris est à deux heures de Versailles, des vignobles champenois, des plages du
            Débarquement et des châteaux de la Loire. Un <strong>chauffeur privé Paris
            excursion</strong> permet de sortir de la capitale sans horaires imposés, sans
            train à attraper, sans parking à gérer à destination. Vous arrivez reposé,
            vous repartez quand vous voulez.
          </p>
        </div>
      </section>

      {/* Excursions */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Nos excursions les plus demandées</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {excursions.map((e) => (
              <div key={e.titre} className="card">
                <p className="sf text-xs text-stone-400 uppercase tracking-wider">{e.distance}</p>
                <p className="heading text-xl mt-1">{e.titre}</p>
                <p className="sf text-stone-500 text-sm mt-3 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide culinaire */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Option guide culinaire</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Sur certaines excursions — notamment en Champagne, en Normandie ou dans les régions
            viticoles — nous proposons les services d'un guide culinaire local. Ce n'est pas un
            simple accompagnateur : c'est une personne qui connaît les producteurs, les tables
            sans enseigne et les caves qui ne reçoivent pas les groupes de touristes. Si vous
            souhaitez que votre excursion ait une dimension gastronomique sérieuse, c'est
            l'option à considérer.
          </p>
        </div>
      </section>

      {/* Sur mesure */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Excursions entièrement <em>sur mesure</em></h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Si votre destination ne figure pas dans notre liste — une propriété privée, une brocante
            particulière, un domaine viticole spécifique — nous construisons l'itinéraire à partir
            de vos indications. La seule contrainte est logistique : le chauffeur doit pouvoir
            rentrer sur Paris dans des délais raisonnables, sauf si vous optez pour un découchage
            avec deuxième journée.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

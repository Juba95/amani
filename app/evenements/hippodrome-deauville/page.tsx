import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'evenements/hippodrome-deauville';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Hippodrome de Deauville — Transfert Paris Deauville | Amani Limousines',
  description: 'Transport privé pour l\'hippodrome de Deauville. Paris–Deauville en 2h30 en Mercedes. Accès loges, tribunes VIP, arrivées en voitures. Chauffeur disponible à la journée.',
  canonical: 'https://www.amani-limousines.com/evenements/hippodrome-deauville',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/events',
    },
  },
});

export default function HippodromeDeauvillePage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Événement — Calvados, Normandie</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé pour l\'hippodrome de Deauville — Paris–Deauville en 2h30')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Deauville, c\'est 200 km depuis Paris, deux heures trente sur l\'A13 selon la circulation. L\'hippodrome reste le rendez-vous mondain que les Parisiens font encore, en particulier en août pour les Yearling Sales et le Grand Prix de Deauville. On y vient souvent à plusieurs, on repart tard, et la route du retour en nocturne mérite d\'avoir un chauffeur.')}
          </p>
        </div>
      </section>

      {/* Saison hippique */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">La saison hippique à Deauville</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            L'année s'organise autour de trois événements majeurs. Le Prix de Diane Longines, disputé
            à Chantilly en juin, attire les éleveurs et les parieurs qui continuent ensuite vers Deauville.
            En août, les Arqana Yearling Sales transforment l'hippodrome en marché international. Les
            yearlings proviennent de studs français, mais aussi d'Irlande, d'Arabie saoudite, du Japon
            et de Nouvelle-Zélande. La clientèle est extrêmement internationale : beaucoup débarquent
            à Paris ou à Deauville-Normandie Airport pour deux ou trois jours de ventes. Enfin, le Grand
            Prix de Deauville, disputé à la fin août, ramène les plus beaux chevaux de la saison sur
            la ligne droite normande.
          </p>
        </div>
      </section>

      {/* Transfert Paris Deauville */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Transfert Paris–Deauville</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le trajet fait 200 kilomètres en deux heures trente environ par l'A13 via Caen, sans
            compter le trafic week-end d'août qui peut ajouter vingt à trente minutes. Le chauffeur
            connaît les variantes : traversée de Rouen, itinéraires par Honfleur. Vous pouvez choisir
            deux formules. Le chauffeur vous attend à l'hippodrome et vous ramène à l'heure fixée,
            c'est la mise à disposition à la journée. Ou il vous dépose le matin et revient vous chercher
            le soir à horaire convenu — c'est plus économe pour les trajets aller-retour rapides.
            Tarifs à partir de 180 euros l'aller simple en Classe E. Trajet coupé en deux jours possible
            avec une nuit à Deauville ou Trouville.
          </p>
        </div>
      </section>

      {/* Depuis CDG et Orly */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Depuis CDG vers Deauville</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Charles de Gaulle à Deauville, c'est environ deux heures selon la circulation.
              Beaucoup de visiteurs des Yearling Sales arrivent par CDG en provenance de Londres,
              Hong Kong ou Dubaï. Nous organisons les transferts directs CDG vers l'hippodrome,
              sans escale Paris centre.
            </p>
          </div>
          <div>
            <h2 className="heading">Depuis Orly vers Deauville</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Orly est plus proche géographiquement, à environ deux heures trente de Deauville.
              Pour les clients qui arrivent sur vols intra-Europe ou fret cargo (destination
              fréquente pour les chevaux), Orly peut être plus rapide qu'une navette
              par Paris centre.
            </p>
          </div>
        </div>
      </section>

      {/* Accès VIP */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Accès aux tribunes et loges VIP</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            L'hippodrome de Deauville dispose de tribunes réservées, de loges privées et d'accès
            réservés aux propriétaires et entraîneurs. Nos chauffeurs vous déposent directement
            aux entrées appropriées selon votre accréditation. Pendant les ventes Arqana, les
            circuits de navettes entre l'hippo, les restaurants et les hôtels de Deauville sont
            organisés sur la journée. Mise à disposition chauffeur recommandée plutôt qu'aller-retour.
          </p>
        </div>
      </section>

      {/* CTA et liens */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <p className="sf text-stone-600 leading-relaxed">
            Vous cherchez un transport pour un jour de course, une vente de yearlings ou un week-end
            en Normandie. Nous organisons votre déplacement de A à Z. Retrouvez aussi nos services
            de <strong>longue distance</strong>, <strong>mise à disposition chauffeur</strong> et
            nos <strong>transferts aéroports CDG</strong>.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'evenements/paris-fashion-week';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Paris Fashion Week — Transport Défilés & Showrooms | Amani',
  description: 'Transport VIP pour la Paris Fashion Week. Navettes entre les défilés Chanel, Dior, Louis Vuitton. Chauffeur privé Paris disponible 24h/24 pendant la fashion week.',
  canonical: 'https://www.amani-limousines.com/evenements/paris-fashion-week',
});

export default function ParisFashionWeekPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Événement — Février & Septembre</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé Paris Fashion Week — entre chaque défilé, sans attente')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'La Fashion Week parisienne concentre en une semaine les adresses les plus disputées de la capitale. Palais Royal, Grand Palais Éphémère, Trocadéro, Marais, 8ème arrondissement : les défilés se déroulent dans des lieux hétéroclites, souvent peu accessibles aux taxis ordinaires. Un chauffeur privé Paris Fashion Week dédié reste à votre disposition entre chaque défilé, stationné à proximité, prêt à vous déposer à l\'entrée VIP suivante.')}
          </p>
        </div>
      </section>

      {/* Logistique */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">La logistique Fashion Week, c'est sérieux</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Durant les deux semaines de Fashion Week (prêt-à-porter femme en mars et septembre,
            haute couture et homme en janvier et juillet), les rues du centre de Paris sont
            saturées. Les zones de dépose sont souvent réservées aux accrédités officiels.
            Nos chauffeurs connaissent les accès réservés aux véhicules de service de chaque
            maison de couture, les codes de badge parking du Carrousel du Louvre, et les
            itinéraires alternatifs pour éviter les concentrations de photographes.
          </p>
        </div>
      </section>

      {/* Lieux couverts */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Lieux fréquemment couverts</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              'Palais Royal', 'Grand Palais Éphémère', 'Trocadéro / Chaillot',
              'Jardins des Tuileries', 'Opéra Garnier', 'Pavillon Cambon',
              'Palais de Tokyo', 'Musée Rodin', 'Fondation Louis Vuitton',
              'Hôtel Particulier Marais', 'Le Bon Marché', 'Showrooms Rue du Faubourg',
            ].map((lieu) => (
              <div key={lieu} className="px-4 py-3 rounded-xl border border-warm-300 sf text-sm text-stone-600">
                {lieu}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Ce que nous proposons pendant la Fashion Week</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Mise à disposition à la journée ou à la semaine, avec le même chauffeur chaque jour
            si vous le souhaitez. Navettes hôtel–défilés pour les acheteurs et journalistes.
            Transferts CDG et Orly en Mercedes Classe S pour les rédacteurs en chef et les
            directeurs artistiques. Convois pour les délégations des grandes maisons. Tous nos
            véhicules sont disponibles en configuration "working lounge" : tablette, Wi-Fi,
            discrétion absolue entre deux rendez-vous.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

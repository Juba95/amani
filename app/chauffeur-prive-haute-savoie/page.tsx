import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-prive-haute-savoie';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Haute-Savoie — Paris vers Chamonix, Megève, Annecy | Amani Limousines',
  description: 'Chauffeur privé Paris vers toute la Haute-Savoie : Chamonix, Megève, Annecy, Thonon, Évian. Prix fixe, Mercedes récente. Depuis CDG, Orly ou Paris intramuros.',
  canonical: 'https://www.amani-limousines.com/chauffeur-prive-haute-savoie',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/haute-savoie-chauffeur',
      'x-default': 'https://www.amani-limousines.com/chauffeur-prive-haute-savoie',
    },
  },
});

const destinations = [
  {
    ville: 'Chamonix',
    distance: '610 km',
    duree: '6h–6h30',
    info: 'Vallée de Chamonix, Les Houches, Argentière, Les Bossons, Vallorcine.',
  },
  {
    ville: 'Megève',
    distance: '640 km',
    duree: '6h–6h30',
    info: 'Centre-ville, Le Jaillet, Rochebrune, Mont d\'Arbois, Combloux.',
  },
  {
    ville: 'Annecy',
    distance: '540 km',
    duree: '5h–5h30',
    info: 'Centre, Annecy-le-Vieux, Seynod, Cran-Gevrier, rives du lac.',
  },
  {
    ville: 'Thonon-les-Bains',
    distance: '580 km',
    duree: '5h30–6h',
    info: 'Rive française du lac Léman. Accès à Évian à 12 km.',
  },
  {
    ville: 'Évian-les-Bains',
    distance: '590 km',
    duree: '5h45–6h15',
    info: 'Rive du lac Léman. Hôtel Royal, casino, centre thermal.',
  },
  {
    ville: 'Sallanches / Cluses',
    distance: '610 km',
    duree: '6h–6h30',
    info: 'Porte d\'entrée des stations du Mont-Blanc. Correspondances possibles.',
  },
];

const pourquoi = [
  {
    point: 'Prix fixe, annoncé avant',
    detail:
      'Le tarif est calculé au départ sur la distance réelle. Il ne change pas si la route est chargée sur l\'A40 en période de vacances.',
  },
  {
    point: 'Grands coffres',
    detail:
      'Les Mercedes Classe V et Sprinter accueillent des skis, des raquettes, des vélos de montagne ou des bagages d\'expédition. Le coffre est précisé lors de la réservation.',
  },
  {
    point: 'Suivi de vol pour les départs d\'aéroport',
    detail:
      'Pour les prises en charge à CDG ou Orly, le chauffeur suit le vol en temps réel et ajuste sans intervention de votre part.',
  },
  {
    point: 'Plusieurs véhicules disponibles simultanément',
    detail:
      'Pour les groupes qui arrivent à des horaires différents ou les équipes d\'entreprise, nous coordonnons plusieurs véhicules depuis le même point de départ.',
  },
];

export default function ChauffeurPriveHauteSavoie() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Département 74 — Haute-Savoie</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé Haute-Savoie — Chamonix, Megève, Annecy et au-delà')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'La Haute-Savoie regroupe des destinations que le train dessert mal : Chamonix, Megève, Morzine, la rive française du lac Léman. Amani Limousines couvre l\'ensemble du département depuis Paris, CDG et Orly, en Mercedes récentes avec prix fixe. Le trajet fait entre 5h et 7h selon la destination, sans correspondance ni navette locale à coordonner à l\'arrivée.')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Demander un devis
            </Link>
            <a
              href="tel:+33662027344"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              +33 6 62 02 73 44
            </a>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Destinations en Haute-Savoie</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Distances et durées indicatives depuis Paris intramuros (comptez 20 à 30 min
            de plus depuis CDG).
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {destinations.map((d) => (
              <div key={d.ville} className="card">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-lg text-gray-900">{d.ville}</h3>
                  <span className="font-sans text-xs text-stone-400">{d.distance} · {d.duree}</span>
                </div>
                <p className="sf text-stone-600 leading-relaxed text-sm">{d.info}</p>
              </div>
            ))}
          </div>
          <p className="sf text-stone-500 mt-6 text-sm leading-relaxed">
            Morzine, Les Gets, La Clusaz, Saint-Gervais-les-Bains : nous couvrons également
            ces stations. Demandez un devis avec votre destination exacte.
          </p>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pourquoi la voiture avec chauffeur depuis Paris</h2>
          <div className="mt-8 space-y-6">
            {pourquoi.map((p) => (
              <div key={p.point} className="border-l-2 border-stone-200 pl-6">
                <p className="font-serif text-gray-900 mb-2">{p.point}</p>
                <p className="sf text-stone-600 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contexte saisonnier */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Saison hiver et saison été</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            La demande est forte en décembre-janvier (semaine de Noël, réveillon) et en
            février (vacances scolaires). Ces périodes se réservent plusieurs semaines à
            l'avance. En dehors de ces pics, la disponibilité est généralement bonne à
            48-72h.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            En été, Annecy, Évian et les randonnées autour de Chamonix attirent un flux
            différent. Les durées de trajet sont similaires, mais les routes moins chargées
            qu'un vendredi de février. Si vous organisez un séjour d'entreprise ou un
            événement privé en Haute-Savoie, nous pouvons coordonner l'ensemble des
            transferts depuis plusieurs points d'arrivée.
          </p>
        </div>
      </section>

      {/* Flotte */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Véhicules pour la Haute-Savoie</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour un solo ou un duo avec bagages légers : Classe E (à partir de 530 €
            pour Annecy, 600 € pour Chamonix ou Megève). Pour un couple avec skis :
            Classe V. Pour un groupe de 4 à 7 personnes : Classe V ou Sprinter VIP.
            Tous les tarifs sont fixes et confirmés à la réservation.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/notre-flotte"
              className="font-sans text-sm tracking-widest uppercase border-b border-stone-400 pb-0.5 hover:border-stone-700 transition-colors"
            >
              Voir la flotte →
            </Link>
            <Link
              href="/longue-distance"
              className="font-sans text-sm tracking-widest uppercase border-b border-stone-400 pb-0.5 hover:border-stone-700 transition-colors"
            >
              Service longue distance →
            </Link>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pages liées</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Chauffeur privé Chamonix', href: '/chauffeur-prive-chamonix' },
              { label: 'Chauffeur privé Megève', href: '/chauffeur-prive-megeve' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Transfert aéroport CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Contact', href: '/contact' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block text-center py-4 px-6 border border-stone-200 font-sans text-sm text-gray-700 hover:border-stone-500 transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

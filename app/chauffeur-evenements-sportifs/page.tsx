import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-evenements-sportifs';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Événements Sportifs — Transport VIP Compétitions | Amani Limousines',
  description: 'Chauffeur privé pour événements sportifs : Roland-Garros, Grand Prix Monaco, 24h du Mans, Tour de France, courses hippiques. VIP hospitality, navettes équipes, transferts athlètes.',
  canonical: 'https://www.amani-limousines.com/chauffeur-evenements-sportifs',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/sports-events-chauffeur',
      'x-default': 'https://www.amani-limousines.com/chauffeur-evenements-sportifs',
    },
  },
});

const evenements = [
  { nom: 'Roland-Garros', note: 'Loges VIP, transferts joueurs, navettes partenaires' },
  { nom: 'Grand Prix de Monaco', note: 'Transferts depuis Nice, hôtels, yachts, paddock' },
  { nom: '24 Heures du Mans', note: 'Navettes équipes, hospitality, accès circuit' },
  { nom: 'Tour de France', note: 'Suivi d\'étapes, transferts sponsors, villages départ' },
  { nom: 'Courses hippiques', note: 'Prix de l\'Arc de Triomphe, Longchamp, Chantilly, Deauville' },
  { nom: 'Paris Saint-Germain', note: 'Matchs au Parc des Princes, loges, événements club' },
];

const services = [
  {
    titre: 'VIP Hospitality',
    texte:
      "Vous êtes invité dans une loge VIP à Roland-Garros ou au Grand Prix de Monaco. Votre chauffeur vous dépose à l'entrée dédiée, attend pendant l'événement et vous ramène à votre hôtel. Il connaît les accès réservés, les horaires de fermeture et les itinéraires de sortie pour éviter la foule.",
  },
  {
    titre: 'Navettes équipes et staff',
    texte:
      "Les équipes sportives, les organisateurs et les partenaires ont besoin de rotations régulières entre les hôtels, les sites d'entraînement et les lieux de compétition. Nos Classe V et Sprinter VIP assurent ces navettes avec une ponctualité rigoureuse.",
  },
  {
    titre: 'Transferts athlètes',
    texte:
      "Les sportifs de haut niveau ont des contraintes spécifiques : horaires décalés, régime alimentaire, besoin de repos, discrétion vis-à-vis des médias. Nos chauffeurs s'adaptent à ces exigences et assurent des transferts calmes et efficaces.",
  },
  {
    titre: 'Transport sponsors et partenaires',
    texte:
      "Les entreprises sponsors invitent clients et prospects aux grands événements sportifs. Nous organisons le transport complet : accueil aéroport, transferts hôtel-événement, navettes de soirée. Un interlocuteur unique coordonne l'ensemble du dispositif.",
  },
];

export default function ChauffeurEvenementsSportifs() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Sport — France & Monaco</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur pour événements sportifs — transport VIP pour les grandes compétitions')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Les grands événements sportifs génèrent une logistique de transport complexe : accès restreints, routes fermées, affluence massive, horaires imprévisibles. Amani Limousines intervient sur les plus grandes compétitions sportives en France et à Monaco, avec des chauffeurs qui connaissent les sites, les protocoles d\'accès et les itinéraires de repli. Que vous soyez athlète, sponsor, organisateur ou spectateur VIP, le transport ne doit jamais être un sujet de préoccupation le jour J.')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Demander un tarif
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

      {/* Services */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Nos prestations sport</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Chaque événement sportif a ses propres contraintes. Nous adaptons le dispositif
            au type de compétition, au profil des passagers et au niveau de service requis.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.titre} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{s.titre}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{s.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Événements couverts */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Événements sportifs couverts</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            Nous intervenons sur les compétitions sportives majeures en France et à Monaco.
            Voici les événements pour lesquels nous sommes le plus sollicités.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {evenements.map((e) => (
              <div key={e.nom} className="flex items-start gap-4 py-4 border-b border-stone-100">
                <span
                  className="mt-0.5 h-2 w-2 rounded-full shrink-0"
                  style={{ background: '#c9a84c' }}
                />
                <div>
                  <p className="font-sans text-sm font-medium text-gray-900">{e.nom}</p>
                  <p className="font-sans text-xs text-stone-500 mt-0.5">{e.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Amani */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pourquoi choisir Amani pour vos événements sportifs</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Connaissance des sites sportifs</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Nos chauffeurs ont déjà opéré sur Roland-Garros, le circuit de Monaco, Longchamp
                et les principaux stades parisiens. Ils connaissent les parkings VIP, les zones
                de dépose et les itinéraires alternatifs quand les routes habituelles sont fermées.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Gestion des imprévus</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Un match qui se prolonge, une cérémonie de remise de prix qui dure, une pluie
                qui retarde le départ — nos chauffeurs attendent et s'adaptent. Pas de
                supplément pour les temps d'attente imprévus liés à l'événement.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Dispositifs multi-véhicules</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Pour les groupes importants — délégation de sponsors, équipe sportive complète —
                nous déployons des flottes coordonnées. Un coordinateur unique gère l'ensemble
                des véhicules et assure que chaque passager arrive à destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Services associés</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Chauffeur privé Paris', href: '/chauffeur-prive-paris' },
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Notre flotte', href: '/notre-flotte' },
              { label: 'Chauffeur Fashion Week', href: '/chauffeur-fashion-week' },
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

import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Fashion Week Paris — Transport VIP Mode & Luxe | Amani Limousines',
  description:
    'Chauffeur privé pour la Fashion Week de Paris, Milan et Londres. Transport mannequins, designers, acheteurs. Shows, showrooms, afterparties. Flotte Mercedes.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-fashion-week',
    languages: {
      en: 'https://www.amani-limousines.com/en/chauffeur-fashion-week',
      'x-default': 'https://www.amani-limousines.com/chauffeur-fashion-week',
    },
  },
};

const occasions = [
  {
    titre: 'Shows et défilés',
    texte:
      "Les défilés s'enchaînent à un rythme effréné pendant la Fashion Week. Entre le Grand Palais, le Palais de Tokyo et les lieux éphémères du Marais, les temps de trajet sont imprévisibles. Votre chauffeur connaît les accès backstage, les zones de dépose VIP et les itinéraires pour éviter les attroupements.",
  },
  {
    titre: 'Showrooms et rendez-vous acheteurs',
    texte:
      "Les acheteurs internationaux enchaînent parfois dix showrooms par jour, dispersés entre le 1er et le 16ème arrondissement. Un chauffeur en mise à disposition vous permet de respecter un planning serré sans perdre de temps à chercher un taxi entre deux rendez-vous.",
  },
  {
    titre: 'Transferts mannequins et équipes',
    texte:
      "Les castings commencent tôt et les fittings finissent tard. Nos chauffeurs assurent les rotations des mannequins, maquilleurs et stylistes entre les hôtels, les studios et les lieux de défilé. Ponctualité non négociable dans un milieu où le retard n'est pas une option.",
  },
  {
    titre: 'Afterparties et dîners privés',
    texte:
      "Les soirées de la Fashion Week se prolongent souvent jusqu'à l'aube. Votre chauffeur vous attend à la sortie, quelle que soit l'heure. Retour à l'hôtel en toute discrétion, sans attendre dans la file des VTC.",
  },
];

const fashionWeeks = [
  { ville: 'Paris Fashion Week', note: 'Prêt-à-porter et Haute Couture, deux fois par an' },
  { ville: 'Paris Haute Couture', note: 'Janvier et juillet, lieux d\'exception' },
  { ville: 'Milan Fashion Week', note: 'Transferts Paris-Milan en longue distance ou accueil à Malpensa' },
  { ville: 'London Fashion Week', note: 'Liaisons Eurostar et accueil Heathrow / City Airport' },
  { ville: 'Salons professionnels', note: 'Première Vision, Who\'s Next, Maison & Objet' },
  { ville: 'Semaines du vintage et de la couture', note: 'Événements off, pop-ups et ventes privées' },
];

export default function ChauffeurFashionWeek() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Mode & Luxe — Paris</p>
          <h1 className="heading mt-3">
            <strong>Chauffeur Fashion Week Paris</strong> —{' '}
            <em>transport sur mesure pour le monde de la mode</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            La <strong>Fashion Week de Paris</strong> impose un rythme que les transports
            classiques ne suivent pas. Quatre shows dans la journée, un dîner le soir, un
            afterparty ensuite — et chaque lieu est à l'autre bout de Paris. Amani Limousines
            accompagne maisons de couture, acheteurs, mannequins et presse depuis plusieurs
            saisons. Nos chauffeurs connaissent les lieux, les accès réservés et les horaires
            réels, pas ceux du programme officiel.
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

      {/* Occasions */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Vos déplacements pendant la Fashion Week</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Que vous soyez directeur artistique, acheteur ou mannequin, les besoins de transport
            pendant la semaine de la mode sont spécifiques. Voici comment nous y répondons.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {occasions.map((o) => (
              <div key={o.titre} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{o.titre}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{o.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Weeks couvertes */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Événements mode couverts</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            Notre service ne se limite pas à la Paris Fashion Week. Nous intervenons sur
            l'ensemble du calendrier mode international, avec des chauffeurs sur place ou
            des transferts longue distance.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {fashionWeeks.map((f) => (
              <div key={f.ville} className="flex items-start gap-4 py-4 border-b border-stone-100">
                <span
                  className="mt-0.5 h-2 w-2 rounded-full shrink-0"
                  style={{ background: '#c9a84c' }}
                />
                <div>
                  <p className="font-sans text-sm font-medium text-gray-900">{f.ville}</p>
                  <p className="font-sans text-xs text-stone-500 mt-0.5">{f.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Amani */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pourquoi les maisons de mode choisissent Amani</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Expérience des saisons passées</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Nos chauffeurs ont déjà couvert plusieurs Fashion Weeks. Ils connaissent les lieux
                récurrents, les changements de dernière minute et les contraintes de circulation
                spécifiques à ces périodes.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Flexibilité horaire totale</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Les plannings de la Fashion Week changent constamment. Un show est déplacé, un
                fitting rallongé, une afterparty ajoutée. Votre chauffeur s'adapte en temps réel,
                sans supplément pour les modifications d'itinéraire.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Flotte adaptée aux besoins</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Mercedes Classe S pour les designers et directeurs artistiques. Classe V pour
                les équipes de production. Sprinter VIP pour les navettes de mannequins entre
                les lieux de défilé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pages associées</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Paris Fashion Week', href: '/evenements/paris-fashion-week' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Chauffeur privé Paris', href: '/chauffeur-prive-paris' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Hôtels de luxe Paris', href: '/transfert-hotel-luxe-paris' },
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

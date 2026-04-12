import type { Metadata } from 'next';
import Image from 'next/image';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'a-propos';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'À Propos — Amani Limousines | Chauffeur Privé de Prestige | France & Europe',
  description: 'Amani Limousines, service de chauffeur privé de prestige en France et en Europe. Notre histoire, nos valeurs, notre flotte de 300+ véhicules. Ambassades, palaces, aviation privée.',
  canonical: 'https://www.amani-limousines.com/a-propos',
});

export default function AProposPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Notre histoire</p>
          <h1 className="heading mt-3">
            {c('h1', 'Amani Limousines — service de chauffeur privé de prestige à Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines est un prestataire de transport de prestige basé à Paris, spécialisé dans le service aux ambassades, aux États étrangers, aux family offices, aux palaces parisiens et à l\'aviation privée. Nous opérons 24 heures sur 24, 365 jours par an, avec une flotte de plus de 300 véhicules de moins de trois ans.')}
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

      {/* Chauffeurs multilingues */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex md:items-start md:gap-10">
            <div className="md:flex-1">
              <h2 className="heading">
                {c('chauffeurs_h2', 'Des chauffeurs privés qui parlent votre langue')}
              </h2>
              <p className="sf text-stone-600 mt-4 leading-relaxed">
                {c('chauffeurs_p1', "Quand votre chauffeur parle votre langue, le trajet change complètement. Ce n'est plus juste un déplacement — vous pouvez échanger, poser des questions, vous faire comprendre sans effort.")}
              </p>
              <p className="sf text-stone-600 mt-4 leading-relaxed">
                {c('chauffeurs_p2', "Nos chauffeurs parlent plus de 10 langues. Cela signifie accueillir des hommes d'affaires saoudiens à Roissy en arabe, échanger sur un itinéraire avec une famille japonaise, ou coordonner avec une délégation allemande sur le programme du jour. Ils maîtrisent Paris et savent s'adapter aux codes de chaque culture.")}
              </p>
              <p className="sf text-stone-600 mt-4 leading-relaxed">
                {c('chauffeurs_p3', "Chez Amani Limousines, notre engagement envers le service transcende la simple conduite. Nous anticipons vos besoins, vous offrons des conseils et supervisons chaque détail avec une attention méticuleuse.")}
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:w-72 lg:w-80 shrink-0 flex justify-center">
              <Image
                src="/lounes-about.jpg"
                alt="Chauffeur privé Amani Limousines"
                width={320}
                height={400}
                className="rounded-2xl object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

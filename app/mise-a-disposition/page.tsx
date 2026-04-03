import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'mise-a-disposition';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: "Mise à Disposition Chauffeur Privé Paris — À l'Heure, Demi-Journée, Journée | Amani Limousines",
  description: 'Louez un chauffeur privé à l\'heure à Paris. Demi-journée, journée complète, plusieurs jours. Compteur arrêté pendant les attentes. Berlines Mercedes et vans VIP.',
  canonical: 'https://www.amani-limousines.com/mise-a-disposition',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/hourly-hire',
      'x-default': 'https://www.amani-limousines.com/mise-a-disposition',
    },
  },
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mise à disposition chauffeur privé Paris',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Paris, Île-de-France',
  description: 'Location de chauffeur privé à l\'heure à Paris. Demi-journée ou journée complète.',
};

export default function MiseADispositionPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">{c('tag', "Chauffeur à l'heure")}</p>
          <h1 className="heading mt-3">
            {c('h1', 'Mise à disposition d\'un chauffeur privé à Paris — votre agenda, notre flexibilité')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Contrairement au transfert point A–point B, la mise à disposition place un chauffeur privé à Paris à votre service pour toute une durée déterminée. Le véhicule reste à votre disposition entre chaque rendez-vous — garé à proximité, disponible en deux minutes — ce qui transforme une journée de réunions en Île-de-France en quelque chose de beaucoup plus gérable.')}
          </p>
        </div>
      </section>

      {/* Fonctionnement */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_1_title', 'Comment ça fonctionne')}</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_1_text', "Vous indiquez l'heure de début, l'heure de fin approximative et votre premier point de prise en charge. Le reste se gère en temps réel. Vous sortez d'une réunion à Neuilly, votre prochaine adresse est dans le Marais ? Un message à votre chauffeur et la route est organisée. Besoin de faire un détour par un palace pour déposer des documents ? Aucune procédure, aucune application à ouvrir. Le chauffeur adapte l'itinéraire immédiatement.")}
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_1_text_2', "Le compteur ne tourne pas pendant que vous êtes en réunion. Les temps d'attente sont inclus dans le forfait horaire — vous payez uniquement la durée de mise à disposition initialement convenue, peu importe combien d'adresses vous visitez dans ce laps de temps.")}
          </p>
        </div>
      </section>

      {/* Formules */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_2_title', 'Formules disponibles')}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                titre: c('item_1_title', 'Demi-journée'),
                duree: c('item_1_text', '4 heures'),
                desc: c('item_1_desc', "Idéal pour une matinée de rendez-vous ou un après-midi d'événements. Recommandé pour 2 à 4 adresses."),
              },
              {
                titre: c('item_2_title', 'Journée complète'),
                duree: c('item_2_text', '8 heures'),
                desc: c('item_2_desc', 'Le format le plus demandé pour les visites client, les tournées de délégations et les journées de salon.'),
              },
              {
                titre: c('item_3_title', 'Plusieurs jours'),
                duree: c('item_3_text', 'Sur mesure'),
                desc: c('item_3_desc', 'Pour les délégations en visite à Paris sur plusieurs jours. Même chauffeur, même véhicule, pleine continuité.'),
              },
            ].map((f) => (
              <div key={f.titre} className="card">
                <p className="sf text-xs text-stone-400 uppercase tracking-wider">{f.duree}</p>
                <p className="heading text-xl mt-1">{f.titre}</p>
                <p className="sf text-stone-500 text-sm mt-3 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_3_title', 'Pour qui, pour quoi')}</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_3_text', "La mise à disposition est particulièrement utilisée par les directions générales qui enchaînent plusieurs rendez-vous sur Paris dans la même journée, les délégations étrangères en visite institutionnelle, les familles qui souhaitent visiter Paris confortablement sans se soucier des taxis entre chaque musée ou boutique, et les agences de voyage premium qui organisent des séjours haut de gamme pour leurs clients.")}
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_3_text_2', "Un chauffeur privé à Paris à la journée représente aussi souvent une économie réelle par rapport à multiplier les courses VTC à l'unité — sans même parler du confort de retrouver le même véhicule, chaud ou climatisé selon la saison, avec vos affaires restées à bord entre les trajets.")}
          </p>
        </div>
      </section>

      {/* Véhicules */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_4_title', 'Véhicules disponibles à la mise à disposition')}</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              { name: c('item_4_title', 'Mercedes Classe E'), note: c('item_4_text', 'Berline 3 passagers — la plus polyvalente pour Paris intra-muros') },
              { name: c('item_5_title', 'Mercedes Classe S'), note: c('item_5_text', 'Berline executive — pour les présidents et directeurs généraux') },
              { name: c('item_6_title', 'Mercedes Classe V'), note: c('item_6_text', 'Minivan 7 passagers — idéale pour les groupes et familles') },
              { name: c('item_7_title', 'Mercedes Sprinter VIP'), note: c('item_7_text', 'Minibus 16 places — pour les délégations importantes') },
            ].map((v) => (
              <div key={v.name} className="card flex gap-4">
                <div>
                  <p className="sf font-medium text-gray-900">{v.name}</p>
                  <p className="sf text-sm text-stone-500 mt-1">{v.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

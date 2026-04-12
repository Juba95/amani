import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'transfert-prive';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Transfert Privé — Prix Fixe Porte à Porte | France & Europe | Amani Limousines',
  description: 'Transfert privé avec chauffeur partout en France et en Europe. Prix fixe garanti, sans compteur. Aéroports, gares, hôtels et adresses personnalisées. Réservation immédiate.',
  canonical: 'https://www.amani-limousines.com/transfert-prive',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/cdg-airport-transfer',
      'x-default': 'https://www.amani-limousines.com/transfert-prive',
    },
  },
});

export default function TransfertPrivePage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">{c('tag', 'Transfert point à point')}</p>
          <h1 className="heading mt-3">
            {c('h1', 'Transfert privé à Paris — prix fixe garanti, porte à porte')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Le transfert privé est la prestation la plus simple d\'Amani Limousines : un point de départ, un point d\'arrivée, un prix annoncé à l\'avance. Pas de compteur, pas de majoration d\'embouteillage, pas de surprise au moment de régler. Le montant que vous voyez dans le devis est celui que vous payez, qu\'il y ait des travaux sur le périphérique ou non.')}
          </p>
        </div>
      </section>

      {/* Prix fixe */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_1_title', 'Pourquoi le prix fixe change tout')}</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_1_text', "Un taxi parisien à compteur peut varier du simple au double selon l'heure et les conditions de circulation. Une course CDG–Paris facturée 65 € un mardi à 14h peut coûter 110 € un vendredi à 18h. En choisissant un transfert privé à Paris avec prix fixe, vous savez exactement ce que vous déboursez avant même que votre vol ne décole. C'est particulièrement utile pour les notes de frais, les devis client et les budgets de délégation.")}
          </p>
        </div>
      </section>

      {/* Couverture géographique */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_2_title', "Toute l'Île-de-France couverte")}</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              { cat: c('item_1_title', 'Aéroports'), lieux: c('item_1_text', 'CDG, Orly, Le Bourget') },
              { cat: c('item_2_title', 'Gares'), lieux: c('item_2_text', "Gare du Nord, Gare de Lyon, Gare de l'Est, Montparnasse") },
              { cat: c('item_3_title', 'Palaces & Hôtels'), lieux: c('item_3_text', 'Le Meurice, Ritz, George V, Plaza Athénée, Bristol, Shangri-La') },
              { cat: c('item_4_title', "Quartiers d'affaires"), lieux: c('item_4_text', 'La Défense, Boulogne, Issy-les-Moulineaux, Levallois') },
              { cat: c('item_5_title', 'Événements'), lieux: c('item_5_text', 'Palais des Congrès, Carrousel du Louvre, Versailles, Stade de France') },
              { cat: c('item_6_title', 'Adresses personnalisées'), lieux: c('item_6_text', 'Domicile, cabinet, siège social, résidence privée') },
            ].map((item) => (
              <div key={item.cat} className="card">
                <p className="sf text-xs text-stone-400 uppercase tracking-wider">{item.cat}</p>
                <p className="sf text-sm text-gray-700 mt-2">{item.lieux}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_3_title', 'Réserver votre transfert privé Paris')}</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_3_text', "La réservation se fait par téléphone, WhatsApp ou via notre formulaire en ligne. Indiquez votre point de départ, votre destination, la date, l'heure et le nombre de passagers et de bagages. Vous recevez une confirmation avec le nom et le numéro du chauffeur dans l'heure. La veille, une confirmation automatique vous rappelle les détails de la course.")}
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_3_text_2', "Pour les transferts vers un aéroport, nous conseillons de communiquer le numéro de vol afin que notre équipe puisse surveiller d'éventuels changements d'horaire et adapter la prise en charge en conséquence.")}
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

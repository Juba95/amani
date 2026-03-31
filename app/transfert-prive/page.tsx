import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Transfert Privé Paris — Prix Fixe Porte à Porte | Amani Limousines',
  description:
    'Transfert privé à Paris avec chauffeur. Prix fixe garanti, sans compteur. Aéroports, gares, hôtels et adresses personnalisées. Réservation immédiate.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/transfert-prive',
    languages: {
      en: 'https://www.amani-limousines.com/en/cdg-airport-transfer',
      'x-default': 'https://www.amani-limousines.com/transfert-prive',
    },
  },
};

export default function TransfertPrivePage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Transfert point à point</p>
          <h1 className="heading mt-3">
            <strong>Transfert privé à Paris</strong> —{' '}
            <em>prix fixe garanti</em>, porte à porte
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Le transfert privé est la prestation la plus simple d'Amani Limousines :
            un point de départ, un point d'arrivée, un prix annoncé à l'avance.
            Pas de compteur, pas de majoration d'embouteillage, pas de surprise au moment de
            régler. Le montant que vous voyez dans le devis est celui que vous payez,
            qu'il y ait des travaux sur le périphérique ou non.
          </p>
        </div>
      </section>

      {/* Prix fixe */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pourquoi le prix fixe change tout</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Un taxi parisien à compteur peut varier du simple au double selon l'heure et les
            conditions de circulation. Une course CDG–Paris facturée 65 € un mardi à 14h peut
            coûter 110 € un vendredi à 18h. En choisissant un <strong>transfert privé à Paris</strong>
            avec prix fixe, vous savez exactement ce que vous déboursez avant même que votre vol ne
            décole. C'est particulièrement utile pour les notes de frais, les devis client et les
            budgets de délégation.
          </p>
        </div>
      </section>

      {/* Couverture géographique */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Toute l'Île-de-France couverte</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              { cat: 'Aéroports', lieux: 'CDG, Orly, Le Bourget' },
              { cat: 'Gares', lieux: 'Gare du Nord, Gare de Lyon, Gare de l\'Est, Montparnasse' },
              { cat: 'Palaces & Hôtels', lieux: 'Le Meurice, Ritz, George V, Plaza Athénée, Bristol, Shangri-La' },
              { cat: 'Quartiers d\'affaires', lieux: 'La Défense, Boulogne, Issy-les-Moulineaux, Levallois' },
              { cat: 'Événements', lieux: 'Palais des Congrès, Carrousel du Louvre, Versailles, Stade de France' },
              { cat: 'Adresses personnalisées', lieux: 'Domicile, cabinet, siège social, résidence privée' },
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
          <h2 className="heading">Réserver votre <em>transfert privé Paris</em></h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            La réservation se fait par téléphone, WhatsApp ou via notre formulaire en ligne.
            Indiquez votre point de départ, votre destination, la date, l'heure et le nombre
            de passagers et de bagages. Vous recevez une confirmation avec le nom et le numéro
            du chauffeur dans l'heure. La veille, une confirmation automatique vous rappelle
            les détails de la course.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour les transferts vers un aéroport, nous conseillons de communiquer le numéro de
            vol afin que notre équipe puisse surveiller d'éventuels changements d'horaire et
            adapter la prise en charge en conséquence.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

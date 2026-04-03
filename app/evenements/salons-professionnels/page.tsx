import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'evenements/salons-professionnels';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Salons Professionnels Paris — Première Vision, MIF, Paris Air Show | Amani Limousines',
  description: 'Transport privé pour salons et foires professionnels à Paris. Paris Air Show, Première Vision, Maison et Objet, MIF Expo. Navette hôtel–stand, mise à disposition chauffeur.',
  canonical: 'https://www.amani-limousines.com/evenements/salons-professionnels',
});

export default function SalonsProfessionnelsPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">{c('tag', 'Événements professionnels — Paris & Le Bourget')}</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé pour salons professionnels à Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Les grands salons parisiens — Paris Air Show, Première Vision, Maison et Objet, MIF Expo — attirent des acheteurs, des dirigeants et des délégations du monde entier. La plupart descendent dans des hôtels du 8ème ou du 16ème, et passent leurs journées entre plusieurs halls d\'exposition. Un chauffeur dédié au salon supprime les trajets en taxi et les attentes aux arrêts.')}
          </p>
        </div>
      </section>

      {/* Paris Air Show */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_1_title', 'Paris Air Show — Le Bourget')}</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_1_text', "L'aéroport du Bourget est à 15 kilomètres du centre de Paris. Pendant le Salon (juin, tous les deux ans), les entrées sont contrôlées par badge et les routes autour du site sont saturées. Nos chauffeurs connaissent les accès réservés aux exposants et aux acheteurs — les barrages, les timings, les itinéraires bis. On travaille régulièrement avec des délégations aérospatiales qui ont plusieurs rendez-vous de stand par jour, des arrivées décalées à CDG et plusieurs points de prise en charge dans Paris. Mise à disposition à la journée ou demi-journée selon votre calendrier de visite.")}
          </p>
        </div>
      </section>

      {/* Première Vision */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_2_title', 'Première Vision — Paris Nord Villepinte')}</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_2_text', "Villepinte est en dehors du périphérique, pas facile d'accès en transport en commun avec des échantillons de collections ou des moodboards. Le chauffeur attend entre les sessions (souvent 4 à 5 heures), transporte vos collections sans risque de froissement, vous ramène à votre hôtel parisien le soir, et revient vous chercher le lendemain. C'est plus confortable et plus professionnel que les navettes bondées et les taxis en épuisement sur les routes d'Île-de-France.")}
          </p>
        </div>
      </section>

      {/* MIF et Maison et Objet */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">{c('section_3_title', 'Maison et Objet')}</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              {c('section_3_text', "Villepinte est le site habituel. Salon grand public et professionnel, très fréquenté. Routes d'accès limitées (A3, A4 depuis le centre). Nos chauffeurs maîtrisent l'accès via Gonesse ou contournement par Tremblay.")}
            </p>
          </div>
          <div>
            <h2 className="heading">{c('section_4_title', 'MIF Expo')}</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              {c('section_4_text', "Porte de Versailles ou Villepinte selon les années. Salon du mobilier et des matériaux. Configuration classique hôtel 8ème–16ème vers salon. Accès Porte de Versailles par Pont de l'Alma bien connu de nos chauffeurs.")}
            </p>
          </div>
        </div>
      </section>

      {/* Navette hôtel-salon */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_5_title', 'Navette hôtel–salon coordonnée')}</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_5_text', "Pour les délégations qui ont plusieurs membres logés dans différents hôtels (Four Seasons, Plaza Athénée, Mandarin Oriental, Hilton), nous coordonnons les prises en charge sequentielles. Un chauffeur part du premier hôtel à 8h30, ramasse les visiteurs des deux ou trois autres hôtels avec timing serré, arrive au salon à l'ouverture. L'après-midi, même logique en sens inverse. Classe V (7 places) ou Sprinter VIP (jusqu'à 16 places) selon le nombre de délégués.")}
          </p>
        </div>
      </section>

      {/* Transferts aéroports */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_6_title', 'Transfert aéroports → salon')}</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_6_text', "Beaucoup de visiteurs arrivent à CDG ou Orly les jours d'ouverture du salon. Ils demandent un transfert direct CDG–Villepinte sans passer par l'hôtel. CDG vers Villepinte, c'est 30 à 40 minutes hors trafic. Nos chauffeurs coordonnent l'arrivée avec les timings d'enregistrement au salon. Pour les arrivées en fin d'après-midi, navette aéroport → hôtel → salon le jour suivant. Nous gérons aussi les transferts de delegués depuis Orly ou CDG vers d'autres aéroports secondaires (Beauvais) pour les vols ultérieurs.")}
          </p>
        </div>
      </section>

      {/* Durée et formules */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_7_title', 'Formules de mise à disposition')}</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_7_text', "Les salons durent généralement 5 jours (Première Vision), parfois jusqu'à 10 jours (Paris Air Show). Vous pouvez réserver une mise à disposition : journée simple (8 heures), demi-journée (4 heures), ou plusieurs jours consécutifs. Tarif dégressif à partir de trois jours. Le chauffeur est à votre disposition exclusivement — pas de partage avec d'autres clients. Itinéraires illimités dans Paris et Île-de-France. Devis selon la durée, le nombre de passagers (Classe E, Classe V, Sprinter VIP) et le salon.")}
          </p>
        </div>
      </section>

      {/* Flotte salon */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_8_title', 'Flotte adaptée aux salons')}</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_8_text', "Classe E (4 passagers) pour les visiteurs solo ou duo, très maniable en circulation parisienne. Classe V (7 places) pour les petites délégations, coffre spacieux pour les documents et maquettes. Sprinter VIP climatisé (jusqu'à 16 places) pour les groupes de délégués complets. Tous les véhicules disposent d'une Wi-Fi embarquée et des prises 220V pour recharger téléphones et ordinateurs portables pendant les trajets.")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="sf text-stone-600 leading-relaxed">
            Vous organisez votre participation à un grand salon parisien et cherchez un transport
            fiable pour votre équipe ou vos délégués. Nous mettons à disposition un chauffeur
            dédié pour la durée du salon, avec coordination d'accès, navettes hôtel–exposition,
            transferts aéroports. Consultez nos services de <strong>mise à disposition chauffeur</strong>,
            <strong> longue distance</strong>, et <strong>transfert aéroport CDG</strong>.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

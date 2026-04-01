import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-mariage-paris';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Mariage Paris — Mercedes Classe S et Classe E | Amani Limousines',
  description: 'Chauffeur privé pour mariage à Paris et Île-de-France. Mercedes Classe E et Classe S pour les mariés, Sprinter VIP pour les convois. Tarif à la journée ou demi-journée.',
  canonical: 'https://www.amani-limousines.com/chauffeur-mariage-paris',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en',
    },
  },
});

export default function ChauffeurMariageParisPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Mariage — Paris & Île-de-France</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé pour mariage à Paris — véhicule pour les mariés et les convois')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Le transport du mariage, c\'est souvent la dernière chose à laquelle on pense et la première à poser problème. Le chauffeur des mariés arrive en retard, le cortège se disperse, quelqu\'un doit garder un œil sur les horaires. On s\'occupe de tout ça. Flotte Mercedes, disponibilité à la demi-journée ou à la journée, coordination avec votre maître de cérémonie si nécessaire.')}
          </p>
        </div>
      </section>

      {/* Véhicule des mariés */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Le véhicule des mariés</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Vous avez le choix entre la Classe E et la Classe S selon le niveau de prestations
            souhaité. Les deux offrent un intérieur en cuir satiné, climatisation, finitions
            discrètes et sobres. Le tapis de sol est protégé pour la robe (pas de salissure sur
            le tissu). Décoration florale possible sur demande — couronne d'eucalyptus, roses
            blanches, selon vos couleurs. Le chauffeur porte une tenue sombre (costume gris
            anthracite ou noir), s'adapte aux directives de protocole que vous communiquez. Il
            arrive 15 minutes en avance aux points de prise en charge, maîtrise les trajets et
            les timings pour éviter les ralentissements de dernière minute.
          </p>
        </div>
      </section>

      {/* Convoi de noces */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Le convoi : familles, témoins, invités</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour transporter les familles et les témoins depuis la mairie ou l'église jusqu'au
            lieu de réception, nous proposons plusieurs solutions. La Classe V (7 places assises
            confortables) accueille les parents des mariés et les témoins. Le Sprinter VIP
            (jusqu'à 16 places climatisées) permet d'organiser un convoi cohérent pour les
            proches. Vous économisez les taxis dispersés et chaotiques. Tous les véhicules
            arrivent au même horaire, les photos de groupe se font sans attendre. Coordination
            par radio entre chauffeur des mariés et chauffeurs des autres véhicules.
          </p>
        </div>
      </section>

      {/* Lieux desservis */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Lieux de mariage desservis</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Nous travaillons régulièrement avec les châteaux d'Île-de-France les plus prestigieux :
            Vaux-le-Vicomte (Maincy), Chantilly (parc classique pour les réceptions en jardins),
            Fontainebleau (cérémonies dans la galerie), Versailles (Jeu de Paume, salons des
            Princes). Pour Paris intra-muros, les salles du 16ème arrondissement (Palais de Chaillot,
            Musée du Chocolat) et du 8ème (Four Seasons, Plaza Athénée). Nous coordonnons aussi
            les transferts depuis les aéroports pour les invités étrangers : CDG ou Orly vers la
            mairie, vers l'hôtel, vers le château. Les routes de sorties île-de-France sont bien
            maîtrisées par nos chauffeurs.
          </p>
        </div>
      </section>

      {/* Mairie et église */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Mairies d'arrondissement</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Les mairies parisiennes ont des créneaux de stationnement réservés. Nos chauffeurs
              connaissent l'accès, le timing, l'architecture (escaliers pour les photos).
              Circulation dense en semaine comme en week-end, nos chauffeurs gèrent les
              contournements.
            </p>
          </div>
          <div>
            <h2 className="heading">Cathédrales et églises</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Notre-Dame-de-Chartres, cathédrales de province, église parisienne du 5ème ou 6ème.
              Les zones piétonnes imposent des dépose à distance. Le chauffeur connaît les points
              d'accès pour mariée en robe longue, sans descendre du trottoir.
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs et réservation */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Tarifs et réservation</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Nous proposons deux formules. Prestation à la demi-journée (4 heures minimum,
            idéale pour mairie + réception courte). Prestation à la journée (8 heures, mairie
            + église + apéritif + dîner + retour). Devis établi après échange détaillé sur
            le programme complet : horaires, lieux, nombre de convois, options (décoration,
            retour tardif). Réservation conseillée trois mois à l'avance pour les dates
            prisées de mai–juin et septembre. Les samedis juillet–août se réservent rapidement.
            Tarifs selon saison et configuration (à partir de 180 euros la demi-journée pour
            les mariés en Classe E, devis groupé pour convois).
          </p>
        </div>
      </section>

      {/* Coordination avec maître de cérémonie */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Coordination avec votre prestataire</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Si vous avez un maître de cérémonie ou un wedding planner, nous nous coordonnons
            directement avec eux. Timing de la cérémonie, horaire de prise en charge des mariés,
            arrivée à la réception, photos de groupe, apéritif. Les chauffeurs reçoivent un
            brief détaillé la veille. Aucun débordement horaire surprise, tous les véhicules
            arrivent comme prévu.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <p className="sf text-stone-600 leading-relaxed">
            Vous préparez votre mariage à Paris ou en Île-de-France et cherchez un transport
            fiable pour les mariés et les convois. Contactez-nous pour un devis et un échange
            sur votre journée. Découvrez aussi nos services de <strong>mise à disposition chauffeur</strong>,
            <strong> transfert aéroport CDG</strong>, et <strong>longue distance</strong> pour
            les invités en provenance de province.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

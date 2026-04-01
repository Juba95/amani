import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'transfert-le-bourget';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Le Bourget — Transfert Aviation Privée | Amani Limousines',
  description: 'Chauffeur privé à l\'aéroport du Bourget. Accueil FBO, jets privés, délégations officielles. 15 km de Paris. Disponible 24h/24, flotte Mercedes et vans VIP.',
  canonical: 'https://www.amani-limousines.com/transfert-le-bourget',
});

export default function TransfertLeBourgetPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Aviation Privée — Le Bourget</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé Le Bourget Paris — transferts jets et hélicoptères')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'L\'aéroport du Bourget est la principale plateforme d\'aviation d\'affaires en France, et l\'une des plus fréquentées d\'Europe. Dassault Falcon, Bombardier Global, Gulfstream G700 : les appareils qui se posent ici transportent des dirigeants, des délégations gouvernementales et des familles qui n\'ont pas de marge sur les horaires. Le transfert chauffeur privé Le Bourget doit être à la hauteur de l\'appareil.')}
          </p>
        </div>
      </section>

      {/* FBO */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Accueil au FBO — discrétion et réactivité</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Au Bourget, les passagers d'aviation privée n'empruntent pas les terminaux commerciaux.
            Ils arrivent dans des Fixed Base Operators (FBO) tels que Signature, Jet Aviation ou
            Dassault Falcon Service. Votre <strong>chauffeur privé Paris Le Bourget</strong> est
            autorisé à stationner au pied de l'escalier de l'appareil sur certains FBO, ou
            directement à l'entrée du salon VIP selon les arrangements préalables avec l'opérateur.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            La coordination se fait avec votre handler ou votre broker d'aviation privée.
            Nous avons l'habitude de travailler avec les principales sociétés de gestion aéronautique
            qui opèrent sur Le Bourget. Un simple ETA suffit pour organiser la prise en charge.
          </p>
        </div>
      </section>

      {/* Distance et temps */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">15 km de Paris — 20 minutes</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Le Bourget est situé à 15 km au nord de Paris. En dehors des heures de pointe,
              le trajet vers le centre de Paris prend 20 à 25 minutes. Vers La Défense,
              comptez 15 à 20 minutes en empruntant l'A86. Le prix minimum pour un transfert
              Bourget–Paris centre est de 80 € en Mercedes Classe E.
            </p>
          </div>
          <div>
            <h2 className="heading">Convois et délégations</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Les arrivées de délégations au Bourget impliquent souvent plusieurs appareils
              et de nombreux passagers. Nous coordonnons régulièrement des convois de 5 à 15
              véhicules pour les missions diplomatiques et les groupes corporates, avec un
              dispatcher central et une communication radio entre tous les chauffeurs.
            </p>
          </div>
        </div>
      </section>

      {/* Salon Paris Air Show */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Paris Air Show — expertise reconnue</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Tous les deux ans, le Salon International de l'Aéronautique et de l'Espace transforme
            Le Bourget en un hub mondial. Les transferts se multiplient, les plannings sont serrés
            entre les démos en vol et les réunions bilatérales. Amani Limousines est rompu à cette
            contrainte : nous intervenons sur chaque édition du salon avec des équipes dédiées,
            des véhicules supplémentaires en réserve et un coordinateur disponible sur site.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

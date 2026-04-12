import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'mentions-legales';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Mentions Légales — Amani Limousines',
  description: 'Mentions légales d\'Amani Limousines, service de chauffeur privé de prestige en France et en Europe.',
  canonical: 'https://www.amani-limousines.com/mentions-legales',
});

export default function MentionsLegalesPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      <section className="pt-36 pb-20 px-6 md:px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="tag">Informations légales</p>
          <h1 className="heading mt-3">
            {c('h1', 'Mentions légales')}
          </h1>

          <div className="mt-10 space-y-10 sf text-stone-600 leading-relaxed">
            <div>
              <h2 className="heading text-xl text-gray-900">Éditeur du site</h2>
              <p className="mt-3">
                <strong>Amani Limousines</strong><br />
                Service de chauffeur privé de prestige<br />
                Paris, France<br />
                Téléphone : +33 6 62 02 73 44<br />
                Email : contact@amani-limousines.com<br />
                Site web : www.amani-limousines.com
              </p>
            </div>

            <div>
              <h2 className="heading text-xl text-gray-900">Activité réglementée</h2>
              <p className="mt-3">
                Amani Limousines exerce son activité en tant que Voiture de Tourisme avec
                Chauffeur (VTC) conformément aux dispositions de la loi n°2009-888 du 22 juillet
                2009 et du décret n°2014-1274 du 23 octobre 2014. Nos chauffeurs sont titulaires
                de la carte professionnelle VTC délivrée par le Registre des Voitures de Tourisme
                avec Chauffeur (RVTC) et l'autorisation d'exercer délivrée par la préfecture.
              </p>
            </div>

            <div>
              <h2 className="heading text-xl text-gray-900">Hébergement</h2>
              <p className="mt-3">
                Le site amani-limousines.com est hébergé par Vercel Inc.,
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
              </p>
            </div>

            <div>
              <h2 className="heading text-xl text-gray-900">Propriété intellectuelle</h2>
              <p className="mt-3">
                L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes)
                est la propriété exclusive d'Amani Limousines ou de ses partenaires. Toute
                reproduction, représentation, modification, publication ou adaptation de tout
                ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé,
                est interdite sans autorisation écrite préalable.
              </p>
            </div>

            <div>
              <h2 className="heading text-xl text-gray-900">Données personnelles</h2>
              <p className="mt-3">
                Les informations collectées via notre formulaire de réservation (nom, téléphone,
                email, détails du trajet) sont utilisées uniquement pour le traitement de votre
                demande. Elles ne sont ni vendues ni transmises à des tiers, sauf obligation légale.
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous
                disposez d'un droit d'accès, de rectification et de suppression de vos données.
                Pour exercer ce droit, contactez-nous à contact@amani-limousines.com.
              </p>
            </div>

            <div>
              <h2 className="heading text-xl text-gray-900">Cookies</h2>
              <p className="mt-3">
                Ce site utilise des cookies techniques strictement nécessaires à son fonctionnement.
                Aucun cookie publicitaire ou de traçage tiers n'est déposé sans votre consentement.
              </p>
            </div>

            <div>
              <h2 className="heading text-xl text-gray-900">Responsabilité</h2>
              <p className="mt-3">
                Amani Limousines s'efforce de fournir des informations aussi précises que possible
                sur ce site. Cependant, la société ne pourra être tenue responsable des omissions,
                inexactitudes et carences dans la mise à jour. Les informations tarifaires sont
                données à titre indicatif et peuvent évoluer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

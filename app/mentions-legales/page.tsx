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
                Téléphone : +33 6 87 16 97 47<br />
                Email : amani.limousines@gmail.com<br />
                Site web : www.amani-limousines.com
              </p>
            </div>

            <div>
              <h2 className="heading text-xl text-gray-900">Informations légales de la société</h2>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {[
                      ['Dénomination sociale', 'Amani Limousines'],
                      ['Forme juridique', 'SASU — société par actions simplifiée unipersonnelle'],
                      ['Capital social', '600,00 €'],
                      ['SIREN', '821 665 395'],
                      ['SIRET (siège)', '821 665 395 00025'],
                      ['Numéro de TVA intracommunautaire', 'FR90 821 665 395'],
                      ['Numéro RCS', '821 665 395 R.C.S. Paris'],
                      ['Immatriculation au RCS', 'Inscrit au greffe de Paris le 22/07/2016'],
                      ['Immatriculation au RNE', 'Inscrit le 22/07/2016'],
                    ].map(([k, v]) => (
                      <tr key={k} className="border-b border-warm-200">
                        <th scope="row" className="text-left align-top font-medium text-gray-700 py-2 pr-4 whitespace-nowrap">{k}</th>
                        <td className="py-2 text-stone-600">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-stone-500">
                Directeur de la publication : le représentant légal d’Amani Limousines.
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
                Le site amani-limousines.com est hébergé par <strong>OVH SAS</strong>,
                2 rue Kellermann, 59100 Roubaix, France — RCS Lille Métropole 424 761 419 00045.
                Téléphone : 1007.
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
                Pour exercer ce droit, contactez-nous à amani.limousines@gmail.com.
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

import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité — Amani Limousines',
  description:
    'Comment Amani Limousines collecte, utilise et protège vos données personnelles, conformément au RGPD. Finalités, durées de conservation et vos droits.',
  alternates: { canonical: 'https://www.amani-limousines.com/politique-confidentialite' },
  robots: { index: true, follow: true },
};

const SECTIONS: { h: string; body: React.ReactNode }[] = [
  {
    h: 'Responsable du traitement',
    body: (
      <p>
        Les données personnelles collectées sur ce site sont traitées par <strong>Amani Limousines</strong>{' '}
        (SASU, SIREN 821 665 395), établie à Paris, France. Pour toute question relative à vos données,
        écrivez à <a href="mailto:contact@amani-limousines.com" className="text-gold-500 hover:underline">contact@amani-limousines.com</a>.
      </p>
    ),
  },
  {
    h: 'Données que nous collectons',
    body: (
      <>
        <p>Nous ne collectons que les données strictement nécessaires à votre demande :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Identité et contact</strong> : nom, prénom, numéro de téléphone, adresse e-mail.</li>
          <li><strong>Détails de la course</strong> : adresses de départ et d’arrivée, date, horaire, nombre de passagers, demandes particulières.</li>
          <li><strong>Données techniques</strong> : données de navigation strictement nécessaires au fonctionnement du site (aucun cookie publicitaire).</li>
        </ul>
        <p className="mt-2">
          Nous ne collectons aucune donnée bancaire via le site : le règlement s’effectue directement auprès du chauffeur ou par lien sécurisé émis par notre prestataire de paiement.
        </p>
      </>
    ),
  },
  {
    h: 'Finalités et base légale',
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Établir un devis et traiter votre demande de réservation — <em>exécution de mesures précontractuelles</em>.</li>
        <li>Assurer la prestation de transport et son suivi — <em>exécution du contrat</em>.</li>
        <li>Répondre à vos messages et vous recontacter — <em>intérêt légitime</em>.</li>
        <li>Respecter nos obligations comptables et légales — <em>obligation légale</em>.</li>
      </ul>
    ),
  },
  {
    h: 'Destinataires des données',
    body: (
      <p>
        Vos données sont traitées par Amani Limousines et, le cas échéant, par le chauffeur affecté à votre
        course pour la seule bonne exécution de la prestation. Elles ne sont <strong>ni vendues, ni louées, ni cédées</strong> à
        des tiers à des fins commerciales. Elles peuvent être transmises aux autorités compétentes en cas d’obligation légale.
      </p>
    ),
  },
  {
    h: 'Durée de conservation',
    body: (
      <p>
        Les données liées à une demande sans suite sont conservées <strong>12 mois</strong>. Les données liées à une
        prestation réalisée sont conservées <strong>3 ans</strong> à compter du dernier contact à des fins de relation
        client, et jusqu’à <strong>10 ans</strong> pour les documents comptables, conformément à la loi.
      </p>
    ),
  },
  {
    h: 'Cookies',
    body: (
      <p>
        Ce site n’utilise que des cookies techniques indispensables à son fonctionnement (mémorisation de votre
        choix de langue, sécurité). Aucun cookie de publicité ou de traçage tiers n’est déposé sans votre consentement.
      </p>
    ),
  },
  {
    h: 'Vos droits',
    body: (
      <>
        <p>Conformément au RGPD et à la loi « Informatique et Libertés », vous disposez des droits suivants :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Droit d’accès, de rectification et d’effacement de vos données.</li>
          <li>Droit à la limitation et à l’opposition au traitement.</li>
          <li>Droit à la portabilité de vos données.</li>
          <li>Droit de définir des directives relatives au sort de vos données après votre décès.</li>
        </ul>
        <p className="mt-2">
          Pour exercer ces droits, écrivez à{' '}
          <a href="mailto:contact@amani-limousines.com" className="text-gold-500 hover:underline">contact@amani-limousines.com</a>.
          Vous pouvez également introduire une réclamation auprès de la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:underline">www.cnil.fr</a>).
        </p>
      </>
    ),
  },
  {
    h: 'Sécurité',
    body: (
      <p>
        Amani Limousines met en œuvre des mesures techniques et organisationnelles appropriées (accès restreint,
        connexions chiffrées, hébergement en Union européenne) afin de protéger vos données contre tout accès,
        altération ou divulgation non autorisés.
      </p>
    ),
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <SEOLayout>
      <section className="pt-36 pb-20 px-6 md:px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="tag">Confidentialité</p>
          <h1 className="heading mt-3">Politique de confidentialité</h1>
          <p className="sf text-stone-500 mt-6 leading-relaxed">
            La protection de vos données personnelles est une priorité. Cette page décrit les informations que nous
            collectons, l’usage que nous en faisons et les droits dont vous disposez. Dernière mise à jour : juillet 2026.
          </p>

          <div className="mt-10 space-y-10 sf text-stone-600 leading-relaxed">
            {SECTIONS.map((s) => (
              <div key={s.h}>
                <h2 className="heading text-xl text-gray-900">{s.h}</h2>
                <div className="mt-3 space-y-2">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente — Amani Limousines',
  description:
    'Conditions générales de vente des prestations de chauffeur privé (VTC) Amani Limousines : réservation, prix, paiement, annulation, responsabilité et droit applicable.',
  alternates: { canonical: 'https://www.amani-limousines.com/cgv' },
  robots: { index: true, follow: true },
};

const ARTICLES: { h: string; body: React.ReactNode }[] = [
  {
    h: 'Article 1 — Objet et champ d’application',
    body: (
      <p>
        Les présentes conditions générales de vente (CGV) régissent les prestations de transport de personnes réalisées
        par <strong>Amani Limousines</strong> (SASU, SIREN 821 665 395) en qualité d’exploitant de Voitures de Tourisme
        avec Chauffeur (VTC). Toute réservation implique l’acceptation pleine et entière des présentes CGV.
      </p>
    ),
  },
  {
    h: 'Article 2 — Réservation',
    body: (
      <p>
        Les réservations s’effectuent via le site, par téléphone, e-mail ou messagerie. Toute demande fait l’objet d’un
        devis. La réservation n’est <strong>ferme qu’après confirmation</strong> écrite d’Amani Limousines précisant le
        véhicule, l’itinéraire, l’horaire et le prix. Le client s’engage à fournir des informations exactes (adresses,
        horaires, numéro de vol le cas échéant).
      </p>
    ),
  },
  {
    h: 'Article 3 — Prix',
    body: (
      <>
        <p>
          Les prix sont communiqués <strong>à l’avance et forfaitairement</strong>, en euros toutes taxes comprises. Le
          tarif confirmé comprend le véhicule, le chauffeur, le carburant, l’assurance et les péages, sauf mention contraire.
        </p>
        <p className="mt-2">
          Sont facturés en supplément, sur accord préalable : les arrêts ou détours non prévus, les temps d’attente au-delà
          de la franchise offerte, et toute prestation additionnelle demandée en cours de course.
        </p>
      </>
    ),
  },
  {
    h: 'Article 4 — Accueil et temps d’attente',
    body: (
      <p>
        Pour les transferts aéroport et gare, le chauffeur suit l’horaire réel d’arrivée. Une franchise d’attente de
        <strong> 60 minutes</strong> est offerte pour les vols et <strong>15 minutes</strong> pour les autres prises en charge.
        Au-delà, le temps d’attente est facturé au tarif horaire en vigueur.
      </p>
    ),
  },
  {
    h: 'Article 5 — Paiement',
    body: (
      <p>
        Le règlement s’effectue selon les modalités indiquées lors de la confirmation : directement auprès du chauffeur
        (carte ou espèces), par lien de paiement sécurisé, ou sur facture pour les comptes entreprises. Aucune donnée
        bancaire n’est stockée sur le site.
      </p>
    ),
  },
  {
    h: 'Article 6 — Modification et annulation',
    body: (
      <>
        <p>Toute modification est prise en compte sous réserve de disponibilité. Concernant l’annulation par le client :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Annulation <strong>plus de 24 h</strong> avant la prise en charge : sans frais.</li>
          <li>Annulation <strong>moins de 24 h</strong> avant : jusqu’à 50 % du montant peut être retenu.</li>
          <li>Absence du client au point de rendez-vous (<em>no-show</em>) : la prestation est due en totalité.</li>
        </ul>
        <p className="mt-2">
          En cas d’empêchement d’Amani Limousines (panne, force majeure), une solution de remplacement équivalente est
          proposée ou la course intégralement remboursée.
        </p>
      </>
    ),
  },
  {
    h: 'Article 7 — Obligations du client',
    body: (
      <p>
        Le client et ses passagers s’engagent à respecter le véhicule et les consignes de sécurité (port de la ceinture,
        interdiction de fumer). Le transport d’animaux ou de bagages volumineux doit être signalé à la réservation. Toute
        dégradation du véhicule imputable au client pourra faire l’objet d’une facturation.
      </p>
    ),
  },
  {
    h: 'Article 8 — Responsabilité et assurance',
    body: (
      <p>
        Amani Limousines est couverte par une assurance responsabilité civile professionnelle et transport de personnes.
        La responsabilité de la société ne saurait être engagée en cas de retard ou d’inexécution résultant d’un cas de
        force majeure (conditions météorologiques, blocages routiers, grèves, etc.).
      </p>
    ),
  },
  {
    h: 'Article 9 — Réclamations et médiation',
    body: (
      <p>
        Toute réclamation doit être adressée à{' '}
        <a href="mailto:contact@amani-limousines.com" className="text-gold-500 hover:underline">contact@amani-limousines.com</a>.
        Conformément à la réglementation, le client consommateur peut recourir gratuitement à un médiateur de la
        consommation en cas de litige non résolu à l’amiable.
      </p>
    ),
  },
  {
    h: 'Article 10 — Droit applicable',
    body: (
      <p>
        Les présentes CGV sont soumises au <strong>droit français</strong>. À défaut de résolution amiable, tout litige
        relève de la compétence des tribunaux du ressort du siège social d’Amani Limousines.
      </p>
    ),
  },
];

export default function CGVPage() {
  return (
    <SEOLayout>
      <section className="pt-36 pb-20 px-6 md:px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="tag">Conditions générales</p>
          <h1 className="heading mt-3">Conditions générales de vente</h1>
          <p className="sf text-stone-500 mt-6 leading-relaxed">
            Les présentes conditions encadrent les prestations de chauffeur privé d’Amani Limousines. Dernière mise à
            jour : juillet 2026.
          </p>

          <div className="mt-10 space-y-9 sf text-stone-600 leading-relaxed">
            {ARTICLES.map((a) => (
              <div key={a.h}>
                <h2 className="heading text-xl text-gray-900">{a.h}</h2>
                <div className="mt-3 space-y-2">{a.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

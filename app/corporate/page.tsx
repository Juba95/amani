import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate — Hôtels, Agences, Ambassades | Amani Limousines',
  description: 'Compte corporate Amani Limousines : dispatch prioritaire, facturation mensuelle, account manager dédié et tarifs négociés pour hôtels, agences de voyage, entreprises, ambassades et ministères.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/corporate',
    languages: { en: 'https://www.amani-limousines.com/en/corporate', 'x-default': 'https://www.amani-limousines.com/en/corporate' },
  },
};

const piliers = [
  { titre: 'Dispatch prioritaire', texte: 'Vos demandes passent devant. Une ligne dédiée, une réponse en moins de 15 minutes, des véhicules réservés aux partenaires en haute saison — Fashion Week comprise.' },
  { titre: 'Facturation mensuelle', texte: 'Fin des notes de frais course par course. Relevé mensuel détaillé par service, par client ou par centre de coût, paiement à 30 jours.' },
  { titre: 'Account manager dédié', texte: 'Un interlocuteur unique qui connaît vos habitudes, vos clients VIP et vos exigences de protocole. Joignable directement, pas de standard.' },
  { titre: 'Tarifs négociés', texte: 'Grille tarifaire partenaire selon votre volume, prix fixes garantis à l\'année, conditions préférentielles sur les mises à disposition longues.' },
];

const cibles = [
  { titre: 'Hôtels & conciergeries', texte: 'Vos clients jugent l\'hôtel jusque dans la voiture qui les transporte. Chauffeurs en costume, accueil au nom de votre établissement, remontée d\'information au concierge.' },
  { titre: 'Agences de voyage & DMC', texte: 'Un partenaire transport fiable pour vos circuits, transferts et journées privées. Confirmation instantanée, commission partenaire, assistance 24/7 pendant les séjours.' },
  { titre: 'Ambassades & ministères', texte: 'Convois officiels, visites d\'État, délégations. Chauffeurs habitués au protocole diplomatique, discrétion absolue, coordination avec les services de sécurité.' },
  { titre: 'Entreprises', texte: 'Déplacements dirigeants, roadshows investisseurs, transferts collaborateurs. Reporting RSE disponible (flotte hybride et électrique en croissance).' },
];

export default function CorporatePage() {
  return (
    <SEOLayout>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="tag">Corporate & partenaires</p>
          <h1 className="heading mt-3">Un desk dédié pour les hôtels, agences et ambassades</h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
            Depuis 15 ans, Amani Limousines est le partenaire transport des palaces parisiens,
            des agences de voyage internationales et des représentations diplomatiques.
            Un compte corporate, c’est notre organisation au service de la vôtre.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@amani-limousines.com?subject=Ouverture%20de%20compte%20corporate"
              className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase text-white" style={{ background: '#0a0908' }}>
              Ouvrir un compte corporate
            </a>
            <Link href="/contact"
              className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 hover:border-stone-600 transition-colors">
              Être rappelé
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading text-center mb-10">Ce que comprend un compte partenaire</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {piliers.map((p) => (
              <div key={p.titre} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{p.titre}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{p.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading text-center mb-10">Pensé pour votre métier</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cibles.map((c) => (
              <div key={c.titre} className="p-6 rounded-xl bg-warm-50 border border-warm-200">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{c.titre}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{c.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading mb-4">Parlons de votre volume</h2>
          <p className="sf text-stone-500 mb-8">
            Décrivez-nous vos besoins — nous revenons vers vous sous 24 h avec une proposition tarifaire.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@amani-limousines.com?subject=Ouverture%20de%20compte%20corporate"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white" style={{ background: '#0a0908' }}>
              contact@amani-limousines.com
            </a>
            <a href="tel:+33687169747"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 hover:border-stone-600 transition-colors">
              +33 6 87 16 97 47
            </a>
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

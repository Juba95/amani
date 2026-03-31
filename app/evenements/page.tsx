import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Transport Événementiel Paris — Salons, Fashion Week, Compétitions | Amani Limousines',
  description:
    'Transport VIP pour vos événements à Paris. Fashion Week, Paris Air Show, Roland Garros, Festival de Cannes, Salon Nautic, Maison & Objet. Flotte dédiée, coordination sur site.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/evenements',
  },
};

const evenements = [
  { titre: 'Paris Fashion Week', periode: 'Février & Septembre', slug: 'paris-fashion-week', desc: 'Navettes entre les maisons de couture, les hôtels du Triangle d\'Or et les showrooms du Marais.' },
  { titre: 'Paris Air Show', periode: 'Juin (années impaires)', slug: 'paris-air-show', desc: 'Transferts au Bourget, accueil FBO, convois de délégations industrielles et gouvernementales.' },
  { titre: 'Roland Garros', periode: 'Mai — Juin', slug: 'roland-garros', desc: 'Transferts Porte d\'Auteuil, loges VIP, hospitalités corporates. Flotte renforcée en phase finale.' },
  { titre: 'Festival de Cannes', periode: 'Mai', slug: 'festival-de-cannes', desc: 'Transferts Nice–Cannes, accès Croisette, Red Carpet. Service disponible sur la semaine complète du festival.' },
  { titre: 'Salon du Bourget (SIAE)', periode: 'Juin (années impaires)', slug: 'paris-air-show', desc: 'En parallèle du show, navettes entre Le Bourget et les hôtels parisiens pour les exposants.' },
  { titre: 'Maison & Objet', periode: 'Janvier & Septembre', slug: null, desc: 'Navettes Villepinte et transferts depuis CDG pour les acheteurs et exposants internationaux.' },
  { titre: 'Salon Nautic', periode: 'Décembre', slug: null, desc: 'Porte de Versailles — transferts et mises à disposition pour les professionnels du nautisme.' },
  { titre: 'Première Vision', periode: 'Février & Septembre', slug: null, desc: 'Le salon international du tissu. Navettes Villepinte et transferts vers les hôtels du 8ème et 16ème.' },
];

export default function EvenementsPage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Transport événementiel</p>
          <h1 className="heading mt-3">
            Transport VIP pour vos{' '}
            <em>événements</em>{' '}
            <strong>à Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Paris est la capitale mondiale des événements de prestige. Fashion Week, Air Show,
            Roland Garros, Festival de Cannes : chaque grand rendez-vous génère des flux de
            transport intenses que seules des équipes rodées à ces contraintes spécifiques
            peuvent absorber. Amani Limousines intervient sur chaque édition avec des flotte
            dédiées, des coordinateurs sur site et une réservation des véhicules bien en amont.
          </p>
        </div>
      </section>

      {/* Grille événements */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Événements couverts</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {evenements.map((e) => (
              <div key={e.titre} className="card">
                <p className="sf text-xs text-stone-400 uppercase tracking-wider">{e.periode}</p>
                <p className="heading text-xl mt-1">{e.titre}</p>
                <p className="sf text-stone-500 text-sm mt-3 leading-relaxed">{e.desc}</p>
                {e.slug && (
                  <a href={`/evenements/${e.slug}`} className="sf text-xs mt-4 inline-block" style={{ color: '#8a7340' }}>
                    En savoir plus →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anticipation */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Réserver tôt, rouler sereinement</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pendant la Fashion Week ou Roland Garros, les véhicules de qualité se réservent
            des semaines à l'avance. Si vous êtes exposant, acheteur, journaliste accrédité ou
            hospitalité corporate, anticipez votre logistique transport au même titre que vos
            billets et hébergements. Notre équipe peut bloquer des véhicules plusieurs mois
            à l'avance et ajuster les plannings au fur et à mesure que votre programme se précise.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

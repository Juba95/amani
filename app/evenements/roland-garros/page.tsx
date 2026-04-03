import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'evenements/roland-garros';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Roland Garros Paris — Transport Loges VIP | Amani Limousines',
  description: 'Transport VIP pour Roland Garros. Transferts Porte d\'Auteuil, accès loges et hospitalités corporate. Chauffeur privé Paris disponible pendant tout le tournoi.',
  canonical: 'https://www.amani-limousines.com/evenements/roland-garros',
});

export default function RolandGarrosPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">{c('tag', 'Événement — Mai & Juin')}</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé Roland Garros Paris — transferts et hospitalités VIP')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Deux semaines, 500 000 spectateurs, des loges corporate parmi les plus convoitées du sport mondial. Roland Garros génère chaque printemps un besoin de transport VIP intense autour de la Porte d\'Auteuil. Un chauffeur privé Roland Garros bien positionné fait toute la différence entre une expérience fluide et une heure de queue dans les embouteillages du 16ème.')}
          </p>
        </div>
      </section>

      {/* Accès */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">{c('section_1_title', "Accès Porte d'Auteuil — ce qu'il faut savoir")}</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            {c('section_1_text', "L'accès en voiture aux abords de Roland Garros est fortement restreint pendant le tournoi. Les zones de dépose sont limitées aux véhicules autorisés. Nos chauffeurs connaissent les créneaux de circulation, les voies de service réservées aux hospitalités corporate et les emplacements où le stationnement d'attente est toléré. Vous descendez à deux pas de l'entrée VIP, sans longer des parkings bondés.")}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">{c('section_2_title', 'Loges et hospitalités corporate')}</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              {c('section_2_text', "Si votre entreprise dispose d'une loge à Roland Garros, vous pouvez confier la logistique transport de vos invités à Amani Limousines. Nous gérons les navettes depuis les hôtels parisiens, les transferts CDG et Orly pour les invités en déplacement, et les retours en fin de soirée après les matchs et dîners.")}
            </p>
          </div>
          <div>
            <h2 className="heading">{c('section_3_title', 'Mise à disposition à la journée')}</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              {c('section_3_text', "Pour les journées qui combinent une session à Roland Garros et d'autres rendez-vous sur Paris, la mise à disposition est la formule la plus adaptée. Votre chauffeur vous attend entre les parties, gère les déplacements complémentaires et ramène vos invités à leur hôtel en fin de soirée.")}
            </p>
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

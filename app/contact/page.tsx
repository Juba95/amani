import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';

export const metadata: Metadata = {
  title: 'Contact — Amani Limousines | Chauffeur Privé Paris 24h/24',
  description:
    'Contactez Amani Limousines pour votre chauffeur privé à Paris. Téléphone, WhatsApp, email. Réponse garantie sous 30 minutes. Disponible 24h/24, 7j/7.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/contact',
  },
};

export default function ContactPage() {
  return (
    <SEOLayout>
      <section className="pt-36 pb-20 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Nous contacter</p>
          <h1 className="heading mt-3">
            Parlez à notre <em>équipe</em>{' '}
            <strong>chauffeur privé Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Notre équipe est disponible 24 heures sur 24, 7 jours sur 7, pour toute demande
            de réservation, devis sur mesure ou question logistique. Nous répondons en moins
            de 30 minutes, y compris la nuit et les jours fériés.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              titre: 'Téléphone',
              info: '+33 6 62 02 73 44',
              detail: 'Disponible 24h/24. Pour les urgences et réservations de dernière minute.',
              href: 'tel:+33662027344',
              cta: 'Appeler maintenant',
            },
            {
              titre: 'WhatsApp',
              info: '+33 6 62 02 73 44',
              detail: 'Envoyez les détails de votre trajet par WhatsApp pour un devis rapide.',
              href: 'https://wa.me/33662027344',
              cta: 'Écrire sur WhatsApp',
            },
            {
              titre: 'Email',
              info: 'contact@amani-limousines.com',
              detail: 'Pour les demandes détaillées, devis de délégation et contrats corporate.',
              href: 'mailto:contact@amani-limousines.com',
              cta: 'Envoyer un email',
            },
          ].map((c) => (
            <div key={c.titre} className="card text-center">
              <p className="tag">{c.titre}</p>
              <p className="sf font-semibold text-gray-900 mt-3">{c.info}</p>
              <p className="sf text-stone-500 text-sm mt-3 leading-relaxed">{c.detail}</p>
              <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="btn-outline mt-5 inline-block">
                {c.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Langues */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Nous parlons votre langue</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Notre équipe répond en français, anglais, arabe et mandarin. Les chauffeurs Amani
            sont polyglottes et peuvent s'entretenir avec vos clients dans leur langue maternelle.
            Pour les délégations arabophones (Qatar, Arabie Saoudite, Émirats) et sinophones
            (Hong Kong, Shanghai, Pékin), nous avons des chauffeurs qui connaissent les protocoles
            culturels et les usages attendus.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {['Français', 'English', 'العربية', '中文'].map((lang) => (
              <span key={lang} className="sf text-sm px-4 py-2 rounded-full border border-warm-300 text-stone-600">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Délai de réponse</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Pour les réservations standards, nous confirmons dans les 30 minutes. Pour les
              missions complexes (convois, délégations, sécurité rapprochée), comptez 2 à 4 heures
              pour recevoir une proposition détaillée avec les disponibilités et le devis.
            </p>
          </div>
          <div>
            <h2 className="heading">Réservation d'urgence</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Pour les transferts dans les 2 heures, appelez directement le
              <strong> +33 6 62 02 73 44</strong>. WhatsApp est efficace pour les demandes
              de dernière minute avec une réponse quasi-immédiate en journée.
            </p>
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'transfert-cdg-la-defense';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Transfert CDG La Défense — Chauffeur Privé Aéroport Paris | Amani Limousines',
  description: 'Transfert entre CDG et La Défense avec chauffeur privé. 35 km, 40 minutes. Tour Total, KPMG, Société Générale, Areva. Prix fixe, disponible 24h/24.',
  canonical: 'https://www.amani-limousines.com/transfert-cdg-la-defense',
});

export default function TransfertCDGLaDefensePage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">CDG ↔ La Défense</p>
          <h1 className="heading mt-3">
            {c('h1', 'Transfert CDG La Défense avec chauffeur privé — quartier d\'affaires, service corporate')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'La Défense est le premier quartier d\'affaires européen. Total, LVMH, Société Générale, Areva, KPMG, Deloitte : leurs sièges y sont tous. Les cadres et délégations qui arrivent à CDG et rejoignent La Défense constituent l\'une de nos clientèles les plus régulières. Un chauffeur privé CDG La Défense évite les correspondances RER B puis ligne 1 avec les bagages de voyage d\'affaires.')}
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Tarifs et temps de trajet</h2>
            <div className="mt-6 space-y-3">
              {[
                { label: 'Distance CDG → La Défense', val: '35 km' },
                { label: 'Durée estimée', val: '35–45 min' },
                { label: 'Classe E', val: 'à partir de 135 €' },
                { label: 'Classe S', val: 'à partir de 190 €' },
                { label: 'Classe V (groupe)', val: 'à partir de 140 €' },
              ].map((r) => (
                <div key={r.label} className="flex justify-between items-center py-2 border-b border-warm-200">
                  <span className="sf text-sm text-stone-500">{r.label}</span>
                  <span className="sf font-medium text-sm text-gray-700">{r.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading">Tours et adresses couvertes</h2>
            <p className="sf text-stone-600 mt-4 text-sm leading-relaxed">
              Tour Majunga, Tour First, Tour Total, Tour Société Générale, Tour KPMG, Tour CB 21,
              Tour Areva, Tour Lighthouse, Palais de la Défense, Cnit, Les Quatre Temps,
              Résidences Courbevoie et Puteaux.
            </p>
            <p className="sf text-stone-600 mt-4 text-sm leading-relaxed">
              Pour les adresses à Neuilly-sur-Seine, Levallois-Perret ou Clichy,
              le tarif est calculé depuis CDG selon le kilométrage exact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Service corporate dédié</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Les entreprises de La Défense qui ont des besoins réguliers de transfert aéroport
            peuvent bénéficier d'un compte corporate avec facturation mensuelle, suivi des
            courses par service ou par collaborateur, et un interlocuteur dédié pour la
            coordination des transports. Contactez notre équipe pour une proposition adaptée
            à votre volume d'activité.
          </p>
        </div>
      </section>
    </SEOLayout>
  );
}

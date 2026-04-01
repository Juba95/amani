import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Transfert Aéroport Paris — Prix Fixe Sans Surprises | Amani Limousines',
  description:
    'Transfert aéroport Paris CDG, Orly et Beauvais en voiture avec chauffeur. Prix fixe annoncé avant la réservation. Sans compteur, sans supplément heure de pointe.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/transfert-aeroport-economique',
    languages: {
      en: 'https://www.amani-limousines.com/en/economical-airport-transfer',
      'x-default': 'https://www.amani-limousines.com/transfert-aeroport-economique',
    },
  },
};

const tarifs = [
  {
    trajet: 'CDG → Paris intramuros',
    classe_e: '80–100 €',
    classe_v: '130–150 €',
    note: 'Selon le terminal et l\'arrondissement de destination.',
  },
  {
    trajet: 'Orly → Paris intramuros',
    classe_e: '70–90 €',
    classe_v: '110–130 €',
    note: 'Tarif fixe, pas de supplément pour les terminaux Orly Sud ou Orly Ouest.',
  },
  {
    trajet: 'Beauvais → Paris',
    classe_e: '130–150 €',
    classe_v: '180–200 €',
    note: '85 km depuis le centre de Beauvais. Prix fixe sans supplément nuit.',
  },
  {
    trajet: 'CDG → La Défense',
    classe_e: '90–110 €',
    classe_v: '140–160 €',
    note: 'Quartier d\'affaires, hôtels et résidences aux Défense.',
  },
];

const avantages = [
  {
    point: 'Le prix est fixé avant le départ',
    detail:
      'Contrairement à un taxi avec compteur, vous connaissez le montant exact au moment de la réservation. Il ne change pas si les routes sont chargées.',
  },
  {
    point: 'Aucun supplément heure de pointe',
    detail:
      'Un départ à 5h du matin ou à 22h coûte le même prix qu\'un départ à 14h. Les suppressions nocturnes et les majorations weekend n\'existent pas.',
  },
  {
    point: 'Suivi de vol inclus',
    detail:
      'Si votre vol arrive avec 45 minutes de retard, le chauffeur le sait et ajuste sa prise en charge. Vous n\'avez pas à appeler.',
  },
  {
    point: 'Attente incluse',
    detail:
      'Le temps d\'attente pour récupérer vos bagages est compris dans le tarif. Pas de facturation à la minute après l\'atterrissage.',
  },
];

export default function TransfertAeroportEconomique() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">CDG · Orly · Beauvais</p>
          <h1 className="heading mt-3">
            <strong>Transfert aéroport Paris</strong> —{' '}
            <em>prix fixe, sans compteur</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Un taxi depuis CDG peut coûter 55 € ou 110 € selon la circulation,
            l'heure et l'humeur du compteur. Avec un chauffeur Amani, vous avez un
            prix annoncé avant de monter dans le véhicule, et ce prix ne change pas.
            CDG, Orly et Beauvais, 24h/24, 7j/7.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Obtenir un devis
            </Link>
            <a
              href="tel:+33662027344"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              +33 6 62 02 73 44
            </a>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Tarifs indicatifs</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Ces fourchettes correspondent aux tarifs habituels. Pour votre adresse exacte,
            utilisez le formulaire de devis ou appelez directement.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="font-sans text-xs text-left py-3 pr-6 text-stone-500 font-medium tracking-wide uppercase">Trajet</th>
                  <th className="font-sans text-xs text-left py-3 pr-6 text-stone-500 font-medium tracking-wide uppercase">Classe E</th>
                  <th className="font-sans text-xs text-left py-3 pr-6 text-stone-500 font-medium tracking-wide uppercase">Classe V</th>
                </tr>
              </thead>
              <tbody>
                {tarifs.map((t) => (
                  <tr key={t.trajet} className="border-b border-stone-100">
                    <td className="py-4 pr-6">
                      <p className="font-serif text-sm text-gray-900">{t.trajet}</p>
                      <p className="font-sans text-xs text-stone-400 mt-1">{t.note}</p>
                    </td>
                    <td className="py-4 pr-6 font-sans text-sm text-gray-700">{t.classe_e}</td>
                    <td className="py-4 pr-6 font-sans text-sm text-gray-700">{t.classe_v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="sf text-stone-400 text-xs mt-4">
            Tarifs pour 1 à 3 passagers (Classe E) ou 1 à 7 passagers (Classe V). Prix ferme confirmé à la réservation.
          </p>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Ce que le prix fixe change</h2>
          <div className="mt-8 space-y-6">
            {avantages.map((a) => (
              <div key={a.point} className="border-l-2 border-stone-200 pl-6">
                <p className="font-serif text-gray-900 mb-2">{a.point}</p>
                <p className="sf text-stone-600 text-sm leading-relaxed">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aéroports */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Aéroports couverts</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            <strong>Charles de Gaulle (CDG)</strong> — Terminaux 1, 2A à 2G, Terminal 3.
            Accueil en salle d'arrivée avec panneau nominatif. Option Meet &amp; Greet
            avec accompagnement jusqu'au véhicule.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            <strong>Orly (ORY)</strong> — Orly Sud, Orly Ouest et la nouvelle Aérogare
            unifiée. Même service d'accueil, même tarif fixe.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            <strong>Beauvais-Tillé (BVA)</strong> — 85 km de Paris, principalement desservi
            par les compagnies low-cost. La navette officielle met 1h15 et vous dépose à
            Porte Maillot. Un chauffeur privé vous emmène directement à votre adresse, sans
            correspondance, pour un prix qui reste compétitif sur ce trajet.
          </p>
        </div>
      </section>

      {/* Réservation */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Comment réserver</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Renseignez votre aéroport, votre adresse de destination et vos dates dans
            le formulaire de réservation. Vous recevez un prix fixe par retour. La
            réservation se confirme sans prépaiement pour la plupart des trajets.
            Pour les groupes ou les longs trajets, un acompte peut être demandé.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Réserver en ligne
            </Link>
            <Link
              href="/transfert-aeroport-cdg"
              className="font-sans text-sm tracking-widest uppercase border-b border-stone-400 pb-0.5 hover:border-stone-700 transition-colors mt-3"
            >
              Transfert CDG en détail →
            </Link>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Autres transferts aéroport</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Transfert Orly', href: '/transfert-aeroport-orly' },
              { label: 'Transfert Beauvais', href: '/transfert-aeroport-beauvais' },
              { label: 'Meet & Greet', href: '/meet-and-greet' },
              { label: 'Notre flotte', href: '/notre-flotte' },
              { label: 'Contact', href: '/contact' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block text-center py-4 px-6 border border-stone-200 font-sans text-sm text-gray-700 hover:border-stone-500 transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

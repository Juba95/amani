import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'transfert-aeroport-cdg';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Privé Aéroport CDG Paris — Transfert Charles de Gaulle | Amani Limousines',
  description: 'Réservez votre chauffeur privé à l\'aéroport Charles de Gaulle. Prix fixe, suivi de vol, accueil en salle d\'arrivée. Berlines Mercedes et vans VIP disponibles 24h/24.',
  canonical: 'https://www.amani-limousines.com/transfert-aeroport-cdg',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/cdg-airport-transfer',
    },
  },
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transfert chauffeur privé aéroport CDG Paris',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Aéroport Charles de Gaulle, Paris',
  description: 'Service de transfert avec chauffeur privé depuis et vers l\'aéroport Charles de Gaulle. Berlines et vans VIP, prix fixe, suivi de vol.',
  offers: [
    { '@type': 'Offer', name: 'Mercedes Classe E — CDG', price: '125', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes Classe S — CDG', price: '225', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes Classe V — CDG', price: '125', priceCurrency: 'EUR' },
  ],
};

export default function TransfertCDGPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Aéroport Charles de Gaulle</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé CDG Paris — transfert aéroport sans attente')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Chaque année, plus de 67 millions de passagers transitent par Roissy–Charles de Gaulle. Trouver un chauffeur privé à l\'aéroport CDG fiable, à l\'heure, et qui connaît réellement les terminaux fait toute la différence. Chez Amani Limousines, nous assurons des transferts depuis et vers CDG sept jours sur sept, de nuit comme de jour, sans compteur ni surprise sur la note.')}
          </p>
        </div>
      </section>

      {/* Terminaux */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Tous les terminaux de CDG couverts</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            L'aéroport Charles de Gaulle est composé de plusieurs terminaux reliés par le CDG-Val,
            mais les distances restent significatives. Terminal 1 pour les vols intercontinentaux de
            nombreuses compagnies, Terminal 2 (2A, 2B, 2C, 2D, 2E, 2F, 2G) réservé notamment à
            Air France et ses partenaires, Terminal 3 pour les vols charters et low cost.
            Votre <strong>chauffeur privé à Paris CDG</strong> se positionne au bon niveau de sortie
            selon le terminal indiqué sur votre billet, plaque à votre nom en main.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Si votre vol arrive au 2E — le terminal qui concentre les longues distances Air France —
            votre chauffeur vous attend au niveau des arrivées, juste après les portes automatiques
            coulissantes, sans que vous ayez à chercher une file de taxis ni à traverser des parkings.
          </p>
        </div>
      </section>

      {/* Suivi de vol */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Suivi de vol en temps réel</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Les retards font partie de la vie aérienne. Notre système de suivi de vol surveille
              l'état de votre appareil dès la mise à jour des données Eurocontrol. Si votre Airbus
              atterrit avec 40 minutes de retard, votre chauffeur l'apprend en temps réel et ajuste
              son heure d'arrivée. Vous ne payez jamais d'attente supplémentaire due à un retard aérien —
              le prix reste celui convenu au moment de la réservation.
            </p>
          </div>
          <div>
            <h2 className="heading">Prix fixe garanti</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Le montant affiché lors de votre devis est le montant final. Aucune majoration de nuit,
              aucun supplément weekend, aucun frais de parkings cachés. Le <strong>transfert CDG
              chauffeur privé Paris</strong> inclut l'accueil personnalisé, l'aide aux bagages,
              l'eau minérale à bord et les péages sur les itinéraires standards.
            </p>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Tarifs transfert CDG — Paris</h2>
          <p className="sf text-stone-500 mt-2 text-sm">Prix fixes tout compris • Péages inclus</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Mercedes Classe E', cat: 'Berline Business', pax: '1–3 passagers', price: 'À partir de 125 €' },
              { name: 'Mercedes Classe S', cat: 'Berline Executive', pax: '1–3 passagers', price: 'À partir de 225 €' },
              { name: 'Mercedes Classe V', cat: 'Minivan Luxe', pax: 'Jusqu\'à 7 passagers', price: 'À partir de 125 €' },
            ].map((v) => (
              <div key={v.name} className="card">
                <p className="sf text-xs text-stone-400 uppercase tracking-wider">{v.cat}</p>
                <p className="heading text-xl mt-1">{v.name}</p>
                <p className="sf text-sm text-stone-500 mt-2">{v.pax}</p>
                <p className="sf font-semibold mt-3" style={{ color: '#8a7340' }}>{v.price}</p>
              </div>
            ))}
          </div>
          <p className="sf text-xs text-stone-400 mt-4">
            BMW i7 et Mercedes Sprinter VIP disponibles sur devis. Tarifs identiques pour les départs
            vers CDG depuis Paris.
          </p>
        </div>
      </section>

      {/* Meet and Greet */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Option <em>Meet & Greet</em> à CDG</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Le service Meet & Greet consiste à envoyer un assistant en zone d'arrivée — après le
            passage douane mais avant la sortie publique — pour accueillir votre passager avec une
            pancarte nominative. L'assistant prend en charge les bagages, guide jusqu'au véhicule
            stationné au niveau dépose-minute réservé, et s'assure que la transition de l'avion au
            siège cuir de votre Mercedes se passe sans friction. Ce service est particulièrement
            prisé pour les délégations officielles, les clients des palaces parisiens et les familles
            voyageant avec enfants.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Questions fréquentes</h2>
          <div className="mt-8 space-y-6">
            {[
              {
                q: 'Combien de temps à l\'avance faut-il réserver ?',
                a: 'Nous recommandons 24 à 48 heures pour les transferts standards. En pratique, nous acceptons les demandes de dernière minute jusqu\'à 2 heures avant la prise en charge, sous réserve de disponibilité.',
              },
              {
                q: 'Que se passe-t-il si mon vol est annulé ?',
                a: 'En cas d\'annulation de vol communiquée au moins 3 heures avant la prise en charge prévue, la réservation est remboursée ou reportée sans frais. Au-delà, les conditions générales de vente s\'appliquent.',
              },
              {
                q: 'Le chauffeur peut-il attendre si les bagages tardent ?',
                a: 'Oui. Notre tarif inclut 60 minutes d\'attente gratuite après l\'heure d\'atterrissage réelle du vol. Au-delà, un forfait horaire s\'applique et vous en êtes informé par SMS.',
              },
              {
                q: 'Puis-je réserver pour plusieurs véhicules simultanément ?',
                a: 'Absolument. Nous gérons régulièrement des convois de 3 à 15 véhicules pour les délégations officielles et les groupes. La coordination est centralisée et le dispatching radio entre chauffeurs.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-warm-200 pb-6">
                <p className="sf font-medium text-gray-900">{q}</p>
                <p className="sf text-stone-500 mt-2 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

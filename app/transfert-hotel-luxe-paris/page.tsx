import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'transfert-hotel-luxe-paris';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Transfert Hôtel de Luxe Paris — Chauffeur Palace & Conciergerie | Amani Limousines',
  description: 'Transfert chauffeur privé vers les palaces parisiens : Ritz, George V, Plaza Athénée, Bristol, Meurice, Shangri-La, Peninsula, Lutetia. Service conciergerie et accueil aéroport.',
  canonical: 'https://www.amani-limousines.com/transfert-hotel-luxe-paris',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/luxury-hotel-transfer-paris',
      'x-default': 'https://www.amani-limousines.com/transfert-hotel-luxe-paris',
    },
  },
});

const hotels = [
  { nom: 'Hôtel Ritz Paris', note: 'Place Vendôme, 1er arrondissement' },
  { nom: 'Four Seasons George V', note: 'Avenue George V, 8ème arrondissement' },
  { nom: 'Hôtel Plaza Athénée', note: 'Avenue Montaigne, 8ème arrondissement' },
  { nom: 'Le Bristol Paris', note: 'Rue du Faubourg Saint-Honoré, 8ème arrondissement' },
  { nom: 'Le Meurice', note: 'Rue de Rivoli, 1er arrondissement' },
  { nom: 'Shangri-La Paris', note: 'Avenue d\'Iéna, 16ème arrondissement' },
  { nom: 'The Peninsula Paris', note: 'Avenue Kléber, 16ème arrondissement' },
  { nom: 'Hôtel Lutetia', note: 'Boulevard Raspail, 6ème arrondissement' },
];

const services = [
  {
    titre: 'Transfert aéroport — palace',
    texte:
      "Votre chauffeur vous attend à la sortie du terminal avec une pancarte à votre nom. Il prend en charge vos bagages et vous conduit directement à votre palace. Le trajet CDG — centre de Paris dure entre 45 minutes et une heure selon le trafic. Orly est à 30 minutes.",
  },
  {
    titre: 'Service conciergerie',
    texte:
      "Au-delà du simple transfert, nous coordonnons avec la conciergerie de votre hôtel pour garantir un accueil fluide : pré-enregistrement, porteur à l'arrivée, accès direct à votre suite. Votre chauffeur transmet vos informations d'arrivée au concierge en amont.",
  },
  {
    titre: 'Mise à disposition pendant le séjour',
    texte:
      "Vous séjournez au Ritz ou au George V pour quelques jours et vous avez besoin d'un chauffeur disponible en permanence. Shopping avenue Montaigne, dîner au restaurant, visite privée au Louvre — votre chauffeur vous attend à chaque étape.",
  },
  {
    titre: 'Transfert inter-hôtels',
    texte:
      "Vous changez de palace en cours de séjour ou vous rendez visite à un associé logé dans un autre établissement. Nos chauffeurs assurent les transferts entre les grands hôtels parisiens avec la même ponctualité et la même discrétion.",
  },
];

export default function TransfertHotelLuxeParis() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Palaces — Paris</p>
          <h1 className="heading mt-3">
            {c('h1', 'Transfert hôtel de luxe à Paris — de l\'aéroport à votre palace, sans transition')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'L\'expérience d\'un séjour dans un palace parisien commence dès l\'aéroport. Un chauffeur qui vous attend avec votre nom, une berline impeccable, un trajet calme jusqu\'à la porte de votre hôtel — c\'est le premier contact avec le niveau de service que vous attendez. Amani Limousines travaille avec les concierges des plus grands hôtels de Paris pour garantir une arrivée et un départ à la hauteur de l\'établissement.')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Demander un tarif
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

      {/* Services */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Nos prestations pour les clients des palaces</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Que vous arriviez pour un séjour de quelques nuits ou pour un événement ponctuel,
            nous adaptons le service à vos besoins.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.titre} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{s.titre}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{s.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hôtels */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Palaces et hôtels de luxe desservis</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            Nous assurons des transferts réguliers vers tous les palaces et hôtels cinq étoiles
            de Paris. Nos chauffeurs connaissent les entrées de service, les zones de dépose
            VIP et les particularités de chaque établissement.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {hotels.map((h) => (
              <div key={h.nom} className="flex items-start gap-4 py-4 border-b border-stone-100">
                <span
                  className="mt-0.5 h-2 w-2 rounded-full shrink-0"
                  style={{ background: '#c9a84c' }}
                />
                <div>
                  <p className="font-sans text-sm font-medium text-gray-900">{h.nom}</p>
                  <p className="font-sans text-xs text-stone-500 mt-0.5">{h.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Amani */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Ce qui fait la différence pour les clients des palaces</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Relations établies avec les concierges</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Nous travaillons régulièrement avec les concierges des grands hôtels parisiens.
                Ils nous connaissent, nous font confiance et nous recommandent à leurs clients.
                Cette relation garantit une coordination fluide entre le chauffeur et l'hôtel.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Véhicules à la hauteur du lieu</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Arriver au Ritz ou au George V dans un véhicule quelconque dénote. Nos Mercedes
                Classe S et Maybach sont en parfait état, nettoyées avant chaque course, avec
                un habitacle soigné jusque dans les moindres détails.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Discrétion et élégance</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Les clients des palaces parisiens attendent un service irréprochable et discret.
                Nos chauffeurs portent le costume, ouvrent la portière, gèrent les bagages et
                ne posent aucune question superflue. Le service est fluide et silencieux.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Disponibilité jour et nuit</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Un vol qui arrive à 23h, un départ à 5h du matin — les horaires des clients
                internationaux ne suivent pas les heures de bureau. Nos chauffeurs sont
                disponibles 24h/24, sans supplément de nuit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Transferts hôtels spécifiques</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'CDG → Hôtel Ritz', href: '/transfert-cdg-hotel-ritz' },
              { label: 'CDG → George V', href: '/transfert-cdg-hotel-george-v' },
              { label: 'CDG → Le Bristol', href: '/transfert-cdg-hotel-bristol' },
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Transfert Orly', href: '/transfert-aeroport-orly' },
              { label: 'Meet & Greet', href: '/meet-and-greet' },
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

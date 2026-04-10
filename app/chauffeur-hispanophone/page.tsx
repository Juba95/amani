import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-hispanophone';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Hispanophone Paris — Chauffeur Privé Parlant Espagnol | Amani Limousines',
  description: 'Chauffeur privé parlant espagnol à Paris. Tourisme, affaires, visites diplomatiques. Communication fluide en español. Disponible 24h/24.',
  canonical: 'https://www.amani-limousines.com/chauffeur-hispanophone',
});

const services = [
  {
    titre: 'Transferts aéroport en espagnol',
    texte:
      "Vous arrivez d'un vol depuis Mexico, Madrid ou Buenos Aires, et votre chauffeur vous attend à CDG avec un panneau. Il parle espagnol, il vous aide avec les bagages, et pendant le trajet jusqu'à l'hôtel il vous explique le temps qu'il fait, les travaux sur l'A1, et combien de temps ça va prendre. Simple, direct, en español.",
  },
  {
    titre: 'Découvrir Paris avec un local qui parle votre langue',
    texte:
      "Les visiteurs hispanophones trouvent à Paris bien plus qu'un itinéraire touristique standard. Le chauffeur connaît le passage du Grand-Cerf, les bonnes adresses du 11e, les circuits moins fréquentés. Il partage ces recommandations en espagnol, pour une découverte de la ville à un autre niveau.",
  },
  {
    titre: 'Rendez-vous d\'affaires et diplomatie',
    texte:
      "Entreprises espagnoles, ambassades latino-américaines, Maison de l'Amérique latine boulevard Saint-Germain... Votre chauffeur connaît le quartier des ambassades, sait se garer près de l'OCDE, et gère le timing entre vos rendez-vous. Tout se passe en espagnol, y compris les appels de dernière minute pour décaler un meeting.",
  },
  {
    titre: 'Groupes et délégations hispanophones',
    texte:
      "Délégation commerciale mexicaine, groupe argentin en tour gastronomique, équipe espagnole pour un salon à Villepinte : Amani Limousines déploie plusieurs véhicules avec chauffeurs hispanophones et coordonne l'ensemble des transferts pour une arrivée ponctuelle à chaque étape.",
  },
];

const situations = [
  'Groupes touristiques d\'Amérique latine qui veulent voir le vrai Paris',
  'Diplomates et fonctionnaires en rendez-vous près de la Maison de l\'Amérique latine',
  'Entreprises espagnoles en déplacement à Paris pour des salons pro',
  'Familles en vacances depuis le Mexique, la Colombie ou l\'Argentine',
  'Excursions vers les vignobles de Bordeaux ou de Champagne',
  'Roland-Garros et événements sportifs pour fans hispanophones',
  'Séjours culturels — Louvre, Orsay, spectacles, restos du quartier latin',
];

export default function ChauffeurHispanophonePage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Hispanophone</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé hispanophone à Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines propose un service de chauffeur privé hispanophone à Paris pour les touristes, professionnels et diplomates venus d\'Espagne ou d\'Amérique latine. Communiquer en espagnol avec son chauffeur change fondamentalement l\'expérience d\'un séjour à Paris : les échanges sont directs, les déplacements organisés avec précision. Service disponible 24h/24, 7j/7.')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Réserver maintenant
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
          <h2 className="heading">Nos prestations en langue espagnole</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Aéroports, tourisme, déplacements d'affaires, groupes et délégations —
            en español, du premier au dernier trajet.
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

      {/* Situations */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Occasions et clientèle</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {situations.map((s) => (
              <div key={s} className="flex items-start gap-3 p-4 rounded-xl bg-warm-50 border border-warm-200">
                <span style={{ color: '#8a7340' }}>✓</span>
                <p className="sf text-sm text-stone-600">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading mb-4">Réservez votre chauffeur hispanophone</h2>
          <p className="sf text-stone-500 mb-8">
            Disponible 24h/24, 7j/7. Confirmation de réservation sous 30 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Réserver maintenant
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Services associés</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Chauffeur diplomatique', href: '/chauffeur-diplomatique' },
              { label: 'Excursion privée', href: '/excursion-privee' },
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Événements', href: '/evenements' },
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

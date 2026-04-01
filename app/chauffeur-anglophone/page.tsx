import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chauffeur Anglophone Paris — Chauffeur Privé Parlant Anglais | Amani Limousines',
  description:
    'Chauffeur privé parlant anglais à Paris. Transferts aéroports, rendez-vous d\'affaires, tourisme de luxe. Communication fluide en anglais. Disponible 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/chauffeur-anglophone',
  },
};

const services = [
  {
    titre: 'Transferts aéroports avec accueil en anglais',
    texte:
      "Vous atterrissez à CDG après un vol depuis JFK ou Heathrow, vous êtes crevé, et la dernière chose dont vous avez envie c'est de mimer votre adresse à un chauffeur qui ne parle pas anglais. Le nôtre vous attend avec un panneau, récupère vos valises, et vous briefe sur le temps de trajet jusqu'au Ritz ou au Bristol. Tout ça en anglais, sans effort de votre côté.",
  },
  {
    titre: 'Rendez-vous d\'affaires entre La Défense et le 8e',
    texte:
      "Vous enchaînez trois meetings dans la journée — un à La Défense, un boulevard Haussmann, un dernier rue de Rivoli. Votre chauffeur connaît les raccourcis, sait que le tunnel de l'Étoile est bouché à 18h, et vous prévient en anglais quand il faut partir pour être à l'heure. Pas de stress, pas de malentendu sur le planning.",
  },
  {
    titre: 'Visiter Paris sans la barrière de la langue',
    texte:
      "Montmartre le matin, Saint-Germain pour déjeuner, le Marais l'après-midi. Votre chauffeur connaît les coins que les touristes ratent — la petite place Dauphine, le passage des Panoramas, les quais de Seine côté 5e. Il vous en parle en anglais, vous donne ses adresses perso, et adapte le parcours à vos envies du moment.",
  },
  {
    titre: 'Mise à disposition sur plusieurs jours',
    texte:
      "Pour un séjour d'une semaine, une série de conférences ou une délégation qui débarque de New York, on vous attribue un chauffeur dédié. Il retient vos habitudes dès le deuxième jour — l'heure de votre café, le journal que vous lisez, le fait que vous préférez le silence le matin. Un vrai confort.",
  },
];

const situations = [
  'Banquiers de la City ou de Wall Street avec un agenda serré à Paris',
  'Touristes américains ou britanniques en séjour au Ritz, au Bristol ou au Meurice',
  'Conférences tech et salons pro — VivaTech, OECD, UNESCO',
  'Road-shows investisseurs entre Paris, Londres et Francfort',
  'Cadres dirigeants en déplacement depuis New York ou Singapour',
  'Séminaires et team-building en Île-de-France pour équipes internationales',
  'Familles anglophones en vacances qui veulent voir plus que la Tour Eiffel',
];

export default function ChauffeurAnglophonePage() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Chauffeur Anglophone</p>
          <h1 className="heading mt-3">
            Chauffeur privé <em>anglophone</em> à <strong>Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Ça change tout d'avoir un chauffeur qui parle votre langue. Plus besoin
            de montrer l'adresse sur votre téléphone ou de répéter trois fois le nom
            de l'hôtel. Vous montez, vous expliquez ce dont vous avez besoin, et c'est
            réglé. On a des <strong>chauffeurs qui parlent couramment anglais</strong>,
            dispo jour et nuit, qui connaissent Paris comme leur poche. Que vous soyez
            là pour le boulot ou en vacances, c'est juste plus simple comme ça.
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
          <h2 className="heading">Ce qu'on fait, en anglais</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Aéroport, rendez-vous, tourisme, mise à dispo longue durée — tout
            se passe en anglais, du premier SMS à la dernière course.
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
          <h2 className="heading">Pour qui, concrètement</h2>
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
          <h2 className="heading mb-4">Réservez votre chauffeur anglophone</h2>
          <p className="sf text-stone-500 mb-8">
            Dispo 24h/24, 7j/7. On vous confirme en moins de 30 minutes.
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
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Meet & Greet', href: '/meet-and-greet' },
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

import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Taxi Moto Paris — Moto Taxi Premium & Rapide | Amani Limousines',
  description:
    'Taxi moto à Paris : transport rapide en deux-roues pour éviter les embouteillages. Idéal pour aéroports, gares et rendez-vous urgents. Équipement premium, pilotes expérimentés.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/taxi-moto',
    languages: {
      en: 'https://www.amani-limousines.com/en/motorcycle-taxi',
      'x-default': 'https://www.amani-limousines.com/taxi-moto',
    },
  },
};

const occasions = [
  {
    titre: 'Rendez-vous urgents',
    texte:
      "Votre réunion commence dans 45 minutes et Paris est bloqué. En moto taxi, le trajet Opéra — La Défense prend 20 minutes au lieu d'une heure. Nos pilotes connaissent les itinéraires les plus fluides et vous déposent à l'heure, même en pleine heure de pointe.",
  },
  {
    titre: 'Transfert aéroport express',
    texte:
      "CDG en 35 minutes depuis le centre de Paris, Orly en 25 minutes. Le taxi moto est la solution la plus rapide pour rejoindre un vol quand le temps presse. Votre bagage cabine est transporté dans un top case sécurisé.",
  },
  {
    titre: 'Gares parisiennes',
    texte:
      "Gare du Nord, Gare de Lyon, Montparnasse — les abords des gares sont souvent congestionnés. Le taxi moto vous dépose au plus près de l'entrée, sans détour ni attente dans la circulation.",
  },
  {
    titre: 'Enchaînement de rendez-vous',
    texte:
      "Vous avez trois rendez-vous dans trois quartiers différents en une matinée. Le taxi moto vous permet de tenir votre planning sans jamais être en retard, là où une berline resterait coincée entre chaque étape.",
  },
];

const faq = [
  {
    question: 'Le taxi moto est-il sûr ?',
    reponse:
      "Nos pilotes sont des professionnels expérimentés, titulaires de toutes les licences requises. Ils pratiquent une conduite défensive et respectent scrupuleusement le code de la route. Chaque passager est équipé d'un casque homologué, de gants, d'un gilet de protection et d'un intercom pour communiquer avec le pilote.",
  },
  {
    question: 'Quel équipement est fourni ?',
    reponse:
      "Casque intégral homologué, gants, gilet de protection dorsale, kit hygiène (charlotte, lingettes). En cas de pluie, un équipement imperméable complet est fourni. Tout le matériel est nettoyé et désinfecté entre chaque course.",
  },
  {
    question: 'Puis-je transporter des bagages en taxi moto ?',
    reponse:
      "Un bagage cabine standard (55x35x25 cm) peut être transporté dans le top case de la moto. Pour des bagages plus volumineux, nous recommandons notre service de berline classique ou un envoi séparé de vos bagages.",
  },
  {
    question: 'Quels sont les délais de réservation ?',
    reponse:
      "Une réservation à l'avance est recommandée, mais nous acceptons les demandes de dernière minute sous réserve de disponibilité. En général, un taxi moto peut être mobilisé en 15 à 30 minutes dans Paris intra-muros.",
  },
];

export default function TaxiMoto() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Moto taxi — Paris</p>
          <h1 className="heading mt-3">
            <strong>Taxi moto à Paris</strong> —{' '}
            <em>le moyen le plus rapide de traverser la capitale</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Paris aux heures de pointe, c'est en moyenne 1h10 pour traverser la ville en voiture.
            En <strong>taxi moto</strong>, c'est 25 minutes. Nos pilotes vous transportent
            en toute sécurité sur des motos premium, avec un équipement complet fourni. Le
            service est pensé pour les professionnels pressés qui ne peuvent pas se permettre
            d'arriver en retard : transferts aéroport express, enchaînement de rendez-vous,
            déplacements urgents dans tout Paris et l'Île-de-France.
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

      {/* Occasions */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Quand prendre un taxi moto à Paris</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Le taxi moto n'est pas un gadget. C'est une solution de transport concrète pour
            les situations où chaque minute compte.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {occasions.map((o) => (
              <div key={o.titre} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{o.titre}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{o.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Les avantages du moto taxi premium</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Rapidité garantie</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                En moyenne deux à trois fois plus rapide qu'une berline aux heures de pointe.
                La moto se faufile dans le trafic parisien là où les voitures sont à l'arrêt.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Pilotes professionnels</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Nos pilotes cumulent plusieurs années d'expérience en moto taxi à Paris. Ils
                connaissent chaque raccourci, chaque sens de circulation et chaque zone de
                travaux en cours. Conduite souple et sécurisée.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Équipement premium</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Casques haut de gamme avec intercom intégré, gants, protection dorsale, kit
                pluie. Vous montez en costume et vous arrivez présentable. Les motos sont
                des Honda ou BMW récentes, parfaitement entretenues.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Tarif fixe et transparent</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Le prix est communiqué à la réservation et ne change pas, quelle que soit
                la durée réelle du trajet. Pas de compteur, pas de mauvaise surprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Questions fréquentes — Taxi moto</h2>
          <div className="mt-8 space-y-8">
            {faq.map((f) => (
              <div key={f.question}>
                <h3 className="font-serif text-gray-900 text-lg mb-2">{f.question}</h3>
                <p className="sf text-stone-600 text-sm leading-relaxed">{f.reponse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Nos autres services de transport</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Chauffeur privé Paris', href: '/chauffeur-prive-paris' },
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Transfert Orly', href: '/transfert-aeroport-orly' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Réservation', href: '/reservation' },
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

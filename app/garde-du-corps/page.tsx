import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Garde du Corps Paris — Protection Rapprochée & Bodyguard Privé | Amani Limousines',
  description:
    'Garde du corps et protection rapprochée à Paris. Bodyguard privé pour personnalités, dirigeants et événements. Agents formés, discrétion totale, intervention 24h/24.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/garde-du-corps',
    languages: {
      en: 'https://www.amani-limousines.com/en/bodyguard',
      'x-default': 'https://www.amani-limousines.com/garde-du-corps',
    },
  },
};

const services = [
  {
    titre: 'Protection VIP',
    texte:
      "Vous êtes une personnalité publique, un dirigeant exposé ou un investisseur en déplacement à Paris. Nos agents de protection rapprochée vous accompagnent dans tous vos déplacements, de l'hôtel aux rendez-vous, en passant par les dîners et les sorties.",
  },
  {
    titre: 'Escorte de personnalités',
    texte:
      "Artistes en tournée, sportifs de haut niveau, influenceurs à forte visibilité — nos gardes du corps assurent une escorte discrète et efficace dans Paris et en région. Le dispositif s'adapte au niveau de menace et à vos exigences.",
  },
  {
    titre: 'Protection événementielle',
    texte:
      "Galas, lancements de produits, soirées privées, avant-premières — nos agents sécurisent l'accès, filtrent les entrées et assurent votre protection tout au long de l'événement. Coordination avec les équipes de sécurité du lieu.",
  },
  {
    titre: 'Garde rapprochée de nuit',
    texte:
      "Certaines missions nécessitent une présence continue, y compris la nuit. Nos gardes du corps assurent une veille permanente devant votre hôtel, votre résidence ou votre lieu de séjour à Paris. Relève organisée pour une couverture sans interruption.",
  },
];

const faq = [
  {
    question: 'Quelle est la différence entre un garde du corps et un agent de sécurité ?',
    reponse:
      "Un garde du corps assure la protection rapprochée d'une personne physique. Il se déplace avec vous, anticipe les risques et intervient en cas de menace directe. Un agent de sécurité surveille un lieu fixe. Nos gardes du corps sont formés à la protection individuelle en milieu urbain.",
  },
  {
    question: 'Combien coûte un garde du corps à Paris ?',
    reponse:
      "Le tarif dépend de la durée de la mission, du nombre d'agents mobilisés et du niveau de risque évalué. Contactez-nous pour un devis personnalisé. Nous proposons des missions à la journée, à la semaine ou au mois.",
  },
  {
    question: 'Vos gardes du corps sont-ils armés ?',
    reponse:
      "Nos agents disposent des autorisations requises par la législation française. Le port d'arme est soumis à des conditions strictes et n'est déployé que lorsque l'évaluation de la menace le justifie, en accord avec le client et les autorités compétentes.",
  },
  {
    question: 'Peut-on combiner garde du corps et chauffeur privé ?',
    reponse:
      "C'est même la configuration la plus fréquente. Le chauffeur assure la conduite de sécurité pendant que le garde du corps se concentre sur la protection rapprochée. Les deux travaillent en binôme coordonné.",
  },
];

export default function GardeduCorps() {
  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Bodyguard — Paris & France</p>
          <h1 className="heading mt-3">
            <strong>Garde du corps et protection rapprochée à Paris</strong> —{' '}
            <em>agents formés, discrétion absolue</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Un <strong>garde du corps à Paris</strong> ne se résume pas à une silhouette imposante
            derrière vous. C'est un professionnel qui évalue les risques en amont, repère les
            points de vulnérabilité dans chaque lieu que vous fréquentez et adapte le dispositif
            en temps réel. Amani Limousines met à votre disposition des agents de protection
            rapprochée expérimentés, capables d'intervenir dans des contextes variés : déplacements
            professionnels, événements mondains, séjours privés ou missions longue durée.
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
          <h2 className="heading">Nos prestations de garde du corps</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Chaque mission est différente. Nous adaptons le dispositif au profil du client,
            au contexte et au niveau de risque identifié. Voici les prestations les plus demandées.
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

      {/* Profil agents */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Le profil de nos agents de protection</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Formation spécialisée</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Tous nos gardes du corps sont titulaires du CQP Agent de Protection Physique
                des Personnes. Plusieurs sont issus des forces spéciales ou du GIGN. Ils
                maîtrisent les techniques de défense, de dégagement et de premiers secours.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Discrétion et présentation</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Un bodyguard privé efficace sait se fondre dans l'environnement de son client.
                Nos agents s'adaptent au dress code de chaque situation : costume pour les
                événements formels, tenue décontractée pour les sorties privées.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Coordination avec les équipes existantes</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Nos agents travaillent en coordination avec vos équipes de sécurité internes,
                les services de protection des lieux visités et, si nécessaire, les forces
                de l'ordre. Communication radio sécurisée et protocoles définis en amont.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Disponibilité immédiate</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Nous maintenons un vivier d'agents disponibles à Paris et en Île-de-France.
                Pour les missions urgentes, un garde du corps peut être mobilisé en quelques
                heures. Pour les missions planifiées, nous préparons un briefing complet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Questions fréquentes — Garde du corps</h2>
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
          <h2 className="heading">Services associés</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Sécurité rapprochée', href: '/securite-rapprochee' },
              { label: 'Chauffeur diplomatique', href: '/chauffeur-diplomatique' },
              { label: 'Convoi & délégations', href: '/convoi-delegations' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Chauffeur privé Paris', href: '/chauffeur-prive-paris' },
              { label: 'Événements sportifs', href: '/chauffeur-evenements-sportifs' },
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

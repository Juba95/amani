import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-diplomatique';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Chauffeur Diplomatique — Transport Officiel & Protocole | France & Europe | Amani Limousines',
  description: 'Transport diplomatique en France et en Europe : convois officiels, ambassades, sommets internationaux. Chauffeurs habilités, véhicules blindés, protocole respecté. Discrétion et multilinguisme.',
  canonical: 'https://www.amani-limousines.com/chauffeur-diplomatique',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/diplomatic-chauffeur',
      'x-default': 'https://www.amani-limousines.com/chauffeur-diplomatique',
    },
  },
});

const services = [
  {
    titre: 'Convois officiels',
    texte:
      "Organisation et exécution de convois pour délégations diplomatiques à Paris et en Île-de-France. Coordination avec les services de sécurité, respect des protocoles d'escorte, itinéraires sécurisés et véhicules en formation. Nos chauffeurs maîtrisent la conduite en convoi et les procédures de dégagement.",
  },
  {
    titre: 'Transport ambassades',
    texte:
      "Transferts quotidiens ou ponctuels pour les ambassadeurs, conseillers et attachés diplomatiques entre les résidences, les ambassades et les lieux de réception officiels. Discrétion absolue et connaissance des adresses diplomatiques parisiennes.",
  },
  {
    titre: 'Sommets et conférences internationales',
    texte:
      "G7, COP, sommets bilatéraux, conférences de l'OCDE — Paris accueille régulièrement des événements diplomatiques majeurs. Nous assurons le transport des délégations avec des véhicules adaptés au niveau protocolaire requis.",
  },
  {
    titre: 'Véhicules blindés',
    texte:
      "Pour les missions nécessitant un niveau de protection renforcé, nous mettons à disposition des berlines blindées certifiées. Ces véhicules sont visuellement identiques à des berlines standard, garantissant la discrétion tout en offrant une protection balistique.",
  },
];

export default function ChauffeurDiplomatique() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Diplomatique — Paris & France</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur diplomatique à Paris — protocole, discrétion et sécurité')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Le transport diplomatique à Paris obéit à des règles que la plupart des sociétés de VTC ne connaissent pas. Ordre protocolaire des véhicules, itinéraires validés par les services de sécurité, communication chiffrée entre chauffeurs, ponctualité à la seconde — ce sont les standards auxquels nous nous conformons. Amani Limousines travaille avec des ambassades, des organisations internationales et des délégations étrangères en visite à Paris.')}
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
          <h2 className="heading">Prestations de transport diplomatique</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Nos services diplomatiques couvrent l'ensemble des besoins de transport officiel,
            du transfert ponctuel au dispositif complet pour un sommet international.
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

      {/* Profil chauffeurs */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Des chauffeurs habilités au transport diplomatique</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Habilitation sécurité</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Les chauffeurs affectés aux missions diplomatiques disposent des habilitations
                de sécurité requises par les autorités françaises. Leur casier judiciaire est
                vérifié et mis à jour régulièrement. Ils sont formés aux protocoles de sécurité
                spécifiques au transport de personnalités sous protection.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Multilinguisme</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Nos chauffeurs diplomatiques parlent au minimum français et anglais. Selon les
                missions, nous pouvons affecter des chauffeurs parlant arabe, espagnol, russe
                ou mandarin. La barrière de la langue ne doit jamais compromettre la fluidité
                d'un déplacement officiel.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Connaissance du protocole</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Ordre de préséance des véhicules, positionnement à l'ouverture des portières,
                itinéraires de repli — nos chauffeurs connaissent les codes du protocole
                diplomatique et les appliquent sans qu'on ait besoin de leur rappeler.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Confidentialité totale</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Les informations relatives aux missions diplomatiques ne sont partagées avec
                personne en dehors de l'équipe assignée. Aucun détail sur les itinéraires,
                les horaires ou les identités des passagers ne sort du cadre opérationnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contextes */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Contextes d'intervention</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Nos services de <strong>chauffeur diplomatique</strong> sont sollicités dans des
            contextes variés : visites d'État, réunions bilatérales au Quai d'Orsay, sommets
            au Palais de l'Élysée, conférences à l'OCDE ou à l'UNESCO, cérémonies officielles
            et dîners d'État. Nous intervenons également pour le transport de délégations
            lors de salons internationaux comme le Paris Air Show ou Eurosatory.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Pour les missions en dehors de Paris, nous assurons les transferts vers les
            résidences diplomatiques en province, les bases militaires et les lieux de
            conférence en région.
          </p>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Services associés</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Sécurité rapprochée', href: '/securite-rapprochee' },
              { label: 'Garde du corps', href: '/garde-du-corps' },
              { label: 'Convoi & délégations', href: '/convoi-delegations' },
              { label: 'Meet & Greet', href: '/meet-and-greet' },
              { label: 'Transfert CDG', href: '/transfert-aeroport-cdg' },
              { label: 'Longue distance', href: '/longue-distance' },
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

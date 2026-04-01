import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'chauffeur-prive-nice';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: "Chauffeur Privé Nice / Côte d'Azur — Cannes, Monaco, Saint-Tropez | Amani Limousines",
  description: 'Chauffeur privé Nice et Côte d\'Azur : transferts aéroport Nice, Cannes, Monaco, Saint-Tropez. Service haut de gamme en Mercedes, tarif fixe, disponible 7j/7.',
  canonical: 'https://www.amani-limousines.com/chauffeur-prive-nice',
});

const zones = [
  { zone: 'Aéroport Nice Côte d\'Azur', note: 'Terminaux 1 et 2, accueil personnalisé' },
  { zone: 'Promenade des Anglais', note: 'Hôtels de luxe, Negresco, Palais de la Méditerranée' },
  { zone: 'Cannes', note: 'Palais des Festivals, La Croisette, hôtels étoilés' },
  { zone: 'Monaco', note: 'Monte-Carlo, Port Hercule, Casino, héliport' },
  { zone: 'Saint-Tropez', note: 'Port, plages de Pampelonne, Ramatuelle' },
  { zone: 'Antibes', note: 'Cap d\'Antibes, Juan-les-Pins, Fort Carré' },
  { zone: 'Fréjus', note: 'Golfe de Fréjus, Saint-Raphaël, base nature' },
];

const occasions = [
  {
    titre: 'Festival de Cannes',
    texte:
      'Pendant le Festival, la Croisette est un embouteillage permanent. Nos chauffeurs connaissent les accès réservés, les dépose-minutes et les itinéraires parallèles pour vous amener à l\'heure au Palais des Festivals ou à votre soirée privée.',
  },
  {
    titre: 'Transferts aéroport',
    texte:
      'L\'aéroport de Nice est la porte d\'entrée de la Côte d\'Azur. Le chauffeur vous attend à la sortie du terminal et vous conduit à Cannes en 35 minutes, à Monaco en 30 minutes ou à Saint-Tropez en 1h30 selon la saison.',
  },
  {
    titre: 'Yacht & marina',
    texte:
      'Port Vauban à Antibes, port de Nice, port Hercule à Monaco : vous arrivez par la mer et avez besoin d\'un véhicule à quai. Le chauffeur se positionne au plus près de votre embarcadère, bagages pris en charge.',
  },
  {
    titre: 'Événements',
    texte:
      'MIPIM, Cannes Lions, Monaco Yacht Show, Grand Prix : la Côte d\'Azur enchaîne les événements internationaux. Un chauffeur dédié vous libère de la logistique et des problèmes de stationnement.',
  },
];

export default function ChauffeurPriveNice() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Nice — Côte d'Azur</p>
          <h1 className="heading mt-3">
            {c('h1', 'Chauffeur privé Nice — Côte d\'Azur, Cannes, Monaco')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'La Côte d\'Azur est un littoral de 120 kilomètres où chaque déplacement dépend de la saison, de l\'événement en cours et de l\'état de la circulation sur l\'autoroute A8. Un chauffeur privé à Nice vous épargne les embouteillages chroniques entre l\'aéroport, Cannes et Monaco. Amani Limousines couvre l\'ensemble du littoral azuréen avec des Mercedes récentes, un tarif fixe et des chauffeurs qui connaissent chaque raccourci.')}
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
          <h2 className="heading">Quand réserver un chauffeur privé sur la Côte d'Azur</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Festival, transfert aéroport, arrivée en yacht ou événement professionnel :
            chaque occasion a ses contraintes spécifiques sur le littoral.
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

      {/* Zones */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Zones desservies sur la Côte d'Azur</h2>
          <p className="sf text-stone-500 mt-4 mb-8 leading-relaxed">
            De Fréjus à Menton, nous couvrons l'intégralité du littoral azuréen
            et l'arrière-pays niçois.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {zones.map((z) => (
              <div key={z.zone} className="flex items-start gap-4 py-4 border-b border-stone-100">
                <span
                  className="mt-0.5 h-2 w-2 rounded-full shrink-0"
                  style={{ background: '#c9a84c' }}
                />
                <div>
                  <p className="font-sans text-sm font-medium text-gray-900">{z.zone}</p>
                  <p className="font-sans text-xs text-stone-500 mt-0.5">{z.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Amani */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Pourquoi choisir Amani sur la Côte d'Azur</h2>
          <div className="mt-8 space-y-6">
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Expertise locale</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                L'A8 saturée, la Moyenne Corniche, la basse Corniche, les routes de
                l'arrière-pays : nos chauffeurs choisissent l'itinéraire le plus rapide
                selon l'heure et la saison.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Discrétion absolue</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                La Côte d'Azur attire des personnalités publiques. Nos chauffeurs sont
                formés à la discrétion et ne partagent jamais les informations sur leurs
                passagers.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Disponibilité toute l'année</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Été comme hiver, Festival de Cannes comme saison creuse, nous maintenons
                le même niveau de service et les mêmes tarifs fixes.
              </p>
            </div>
            <div className="border-l-2 border-stone-200 pl-6">
              <p className="font-serif text-gray-900 mb-2">Multi-destinations</p>
              <p className="sf text-stone-600 text-sm leading-relaxed">
                Un seul chauffeur pour Nice, Cannes, Monaco et Saint-Tropez. Pas besoin
                de réserver un véhicule différent à chaque étape de votre séjour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pages liées */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Destinations Côte d'Azur</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Chauffeur privé Cannes', href: '/chauffeur-prive-cannes' },
              { label: 'Chauffeur privé Monaco', href: '/chauffeur-prive-monaco' },
              { label: 'Chauffeur privé Saint-Tropez', href: '/chauffeur-prive-saint-tropez' },
              { label: 'Longue distance', href: '/longue-distance' },
              { label: 'Mise à disposition', href: '/mise-a-disposition' },
              { label: 'Notre flotte', href: '/notre-flotte' },
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

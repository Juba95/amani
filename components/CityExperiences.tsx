/**
 * Section « 5 expériences » injectée dans les pages villes (concept
 * maquette : chaque destination = chauffeur + 5 expériences).
 */
import Link from 'next/link';
import { CITY_EXPERIENCES } from '@/lib/city-experiences';
import { getCityExpContent, cityExpSlug } from '@/lib/city-experience-content';

export default function CityExperiences({ slug }: { slug: string }) {
  const data = CITY_EXPERIENCES[slug];
  if (!data) return null;
  // Contenu long généré (vide tant que non généré → cartes non cliquables)
  const details = getCityExpContent(slug);
  const hasDetail = (title: string) => details.some((d) => d.slug === cityExpSlug(title));

  return (
    <section className="py-14 px-6 md:px-10 bg-warm-50">
      <div className="max-w-4xl mx-auto">
        <p className="tag">Expériences</p>
        <h2 className="heading mt-2">5 expériences avec votre chauffeur à {data.city}</h2>
        <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
          Au-delà des transferts, votre chauffeur devient la clé de la région —
          itinéraires privés, prix fixes, véhicule à disposition à chaque étape.
        </p>
        <div className="space-y-4">
          {data.experiences.map((e, i) => {
            const clickable = hasDetail(e.title);
            const inner = (
              <>
                <span className="font-serif text-2xl shrink-0 w-10" style={{ color: '#c9b27c' }}>
                  {['I', 'II', 'III', 'IV', 'V'][i]}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-gray-900">{e.title}</h3>
                  <p className="sf text-sm text-stone-600 leading-relaxed mt-1">{e.teaser}</p>
                  {clickable && (
                    <span className="inline-block mt-2 font-sans text-[0.65rem] font-bold tracking-[0.12em] uppercase" style={{ color: '#6d5a30' }}>
                      Découvrir l’itinéraire →
                    </span>
                  )}
                </div>
                <div className="shrink-0 text-left sm:text-right font-sans text-xs text-stone-400">
                  <span className="block">{e.duration}</span>
                  <span className="block mt-0.5">À partir de <b className="font-serif text-base text-gray-900 font-normal">{e.price} €</b></span>
                </div>
              </>
            );
            return clickable ? (
              <Link key={e.title} href={`/${slug}/${cityExpSlug(e.title)}`}
                className="card flex flex-col sm:flex-row sm:items-center gap-4 hover:-translate-y-0.5 hover:shadow-lg transition-all">
                {inner}
              </Link>
            ) : (
              <div key={e.title} className="card flex flex-col sm:flex-row sm:items-center gap-4">
                {inner}
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/reservation"
            className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white"
            style={{ background: '#0a0908' }}>
            Demander un devis
          </Link>
          <Link href="/experiences"
            className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 hover:border-stone-600 transition-colors">
            Toutes nos expériences
          </Link>
        </div>
      </div>
    </section>
  );
}

'use client';

/**
 * Carte d'Europe interactive : survol/clic d'un pays → panneau listant les
 * destinations du pays avec lien vers chaque page ville (5 expériences).
 * Le fond SVG (public/images/europe-map.svg, IDs ISO-3166 alpha-2) est chargé
 * une fois côté client puis annoté.
 */
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export interface MapCountry {
  name: string;
  cities: { slug: string; name: string }[];
}

export default function EuropeMap({
  locale,
  countries,
}: {
  locale: 'fr' | 'en';
  countries: Record<string, MapCountry>;
}) {
  const holder = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState('');
  const [selected, setSelected] = useState<string>('fr');

  useEffect(() => {
    fetch('/images/europe-map.svg')
      .then((r) => r.text())
      .then(setSvg)
      .catch(() => {});
  }, []);

  // Annote les pays couverts + bind les interactions
  useEffect(() => {
    const root = holder.current;
    if (!root || !svg) return;
    const cleanups: (() => void)[] = [];
    Object.keys(countries).forEach((iso) => {
      const el = root.querySelector<SVGGraphicsElement>(`#${iso}`);
      if (!el) return;
      el.classList.add('am-active');
      const on = () => setSelected(iso);
      el.addEventListener('click', on);
      el.addEventListener('mouseenter', on);
      cleanups.push(() => {
        el.removeEventListener('click', on);
        el.removeEventListener('mouseenter', on);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, [svg, countries]);

  // Marque le pays sélectionné
  useEffect(() => {
    const root = holder.current;
    if (!root || !svg) return;
    root.querySelectorAll('.am-selected').forEach((el) => el.classList.remove('am-selected'));
    root.querySelector(`#${selected}`)?.classList.add('am-selected');
  }, [selected, svg]);

  const current = countries[selected];
  const base = locale === 'en' ? '/en/destinations' : '/destinations';

  return (
    <div className="grid lg:grid-cols-[1.4fr,1fr] gap-8 items-start">
      <div
        ref={holder}
        className="am-map rounded-lg border border-warm-200 bg-white overflow-hidden"
        dangerouslySetInnerHTML={{ __html: svg }}
        aria-label={locale === 'en' ? 'Interactive map of Europe' : 'Carte interactive de l’Europe'}
      />
      <div className="bg-warm-50 border border-warm-200 rounded-lg p-6 lg:sticky lg:top-28">
        {current ? (
          <>
            <p className="tag">{locale === 'en' ? 'Destinations in' : 'Destinations en'}</p>
            <h3 className="font-serif text-2xl text-gray-900 mt-1 mb-4">{current.name}</h3>
            <div className="grid grid-cols-2 gap-x-4 max-h-[420px] overflow-y-auto pr-1">
              {current.cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`${base}/${c.slug}`}
                  className="font-sans text-sm text-stone-600 hover:text-gold-500 py-1.5 border-b border-warm-200"
                >
                  {c.name}
                  <span className="block text-[0.6rem] tracking-[0.1em] uppercase text-stone-400">
                    {locale === 'en' ? '5 experiences' : '5 expériences'}
                  </span>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <p className="sf text-stone-500 text-sm">
            {locale === 'en'
              ? 'Hover or tap a country to see our destinations.'
              : 'Survolez ou touchez un pays pour voir nos destinations.'}
          </p>
        )}
      </div>

      <style jsx global>{`
        .am-map svg { width: 100%; height: auto; display: block; }
        .am-map path, .am-map g { fill: #ece9e3; stroke: #ffffff; stroke-width: 0.5; transition: fill .15s; }
        .am-map .am-active, .am-map .am-active path { fill: #c9b27c; cursor: pointer; }
        .am-map .am-active:hover, .am-map .am-active:hover path { fill: #a8894e; }
        .am-map .am-selected, .am-map .am-selected path { fill: #8a7340 !important; }
      `}</style>
    </div>
  );
}

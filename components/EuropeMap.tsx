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
      .then((raw) => {
        // Recadre sur l'Europe couverte (le fond inclut Groenland/Proche-Orient,
        // coûteux en espace visuel) : union des bbox des pays desservis + marge.
        const open = raw.indexOf('<svg');
        const close = raw.indexOf('>', open);
        let tag = raw.slice(open, close + 1)
          .replace(/\s(width|height|viewBox)="[^"]*"/g, '')
          .replace('<svg', '<svg viewBox="105 -15 401 538"');
        setSvg(raw.slice(0, open) + tag + raw.slice(close + 1));
      })
      .catch(() => {});
  }, []);

  // Annote visuellement les pays couverts (aucun écouteur par élément :
  // les interactions passent par délégation sur le conteneur, cf. onMouseOver)
  // puis recadre le viewBox sur l'union des pays couverts : le fond de carte
  // inclut Groenland/Proche-Orient, inutiles et coûteux en espace visuel.
  useEffect(() => {
    const root = holder.current;
    if (!root || !svg) return;
    Object.keys(countries).forEach((iso) => {
      root.querySelector(`#${iso}`)?.classList.add('am-active');
    });
  }, [svg, countries]);

  // Remonte du nœud SVG survolé jusqu'au pays couvert le plus proche
  const countryFromEvent = (target: EventTarget | null): string | null => {
    let el = target as Element | null;
    while (el && el !== holder.current) {
      const id = (el as Element).id;
      if (id && countries[id]) return id;
      el = el.parentElement;
    }
    return null;
  };

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
        onMouseOver={(e) => { const iso = countryFromEvent(e.target); if (iso) setSelected(iso); }}
        onClick={(e) => { const iso = countryFromEvent(e.target); if (iso) setSelected(iso); }}
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

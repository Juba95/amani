'use client';

/**
 * Carte d'Europe interactive : survol/clic d'un pays → panneau listant les
 * destinations du pays avec lien vers chaque page ville (5 expériences).
 * Le fond SVG (public/images/europe-map.svg, IDs ISO-3166 alpha-2) est chargé
 * une fois côté client puis annoté.
 *
 * Deux variantes :
 *  - 'panel' (défaut) : carte claire + panneau latéral listant les villes
 *  - 'hero'           : carte seule sur fond sombre (palette or), avec un
 *                       badge flottant pays survolé → lien vers /destinations
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
  variant = 'panel',
}: {
  locale: 'fr' | 'en';
  countries: Record<string, MapCountry>;
  variant?: 'panel' | 'hero';
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
        const tag = raw.slice(open, close + 1)
          .replace(/\s(width|height|viewBox)="[^"]*"/g, '')
          .replace('<svg', '<svg viewBox="105 -15 401 538"');
        let out = raw.slice(0, open) + tag + raw.slice(close + 1);
        // Marque les pays couverts DANS la chaîne (plutôt qu'en mutant le DOM
        // après coup : une ré-injection d'innerHTML par React effacerait des
        // classes ajoutées via classList).
        Object.keys(countries).forEach((iso) => {
          const cls = iso === 'fr' ? 'am-active am-selected' : 'am-active';
          const tagRe = new RegExp(`<[a-zA-Z]+[^>]*?id="${iso}"[^>]*?>`);
          out = out.replace(tagRe, (m) =>
            m.includes('class="')
              ? m.replace('class="', `class="${cls} `)
              : m.replace(`id="${iso}"`, `id="${iso}" class="${cls}"`),
          );
        });
        setSvg(out);
      })
      .catch(() => {});
    // countries est stable (données serveur) — pas besoin de re-fetch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  const en = locale === 'en';

  /* ── Variante hero : carte seule, palette sombre/or, badge flottant ── */
  if (variant === 'hero') {
    const total = Object.values(countries).reduce((n, c) => n + c.cities.length, 0);
    return (
      <div className="relative">
        <div
          ref={holder}
          className="am-map am-map--hero"
          dangerouslySetInnerHTML={{ __html: svg }}
          onMouseOver={(e) => { const iso = countryFromEvent(e.target); if (iso) setSelected(iso); }}
          onClick={(e) => { const iso = countryFromEvent(e.target); if (iso) setSelected(iso); }}
          aria-label={en ? 'Interactive map of Europe' : 'Carte interactive de l’Europe'}
        />

        {/* Compteur discret, en haut de la carte */}
        <p className="absolute top-0 left-1 font-sans text-[0.6rem] tracking-[0.2em] uppercase pointer-events-none"
          style={{ color: 'rgba(201,168,76,0.85)' }}>
          {total} {en ? 'destinations · 30 countries' : 'destinations · 30 pays'}
        </p>

        {/* Badge du pays survolé → lien vers le hub destinations */}
        {current && (
          <Link
            href={base}
            className="absolute bottom-1 left-1 flex items-baseline gap-2.5 rounded-md px-4 py-2.5 backdrop-blur-sm transition-colors group"
            style={{ background: 'rgba(10,9,8,0.72)', border: '1px solid rgba(201,168,76,0.35)' }}
          >
            <span className="font-serif text-lg leading-none" style={{ color: '#f5f3ef' }}>{current.name}</span>
            <span className="font-sans text-[0.62rem] tracking-[0.14em] uppercase" style={{ color: '#c9a84c' }}>
              {current.cities.length} {en ? 'cities' : 'villes'} <span className="group-hover:translate-x-0.5 inline-block transition-transform">→</span>
            </span>
          </Link>
        )}

        <style jsx global>{`
          .am-map svg { width: 100%; height: auto; display: block; }
          .am-map--hero path, .am-map--hero g { fill: rgba(245,240,230,0.09); stroke: rgba(245,240,230,0.13); stroke-width: 0.5; transition: fill .15s; }
          .am-map--hero .am-active, .am-map--hero .am-active path { fill: rgba(201,168,76,0.5); cursor: pointer; }
          .am-map--hero .am-active:hover, .am-map--hero .am-active:hover path { fill: rgba(201,168,76,0.8); }
          .am-map--hero .am-selected, .am-map--hero .am-selected path { fill: #c9a84c !important; }
        `}</style>
      </div>
    );
  }

  /* ── Variante panel : carte claire + liste des villes du pays ── */
  return (
    <div className="grid lg:grid-cols-[1.4fr,1fr] gap-8 items-start">
      <div
        ref={holder}
        className="am-map am-map--panel rounded-lg border border-warm-200 bg-white overflow-hidden"
        dangerouslySetInnerHTML={{ __html: svg }}
        onMouseOver={(e) => { const iso = countryFromEvent(e.target); if (iso) setSelected(iso); }}
        onClick={(e) => { const iso = countryFromEvent(e.target); if (iso) setSelected(iso); }}
        aria-label={en ? 'Interactive map of Europe' : 'Carte interactive de l’Europe'}
      />
      <div className="bg-warm-50 border border-warm-200 rounded-lg p-6 lg:sticky lg:top-28">
        {current ? (
          <>
            <p className="tag">{en ? 'Destinations in' : 'Destinations en'}</p>
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
                    {en ? '5 experiences' : '5 expériences'}
                  </span>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <p className="sf text-stone-500 text-sm">
            {en
              ? 'Hover or tap a country to see our destinations.'
              : 'Survolez ou touchez un pays pour voir nos destinations.'}
          </p>
        )}
      </div>

      <style jsx global>{`
        .am-map svg { width: 100%; height: auto; display: block; }
        .am-map--panel path, .am-map--panel g { fill: #ece9e3; stroke: #ffffff; stroke-width: 0.5; transition: fill .15s; }
        .am-map--panel .am-active, .am-map--panel .am-active path { fill: #c9b27c; cursor: pointer; }
        .am-map--panel .am-active:hover, .am-map--panel .am-active:hover path { fill: #a8894e; }
        .am-map--panel .am-selected, .am-map--panel .am-selected path { fill: #8a7340 !important; }
      `}</style>
    </div>
  );
}

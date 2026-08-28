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
  locale: 'fr' | 'en' | 'de';
  countries: Record<string, MapCountry>;
  variant?: 'panel' | 'hero';
}) {
  const holder = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState('');
  const [selected, setSelected] = useState<string>('fr');
  // Survol = aperçu ; clic = fige la sélection (re-clic sur le même pays = libère).
  const [locked, setLocked] = useState(false);

  const handleHover = (e: React.MouseEvent) => {
    if (locked) return;
    const iso = countryFromEvent(e.target);
    if (iso) setSelected(iso);
  };
  const handleClick = (e: React.MouseEvent) => {
    const iso = countryFromEvent(e.target);
    if (!iso) return;
    if (locked && iso === selected) setLocked(false);
    else { setSelected(iso); setLocked(true); }
  };

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
  // Libellés de la carte, par langue (fr par défaut).
  const M = {
    fr: { alt: 'Carte interactive de l’Europe', countries: 'destinations · 30 pays',
          pinned: '📍 Figé — recliquez pour libérer', hint: 'Survolez · cliquez pour figer', cities: 'villes' },
    en: { alt: 'Interactive map of Europe', countries: 'destinations · 30 countries',
          pinned: '📍 Pinned — click again to release', hint: 'Hover to explore · click to pin', cities: 'cities' },
    de: { alt: 'Interaktive Europakarte', countries: 'Ziele · 30 Länder',
          pinned: '📍 Fixiert — erneut klicken zum Lösen', hint: 'Fahren Sie über die Karte · Klick fixiert', cities: 'Städte' },
  }[locale] ?? {
    alt: 'Carte interactive de l’Europe', countries: 'destinations · 30 pays',
    pinned: '📍 Figé — recliquez pour libérer', hint: 'Survolez · cliquez pour figer', cities: 'villes',
  };

  /* ── Variante hero : carte seule, palette sombre/or, badge flottant ── */
  if (variant === 'hero') {
    const total = Object.values(countries).reduce((n, c) => n + c.cities.length, 0);
    return (
      <div className="relative">
        <div
          ref={holder}
          className={`am-map am-map--hero ${locked ? 'am-locked' : ''}`}
          dangerouslySetInnerHTML={{ __html: svg }}
          onMouseOver={handleHover}
          onClick={handleClick}
          aria-label={M.alt}
        />

        {/* Compteur + indication d'usage, en haut de la carte */}
        <div className="absolute top-0 left-1 pointer-events-none">
          <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: 'rgba(201,168,76,0.85)' }}>
            {total} {M.countries}
          </p>
          <p className="font-sans text-[0.55rem] tracking-[0.08em] mt-0.5" style={{ color: 'rgba(245,240,230,0.4)' }}>
            {locked ? M.pinned : M.hint}
          </p>
        </div>

        {/* Badge du pays sélectionné → lien vers le hub destinations */}
        {current && (
          <Link
            href={base}
            className="absolute bottom-1 left-1 flex items-baseline gap-2.5 rounded-md px-4 py-2.5 backdrop-blur-sm transition-colors group"
            style={{ background: 'rgba(10,9,8,0.72)', border: `1px solid ${locked ? '#c9a84c' : 'rgba(201,168,76,0.35)'}` }}
          >
            <span className="font-serif text-lg leading-none" style={{ color: '#f5f3ef' }}>{current.name}</span>
            <span className="font-sans text-[0.62rem] tracking-[0.14em] uppercase" style={{ color: '#c9a84c' }}>
              {current.cities.length} {M.cities} <span className="group-hover:translate-x-0.5 inline-block transition-transform">→</span>
            </span>
          </Link>
        )}

        <style jsx global>{`
          .am-map svg { width: 100%; height: auto; display: block; }
          .am-map--hero path, .am-map--hero g { fill: rgba(245,240,230,0.09); stroke: rgba(245,240,230,0.13); stroke-width: 0.5; transition: fill .15s; }
          .am-map--hero .am-active, .am-map--hero .am-active path { fill: rgba(201,168,76,0.5); cursor: pointer; }
          .am-map--hero .am-active:hover, .am-map--hero .am-active:hover path { fill: rgba(201,168,76,0.8); }
          .am-map--hero .am-selected, .am-map--hero .am-selected path { fill: #c9a84c !important; }
          .am-map--hero.am-locked .am-active:hover, .am-map--hero.am-locked .am-active:hover path { fill: rgba(201,168,76,0.5); }
          .am-map--hero.am-locked .am-selected, .am-map--hero.am-locked .am-selected path { fill: #e0c56a !important; }
        `}</style>
      </div>
    );
  }

  /* ── Variante panel : carte claire + liste des villes du pays ── */
  return (
    <div className="grid lg:grid-cols-[1.4fr,1fr] gap-8 items-start">
      <div
        ref={holder}
        className={`am-map am-map--panel rounded-lg border border-warm-200 bg-white overflow-hidden ${locked ? 'am-locked' : ''}`}
        dangerouslySetInnerHTML={{ __html: svg }}
        onMouseOver={handleHover}
        onClick={handleClick}
        aria-label={en ? 'Interactive map of Europe' : 'Carte interactive de l’Europe'}
      />
      <div className="bg-warm-50 border border-warm-200 rounded-lg p-6 lg:sticky lg:top-28">
        {current ? (
          <>
            <p className="tag">
              {en ? 'Destinations in' : 'Destinations en'}
              {locked && <span className="ml-2 text-gold-500 normal-case tracking-normal">· {en ? '📍 pinned' : '📍 figé'}</span>}
            </p>
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
        .am-map--panel.am-locked .am-active:hover, .am-map--panel.am-locked .am-active:hover path { fill: #c9b27c; }
      `}</style>
    </div>
  );
}

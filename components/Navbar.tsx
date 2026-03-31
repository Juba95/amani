'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { Locale } from '@/lib/vehicles';

const LANGS: { code: Locale; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇶🇦' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
];

interface NavbarProps {
  t: any;
  locale: Locale;
}

export default function Navbar({ t, locale }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const currentLang = LANGS.find((l) => l.code === locale) || LANGS[0];

  // Determine if we are on the homepage for this locale
  const homePrefix = locale === 'fr' ? '' : `/${locale}`;
  const isHome =
    pathname === '/' ||
    pathname === `/${locale}` ||
    pathname === `/${locale}/`;

  // Build anchor href: same page → #anchor, other page → /[prefix]#anchor
  const anchorHref = (id: string) =>
    isHome ? `#${id}` : `${homePrefix}/#${id}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-stone-100'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Logo */}
      <Link
        href={locale === 'fr' ? '/' : `/${locale}`}
        className="font-serif font-medium tracking-[0.35em] uppercase transition-opacity hover:opacity-75"
        style={{ fontSize: '0.78rem', color: '#8a7340' }}
      >
        Amani Limousines
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        <a
          href={anchorHref('services')}
          className="font-sans text-xs text-gray-600 hover:text-gold-400 tracking-wide transition-colors"
        >
          {t?.nav?.services}
        </a>
        <a
          href={anchorHref('fleet')}
          className="font-sans text-xs text-gray-600 hover:text-gold-400 tracking-wide transition-colors"
        >
          {t?.nav?.fleet}
        </a>
        <a
          href={anchorHref('events')}
          className="font-sans text-xs text-gray-600 hover:text-gold-400 tracking-wide transition-colors"
        >
          {t?.nav?.events}
        </a>
        <a
          href={anchorHref('contact')}
          className="font-sans text-xs text-gray-600 hover:text-gold-400 tracking-wide transition-colors"
        >
          {t?.nav?.contact}
        </a>
      </div>

      {/* Right side: phone + lang */}
      <div className="flex items-center gap-4">
        <a
          href={`tel:${t?.nav?.phone?.replace(/\s/g, '') ?? ''}`}
          className="hidden sm:block font-sans text-xs text-gray-700 tracking-wide hover:text-gold-400 transition-colors font-medium"
        >
          {t?.nav?.phone ?? ''}
        </a>

        {/* Language switcher */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-stone-200 rounded-md font-sans text-xs text-gray-700 hover:border-gold-400 hover:text-gold-400 transition-all"
          >
            {currentLang.flag} {locale.toUpperCase()}
          </button>
          {langOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white border border-stone-100 rounded-lg overflow-hidden min-w-[140px] shadow-lg">
              {LANGS.map((l) => (
                <a
                  key={l.code}
                  href={l.code === 'fr' ? '/' : `/${l.code}`}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs font-sans text-gray-600 hover:bg-stone-50 hover:text-gold-400 transition-all"
                  onClick={() => setLangOpen(false)}
                >
                  {l.flag} {l.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 text-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-100 shadow-md py-6 px-6 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href={anchorHref('services')}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm text-gray-700 hover:text-gold-400"
            >
              {t?.nav?.services}
            </a>
            <a
              href={anchorHref('fleet')}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm text-gray-700 hover:text-gold-400"
            >
              {t?.nav?.fleet}
            </a>
            <a
              href={anchorHref('events')}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm text-gray-700 hover:text-gold-400"
            >
              {t?.nav?.events}
            </a>
            <a
              href={anchorHref('contact')}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm text-gray-700 hover:text-gold-400"
            >
              {t?.nav?.contact}
            </a>
            <a
              href={`tel:${t?.nav?.phone?.replace(/\s/g, '') ?? ''}`}
              className="font-sans text-sm font-semibold"
              style={{ color: '#8a7340' }}
            >
              {t?.nav?.phone ?? ''}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

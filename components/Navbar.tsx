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

// ── Mapping FR ↔ EN pour le switcher de langue ──────────────────────────────
const FR_TO_EN: Record<string, string> = {
  '/':                          '/en',
  '/mise-a-disposition':        '/en/hourly-hire',
  '/transfert-prive':           '/en/cdg-airport-transfer',
  '/meet-and-greet':            '/en/meet-and-greet',
  '/convoi-delegations':        '/en/delegation-transport',
  '/securite-rapprochee':       '/en/close-protection',
  '/excursion-privee':          '/en/private-excursion',
  '/longue-distance':           '/en/long-distance',
  '/transfert-aeroport-cdg':    '/en/cdg-airport-transfer',
  '/transfert-aeroport-orly':   '/en/orly-airport-transfer',
  '/transfert-le-bourget':      '/en/cdg-airport-transfer',
  '/notre-flotte':              '/en/our-fleet',
  '/evenements':                '/en/events',
  '/evenements/paris-fashion-week': '/en/events',
  '/evenements/paris-air-show': '/en/events',
  '/evenements/roland-garros':  '/en/events',
  '/evenements/festival-de-cannes': '/en/events',
  '/contact':                   '/en/contact',
  '/a-propos':                  '/en',
};

const EN_TO_FR: Record<string, string> = {
  '/en':                        '/',
  '/en/hourly-hire':            '/mise-a-disposition',
  '/en/cdg-airport-transfer':   '/transfert-aeroport-cdg',
  '/en/orly-airport-transfer':  '/transfert-aeroport-orly',
  '/en/meet-and-greet':         '/meet-and-greet',
  '/en/delegation-transport':   '/convoi-delegations',
  '/en/close-protection':       '/securite-rapprochee',
  '/en/private-excursion':      '/excursion-privee',
  '/en/long-distance':          '/longue-distance',
  '/en/our-fleet':              '/notre-flotte',
  '/en/events':                 '/evenements',
  '/en/contact':                '/contact',
};

function getLocalizedPath(pathname: string, targetLocale: string): string {
  // AR et ZH → toujours leur homepage (pas de pages dédiées par service)
  if (targetLocale === 'ar') return '/ar';
  if (targetLocale === 'zh') return '/zh';

  // Vers FR
  if (targetLocale === 'fr') {
    if (pathname.startsWith('/en')) return EN_TO_FR[pathname] ?? '/';
    if (pathname.startsWith('/ar') || pathname.startsWith('/zh')) return '/';
    return pathname; // déjà en FR
  }

  // Vers EN
  if (targetLocale === 'en') {
    if (pathname.startsWith('/ar') || pathname.startsWith('/zh')) return '/en';
    if (pathname.startsWith('/en')) return pathname; // déjà en EN
    return FR_TO_EN[pathname] ?? '/en'; // FR → EN
  }

  return '/';
}

// ────────────────────────────────────────────────────────────────────────────

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

  const isHome =
    pathname === '/' ||
    pathname === `/${locale}` ||
    pathname === `/${locale}/`;

  const homePrefix = locale === 'fr' ? '' : `/${locale}`;
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
        <a href={anchorHref('services')}
          className="font-sans text-xs text-gray-600 hover:text-gold-400 tracking-wide transition-colors">
          {t?.nav?.services}
        </a>
        <a href={anchorHref('fleet')}
          className="font-sans text-xs text-gray-600 hover:text-gold-400 tracking-wide transition-colors">
          {t?.nav?.fleet}
        </a>
        <a href={anchorHref('events')}
          className="font-sans text-xs text-gray-600 hover:text-gold-400 tracking-wide transition-colors">
          {t?.nav?.events}
        </a>
        <a href={anchorHref('contact')}
          className="font-sans text-xs text-gray-600 hover:text-gold-400 tracking-wide transition-colors">
          {t?.nav?.contact}
        </a>
      </div>

      {/* Right: phone + lang switcher */}
      <div className="flex items-center gap-4">
        <a
          href={`tel:${t?.nav?.phone?.replace(/\s/g, '') ?? ''}`}
          className="hidden sm:block font-sans text-xs text-gray-700 tracking-wide hover:text-gold-400 transition-colors font-medium"
          dir="ltr"
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
                  href={getLocalizedPath(pathname, l.code)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-sans transition-all ${
                    l.code === locale
                      ? 'text-gold-400 bg-stone-50'
                      : 'text-gray-600 hover:bg-stone-50 hover:text-gold-400'
                  }`}
                  onClick={() => setLangOpen(false)}
                >
                  {l.flag} {l.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Mobile menu toggle */}
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
            <a href={anchorHref('services')} onClick={() => setMenuOpen(false)}
              className="font-sans text-sm text-gray-700 hover:text-gold-400">
              {t?.nav?.services}
            </a>
            <a href={anchorHref('fleet')} onClick={() => setMenuOpen(false)}
              className="font-sans text-sm text-gray-700 hover:text-gold-400">
              {t?.nav?.fleet}
            </a>
            <a href={anchorHref('events')} onClick={() => setMenuOpen(false)}
              className="font-sans text-sm text-gray-700 hover:text-gold-400">
              {t?.nav?.events}
            </a>
            <a href={anchorHref('contact')} onClick={() => setMenuOpen(false)}
              className="font-sans text-sm text-gray-700 hover:text-gold-400">
              {t?.nav?.contact}
            </a>
            <a
              href={`tel:${t?.nav?.phone?.replace(/\s/g, '') ?? ''}`}
              className="font-sans text-sm font-semibold"
              style={{ color: '#8a7340' }}
              dir="ltr"
            >
              {t?.nav?.phone ?? ''}
            </a>
            {/* Mobile language switcher */}
            <div className="border-t border-stone-100 pt-4 flex gap-3 flex-wrap">
              {LANGS.map((l) => (
                <a
                  key={l.code}
                  href={getLocalizedPath(pathname, l.code)}
                  className={`font-sans text-xs px-3 py-1.5 rounded-md border transition-all ${
                    l.code === locale
                      ? 'border-gold-400 text-gold-400'
                      : 'border-stone-200 text-gray-600 hover:border-gold-400 hover:text-gold-400'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.flag} {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { Locale } from '@/lib/vehicles';
import Logo from '@/components/Logo';

const LANGS: { code: Locale; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
];

// Mémorise le choix manuel de langue (lu par le middleware pour la détection
// automatique sur la racine — le choix explicite prime toujours)
function rememberLangChoice(code: string) {
  document.cookie = `amani-lang=${code}; max-age=${60 * 60 * 24 * 365}; path=/`;
}

// ── Mapping FR ↔ EN pour le switcher de langue ──────────────────────────────
const FR_TO_EN: Record<string, string> = {
  '/':                               '/en',
  '/mise-a-disposition':             '/en/hourly-hire',
  '/transfert-prive':                '/en/cdg-airport-transfer',
  '/meet-and-greet':                 '/en/meet-and-greet',
  '/convoi-delegations':             '/en/delegation-transport',
  '/securite-rapprochee':            '/en/close-protection',
  '/excursion-privee':               '/en/private-excursion',
  '/longue-distance':                '/en/long-distance',
  '/transfert-aeroport-cdg':         '/en/cdg-airport-transfer',
  '/transfert-aeroport-orly':        '/en/orly-airport-transfer',
  '/transfert-le-bourget':           '/en/cdg-airport-transfer',
  '/notre-flotte':                   '/en/our-fleet',
  '/evenements':                     '/en/events',
  '/evenements/paris-fashion-week':  '/en/events',
  '/evenements/paris-air-show':      '/en/events',
  '/evenements/roland-garros':       '/en/events',
  '/evenements/festival-de-cannes':  '/en/events',
  '/contact':                        '/en/contact',
  '/a-propos':                       '/en',
  '/chauffeur-prive-paris':          '/en/private-chauffeur-paris',
  '/chauffeur-prive-bordeaux':       '/en/private-chauffeur-bordeaux',
  '/chauffeur-prive-lyon':           '/en/private-chauffeur-paris', // fallback or specific if exists
  '/chauffeur-prive-nice':           '/en/private-chauffeur-paris',
  '/chauffeur-prive-cannes':         '/en/private-chauffeur-paris',
  '/chauffeur-prive-monaco':         '/en/private-chauffeur-paris',
  '/chauffeur-prive-marseille':      '/en/private-chauffeur-paris',
  '/chauffeur-prive-saint-tropez':   '/en/private-chauffeur-paris',
  '/chauffeur-prive-deauville':      '/en/private-chauffeur-paris',
  // Alpes / Haute-Savoie
  '/chauffeur-prive-chamonix':       '/en/chamonix-chauffeur',
  '/chauffeur-prive-megeve':         '/en/megeve-chauffeur',
  '/chauffeur-prive-haute-savoie':   '/en/haute-savoie-chauffeur',
  '/transfert-aeroport-economique':  '/en/economical-airport-transfer',
  '/experiences':                    '/en/experiences',
  '/destinations':                   '/en/destinations',
  '/corporate':                      '/en/corporate',
  // Chauffeurs multilingues
  '/chauffeur-anglophone':           '/en/english-speaking-chauffeur-paris',
  '/chauffeur-arabophone':           '/en/arabic-speaking-chauffeur-paris',
  '/chauffeur-hispanophone':         '/en/spanish-speaking-chauffeur-paris',
  '/chauffeur-germanophone':         '/en/german-speaking-chauffeur-paris',
  '/chauffeur-mandarin':             '/en/mandarin-speaking-chauffeur-paris',
  '/chauffeur-coreen':               '/en/korean-speaking-chauffeur-paris',
  '/chauffeur-japonais':             '/en/japanese-speaking-chauffeur-paris',
  '/chauffeur-russophone':           '/en/russian-speaking-chauffeur-paris',
};

const EN_TO_FR: Record<string, string> = {
  '/en':                             '/',
  '/en/hourly-hire':                 '/mise-a-disposition',
  '/en/cdg-airport-transfer':        '/transfert-aeroport-cdg',
  '/en/orly-airport-transfer':       '/transfert-aeroport-orly',
  '/en/meet-and-greet':              '/meet-and-greet',
  '/en/delegation-transport':        '/convoi-delegations',
  '/en/close-protection':            '/securite-rapprochee',
  '/en/private-excursion':           '/excursion-privee',
  '/en/long-distance':               '/longue-distance',
  '/en/our-fleet':                   '/notre-flotte',
  '/en/events':                      '/evenements',
  '/en/contact':                     '/contact',
  '/en/private-chauffeur-paris':     '/chauffeur-prive-paris',
  '/en/private-chauffeur-bordeaux':  '/chauffeur-prive-bordeaux',
  // Alpes / Haute-Savoie
  '/en/chamonix-chauffeur':          '/chauffeur-prive-chamonix',
  '/en/megeve-chauffeur':            '/chauffeur-prive-megeve',
  '/en/haute-savoie-chauffeur':      '/chauffeur-prive-haute-savoie',
  '/en/economical-airport-transfer': '/transfert-aeroport-economique',
  '/en/experiences':                 '/experiences',
  '/en/destinations':                '/destinations',
  '/en/corporate':                   '/corporate',
  // Chauffeurs multilingues
  '/en/english-speaking-chauffeur-paris':  '/chauffeur-anglophone',
  '/en/arabic-speaking-chauffeur-paris':   '/chauffeur-arabophone',
  '/en/spanish-speaking-chauffeur-paris':  '/chauffeur-hispanophone',
  '/en/german-speaking-chauffeur-paris':   '/chauffeur-germanophone',
  '/en/mandarin-speaking-chauffeur-paris': '/chauffeur-mandarin',
  '/en/korean-speaking-chauffeur-paris':   '/chauffeur-coreen',
  '/en/japanese-speaking-chauffeur-paris': '/chauffeur-japonais',
  '/en/russian-speaking-chauffeur-paris':  '/chauffeur-russophone',
};

// Pages existant en langue native (AR/ES/ZH) : clé = page FR ou EN équivalente
const TO_NATIVE: Record<'ar' | 'es' | 'zh', Record<string, string>> = {
  ar: {
    '/chauffeur-arabophone': '/ar/arabic-chauffeur',
    '/en/arabic-speaking-chauffeur-paris': '/ar/arabic-chauffeur',
  },
  es: {
    '/chauffeur-hispanophone': '/es/chofer-hispanohablante',
    '/en/spanish-speaking-chauffeur-paris': '/es/chofer-hispanohablante',
  },
  zh: {
    '/chauffeur-mandarin': '/zh/mandarin-chauffeur',
    '/en/mandarin-speaking-chauffeur-paris': '/zh/mandarin-chauffeur',
  },
};

// Depuis une page native, retrouver la version FR / EN
const NATIVE_TO_FR: Record<string, string> = {
  '/ar/arabic-chauffeur':        '/chauffeur-arabophone',
  '/es/chofer-hispanohablante':  '/chauffeur-hispanophone',
  '/zh/mandarin-chauffeur':      '/chauffeur-mandarin',
};
const NATIVE_TO_EN: Record<string, string> = {
  '/ar/arabic-chauffeur':        '/en/arabic-speaking-chauffeur-paris',
  '/es/chofer-hispanohablante':  '/en/spanish-speaking-chauffeur-paris',
  '/zh/mandarin-chauffeur':      '/en/mandarin-speaking-chauffeur-paris',
};

function getLocalizedPath(pathname: string, targetLocale: string): string {
  // AR, ZH et ES → page native équivalente si elle existe, sinon homepage
  if (targetLocale === 'ar' || targetLocale === 'zh' || targetLocale === 'es') {
    return TO_NATIVE[targetLocale][pathname] ?? `/${targetLocale}`;
  }

  const isLocalePath = pathname.startsWith('/ar') || pathname.startsWith('/zh') || pathname.startsWith('/es');

  // Vers FR
  if (targetLocale === 'fr') {
    if (pathname.startsWith('/en/experiences/')) return pathname.slice(3);
    if (pathname.startsWith('/en/destinations/')) return pathname.slice(3);
    if (pathname.startsWith('/en')) return EN_TO_FR[pathname] ?? '/';
    if (isLocalePath) return NATIVE_TO_FR[pathname] ?? '/';
    return pathname;
  }

  // Vers EN
  if (targetLocale === 'en') {
    if (isLocalePath) return NATIVE_TO_EN[pathname] ?? '/en';
    if (pathname.startsWith('/en')) return pathname;
    if (pathname.startsWith('/experiences/')) return `/en${pathname}`;
    if (pathname.startsWith('/destinations/')) return `/en${pathname}`;
    return FR_TO_EN[pathname] ?? '/en';
  }

  return '/';
}

// ── Menus dropdown ────────────────────────────────────────────────────────────

interface DropdownItem { label: string; href: string }

function getServicesMenu(locale: Locale, homePrefix: string): DropdownItem[] {
  if (locale === 'en') return [
    { label: 'Hourly hire',           href: '/en/hourly-hire' },
    { label: 'Airport transfer CDG',  href: '/en/cdg-airport-transfer' },
    { label: 'Airport transfer Orly', href: '/en/orly-airport-transfer' },
    { label: 'Meet & Greet',          href: '/en/meet-and-greet' },
    { label: 'Long distance',         href: '/en/long-distance' },
    { label: 'Delegation transport',  href: '/en/delegation-transport' },
    { label: 'Close protection',      href: '/en/close-protection' },
  ];
  // FR (default)
  return [
    { label: 'Mise à disposition',   href: '/mise-a-disposition' },
    { label: 'Transfert aéroport CDG', href: '/transfert-aeroport-cdg' },
    { label: 'Transfert aéroport Orly', href: '/transfert-aeroport-orly' },
    { label: 'Meet & Greet',          href: '/meet-and-greet' },
    { label: 'Longue distance',       href: '/longue-distance' },
    { label: 'Convoi délégations',    href: '/convoi-delegations' },
    { label: 'Sécurité & garde du corps', href: '/securite-rapprochee' },
  ];
}

function getEventsMenu(locale: Locale): DropdownItem[] {
  if (locale === 'en') return [
    { label: 'All experiences',         href: '/en/experiences' },
    { label: 'All events',              href: '/en/events' },
    { label: 'Paris Fashion Week',      href: '/evenements/paris-fashion-week' },
    { label: 'Paris Air Show',          href: '/evenements/paris-air-show' },
    { label: 'Roland Garros',           href: '/evenements/roland-garros' },
    { label: 'Festival de Cannes',      href: '/evenements/festival-de-cannes' },
    { label: 'Grand Prix Monaco',       href: '/evenements/grand-prix-monaco' },
    { label: 'Professional exhibitions', href: '/evenements/salons-professionnels' },
  ];
  return [
    { label: 'Toutes les expériences',  href: '/experiences' },
    { label: 'Tous les événements',     href: '/evenements' },
    { label: 'Paris Fashion Week',      href: '/evenements/paris-fashion-week' },
    { label: 'Paris Air Show',          href: '/evenements/paris-air-show' },
    { label: 'Roland Garros',           href: '/evenements/roland-garros' },
    { label: 'Festival de Cannes',      href: '/evenements/festival-de-cannes' },
    { label: 'Grand Prix Monaco',       href: '/evenements/grand-prix-monaco' },
    { label: 'Salons professionnels',   href: '/evenements/salons-professionnels' },
    { label: 'Hippodrome Deauville',    href: '/evenements/hippodrome-deauville' },
    { label: 'Mariage',                 href: '/chauffeur-mariage' },
  ];
}

// Top 10 des villes de France (pages dédiées). Pour l'EN, on pointe vers la
// page anglaise quand elle existe, sinon la page dédiée (landing) FR.
function getDestinationsMenu(locale: Locale): DropdownItem[] {
  if (locale === 'en') return [
    { label: 'Paris',        href: '/en/private-chauffeur-paris' },
    { label: 'Nice',         href: '/chauffeur-prive-nice' },
    { label: 'Cannes',       href: '/chauffeur-prive-cannes' },
    { label: 'Saint-Tropez', href: '/chauffeur-prive-saint-tropez' },
    { label: 'Marseille',    href: '/en/marseille-airport-transfer' },
    { label: 'Lyon',         href: '/en/lyon-airport-transfer' },
    { label: 'Bordeaux',     href: '/en/private-chauffeur-bordeaux' },
    { label: 'Deauville',    href: '/chauffeur-prive-deauville' },
    { label: 'Megève',       href: '/en/megeve-chauffeur' },
    { label: 'Chamonix',     href: '/en/chamonix-chauffeur' },
    { label: 'All destinations →', href: '/en/destinations' },
  ];
  return [
    { label: 'Paris',        href: '/chauffeur-prive-paris' },
    { label: 'Nice',         href: '/chauffeur-prive-nice' },
    { label: 'Cannes',       href: '/chauffeur-prive-cannes' },
    { label: 'Saint-Tropez', href: '/chauffeur-prive-saint-tropez' },
    { label: 'Marseille',    href: '/chauffeur-prive-marseille' },
    { label: 'Lyon',         href: '/chauffeur-prive-lyon' },
    { label: 'Bordeaux',     href: '/chauffeur-prive-bordeaux' },
    { label: 'Deauville',    href: '/chauffeur-prive-deauville' },
    { label: 'Megève',       href: '/chauffeur-prive-megeve' },
    { label: 'Chamonix',     href: '/chauffeur-prive-chamonix' },
    { label: 'Toutes les destinations →', href: '/destinations' },
  ];
}

// ────────────────────────────────────────────────────────────────────────────

interface NavbarProps {
  t: any;
  locale: Locale;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function DropdownMenu({ label, items, isOpen, onToggle, onClose }: DropdownMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 font-sans text-sm text-gray-700 hover:text-gold-400 tracking-wide transition-colors whitespace-nowrap"
      >
        {label}
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-stone-100 rounded-lg shadow-lg min-w-[220px] py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-2 font-sans text-sm text-gray-700 hover:bg-stone-50 hover:text-gold-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar({ t, locale }: NavbarProps) {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [langOpen, setLangOpen]   = useState(false);
  const [servicesOpen, setServicesOpen]     = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [eventsOpen, setEventsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
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

  const contactHref = locale === 'fr' ? '/contact' : `/${locale}/contact`;

  const servicesItems     = getServicesMenu(locale, homePrefix);
  const destinationsItems = getDestinationsMenu(locale);
  const eventsItems       = getEventsMenu(locale);

  const servicesLabel     = locale === 'en' ? 'Transfers'   : 'Transferts';
  const destinationsLabel = locale === 'en' ? 'Top cities'  : 'Top villes';
  const expLabel          = locale === 'en' ? 'Experiences' : 'Expériences';
  const expHref           = locale === 'en' ? '/en/experiences' : '/experiences';
  const corpHref          = locale === 'en' ? '/en/corporate' : '/corporate';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white shadow-sm border-stone-150'
          : 'border-stone-100'
      }`}
      style={{ background: scrolled ? '#fff' : '#faf8f5' }}
    >
      {/* Logo */}
      <Link
        href={locale === 'fr' ? '/' : `/${locale}`}
        className="transition-opacity hover:opacity-75 shrink-0"
        aria-label="Amani Limousines — accueil"
      >
        <Logo tone="dark" className="h-11 md:h-12 w-auto" />
      </Link>

      {/* Desktop nav (≥ lg : en dessous, menu hamburger pour éviter l'entassement) */}
      <div className="hidden lg:flex items-center gap-5">
        {/* Services dropdown */}
        {(locale === 'fr' || locale === 'en') && (
          <DropdownMenu
            label={servicesLabel}
            items={servicesItems}
            isOpen={servicesOpen}
            onToggle={() => { setServicesOpen(!servicesOpen); setDestinationsOpen(false); setEventsOpen(false); }}
            onClose={() => setServicesOpen(false)}
          />
        )}
        {(locale === 'ar' || locale === 'zh') && (
          <a href={anchorHref('services')}
            className="font-sans text-sm text-gray-700 hover:text-gold-400 tracking-wide transition-colors whitespace-nowrap">
            {t?.nav?.services}
          </a>
        )}

        {/* Destinations dropdown */}
        {(locale === 'fr' || locale === 'en') && (
          <DropdownMenu
            label={destinationsLabel}
            items={destinationsItems}
            isOpen={destinationsOpen}
            onToggle={() => { setDestinationsOpen(!destinationsOpen); setServicesOpen(false); setEventsOpen(false); }}
            onClose={() => setDestinationsOpen(false)}
          />
        )}

        {/* Events dropdown */}
        {(locale === 'fr' || locale === 'en') && (
          <DropdownMenu
            label={locale === 'en' ? 'Experiences & Events' : 'Expériences & Événements'}
            items={eventsItems}
            isOpen={eventsOpen}
            onToggle={() => { setEventsOpen(!eventsOpen); setServicesOpen(false); setDestinationsOpen(false); }}
            onClose={() => setEventsOpen(false)}
          />
        )}
        {(locale === 'ar' || locale === 'zh') && (
          <a href={anchorHref('events')}
            className="font-sans text-sm text-gray-700 hover:text-gold-400 tracking-wide transition-colors whitespace-nowrap">
            {t?.nav?.events}
          </a>
        )}

        {/* Corporate */}
        {(locale === 'fr' || locale === 'en') && (
          <Link href={corpHref}
            className="font-sans text-sm text-gray-700 hover:text-gold-400 tracking-wide transition-colors whitespace-nowrap">
            Corporate
          </Link>
        )}

        {/* Recrutement */}
        {(locale === 'fr' || locale === 'en') && (
          <Link href={locale === 'en' ? '/en/become-a-chauffeur' : '/devenir-chauffeur'}
            className="font-sans text-sm text-gray-700 hover:text-gold-400 tracking-wide transition-colors whitespace-nowrap">
            {locale === 'en' ? 'Careers' : 'Recrutement'}
          </Link>
        )}

        {/* Contact */}
        <Link href={contactHref}
          className="font-sans text-sm tracking-wide transition-colors px-3.5 py-1.5 rounded-md border border-stone-200 hover:border-gold-400 hover:text-gold-400"
          style={{ color: pathname === contactHref ? '#8a7340' : undefined }}>
          {t?.nav?.contact}
        </Link>
      </div>

      {/* Right: phone + lang switcher */}
      <div className="flex items-center gap-4">
        <a
          href={`tel:${t?.nav?.phone?.replace(/\s/g, '') ?? ''}`}
          className="hidden xl:block font-sans text-sm text-gray-700 tracking-wide hover:text-gold-400 transition-colors font-medium whitespace-nowrap"
          dir="ltr"
        >
          {t?.nav?.phone ?? ''}
        </a>

        {/* Language switcher */}
        <div className="relative">
          <button
            onClick={() => { setLangOpen(!langOpen); setServicesOpen(false); setDestinationsOpen(false); setEventsOpen(false); }}
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
                  onClick={() => { rememberLangChoice(l.code); setLangOpen(false); }}
                >
                  {l.flag} {l.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-gray-700 text-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-100 shadow-md py-6 px-6 lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {/* Services section */}
            {(locale === 'fr' || locale === 'en') && (
              <>
                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-stone-400 mt-4 mb-2">
                  {servicesLabel}
                </p>
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-sans text-sm text-gray-700 hover:text-gold-400 py-1.5"
                  >
                    {item.label}
                  </Link>
                ))}

                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-stone-400 mt-4 mb-2">
                  {destinationsLabel}
                </p>
                {destinationsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-sans text-sm text-gray-700 hover:text-gold-400 py-1.5"
                  >
                    {item.label}
                  </Link>
                ))}
              </>
            )}

            {(locale === 'ar' || locale === 'zh') && (
              <a href={anchorHref('services')} onClick={() => setMenuOpen(false)}
                className="font-sans text-sm text-gray-700 hover:text-gold-400 py-1.5">
                {t?.nav?.services}
              </a>
            )}

            {/* Events section */}
            {(locale === 'fr' || locale === 'en') && (
              <>
                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-stone-400 mt-4 mb-2">
                  {t?.nav?.events ?? (locale === 'en' ? 'Events' : 'Événements')}
                </p>
                {eventsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-sans text-sm text-gray-700 hover:text-gold-400 py-1.5"
                  >
                    {item.label}
                  </Link>
                ))}
              </>
            )}

            <div className="border-t border-stone-100 mt-4 pt-4 flex flex-col gap-1">
              {(locale === 'fr' || locale === 'en') && (
                <Link href={locale === 'en' ? '/en/become-a-chauffeur' : '/devenir-chauffeur'} onClick={() => setMenuOpen(false)}
                  className="font-sans text-sm text-gray-700 hover:text-gold-400 py-1.5">
                  {locale === 'en' ? 'Careers' : 'Recrutement'}
                </Link>
              )}
              {(locale === 'fr' || locale === 'en') && (
                <Link href={corpHref} onClick={() => setMenuOpen(false)}
                  className="font-sans text-sm text-gray-700 hover:text-gold-400 py-1.5">
                  Corporate
                </Link>
              )}
              <Link href={contactHref} onClick={() => setMenuOpen(false)}
                className="font-sans text-sm text-gray-700 hover:text-gold-400 py-1.5">
                {t?.nav?.contact}
              </Link>
              <a
                href={`tel:${t?.nav?.phone?.replace(/\s/g, '') ?? ''}`}
                className="font-sans text-sm font-semibold mt-2"
                style={{ color: '#8a7340' }}
                dir="ltr"
              >
                {t?.nav?.phone ?? ''}
              </a>
            </div>

            {/* Mobile language switcher */}
            <div className="border-t border-stone-100 pt-4 mt-2 flex gap-3 flex-wrap">
              {LANGS.map((l) => (
                <a
                  key={l.code}
                  href={getLocalizedPath(pathname, l.code)}
                  className={`font-sans text-xs px-3 py-1.5 rounded-md border transition-all ${
                    l.code === locale
                      ? 'border-gold-400 text-gold-400'
                      : 'border-stone-200 text-gray-600 hover:border-gold-400 hover:text-gold-400'
                  }`}
                  onClick={() => { rememberLangChoice(l.code); setMenuOpen(false); }}
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

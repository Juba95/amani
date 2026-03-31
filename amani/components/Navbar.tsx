'use client';

import { useState } from 'react';
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

  const currentLang = LANGS.find((l) => l.code === locale) || LANGS[0];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
      style={{
        background: 'linear-gradient(180deg, rgba(6,5,4,0.95) 0%, rgba(6,5,4,0) 100%)',
        backdropFilter: 'blur(8px)',
      }}>

      {/* Logo */}
      <a href={locale === 'fr' ? '/' : `/${locale}`}
        className="text-gold-400 text-sm font-serif font-medium tracking-[0.35em] uppercase">
        Amani Limousines
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#services" className="font-sans text-xs text-stone-500 hover:text-gold-400 tracking-wide transition-colors">
          {t.nav.services}
        </a>
        <a href="#fleet" className="font-sans text-xs text-stone-500 hover:text-gold-400 tracking-wide transition-colors">
          {t.nav.fleet}
        </a>
        <a href="#events" className="font-sans text-xs text-stone-500 hover:text-gold-400 tracking-wide transition-colors">
          {t.nav.events}
        </a>
        <a href="#contact" className="font-sans text-xs text-stone-500 hover:text-gold-400 tracking-wide transition-colors">
          {t.nav.contact}
        </a>
      </div>

      {/* Right side: phone + lang */}
      <div className="flex items-center gap-4">
        <a href={`tel:${t.nav.phone.replace(/\s/g, '')}`}
          className="hidden sm:block font-sans text-xs text-stone-500 tracking-wide hover:text-gold-400 transition-colors">
          {t.nav.phone}
        </a>

        {/* Language switcher */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-gold-400/20 rounded-md font-sans text-xs text-gold-400 hover:border-gold-400/40 transition-all">
            {currentLang.flag} {locale.toUpperCase()}
          </button>
          {langOpen && (
            <div className="absolute top-full right-0 mt-1 bg-dark-50 border border-gold-400/15 rounded-lg overflow-hidden min-w-[140px] shadow-xl">
              {LANGS.map((l) => (
                <a key={l.code}
                  href={l.code === 'fr' ? '/' : `/${l.code}`}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs font-sans text-stone-500 hover:bg-gold-400/[0.08] hover:text-gold-400 transition-all"
                  onClick={() => setLangOpen(false)}>
                  {l.flag} {l.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gold-400 text-lg" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-dark-500/98 backdrop-blur-xl border-b border-gold-400/10 py-6 px-6 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#services" onClick={() => setMenuOpen(false)} className="font-sans text-sm text-stone-400 hover:text-gold-400">{t.nav.services}</a>
            <a href="#fleet" onClick={() => setMenuOpen(false)} className="font-sans text-sm text-stone-400 hover:text-gold-400">{t.nav.fleet}</a>
            <a href="#events" onClick={() => setMenuOpen(false)} className="font-sans text-sm text-stone-400 hover:text-gold-400">{t.nav.events}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="font-sans text-sm text-stone-400 hover:text-gold-400">{t.nav.contact}</a>
            <a href={`tel:${t.nav.phone.replace(/\s/g, '')}`} className="font-sans text-sm text-gold-400">{t.nav.phone}</a>
          </div>
        </div>
      )}
    </nav>
  );
}

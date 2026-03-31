// lib/i18n.ts
// Utilitaires de traduction multilingue

import { SUPPORTED_LOCALES, type Locale, RTL_LOCALES } from './vehicles';

// Import des fichiers de traduction
import fr from '../locales/fr.json';
import en from '../locales/en.json';
import ar from '../locales/ar.json';
import zh from '../locales/zh.json';

const translations: Record<Locale, any> = { fr, en, ar, zh };

// Récupérer les traductions pour une langue donnée
export function getTranslations(locale: Locale) {
  return translations[locale] || translations.fr;
}

// Récupérer une valeur imbriquée par chemin (ex: "hero.title_1")
export function t(locale: Locale, path: string): string {
  const keys = path.split('.');
  let value: any = translations[locale] || translations.fr;
  for (const key of keys) {
    value = value?.[key];
  }
  return typeof value === 'string' ? value : path;
}

// Vérifier si la langue est RTL
export function isRTL(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}

// Langue par défaut
export const DEFAULT_LOCALE: Locale = 'fr';

// Détecter la langue depuis l'URL ou le header Accept-Language
export function detectLocale(pathname: string, acceptLanguage?: string): Locale {
  // Vérifier l'URL d'abord (/en/, /ar/, /zh/)
  for (const loc of SUPPORTED_LOCALES) {
    if (pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`) {
      return loc;
    }
  }

  // Si pas dans l'URL, vérifier Accept-Language
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase();
    if (preferred && SUPPORTED_LOCALES.includes(preferred as Locale)) {
      return preferred as Locale;
    }
  }

  return DEFAULT_LOCALE;
}

// Générer les balises hreflang pour le SEO
export function generateHreflangs(path: string, baseUrl: string = 'https://www.amani-limousines.com') {
  return SUPPORTED_LOCALES.map(locale => ({
    locale,
    href: locale === DEFAULT_LOCALE ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`,
    hreflang: locale === 'zh' ? 'zh-Hans' : locale,
  }));
}

export { SUPPORTED_LOCALES };
export type { Locale };

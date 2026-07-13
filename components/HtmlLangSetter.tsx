'use client';

/**
 * Ajuste l'attribut lang/dir du <html> racine côté client.
 * Nécessaire car le root layout (lang="fr") enveloppe aussi les pages
 * localisées /en /es /ar /zh — un layout imbriqué ne peut pas rendre
 * son propre <html> (source de mismatch d'hydratation).
 */
import { useEffect } from 'react';

export default function HtmlLangSetter({ lang, dir }: { lang: string; dir: 'ltr' | 'rtl' }) {
  useEffect(() => {
    const el = document.documentElement;
    const prevLang = el.lang;
    const prevDir = el.dir;
    el.lang = lang;
    el.dir = dir;
    return () => {
      el.lang = prevLang || 'fr';
      el.dir = prevDir || 'ltr';
    };
  }, [lang, dir]);

  return null;
}

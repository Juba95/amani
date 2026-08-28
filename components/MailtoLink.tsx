'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Locale = 'fr' | 'en' | 'de' | 'ar' | 'zh';

type Props = {
  email: string;
  subject?: string;
  className?: string;
  children: React.ReactNode;
  /** Laissé vide, la langue est déduite de <html lang> ou du chemin. */
  locale?: Locale;
};

const LABELS = {
  fr: {
    title: 'Aucune application mail détectée',
    intro: 'Votre navigateur n’a pas d’application mail associée. Écrivez-nous autrement :',
    gmail: 'Ouvrir Gmail',
    outlook: 'Ouvrir Outlook',
    copy: 'Copier l’adresse',
    copied: 'Adresse copiée ✓',
    close: 'Fermer',
  },
  en: {
    title: 'No mail app detected',
    intro: 'Your browser has no mail app associated. Reach us another way:',
    gmail: 'Open Gmail',
    outlook: 'Open Outlook',
    copy: 'Copy address',
    copied: 'Address copied ✓',
    close: 'Close',
  },
  de: {
    title: 'Keine Mail-App erkannt',
    intro: 'Ihr Browser hat kein Mailprogramm hinterlegt. Erreichen Sie uns anders:',
    gmail: 'Gmail öffnen',
    outlook: 'Outlook öffnen',
    copy: 'Adresse kopieren',
    copied: 'Adresse kopiert ✓',
    close: 'Schließen',
  },
  ar: {
    title: 'لم يتم العثور على تطبيق بريد',
    intro: 'لا يوجد تطبيق بريد مرتبط بمتصفحك. راسلنا بطريقة أخرى:',
    gmail: 'فتح Gmail',
    outlook: 'فتح Outlook',
    copy: 'نسخ العنوان',
    copied: 'تم نسخ العنوان ✓',
    close: 'إغلاق',
  },
  zh: {
    title: '未检测到邮件应用',
    intro: '您的浏览器未关联邮件应用。请通过以下方式联系我们：',
    gmail: '打开 Gmail',
    outlook: '打开 Outlook',
    copy: '复制地址',
    copied: '地址已复制 ✓',
    close: '关闭',
  },
} as const;

function detectLocale(): Locale {
  const lang = (document.documentElement.lang || '').toLowerCase();
  const path = window.location.pathname;
  if (lang.startsWith('en') || path.startsWith('/en')) return 'en';
  if (lang.startsWith('de') || path.startsWith('/de')) return 'de';
  if (lang.startsWith('ar') || path.startsWith('/ar')) return 'ar';
  if (lang.startsWith('zh') || path.startsWith('/zh')) return 'zh';
  return 'fr';
}

/**
 * Lien mailto: qui reste natif, mais affiche un recours si rien ne s’ouvre.
 *
 * Un clic sur mailto: ne produit aucune réaction — ni erreur — quand le
 * navigateur n’a pas de gestionnaire enregistré (cas fréquent sur Chrome sans
 * Gmail configuré, ou sur un poste sans client mail). On laisse donc le clic
 * natif se produire, puis on observe : si la fenêtre perd le focus ou passe en
 * arrière-plan, une application a pris la main et on ne montre rien. Sinon, on
 * propose Gmail, Outlook ou la copie de l’adresse.
 */
export default function MailtoLink({ email, subject, className, children, locale }: Props) {
  // Déduit après montage : évite tout écart entre le rendu serveur et client.
  const [autoLocale, setAutoLocale] = useState<Locale>('fr');
  useEffect(() => setAutoLocale(detectLocale()), []);
  const t = LABELS[locale ?? autoLocale];

  const [showFallback, setShowFallback] = useState(false);
  const [copied, setCopied] = useState(false);
  const handledRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const href = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}` +
    (subject ? `&su=${encodeURIComponent(subject)}` : '');
  const outlookUrl =
    `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(email)}` +
    (subject ? `&subject=${encodeURIComponent(subject)}` : '');

  const cancelWatch = useCallback(() => {
    handledRef.current = true;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handleClick = useCallback(() => {
    // On ne bloque pas la navigation : si un client mail existe, il s’ouvre.
    handledRef.current = false;
    setCopied(false);

    const onAway = () => {
      if (document.visibilityState === 'hidden' || document.hasFocus() === false) cancelWatch();
    };

    window.addEventListener('blur', cancelWatch, { once: true });
    window.addEventListener('pagehide', cancelWatch, { once: true });
    document.addEventListener('visibilitychange', onAway);

    timerRef.current = setTimeout(() => {
      document.removeEventListener('visibilitychange', onAway);
      window.removeEventListener('blur', cancelWatch);
      window.removeEventListener('pagehide', cancelWatch);
      if (!handledRef.current) setShowFallback(true);
    }, 1200);
  }, [cancelWatch]);

  useEffect(() => () => cancelWatch(), [cancelWatch]);

  useEffect(() => {
    if (!showFallback) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowFallback(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [showFallback]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      return;
    } catch {
      // navigator.clipboard échoue hors HTTPS ou sans geste utilisateur validé.
    }
    try {
      const ta = document.createElement('textarea');
      ta.value = email;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(ok);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>

      {showFallback && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-5"
          style={{ background: 'rgba(10,9,8,.55)' }}
          onClick={() => setShowFallback(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t.title}
        >
          <div
            dir={(locale ?? autoLocale) === 'ar' ? 'rtl' : 'ltr'}
            className="bg-white rounded-2xl max-w-sm w-full p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-sans text-[0.6rem] tracking-[0.14em] uppercase text-stone-400">
              {t.title}
            </p>
            <p className="sf text-stone-600 text-sm mt-3 leading-relaxed">{t.intro}</p>

            <p className="font-sans text-sm font-medium text-gray-900 mt-4 break-all">{email}</p>

            <div className="flex flex-col gap-2 mt-5">
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center"
                onClick={() => setShowFallback(false)}
              >
                {t.gmail}
              </a>
              <a
                href={outlookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center"
                onClick={() => setShowFallback(false)}
              >
                {t.outlook}
              </a>
              <button type="button" onClick={copy} className="btn-outline text-center">
                {copied ? t.copied : t.copy}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowFallback(false)}
              className="font-sans text-xs text-stone-400 hover:text-stone-600 transition-colors mt-5 w-full text-center"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

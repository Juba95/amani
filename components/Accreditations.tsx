import Image from 'next/image';

/**
 * Labels et organisations professionnelles : réassurance sous la preuve sociale
 * de la page d'accueil (variant « section ») et en pied de page sur tout le site
 * (variant « footer »).
 *
 * Logos préparés depuis les fichiers transmis par Amani (fond blanc rendu
 * transparent) : public/images/labels/.
 */

const LABELS = [
  { src: '/images/labels/qualite-tourisme.webp', w: 280, h: 240, alt: 'Qualité Tourisme', className: 'h-14 md:h-16' },
  { src: '/images/labels/nla.webp', w: 568, h: 160, alt: 'National Limousine Association (NLA)', className: 'h-8 md:h-9' },
  { src: '/images/labels/csnert.webp', w: 535, h: 160, alt: 'CSNERT — organisation patronale des entreprises de voitures avec chauffeur', className: 'h-8 md:h-9' },
];

const TITLE: Record<string, string> = {
  fr: 'Labels & organisations professionnelles',
  en: 'Accreditations & professional bodies',
  de: 'Gütesiegel & Berufsverbände',
  es: 'Sellos y organizaciones profesionales',
  ar: 'الشهادات والهيئات المهنية',
  zh: '认证与行业协会',
};

interface AccreditationsProps {
  locale?: string;
  variant?: 'section' | 'footer';
}

export default function Accreditations({ locale = 'fr', variant = 'section' }: AccreditationsProps) {
  const title = TITLE[locale] ?? TITLE.en;
  const footer = variant === 'footer';

  return (
    <div
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={footer ? 'px-6 md:px-10 py-8' : 'bg-white border-b border-warm-200'}
      style={footer ? { borderTop: '1px solid #ece9e3', background: '#faf8f5' } : undefined}
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col items-center gap-5 ${footer ? '' : 'px-6 py-8'}
                    md:flex-row md:justify-center md:gap-12`}
      >
        <p className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-stone-400 text-center md:text-start md:max-w-[11rem]">
          {title}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {LABELS.map((l) => (
            <li key={l.src}>
              <Image src={l.src} width={l.w} height={l.h} alt={l.alt}
                className={`${l.className} w-auto`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Bandeau de réassurance — première chose visible sous la barre de navigation.
 *
 * Quatre signaux qui disent au visiteur, avant même qu'il fasse défiler la page,
 * qu'il a affaire à une société déclarée : licence VTC, responsabilité civile
 * professionnelle, prix fixes et annulation gratuite. Le délai de 24 h reprend
 * l'article 6 des CGV — à modifier ici ET dans les CGV si la règle change.
 *
 * Le bandeau porte le décalage qui dégage la barre de navigation (`fixed`), et
 * le Hero compense sa propre hauteur pour que le formulaire de devis reste
 * au-dessus de la ligne de flottaison sur mobile.
 */

interface ReassuranceBarProps {
  t: any;
  locale?: string;
}

const ICONS: Record<string, JSX.Element> = {
  // Carte professionnelle
  vtc: (
    <path d="M2.5 4.5h11v7h-11zM2.5 7h11M5 9.25h2.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  // Bouclier — assurance
  insurance: (
    <path d="M8 2.2 13 4v4c0 2.6-2 4.6-5 5.8-3-1.2-5-3.2-5-5.8V4zM6 7.8l1.5 1.5L10.2 6.6"
      strokeLinecap="round" strokeLinejoin="round" />
  ),
  // Étiquette de prix
  fixed_price: (
    <path d="M8.4 2.5H13V7l-5.6 5.6a1.1 1.1 0 0 1-1.6 0L2.9 9.2a1.1 1.1 0 0 1 0-1.6zM10.8 4.7h.01"
      strokeLinecap="round" strokeLinejoin="round" />
  ),
  // Calendrier
  cancellation: (
    <path d="M3 4.3h10v8.4H3zM3 6.9h10M5.4 2.6v1.7M10.6 2.6v1.7M6.4 9.1l3.2 2.2M9.6 9.1l-3.2 2.2"
      strokeLinecap="round" strokeLinejoin="round" />
  ),
};

const KEYS = ['vtc', 'insurance', 'fixed_price', 'cancellation'] as const;

export default function ReassuranceBar({ t, locale = 'fr' }: ReassuranceBarProps) {
  const rtl = locale === 'ar';
  const items = KEYS.map((k) => ({ key: k, label: t?.reassurance?.[k] })).filter((i) => i.label);
  if (items.length === 0) return null;

  return (
    <div
      dir={rtl ? 'rtl' : 'ltr'}
      className="relative z-30 pt-[4.25rem] sm:pt-[4.75rem] md:pt-[5.25rem]"
      style={{ background: '#0f0d0b' }}
    >
      {/* Grille 2x2 sur mobile : les quatre signaux restent lisibles d'un coup
          d'œil, sans texte coupé ni défilement que personne ne devine. Une
          seule ligne dès que la largeur le permet. */}
      <ul
        className="grid grid-cols-2 gap-x-4 gap-y-1.5 py-2 px-5
                   sm:flex sm:items-center sm:gap-x-8 sm:py-0 sm:px-6 sm:h-[2.25rem]
                   md:px-10 md:gap-x-10 lg:justify-center"
        style={{ borderTop: '1px solid rgba(179,146,78,0.18)' }}
      >
        {items.map((item) => (
          <li
            key={item.key}
            className="flex items-start sm:items-center gap-1.5 sm:shrink-0 font-sans
                       text-[0.63rem] sm:text-[0.68rem] leading-snug tracking-[0.08em]
                       sm:whitespace-nowrap"
            style={{ color: '#d9d2c3' }}
          >
            <svg
              viewBox="0 0 16 16"
              className="w-[0.85rem] h-[0.85rem] shrink-0 mt-[0.1rem] sm:mt-0"
              fill="none"
              stroke="#b3924e"
              strokeWidth="1.2"
              aria-hidden="true"
            >
              {ICONS[item.key]}
            </svg>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

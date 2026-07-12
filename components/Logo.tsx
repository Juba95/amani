/**
 * Logo Amani Limousines — monogramme doré (le "A") + MANI serif + LIMOUSINES.
 * `tone` : "dark" = lettres noires (fond clair), "light" = lettres crème (fond sombre).
 */
export default function Logo({
  tone = 'dark',
  className = 'h-10 w-auto',
}: {
  tone?: 'dark' | 'light';
  className?: string;
}) {
  const letters = tone === 'dark' ? '#141210' : '#f0eadd';
  const gold = tone === 'dark' ? '#a8894e' : '#c9b27c';

  return (
    <svg viewBox="0 0 232 80" className={className} role="img" aria-label="Amani Limousines">
      {/* Monogramme : le "A" en double trait doré */}
      <path d="M2 56 L24 6 L30 6 L8 56 Z" fill={gold} />
      <path d="M13 56 L35 6 L41 6 L19 56 Z" fill={gold} />
      <path d="M35 6 L41 6 L54 56 L47.5 56 Z" fill={gold} />
      {/* MANI */}
      <text
        x="62" y="56"
        fontFamily="Didot,'DM Serif Display',Georgia,'Times New Roman',serif"
        fontSize="46" letterSpacing="9" fill={letters}
      >
        MANI
      </text>
      {/* Ligne dorée + LIMOUSINES aligné sous le I (le trait s'arrête avant le texte) */}
      <line x1="62" y1="70" x2="94" y2="70" stroke={gold} strokeWidth="1.3" />
      <text
        x="212" y="74" textAnchor="end"
        fontFamily="Inter,Arial,sans-serif"
        fontSize="10.5" letterSpacing="4.2" fill={gold}
      >
        LIMOUSINES
      </text>
    </svg>
  );
}

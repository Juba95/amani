// Illustrations SVG vectorielles des véhicules — fond transparent, style premium

export function MercedesClasseE({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 220" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <path d="M80 155 Q85 155 90 150 L130 115 Q160 95 200 88 L320 82 Q380 80 420 90 L480 108 Q520 118 530 135 L540 155 Z" fill="#1a1a1a"/>
      {/* Roof */}
      <path d="M170 115 Q200 78 240 70 L340 68 Q390 68 420 90 L480 108 Q430 100 380 98 L220 98 Q190 100 170 115 Z" fill="#222"/>
      {/* Windows */}
      <path d="M195 112 Q210 85 240 78 L300 76 L300 108 L195 112 Z" fill="#4a9eff" opacity="0.6"/>
      <path d="M308 76 L360 76 Q390 78 410 95 L380 108 L308 108 Z" fill="#4a9eff" opacity="0.6"/>
      {/* Window frame */}
      <path d="M195 112 Q210 85 240 78 L360 76 Q390 78 410 95 L308 108 L195 112 Z" fill="none" stroke="#333" strokeWidth="2"/>
      {/* Front bumper */}
      <path d="M530 135 Q545 138 555 145 L560 155 L540 155 Z" fill="#111"/>
      <path d="M545 140 Q558 142 565 148 L562 155 L555 155 Z" fill="#8a7340" opacity="0.5"/>
      {/* Rear bumper */}
      <path d="M80 155 L60 155 Q55 150 58 143 L70 138 Q78 136 85 138 Z" fill="#111"/>
      {/* Headlight front */}
      <ellipse cx="548" cy="147" rx="8" ry="5" fill="#fff" opacity="0.9"/>
      <ellipse cx="548" cy="147" rx="5" ry="3" fill="#ffd700" opacity="0.7"/>
      {/* Taillight rear */}
      <rect x="60" y="142" width="18" height="8" rx="2" fill="#ff3333" opacity="0.8"/>
      {/* Wheels */}
      <circle cx="160" cy="162" r="32" fill="#111" stroke="#333" strokeWidth="3"/>
      <circle cx="160" cy="162" r="22" fill="#1a1a1a" stroke="#555" strokeWidth="2"/>
      <circle cx="160" cy="162" r="12" fill="#8a7340" opacity="0.8"/>
      {[0,60,120,180,240,300].map((a, i) => (
        <line key={i}
          x1={160 + 13 * Math.cos(a * Math.PI / 180)}
          y1={162 + 13 * Math.sin(a * Math.PI / 180)}
          x2={160 + 21 * Math.cos(a * Math.PI / 180)}
          y2={162 + 21 * Math.sin(a * Math.PI / 180)}
          stroke="#8a7340" strokeWidth="2.5" opacity="0.7"
        />
      ))}
      <circle cx="450" cy="162" r="32" fill="#111" stroke="#333" strokeWidth="3"/>
      <circle cx="450" cy="162" r="22" fill="#1a1a1a" stroke="#555" strokeWidth="2"/>
      <circle cx="450" cy="162" r="12" fill="#8a7340" opacity="0.8"/>
      {[0,60,120,180,240,300].map((a, i) => (
        <line key={i}
          x1={450 + 13 * Math.cos(a * Math.PI / 180)}
          y1={162 + 13 * Math.sin(a * Math.PI / 180)}
          x2={450 + 21 * Math.cos(a * Math.PI / 180)}
          y2={162 + 21 * Math.sin(a * Math.PI / 180)}
          stroke="#8a7340" strokeWidth="2.5" opacity="0.7"
        />
      ))}
      {/* Ground shadow */}
      <ellipse cx="300" cy="196" rx="230" ry="10" fill="#000" opacity="0.08"/>
    </svg>
  );
}

export function MercedesClasseS({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 620 220" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Longer, more imposing body */}
      <path d="M75 152 Q80 152 85 148 L125 112 Q158 90 205 83 L340 77 Q400 75 445 86 L510 106 Q550 118 562 136 L570 152 Z" fill="#1a1a1a"/>
      {/* Roof — lower roofline, more executive */}
      <path d="M168 112 Q198 74 242 66 L355 64 Q410 64 445 86 L510 106 Q455 96 400 94 L230 94 Q195 96 168 112 Z" fill="#1e1e1e"/>
      {/* Windows */}
      <path d="M192 110 Q210 78 245 70 L308 68 L308 104 L192 110 Z" fill="#4a9eff" opacity="0.55"/>
      <path d="M316 68 L375 67 Q408 69 432 88 L400 103 L316 104 Z" fill="#4a9eff" opacity="0.55"/>
      {/* C-pillar darkened */}
      <path d="M400 103 L432 88 Q445 86 450 95 L430 110 L400 110 Z" fill="#222" opacity="0.8"/>
      {/* Chrome strip */}
      <path d="M168 112 L510 106" stroke="#8a7340" strokeWidth="1.5" opacity="0.6"/>
      {/* Front */}
      <path d="M562 136 Q578 140 585 148 L588 152 L570 152 Z" fill="#111"/>
      <ellipse cx="576" cy="144" rx="9" ry="5" fill="#fff" opacity="0.85"/>
      <ellipse cx="576" cy="144" rx="6" ry="3" fill="#ffd700" opacity="0.6"/>
      {/* Rear */}
      <path d="M75 152 L52 152 Q48 148 50 140 L65 135 Q74 133 82 136 Z" fill="#111"/>
      <rect x="52" y="138" width="20" height="9" rx="2" fill="#ff2222" opacity="0.85"/>
      {/* Wheels — larger for S-Class */}
      <circle cx="155" cy="160" r="34" fill="#111" stroke="#333" strokeWidth="3"/>
      <circle cx="155" cy="160" r="23" fill="#1a1a1a" stroke="#555" strokeWidth="2"/>
      <circle cx="155" cy="160" r="13" fill="#8a7340" opacity="0.85"/>
      {[0,60,120,180,240,300].map((a, i) => (
        <line key={i}
          x1={155 + 14 * Math.cos(a * Math.PI / 180)}
          y1={160 + 14 * Math.sin(a * Math.PI / 180)}
          x2={155 + 22 * Math.cos(a * Math.PI / 180)}
          y2={160 + 22 * Math.sin(a * Math.PI / 180)}
          stroke="#8a7340" strokeWidth="2.5" opacity="0.7"
        />
      ))}
      <circle cx="465" cy="160" r="34" fill="#111" stroke="#333" strokeWidth="3"/>
      <circle cx="465" cy="160" r="23" fill="#1a1a1a" stroke="#555" strokeWidth="2"/>
      <circle cx="465" cy="160" r="13" fill="#8a7340" opacity="0.85"/>
      {[0,60,120,180,240,300].map((a, i) => (
        <line key={i}
          x1={465 + 14 * Math.cos(a * Math.PI / 180)}
          y1={160 + 14 * Math.sin(a * Math.PI / 180)}
          x2={465 + 22 * Math.cos(a * Math.PI / 180)}
          y2={160 + 22 * Math.sin(a * Math.PI / 180)}
          stroke="#8a7340" strokeWidth="2.5" opacity="0.7"
        />
      ))}
      {/* Ground shadow */}
      <ellipse cx="310" cy="196" rx="245" ry="10" fill="#000" opacity="0.08"/>
    </svg>
  );
}

export function MercedesClasseV({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 230" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Van body — taller, more vertical */}
      <path d="M70 158 Q75 158 80 154 L100 100 Q115 78 145 70 L460 68 Q500 70 525 85 L555 110 Q570 128 575 148 L578 158 Z" fill="#1a1a1a"/>
      {/* Roof */}
      <rect x="100" y="62" width="360" height="10" rx="4" fill="#222"/>
      {/* Side windows — panoramic */}
      <rect x="152" y="80" width="80" height="60" rx="4" fill="#4a9eff" opacity="0.5"/>
      <rect x="242" y="80" width="80" height="60" rx="4" fill="#4a9eff" opacity="0.5"/>
      <rect x="332" y="80" width="80" height="60" rx="4" fill="#4a9eff" opacity="0.5"/>
      {/* Front window */}
      <path d="M100 100 Q115 78 145 70 L152 70 L152 140 L100 140 Z" fill="#4a9eff" opacity="0.5"/>
      {/* Window frames */}
      <line x1="152" y1="68" x2="152" y2="158" stroke="#333" strokeWidth="3"/>
      <line x1="242" y1="68" x2="242" y2="158" stroke="#333" strokeWidth="3"/>
      <line x1="332" y1="68" x2="332" y2="158" stroke="#333" strokeWidth="3"/>
      <line x1="422" y1="68" x2="422" y2="158" stroke="#333" strokeWidth="3"/>
      {/* Chrome strip */}
      <line x1="100" y1="140" x2="578" y2="140" stroke="#8a7340" strokeWidth="2" opacity="0.5"/>
      {/* Front grille */}
      <path d="M555 110 Q570 128 575 148 L578 158 L560 158 Z" fill="#111"/>
      <ellipse cx="566" cy="142" rx="10" ry="6" fill="#fff" opacity="0.85"/>
      {/* Rear */}
      <rect x="52" y="130" width="22" height="14" rx="2" fill="#ff2222" opacity="0.85"/>
      {/* Wheels */}
      <circle cx="160" cy="166" r="34" fill="#111" stroke="#333" strokeWidth="3"/>
      <circle cx="160" cy="166" r="23" fill="#1a1a1a" stroke="#555" strokeWidth="2"/>
      <circle cx="160" cy="166" r="13" fill="#8a7340" opacity="0.8"/>
      {[0,45,90,135,180,225,270,315].map((a, i) => (
        <line key={i}
          x1={160 + 14 * Math.cos(a * Math.PI / 180)}
          y1={166 + 14 * Math.sin(a * Math.PI / 180)}
          x2={160 + 22 * Math.cos(a * Math.PI / 180)}
          y2={166 + 22 * Math.sin(a * Math.PI / 180)}
          stroke="#8a7340" strokeWidth="2" opacity="0.6"
        />
      ))}
      <circle cx="480" cy="166" r="34" fill="#111" stroke="#333" strokeWidth="3"/>
      <circle cx="480" cy="166" r="23" fill="#1a1a1a" stroke="#555" strokeWidth="2"/>
      <circle cx="480" cy="166" r="13" fill="#8a7340" opacity="0.8"/>
      {[0,45,90,135,180,225,270,315].map((a, i) => (
        <line key={i}
          x1={480 + 14 * Math.cos(a * Math.PI / 180)}
          y1={166 + 14 * Math.sin(a * Math.PI / 180)}
          x2={480 + 22 * Math.cos(a * Math.PI / 180)}
          y2={166 + 22 * Math.sin(a * Math.PI / 180)}
          stroke="#8a7340" strokeWidth="2" opacity="0.6"
        />
      ))}
      <ellipse cx="320" cy="200" rx="260" ry="10" fill="#000" opacity="0.08"/>
    </svg>
  );
}

export function BMWi7({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 620 220" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* i7 — very sleek, low, electric */}
      <path d="M72 152 Q78 152 84 147 L132 108 Q168 84 215 76 L350 70 Q415 68 458 82 L522 104 Q558 118 568 138 L574 152 Z" fill="#0d1117"/>
      {/* Fastback roofline */}
      <path d="M178 108 Q210 68 255 60 L368 58 Q425 58 458 82 L522 104 Q462 90 405 88 L235 88 Q196 90 178 108 Z" fill="#111827"/>
      {/* Kidney grille (BMW signature) */}
      <path d="M540 122 Q555 115 568 120 L570 132 Q555 138 540 135 Z" fill="#8a7340" opacity="0.4"/>
      <ellipse cx="554" cy="128" rx="10" ry="7" fill="none" stroke="#8a7340" strokeWidth="1.5" opacity="0.6"/>
      {/* Windows */}
      <path d="M202 106 Q218 74 255 65 L318 63 L318 100 L202 106 Z" fill="#60a5fa" opacity="0.5"/>
      <path d="M326 63 L385 62 Q420 64 448 84 L412 99 L326 100 Z" fill="#60a5fa" opacity="0.5"/>
      {/* Laser headlights */}
      <path d="M555 118 L572 122 L570 132 L553 132 Z" fill="#fff" opacity="0.15"/>
      <line x1="555" y1="122" x2="600" y2="118" stroke="#fff" strokeWidth="1" opacity="0.3"/>
      <line x1="555" y1="128" x2="605" y2="128" stroke="#fff" strokeWidth="0.5" opacity="0.2"/>
      <ellipse cx="562" cy="125" rx="7" ry="5" fill="#fff" opacity="0.9"/>
      <ellipse cx="562" cy="125" rx="4" ry="3" fill="#60a5ff" opacity="0.8"/>
      {/* Rear lights — full-width LED strip */}
      <rect x="56" y="138" width="24" height="5" rx="2" fill="#ff4444" opacity="0.9"/>
      <rect x="56" y="145" width="24" height="4" rx="2" fill="#ff2222" opacity="0.6"/>
      {/* Charge port */}
      <rect x="70" y="118" width="8" height="5" rx="1" fill="#60a5ff" opacity="0.7"/>
      {/* Chrome trim */}
      <path d="M178 108 L522 104" stroke="#8a7340" strokeWidth="1" opacity="0.4"/>
      <path d="M84 147 L574 152" stroke="#8a7340" strokeWidth="0.5" opacity="0.2"/>
      {/* Wheels — i7 specific design */}
      <circle cx="158" cy="160" r="33" fill="#0d1117" stroke="#334155" strokeWidth="3"/>
      <circle cx="158" cy="160" r="22" fill="#111827" stroke="#475569" strokeWidth="2"/>
      <circle cx="158" cy="160" r="11" fill="#60a5ff" opacity="0.6"/>
      {[0,72,144,216,288].map((a, i) => (
        <path key={i}
          d={`M ${158 + 12 * Math.cos(a * Math.PI / 180)} ${160 + 12 * Math.sin(a * Math.PI / 180)} L ${158 + 21 * Math.cos((a+15) * Math.PI / 180)} ${160 + 21 * Math.sin((a+15) * Math.PI / 180)} L ${158 + 21 * Math.cos((a-15) * Math.PI / 180)} ${160 + 21 * Math.sin((a-15) * Math.PI / 180)} Z`}
          fill="#8a7340" opacity="0.7"
        />
      ))}
      <circle cx="460" cy="160" r="33" fill="#0d1117" stroke="#334155" strokeWidth="3"/>
      <circle cx="460" cy="160" r="22" fill="#111827" stroke="#475569" strokeWidth="2"/>
      <circle cx="460" cy="160" r="11" fill="#60a5ff" opacity="0.6"/>
      {[0,72,144,216,288].map((a, i) => (
        <path key={i}
          d={`M ${460 + 12 * Math.cos(a * Math.PI / 180)} ${160 + 12 * Math.sin(a * Math.PI / 180)} L ${460 + 21 * Math.cos((a+15) * Math.PI / 180)} ${160 + 21 * Math.sin((a+15) * Math.PI / 180)} L ${460 + 21 * Math.cos((a-15) * Math.PI / 180)} ${160 + 21 * Math.sin((a-15) * Math.PI / 180)} Z`}
          fill="#8a7340" opacity="0.7"
        />
      ))}
      <ellipse cx="310" cy="196" rx="248" ry="10" fill="#000" opacity="0.07"/>
    </svg>
  );
}

export function MercedesSprinter({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 700 240" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Sprinter — tall, long minibus */}
      <path d="M65 162 Q70 162 75 158 L90 95 Q105 68 140 58 L530 56 Q568 58 590 78 L615 108 Q628 130 630 152 L633 162 Z" fill="#1a1a1a"/>
      {/* Roof rack / high roof */}
      <rect x="90" y="50" width="442" height="12" rx="4" fill="#222"/>
      {/* Front window — panoramic */}
      <path d="M90 95 Q105 68 140 58 L145 58 L145 148 L90 148 Z" fill="#4a9eff" opacity="0.45"/>
      {/* Side windows — multiple */}
      <rect x="160" y="70" width="70" height="55" rx="4" fill="#4a9eff" opacity="0.45"/>
      <rect x="242" y="70" width="70" height="55" rx="4" fill="#4a9eff" opacity="0.45"/>
      <rect x="324" y="70" width="70" height="55" rx="4" fill="#4a9eff" opacity="0.45"/>
      <rect x="406" y="70" width="70" height="55" rx="4" fill="#4a9eff" opacity="0.45"/>
      <rect x="488" y="70" width="44" height="55" rx="4" fill="#4a9eff" opacity="0.45"/>
      {/* Window dividers */}
      {[145, 160, 242, 324, 406, 488, 532].map((x, i) => (
        <line key={i} x1={x} y1={56} x2={x} y2={162} stroke="#333" strokeWidth="3"/>
      ))}
      {/* Chrome strip */}
      <line x1="90" y1="148" x2="633" y2="148" stroke="#8a7340" strokeWidth="2" opacity="0.45"/>
      {/* Headlight */}
      <ellipse cx="618" cy="136" rx="11" ry="7" fill="#fff" opacity="0.85"/>
      <ellipse cx="618" cy="136" rx="7" ry="4" fill="#ffd700" opacity="0.6"/>
      {/* Rear */}
      <rect x="48" y="130" width="22" height="18" rx="3" fill="#ff2222" opacity="0.85"/>
      <rect x="48" y="148" width="22" height="5" rx="1" fill="#ff5555" opacity="0.5"/>
      {/* Wheels — dual rear */}
      <circle cx="168" cy="170" r="34" fill="#111" stroke="#333" strokeWidth="3"/>
      <circle cx="168" cy="170" r="23" fill="#1a1a1a" stroke="#555" strokeWidth="2"/>
      <circle cx="168" cy="170" r="12" fill="#8a7340" opacity="0.75"/>
      {[0,45,90,135,180,225,270,315].map((a, i) => (
        <line key={i}
          x1={168 + 13 * Math.cos(a * Math.PI / 180)}
          y1={170 + 13 * Math.sin(a * Math.PI / 180)}
          x2={168 + 22 * Math.cos(a * Math.PI / 180)}
          y2={170 + 22 * Math.sin(a * Math.PI / 180)}
          stroke="#8a7340" strokeWidth="2" opacity="0.6"
        />
      ))}
      {/* Dual rear wheels */}
      <circle cx="530" cy="170" r="34" fill="#111" stroke="#333" strokeWidth="3"/>
      <circle cx="530" cy="170" r="23" fill="#1a1a1a" stroke="#555" strokeWidth="2"/>
      <circle cx="530" cy="170" r="12" fill="#8a7340" opacity="0.75"/>
      {[0,45,90,135,180,225,270,315].map((a, i) => (
        <line key={i}
          x1={530 + 13 * Math.cos(a * Math.PI / 180)}
          y1={170 + 13 * Math.sin(a * Math.PI / 180)}
          x2={530 + 22 * Math.cos(a * Math.PI / 180)}
          y2={170 + 22 * Math.sin(a * Math.PI / 180)}
          stroke="#8a7340" strokeWidth="2" opacity="0.6"
        />
      ))}
      <circle cx="568" cy="170" r="28" fill="#111" stroke="#333" strokeWidth="2"/>
      <circle cx="568" cy="170" r="18" fill="#1a1a1a" stroke="#444" strokeWidth="1.5"/>
      <circle cx="568" cy="170" r="9" fill="#8a7340" opacity="0.6"/>
      <ellipse cx="350" cy="208" rx="290" ry="11" fill="#000" opacity="0.08"/>
    </svg>
  );
}

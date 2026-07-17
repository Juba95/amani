'use client';

/**
 * Bandeau parallaxe plein écran : l'image défile plus lentement que la page
 * (transform translateY piloté par rAF — fiable sur iOS, contrairement à
 * background-attachment: fixed). Texte + CTA en surimpression.
 */
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ParallaxBand({
  image,
  tag,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: {
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  const section = useRef<HTMLElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respecte prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Boucle rAF autonome plutôt qu'un écouteur scroll : certains
    // environnements (webviews embarquées) n'émettent pas fiablement les
    // événements scroll programmatiques. Une mesure par frame, mise à jour
    // du style uniquement quand la valeur change — coût négligeable, et le
    // navigateur suspend automatiquement rAF quand l'onglet est masqué.
    let raf = 0;
    const tick = () => {
      const el = section.current;
      const img = layer.current;
      if (el && img && el.isConnected) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        if (rect.height > 0 && rect.bottom > -60 && rect.top < vh + 60) {
          // Progression -1 → 1 du passage de la section dans le viewport
          const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
          const next = `translateY(${(progress * -12).toFixed(2)}%) scale(1.25)`;
          if (img.style.transform !== next) img.style.transform = next;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section ref={section} className="relative overflow-hidden" style={{ height: 'clamp(380px, 55vh, 560px)' }}>
      {/* Couche image sur-dimensionnée, déplacée au scroll */}
      <div ref={layer} className="absolute inset-0 will-change-transform" style={{ transform: 'scale(1.25)' }}>
        <Image src={image} alt="" fill sizes="100vw" quality={70} className="object-cover" />
      </div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,7,6,.55), rgba(8,7,6,.35) 45%, rgba(8,7,6,.65))' }} />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="tag" style={{ color: '#c9a84c' }}>{tag}</p>
        <h2 className="font-serif font-normal mt-3 max-w-3xl" style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.6rem)', color: '#f5f3ef' }}>
          {title}
        </h2>
        <p className="font-sans text-sm font-light leading-relaxed max-w-xl mt-4" style={{ color: 'rgba(245,240,230,.78)' }}>
          {subtitle}
        </p>
        <Link href={ctaHref}
          className="mt-8 inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase text-white transition-opacity hover:opacity-90"
          style={{ background: 'rgba(138,115,64,.95)' }}>
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}

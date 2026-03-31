'use client';

import { useEffect, useRef, useState } from 'react';

interface StatsRowProps {
  t: any;
}

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function StatsRow({ t }: StatsRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transfers = useCountUp(500, 1600, visible);
  const years = useCountUp(15, 1200, visible);
  const vehicles = useCountUp(300, 1400, visible);

  const stats = [
    { value: `${transfers}+`, label: t?.stats?.transfers_label ?? 'transferts par mois' },
    { value: '4.9★',           label: t?.stats?.rating_label ?? 'note Google' },
    { value: `${years}`,       label: t?.stats?.experience_label ?? "ans d'expérience" },
    { value: `${vehicles}+`,  label: t?.stats?.vehicles_label ?? 'véhicules premium' },
  ];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: '220px' }}
    >
      {/* ── YouTube background video ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/*
          Technique : l'iframe doit être plus grande que le conteneur pour couvrir tout l'espace.
          On utilise la proportion 16:9 inversée : width = 177.78vh, height = 56.25vw.
          On prend le max(100%, valeur calculée) pour s'assurer du remplissage.
        */}
        <iframe
          src="https://www.youtube.com/embed/Tgd6gZt9DvQ?autoplay=1&mute=1&loop=1&playlist=Tgd6gZt9DvQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=0"
          title="background"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            /* Fill the container regardless of aspect ratio */
            width: 'max(100%, 177.78vh)',
            height: 'max(100%, 56.25vw)',
            border: 'none',
            pointerEvents: 'none',
          }}
        />
        {/* Dark cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(8,7,6,0.72) 0%, rgba(8,7,6,0.60) 50%, rgba(8,7,6,0.72) 100%)',
          }}
        />
        {/* Subtle gold vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.25) 100%)',
          }}
        />
      </div>

      {/* ── Stats content ── */}
      <div
        className="relative py-16 px-6 md:px-10"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p
                className="font-serif font-normal mb-1"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', color: '#c9a84c' }}
              >
                {s.value}
              </p>
              <p
                className="font-sans text-xs font-light tracking-widest uppercase"
                style={{ color: 'rgba(245,240,230,0.75)' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Thin gold separator line */}
        <div
          className="mx-auto mt-10"
          style={{
            width: '48px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(138,115,64,0.7), transparent)',
          }}
        />
      </div>
    </div>
  );
}

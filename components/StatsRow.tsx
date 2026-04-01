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
      style={{
        background: 'linear-gradient(135deg, #0a0908 0%, #141210 50%, #0a0908 100%)',
      }}
    >
      {/* Subtle gold accent lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(138,115,64,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(138,115,64,0.04) 0%, transparent 50%)',
      }} />

      {/* Stats content */}
      <div className="relative py-16 px-6 md:px-10" style={{ zIndex: 1 }}>
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
                style={{ color: 'rgba(245,240,230,0.6)' }}
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

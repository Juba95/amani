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
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transfers = useCountUp(500, 1600, visible);
  const years = useCountUp(15, 1200, visible);
  const vehicles = useCountUp(300, 1400, visible);

  const stats = [
    {
      value: `${transfers}+`,
      label: t?.stats?.transfers_label ?? 'transferts par mois',
    },
    {
      value: '4.9★',
      label: t?.stats?.rating_label ?? 'note Google',
    },
    {
      value: `${years}`,
      label: t?.stats?.experience_label ?? "ans d'expérience",
    },
    {
      value: `${vehicles}+`,
      label: t?.stats?.vehicles_label ?? 'véhicules premium',
    },
  ];

  return (
    <div
      ref={ref}
      className="py-14 px-6 md:px-10"
      style={{ background: '#fff', borderTop: '1px solid #ece9e3', borderBottom: '1px solid #ece9e3' }}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <p
              className="font-serif font-normal mb-1"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#8a7340' }}
            >
              {s.value}
            </p>
            <p className="font-sans text-xs text-stone-500 font-light tracking-wide uppercase">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

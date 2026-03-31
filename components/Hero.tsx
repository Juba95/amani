'use client';

import { useState, useEffect } from 'react';

interface HeroProps {
  t: any;
  onSearch: (from: string, to: string) => void;
  from: string;
  to: string;
  setFrom: (v: string) => void;
  setTo: (v: string) => void;
}

export default function Hero({ t, onSearch, from, to, setFrom, setTo }: HeroProps) {
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 150); }, []);

  const handleQuickRoute = (route: any) => {
    setFrom(route.from);
    setTo(route.to);
    onSearch(route.from, route.to);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 75% 30%, rgba(201,169,110,0.06) 0%, transparent 55%),
                       radial-gradient(ellipse at 15% 85%, rgba(201,169,110,0.03) 0%, transparent 45%)`,
        }} />
      {/* Vertical gold line */}
      <div className="absolute top-0 left-1/2 w-px h-28"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(201,169,110,0.3), transparent)' }} />

      <div className="relative z-10 max-w-2xl">
        {/* Tag */}
        <p className={`tag-gold mb-5 transition-all duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ transitionDelay: '300ms' }}>
          {t?.hero?.tag}
        </p>

        {/* Title */}
        <h1 className={`heading-section leading-[1.12] mb-5 max-w-[680px] transition-all duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '500ms', fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)' }}>
          {t?.hero?.title_1}<br />
          {t?.hero?.title_2} <em>{t?.hero?.title_em}</em><br />
          {t?.hero?.title_3}
        </h1>

        {/* Subtitle */}
        <p className={`font-sans text-sm text-stone-600 font-light leading-relaxed max-w-[480px] mb-10 transition-all duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ transitionDelay: '700ms' }}>
          {t?.hero?.subtitle}
        </p>

        {/* Booking form */}
        <div className={`max-w-[520px] p-6 md:p-7 rounded-2xl border border-gold-400/10 bg-white/[0.025] backdrop-blur-[30px] transition-all duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '900ms' }}>
          <div className="flex flex-col gap-2.5 mb-3">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[0.65rem] font-medium tracking-[0.1em] text-gold-400">
                {t?.hero?.from_label}
              </span>
              <input
                type="text"
                className="field-luxury !pl-[5.5rem]"
                placeholder={t?.hero?.from_placeholder ?? ''}
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearch(from, to)}
              />
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[0.65rem] font-medium tracking-[0.1em] text-gold-400">
                {t?.hero?.to_label}
              </span>
              <input
                type="text"
                className="field-luxury !pl-[5.5rem]"
                placeholder={t?.hero?.to_placeholder ?? ''}
                value={to}
                onChange={(e) => setTo(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearch(from, to)}
              />
            </div>
          </div>
          <button className="btn-gold" onClick={() => onSearch(from, to)}>
            {t?.hero?.cta}
          </button>
        </div>

        {/* Popular routes */}
        <div className={`mt-8 max-w-[520px] transition-all duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '1100ms' }}>
          <p className="tag-gold mb-2.5">{t?.hero?.popular}</p>
          <div className="flex flex-wrap gap-1.5">
          {(t?.routes?.popular ?? []).map((route: any, i: number) => (
              <button key={i}
                onClick={() => handleQuickRoute(route)}
                className="px-3.5 py-1.5 rounded-full font-sans text-[0.72rem] font-light text-stone-500 bg-gold-400/[0.05] border border-gold-400/[0.08] hover:bg-gold-400/[0.12] hover:border-gold-400/25 hover:text-gold-400 transition-all tracking-wide">
                {route.from} → {route.to}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

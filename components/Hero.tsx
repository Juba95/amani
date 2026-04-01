'use client';

import { useState, useEffect } from 'react';
import PlacesInput from '@/components/PlacesInput';

interface HeroProps {
  t: any;
  onSearch: (from: string, to: string) => void;
  from: string;
  to: string;
  setFrom: (v: string) => void;
  setTo: (v: string) => void;
  loading?: boolean;
}

export default function Hero({ t, onSearch, from, to, setFrom, setTo, loading = false }: HeroProps) {
  const [ready, setReady] = useState(false);
  const [fromConfirmed, setFromConfirmed] = useState(false);
  const [toConfirmed, setToConfirmed]     = useState(false);
  const [submitError, setSubmitError]     = useState('');

  useEffect(() => { setTimeout(() => setReady(true), 150); }, []);

  const handleFromChange = (v: string) => { setFrom(v); if (!v) setFromConfirmed(false); setSubmitError(''); };
  const handleToChange   = (v: string) => { setTo(v);   if (!v) setToConfirmed(false);   setSubmitError(''); };

  const handleQuickRoute = (route: any) => {
    setFrom(route.from);
    setTo(route.to);
    setFromConfirmed(true);
    setToConfirmed(true);
    setSubmitError('');
    onSearch(route.from, route.to);
  };

  const handleSearch = () => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';
    const needsValidation = apiKey.length >= 10;
    if (needsValidation && (!fromConfirmed || !toConfirmed)) {
      setSubmitError('Veuillez sélectionner les adresses dans la liste de suggestions');
      return;
    }
    setSubmitError('');
    onSearch(from, to);
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-10 lg:px-16 pt-24 pb-16 overflow-hidden">
      {/* ── YouTube video background ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
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
            width: 'max(100%, 177.78vh)',
            height: 'max(100%, 56.25vw)',
            border: 'none',
            pointerEvents: 'none',
          }}
        />
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(8,7,6,0.82) 0%, rgba(8,7,6,0.65) 40%, rgba(8,7,6,0.78) 100%)',
          }}
        />
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── LEFT : Text + popular routes ── */}
        <div>
          <p className={`tag mb-5 transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '300ms', color: '#c9a84c' }}>
            {t?.hero?.tag}
          </p>

          <h1
            className={`font-serif font-normal leading-[1.1] mb-6 transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: '#f5f3ef' }}>
            {t?.hero?.title_1}<br />
            {t?.hero?.title_2} <em className="italic" style={{ color: '#c9a84c' }}>{t?.hero?.title_em}</em><br />
            {t?.hero?.title_3}
          </h1>

          <p className={`font-sans text-sm font-light leading-relaxed max-w-[460px] mb-10 transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '700ms', color: 'rgba(245,240,230,0.7)' }}>
            {t?.hero?.subtitle}
          </p>

          {/* Popular routes */}
          <div className={`transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '900ms' }}>
            <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase font-medium mb-3" style={{ color: '#c9a84c' }}>
              {t?.hero?.popular}
            </p>
            <div className="flex flex-wrap gap-2">
              {(t?.routes?.popular ?? []).map((route: any, i: number) => (
                <button key={i}
                  onClick={() => handleQuickRoute(route)}
                  dir="ltr"
                  className="px-3.5 py-1.5 rounded-full font-sans text-[0.72rem] font-light tracking-wide transition-colors"
                  style={{
                    border: '1px solid rgba(201,168,76,0.3)',
                    color: 'rgba(245,240,230,0.6)',
                    background: 'rgba(255,255,255,0.05)',
                  }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = '#c9a84c'; (e.target as HTMLElement).style.color = '#c9a84c'; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = 'rgba(201,168,76,0.3)'; (e.target as HTMLElement).style.color = 'rgba(245,240,230,0.6)'; }}
                >
                  {route.from} → {route.to}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT : Booking form with elevated shadow ── */}
        <div className={`transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '600ms' }}>
          <div
            className="p-7 md:p-9 rounded-2xl border bg-white/95 backdrop-blur-sm"
            style={{
              borderColor: 'rgba(236,233,227,0.6)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            {/* Form header */}
            <p className="font-serif text-gray-900 text-lg mb-1">{t?.hero?.form_title ?? 'Votre devis instantané'}</p>
            <p className="font-sans text-xs text-stone-400 font-light mb-6">{t?.hero?.form_subtitle ?? 'Prix fixe · Pas de surprise'}</p>

            <div className="flex flex-col gap-3 mb-4">
              <PlacesInput
                label={t?.hero?.from_label ?? 'DÉPART'}
                placeholder={t?.hero?.from_placeholder ?? 'ex : 8 rue de Rivoli, Paris'}
                value={from}
                onChange={handleFromChange}
                onEnter={handleSearch}
                onPlaceSelected={(a) => { setFrom(a); setFromConfirmed(true); }}
              />

              <div className="flex items-center justify-center">
                <div className="h-px flex-1 bg-warm-300" />
                <span className="mx-3 text-gold-400 text-xs">↕</span>
                <div className="h-px flex-1 bg-warm-300" />
              </div>

              <PlacesInput
                label={t?.hero?.to_label ?? 'ARRIVÉE'}
                placeholder={t?.hero?.to_placeholder ?? 'ex : Aéroport CDG, Terminal 2E'}
                value={to}
                onChange={handleToChange}
                onEnter={handleSearch}
                onPlaceSelected={(a) => { setTo(a); setToConfirmed(true); }}
              />
            </div>

            {submitError && (
              <p className="text-center font-sans text-[0.7rem] text-amber-600 mb-2 leading-snug">
                {submitError}
              </p>
            )}
            <button
              className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              onClick={handleSearch}
              disabled={loading}>
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Calcul en cours…
                </>
              ) : (
                t?.hero?.cta ?? 'Obtenir un devis instantané'
              )}
            </button>

            {/* Trust signals under form */}
            <div className="mt-5 flex justify-around">
              {(t?.hero?.trust_signals ?? ['Prix fixe', 'Suivi de vol', '24h/24']).map((item: string) => (
                <div key={item} className="text-center">
                  <p className="font-sans text-[0.6rem] tracking-[0.1em] uppercase text-stone-400">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

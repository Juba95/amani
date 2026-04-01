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

const hasGoogleMapsKey = !!(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.length ?? 0 > 10);

export default function Hero({ t, onSearch, from, to, setFrom, setTo, loading = false }: HeroProps) {
  const [ready, setReady] = useState(false);
  const [fromConfirmed, setFromConfirmed] = useState(false);
  const [toConfirmed, setToConfirmed]     = useState(false);
  const [submitError, setSubmitError]     = useState('');

  useEffect(() => { setTimeout(() => setReady(true), 150); }, []);

  // Reset confirmations quand les champs changent manuellement
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
    // Si la clé Google Maps est disponible, vérifier que les adresses ont été sélectionnées
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
    <section className="relative min-h-screen flex items-center px-6 md:px-10 lg:px-16 pt-24 pb-16 overflow-hidden bg-white">
      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 60% 20%, rgba(138,115,64,0.04) 0%, transparent 55%),
                       radial-gradient(ellipse at 10% 90%, rgba(138,115,64,0.03) 0%, transparent 45%)`,
        }} />

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── LEFT : Text + popular routes ── */}
        <div>
          <p className={`tag mb-5 transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '300ms' }}>
            {t?.hero?.tag}
          </p>

          <h1
            className={`font-serif text-gray-900 font-normal leading-[1.1] mb-6 transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
            {t?.hero?.title_1}<br />
            {t?.hero?.title_2} <em className="italic" style={{ color: '#8a7340' }}>{t?.hero?.title_em}</em><br />
            {t?.hero?.title_3}
          </h1>

          <p className={`font-sans text-sm text-stone-500 font-light leading-relaxed max-w-[460px] mb-10 transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '700ms' }}>
            {t?.hero?.subtitle}
          </p>

          {/* Popular routes */}
          <div className={`transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '900ms' }}>
            <p className="tag mb-3">{t?.hero?.popular}</p>
            <div className="flex flex-wrap gap-2">
              {(t?.routes?.popular ?? []).map((route: any, i: number) => (
                <button key={i}
                  onClick={() => handleQuickRoute(route)}
                  dir="ltr"
                  className="px-3.5 py-1.5 rounded-full font-sans text-[0.72rem] font-light text-stone-500 bg-warm-50 border border-warm-300 hover:border-gold-400 hover:text-gold-400 transition-all tracking-wide">
                  {route.from} → {route.to}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT : Booking form ── */}
        <div className={`transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '600ms' }}>
          <div className="p-7 md:p-9 rounded-2xl border border-warm-300 bg-warm-50 shadow-sm">
            {/* Form header */}
            <p className="font-serif text-gray-900 text-lg mb-1">{t?.hero?.form_title ?? 'Votre devis instantané'}</p>
            <p className="font-sans text-xs text-stone-400 font-light mb-6">{t?.hero?.form_subtitle ?? 'Prix fixe · Pas de surprise'}</p>

            <div className="flex flex-col gap-3 mb-4">
              {/* FROM — avec autocomplete Google Places */}
              <PlacesInput
                label={t?.hero?.from_label ?? 'DÉPART'}
                placeholder={t?.hero?.from_placeholder ?? 'ex : 8 rue de Rivoli, Paris'}
                value={from}
                onChange={handleFromChange}
                onEnter={handleSearch}
                onPlaceSelected={(a) => { setFrom(a); setFromConfirmed(true); }}
              />

              {/* Swap arrow */}
              <div className="flex items-center justify-center">
                <div className="h-px flex-1 bg-warm-300" />
                <span className="mx-3 text-gold-400 text-xs">↕</span>
                <div className="h-px flex-1 bg-warm-300" />
              </div>

              {/* TO — avec autocomplete Google Places */}
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

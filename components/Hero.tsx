'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PlacesInput, { isGmapsUnavailable } from '@/components/PlacesInput';
import EuropeMap, { type MapCountry } from '@/components/EuropeMap';

/** Options de recherche transmises au devis (aller-retour double le prix,
 *  passagers/bagages filtrent les véhicules éligibles). */
export interface SearchOptions {
  trip: 'oneway' | 'return';
  date: string;
  pax: number;
  bags: number;
}

interface HeroProps {
  t: any;
  onSearch: (from: string, to: string, opts?: SearchOptions) => void;
  from: string;
  to: string;
  setFrom: (v: string) => void;
  setTo: (v: string) => void;
  loading?: boolean;
  /** Carte d'Europe interactive (colonne gauche) — clé ISO → pays/villes */
  countries?: Record<string, MapCountry>;
  locale?: string;
}

export default function Hero({ t, onSearch, from, to, setFrom, setTo, loading = false, countries, locale = 'fr' }: HeroProps) {
  const [ready, setReady] = useState(false);
  const [fromConfirmed, setFromConfirmed] = useState(false);
  const [toConfirmed, setToConfirmed]     = useState(false);
  const [submitError, setSubmitError]     = useState('');
  // Nouveau formulaire : type de trajet, date/heure, passagers, bagages
  const [trip, setTrip] = useState<'oneway' | 'return'>('oneway');
  const [date, setDate] = useState('');
  const [pax, setPax]   = useState(1);
  const [bags, setBags] = useState(1);

  useEffect(() => { setTimeout(() => setReady(true), 150); }, []);

  const handleFromChange = (v: string) => { setFrom(v); if (!v) setFromConfirmed(false); setSubmitError(''); };
  const handleToChange   = (v: string) => { setTo(v);   if (!v) setToConfirmed(false);   setSubmitError(''); };

  const opts = (): SearchOptions => ({ trip, date, pax, bags });

  const handleQuickRoute = (route: any) => {
    setFrom(route.from);
    setTo(route.to);
    setFromConfirmed(true);
    setToConfirmed(true);
    setSubmitError('');
    onSearch(route.from, route.to, opts());
  };

  const handleSearch = () => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';
    // Pas de validation bloquante si Google Maps est indisponible (clé rejetée)
    const needsValidation = apiKey.length >= 10 && !isGmapsUnavailable();
    if (needsValidation && (!fromConfirmed || !toConfirmed)) {
      setSubmitError('Veuillez sélectionner les adresses dans la liste de suggestions');
      return;
    }
    setSubmitError('');
    onSearch(from, to, opts());
  };

  const mapLocale = locale === 'fr' ? 'fr' : 'en';
  const fr = locale === 'fr';
  // Libellés du formulaire (FR / EN — les autres langues utilisent l'anglais)
  const L = {
    oneWay:    fr ? 'Aller simple'  : 'One way',
    round:     fr ? 'Aller-retour'  : 'Return',
    dateLabel: fr ? 'Date & heure'  : 'Date & time',
    pax:       fr ? 'Passagers'     : 'Passengers',
    bags:      fr ? 'Bagages'       : 'Luggage pieces',
    continue:  fr ? 'Continuer'     : 'Continue',
    proof:     fr ? '4,9/5 sur Google · 307 destinations en Europe' : '4.9/5 on Google · 307 destinations across Europe',
  };
  const stepBtn = 'w-9 h-9 flex items-center justify-center rounded-md border border-warm-300 text-stone-500 hover:border-stone-500 hover:text-gray-900 transition-colors text-lg leading-none select-none';

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-10 lg:px-16 pt-28 pb-16 overflow-hidden">
      {/* ── Photo background (Paris) ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Image
          src="/images/home/hero-paris.jpg"
          alt=""
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center 62%' }}
        />
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(8,7,6,0.88) 0%, rgba(8,7,6,0.68) 40%, rgba(8,7,6,0.82) 100%)',
          }}
        />
      </div>

      {/* Two-column layout : carte à gauche, H1 + formulaire à droite */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr,1fr] gap-12 lg:gap-16 items-center">

        {/* ── LEFT : Interactive Europe map ── */}
        <div className={`order-2 lg:order-1 transition-[opacity,transform] duration-[1400ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '700ms' }}>
          {countries ? (
            <EuropeMap locale={mapLocale} countries={countries} variant="hero" />
          ) : null}
        </div>

        {/* ── RIGHT : Tag + H1 + booking form ── */}
        <div className="order-1 lg:order-2">
          <p className={`tag mb-4 transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '300ms', color: '#c9a84c' }}>
            {t?.hero?.tag}
          </p>

          <h1
            className={`font-serif font-normal leading-[1.12] mb-4 transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '450ms', fontSize: 'clamp(1.9rem, 3vw, 2.7rem)', color: '#f5f3ef' }}>
            {t?.hero?.title_1}<br />
            {t?.hero?.title_2} <em className="italic" style={{ color: '#c9a84c' }}>{t?.hero?.title_em}</em> {t?.hero?.title_3}
          </h1>

          <p className={`font-sans text-sm font-light leading-relaxed max-w-[520px] mb-8 transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '600ms', color: 'rgba(245,240,230,0.7)' }}>
            {t?.hero?.subtitle}
          </p>

          {/* Booking form */}
          <div className={`transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '750ms' }}>
            <div
              className="p-6 md:p-8 rounded-2xl border bg-white/95 backdrop-blur-sm"
              style={{
                borderColor: 'rgba(236,233,227,0.6)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.2)',
              }}
            >
              {/* Form header */}
              <p className="font-serif text-gray-900 text-lg mb-1">{t?.hero?.form_title ?? 'Votre devis instantané'}</p>
              <p className="font-sans text-xs text-stone-400 font-light mb-5">{t?.hero?.form_subtitle ?? 'Prix fixe · Pas de surprise'}</p>

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
              <div className="mt-4 flex justify-around">
                {(t?.hero?.trust_signals ?? ['Prix fixe', 'Suivi de vol', '24h/24']).map((item: string) => (
                  <div key={item} className="text-center">
                    <p className="font-sans text-[0.6rem] tracking-[0.1em] uppercase text-stone-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular routes — sous le formulaire */}
            <div className="mt-5">
              <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase font-medium mb-2.5" style={{ color: '#c9a84c' }}>
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
        </div>

      </div>
    </section>
  );
}

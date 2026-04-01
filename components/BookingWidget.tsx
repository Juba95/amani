'use client';

/**
 * BookingWidget — module de devis autonome
 * Peut être intégré sur n'importe quelle page SEO (via SEOLayout / SEOLayoutEN).
 * Gère son propre état : from/to, calcul distance, résultats véhicules.
 */

import { useState, useRef } from 'react';
import PlacesInput from '@/components/PlacesInput';
import BookingResults from '@/components/BookingResults';

interface BookingWidgetProps {
  t: any;
  locale?: string;
}

export default function BookingWidget({ t, locale = 'fr' }: BookingWidgetProps) {
  const [from,            setFrom]            = useState('');
  const [to,              setTo]              = useState('');
  const [fromConfirmed,   setFromConfirmed]   = useState(false);
  const [toConfirmed,     setToConfirmed]     = useState(false);
  const [distance,        setDistance]        = useState<number | null>(null);
  const [duration,        setDuration]        = useState<string | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [showResults,     setShowResults]     = useState(false);
  const [loading,         setLoading]         = useState(false);
  const [submitError,     setSubmitError]     = useState('');
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleFromChange = (v: string) => { setFrom(v); if (!v) setFromConfirmed(false); setSubmitError(''); };
  const handleToChange   = (v: string) => { setTo(v);   if (!v) setToConfirmed(false);   setSubmitError(''); };

  const handleSearch = async () => {
    if (!from || !to) {
      setSubmitError(locale === 'en' ? 'Please enter a departure and a destination' : 'Saisissez un départ et une destination');
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';
    const needsValidation = apiKey.length >= 10;
    if (needsValidation && (!fromConfirmed || !toConfirmed)) {
      setSubmitError(
        locale === 'en'
          ? 'Please select an address from the suggestions list'
          : 'Sélectionnez une adresse dans la liste de suggestions'
      );
      return;
    }

    setLoading(true);
    setShowResults(false);
    setSelectedVehicle(null);
    setSubmitError('');

    try {
      const res = await fetch('/api/distance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ origin: from, destination: to }),
      });
      const data = await res.json();
      setDistance(data.km);
      setDuration(data.duration);
      setShowResults(true);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    } catch {
      setDistance(35);
      setDuration('45 min');
      setShowResults(true);
    } finally {
      setLoading(false);
    }
  };

  const fromLabel    = t?.hero?.from_label    ?? (locale === 'en' ? 'FROM'  : 'DÉPART');
  const toLabel      = t?.hero?.to_label      ?? (locale === 'en' ? 'TO'    : 'ARRIVÉE');
  const fromPh       = t?.hero?.from_placeholder ?? (locale === 'en' ? 'e.g. CDG Airport, Terminal 2E' : 'ex : Aéroport CDG, Terminal 2E');
  const toPh         = t?.hero?.to_placeholder   ?? (locale === 'en' ? 'e.g. 8 rue de Rivoli, Paris'  : 'ex : 8 rue de Rivoli, Paris');
  const ctaLabel     = t?.hero?.cta              ?? (locale === 'en' ? 'Get an instant quote'          : 'Obtenir un devis instantané');
  const formTitle    = t?.hero?.form_title        ?? (locale === 'en' ? 'Your instant quote'            : 'Votre devis instantané');
  const formSubtitle = t?.hero?.form_subtitle     ?? (locale === 'en' ? 'Fixed price · No surprises'   : 'Prix fixe · Pas de surprise');
  const trustItems   = t?.hero?.trust_signals     ?? (locale === 'en' ? ['Fixed price', 'Flight tracking', '24/7'] : ['Prix fixe', 'Suivi de vol', '24h/24']);

  return (
    <section className="py-16 px-6 md:px-10 bg-warm-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="tag mb-3">{locale === 'en' ? 'Instant quote' : 'Devis instantané'}</p>
          <h2 className="font-serif text-2xl text-gray-900 font-normal">{formTitle}</h2>
          <p className="font-sans text-xs text-stone-400 font-light mt-2">{formSubtitle}</p>
        </div>

        {/* Form card */}
        <div className="p-7 md:p-9 rounded-2xl border border-warm-300 bg-white shadow-sm">
          <div className="flex flex-col gap-3 mb-4">
            <PlacesInput
              label={fromLabel}
              placeholder={fromPh}
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
              label={toLabel}
              placeholder={toPh}
              value={to}
              onChange={handleToChange}
              onEnter={handleSearch}
              onPlaceSelected={(a) => { setTo(a); setToConfirmed(true); }}
            />
          </div>

          {submitError && (
            <p className="text-center font-sans text-[0.7rem] text-amber-600 mb-3 leading-snug">
              {submitError}
            </p>
          )}

          <button
            className="btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {locale === 'en' ? 'Calculating…' : 'Calcul en cours…'}
              </>
            ) : (
              ctaLabel
            )}
          </button>

          {/* Trust signals */}
          <div className="mt-5 flex justify-around">
            {trustItems.map((item: string) => (
              <div key={item} className="text-center">
                <p className="font-sans text-[0.6rem] tracking-[0.1em] uppercase text-stone-400">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        {showResults && distance !== null && duration && (
          <div className="mt-6">
            <BookingResults
              t={t}
              from={from}
              to={to}
              distance={distance}
              duration={duration}
              selectedVehicle={selectedVehicle}
              onSelect={(id) => setSelectedVehicle(id)}
              resultsRef={resultsRef}
            />
          </div>
        )}
      </div>
    </section>
  );
}

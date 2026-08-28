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
  /** 'transfer' = trajet A→B ; 'disposal' = mise à disposition horaire. */
  mode?: 'transfer' | 'disposal';
  /** Durée en heures, uniquement en mise à disposition. */
  hours?: number;
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

// Libellés du formulaire par langue. Les langues non traduites ici
// (es, ar, zh) retombent sur l'anglais.
type FormLabels = {
  transfer: string; disposal: string; oneWay: string; round: string;
  pickup: string; dest: string; city: string; duration: string;
  dateLabel: string; pax: string; bags: string; continue: string;
  computing: string; cityPh: string; pickupPh: string; destPh: string;
  halfDay: string; day: string; extendedDay: string;
errCity: string; errAddresses: string;
};

const LABELS: Record<string, FormLabels> = {
  fr: {
    transfer: 'Transfert', disposal: 'Mise à disposition',
    oneWay: 'Aller simple', round: 'Aller-retour',
    pickup: 'Départ', dest: 'Destination', city: 'Ville de référence',
    duration: 'Durée', dateLabel: 'Date & heure', pax: 'Passagers',
    bags: 'Bagages', continue: 'Continuer', computing: 'Calcul en cours…',
    cityPh: 'Paris, Cannes, Genève…', pickupPh: 'Aéroport, hôtel, adresse',
    destPh: 'Où allez-vous ?',
    halfDay: 'Demi-journée (4 h)', day: 'Journée (8 h)', extendedDay: 'Journée étendue (12 h)',
errCity: 'Indiquez la ville de prise en charge',
errAddresses: 'Veuillez sélectionner les adresses dans la liste de suggestions',
  },
  en: {
    transfer: 'Transfer', disposal: 'Full disposal',
    oneWay: 'One way', round: 'Return',
    pickup: 'Pickup', dest: 'Destination', city: 'Reference city',
    duration: 'Duration', dateLabel: 'Date & time', pax: 'Passengers',
    bags: 'Luggage', continue: 'Continue', computing: 'Calculating…',
    cityPh: 'Paris, Cannes, Geneva…', pickupPh: 'Airport, hotel, address',
    destPh: 'Where are you going',
    halfDay: 'Half day (4 h)', day: 'Day (8 h)', extendedDay: 'Extended day (12 h)',
errCity: 'Enter the pickup city',
errAddresses: 'Please pick the addresses from the suggestion list',
  },
  de: {
    transfer: 'Transfer', disposal: 'Stundenmiete',
    oneWay: 'Einfache Fahrt', round: 'Hin- und Rückfahrt',
    pickup: 'Abholung', dest: 'Ziel', city: 'Ausgangsort',
    duration: 'Dauer', dateLabel: 'Datum & Uhrzeit', pax: 'Passagiere',
    bags: 'Gepäck', continue: 'Weiter', computing: 'Berechnung läuft…',
    cityPh: 'Paris, Cannes, Genf …', pickupPh: 'Flughafen, Hotel, Adresse',
    destPh: 'Wohin fahren Sie?',
    halfDay: 'Halber Tag (4 Std.)', day: 'Ganzer Tag (8 Std.)', extendedDay: 'Langer Tag (12 Std.)',
errCity: 'Bitte geben Sie den Abholort an',
errAddresses: 'Bitte wählen Sie die Adressen aus der Vorschlagsliste',
  },
};


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
  // Transfert A→B ou mise à disposition à l'heure (onglets du widget)
  const [mode, setMode]   = useState<'transfer' | 'disposal'>('transfer');
  const [hours, setHours] = useState(8);

  useEffect(() => { setTimeout(() => setReady(true), 150); }, []);

  const mapLocale: 'fr' | 'en' | 'de' =
    locale === 'fr' ? 'fr' : locale === 'de' ? 'de' : 'en';
  const L = LABELS[locale] ?? LABELS.en;

  const handleFromChange = (v: string) => { setFrom(v); if (!v) setFromConfirmed(false); setSubmitError(''); };
  const handleToChange   = (v: string) => { setTo(v);   if (!v) setToConfirmed(false);   setSubmitError(''); };

  const opts = (): SearchOptions => ({ trip, date, pax, bags, mode, hours });

  const handleQuickRoute = (route: any) => {
    setFrom(route.from);
    setTo(route.to);
    setFromConfirmed(true);
    setToConfirmed(true);
    setSubmitError('');
    onSearch(route.from, route.to, opts());
  };

  const handleSearch = () => {
    // Mise à disposition : une seule ville suffit, pas de destination.
    if (mode === 'disposal') {
      if (!from.trim()) {
        setSubmitError(L.errCity);
        return;
      }
      setSubmitError('');
      onSearch(from, from, opts());
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';
    // Pas de validation bloquante si Google Maps est indisponible (clé rejetée)
    const needsValidation = apiKey.length >= 10 && !isGmapsUnavailable();
    if (needsValidation && (!fromConfirmed || !toConfirmed)) {
      setSubmitError(L.errAddresses);
      return;
    }
    setSubmitError('');
    onSearch(from, to, opts());
  };

  const HOURS = [
    { h: 4,  label: L.halfDay },
    { h: 8,  label: L.day },
    { h: 12, label: L.extendedDay },
  ];
  const stepBtn = 'w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full border border-white/25 text-white/70 hover:border-white hover:text-white transition-colors text-base leading-none select-none';
  const microLabel = 'block font-sans text-[0.55rem] tracking-[0.16em] uppercase mb-1 text-white/45';
  // Champ souligné sur fond sombre, dans l'esprit du widget de référence.
  const underline = 'w-full bg-transparent border-0 border-b border-white/20 focus:border-white/70 outline-none py-1.5 font-sans text-[0.9rem] text-white placeholder:text-white/35 transition-colors';

  return (
    // min-h-svh (et non 100vh) : sur mobile la barre d'URL ne pousse plus le
    // formulaire hors de l'écran.
    <section className="hero-tight relative min-h-svh flex items-center px-5 sm:px-6 md:px-10 lg:px-16 pt-[5.25rem] pb-8 sm:pt-24 sm:pb-10 md:pt-28 md:pb-16 overflow-hidden">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr,1fr] gap-10 lg:gap-16 items-center">

        {/* ── LEFT : Interactive Europe map ── */}
        <div className={`order-2 lg:order-1 transition-[opacity,transform] duration-[1400ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '700ms' }}>
          {countries ? (
            <EuropeMap locale={mapLocale} countries={countries} variant="hero" />
          ) : null}
        </div>

        {/* ── RIGHT : Tag + H1 + booking form ── */}
        <div className="order-1 lg:order-2">
          <p className={`tag text-[0.58rem] sm:text-[0.68rem] tracking-[0.22em] sm:tracking-[0.3em] mb-2 md:mb-4 transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '300ms', color: '#c9a84c' }}>
            {t?.hero?.tag}
          </p>

          <h1
            className={`hero-title font-serif font-normal leading-[1.14] mb-2.5 md:mb-4 transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '450ms', color: '#f5f3ef' }}>
            {t?.hero?.title_1}<br />
            {t?.hero?.title_2} <em className="italic" style={{ color: '#c9a84c' }}>{t?.hero?.title_em}</em> {t?.hero?.title_3}
          </h1>

          {/* Sur mobile : version courte du résumé, pour que le formulaire
              entre en entier dans l'écran sans faire défiler. */}
          <p className={`hero-sub font-sans text-[0.8rem] sm:text-sm font-light leading-snug sm:leading-relaxed max-w-[520px] mb-3.5 md:mb-7 transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '600ms', color: 'rgba(245,240,230,0.7)' }}>
            <span className="hero-sub-short sm:hidden">{t?.hero?.subtitle_short ?? t?.hero?.subtitle}</span>
            <span className="hero-sub-full hidden sm:inline">{t?.hero?.subtitle}</span>
          </p>

          {/* Booking form */}
          <div className={`transition-[opacity,transform] duration-[1200ms] ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '750ms' }}>
            <div
              className="hero-card p-4 sm:p-5 md:p-6 rounded-2xl border backdrop-blur-md"
              style={{
                borderColor: 'rgba(255,255,255,0.12)',
                background: 'rgba(18,16,14,0.72)',
                boxShadow: '0 24px 70px rgba(0,0,0,0.5)',
              }}
            >
              {/* Onglets Transfert / Mise à disposition */}
              <div className="hero-tabs flex p-1 rounded-full mb-4 md:mb-5" style={{ border: '1px solid rgba(255,255,255,0.18)' }}>
                {([['transfer', L.transfer], ['disposal', L.disposal]] as const).map(([key, label]) => {
                  const active = mode === key;
                  return (
                    <button key={key} type="button"
                      onClick={() => { setMode(key); setSubmitError(''); }}
                      aria-pressed={active}
                      className={`flex-1 py-2 rounded-full font-sans text-[0.62rem] sm:text-[0.7rem] tracking-[0.13em] sm:tracking-[0.15em] uppercase transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60 ${
                        active ? 'bg-white text-gray-900 font-medium' : 'text-white/60 hover:text-white/90'
                      }`}>
                      {label}
                    </button>
                  );
                })}
              </div>

              {mode === 'transfer' ? (
                <div className="flex flex-col gap-3 md:gap-4 mb-3.5 md:mb-4">
                  <PlacesInput
                    label={L.pickup}
                    placeholder={L.pickupPh}
                    value={from}
                    onChange={handleFromChange}
                    onEnter={handleSearch}
                    onPlaceSelected={(a) => { setFrom(a); setFromConfirmed(true); }}
                    variant="dark"
                  />
                  <PlacesInput
                    label={L.dest}
                    placeholder={L.destPh}
                    value={to}
                    onChange={handleToChange}
                    onEnter={handleSearch}
                    onPlaceSelected={(a) => { setTo(a); setToConfirmed(true); }}
                    variant="dark"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3.5 md:mb-4">
                  <PlacesInput
                    label={L.city}
                    placeholder={L.cityPh}
                    value={from}
                    onChange={handleFromChange}
                    onEnter={handleSearch}
                    onPlaceSelected={(a) => { setFrom(a); setFromConfirmed(true); }}
                    variant="dark"
                  />
                  <div>
                    <label className={microLabel} htmlFor="hero-hours">{L.duration}</label>
                    <select id="hero-hours" value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className={`${underline} [&>option]:text-gray-900`}>
                      {HOURS.map(o => <option key={o.h} value={o.h}>{o.label}</option>)}
                    </select>
                  </div>
                </div>
              )}

              {/* Date & heure + passagers / bagages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3.5 md:mb-4">
                <div>
                  <label className={microLabel} htmlFor="hero-date">{L.dateLabel}</label>
                  <input id="hero-date" type="datetime-local" value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`${underline} [color-scheme:dark]`} />
                </div>
                <div className="flex gap-4">
                  {([[L.pax, pax, setPax, 1, 8], [L.bags, bags, setBags, 0, 10]] as const).map(
                    ([label, val, setVal, min, max]) => (
                      <div key={label} className="flex-1">
                        <span className={microLabel}>{label}</span>
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <button type="button" className={stepBtn} aria-label={`${label} −`}
                            onClick={() => setVal(Math.max(min, val - 1))}>−</button>
                          <span className="font-sans text-white text-sm w-5 text-center tabular-nums">{val}</span>
                          <button type="button" className={stepBtn} aria-label={`${label} +`}
                            onClick={() => setVal(Math.min(max, val + 1))}>+</button>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Aller simple / aller-retour — sans objet en mise à disposition */}
              {mode === 'transfer' && (
                <div className="flex gap-5 mb-3.5 md:mb-4">
                  {([['oneway', L.oneWay], ['return', L.round]] as const).map(([key, label]) => (
                    <label key={key} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="hero-trip" checked={trip === key}
                        onChange={() => setTrip(key)} className="accent-white w-3.5 h-3.5" />
                      <span className="font-sans text-[0.74rem] text-white/70">{label}</span>
                    </label>
                  ))}
                </div>
              )}

              {submitError && (
                <p className="font-sans text-[0.72rem] text-amber-300 mb-3 leading-snug">
                  {submitError}
                </p>
              )}

              <button
                className="w-full py-3 md:py-3.5 rounded-full bg-white text-gray-900 font-sans text-[0.68rem] sm:text-[0.72rem] tracking-[0.16em] uppercase font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                onClick={handleSearch}
                disabled={loading}>
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-gray-400/40 border-t-gray-900 rounded-full animate-spin" />
                    {L.computing}
                  </>
                ) : (
                  t?.hero?.cta ?? L.continue
                )}
              </button>

              {/* Trust signals under form — masqués sur mobile pour que le
                  formulaire tienne dans l'écran */}
              <div className="mt-3 hidden sm:flex justify-around">
                {(t?.hero?.trust_signals ?? ['Prix fixe', 'Suivi de vol', '24h/24']).map((item: string) => (
                  <div key={item} className="text-center">
                    <p className="font-sans text-[0.55rem] sm:text-[0.6rem] tracking-[0.1em] uppercase text-white/40">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular routes — sous le formulaire */}
            <div className="mt-4">
              <p className="font-sans text-[0.58rem] tracking-[0.2em] uppercase font-medium mb-2" style={{ color: '#c9a84c' }}>
                {t?.hero?.popular}
              </p>
              <div className="flex flex-wrap gap-2">
                {(t?.routes?.popular ?? []).map((route: any, i: number) => (
                  <button key={i}
                    onClick={() => handleQuickRoute(route)}
                    dir="ltr"
                    className="px-3 py-1 rounded-full font-sans text-[0.68rem] font-light tracking-wide transition-colors"
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

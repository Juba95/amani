'use client';

import dynamic from 'next/dynamic';
import { VEHICLES, calculatePrice } from '@/lib/vehicles';

const RouteMap = dynamic(() => import('@/components/RouteMap'), { ssr: false });

interface BookingResultsProps {
  t: any;
  from: string;
  to: string;
  distance: number;
  duration: string;
  selectedVehicle: string | null;
  onSelect: (id: string) => void;
  resultsRef: React.RefObject<HTMLDivElement>;
}

export default function BookingResults({
  t, from, to, distance, duration, selectedVehicle, onSelect, resultsRef,
}: BookingResultsProps) {
  const formatPrice = (p: number) => Math.round(p).toLocaleString('fr-FR') + ' €';

  const selected = VEHICLES.find((v) => v.id === selectedVehicle);

  return (
    <div ref={resultsRef}>
      {/* Vehicle selection */}
      <section className="py-16 px-6 md:px-10" style={{ background: 'linear-gradient(180deg, #080706, #060504)' }}>
        <p className="tag-gold mb-1.5">{t?.booking?.tag}</p>
        <h2 className="heading-section mb-1.5">
          {t?.booking?.title} <em>{t?.booking?.title_em}</em>
        </h2>
        <p className="font-sans text-sm text-stone-600 font-light mb-6">{t?.booking?.fixed_price}</p>

        {/* Route bar */}
        <div className="flex flex-wrap items-center gap-4 px-5 py-3.5 mb-6 rounded-xl bg-gold-400/[0.04] border border-gold-400/[0.08]">
          <span className="font-sans text-sm font-light">{from}</span>
          <span className="text-gold-400">→</span>
          <span className="font-sans text-sm font-light">{to}</span>
          <div className="ml-auto flex gap-5 font-sans text-sm text-stone-500">
            <span><strong className="text-gold-400 font-medium">{distance} km</strong></span>
            <span><strong className="text-gold-400 font-medium">{duration}</strong></span>
          </div>
        </div>

        {/* Route map */}
        <RouteMap from={from} to={to} distance={distance} duration={duration} visible={true} />

        {/* Vehicle grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
          {VEHICLES.map((v) => {
            const vehicleT = t?.fleet?.vehicles?.[v.nameKey];
            const price = calculatePrice(v, distance);
            return (
              <div key={v.id}
                onClick={() => onSelect(v.id)}
                className={`card-luxury ${selectedVehicle === v.id ? 'selected' : ''}`}>
                <p className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-gold-400 font-normal mb-1.5">
                  {vehicleT?.category || v.nameKey}
                </p>
                <h3 className="text-base font-normal mb-0.5">{vehicleT?.name || v.nameKey}</h3>
                <p className="font-sans text-[0.7rem] text-stone-600 font-light mb-4">
                  {v.pax} pass. · {v.bags} bag.
                </p>
                <p className="text-xl font-medium text-gold-400">{formatPrice(price)}</p>
                <p className="font-sans text-[0.62rem] text-stone-700 font-light mt-0.5">
                  {t?.booking?.fixed_price}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Booking summary */}
      {selected && (
        <section className="py-10 px-6 md:px-10">
          <button className="btn-outline mb-5" onClick={() => onSelect('')}>
            {t?.booking?.change_vehicle}
          </button>
          <p className="tag-gold mb-1.5">{t?.booking?.summary}</p>

          <div className="max-w-lg bg-white/[0.02] border border-gold-400/10 rounded-2xl p-7">
            {[
              [t?.booking?.departure ?? '', from],
              [t?.booking?.arrival ?? '', to],
              [t?.booking?.distance ?? '', `${distance} km · ${duration}`],
              [t?.booking?.vehicle ?? '', t?.fleet?.vehicles?.[selected.nameKey]?.name ?? selected.nameKey],
              [t?.booking?.included ?? '', t?.booking?.included_items ?? ''],
            ].map(([label, value], i) => (
              <div key={i} className="flex justify-between py-2.5 border-b border-white/[0.03] font-sans text-sm font-light">
                <span className="text-stone-500">{label}</span>
                <span className="font-normal text-right">{value}</span>
              </div>
            ))}

            <div className="flex justify-between items-baseline pt-5 mt-2 border-t border-gold-400/15">
              <span className="font-sans text-sm text-stone-500 font-light">{t?.booking?.total}</span>
              <span className="text-3xl font-medium text-gold-400">
                {formatPrice(calculatePrice(selected, distance))}
              </span>
            </div>

            <button className="btn-gold mt-6">
              {t?.booking?.book_now} — {formatPrice(calculatePrice(selected, distance))}
            </button>

            <p className="font-sans text-center text-[0.72rem] text-stone-700 font-light mt-3">
              {t?.booking?.or_call}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

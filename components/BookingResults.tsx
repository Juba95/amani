'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { VEHICLES, calculatePrice, isAirportTransfer } from '@/lib/vehicles';

const RouteMap = dynamic(() => import('@/components/RouteMap'), { ssr: false });

/** Noms affichés et points forts de chaque véhicule */
const VEHICLE_INFO: Record<string, { name: string; category: string; highlights: string[] }> = {
  classe_e: {
    name: 'Mercedes Classe E',
    category: 'Berline Business',
    highlights: ['Wi-Fi 4G', 'Cuir Nappa', 'Climatisation bi-zone'],
  },
  eqs: {
    name: 'Mercedes EQS',
    category: 'Executive Électrique',
    highlights: ['100% électrique', 'Confort Classe S', 'Silence absolu'],
  },
  classe_s: {
    name: 'Mercedes Classe S',
    category: 'Berline Executive',
    highlights: ['Sièges massants', 'Burmester® 4D', 'Insonorisation renforcée'],
  },
  classe_s_maybach: {
    name: 'Mercedes Maybach',
    category: 'Ultra-Prestige',
    highlights: ['Sièges inclinables 43,5°', 'Réfrigérateur champagne', 'Première classe'],
  },
  classe_v: {
    name: 'Mercedes Classe V',
    category: 'Minivan Luxe',
    highlights: ['Configuration salon', '7 places', 'Espace bagages XXL'],
  },
  classe_g: {
    name: 'Mercedes Classe G',
    category: 'SUV Prestige',
    highlights: ['Présence iconique', 'Cuir designo', 'Burmester® surround'],
  },
  sprinter: {
    name: 'Mercedes Sprinter VIP',
    category: 'Minibus Luxe',
    highlights: ['Jusqu\'à 16 places', 'Sièges capitaine cuir', 'Sono premium'],
  },
  range_rover_evoque: {
    name: 'Range Rover Evoque',
    category: 'SUV Premium',
    highlights: ['Transmission intégrale', 'Cuir Windsor', 'Meridian™'],
  },
};

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
  const router = useRouter();
  const formatPrice = (p: number) => Math.round(p).toLocaleString('fr-FR') + ' €';

  const airport = isAirportTransfer(from, to);
  const selected = VEHICLES.find((v) => v.id === selectedVehicle);

  const goToReservation = () => {
    if (!selected) return;
    const params = new URLSearchParams({
      from, to,
      vehicle: selected.id,
      km: String(distance),
      dur: duration,
    });
    router.push(`/reservation?${params.toString()}`);
  };

  return (
    <div ref={resultsRef}>
      {/* Vehicle selection — light background */}
      <section className="py-16 px-6 md:px-10 bg-warm-50">
        <div className="max-w-5xl mx-auto">
          <p className="tag mb-2">{t?.booking?.tag || 'Votre devis'}</p>
          <h2 className="heading mb-2">
            {t?.booking?.title || 'Choisissez votre'} <em>{t?.booking?.title_em || 'véhicule'}</em>
          </h2>
          <p className="sf text-sm text-stone-500 mb-8">{t?.booking?.fixed_price || 'Prix fixe, tout compris'}</p>

          {/* Route bar */}
          <div className="flex flex-wrap items-center gap-4 px-5 py-3.5 mb-6 rounded-xl bg-white border border-warm-300">
            <span className="sf text-sm text-gray-700">{from}</span>
            <span style={{ color: '#8a7340' }}>→</span>
            <span className="sf text-sm text-gray-700">{to}</span>
            {airport && (
              <span className="sf text-[0.6rem] px-2.5 py-1 rounded-full font-medium uppercase tracking-wider"
                style={{ background: 'rgba(138,115,64,0.1)', color: '#8a7340' }}>
                ✈ Forfait aéroport
              </span>
            )}
            <div className="ml-auto flex gap-5 sf text-sm text-stone-400">
              <span><strong className="font-medium" style={{ color: '#8a7340' }}>{distance} km</strong></span>
              <span><strong className="font-medium" style={{ color: '#8a7340' }}>{duration}</strong></span>
            </div>
          </div>

          {/* Route map */}
          <RouteMap from={from} to={to} distance={distance} duration={duration} visible={true} />

          {/* Vehicle cards — with images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {VEHICLES.map((v) => {
              const info = VEHICLE_INFO[v.id];
              const vehicleT = t?.fleet?.vehicles?.[v.nameKey];
              const price = calculatePrice(v, distance, airport);
              const isSelected = selectedVehicle === v.id;
              const name = vehicleT?.name || info?.name || v.nameKey;
              const category = vehicleT?.category || info?.category || '';
              const highlights = vehicleT?.features || info?.highlights || [];

              return (
                <div
                  key={v.id}
                  onClick={() => onSelect(v.id)}
                  className={`flex gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 hover:shadow-md ${
                    isSelected
                      ? 'border-2 shadow-md bg-white'
                      : 'border-warm-300 bg-white hover:border-stone-300'
                  }`}
                  style={isSelected ? { borderColor: '#8a7340' } : {}}
                >
                  {/* Vehicle image */}
                  <div className="flex-shrink-0 w-28 h-20 relative rounded-lg overflow-hidden bg-stone-50">
                    <Image
                      src={v.image}
                      alt={name}
                      fill
                      sizes="112px"
                      className="object-cover"
                      quality={60}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="sf text-[0.6rem] tracking-[0.15em] uppercase font-medium mb-0.5"
                      style={{ color: '#8a7340' }}>
                      {category}
                    </p>
                    <h3 className="font-serif text-base text-gray-900 font-normal leading-tight">{name}</h3>
                    <p className="sf text-[0.7rem] text-stone-400 mt-0.5">
                      {v.pax} pass. · {v.bags} bag.
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {highlights.slice(0, 3).map((h: string) => (
                        <span key={h} className="sf text-[0.6rem] px-2 py-0.5 rounded-full border border-warm-300 text-stone-500">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex-shrink-0 flex flex-col items-end justify-center">
                    <p className="font-serif text-xl font-medium" style={{ color: '#8a7340' }}>
                      {formatPrice(price)}
                    </p>
                    <p className="sf text-[0.6rem] text-stone-400 mt-0.5">prix fixe</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking summary */}
      {selected && (
        <section className="py-12 px-6 md:px-10 bg-white">
          <div className="max-w-2xl mx-auto">
            <button className="sf text-xs mb-6 hover:underline" style={{ color: '#8a7340' }}
              onClick={() => onSelect('')}>
              ← {t?.booking?.change_vehicle || 'Choisir un autre véhicule'}
            </button>

            <p className="tag mb-2">{t?.booking?.summary || 'Récapitulatif'}</p>

            <div className="rounded-2xl border border-warm-300 bg-warm-50 p-7">
              {/* Selected vehicle header */}
              <div className="flex items-center gap-4 pb-5 mb-5 border-b border-warm-200">
                <div className="w-20 h-14 relative rounded-lg overflow-hidden bg-white flex-shrink-0">
                  <Image
                    src={selected.image}
                    alt={VEHICLE_INFO[selected.id]?.name || selected.nameKey}
                    fill
                    sizes="80px"
                    className="object-cover"
                    quality={60}
                  />
                </div>
                <div>
                  <p className="font-serif text-lg text-gray-900">
                    {t?.fleet?.vehicles?.[selected.nameKey]?.name || VEHICLE_INFO[selected.id]?.name || selected.nameKey}
                  </p>
                  <p className="sf text-xs text-stone-400">
                    {VEHICLE_INFO[selected.id]?.category} · {selected.pax} pass.
                  </p>
                </div>
              </div>

              {/* Trip details */}
              {[
                [t?.booking?.departure || 'Départ', from],
                [t?.booking?.arrival || 'Arrivée', to],
                [t?.booking?.distance || 'Distance', `${distance} km · ${duration}`],
                [t?.booking?.included || 'Inclus', t?.booking?.included_items || 'Eau, Wi-Fi, chargeurs, suivi de vol'],
              ].map(([label, value], i) => (
                <div key={i} className="flex justify-between py-2.5 border-b border-warm-200 sf text-sm">
                  <span className="text-stone-400">{label}</span>
                  <span className="text-gray-700 text-right font-normal">{value}</span>
                </div>
              ))}

              {/* Total */}
              <div className="flex justify-between items-baseline pt-5 mt-2">
                <span className="sf text-sm text-stone-400">{t?.booking?.total || 'Prix total fixe'}</span>
                <span className="font-serif text-3xl font-medium" style={{ color: '#8a7340' }}>
                  {formatPrice(calculatePrice(selected, distance, airport))}
                </span>
              </div>

              {/* CTA */}
              <button className="btn-primary mt-6 w-full" onClick={goToReservation}>
                {t?.booking?.book_now || 'Réserver maintenant'} — {formatPrice(calculatePrice(selected, distance, airport))}
              </button>

              <p className="sf text-center text-[0.72rem] text-stone-400 mt-3">
                {t?.booking?.or_call || 'Ou appelez le +33 6 62 02 73 44 · WhatsApp disponible'}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

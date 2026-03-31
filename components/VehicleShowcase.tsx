'use client';

import { useState, useEffect } from 'react';
import {
  MercedesClasseE,
  MercedesClasseS,
  MercedesClasseV,
  BMWi7,
  MercedesSprinter,
} from '@/components/VehicleIllustration';

interface VehicleShowcaseProps {
  t: any;
}

const VEHICLE_KEYS = ['classe_e', 'classe_s', 'classe_v', 'bmw_i7', 'sprinter'];

const VEHICLE_ILLUSTRATIONS: Record<string, React.FC<{ className?: string }>> = {
  classe_e: MercedesClasseE,
  classe_s: MercedesClasseS,
  classe_v: MercedesClasseV,
  bmw_i7: BMWi7,
  sprinter: MercedesSprinter,
};

export default function VehicleShowcase({ t }: VehicleShowcaseProps) {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % VEHICLE_KEYS.length);
        setFade(true);
      }, 250);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDot = (i: number) => {
    setFade(false);
    setTimeout(() => { setIdx(i); setFade(true); }, 200);
  };

  const key = VEHICLE_KEYS[idx];
  const vehicle = t?.fleet?.vehicles?.[key];
  const Illustration = VEHICLE_ILLUSTRATIONS[key];

  if (!vehicle) return null;

  return (
    <section
      id="fleet"
      className="relative py-20 px-6 md:px-10 text-center section-divider gold-glow overflow-hidden"
      style={{ background: '#faf8f5' }}
    >
      <div className="relative z-10">
        <p className="tag-gold mb-3">{t?.fleet?.tag}</p>
        <h2 className="heading-section mb-1.5">
          {t?.fleet?.title}
          <em>{t?.fleet?.title_em}</em>
        </h2>
        <p className="font-sans text-sm text-stone-600 font-light mb-12">
          {t?.fleet?.subtitle}
        </p>

        {/* Vehicle illustration */}
        <div
          className="relative max-w-xl mx-auto mb-8 h-48 md:h-64 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: fade ? 1 : 0 }}
        >
          {Illustration && (
            <Illustration className="w-full h-full drop-shadow-lg" />
          )}
        </div>

        {/* Vehicle name */}
        <h3
          className="text-2xl font-normal mb-1 text-gray-900 transition-all duration-500"
          style={{ opacity: fade ? 1 : 0 }}
        >
          {vehicle.name}
        </h3>
        <p
          className="font-sans text-xs tracking-[0.2em] uppercase font-normal mb-1.5"
          style={{ color: '#8a7340' }}
        >
          {vehicle.category}
        </p>
        <p className="font-sans text-sm text-stone-500 font-light mb-5">
          {vehicle.pax} · {vehicle.bags} · {vehicle.from}
        </p>

        {/* Features */}
        {vehicle.features && (
          <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto mb-8">
            {vehicle.features.map((f: string, i: number) => (
              <span
                key={i}
                className="font-sans text-[0.72rem] text-stone-600 font-light px-3.5 py-1.5 rounded-full"
                style={{ border: '1px solid rgba(138,115,64,0.2)' }}
              >
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Dots nav */}
        <div className="flex gap-2 justify-center">
          {VEHICLE_KEYS.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === idx ? '1.25rem' : '0.375rem',
                background: i === idx ? '#8a7340' : 'rgba(138,115,64,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

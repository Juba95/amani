'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface VehicleShowcaseProps {
  t: any;
}

const VEHICLE_KEYS = ['classe_e', 'classe_s', 'classe_v', 'bmw_i7', 'sprinter'];

const VEHICLE_IMAGES: Record<string, string> = {
  classe_e: '/vehicles/mercedes-classe-e.png',
  classe_s: '/vehicles/mercedes-classe-s.png',
  classe_v: '/vehicles/mercedes-classe-v.png',
  bmw_i7:   '/vehicles/bmw-i7.png',
  sprinter: '/vehicles/mercedes-sprinter.png',
};

// Le Sprinter a un fond sombre → pas de mix-blend-mode multiply
const DARK_BG_VEHICLES = ['sprinter'];

export default function VehicleShowcase({ t }: VehicleShowcaseProps) {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % VEHICLE_KEYS.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDot = (i: number) => {
    setFade(false);
    setTimeout(() => { setIdx(i); setFade(true); }, 250);
  };

  const key = VEHICLE_KEYS[idx];
  const vehicle = t?.fleet?.vehicles?.[key];
  const imgSrc = VEHICLE_IMAGES[key];
  const isDarkBg = DARK_BG_VEHICLES.includes(key);

  if (!vehicle) return null;

  return (
    <section
      id="fleet"
      className="relative py-20 px-6 md:px-10 text-center section-divider overflow-hidden"
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

        {/* Vehicle photo */}
        <div
          className="relative max-w-2xl mx-auto mb-8 flex items-center justify-center transition-opacity duration-300"
          style={{
            opacity: fade ? 1 : 0,
            height: 'clamp(180px, 28vw, 320px)',
            // Fond sombre pour le Sprinter (fond noir sur la photo)
            background: isDarkBg ? 'linear-gradient(135deg, #1a1a1a, #0f0f0f)' : 'transparent',
            borderRadius: isDarkBg ? '1rem' : '0',
            overflow: 'hidden',
          }}
        >
          <Image
            src={imgSrc}
            alt={vehicle.name}
            fill
            sizes="(max-width: 768px) 90vw, 600px"
            className="object-contain"
            style={{ mixBlendMode: isDarkBg ? 'normal' : 'multiply' }}
            priority={idx === 0}
          />
        </div>

        {/* Vehicle name */}
        <h3
          className="text-2xl font-normal mb-1 text-gray-900 transition-opacity duration-300"
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

        {/* Feature tags */}
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

        {/* Dot navigation */}
        <div className="flex gap-2 justify-center">
          {VEHICLE_KEYS.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Vehicle ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === idx ? '1.25rem' : '0.375rem',
                background: i === idx ? '#8a7340' : 'rgba(138,115,64,0.25)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

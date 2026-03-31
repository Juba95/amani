'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface VehicleShowcaseProps {
  t: any;
}

const VEHICLE_KEYS = ['classe_e', 'classe_s', 'classe_v', 'bmw_i7', 'sprinter'];

const VEHICLE_IMAGES: Record<string, string> = {
  classe_e: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/mercedes_benz_classe_e_hr-dvpu.png',
  classe_s: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/s-Class-1-600x380.jpg',
  classe_v: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/PngItem_816085-600x380.png',
  bmw_i7: 'https://www.amani-limousines.com/wp-content/uploads/2023/06/bmwI7-redim.jpg',
  sprinter: '', // à ajouter quand tu as la photo
};

export default function VehicleShowcase({ t }: VehicleShowcaseProps) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % VEHICLE_KEYS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const key = VEHICLE_KEYS[idx];
  const vehicle = t?.fleet?.vehicles?.[key];
  const imgUrl = VEHICLE_IMAGES[key];

  if (!vehicle) return null;

  return (
    <section id="fleet" className="relative py-20 px-6 md:px-10 text-center section-divider gold-glow overflow-hidden"
      style={{ background: '#faf8f5' }}>
      <div className="relative z-10">
        <p className="tag-gold mb-3">{t?.fleet?.tag}</p>
        <h2 className="heading-section mb-1.5">
          {t?.fleet?.title}
          <em>{t?.fleet?.title_em}</em>
        </h2>
        <p className="font-sans text-sm text-stone-600 font-light mb-12">{t?.fleet?.subtitle}</p>

        {/* Vehicle image */}
        <div className="relative max-w-lg mx-auto mb-8 h-48 md:h-64 flex items-center justify-center">
          {imgUrl ? (
            <Image
              src={imgUrl}
              alt={vehicle.name}
              width={500}
              height={300}
              className="object-contain max-h-full transition-all duration-700"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(201,169,110,0.08))' }}
              unoptimized
            />
          ) : (
            <div className="text-7xl opacity-40">🚐</div>
          )}
        </div>

        {/* Vehicle info */}
        <h3 className="text-2xl font-normal mb-1 transition-all duration-500">{vehicle.name}</h3>
        <p className="font-sans text-xs text-gold-400 tracking-[0.2em] uppercase font-normal mb-1.5">
          {vehicle.category}
        </p>
        <p className="font-sans text-sm text-stone-500 font-light mb-5">
          {vehicle.pax} · {vehicle.bags} · {vehicle.from}
        </p>

        {/* Features */}
        {vehicle.features && (
          <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto mb-8">
            {vehicle.features.map((f: string, i: number) => (
              <span key={i} className="font-sans text-[0.72rem] text-stone-600 font-light px-3.5 py-1.5 border border-gold-400/[0.08] rounded-full">
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Dots */}
        <div className="flex gap-2 justify-center">
          {VEHICLE_KEYS.map((_, i) => (
            <button key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'w-5 bg-gold-400' : 'w-1.5 bg-gold-400/15 hover:bg-gold-400/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

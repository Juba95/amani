'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import BookingResults from '@/components/BookingResults';
import type { Locale } from '@/lib/vehicles';
import fr from '@/locales/fr.json';
import en from '@/locales/en.json';

const locales: Record<string, any> = { fr, en };

function toLocale(v: string | null): Locale {
  if (v === 'en' || v === 'ar' || v === 'zh') return v;
  return 'fr';
}

function DevisContent() {
  const params = useSearchParams();
  const from = params.get('from') || '';
  const to = params.get('to') || '';
  const km = Number(params.get('km')) || 35;
  const dur = params.get('dur') || '45 min';
  const lang: Locale = toLocale(params.get('lang'));

  const t = locales[lang] || fr;
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar t={t} locale={lang} />

      <main className="pt-24">
        {/* Header */}
        <section className="py-8 px-6 md:px-10 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="tag mb-2">
              {lang === 'en' ? 'Your quote' : 'Votre devis'}
            </p>
            <h1 className="heading">
              {lang === 'en' ? (
                <>Choose your <em>vehicle</em></>
              ) : (
                <>Choisissez votre <em>véhicule</em></>
              )}
            </h1>
            <p className="sf text-stone-500 mt-3 text-sm">
              {lang === 'en'
                ? 'Fixed price, all-inclusive — select the vehicle that suits you.'
                : 'Prix fixe tout compris — sélectionnez le véhicule qui vous convient.'}
            </p>
          </div>
        </section>

        {/* Results */}
        <BookingResults
          t={t}
          from={from}
          to={to}
          distance={km}
          duration={dur}
          selectedVehicle={selectedVehicle}
          onSelect={(id) => setSelectedVehicle(id)}
          resultsRef={{ current: null }}
        />
      </main>

      <CTA t={t} />
      <Footer t={t} />
    </div>
  );
}

export default function DevisPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="sf text-stone-400 text-sm">Chargement…</p>
      </div>
    }>
      <DevisContent />
    </Suspense>
  );
}

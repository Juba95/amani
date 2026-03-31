'use client';

import { useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsRow from '@/components/StatsRow';
import VehicleShowcase from '@/components/VehicleShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import EventsGrid from '@/components/EventsGrid';
import TrustStrip from '@/components/TrustStrip';
import WhyUs from '@/components/WhyUs';
import BookingResults from '@/components/BookingResults';
import { CTA, Footer } from '@/components/CTAFooter';
import { RTL_LOCALES } from '@/lib/vehicles';
import type { Locale } from '@/lib/vehicles';

import en from '@/locales/en.json';
import ar from '@/locales/ar.json';
import zh from '@/locales/zh.json';

const translations: Record<string, any> = { en, ar, zh };

export default function LocalePage() {
  const params = useParams();
  const locale = (params.lang as Locale) || 'en';
  const t = translations[locale] || translations.en;
  const isRtl = RTL_LOCALES.includes(locale);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (fromVal: string, toVal: string) => {
    if (!fromVal || !toVal) return;

    setSearchLoading(true);
    setShowResults(false);
    setSelectedVehicle(null);

    try {
      const res = await fetch('/api/distance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ origin: fromVal, destination: toVal }),
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
      setSearchLoading(false);
    }
  };

  const handleSelectVehicle = (id: string) => {
    setSelectedVehicle(id || null);
    if (id) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 100);
    }
  };

  return (
    <main
      className="min-h-screen bg-white text-gray-900"
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={locale}
    >
      <Navbar t={t} locale={locale} />

      {/* Hero with booking form */}
      <Hero
        t={t}
        from={from}
        to={to}
        setFrom={setFrom}
        setTo={setTo}
        onSearch={handleSearch}
        loading={searchLoading}
      />

      {/* Stats */}
      <StatsRow t={t} />

      {/* Services */}
      <ServicesGrid t={t} />

      {/* Why choose us + Google reviews + FAQ */}
      <WhyUs t={t} />

      {/* Fleet showcase */}
      <VehicleShowcase t={t} />

      {/* Process / How it works */}
      <ProcessSection t={t} />

      {/* Video section */}
      <VideoSection />

      {/* Events */}
      <EventsGrid t={t} />

      {/* Booking results (shown after search) */}
      {showResults && distance && duration && (
        <BookingResults
          t={t}
          from={from}
          to={to}
          distance={distance}
          duration={duration}
          selectedVehicle={selectedVehicle}
          onSelect={handleSelectVehicle}
          resultsRef={resultsRef}
        />
      )}

      {/* Trust strip */}
      <TrustStrip t={t} />

      {/* CTA + Footer */}
      <CTA t={t} />
      <Footer t={t} locale={locale} />
    </main>
  );
}

// ── Video section ──────────────────────────────────────────────────────────
function VideoSection() {
  return (
    <section className="py-20 px-6 md:px-10" style={{ background: '#0a0908' }}>
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
          style={{ paddingBottom: '56.25%', background: '#111' }}>
          <iframe
            src="https://www.youtube.com/embed/Tgd6gZt9DvQ?rel=0&modestbranding=1&color=white"
            title="Amani Limousines — Service de chauffeur privé à Paris"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </section>
  );
}

// ── Process section ────────────────────────────────────────────────────────
function ProcessSection({ t }: { t: any }) {
  const steps = t?.process?.steps ?? [];

  return (
    <section className="py-20 px-6 md:px-10 section-divider">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="tag-gold mb-3">{t?.process?.tag}</p>
          <h2 className="heading-section">
            {t?.process?.title}{' '}
            <em className="italic" style={{ color: '#8a7340' }}>{t?.process?.title_em}</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step: any, i: number) => (
            <div key={i} className="text-center relative">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-sans text-xs font-medium"
                style={{ background: 'rgba(138,115,64,0.1)', color: '#8a7340', border: '1px solid rgba(138,115,64,0.3)' }}
              >
                {step.num}
              </div>
              <h3 className="font-serif text-base font-normal text-gray-900 mb-2">{step.title}</h3>
              <p className="font-sans text-xs text-stone-500 font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

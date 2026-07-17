'use client';

import { useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VehicleShowcase from '@/components/VehicleShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import WhyUs from '@/components/WhyUs';
import AboutSection from '@/components/AboutSection';
import BookingResults from '@/components/BookingResults';
import { CTA, Footer } from '@/components/CTAFooter';
import { SocialProofStrip, ExperiencesSection, DestinationsSection, RoutesStrip, RecruitBlock } from '@/components/HomeSections';
import type { MapCountry } from '@/components/EuropeMap';
import { RTL_LOCALES } from '@/lib/vehicles';
import type { Locale } from '@/lib/vehicles';

import en from '@/locales/en.json';
import es from '@/locales/es.json';
import ar from '@/locales/ar.json';
import zh from '@/locales/zh.json';

const translations: Record<string, any> = { en, es, ar, zh };

export default function LocaleHomeClient({ countries }: { countries: Record<string, MapCountry> }) {
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

      setDistance(data?.km ?? 35);
      setDuration(data?.duration ?? '45 min');
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
        countries={countries}
        locale={locale}
      />

      {/* À propos — Lounes (traduit) */}
      <AboutSection t={t} />

      {/* Sections maquette — EN uniquement pour l'instant */}
      {locale === 'en' && (
        <>
          <ExperiencesSection locale="en" />
          <DestinationsSection locale="en" />
          <RoutesStrip locale="en" />
        </>
      )}

      {/* Flotte */}
      <VehicleShowcase t={t} />

      {/* Services */}
      <ServicesGrid t={t} locale={locale} />

      {/* Why choose us + Google reviews + FAQ */}
      <WhyUs t={t} />

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

      {/* CTA + Footer */}
      {locale === 'en' && <RecruitBlock locale="en" />}

      <CTA t={t} />
      <Footer t={t} locale={locale} />
    </main>
  );
}


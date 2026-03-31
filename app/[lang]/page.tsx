'use client';

import { useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VehicleShowcase from '@/components/VehicleShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import EventsGrid from '@/components/EventsGrid';
import TrustStrip from '@/components/TrustStrip';
import BookingResults from '@/components/BookingResults';
import { CTA, Footer } from '@/components/CTAFooter';
import { PREDEFINED_ROUTES, SUPPORTED_LOCALES, RTL_LOCALES } from '@/lib/vehicles';
import type { Locale } from '@/lib/vehicles';

import fr from '@/locales/fr.json';
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';
import zh from '@/locales/zh.json';

const translations: Record<string, any> = { fr, en, ar, zh };

export default function LocalePage() {
  const params = useParams();
  const locale = (params.lang as Locale) || 'fr';
  const t = translations[locale] || translations.fr;
  const isRtl = RTL_LOCALES.includes(locale);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [distance, setDistance] = useState<number | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearch = (fromVal: string, toVal: string) => {
    if (!fromVal || !toVal) return;
    const popular = t?.routes?.popular?.find(
      (r: any) =>
        fromVal.toLowerCase().includes(r.from.toLowerCase()) &&
        toVal.toLowerCase().includes(r.to.toLowerCase())
    );
    const km = popular?.km || Math.floor(Math.random() * 45) + 15;
    const dur = popular?.time || `${Math.floor(km * 1.3)} min`;
    setDistance(km);
    setDuration(dur);
    setShowResults(true);
    setSelectedVehicle(null);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  return (
    <main className="min-h-screen bg-dark-500 text-stone-200" dir={isRtl ? 'rtl' : 'ltr'} lang={locale}>
      <Navbar t={t} locale={locale} />
      <Hero t={t} from={from} to={to} setFrom={setFrom} setTo={setTo} onSearch={handleSearch} />
      <VehicleShowcase t={t} />
      <ServicesGrid t={t} />
      <TrustStrip t={t} />
      {showResults && distance && duration && (
        <BookingResults t={t} from={from} to={to} distance={distance} duration={duration}
          selectedVehicle={selectedVehicle} onSelect={(id) => setSelectedVehicle(id || null)} resultsRef={resultsRef} />
      )}
      <EventsGrid t={t} />
      <CTA t={t} />
      <Footer t={t} />
    </main>
  );
}

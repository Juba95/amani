'use client';

import { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VehicleShowcase from '@/components/VehicleShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import EventsGrid from '@/components/EventsGrid';
import TrustStrip from '@/components/TrustStrip';
import BookingResults from '@/components/BookingResults';
import { CTA, Footer } from '@/components/CTAFooter';

import fr from '@/locales/fr.json';

export default function HomePage() {
  const t = fr;
  const locale = 'fr' as const;

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
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar t={t} locale={locale} />

      <Hero
        t={t}
        from={from}
        to={to}
        setFrom={setFrom}
        setTo={setTo}
        onSearch={handleSearch}
        loading={searchLoading}
      />

      <VehicleShowcase t={t} />
      <ServicesGrid t={t} />
      <TrustStrip t={t} />

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

      <EventsGrid t={t} />
      <CTA t={t} />
      <Footer t={t} />
    </main>
  );
}

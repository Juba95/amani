'use client';

import { useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero, { type SearchOptions } from '@/components/Hero';
import VehicleShowcase from '@/components/VehicleShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import WhyUs from '@/components/WhyUs';
import AboutSection from '@/components/AboutSection';
import BookingResults from '@/components/BookingResults';
import { CTA, Footer } from '@/components/CTAFooter';
import { SocialProofStrip, ExperiencesSection, DestinationsSection, RoutesStrip, RecruitBlock } from '@/components/HomeSections';
import ParallaxBand from '@/components/ParallaxBand';
import type { MapCountry } from '@/components/EuropeMap';
import { RTL_LOCALES } from '@/lib/vehicles';
import type { Locale } from '@/lib/vehicles';

import en from '@/locales/en.json';
import de from '@/locales/de.json';
import es from '@/locales/es.json';
import ar from '@/locales/ar.json';
import zh from '@/locales/zh.json';

const translations: Record<string, any> = { en, de, es, ar, zh };

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
  const [mode, setMode] = useState<'transfer' | 'disposal'>('transfer');
  const [hours, setHours] = useState(4);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (fromVal: string, toVal: string, opts?: SearchOptions) => {
    // Mise à disposition : le prix vient du tarif horaire, aucune distance à calculer.
    if (opts?.mode === 'disposal') {
      if (!fromVal) return;
      setMode('disposal');
      setHours(opts.hours ?? 4);
      setSelectedVehicle(null);
      setDistance(0);
      setDuration('');
      setShowResults(true);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
      return;
    }

    if (!fromVal || !toVal) return;

    setMode('transfer');
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

      {/* Sections maquette — EN et DE (les autres locales n'ont pas encore le contenu) */}
      {(locale === 'en' || locale === 'de') && (
        <>
          <ExperiencesSection locale={locale} />
          <DestinationsSection locale={locale} />
          <ParallaxBand
            image="/images/city-hero/chauffeur-prive-paris.jpg"
            tag={locale === 'de' ? 'Privatchauffeur-Service' : 'Private chauffeur service'}
            title={locale === 'de'
              ? 'Ein Chauffeurservice der Spitzenklasse, wohin Sie Europa auch führt'
              : 'A luxury chauffeur service, wherever Europe takes you'}
            subtitle={locale === 'de'
              ? 'Von Paris bis an die Riviera: Ihr Wagen mit Chauffeur wartet — Festpreise, Mercedes-Flotte, rund um die Uhr verfügbar.'
              : 'From Paris to the Riviera, your private car and driver await — fixed prices, Mercedes fleet, available around the clock.'}
            ctaLabel={locale === 'de' ? 'Alle Ziele' : 'All destinations'}
            ctaHref="/en/destinations"
          />
          <RoutesStrip locale={locale} />
        </>
      )}

      {/* Flotte */}
      <VehicleShowcase t={t} />

      {/* Services */}
      <ServicesGrid t={t} locale={locale} />

      {/* Why choose us + Google reviews + FAQ */}
      <WhyUs t={t} />

      {/* Booking results (shown after search) */}
      {showResults && distance !== null && duration !== null && (
        <BookingResults
          t={t}
          from={from}
          to={to}
          distance={distance}
          duration={duration}
          selectedVehicle={selectedVehicle}
          onSelect={handleSelectVehicle}
          resultsRef={resultsRef}
          mode={mode}
          hours={hours}
        />
      )}

      {/* CTA + Footer */}
      {(locale === 'en' || locale === 'de') && <RecruitBlock locale={locale} />}

      <CTA t={t} />
      <Footer t={t} locale={locale} />
    </main>
  );
}


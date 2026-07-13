'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VehicleShowcase from '@/components/VehicleShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import WhyUs from '@/components/WhyUs';
import AboutSection from '@/components/AboutSection';
import { CTA, Footer } from '@/components/CTAFooter';
import { SocialProofStrip, ExperiencesSection, DestinationsSection, RoutesStrip, RecruitBlock } from '@/components/HomeSections';
import type { MapCountry } from '@/components/EuropeMap';

import fr from '@/locales/fr.json';

export default function HomeClient({ countries }: { countries: Record<string, MapCountry> }) {
  const t = fr;
  const locale = 'fr' as const;
  const router = useRouter();

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = async (fromVal: string, toVal: string) => {
    if (!fromVal || !toVal) return;

    setSearchLoading(true);

    try {
      const res = await fetch('/api/distance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ origin: fromVal, destination: toVal }),
      });
      const data = await res.json();

      const params = new URLSearchParams({
        from: fromVal, to: toVal,
        km: String(data.km),
        dur: data.duration,
        lang: 'fr',
      });
      router.push(`/devis?${params.toString()}`);
    } catch {
      const params = new URLSearchParams({
        from: fromVal, to: toVal,
        km: '35',
        dur: '45 min',
        lang: 'fr',
      });
      router.push(`/devis?${params.toString()}`);
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar t={t} locale={locale} />

      {/* Hero with booking form → redirects to /devis */}
      <Hero
        t={t}
        from={from}
        to={to}
        setFrom={setFrom}
        setTo={setTo}
        onSearch={handleSearch}
        loading={searchLoading}
        countries={countries}
        locale="fr"
      />

      {/* Preuve sociale */}
      <SocialProofStrip locale="fr" />

      {/* À propos — Lounes */}
      <AboutSection t={t} />

      {/* Expériences signature */}
      <ExperiencesSection locale="fr" />

      {/* Top destinations */}
      <DestinationsSection locale="fr" />

      {/* Trajets populaires */}
      <RoutesStrip locale="fr" />

      {/* Flotte */}
      <VehicleShowcase t={t} />

      {/* Services */}
      <ServicesGrid t={t} locale={locale} />

      {/* Pourquoi nous + avis Google + FAQ */}
      <WhyUs t={t} />

      {/* Recrutement chauffeurs */}
      <RecruitBlock locale="fr" />

      {/* CTA + Footer */}
      <CTA t={t} />
      <Footer t={t} />
    </main>
  );
}

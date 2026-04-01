'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsRow from '@/components/StatsRow';
import VehicleShowcase from '@/components/VehicleShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import EventsGrid from '@/components/EventsGrid';
import TrustStrip from '@/components/TrustStrip';
import WhyUs from '@/components/WhyUs';
import { CTA, Footer } from '@/components/CTAFooter';

import fr from '@/locales/fr.json';

export default function HomePage() {
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
      />

      {/* Stats: 500+ transferts, 4.9★, 15 ans, 300+ véhicules */}
      <StatsRow t={t} />

      {/* Services */}
      <ServicesGrid t={t} locale={locale} />

      {/* Why choose us + Google reviews + FAQ */}
      <WhyUs t={t} />

      {/* Fleet showcase */}
      <VehicleShowcase t={t} />

      {/* Process / How it works */}
      <ProcessSection t={t} />

      {/* Events */}
      <EventsGrid t={t} />

      {/* Trust strip */}
      <TrustStrip t={t} />

      {/* CTA + Footer */}
      <CTA t={t} />
      <Footer t={t} />
    </main>
  );
}

// ── Process / "Comment ça marche" section ──────────────────────────────────
function ProcessSection({ t }: { t: any }) {
  const steps = t?.process?.steps ?? [
    {
      num: '01',
      title: 'Demandez votre devis',
      desc: 'Renseignez votre itinéraire en ligne ou appelez-nous. Devis immédiat, prix fixe garanti.',
    },
    {
      num: '02',
      title: 'Confirmation instantanée',
      desc: 'Vous recevez une confirmation par email et SMS avec le nom et la photo de votre chauffeur.',
    },
    {
      num: '03',
      title: 'Prise en charge VIP',
      desc: 'Votre chauffeur est présent 15 minutes avant l\'heure prévue. Suivi de vol en temps réel.',
    },
    {
      num: '04',
      title: 'Voyage en toute sérénité',
      desc: 'Profitez du trajet dans un véhicule premium. Wi-Fi, eau, chargeurs — tout est prévu.',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 section-divider">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="tag-gold mb-3">{t?.process?.tag ?? 'Comment ça marche'}</p>
          <h2 className="heading-section">
            {t?.process?.title ?? 'Réserver en'}{' '}
            <em>{t?.process?.title_em ?? '4 étapes simples'}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step: any, i: number) => (
            <div key={i} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px"
                  style={{ background: 'rgba(138,115,64,0.2)' }}
                />
              )}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 font-sans font-semibold text-sm transition-all duration-200 group-hover:scale-105"
                style={{ background: '#fdfbf7', border: '1.5px solid rgba(138,115,64,0.3)', color: '#8a7340' }}
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

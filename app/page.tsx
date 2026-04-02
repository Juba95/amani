'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
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

      {/* À propos — Lounes */}
      <AboutSection />

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

// ── À propos — Lounes ────────────────────────────────────────────────────
const SPOKEN_LANGUAGES = [
  { flag: '🇬🇧', label: 'Anglais',   href: '/chauffeur-anglophone' },
  { flag: '🇸🇦', label: 'Arabe',     href: '/chauffeur-arabophone' },
  { flag: '🇪🇸', label: 'Espagnol',  href: '/chauffeur-hispanophone' },
  { flag: '🇩🇪', label: 'Allemand',  href: '/chauffeur-germanophone' },
  { flag: '🇨🇳', label: 'Mandarin',  href: '/chauffeur-mandarin' },
  { flag: '🇰🇷', label: 'Coréen',    href: '/chauffeur-coreen' },
  { flag: '🇯🇵', label: 'Japonais',  href: '/chauffeur-japonais' },
  { flag: '🇷🇺', label: 'Russe',     href: '/chauffeur-russophone' },
];

function AboutSection() {
  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo de Lounes */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '4/5' }}>
              <Image
                src="/lounes-about.png"
                alt="Lounes — Fondateur d'Amani Limousines, chauffeur privé parlant 8 langues"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain"
                quality={80}
              />
            </div>
            {/* Badge flottant */}
            <div
              className="absolute -bottom-4 -right-4 lg:-right-6 bg-white rounded-xl px-5 py-3 shadow-lg border"
              style={{ borderColor: '#ece9e3' }}
            >
              <p className="font-serif text-2xl font-normal" style={{ color: '#8a7340' }}>10+</p>
              <p className="font-sans text-[0.6rem] tracking-[0.1em] uppercase text-stone-500">langues parlées</p>
            </div>
          </div>

          {/* Texte de présentation */}
          <div>
            <p
              className="font-sans text-[0.6rem] tracking-[0.2em] uppercase font-medium mb-4"
              style={{ color: '#8a7340' }}
            >
              À propos
            </p>
            <h2
              className="font-serif font-normal text-gray-900 mb-5"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.2 }}
            >
              Des chauffeurs privés
              <br />
              <em className="italic" style={{ color: '#8a7340' }}>qui parlent votre langue</em>
            </h2>

            <div className="space-y-4 font-sans text-sm text-stone-600 leading-relaxed">
              <p>
                Quand votre chauffeur parle votre langue, le trajet change complètement.
                Ce n'est plus juste un déplacement — vous pouvez échanger, poser des questions,
                vous faire comprendre sans effort.
              </p>
              <p>
                Nos chauffeurs parlent plus de 10 langues. Concrètement, ça veut dire accueillir
                des hommes d'affaires saoudiens à Roissy en arabe, discuter d'un itinéraire
                avec une famille japonaise, ou briefer une délégation allemande sur le programme
                du jour. Ils connaissent Paris sur le bout des doigts et savent s'adapter
                à chaque culture, parce qu'ils ont été formés pour ça.
              </p>
              <p>
                Chez Amani, le service ne s'arrête pas au volant. On anticipe, on conseille,
                on gère les détails. Vous, vous montez en voiture et vous profitez du trajet.
              </p>
            </div>

            {/* Langues parlées — badges cliquables */}
            <div className="mt-8">
              <p className="font-sans text-[0.6rem] tracking-[0.15em] uppercase text-stone-400 mb-3">
                Langues disponibles
              </p>
              <div className="flex flex-wrap gap-2">
                {SPOKEN_LANGUAGES.map((lang) => (
                  <Link
                    key={lang.href}
                    href={lang.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs border transition-colors hover:border-gold-400 hover:text-gold-400"
                    style={{ borderColor: '#e5e2db', color: '#666' }}
                  >
                    <span>{lang.flag}</span>
                    {lang.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/reservation" className="btn-primary inline-block text-sm">
                Réserver un chauffeur
              </Link>
              <Link
                href="/contact"
                className="inline-block font-sans text-xs tracking-wide px-5 py-3 rounded-xl border transition-colors hover:border-gold-400 hover:text-gold-400"
                style={{ borderColor: '#ddd', color: '#666' }}
              >
                Nous contacter
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
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

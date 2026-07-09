import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/japanese-speaking-chauffeur-paris';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Japanese-Speaking Chauffeur in Paris — Private Driver | Amani Limousines',
  description: 'Private chauffeur fluent in Japanese, available across Paris, France and Europe. Haute couture, Michelin-starred dining, business travel. Available 24/7.',
  canonical: 'https://www.amani-limousines.com/en/japanese-speaking-chauffeur-paris',
  alternates: {
    languages: {
      fr: 'https://www.amani-limousines.com/chauffeur-japonais',
      'x-default': 'https://www.amani-limousines.com/en/japanese-speaking-chauffeur-paris',
    },
  },
});

const services = [
  {
    title: 'Airport welcome, Japanese-style',
    text:
      'Your chauffeur arrives early, vehicle prepared, chilled water on board. You are greeted in Japanese, with the etiquette you would expect. Luggage is taken care of before you need to ask. The drive to your hotel unfolds quietly, exactly as you prefer.',
  },
  {
    title: 'Haute couture and Parisian ateliers',
    text:
      'Our chauffeurs know the essential addresses of Parisian fashion: rue Cambon, Saint-Germain, Faubourg Saint-Honoré. They handle your transfers between couture houses and showrooms, drop you at the door and return at the agreed time. Speaking Japanese removes any risk of misunderstanding about schedules or addresses.',
  },
  {
    title: 'Michelin-starred dining and gastronomy',
    text:
      'Your chauffeur knows the reference tables of Paris: Guy Savoy, Le Cinq at the George V, the finest addresses of the 11th arrondissement. He delivers you at the exact time of your reservation — because in starred gastronomy, punctuality matters as much as the meal itself.',
  },
  {
    title: 'Business travel for Japanese executives',
    text:
      'Major Japanese companies — Toyota, Sony, Mitsubishi — have offices in Paris. For executives on assignment, your chauffeur handles the daily transfers with the rigour a demanding schedule requires. He knows the Opéra district, heart of the Japanese community in Paris, and communicates directly in Japanese.',
  },
];

const situations = [
  'Haute couture — shows, ateliers and showrooms of the Golden Triangle',
  'Gastronomic tours of Paris’s Michelin-starred restaurants',
  'Japanese executives and directors on business trips',
  'The Opéra district and its Japanese addresses — restaurants, bookshops, groceries',
  'Honeymoons in Paris for Japanese couples',
  'Trade shows — Maison & Objet, Paris Photo, SIAL',
  'Excursions to Giverny, Versailles and Burgundy',
  'Official delegations and protocol-level welcome',
];

export default function JapaneseSpeakingChauffeurPage() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Japanese-Speaking Chauffeur</p>
          <h1 className="heading mt-3">
            {c('h1', 'Japanese-speaking private chauffeur in Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Amani Limousines provides Japanese-speaking private chauffeurs in Paris. Our chauffeurs understand Japanese standards of hospitality: rigorous punctuality, immaculate presentation, a spotless vehicle and absolute discretion. Every pick-up is organised with the care a guest arriving from Tokyo would expect. Available 24/7.')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Book now
            </Link>
            <a
              href="tel:+33687169747"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              +33 6 87 16 97 47
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">What we do for you, in Japanese</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Airports, haute couture, fine dining, business travel —
            in Japanese, with the rigour the occasion demands.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{s.title}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Who we drive</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {situations.map((s) => (
              <div key={s} className="flex items-start gap-3 p-4 rounded-xl bg-warm-50 border border-warm-200">
                <span style={{ color: '#8a7340' }}>✓</span>
                <p className="sf text-sm text-stone-600">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading mb-4">Book your Japanese-speaking chauffeur</h2>
          <p className="sf text-stone-500 mb-8">
            Available 24/7. Booking confirmed within 30 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Book now
            </Link>
            <Link
              href="/en/contact"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Related services</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Private chauffeur Paris', href: '/en/private-chauffeur-paris' },
              { label: 'CDG airport transfer', href: '/en/cdg-airport-transfer' },
              { label: 'Private excursion', href: '/en/private-excursion' },
              { label: 'Meet & Greet', href: '/en/meet-and-greet' },
              { label: 'Hourly hire', href: '/en/hourly-hire' },
              { label: 'Events', href: '/en/events' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block text-center py-4 px-6 border border-stone-200 font-sans text-sm text-gray-700 hover:border-stone-500 transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

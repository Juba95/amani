'use client';

import { useState, useEffect } from 'react';

// ── Elfsight Google Reviews embed ──────────────────────────────────────────
const ELFSIGHT_WIDGET_ID = '8067c73a-9a27-46dd-922c-75d522de6d0e';

function ElfsightReviews() {
  useEffect(() => {
    // Load Elfsight platform script once
    if (document.querySelector('script[data-elfsight]')) return;
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    script.setAttribute('data-elfsight', 'true');
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`}
      data-elfsight-app-lazy
    />
  );
}

interface WhyUsProps {
  t: any;
}

// SVG icons for the "why us" cards
const WHY_ICONS = [
  // Fixed price
  <svg key="price" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 9v3l2 2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Elite chauffeurs
  <svg key="driver" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round"/>
    <path d="M16 3.5l1 1.5-1 1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Flight tracking
  <svg key="flight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M21 16.5L15.5 11l1-7.5L14 3l-4 6H5L3 11l4.5 1.5L6 17l3 1 2-3 3 3 1-3 3 1z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Fleet
  <svg key="fleet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <rect x="1" y="10" width="18" height="8" rx="2"/>
    <path d="M4 10V8a2 2 0 012-2h8a2 2 0 012 2v2" strokeLinecap="round"/>
    <circle cx="6" cy="18" r="2"/>
    <circle cx="14" cy="18" r="2"/>
    <path d="M20 10h2a1 1 0 011 1v5h-3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // 30 min response
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Discretion
  <svg key="lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <rect x="5" y="11" width="14" height="10" rx="2"/>
    <path d="M8 11V7a4 4 0 118 0v4" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="1.5" fill="currentColor" strokeWidth="0"/>
  </svg>,
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4" fill={i <= rating ? '#8a7340' : '#ddd'}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function WhyUs({ t }: WhyUsProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whyItems = t?.whyus?.items ?? [];
  const reviews = t?.reviews?.items ?? [];
  const faqItems = t?.faq?.items ?? [];

  return (
    <>
      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 px-6 md:px-10" style={{ background: '#fff' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="tag-gold mb-3">{t?.whyus?.tag ?? 'Pourquoi nous choisir'}</p>
            <h2 className="heading-section">
              {t?.whyus?.title ?? 'Un service qui fait'}{' '}
              <em>{t?.whyus?.title_em ?? 'la différence'}</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item: any, i: number) => (
              <div
                key={i}
                className="group p-7 rounded-2xl border transition-all duration-200"
                style={{ borderColor: '#ece9e3', background: '#fdfbf7' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#8a7340';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#ece9e3';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <div className="mb-4" style={{ color: '#8a7340' }}>
                  {WHY_ICONS[i] ?? null}
                </div>
                <h3 className="font-serif text-base font-normal text-gray-900 mb-2">{item.title}</h3>
                <p className="font-sans text-xs text-stone-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <section className="py-20 px-6 md:px-10 section-divider">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="tag-gold mb-3">{t?.reviews?.tag ?? 'Avis clients'}</p>
            <h2 className="heading-section">
              {t?.reviews?.title ?? 'Ce que disent'}{' '}
              <em>{t?.reviews?.title_em ?? 'nos clients'}</em>
            </h2>
            {/* Google rating badge */}
            <div className="inline-flex items-center gap-3 mt-5 px-5 py-2.5 rounded-full border" style={{ borderColor: '#ece9e3', background: '#fff' }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-sans text-sm font-semibold text-gray-800">4.9</span>
              <StarRating rating={5} />
              <span className="font-sans text-xs text-stone-400">· Google</span>
            </div>
          </div>

          {/* ── Elfsight widget — vrais avis Google en temps réel ── */}
          <ElfsightReviews />

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=Private+Chauffeur+AMANI+LIMOUSINES+Avis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs font-medium px-5 py-2.5 rounded-full border transition-all hover:border-gold-400 hover:text-gold-400"
              style={{ borderColor: '#ddd', color: '#666' }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              {t?.reviews?.google_link ?? 'Voir tous les avis sur Google'}
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="py-20 px-6 md:px-10" style={{ background: '#fff' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="tag-gold mb-3">{t?.faq?.tag ?? 'Questions fréquentes'}</p>
            <h2 className="heading-section">
              {t?.faq?.title ?? 'Tout ce que vous'}{' '}
              <em>{t?.faq?.title_em ?? 'devez savoir'}</em>
            </h2>
          </div>

          <div className="space-y-2">
            {faqItems.map((item: any, i: number) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden transition-all"
                style={{ borderColor: openFaq === i ? '#8a7340' : '#ece9e3' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
                  style={{ background: openFaq === i ? '#fdfbf7' : '#fff' }}
                >
                  <span className="font-sans text-sm font-medium text-gray-800 pr-4">{item.q}</span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200"
                    style={{
                      background: openFaq === i ? '#8a7340' : '#f3f1ed',
                      transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                    }}
                  >
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill={openFaq === i ? '#fff' : '#8a7340'}>
                      <path d="M6 2v8M2 6h8" stroke={openFaq === i ? '#fff' : '#8a7340'} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5" style={{ background: '#fdfbf7' }}>
                    <p className="font-sans text-sm text-stone-500 font-light leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

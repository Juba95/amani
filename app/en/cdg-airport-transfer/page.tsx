import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';

export const metadata: Metadata = {
  title: 'Private Driver CDG Airport Paris — Charles de Gaulle Transfer | Amani Limousines',
  description:
    'Book a private driver at CDG airport Paris. Fixed price, flight tracking, VIP meet & greet. Mercedes S-Class and vans available 24/7. From €125.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/cdg-airport-transfer',
    languages: { fr: 'https://www.amani-limousines.com/transfert-aeroport-cdg' },
  },
  openGraph: {
    title: 'Private Driver CDG Airport Paris | Amani Limousines',
    description: 'CDG airport transfer with private driver. Fixed price, flight tracking.',
    url: 'https://www.amani-limousines.com/en/cdg-airport-transfer',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Private driver CDG airport Paris',
  provider: { '@type': 'LocalBusiness', name: 'Amani Limousines' },
  areaServed: 'Charles de Gaulle Airport, Paris',
  description: 'Private transfer service to and from CDG airport. Fixed price, 24/7 availability.',
  offers: [
    { '@type': 'Offer', name: 'Mercedes E-Class — CDG', price: '125', priceCurrency: 'EUR' },
    { '@type': 'Offer', name: 'Mercedes S-Class — CDG', price: '225', priceCurrency: 'EUR' },
  ],
};

export default function CDGAirportTransferEN() {
  return (
    <SEOLayoutEN>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Charles de Gaulle Airport</p>
          <h1 className="heading mt-3">
            <strong>Private driver CDG airport Paris</strong> —{' '}
            <em>fixed price, no surprises</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Charles de Gaulle handles over 67 million passengers a year. Finding a reliable{' '}
            <strong>private chauffeur at CDG Paris</strong> who actually knows the terminal layout
            — and is there when you land — makes all the difference. Amani Limousines covers
            all CDG terminals seven days a week, around the clock, at a price agreed before
            your flight takes off.
          </p>
        </div>
      </section>

      {/* Terminals */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">All CDG terminals covered</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            CDG is divided into Terminal 1 (intercontinental, non-Air France carriers),
            Terminal 2 (T2A through T2G, mainly Air France and partners), and Terminal 3
            (charter and low-cost). Each terminal has its own arrival exit, and a driver who
            doesn't know the difference will cost you 20 minutes. Your{' '}
            <strong>CDG Paris private chauffeur</strong> positions at the correct arrivals exit,
            name board in hand, before your bags hit the carousel.
          </p>
        </div>
      </section>

      {/* Flight tracking + pricing */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Real-time flight tracking</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Delays are monitored from Eurocontrol data. If your aircraft lands 45 minutes late,
              your driver knows before you do and adjusts accordingly. You never pay extra
              waiting time caused by airline delays — the fare stays exactly what was quoted.
            </p>
          </div>
          <div>
            <h2 className="heading">Fixed fares — CDG to Paris</h2>
            <div className="mt-4 space-y-3">
              {[
                { v: 'Mercedes E-Class (1–3 pax)', p: 'from €125' },
                { v: 'Mercedes S-Class (1–3 pax)', p: 'from €225' },
                { v: 'Mercedes V-Class (up to 7 pax)', p: 'from €125' },
                { v: 'BMW i7 (1–3 pax)', p: 'from €250' },
              ].map((r) => (
                <div key={r.v} className="flex justify-between items-center py-2 border-b border-warm-200">
                  <span className="sf text-sm text-gray-700">{r.v}</span>
                  <span className="sf font-semibold text-sm" style={{ color: '#8a7340' }}>{r.p}</span>
                </div>
              ))}
            </div>
            <p className="sf text-xs text-stone-400 mt-3">All inclusive · Tolls included</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {[
              {
                q: 'How far in advance should I book?',
                a: 'We recommend 24–48 hours for standard transfers. Last-minute bookings are accepted up to 2 hours before pickup, subject to availability.',
              },
              {
                q: 'What happens if my flight is cancelled?',
                a: 'If you notify us at least 3 hours before the scheduled pickup, the booking is refunded or rescheduled at no charge.',
              },
              {
                q: 'Is free waiting time included?',
                a: 'Yes — 60 minutes of free waiting after the actual landing time. Beyond that, a hourly supplement applies and you will be notified by SMS.',
              },
              {
                q: 'Can I book multiple vehicles for a delegation?',
                a: 'Absolutely. We regularly coordinate convoys of 3 to 15 vehicles for official delegations, with centralized dispatch and radio communication between drivers.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-warm-200 pb-6">
                <p className="sf font-medium text-gray-900">{q}</p>
                <p className="sf text-stone-500 mt-2 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/hourly-hire';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Hourly Hire Private Driver Paris — Chauffeur by the Hour | Amani Limousines',
  description: 'Hire a private driver in Paris by the hour. Half-day, full day or multi-day. Vehicle waits during meetings — no meter running. Mercedes fleet, 24/7 availability.',
  canonical: 'https://www.amani-limousines.com/en/hourly-hire',
  alternates: {
    languages: { fr: 'https://www.amani-limousines.com/mise-a-disposition' },
  },
});

export default function HourlyHireEN() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">As-directed hire</p>
          <h1 className="heading mt-3">
            {c('h1', 'Private driver Paris by the hour — your schedule, our flexibility')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Hourly hire places a private chauffeur in Paris at your service for a set duration. The vehicle stays nearby between each stop — parked, reachable in two minutes — turning a full day of meetings across the city into something considerably more manageable than chasing taxis between appointments.')}
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">How it works</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            You provide a start time, an approximate end time, and your first pickup address.
            From there, everything runs in real time. Coming out of a meeting in Neuilly and
            heading to the Marais? A message to your driver and the route is organised.
            Need to stop at a hotel to drop off documents? No app to open, no procedure.
            The driver adjusts immediately.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            The meter does not run while you are in your meeting. Waiting time is included in
            the hourly rate — you pay for the agreed duration regardless of how many addresses
            you visit within that window.
          </p>
        </div>
      </section>

      {/* Formats */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Available formats</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { titre: 'Half-day', duree: '4 hours', desc: 'Ideal for a morning of client meetings or an afternoon of events. Typically covers 2 to 4 addresses.' },
              { titre: 'Full day', duree: '8 hours', desc: 'The most popular format for delegation tours, client visits and trade show days across Paris.' },
              { titre: 'Multi-day', duree: 'Tailored', desc: 'For delegations staying in Paris several days. Same driver, same vehicle, full continuity.' },
            ].map((f) => (
              <div key={f.titre} className="card">
                <p className="sf text-xs text-stone-400 uppercase tracking-wider">{f.duree}</p>
                <p className="heading text-xl mt-1">{f.titre}</p>
                <p className="sf text-stone-500 text-sm mt-3 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who uses it */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Who uses as-directed hire in Paris</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Hourly hire is particularly popular with executive directors who have back-to-back
            meetings across Paris, foreign delegations on institutional visits, families who
            want to explore the city without worrying about taxis between each museum, and
            premium travel agencies building bespoke itineraries for their clients.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            A <strong>Paris private driver for the day</strong> frequently works out cheaper
            than booking individual rides throughout a full schedule — and the comfort of having
            the same warm vehicle with your belongings still inside between appointments
            is simply not comparable to a series of separate rides.
          </p>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

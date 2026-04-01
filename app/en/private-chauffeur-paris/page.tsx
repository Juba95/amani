import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Private Chauffeur Paris — 24/7 Mercedes Fleet | Amani Limousines',
  description:
    'Private chauffeur service in Paris for airport transfers, hourly hire and long distance. Mercedes E, S and V Class. Fixed rates, flight tracking included.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/private-chauffeur-paris',
    languages: {
      fr: 'https://www.amani-limousines.com/chauffeur-prive-paris',
      'x-default': 'https://www.amani-limousines.com/en/private-chauffeur-paris',
    },
  },
};

const services = [
  {
    title: 'Airport transfers',
    text:
      'Your driver tracks your flight in real time. Whether you land early or two hours late, he will be there at the right terminal. CDG, Orly and Le Bourget, day and night.',
  },
  {
    title: 'Hourly hire',
    text:
      'Back-to-back meetings, a business lunch in the 8th, then a factory visit in Clichy — instead of cycling through taxis all day, your driver stays with you by the half-day or full day.',
  },
  {
    title: 'Events in Paris',
    text:
      'Roland Garros, Paris Fashion Week, Paris Air Show, corporate hospitality at Longchamp. Events in Paris have their own traffic rules. Our drivers know the access routes and the timing.',
  },
  {
    title: 'Long distance from Paris',
    text:
      'Paris to Deauville (200 km), Brussels (310 km), Monaco (940 km). When the train does not go where you need to go, or when you need a working environment on the road.',
  },
];

const whyAmani = [
  {
    point: 'Fixed prices, no meter',
    detail:
      'You get a quote before you book. That number does not change when traffic is bad or when your flight lands at 2am.',
  },
  {
    point: 'Flight tracking',
    detail:
      'No need to call if you are delayed. The driver adjusts automatically, and the waiting time is included.',
  },
  {
    point: 'Discretion',
    detail:
      'Drivers do not discuss their clients. This matters more than it might sound when you are traveling with people who prefer not to be recognized.',
  },
  {
    point: 'Available around the clock',
    detail:
      'Early morning departures, late-night returns, last-minute requests — we cover all hours at the same rate.',
  },
];

export default function PrivateChauffeurParis() {
  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Paris — Île-de-France</p>
          <h1 className="heading mt-3">
            <strong>Private chauffeur in Paris</strong> —{' '}
            <em>available 24 hours a day</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Paris traffic is not the same at 8am and 10am. The difference can be an hour.
            A <strong>private chauffeur in Paris</strong> who knows the city plans around
            that — not around an app's optimistic estimate. Amani Limousines has been
            operating in Paris and the Île-de-France region since 2012: airports, business
            districts, hotels, private addresses. Fixed prices, Mercedes fleet, available
            seven days a week.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Request a quote
            </Link>
            <a
              href="tel:+33662027344"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              +33 6 62 02 73 44
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">When to book a private chauffeur in Paris</h2>
          <p className="sf text-stone-500 mt-4 mb-10 leading-relaxed">
            Some clients book a one-off airport transfer. Others work with a regular
            driver several days a week. Here are the most common situations.
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

      {/* Fleet */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">The fleet</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            All vehicles are recent Mercedes, maintained and air-conditioned. For solo
            travelers or pairs, the <strong>E-Class</strong> (from €100) is the standard
            choice. For executives hosting a client or partner, the <strong>S-Class</strong>{' '}
            (from €150) offers a noticeably different cabin — wider, quieter, with massage
            seats and an onboard screen. For groups up to seven, the <strong>V-Class</strong>.
            For larger groups, the VIP Sprinter.
          </p>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Rates are calculated on distance, agreed before the trip. No peak-hour surcharges,
            no running meter.
          </p>
          <div className="mt-8">
            <Link
              href="/en/our-fleet"
              className="font-sans text-sm tracking-widest uppercase border-b border-stone-400 pb-0.5 hover:border-stone-700 transition-colors"
            >
              View the full fleet →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Amani */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">What makes the difference</h2>
          <div className="mt-8 space-y-6">
            {whyAmani.map((w) => (
              <div key={w.point} className="border-l-2 border-stone-200 pl-6">
                <p className="font-serif text-gray-900 mb-2">{w.point}</p>
                <p className="sf text-stone-600 text-sm leading-relaxed">{w.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Areas covered</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            We operate throughout Paris and the greater Île-de-France region: all arrondissements,
            La Défense, Versailles, CDG Airport, Orly Airport, Le Bourget, Disneyland Paris,
            Marne-la-Vallée and the surrounding commuter belt. For trips further afield,
            see our <Link href="/en/long-distance" className="underline underline-offset-2">long distance service</Link>.
          </p>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Our services in Paris</h2>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'CDG airport transfer', href: '/en/cdg-airport-transfer' },
              { label: 'Orly airport transfer', href: '/en/orly-airport-transfer' },
              { label: 'Hourly hire', href: '/en/hourly-hire' },
              { label: 'Long distance', href: '/en/long-distance' },
              { label: 'Meet & Greet', href: '/en/meet-and-greet' },
              { label: 'Close protection', href: '/en/close-protection' },
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

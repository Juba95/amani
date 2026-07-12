import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate — Hotels, Agencies, Embassies | Amani Limousines',
  description: 'Amani Limousines corporate account: priority dispatch, monthly invoicing, dedicated account manager and negotiated rates for hotels, travel agencies, corporations, embassies and ministries.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/corporate',
    languages: { fr: 'https://www.amani-limousines.com/corporate', 'x-default': 'https://www.amani-limousines.com/en/corporate' },
  },
};

const pillars = [
  { title: 'Priority dispatch', text: 'Your requests come first. A dedicated line, an answer within 15 minutes, vehicles reserved for partners in high season — Fashion Week included.' },
  { title: 'Monthly invoicing', text: 'No more ride-by-ride expense claims. Detailed monthly statement by service, client or cost centre, 30-day payment terms.' },
  { title: 'Dedicated account manager', text: 'A single point of contact who knows your habits, your VIP clients and your protocol requirements. Directly reachable — no switchboard.' },
  { title: 'Negotiated rates', text: 'Partner pricing based on your volume, fixed prices guaranteed year-round, preferential terms on long hires.' },
];

const audiences = [
  { title: 'Hotels & concierges', text: 'Your guests judge the hotel all the way into the car that carries them. Suited chauffeurs, welcome in your establishment\'s name, feedback loop to the concierge desk.' },
  { title: 'Travel agencies & DMCs', text: 'A reliable ground-transport partner for your tours, transfers and private days. Instant confirmation, partner commission, 24/7 assistance during stays.' },
  { title: 'Embassies & ministries', text: 'Official convoys, state visits, delegations. Chauffeurs versed in diplomatic protocol, absolute discretion, coordination with security services.' },
  { title: 'Corporations', text: 'Executive travel, investor roadshows, employee transfers. CSR reporting available (growing hybrid and electric fleet).' },
];

export default function CorporatePageEN() {
  return (
    <SEOLayoutEN>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="tag">Corporate & partners</p>
          <h1 className="heading mt-3">A dedicated desk for hotels, agencies & embassies</h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
            For 15 years, Amani Limousines has been the ground-transport partner of Parisian
            palaces, international travel agencies and diplomatic missions.
            A corporate account puts our organisation at the service of yours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@amani-limousines.com?subject=Corporate%20account%20opening"
              className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase text-white" style={{ background: '#0a0908' }}>
              Open a corporate account
            </a>
            <Link href="/en/contact"
              className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 hover:border-stone-600 transition-colors">
              Request a call back
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading text-center mb-10">What a partner account includes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{p.title}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading text-center mb-10">Designed for your business</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {audiences.map((c) => (
              <div key={c.title} className="p-6 rounded-xl bg-warm-50 border border-warm-200">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{c.title}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading mb-4">Let’s talk about your volume</h2>
          <p className="sf text-stone-500 mb-8">
            Tell us what you need — we come back within 24 hours with a pricing proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@amani-limousines.com?subject=Corporate%20account%20opening"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white" style={{ background: '#0a0908' }}>
              contact@amani-limousines.com
            </a>
            <a href="tel:+33687169747"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 hover:border-stone-600 transition-colors">
              +33 6 87 16 97 47
            </a>
          </div>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

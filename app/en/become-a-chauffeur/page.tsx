import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/become-a-chauffeur';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Become a Chauffeur — Join Amani Limousines | Careers',
  description: 'Amani Limousines is hiring exceptional private chauffeurs in Paris: multilingual, impeccably presented. Premium vehicles provided, training, attractive pay.',
  canonical: 'https://www.amani-limousines.com/en/become-a-chauffeur',
  alternates: {
    languages: {
      fr: 'https://www.amani-limousines.com/devenir-chauffeur',
      'x-default': 'https://www.amani-limousines.com/en/become-a-chauffeur',
    },
  },
});

const perks = [
  { title: 'Premium vehicles provided', text: 'Mercedes S, E and V-Class — maintained, insured, renewed every three years. You drive, we handle the rest.' },
  { title: 'Attractive pay', text: 'Base + bonuses on long hires and repeat clients. Paid regularly, never late.' },
  { title: 'Ongoing training', text: 'Etiquette and protocol (embassies, palaces), security driving, foreign languages — we invest in your growth.' },
  { title: 'Structured schedules', text: 'Missions planned in advance: airport transfers, events, delegations. You know your week ahead.' },
];

const profile = [
  'Valid VTC (private hire) licence',
  'Impeccable presentation and sense of service',
  'Fluent French + English (a third language is a real plus)',
  'Solid knowledge of Paris and the Île-de-France region',
  'Absolute discretion — diplomatic and VIP clientele',
  'Availability on evenings and weekends appreciated',
];

export default function BecomeAChauffeurPage() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Careers</p>
          <h1 className="heading mt-3">{c('h1', 'Become an Amani Limousines chauffeur')}</h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'We are always looking for exceptional chauffeurs to serve our clientele — embassies, palaces, private aviation. Multilingual, impeccably presented and passionate about service: join a house that values your craft.')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:contact@amani-limousines.com?subject=Chauffeur%20application%20-%20Amani"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Send my application
            </a>
            <a
              href="https://wa.me/33687169747?text=Hello%2C%20I%20would%20like%20to%20apply%20as%20a%20chauffeur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              Apply via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">What we offer</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {perks.map((a) => (
              <div key={a.title} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{a.title}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">The profile we look for</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.map((s) => (
              <div key={s} className="flex items-start gap-3 p-4 rounded-xl bg-warm-50 border border-warm-200">
                <span style={{ color: '#8a7340' }}>✓</span>
                <p className="sf text-sm text-stone-600">{s}</p>
              </div>
            ))}
          </div>
          <p className="sf text-stone-500 mt-8 text-sm leading-relaxed">
            Do you own a premium vehicle? We also work with independent partner
            chauffeurs. Mention it in your application.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading mb-4">Ready to join us?</h2>
          <p className="sf text-stone-500 mb-8">
            Send your CV + a professional photo. Reply within 48 hours, interview within a week.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@amani-limousines.com?subject=Chauffeur%20application%20-%20Amani"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              contact@amani-limousines.com
            </a>
            <Link
              href="/en/contact"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

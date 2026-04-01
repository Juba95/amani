import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/close-protection';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Close Protection Paris — Secure Transport & Bodyguard Driver | Amani Limousines',
  description: 'Close protection and secure transport in Paris. Discreet vehicles, security-trained drivers, principal and follow cars. Available for VIPs, executives and diplomats.',
  canonical: 'https://www.amani-limousines.com/en/close-protection',
  alternates: {
    languages: { fr: 'https://www.amani-limousines.com/securite-rapprochee' },
  },
});

export default function CloseProtectionEN() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Secure transport — Paris</p>
          <h1 className="heading mt-3">
            {c('h1', 'Close protection and secure transport in Paris — discretion above all')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Urban close protection in Paris is primarily about anticipation, route selection and discretion. Our drivers assigned to secure transport missions in Paris are trained in defensive driving, urban threat awareness and communication protocols with protection teams. They know the alternative routes, the rapid egress points and the access roads that most drivers never use.')}
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Principal and follow cars</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              For principals with significant public or political exposure, we deploy a minimum
              two-vehicle arrangement: a principal vehicle and a follow car. Both drivers
              maintain constant radio communication. In the event of an incident, the
              extraction protocol is activated immediately.
            </p>
          </div>
          <div>
            <h2 className="heading">Unmarked vehicles</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              On request, all vehicles are deployed with no Amani Limousines branding.
              Standard black sedans with regular registration plates blend into normal
              Parisian traffic — which is often the most effective form of protection.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Client profiles</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            Our <strong>close protection driving service in Paris</strong> is used by listed
            company executives under surveillance constraints, public figures visiting Paris
            (artists, athletes, high-profile individuals), diplomats on non-official missions,
            and wealthy families who want an additional layer of protection during a stay in
            the capital. All missions are handled in strict confidence.
          </p>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

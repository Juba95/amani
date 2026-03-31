import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';

export const metadata: Metadata = {
  title: 'Delegation Transport Paris — Vehicle Convoy & Diplomatic Missions | Amani',
  description:
    'Vehicle convoy and delegation transport in Paris. 2 to 30 vehicles coordinated, diplomatic missions, embassies. Centralised dispatch, 24/7 availability.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/en/delegation-transport',
    languages: { fr: 'https://www.amani-limousines.com/convoi-delegations' },
  },
};

export default function DelegationTransportEN() {
  return (
    <SEOLayoutEN>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Convoys & official delegations</p>
          <h1 className="heading mt-3">
            <strong>Delegation transport and vehicle convoy in Paris</strong> —{' '}
            <em>coordinated, flawless</em>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            A ministerial visit, a state arrival, a corporate summit or a group of executives
            on a Paris tour: these situations require more than a single vehicle. The{' '}
            <strong>delegation transport service in Paris</strong> from Amani Limousines is built
            around centralised dispatch, continuous radio communication between drivers and a
            field coordinator available on site throughout the mission.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Diplomatic missions</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              We work regularly with embassies, consulates and permanent missions in Paris.
              For official state visits, vehicles are prepared according to security team
              protocols: tinted windows, isolated communications, pre-validated routes. Our
              drivers are accustomed to working alongside protection details.
            </p>
          </div>
          <div>
            <h2 className="heading">Corporate events</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              For board meetings, general assemblies and corporate delegation days, we manage
              the full transport logistics: hotel-to-venue shuttles, airport transfers for
              incoming groups, and representation vehicles for speakers and VIP guests.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">A fleet for every rank</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            A convoy can mix vehicle classes according to protocol rank. The principal delegation
            travels in Mercedes S-Class or BMW i7, advisors in E-Class, and equipment or
            luggage in V-Class or Sprinter. Visual uniformity — all vehicles matching brand
            and colour — is achievable on request.
          </p>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

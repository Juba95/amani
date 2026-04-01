import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/meet-and-greet';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Meet and Greet Service Paris — VIP Airport Welcome CDG & Orly | Amani',
  description: 'Meet and greet service at Paris airports. Name board welcome in arrivals, baggage assistance, Fast Track option at CDG and Orly. Available 24/7.',
  canonical: 'https://www.amani-limousines.com/en/meet-and-greet',
  alternates: {
    languages: { fr: 'https://www.amani-limousines.com/meet-and-greet' },
  },
});

export default function MeetAndGreetEN() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">VIP airport welcome</p>
          <h1 className="heading mt-3">
            {c('h1', 'Meet and greet Paris airports — from the gate to the car, seamlessly')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'The meet and greet service in Paris fills the gap between stepping off the aircraft and settling into the vehicle. A dedicated assistant meets your passenger in the arrivals zone — after passport control — with a name board, takes charge of luggage, and guides them directly to the waiting Mercedes without having to scan a crowd of signs or navigate unfamiliar terminal corridors.')}
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">What the service includes</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {[
              { titre: 'Named welcome board', desc: 'Assistant positioned after customs with a board displaying your passenger\'s name, visible as soon as they exit the arrivals corridor.' },
              { titre: 'Baggage assistance', desc: 'The assistant takes charge of luggage from the carousel and accompanies it to the vehicle.' },
              { titre: 'Vehicle escort', desc: 'The passenger is guided directly to the reserved drop-zone where the Mercedes or van is waiting.' },
              { titre: 'Fast Track option', desc: 'At CDG and Orly, a Fast Track option allows departure passengers to skip general security queues — useful for tight outbound connections.' },
            ].map((item) => (
              <div key={item.titre} className="card">
                <p className="sf font-semibold text-gray-900">{item.titre}</p>
                <p className="sf text-stone-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Who requests this service</h2>
          <p className="sf text-stone-600 mt-4 leading-relaxed">
            The <strong>VIP airport welcome service in Paris</strong> is most often requested
            by five-star hotels arranging arrivals for their guests, premium travel agencies
            managing bespoke journeys, families travelling with young children or elderly
            relatives, and official delegations where time between the aircraft and the next
            engagement is tight. Available at CDG (all terminals), Orly (terminals 1–4) and
            Le Bourget.
          </p>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

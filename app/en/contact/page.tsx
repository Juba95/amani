import type { Metadata } from 'next';
import SEOLayoutEN from '@/components/SEOLayoutEN';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'en/contact';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Contact — Amani Limousines | Private Driver Paris 24/7',
  description: 'Contact Amani Limousines for your private driver in Paris. Phone, WhatsApp, email. Response within 30 minutes. Available 24/7, 365 days a year.',
  canonical: 'https://www.amani-limousines.com/en/contact',
  alternates: {
    languages: { fr: 'https://www.amani-limousines.com/contact' },
  },
});

export default function ContactEN() {
  const c = content(SLUG);

  return (
    <SEOLayoutEN>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Get in touch</p>
          <h1 className="heading mt-3">
            {c('h1', 'Contact our team — private driver Paris 24/7')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Our team is available around the clock, every day of the year, for bookings, bespoke quotes and logistics questions. We respond within 30 minutes, including overnight and on public holidays.')}
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Phone',
              info: '+33 6 62 02 73 44',
              detail: 'Available 24/7 for urgent requests and last-minute bookings.',
              href: 'tel:+33662027344',
              cta: 'Call now',
            },
            {
              title: 'WhatsApp',
              info: '+33 6 62 02 73 44',
              detail: 'Send your journey details by WhatsApp for a quick quote.',
              href: 'https://wa.me/33662027344',
              cta: 'Message on WhatsApp',
            },
            {
              title: 'Email',
              info: 'contact@amani-limousines.com',
              detail: 'For detailed requests, delegation quotes and corporate accounts.',
              href: 'mailto:contact@amani-limousines.com',
              cta: 'Send an email',
            },
          ].map((c) => (
            <div key={c.title} className="card text-center">
              <p className="tag">{c.title}</p>
              <p className="sf font-semibold text-gray-900 mt-3">{c.info}</p>
              <p className="sf text-stone-500 text-sm mt-3 leading-relaxed">{c.detail}</p>
              <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="btn-outline mt-5 inline-block">
                {c.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="heading">Languages spoken</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Our team responds in French, English, Arabic and Mandarin. Our drivers
              are multilingual and familiar with the cultural protocols expected by
              Arabic-speaking (Qatar, Saudi Arabia, UAE) and Chinese-speaking
              (Hong Kong, Shanghai, Beijing) clientele.
            </p>
          </div>
          <div>
            <h2 className="heading">Response times</h2>
            <p className="sf text-stone-600 mt-4 leading-relaxed">
              Standard bookings: confirmed within 30 minutes. Complex missions (convoys,
              delegations, close protection): allow 2 to 4 hours for a detailed proposal
              with availabilities and pricing. Emergency transfers within 2 hours: call
              directly on +33 6 62 02 73 44.
            </p>
          </div>
        </div>
      </section>
    </SEOLayoutEN>
  );
}

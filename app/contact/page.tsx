import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import { content, contentMetadata } from '@/lib/get-content';
import ContactForm from './ContactForm';

const SLUG = 'contact';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Contact — Chauffeur Privé France & Europe | Amani Limousines',
  description: 'Contactez notre équipe de chauffeurs privés à Paris. Réservation, devis sur mesure, disponible 24h/24. Réponse en moins de 30 minutes.',
  canonical: 'https://www.amani-limousines.com/contact',
});

export default function ContactPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">{c('tag', 'Nous contacter')}</p>
          <h1 className="heading mt-3">
            {c('h1', 'Parlez à notre équipe chauffeur privé Paris')}
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', "Notre équipe est disponible 24h/24, 7j/7 pour toute demande de réservation, devis sur mesure ou question logistique. Réponse en moins de 30 minutes.")}
          </p>
        </div>
      </section>

      <section className="py-10 px-6 md:px-10" style={{ background: '#faf8f5' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: '✆', label: 'Téléphone', value: c('phone', '+33 6 62 02 73 44'), href: 'tel:+33662027344' },
            { icon: '💬', label: 'WhatsApp', value: c('whatsapp', 'Disponible 24h/24'), href: 'https://wa.me/33662027344' },
            { icon: '✉', label: 'Email', value: c('email', 'contact@amani-limousines.com'), href: 'mailto:contact@amani-limousines.com' },
          ].map(item => (
            <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-stone-200 hover:border-gold-400 transition-all group">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-sans text-[0.6rem] tracking-[0.12em] uppercase text-stone-400">{item.label}</p>
                <p className="font-sans text-sm text-gray-800 font-medium group-hover:text-gold-400 transition-colors">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading mb-2">{c('section_1_title', 'Formulaire de contact')}</h2>
          <p className="sf text-stone-500 text-sm mb-10">
            {c('section_1_text', 'Remplissez le formulaire — notre équipe vous répond sous 30 minutes.')}
          </p>
          <ContactForm />
        </div>
      </section>
    </SEOLayout>
  );
}

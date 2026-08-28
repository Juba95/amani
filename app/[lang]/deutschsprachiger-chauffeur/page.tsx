import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import Link from 'next/link';
import de from '@/locales/de.json';

type Lang = 'de';
const VALID = new Set<Lang>(['de']);

const BASE = 'https://www.amani-limousines.com';

const content: Record<Lang, {
  lang: string;
  dir: 'rtl' | 'ltr';
  tag: string;
  h1: string;
  h1em: string;
  intro: string;
  sections: { title: string; body: string }[];
  cta: string;
  ctaPhone: string;
  related: { label: string; href: string }[];
}> = {
  de: {
    lang: 'de',
    dir: 'ltr',
    tag: 'Deutschsprachiger Chauffeur — Paris, Frankreich und Europa',
    h1: 'Deutschsprachiger Privatchauffeur in Paris',
    h1em: 'Service der Spitzenklasse, rund um die Uhr',
    intro:
      'Amani Limousines stellt Ihnen einen deutschsprachigen Privatchauffeur in Paris zur Seite — für Reisende, Geschäftsleute und Delegationen aus Deutschland, Österreich und der Schweiz. Wenn Ihr Chauffeur Deutsch spricht, verändert das die gesamte Fahrt: Termine werden präzise abgestimmt, Empfehlungen kommen ohne Umweg an, und jede Frage des Tages klärt sich in Ihrer Sprache. Verfügbar rund um die Uhr, in Paris und in ganz Frankreich.',
    sections: [
      {
        title: 'Flughafentransfers auf Deutsch',
        body: 'Sie landen aus Frankfurt, München, Wien oder Zürich, und Ihr Chauffeur erwartet Sie in Charles de Gaulle, Orly oder Le Bourget mit einem Namensschild. Er spricht Deutsch, hilft beim Gepäck und informiert Sie auf dem Weg zum Hotel über Fahrzeit und Verkehrslage. Der Preis steht vorab fest, Ihr Flug wird in Echtzeit überwacht — bei Verspätung wartet Ihr Chauffeur ohne Aufpreis.',
      },
      {
        title: 'Paris entdecken mit jemandem, der Ihre Sprache spricht',
        body: 'Deutlich mehr als eine Standardrundfahrt: Ihr Chauffeur kennt die überdachten Passagen, die guten Adressen abseits der Touristenströme und die Ecken, die in keinem Reiseführer stehen. Er teilt seine Empfehlungen auf Deutsch — für einen Blick auf die Stadt, den man sonst nicht bekommt.',
      },
      {
        title: 'Geschäftstermine und Diplomatie',
        body: 'Deutsche Unternehmen, die Botschaft in der Avenue Franklin D. Roosevelt, Sitzungen bei der OECD oder der UNESCO: Ihr Chauffeur kennt das Botschaftsviertel, weiß, wo er in der Nähe halten kann, und steuert die Zeitfenster zwischen Ihren Terminen. Auch der kurzfristige Anruf zur Änderung des Programms läuft auf Deutsch.',
      },
      {
        title: 'Gruppen und Delegationen aus dem deutschsprachigen Raum',
        body: 'Eine Wirtschaftsdelegation aus Bayern, eine Reisegruppe aus der Schweiz oder ein Messeteam für die Porte de Versailles und Villepinte: Amani Limousines stellt mehrere Fahrzeuge mit deutschsprachigen Chauffeuren bereit — von der V-Klasse über den Sprinter VIP mit 8, 15 oder 19 Plätzen bis zum Reisebus Tourismo mit 50 Plätzen — und koordiniert sämtliche Transfers, damit jede Etappe pünktlich erreicht wird.',
      },
      {
        title: 'Langstrecke ab Paris',
        body: 'Paris–Straßburg, Paris–Baden-Baden, Paris–Genf, Paris–Brüssel oder die Fahrt in die Champagne und ins Burgund: unsere Limousinen und VIP-Vans sind für lange Strecken ausgelegt — WLAN, Steckdosen, Arbeitsplatz. Auch grenzüberschreitende Fahrten nach Deutschland, Österreich und in die Schweiz organisieren wir mit Festpreis.',
      },
    ],
    cta: 'Jetzt buchen',
    ctaPhone: '+33 6 87 16 97 47',
    related: [
      { label: 'Startseite', href: '/de' },
      { label: 'Kontakt', href: '/de#contact' },
    ],
  },
};

export async function generateStaticParams() {
  return [{ lang: 'de' }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  if (!VALID.has(params.lang as Lang)) return {};
  return {
    title: 'Deutschsprachiger Privatchauffeur in Paris | Amani Limousines',
    description:
      'Deutschsprachiger Privatchauffeur in Paris, Frankreich und Europa. Transfers ab CDG, Orly und Le Bourget, Stadtrundfahrten, Geschäftstermine und Delegationen. Rund um die Uhr verfügbar.',
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${BASE}/de/deutschsprachiger-chauffeur`,
      languages: {
        fr: `${BASE}/chauffeur-germanophone`,
        en: `${BASE}/en/german-speaking-chauffeur-paris`,
        de: `${BASE}/de/deutschsprachiger-chauffeur`,
      },
    },
  };
}

export default function DeutschsprachigerChauffeurPage({ params }: { params: { lang: string } }) {
  if (!VALID.has(params.lang as Lang)) notFound();
  const lang = params.lang as Lang;
  const c = content[lang];
  const t = de;

  return (
    <div className="min-h-screen bg-white text-gray-900" dir={c.dir}>
      <Navbar t={t} locale={lang} />
      <main>
        <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="tag">{c.tag}</p>
            <h1 className="heading mt-3">
              <strong>{c.h1}</strong> — <em>{c.h1em}</em>
            </h1>
            <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">{c.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reservation"
                className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
                style={{ background: '#0a0908' }}
              >
                {c.cta}
              </Link>
              <a
                href={`tel:${c.ctaPhone.replace(/\s/g, '')}`}
                className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
                dir="ltr"
              >
                {c.ctaPhone}
              </a>
            </div>
          </div>
        </section>
        <section className="py-14 px-6 md:px-10 bg-warm-50">
          <div className="max-w-4xl mx-auto space-y-10">
            {c.sections.map((s) => (
              <div key={s.title} className="border-l-2 border-stone-200 pl-6">
                <h2 className="font-serif text-xl text-gray-900 mb-3">{s.title}</h2>
                <p className="sf text-stone-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-14 px-6 md:px-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {c.related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="block text-center py-4 px-6 border border-stone-200 font-sans text-sm text-gray-700 hover:border-stone-500 transition-colors"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTA t={t} />
      <Footer t={t} locale={lang} />
    </div>
  );
}

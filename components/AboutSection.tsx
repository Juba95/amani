import Image from 'next/image';
import Link from 'next/link';

/**
 * AboutSection — section « À propos » de la page d'accueil (Lounes + langues).
 * Partagée entre la homepage FR (app/page.tsx) et les homepages localisées
 * (app/[lang]/page.tsx). Les textes viennent de t.about (locales/*.json),
 * avec fallback français si une clé manque.
 */

// Les 8 langues avec page SEO dédiée (cliquables) + 6 langues sans page (badges simples).
// Les labels traduits viennent de t.about.languages, la clé est le code langue.
const SPOKEN_LANGUAGES: { code: string; flag: string; href?: string; fallback: string }[] = [
  { code: 'en', flag: '🇬🇧', href: '/chauffeur-anglophone',   fallback: 'Anglais' },
  { code: 'ar', flag: '🇸🇦', href: '/chauffeur-arabophone',   fallback: 'Arabe' },
  { code: 'es', flag: '🇪🇸', href: '/chauffeur-hispanophone', fallback: 'Espagnol' },
  { code: 'de', flag: '🇩🇪', href: '/chauffeur-germanophone', fallback: 'Allemand' },
  { code: 'zh', flag: '🇨🇳', href: '/chauffeur-mandarin',     fallback: 'Mandarin' },
  { code: 'ko', flag: '🇰🇷', href: '/chauffeur-coreen',       fallback: 'Coréen' },
  { code: 'ja', flag: '🇯🇵', href: '/chauffeur-japonais',     fallback: 'Japonais' },
  { code: 'ru', flag: '🇷🇺', href: '/chauffeur-russophone',   fallback: 'Russe' },
  { code: 'tl', flag: '🇵🇭', fallback: 'Philippin' },
  { code: 'hi', flag: '🇮🇳', fallback: 'Hindi' },
  { code: 'sr', flag: '🇷🇸', fallback: 'Serbe' },
  { code: 'ro', flag: '🇷🇴', fallback: 'Roumain' },
  { code: 'pt', flag: '🇵🇹', fallback: 'Portugais' },
  { code: 'it', flag: '🇮🇹', fallback: 'Italien' },
];

export default function AboutSection({ t }: { t?: any }) {
  const a = t?.about ?? {};

  const chipClass =
    'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs border transition-colors';

  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo de Lounes */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '4/5' }}>
              <Image
                src="/lounes-about.jpg"
                alt={a.photo_alt ?? "Lounes — Fondateur d'Amani Limousines, chauffeur privé polyglotte"}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
                quality={80}
              />
            </div>
            {/* Badge flottant */}
            <div
              className="absolute -bottom-4 -right-4 lg:-right-6 bg-white rounded-xl px-5 py-3 shadow-lg border"
              style={{ borderColor: '#ece9e3' }}
            >
              <p className="font-serif text-2xl font-normal" style={{ color: '#8a7340' }}>10+</p>
              <p className="font-sans text-[0.6rem] tracking-[0.1em] uppercase text-stone-500">
                {a.badge_label ?? 'langues parlées'}
              </p>
            </div>
          </div>

          {/* Texte de présentation */}
          <div>
            <p
              className="font-sans text-[0.6rem] tracking-[0.2em] uppercase font-medium mb-4"
              style={{ color: '#8a7340' }}
            >
              {a.tag ?? 'À propos'}
            </p>
            <h2
              className="font-serif font-normal text-gray-900 mb-5"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.2 }}
            >
              {a.title ?? 'Des chauffeurs privés'}
              <br />
              <em className="italic" style={{ color: '#8a7340' }}>
                {a.title_em ?? 'qui parlent votre langue'}
              </em>
            </h2>

            <div className="space-y-4 font-sans text-sm text-stone-600 leading-relaxed">
              <p>{a.p1 ?? "Quand votre chauffeur parle votre langue, le trajet change complètement. Ce n'est plus juste un déplacement — vous pouvez échanger, poser des questions, vous faire comprendre sans effort."}</p>
              <p>{a.p2 ?? "Nos chauffeurs parlent plus de 10 langues. Cela signifie accueillir des hommes d'affaires saoudiens à Roissy en arabe, échanger sur un itinéraire avec une famille japonaise, ou coordonner avec une délégation allemande sur le programme du jour. Ils maîtrisent Paris et savent s'adapter aux codes de chaque culture."}</p>
              <p>{a.p3 ?? "Chez Amani Limousines, notre engagement envers le service transcende la simple conduite. Nous anticipons vos besoins, vous offrons des conseils et supervisons chaque détail avec une attention méticuleuse."}</p>
            </div>

            {/* Langues parlées — badges (cliquables si page dédiée) */}
            <div className="mt-8">
              <p className="font-sans text-[0.6rem] tracking-[0.15em] uppercase text-stone-400 mb-3">
                {a.languages_label ?? 'Langues disponibles'}
              </p>
              <div className="flex flex-wrap gap-2">
                {SPOKEN_LANGUAGES.map((lang) => {
                  const label = a.languages?.[lang.code] ?? lang.fallback;
                  return lang.href ? (
                    <Link
                      key={lang.code}
                      href={lang.href}
                      className={`${chipClass} hover:border-gold-400 hover:text-gold-400`}
                      style={{ borderColor: '#e5e2db', color: '#666' }}
                    >
                      <span>{lang.flag}</span>
                      {label}
                    </Link>
                  ) : (
                    <span
                      key={lang.code}
                      className={chipClass}
                      style={{ borderColor: '#e5e2db', color: '#666' }}
                    >
                      <span>{lang.flag}</span>
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/reservation" className="btn-primary inline-block text-sm">
                {a.cta_book ?? 'Réserver un chauffeur'}
              </Link>
              <Link
                href="/contact"
                className="inline-block font-sans text-xs tracking-wide px-5 py-3 rounded-xl border transition-colors hover:border-gold-400 hover:text-gold-400"
                style={{ borderColor: '#ddd', color: '#666' }}
              >
                {a.cta_contact ?? 'Nous contacter'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * LocalizedPageView — gabarit des pages de service traduites.
 *
 * Reprend la mise en page des pages françaises et anglaises écrites à la main
 * (chapeau blanc, sections alternant blanc et crème, cartes en grille, FAQ,
 * bloc d'appel) pour qu'une page allemande ou espagnole ne se distingue pas
 * visuellement d'une page française.
 */
import Link from 'next/link';
import type { LocalizedPage } from '@/lib/site-pages';

/** Rend les segments **entre doubles astérisques** en gras. */
function Strong({ text }: { text: string }) {
  const parts = text.split('**');
  return <>{parts.map((p, i) => (i % 2 === 1 ? <strong key={i}>{p}</strong> : p))}</>;
}

export default function LocalizedPageView({ page, rtl }: { page: LocalizedPage; rtl?: boolean }) {
  const bookHref = '/reservation';

  return (
    <div dir={rtl ? 'rtl' : 'ltr'}>
      {/* Chapeau */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">{page.tag}</p>
          <h1 className="heading mt-3">{page.h1}</h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            <Strong text={page.intro} />
          </p>
        </div>
      </section>

      {/* Sections : fond alterné, comme sur les pages françaises */}
      {page.sections.map((s, i) => (
        <section
          key={i}
          className="py-14 px-6 md:px-10"
          style={{ background: i % 2 === 0 ? '#faf8f5' : '#ffffff' }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="heading">{s.title}</h2>
            {s.paragraphs?.map((p, j) => (
              <p key={j} className="sf text-stone-600 mt-4 leading-relaxed">
                <Strong text={p} />
              </p>
            ))}
            {s.cards && s.cards.length > 0 && (
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {s.cards.map((c, j) => (
                  <div key={j} className="card">
                    <p className="font-serif text-lg text-gray-900">{c.title}</p>
                    <p className="sf text-sm text-stone-600 leading-relaxed mt-2">
                      <Strong text={c.text} />
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* FAQ */}
      {page.faq && page.faq.length > 0 && (
        <section className="py-14 px-6 md:px-10 bg-warm-50">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {page.faq.map((f, i) => (
                <div key={i} className={rtl ? 'border-r-2 border-stone-200 pr-6' : 'border-l-2 border-stone-200 pl-6'}>
                  <p className="font-serif text-gray-900 mb-2">{f.q}</p>
                  <p className="sf text-stone-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Appel à l'action */}
      {page.cta && (
        <section className="py-14 px-6 md:px-10 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading mb-3">{page.cta.title}</h2>
            <p className="sf text-stone-500 mb-8 text-sm">{page.cta.text}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={bookHref}
                className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase text-white"
                style={{ background: '#0a0908' }}
              >
                {page.cta.button}
              </Link>
              <a
                href="tel:+33687169747"
                dir="ltr"
                className="inline-block px-7 py-3.5 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 hover:border-stone-600 transition-colors"
              >
                +33 6 87 16 97 47
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

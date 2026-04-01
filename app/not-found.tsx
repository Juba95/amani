import Link from 'next/link';

const QUICK_LINKS = [
  { label: 'Transfert aéroport CDG', href: '/transfert-aeroport-cdg' },
  { label: 'Mise à disposition', href: '/mise-a-disposition' },
  { label: 'Meet & Greet', href: '/meet-and-greet' },
  { label: 'Excursion privée', href: '/excursion-privee' },
  { label: 'Notre flotte', href: '/notre-flotte' },
  { label: 'Nous contacter', href: '/contact' },
];

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-xl text-center">
        {/* Logo */}
        <Link
          href="/"
          className="inline-block font-serif tracking-[0.35em] uppercase mb-12 transition-opacity hover:opacity-70"
          style={{ fontSize: '0.78rem', color: '#8a7340' }}
        >
          Amani Limousines
        </Link>

        {/* 404 */}
        <p
          className="font-serif font-normal mb-3"
          style={{ fontSize: 'clamp(5rem, 15vw, 9rem)', color: 'rgba(201,168,76,0.15)', lineHeight: 1 }}
        >
          404
        </p>

        <h1 className="font-serif text-2xl font-normal text-gray-900 mb-4">
          Page introuvable
        </h1>
        <p className="font-sans text-sm text-stone-500 font-light leading-relaxed mb-10">
          Cette page n'existe plus ou a été déplacée. Retrouvez nos services ci-dessous.
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {QUICK_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-3 rounded-xl border border-stone-200 font-sans text-xs text-stone-600 hover:border-gold-400 hover:text-gold-400 transition-all"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block font-sans text-xs tracking-[0.12em] uppercase px-7 py-3.5 rounded-xl transition-all"
          style={{ background: '#0a0908', color: '#c9a84c' }}
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}

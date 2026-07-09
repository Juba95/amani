import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import Link from 'next/link';
import es from '@/locales/es.json';

type Lang = 'es';
const VALID = new Set<Lang>(['es']);

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
  es: {
    lang: 'es',
    dir: 'ltr',
    tag: 'Chofer hispanohablante — París, Francia y Europa',
    h1: 'Chofer privado hispanohablante en París',
    h1em: 'servicio de lujo, disponible 24/7',
    intro:
      'Amani Limousines pone a su disposición un servicio de chofer privado hispanohablante en París, pensado para turistas, empresarios y diplomáticos de España y América Latina. Hablar en español con su chofer cambia por completo la experiencia: los trayectos se organizan con precisión, las recomendaciones llegan sin intermediarios y cada detalle del día se resuelve en su idioma. Servicio disponible las 24 horas, los 7 días de la semana, en París y en toda Francia.',
    sections: [
      {
        title: 'Traslados de aeropuerto en español',
        body: 'Llega usted en un vuelo desde Madrid, Ciudad de México o Buenos Aires y su chofer le espera en CDG, Orly o Le Bourget con un cartel con su nombre. Habla español, le ayuda con el equipaje y, durante el trayecto hasta el hotel, le informa del tiempo estimado y del estado del tráfico. Sencillo, directo y en su idioma.',
      },
      {
        title: 'Descubrir París con un local que habla su idioma',
        body: 'Mucho más que un itinerario turístico estándar: el chofer conoce los pasajes cubiertos, las buenas direcciones de los barrios menos transitados y los rincones que no aparecen en las guías. Comparte sus recomendaciones en español, para descubrir la ciudad a otro nivel.',
      },
      {
        title: 'Citas de negocios y diplomacia',
        body: 'Empresas españolas, embajadas latinoamericanas, la Maison de l’Amérique latine en el bulevar Saint-Germain: su chofer domina el barrio de las embajadas, sabe estacionar cerca de la OCDE y gestiona los tiempos entre sus reuniones. Todo transcurre en español, incluidas las llamadas de última hora para reajustar la agenda.',
      },
      {
        title: 'Grupos y delegaciones hispanohablantes',
        body: 'Una delegación comercial mexicana, un grupo argentino en tour gastronómico o un equipo español para una feria en Villepinte: Amani Limousines despliega varios vehículos con choferes hispanohablantes y coordina todos los traslados para llegar puntualmente a cada etapa.',
      },
    ],
    cta: 'Reservar ahora',
    ctaPhone: '+33 6 87 16 97 47',
    related: [
      { label: 'Página de inicio', href: '/es' },
      { label: 'Contacto', href: '/es#contact' },
    ],
  },
};

export async function generateStaticParams() {
  return [{ lang: 'es' }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  if (!VALID.has(params.lang as Lang)) return {};
  return {
    title: 'Chofer Privado Hispanohablante en París | Amani Limousines',
    description:
      'Chofer privado que habla español en París, Francia y Europa. Traslados desde CDG, Orly y Le Bourget, turismo, negocios y delegaciones. Disponible 24/7.',
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${BASE}/es/chofer-hispanohablante`,
      languages: {
        fr: `${BASE}/chauffeur-hispanophone`,
        en: `${BASE}/en/spanish-speaking-chauffeur-paris`,
        es: `${BASE}/es/chofer-hispanohablante`,
      },
    },
  };
}

export default function ChoferHispanohablantePage({ params }: { params: { lang: string } }) {
  if (!VALID.has(params.lang as Lang)) notFound();
  const lang = params.lang as Lang;
  const c = content[lang];
  const t = es;

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

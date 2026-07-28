import type { Metadata } from 'next';
import SEOLayout from '@/components/SEOLayout';
import Image from 'next/image';
import Link from 'next/link';
import { content, contentMetadata } from '@/lib/get-content';

const SLUG = 'devenir-chauffeur';

export const metadata: Metadata = contentMetadata(SLUG, {
  title: 'Devenir Chauffeur — Rejoignez Amani Limousines | Recrutement',
  description: 'Amani Limousines recrute des chauffeurs privés d\'exception à Paris : multilingues, présentation irréprochable. Véhicules premium fournis, formation, rémunération attractive.',
  canonical: 'https://www.amani-limousines.com/devenir-chauffeur',
  alternates: {
    languages: {
      en: 'https://www.amani-limousines.com/en/become-a-chauffeur',
      'x-default': 'https://www.amani-limousines.com/devenir-chauffeur',
    },
  },
});

const avantages = [
  { titre: 'Véhicules premium fournis', texte: 'Mercedes Classe S, E, V — entretenus, assurés, renouvelés tous les trois ans. Vous conduisez, nous gérons le reste.' },
  { titre: 'Rémunération attractive', texte: 'Fixe + primes sur les mises à disposition longues et la clientèle fidélisée. Paiement régulier, sans retard.' },
  { titre: 'Formation continue', texte: 'Étiquette et protocole (ambassades, palaces), conduite de sécurité, langues étrangères — nous investissons dans votre progression.' },
  { titre: 'Plannings structurés', texte: 'Des missions planifiées à l\'avance : transferts aéroports, événements, délégations. Vous connaissez votre semaine.' },
];

const profil = [
  'Carte VTC en cours de validité',
  'Excellente présentation et sens du service',
  'Français + anglais courant (une 3e langue est un vrai plus)',
  'Connaissance de Paris et de l\'Île-de-France',
  'Discrétion absolue — clientèle diplomatique et VIP',
  'Disponibilité soirées et week-ends appréciée',
];

export default function DevenirChauffeurPage() {
  const c = content(SLUG);

  return (
    <SEOLayout>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.2fr,1fr] gap-10 items-center">
        <div>
          <p className="tag">Recrutement</p>
          <h1 className="heading mt-3">{c('h1', 'Devenez chauffeur Amani Limousines')}</h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            {c('intro', 'Nous recherchons en permanence des chauffeurs d\'exception pour accompagner notre clientèle — ambassades, palaces, aviation privée. Multilingues, d\'une présentation irréprochable et passionnés par le service : rejoignez une maison qui valorise votre métier.')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:amani.limousines@gmail.com?subject=Candidature%20chauffeur%20Amani"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              Envoyer ma candidature
            </a>
            <a
              href="https://wa.me/33687169747?text=Bonjour%2C%20je%20souhaite%20postuler%20comme%20chauffeur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              Candidater via WhatsApp
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden hidden lg:block">
          <Image src="/images/home/lounes-presentation.jpg" alt="Chauffeur privé Amani Limousines" fill sizes="420px" quality={75}
            className="object-cover" />
        </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Ce que nous offrons</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {avantages.map((a) => (
              <div key={a.titre} className="card">
                <h3 className="font-serif text-lg text-gray-900 mb-3">{a.titre}</h3>
                <p className="sf text-stone-600 leading-relaxed text-sm">{a.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profil recherché */}
      <section className="py-14 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading">Le profil que nous recherchons</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profil.map((s) => (
              <div key={s} className="flex items-start gap-3 p-4 rounded-xl bg-warm-50 border border-warm-200">
                <span style={{ color: '#8a7340' }}>✓</span>
                <p className="sf text-sm text-stone-600">{s}</p>
              </div>
            ))}
          </div>
          <p className="sf text-stone-500 mt-8 text-sm leading-relaxed">
            Vous avez votre propre véhicule premium ? Nous travaillons aussi avec des
            chauffeurs-partenaires indépendants. Précisez-le dans votre candidature.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 md:px-10 bg-warm-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading mb-4">Prêt à nous rejoindre ?</h2>
          <p className="sf text-stone-500 mb-8">
            Envoyez CV + photo professionnelle. Réponse sous 48 h, entretien sous une semaine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:amani.limousines@gmail.com?subject=Candidature%20chauffeur%20Amani"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase text-white transition-all"
              style={{ background: '#0a0908' }}
            >
              amani.limousines@gmail.com
            </a>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 font-sans text-sm tracking-widest uppercase border border-stone-300 text-stone-700 transition-all hover:border-stone-600"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </SEOLayout>
  );
}

import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import BookingWidget from '@/components/BookingWidget';
import fr from '@/locales/fr.json';
import { globalContent } from '@/lib/get-content';

interface SEOLayoutProps {
  children: React.ReactNode;
}

/**
 * Layout partagé pour toutes les pages SEO francophones.
 * Lit le contenu global du backoffice (téléphone, email, CTA) et
 * l'injecte dans les composants partagés.
 */
export default function SEOLayout({ children }: SEOLayoutProps) {
  // Lire les overrides globaux du backoffice
  const g = globalContent();

  // Merger les overrides dans l'objet de traduction
  const t = {
    ...fr,
    nav: {
      ...fr.nav,
      phone: g('phone', fr.nav?.phone ?? '+33 6 62 02 73 44'),
    },
    cta: {
      ...fr.cta,
      title: g('cta_title', fr.cta?.title ?? ''),
      subtitle: g('cta_subtitle', fr.cta?.subtitle ?? ''),
    },
    footer: {
      ...fr.footer,
      copyright: g('footer_copyright', fr.footer?.copyright ?? ''),
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar t={t} locale="fr" />
      <main>{children}</main>
      <BookingWidget t={t} locale="fr" />
      <CTA t={t} />
      <Footer t={t} />
    </div>
  );
}

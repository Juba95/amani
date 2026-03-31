import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import fr from '@/locales/fr.json';

interface SEOLayoutProps {
  children: React.ReactNode;
}

/**
 * Layout partagé pour toutes les pages SEO francophones.
 * Intègre la Navbar fixe, le bloc CTA et le Footer.
 */
export default function SEOLayout({ children }: SEOLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar t={fr} locale="fr" />
      <main>{children}</main>
      <CTA t={fr} />
      <Footer t={fr} />
    </div>
  );
}

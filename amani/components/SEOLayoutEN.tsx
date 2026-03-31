import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import en from '@/locales/en.json';

interface SEOLayoutENProps {
  children: React.ReactNode;
}

/**
 * Shared layout for all English SEO pages.
 * Injects Navbar + CTA + Footer with English translations.
 */
export default function SEOLayoutEN({ children }: SEOLayoutENProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar t={en} locale="en" />
      <main>{children}</main>
      <CTA t={en} />
      <Footer t={en} />
    </div>
  );
}

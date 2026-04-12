import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Réservation Chauffeur Privé France & Europe | Amani Limousines',
  description:
    'Contactez Amani Limousines pour réserver votre chauffeur privé. Devis gratuit, réponse rapide. Transferts aéroport, mise à disposition, longue distance. France & Europe.',
  alternates: {
    canonical: 'https://www.amani-limousines.com/contact',
    languages: {
      en: 'https://www.amani-limousines.com/en/contact',
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

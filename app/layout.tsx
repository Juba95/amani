import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Amani Limousines — Chauffeur Privé de Prestige à Paris',
  description:
    'Service de chauffeur privé haut de gamme à Paris. Transferts aéroports CDG, Orly, Le Bourget. Berlines Mercedes, vans VIP, convois. Disponible 24h/24.',
  metadataBase: new URL('https://www.amani-limousines.com'),
  alternates: {
    canonical: '/',
    languages: { fr: '/', en: '/en', ar: '/ar', 'zh-Hans': '/zh' },
  },
  openGraph: {
    title: 'Amani Limousines — Chauffeur Privé de Prestige à Paris',
    description: 'Service de chauffeur privé haut de gamme. 300+ véhicules. Transferts aéroports, délégations, événements.',
    url: 'https://www.amani-limousines.com',
    siteName: 'Amani Limousines',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://www.amani-limousines.com/wp-content/uploads/2017/02/s-Class-1-600x380.jpg', width: 600, height: 380 }],
  },
  robots: { index: true, follow: true },
};

// Schema.org LocalBusiness — apparaît dans les résultats Google
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Amani Limousines',
  description: 'Service de chauffeur privé de prestige à Paris. Transferts aéroports, mises à disposition, délégations.',
  url: 'https://www.amani-limousines.com',
  telephone: '+33662027344',
  email: 'contact@amani-limousines.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
  priceRange: '€€€',
  openingHours: 'Mo-Su 00:00-23:59',
  areaServed: [
    { '@type': 'City', name: 'Paris' },
    { '@type': 'State', name: 'Île-de-France' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de chauffeur privé',
    itemListElement: [
      { '@type': 'Offer', name: 'Transfert aéroport CDG', description: 'Chauffeur privé CDG Paris' },
      { '@type': 'Offer', name: 'Transfert aéroport Orly', description: 'Chauffeur privé Orly Paris' },
      { '@type': 'Offer', name: 'Mise à disposition', description: 'Chauffeur privé à l\'heure Paris' },
      { '@type': 'Offer', name: 'Convoi de véhicules', description: 'Transport de délégation Paris' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        {/* hreflang tags */}
        <link rel="alternate" hrefLang="fr" href="https://www.amani-limousines.com/" />
        <link rel="alternate" hrefLang="en" href="https://www.amani-limousines.com/en" />
        <link rel="alternate" hrefLang="ar" href="https://www.amani-limousines.com/ar" />
        <link rel="alternate" hrefLang="zh-Hans" href="https://www.amani-limousines.com/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://www.amani-limousines.com/" />
        {/* Schema.org structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

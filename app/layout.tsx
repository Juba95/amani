import type { Metadata } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import '../styles/globals.css';


const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-dm-serif',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

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
    images: [{ url: 'https://www.amani-limousines.com/vehicles/mercedes-classe-s.png', width: 600, height: 380 }],
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
    <html lang="fr" className={`${dmSerif.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://elfsightcdn.com" />
        <link rel="dns-prefetch" href="https://nominatim.openstreetmap.org" />
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

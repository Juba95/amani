import type { Metadata } from 'next';
import DevisClient from './DevisClient';

// Force le rendu dynamique — useSearchParams côté client
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Devis instantané — Amani Limousines | Chauffeur Privé France & Europe',
  description:
    'Obtenez un devis instantané pour votre transfert aéroport ou course partout en France et en Europe. Prix fixe, tout compris.',
  robots: { index: true, follow: true },
};

export default function DevisPage() {
  return <DevisClient />;
}

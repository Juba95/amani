import type { Metadata } from 'next';
import DevisClient from './DevisClient';

// Force le rendu dynamique — useSearchParams côté client
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Devis instantané — Amani Limousines | Chauffeur privé Paris',
  description:
    'Obtenez un devis instantané pour votre transfert aéroport ou course en ville. Prix fixe, tout compris.',
  robots: { index: true, follow: true },
};

export default function DevisPage() {
  return <DevisClient />;
}

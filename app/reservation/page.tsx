import type { Metadata } from 'next';
import ReservationClient from './ReservationClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Réservation chauffeur privé Paris — Amani Limousines',
  description:
    'Réservez votre chauffeur privé à Paris. Formulaire rapide, confirmation WhatsApp sous 30 minutes.',
  robots: { index: true, follow: true },
};

export default function ReservationPage() {
  return <ReservationClient />;
}

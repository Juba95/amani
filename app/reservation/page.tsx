import type { Metadata } from 'next';
import ReservationClient from './ReservationClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Réservation chauffeur privé — Amani Limousines | France & Europe',
  description:
    'Réservez votre chauffeur privé partout en France et en Europe. Formulaire rapide, confirmation sous 30 minutes.',
  robots: { index: true, follow: true },
};

export default function ReservationPage() {
  return <ReservationClient />;
}

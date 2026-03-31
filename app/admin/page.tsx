import { redirect } from 'next/navigation';

// L'ancienne URL /admin redirige vers /adminos
export default function AdminRedirect() {
  redirect('/adminos');
}

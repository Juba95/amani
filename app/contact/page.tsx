'use client';

import { useState } from 'react';
import SEOLayout from '@/components/SEOLayout';

const SERVICES = [
  { value: 'transfert',    label: 'Transfert privé' },
  { value: 'disposition',  label: 'Mise à disposition' },
  { value: 'meetgreet',    label: 'Meet and Greet' },
  { value: 'convoy',       label: 'Convoi / Délégation' },
  { value: 'security',     label: 'Sécurité rapprochée' },
  { value: 'excursion',    label: 'Excursion privée' },
  { value: 'longdistance', label: 'Longue distance' },
  { value: 'other',        label: 'Autre / Je ne sais pas encore' },
];

const SERVICE_LABELS: Record<string, string> = Object.fromEntries(
  SERVICES.map(s => [s.value, s.label])
);

const BUSINESS_WA = '33662027344'; // numéro WhatsApp Amani sans +

// ── Validation du numéro de téléphone ─────────────────────────────────────────
// Accepte : 06/07 français, +33, 0033, ou tout numéro international (+XX…)
function validatePhone(raw: string): boolean {
  const stripped = raw.replace(/[\s.\-()]/g, '');
  // FR mobile: 06/07XXXXXXXX, +336/7XXXXXXXX, 00336/7XXXXXXXX
  if (/^(\+33|0033)[67]\d{8}$/.test(stripped)) return true;
  if (/^0[67]\d{8}$/.test(stripped)) return true;
  // International générique: commence par + suivi de 6 à 15 chiffres
  if (/^\+\d{6,15}$/.test(stripped)) return true;
  // FR fixe (01-05, 08, 09) — accepté aussi
  if (/^0[1-9]\d{8}$/.test(stripped)) return true;
  return false;
}

// Formate le numéro pour le lien WhatsApp (supprime +, espaces)
function toWaNumber(raw: string): string {
  const s = raw.replace(/[\s.\-()]/g, '');
  if (s.startsWith('+')) return s.slice(1);
  if (s.startsWith('00')) return s.slice(2);
  if (s.startsWith('0')) return '33' + s.slice(1);
  return s;
}

// Génère le lien WA pré-rempli vers Amani
function buildWaLink(form: Record<string, string>): string {
  const svc = SERVICE_LABELS[form.service] || form.service || 'Non précisé';
  const lines = [
    `*Demande de réservation — Amani Limousines*`,
    ``,
    `👤 *Nom :* ${form.name}`,
    `📱 *Tél :* ${form.phone}`,
    `✉️ *Email :* ${form.email}`,
    `🚗 *Service :* ${svc}`,
    form.date     ? `📅 *Date :* ${form.date}` : '',
    form.passengers ? `👥 *Passagers :* ${form.passengers}` : '',
    ``,
    `💬 *Message :*`,
    form.message,
  ].filter(Boolean).join('\n');

  return `https://wa.me/${BUSINESS_WA}?text=${encodeURIComponent(lines)}`;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    service: '', date: '', passengers: '', message: '',
  });
  const [phoneError, setPhoneError] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [submittedForm, setSubmittedForm] = useState<typeof form | null>(null);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm(f => ({ ...f, [k]: e.target.value }));
      if (k === 'phone') setPhoneError('');
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation téléphone
    if (!form.phone.trim()) {
      setPhoneError('Le numéro de téléphone est obligatoire.');
      return;
    }
    if (!validatePhone(form.phone)) {
      setPhoneError('Format invalide. Ex : 06 12 34 56 78 ou +33 6 12 34 56 78');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        // Affiche l'erreur serveur précise si dispo
        setPhoneError(data?.error || '');
        setStatus('error');
        return;
      }
      setSubmittedForm({ ...form });
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', date: '', passengers: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inp = (hasError?: boolean) =>
    `w-full px-4 py-3 rounded-xl border font-sans text-sm text-gray-800 focus:outline-none transition-colors placeholder:text-stone-400 ${
      hasError
        ? 'border-red-400 bg-red-50 focus:border-red-500'
        : 'border-stone-200 bg-white focus:border-gold-400'
    }`;
  const lbl = "block font-sans text-[0.65rem] tracking-[0.12em] uppercase text-stone-500 mb-1.5";

  // ── Écran succès ─────────────────────────────────────────────────────────────
  if (status === 'success' && submittedForm) {
    const waLink = buildWaLink(submittedForm);
    return (
      <div className="text-center py-16">
        {/* Checkmark */}
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: 'rgba(138,115,64,0.1)' }}>
          <span className="text-2xl" style={{ color: '#8a7340' }}>✓</span>
        </div>
        <h3 className="font-serif text-2xl font-normal text-gray-900 mb-3">Message envoyé</h3>
        <p className="font-sans text-sm text-stone-500 max-w-sm mx-auto mb-8">
          Notre équipe vous répond sous 30 minutes. Vous recevrez une confirmation par email.
        </p>

        {/* Bouton WhatsApp */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-7 py-4 rounded-xl font-sans text-sm font-medium text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg mb-6"
          style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.35)' }}
        >
          {/* WA icon SVG inline */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Confirmer via WhatsApp
        </a>

        <p className="font-sans text-[0.65rem] text-stone-400 mb-6">
          Votre demande est déjà enregistrée. Le bouton ci-dessus vous permet de nous contacter directement.
        </p>

        <button onClick={() => { setStatus('idle'); setSubmittedForm(null); }}
          className="font-sans text-xs tracking-[0.12em] uppercase transition-colors"
          style={{ color: '#8a7340' }}>
          Envoyer une autre demande →
        </button>
      </div>
    );
  }

  // ── Formulaire ───────────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label className={lbl}>Nom complet *</label>
        <input type="text" value={form.name} onChange={set('name')} required
          placeholder="Jean Dupont" className={inp()} />
      </div>
      <div>
        <label className={lbl}>Email *</label>
        <input type="email" value={form.email} onChange={set('email')} required
          placeholder="jean@exemple.com" className={inp()} />
      </div>

      {/* Téléphone obligatoire */}
      <div className="md:col-span-2">
        <label className={lbl}>
          Téléphone * <span className="normal-case tracking-normal text-stone-400 text-[0.6rem]">(WhatsApp accepté)</span>
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={set('phone')}
          required
          placeholder="+33 6 00 00 00 00"
          className={inp(!!phoneError)}
          dir="ltr"
        />
        {phoneError && (
          <p className="mt-1.5 font-sans text-[0.65rem] text-red-500 flex items-center gap-1">
            <span>⚠</span> {phoneError}
          </p>
        )}
        {!phoneError && form.phone && validatePhone(form.phone) && (
          <p className="mt-1.5 font-sans text-[0.65rem] flex items-center gap-1" style={{ color: '#25D366' }}>
            <span>✓</span> Numéro valide
          </p>
        )}
      </div>

      <div>
        <label className={lbl}>Type de service</label>
        <select value={form.service} onChange={set('service')} className={inp()}>
          <option value="">— Sélectionner —</option>
          {SERVICES.map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={lbl}>Date souhaitée</label>
        <input type="date" value={form.date} onChange={set('date')} className={inp()}
          min={new Date().toISOString().split('T')[0]} />
      </div>
      <div>
        <label className={lbl}>Nombre de passagers</label>
        <select value={form.passengers} onChange={set('passengers')} className={inp()}>
          <option value="">— Sélectionner —</option>
          {['1', '2', '3', '4', '5', '6', '7', '8+'].map(n => (
            <option key={n} value={n}>{n} passager{Number(n) > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label className={lbl}>Votre demande *</label>
        <textarea value={form.message} onChange={set('message')} required rows={5}
          placeholder="Décrivez votre demande : trajet, horaires, exigences particulières..."
          className={`${inp()} resize-none`} />
      </div>

      {status === 'error' && (
        <p className="md:col-span-2 text-center font-sans text-xs text-red-500">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
        </p>
      )}

      <div className="md:col-span-2">
        <button type="submit" disabled={status === 'loading'}
          className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          {status === 'loading' ? (
            <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Envoi…</>
          ) : 'Envoyer ma demande →'}
        </button>
        <p className="font-sans text-[0.65rem] text-stone-400 text-center mt-3">
          Réponse garantie sous 30 minutes · Disponible 24h/24
        </p>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <SEOLayout>
      <section className="pt-36 pb-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="tag">Nous contacter</p>
          <h1 className="heading mt-3">
            Parlez à notre <em>équipe</em> <strong>chauffeur privé Paris</strong>
          </h1>
          <p className="sf text-stone-500 mt-6 text-lg leading-relaxed max-w-2xl">
            Notre équipe est disponible 24h/24, 7j/7 pour toute demande de réservation,
            devis sur mesure ou question logistique. Réponse en moins de 30 minutes.
          </p>
        </div>
      </section>

      <section className="py-10 px-6 md:px-10" style={{ background: '#faf8f5' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: '✆', label: 'Téléphone', value: '+33 6 62 02 73 44', href: 'tel:+33662027344' },
            { icon: '💬', label: 'WhatsApp', value: 'Disponible 24h/24', href: 'https://wa.me/33662027344' },
            { icon: '✉', label: 'Email', value: 'contact@amani-limousines.com', href: 'mailto:contact@amani-limousines.com' },
          ].map(c => (
            <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-stone-200 hover:border-gold-400 transition-all group">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <p className="font-sans text-[0.6rem] tracking-[0.12em] uppercase text-stone-400">{c.label}</p>
                <p className="font-sans text-sm text-gray-800 font-medium group-hover:text-gold-400 transition-colors">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="heading mb-2">Formulaire de contact</h2>
          <p className="sf text-stone-500 text-sm mb-10">
            Remplissez le formulaire — notre équipe vous répond sous 30 minutes.
          </p>
          <ContactForm />
        </div>
      </section>
    </SEOLayout>
  );
}

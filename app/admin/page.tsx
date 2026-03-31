'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Contact, ContactStatus } from '@/lib/contacts';

const STATUS_CONFIG: Record<ContactStatus, { label: string; color: string; bg: string }> = {
  new:         { label: 'Nouveau',    color: '#1d4ed8', bg: '#eff6ff' },
  in_progress: { label: 'En cours',  color: '#92400e', bg: '#fffbeb' },
  done:        { label: 'Traité',    color: '#166534', bg: '#f0fdf4' },
};

const SERVICE_LABELS: Record<string, string> = {
  transfert:    'Transfert',
  disposition:  'Mise à dispo',
  meetgreet:    'Meet & Greet',
  convoy:       'Convoi',
  security:     'Sécurité',
  excursion:    'Excursion',
  longdistance: 'Longue dist.',
  other:        'Autre',
};

export default function AdminPage() {
  const [key, setKey] = useState('');
  const [inputKey, setInputKey] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState<Contact | null>(null);
  const [filter, setFilter] = useState<ContactStatus | 'all'>('all');

  const fetchContacts = useCallback(async (k: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin', { headers: { 'x-admin-key': k } });
      if (res.status === 401) { setError('Mot de passe incorrect'); setKey(''); return; }
      if (!res.ok) throw new Error();
      const data = await res.json();
      setContacts(data);
    } catch {
      setError('Erreur de chargement');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setKey(inputKey);
    fetchContacts(inputKey);
  };

  const updateStatus = async (id: string, status: ContactStatus) => {
    await fetch('/api/admin', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
      body: JSON.stringify({ id, status }),
    });
    setContacts(cs => cs.map(c => c.id === id ? { ...c, status } : c));
    if (selected?.id === id) setSelected(s => s ? { ...s, status } : s);
  };

  const filtered = filter === 'all' ? contacts : contacts.filter(c => c.status === filter);
  const counts = {
    all: contacts.length,
    new: contacts.filter(c => c.status === 'new').length,
    in_progress: contacts.filter(c => c.status === 'in_progress').length,
    done: contacts.filter(c => c.status === 'done').length,
  };

  // ── Login screen ──────────────────────────────────────────────────────────
  if (!key) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <p className="font-serif tracking-[0.3em] uppercase mb-1" style={{ color: '#8a7340', fontSize: '0.8rem' }}>
              Amani Limousines
            </p>
            <h1 className="font-serif text-2xl font-normal text-gray-900">Backoffice</h1>
          </div>
          <form onSubmit={handleLogin} className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
            <label className="block font-sans text-[0.65rem] tracking-[0.12em] uppercase text-stone-500 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              value={inputKey}
              onChange={e => setInputKey(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 font-sans text-sm focus:outline-none focus:border-gold-400 transition-colors mb-4"
              placeholder="••••••••"
              required
            />
            {error && <p className="font-sans text-xs text-red-500 mb-3">{error}</p>}
            <button type="submit"
              className="w-full py-3 rounded-xl font-sans text-sm font-medium text-white transition-all"
              style={{ background: '#0a0908' }}>
              Accéder →
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Main backoffice ────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <p className="font-serif tracking-[0.25em] uppercase text-sm" style={{ color: '#8a7340' }}>
            Amani Limousines
          </p>
          <span className="text-stone-300">|</span>
          <p className="font-sans text-sm text-gray-600">Backoffice — Demandes de contact</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => fetchContacts(key)}
            className="font-sans text-xs text-stone-500 hover:text-gold-400 transition-colors">
            ↺ Actualiser
          </button>
          <button onClick={() => { setKey(''); setContacts([]); }}
            className="font-sans text-xs text-stone-400 hover:text-red-400 transition-colors">
            Déconnexion
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {([['all', 'Total', '#6b7280'], ['new', 'Nouveaux', '#1d4ed8'], ['in_progress', 'En cours', '#92400e'], ['done', 'Traités', '#166534']] as const).map(([k, l, c]) => (
            <button key={k} onClick={() => setFilter(k)}
              className={`bg-white rounded-xl border p-4 text-left transition-all ${filter === k ? 'border-gold-400 shadow-sm' : 'border-stone-200 hover:border-stone-300'}`}>
              <p className="font-serif text-2xl font-normal mb-1" style={{ color: c }}>{counts[k]}</p>
              <p className="font-sans text-xs text-stone-500 uppercase tracking-wide">{l}</p>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20 text-stone-400 font-sans text-sm">Chargement…</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-stone-400 font-sans text-sm">Aucune demande</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Liste */}
            <div className="lg:col-span-2 space-y-2">
              {filtered.map(c => {
                const sc = STATUS_CONFIG[c.status];
                const isSelected = selected?.id === c.id;
                return (
                  <button key={c.id} onClick={() => setSelected(c)}
                    className={`w-full text-left bg-white rounded-xl border p-4 transition-all ${
                      isSelected ? 'border-gold-400 shadow-sm' : 'border-stone-200 hover:border-stone-300'
                    }`}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-serif text-sm font-normal text-gray-900 truncate">{c.name}</p>
                      <span className="shrink-0 font-sans text-[0.6rem] px-2 py-0.5 rounded-full"
                        style={{ background: sc.bg, color: sc.color }}>
                        {sc.label}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-stone-400 truncate">{c.email}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="font-sans text-[0.65rem] text-stone-400">
                        {SERVICE_LABELS[c.service] || c.service || '—'}
                      </p>
                      <p className="font-sans text-[0.6rem] text-stone-400">
                        {new Date(c.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Détail */}
            <div className="lg:col-span-3">
              {selected ? (
                <div className="bg-white rounded-xl border border-stone-200 p-6 sticky top-24">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="font-serif text-xl font-normal text-gray-900">{selected.name}</h2>
                      <p className="font-sans text-xs text-stone-400 mt-0.5">
                        {new Date(selected.createdAt).toLocaleString('fr-FR')} · Réf. {selected.id}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {(['new', 'in_progress', 'done'] as ContactStatus[]).map(s => {
                        const sc2 = STATUS_CONFIG[s];
                        return (
                          <button key={s} onClick={() => updateStatus(selected.id, s)}
                            className="font-sans text-[0.6rem] px-2.5 py-1 rounded-full border transition-all"
                            style={selected.status === s
                              ? { background: sc2.bg, color: sc2.color, borderColor: sc2.color }
                              : { background: 'transparent', color: '#9ca3af', borderColor: '#e5e7eb' }}>
                            {sc2.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6 font-sans text-sm">
                    {[
                      ['Email', selected.email, `mailto:${selected.email}`],
                      ['Téléphone', selected.phone || '—', selected.phone ? `tel:${selected.phone}` : null],
                      ['Service', SERVICE_LABELS[selected.service] || selected.service || '—', null],
                      ['Date souhaitée', selected.date || '—', null],
                      ['Passagers', selected.passengers || '—', null],
                    ].map(([lbl, val, href]) => (
                      <div key={lbl as string}>
                        <p className="text-[0.6rem] tracking-[0.1em] uppercase text-stone-400 mb-0.5">{lbl}</p>
                        {href ? (
                          <a href={href as string} className="text-gold-500 hover:underline font-medium" style={{ color: '#8a7340' }}>{val}</a>
                        ) : (
                          <p className="text-gray-800 font-medium">{val}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="font-sans text-[0.6rem] tracking-[0.1em] uppercase text-stone-400 mb-2">Message</p>
                    <div className="bg-stone-50 rounded-xl p-4 font-sans text-sm text-gray-700 leading-relaxed whitespace-pre-wrap border border-stone-100">
                      {selected.message}
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a href={`mailto:${selected.email}?subject=Re: Votre demande Amani Limousines`}
                      className="flex-1 py-2.5 rounded-xl text-center font-sans text-xs font-medium text-white transition-all"
                      style={{ background: '#0a0908' }}>
                      ✉ Répondre par email
                    </a>
                    {selected.phone && (
                      <a href={`tel:${selected.phone}`}
                        className="flex-1 py-2.5 rounded-xl text-center font-sans text-xs font-medium border border-stone-200 text-gray-700 hover:border-gold-400 hover:text-gold-400 transition-all">
                        ✆ Appeler
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-stone-200 p-12 text-center">
                  <p className="font-sans text-sm text-stone-400">
                    Sélectionnez une demande pour voir les détails
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

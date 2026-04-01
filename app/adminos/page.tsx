'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Contact, ContactStatus } from '@/lib/contacts';

interface ContentBlock {
  id: string;
  label: string;
  page: string;
  field: string;
  value: string;
  updatedAt: string;
}

type Tab = 'demandes' | 'contenus';

const STATUS_CONFIG: Record<ContactStatus, { label: string; color: string; bg: string }> = {
  new:         { label: 'Nouveau',   color: '#1d4ed8', bg: '#eff6ff' },
  in_progress: { label: 'En cours', color: '#92400e', bg: '#fffbeb' },
  done:        { label: 'Traité',   color: '#166534', bg: '#f0fdf4' },
};

const SERVICES = [
  { value: 'transfert',    label: 'Transfert privé' },
  { value: 'disposition',  label: 'Mise à disposition' },
  { value: 'meetgreet',    label: 'Meet & Greet' },
  { value: 'convoy',       label: 'Convoi / Délégation' },
  { value: 'security',     label: 'Sécurité rapprochée' },
  { value: 'excursion',    label: 'Excursion privée' },
  { value: 'longdistance', label: 'Longue distance' },
  { value: 'other',        label: 'Autre' },
];

const SERVICE_LABELS = Object.fromEntries(SERVICES.map(s => [s.value, s.label]));

const inp = "w-full px-3 py-2 rounded-lg border border-stone-200 font-sans text-sm text-gray-800 focus:outline-none focus:border-gold-400 transition-colors bg-white";
const lbl = "block font-sans text-[0.6rem] tracking-[0.1em] uppercase text-stone-400 mb-1";

export default function AdminPage() {
  const [key, setKey]           = useState('');
  const [inputKey, setInputKey] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [selected, setSelected] = useState<Contact | null>(null);
  const [filter, setFilter]     = useState<ContactStatus | 'all'>('all');

  // Edit mode
  const [editMode, setEditMode]   = useState(false);
  const [editForm, setEditForm]   = useState<Partial<Contact>>({});
  const [saving, setSaving]       = useState(false);
  const [saveMsg, setSaveMsg]     = useState('');

  // Tabs & Content
  const [tab, setTab] = useState<Tab>('demandes');
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const [contentLoading, setContentLoading] = useState(false);
  const [contentEditing, setContentEditing] = useState<string | null>(null);
  const [contentDraft, setContentDraft] = useState('');
  const [contentSaving, setContentSaving] = useState(false);
  const [contentMsg, setContentMsg] = useState('');

  const fetchContacts = useCallback(async (k: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/adminos', { headers: { 'x-admin-key': k } });
      if (res.status === 401) { setError('Mot de passe incorrect'); setKey(''); return; }
      if (res.status === 503) {
        const data = await res.json();
        setError(data.hint || 'ADMIN_PASSWORD non configuré sur le serveur');
        setKey('');
        return;
      }
      if (!res.ok) throw new Error();
      setContacts(await res.json());
    } catch {
      setError('Erreur de chargement — vérifiez /api/health pour diagnostiquer');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchContent = useCallback(async (k: string) => {
    setContentLoading(true);
    try {
      const res = await fetch('/api/adminos/content', { headers: { 'x-admin-key': k } });
      if (res.ok) setContentBlocks(await res.json());
    } catch { /* ignore */ }
    finally { setContentLoading(false); }
  }, []);

  const saveContent = async (id: string, value: string) => {
    setContentSaving(true);
    setContentMsg('');
    try {
      const res = await fetch('/api/adminos/content', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
        body: JSON.stringify({ id, value }),
      });
      if (res.ok) {
        setContentBlocks(bs => bs.map(b => b.id === id ? { ...b, value, updatedAt: new Date().toISOString() } : b));
        setContentEditing(null);
        setContentMsg('Contenu enregistré');
        setTimeout(() => setContentMsg(''), 2500);
      }
    } catch { setContentMsg('Erreur de sauvegarde'); }
    finally { setContentSaving(false); }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setKey(inputKey);
    fetchContacts(inputKey);
    fetchContent(inputKey);
  };

  const updateStatus = async (id: string, status: ContactStatus) => {
    await fetch('/api/adminos', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
      body: JSON.stringify({ id, status }),
    });
    setContacts(cs => cs.map(c => c.id === id ? { ...c, status } : c));
    if (selected?.id === id) setSelected(s => s ? { ...s, status } : s);
  };

  const startEdit = () => {
    if (!selected) return;
    setEditForm({ ...selected });
    setEditMode(true);
    setSaveMsg('');
  };

  const cancelEdit = () => {
    setEditMode(false);
    setEditForm({});
    setSaveMsg('');
  };

  const saveEdit = async () => {
    if (!selected) return;
    setSaving(true);
    setSaveMsg('');
    try {
      const res = await fetch('/api/adminos', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
        body: JSON.stringify({ id: selected.id, ...editForm }),
      });
      if (!res.ok) throw new Error();
      const updated = { ...selected, ...editForm } as Contact;
      setContacts(cs => cs.map(c => c.id === selected.id ? updated : c));
      setSelected(updated);
      setEditMode(false);
      setSaveMsg('Enregistré ✓');
      setTimeout(() => setSaveMsg(''), 2500);
    } catch {
      setSaveMsg('Erreur lors de la sauvegarde');
    } finally {
      setSaving(false);
    }
  };

  const ef = (k: keyof Contact) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setEditForm(f => ({ ...f, [k]: e.target.value }));

  const filtered = filter === 'all' ? contacts : contacts.filter(c => c.status === filter);
  const counts = {
    all:         contacts.length,
    new:         contacts.filter(c => c.status === 'new').length,
    in_progress: contacts.filter(c => c.status === 'in_progress').length,
    done:        contacts.filter(c => c.status === 'done').length,
  };

  // ── Login ─────────────────────────────────────────────────────────────────
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
            <input type="password" value={inputKey} onChange={e => setInputKey(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 font-sans text-sm focus:outline-none focus:border-gold-400 transition-colors mb-4"
              placeholder="••••••••" required />
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

  // ── Main ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <p className="font-serif tracking-[0.25em] uppercase text-sm" style={{ color: '#8a7340' }}>
              Amani Limousines
            </p>
            <span className="text-stone-300">|</span>
            <p className="font-sans text-sm text-gray-600">Backoffice</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => { fetchContacts(key); fetchContent(key); }}
              className="font-sans text-xs text-stone-500 hover:text-gold-400 transition-colors">
              ↺ Actualiser
            </button>
            <button onClick={() => { setKey(''); setContacts([]); setSelected(null); setEditMode(false); setContentBlocks([]); }}
              className="font-sans text-xs text-stone-400 hover:text-red-400 transition-colors">
              Déconnexion
            </button>
          </div>
        </div>
        {/* Onglets */}
        <div className="flex gap-6">
          {([['demandes', 'Demandes'], ['contenus', 'Contenus']] as const).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)}
              className={`font-sans text-xs tracking-wide pb-2 border-b-2 transition-all ${
                tab === t ? 'border-gold-400 font-medium' : 'border-transparent text-stone-400 hover:text-stone-600'
              }`}
              style={tab === t ? { color: '#8a7340' } : undefined}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* ── Onglet CONTENUS ── */}
        {tab === 'contenus' && (
          <div>
            <h2 className="font-serif text-xl font-normal text-gray-900 mb-2">Gestion des contenus</h2>
            <p className="font-sans text-xs text-stone-400 mb-6">
              Modifiez les textes du site. Les changements sont appliqués après rechargement de la page concernée.
            </p>
            {contentMsg && (
              <p className="font-sans text-xs text-green-600 mb-4">{contentMsg}</p>
            )}
            {contentLoading ? (
              <p className="font-sans text-sm text-stone-400 py-10 text-center">Chargement…</p>
            ) : contentBlocks.length === 0 ? (
              <p className="font-sans text-sm text-stone-400 py-10 text-center">Aucun contenu éditable configuré</p>
            ) : (
              <div className="space-y-4">
                {/* Regrouper par page */}
                {Array.from(new Set(contentBlocks.map(b => b.page))).map(page => (
                  <div key={page} className="bg-white rounded-xl border border-stone-200 p-5">
                    <h3 className="font-sans text-xs font-semibold tracking-[0.12em] uppercase mb-4"
                      style={{ color: '#8a7340' }}>
                      {page === 'accueil' ? 'Page d\'accueil' :
                       page === 'flotte' ? 'Page flotte' :
                       page === 'contact' ? 'Page contact' :
                       page === 'global' ? 'Informations générales' : page}
                    </h3>
                    <div className="space-y-4">
                      {contentBlocks.filter(b => b.page === page).map(block => (
                        <div key={block.id}>
                          <div className="flex items-center justify-between mb-1">
                            <label className={lbl}>{block.label}</label>
                            <p className="font-sans text-[0.55rem] text-stone-300">
                              {new Date(block.updatedAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                          {contentEditing === block.id ? (
                            <div>
                              <textarea
                                rows={block.value.length > 100 ? 4 : 2}
                                className={`${inp} resize-none`}
                                value={contentDraft}
                                onChange={e => setContentDraft(e.target.value)}
                              />
                              <div className="flex gap-2 mt-2">
                                <button
                                  onClick={() => saveContent(block.id, contentDraft)}
                                  disabled={contentSaving}
                                  className="px-4 py-2 rounded-lg font-sans text-xs font-medium text-white transition-all disabled:opacity-60"
                                  style={{ background: '#0a0908' }}>
                                  {contentSaving ? 'Enregistrement…' : 'Enregistrer'}
                                </button>
                                <button
                                  onClick={() => { setContentEditing(null); setContentDraft(''); }}
                                  className="px-4 py-2 rounded-lg font-sans text-xs border border-stone-200 text-gray-600 hover:border-stone-300 transition-all">
                                  Annuler
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div
                              onClick={() => { setContentEditing(block.id); setContentDraft(block.value); }}
                              className="bg-stone-50 rounded-lg p-3 font-sans text-sm text-gray-700 leading-relaxed border border-stone-100 cursor-pointer hover:border-gold-400 transition-all min-h-[2.5rem]">
                              {block.value || <span className="text-stone-300 italic">Vide — cliquez pour éditer</span>}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Onglet DEMANDES ── */}
        {tab === 'demandes' && <>
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {(['all', 'new', 'in_progress', 'done'] as const).map((k) => {
            const labels = { all: 'Total', new: 'Nouveaux', in_progress: 'En cours', done: 'Traités' };
            const colors = { all: '#6b7280', new: '#1d4ed8', in_progress: '#92400e', done: '#166534' };
            return (
              <button key={k} onClick={() => setFilter(k)}
                className={`bg-white rounded-xl border p-4 text-left transition-all ${filter === k ? 'border-gold-400 shadow-sm' : 'border-stone-200 hover:border-stone-300'}`}>
                <p className="font-serif text-2xl font-normal mb-1" style={{ color: colors[k] }}>{counts[k]}</p>
                <p className="font-sans text-xs text-stone-500 uppercase tracking-wide">{labels[k]}</p>
              </button>
            );
          })}
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
                return (
                  <button key={c.id} onClick={() => { setSelected(c); setEditMode(false); setSaveMsg(''); }}
                    className={`w-full text-left bg-white rounded-xl border p-4 transition-all ${
                      selected?.id === c.id ? 'border-gold-400 shadow-sm' : 'border-stone-200 hover:border-stone-300'
                    }`}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-serif text-sm font-normal text-gray-900 truncate">{c.name}</p>
                      <span className="shrink-0 font-sans text-[0.6rem] px-2 py-0.5 rounded-full"
                        style={{ background: sc.bg, color: sc.color }}>{sc.label}</span>
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

            {/* Détail / Édition */}
            <div className="lg:col-span-3">
              {selected ? (
                <div className="bg-white rounded-xl border border-stone-200 p-6 sticky top-24">

                  {/* Header panneau */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h2 className="font-serif text-xl font-normal text-gray-900">
                        {editMode ? editForm.name || selected.name : selected.name}
                      </h2>
                      <p className="font-sans text-xs text-stone-400 mt-0.5">
                        {new Date(selected.createdAt).toLocaleString('fr-FR')} · Réf. {selected.id}
                      </p>
                    </div>
                    {/* Statut */}
                    <div className="flex gap-2 flex-wrap justify-end">
                      {(['new', 'in_progress', 'done'] as ContactStatus[]).map(s => {
                        const sc2 = STATUS_CONFIG[s];
                        const current = editMode ? (editForm.status || selected.status) : selected.status;
                        return (
                          <button key={s}
                            onClick={() => editMode
                              ? setEditForm(f => ({ ...f, status: s }))
                              : updateStatus(selected.id, s)
                            }
                            className="font-sans text-[0.6rem] px-2.5 py-1 rounded-full border transition-all"
                            style={current === s
                              ? { background: sc2.bg, color: sc2.color, borderColor: sc2.color }
                              : { background: 'transparent', color: '#9ca3af', borderColor: '#e5e7eb' }}>
                            {sc2.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* ── Mode LECTURE ── */}
                  {!editMode && (
                    <>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-5 font-sans text-sm">
                        {[
                          ['Email',         selected.email,                    `mailto:${selected.email}`],
                          ['Téléphone',     selected.phone || '—',             selected.phone ? `tel:${selected.phone}` : null],
                          ['Service',       SERVICE_LABELS[selected.service] || selected.service || '—', null],
                          ['Date souhaitée',selected.date || '—',              null],
                          ['Passagers',     selected.passengers || '—',        null],
                        ].map(([l, v, href]) => (
                          <div key={l as string}>
                            <p className="text-[0.6rem] tracking-[0.1em] uppercase text-stone-400 mb-0.5">{l}</p>
                            {href
                              ? <a href={href as string} className="font-medium hover:underline" style={{ color: '#8a7340' }}>{v}</a>
                              : <p className="text-gray-800 font-medium">{v}</p>}
                          </div>
                        ))}
                      </div>
                      <div className="mb-5">
                        <p className={lbl}>Message</p>
                        <div className="bg-stone-50 rounded-xl p-4 font-sans text-sm text-gray-700 leading-relaxed whitespace-pre-wrap border border-stone-100">
                          {selected.message}
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <button onClick={startEdit}
                          className="px-4 py-2.5 rounded-xl font-sans text-xs font-medium border border-stone-200 text-gray-600 hover:border-gold-400 hover:text-gold-400 transition-all">
                          ✎ Éditer
                        </button>
                        <a href={`mailto:${selected.email}?subject=Re: Votre demande Amani Limousines`}
                          className="px-4 py-2.5 rounded-xl font-sans text-xs font-medium text-white transition-all"
                          style={{ background: '#0a0908' }}>
                          ✉ Répondre
                        </a>
                        {selected.phone && (
                          <>
                            <a href={`tel:${selected.phone}`}
                              className="px-4 py-2.5 rounded-xl font-sans text-xs font-medium border border-stone-200 text-gray-700 hover:border-gold-400 hover:text-gold-400 transition-all">
                              ✆ Appeler
                            </a>
                            <a
                              href={`https://wa.me/${selected.phone.replace(/[\s.\-()+ ]/g, '').replace(/^0/, '33')}?text=${encodeURIComponent(`Bonjour ${selected.name}, suite à votre demande sur Amani Limousines 🙂`)}`}
                              target="_blank" rel="noopener noreferrer"
                              className="px-4 py-2.5 rounded-xl font-sans text-xs font-medium text-white transition-all"
                              style={{ background: '#25D366' }}>
                              WhatsApp
                            </a>
                          </>
                        )}
                      </div>
                      {saveMsg && (
                        <p className="mt-3 font-sans text-xs text-green-600">{saveMsg}</p>
                      )}
                    </>
                  )}

                  {/* ── Mode ÉDITION ── */}
                  {editMode && (
                    <>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className={lbl}>Nom</label>
                          <input className={inp} value={editForm.name || ''} onChange={ef('name')} />
                        </div>
                        <div>
                          <label className={lbl}>Email</label>
                          <input type="email" className={inp} value={editForm.email || ''} onChange={ef('email')} />
                        </div>
                        <div>
                          <label className={lbl}>Téléphone</label>
                          <input type="tel" className={inp} dir="ltr" value={editForm.phone || ''} onChange={ef('phone')} />
                        </div>
                        <div>
                          <label className={lbl}>Service</label>
                          <select className={inp} value={editForm.service || ''} onChange={ef('service')}>
                            <option value="">— Sélectionner —</option>
                            {SERVICES.map(s => (
                              <option key={s.value} value={s.value}>{s.label}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className={lbl}>Date souhaitée</label>
                          <input type="date" className={inp} value={editForm.date || ''} onChange={ef('date')} />
                        </div>
                        <div>
                          <label className={lbl}>Passagers</label>
                          <select className={inp} value={editForm.passengers || ''} onChange={ef('passengers')}>
                            <option value="">—</option>
                            {['1','2','3','4','5','6','7','8+'].map(n => (
                              <option key={n} value={n}>{n}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mb-5">
                        <label className={lbl}>Message</label>
                        <textarea rows={5} className={`${inp} resize-none`}
                          value={editForm.message || ''} onChange={ef('message')} />
                      </div>
                      <div className="flex gap-2">
                        <button onClick={saveEdit} disabled={saving}
                          className="px-5 py-2.5 rounded-xl font-sans text-xs font-medium text-white transition-all disabled:opacity-60"
                          style={{ background: '#0a0908' }}>
                          {saving ? 'Enregistrement…' : '✓ Enregistrer'}
                        </button>
                        <button onClick={cancelEdit}
                          className="px-5 py-2.5 rounded-xl font-sans text-xs font-medium border border-stone-200 text-gray-600 hover:border-stone-300 transition-all">
                          Annuler
                        </button>
                      </div>
                      {saveMsg && (
                        <p className="mt-3 font-sans text-xs text-red-500">{saveMsg}</p>
                      )}
                    </>
                  )}
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
        </>}
      </div>
    </div>
  );
}

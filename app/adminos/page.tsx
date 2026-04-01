'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

/* ─── Types ─── */
interface PageField {
  key: string;
  label: string;
  type: 'text' | 'textarea';
}

interface PageEntry {
  slug: string;
  title: string;
  category: string;
  fields: PageField[];
  content: Record<string, string>;
  defaults: Record<string, string>;
  hasOverrides: boolean;
}

/* ─── Styles réutilisables ─── */
const inp = 'w-full px-3 py-2.5 rounded-lg border border-stone-200 font-sans text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all bg-white';
const lbl = 'block font-sans text-[0.65rem] tracking-[0.1em] uppercase text-stone-400 mb-1.5';
const GOLD = '#8a7340';

export default function AdminPage() {
  /* ─── Auth state ─── */
  const [key, setKey] = useState('');
  const [inputKey, setInputKey] = useState('');
  const [error, setError] = useState('');

  /* ─── Pages state ─── */
  const [pages, setPages] = useState<PageEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  /* ─── Editor state ─── */
  const [draft, setDraft] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');
  const [hasChanges, setHasChanges] = useState(false);

  /* ─── Fetch pages ─── */
  const fetchPages = useCallback(async (k: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/adminos/pages', { headers: { 'x-admin-key': k } });
      if (res.status === 401) { setError('Mot de passe incorrect'); setKey(''); return; }
      if (res.status === 503) {
        const data = await res.json();
        setError(data.hint || 'ADMIN_PASSWORD non configuré');
        setKey('');
        return;
      }
      if (!res.ok) throw new Error();
      const data: PageEntry[] = await res.json();
      setPages(data);
      // Ouvrir toutes les catégories par défaut
      setOpenCategories(new Set(data.map(p => p.category)));
    } catch {
      setError('Erreur de chargement');
    } finally {
      setLoading(false);
    }
  }, []);

  /* ─── Login ─── */
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setKey(inputKey);
    fetchPages(inputKey);
  };

  /* ─── Selected page ─── */
  const selectedPage = useMemo(() => pages.find(p => p.slug === selectedSlug), [pages, selectedSlug]);

  /* ─── Load draft when selecting a page ─── */
  useEffect(() => {
    if (selectedPage) {
      // Merge : si un override existe on le prend, sinon on prend la valeur par défaut
      const merged: Record<string, string> = {};
      for (const field of selectedPage.fields) {
        merged[field.key] = selectedPage.content[field.key] ?? selectedPage.defaults[field.key] ?? '';
      }
      setDraft(merged);
      setHasChanges(false);
      setSaveMsg('');
    }
  }, [selectedPage]);

  /* ─── Group pages by category ─── */
  const grouped = useMemo(() => {
    const q = search.toLowerCase().trim();
    const filtered = q
      ? pages.filter(p =>
          p.title.toLowerCase().includes(q) ||
          p.slug.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        )
      : pages;

    const map = new Map<string, PageEntry[]>();
    for (const p of filtered) {
      const list = map.get(p.category) || [];
      list.push(p);
      map.set(p.category, list);
    }
    return map;
  }, [pages, search]);

  /* ─── Update draft field ─── */
  const updateField = (key: string, value: string) => {
    setDraft(d => ({ ...d, [key]: value }));
    setHasChanges(true);
    setSaveMsg('');
  };

  /* ─── Save page content ─── */
  const savePage = async () => {
    if (!selectedSlug) return;
    setSaving(true);
    setSaveMsg('');
    try {
      const res = await fetch('/api/adminos/pages', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
        body: JSON.stringify({ slug: selectedSlug, content: draft }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        // Mettre à jour la page localement
        setPages(ps => ps.map(p =>
          p.slug === selectedSlug
            ? { ...p, content: { ...draft }, hasOverrides: Object.values(draft).some(v => v.trim() !== '') }
            : p
        ));
        setHasChanges(false);
        setSaveMsg('Enregistré avec succès');
        setTimeout(() => setSaveMsg(''), 3000);
      } else {
        const detail = data.detail || data.error || `HTTP ${res.status}`;
        setSaveMsg(`Erreur : ${detail}`);
      }
    } catch (err: any) {
      setSaveMsg(`Erreur réseau : ${err?.message || 'connexion impossible'}`);
    } finally {
      setSaving(false);
    }
  };

  /* ─── Reset page overrides ─── */
  const resetPage = async () => {
    if (!selectedSlug || !confirm('Remettre cette page aux valeurs par défaut ? Les modifications seront supprimées.')) return;
    try {
      await fetch('/api/adminos/pages', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
        body: JSON.stringify({ slug: selectedSlug }),
      });
      setDraft({});
      setPages(ps => ps.map(p =>
        p.slug === selectedSlug ? { ...p, content: {}, hasOverrides: false } : p
      ));
      setHasChanges(false);
      setSaveMsg('Réinitialisé aux valeurs par défaut');
      setTimeout(() => setSaveMsg(''), 3000);
    } catch {
      setSaveMsg('Erreur lors de la réinitialisation');
    }
  };

  /* ─── Toggle category ─── */
  const toggleCategory = (cat: string) => {
    setOpenCategories(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat); else next.add(cat);
      return next;
    });
  };

  /* ─── Stats ─── */
  const totalPages = pages.length;
  const editedPages = pages.filter(p => p.hasOverrides).length;

  // ══════════════════════════════════════════════════════════════════════════════
  // LOGIN SCREEN
  // ══════════════════════════════════════════════════════════════════════════════
  if (!key) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <p className="font-serif tracking-[0.3em] uppercase mb-1" style={{ color: GOLD, fontSize: '0.8rem' }}>
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
              className="w-full px-4 py-3 rounded-xl border border-stone-200 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all mb-4"
              placeholder="••••••••"
              required
            />
            {error && <p className="font-sans text-xs text-red-500 mb-3">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-sans text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ background: '#0a0908' }}
            >
              Accéder au backoffice
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // MAIN LAYOUT
  // ══════════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* ─── Header ─── */}
      <header className="bg-white border-b border-stone-200 px-6 py-4 sticky top-0 z-20 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="font-serif tracking-[0.25em] uppercase text-sm" style={{ color: GOLD }}>
              Amani Limousines
            </p>
            <span className="text-stone-300">|</span>
            <p className="font-sans text-sm text-gray-600">Gestion des contenus</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-stone-400">
              {editedPages}/{totalPages} pages modifiées
            </span>
            <button
              onClick={() => fetchPages(key)}
              className="font-sans text-xs text-stone-500 hover:text-amber-600 transition-colors"
            >
              ↺ Actualiser
            </button>
            <button
              onClick={() => { setKey(''); setPages([]); setSelectedSlug(null); }}
              className="font-sans text-xs text-stone-400 hover:text-red-400 transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="font-sans text-sm text-stone-400">Chargement des pages…</p>
        </div>
      ) : (
        <div className="flex flex-1 overflow-hidden">
          {/* ═══ SIDEBAR ═══ */}
          <aside className="w-80 bg-white border-r border-stone-200 flex flex-col shrink-0 overflow-hidden">
            {/* Search */}
            <div className="p-4 border-b border-stone-100">
              <input
                type="text"
                placeholder="Rechercher une page…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-stone-200 font-sans text-xs focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all bg-stone-50"
              />
            </div>

            {/* Page list */}
            <nav className="flex-1 overflow-y-auto">
              {Array.from(grouped.entries()).map(([category, categoryPages]) => (
                <div key={category}>
                  {/* Category header */}
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-100 hover:bg-stone-100 transition-colors"
                  >
                    <span className="font-sans text-[0.6rem] font-semibold tracking-[0.15em] uppercase" style={{ color: GOLD }}>
                      {category}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="font-sans text-[0.55rem] text-stone-400">{categoryPages.length}</span>
                      <span className="text-stone-400 text-xs">{openCategories.has(category) ? '▾' : '▸'}</span>
                    </span>
                  </button>

                  {/* Pages in category */}
                  {openCategories.has(category) && (
                    <div>
                      {categoryPages.map(page => (
                        <button
                          key={page.slug}
                          onClick={() => { setSelectedSlug(page.slug); }}
                          className={`w-full text-left px-4 py-2.5 border-b border-stone-50 flex items-center justify-between transition-all ${
                            selectedSlug === page.slug
                              ? 'bg-amber-50 border-l-2'
                              : 'hover:bg-stone-50 border-l-2 border-l-transparent'
                          }`}
                          style={selectedSlug === page.slug ? { borderLeftColor: GOLD } : undefined}
                        >
                          <span className="font-sans text-xs text-gray-700 truncate pr-2">{page.title}</span>
                          {page.hasOverrides && (
                            <span className="shrink-0 w-2 h-2 rounded-full bg-amber-400" title="Contenu modifié" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* ═══ MAIN CONTENT ═══ */}
          <main className="flex-1 overflow-y-auto">
            {!selectedPage ? (
              /* Empty state */
              <div className="flex items-center justify-center h-full">
                <div className="text-center max-w-md">
                  <div className="text-5xl mb-4 opacity-20">📄</div>
                  <h2 className="font-serif text-xl text-gray-900 mb-2">Gestion des contenus</h2>
                  <p className="font-sans text-sm text-stone-400 leading-relaxed">
                    Sélectionnez une page dans le menu à gauche pour modifier son contenu.
                    Les modifications sont sauvegardées et appliquées au site après rechargement.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-left">
                    <div className="bg-white rounded-xl border border-stone-200 p-4">
                      <p className="font-serif text-2xl mb-1" style={{ color: GOLD }}>{totalPages}</p>
                      <p className="font-sans text-xs text-stone-500">Pages totales</p>
                    </div>
                    <div className="bg-white rounded-xl border border-stone-200 p-4">
                      <p className="font-serif text-2xl mb-1" style={{ color: GOLD }}>{editedPages}</p>
                      <p className="font-sans text-xs text-stone-500">Pages modifiées</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Editor */
              <div className="max-w-3xl mx-auto p-8">
                {/* Page header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="font-sans text-[0.6rem] tracking-[0.15em] uppercase mb-1" style={{ color: GOLD }}>
                      {selectedPage.category}
                    </p>
                    <h2 className="font-serif text-2xl font-normal text-gray-900">{selectedPage.title}</h2>
                    <p className="font-sans text-xs text-stone-400 mt-1">
                      /{selectedPage.slug === 'accueil' ? '' : selectedPage.slug === '_global' ? '(global)' : selectedPage.slug}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedPage.hasOverrides && (
                      <button
                        onClick={resetPage}
                        className="px-3 py-2 rounded-lg font-sans text-xs border border-stone-200 text-stone-500 hover:border-red-300 hover:text-red-500 transition-all"
                      >
                        Réinitialiser
                      </button>
                    )}
                  </div>
                </div>

                {/* Fields */}
                <div className="space-y-5">
                  {selectedPage.fields.map(field => {
                    const isDefault = !selectedPage.content[field.key] && !!selectedPage.defaults[field.key];
                    const defaultVal = selectedPage.defaults[field.key] || '';
                    return (
                      <div key={field.key} className="bg-white rounded-xl border border-stone-200 p-5">
                        <div className="flex items-center justify-between mb-1.5">
                          <label className={lbl} style={{ marginBottom: 0 }}>{field.label}</label>
                          {isDefault && !hasChanges && (
                            <span className="font-sans text-[0.55rem] text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">
                              valeur par défaut
                            </span>
                          )}
                          {selectedPage.content[field.key] && (
                            <span className="font-sans text-[0.55rem] text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                              personnalisé
                            </span>
                          )}
                        </div>
                        {field.type === 'textarea' ? (
                          <textarea
                            rows={4}
                            className={`${inp} resize-y`}
                            value={draft[field.key] || ''}
                            onChange={e => updateField(field.key, e.target.value)}
                            placeholder={defaultVal || 'Entrez une valeur…'}
                          />
                        ) : (
                          <input
                            type="text"
                            className={inp}
                            value={draft[field.key] || ''}
                            onChange={e => updateField(field.key, e.target.value)}
                            placeholder={defaultVal || 'Entrez une valeur…'}
                          />
                        )}
                        <p className="font-sans text-[0.55rem] text-stone-300 mt-1.5">
                          Clé : <code className="bg-stone-50 px-1 py-0.5 rounded text-stone-400">{field.key}</code>
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Save bar */}
                <div className="sticky bottom-0 bg-stone-50/95 backdrop-blur-sm border-t border-stone-200 mt-8 -mx-8 px-8 py-4 flex items-center justify-between">
                  <div>
                    {saveMsg && (
                      <p className={`font-sans text-xs ${saveMsg.includes('Erreur') ? 'text-red-500' : 'text-green-600'}`}>
                        {saveMsg}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={savePage}
                    disabled={saving || !hasChanges}
                    className="px-6 py-3 rounded-xl font-sans text-sm font-medium text-white transition-all disabled:opacity-40 hover:opacity-90"
                    style={{ background: hasChanges ? '#0a0908' : '#9ca3af' }}
                  >
                    {saving ? 'Enregistrement…' : hasChanges ? 'Enregistrer les modifications' : 'Aucune modification'}
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';

/* ─── Types ─── */
interface PageField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'richtext' | 'image';
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

interface ImageItem {
  url: string;
  name: string;
  category: string;
  size: number;
}

/* ─── Constantes ─── */
const GOLD = '#8a7340';
const inp =
  'w-full px-3 py-2.5 rounded-lg border border-stone-200 font-sans text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all bg-white';
const lbl =
  'block font-sans text-[0.65rem] tracking-[0.1em] uppercase text-stone-400 mb-1.5';

/* ─────────────────────────────────────────────────────────────
   TIPTAP EDITOR COMPONENT
   ───────────────────────────────────────────────────────────── */
function RichEditor({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false, autolink: true }),
      Placeholder.configure({ placeholder: placeholder || 'Rédigez votre texte…' }),
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'tiptap-editor min-h-[120px] px-3 py-2.5 focus:outline-none font-sans text-sm text-gray-800',
      },
    },
  });

  // Sync value from outside (page change)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!editor) return null;

  const toolbarBtn = (active: boolean, onClick: () => void, label: string) => (
    <button
      type="button"
      onClick={onClick}
      title={label}
      className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
        active
          ? 'bg-stone-800 text-white'
          : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
      }`}
    >
      {label}
    </button>
  );

  const addLink = () => {
    const url = window.prompt('URL du lien :');
    if (!url) return;
    editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div className="rounded-lg border border-stone-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-amber-200 focus-within:border-amber-400 transition-all">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 px-2 py-2 border-b border-stone-100 bg-stone-50">
        {toolbarBtn(editor.isActive('bold'), () => editor.chain().focus().toggleBold().run(), 'G')}
        {toolbarBtn(
          editor.isActive('italic'),
          () => editor.chain().focus().toggleItalic().run(),
          'I'
        )}
        <span className="w-px h-4 bg-stone-200 mx-0.5" />
        {toolbarBtn(
          editor.isActive('heading', { level: 2 }),
          () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
          'H2'
        )}
        {toolbarBtn(
          editor.isActive('heading', { level: 3 }),
          () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
          'H3'
        )}
        <span className="w-px h-4 bg-stone-200 mx-0.5" />
        {toolbarBtn(
          editor.isActive('bulletList'),
          () => editor.chain().focus().toggleBulletList().run(),
          '• Liste'
        )}
        {toolbarBtn(
          editor.isActive('orderedList'),
          () => editor.chain().focus().toggleOrderedList().run(),
          '1. Liste'
        )}
        <span className="w-px h-4 bg-stone-200 mx-0.5" />
        {toolbarBtn(editor.isActive('link'), addLink, '🔗 Lien')}
        {editor.isActive('link') &&
          toolbarBtn(false, () => editor.chain().focus().unsetLink().run(), '✕ Lien')}
        <span className="w-px h-4 bg-stone-200 mx-0.5" />
        {toolbarBtn(false, () => editor.chain().focus().undo().run(), '↩ Annuler')}
        {toolbarBtn(false, () => editor.chain().focus().redo().run(), '↪ Refaire')}
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   IMAGE MANAGER PANEL
   ───────────────────────────────────────────────────────────── */
function ImageManager({ adminKey }: { adminKey: string }) {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState('');
  const [filter, setFilter] = useState<'all' | 'uploads' | 'vehicles' | 'general'>('all');
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/adminos/images', {
        headers: { 'x-admin-key': adminKey },
      });
      if (res.ok) setImages(await res.json());
    } finally {
      setLoading(false);
    }
  }, [adminKey]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const uploadFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Seuls les fichiers image sont acceptés.');
      return;
    }
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/adminos/images', {
        method: 'POST',
        headers: { 'x-admin-key': adminKey },
        body: fd,
      });
      const data = await res.json();
      if (res.ok) {
        await fetchImages();
      } else {
        alert(data.error || 'Erreur upload');
      }
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(`https://www.amani-limousines.com${url}`);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(''), 2000);
  };

  const deleteImage = async (img: ImageItem) => {
    if (img.category !== 'uploads') {
      alert('Seules les images uploadées peuvent être supprimées.');
      return;
    }
    if (!confirm(`Supprimer "${img.name}" ?`)) return;
    await fetch('/api/adminos/images', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
      body: JSON.stringify({ name: img.name }),
    });
    setImages((prev) => prev.filter((i) => i.url !== img.url));
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} o`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} Ko`;
    return `${(bytes / 1024 / 1024).toFixed(1)} Mo`;
  };

  const filtered = filter === 'all' ? images : images.filter((i) => i.category === filter);

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-serif text-2xl font-normal text-gray-900">Gestionnaire d'images</h2>
          <p className="font-sans text-xs text-stone-400 mt-1">
            {images.length} image{images.length !== 1 ? 's' : ''} disponible
            {images.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="px-4 py-2.5 rounded-xl font-sans text-sm font-medium text-white transition-all hover:opacity-90 disabled:opacity-50"
          style={{ background: '#0a0908' }}
        >
          {uploading ? 'Upload en cours…' : '+ Uploader une image'}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Drop zone */}
      <div
        className={`mb-6 border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
          dragOver ? 'border-amber-400 bg-amber-50' : 'border-stone-200 bg-stone-50'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileRef.current?.click()}
        style={{ cursor: 'pointer' }}
      >
        <p className="font-sans text-sm text-stone-400">
          {uploading
            ? 'Upload en cours…'
            : 'Glissez-déposez une image ici ou cliquez pour sélectionner'}
        </p>
        <p className="font-sans text-xs text-stone-300 mt-1">JPG, PNG, WebP, GIF, SVG — max 10 Mo</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-5">
        {(['all', 'uploads', 'vehicles', 'general'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg font-sans text-xs transition-colors ${
              filter === f
                ? 'bg-stone-900 text-white'
                : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            {f === 'all'
              ? `Toutes (${images.length})`
              : f === 'uploads'
                ? `Uploadées (${images.filter((i) => i.category === 'uploads').length})`
                : f === 'vehicles'
                  ? `Véhicules (${images.filter((i) => i.category === 'vehicles').length})`
                  : `Général (${images.filter((i) => i.category === 'general').length})`}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20">
          <p className="font-sans text-sm text-stone-400">Chargement des images…</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-sans text-sm text-stone-400">Aucune image dans cette catégorie.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map((img) => (
            <div
              key={img.url}
              className="group relative bg-white rounded-xl border border-stone-200 overflow-hidden hover:border-amber-300 transition-all"
            >
              {/* Image preview */}
              <div className="aspect-square bg-stone-100 flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.url}
                  alt={img.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-2">
                <p className="font-sans text-[0.6rem] text-stone-500 truncate" title={img.name}>
                  {img.name}
                </p>
                <p className="font-sans text-[0.55rem] text-stone-300">{formatSize(img.size)}</p>
              </div>

              {/* Actions overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2">
                <button
                  onClick={() => copyUrl(img.url)}
                  className="w-full py-1.5 rounded-lg font-sans text-xs font-medium bg-white text-stone-900 hover:bg-amber-50 transition-colors"
                >
                  {copiedUrl === img.url ? '✓ Copié !' : 'Copier l\'URL'}
                </button>
                <a
                  href={img.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-1.5 rounded-lg font-sans text-xs font-medium bg-white/20 text-white hover:bg-white/30 transition-colors text-center"
                >
                  Ouvrir
                </a>
                {img.category === 'uploads' && (
                  <button
                    onClick={() => deleteImage(img)}
                    className="w-full py-1.5 rounded-lg font-sans text-xs font-medium bg-red-500 text-white hover:bg-red-600 transition-colors"
                  >
                    Supprimer
                  </button>
                )}
              </div>

              {/* Category badge */}
              <div className="absolute top-1.5 left-1.5">
                <span
                  className={`font-sans text-[0.5rem] px-1.5 py-0.5 rounded-full font-medium ${
                    img.category === 'uploads'
                      ? 'bg-amber-100 text-amber-700'
                      : img.category === 'vehicles'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN ADMIN PAGE
   ───────────────────────────────────────────────────────────── */
export default function AdminPage() {
  /* ─── Auth ─── */
  const [key, setKey] = useState('');
  const [inputKey, setInputKey] = useState('');
  const [error, setError] = useState('');

  /* ─── Pages ─── */
  const [pages, setPages] = useState<PageEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  /* ─── Editor ─── */
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
      if (res.status === 401) {
        setError('Mot de passe incorrect');
        setKey('');
        return;
      }
      if (res.status === 503) {
        const data = await res.json();
        setError(data.hint || 'ADMIN_PASSWORD non configuré');
        setKey('');
        return;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: PageEntry[] = await res.json();
      setPages(data);
      setOpenCategories(new Set(data.map((p) => p.category)));
    } catch (err: any) {
      setError(`Erreur de chargement : ${err?.message || 'connexion impossible'}`);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setKey(inputKey);
    fetchPages(inputKey);
  };

  const selectedPage = useMemo(
    () => pages.find((p) => p.slug === selectedSlug),
    [pages, selectedSlug]
  );

  /* ─── Charger le draft à la sélection de page ─── */
  useEffect(() => {
    if (selectedPage) {
      const merged: Record<string, string> = {};
      for (const field of selectedPage.fields) {
        merged[field.key] =
          selectedPage.content[field.key] ?? selectedPage.defaults[field.key] ?? '';
      }
      setDraft(merged);
      setHasChanges(false);
      setSaveMsg('');
    }
  }, [selectedPage]);

  /* ─── Grouper les pages par catégorie ─── */
  const grouped = useMemo(() => {
    const q = search.toLowerCase().trim();
    const filtered = q
      ? pages.filter(
          (p) =>
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

  const updateField = (fieldKey: string, value: string) => {
    setDraft((d) => ({ ...d, [fieldKey]: value }));
    setHasChanges(true);
    setSaveMsg('');
  };

  /* ─── Sauvegarder ─── */
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
        setPages((ps) =>
          ps.map((p) =>
            p.slug === selectedSlug
              ? {
                  ...p,
                  content: { ...draft },
                  hasOverrides: Object.values(draft).some((v) => v.trim() !== ''),
                }
              : p
          )
        );
        setHasChanges(false);
        setSaveMsg('✓ Enregistré avec succès');
        setTimeout(() => setSaveMsg(''), 3000);
      } else {
        setSaveMsg(`Erreur : ${data.detail || data.error || `HTTP ${res.status}`}`);
      }
    } catch (err: any) {
      setSaveMsg(`Erreur réseau : ${err?.message || 'connexion impossible'}`);
    } finally {
      setSaving(false);
    }
  };

  /* ─── Réinitialiser ─── */
  const resetPage = async () => {
    if (
      !selectedSlug ||
      !confirm('Remettre cette page aux valeurs par défaut ? Les modifications seront supprimées.')
    )
      return;
    try {
      await fetch('/api/adminos/pages', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
        body: JSON.stringify({ slug: selectedSlug }),
      });
      // Reset draft to defaults
      const page = pages.find((p) => p.slug === selectedSlug);
      if (page) {
        const defaults: Record<string, string> = {};
        for (const f of page.fields) defaults[f.key] = page.defaults[f.key] ?? '';
        setDraft(defaults);
      }
      setPages((ps) =>
        ps.map((p) =>
          p.slug === selectedSlug ? { ...p, content: {}, hasOverrides: false } : p
        )
      );
      setHasChanges(false);
      setSaveMsg('✓ Réinitialisé aux valeurs par défaut');
      setTimeout(() => setSaveMsg(''), 3000);
    } catch {
      setSaveMsg('Erreur lors de la réinitialisation');
    }
  };

  const toggleCategory = (cat: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const totalPages = pages.length;
  const editedPages = pages.filter((p) => p.hasOverrides).length;

  /* ══════════════════════════════════════════════════════
     LOGIN
  ══════════════════════════════════════════════════════ */
  if (!key) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <p
              className="font-serif tracking-[0.3em] uppercase mb-1"
              style={{ color: GOLD, fontSize: '0.8rem' }}
            >
              Amani Limousines
            </p>
            <h1 className="font-serif text-2xl font-normal text-gray-900">Backoffice</h1>
          </div>
          <form
            onSubmit={handleLogin}
            className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm"
          >
            <label className="block font-sans text-[0.65rem] tracking-[0.12em] uppercase text-stone-500 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all mb-4"
              placeholder="••••••••"
              required
              autoFocus
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

  /* ══════════════════════════════════════════════════════
     MAIN LAYOUT
  ══════════════════════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Header */}
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
              onClick={() => {
                setKey('');
                setPages([]);
                setSelectedSlug(null);
              }}
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
          <aside className="w-72 bg-white border-r border-stone-200 flex flex-col shrink-0 overflow-hidden">
            {/* Search */}
            <div className="p-4 border-b border-stone-100">
              <input
                type="text"
                placeholder="Rechercher une page…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-stone-200 font-sans text-xs focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all bg-stone-50"
              />
            </div>

            {/* Images shortcut */}
            <button
              onClick={() => setSelectedSlug('__images__')}
              className={`flex items-center gap-2.5 px-4 py-3 border-b border-stone-100 transition-all ${
                selectedSlug === '__images__'
                  ? 'bg-amber-50 border-l-2'
                  : 'hover:bg-stone-50 border-l-2 border-l-transparent'
              }`}
              style={selectedSlug === '__images__' ? { borderLeftColor: GOLD } : undefined}
            >
              <span className="text-base">🖼</span>
              <span className="font-sans text-xs text-gray-700 font-medium">
                Gestionnaire d'images
              </span>
            </button>

            {/* Page list */}
            <nav className="flex-1 overflow-y-auto">
              {Array.from(grouped.entries()).map(([category, categoryPages]) => (
                <div key={category}>
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-100 hover:bg-stone-100 transition-colors"
                  >
                    <span
                      className="font-sans text-[0.6rem] font-semibold tracking-[0.15em] uppercase"
                      style={{ color: GOLD }}
                    >
                      {category}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="font-sans text-[0.55rem] text-stone-400">
                        {categoryPages.length}
                      </span>
                      <span className="text-stone-400 text-xs">
                        {openCategories.has(category) ? '▾' : '▸'}
                      </span>
                    </span>
                  </button>

                  {openCategories.has(category) && (
                    <div>
                      {categoryPages.map((page) => (
                        <button
                          key={page.slug}
                          onClick={() => setSelectedSlug(page.slug)}
                          className={`w-full text-left px-4 py-2.5 border-b border-stone-50 flex items-center justify-between transition-all ${
                            selectedSlug === page.slug
                              ? 'bg-amber-50 border-l-2'
                              : 'hover:bg-stone-50 border-l-2 border-l-transparent'
                          }`}
                          style={
                            selectedSlug === page.slug ? { borderLeftColor: GOLD } : undefined
                          }
                        >
                          <span className="font-sans text-xs text-gray-700 truncate pr-2">
                            {page.title}
                          </span>
                          {page.hasOverrides && (
                            <span
                              className="shrink-0 w-2 h-2 rounded-full bg-amber-400"
                              title="Contenu modifié"
                            />
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
            {/* Image Manager */}
            {selectedSlug === '__images__' ? (
              <ImageManager adminKey={key} />
            ) : !selectedPage ? (
              /* Empty state */
              <div className="flex items-center justify-center h-full">
                <div className="text-center max-w-md">
                  <div className="text-5xl mb-4 opacity-20">📄</div>
                  <h2 className="font-serif text-xl text-gray-900 mb-2">
                    Gestion des contenus
                  </h2>
                  <p className="font-sans text-sm text-stone-400 leading-relaxed">
                    Sélectionnez une page dans le menu à gauche pour modifier son contenu, ou
                    accédez au gestionnaire d'images.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-left">
                    <div className="bg-white rounded-xl border border-stone-200 p-4">
                      <p className="font-serif text-2xl mb-1" style={{ color: GOLD }}>
                        {totalPages}
                      </p>
                      <p className="font-sans text-xs text-stone-500">Pages totales</p>
                    </div>
                    <div className="bg-white rounded-xl border border-stone-200 p-4">
                      <p className="font-serif text-2xl mb-1" style={{ color: GOLD }}>
                        {editedPages}
                      </p>
                      <p className="font-sans text-xs text-stone-500">Pages modifiées</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Page Editor */
              <div className="max-w-3xl mx-auto p-8">
                {/* Page header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p
                      className="font-sans text-[0.6rem] tracking-[0.15em] uppercase mb-1"
                      style={{ color: GOLD }}
                    >
                      {selectedPage.category}
                    </p>
                    <h2 className="font-serif text-2xl font-normal text-gray-900">
                      {selectedPage.title}
                    </h2>
                    <p className="font-sans text-xs text-stone-400 mt-1">
                      /
                      {selectedPage.slug === 'accueil'
                        ? ''
                        : selectedPage.slug === '_global'
                          ? '(global)'
                          : selectedPage.slug}
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
                  {selectedPage.fields.map((field) => {
                    const isDefault =
                      !selectedPage.content[field.key] && !!selectedPage.defaults[field.key];
                    const defaultVal = selectedPage.defaults[field.key] || '';

                    return (
                      <div
                        key={field.key}
                        className="bg-white rounded-xl border border-stone-200 p-5"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <label className={lbl} style={{ marginBottom: 0 }}>
                            {field.label}
                            {field.type === 'richtext' && (
                              <span className="ml-2 text-[0.5rem] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full normal-case tracking-normal">
                                Texte riche
                              </span>
                            )}
                          </label>
                          {isDefault && !hasChanges && (
                            <span className="font-sans text-[0.55rem] text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">
                              valeur par défaut
                            </span>
                          )}
                          {selectedPage.content[field.key] && !hasChanges && (
                            <span className="font-sans text-[0.55rem] text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                              personnalisé
                            </span>
                          )}
                        </div>

                        {field.type === 'richtext' ? (
                          <RichEditor
                            value={draft[field.key] || ''}
                            onChange={(html) => updateField(field.key, html)}
                            placeholder={defaultVal || 'Rédigez votre texte…'}
                          />
                        ) : field.type === 'textarea' ? (
                          <textarea
                            rows={4}
                            className={`${inp} resize-y`}
                            value={draft[field.key] || ''}
                            onChange={(e) => updateField(field.key, e.target.value)}
                            placeholder={defaultVal || 'Entrez une valeur…'}
                          />
                        ) : field.type === 'image' ? (
                          <div className="space-y-2">
                            {draft[field.key] && (
                              <div className="w-32 h-20 rounded-lg overflow-hidden border border-stone-200 bg-stone-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={draft[field.key]}
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <input
                              type="text"
                              className={inp}
                              value={draft[field.key] || ''}
                              onChange={(e) => updateField(field.key, e.target.value)}
                              placeholder="/uploads/mon-image.jpg"
                            />
                            <p className="font-sans text-[0.55rem] text-stone-400">
                              Collez l'URL depuis le gestionnaire d'images ou entrez un chemin
                              commençant par /
                            </p>
                          </div>
                        ) : (
                          <input
                            type="text"
                            className={inp}
                            value={draft[field.key] || ''}
                            onChange={(e) => updateField(field.key, e.target.value)}
                            placeholder={defaultVal || 'Entrez une valeur…'}
                          />
                        )}

                        <p className="font-sans text-[0.55rem] text-stone-300 mt-1.5">
                          Clé :{' '}
                          <code className="bg-stone-50 px-1 py-0.5 rounded text-stone-400">
                            {field.key}
                          </code>
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Save bar */}
                <div className="sticky bottom-0 bg-stone-50/95 backdrop-blur-sm border-t border-stone-200 mt-8 -mx-8 px-8 py-4 flex items-center justify-between">
                  <div>
                    {saveMsg && (
                      <p
                        className={`font-sans text-xs ${
                          saveMsg.includes('Erreur') ? 'text-red-500' : 'text-green-600'
                        }`}
                      >
                        {saveMsg}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={`/${selectedPage.slug === 'accueil' ? '' : selectedPage.slug === '_global' ? '' : selectedPage.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-sans text-xs text-stone-400 hover:text-stone-600 transition-colors"
                    >
                      Voir la page ↗
                    </a>
                    <button
                      onClick={savePage}
                      disabled={saving || !hasChanges}
                      className="px-6 py-3 rounded-xl font-sans text-sm font-medium text-white transition-all disabled:opacity-40 hover:opacity-90"
                      style={{ background: hasChanges ? '#0a0908' : '#9ca3af' }}
                    >
                      {saving
                        ? 'Enregistrement…'
                        : hasChanges
                          ? 'Enregistrer'
                          : 'Aucune modification'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}

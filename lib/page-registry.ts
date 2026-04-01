/**
 * Registre de toutes les pages du site avec leurs métadonnées pour le backoffice.
 * Chaque entrée définit : slug, titre affiché, catégorie, et les champs éditables.
 */

export interface PageField {
  key: string;
  label: string;
  type: 'text' | 'textarea';
}

export interface PageEntry {
  slug: string;
  title: string;
  category: string;
  fields: PageField[];
}

// Champs SEO communs à toutes les pages
const SEO_FIELDS: PageField[] = [
  { key: 'meta_title', label: 'Titre SEO (balise title)', type: 'text' },
  { key: 'meta_description', label: 'Description SEO (meta description)', type: 'textarea' },
];

// Champs communs aux pages de contenu
const CONTENT_FIELDS: PageField[] = [
  ...SEO_FIELDS,
  { key: 'h1', label: 'Titre principal (H1)', type: 'text' },
  { key: 'intro', label: 'Texte d\'introduction', type: 'textarea' },
];

// Champs pour les pages villes
const CITY_FIELDS: PageField[] = [
  ...CONTENT_FIELDS,
  { key: 'section_1_title', label: 'Section 1 — Titre', type: 'text' },
  { key: 'section_1_text', label: 'Section 1 — Texte', type: 'textarea' },
  { key: 'section_2_title', label: 'Section 2 — Titre', type: 'text' },
  { key: 'section_2_text', label: 'Section 2 — Texte', type: 'textarea' },
  { key: 'section_3_title', label: 'Section 3 — Titre', type: 'text' },
  { key: 'section_3_text', label: 'Section 3 — Texte', type: 'textarea' },
  { key: 'cta_text', label: 'Texte du bouton CTA', type: 'text' },
];

// Champs pour les pages transfert
const TRANSFER_FIELDS: PageField[] = [
  ...CONTENT_FIELDS,
  { key: 'section_1_title', label: 'Section 1 — Titre', type: 'text' },
  { key: 'section_1_text', label: 'Section 1 — Texte', type: 'textarea' },
  { key: 'section_2_title', label: 'Section 2 — Titre', type: 'text' },
  { key: 'section_2_text', label: 'Section 2 — Texte', type: 'textarea' },
  { key: 'faq_title', label: 'FAQ — Titre de section', type: 'text' },
];

// Champs pour les pages chauffeur speaker
const SPEAKER_FIELDS: PageField[] = [
  ...CONTENT_FIELDS,
  { key: 'section_services_title', label: 'Services — Titre', type: 'text' },
  { key: 'section_services_text', label: 'Services — Texte', type: 'textarea' },
  { key: 'section_situations_title', label: 'Situations — Titre', type: 'text' },
  { key: 'section_situations_text', label: 'Situations — Texte', type: 'textarea' },
  { key: 'cta_title', label: 'CTA — Titre', type: 'text' },
  { key: 'cta_text', label: 'CTA — Texte', type: 'textarea' },
];

// Champs pour les pages services
const SERVICE_FIELDS: PageField[] = [
  ...CONTENT_FIELDS,
  { key: 'section_1_title', label: 'Section 1 — Titre', type: 'text' },
  { key: 'section_1_text', label: 'Section 1 — Texte', type: 'textarea' },
  { key: 'section_2_title', label: 'Section 2 — Titre', type: 'text' },
  { key: 'section_2_text', label: 'Section 2 — Texte', type: 'textarea' },
  { key: 'section_3_title', label: 'Section 3 — Titre', type: 'text' },
  { key: 'section_3_text', label: 'Section 3 — Texte', type: 'textarea' },
];

// Champs pour les pages événements
const EVENT_FIELDS: PageField[] = [
  ...CONTENT_FIELDS,
  { key: 'section_1_title', label: 'Section 1 — Titre', type: 'text' },
  { key: 'section_1_text', label: 'Section 1 — Texte', type: 'textarea' },
  { key: 'section_2_title', label: 'Section 2 — Titre', type: 'text' },
  { key: 'section_2_text', label: 'Section 2 — Texte', type: 'textarea' },
];

export const PAGE_REGISTRY: PageEntry[] = [
  // ─── Général ───
  {
    slug: '_global',
    title: 'Informations globales',
    category: 'Général',
    fields: [
      { key: 'phone', label: 'Numéro de téléphone', type: 'text' },
      { key: 'email', label: 'Email de contact', type: 'text' },
      { key: 'cta_title', label: 'CTA — Titre (global)', type: 'text' },
      { key: 'cta_subtitle', label: 'CTA — Sous-titre (global)', type: 'textarea' },
      { key: 'footer_description', label: 'Footer — Description', type: 'textarea' },
    ],
  },
  {
    slug: 'accueil',
    title: 'Page d\'accueil',
    category: 'Général',
    fields: [
      ...SEO_FIELDS,
      { key: 'hero_title', label: 'Hero — Titre principal', type: 'text' },
      { key: 'hero_subtitle', label: 'Hero — Sous-titre', type: 'textarea' },
      { key: 'about_title', label: 'À propos — Titre', type: 'text' },
      { key: 'about_text', label: 'À propos — Texte', type: 'textarea' },
      { key: 'stats_experience', label: 'Stats — Années d\'expérience', type: 'text' },
      { key: 'stats_vehicles', label: 'Stats — Nombre de véhicules', type: 'text' },
      { key: 'stats_rating', label: 'Stats — Note moyenne', type: 'text' },
    ],
  },
  { slug: 'contact', title: 'Contact', category: 'Général', fields: CONTENT_FIELDS },
  { slug: 'a-propos', title: 'À propos', category: 'Général', fields: CONTENT_FIELDS },
  { slug: 'mentions-legales', title: 'Mentions légales', category: 'Général', fields: CONTENT_FIELDS },
  { slug: 'devis', title: 'Demande de devis', category: 'Général', fields: CONTENT_FIELDS },
  { slug: 'reservation', title: 'Réservation', category: 'Général', fields: CONTENT_FIELDS },

  // ─── Flotte ───
  {
    slug: 'notre-flotte',
    title: 'Notre flotte',
    category: 'Flotte',
    fields: [
      ...CONTENT_FIELDS,
      { key: 'section_pricing_title', label: 'Tarification — Titre', type: 'text' },
      { key: 'section_pricing_text', label: 'Tarification — Texte', type: 'textarea' },
    ],
  },

  // ─── Services ───
  { slug: 'transfert-prive', title: 'Transfert privé', category: 'Services', fields: SERVICE_FIELDS },
  { slug: 'mise-a-disposition', title: 'Mise à disposition', category: 'Services', fields: SERVICE_FIELDS },
  { slug: 'meet-and-greet', title: 'Meet & Greet', category: 'Services', fields: SERVICE_FIELDS },
  { slug: 'excursion-privee', title: 'Excursion privée', category: 'Services', fields: SERVICE_FIELDS },
  { slug: 'garde-du-corps', title: 'Garde du corps', category: 'Services', fields: SERVICE_FIELDS },
  { slug: 'securite-rapprochee', title: 'Sécurité rapprochée', category: 'Services', fields: SERVICE_FIELDS },
  { slug: 'convoi-delegations', title: 'Convoi & Délégations', category: 'Services', fields: SERVICE_FIELDS },
  { slug: 'longue-distance', title: 'Longue distance', category: 'Services', fields: SERVICE_FIELDS },
  { slug: 'taxi-moto', title: 'Taxi Moto', category: 'Services', fields: SERVICE_FIELDS },

  // ─── Transferts Aéroport ───
  { slug: 'transfert-aeroport-cdg', title: 'Transfert CDG', category: 'Transferts Aéroport', fields: TRANSFER_FIELDS },
  { slug: 'transfert-aeroport-orly', title: 'Transfert Orly', category: 'Transferts Aéroport', fields: TRANSFER_FIELDS },
  { slug: 'transfert-aeroport-beauvais', title: 'Transfert Beauvais', category: 'Transferts Aéroport', fields: TRANSFER_FIELDS },
  { slug: 'transfert-aeroport-economique', title: 'Transfert Économique', category: 'Transferts Aéroport', fields: TRANSFER_FIELDS },
  { slug: 'transfert-le-bourget', title: 'Transfert Le Bourget', category: 'Transferts Aéroport', fields: TRANSFER_FIELDS },

  // ─── Transferts CDG ───
  { slug: 'transfert-cdg-paris', title: 'CDG → Paris', category: 'Transferts CDG', fields: TRANSFER_FIELDS },
  { slug: 'transfert-cdg-la-defense', title: 'CDG → La Défense', category: 'Transferts CDG', fields: TRANSFER_FIELDS },
  { slug: 'transfert-cdg-versailles', title: 'CDG → Versailles', category: 'Transferts CDG', fields: TRANSFER_FIELDS },
  { slug: 'transfert-cdg-disneyland', title: 'CDG → Disneyland', category: 'Transferts CDG', fields: TRANSFER_FIELDS },
  { slug: 'transfert-cdg-gare-du-nord', title: 'CDG → Gare du Nord', category: 'Transferts CDG', fields: TRANSFER_FIELDS },
  { slug: 'transfert-cdg-gare-de-lyon', title: 'CDG → Gare de Lyon', category: 'Transferts CDG', fields: TRANSFER_FIELDS },
  { slug: 'transfert-cdg-hotel-ritz', title: 'CDG → Hôtel Ritz', category: 'Transferts CDG', fields: TRANSFER_FIELDS },
  { slug: 'transfert-cdg-hotel-george-v', title: 'CDG → Hôtel George V', category: 'Transferts CDG', fields: TRANSFER_FIELDS },
  { slug: 'transfert-cdg-hotel-bristol', title: 'CDG → Hôtel Bristol', category: 'Transferts CDG', fields: TRANSFER_FIELDS },

  // ─── Transferts Orly ───
  { slug: 'transfert-orly-paris', title: 'Orly → Paris', category: 'Transferts Orly', fields: TRANSFER_FIELDS },
  { slug: 'transfert-hotel-luxe-paris', title: 'Transfert Hôtel Luxe', category: 'Transferts Orly', fields: TRANSFER_FIELDS },

  // ─── Villes ───
  { slug: 'chauffeur-prive-paris', title: 'Chauffeur Privé Paris', category: 'Villes', fields: CITY_FIELDS },
  { slug: 'chauffeur-prive-lyon', title: 'Chauffeur Privé Lyon', category: 'Villes', fields: CITY_FIELDS },
  { slug: 'chauffeur-prive-marseille', title: 'Chauffeur Privé Marseille', category: 'Villes', fields: CITY_FIELDS },
  { slug: 'chauffeur-prive-nice', title: 'Chauffeur Privé Nice', category: 'Villes', fields: CITY_FIELDS },
  { slug: 'chauffeur-prive-cannes', title: 'Chauffeur Privé Cannes', category: 'Villes', fields: CITY_FIELDS },
  { slug: 'chauffeur-prive-monaco', title: 'Chauffeur Privé Monaco', category: 'Villes', fields: CITY_FIELDS },
  { slug: 'chauffeur-prive-bordeaux', title: 'Chauffeur Privé Bordeaux', category: 'Villes', fields: CITY_FIELDS },
  { slug: 'chauffeur-prive-deauville', title: 'Chauffeur Privé Deauville', category: 'Villes', fields: CITY_FIELDS },
  { slug: 'chauffeur-prive-saint-tropez', title: 'Chauffeur Privé Saint-Tropez', category: 'Villes', fields: CITY_FIELDS },
  { slug: 'chauffeur-prive-chamonix', title: 'Chauffeur Privé Chamonix', category: 'Villes', fields: CITY_FIELDS },
  { slug: 'chauffeur-prive-megeve', title: 'Chauffeur Privé Megève', category: 'Villes', fields: CITY_FIELDS },
  { slug: 'chauffeur-prive-haute-savoie', title: 'Chauffeur Privé Haute-Savoie', category: 'Villes', fields: CITY_FIELDS },

  // ─── Événements ───
  { slug: 'evenements', title: 'Événements (page principale)', category: 'Événements', fields: CONTENT_FIELDS },
  { slug: 'evenements/paris-fashion-week', title: 'Paris Fashion Week', category: 'Événements', fields: EVENT_FIELDS },
  { slug: 'evenements/paris-air-show', title: 'Paris Air Show', category: 'Événements', fields: EVENT_FIELDS },
  { slug: 'evenements/roland-garros', title: 'Roland Garros', category: 'Événements', fields: EVENT_FIELDS },
  { slug: 'evenements/festival-de-cannes', title: 'Festival de Cannes', category: 'Événements', fields: EVENT_FIELDS },
  { slug: 'evenements/hippodrome-deauville', title: 'Hippodrome Deauville', category: 'Événements', fields: EVENT_FIELDS },
  { slug: 'evenements/grand-prix-monaco', title: 'Grand Prix Monaco', category: 'Événements', fields: EVENT_FIELDS },
  { slug: 'evenements/salons-professionnels', title: 'Salons Professionnels', category: 'Événements', fields: EVENT_FIELDS },

  // ─── Chauffeur Spécialités ───
  { slug: 'chauffeur-mariage', title: 'Chauffeur Mariage', category: 'Spécialités', fields: SERVICE_FIELDS },
  { slug: 'chauffeur-mariage-paris', title: 'Chauffeur Mariage Paris', category: 'Spécialités', fields: SERVICE_FIELDS },
  { slug: 'chauffeur-fashion-week', title: 'Chauffeur Fashion Week', category: 'Spécialités', fields: SERVICE_FIELDS },
  { slug: 'chauffeur-diplomatique', title: 'Chauffeur Diplomatique', category: 'Spécialités', fields: SERVICE_FIELDS },
  { slug: 'chauffeur-evenements-sportifs', title: 'Chauffeur Événements Sportifs', category: 'Spécialités', fields: SERVICE_FIELDS },

  // ─── Chauffeur Speaker (Langues) ───
  { slug: 'chauffeur-anglophone', title: 'Chauffeur Anglophone', category: 'Langues', fields: SPEAKER_FIELDS },
  { slug: 'chauffeur-arabophone', title: 'Chauffeur Arabophone', category: 'Langues', fields: SPEAKER_FIELDS },
  { slug: 'chauffeur-hispanophone', title: 'Chauffeur Hispanophone', category: 'Langues', fields: SPEAKER_FIELDS },
  { slug: 'chauffeur-germanophone', title: 'Chauffeur Germanophone', category: 'Langues', fields: SPEAKER_FIELDS },
  { slug: 'chauffeur-mandarin', title: 'Chauffeur Mandarin', category: 'Langues', fields: SPEAKER_FIELDS },
  { slug: 'chauffeur-coreen', title: 'Chauffeur Coréen', category: 'Langues', fields: SPEAKER_FIELDS },
  { slug: 'chauffeur-japonais', title: 'Chauffeur Japonais', category: 'Langues', fields: SPEAKER_FIELDS },
  { slug: 'chauffeur-russophone', title: 'Chauffeur Russophone', category: 'Langues', fields: SPEAKER_FIELDS },

  // ─── Pages EN ───
  { slug: 'en/private-chauffeur-paris', title: 'Private Chauffeur Paris', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/private-chauffeur-bordeaux', title: 'Private Chauffeur Bordeaux', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/cdg-airport-transfer', title: 'CDG Airport Transfer', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/orly-airport-transfer', title: 'Orly Airport Transfer', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/hourly-hire', title: 'Hourly Hire', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/long-distance', title: 'Long Distance', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/meet-and-greet', title: 'Meet & Greet', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/private-excursion', title: 'Private Excursion', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/close-protection', title: 'Close Protection', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/delegation-transport', title: 'Delegation Transport', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/our-fleet', title: 'Our Fleet', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/events', title: 'Events', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/contact', title: 'Contact (EN)', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/lyon-airport-transfer', title: 'Lyon Airport Transfer', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/marseille-airport-transfer', title: 'Marseille Airport Transfer', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/bordeaux-airport-transfer', title: 'Bordeaux Airport Transfer', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/economical-airport-transfer', title: 'Economical Airport Transfer', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/chamonix-chauffeur', title: 'Chamonix Chauffeur', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/megeve-chauffeur', title: 'Megève Chauffeur', category: 'Pages EN', fields: CONTENT_FIELDS },
  { slug: 'en/haute-savoie-chauffeur', title: 'Haute-Savoie Chauffeur', category: 'Pages EN', fields: CONTENT_FIELDS },
];

/**
 * Retourne les catégories uniques dans l'ordre d'apparition
 */
export function getCategories(): string[] {
  const seen = new Set<string>();
  const cats: string[] = [];
  for (const p of PAGE_REGISTRY) {
    if (!seen.has(p.category)) {
      seen.add(p.category);
      cats.push(p.category);
    }
  }
  return cats;
}

/**
 * Retourne les pages d'une catégorie
 */
export function getPagesByCategory(category: string): PageEntry[] {
  return PAGE_REGISTRY.filter(p => p.category === category);
}

/**
 * Recherche dans les pages
 */
export function searchPages(query: string): PageEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return PAGE_REGISTRY;
  return PAGE_REGISTRY.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.slug.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}

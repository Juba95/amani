/**
 * nav-i18n.ts — menus de navigation des langues servies par le gabarit
 * ─────────────────────────────────────────────────────────────────────────────
 * Le français et l'anglais ont leurs menus écrits en dur dans Navbar, avec les
 * sous-pages événements et les dix villes à page dédiée. L'allemand,
 * l'espagnol, l'arabe et le chinois pointent vers /<langue>/<slug>, servi par
 * app/[lang]/[page].
 *
 * Ce fichier est lu par un composant client : pas de fs, pas d'import de
 * lib/site-pages. Les libellés sont donc recopiés ici. Si un slug disparaît de
 * SITE_PAGES, le lien devient mort — la liste est courte et figée, c'est le
 * prix d'un menu rendu côté client.
 */

import { PAGE_LOCALES, SITE_PAGES } from './site-page-slugs';

export const NAV_LOCALES = PAGE_LOCALES;
export type NavLocale = (typeof NAV_LOCALES)[number];

export interface NavItem { label: string; href: string }

/** Libellés des douze pages de service, dans l'ordre du menu. */
const LABELS: Record<NavLocale, Record<string, string>> = {
  de: {
    'hourly-hire': 'Stundenmiete',
    'cdg-airport-transfer': 'Flughafentransfer CDG',
    'orly-airport-transfer': 'Flughafentransfer Orly',
    'meet-and-greet': 'Meet & Greet',
    'long-distance': 'Langstrecke',
    'delegation-transport': 'Delegationen und Konvois',
    'close-protection': 'Personenschutz',
    corporate: 'Corporate',
    contact: 'Kontakt',
    'become-a-chauffeur': 'Karriere',
    experiences: 'Erlebnisse',
    events: 'Events',
  },
  es: {
    'hourly-hire': 'Disposición horaria',
    'cdg-airport-transfer': 'Traslado aeropuerto CDG',
    'orly-airport-transfer': 'Traslado aeropuerto Orly',
    'meet-and-greet': 'Meet & Greet',
    'long-distance': 'Larga distancia',
    'delegation-transport': 'Delegaciones y convoyes',
    'close-protection': 'Protección personal',
    corporate: 'Corporate',
    contact: 'Contacto',
    'become-a-chauffeur': 'Trabaja con nosotros',
    experiences: 'Experiencias',
    events: 'Eventos',
  },
  ar: {
    'hourly-hire': 'التأجير بالساعة',
    'cdg-airport-transfer': 'نقل مطار شارل ديغول',
    'orly-airport-transfer': 'نقل مطار أورلي',
    'meet-and-greet': 'الاستقبال في المطار',
    'long-distance': 'المسافات الطويلة',
    'delegation-transport': 'الوفود والمواكب',
    'close-protection': 'الحماية الشخصية',
    corporate: 'خدمات الشركات',
    contact: 'اتصل بنا',
    'become-a-chauffeur': 'انضم إلينا',
    experiences: 'التجارب',
    events: 'الفعاليات',
  },
  zh: {
    'hourly-hire': '按小时包车',
    'cdg-airport-transfer': '戴高乐机场接送',
    'orly-airport-transfer': '奥利机场接送',
    'meet-and-greet': '机场接机服务',
    'long-distance': '长途专车',
    'delegation-transport': '代表团与车队',
    'close-protection': '随身安保',
    corporate: '企业服务',
    contact: '联系我们',
    'become-a-chauffeur': '加入我们',
    experiences: '体验',
    events: '活动',
  },
};

const TRANSFER_SLUGS = SITE_PAGES.filter((p) => p.group === 'transfers').map((p) => p.slug);
const EVENT_SLUGS = SITE_PAGES.filter((p) => p.group === 'events').map((p) => p.slug);

/** Villes dont la page destination existe en allemand et en espagnol. */
const CITIES: { slug: string; label: string }[] = [
  { slug: 'paris', label: 'Paris' },
  { slug: 'nice', label: 'Nice' },
  { slug: 'cannes', label: 'Cannes' },
  { slug: 'saint-tropez', label: 'Saint-Tropez' },
  { slug: 'bordeaux', label: 'Bordeaux' },
  { slug: 'versailles-ville', label: 'Versailles' },
  { slug: 'annecy', label: 'Annecy' },
  { slug: 'courchevel', label: 'Courchevel' },
  { slug: 'milan', label: 'Milan' },
  { slug: 'london', label: 'London' },
];

/** Libellés des entrées de menu qui ne correspondent pas à une page de service. */
const MENU_LABELS: Record<NavLocale, { transfers: string; cities: string; all: string; careers: string }> = {
  de: { transfers: 'Transfers', cities: 'Top-Städte', all: 'Alle Ziele →', careers: 'Karriere' },
  es: { transfers: 'Traslados', cities: 'Ciudades', all: 'Todos los destinos →', careers: 'Empleo' },
  ar: { transfers: 'خدمات النقل', cities: 'المدن', all: 'كل الوجهات →', careers: 'الوظائف' },
  zh: { transfers: '接送服务', cities: '热门城市', all: '全部目的地 →', careers: '加入我们' },
};

/** L'allemand et l'espagnol ont des pages destination ; l'arabe et le chinois non. */
const HAS_DESTINATIONS: NavLocale[] = ['de', 'es'];

export function isNavLocale(locale: string): locale is NavLocale {
  return (NAV_LOCALES as readonly string[]).includes(locale);
}

export function navLabel(locale: NavLocale, slug: string): string {
  return LABELS[locale][slug] ?? slug;
}

export function navMenuLabels(locale: NavLocale) {
  return MENU_LABELS[locale];
}

export function pageHref(locale: NavLocale, slug: string): string {
  return `/${locale}/${slug}`;
}

export function transfersMenu(locale: NavLocale): NavItem[] {
  return TRANSFER_SLUGS.map((slug) => ({ label: navLabel(locale, slug), href: pageHref(locale, slug) }));
}

export function eventsMenu(locale: NavLocale): NavItem[] {
  return EVENT_SLUGS.map((slug) => ({
    label: navLabel(locale, slug),
    href: pageHref(locale, slug),
  }));
}

/** Vide pour l'arabe et le chinois : la navigation y reste sur les ancres. */
export function citiesMenu(locale: NavLocale): NavItem[] {
  if (!HAS_DESTINATIONS.includes(locale)) return [];
  return [
    ...CITIES.map((c) => ({ label: c.label, href: `/${locale}/destinations/${c.slug}` })),
    { label: MENU_LABELS[locale].all, href: `/${locale}/destinations` },
  ];
}

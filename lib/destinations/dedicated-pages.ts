/**
 * dedicated-pages.ts — villes dont les versions française et anglaise ne sont
 * pas sous /destinations/<slug> mais sur une page SEO dédiée écrite à la main.
 *
 * Utilisé par les hreflang de la page destination traduite et par le sélecteur
 * de langue, qui enverrait sinon le visiteur sur une adresse en 404 : ces
 * villes n'existent dans le registre qu'au titre de la traduction.
 *
 * Pas de fs ici : le fichier est lu par un composant client.
 */
export const DEDICATED_PAGES: Record<string, { fr: string; en: string }> = {
  paris: { fr: '/chauffeur-prive-paris', en: '/en/private-chauffeur-paris' },
  nice: { fr: '/chauffeur-prive-nice', en: '/en/private-chauffeur-paris' },
  cannes: { fr: '/chauffeur-prive-cannes', en: '/en/private-chauffeur-paris' },
  'saint-tropez': { fr: '/chauffeur-prive-saint-tropez', en: '/en/private-chauffeur-paris' },
  bordeaux: { fr: '/chauffeur-prive-bordeaux', en: '/en/private-chauffeur-bordeaux' },
};

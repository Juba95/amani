/**
 * hreflang.ts — ciblage régional des pages espagnoles et allemandes
 * ─────────────────────────────────────────────────────────────────────────────
 * Le client réserve depuis son pays pour un voyage ailleurs. Un Mexicain et un
 * Colombien qui cherchent « chófer privado en París » veulent la même page :
 * la prestation est identique, le prix est en euros, le trajet est à Paris.
 * Créer /es-mx/ et /es-co/ reviendrait à publier le même texte sous plusieurs
 * adresses — c'est exactement ce que Google traite comme du contenu dupliqué.
 *
 * La bonne façon de viser ces marchés est le hreflang : une seule page
 * espagnole, déclarée pour l'Espagne, le Mexique, la Colombie, l'Argentine,
 * le Chili, le Pérou et les hispanophones des États-Unis. Google sert alors
 * cette page à ces sept publics, sans pénalité de duplication.
 *
 * Ce qui différencie réellement ces lecteurs n'est pas l'URL mais le
 * vocabulaire : « auto » et non « coche », « estacionar » et non « aparcar ».
 * C'est traité à la rédaction, dans les consignes du générateur.
 */

/**
 * Régions hispanophones visées. L'ordre n'a pas d'importance pour Google ;
 * il suit ici le poids touristique vers la France.
 */
export const ES_REGIONS = ['es-ES', 'es-MX', 'es-CO', 'es-AR', 'es-CL', 'es-PE', 'es-US'] as const;

/** Régions germanophones visées : Allemagne, Autriche, Suisse. */
export const DE_REGIONS = ['de-DE', 'de-AT', 'de-CH'] as const;

/**
 * Étend une table d'alternates : chaque entrée `es` ou `de` est dupliquée sur
 * ses variantes régionales, vers la même URL.
 *
 * Next.js accepte n'importe quelle clé dans `alternates.languages` et la rend
 * telle quelle dans la balise hreflang.
 */
export function withRegionalVariants(languages: Record<string, string>): Record<string, string> {
  const out: Record<string, string> = { ...languages };
  if (languages.es) for (const r of ES_REGIONS) out[r] = languages.es;
  if (languages.de) for (const r of DE_REGIONS) out[r] = languages.de;
  return out;
}

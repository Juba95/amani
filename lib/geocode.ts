/**
 * Géocodage du devis, partagé par le serveur (/api/distance) et la carte (RouteMap).
 *
 * 1. Lieux fixes (aéroports parisiens, Paris centre) : coordonnées en dur, aucun
 *    appel réseau. Une adresse réécrite (« Aéroport Paris-Charles de Gaulle,
 *    Roissy-en-France ») n'était pas trouvée par Nominatim et le devis
 *    retombait à 35 km.
 * 2. Nominatim (OpenStreetMap), limité à l'Europe ; à défaut, la même adresse
 *    sans son premier segment (numéro et rue souvent mal reconnus).
 * 3. Photon (komoot), autre géocodeur OSM, si Nominatim ne trouve rien ou ne
 *    répond pas.
 */

export type Coord = [number, number]; // [lat, lon]

// Europe : ouest, sud, est, nord
const EUROPE = { west: -25, south: 34.5, east: 45, north: 71.5 };
const TIMEOUT_MS = 6000;

function normalize(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();
}

/** Lieux fixes : le premier motif reconnu l'emporte (l'aéroport avant « paris »). */
const PLACES: Array<{ re: RegExp; coord: Coord }> = [
  { re: /\b(cdg|charles[ -]de[ -]gaulle|roissy(?![ -]en[ -]brie))\b/, coord: [49.0097, 2.5479] },
  { re: /\borly\b/, coord: [48.7262, 2.3652] },
  { re: /\bbourget\b.*\b(aeroport|airport)\b|\b(aeroport|airport)\b.*\bbourget\b/, coord: [48.9694, 2.4414] },
  { re: /\bbeauvais\b.*\b(aeroport|airport|tille)\b|\b(aeroport|airport)\b.*\bbeauvais\b/, coord: [49.4544, 2.1128] },
  { re: /^paris( (centre|center|city|ville))?(, france)?$/, coord: [48.8566, 2.3522] },
];

/** Coordonnées d'un lieu fixe, sans appel réseau, ou null. */
export function fixedPlace(address: string): Coord | null {
  const a = normalize(address);
  for (const p of PLACES) if (p.re.test(a)) return p.coord;
  return null;
}

const COUNTRY_HINT = /\b(france|belgique|belgium|suisse|switzerland|luxembourg|monaco|italie|italy|espagne|spain|allemagne|germany|deutschland|pays-bas|netherlands|nederland|royaume-uni|united kingdom|uk|angleterre|england|portugal|autriche|austria|danemark|denmark)\b/;

/** Une saisie libre sans pays reste en France ; les adresses Google portent déjà le pays. */
function withCountry(address: string): string {
  return address.includes(',') || COUNTRY_HINT.test(normalize(address)) ? address : `${address}, France`;
}

async function getJson(url: string, headers?: Record<string, string>) {
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${new URL(url).host}`);
  return res.json();
}

async function nominatim(q: string, headers?: Record<string, string>): Promise<Coord | null> {
  const url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&accept-language=fr&bounded=1'
    + `&viewbox=${EUROPE.west},${EUROPE.north},${EUROPE.east},${EUROPE.south}&q=${encodeURIComponent(q)}`;
  const data = await getJson(url, headers);
  return data?.[0] ? [parseFloat(data[0].lat), parseFloat(data[0].lon)] : null;
}

async function photon(q: string, headers?: Record<string, string>): Promise<Coord | null> {
  const url = 'https://photon.komoot.io/api/?limit=1'
    + `&bbox=${EUROPE.west},${EUROPE.south},${EUROPE.east},${EUROPE.north}&q=${encodeURIComponent(q)}`;
  const data = await getJson(url, headers);
  const c = data?.features?.[0]?.geometry?.coordinates;
  return c ? [c[1], c[0]] : null;
}

/**
 * Coordonnées d'une adresse, ou null si aucun géocodeur ne la trouve.
 * `headers` : User-Agent côté serveur (exigé par Nominatim) ; inutile dans le navigateur.
 */
export async function geocode(address: string, headers?: Record<string, string>): Promise<Coord | null> {
  const fixed = fixedPlace(address);
  if (fixed) return fixed;

  const q = withCountry(address.trim());
  const shorter = q.includes(',') ? q.slice(q.indexOf(',') + 1).trim() : '';
  const attempts: Array<() => Promise<Coord | null>> = [
    () => nominatim(q, headers),
    ...(shorter && shorter.includes(',') ? [() => nominatim(shorter, headers)] : []),
    () => photon(q, headers),
  ];
  for (const attempt of attempts) {
    try {
      const c = await attempt();
      if (c) return c;
    } catch {
      // service indisponible : on essaie le suivant
    }
  }
  return null;
}

/** Distance à vol d'oiseau (km). */
export function haversineKm(a: Coord, b: Coord): number {
  const R = 6371;
  const dLat = ((b[0] - a[0]) * Math.PI) / 180;
  const dLon = ((b[1] - a[1]) * Math.PI) / 180;
  const s = Math.sin(dLat / 2) ** 2
    + Math.cos((a[0] * Math.PI) / 180) * Math.cos((b[0] * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

/**
 * Estimation de distance routière SANS Google Maps (fallback si la clé est
 * absente/rejetée) : trajets IDF connus d'abord (distances routières réelles),
 * sinon haversine entre villes reconnues × 1,25 (facteur route).
 *
 * Avant ce module, le fallback renvoyait 35 km par défaut : un Paris → Nice
 * ressortait au forfait minimum au lieu du prix au kilomètre.
 */

const CITY_COORDS: Record<string, [number, number]> = {
  // Île-de-France & aéroports
  'paris': [48.8566, 2.3522],
  'cdg': [49.0097, 2.5479],
  'charles de gaulle': [49.0097, 2.5479],
  'roissy': [49.0097, 2.5479],
  'orly': [48.7262, 2.3652],
  'bourget': [48.9615, 2.4372],
  'beauvais': [49.4544, 2.1128],
  'versailles': [48.8049, 2.1204],
  'disneyland': [48.8674, 2.7836],
  'fontainebleau': [48.4047, 2.7016],
  'giverny': [49.0776, 1.534],
  // France
  'nice': [43.7102, 7.262],
  'cannes': [43.5528, 7.0174],
  'monaco': [43.7384, 7.4246],
  'saint-tropez': [43.2727, 6.6407],
  'saint tropez': [43.2727, 6.6407],
  'antibes': [43.5808, 7.1251],
  'marseille': [43.2965, 5.3698],
  'aix-en-provence': [43.5297, 5.4474],
  'aix en provence': [43.5297, 5.4474],
  'avignon': [43.9493, 4.8055],
  'montpellier': [43.6108, 3.8767],
  'toulouse': [43.6047, 1.4442],
  'biarritz': [43.4832, -1.5586],
  'bordeaux': [44.8378, -0.5792],
  'nantes': [47.2184, -1.5536],
  'rennes': [48.1173, -1.6778],
  'saint-malo': [48.6493, -2.0257],
  'mont-saint-michel': [48.6361, -1.5115],
  'mont saint michel': [48.6361, -1.5115],
  'deauville': [49.359, 0.075],
  'honfleur': [49.4194, 0.2333],
  'etretat': [49.707, 0.2049],
  'rouen': [49.4431, 1.0993],
  'le havre': [49.4944, 0.1079],
  'caen': [49.1829, -0.3707],
  'lille': [50.6292, 3.0573],
  'reims': [49.2583, 4.0317],
  'epernay': [49.0434, 3.9594],
  'troyes': [48.2973, 4.0744],
  'metz': [49.1193, 6.1757],
  'nancy': [48.6921, 6.1844],
  'strasbourg': [48.5734, 7.7521],
  'colmar': [48.0794, 7.3585],
  'dijon': [47.322, 5.0415],
  'beaune': [47.026, 4.84],
  'lyon': [45.764, 4.8357],
  'grenoble': [45.1885, 5.7245],
  'annecy': [45.8992, 6.1294],
  'chamonix': [45.9237, 6.8694],
  'megeve': [45.857, 6.618],
  'megève': [45.857, 6.618],
  'courchevel': [45.4154, 6.6345],
  'val thorens': [45.2979, 6.58],
  "val d'isere": [45.4489, 6.9797],
  'orleans': [47.9029, 1.9093],
  'tours': [47.3941, 0.6848],
  'ajaccio': [41.9192, 8.7386],
  // Europe
  'geneve': [46.2044, 6.1432],
  'genève': [46.2044, 6.1432],
  'geneva': [46.2044, 6.1432],
  'zurich': [47.3769, 8.5417],
  'bruxelles': [50.8503, 4.3517],
  'brussels': [50.8503, 4.3517],
  'luxembourg': [49.6116, 6.1319],
  'amsterdam': [52.3676, 4.9041],
  'londres': [51.5074, -0.1278],
  'london': [51.5074, -0.1278],
  'francfort': [50.1109, 8.6821],
  'frankfurt': [50.1109, 8.6821],
  'munich': [48.1351, 11.582],
  'milan': [45.4642, 9.19],
  'turin': [45.0703, 7.6869],
  'rome': [41.9028, 12.4964],
  'barcelone': [41.3874, 2.1686],
  'barcelona': [41.3874, 2.1686],
  'madrid': [40.4168, -3.7038],
  'rotterdam': [51.9244, 4.4777],
  'la haye': [52.0705, 4.3007],
  'den haag': [52.0705, 4.3007],
  'the hague': [52.0705, 4.3007],
  'maastricht': [50.8514, 5.691],
  'eindhoven': [51.4416, 5.4697],
  'utrecht': [52.0907, 5.1214],
  'anvers': [51.2194, 4.4025],
  'antwerpen': [51.2194, 4.4025],
  'antwerp': [51.2194, 4.4025],
  'gand': [51.0543, 3.7174],
  'gent': [51.0543, 3.7174],
  'bruges': [51.2093, 3.2247],
  'brugge': [51.2093, 3.2247],
  'liege': [50.6326, 5.5797],
  'namur': [50.4674, 4.872],
  'cologne': [50.9375, 6.9603],
  'koln': [50.9375, 6.9603],
  'dusseldorf': [51.2277, 6.7735],
  'berlin': [52.52, 13.405],
  'hambourg': [53.5511, 9.9937],
  'hamburg': [53.5511, 9.9937],
  'stuttgart': [48.7758, 9.1829],
  'aix-la-chapelle': [50.7753, 6.0839],
  'aachen': [50.7753, 6.0839],
  'copenhague': [55.6761, 12.5683],
  'copenhagen': [55.6761, 12.5683],
  'kobenhavn': [55.6761, 12.5683],
  'stockholm': [59.3293, 18.0686],
  'oslo': [59.9139, 10.7522],
  'vienne, autriche': [48.2082, 16.3738],
  'wien': [48.2082, 16.3738],
  'vienna': [48.2082, 16.3738],
  'prague': [50.0755, 14.4378],
  'praha': [50.0755, 14.4378],
  'venise': [45.4408, 12.3155],
  'venezia': [45.4408, 12.3155],
  'venice': [45.4408, 12.3155],
  'florence': [43.7696, 11.2558],
  'firenze': [43.7696, 11.2558],
  'lisbonne': [38.7223, -9.1393],
  'lisboa': [38.7223, -9.1393],
  'lisbon': [38.7223, -9.1393],
  'porto': [41.1579, -8.6291],
  'seville': [37.3891, -5.9845],
  'valence, espagne': [39.4699, -0.3763],
  'valencia': [39.4699, -0.3763],
  'lausanne': [46.5197, 6.6323],
  'bale': [47.5596, 7.5886],
  'basel': [47.5596, 7.5886],
  'berne': [46.948, 7.4474],
  'bern': [46.948, 7.4474],
  'lucerne': [47.0502, 8.3093],
  'luzern': [47.0502, 8.3093],
};

/** Trajets IDF fréquents — distances routières réelles, prioritaires. */
const KNOWN_ROUTES: Array<{ from: string[]; to: string[]; km: number }> = [
  { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['paris', 'centre', 'bastille', 'châtelet'], km: 32 },
  { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['défense', 'la défense'], km: 30 },
  { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['versailles'], km: 55 },
  { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['disneyland', 'disney'], km: 45 },
  { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['gare du nord', 'nord'], km: 28 },
  { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['gare de lyon'], km: 38 },
  { from: ['cdg', 'charles de gaulle', 'roissy'], to: ['orly'], km: 58 },
  { from: ['orly'], to: ['paris', 'centre'], km: 22 },
  { from: ['orly'], to: ['défense', 'la défense'], km: 35 },
  { from: ['orly'], to: ['versailles'], km: 30 },
  { from: ['paris', 'centre'], to: ['versailles'], km: 25 },
  { from: ['paris', 'centre'], to: ['ritz', 'four seasons', 'george v', 'bristol', 'crillon', 'meurice', 'plaza athénée', 'mandarin', 'park hyatt'], km: 32 },
];

function normalize(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function findCity(address: string): [number, number] | null {
  const a = normalize(address);
  // Cherche la correspondance la plus longue (évite « lyon » de « gare de lyon »
  // quand « paris » figure aussi dans l'adresse)
  let best: [number, number] | null = null;
  let bestLen = 0;
  for (const [name, coords] of Object.entries(CITY_COORDS)) {
    if (a.includes(normalize(name)) && name.length > bestLen) {
      best = coords;
      bestLen = name.length;
    }
  }
  return best;
}

function haversineKm(a: [number, number], b: [number, number]): number {
  const R = 6371;
  const dLat = ((b[0] - a[0]) * Math.PI) / 180;
  const dLon = ((b[1] - a[1]) * Math.PI) / 180;
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a[0] * Math.PI) / 180) * Math.cos((b[0] * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

/**
 * Estime la distance routière entre deux adresses.
 * 1. Trajets IDF connus (précis)
 * 2. Villes reconnues → haversine × 1,25 (facteur route)
 * 3. Défaut : 35 km (course urbaine type)
 */
export function estimateDistanceKm(origin: string, destination: string): number {
  const o = normalize(origin);
  const d = normalize(destination);

  for (const route of KNOWN_ROUTES) {
    const fromMatch = route.from.some((f) => o.includes(f) || d.includes(f));
    const toMatch = route.to.some((t) => d.includes(t) || o.includes(t));
    if (fromMatch && toMatch) return route.km;
  }

  const cityO = findCity(origin);
  const cityD = findCity(destination);
  if (cityO && cityD) {
    const straight = haversineKm(cityO, cityD);
    if (straight < 1) return 10; // même ville → course urbaine
    return Math.round(straight * 1.25);
  }

  return 35;
}

/**
 * Durée estimée réaliste : ville ≈ 1,4 min/km ; au-delà de 50 km, moyenne
 * autoroute 100 km/h + 20 min d'approche urbaine.
 */
export function estimateDurationMin(km: number): number {
  if (km <= 50) return Math.round(km * 1.4);
  return Math.round((km / 100) * 60 + 20);
}

/** Formatage lisible : « 45 min » ou « 8 h 35 ». */
export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, '0')}`;
}

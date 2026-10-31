/**
 * Plaquette tarifaire partenaires (A4, 3 pages), une par langue.
 *
 * Les tarifs partenaires sont saisis ci-dessous (PARTNER) : ils diffèrent des
 * prix publics de lib/vehicles.ts, qui ne sert ici qu'au minimum d'heures de
 * mise à disposition. Les noms de véhicules viennent des fichiers locales.
 *
 * Usage : npx tsx scripts/partner-brochure/build.js [en,fr,de,es]
 * Prérequis : playwright (hors dépendances du site), ex. `npm i --no-save playwright`
 * ou NODE_PATH pointant vers un node_modules qui le contient. CHROMIUM peut
 * indiquer le binaire Chromium à utiliser.
 * Sortie : public/partners/*.pdf, et un aperçu PNG par page dans $SHOTS (tmp).
 */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const REPO = path.resolve(__dirname, '..', '..');
const { VEHICLES, DISPOSAL_HOURS } = require(path.join(REPO, 'lib', 'vehicles.ts'));
const ROOT = path.join(REPO, 'public');
const A = path.join(__dirname, 'assets');
const SHOTS = process.env.SHOTS || require('os').tmpdir();
const fontB64 = (f) => fs.readFileSync(f).toString('base64');
const DMS = fontB64(`${A}/DMSerifDisplay-Regular.woff2`), INTER = fontB64(`${A}/Inter.woff2`);
const imgRaw = (p) => 'data:image/' + (p.endsWith('.png') ? 'png' : p.endsWith('.webp') ? 'webp' : 'jpeg') + ';base64,' + fs.readFileSync(ROOT + p).toString('base64');
const img = (p) => { const m = p.match(/^\/vehicles\/(.+)\.(png|jpg)$/); if (m) return 'data:image/png;base64,' + fs.readFileSync(`${A}/${m[1]}.png`).toString('base64'); if (p.includes('chauffeur-prive-paris')) return 'data:image/jpeg;base64,' + fs.readFileSync(`${A}/hero.jpg`).toString('base64'); return imgRaw(p); };
const MIN_H = DISPOSAL_HOURS[0];


// Tarifs partenaires Paris & Île-de-France transmis par Amani (oct. 2026).
const SPRINTER15 = { airport: 450, city: 410 };
const SPRINTER19 = { airport: 450, city: 410 }; // même prix que le 15 places (confirmé par Amani)
const VAT = process.env.VAT || 'TTC'; // 'TTC' ou 'HT' : tarifs partenaires TTC pour l'instant

const NM = (en, fr, de, es) => ({ en, fr, de: de || en, es: es || en });
const PARTNER = [
  { name: NM('Mercedes E-Class', 'Mercedes Classe E', 'Mercedes E-Klasse', 'Mercedes Clase E'), img: '/vehicles/mercedes-classe-e.png', pax: 3, bags: 2, airport: 130, city: 90, hourly: 90, km: 3 },
  { name: NM('Mercedes EQE', 'Mercedes EQE'), img: '/vehicles/mercedes-eqe.png', pax: 3, bags: 2, airport: 130, city: 90, hourly: 90, km: 3 },
  { name: NM('Mercedes V-Class', 'Mercedes Classe V', 'Mercedes V-Klasse', 'Mercedes Clase V'), img: '/vehicles/mercedes-classe-v.png', pax: 7, bags: 6, airport: 140, city: 100, hourly: 100, km: 3 },
  { name: NM('Mercedes EQV', 'Mercedes EQV'), img: '/vehicles/mercedes-classe-v.png', pax: 7, bags: 6, airport: 140, city: 100, hourly: 100, km: 3 },
  { name: NM('Mercedes S-Class', 'Mercedes Classe S', 'Mercedes S-Klasse', 'Mercedes Clase S'), img: '/vehicles/mercedes-classe-s.png', pax: 3, bags: 2, airport: 190, city: 110, hourly: 110, km: 4 },
  { name: NM('Mercedes EQS', 'Mercedes EQS'), img: '/vehicles/mercedes-eqe.png', pax: 3, bags: 2, airport: 190, city: 110, hourly: 110, km: 4 },
  { name: NM('BMW i7', 'BMW i7'), img: '/vehicles/bmw-i7.png', pax: 3, bags: 2, airport: 190, city: 110, hourly: 110, km: 4 },
  { name: NM('Mercedes V-Class VIP', 'Mercedes Classe V VIP', 'Mercedes V-Klasse VIP', 'Mercedes Clase V VIP'), img: '/vehicles/mercedes-classe-v.png', pax: 7, bags: 6, airport: 300, city: 260, hourly: 180, km: 4 },
  { name: NM('Range Rover', 'Range Rover'), img: '/vehicles/range-rover.png', pax: 4, bags: 3, airport: 350, city: 250, hourly: 150, km: 5 },
  { name: NM('Mercedes G-Class', 'Mercedes Classe G', 'Mercedes G-Klasse', 'Mercedes Clase G'), img: '/vehicles/mercedes-classe-g.png', pax: 4, bags: 3, airport: 350, city: 250, hourly: 150, km: 5 },
  { name: NM('Mercedes-Maybach S-Class', 'Mercedes-Maybach Classe S', 'Mercedes-Maybach S-Klasse', 'Mercedes-Maybach Clase S'), img: '/vehicles/mercedes-classe-s-maybach.png', pax: 3, bags: 2, airport: 450, city: 250, hourly: 250, km: 8 },
  { name: NM('Mercedes Sprinter VIP 8 seats', 'Mercedes Sprinter VIP 8 places', 'Mercedes Sprinter VIP 8 Plätze', 'Mercedes Sprinter VIP 8 plazas'), img: '/vehicles/mercedes-sprinter.png', pax: 8, bags: 8, airport: 450, city: 410, hourly: 180, km: 5 },
  { name: NM('Mercedes Sprinter 15 seats', 'Mercedes Sprinter 15 places', 'Mercedes Sprinter 15 Plätze', 'Mercedes Sprinter 15 plazas'), img: '/vehicles/mercedes-sprinter-15.png', pax: 15, bags: 15, airport: SPRINTER15.airport, city: SPRINTER15.city, hourly: 150, km: 5 },
  { name: NM('Mercedes Sprinter 19 seats', 'Mercedes Sprinter 19 places', 'Mercedes Sprinter 19 Plätze', 'Mercedes Sprinter 19 plazas'), img: '/vehicles/mercedes-sprinter-vip-19.png', pax: 19, bags: 19, airport: SPRINTER19.airport, city: SPRINTER19.city, hourly: 150, km: 5 },
  { name: NM('Mercedes Tourismo 50 seats', 'Mercedes Tourismo 50 places', 'Mercedes Tourismo 50 Plätze', 'Mercedes Tourismo 50 plazas'), img: '/vehicles/mercedes-tourismo.png', pax: 50, bags: 50, airport: 650, city: 610, hourly: 200, km: 5 },
];

const NAMES = {};
for (const l of ['en', 'fr', 'de', 'es']) NAMES[l] = JSON.parse(fs.readFileSync(path.join(REPO, 'locales', `${l}.json`))).fleet.vehicles;
const vname = (l, id) => { const v = NAMES[l][id]; return typeof v === 'object' ? v.name : v; };

const L = {
  en: { file: 'amani-limousines-partner-rates-en.pdf', eur: (n) => `€${n.toLocaleString('en-GB')}`, perkm: (n) => `€${n.toFixed(2)}`,
    kicker: 'Partner rates 2026', title: 'Private chauffeur services for travel agencies, hotels and concierges',
    lead: 'Since 2016, Amani Limousines has looked after travellers from their arrival in Paris and throughout their stay in France and Europe. This document sets out our rates and the terms of our partnership.',
    commitTitle: 'Our commitments', commit: ['Professional, multilingual chauffeurs', 'Fixed fares, confirmed at the time of booking', 'Flight monitoring at no additional charge', 'A dedicated contact, available 24/7', 'A response within 30 minutes', 'Recent Mercedes and premium vehicles'],
    ratesTitle: 'Partner rates · Paris & Île-de-France', cols: ['Vehicle', 'Passengers', 'Paris airport transfer', 'City transfer', 'Hourly hire', 'Beyond, per km'],
    pax: (p, b) => `${p} pax · ${b} bags`, from: 'from', perh: '/ hour',
    notes: [`Airport transfer: fixed fare between CDG, Orly, Le Bourget or Beauvais and Paris or the inner suburbs.`, `City transfer: minimum fare within Paris and Île-de-France. Beyond the fixed fare, journeys are charged per kilometre.`, `Hourly hire: minimum ${MIN_H} hours, the chauffeur and vehicle remain at your clients' disposal.`, VAT === 'HT' ? 'Prices exclude VAT. Tolls and fuel included.' : 'All prices include VAT, tolls and fuel.'],
    destTitle: 'Destinations', dest: [['Paris & Île-de-France', 'Versailles, Giverny, Disneyland, Fontainebleau'], ['Alpine ski resorts', 'Courchevel, Val Thorens, Méribel, Megève, Chamonix'], ['French Riviera', 'Nice, Cannes, Monaco, Antibes'], ['Saint-Tropez & Provence', 'Saint-Tropez, Marseille, Aix-en-Provence'], ['Bordeaux & wine regions', 'Bordeaux, Champagne, Burgundy, Cognac'], ['Normandy & the Loire', 'Mont-Saint-Michel, Deauville, Loire châteaux']],
    europe: 'Across Europe: Geneva, Milan, London, Barcelona, Brussels, Amsterdam and many other destinations, on quotation.',
    termsTitle: 'Partnership terms', terms: [['Partner rates or commission', 'At your choice: the partner rates above, or a commission on our public rates, agreed with each partner.'], ['Booking', 'By email, WhatsApp or telephone, 24 hours a day. Confirmation within 30 minutes.'], ['Your clients', 'A chauffeur greets them by name. You remain their point of contact, we look after the journey.'], ['Outside Paris and Europe', 'Ski resorts, the Riviera and other regions: quotation within 30 minutes.']],
    contactTitle: 'Contact', role: 'Founder & Managing Director',
    legal: 'Amani Limousines · 78 avenue des Champs-Élysées, 75008 Paris, France · SIREN 821 665 395 · VAT FR90 821 665 395' },
  fr: { file: 'amani-limousines-tarifs-partenaires-fr.pdf', eur: (n) => `${n.toLocaleString('fr-FR')} €`, perkm: (n) => `${n.toFixed(2).replace('.', ',')} €`,
    kicker: 'Tarifs partenaires 2026', title: 'Chauffeurs privés pour les agences de voyages, hôtels et conciergeries',
    lead: "Depuis 2016, Amani Limousines accompagne les voyageurs dès leur arrivée à Paris et tout au long de leur séjour en France et en Europe. Ce document présente nos tarifs et les conditions de notre partenariat.",
    commitTitle: 'Nos engagements', commit: ['Des chauffeurs professionnels et multilingues', 'Un tarif fixe, confirmé à la réservation', 'Le suivi des vols sans supplément', 'Un interlocuteur dédié, joignable 24 h/24', 'Une réponse en moins de 30 minutes', 'Des Mercedes récentes et des véhicules premium'],
    ratesTitle: 'Tarifs partenaires · Paris & Île-de-France', cols: ['Véhicule', 'Passagers', 'Transfert aéroport Paris', 'Transfert ville', 'Mise à disposition', 'Au-delà, au km'],
    pax: (p, b) => `${p} pass. · ${b} bagages`, from: 'à partir de', perh: '/ heure',
    notes: ['Transfert aéroport : forfait entre CDG, Orly, Le Bourget ou Beauvais et Paris ou la proche couronne.', 'Transfert ville : tarif minimum dans Paris et en Île-de-France. Au-delà du forfait, la course est facturée au kilomètre.', `Mise à disposition : minimum ${MIN_H} heures, le chauffeur et le véhicule restent à la disposition de vos clients.`, VAT === 'HT' ? 'Tarifs hors taxes (HT), péages et carburant inclus.' : 'Tous les prix sont TTC, péages et carburant inclus.'],
    destTitle: 'Destinations', dest: [['Paris & Île-de-France', 'Versailles, Giverny, Disneyland, Fontainebleau'], ['Stations de ski', 'Courchevel, Val Thorens, Méribel, Megève, Chamonix'], ["Côte d'Azur", 'Nice, Cannes, Monaco, Antibes'], ['Saint-Tropez & Provence', 'Saint-Tropez, Marseille, Aix-en-Provence'], ['Bordeaux & vignobles', 'Bordeaux, Champagne, Bourgogne, Cognac'], ['Normandie & Loire', 'Mont-Saint-Michel, Deauville, châteaux de la Loire']],
    europe: "Dans toute l'Europe : Genève, Milan, Londres, Barcelone, Bruxelles, Amsterdam et bien d'autres destinations, sur devis.",
    termsTitle: 'Conditions de partenariat', terms: [['Tarifs partenaires ou commission', 'Au choix : les tarifs partenaires ci-contre, ou une commission sur nos tarifs publics, définie avec chaque partenaire.'], ['Réservation', 'Par email, WhatsApp ou téléphone, 24 h/24. Confirmation en moins de 30 minutes.'], ['Vos clients', 'Un chauffeur les accueille à leur nom. Vous restez leur interlocuteur, nous nous occupons du trajet.'], ['Hors Paris et Europe', 'Stations de ski, Côte d\'Azur et autres régions : devis en moins de 30 minutes.']],
    contactTitle: 'Contact', role: 'Fondateur et dirigeant',
    legal: 'Amani Limousines · 78 avenue des Champs-Élysées, 75008 Paris · SIREN 821 665 395 · TVA FR90 821 665 395' },
  de: { file: 'amani-limousines-partnerkonditionen-de.pdf', eur: (n) => `${n.toLocaleString('de-DE')} €`, perkm: (n) => `${n.toFixed(2).replace('.', ',')} €`,
    kicker: 'Partnerkonditionen 2026', title: 'Privatchauffeure für Reisebüros, Hotels und Concierge-Dienste',
    lead: 'Seit 2016 betreut Amani Limousines Reisende von der Ankunft in Paris an und während ihres gesamten Aufenthalts in Frankreich und Europa. Dieses Dokument enthält unsere Preise und die Bedingungen unserer Partnerschaft.',
    commitTitle: 'Unsere Leistungen', commit: ['Professionelle, mehrsprachige Chauffeure', 'Festpreise, bei der Buchung bestätigt', 'Flugüberwachung ohne Aufpreis', 'Ein fester Ansprechpartner, rund um die Uhr', 'Eine Antwort innerhalb von 30 Minuten', 'Neue Mercedes und Premiumfahrzeuge'],
    ratesTitle: 'Partnerpreise · Paris & Île-de-France', cols: ['Fahrzeug', 'Fahrgäste', 'Flughafen\u00ADtransfer Paris', 'Stadt\u00ADtransfer', 'Stunden\u00ADmiete', 'Darüber hin\u00ADaus, pro km'],
    pax: (p, b) => `${p} Pers. · ${b} Koffer`, from: 'ab', perh: '/ Stunde',
    notes: ['Flughafentransfer: Festpreis zwischen CDG, Orly, Le Bourget oder Beauvais und Paris oder den angrenzenden Vororten.', 'Stadttransfer: Mindestpreis in Paris und der Île-de-France. Darüber hinaus wird pro Kilometer abgerechnet.', `Stundenmiete: mindestens ${MIN_H} Stunden, Chauffeur und Fahrzeug stehen Ihren Kunden zur Verfügung.`, VAT === 'HT' ? 'Alle Preise zuzüglich MwSt., Maut und Kraftstoff inklusive.' : 'Alle Preise inklusive MwSt., Maut und Kraftstoff.'],
    destTitle: 'Reiseziele', dest: [['Paris & Île-de-France', 'Versailles, Giverny, Disneyland, Fontainebleau'], ['Skiorte der Alpen', 'Courchevel, Val Thorens, Méribel, Megève, Chamonix'], ["Côte d'Azur", 'Nizza, Cannes, Monaco, Antibes'], ['Saint-Tropez & Provence', 'Saint-Tropez, Marseille, Aix-en-Provence'], ['Bordeaux & Weinregionen', 'Bordeaux, Champagne, Burgund, Cognac'], ['Normandie & Loire', 'Mont-Saint-Michel, Deauville, Loire-Schlösser']],
    europe: 'In ganz Europa: Genf, Mailand, London, Barcelona, Brüssel, Amsterdam und viele weitere Ziele, auf Anfrage.',
    termsTitle: 'Partnerschaftsbedingungen', terms: [['Partnerpreise oder Provision', 'Nach Ihrer Wahl: die obigen Partnerpreise oder eine Provision auf unsere öffentlichen Preise, mit jedem Partner individuell vereinbart.'], ['Buchung', 'Per E-Mail, WhatsApp oder Telefon, rund um die Uhr. Bestätigung innerhalb von 30 Minuten.'], ['Ihre Kunden', 'Ein Chauffeur empfängt sie mit Namensschild. Sie bleiben ihr Ansprechpartner, wir kümmern uns um die Fahrt.'], ['Außerhalb von Paris und Europa', 'Skiorte, Côte d\'Azur und weitere Regionen: Angebot innerhalb von 30 Minuten.']],
    contactTitle: 'Kontakt', role: 'Gründer und Geschäftsführer',
    legal: 'Amani Limousines · 78 avenue des Champs-Élysées, 75008 Paris, Frankreich · SIREN 821 665 395 · USt-IdNr. FR90 821 665 395' },
  es: { file: 'amani-limousines-tarifas-agencias-es.pdf', eur: (n) => `${n.toLocaleString('es-ES')} €`, perkm: (n) => `${n.toFixed(2).replace('.', ',')} €`,
    kicker: 'Tarifas para agencias 2026', title: 'Chóferes privados para agencias de viajes, hoteles y conserjerías',
    lead: 'Desde 2016, Amani Limousines acompaña a los viajeros desde su llegada a París y durante toda su estancia en Francia y en Europa. Este documento presenta nuestras tarifas y las condiciones de colaboración.',
    commitTitle: 'Nuestros compromisos', commit: ['Chóferes profesionales y multilingües', 'Tarifas cerradas, confirmadas al reservar', 'Seguimiento de vuelos sin coste adicional', 'Un interlocutor dedicado, disponible 24/7', 'Respuesta en menos de 30 minutos', 'Mercedes recientes y vehículos premium'],
    ratesTitle: 'Tarifas para agencias · París e Île-de-France', cols: ['Vehículo', 'Pasajeros', 'Traslado aeropuerto París', 'Traslado en ciudad', 'Servicio por horas', 'Adicional, por km'],
    pax: (p, b) => `${p} pax · ${b} maletas`, from: 'desde', perh: '/ hora',
    notes: ['Traslado aeropuerto: tarifa fija entre CDG, Orly, Le Bourget o Beauvais y París o su área metropolitana.', 'Traslado en ciudad: tarifa mínima en París e Île-de-France. Fuera de la tarifa fija, el trayecto se factura por kilómetro.', `Servicio por horas: mínimo ${MIN_H} horas, el chófer y el vehículo quedan a disposición de sus clientes.`, VAT === 'HT' ? 'Precios sin IVA. Peajes y combustible incluidos.' : 'Todos los precios incluyen IVA, peajes y combustible.'],
    destTitle: 'Destinos', dest: [['París e Île-de-France', 'Versalles, Giverny, Disneyland, Fontainebleau'], ['Estaciones de esquí', 'Courchevel, Val Thorens, Méribel, Megève, Chamonix'], ['Costa Azul', 'Niza, Cannes, Mónaco, Antibes'], ['Saint-Tropez y Provenza', 'Saint-Tropez, Marsella, Aix-en-Provence'], ['Burdeos y viñedos', 'Burdeos, Champaña, Borgoña, Cognac'], ['Normandía y el Loira', 'Mont-Saint-Michel, Deauville, castillos del Loira']],
    europe: 'En toda Europa: Ginebra, Milán, Londres, Barcelona, Bruselas, Ámsterdam y muchos otros destinos, bajo presupuesto.',
    termsTitle: 'Condiciones de colaboración', terms: [['Tarifas para agencias o comisión', 'A su elección: las tarifas indicadas o una comisión sobre nuestras tarifas públicas, acordada con cada socio.'], ['Reservas', 'Por correo, WhatsApp o teléfono, las 24 horas. Confirmación en menos de 30 minutos.'], ['Sus clientes', 'Un chófer los recibe con su nombre. Usted sigue siendo su interlocutor, nosotros nos ocupamos del trayecto.'], ['Fuera de París y Europa', 'Estaciones de esquí, Costa Azul y otras regiones: presupuesto en menos de 30 minutos.']],
    contactTitle: 'Contacto', role: 'Fundador y director',
    legal: 'Amani Limousines · 78 avenue des Champs-Élysées, 75008 París, Francia · SIREN 821 665 395 · IVA FR90 821 665 395' },
};

const DEST_IMG = ['paris', 'alpes', 'riviera', 'saint-tropez', 'bordeaux', 'normandie'].map((k) => img(`/email/dest-${k}.jpg`));
const LOGO = 'data:image/png;base64,' + fs.readFileSync(`${A}/logo-transparent.png`).toString('base64');
const HERO = img('/images/city-hero/chauffeur-prive-paris.jpg');

function html(l) {
  const t = L[l];
  // Grille partenaires fournie par Amani (Paris & Île-de-France), distincte des prix publics du site.
  const rows = PARTNER.map((v) => `<tr>
    <td class="veh">${v.img ? `<img src="${img(v.img)}">` : '<i class="noimg"></i>'}<span>${v.name[l] || v.name.en}</span></td>
    <td class="pax">${t.pax(v.pax, v.bags)}</td><td class="p">${t.eur(v.airport)}</td>
    <td class="p">${t.eur(v.city)}</td>
    <td class="p">${t.eur(v.hourly)} <small>${t.perh}</small></td><td class="p">${t.perkm(v.km)}</td></tr>`).join('');
  return `<!doctype html><html lang="${l}"><head><meta charset="utf-8"><style>
  @font-face{font-family:DMS;src:url(data:font/woff2;base64,${DMS})}
  @font-face{font-family:INT;src:url(data:font/woff2;base64,${INTER})}
  @page{size:A4;margin:0}
  *{box-sizing:border-box} body{margin:0;font-family:INT,sans-serif;color:#141210;font-size:10.5pt}
  .page{width:210mm;height:297mm;padding:16mm 16mm 14mm;position:relative;page-break-after:always;overflow:hidden}
  .page:last-child{page-break-after:auto}
  h1,h2{font-family:DMS,serif;font-weight:normal;margin:0}
  .kicker{font-size:8pt;letter-spacing:.3em;text-transform:uppercase;color:#a8894e}
  .gold{color:#a8894e} .muted{color:#5f5a52}
  .logo{height:16mm}
  .cover-hero{height:92mm;margin:10mm -16mm 0;background:url(${HERO}) center/cover}
  .cover h1{font-size:25pt;line-height:1.2;margin:8mm 0 5mm}
  .lead{font-size:11pt;line-height:1.6;color:#5f5a52}
  .commit{display:grid;grid-template-columns:1fr 1fr;gap:3mm 8mm;margin-top:8mm;padding:6mm 7mm;background:#faf8f5;border-left:2px solid #a8894e}
  .commit div{font-size:10pt} .commit div:before{content:"✓  ";color:#a8894e}
  h2{font-size:18pt;margin:2mm 0 5mm}
  /* Largeurs fixes : passagers et bagages tiennent sur une ligne dans les 4 langues,
     le nom du véhicule passe sur deux lignes si besoin. */
  table{width:100%;border-collapse:collapse;table-layout:fixed}
  th:nth-child(1){width:31%} th:nth-child(2){width:19%} th:nth-child(3){width:13%} th:nth-child(4){width:12%} th:nth-child(5){width:14%} th:nth-child(6){width:11%}
  th{hyphens:manual}
  th{font-size:7pt;letter-spacing:.05em;text-transform:uppercase;color:#a8894e;font-weight:normal;text-align:left;padding:0 1.5mm 2.5mm;border-bottom:1px solid #a8894e}
  td{padding:2.2mm 2mm;border-bottom:1px solid #ebe6dc;font-size:9pt;vertical-align:middle}
  td.p{font-weight:600;white-space:nowrap} td.pax{white-space:nowrap;font-size:8pt} td small{font-weight:normal;color:#5f5a52;font-size:7.5pt}
  td.veh{display:flex;align-items:center;gap:2.5mm;font-family:DMS,serif;font-size:9.5pt;line-height:1.25}
  td.veh img,td.veh i.noimg{width:19mm;height:9mm;object-fit:contain;flex:none;display:inline-block}
  .notes{margin-top:5mm;font-size:8.5pt;line-height:1.55;color:#5f5a52} .notes p{margin:0 0 1.5mm}
  .dest{display:grid;grid-template-columns:repeat(3,1fr);gap:4mm}
  .dest img{width:100%;height:30mm;object-fit:cover;display:block}
  .dest b{display:block;font-family:DMS,serif;font-weight:normal;font-size:11pt;margin-top:2mm}
  .dest span{font-size:8pt;color:#5f5a52}
  .europe{font-size:9.5pt;color:#5f5a52;margin:4mm 0 8mm}
  .terms{display:grid;grid-template-columns:1fr 1fr;gap:4mm 8mm}
  .terms b{display:block;font-family:DMS,serif;font-weight:normal;font-size:11pt;margin-bottom:1mm}
  .terms div{font-size:9pt;line-height:1.5;color:#5f5a52}
  .contact{margin-top:8mm;padding:6mm 7mm;background:#141210;color:#f0eadd;display:flex;justify-content:space-between;align-items:center}
  .contact h3{font-family:DMS,serif;font-weight:normal;font-size:14pt;margin:0 0 1mm;color:#fff}
  .contact .r{text-align:right;font-size:10pt;line-height:1.7}
  .foot{position:absolute;left:16mm;right:16mm;bottom:9mm;font-size:7pt;color:#8a857c;border-top:1px solid #ebe6dc;padding-top:2.5mm;display:flex;justify-content:space-between}
  </style></head><body>
  <section class="page cover">
    <img class="logo" src="${LOGO}">
    <div class="cover-hero"></div>
    <div class="kicker" style="margin-top:9mm">${t.kicker}</div>
    <h1>${t.title}</h1>
    <p class="lead">${t.lead}</p>
    <div class="kicker" style="margin-top:8mm">${t.commitTitle}</div>
    <div class="commit">${t.commit.map((c) => `<div>${c}</div>`).join('')}</div>
    <div class="foot"><span>${t.legal}</span><span>1 / 3</span></div>
  </section>
  <section class="page">
    <div class="kicker">${t.kicker}</div><h2>${t.ratesTitle}</h2>
    <table><thead><tr>${t.cols.map((c) => `<th>${c}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>
    <div class="notes">${t.notes.map((n) => `<p>${n}</p>`).join('')}</div>
    <div class="foot"><span>${t.legal}</span><span>2 / 3</span></div>
  </section>
  <section class="page">
    <div class="kicker">${t.kicker}</div><h2>${t.destTitle}</h2>
    <div class="dest">${t.dest.map(([n, s], i) => `<div><img src="${DEST_IMG[i]}"><b>${n}</b><span>${s}</span></div>`).join('')}</div>
    <p class="europe">${t.europe}</p>
    <h2>${t.termsTitle}</h2>
    <div class="terms">${t.terms.map(([h, d]) => `<div><b>${h}</b>${d}</div>`).join('')}</div>
    <div class="contact"><div><h3>Lounes Amani</h3><div style="font-size:9pt;color:#c9b27c">${t.role}</div></div>
      <div class="r">+33 6 87 16 97 47 · WhatsApp<br>lounes@amanilimousines.com<br>www.amani-limousines.com</div></div>
    <div class="foot"><span>${t.legal}</span><span>3 / 3</span></div>
  </section></body></html>`;
}

(async () => {
  const b = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  const only = process.argv[2] ? process.argv[2].split(',') : Object.keys(L);
  for (const l of only) {
    const p = await b.newPage({ viewport: { width: 794, height: 3369 } });
    await p.setContent(html(l), { waitUntil: 'load' });
    await p.evaluate(() => document.fonts.ready);
    await p.pdf({ path: `${ROOT}/partners/${L[l].file}`, format: 'A4', printBackground: true, preferCSSPageSize: true });
    for (let i = 0; i < 3; i++) await p.screenshot({ path: path.join(SHOTS, `brochure-${l}-p${i + 1}.png`), clip: { x: 0, y: i * 1123, width: 794, height: 1123 } }).catch(() => {});
    await p.close();
    console.log(l, L[l].file, Math.round(fs.statSync(`${ROOT}/partners/${L[l].file}`).size / 1024) + 'KB');
  }
  await b.close();
})();

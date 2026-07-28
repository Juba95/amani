import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'contacts.json');

/**
 * Enregistre la demande sur disque AVANT toute tentative d'envoi.
 *
 * L'email peut échouer (identifiants SMTP invalides, serveur injoignable) : sans
 * cette trace, la demande du client serait perdue définitivement alors que le
 * site lui affiche une confirmation.
 */
function saveContact(entry: Record<string, unknown>): boolean {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    let all: unknown[] = [];
    if (fs.existsSync(DATA_FILE)) {
      try {
        const parsed = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
        if (Array.isArray(parsed)) all = parsed;
      } catch {
        // Fichier corrompu : on le met de côté plutôt que d'écraser l'historique.
        fs.renameSync(DATA_FILE, `${DATA_FILE}.corrupt-${Date.now()}`);
      }
    }
    all.push(entry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('[contact API] save error:', err);
    return false;
  }
}

const SERVICE_LABELS: Record<string, string> = {
  transfert:    'Transfert privé',
  disposition:  'Mise à disposition',
  meetgreet:    'Meet and Greet',
  convoy:       'Convoi / Délégation',
  security:     'Sécurité rapprochée',
  excursion:    'Excursion privée',
  longdistance: 'Longue distance',
  other:        'Autre',
};

// Normalise un numéro pour wa.me
function toWaNumber(raw: string): string {
  const s = raw.replace(/[\s.\-()]/g, '');
  if (s.startsWith('+'))  return s.slice(1);
  if (s.startsWith('00')) return s.slice(2);
  if (s.startsWith('0'))  return '33' + s.slice(1);
  return s;
}

function buildClientWaLink(phone: string, name: string): string {
  const msg = `Bonjour ${name}, suite à votre demande sur Amani Limousines, je reviens vers vous 🙂`;
  return `https://wa.me/${toWaNumber(phone)}?text=${encodeURIComponent(msg)}`;
}

// Validation téléphone
function validatePhone(raw: string): boolean {
  const s = raw.replace(/[\s.\-()]/g, '');
  if (/^(\+33|0033)[67]\d{8}$/.test(s)) return true;
  if (/^0[67]\d{8}$/.test(s)) return true;
  if (/^\+\d{6,15}$/.test(s)) return true;
  if (/^0[1-9]\d{8}$/.test(s)) return true;
  return false;
}

// Helper : promesse avec timeout
function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`${label} timeout after ${ms}ms`)), ms);
    promise.then(
      (v) => { clearTimeout(timer); resolve(v); },
      (e) => { clearTimeout(timer); reject(e); },
    );
  });
}

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'JSON invalide' }, { status: 400 });
  }

  const { name, email, phone, service, date, passengers, message } = body ?? {};

  // ── Validation ──────────────────────────────────────────────────────────────
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Champs requis manquants (nom, email, message)' }, { status: 400 });
  }
  if (!phone?.trim()) {
    return NextResponse.json({ error: 'Le numéro de téléphone est obligatoire' }, { status: 400 });
  }
  if (!validatePhone(phone)) {
    return NextResponse.json({ error: 'Format de téléphone invalide' }, { status: 400 });
  }

  const serviceLabel = SERVICE_LABELS[service] || service || 'Non précisé';
  const ref = `AL-${Date.now()}`;
  const createdAt = new Date().toISOString();

  const saved = saveContact({
    id: ref,
    createdAt,
    name,
    email,
    phone,
    service,
    serviceLabel,
    date: date || null,
    passengers: passengers || null,
    message,
    source: 'contact',
  });

  const savedId = ref;

  // ── Email SMTP — avec timeout de 15s max ───────────────────────────────────
  const smtpUser = process.env.SMTP_USER;
  const contactEmail = process.env.CONTACT_EMAIL || smtpUser;
  let emailSent = false;
  let emailError = '';

  if (smtpUser && process.env.SMTP_PASS && contactEmail) {
    try {
      const nodemailer = (await import('nodemailer')).default;
      const transporter = nodemailer.createTransport({
        host:   process.env.SMTP_HOST || 'ssl0.ovh.net',
        port:   Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: { user: smtpUser, pass: process.env.SMTP_PASS },
        connectionTimeout: 8000,
        greetingTimeout: 5000,
        socketTimeout: 10000,
      });

      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.amani-limousines.com';
      const waReply = buildClientWaLink(phone, name);

      await withTimeout(
        transporter.sendMail({
          from:    `"Amani Limousines" <${smtpUser}>`,
          to:      contactEmail,
          replyTo: email,
          subject: `🚗 Nouvelle demande — ${name} — ${serviceLabel}`,
          html: `
            <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#1a1a1a;">
              <div style="background:#0a0908;padding:24px 32px;margin-bottom:32px;">
                <h1 style="color:#c9a84c;font-size:18px;margin:0;letter-spacing:.2em;font-weight:normal;text-transform:uppercase;">Amani Limousines</h1>
                <p style="color:#888;font-size:12px;margin:6px 0 0;font-family:sans-serif;">Nouvelle demande de contact</p>
              </div>
              <div style="padding:0 32px 32px;">
                <table style="width:100%;border-collapse:collapse;font-family:sans-serif;font-size:14px;">
                  <tr><td style="padding:10px 0;border-bottom:1px solid #ece9e3;color:#888;width:140px;">Nom</td><td style="padding:10px 0;border-bottom:1px solid #ece9e3;font-weight:600;">${name}</td></tr>
                  <tr><td style="padding:10px 0;border-bottom:1px solid #ece9e3;color:#888;">Email</td><td style="padding:10px 0;border-bottom:1px solid #ece9e3;"><a href="mailto:${email}" style="color:#8a7340;">${email}</a></td></tr>
                  <tr><td style="padding:10px 0;border-bottom:1px solid #ece9e3;color:#888;">Téléphone</td><td style="padding:10px 0;border-bottom:1px solid #ece9e3;"><a href="tel:${phone}" style="color:#555;">${phone}</a></td></tr>
                  <tr><td style="padding:10px 0;border-bottom:1px solid #ece9e3;color:#888;">Service</td><td style="padding:10px 0;border-bottom:1px solid #ece9e3;">${serviceLabel}</td></tr>
                  <tr><td style="padding:10px 0;border-bottom:1px solid #ece9e3;color:#888;">Date souhaitée</td><td style="padding:10px 0;border-bottom:1px solid #ece9e3;">${date || '—'}</td></tr>
                  <tr><td style="padding:10px 0;border-bottom:1px solid #ece9e3;color:#888;">Passagers</td><td style="padding:10px 0;border-bottom:1px solid #ece9e3;">${passengers || '—'}</td></tr>
                </table>
                <div style="margin-top:24px;background:#faf8f5;border-left:3px solid #c9a84c;padding:16px 20px;font-family:sans-serif;font-size:14px;color:#555;line-height:1.6;">
                  ${message.replace(/\n/g, '<br/>')}
                </div>
                <div style="margin-top:28px;text-align:center;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
                  <a href="${siteUrl}/adminos" style="display:inline-block;background:#0a0908;color:#c9a84c;padding:12px 28px;font-family:sans-serif;font-size:12px;letter-spacing:.15em;text-transform:uppercase;text-decoration:none;border-radius:6px;">
                    Voir dans le backoffice
                  </a>
                  <a href="${waReply}" target="_blank" style="display:inline-block;background:#25D366;color:#fff;padding:12px 28px;font-family:sans-serif;font-size:12px;letter-spacing:.15em;text-transform:uppercase;text-decoration:none;border-radius:6px;">
                    Répondre WhatsApp
                  </a>
                  <a href="tel:${phone}" style="display:inline-block;background:#faf8f5;color:#555;border:1px solid #e5e0d8;padding:12px 28px;font-family:sans-serif;font-size:12px;letter-spacing:.15em;text-transform:uppercase;text-decoration:none;border-radius:6px;">
                    Appeler
                  </a>
                </div>
                <p style="margin-top:32px;font-family:sans-serif;font-size:11px;color:#bbb;text-align:center;">
                  Réf. ${savedId} · ${new Date(createdAt).toLocaleString('fr-FR')}
                </p>
              </div>
            </div>`,
        }),
        15000, // 15 secondes max pour tout l'envoi
        'SMTP sendMail',
      );
      emailSent = true;
    } catch (mailErr: any) {
      emailError = mailErr?.message || 'Erreur inconnue';
      console.error('[contact API] mail error:', emailError);
    }
  } else {
    emailError = 'SMTP non configuré (SMTP_USER ou SMTP_PASS manquant)';
    console.warn('[contact API]', emailError);
  }

  // ── Réponse ─────────────────────────────────────────────────────────────────
  // La demande n'est réellement prise en compte que si elle est partie par mail
  // OU conservée sur disque. Si les deux échouent, il faut le dire au visiteur.
  if (!emailSent && !saved) {
    return NextResponse.json(
      { error: 'Impossible d’enregistrer votre demande. Merci de nous joindre par téléphone ou WhatsApp.' },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    id: savedId,
    emailSent,
    saved,
    ...(emailError ? { emailWarning: emailError } : {}),
  });
}

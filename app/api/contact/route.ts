import { NextRequest, NextResponse } from 'next/server';

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

  // ── 1. Sauvegarde JSON — optionnelle, ne bloque pas la réponse ───────────────
  let savedId = ref;
  try {
    // Import dynamique pour éviter un crash si fs n'est pas dispo
    const { addContact } = await import('@/lib/contacts');
    const contact = addContact({ name, email, phone, service, date, passengers, message });
    savedId = contact.id;
  } catch (saveErr) {
    // On log l'erreur mais on continue — l'email suffit comme sauvegarde
    console.error('[contact API] save error:', saveErr);
  }

  // ── 2. Email SMTP — optionnel, ne bloque pas la réponse ──────────────────────
  const smtpUser = process.env.SMTP_USER;
  const contactEmail = process.env.CONTACT_EMAIL || smtpUser;

  if (smtpUser && process.env.SMTP_PASS && contactEmail) {
    // Envoi en arrière-plan — ne bloque pas la réponse au client
    try {
      const nodemailer = (await import('nodemailer')).default;
      const transporter = nodemailer.createTransport({
        host:   process.env.SMTP_HOST || 'ssl0.ovh.net',
        port:   Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: { user: smtpUser, pass: process.env.SMTP_PASS },
        connectionTimeout: 5000,
        greetingTimeout: 5000,
        socketTimeout: 10000,
      });

      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.amani-limousines.com';
      const waReply = buildClientWaLink(phone, name);

      // Fire-and-forget : on n'attend pas la fin de l'envoi
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
      }).catch((mailErr: any) => {
        console.error('[contact API] mail error:', mailErr);
      });
    } catch (mailErr) {
      // Email échoue → on log mais on renvoie quand même success
      console.error('[contact API] mail setup error:', mailErr);
    }
  }

  // ── Toujours répondre success si la validation est passée ────────────────────
  return NextResponse.json({ success: true, id: savedId });
}

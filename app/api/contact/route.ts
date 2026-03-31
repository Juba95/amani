import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { addContact } from '@/lib/contacts';

// ── Transporter SMTP (config via env vars Coolify) ──────────────────────────
function createTransporter() {
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST   || 'ssl0.ovh.net',
    port:   Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  });
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

const BUSINESS_WA = process.env.WHATSAPP_NUMBER || '33662027344';

// Normalise un numéro de téléphone pour un lien wa.me (supprime +, espaces, tirets)
function toWaNumber(raw: string): string {
  const s = raw.replace(/[\s.\-()]/g, '');
  if (s.startsWith('+'))  return s.slice(1);
  if (s.startsWith('00')) return s.slice(2);
  if (s.startsWith('0'))  return '33' + s.slice(1);
  return s;
}

// Génère un lien WhatsApp vers le client (depuis backoffice)
function buildClientWaLink(phone: string, name: string): string {
  const msg = `Bonjour ${name}, suite à votre demande sur Amani Limousines, je reviens vers vous 🙂`;
  return `https://wa.me/${toWaNumber(phone)}?text=${encodeURIComponent(msg)}`;
}

// Validation téléphone (même logique que côté client)
function validatePhone(raw: string): boolean {
  const s = raw.replace(/[\s.\-()]/g, '');
  if (/^(\+33|0033)[67]\d{8}$/.test(s)) return true;
  if (/^0[67]\d{8}$/.test(s)) return true;
  if (/^\+\d{6,15}$/.test(s)) return true;
  if (/^0[1-9]\d{8}$/.test(s)) return true;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, date, passengers, message } = body;

    // Validation — téléphone maintenant obligatoire
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
    }
    if (!phone || !phone.trim()) {
      return NextResponse.json({ error: 'Le numéro de téléphone est obligatoire' }, { status: 400 });
    }
    if (!validatePhone(phone)) {
      return NextResponse.json({ error: 'Format de téléphone invalide' }, { status: 400 });
    }

    // 1. Sauvegarder dans le fichier JSON
    const contact = addContact({ name, email, phone, service, date, passengers, message });

    // 2. Envoyer email si SMTP configuré
    const smtpUser = process.env.SMTP_USER;
    const contactEmail = process.env.CONTACT_EMAIL || smtpUser;

    if (smtpUser && process.env.SMTP_PASS && contactEmail) {
      const transporter = createTransporter();
      const serviceLabel = SERVICE_LABELS[service] || service || 'Non précisé';

      await transporter.sendMail({
        from: `"Amani Limousines" <${smtpUser}>`,
        to: contactEmail,
        replyTo: email,
        subject: `🚗 Nouvelle demande — ${name} — ${serviceLabel}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
            <div style="background: #0a0908; padding: 24px 32px; margin-bottom: 32px;">
              <h1 style="color: #c9a84c; font-size: 18px; margin: 0; letter-spacing: 0.2em; font-weight: normal; text-transform: uppercase;">
                Amani Limousines
              </h1>
              <p style="color: #888; font-size: 12px; margin: 6px 0 0; font-family: sans-serif;">Nouvelle demande de contact</p>
            </div>
            <div style="padding: 0 32px 32px;">
              <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px;">
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #ece9e3; color: #888; width: 140px;">Nom</td><td style="padding: 10px 0; border-bottom: 1px solid #ece9e3; font-weight: 600;">${name}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #ece9e3; color: #888;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #ece9e3;"><a href="mailto:${email}" style="color: #8a7340;">${email}</a></td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #ece9e3; color: #888;">Téléphone</td><td style="padding: 10px 0; border-bottom: 1px solid #ece9e3;">${phone || '—'}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #ece9e3; color: #888;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #ece9e3;">${serviceLabel}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #ece9e3; color: #888;">Date souhaitée</td><td style="padding: 10px 0; border-bottom: 1px solid #ece9e3;">${date || '—'}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #ece9e3; color: #888;">Passagers</td><td style="padding: 10px 0; border-bottom: 1px solid #ece9e3;">${passengers || '—'}</td></tr>
              </table>
              <div style="margin-top: 24px; background: #faf8f5; border-left: 3px solid #c9a84c; padding: 16px 20px; font-family: sans-serif; font-size: 14px; color: #555; line-height: 1.6;">
                ${message.replace(/\n/g, '<br/>')}
              </div>
              <div style="margin-top: 28px; text-align: center; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.amani-limousines.com'}/admin"
                   style="display: inline-block; background: #0a0908; color: #c9a84c; padding: 12px 28px; font-family: sans-serif; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; border-radius: 6px;">
                  Voir dans le backoffice
                </a>
                ${phone ? `<a href="${buildClientWaLink(phone, name)}"
                   target="_blank"
                   style="display: inline-block; background: #25D366; color: #fff; padding: 12px 28px; font-family: sans-serif; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; border-radius: 6px;">
                  📲 Répondre WhatsApp
                </a>` : ''}
                <a href="tel:${phone}"
                   style="display: inline-block; background: #faf8f5; color: #555; border: 1px solid #e5e0d8; padding: 12px 28px; font-family: sans-serif; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; border-radius: 6px;">
                  📞 Appeler
                </a>
              </div>
              <p style="margin-top: 32px; font-family: sans-serif; font-size: 11px; color: #bbb; text-align: center;">
                Réf. ${contact.id} · ${new Date(contact.createdAt).toLocaleString('fr-FR')}
              </p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, id: contact.id });
  } catch (err) {
    console.error('[contact API]', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

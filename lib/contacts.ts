/**
 * Couche de stockage contacts — JSON sur disque
 * Fichier : /app/data/contacts.json (volume persistant dans Coolify)
 */

import fs from 'fs';
import path from 'path';

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'contacts.json');

export type ContactStatus = 'new' | 'in_progress' | 'done';

export interface Contact {
  id: string;
  createdAt: string;
  status: ContactStatus;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  passengers: string;
  message: string;
}

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function readContacts(): Contact[] {
  ensureDir();
  if (!fs.existsSync(DATA_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

export function writeContacts(contacts: Contact[]) {
  ensureDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2), 'utf-8');
}

export function addContact(data: Omit<Contact, 'id' | 'createdAt' | 'status'>): Contact {
  const contacts = readContacts();
  const contact: Contact = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    createdAt: new Date().toISOString(),
    status: 'new',
    ...data,
  };
  contacts.unshift(contact); // Plus récent en premier
  writeContacts(contacts);
  return contact;
}

export function updateContactStatus(id: string, status: ContactStatus): boolean {
  const contacts = readContacts();
  const idx = contacts.findIndex((c) => c.id === id);
  if (idx === -1) return false;
  contacts[idx].status = status;
  writeContacts(contacts);
  return true;
}

export function updateContact(id: string, fields: Partial<Omit<Contact, 'id' | 'createdAt'>>): Contact | null {
  const contacts = readContacts();
  const idx = contacts.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  contacts[idx] = { ...contacts[idx], ...fields };
  writeContacts(contacts);
  return contacts[idx];
}

'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { CTA, Footer } from '@/components/CTAFooter';
import { VEHICLES, calculatePrice } from '@/lib/vehicles';
import fr from '@/locales/fr.json';

const VEHICLE_NAMES: Record<string, string> = {
  classe_e: 'Mercedes Classe E',
  eqs: 'Mercedes EQS',
  classe_s: 'Mercedes Classe S',
  classe_s_maybach: 'Mercedes Classe S Maybach',
  classe_v: 'Mercedes Classe V',
  classe_g: 'Mercedes Classe G',
  range_rover_evoque: 'Range Rover Evoque',
  sprinter: 'Mercedes Sprinter VIP',
};

function ReservationForm() {
  const searchParams = useSearchParams();
  const t = fr;

  const [form, setForm] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    passengers: '1',
    vehicle: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);

  // Pré-remplir depuis les query params (venant de /devis)
  useEffect(() => {
    const prefillFrom = searchParams.get('from');
    const prefillTo = searchParams.get('to');
    const prefillVehicle = searchParams.get('vehicle');
    if (prefillFrom || prefillTo || prefillVehicle) {
      setForm(f => ({
        ...f,
        ...(prefillFrom ? { from: prefillFrom } : {}),
        ...(prefillTo ? { to: prefillTo } : {}),
        ...(prefillVehicle ? { vehicle: prefillVehicle } : {}),
      }));
    }
  }, [searchParams]);

  const selectedVehicle = VEHICLES.find((v) => v.id === form.vehicle);
  const estimatedPrice = selectedVehicle ? calculatePrice(selectedVehicle, 30) : null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppMessage = () => {
    const vehicleName = VEHICLE_NAMES[form.vehicle] || form.vehicle;
    const price = selectedVehicle ? calculatePrice(selectedVehicle, 30) : '?';
    return encodeURIComponent(
      `Bonjour Amani Limousines,\n\nJe souhaite réserver un transfert :\n\n` +
      `📍 Départ : ${form.from}\n📍 Arrivée : ${form.to}\n` +
      `📅 Date : ${form.date} à ${form.time}\n` +
      `👥 Passagers : ${form.passengers}\n🚗 Véhicule : ${vehicleName}\n\n` +
      `Nom : ${form.name}\nTél : ${form.phone}\nEmail : ${form.email}\n` +
      (form.notes ? `\nNotes : ${form.notes}` : '') +
      `\n\nMerci`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    window.open(`https://wa.me/33662027344?text=${buildWhatsAppMessage()}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar t={t} locale="fr" />

      <section className="pt-36 pb-20 px-6 md:px-10">
        <div className="max-w-2xl mx-auto">
          <p className="tag">Formulaire de réservation</p>
          <h1 className="heading mt-3">
            Réservez votre <em>chauffeur privé Paris</em>
          </h1>
          <p className="sf text-stone-500 mt-4 leading-relaxed">
            Remplissez le formulaire ci-dessous. Vous serez redirigé vers WhatsApp
            pour confirmer votre réservation avec notre équipe.
          </p>

          {submitted ? (
            <div className="mt-10 p-8 rounded-2xl border border-warm-300 bg-warm-50 text-center">
              <p className="heading text-2xl">Votre demande a été envoyée</p>
              <p className="sf text-stone-500 mt-3">
                Notre équipe vous rappelle sous 30 minutes. Vous pouvez également
                nous contacter directement au <strong>+33 6 62 02 73 44</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              {step === 1 && (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="sf text-xs text-stone-500 uppercase tracking-wider block mb-2">
                        Point de départ *
                      </label>
                      <input
                        name="from" value={form.from} onChange={handleChange} required
                        placeholder="CDG Terminal 2E, hôtel, adresse…"
                        className="field-luxury"
                        style={{ paddingLeft: '1rem' }}
                      />
                    </div>
                    <div>
                      <label className="sf text-xs text-stone-500 uppercase tracking-wider block mb-2">
                        Destination *
                      </label>
                      <input
                        name="to" value={form.to} onChange={handleChange} required
                        placeholder="Hôtel, adresse, gare…"
                        className="field-luxury"
                        style={{ paddingLeft: '1rem' }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="sf text-xs text-stone-500 uppercase tracking-wider block mb-2">
                        Date *
                      </label>
                      <input
                        type="date" name="date" value={form.date} onChange={handleChange} required
                        className="field-luxury" style={{ paddingLeft: '1rem' }}
                      />
                    </div>
                    <div>
                      <label className="sf text-xs text-stone-500 uppercase tracking-wider block mb-2">
                        Heure *
                      </label>
                      <input
                        type="time" name="time" value={form.time} onChange={handleChange} required
                        className="field-luxury" style={{ paddingLeft: '1rem' }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="sf text-xs text-stone-500 uppercase tracking-wider block mb-2">
                        Nombre de passagers *
                      </label>
                      <select
                        name="passengers" value={form.passengers} onChange={handleChange}
                        className="field-luxury" style={{ paddingLeft: '1rem' }}
                      >
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((n) => (
                          <option key={n} value={n}>{n} passager{n > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="sf text-xs text-stone-500 uppercase tracking-wider block mb-2">
                        Véhicule *
                      </label>
                      <select
                        name="vehicle" value={form.vehicle} onChange={handleChange} required
                        className="field-luxury" style={{ paddingLeft: '1rem' }}
                      >
                        <option value="">Choisir un véhicule</option>
                        {VEHICLES.map((v) => (
                          <option key={v.id} value={v.id}>
                            {VEHICLE_NAMES[v.id] || v.nameKey} — {v.pax} pax
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="sf text-xs text-stone-500 uppercase tracking-wider block mb-2">
                      Notes (numéro de vol, instructions particulières…)
                    </label>
                    <textarea
                      name="notes" value={form.notes} onChange={handleChange} rows={3}
                      placeholder="Vol AF 128, arrivée T2E, 2 valises…"
                      className="field-luxury resize-none" style={{ paddingLeft: '1rem', paddingTop: '0.875rem' }}
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    Étape suivante : vos coordonnées →
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="p-6 rounded-2xl border border-warm-300 bg-warm-50">
                    <p className="sf text-sm font-semibold text-gray-900 mb-3">Récapitulatif</p>
                    <div className="space-y-1">
                      {[
                        { label: 'Départ', val: form.from },
                        { label: 'Arrivée', val: form.to },
                        { label: 'Date', val: `${form.date} à ${form.time}` },
                        { label: 'Véhicule', val: VEHICLE_NAMES[form.vehicle] || form.vehicle },
                      ].map((r) => (
                        <div key={r.label} className="flex gap-4 text-sm">
                          <span className="sf text-stone-400 w-20 flex-shrink-0">{r.label}</span>
                          <span className="sf text-gray-700">{r.val}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button" onClick={() => setStep(1)}
                      className="sf text-xs mt-4" style={{ color: '#8a7340' }}
                    >
                      ← Modifier
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="sf text-xs text-stone-500 uppercase tracking-wider block mb-2">
                        Votre nom *
                      </label>
                      <input
                        name="name" value={form.name} onChange={handleChange} required
                        placeholder="Prénom et nom"
                        className="field-luxury" style={{ paddingLeft: '1rem' }}
                      />
                    </div>
                    <div>
                      <label className="sf text-xs text-stone-500 uppercase tracking-wider block mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange} required
                        placeholder="+33 6 00 00 00 00"
                        className="field-luxury" style={{ paddingLeft: '1rem' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sf text-xs text-stone-500 uppercase tracking-wider block mb-2">
                      Email
                    </label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="votre@email.com"
                      className="field-luxury" style={{ paddingLeft: '1rem' }}
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    Envoyer via WhatsApp →
                  </button>
                  <p className="sf text-xs text-stone-400 text-center">
                    Vous serez redirigé vers WhatsApp avec tous les détails pré-remplis.
                    Notre équipe répond sous 30 minutes.
                  </p>
                </>
              )}
            </form>
          )}

          {/* Alternatives */}
          <div className="mt-12 pt-8 border-t border-warm-200">
            <p className="sf text-sm text-stone-500 text-center mb-4">Ou contactez-nous directement</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+33662027344"
                className="btn-outline">
                ✆ +33 6 62 02 73 44
              </a>
              <a href="https://wa.me/33662027344" target="_blank" rel="noopener noreferrer"
                className="btn-outline">
                WhatsApp
              </a>
              <a href="mailto:contact@amani-limousines.com"
                className="btn-outline">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA t={t} />
      <Footer t={t} />
    </div>
  );
}

export default function ReservationClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="sf text-stone-400 text-sm">Chargement…</p>
      </div>
    }>
      <ReservationForm />
    </Suspense>
  );
}

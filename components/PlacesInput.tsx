'use client';

import { useEffect, useRef, useState } from 'react';

interface PlacesInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
  /** Appelé quand une adresse complète est sélectionnée dans l'autocomplete */
  onPlaceSelected?: (address: string) => void;
  /** 'dark' : libellé au-dessus et champ souligné, pour le widget du hero. */
  variant?: 'light' | 'dark';
}

// ── Détection d'échec d'authentification Google Maps ─────────────────────────
// Google appelle window.gm_authFailure() si la clé API est invalide/rejetée.
// Dans ce cas, on bascule en mode "saisie libre" : pas d'autocomplete, pas de
// validation bloquante — le formulaire reste utilisable.
let gmapsAuthFailed = false;
const authFailureListeners = new Set<() => void>();

/** true si Google Maps a refusé la clé API (formulaire en mode saisie libre) */
export function isGmapsUnavailable(): boolean {
  return gmapsAuthFailed;
}

function registerAuthFailureHandler() {
  if (typeof window === 'undefined') return;
  if ((window as any).gm_authFailure) return;
  (window as any).gm_authFailure = () => {
    gmapsAuthFailed = true;
    authFailureListeners.forEach((fn) => fn());
  };
}

// Charge le script Google Maps une seule fois dans la page (async + defer)
function loadGoogleMapsScript(apiKey: string) {
  if (typeof window === 'undefined') return;
  if (document.getElementById('google-maps-script')) return;
  registerAuthFailureHandler();

  // Use requestIdleCallback to avoid blocking main thread during page load
  const load = () => {
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=fr`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(load, { timeout: 3000 });
  } else {
    setTimeout(load, 1000);
  }
}

export default function PlacesInput({
  label,
  placeholder,
  value,
  onChange,
  onEnter,
  onPlaceSelected,
  variant = 'light',
}: PlacesInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  // true = l'utilisateur a sélectionné dans la liste ; false = texte libre non validé
  const [placeConfirmed, setPlaceConfirmed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [authFailed, setAuthFailed] = useState(gmapsAuthFailed);

  // Si Google rejette la clé : réactiver le champ (Google le désactive et y met
  // son message d'erreur) et repasser en saisie libre
  useEffect(() => {
    const onFailure = () => {
      setAuthFailed(true);
      setShowHint(false);
      if (inputRef.current) {
        inputRef.current.disabled = false;
        inputRef.current.placeholder = placeholder;
        inputRef.current.style.backgroundImage = 'none';
      }
    };
    if (gmapsAuthFailed) onFailure();
    authFailureListeners.add(onFailure);
    return () => { authFailureListeners.delete(onFailure); };
  }, [placeholder]);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

  // Reset la confirmation dès que l'utilisateur retape manuellement
  const handleManualChange = (v: string) => {
    setPlaceConfirmed(false);
    setShowHint(false);
    onChange(v);
  };

  useEffect(() => {
    if (!apiKey || apiKey.length < 10) return;

    const initAutocomplete = () => {
      if (!inputRef.current || !window.google?.maps?.places) return;
      if (autocompleteRef.current) return;

      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ['geocode', 'establishment'],
          componentRestrictions: { country: ['fr', 'be', 'ch', 'lu', 'mc'] },
          fields: ['formatted_address', 'name', 'geometry'],
        }
      );

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current!.getPlace();
        const address = place.formatted_address || place.name || '';
        if (address) {
          onChange(address);
          setPlaceConfirmed(true);
          setShowHint(false);
          onPlaceSelected?.(address);
        }
      });
    };

    if (window.google?.maps?.places) {
      initAutocomplete();
    } else {
      loadGoogleMapsScript(apiKey);
      const interval = setInterval(() => {
        if (window.google?.maps?.places) {
          initAutocomplete();
          clearInterval(interval);
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, [apiKey, onChange, onPlaceSelected]);

  // Quand l'utilisateur quitte le champ sans avoir sélectionné dans la liste
  const handleBlur = () => {
    if (value && !placeConfirmed && apiKey && apiKey.length >= 10 && !authFailed) {
      setShowHint(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!placeConfirmed && apiKey && apiKey.length >= 10 && !authFailed && value) {
        // Bloquer : forcer une sélection dans la liste
        setShowHint(true);
        e.preventDefault();
        return;
      }
      onEnter?.();
    }
    // Escape ou nouvelle frappe → reset confirmation
    if (e.key === 'Escape') {
      setShowHint(false);
    }
  };

  const hasError = showHint && !placeConfirmed && !authFailed && value.length > 0;

  const dark = variant === 'dark';

  return (
    <div className="relative">
      {dark ? (
        <span className="block font-sans text-[0.6rem] tracking-[0.18em] uppercase mb-1.5 text-white/45">
          {label}
        </span>
      ) : (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-gold-400 z-10 pointer-events-none">
          {label}
        </span>
      )}
      <input
        ref={inputRef}
        type="text"
        className={
          dark
            ? `w-full bg-transparent border-0 border-b outline-none py-2 pr-6 font-sans text-[0.95rem] text-white placeholder:text-white/35 transition-colors ${
                hasError ? 'border-amber-400/70' : 'border-white/20 focus:border-white/70'
              }`
            : `field-luxury transition-colors ${hasError ? 'border-amber-400 focus:border-amber-400' : ''}`
        }
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleManualChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        autoComplete="off"
      />
      {/* Indicateur de confirmation */}
      {placeConfirmed && value && (
        <span
          className={`absolute text-xs pointer-events-none ${
            dark ? 'right-0 bottom-2.5 text-emerald-400' : 'right-4 top-1/2 -translate-y-1/2 text-emerald-500'
          }`}
          title="Adresse confirmée"
        >
          ✓
        </span>
      )}
      {/* Hint : sélectionner dans la liste */}
      {hasError && (
        <p className={`mt-1 font-sans text-[0.65rem] leading-snug ${dark ? 'text-amber-300' : 'text-amber-600 px-1'}`}>
          Sélectionnez une adresse dans la liste pour calculer le trajet
        </p>
      )}
    </div>
  );
}

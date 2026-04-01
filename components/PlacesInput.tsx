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
}

// Charge le script Google Maps une seule fois dans la page
function loadGoogleMapsScript(apiKey: string) {
  if (typeof window === 'undefined') return;
  if (document.getElementById('google-maps-script')) return;
  const script = document.createElement('script');
  script.id = 'google-maps-script';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=fr`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

export default function PlacesInput({
  label,
  placeholder,
  value,
  onChange,
  onEnter,
  onPlaceSelected,
}: PlacesInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  // true = l'utilisateur a sélectionné dans la liste ; false = texte libre non validé
  const [placeConfirmed, setPlaceConfirmed] = useState(false);
  const [showHint, setShowHint] = useState(false);

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
    if (value && !placeConfirmed && apiKey && apiKey.length >= 10) {
      setShowHint(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!placeConfirmed && apiKey && apiKey.length >= 10 && value) {
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

  const hasError = showHint && !placeConfirmed && value.length > 0;

  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-gold-400 z-10 pointer-events-none">
        {label}
      </span>
      <input
        ref={inputRef}
        type="text"
        className={`field-luxury transition-colors ${hasError ? 'border-amber-400 focus:border-amber-400' : ''}`}
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
          className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 text-xs pointer-events-none"
          title="Adresse confirmée"
        >
          ✓
        </span>
      )}
      {/* Hint : sélectionner dans la liste */}
      {hasError && (
        <p className="mt-1 font-sans text-[0.65rem] text-amber-600 leading-snug px-1">
          Sélectionnez une adresse dans la liste pour calculer le trajet
        </p>
      )}
    </div>
  );
}

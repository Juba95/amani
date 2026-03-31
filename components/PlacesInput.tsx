'use client';

import { useEffect, useRef } from 'react';

interface PlacesInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void;
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
}: PlacesInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  // Récupère la clé — NEXT_PUBLIC_ est résolu au build time
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

  useEffect(() => {
    // Ne rien faire sans clé valide (évite l'erreur Google Maps)
    if (!apiKey || apiKey.length < 10) return;

    const initAutocomplete = () => {
      if (!inputRef.current || !window.google?.maps?.places) return;
      if (autocompleteRef.current) return; // déjà initialisé

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
        onChange(address);
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
  }, [apiKey, onChange]);

  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-gold-400 z-10 pointer-events-none">
        {label}
      </span>
      <input
        ref={inputRef}
        type="text"
        className="field-luxury"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onEnter?.()}
        autoComplete="off"
      />
    </div>
  );
}

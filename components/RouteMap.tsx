'use client';

import { useEffect, useRef, useState } from 'react';

interface RouteMapProps {
  from: string;
  to: string;
  distance: number | null;
  duration: string | null;
  visible: boolean;
}

export default function RouteMap({ from, to, distance, duration, visible }: RouteMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');

  useEffect(() => {
    if (!visible || !from || !to) return;

    setStatus('loading');

    // Cleanup previous map instance
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    let cancelled = false;

    (async () => {
      try {
        // Inject Leaflet CSS once
        if (!document.getElementById('leaflet-css')) {
          const link = document.createElement('link');
          link.id = 'leaflet-css';
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          document.head.appendChild(link);
          // Wait for CSS to load
          await new Promise((r) => setTimeout(r, 200));
        }

        const L = (await import('leaflet')).default;

        // Fix Leaflet default marker icons (Next.js webpack issue)
        // @ts-ignore
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });

        if (cancelled || !mapRef.current) return;

        // Geocode with Nominatim (OpenStreetMap, free, no key)
        const geocode = async (address: string): Promise<[number, number]> => {
          const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1&accept-language=fr`;
          const res = await fetch(url);
          const data = await res.json();
          if (!data?.[0]) throw new Error(`Adresse introuvable : ${address}`);
          return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        };

        const [fromCoord, toCoord] = await Promise.all([geocode(from), geocode(to)]);
        if (cancelled) return;

        // OSRM routing (free, no key, OpenStreetMap-based)
        let routeCoords: [number, number][] | null = null;
        try {
          const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${fromCoord[1]},${fromCoord[0]};${toCoord[1]},${toCoord[0]}?overview=full&geometries=geojson`;
          const routeRes = await fetch(osrmUrl);
          const routeData = await routeRes.json();
          const coords = routeData?.routes?.[0]?.geometry?.coordinates;
          if (coords) {
            routeCoords = coords.map(([lng, lat]: number[]) => [lat, lng] as [number, number]);
          }
        } catch {
          // Route not available — just show markers
        }

        if (cancelled || !mapRef.current) return;

        // Create Leaflet map
        const map = L.map(mapRef.current, { zoomControl: true, attributionControl: false });
        mapInstanceRef.current = map;

        // OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(map);

        // Gold pin icon
        const makeIcon = (label: string) =>
          L.divIcon({
            className: '',
            html: `
              <div style="display:flex;flex-direction:column;align-items:center;gap:2px">
                <div style="background:#c9a84c;color:#fff;font-size:9px;font-family:sans-serif;letter-spacing:.05em;padding:2px 6px;border-radius:4px;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,.25);max-width:120px;overflow:hidden;text-overflow:ellipsis">${label}</div>
                <div style="width:8px;height:8px;background:#c9a84c;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.25)"></div>
              </div>`,
            iconSize: [1, 1],
            iconAnchor: [0, 22],
          });

        const shortFrom = from.length > 18 ? from.slice(0, 17) + '…' : from;
        const shortTo = to.length > 18 ? to.slice(0, 17) + '…' : to;

        L.marker(fromCoord, { icon: makeIcon(shortFrom) }).addTo(map);
        L.marker(toCoord, { icon: makeIcon(shortTo) }).addTo(map);

        // Route polyline
        if (routeCoords && routeCoords.length > 1) {
          const polyline = L.polyline(routeCoords, {
            color: '#c9a84c',
            weight: 3,
            opacity: 0.85,
          });
          polyline.addTo(map);
          map.fitBounds(polyline.getBounds(), { padding: [40, 40] });
        } else {
          map.fitBounds([fromCoord, toCoord], { padding: [60, 60] });
        }

        if (!cancelled) setStatus('ready');
      } catch {
        if (!cancelled) setStatus('error');
      }
    })();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [from, to, visible]);

  if (!visible) return null;

  return (
    <div
      className="relative mt-4 rounded-xl overflow-hidden border border-warm-300"
      style={{ height: 240 }}
    >
      {/* Map container */}
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />

      {/* Loading overlay */}
      {status === 'loading' && (
        <div className="absolute inset-0 bg-warm-50 flex flex-col items-center justify-center gap-3 z-[1000]">
          <div className="w-5 h-5 border-2 rounded-full animate-spin"
            style={{ borderColor: 'rgba(201,168,76,0.2)', borderTopColor: '#c9a84c' }} />
          <p className="font-sans text-[0.7rem] text-stone-400 tracking-wide">Chargement de la carte…</p>
        </div>
      )}

      {/* Error overlay */}
      {status === 'error' && (
        <div className="absolute inset-0 bg-warm-50 flex items-center justify-center z-[1000]">
          <p className="font-sans text-[0.7rem] text-stone-400">Carte temporairement indisponible</p>
        </div>
      )}

      {/* Distance badge — bottom left */}
      {status === 'ready' && distance != null && (
        <div
          className="absolute bottom-3 left-3 z-[1000] bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-warm-300 shadow-sm pointer-events-none"
        >
          <p className="font-sans text-[0.72rem] font-medium text-stone-700 flex items-center gap-2">
            <span style={{ color: '#c9a84c' }}>⟷ {distance} km</span>
            {duration && <span className="text-stone-400">· {duration}</span>}
          </p>
        </div>
      )}

      {/* OSM attribution — bottom right */}
      {status === 'ready' && (
        <div className="absolute bottom-3 right-3 z-[1000] pointer-events-none">
          <p className="font-sans text-[0.55rem] text-stone-400">© OpenStreetMap</p>
        </div>
      )}
    </div>
  );
}

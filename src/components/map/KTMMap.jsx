import './KTMMap.css';

/*
 * Static UI prototype — Leaflet temporarily disabled.
 *
 * Renders only a placeholder background plus a simple inline SVG
 * (yellow route + colored dot markers + labels) at fixed positions
 * so the rest of the layout (cards, top bar, bottom nav, FAB) can
 * be tuned against the reference image without map interference.
 *
 * Re-attach Leaflet here once the static layout is approved —
 * RouteLayer.jsx and PlaceMarker.jsx are untouched and ready to
 * import back in.
 */

const PIN_COLORS = {
  city: '#0E2D50',
  mountain: '#2FA35A',
  canyon: '#B76A26',
  lake: '#248C9B',
};

// Hand-placed positions (SVG coords inside viewBox 0 0 390 844)
// — purely visual, not geographic. Tuned to match reference image.
const STATIC_PINS = [
  { id: 'almaty',    x: 110, y: 250, type: 'city',     name: 'Almaty',        ko: '알마티' },
  { id: 'chimbulak', x: 244, y: 198, type: 'mountain', name: 'Chimbulak',     ko: '침블락' },
  { id: 'kolsai',    x: 308, y: 268, type: 'lake',     name: 'Kolsai Lakes',  ko: '콜사이 호수' },
  { id: 'kaindy',    x: 286, y: 332, type: 'lake',     name: 'Kaindy Lake',   ko: '카인디 호수' },
  { id: 'charyn',    x: 144, y: 372, type: 'canyon',   name: 'Charyn Canyon', ko: '차른캐년', selected: true },
];

const ROUTE_PATH = STATIC_PINS
  .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`)
  .join(' ');

export default function KTMMap() {
  return (
    <div className="ktm-map" aria-label="map placeholder">
      <svg
        className="ktm-map-svg"
        viewBox="0 0 390 844"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d={ROUTE_PATH} className="ktm-map-route" />

        {STATIC_PINS.map((pin) => (
          <g key={pin.id} transform={`translate(${pin.x}, ${pin.y})`}>
            <circle
              r={pin.selected ? 12 : 10}
              fill={PIN_COLORS[pin.type] || '#333'}
              stroke="#fff"
              strokeWidth={2}
              className={pin.selected ? 'ktm-map-pin-selected' : ''}
            />
            <text x={16} y={2} className="ktm-map-pin-label-en">
              {pin.name}
            </text>
            <text x={16} y={14} className="ktm-map-pin-label-ko">
              {pin.ko}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

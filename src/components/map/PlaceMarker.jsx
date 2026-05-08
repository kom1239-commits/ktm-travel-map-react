import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import './PlaceMarker.css';

const COLORS = {
  city: '#0E2D50',
  mountain: '#2FA35A',
  canyon: '#B76A26',
  lake: '#248C9B',
};

const GLYPH = {
  city: '●',
  mountain: '▲',
  canyon: '▧',
  lake: '≋',
};

const buildIcon = (place, selected) =>
  L.divIcon({
    className: '',
    html: `
      <div class="ktm-marker ${selected ? 'ktm-marker-selected' : ''}"
           style="background:${COLORS[place.type] || '#333'}">
        ${GLYPH[place.type] || ''}
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });

export default function PlaceMarker({ place, selected, onSelect }) {
  return (
    <Marker
      position={[place.lat, place.lng]}
      icon={buildIcon(place, selected)}
      eventHandlers={{ click: () => onSelect?.(place.id) }}
    >
      <Tooltip permanent direction="right" offset={[14, 0]}>
        <div className="ktm-marker-label">
          <b>{place.name}</b>
          <span className="ktm-marker-label-sub">{place.ko}</span>
        </div>
      </Tooltip>
    </Marker>
  );
}

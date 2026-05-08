import L from 'leaflet';

// SVG glyphs scoped per place kind.
const GLYPH = {
  city: '<path d="M4 11h6V5h4v6h6v8H4z" />',
  mountain: '<path d="m3 18 5-7 3 4 3-5 7 8z" />',
  canyon: '<path d="M4 18 9 8l3 4 3-3 5 9z" />',
  lake: '<path d="M12 5c-3 4-5 6-5 9a5 5 0 0 0 10 0c0-3-2-5-5-9z" />',
};

const buildGlyph = (kind) => `
  <svg viewBox="0 0 24 24" width="11" height="11" fill="#fff">
    ${GLYPH[kind] ?? '<circle cx="12" cy="12" r="3" />'}
  </svg>
`;

// Pill marker: small colored circle with kind glyph + Korean name on a
// quiet white pill underneath. Active state lifts the dot.
const buildHtml = ({ place, active }) => `
  <div class="ktm-pin ktm-pin--${place.kind} ${active ? 'is-active' : ''}">
    <div class="ktm-pin__dot">${buildGlyph(place.kind)}</div>
    <div class="ktm-pin__label">${place.nameKo ?? place.name}</div>
  </div>
`;

export const createPlaceIcon = (place, { active = false } = {}) =>
  L.divIcon({
    className: 'ktm-pin-wrapper',
    html: buildHtml({ place, active }),
    iconSize: [96, 44],
    iconAnchor: [48, 12],
  });

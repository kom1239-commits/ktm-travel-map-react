import L from 'leaflet';

const KIND_GLYPH = {
  city: '🏙',
  mountain: '⛰',
  lake: '💧',
  canyon: '🏜',
};

const buildHtml = ({ glyph, label, active }) => `
  <div class="ktm-pin ${active ? 'is-active' : ''}">
    <div class="ktm-pin__bubble"><span>${glyph}</span></div>
    <div class="ktm-pin__label">${label}</div>
  </div>
`;

export const createPlaceIcon = (place, { active = false } = {}) =>
  L.divIcon({
    className: 'ktm-pin-wrapper',
    html: buildHtml({
      glyph: KIND_GLYPH[place.kind] ?? '•',
      label: place.nameKo ?? place.name,
      active,
    }),
    iconSize: [80, 56],
    iconAnchor: [40, 48],
  });

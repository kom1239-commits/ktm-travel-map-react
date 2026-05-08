import L from 'leaflet';

const buildHtml = ({ label, active }) => `
  <div class="ktm-pin ${active ? 'is-active' : ''}">
    <div class="ktm-pin__dot"></div>
    <div class="ktm-pin__label">${label}</div>
  </div>
`;

export const createPlaceIcon = (place, { active = false } = {}) =>
  L.divIcon({
    className: 'ktm-pin-wrapper',
    html: buildHtml({
      label: place.nameKo ?? place.name,
      active,
    }),
    iconSize: [80, 36],
    iconAnchor: [40, 22],
  });

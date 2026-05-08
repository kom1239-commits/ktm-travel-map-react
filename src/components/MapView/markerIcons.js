import L from 'leaflet';

// Maps.me-style: pure dots. No labels, no pills.
// The base map already renders place names; the bottom sheet shows the rest.
export const createPlaceIcon = (_place, { active = false } = {}) => {
  const size = active ? 18 : 12;
  return L.divIcon({
    className: 'ktm-pin-wrapper',
    html: `<div class="ktm-pin ${active ? 'is-active' : ''}"><div class="ktm-pin__dot"></div></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

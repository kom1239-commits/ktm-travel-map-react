import L from 'leaflet';
import { CATEGORIES } from '../data/places.js';

const categoryById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

export const buildPinIcon = (categoryId, { visited = false } = {}) => {
  const cat = categoryById[categoryId] ?? CATEGORIES[0];
  const ring = visited ? '#16a34a' : '#0f172a';
  const opacity = visited ? '0.85' : '1';
  const html = `
    <div class="pin" style="--pin-color:${cat.color};--pin-ring:${ring};opacity:${opacity}">
      <span class="pin__emoji">${cat.emoji}</span>
      ${visited ? '<span class="pin__check">✓</span>' : ''}
    </div>`;
  return L.divIcon({
    html,
    className: 'pin-wrap',
    iconSize: [36, 44],
    iconAnchor: [18, 42],
    popupAnchor: [0, -36],
  });
};

export const userLocationIcon = L.divIcon({
  html: '<div class="user-dot"><span></span></div>',
  className: 'user-dot-wrap',
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

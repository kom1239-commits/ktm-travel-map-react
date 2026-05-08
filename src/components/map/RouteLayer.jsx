import { Polyline } from 'react-leaflet';

// Visual contract is owned by KTMMap (no own CSS file — Polyline draws on
// Leaflet's SVG layer, styled inline).
const STYLE = {
  color: '#F4C400',
  weight: 4,
  opacity: 0.9,
  lineCap: 'round',
  lineJoin: 'round',
};

export default function RouteLayer({ coords }) {
  if (!coords?.length) return null;
  return <Polyline positions={coords} pathOptions={STYLE} interactive={false} />;
}

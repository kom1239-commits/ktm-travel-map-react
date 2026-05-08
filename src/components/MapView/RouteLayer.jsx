import { Polyline } from 'react-leaflet';

// Yellow navigation route per spec.
// White halo underneath gives the line legibility on terrain shading.
const HALO = {
  color: '#ffffff',
  weight: 7,
  opacity: 0.85,
  lineCap: 'round',
  lineJoin: 'round',
};

const LINE = {
  color: '#F4C400',
  weight: 4,
  opacity: 0.95,
  lineCap: 'round',
  lineJoin: 'round',
};

export default function RouteLayer({ coords }) {
  if (!coords?.length) return null;
  return (
    <>
      <Polyline positions={coords} pathOptions={HALO} interactive={false} />
      <Polyline positions={coords} pathOptions={LINE} interactive={false} />
    </>
  );
}

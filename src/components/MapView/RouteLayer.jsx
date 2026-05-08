import { Polyline } from 'react-leaflet';

// Halo + line. Subtle, navigation-feeling — not a thick train track.
const HALO = {
  color: '#ffffff',
  weight: 6,
  opacity: 0.7,
  lineCap: 'round',
  lineJoin: 'round',
};

const LINE = {
  color: '#d2453a',
  weight: 2.6,
  opacity: 0.92,
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

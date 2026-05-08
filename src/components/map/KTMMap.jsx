import { MapContainer, TileLayer } from 'react-leaflet';
import RouteLayer from './RouteLayer.jsx';
import PlaceMarker from './PlaceMarker.jsx';
import './KTMMap.css';

const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_ATTRIBUTION = '© OpenStreetMap';
const DEFAULT_CENTER = [43.05, 77.85];
const DEFAULT_ZOOM = 8;

export default function KTMMap({
  places,
  routeCoords,
  selectedPlaceId,
  onSelectPlace,
}) {
  return (
    <MapContainer
      className="ktm-map"
      center={DEFAULT_CENTER}
      zoom={DEFAULT_ZOOM}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer url={TILE_URL} attribution={TILE_ATTRIBUTION} />

      <RouteLayer coords={routeCoords} />

      {places.map((place) => (
        <PlaceMarker
          key={place.id}
          place={place}
          selected={place.id === selectedPlaceId}
          onSelect={onSelectPlace}
        />
      ))}
    </MapContainer>
  );
}

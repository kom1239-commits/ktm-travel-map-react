import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import RouteLayer from './RouteLayer.jsx';
import PlaceMarker from './PlaceMarker.jsx';
import './KTMMap.css';

const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TILE_ATTRIBUTION = '© OpenStreetMap';
const DEFAULT_CENTER = [43.05, 77.85];
const DEFAULT_ZOOM = 8;

// Reserved space for floating UI so the route never sits behind cards.
// Top: TopBar(56) + status row(56) + gaps. Bottom: PlaceSheet + TripSummary
// + BottomNav stack.
const FIT_PADDING_TOP_LEFT = [40, 140];
const FIT_PADDING_BOTTOM_RIGHT = [40, 320];

function FitToRoute({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (!coords?.length) return;
    map.fitBounds(coords, {
      paddingTopLeft: FIT_PADDING_TOP_LEFT,
      paddingBottomRight: FIT_PADDING_BOTTOM_RIGHT,
      animate: false,
    });
  }, [map, coords]);
  return null;
}

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
      minZoom={6}
      maxZoom={14}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer url={TILE_URL} attribution={TILE_ATTRIBUTION} />

      <FitToRoute coords={routeCoords} />
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

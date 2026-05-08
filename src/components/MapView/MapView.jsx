import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { trip, getRouteCoords } from '../../data/trip.js';
import { createPlaceIcon } from './markerIcons.js';
import RouteLayer from './RouteLayer.jsx';
import './MapView.css';

// Stadia Stamen Terrain — beige natural tones, soft hillshade, modern.
// Free for non-production use; production deployments should register an
// API key at https://stadiamaps.com and append it to the URL.
const TILE_URL =
  'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png';
const TILE_ATTRIBUTION =
  '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> · ' +
  '<a href="https://stamen.com/">Stamen</a> · ' +
  '<a href="https://www.openstreetmap.org/copyright">OSM</a>';

function FitToRoute({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (!coords?.length) return;
    map.fitBounds(coords, { padding: [80, 80], animate: false });
  }, [map, coords]);
  return null;
}

export default function MapView({ selectedId, onSelect }) {
  const routeCoords = useMemo(() => getRouteCoords(), []);

  return (
    <div className="map-view">
      <MapContainer
        center={routeCoords[0]}
        zoom={8}
        zoomControl={false}
        className="map-view__container"
      >
        <TileLayer url={TILE_URL} attribution={TILE_ATTRIBUTION} maxZoom={18} detectRetina />
        <FitToRoute coords={routeCoords} />
        <RouteLayer coords={routeCoords} />
        {trip.places.map((place) => (
          <Marker
            key={place.id}
            position={place.coord}
            icon={createPlaceIcon(place, { active: place.id === selectedId })}
            eventHandlers={{ click: () => onSelect?.(place.id) }}
          />
        ))}
      </MapContainer>
    </div>
  );
}

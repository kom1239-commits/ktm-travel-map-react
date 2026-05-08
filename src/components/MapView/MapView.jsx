import { useEffect, useMemo } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
} from 'react-leaflet';
import { trip, getRouteCoords } from '../../data/trip.js';
import { createPlaceIcon } from './markerIcons.js';
import './MapView.css';

const ROUTE_HALO = {
  color: '#ffffff',
  weight: 7,
  opacity: 0.9,
  lineCap: 'round',
  lineJoin: 'round',
};

const ROUTE_LINE = {
  color: '#d2453a',
  weight: 3.5,
  opacity: 1,
  lineCap: 'round',
  lineJoin: 'round',
};

function FitToRoute({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (!coords?.length) return;
    map.fitBounds(coords, { padding: [70, 70], animate: false });
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
        attributionControl={false}
        className="map-view__container"
      >
        {/* OpenTopoMap — terrain shading, contour lines, paths (Komoot-ish) */}
        <TileLayer
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          subdomains={['a', 'b', 'c']}
          maxZoom={17}
        />
        <FitToRoute coords={routeCoords} />
        <Polyline positions={routeCoords} pathOptions={ROUTE_HALO} />
        <Polyline positions={routeCoords} pathOptions={ROUTE_LINE} />
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

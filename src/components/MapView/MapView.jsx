import { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import { trip, getRouteCoords } from '../../data/trip.js';
import { createPlaceIcon } from './markerIcons.js';
import './MapView.css';

const ROUTE_STYLE = {
  color: 'var(--c-route)',
  weight: 5,
  opacity: 0.95,
  lineCap: 'round',
  lineJoin: 'round',
  dashArray: '1 10',
};

export default function MapView({ selectedId, onSelect }) {
  const routeCoords = useMemo(() => getRouteCoords(), []);
  const center = routeCoords[0];

  return (
    <div className="map-view">
      <MapContainer
        center={center}
        zoom={8}
        zoomControl={false}
        attributionControl={false}
        className="map-view__container"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains={['a', 'b', 'c', 'd']}
          maxZoom={19}
        />
        <Polyline positions={routeCoords} pathOptions={ROUTE_STYLE} />
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

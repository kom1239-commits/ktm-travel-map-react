import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { trip, getRouteCoords } from '../../data/trip.js';
import { createPlaceIcon } from './markerIcons.js';
import RouteLayer from './RouteLayer.jsx';
import './MapView.css';

// Stadia Stamen Terrain — light beige terrain, soft hillshade, modern.
// Free for non-production / localhost. Production deployments should
// register an API key at https://stadiamaps.com.
const TILE_URL =
  'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png';
const TILE_ATTRIBUTION =
  '&copy; <a href="https://stadiamaps.com/">Stadia</a> · ' +
  '<a href="https://stamen.com/">Stamen</a> · ' +
  '<a href="https://www.openstreetmap.org/copyright">OSM</a>';

// Reserved space (px) at the top/bottom that floating UI covers — used so
// fitBounds places the route inside the visible map slice, not under the
// TravelStatusCard or the PlaceBottomSheet.
const TOP_RESERVED = 150;       // safe-top + TopBar + status card row
const BOTTOM_RESERVED = 470;    // bottom-nav + trip summary + place sheet + gaps

function FitToRoute({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (!coords?.length) return;
    map.fitBounds(coords, {
      paddingTopLeft: [40, TOP_RESERVED],
      paddingBottomRight: [40, BOTTOM_RESERVED],
      maxZoom: 10,
      animate: false,
    });
  }, [map, coords]);
  return null;
}

export default function MapView({ selectedId, onSelect }) {
  const routeCoords = useMemo(() => getRouteCoords(), []);

  return (
    <div className="map-view">
      <MapContainer
        center={routeCoords[0]}
        zoom={9}
        minZoom={7}
        zoomControl={false}
        className="map-view__container"
      >
        <TileLayer
          url={TILE_URL}
          attribution={TILE_ATTRIBUTION}
          maxZoom={18}
          detectRetina
        />
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

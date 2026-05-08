import { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { buildPinIcon, userLocationIcon } from '../lib/icons.js';

const KTM_CENTER = [27.7172, 85.324];
const DEFAULT_ZOOM = 12;

function FlyController({ target }) {
  const map = useMap();
  useEffect(() => {
    if (!target) return;
    map.flyTo(target.coords, Math.max(map.getZoom(), 14), { duration: 0.8 });
  }, [target, map]);
  return null;
}

function UserController({ userPos, recenterToken }) {
  const map = useMap();
  useEffect(() => {
    if (!userPos) return;
    map.flyTo(userPos, Math.max(map.getZoom(), 13), { duration: 0.6 });
  }, [recenterToken, userPos, map]);
  return null;
}

function ClickHandler({ enabled, onPick }) {
  useMapEvents({
    click(e) {
      if (!enabled) return;
      onPick([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

export default function MapView({
  places,
  visitedIds,
  selectedId,
  flyTarget,
  userPos,
  recenterToken,
  addMode,
  onSelect,
  onPickLocation,
}) {
  return (
    <MapContainer
      center={KTM_CENTER}
      zoom={DEFAULT_ZOOM}
      minZoom={9}
      maxZoom={18}
      zoomControl={false}
      className={`map ${addMode ? 'map--picking' : ''}`}
      worldCopyJump
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ClickHandler enabled={addMode} onPick={onPickLocation} />
      <FlyController target={flyTarget} />
      <UserController userPos={userPos} recenterToken={recenterToken} />

      {userPos && <Marker position={userPos} icon={userLocationIcon} />}

      {places.map((p) => (
        <Marker
          key={p.id}
          position={p.coords}
          icon={buildPinIcon(p.category, {
            visited: visitedIds.has(p.id),
          })}
          eventHandlers={{ click: () => onSelect(p.id) }}
          zIndexOffset={p.id === selectedId ? 1000 : 0}
        />
      ))}
    </MapContainer>
  );
}

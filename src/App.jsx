import { useEffect, useMemo, useState } from 'react';
import MapView from './components/MapView.jsx';
import TopBar from './components/TopBar.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import PlaceSheet from './components/PlaceSheet.jsx';
import AddPlaceSheet from './components/AddPlaceSheet.jsx';
import FloatingControls from './components/FloatingControls.jsx';
import { CATEGORIES, PLACES } from './data/places.js';
import {
  loadVisited,
  saveVisited,
  loadCustomPlaces,
  saveCustomPlaces,
} from './lib/storage.js';

export default function App() {
  const [activeCats, setActiveCats] = useState(() => new Set());
  const [customPlaces, setCustomPlaces] = useState(() => loadCustomPlaces());
  const [visited, setVisited] = useState(() => loadVisited());
  const [selectedId, setSelectedId] = useState(null);
  const [flyTarget, setFlyTarget] = useState(null);
  const [addMode, setAddMode] = useState(false);
  const [pendingCoords, setPendingCoords] = useState(null);
  const [userPos, setUserPos] = useState(null);
  const [recenterToken, setRecenterToken] = useState(0);
  const [locating, setLocating] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => saveVisited(visited), [visited]);
  useEffect(() => saveCustomPlaces(customPlaces), [customPlaces]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  const allPlaces = useMemo(
    () => [...PLACES, ...customPlaces],
    [customPlaces]
  );

  const visiblePlaces = useMemo(() => {
    if (activeCats.size === 0) return allPlaces;
    return allPlaces.filter((p) => activeCats.has(p.category));
  }, [allPlaces, activeCats]);

  const counts = useMemo(() => {
    const c = { total: allPlaces.length };
    for (const cat of CATEGORIES) c[cat.id] = 0;
    for (const p of allPlaces) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, [allPlaces]);

  const selectedPlace = useMemo(
    () => allPlaces.find((p) => p.id === selectedId) ?? null,
    [allPlaces, selectedId]
  );

  const toggleCategory = (id) => {
    if (id === null) {
      setActiveCats(new Set());
      return;
    }
    setActiveCats((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelect = (id) => {
    setSelectedId(id);
    setAddMode(false);
    setPendingCoords(null);
  };

  const handleToggleVisit = (id) => {
    setVisited((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setToast('Unmarked as visited');
      } else {
        next.add(id);
        setToast('Marked as visited ✓');
      }
      return next;
    });
  };

  const handleFlyTo = (place) => setFlyTarget({ ...place, _t: Date.now() });

  const handleDelete = (id) => {
    setCustomPlaces((prev) => prev.filter((p) => p.id !== id));
    setVisited((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    setSelectedId(null);
    setToast('Pin deleted');
  };

  const handleToggleAdd = () => {
    setAddMode((on) => !on);
    setPendingCoords(null);
    setSelectedId(null);
  };

  const handlePickLocation = (coords) => {
    setPendingCoords(coords);
  };

  const handleSaveCustom = (place) => {
    setCustomPlaces((prev) => [...prev, place]);
    setAddMode(false);
    setPendingCoords(null);
    setSelectedId(place.id);
    setToast('Pin saved');
  };

  const handleLocate = () => {
    if (!('geolocation' in navigator)) {
      setToast('Geolocation not available');
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const next = [pos.coords.latitude, pos.coords.longitude];
        setUserPos(next);
        setRecenterToken((n) => n + 1);
        setLocating(false);
      },
      () => {
        setLocating(false);
        setToast('Could not get your location');
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  const totalVisited = useMemo(
    () => visiblePlaces.filter((p) => visited.has(p.id)).length,
    [visiblePlaces, visited]
  );

  return (
    <div className="app">
      <TopBar
        totalVisible={visiblePlaces.length}
        totalVisited={totalVisited}
      />

      <CategoryFilter
        active={activeCats}
        onToggle={toggleCategory}
        counts={counts}
      />

      <main className="map-shell">
        <MapView
          places={visiblePlaces}
          visitedIds={visited}
          selectedId={selectedId}
          flyTarget={flyTarget}
          userPos={userPos}
          recenterToken={recenterToken}
          addMode={addMode}
          onSelect={handleSelect}
          onPickLocation={handlePickLocation}
        />

        {addMode && !pendingCoords && (
          <div className="hint" role="status">
            Tap anywhere on the map to drop a pin
          </div>
        )}

        <FloatingControls
          addMode={addMode}
          onToggleAdd={handleToggleAdd}
          onLocate={handleLocate}
          locating={locating}
          hasUserPos={!!userPos}
        />
      </main>

      {selectedPlace && !addMode && (
        <PlaceSheet
          place={selectedPlace}
          visited={visited.has(selectedPlace.id)}
          onClose={() => setSelectedId(null)}
          onToggleVisit={handleToggleVisit}
          onFlyTo={handleFlyTo}
          onDelete={handleDelete}
        />
      )}

      {addMode && pendingCoords && (
        <AddPlaceSheet
          coords={pendingCoords}
          onCancel={() => setPendingCoords(null)}
          onSave={handleSaveCustom}
        />
      )}

      {toast && (
        <div className="toast" role="status" aria-live="polite">
          {toast}
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import TripSelector from './components/TripSelector/TripSelector.jsx';
import MapView from './components/MapView/MapView.jsx';
import MapControls from './components/MapControls/MapControls.jsx';
import FAB from './components/FAB/FAB.jsx';
import BottomSheet from './components/BottomSheet/BottomSheet.jsx';
import PlaceCard from './components/PlaceCard/PlaceCard.jsx';
import BottomNav from './components/BottomNav/BottomNav.jsx';
import { trip, getPlaceById } from './data/trip.js';
import './App.css';

const DEFAULT_PLACE_ID = 'charyn';

export default function App() {
  const [selectedId, setSelectedId] = useState(DEFAULT_PLACE_ID);
  const [activeTab, setActiveTab] = useState('map');

  const selectedPlace = selectedId ? getPlaceById(selectedId) : null;
  const showCard = Boolean(selectedPlace);

  return (
    <div className={`app ${showCard ? 'has-card' : ''}`}>
      <MapView selectedId={selectedId} onSelect={setSelectedId} />

      <Header />
      <TripSelector label="내 여행" title={trip.title} />
      <MapControls />

      <FAB />

      <BottomSheet>
        {showCard && (
          <PlaceCard
            place={selectedPlace}
            onClose={() => setSelectedId(null)}
          />
        )}
      </BottomSheet>

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
}

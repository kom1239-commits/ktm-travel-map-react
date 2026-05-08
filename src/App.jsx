import { useState } from 'react';
import TopBar from './components/TopBar/TopBar.jsx';
import TravelStatusCard from './components/TravelStatusCard/TravelStatusCard.jsx';
import MapView from './components/MapView/MapView.jsx';
import FloatingButtons from './components/FloatingButtons/FloatingButtons.jsx';
import PlaceBottomSheet from './components/PlaceBottomSheet/PlaceBottomSheet.jsx';
import BottomNav from './components/BottomNav/BottomNav.jsx';
import { trip, getPlaceById } from './data/trip.js';
import './App.css';

const DEFAULT_PLACE_ID = 'charyn';

export default function App() {
  const [selectedId, setSelectedId] = useState(DEFAULT_PLACE_ID);
  const [activeTab, setActiveTab] = useState('map');

  const selectedPlace = selectedId ? getPlaceById(selectedId) : null;

  return (
    <div className="app">
      <MapView selectedId={selectedId} onSelect={setSelectedId} />

      <TopBar />
      <TravelStatusCard trip={trip} />
      <FloatingButtons />

      <PlaceBottomSheet
        place={selectedPlace}
        onClose={() => setSelectedId(null)}
      />

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
}

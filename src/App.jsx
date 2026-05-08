import { useState } from 'react';
import TopBar from './components/TopBar/TopBar.jsx';
import TravelStatusCard from './components/TravelStatusCard/TravelStatusCard.jsx';
import MapView from './components/MapView/MapView.jsx';
import FloatingButtons from './components/FloatingButtons/FloatingButtons.jsx';
import NavigationFab from './components/NavigationFab/NavigationFab.jsx';
import PlaceBottomSheet from './components/PlaceBottomSheet/PlaceBottomSheet.jsx';
import TripSummaryCard from './components/TripSummaryCard/TripSummaryCard.jsx';
import BottomNav from './components/BottomNav/BottomNav.jsx';
import { trip, getPlaceById } from './data/trip.js';
import './App.css';

const DEFAULT_PLACE_ID = 'charyn';

export default function App() {
  const [selectedId, setSelectedId] = useState(DEFAULT_PLACE_ID);
  const [activeTab, setActiveTab] = useState('home');

  const selectedPlace = selectedId ? getPlaceById(selectedId) : null;

  return (
    <div className="app">
      <main className="app__map">
        <MapView selectedId={selectedId} onSelect={setSelectedId} />
        <TopBar />
        <TravelStatusCard trip={trip} />
        <FloatingButtons />
        <NavigationFab />
      </main>

      <PlaceBottomSheet
        place={selectedPlace}
        onClose={() => setSelectedId(null)}
      />

      <TripSummaryCard trip={trip} />

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
}

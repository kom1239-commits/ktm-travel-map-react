import { useState } from 'react';
import KTMMap from '../components/map/KTMMap.jsx';
import TopBar from '../components/layout/TopBar.jsx';
import BottomNav from '../components/layout/BottomNav.jsx';
import FloatingControls from '../components/floating/FloatingControls.jsx';
import NavigationFAB from '../components/floating/NavigationFAB.jsx';
import PlaceBottomSheet from '../components/sheet/PlaceBottomSheet.jsx';
import TravelStatusCard from '../components/cards/TravelStatusCard.jsx';
import { places, getPlaceById } from '../data/places.js';
import { trip, routeCoords } from '../data/routes.js';
import './MapPage.css';

const DEFAULT_PLACE_ID = 'charyn';

export default function MapPage() {
  // Single source of truth — selectedPlaceId drives marker highlight,
  // route emphasis (future), and the bottom sheet content.
  const [selectedPlaceId, setSelectedPlaceId] = useState(DEFAULT_PLACE_ID);
  const [activeTab, setActiveTab] = useState('home');

  const selectedPlace = selectedPlaceId ? getPlaceById(selectedPlaceId) : null;

  return (
    <div className="ktm-app">
      <KTMMap
        places={places}
        routeCoords={routeCoords}
        selectedPlaceId={selectedPlaceId}
        onSelectPlace={setSelectedPlaceId}
      />

      <TopBar />
      <TravelStatusCard trip={trip} />
      <FloatingControls />
      <NavigationFAB />

      <PlaceBottomSheet
        place={selectedPlace}
        onClose={() => setSelectedPlaceId(null)}
      />

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
}

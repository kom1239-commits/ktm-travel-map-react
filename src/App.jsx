// Leaflet CSS intentionally not imported — KTMMap is a static placeholder
// while we tune the UI. Re-add `import 'leaflet/dist/leaflet.css';` once
// the real map is reconnected.
import './styles/designTokens.css';
import './styles/globals.css';
import MapPage from './pages/MapPage.jsx';

export default function App() {
  return <MapPage />;
}

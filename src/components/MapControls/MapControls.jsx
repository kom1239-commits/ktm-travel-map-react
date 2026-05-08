import Icon from '../Icon/Icon.jsx';
import './MapControls.css';

const ITEMS = [
  { id: 'locate', label: '내 위치', icon: 'locate' },
  { id: 'layers', label: '지도 레이어', icon: 'layers' },
  { id: 'filter', label: '필터', icon: 'filter' },
];

export default function MapControls({ onAction }) {
  return (
    <div className="map-controls">
      {ITEMS.map((item) => (
        <button
          key={item.id}
          type="button"
          className="map-controls__btn"
          aria-label={item.label}
          onClick={() => onAction?.(item.id)}
        >
          <Icon name={item.icon} size={20} />
        </button>
      ))}
    </div>
  );
}

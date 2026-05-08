import Icon from '../Icon/Icon.jsx';
import './TripSelector.css';

export default function TripSelector({ label, title }) {
  return (
    <button className="trip-selector" type="button">
      <span className="trip-selector__flag">
        <Icon name="bookmark" size={14} filled />
      </span>
      <span className="trip-selector__label">{label}</span>
      <span className="trip-selector__divider" />
      <span className="trip-selector__title">{title}</span>
      <Icon name="chevronDown" size={18} />
    </button>
  );
}

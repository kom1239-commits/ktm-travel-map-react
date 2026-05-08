import Icon from '../Icon/Icon.jsx';
import './TravelStatusCard.css';

export default function TravelStatusCard({ trip, onOpen }) {
  if (!trip) return null;
  return (
    <button type="button" className="status-card" onClick={onOpen}>
      <span className="status-card__icon" aria-hidden>
        <Icon name="bookmark" size={14} stroke="var(--c-accent)" filled />
      </span>
      <span className="status-card__body">
        <span className="status-card__label">내 여행</span>
        <span className="status-card__title">{trip.title}</span>
      </span>
      <span className="status-card__chev" aria-hidden>
        <Icon name="chevronDown" size={16} />
      </span>
    </button>
  );
}

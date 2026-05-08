import './TravelStatusCard.css';

export default function TravelStatusCard({ trip, onOpen }) {
  if (!trip) return null;
  return (
    <button type="button" className="ktm-travel-card" onClick={onOpen}>
      <span className="ktm-travel-card__icon" aria-hidden>▮</span>
      <span className="ktm-travel-card__body">
        <span className="ktm-travel-card__label">내 여행</span>
        <strong className="ktm-travel-card__title">{trip.title}</strong>
      </span>
      <span className="ktm-travel-card__chev" aria-hidden>⌄</span>
    </button>
  );
}

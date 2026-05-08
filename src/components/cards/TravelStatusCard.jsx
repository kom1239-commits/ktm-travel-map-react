import './TravelStatusCard.css';

export default function TravelStatusCard({ trip, onOpen }) {
  if (!trip) return null;
  return (
    <button type="button" className="ktm-status" onClick={onOpen}>
      <span className="ktm-status-icon" aria-hidden>▮</span>
      <span className="ktm-status-body">
        <span className="ktm-status-label">내 여행</span>
        <strong className="ktm-status-title">{trip.title}</strong>
      </span>
      <span className="ktm-status-chev" aria-hidden>⌄</span>
    </button>
  );
}

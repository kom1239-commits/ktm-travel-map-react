import Icon from '../Icon/Icon.jsx';
import './TripSummaryCard.css';

export default function TripSummaryCard({ trip, onOpen }) {
  if (!trip) return null;
  const [c1, c2] = trip.thumbGradient ?? ['#3b6f9a', '#1e3a5c'];

  return (
    <button type="button" className="trip-summary" onClick={onOpen}>
      <span
        className="trip-summary__thumb"
        style={{ backgroundImage: `linear-gradient(140deg, ${c1}, ${c2})` }}
        aria-hidden
      />
      <span className="trip-summary__body">
        <span className="trip-summary__title-row">
          <span className="trip-summary__title">{trip.title}</span>
          {trip.status && (
            <span className="trip-summary__badge">{trip.status}</span>
          )}
        </span>
        <span className="trip-summary__date">
          {trip.startDate} ~ {trip.endDate}
        </span>
        <span className="trip-summary__meta">
          <span className="trip-summary__meta-item">
            <Icon name="map" size={11} stroke="var(--c-ink-3)" />
            장소 {trip.savedPlaces}
          </span>
          <span className="trip-summary__meta-item">
            <Icon name="bookmark" size={11} stroke="var(--c-ink-3)" />
            예약 {trip.reservations}
          </span>
          {trip.driverConnected && (
            <span className="trip-summary__meta-item">
              <Icon name="car" size={11} stroke="var(--c-ink-3)" />
              기사 연결됨
            </span>
          )}
        </span>
      </span>
      <span className="trip-summary__chev" aria-hidden>
        <Icon name="chevronDown" size={16} stroke="var(--c-ink-3)" />
      </span>
    </button>
  );
}

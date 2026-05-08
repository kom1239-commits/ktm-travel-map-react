import './TripSummaryCard.css';

export default function TripSummaryCard({ trip, onOpen }) {
  if (!trip) return null;
  return (
    <button type="button" className="ktm-trip" onClick={onOpen}>
      <span className="ktm-trip-thumb" aria-hidden />

      <span className="ktm-trip-body">
        <span className="ktm-trip-title-row">
          <span className="ktm-trip-title">{trip.title}</span>
          {trip.status && (
            <span className="ktm-trip-badge">{trip.status}</span>
          )}
        </span>
        <span className="ktm-trip-date">
          {trip.startDate} ~ {trip.endDate}
        </span>
        <span className="ktm-trip-meta">
          <span>📍 장소 {trip.savedPlaces}</span>
          <span>·</span>
          <span>📌 예약 {trip.reservations}</span>
          {trip.driverConnected && (
            <>
              <span>·</span>
              <span>🚗 기사 연결됨</span>
            </>
          )}
        </span>
      </span>

      <span className="ktm-trip-chev" aria-hidden>›</span>
    </button>
  );
}

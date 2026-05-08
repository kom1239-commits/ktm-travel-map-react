import './TravelStatusCard.css';

// "현지 여행 운영" 상태 표시. 카드라기보다 라이브 상태 칩.
export default function TravelStatusCard({ trip, onOpen }) {
  if (!trip) return null;
  return (
    <button type="button" className="travel-status" onClick={onOpen}>
      <span className="travel-status__pulse" aria-hidden>
        <span className="travel-status__pulse-dot" />
      </span>
      <span className="travel-status__title">{trip.title}</span>
      <span className="travel-status__sep" aria-hidden>·</span>
      <span className="travel-status__day">
        Day {trip.currentDay}/{trip.totalDays}
      </span>
    </button>
  );
}

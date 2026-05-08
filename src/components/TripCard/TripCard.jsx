import Icon from '../Icon/Icon.jsx';
import './TripCard.css';

export default function TripCard({ trip }) {
  return (
    <button className="trip-card" type="button">
      <div className="trip-card__thumb" aria-hidden />
      <div className="trip-card__body">
        <div className="trip-card__head">
          <h4 className="trip-card__title">{trip.title}</h4>
          {trip.status && (
            <span className="trip-card__badge">{trip.status}</span>
          )}
        </div>
        <div className="trip-card__date">
          {trip.startDate} ~ {trip.endDate}
        </div>
        <div className="trip-card__meta">
          <span><Icon name="map" size={12} /> 장소 {trip.places.length}</span>
          <span><Icon name="bookmark" size={12} /> 예약 {trip.reservations}</span>
          <span><Icon name="message" size={12} /> 기사 연결됨</span>
        </div>
      </div>
      <Icon name="chevronDown" size={18} className="trip-card__chev" />
    </button>
  );
}

import Icon from '../Icon/Icon.jsx';
import './PlaceCard.css';

const formatDriveTime = (mins) => {
  if (!mins) return null;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}시간${m ? ` ${m}분` : ''}`;
};

export default function PlaceCard({ place, onClose, onMessage, onAdd }) {
  if (!place) return null;
  const drive = formatDriveTime(place.driveMinutesFromAlmaty);

  return (
    <article className="place-card" role="dialog" aria-label={place.nameKo}>
      <div className="place-card__main">
        <h3 className="place-card__title">{place.nameKo ?? place.name}</h3>
        <div className="place-card__meta">
          {place.rating != null && (
            <span className="place-card__rating">
              <Icon name="star" size={11} stroke="var(--c-accent)" filled />
              {place.rating.toFixed(1)}
            </span>
          )}
          {drive && (
            <>
              <span className="place-card__sep" aria-hidden>·</span>
              <span>알마티에서 {drive}</span>
            </>
          )}
        </div>
      </div>

      <div className="place-card__actions">
        <button type="button" className="place-card__action" onClick={onMessage}>
          문의
        </button>
        <button type="button" className="place-card__action place-card__action--primary" onClick={onAdd}>
          일정추가
        </button>
      </div>

      <button
        type="button"
        className="place-card__close"
        aria-label="닫기"
        onClick={onClose}
      >
        <Icon name="close" size={14} stroke="var(--c-ink-3)" />
      </button>
    </article>
  );
}

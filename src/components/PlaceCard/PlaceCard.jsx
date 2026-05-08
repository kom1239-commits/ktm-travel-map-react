import Icon from '../Icon/Icon.jsx';
import './PlaceCard.css';

const formatDuration = (mins) => {
  if (!mins) return null;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}시간${m ? ` ${m}분` : ''}`;
};

export default function PlaceCard({ place, onClose, onMessage, onAdd }) {
  if (!place) return null;
  const duration = formatDuration(place.driveMinutesFromAlmaty);

  return (
    <article className="place-card">
      <div
        className="place-card__thumb"
        style={place.thumbColor ? { background: place.thumbColor } : undefined}
        aria-hidden
      >
        <span className="place-card__bookmark">
          <Icon name="bookmark" size={14} filled />
        </span>
      </div>

      <div className="place-card__body">
        <div className="place-card__head">
          <h3 className="place-card__title">{place.nameKo ?? place.name}</h3>
          <button
            className="place-card__close"
            type="button"
            aria-label="닫기"
            onClick={onClose}
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        {place.rating != null && (
          <div className="place-card__meta">
            <Icon name="star" size={14} stroke="var(--c-accent)" filled />
            <strong>{place.rating.toFixed(1)}</strong>
            <span className="place-card__muted">({place.reviewCount})</span>
          </div>
        )}

        {(duration || place.distanceFromAlmatyKm) && (
          <div className="place-card__row">
            <Icon name="car" size={14} stroke="var(--c-ink-3)" />
            <span>
              알마티에서 {duration}
              {place.distanceFromAlmatyKm
                ? ` (${place.distanceFromAlmatyKm}km)`
                : ''}
            </span>
          </div>
        )}

        {place.tags?.length ? (
          <div className="place-card__tags">
            {place.tags.map((t) => (
              <span key={t} className="place-card__tag">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="place-card__actions">
          <button className="btn btn--ghost" type="button" onClick={onMessage}>
            <Icon name="message" size={16} />
            <span>기사 문의</span>
          </button>
          <button className="btn btn--primary" type="button" onClick={onAdd}>
            <Icon name="plus" size={16} stroke="var(--c-accent-ink)" />
            <span>일정에 추가</span>
          </button>
        </div>
      </div>
    </article>
  );
}

import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../Icon/Icon.jsx';
import './PlaceBottomSheet.css';

const formatDriveTime = (mins) => {
  if (!mins) return null;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}시간${m ? ` ${m}분` : ''}`;
};

const SHEET_TRANSITION = { type: 'spring', damping: 32, stiffness: 340, mass: 0.85 };

export default function PlaceBottomSheet({ place, onClose, onMessage, onAdd }) {
  return (
    <AnimatePresence initial={false}>
      {place && (
        <motion.section
          key={place.id}
          className="place-sheet"
          role="dialog"
          aria-label={place.nameKo ?? place.name}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={SHEET_TRANSITION}
        >
          <span className="place-sheet__grip" aria-hidden />

          <button
            type="button"
            className="place-sheet__close"
            aria-label="닫기"
            onClick={onClose}
          >
            <Icon name="close" size={16} stroke="var(--c-ink-3)" />
          </button>

          <div className="place-sheet__content">
            <div
              className="place-sheet__thumb"
              style={
                place.thumbGradient
                  ? {
                      backgroundImage: `linear-gradient(135deg, ${place.thumbGradient[0]}, ${place.thumbGradient[1]})`,
                    }
                  : undefined
              }
              aria-hidden
            >
              <span className="place-sheet__thumb-tag">
                <Icon name="bookmark" size={12} filled />
              </span>
            </div>

            <div className="place-sheet__body">
              <h3 className="place-sheet__title">{place.nameKo ?? place.name}</h3>

              {place.rating != null && (
                <div className="place-sheet__row">
                  <Icon name="star" size={13} stroke="var(--c-accent)" filled />
                  <strong>{place.rating.toFixed(1)}</strong>
                  <span className="place-sheet__muted">({place.reviewCount})</span>
                </div>
              )}

              {place.driveMinutesFromAlmaty && (
                <div className="place-sheet__row place-sheet__row--meta">
                  <Icon name="car" size={13} stroke="var(--c-ink-3)" />
                  <span>
                    알마티에서 {formatDriveTime(place.driveMinutesFromAlmaty)}
                    {place.distanceFromAlmatyKm
                      ? ` (${place.distanceFromAlmatyKm}km)`
                      : ''}
                  </span>
                </div>
              )}

              {place.tags?.length ? (
                <div className="place-sheet__tags">
                  {place.tags.map((t) => (
                    <span key={t} className="place-sheet__tag">{t}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="place-sheet__actions">
            <button
              type="button"
              className="place-sheet__action place-sheet__action--outline"
              onClick={onMessage}
            >
              <Icon name="message" size={14} />
              <span>기사 문의</span>
            </button>
            <button
              type="button"
              className="place-sheet__action place-sheet__action--primary"
              onClick={onAdd}
            >
              <Icon name="plus" size={14} stroke="var(--c-accent-ink)" />
              <span>일정에 추가</span>
            </button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

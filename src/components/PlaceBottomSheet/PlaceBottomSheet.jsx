import { AnimatePresence, motion } from 'framer-motion';
import Icon from '../Icon/Icon.jsx';
import './PlaceBottomSheet.css';

const formatDriveTime = (mins) => {
  if (!mins) return null;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}시간${m ? ` ${m}분` : ''}`;
};

const SHEET_TRANSITION = { type: 'spring', damping: 30, stiffness: 320, mass: 0.8 };

export default function PlaceBottomSheet({ place, onClose, onMessage, onAdd }) {
  return (
    <AnimatePresence>
      {place && (
        <motion.article
          key={place.id}
          className="place-sheet"
          role="dialog"
          aria-label={place.nameKo ?? place.name}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={SHEET_TRANSITION}
        >
          <div className="place-sheet__grip" aria-hidden />

          <div className="place-sheet__main">
            <h3 className="place-sheet__title">{place.nameKo ?? place.name}</h3>
            <p className="place-sheet__meta">
              {place.rating != null && (
                <>
                  <span className="place-sheet__rating">
                    <Icon name="star" size={11} stroke="var(--c-accent)" filled />
                    {place.rating.toFixed(1)}
                  </span>
                  <span className="place-sheet__sep" aria-hidden>·</span>
                </>
              )}
              {place.driveMinutesFromAlmaty && (
                <span>알마티에서 {formatDriveTime(place.driveMinutesFromAlmaty)}</span>
              )}
            </p>
          </div>

          <div className="place-sheet__actions">
            <button type="button" className="place-sheet__action" onClick={onMessage}>
              문의
            </button>
            <button
              type="button"
              className="place-sheet__action place-sheet__action--primary"
              onClick={onAdd}
            >
              일정추가
            </button>
          </div>

          <button
            type="button"
            className="place-sheet__close"
            aria-label="닫기"
            onClick={onClose}
          >
            <Icon name="close" size={14} stroke="var(--c-ink-3)" />
          </button>
        </motion.article>
      )}
    </AnimatePresence>
  );
}

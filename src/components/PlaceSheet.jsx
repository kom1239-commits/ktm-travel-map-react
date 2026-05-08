import { useEffect, useRef } from 'react';
import { CATEGORIES } from '../data/places.js';

const categoryById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

export default function PlaceSheet({
  place,
  visited,
  onClose,
  onToggleVisit,
  onFlyTo,
  onDelete,
}) {
  const sheetRef = useRef(null);
  const startY = useRef(null);

  useEffect(() => {
    if (!place) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [place, onClose]);

  if (!place) return null;

  const cat = categoryById[place.category] ?? CATEGORIES[0];

  const onTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e) => {
    if (startY.current == null) return;
    const dy = e.changedTouches[0].clientY - startY.current;
    if (dy > 70) onClose();
    startY.current = null;
  };

  return (
    <div
      className="sheet"
      ref={sheetRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-label={place.name}
    >
      <div className="sheet__grabber" aria-hidden />
      <div className="sheet__header">
        <span
          className="sheet__badge"
          style={{ background: cat.color }}
          aria-hidden
        >
          {cat.emoji}
        </span>
        <div className="sheet__title">
          <h2>{place.name}</h2>
          <p>
            {cat.label}
            {place.rating != null && (
              <>
                {' · '}
                <span aria-label={`Rated ${place.rating} of 5`}>
                  ★ {place.rating.toFixed(1)}
                </span>
              </>
            )}
            {place.custom && <> {' · '} <em>added by you</em></>}
          </p>
        </div>
        <button
          className="sheet__close"
          onClick={onClose}
          aria-label="Close details"
        >
          ✕
        </button>
      </div>

      {place.description && (
        <p className="sheet__desc">{place.description}</p>
      )}
      {place.tip && (
        <p className="sheet__tip">
          <strong>Tip · </strong>
          {place.tip}
        </p>
      )}

      <div className="sheet__actions">
        <button
          className={`btn ${visited ? 'btn--ghost' : 'btn--primary'}`}
          onClick={() => onToggleVisit(place.id)}
        >
          {visited ? '✓ Visited' : 'Mark as visited'}
        </button>
        <button className="btn btn--ghost" onClick={() => onFlyTo(place)}>
          Center map
        </button>
        {place.custom && (
          <button
            className="btn btn--danger"
            onClick={() => onDelete(place.id)}
          >
            Delete
          </button>
        )}
      </div>

      <div className="sheet__coords">
        {place.coords[0].toFixed(4)}°N, {place.coords[1].toFixed(4)}°E
      </div>
    </div>
  );
}

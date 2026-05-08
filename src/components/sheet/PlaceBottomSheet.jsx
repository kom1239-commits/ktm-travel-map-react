import './PlaceBottomSheet.css';

export default function PlaceBottomSheet({ place, onClose, onMessage, onAdd }) {
  if (!place) return null;
  return (
    <section className="ktm-sheet" role="dialog" aria-label={place.ko}>
      <div className="ktm-sheet-handle" />

      <div className="ktm-sheet-content">
        <div className="ktm-sheet-thumb" aria-hidden>
          <span className="ktm-sheet-thumb-tag">▮</span>
        </div>

        <div className="ktm-sheet-info">
          <button
            type="button"
            className="ktm-sheet-close"
            aria-label="닫기"
            onClick={onClose}
          >
            ×
          </button>
          <h2 className="ktm-sheet-title">{place.ko}</h2>
          <p className="ktm-sheet-rating">
            ★ 4.9 <span className="ktm-sheet-rating-count">(230)</span>
          </p>
          <p className="ktm-sheet-meta">🚙 알마티에서 3시간 30분 (195km)</p>
          <div className="ktm-sheet-tags">
            <span className="ktm-sheet-tag">자연 명소</span>
            <span className="ktm-sheet-tag">트레킹 가능</span>
          </div>
        </div>
      </div>

      <div className="ktm-sheet-actions">
        <button
          type="button"
          className="ktm-sheet-btn ktm-sheet-btn-outline"
          onClick={onMessage}
        >
          💬 기사 문의
        </button>
        <button
          type="button"
          className="ktm-sheet-btn ktm-sheet-btn-primary"
          onClick={onAdd}
        >
          ＋ 일정에 추가
        </button>
      </div>
    </section>
  );
}

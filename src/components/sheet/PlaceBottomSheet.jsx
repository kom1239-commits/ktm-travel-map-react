import './PlaceBottomSheet.css';

export default function PlaceBottomSheet({ place, onClose, onMessage, onAdd }) {
  if (!place) return null;
  return (
    <section className="ktm-sheet" role="dialog" aria-label={place.ko}>
      <div className="ktm-sheet__handle" />

      <div className="ktm-sheet__content">
        <div className="ktm-sheet__thumb" aria-hidden>
          <span>▮</span>
        </div>

        <div className="ktm-sheet__info">
          <button
            type="button"
            className="ktm-sheet__close"
            aria-label="닫기"
            onClick={onClose}
          >
            ×
          </button>
          <h2>{place.ko}</h2>
          <p className="ktm-sheet__rating">★ 4.9 <span>(230)</span></p>
          <p className="ktm-sheet__meta">🚙 알마티에서 3시간 30분 (195km)</p>
          <div className="ktm-sheet__tags">
            <span>자연 명소</span>
            <span>트레킹 가능</span>
          </div>
        </div>
      </div>

      <div className="ktm-sheet__actions">
        <button
          type="button"
          className="ktm-sheet__btn ktm-sheet__btn--outline"
          onClick={onMessage}
        >
          💬 기사 문의
        </button>
        <button
          type="button"
          className="ktm-sheet__btn ktm-sheet__btn--primary"
          onClick={onAdd}
        >
          ＋ 일정에 추가
        </button>
      </div>
    </section>
  );
}

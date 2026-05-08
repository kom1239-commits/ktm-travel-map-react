import './FloatingControls.css';

const BUTTONS = [
  { id: 'locate', icon: '⌖', label: '내 위치' },
  { id: 'layers', icon: '▱', label: '지도 레이어' },
  { id: 'filter', icon: '≡', label: '필터' },
];

export default function FloatingControls({ onAction }) {
  return (
    <div className="ktm-controls">
      {BUTTONS.map((b) => (
        <button
          key={b.id}
          type="button"
          className="ktm-controls-btn"
          aria-label={b.label}
          onClick={() => onAction?.(b.id)}
        >
          {b.icon}
        </button>
      ))}
    </div>
  );
}

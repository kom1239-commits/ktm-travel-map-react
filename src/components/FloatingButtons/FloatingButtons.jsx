import Icon from '../Icon/Icon.jsx';
import './FloatingButtons.css';

const BUTTONS = [
  { id: 'locate', icon: 'locate', label: '내 위치' },
  { id: 'layers', icon: 'layers', label: '지도 레이어' },
  { id: 'filter', icon: 'filter', label: '필터' },
];

export default function FloatingButtons({ onAction }) {
  return (
    <div className="fb">
      {BUTTONS.map((b) => (
        <button
          key={b.id}
          type="button"
          className="fb__btn"
          aria-label={b.label}
          onClick={() => onAction?.(b.id)}
        >
          <Icon name={b.icon} size={18} />
        </button>
      ))}
    </div>
  );
}

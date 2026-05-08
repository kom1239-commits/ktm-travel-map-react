import Icon from '../Icon/Icon.jsx';
import './BottomNav.css';

const TABS = [
  { id: 'home', label: '홈', icon: 'home' },
  { id: 'map', label: '지도', icon: 'map' },
  { id: 'course', label: '코스', icon: 'route' },
  { id: 'saved', label: '저장', icon: 'bookmark' },
  { id: 'mine', label: '내 여행', icon: 'user' },
];

export default function BottomNav({ active = 'home', onChange }) {
  return (
    <nav className="bottom-nav" aria-label="주요 탭">
      {TABS.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            className={`bottom-nav__item ${isActive ? 'is-active' : ''}`}
            onClick={() => onChange?.(tab.id)}
          >
            <Icon name={tab.icon} size={22} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

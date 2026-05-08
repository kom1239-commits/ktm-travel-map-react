import './BottomNav.css';

const TABS = [
  { id: 'home',   label: '홈',     icon: '⌂' },
  { id: 'map',    label: '지도',   icon: '▱' },
  { id: 'course', label: '코스',   icon: '〰' },
  { id: 'saved',  label: '저장',   icon: '▯' },
  { id: 'mine',   label: '내 여행', icon: '♙' },
];

export default function BottomNav({ active = 'home', onChange }) {
  return (
    <nav className="ktm-bottomnav" aria-label="주요 탭">
      {TABS.map((tab) => {
        const isActive = tab.id === active;
        const className = isActive
          ? 'ktm-bottomnav-item ktm-bottomnav-item-active'
          : 'ktm-bottomnav-item';
        return (
          <button
            key={tab.id}
            type="button"
            className={className}
            onClick={() => onChange?.(tab.id)}
          >
            {tab.icon}
            <span className="ktm-bottomnav-item-label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

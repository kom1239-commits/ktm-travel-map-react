import './BottomNav.css';

const TABS = [
  { id: 'home',   label: '홈',    icon: '⌂' },
  { id: 'map',    label: '지도',  icon: '▱' },
  { id: 'course', label: '코스',  icon: '〰' },
  { id: 'saved',  label: '저장',  icon: '▯' },
  { id: 'mine',   label: '내 여행', icon: '♙' },
];

export default function BottomNav({ active = 'home', onChange }) {
  return (
    <nav className="ktm-bottom-nav" aria-label="주요 탭">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`ktm-bottom-nav__item ${tab.id === active ? 'is-active' : ''}`}
          onClick={() => onChange?.(tab.id)}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}

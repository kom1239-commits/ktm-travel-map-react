import Icon from '../Icon/Icon.jsx';
import './TopBar.css';

export default function TopBar({ onMenu, onSearch, onNotify, hasNotification = true }) {
  return (
    <header className="top-bar" aria-label="상단 탐색">
      <div className="top-bar__cluster">
        <button
          type="button"
          className="top-bar__chip top-bar__chip--icon"
          aria-label="메뉴"
          onClick={onMenu}
        >
          <Icon name="menu" size={18} />
        </button>
        <div className="top-bar__chip top-bar__chip--brand" aria-label="KTM">
          <span className="top-bar__logo">KTM</span>
        </div>
      </div>
      <div className="top-bar__cluster">
        <button
          type="button"
          className="top-bar__chip top-bar__chip--icon"
          aria-label="검색"
          onClick={onSearch}
        >
          <Icon name="search" size={18} />
        </button>
        <button
          type="button"
          className="top-bar__chip top-bar__chip--icon"
          aria-label="알림"
          onClick={onNotify}
        >
          <Icon name="bell" size={18} />
          {hasNotification && <span className="top-bar__dot" aria-hidden />}
        </button>
      </div>
    </header>
  );
}

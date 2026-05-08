import Icon from '../Icon/Icon.jsx';
import './TopBar.css';

export default function TopBar({ onMenu, onSearch, onNotify, hasNotification = true }) {
  return (
    <header className="top-bar" aria-label="상단 탐색">
      <button
        type="button"
        className="top-bar__btn"
        aria-label="메뉴"
        onClick={onMenu}
      >
        <Icon name="menu" size={20} />
      </button>

      <div className="top-bar__brand" aria-label="KTM Kazakhstan Travel Manager">
        <span className="top-bar__logo">KTM</span>
        <span className="top-bar__sub">KAZAKHSTAN TRAVEL MANAGER</span>
      </div>

      <button
        type="button"
        className="top-bar__btn"
        aria-label="검색"
        onClick={onSearch}
      >
        <Icon name="search" size={20} />
      </button>
      <button
        type="button"
        className="top-bar__btn"
        aria-label="알림"
        onClick={onNotify}
      >
        <Icon name="bell" size={20} />
        {hasNotification && <span className="top-bar__dot" aria-hidden />}
      </button>
    </header>
  );
}

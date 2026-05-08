import Icon from '../Icon/Icon.jsx';
import './Header.css';

export default function Header() {
  return (
    <header className="ktm-header">
      <button className="ktm-header__icon" aria-label="메뉴">
        <Icon name="menu" />
      </button>
      <div className="ktm-header__brand">
        <span className="ktm-header__logo">KTM</span>
        <span className="ktm-header__sub">KAZAKHSTAN TRAVEL MANAGER</span>
      </div>
      <div className="ktm-header__actions">
        <button className="ktm-header__icon" aria-label="검색">
          <Icon name="search" />
        </button>
        <button className="ktm-header__icon ktm-header__icon--badge" aria-label="알림">
          <Icon name="bell" />
          <span className="ktm-header__dot" />
        </button>
      </div>
    </header>
  );
}

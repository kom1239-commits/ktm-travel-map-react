import Icon from '../Icon/Icon.jsx';
import './Header.css';

export default function Header() {
  return (
    <header className="ktm-header">
      <div className="ktm-header__cluster">
        <button className="ktm-header__chip ktm-header__chip--icon" aria-label="메뉴">
          <Icon name="menu" size={18} />
        </button>
        <div className="ktm-header__chip ktm-header__chip--brand">
          <span className="ktm-header__logo">KTM</span>
        </div>
      </div>
      <div className="ktm-header__cluster">
        <button className="ktm-header__chip ktm-header__chip--icon" aria-label="검색">
          <Icon name="search" size={18} />
        </button>
        <button
          className="ktm-header__chip ktm-header__chip--icon"
          aria-label="알림"
        >
          <Icon name="bell" size={18} />
          <span className="ktm-header__dot" />
        </button>
      </div>
    </header>
  );
}

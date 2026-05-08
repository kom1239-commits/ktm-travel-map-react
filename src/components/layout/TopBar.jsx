import './TopBar.css';

export default function TopBar({ onMenu, onSearch, onNotify }) {
  return (
    <header className="ktm-topbar">
      <button className="ktm-topbar__btn" aria-label="메뉴" onClick={onMenu}>☰</button>
      <div className="ktm-topbar__logo">
        <div>KTM</div>
        <span>KAZAKHSTAN TRAVEL MANAGER</span>
      </div>
      <button className="ktm-topbar__btn" aria-label="검색" onClick={onSearch}>⌕</button>
      <button className="ktm-topbar__btn" aria-label="알림" onClick={onNotify}>♢</button>
    </header>
  );
}

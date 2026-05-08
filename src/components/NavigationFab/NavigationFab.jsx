import Icon from '../Icon/Icon.jsx';
import './NavigationFab.css';

export default function NavigationFab({ onClick }) {
  return (
    <button type="button" className="nav-fab" aria-label="네비게이션 시작" onClick={onClick}>
      <Icon name="send" size={20} stroke="#fff" filled />
    </button>
  );
}

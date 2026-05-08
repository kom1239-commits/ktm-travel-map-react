import Icon from '../Icon/Icon.jsx';
import './FAB.css';

export default function FAB({ onClick }) {
  return (
    <button type="button" className="fab" aria-label="경로 시작" onClick={onClick}>
      <Icon name="send" size={22} />
    </button>
  );
}

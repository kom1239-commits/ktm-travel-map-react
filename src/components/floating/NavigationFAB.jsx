import './NavigationFAB.css';

export default function NavigationFAB({ onClick }) {
  return (
    <button
      type="button"
      className="ktm-fab"
      aria-label="네비게이션 시작"
      onClick={onClick}
    >
      ➤
    </button>
  );
}

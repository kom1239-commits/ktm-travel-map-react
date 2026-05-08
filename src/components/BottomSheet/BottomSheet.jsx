import './BottomSheet.css';

export default function BottomSheet({ children }) {
  if (!children) return null;
  return <div className="bottom-sheet">{children}</div>;
}

import './BottomSheet.css';

export default function BottomSheet({ children }) {
  return (
    <section className="bottom-sheet" aria-label="여행 정보">
      <div className="bottom-sheet__grip" aria-hidden />
      <div className="bottom-sheet__inner">{children}</div>
    </section>
  );
}

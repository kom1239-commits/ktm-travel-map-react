export default function TopBar({ totalVisible, totalVisited }) {
  return (
    <header className="top-bar">
      <div className="top-bar__brand">
        <span className="top-bar__logo" aria-hidden>
          🗺️
        </span>
        <div>
          <h1>KTM Travel Map</h1>
          <p>
            {totalVisible} {totalVisible === 1 ? 'place' : 'places'} ·{' '}
            {totalVisited} visited
          </p>
        </div>
      </div>
    </header>
  );
}

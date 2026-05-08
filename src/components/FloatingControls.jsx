export default function FloatingControls({
  addMode,
  onToggleAdd,
  onLocate,
  locating,
  hasUserPos,
}) {
  return (
    <div className="fab-stack" aria-label="Map controls">
      <button
        type="button"
        className={`fab ${hasUserPos ? 'fab--active' : ''}`}
        onClick={onLocate}
        aria-label="Find my location"
        title="Find my location"
        disabled={locating}
      >
        {locating ? (
          <span className="fab__spinner" aria-hidden />
        ) : (
          <span aria-hidden>📍</span>
        )}
      </button>
      <button
        type="button"
        className={`fab fab--primary ${addMode ? 'fab--on' : ''}`}
        onClick={onToggleAdd}
        aria-pressed={addMode}
        aria-label={addMode ? 'Cancel adding pin' : 'Add a new pin'}
        title={addMode ? 'Cancel' : 'Add a pin'}
      >
        <span aria-hidden>{addMode ? '✕' : '＋'}</span>
      </button>
    </div>
  );
}

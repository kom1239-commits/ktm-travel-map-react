import { CATEGORIES } from '../data/places.js';

export default function CategoryFilter({ active, onToggle, counts }) {
  return (
    <div className="filter-bar" role="tablist" aria-label="Filter categories">
      <button
        role="tab"
        aria-selected={active.size === 0}
        className={`chip ${active.size === 0 ? 'chip--on' : ''}`}
        onClick={() => onToggle(null)}
      >
        All
        <span className="chip__count">{counts.total}</span>
      </button>
      {CATEGORIES.map((c) => {
        const on = active.has(c.id);
        return (
          <button
            key={c.id}
            role="tab"
            aria-selected={on}
            className={`chip ${on ? 'chip--on' : ''}`}
            style={on ? { '--chip-accent': c.color } : undefined}
            onClick={() => onToggle(c.id)}
          >
            <span aria-hidden>{c.emoji}</span>
            {c.label}
            <span className="chip__count">{counts[c.id] ?? 0}</span>
          </button>
        );
      })}
    </div>
  );
}

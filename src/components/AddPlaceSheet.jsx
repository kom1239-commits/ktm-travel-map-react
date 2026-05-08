import { useState } from 'react';
import { CATEGORIES } from '../data/places.js';

export default function AddPlaceSheet({ coords, onCancel, onSave }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0].id);
  const [note, setNote] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onSave({
      id: `custom-${Date.now()}`,
      name: trimmed,
      category,
      coords,
      description: note.trim() || undefined,
      custom: true,
    });
  };

  return (
    <form className="sheet sheet--form" onSubmit={submit}>
      <div className="sheet__grabber" aria-hidden />
      <h2 className="sheet__form-title">Add a place</h2>
      <p className="sheet__form-sub">
        Tap-to-add at {coords[0].toFixed(4)}°N, {coords[1].toFixed(4)}°E
      </p>

      <label className="field">
        <span>Name</span>
        <input
          autoFocus
          type="text"
          value={name}
          maxLength={60}
          placeholder="e.g. Grandma's momo stall"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label className="field">
        <span>Category</span>
        <div className="cat-grid">
          {CATEGORIES.map((c) => (
            <button
              type="button"
              key={c.id}
              className={`cat-tile ${category === c.id ? 'cat-tile--on' : ''}`}
              style={{ '--tile-accent': c.color }}
              onClick={() => setCategory(c.id)}
            >
              <span className="cat-tile__emoji">{c.emoji}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>
      </label>

      <label className="field">
        <span>Note (optional)</span>
        <textarea
          rows={2}
          maxLength={200}
          value={note}
          placeholder="Anything to remember about this spot?"
          onChange={(e) => setNote(e.target.value)}
        />
      </label>

      <div className="sheet__actions">
        <button type="button" className="btn btn--ghost" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn--primary">
          Save pin
        </button>
      </div>
    </form>
  );
}

const VISITED_KEY = 'ktm.visited.v1';
const CUSTOM_KEY = 'ktm.custom.v1';

const safeParse = (raw, fallback) => {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const loadVisited = () =>
  new Set(safeParse(localStorage.getItem(VISITED_KEY), []));

export const saveVisited = (set) =>
  localStorage.setItem(VISITED_KEY, JSON.stringify([...set]));

export const loadCustomPlaces = () =>
  safeParse(localStorage.getItem(CUSTOM_KEY), []);

export const saveCustomPlaces = (places) =>
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(places));

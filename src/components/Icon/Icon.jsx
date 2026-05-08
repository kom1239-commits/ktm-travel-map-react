// Single source for all stroke icons. No external deps.
const PATHS = {
  menu: 'M4 7h16M4 12h16M4 17h16',
  search: 'M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-4.3-4.3',
  bell: 'M15 17H9a3 3 0 0 0 6 0Zm3-3V11a6 6 0 1 0-12 0v3l-2 3h16l-2-3Z',
  chevronDown: 'm6 9 6 6 6-6',
  locate:
    'M12 3v2M12 19v2M3 12h2M19 12h2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 3.2a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Z',
  layers:
    'M12 3 2 8l10 5 10-5-10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5',
  filter: 'M3 5h18M6 12h12M10 19h4',
  send: 'm22 2-7 20-4-9-9-4Z',
  bookmark: 'M6 3h12v18l-6-4-6 4Z',
  message:
    'M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12Z',
  plus: 'M12 5v14M5 12h14',
  close: 'M6 6l12 12M18 6 6 18',
  star: 'm12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3Z',
  car: 'M3 13l2-6h14l2 6v5h-3v-2H6v2H3v-5Zm4 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
  home: 'M3 11l9-8 9 8M5 10v10h14V10',
  map: 'M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14',
  route: 'M5 19a3 3 0 1 0 0-6h13a3 3 0 1 0 0-6H6',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9a8 8 0 0 1 16 0',
};

export default function Icon({ name, size = 22, stroke = 'currentColor', filled = false, className }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? stroke : 'none'}
      stroke={stroke}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

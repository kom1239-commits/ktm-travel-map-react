// Almaty 권역 5개 관광지 — 실좌표 (lat, lng)
export const places = [
  { id: 'almaty',    name: 'Almaty',         ko: '알마티',       type: 'city',     lat: 43.2389, lng: 76.8897 },
  { id: 'chimbulak', name: 'Chimbulak',      ko: '침블락',       type: 'mountain', lat: 43.1286, lng: 77.0814 },
  { id: 'charyn',    name: 'Charyn Canyon',  ko: '차른캐년',     type: 'canyon',   lat: 43.3546, lng: 79.0793 },
  { id: 'kaindy',    name: 'Kaindy Lake',    ko: '카인디 호수',  type: 'lake',     lat: 42.9849, lng: 78.4664 },
  { id: 'kolsai',    name: 'Kolsai Lakes',   ko: '콜사이 호수',  type: 'lake',     lat: 42.9484, lng: 78.3244 },
];

export const getPlaceById = (id) => places.find((p) => p.id === id);

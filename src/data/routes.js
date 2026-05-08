import { places } from './places.js';

export const trip = {
  id: 'almaty-3n4d',
  title: '알마티 자연여행 3박 4일',
  startDate: '2025.06.20',
  endDate: '2025.06.23',
  // 방문 순서대로 — KTMMap의 RouteLayer가 이 순서로 폴리라인을 그립니다
  routeOrder: ['almaty', 'chimbulak', 'charyn', 'kaindy', 'kolsai'],
};

export const routeCoords = trip.routeOrder
  .map((id) => places.find((p) => p.id === id))
  .filter(Boolean)
  .map((p) => [p.lat, p.lng]);

// Kazakhstan – Almaty 3박 4일 자연여행
// 모든 좌표는 실제 위치 기준 (lat, lng)
export const trip = {
  id: 'almaty-nature-3n4d',
  title: '알마티 자연여행 3박 4일',
  shortTitle: '알마티 자연여행',
  startDate: '2025.06.20',
  endDate: '2025.06.23',
  totalDays: 4,
  currentDay: 2,
  status: '진행 중',
  savedPlaces: 12,
  reservations: 2,
  driverConnected: true,
  // Thumbnail fallback gradient (no remote image dep)
  thumbGradient: ['#3b6f9a', '#1e3a5c'],
  places: [
    {
      id: 'almaty',
      name: 'Almaty',
      nameKo: '알마티',
      coord: [43.222, 76.8512],
      kind: 'city',
    },
    {
      id: 'shymbulak',
      name: 'Chimbulak',
      nameKo: '침불락',
      coord: [43.1158, 77.0791],
      kind: 'mountain',
    },
    {
      id: 'kolsai',
      name: 'Kolsai Lakes',
      nameKo: '콜사이 호수',
      coord: [42.9319, 78.3167],
      kind: 'lake',
    },
    {
      id: 'kaindy',
      name: 'Kaindy Lake',
      nameKo: '카인디 호수',
      coord: [42.9928, 78.4369],
      kind: 'lake',
    },
    {
      id: 'charyn',
      name: 'Charyn Canyon',
      nameKo: '차른캐년',
      coord: [43.3483, 79.0808],
      kind: 'canyon',
      rating: 4.9,
      reviewCount: 230,
      distanceFromAlmatyKm: 195,
      driveMinutesFromAlmaty: 210,
      tags: ['자연 명소', '트레킹 가능'],
      thumbGradient: ['#d28a52', '#8a4a2c'],
    },
  ],
  routeOrder: ['almaty', 'shymbulak', 'kolsai', 'kaindy', 'charyn'],
};

export const getPlaceById = (id) => trip.places.find((p) => p.id === id);

export const getRouteCoords = () =>
  trip.routeOrder.map((id) => getPlaceById(id).coord);

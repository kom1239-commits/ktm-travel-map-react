import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./styles/app.css";

const places = [
  { id: "almaty", name: "Almaty", ko: "알마티", type: "city", lat: 43.2389, lng: 76.8897 },
  { id: "chimbulak", name: "Chimbulak", ko: "침블락", type: "mountain", lat: 43.1286, lng: 77.0814 },
  { id: "charyn", name: "Charyn Canyon", ko: "차른캐년", type: "canyon", lat: 43.3546, lng: 79.0793 },
  { id: "kaindy", name: "Kaindy Lake", ko: "카인디 호수", type: "lake", lat: 42.9849, lng: 78.4664 },
  { id: "kolsai", name: "Kolsai Lakes", ko: "콜사이 호수", type: "lake", lat: 42.9484, lng: 78.3244 }
];

const route = places.map(p => [p.lat, p.lng]);

function icon(type, selected = false) {
  const colors = {
    city: "#0E2D50",
    mountain: "#2FA35A",
    canyon: "#B76A26",
    lake: "#248C9B"
  };

  return L.divIcon({
    className: "",
    html: `
      <div class="marker ${selected ? "selected" : ""}" style="background:${colors[type] || "#333"}">
        ${type === "city" ? "●" : type === "mountain" ? "▲" : type === "lake" ? "≋" : "▧"}
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });
}

export default function App() {
  const [selected, setSelected] = useState(places.find(p => p.id === "charyn"));

  return (
    <div className="ktm-app">

      <MapContainer
        className="map"
        center={[43.05, 77.85]}
        zoom={8}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          attribution='© OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Polyline
          positions={route}
          pathOptions={{
            color: "#F4C400",
            weight: 4,
            opacity: 0.9
          }}
        />

        {places.map(place => (
          <Marker
            key={place.id}
            position={[place.lat, place.lng]}
            icon={icon(place.type, selected?.id === place.id)}
            eventHandlers={{ click: () => setSelected(place) }}
          >
            <Tooltip permanent direction="right" offset={[14, 0]}>
              <div className="map-label">
                <b>{place.name}</b>
                <span>{place.ko}</span>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      <header className="topbar">
        <button className="icon-btn">☰</button>
        <div className="logo">
          <div>KTM</div>
          <span>KAZAKHSTAN TRAVEL MANAGER</span>
        </div>
        <button className="icon-btn">⌕</button>
        <button className="icon-btn bell">♢</button>
      </header>

      <section className="travel-card">
        <div className="travel-icon">▮</div>
        <div>
          <span>내 여행</span>
          <strong>알마티 자연여행 3박 4일</strong>
        </div>
        <div className="chev">⌄</div>
      </section>

      <div className="right-controls">
        <button>⌖</button>
        <button>▱</button>
        <button>≡</button>
      </div>

      <button className="nav-fab">➤</button>

      <section className="place-sheet">
        <div className="handle" />

        <div className="place-content">
          <div className="thumb">
            <span>▮</span>
          </div>

          <div className="place-info">
            <button className="close">×</button>
            <h2>{selected?.ko || "차른캐년"}</h2>
            <p className="rating">★ 4.9 <span>(230)</span></p>
            <p className="meta">🚙 알마티에서 3시간 30분 (195km)</p>
            <div className="tags">
              <span>자연 명소</span>
              <span>트레킹 가능</span>
            </div>
          </div>
        </div>

        <div className="actions">
          <button className="outline">💬 기사 문의</button>
          <button className="primary">＋ 일정에 추가</button>
        </div>
      </section>

      <nav className="bottom-nav">
        <a className="active">⌂<span>홈</span></a>
        <a>▱<span>지도</span></a>
        <a>〰<span>코스</span></a>
        <a>▯<span>저장</span></a>
        <a>♙<span>내 여행</span></a>
      </nav>
    </div>
  );
}

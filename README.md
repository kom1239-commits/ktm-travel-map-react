# KTM Travel Map

A mobile-first travel map of the Kathmandu Valley built with **React + Vite + Leaflet**.

## Features

- 📱 Mobile-first layout with safe-area aware bottom sheets and floating controls
- 🗺️ Leaflet map using free OpenStreetMap tiles (no API key required)
- 🛕 12 curated POIs across temples, viewpoints, food, culture, and trails
- 🔍 Filter pins by category (multi-select) with live counts
- ✓ Mark places as visited — persisted in `localStorage`
- ＋ Tap-to-drop a custom pin with name, category, and notes (also persisted)
- 📍 "Find my location" using the browser Geolocation API
- ⌨️ Keyboard accessible (Esc closes the sheet) and tested on touch + desktop

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173 — works best resized to a phone viewport.

## Build

```bash
npm run build
npm run preview
```

## Project layout

```
src/
  App.jsx                  top-level state, glue
  main.jsx                 React entry, imports leaflet css
  components/
    MapView.jsx            <MapContainer> + tile layer + markers
    TopBar.jsx             header + counts
    CategoryFilter.jsx     horizontal chip row
    PlaceSheet.jsx         details sheet for a selected POI
    AddPlaceSheet.jsx      form for a custom pin
    FloatingControls.jsx   locate + add FABs
  data/places.js           seed POIs and category metadata
  lib/icons.js             Leaflet div-icons (pins, user dot)
  lib/storage.js           localStorage helpers
  styles/global.css        all styles (mobile-first, no framework)
```

No backend, no analytics, no tracking.

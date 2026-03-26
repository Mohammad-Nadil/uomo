"use client"; // this is important

import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, 16);
  return null;
}

export default function StoreMap({ activeCenter, stores }) {
  return (
    <MapContainer center={activeCenter} zoom={16} className="h-full w-full">
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {stores.map((store) => (
        <Marker key={store.id} position={store.position} icon={customIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">{store.name}</h3>
              <p className="text-xs">{store.city}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      <ChangeView center={activeCenter} />
    </MapContainer>
  );
}

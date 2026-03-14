"use client";

import React, { useState } from "react";
// React Leaflet 
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", 
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});


const STORES = [
  {
    id: 1,
    name: "Store in London",
    address: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
    city: "United States",
    phone: "+1 246-345-0695",
    hours: "10 am - 10 pm EST, 7 days a week",
    position: [23.7413449, 90.3826395],
  },
  {
    id: 2,
    name: "Store in Istanbul",
    address: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
    city: "Turkey",
    phone: "+1 246-345-0695",
    hours: "10 am - 10 pm EST, 7 days a week",
    position: [41.0082, 28.9784],
  },
  {
    id: 3,
    name: "Store in New York",
    address: "High Street Kensington, London W8 5SA",
    city: "United Kingdom",
    phone: "+44 20 7937 5432",
    hours: "10 am - 10 pm, 7 days a week",
    position: [51.5014, -0.1919],
  },
];


function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, 50); 
  return null;
}

const StoreLocatorPage = () => {
  const [activeCenter, setActiveCenter] = useState(STORES[0].position);

  return (
    <section className=" min-h-screen py-10">
      <div className="max-w-350 mx-auto px-6">
        {/* Title */}
        <h1 className="text-[35px] font-bold mb-10 uppercase">
          Store Locator
        </h1>

        <div className="flex flex-col lg:flex-row">
          
          {/* LEFT SIDEBAR */}
          <div className="w-full lg:w-112.5 h-162.5 overflow-y-auto pr-2.5">
            
            {/* Search Box */}
            <div className="relative mb-12 ">
              <input
                type="text"
                placeholder="Enter your country or city"
                className="w-full border border-[#E4E4E4] py-3 px-5.25  transition-colors"
              />
              <svg 
                className="absolute right-2 top-3 w-5 h-5  " 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Store List */}
            <div className="space-y-12">
              {STORES.map((store) => (
                <div key={store.id} className="border-b border-[#E4E4E4] pb-10 last:border-0">
                  <h4 className="font-medium text-[18px] mb-3">{store.name}</h4>
                  <div className="text-[#222222] text-sm space-y-1 leading-6 mb-5">
                    <p>{store.address}</p>
                    <p>{store.city}</p>
                    <p>{store.phone}</p>
                    <p>{store.hours}</p>
                  </div>
                  <button
                    onClick={() => setActiveCenter(store.position)}
                    className="text-[13px] font-medium border-b-2 border-black pb-1 transition-all uppercase tracking-widest"
                  >
                    See on the map
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - MAP */}
          <div className="w-full lg:flex-1 h-125 lg:h-162.5 relative z-0">
            <MapContainer
              center={activeCenter}
              zoom={16}
              scrollWheelZoom={true}
              className="h-full w-full"
            >
              
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />

              {STORES.map((store) => (
                <Marker key={store.id} position={store.position} icon={customIcon}>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-bold">{store.name}</h3>
                      <p className="text-xs">{store.city}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}

              {/* map logic */}
              <ChangeView center={activeCenter} />
            </MapContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StoreLocatorPage;
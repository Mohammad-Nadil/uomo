"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const StoreMap = dynamic(() => import("../../../components/StoreMap"), {
  ssr: false,
});

const STORES = [
  {
    id: 1,
    name: "Dhaka Store",
    position: [23.8103, 90.4125],
    city: "Bangladesh",
  },
  {
    id: 2,
    name: "Khulna Store",
    position: [22.8456, 89.5403],
    city: "Bangladesh",
  },
  { id: 3, name: "London Store", position: [51.5074, -0.1278], city: "UK" },
];

export default function StoreLocatorPage() {
  const [activeCenter, setActiveCenter] = useState(STORES[0].position);

  return (
    <section className="min-h-screen py-10">
      <div className="max-w-350 mx-auto px-6">
        <h1 className="text-[35px] font-bold mb-10 uppercase">Store Locator</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT */}
          <div className="w-full lg:w-112.5 h-162.5 overflow-y-auto pr-2.5">
            {STORES.map((store) => (
              <div
                key={store.id}
                className="border-b border-[#E4E4E4] pb-10 last:border-0"
              >
                <h4 className="font-medium text-[18px] mb-3">{store.name}</h4>
                <p>{store.city}</p>
                <button
                  onClick={() => setActiveCenter(store.position)}
                  className="mt-2 px-3 py-1 bg-black text-white rounded"
                >
                  See on map
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="w-full lg:flex-1 h-125 lg:h-162.5 relative z-0">
            <StoreMap activeCenter={activeCenter} stores={STORES} />
          </div>
        </div>
      </div>
    </section>
  );
}

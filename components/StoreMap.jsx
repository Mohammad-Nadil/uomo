"use client";

export default function StoreMap({ activeCenter, stores }) {
  // Convert lat,lng to iframe src for Google Maps embed
  const [lat, lng] = activeCenter;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=12&output=embed`;

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Store Map"
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

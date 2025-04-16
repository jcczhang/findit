import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 修复 marker 图标不显示问题
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

function LocationMarker({
  onSetMarker,
}: {
  onSetMarker: (lat: number, lng: number) => void;
}) {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition({ lat, lng });
      onSetMarker(lat, lng);
    },
  });

  return position ? (
    <Marker position={position}>
      <Popup>
        Last seen here! <br /> ({position.lat.toFixed(4)}, {position.lng.toFixed(4)})
      </Popup>
    </Marker>
  ) : null;
}

export default function SectionMap() {
  const [markerCoords, setMarkerCoords] = useState<[number, number] | null>(null);

  return (
    <section id="map">
      <h2>🗺 Map & Clue Info</h2>
      <p>
        Mark where your pet was last seen, track clues, and view AI-recommended search zones such as
        nearby shelters or vet clinics.
      </p>

      <MapContainer
        center={[34.0522, -118.2437]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%", borderRadius: "8px", marginTop: "20px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          onSetMarker={(lat, lng) => {
            setMarkerCoords([lat, lng]);
            console.log("📍 Marker set at:", lat, lng);
          }}
        />
      </MapContainer>
    </section>
  );
}

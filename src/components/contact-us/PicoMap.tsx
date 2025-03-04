import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issues
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const PicoMap = () => {
  // Generate a unique key so that every instance gets a unique container id.
  const [mapKey] = useState(Date.now());
  const containerId = `map-container-${mapKey}`;

  useEffect(() => {
    // Remove any existing _leaflet_id from the container with this unique id.
    const container = document.getElementById(containerId);
    if (container && (container as any)._leaflet_id) {
      container.removeAttribute("_leaflet_id");
    }
  }, [containerId]);

  return (
    <div>
      <MapContainer
        key={mapKey}
        id={containerId}
        center={[22.5156495, 88.3584106]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "900px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[22.5156495, 88.3584106]}>
          <Popup>
            Pico - Pizzeria & Coffee Bar <br /> পিকো - পিজ্জেরিয়া & কফি বার
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default PicoMap;

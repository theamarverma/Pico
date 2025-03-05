import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

// Fix default marker icon issues by clearing _getIconUrl (casting to any)
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const PicoMap = () => {
  return (
    <div>
      <MapContainer
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

import React, { FC } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./Map.scss";

interface MapProps {
  lat: number;
  lng: number;
  zoom: number;
}

const Map: FC<MapProps> = (props: MapProps) => (
  <MapContainer
    className="map-container"
    center={[props.lat, props.lng]}
    zoom={props.zoom ?? 20}
    scrollWheelZoom={true}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[props.lat, props.lng]}></Marker>
  </MapContainer>
);

export default Map;

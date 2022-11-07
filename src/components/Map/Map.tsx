import L from "leaflet";
import { MapMarker, Position } from "models";
import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./Map.scss";

interface MapProps {
  position: Position;
  zoom: number;
  markers: MapMarker[];
}

function Map(props: MapProps) {
  let markers = props.markers.map((marker) => {
    return L.icon({
      iconUrl: marker.icon,
      iconSize: [30, 30], // size of the icon
      iconAnchor: [22, 30], // point of the icon which will correspond to marker's location
    });
  });
  return (
    <MapContainer
      className="map-container"
      center={[props.position.lat, props.position.lng]}
      zoom={props.zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.markers.map((item, index) => (
        <Marker
          key={item.position.lat}
          position={[item.position.lat, item.position.lng]}
          icon={markers[index]}
        ></Marker>
      ))}
    </MapContainer>
  );
}

export default Map;

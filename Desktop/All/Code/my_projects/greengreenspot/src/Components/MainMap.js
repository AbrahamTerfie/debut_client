import React  , {useState }from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup , useMapEvents} from "react-leaflet";

export default function MainMap() {

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  return (
    <div className="mapContainer" >
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={25}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
      , ,
    </div>
  );
}

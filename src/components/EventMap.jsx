import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const EventMap = ({ events }) => {
  const validEvents = events.filter((event) => event.latitude && event.longitude);

  const centerLat = validEvents.length > 0 ? validEvents[0].latitude : 0;
  const centerLng = validEvents.length > 0 ? validEvents[0].longitude : 0;

  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; OpenStreetMap contributors'
      />
      {validEvents.map((event) => (
        <Marker key={event.id} position={[event.latitude, event.longitude]}>
          <Popup>
            <strong>{event.title}</strong>
            <p>{event.location}</p>
            <p>{new Date(event.date).toLocaleString()}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default EventMap;

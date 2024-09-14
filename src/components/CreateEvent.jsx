import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import { createEvent } from '../services/api';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    latitude: null,
    longitude: null,
  });
  const [suggestions, setSuggestions] = useState([]);
  const [mapCenter, setMapCenter] = useState([0, 0]);
  const [mapZoom, setMapZoom] = useState(2);
  const navigate = useNavigate();
  const mapRef = useRef();

  useEffect(() => {
    // Dynamically import Leaflet images
    import('leaflet/dist/images/marker-icon.png').then((markerIcon) => {
      import('leaflet/dist/images/marker-icon-2x.png').then((markerIcon2x) => {
        import('leaflet/dist/images/marker-shadow.png').then((markerShadow) => {
          delete L.Icon.Default.prototype._getIconUrl;
          L.Icon.Default.mergeOptions({
            iconRetinaUrl: markerIcon2x.default,
            iconUrl: markerIcon.default,
            shadowUrl: markerShadow.default,
          });
        });
      });
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'location') {
      fetchLocationSuggestions(value);
    }
  };

  const fetchLocationSuggestions = async (query) => {
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`,
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching location suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData((prev) => ({
      ...prev,
      location: suggestion.display_name,
      latitude: parseFloat(suggestion.lat),
      longitude: parseFloat(suggestion.lon),
    }));
    setMapCenter([parseFloat(suggestion.lat), parseFloat(suggestion.lon)]);
    setMapZoom(13);
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { ...formData};
    createEvent(newEvent);
    navigate('/events');
  };

  const MapView = () => {
    const map = useMap();
    useEffect(() => {
      map.setView(mapCenter, mapZoom);
    }, [mapCenter, mapZoom]);
    return null;
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8 text-center'>Create New Event</h1>
      <form onSubmit={handleSubmit} className='space-y-6 max-w-4xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='label' htmlFor='title'>
              <span className='label-text text-lg'>Title</span>
            </label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title}
              onChange={handleInputChange}
              className='input input-bordered w-full text-lg'
              required
            />
          </div>
          <div>
            <label className='label' htmlFor='date'>
              <span className='label-text text-lg'>Date</span>
            </label>
            <input
              type='datetime-local'
              id='date'
              name='date'
              value={formData.date}
              onChange={handleInputChange}
              className='input input-bordered w-full text-lg'
              required
            />
          </div>
        </div>
        <div>
          <label className='label' htmlFor='description'>
            <span className='label-text text-lg'>Description</span>
          </label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            className='textarea textarea-bordered w-full h-32 text-lg'
          ></textarea>
        </div>
        <div className='relative'>
          <label className='label' htmlFor='location'>
            <span className='label-text text-lg'>Location</span>
          </label>
          <input
            type='text'
            id='location'
            name='location'
            value={formData.location}
            onChange={handleInputChange}
            className='input input-bordered w-full text-lg'
            required
          />
          {suggestions.length > 0 && (
            <ul className='absolute z-50 bg-base-100 w-full border border-base-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg suggestions-dropdown'>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.place_id}
                  className='p-3 hover:bg-base-200 cursor-pointer text-lg'
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='h-96 w-full mb-6'>
          <MapContainer
            center={mapCenter}
            zoom={mapZoom}
            style={{ height: '100%', width: '100%' }}
            ref={mapRef}
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            {formData.latitude && formData.longitude && (
              <Marker position={[formData.latitude, formData.longitude]} />
            )}
            <MapView />
          </MapContainer>
        </div>
        <button type='submit' className='btn btn-primary w-full text-lg py-3'>
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;

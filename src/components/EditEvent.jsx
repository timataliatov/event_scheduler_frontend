import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventById, updateEvent } from '../services/api';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import imageCompression from 'browser-image-compression';

const defaultEventImage =
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

const EditEvent = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getEventById(id);
        setEvent(response.data);
        setPreviewImage(response.data.posterUrl || defaultEventImage);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch event details');
        setLoading(false);
      }
    };

    fetchEvent();

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
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          setPreviewImage(base64String);
          setEvent((prev) => ({ ...prev, posterUrl: base64String }));
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { id, createdAt, updatedAt, ...eventData } = event;
      if (!eventData.posterUrl) {
        eventData.posterUrl = defaultEventImage;
      }
      await updateEvent(id, eventData);
      navigate(`/events/${id}`);
    } catch (err) {
      setError('Failed to update event');
    }
  };

  const formatDateTimeLocal = (date) => {
    return new Date(date).toISOString().slice(0, 16);
  };

  const MapView = () => {
    const map = useMap();
    useEffect(() => {
      if (event && event.latitude && event.longitude) {
        map.setView([event.latitude, event.longitude], 13);
      }
    }, [event]);
    return null;
  };

  if (loading) return <div className='text-center text-gray-600'>Loading...</div>;
  if (error) return <div className='text-center text-red-500'>{error}</div>;
  if (!event) return <div className='text-center text-gray-600'>Event not found</div>;

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Edit Event</h1>
      <form onSubmit={handleSubmit} className='space-y-6 max-w-4xl mx-auto'>
        <div>
          <label className='label' htmlFor='title'>
            <span className='label-text text-lg'>Title</span>
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={event.title}
            onChange={handleInputChange}
            className='input input-bordered w-full text-lg'
            required
          />
        </div>
        <div>
          <label className='label' htmlFor='description'>
            <span className='label-text text-lg'>Description</span>
          </label>
          <textarea
            id='description'
            name='description'
            value={event.description}
            onChange={handleInputChange}
            className='textarea textarea-bordered w-full h-32 text-lg'
          ></textarea>
        </div>
        <div>
          <label className='label' htmlFor='date'>
            <span className='label-text text-lg'>Date</span>
          </label>
          <input
            type='datetime-local'
            id='date'
            name='date'
            value={formatDateTimeLocal(event.date)}
            onChange={handleInputChange}
            className='input input-bordered w-full text-lg'
            required
          />
        </div>
        <div>
          <label className='label' htmlFor='location'>
            <span className='label-text text-lg'>Location</span>
          </label>
          <input
            type='text'
            id='location'
            name='location'
            value={event.location}
            onChange={handleInputChange}
            className='input input-bordered w-full text-lg'
            required
          />
        </div>
        <div className='h-96 w-full mb-6'>
          <MapContainer
            center={[event.latitude || 0, event.longitude || 0]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            {event.latitude && event.longitude && (
              <Marker position={[event.latitude, event.longitude]} />
            )}
            <MapView />
          </MapContainer>
        </div>
        <div>
          <label className='label' htmlFor='poster'>
            <span className='label-text text-lg'>Event Poster</span>
          </label>
          <input
            type='file'
            id='poster'
            name='poster'
            onChange={handleFileChange}
            className='file-input file-input-bordered w-full'
            accept='image/*'
          />
          {previewImage && (
            <div className='mt-4'>
              <img src={previewImage} alt='Event poster preview' className='max-w-xs mx-auto' />
            </div>
          )}
        </div>
        <button type='submit' className='btn btn-primary w-full text-lg py-3'>
          Update Event
        </button>
      </form>
    </div>
  );
};

export default EditEvent;

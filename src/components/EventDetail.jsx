import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventById } from '../services/api';
import { Calendar, MapPin, Clock, User } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const EventDetail = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        // First, check localStorage
        const localEvents = JSON.parse(localStorage.getItem('events') || '[]');
        const localEvent = localEvents.find((e) => e.id.toString() === id);

        if (localEvent) {
          setEvent({ ...localEvent, source: 'local' });
        } else {
          // If not in localStorage, fetch from API
          const response = await getEventById(id);
          setEvent({ ...response.data, source: 'api' });
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch event details');
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      if (event.source === 'local') {
        const localEvents = JSON.parse(localStorage.getItem('events') || '[]');
        const updatedEvents = localEvents.filter((e) => e.id.toString() !== id);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
        navigate('/events');
      } else {
        try {
          // Implement API delete call here
          // await deleteEvent(id);
          navigate('/events');
        } catch (err) {
          setError('Failed to delete event');
        }
      }
    }
  };

  if (loading) return <div className='text-center'>Loading...</div>;
  if (error) return <div className='text-center text-error'>{error}</div>;
  if (!event) return <div className='text-center'>Event not found</div>;

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>{event.title}</h1>
      <div className='bg-white shadow-md rounded-lg p-6 mb-6'>
        <div className='flex items-center mb-4'>
          <Calendar className='mr-2' />
          <span>{new Date(event.date).toLocaleDateString()}</span>
        </div>
        <div className='flex items-center mb-4'>
          <Clock className='mr-2' />
          <span>{new Date(event.date).toLocaleTimeString()}</span>
        </div>
        <div className='flex items-center mb-4'>
          <MapPin className='mr-2' />
          <span>{event.location}</span>
        </div>
        {event.source === 'api' && (
          <div className='flex items-center mb-4'>
            <User className='mr-2' />
            <span>Organizer: {event.User?.name || 'Unknown'}</span>
          </div>
        )}
        <p className='mt-4'>{event.description}</p>
      </div>

      {/* Map */}
      {event.latitude && event.longitude && (
        <div className='mb-6 h-64'>
          <MapContainer
            center={[event.latitude, event.longitude]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[event.latitude, event.longitude]}>
              <Popup>{event.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}

      <div className='flex gap-4'>
        {event.source === 'local' && (
          <button
            onClick={() => navigate(`/events/edit/${event.id}`)}
            className='btn btn-primary flex-1'
          >
            Edit Event
          </button>
        )}
        <button onClick={handleDelete} className='btn btn-error flex-1'>
          Delete Event
        </button>
      </div>
    </div>
  );
};

export default EventDetail;

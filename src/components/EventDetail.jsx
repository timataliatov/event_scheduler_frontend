import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getEventById, deleteEvent } from '../services/api';
import { Calendar, MapPin, Clock, User } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const defaultEventImage =
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

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
        const response = await getEventById(id);
        setEvent(response.data);
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
      try {
        await deleteEvent(id);
        navigate('/events');
      } catch (err) {
        setError('Failed to delete event');
      }
    }
  };

  if (loading) return <div className='flex-grow flex items-center justify-center'>Loading...</div>;
  if (error)
    return <div className='flex-grow flex items-center justify-center text-error'>{error}</div>;
  if (!event)
    return <div className='flex-grow flex items-center justify-center'>Event not found</div>;

  return (
    <div className='flex-grow flex items-center justify-center py-8'>
      <div className='max-w-2xl w-full mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-6'>{event.title}</h1>
        <div className='bg-base-200 border border-base-300 shadow-md rounded-lg p-6 mb-6'>
          <img
            src={event.posterUrl || defaultEventImage}
            alt={event.title}
            className='w-full h-64 object-cover rounded-lg mb-6'
          />
          <div className='flex items-center mb-4'>
            <Calendar className='mr-2 text-primary' />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className='flex items-center mb-4'>
            <Clock className='mr-2 text-primary' />
            <span>{new Date(event.date).toLocaleTimeString()}</span>
          </div>
          <div className='flex items-center mb-4'>
            <MapPin className='mr-2 text-primary' />
            <span>{event.location}</span>
          </div>
          <div className='flex items-center mb-4'>
            <User className='mr-2 text-primary' />
            <span>Organizer: {event.User ? event.User.name : 'Anonymous'}</span>
          </div>
          <p className='mt-4'>{event.description}</p>
        </div>

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
          <Link to={`/events/edit/${event.id}`} className='btn btn-primary flex-1'>
            Edit Event
          </Link>
          <button onClick={handleDelete} className='btn btn-error flex-1'>
            Delete Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;

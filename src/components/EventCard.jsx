import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const EventCard = ({ event }) => {
  // Determine the event ID based on the source
  const eventId = event.source === 'local' ? event.id : event.id.toString();

  return (
    <div className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{event.title}</h3>
        <div className='flex items-center text-gray-600 mb-2'>
          <Calendar size={16} className='mr-2' />
          <p>{new Date(event.date).toLocaleString()}</p>
        </div>
        <div className='flex items-center text-gray-600 mb-4'>
          <MapPin size={16} className='mr-2' />
          <p>{event.location}</p>
        </div>
        {event.source === 'local' && (
          <span className='inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
            User Created
          </span>
        )}
        <Link to={`/events/${eventId}`} className='btn btn-primary w-full mt-4'>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;

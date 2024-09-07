import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const EventCard = ({ event }) => {
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
        <Link to={`/events/${event.id}`} className='btn btn-primary w-full'>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;

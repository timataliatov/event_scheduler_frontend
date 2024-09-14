import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, User } from 'lucide-react';

const defaultEventImage =
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

const EventCard = ({ event }) => {
  const eventId = event.source === 'local' ? event.id : event.id.toString();
  const imageUrl = event.posterUrl || defaultEventImage;

  return (
    <div className='bg-base-100 dark:bg-base-200 border border-base-200 dark:border-base-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full'>
      <div className='relative h-48 overflow-hidden'>
        <img src={imageUrl} alt={event.title} className='w-full h-full object-cover' />
        {event.source === 'local' && (
          <span className='absolute top-2 right-2 bg-primary text-primary-content text-xs font-semibold px-2.5 py-0.5 rounded'>
            User Created
          </span>
        )}
      </div>
      <div className='p-6 flex-grow flex flex-col'>
        <h3 className='text-xl font-semibold mb-2'>{event.title}</h3>
        <div className='flex items-center text-base-content/70 mb-2'>
          <Calendar size={16} className='mr-2 text-primary' />
          <p>{new Date(event.date).toLocaleString()}</p>
        </div>
        <div className='flex items-center text-base-content/70 mb-2'>
          <MapPin size={16} className='mr-2 text-primary' />
          <p>{event.location}</p>
        </div>
        <div className='flex items-center text-base-content/70 mb-4'>
          <User size={16} className='mr-2 text-primary' />
          <p>Organizer: {event.User ? event.User.name : 'Anonymous'}</p>
        </div>
        <Link to={`/events/${eventId}`} className='btn btn-primary w-full mt-auto'>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;

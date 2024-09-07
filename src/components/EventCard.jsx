import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const EventCard = () => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>Event Title</h3>
        <div className='flex items-center text-gray-600 mb-2'>
          <Calendar size={16} className='mr-2' />
          <p>Event Date and Time</p>
        </div>
        <div className='flex items-center text-gray-600 mb-4'>
          <MapPin size={16} className='mr-2' />
          <p>Event Location</p>
        </div>
        <button className='btn btn-primary w-full'>View Details</button>
      </div>
    </div>
  );
};

export default EventCard;

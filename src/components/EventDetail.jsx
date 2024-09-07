import React from 'react';
import { Calendar, MapPin, Clock, User } from 'lucide-react';

const EventDetail = () => {
  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Event Title</h1>
      <div className='bg-white shadow-md rounded-lg p-6 mb-6'>
        <div className='flex items-center mb-4'>
          <Calendar className='mr-2' />
          <span>Event Date</span>
        </div>
        <div className='flex items-center mb-4'>
          <Clock className='mr-2' />
          <span>Event Time</span>
        </div>
        <div className='flex items-center mb-4'>
          <MapPin className='mr-2' />
          <span>Event Location</span>
        </div>
        <div className='flex items-center mb-4'>
          <User className='mr-2' />
          <span>Organizer ID</span>
        </div>
        <p className='mt-4'>Event Description</p>
      </div>
      <div className='flex gap-4'>
        <button className='btn btn-primary flex-1'>Edit Event</button>
        <button className='btn btn-error flex-1'>Delete Event</button>
      </div>
    </div>
  );
};

export default EventDetail;

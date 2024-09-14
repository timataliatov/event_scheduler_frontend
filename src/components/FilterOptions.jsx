import React, { useState } from 'react';

const FilterOptions = ({ events, setEvents }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date).toISOString().split('T')[0];
      return (
        (!startDate || eventDate >= startDate) &&
        (!endDate || eventDate <= endDate) &&
        (!location || event.location.toLowerCase().includes(location.toLowerCase()))
      );
    });
    setEvents(filteredEvents);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4 mt-4'>
      <div className='flex flex-col-2 flex-wrap items-center justify-center gap-4 pb-10'>
        <div className='flex gap-4'>
          <input
            type='date'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className='input input-bordered w-52'
            placeholder='From Date'
          />
          <input
            type='date'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className='input input-bordered w-52'
            placeholder='To Date'
          />
        </div>
        <div className='flex gap-4'>
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='input input-bordered w-80'
            placeholder='Location'
          />
          <button type='submit' className='btn btn-secondary w-16'>
            Filter
          </button>
        </div>
      </div>
    </form>
  );
};

export default FilterOptions;

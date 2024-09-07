import React from 'react';
import EventCard from './EventCard';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';

const EventList = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Upcoming Events</h1>
      <div className='mb-8'>
        <SearchBar />
        <FilterOptions />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <div className='text-center mt-8'>
        <button className='btn btn-primary'>Load More</button>
      </div>
    </div>
  );
};

export default EventList;

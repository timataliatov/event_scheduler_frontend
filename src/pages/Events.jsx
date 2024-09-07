import React, { useState, useEffect } from 'react';
import { getEvents } from '../services/api';
import EventList from '../components/EventList';
import SearchBar from '../components/SearchBar';
import EventMap from '../components/EventMap';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, [page]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await getEvents(page, 10);
      setEvents((prevEvents) =>
        page === 1 ? response.data.results : [...prevEvents, ...response.data.results],
      );
      setHasMore(response.data.hasNextPage);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch events');
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (loading && page === 1) return <div className='text-center text-gray-600'>Loading...</div>;
  if (error) return <div className='text-center text-red-500'>{error}</div>;

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Upcoming Events</h1>
      <div className='mb-8'>
        <SearchBar events={events} setEvents={setEvents} />
      </div>
      <div className='map-container'>
        <EventMap events={events} />
      </div>
      {/* <FilterOptions /> */}
      <EventList events={events} />
      {hasMore && (
        <div className='text-center mt-8'>
          <button onClick={loadMore} className='btn btn-primary'>
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Events;

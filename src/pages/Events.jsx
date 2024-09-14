import React, { useState, useEffect, useCallback } from 'react';
import { getEvents } from '../services/api';
import EventList from '../components/EventList';
import SearchBar from '../components/SearchBar';
import EventMap from '../components/EventMap';
import FilterOptions from '../components/FilterOptions';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [page, setPage] = useState(1);
  const eventsPerPage = 9;

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getEvents();
      const apiEvents = response.results.map((event) => ({ ...event, source: 'api' }));

      // Fetch events from localStorage
      const localEvents = JSON.parse(localStorage.getItem('events') || '[]').map((event) => ({
        ...event,
        source: 'local',
      }));

      // Combine API events and localStorage events
      const allEvents = [...apiEvents, ...localEvents];

      // Sort events by date (closest first)
      const sortedEvents = allEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

      setEvents(sortedEvents);
      setDisplayedEvents(sortedEvents.slice(0, eventsPerPage));
      setLoading(false);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError('Failed to fetch events');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const loadMore = () => {
    const nextPage = page + 1;
    const startIndex = (nextPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    const newDisplayedEvents = events.slice(0, endIndex);
    setDisplayedEvents(newDisplayedEvents);
    setPage(nextPage);
  };

  const applyFilter = (startDate, endDate, location) => {
    const newFilteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date).toISOString().split('T')[0];
      return (
        (!startDate || eventDate >= startDate) &&
        (!endDate || eventDate <= endDate) &&
        (!location || event.location.toLowerCase().includes(location.toLowerCase()))
      );
    });
    setFilteredEvents(newFilteredEvents);
    setDisplayedEvents(newFilteredEvents.slice(0, eventsPerPage));
    setPage(1);
  };

  const applySearch = useCallback(
    (query) => {
      const newFilteredEvents = events.filter(
        (event) =>
          event.title.toLowerCase().includes(query.toLowerCase()) ||
          event.description.toLowerCase().includes(query.toLowerCase()) ||
          event.location.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredEvents(newFilteredEvents);
      setDisplayedEvents(newFilteredEvents.slice(0, eventsPerPage));
      setPage(1);
    },
    [events, eventsPerPage],
  );

  const resetFilters = () => {
    setFilteredEvents([]);
    setDisplayedEvents(events.slice(0, eventsPerPage));
    setPage(1);
  };

  if (loading) return <div className='text-center text-gray-600'>Loading...</div>;
  if (error) return <div className='text-center text-red-500'>{error}</div>;

  const eventsToDisplay = filteredEvents.length > 0 ? filteredEvents : events;
  const hasMore = displayedEvents.length < eventsToDisplay.length;

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Upcoming Events</h1>
      <div className='mb-8'>
        <SearchBar applySearch={applySearch} />
      </div>
      <div className='mb-8 h-96'>
        <EventMap events={events} filteredEvents={filteredEvents} />
      </div>
      <FilterOptions applyFilter={applyFilter} setFilteredEvents={resetFilters} />
      <EventList events={displayedEvents} />
      {hasMore && (
        <div className='flex justify-center mt-8'>
          <button onClick={loadMore} className='btn btn-primary'>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Events;

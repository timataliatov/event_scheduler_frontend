import React, { useState, useEffect, useCallback } from 'react';
import { getEvents } from '../services/api';
import EventList from '../components/EventList';
import SearchBar from '../components/SearchBar';
import EventMap from '../components/EventMap';
import FilterOptions from '../components/FilterOptions';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getEvents();
      const apiEvents = response.results.map(event => ({ ...event, source: 'api' }));

      // Fetch events from localStorage
      const localEvents = JSON.parse(localStorage.getItem('events') || '[]')
        .map(event => ({ ...event, source: 'local' }));

      // Combine API events and localStorage events
      const allEvents = [...apiEvents, ...localEvents];

      // Sort events by date (closest first)
      const sortedEvents = allEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

      setEvents(sortedEvents);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch events');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

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
  }
  const applySearch = (query) => {
    const newFilteredEvents = events.filter(
      (event) =>
        event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.description.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredEvents(newFilteredEvents);
  }

  if (loading) return <div className='text-center text-gray-600'>Loading...</div>;
  if (error) return <div className='text-center text-red-500'>{error}</div>;

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Upcoming Events</h1>
      <div className='mb-8'>
        <SearchBar applySearch={applySearch} setFilteredEvents={setFilteredEvents} />
      </div>
      <div className='mb-8 h-96'>
        <EventMap events={events} filteredEvents={filteredEvents} />
      </div>
      <FilterOptions applyFilter={applyFilter} setFilteredEvents={setFilteredEvents} />
      <EventList events={events} filteredEvents={filteredEvents} />
    </div>
  );
};

export default Events;

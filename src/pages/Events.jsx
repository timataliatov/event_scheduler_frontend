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

  if (loading) return <div className='text-center text-gray-600'>Loading...</div>;
  if (error) return <div className='text-center text-red-500'>{error}</div>;

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Upcoming Events</h1>
      <div className='mb-8'>
        <SearchBar events={events} setEvents={setEvents} />
      </div>
      <div className='mb-8 h-96'>
        <EventMap events={events} />
      </div>
      <FilterOptions events={events} setEvents={setEvents} />
      <EventList events={events} />
    </div>
  );
};

export default Events;

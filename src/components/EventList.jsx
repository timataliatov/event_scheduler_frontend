import EventCard from './EventCard';

const EventList = ({events, filteredEvents}) => {
  if(filteredEvents.length >0 ) {
    return  (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
  );
  }
 return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
  );
};

export default EventList;

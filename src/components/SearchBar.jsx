import {useState, useEffect} from 'react'
import { Search, X } from 'lucide-react';

const SearchBar = ({events, setEvents}) => {
    const [query, setQuery] = useState('');
    const [initialEvents, setInitialEvents] = useState([]);

    useEffect(() => {
      setInitialEvents(events);
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (query.length > 0) {
        const filtered = events.filter((event) => 
          event.title.toLowerCase().includes(query.toLowerCase()) ||
          event.description.toLowerCase().includes(query.toLowerCase())
        );
        setEvents(filtered);
      } else {
        setEvents(initialEvents);
      }
    };

    const clearSearch = () => {
      setQuery("");
      setEvents(initialEvents);
    };

  return (
    <form className='relative' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search events...'
        className='input input-bordered w-full pr-10'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2'>
        <Search size={20} className='text-gray-400' />
      </button>
      {query && (<button className='absolute right-10 top-1/2 transform -translate-y-1/2' onClick={clearSearch}><X size={20} className='text-gray-400'/></button>)}
    </form>
  );
}


export default SearchBar;

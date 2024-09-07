import {useEffect, useState} from 'react'
import { Search } from 'lucide-react';

const SearchBar = ({events, setEvents}) => {
    const [query, setQuery] = useState('');
    // const [results, setResults] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query) {
          const filtered = events.filter((event) => {
              event.title.toLowerCase().includes(query.toLowerCase()) ||
              event.description.toLowerCase().includes(query.toLowerCase())
          })
          console.log(filtered)
          setEvents(filtered)
      } else {
          setEvents([])
      }
      console.log(events)
    }

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
    </form>
  );
}


export default SearchBar;

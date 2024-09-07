import {useEffect, useState} from 'react'
import { Search } from 'lucide-react';

const SearchBar = ({events, setEvents}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([])

    useEffect(() => {
        if (query) {
            const filtered = events.filter((event) => {
                event.title.toLowerCase().includes(query.toLowerCase()) ||
                event.description.toLowerCase().includes(query.toLowerCase())
            })
            setResults(filtered)
        } else {
            setResults([])
        }
    }, [query])

    const handleClick = () => {
        
    }

  return (
    <form className='relative'>
      <input
        type='text'
        placeholder='Search events...'
        className='input input-bordered w-full pr-10'
      />
      <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2'>
        <Search size={20} className='text-gray-400' />
      </button>
    </form>
  );
}


export default SearchBar;

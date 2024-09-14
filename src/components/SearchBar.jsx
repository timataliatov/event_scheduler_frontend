import { useState} from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ applySearch, setFilteredEvents }) => {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    applySearch(query);
  };

  const clearSearch = () => {
    setQuery('');
    setFilteredEvents([]);
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
      {query && (
        <button
          className='absolute right-10 top-1/2 transform -translate-y-1/2'
          onClick={clearSearch}
        >
          <X size={20} className='text-gray-400' />
        </button>
      )}
    </form>
  );
};

export default SearchBar;

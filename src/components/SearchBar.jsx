import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
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
};

export default SearchBar;

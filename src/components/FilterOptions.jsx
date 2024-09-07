import React from 'react';

const FilterOptions = () => {
  return (
    <form className='space-y-4 mt-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <input type='date' className='input input-bordered w-full' placeholder='From Date' />
        <input type='date' className='input input-bordered w-full' placeholder='To Date' />
        <input type='text' className='input input-bordered w-full' placeholder='Location' />
      </div>
      <button type='submit' className='btn btn-secondary w-full md:w-auto'>
        Apply Filters
      </button>
    </form>
  );
};

export default FilterOptions;

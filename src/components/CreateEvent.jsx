import React from 'react';

const CreateEvent = () => {
  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Create New Event</h1>
      <div className='space-y-4'>
        <div>
          <label className='label' htmlFor='title'>
            <span className='label-text'>Title</span>
          </label>
          <input type='text' id='title' name='title' className='input input-bordered w-full' />
        </div>
        <div>
          <label className='label' htmlFor='description'>
            <span className='label-text'>Description</span>
          </label>
          <textarea
            id='description'
            name='description'
            className='textarea textarea-bordered w-full h-24'
          ></textarea>
        </div>
        <div>
          <label className='label' htmlFor='date'>
            <span className='label-text'>Date</span>
          </label>
          <input
            type='datetime-local'
            id='date'
            name='date'
            className='input input-bordered w-full'
          />
        </div>
        <div>
          <label className='label' htmlFor='location'>
            <span className='label-text'>Location</span>
          </label>
          <input
            type='text'
            id='location'
            name='location'
            className='input input-bordered w-full'
          />
        </div>
        <button className='btn btn-primary w-full'>Create Event</button>
      </div>
    </div>
  );
};

export default CreateEvent;

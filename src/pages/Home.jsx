<<<<<<< HEAD
import React from 'react'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <>
    <SearchBar/>
    </>
  )
}
=======
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold mb-8 text-center'>Welcome to Event Manager</h1>
      <p className='text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto'>
        Discover and create amazing events in your area. Join our community of event enthusiasts
        today!
      </p>
      <div className='flex justify-center space-x-4'>
        <Link to='/events' className='btn btn-primary'>
          Explore Events
        </Link>
        <Link to='/register' className='btn btn-outline'>
          Sign Up
        </Link>
      </div>
    </div>
  );
};
>>>>>>> main

export default Home;

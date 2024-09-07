import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar bg-primary text-primary-content justify-between'>
      <h1 className=''>Events</h1>
      <ul className='list-none'>
        <li className='px-2'><Link to={"/"}></Link>Home</li>
        <li className='px-2'><Link to={"/signup"}></Link>Register</li>
        <li className='px-2'><Link to={"/signin"}></Link>Log In</li>
      </ul>
    </div>
  );
};

export default Header;
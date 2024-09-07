import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className='bg-base-100 text-base-content border-b border-base-300'>
      <div className='container mx-auto px-4'>
        <nav className='flex items-center justify-between py-4'>
          <Link to='/' className='text-2xl font-bold'>
          <a href='/'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 170' width='180' height='85'>
              <path
                d='M10 100 Q 100 10, 190 100 T 380 100'
                strokeWidth='20'
                fill='none'
                className='stroke-primary'
              />
              <text
                x='190'
                y='130'
                fontFamily='Brush Script MT, cursive'
                fontSize='100'
                textAnchor='middle'
                className='fill-accent'
              >
                eventify.me
              </text>
            </svg>
          </a>
          </Link>
          <ul className='flex items-center space-x-6'>
            <li>
              <Link to='/events' className='hover:text-primary transition-colors'>
                Events
              </Link>
            </li>
            <li>
              <Link to='/events/create' className='hover:text-primary transition-colors'>
                Create Event
              </Link>
            </li>
            <li>
              <Link to='/profile' className='hover:text-primary transition-colors'>
                Profile
              </Link>
            </li>
            <li>
              <Link to='/login' className='hover:text-primary transition-colors'>
                Login
              </Link>
            </li>
            <li>
              <Link to='/register' className='hover:text-primary transition-colors'>
                Register
              </Link>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

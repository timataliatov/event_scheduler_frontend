import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import UserDropdown from './UserDropdown';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className='bg-base-100 text-base-content border-b border-base-300 shadow-sm'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <nav className='flex items-center justify-between py-4'>
          <Link to='/' className='flex-shrink-0'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 170' width='160' height='75' className='transition-transform duration-300 ease-in-out transform hover:scale-105'>
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
          </Link>
          <ul className='flex items-center space-x-1 sm:space-x-2 md:space-x-4'>
            <li>
              <Link to='/events' className='btn btn-ghost btn-sm rounded-btn text-[15px]'>
                Events
              </Link>
            </li>
            <li>
              <Link to='/events/create' className='btn btn-ghost btn-sm rounded-btn text-[15px]'>
                Create Event
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <UserDropdown />
              </li>
            ) : (
              <>
                <li>
                  <Link to='/login' className='btn btn-ghost btn-sm rounded-btn'>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to='/register' className='btn btn-primary btn-sm rounded-btn'>
                    Register
                  </Link>
                </li>
              </>
            )}
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

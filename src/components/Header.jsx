import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import UserDropdown from './UserDropdown';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className='bg-base-100 text-base-content border-b border-base-300 shadow-sm'>
      <div className='container mx-auto px-4'>
        <nav className='flex items-center justify-between py-3'>
          <Link to='/' className='flex-shrink-0'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 380 170' width='140' height='62' className='transition-transform duration-300 ease-in-out transform hover:scale-105'>
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
                fontSize='90'
                textAnchor='middle'
                className='fill-accent'
              >
                eventify.me
              </text>
            </svg>
          </Link>
          <ul className='flex items-center space-x-1 sm:space-x-2 md:space-x-4'>
            <NavItem to='/events'>Events</NavItem>
            <NavItem to='/events/create'>Create Event</NavItem>
            {isAuthenticated ? (
              <li>
                <UserDropdown />
              </li>
            ) : (
              <>
                <NavItem to='/login'>Login</NavItem>
                <li>
                  <Link to='/register' className='btn btn-primary btn-sm rounded-btn text-sm'>
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

const NavItem = ({ to, children }) => (
  <li>
    <Link to={to} className='btn btn-ghost btn-sm rounded-btn text-sm'>
      {children}
    </Link>
  </li>
);

export default Header;

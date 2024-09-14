import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaCrown, FaCog, FaSignOutAlt } from 'react-icons/fa';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-content hover:bg-primary-focus transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        aria-label="User menu"
      >
        <FaUser className="text-lg" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-base-100 rounded-lg shadow-xl overflow-hidden z-50 border border-base-300 transition-all duration-300 ease-in-out transform origin-top-right">
          <div className="px-4 py-3 bg-base-200 border-b border-base-300">
            <div className="font-medium text-sm">{user.name || 'User'}</div>
            <div className="text-xs text-base-content/70 truncate">{user.email}</div>
          </div>
          <div className="py-1">
            <Link to="/get-pro" className="group block px-4 py-2 text-sm hover:bg-primary hover:text-primary-content transition-colors duration-200 flex items-center">
              <FaCrown className="mr-3 text-yellow-500 group-hover:text-primary-content" />
              <span>Get Pro</span>
              <span className="ml-auto text-xs bg-primary text-primary-content px-2 py-1 rounded-full group-hover:bg-primary-content group-hover:text-primary">Upgrade</span>
            </Link>
            <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-base-200 transition-colors duration-200 flex items-center" onClick={toggleDropdown}>
              <FaUser className="mr-3 text-base-content/70" />
              <span>Profile</span>
            </Link>
            <Link to="/settings" className="block px-4 py-2 text-sm hover:bg-base-200 transition-colors duration-200 flex items-center" onClick={toggleDropdown}>
              <FaCog className="mr-3 text-base-content/70" />
              <span>Settings</span>
            </Link>
          </div>
          <div className="border-t border-base-300 py-1">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-error hover:bg-base-200 transition-colors duration-200 flex items-center"
            >
              <FaSignOutAlt className="mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;

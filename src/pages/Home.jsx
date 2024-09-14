import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaCalendarAlt, FaUserPlus, FaSearch, FaPencilAlt, FaUsers } from 'react-icons/fa';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex-grow flex items-center justify-center bg-base-100">
      <div className="text-center px-4 py-16 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          Welcome to <span className="text-accent">eventify.me</span>
        </h1>
        <p className="text-base md:text-lg mb-10 text-base-content/80 max-w-2xl mx-auto leading-relaxed">
          Discover, create, and experience amazing events in your area. Join our vibrant community of event enthusiasts today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-16">
          <Link
            to="/events"
            className="btn btn-primary btn-md transition-all duration-300 ease-in-out hover:shadow-md w-full sm:w-auto"
          >
            <FaCalendarAlt className="mr-2" />
            Explore Events
          </Link>
          {!isAuthenticated && (
            <Link
              to="/register"
              className="btn btn-outline btn-md transition-all duration-300 ease-in-out hover:shadow-md w-full sm:w-auto"
            >
              <FaUserPlus className="mr-2" />
              Sign Up
            </Link>
          )}
        </div>
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-primary">Why Choose Eventify?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FaSearch}
              title="Discover Events"
              description="Find exciting events happening near you with our advanced search system."
            />
            <FeatureCard
              icon={FaPencilAlt}
              title="Create & Manage"
              description="Easily create and manage your own events with intuitive tools."
            />
            <FeatureCard
              icon={FaUsers}
              title="Connect"
              description="Network with like-minded event enthusiasts and grow your circle."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-base-200 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center group">
    <div className="bg-primary/10 text-primary p-3 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
      <Icon className="text-xl" />
    </div>
    <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
    <p className="text-base-content/70 text-center text-sm">{description}</p>
  </div>
);

export default Home;

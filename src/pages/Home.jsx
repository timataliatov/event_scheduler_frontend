import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaCalendarAlt, FaUserPlus, FaSearch, FaPencilAlt, FaUsers, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex-grow flex items-center justify-center bg-base-100">
      <div className="text-center px-4 py-20 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          Welcome to <span className="text-accent bg-accent bg-opacity-10 px-2 py-1 rounded">eventify.me</span>
        </h1>
        <p className="text-base md:text-lg mb-12 text-base-content/80 max-w-2xl mx-auto leading-relaxed">
          Discover, create, and experience amazing events in your area. Join our vibrant community of event enthusiasts today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
          <Link
            to="/events"
            className="btn btn-primary btn-md group transition-all duration-300 ease-in-out hover:shadow-lg w-full sm:w-auto"
          >
            <FaCalendarAlt className="mr-2" />
            Explore Events
            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          {!isAuthenticated && (
            <Link
              to="/register"
              className="btn btn-outline btn-md group transition-all duration-300 ease-in-out hover:shadow-lg w-full sm:w-auto"
            >
              <FaUserPlus className="mr-2" />
              Sign Up
              <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          )}
        </div>
        <div className="mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-primary">Why Choose Eventify?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
  <div className="bg-base-200 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-102 flex flex-col items-center group">
    <div className="bg-primary text-primary-content p-4 rounded-full mb-6 transition-transform duration-300 group-hover:scale-110">
      <Icon className="text-2xl" />
    </div>
    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
    <p className="text-base-content/70 text-center">{description}</p>
  </div>
);

export default Home;

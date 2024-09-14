import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaCalendar, FaEdit } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();

  // Demo user data (we'll use the email from the authenticated user)
  const userData = {
    name: user.name || 'User',
    email: user.email,
    location: 'New York, NY',
    joinDate: 'January 2022',
    eventsAttended: 15,
    eventsOrganized: 3,
    upcomingEvents: 2,
    interests: ['Music', 'Technology', 'Food & Drink', 'Networking'],
  };

  // Demo event history
  const eventHistory = [
    { name: 'Tech Conference 2023', date: '2023-06-15', role: 'Attendee' },
    { name: 'Summer Music Festival', date: '2023-07-22', role: 'Organizer' },
    { name: 'Startup Networking Mixer', date: '2023-08-05', role: 'Attendee' },
  ];

  return (
    <div className='flex-grow flex items-center justify-center py-12'>
      <div className='max-w-4xl w-full mx-auto px-4'>
        <div className='bg-base-200 rounded-box shadow-lg p-8'>
          <div className='flex flex-col md:flex-row items-center md:items-start mb-8'>
            <div className='w-32 h-32 bg-primary rounded-full flex items-center justify-center text-primary-content text-4xl font-bold mb-4 md:mb-0 md:mr-8'>
              {userData.name.charAt(0)}
            </div>
            <div className='flex-grow'>
              <div className='flex justify-between items-center mb-2'>
                <h2 className='text-3xl font-bold'>{userData.name}</h2>
                <button className='btn btn-primary btn-sm'>
                  <FaEdit className='mr-2' /> Edit Profile
                </button>
              </div>
              <div className='space-y-2'>
                <p className='flex items-center'><FaEnvelope className='mr-2 text-primary' /> {userData.email}</p>
                <p className='flex items-center'><FaMapMarkerAlt className='mr-2 text-primary' /> {userData.location}</p>
                <p className='flex items-center'><FaCalendar className='mr-2 text-primary' /> Joined {userData.joinDate}</p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            <div className='bg-base-100 p-4 rounded-box shadow'>
              <h3 className='text-xl font-semibold mb-2'>Events Attended</h3>
              <p className='text-3xl font-bold text-primary'>{userData.eventsAttended}</p>
            </div>
            <div className='bg-base-100 p-4 rounded-box shadow'>
              <h3 className='text-xl font-semibold mb-2'>Events Organized</h3>
              <p className='text-3xl font-bold text-primary'>{userData.eventsOrganized}</p>
            </div>
            <div className='bg-base-100 p-4 rounded-box shadow'>
              <h3 className='text-xl font-semibold mb-2'>Upcoming Events</h3>
              <p className='text-3xl font-bold text-primary'>{userData.upcomingEvents}</p>
            </div>
          </div>

          <div className='mb-8'>
            <h3 className='text-2xl font-semibold mb-4'>Interests</h3>
            <div className='flex flex-wrap gap-2'>
              {userData.interests.map((interest, index) => (
                <span key={index} className='badge badge-primary badge-lg'>{interest}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-4'>Recent Event History</h3>
            <div className='overflow-x-auto'>
              <table className='table w-full'>
                <thead>
                  <tr>
                    <th>Event Name</th>
                    <th>Date</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {eventHistory.map((event, index) => (
                    <tr key={index}>
                      <td>{event.name}</td>
                      <td>{event.date}</td>
                      <td>{event.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

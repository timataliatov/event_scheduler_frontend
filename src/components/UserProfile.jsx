import React, { useState, useEffect } from 'react';
import { getProfile } from '../services/api';

const UserProfile = () => {
  // State for profile data and error handling
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  // Effect to fetch profile data when comopnent mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Get profile data from API
        const response = await getProfile();
        setProfile(response.data);
      } catch (err) {
        // Set error message if profile fetch fails
        setError(err.message || 'Failed to load profile');
      }
    };

    fetchProfile();
  }, []);

  // Display error message if an error occurred
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  // Display loading indicator while profile data is being fetched
  if (!profile) {
    return <p>Loading profile...</p>;
  }

  // Render profile view
  return (
    <div className='max-w-md mx-auto mt-12'>
      <h2 className='text-3xl font-bold mb-6 text-center'>User Profile</h2>
      <div className='space-y-4'>
        <p><strong>Email:</strong> {profile.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;

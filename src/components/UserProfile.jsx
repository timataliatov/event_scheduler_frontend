import React from 'react';
import { User, Mail, Calendar } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className='max-w-md mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Your Profile</h2>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <div className='flex items-center mb-4'>
          <User className='mr-4' />
          <div>
            <p className='text-sm text-gray-600'>Name</p>
            <p className='font-medium'>User Name</p>
          </div>
        </div>
        <div className='flex items-center mb-4'>
          <Mail className='mr-4' />
          <div>
            <p className='text-sm text-gray-600'>Email</p>
            <p className='font-medium'>user@example.com</p>
          </div>
        </div>
        <div className='flex items-center'>
          <Calendar className='mr-4' />
          <div>
            <p className='text-sm text-gray-600'>Joined</p>
            <p className='font-medium'>01/01/2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

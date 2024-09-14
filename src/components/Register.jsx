import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../services/api';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(formData.email, formData.password);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className='flex-grow flex items-center justify-center py-16'>
      <div className='max-w-md w-full mx-auto px-6'>
        <div className='bg-base-200 shadow-xl rounded-lg p-8 sm:p-10'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-6 text-center'>Create an Account</h2>
          {error && <p className='text-error text-center mb-6'>{error}</p>}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium mb-2'>
                Email Address
              </label>
              <div className='relative'>
                <FaEnvelope className='absolute top-1/2 left-3 transform -translate-y-1/2 text-base-content/50' />
                <input
                  type='email'
                  id='email'
                  className='input input-bordered w-full pl-10'
                  placeholder='you@example.com'
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium mb-2'>
                Password
              </label>
              <div className='relative'>
                <FaLock className='absolute top-1/2 left-3 transform -translate-y-1/2 text-base-content/50' />
                <input
                  type='password'
                  id='password'
                  className='input input-bordered w-full pl-10'
                  placeholder='••••••••'
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <button type='submit' className='btn btn-primary w-full'>
                Sign Up
              </button>
            </div>
          </form>
          <div className='mt-6 text-center'>
            <p className='text-sm'>
              Already have an account?{' '}
              <Link to='/login' className='text-primary hover:underline'>
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

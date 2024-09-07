import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/api';

const Register = () => {
  // State for form data and error handling
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Updaet state when input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Send registration request to API
      await register(formData.name, formData.email, formData.password);
      // Navigate to login page after successful registration
      navigate('/login');
    } catch (err) {
      // Set error message if registration fails
      setError(err.response?.data?.message || 'Registratino failed');
    }
  };

  // Render registration form
  return (
    <div className='max-w-md mx-auto mt-12'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Register</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Name input field */}
        <div>
          <label htmlFor='name' className='block mb-1 font-medium'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='input input-bordered w-full'
            onChange={handleChange}
            required
          />
        </div>
        {/* Email input field */}
        <div>
          <label htmlFor='email' className='block mb-1 font-medium'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='input input-bordered w-full'
            onChange={handleChange}
            required
          />
        </div>
        {/* Password input field */}
        <div>
          <label htmlFor='password' className='block mb-1 font-medium'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='input input-bordered w-full'
            onChange={handleChange}
            required
          />
        </div>
        {/* Submit button */}
        <button type="submit" className='btn btn-primary w-full'>Register</button>
      </form>
    </div>
  );
};

export default Register;

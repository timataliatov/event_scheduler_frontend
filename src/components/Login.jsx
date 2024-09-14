import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin } from '../services/api';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  // State for form data and error handling
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  // Update state when input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Send login request to API
      const response = await apiLogin(formData.email, formData.password);
      // Store token in localStorage
      login(response.data.token);
      // Navigate to home page after successful login
      navigate('/');
    } catch (err) {
      // Set error message if login fails
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  // Render login form
  return (
    <div className='max-w-md mx-auto mt-12'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className='space-y-4'>
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
        <button type="submit" className='btn btn-primary w-full'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

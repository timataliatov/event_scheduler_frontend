import React from 'react';

const Login = () => {
  return (
    <div className='max-w-md mx-auto mt-12'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Login</h2>
      <form className='space-y-4'>
        <div>
          <label htmlFor='email' className='block mb-1 font-medium'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='input input-bordered w-full'
          />
        </div>
        <div>
          <label htmlFor='password' className='block mb-1 font-medium'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='input input-bordered w-full'
          />
        </div>
        <button className='btn btn-primary w-full'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

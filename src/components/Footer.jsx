import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className='bg-base-200 text-base-content'>
      <div className='container mx-auto px-4 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <Link to='/' className='text-2xl font-bold text-primary hover:text-primary-focus transition-colors duration-200'>eventify.me</Link>
            <p className='text-sm mt-2 text-base-content/80'>Create and manage unforgettable events with ease. Join our community of event organizers and attendees.</p>
          </div>
          <div>
            <h3 className='font-semibold mb-3 text-base-content'>Quick Links</h3>
            <ul className='text-sm space-y-2'>
              <li><Link to='/about' className='hover:text-primary transition-colors duration-200'>About Us</Link></li>
              <li><Link to='/contact' className='hover:text-primary transition-colors duration-200'>Contact</Link></li>
              <li><Link to='/privacy' className='hover:text-primary transition-colors duration-200'>Privacy Policy</Link></li>
              <li><Link to='/terms' className='hover:text-primary transition-colors duration-200'>Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-3 text-base-content'>Stay Connected</h3>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-2'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='input input-bordered input-sm w-full max-w-xs'
                required
              />
              <button type='submit' className='btn btn-primary btn-sm max-w-xs hover:btn-primary-focus transition-colors duration-200'>Subscribe to Newsletter</button>
            </form>
          </div>
        </div>
        <div className='mt-10 pt-6 border-t border-base-300 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-sm text-base-content/70'>&copy; {new Date().getFullYear()} Eventify.me. All rights reserved.</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href='#' aria-label="Facebook" className='text-base-content/70 hover:text-primary transition-colors duration-200'><FaFacebookF /></a>
            <a href='#' aria-label="Twitter" className='text-base-content/70 hover:text-primary transition-colors duration-200'><FaTwitter /></a>
            <a href='#' aria-label="Instagram" className='text-base-content/70 hover:text-primary transition-colors duration-200'><FaInstagram /></a>
            <a href='#' aria-label="LinkedIn" className='text-base-content/70 hover:text-primary transition-colors duration-200'><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

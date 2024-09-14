import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-base-100 text-base-content'>
      <Header />
      <main className='flex-grow flex flex-col'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

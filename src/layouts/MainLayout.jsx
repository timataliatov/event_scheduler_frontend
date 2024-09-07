import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
        <Header />
          <main className="container mx-auto">
            <Outlet />
          </main>
          <Footer />
        </>
      );
    }
export default MainLayout
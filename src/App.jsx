import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import EventDetail from './components/EventDetail';
import CreateEvent from './components/CreateEvent';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import Events from './pages/Events';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/:id' element={<EventDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path='/events/create' element={<CreateEvent />} />
            <Route path='/profile' element={<UserProfile />} />
          </Route>
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;

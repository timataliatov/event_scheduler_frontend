import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import EventDetail from './components/EventDetail';
import Register from './components/Register';
import Login from './components/Login';
import CreateEvent from './components/CreateEvent';
import UserProfile from './components/UserProfile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/event/:id" element={<EventDetail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/createevent" element={<CreateEvent />} />
    </Route>,
  ),
);

const App = () => <RouterProvider router={router} />;


export default App

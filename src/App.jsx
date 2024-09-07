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
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import CreateEvent from './components/CreateEvent';
import UserProfile from './components/UserProfile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/event/:id" element={<EventDetail />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/createevent" element={<CreateEvent />} />
    </Route>,
  ),
);

const App = () => <RouterProvider router={router} />;
 

export default App
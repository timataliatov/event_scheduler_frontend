import axios from 'axios';

const API_URL = import.meta.env.VITE_API_PATH

const apiService = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const login = (email, password) => apiService.post('/auth/login', { email, password });
export const register = (name, email, password) => apiService.post('/users', { name, email, password });
export const getProfile = () => apiService.get('/auth/profile');

export const getEvents = (page = 1, limit = 10) => apiService.get(`/events?page=${page}&limit=${limit}`);
export const getEventById = (id) => apiService.get(`/events/${id}`);
export const createEvent = (eventData) => apiService.post('/events', eventData);
export const updateEvent = (id, eventData) => apiService.put(`/events/${id}`, eventData);
export const deleteEvent = (id) => apiService.delete(`/events/${id}`);
export const getUpcomingEvents = () => apiService.get('/events/upcoming');

export default apiService;

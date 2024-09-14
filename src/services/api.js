import axios from 'axios';

const API_URL = import.meta.env.VITE_API_PATH || 'http://localhost:3001';

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
  (error) => Promise.reject(error),
);

export const login = (email, password) => apiService.post('/auth/login', { email, password });
export const register = (email, password) => apiService.post('/users', { email, password });
export const getProfile = () => apiService.get('/auth/profile');

export const getEvents = async (page = 1, limit = 100) => {
  try {
    const response = await apiService.get(`/events?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};
export const getEventById = (id) => apiService.get(`/events/${id}`);
export const createEvent = async (eventData) => {
  try {
    const response = await apiService.post('/events', eventData);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};
export const updateEvent = (id, eventData) => apiService.put(`/events/${id}`, eventData);
export const deleteEvent = (id) => apiService.delete(`/events/${id}`);
export const getUpcomingEvents = () => apiService.get('/events/upcoming');

export default apiService;

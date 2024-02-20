import { api } from './api';
import { User } from '../types';

export const auth = {
  login: async (username: string, password: string): Promise<User> => {
    const response = await api.post('/login', { username, password });
    return response.data;
  },
  signup: async (username: string, password: string): Promise<User> => {
    const response = await api.post('/signup', { username, password });
    return response.data;
  },
  logout: async (): Promise<void> => {
    await api.post('/logout');
  },
  getCurrentUser: async (): Promise<User> => {
    const response = await api.get('/me');
    return response.data;
  },
};
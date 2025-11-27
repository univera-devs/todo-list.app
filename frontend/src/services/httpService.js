import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const http = {
  get: API.get,
  post: API.post,
  delete: API.delete,
  put: API.put,
  patch: API.patch,
};

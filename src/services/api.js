import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (data) => api.post('/Auth/register', data),
  login: (data) => api.post('/Auth/login', data),
};

// Artifacts API
export const artifactsAPI = {
  upload: (formData) => {
    const token = localStorage.getItem('token');
    return axios.post(`${API_BASE_URL}/Artifacts/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
  },
  verify: (fileHash) => api.get(`/Artifacts/verify/${fileHash}`),
  download: (id) => api.get(`/Artifacts/download/${id}`, { responseType: 'blob' }),
};

export default api;

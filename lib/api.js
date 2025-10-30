import axios from 'axios';

// ✅ ตรวจสอบให้แน่ใจว่าไม่มี '/' ซ้ำท้าย URL
const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  'https://flask-todo-app-1efy.onrender.com/api'
).replace(/\/$/, '');

console.log('🌐 API_URL Loaded:', API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// ✅ Interceptor สำหรับ debug error
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const msg = error.response
      ? `${error.response.status} ${error.response.statusText}`
      : error.message;
    console.error('❌ API Error:', msg);
    return Promise.reject(error);
  }
);

// ✅ รวม API function ไว้ที่เดียว
export const todoAPI = {
  getTodos: async () => (await api.get('/todos')).data,
  createTodo: async (todo) => (await api.post('/todos', todo)).data,
  updateTodo: async (id, data) => (await api.put(`/todos/${id}`, data)).data,
  deleteTodo: async (id) => (await api.delete(`/todos/${id}`)).data,
  healthCheck: async () => (await api.get('/health')).data,
};

export default api;

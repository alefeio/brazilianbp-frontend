import axios from 'axios';

const api = axios.create({
  baseURL: 'http://134.122.15.198:3333',
});

export default api;

import axios from 'axios';

// emulador android -> 10.0.2.2:[port]
// genymotion android -> 10.0.3.2:[port]

const api = axios.create({
  baseURL: 'http://192.168.1.2:3000',
});

export default api;
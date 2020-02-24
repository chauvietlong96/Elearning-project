import axios from 'axios';

const api = axios.create({
    baseURL: 'http://elearning0706.cybersoft.edu.vn/api',
});

export default api;
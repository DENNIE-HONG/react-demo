import axios from 'axios';
axios.defaults.timeout = 100000;
axios.defaults.baseURL = '';
axios.defaults.headers.Accept = 'application/json';
axios.defaults.headers['Accept-Encoding'] = 'gzip';
axios.interceptors.request.use((config) => config, (err) => Promise.reject(err));
axios.interceptors.response.use((response) => response, (error) => Promise.reject(error));
export default axios;

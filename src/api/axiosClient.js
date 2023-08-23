import axios from 'axios';
import { apiConfig } from './apiConfig';

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl, // Replace with your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need, such as authorization headers
  },
});

export default axiosClient;

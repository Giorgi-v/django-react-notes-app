// Import the axios library for making HTTP requests
import axios from 'axios'

// Import the key name used to store the access token in localStorage
import { ACCESS_TOKEN } from './constants'

// Create a preconfigured axios instance with the base API URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL // Reads API base URL from .env
})

// Add a request interceptor to include the JWT token in every request if available
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem(ACCESS_TOKEN)

    // If the token exists, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}` 
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Export the configured axios instance for use in the app
export default api
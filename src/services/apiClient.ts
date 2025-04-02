import axios from 'axios'
import useAuth from '@/composables/useAuth'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

let isRefreshing = false
let subscribers: ((token: string) => void)[] = []

const onRefreshed = (token: string) => {
  subscribers.forEach((callback) => callback(token))
  subscribers = []
}

apiClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { refreshAccessToken, logout, token } = useAuth()
    const originalRequest = error.config

    if (error.response && error.response.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true
        try {
          await refreshAccessToken()
          isRefreshing = false

          if (token.value) {
            onRefreshed(token.value)
            originalRequest.headers['Authorization'] = `Bearer ${token.value}`
            return apiClient(originalRequest)
          } else {
            logout()
            return Promise.reject('No token available')
          }
        } catch (refreshError) {
          logout()
          return Promise.reject(refreshError)
        }
      }

      return new Promise((resolve) => {
        subscribers.push((newToken) => {
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`
          resolve(apiClient(originalRequest))
        })
      })
    }

    return Promise.reject(error)
  },
)

export default apiClient

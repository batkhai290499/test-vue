import axios from 'axios'
import useAuth from '@/composables/useAuth'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
apiClient.interceptors.request.use(
  async (config) => {
    const { token, checkTokenExpiry } = useAuth()

    if (token.value) {
      await checkTokenExpiry()
      if (token.value) {
        config.headers.Authorization = `Bearer ${token.value}`
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const { refreshAccessToken, logout, token } = useAuth()

    if (error.response && error.response.status === 401) {
      try {
        await refreshAccessToken()

        if (token.value) {
          error.config.headers['Authorization'] = `Bearer ${token.value}`
          return axios(error.config)
        } else {
          logout()
        }
      } catch (refreshError) {
        logout()
      }
    }

    return Promise.reject(error)
  },
)

export default apiClient

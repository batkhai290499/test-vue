import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { authService } from '@/services/authServices'

export default function useAuth() {
  const router = useRouter()
  const username = ref('')
  const password = ref('')
  const isLoading = ref(false)
  const errorMessage = ref('')
  const token = ref(sessionStorage.getItem('token') || '')
  const refreshToken = ref(sessionStorage.getItem('refreshToken') || '')
  const expiresInMins = ref(parseInt(sessionStorage.getItem('expiresInMins') || '30', 10))

  const login = async () => {
    isLoading.value = true
    errorMessage.value = ''

    try {
      const data = await authService.login(username.value, password.value)

      sessionStorage.setItem('token', data.accessToken)
      sessionStorage.setItem('refreshToken', data.refreshToken)
      sessionStorage.setItem('expiresInMins', expiresInMins.value.toString())

      token.value = data.accessToken
      refreshToken.value = data.refreshToken
      expiresInMins.value = expiresInMins.value

      console.log('Login successful:', data)
      router.push('/dashboard')
    } catch (error) {
      errorMessage.value = 'Login failed. Please check your credentials.'
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  const refreshAccessToken = async () => {
    if (!refreshToken.value) {
      console.error('No refresh token available.')
      return logout()
    }
    try {
      const response = await authService.refreshAccessToken(refreshToken.value, expiresInMins.value)
      console.log('calling refreshAccessToken:', response)

      if (response?.token) {
        const expiryTimestamp = Date.now() + expiresInMins.value * 60 * 1000
        sessionStorage.setItem('token', response.token)
        sessionStorage.setItem('expiresAt', expiryTimestamp.toString())

        return {
          token: response.token,
          expiresAt: expiryTimestamp,
        }
      }
    } catch (error) {
      logout()
      console.error('Error refreshing token:', error)
    }
  }

  const logout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('refreshToken')
    sessionStorage.removeItem('expiresInMins')
    token.value = ''
    refreshToken.value = ''
    expiresInMins.value = 30
    router.push('/')
  }

  const checkTokenExpiry = () => {
    const currentTime = Date.now()
    const expiryTime = sessionStorage.getItem('expiresAt') || '0'

    if (currentTime > parseInt(expiryTime, 10)) {
      refreshAccessToken()
    }
  }

  return {
    username,
    password,
    login,
    logout,
    isLoading,
    errorMessage,
    token,
    checkTokenExpiry,
    refreshAccessToken,
  }
}

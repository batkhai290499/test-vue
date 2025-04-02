import { ref } from 'vue'
import { authService } from '@/services/authServices'

export default function useAuth() {
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

      sessionStorage.setItem('token', data.token)
      sessionStorage.setItem('refreshToken', data.refreshToken)
      sessionStorage.setItem('expiresInMins', expiresInMins.value.toString())

      token.value = data.token
      refreshToken.value = data.refreshToken
      expiresInMins.value = expiresInMins.value

      console.log('Login successful:', data)
    } catch (error) {
      errorMessage.value = 'Login failed. Please check your credentials.'
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  const refreshAccessToken = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          refreshToken: refreshToken.value,
          expiresInMins: expiresInMins.value,
        }),
        credentials: 'include',
      })

      const data = await response.json()
      if (data.token) {
        sessionStorage.setItem('token', data.token)
        token.value = data.token
        console.log('Token refreshed:', data)
      }
    } catch (error) {
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

import apiClient from './apiClient'

export const authService = {
  login: async (username: string, password: string) => {
    const response = await apiClient.post('/auth/login', { username, password, expiresInMins: 30 })
    return response.data
  },
  refreshAccessToken: async (refreshAccessToken: string, expiresInMins: number = 30) => {
    try {
      const response = await apiClient.post('/auth/refresh', {
        refreshToken: refreshAccessToken,
        expiresInMins,
      })
      // console.log(response.data)

      if (response.data.accessToken) {
        const expiryTimestamp = Date.now() + expiresInMins * 60 * 1000
        sessionStorage.setItem('token', response.data.accessToken)
        sessionStorage.setItem('expiresAt', expiryTimestamp.toString())
        sessionStorage.setItem('refreshToken', response.data.refreshToken)
        return {
          token: response.data.accessToken,
          expiresAt: expiryTimestamp,
        }
      }
    } catch (error) {
      console.error('Error refreshing token:', error)
    }
    return null
  },
  getInfoUser: async () => {
    const response = await apiClient.get('/auth/me')
    return response.data
  },
}

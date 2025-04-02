import apiClient from './apiClient'

export const authService = {
  login: async (username: string, password: string) => {
    const response = await apiClient.post('/auth/login', { username, password, expiresInMins: 30 })
    return response.data
  },
}

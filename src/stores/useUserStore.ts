import { authService } from '@/services/authServices'
import { defineStore } from 'pinia'

interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null as User | null,
  }),
  actions: {
    async fetchUserInfo() {
      try {
        const res = await authService.getInfoUser()
        this.userInfo = res
      } catch (error) {
        console.error('Error fetching user info:', error)
      }
    },
  },
})

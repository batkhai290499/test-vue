import { defineStore } from 'pinia'

interface User {
  id: number
  name: string
}
export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchUsers(searchQuery = '') {
      this.loading = true
      this.error = null

      try {
        const response = await fetch(`https://api.example.com/users?search=${searchQuery}`)
        const data = await response.json()
        this.users = data
      } catch (err) {
        this.error = 'Failed to fetch users'
      } finally {
        this.loading = false
      }
    },
  },
})

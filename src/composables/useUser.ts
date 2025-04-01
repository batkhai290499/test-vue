// useUsers.ts - Composable để gọi API và lưu trữ kết quả vào Pinia
import { useUserStore } from '@/stores/user'
import { ref, watch } from 'vue'

export function useUsers() {
  const userStore = useUserStore()
  const query = ref<string>('') // Định nghĩa query là kiểu string

  // Watch để tự động gọi API khi query thay đổi
  watch(query, (newQuery) => {
    userStore.fetchUsers(newQuery)
  })

  // Đảm bảo rằng các giá trị trả về có kiểu an toàn
  return {
    users: userStore.users, // Mảng User
    loading: userStore.loading, // Boolean
    error: userStore.error, // String hoặc null
    query, // Ref với kiểu string
  }
}

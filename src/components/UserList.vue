<script lang="ts" setup>
import { useUsers } from '@/composables/useUser.ts'

const { users, loading, error, query } = useUsers()
</script>

<template>
  <div>
    <input v-model="query" type="text" placeholder="Search users..." class="search-input" />

    <p v-if="loading">Loading...</p>
    <p v-if="error" class="error">{{ error }}</p>

    <ul v-if="!loading && !error">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.search-input {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 14px;
}

.error {
  color: red;
}
</style>

<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <Card class="w-full max-w-md p-6 shadow-md">
      <RouterView />
    </Card>
  </div>
</template>

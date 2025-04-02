<script setup lang="ts">
import { computed } from 'vue'
import { useBreadcrumb } from './useBreadcrumb'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const breadcrumbs = computed(() => useBreadcrumb())
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem v-for="(route, index) in breadcrumbs" :key="index">
        <BreadcrumbLink v-if="index < breadcrumbs.length - 1" :href="route.path">
          {{ route.breadcrumb }}
        </BreadcrumbLink>
        <BreadcrumbPage v-else>
          {{ route.breadcrumb }}
        </BreadcrumbPage>
        <BreadcrumbSeparator v-if="index < breadcrumbs.length - 1" />
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>

<style scoped lang="scss">
@use './Breadcrumb.module.scss' as styles;
</style>

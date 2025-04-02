import { useRoute } from 'vue-router'

export function useBreadcrumb() {
  const route = useRoute()

  return route.matched.map((route) => ({
    breadcrumb: route.meta.breadcrumb || route.name,
  }))
}

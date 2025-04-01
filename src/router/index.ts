import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ComponentA from '@/components/ComponentA.vue'
// import ComponentB from '@/components/ComponentB.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    // { path: '/user/:id', component: ComponentA },
    // {
    //   path: '/dashboard',
    //   component: ComponentA,
    //   children: [
    //     { path: 'profile', component: ComponentB },
    //     { path: 'settings', component: ComponentB },
    //   ],
    // },
  ],
})

export default router

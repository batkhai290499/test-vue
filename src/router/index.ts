import { createRouter, createWebHistory } from 'vue-router'
import Signin from '@/views/SignIn.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import AppLayout from '@/layouts/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AuthLayout,
      children: [
        {
          path: '',
          component: Signin,
          meta: { breadcrumb: 'Sign In' }, // Đặt breadcrumb cho route này
        },
      ],
    },
    {
      path: '/dashboard',
      component: AppLayout,
      meta: { breadcrumb: 'Dashboard' },
      // children: [
      //   {
      //     path: 'profile',
      //     component: () => import('@/views/Profile.vue'),
      //     meta: { breadcrumb: 'Profile' },
      //   },
      // ],
    },
  ],
})

export default router

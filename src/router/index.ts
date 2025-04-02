import { createRouter, createWebHistory } from 'vue-router'
import Signin from '@/views/SignIn.vue'
import ListProduct from '@/views/ListProduct.vue'
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
        },
        // {
        //   path: 'register',
        //   component: RegisterComponent,
        //   meta: { breadcrumb: 'Register' },
        // },
      ],
    },
    {
      path: '/dashboard',
      component: AppLayout,
      meta: { breadcrumb: 'Dashboard' },
      beforeEnter: (to, from, next) => {
        const isAuthenticated = !!sessionStorage.getItem('token')
        if (!isAuthenticated) {
          next('/')
        } else {
          next()
        }
      },
      children: [
        {
          path: '',
          meta: { breadcrumb: 'List Product' },
          component: ListProduct,
        },
        // {
        //   path: 'register',
        //   component: RegisterComponent,
        //   meta: { breadcrumb: 'Register' },
        // },
      ],
    },
  ],
})

export default router

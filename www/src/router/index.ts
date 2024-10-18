import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/HomePage'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/HomePage'
      },
      {
        path: 'HomePage',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'Product',
        component: () => import('@/views/Product.vue')
      },
      {
        path: 'ShoppingCart',
        component: () => import('@/views/ShoppingCart.vue')
      },
      {
        path: 'UserCenter',
        component: () => import('@/views/UserCenter.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

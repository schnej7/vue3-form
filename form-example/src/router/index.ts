import { createRouter, createWebHistory } from 'vue-router'
import FormData from '../constants/FormData'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...FormData.getRoutes(),
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },*/
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/Upload.vue'),
    },

    {
      path: '/recipe',
      name: 'recipe',
      component: () => import('../views/Recipe.vue'),
    },

    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test.vue'),
    },
  ],
})

export default router
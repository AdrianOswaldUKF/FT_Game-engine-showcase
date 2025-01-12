import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'HomeView',
      component: () => import('@/views/HomeView.vue'),
    },

    {
      path: '/engines/:slug',
      name: 'EngineView',
      component: () => import('@/views/EngineView.vue'),
      props: true
    },

    {
      path: '/contact',
      name: 'ContactView',
      component: () => import('@/views/ContactView.vue'),
      props: true
    }

  ],
})

export default router

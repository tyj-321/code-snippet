import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/customPoint',
    name: 'CustomPoint',
    component: () => import('../views/CustomPoint.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
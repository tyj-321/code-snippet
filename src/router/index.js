import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/customPoint',
    name: 'CustomPoint',
    component: () => import('../views/CustomPoint.vue'),
  },
  {
    path: '/autoScroll',
    name: 'AutoScroll',
    component: () => import('../views/AutoScroll/AutoScroll.vue'),
  },
  {
    path: '/numDance',
    name: 'NumDance',
    component: () => import('../views/NumDance.vue'),
  },
  {
    path: '/borderLight',
    name: 'borderLight',
    component: () => import('../views/BorderLight.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

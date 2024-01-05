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
    name: 'BorderLight',
    component: () => import('../views/BorderLight.vue'),
  },
  {
    path: '/uplift',
    name: 'Uplift',
    component: () => import('../views/Uplift.vue'),
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: () => import('../views/ShoppingCart.vue'),
  },
  {
    path: '/numToChinese',
    name: 'NumToChinese',
    component: () => import('../views/NumToChinese.vue'),
  },
  {
    path: '/fusion',
    name: 'Fusion',
    component: () => import('../views/Fusion.vue'),
  },
  {
    path: '/flipClock',
    name: 'FlipClock',
    component: () => import('../views/FlipClock.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

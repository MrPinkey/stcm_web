import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: '/',
    component: () => import('../layout'),
    redirect: '/once',
    children: [
      {
        path: 'once',
        name: 'once',
        component: () => import('@/views/once/index.vue')
      },
      {
        path: 'more',
        name: 'more',
        component: () => import('@/views/more/index.vue')
      },
      {
        path: 'wishing',
        name: 'wishing',
        component: () => import('@/views/wishing/index.vue')
      },
      {
        path: 'votive',
        name: 'votive',
        component: () => import('@/views/votive/index.vue')
      },
      {
        path: 'domestic',
        name: 'domestic',
        component: () => import('@/views/domestic/index.vue')
      },
      {
        path: 'foreign',
        name: 'foreign',
        component: () => import('@/views/foreign/index.vue')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/views/rights/index.vue')
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/roles/index.vue')
      },
      {
        path: 'left',
        name: 'left',
        component: () => import('@/views/left/index.vue')
      },
      {
        path: 'right',
        name: 'right',
        component: () => import('@/views/right/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

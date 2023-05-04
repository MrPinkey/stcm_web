import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "chat" */ '../views/ChatRoom.vue')
  },
  {
    path: '/member',
    name: 'member',
    component: () => import(/* webpackChunkName: "chat" */ '../views/MembershipService.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

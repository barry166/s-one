import { createRouter, createWebHistory } from 'vue-router'
import Container from '../components/container/index.vue'

const routes = [
  {
    path: '/',
    component: Container,
    redirect: '/home',
    children: [{ path: 'home', component: () => import('../views/home/index.vue') }]
  },
  { path: '/detail/:id', component: () => import('../views/detail/index.vue') },
  { path: '/login', component: () => import('../views/login/index.vue') },
  { path: '/editor/:id', component: () => import('../views/editor/index.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

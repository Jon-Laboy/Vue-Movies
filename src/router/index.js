import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/action',
    name: 'Action',
    component: () => import('../views/Action')
  },
  {
    path: '/comedy',
    name: 'Comedy',
    component: () => import('../views/Comedy')
  },
  {
    path: '/horror',
    name: 'Horror',
    component: () => import('../views/Horror')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

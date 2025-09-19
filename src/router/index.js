import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSignInView from '@/views/signInwithEmailAndPassword.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path:'/FireLogin',
    name:'FireLogin',
    component: FirebaseSignInView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
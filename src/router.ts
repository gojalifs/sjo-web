import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// We use App.vue as the Home page content and mount a minimal Root.vue with <RouterView />.
// This way we avoid moving the existing landing page code.
import Home from './App.vue'

const Products = () => import('./pages/Products.vue')

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/products', name: 'products', component: Products },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top on route change
    return { top: 0 }
  }
})

export default router

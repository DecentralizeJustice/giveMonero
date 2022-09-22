import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/page1', component: Home },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router

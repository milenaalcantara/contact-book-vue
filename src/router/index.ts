import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ContactListView from '@/views/ContactListView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'contactList',
    component: ContactListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

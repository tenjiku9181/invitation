import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

import Home from '@/views/Home.vue'
import Guide from '@/views/Guide.vue'
import Story from '@/views/Story.vue'
import Rsvp from '@/views/Rsvp.vue'
import Expectation from '@/views/Expectation.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', name: 'home', component: Home }, // default
        { path: 'guide', name: 'access_guide', component: Guide },
        { path: 'story', name: 'our_story', component: Story },
        { path: 'rsvp', name: 'response', component: Rsvp },
        { path: 'indian-wedding', name: 'indian_wedding', component: Expectation }
      ]
    }
  ]
})

export default router

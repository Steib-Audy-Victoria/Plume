import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideView from '../views/GuideView.vue'
import AproposView from '../views/AproposView.vue'
import MessagesView from '../views/MessagesView.vue'
import ParametresView from '../views/ParametresView.vue'
import FeedView from '../views/FeedView.vue'
import NousSoutenirView from '../views/NousSoutenirView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/messages',
      name: 'messages',
      component: MessagesView
    },
    {
      path: '/parametres',
      name: 'parametres',
      component: ParametresView
    },
    {
      path: '/apropos',
      name: 'apropos',
      component: AproposView
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView
    },
    {
      path: '/noussoutenir',
      name: 'noussoutenir',
      component: NousSoutenirView
    },
    { path: '/Guide', name: 'GuideView', component: GuideView }
  ]
})

export default router

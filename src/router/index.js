import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideView from '../views/GuideView.vue'
import AproposView from '../views/AproposView.vue'
import MessagesView from '../views/MessagesView.vue'
import ParametresView from '../views/ParametresView.vue'
import FeedView from '../views/FeedView.vue'
import NousSoutenirView from '../views/NousSoutenirView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import NouvelleCommandeView from '../views/NouvelleCommandeView.vue'
import ProfilView from '../views/ProfilView.vue'
import RechercheArtisteView from '../views/RechercheArtisteView.vue'
import ProfilPaiementView from '../views/ProfilPaiementView.vue'
import ProfilEditView from '../views/ProfilEditView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import Notification from '../components/Notification.vue'
import Securite from '../components/Securite.vue'
import Aide from '../components/Aide.vue'
import UpdateCommandeView from '../views/UpdateCommandeView.vue'
import Page404 from '../views/Page404.vue'





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
    {
      path: '/mentionslegales',
      name: 'mentionslegales',
      component: MentionsLegalesView
    },
    {
      path: '/nouvellecommande',
      name: 'nouvellecommande',
      component: NouvelleCommandeView
    },
    {
      path: '/profil',
      name: 'profil',
      component: ProfilView
    },
    {
      path: '/rechercheartiste',
      name: 'rechercheartiste',
      component: RechercheArtisteView
    },
    {
      path: '/profilpaiement',
      name: 'profilpaiement',
      component: ProfilPaiementView
    },
    {
      path: '/profiledit',
      name: 'profiledit',
      component: ProfilEditView
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: ConnexionView
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: InscriptionView
    },
    { path: '/Guide', name: 'GuideView', component: GuideView },

    { path: '/Notification', name: 'Notification', component: Notification },
    { path: '/Securite', name: 'Securite', component: Securite },
    { path: '/Aide', name: 'Aide', component: Aide },
    {
      path: '/updateCommande/:id',
      name: 'updateCommande',
      component: UpdateCommandeView
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'page404',
      component: Page404
    },


  ]
})

export default router

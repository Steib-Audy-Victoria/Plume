import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')


// heroicons

// import Vue from 'vue'
// import HeroIcon from 'vue-heroicons'
// import { archive, arrowDown } from 'vue-heroicons/src/icons'

// HeroIcon.add([archive, arrowDown])
// Vue.use(HeroIcon)
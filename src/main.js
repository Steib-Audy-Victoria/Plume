import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7ugTOvOkVKclAfwKpDD1BIrDI7mt0jaE",
    authDomain: "plume-3e278.firebaseapp.com",
    projectId: "plume-3e278",
    storageBucket: "plume-3e278.appspot.com",
    messagingSenderId: "590268168734",
    appId: "1:590268168734:web:e97da53778d2ab7324cc0f",
    measurementId: "G-TJPCWYFJPN"
};

// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


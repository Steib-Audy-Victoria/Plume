<template>
  <main>
    <div class="pt-16 bg-[url('/img/Fond.webp')] bg-cover">
      <h1 class="font-praise text-titre text-white text-center">Plume</h1>
      <div class="flex flex-col place-items-center my-10">
        <BoutonConnexion
          MsgBtn="Connexion avec Google"
          image="/img/Google.png"
        ></BoutonConnexion>
        <BoutonConnexion
          MsgBtn="Connexion avec Apple"
          image="/img/Apple.png"
        ></BoutonConnexion>
        <BoutonConnexion
          MsgBtn="Connexion avec Facebook"
          image="/img/Facebook.png"
        ></BoutonConnexion>
      </div>
      <div class="flex justify-center items-center">
        <hr class="my-1 pb-2 border-3 border-white w-1/4" />
        <p class="text-white font-baloo text-xl px-2">OU</p>
        <hr class="my-1 pb-2 border-3 border-white w-1/4" />
      </div>
      <form @submit.prevent="onCnx">
        <div class="grid grid-cols-3 mt-2">
          <div class="col-start-2">
            <div>
              <p class="text-white font-baloo text-lg px-2">EMAIL</p>
              <div
                class="bg-gradient-to-r to-Orange from-Rouge rounded-lg p-0.5"
              >
                <input
                  class="w-full rounded-lg placeholder:pl-2"
                  type="email"
                  placeholder="Adresse mail"
                  v-model="user.email"
                  required
                />
              </div>
            </div>
            <div class="">
              <p class="text-white font-baloo text-lg px-2">MOT DE PASSE</p>
              <div
                class="
                  bg-gradient-to-r
                  to-Orange
                  from-Rouge
                  rounded-lg
                  p-0.5
                  flex
                "
              >
                <input
                  class="w-full rounded-lg placeholder:pl-2"
                  placeholder="Mot de passe"
                  :type="type"
                  v-model="user.password"
                  required
                />
                <button class="w-6" @click.prevent="affiche()">
                  <EyeIcon></EyeIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="py-5">
          <div class="flex justify-center">
            <BtnConIns type="submit" MsgBtn="Se connecter"></BtnConIns>
          </div>
          <div role="alert">{{ message }}</div>
          <div class="flex justify-center items-center m-2">
            <hr class="my-1 pb-2 border-3 border-white w-1/4" />
            <p class="text-white font-baloo text-xl px-2">OU</p>
            <hr class="my-1 pb-2 border-3 border-white w-1/4" />
          </div>
          <div class="flex justify-center">
            <RouterLink to="/Inscription"
              ><BtnConIns MsgBtn="S'inscrire"></BtnConIns
            ></RouterLink>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script >
import BoutonConnexion from "../components/BoutonConnexion.vue";
import BtnConIns from "../components/BtnConIns.vue";
import { EyeIcon } from "@heroicons/vue/outline";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import { emitter } from "../main.js";

export default {
  name: "Connexion",
  components: {
    BoutonConnexion,
    BtnConIns,
    EyeIcon,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      message: null,
      view: false,
      type: "password",
      imageData: null,
    };
  },
  mounted() {
    this.message = "User non connecté";
  },
  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          emitter.emit("connectUser", { user: this.user });
          //console.log("user", this.user);
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("Erreur de connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    //afficher / masquer password
    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>
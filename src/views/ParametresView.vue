<template>
  <main>
    <div class="py-16">
      <div class="font-baloo pl-12">
        <button type="button" class="text-xl py-10" @click="onDcnx()">
          SE DECONNECTER
        </button>
        <div class="text-base">
          <RouterLink to="/Notification"
            ><p class="py-4">NOTIFICATIONS</p></RouterLink
          >
          <RouterLink to="/Securite"><p class="py-4">SECURITE</p></RouterLink>
          <RouterLink to="/Aide"><p class="py-4">AIDE</p></RouterLink>
          <RouterLink to="/apropos"><p class="py-4">A PROPOS</p></RouterLink>
        </div>
        <div class="flex justify-center items-center">
          <BtnArtisteClient></BtnArtisteClient>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BtnArtisteClient from "../components/BtnArtisteClient.vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import { emitter } from "../main.js";

export default {
  components: { BtnArtisteClient },
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
  methods: {
    onDcnx() {
      signOut(getAuth())
        .then((response) => {
          this.message = "User non connecté";
          this.user = {
            email: null,
            password: null,
          };
          emitter.emit("deconnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur de deconnexion", error);
        });
    },
  },
};
</script>

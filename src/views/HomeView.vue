<template>
  <div class="flex justify-center">
    <h1
      class="
        font-praise
        text-titre text-transparent
        p-2
        pt-24
        lg:pt-10
        xl:pt-3
        bg-gradient-to-l bg-clip-text
        to-Rouge
        from-Orange
      "
    >
      Plume
    </h1>
  </div>
  <div v-if="users == null" class="flex justify-center items-center m-4">
    <button
      class="
        bg-Pourpre
        rounded-lg
        text-center
        font-semibold
        text-2xl text-white
        px-8
        py-3
      "
    >
      <RouterLink to="/Connexion">Se connecter</RouterLink>
    </button>
  </div>
  <div v-else>
    <div class="pb-8">
      <div>
        <p class="font-baloo text-4xl w-1/5">NOUVELLE COMMANDE</p>
        <hr class="my-2 border-1 border-gradient-r-ligne w-1/3" />
      </div>
      <div class="flex justify-center">
        <RouterLink to="/NouvelleCommande"><BtnAjout></BtnAjout></RouterLink>
      </div>
    </div>
    <div class="pb-8">
      <p class="font-baloo text-4xl w-1/5">COMMANDE EN COURS</p>
      <hr class="my-2 border-1 border-gradient-r-ligne w-1/3" />
      <div
        class="
          flex flex-col
          md:grid md:grid-cols-2
          xl:grid-cols-3
          place-items-center
        "
      >
        <CardCommande></CardCommande>
      </div>
    </div>
    <div class="pb-8">
      <p class="font-baloo text-4xl w-1/5">COMMANDES PASSÉES</p>
      <hr class="my-2 border-1 border-gradient-r-ligne w-1/3" />
      <div
        class="
          flex flex-col
          md:grid md:grid-cols-2
          xl:grid-cols-3
          place-items-center
        "
      >
        <CardCommande2></CardCommande2>
      </div>
    </div>
  </div>
</template>

<script >
import CardCommande from "../components/CardCommande.vue";
import CardCommande2 from "../components/CardCommande2.vue";
import BtnAjout from "../components/BtnAjout.vue";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  name: "App",
  components: { CardCommande, CardCommande2, BtnAjout },
  data() {
    return {
      users: null,
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      await getAuth().onAuthStateChanged(
        function (users) {
          if (users) {
            this.users = users;
          }
        }.bind(this)
      );
    },
  },
};
</script>

<template>
  <main>
    <div class="flex justify-center py-20">
      <h2 class="text-Custom-red text-4xl">Suppression d'une commande</h2>
    </div>
    <form @submit.prevent="deleteCommande">
      <div class="grid grid-cols-2">
        <div class="mx-16">
          <img :src="photoActuelle" />
        </div>
        <div class="flex flex-col">
          <div
            class="
              bg-gradient-to-l
              to-Rouge
              from-Orange
              w-max
              p-0.5
              rounded-xl
              my-4
            "
          >
            <input
              class="rounded-xl p-1"
              placeholder="Nom de la personne qui a fait le dessin"
              v-model="commande.personne"
              required
            />
          </div>

          <div
            class="
              bg-gradient-to-l
              to-Rouge
              from-Orange
              w-max
              p-0.5
              rounded-xl
              my-4
            "
          >
            <input
              class="rounded-xl p-1"
              placeholder="Nom de la commande"
              v-model="commande.nom"
              disabled
            />
          </div>
          <div
            class="
              bg-gradient-to-l
              to-Rouge
              from-Orange
              w-max
              p-0.5
              rounded-xl
              my-4
            "
          >
            <input
              class="rounded-xl p-1"
              placeholder="Style demandé pour le dessin"
              v-model="commande.style"
              disabled
            />
          </div>
        </div>
      </div>
      <div class="flex justify-evenly my-10">
        <div
          class="
            bg-gradient-to-r
            to-Orange
            from-Rouge
            w-max
            rounded-xl
            p-0.5
            m-6
          "
        >
          <button
            class="
              p-2
              bg-white
              rounded-xl
              text-lg
              hover:bg-gradient-to-r
              hover:to-Orange
              hover:from-Rouge
              hover:text-white
            "
            type="submit"
          >
            Supprimer
          </button>
        </div>
        <div
          class="
            bg-gradient-to-r
            to-Orange
            from-Rouge
            w-max
            rounded-xl
            p-0.5
            m-6
          "
        >
          <button
            class="
              p-2
              bg-white
              rounded-xl
              text-lg
              hover:bg-gradient-to-r
              hover:to-Orange
              hover:from-Rouge
              hover:text-white
            "
          >
            <RouterLink to="/">Cancel</RouterLink>
          </button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import {
  getFirestore,
  doc,
  getDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "DeleteCommandeView",
  data() {
    return {
      commande: {
        nom: null,
        dessin: null,
        style: null,
      },

      refCommande: null,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id commande", this.$route.params.id);
    this.getCommande(this.$route.params.id);
  },

  methods: {
    async getCommande(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "commande", id);
      this.refCommande = await getDoc(docRef);
      if (this.refCommande.exists()) {
        this.commande = this.refCommande.data();
        this.photoActuelle = this.refCommande.dessin;
      } else {
        this.console.log("Commande inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "commande/" + this.commande.dessin);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteCommande() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "commande", this.$route.params.id));

      const storage = getStorage();
      let docRef = ref(storage, "commande/" + this.commande.dessin);
      deleteObject(docRef);

      this.$router.push("/");
    },
  },
};
</script>
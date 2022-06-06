<template>
  <div class="pt-16"></div>
  <div
    class="
      flex flex-col
      md:grid md:grid-cols-2
      xl:grid-cols-3
      place-items-center
    "
  >
    <CardArtisteRecherche
      v-for="dessins in listeDessins"
      :key="dessins.id"
      :image="dessins.image"
      :imgArt="dessins.imgArt"
      :nom="dessins.Nom"
      :prix="dessins.prix"
    ></CardArtisteRecherche>
    <!--<CardArtisteRecherche></CardArtisteRecherche>
    <CardArtisteRecherche></CardArtisteRecherche>
    <CardArtisteRecherche></CardArtisteRecherche>-->
  </div>
</template>

<script>
import CardArtisteRecherche from "../components/CardArtisteRecherche.vue";

import {
  getFirestore,
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "App",
  components: {
    CardArtisteRecherche,
  },
  data() {
    return {
      listeDessins: [],
    };
  },
  mounted() {
    this.getDessins();
  },
  methods: {
    async getDessins() {
      const firestore = getFirestore();
      const dbDessins = collection(firestore, "dessins");
      const query = await onSnapshot(dbDessins, (snapshot) => {
        console.log("query", query);
        this.listeDessins = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeDessins.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "dessins/" + personne.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.image = url;
              console.log("personne", personne);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        this.listeDessins.forEach(function (personne2) {
          const storage2 = getStorage();
          const spaceRef2 = ref(storage2, "users/" + personne2.imgArt);
          getDownloadURL(spaceRef2)
            .then((url) => {
              personne2.imgArt = url;
              console.log("personne2", personne2);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });

        console.log("listeDessins", this.listeDessins);
      });
    },
  },
};
</script>
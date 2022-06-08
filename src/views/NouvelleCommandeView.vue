<template>
  <main>
    <form class="pt-16" @submit.prevent="createCommande">
      <div class="flex flex-col place-items-center">
        <p class="font-baloo text-xl font-semibold p-3">Importez un dessin</p>
        <img :src="imageData" />
        <div
          class="
            bg-gradient-to-l
            to-Rouge
            from-Orange
            p-0.5
            w-max
            rounded-xl
            m-3
          "
        >
          <input
            class="text-xl bg-white rounded-xl font-semibold font-baloo p-1"
            type="file"
            ref="file"
            id="file"
            @change="previewImage"
          />
        </div>
        <p class="font-baloo text-xl font-semibold p-3">
          De qui est le dessin ?
        </p>
        <div class="bg-gradient-to-r to-Orange from-Rouge rounded-lg p-0.5">
          <input
            class="w-80 rounded-lg placeholder:pl-2"
            v-model="commande.personne"
            placeholder="Insérez du texte"
            required
          />
        </div>
        <p class="font-baloo text-xl font-semibold p-3">Nommez-le</p>
        <div class="bg-gradient-to-r to-Orange from-Rouge rounded-lg p-0.5">
          <input
            class="w-80 rounded-lg placeholder:pl-2"
            v-model="commande.nom"
            placeholder="Insérez du texte"
            required
          />
        </div>
        <p class="font-baloo text-xl font-semibold p-3">Quel style ?</p>
        <div
          class="bg-gradient-to-l to-Rouge from-Orange p-0.5 w-max rounded-xl"
        >
          <select class="rounded-xl mx-1" v-model="commande.style">
            <option selected disabled>Sélectionner un Style</option>
            <option v-for="style in listeStyle" :key="style.nom">
              {{ style.nom }}
            </option>
          </select>
        </div>
        <!--<div
          class="grid sm:grid-cols-3 grid-cols-2 place-items-center m-3"
        >
          <CategorieBouton CatBtn="Manga"></CategorieBouton>
          <CategorieBouton CatBtn="Comics"></CategorieBouton>
          <CategorieBouton CatBtn="Réaliste"></CategorieBouton>
          <CategorieBouton CatBtn="BD"></CategorieBouton>
          <CategorieBouton CatBtn="3D"></CategorieBouton>
          <CategorieBouton CatBtn="Caricature"></CategorieBouton>
          <CategorieBouton CatBtn="Peinture"></CategorieBouton>
          <CategorieBouton CatBtn="Aquarelle"></CategorieBouton>
        </div>-->
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
            type="submit"
            class="
              text-xl
              bg-white
              rounded-xl
              font-semibold font-baloo
              w-64
              h-12
              hover:bg-gradient-to-r
              hover:to-Orange
              hover:from-Rouge
              hover:text-white
            "
          >
            Commencer
          </button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import CategorieBouton from "../components/CategorieBouton.vue";

// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: { CategorieBouton },
  data() {
    return {
      imageData: null, // Image prévisualisée
      listeStyle: [],
      commande: {
        nom: null,
        dessin: null,
        style: null,
      },
    };
  },
  mounted() {
    this.getStyle();
  },
  methods: {
    async getStyle() {
      const firestore = getFirestore();
      const dbStyle = collection(firestore, "style");
      const q = query(dbStyle, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeStyle = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.commande.dessin = this.file.name;

      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async createCommande() {
      const storage = getStorage();
      const refStorage = ref(storage, "commande/" + this.commande.dessin);
      await uploadString(refStorage, this.imageData, "data_url").then(
        (snapshot) => {
          const db = getFirestore();
          const docRef = addDoc(collection(db, "commande"), this.commande);
        }
      );
      this.$router.push("/RechercheArtiste");
    },
  },
};
</script>
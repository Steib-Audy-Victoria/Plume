<template>
  <main>
    <div class="flex justify-center py-20">
      <h2 class="text-Custom-red text-4xl">Mise à jour d'une commande</h2>
    </div>
    <form @submit.prevent="updateCommande">
      <div class="grid md:grid-cols-2 place-items-center">
        <div class="mx-16">
          <img :src="imageData" />
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
              required
            />
          </div>
          <div
            class="bg-gradient-to-l to-Rouge from-Orange p-0.5 w-max rounded-xl"
          >
            <select class="rounded-xl" v-model="commande.style">
              <option selected disabled>Sélectionner un Style</option>
              <option v-for="style in listeStyle" :key="style.nom">
                {{ style.nom }}
              </option>
            </select>
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
              class="rounded-xl p-1 text-white"
              type="file"
              ref="file"
              id="file"
              @change="previewImage"
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
            Modifier
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
            <router-link to="/">Cancel</router-link>
          </button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "UpdateCommandeView",
  data() {
    return {
      imageData: null,
      listeCommande: [],
      listeStyle: [],
      commande: {
        nom: null,
        dessin: null,
        style: null,
      },
      refCommande: null,
      imgModifiee: false,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id commande", this.$route.params.id);
    this.getCommande(this.$route.params.id);
    this.getCommande();
    this.getStyle();
  },

  methods: {
    async getCommande() {
      const firestore = getFirestore();
      const dbCommande = collection(firestore, "commande");
      const q = query(dbCommande, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listecommande = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },
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

    async getCommande(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "commande", id);
      this.refCommande = await getDoc(docRef);
      if (this.refCommande.exists()) {
        this.commande = this.refCommande.data();
        this.photoActuelle = this.commande.dessin;
      } else {
        this.console.log("Commande inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "commande/" + this.commande.dessin);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.commande.dessin = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async updateCommande() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "commande/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "commande/" + this.commande.dessin);
        await uploadString(docRef, this.imageData, "data_url").then(
          (snapshot) => {
            console.log("Uploaded a base64 string", this.commande.dessin);
          }
        );
      }
      const firestore = getFirestore();
      await updateDoc(
        doc(firestore, "commande", this.$route.params.id),
        this.commande
      );
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <main>
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
    <div v-if="users == null" class="m-4">
      <div class="flex justify-center items-center my-10">
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
      <div class="grid grid-cols-1 place-items-center">
        <h2 class="font-baloo text-2xl my-4 font-semibold">
          Présentation de quelques dessins d'enfants sublimés par un artiste
        </h2>
        <img class="my-2" src="/img/dragon.jpg" alt="Dessin de dragon" />
        <img
          class="my-2"
          src="/img/Gourmand.jpg"
          alt="Dessin de montre gourmand"
        />
        <img class="my-2" src="/img/monster.jpg" alt="Dessin de monstre" />
      </div>
    </div>
    <div v-else>
      <div class="pb-8">
        <div class="ml-2">
          <p class="font-baloo text-4xl w-1/5">NOUVELLE COMMANDE</p>
          <hr class="my-2 border-1 border-gradient-r-ligne w-1/3" />
        </div>
        <div class="flex justify-center">
          <RouterLink to="/NouvelleCommande"><BtnAjout></BtnAjout></RouterLink>
        </div>
      </div>
      <div class="pb-8">
        <div class="ml-2">
          <p class="font-baloo text-4xl w-1/5">COMMANDE EN COURS</p>
          <hr class="my-2 border-1 border-gradient-r-ligne w-1/3" />
        </div>
        <div
          class="
            flex flex-col
            md:grid md:grid-cols-2
            xl:grid-cols-3
            place-items-center
          "
        >
          <!--<CardCommande
            v-for="commande in listeCommande"
            :key="commande.id"
            :image="commande.dessin"
            :personne="commande.personne"
            :nom="commande.nom"
          ></CardCommande>-->
          <div
            class="
              bg-gradient-to-tr
              to-Orange
              from-Rouge
              p-0.5
              w-max
              rounded-xl
              m-3
            "
            v-for="commande in listeCommande"
            :key="commande.id"
          >
            <div class="flex justify-evenly bg-white p-1 w-max rounded-xl">
              <div class="grid content-around">
                <div>
                  <p class="text-xl font-bold text-left text-black">
                    {{ commande.personne }}
                  </p>
                  <br />
                  <p class="text-xl font-bold text-left text-black">
                    {{ commande.nom }}
                  </p>
                </div>
                <div>
                  <p class="text-xl font-bold text-left text-Orange">Alex H.</p>
                  <p class="text-xl font-bold text-left text-Orange">50 €</p>
                </div>
                <div class="flex items-center justify-center gap-8">
                  <RouterLink
                    :to="{
                      name: 'updateCommande',
                      params: { id: commande.id },
                    }"
                    ><modif></modif
                  ></RouterLink>
                  <RouterLink
                    :to="{
                      name: 'deleteCommande',
                      params: { id: commande.id },
                    }"
                  >
                    <suppr></suppr>
                  </RouterLink>
                </div>
              </div>
              <div>
                <img
                  :src="commande.dessin"
                  class="rounded-r-lg object-cover pl-2 w-52 h-52"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-8">
        <div class="ml-2">
          <p class="font-baloo text-4xl w-1/5">COMMANDES PASSÉES</p>
          <hr class="my-2 border-1 border-gradient-r-ligne w-1/3" />
        </div>
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
  </main>
</template>

<script >
import CardCommande from "../components/CardCommande.vue";
import CardCommande2 from "../components/CardCommande2.vue";
import BtnAjout from "../components/BtnAjout.vue";
import modif from "../components/icons/modif.vue";
import suppr from "../components/icons/suppr.vue";

// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  deleteDoc,
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  name: "App",
  components: { CardCommande, CardCommande2, BtnAjout, modif, suppr },
  data() {
    return {
      users: null,
      listeCommande: [],
    };
  },
  mounted() {
    this.getUsers();
    this.getCommande();
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
    async getCommande() {
      const firestore = getFirestore();
      const dbCom = collection(firestore, "commande");
      const query = await onSnapshot(dbCom, (snapshot) => {
        this.listeCommande = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeCommande.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "commande/" + personne.dessin);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.dessin = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>

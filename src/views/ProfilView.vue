<template>
  <main>
    <div class="pt-16">
      <div class="mb-10">
        <div class="flex justify-center">
          <img class="rounded-full w-20 h-20 object-cover" :src="Image" />
        </div>
        <div class="flex justify-center mt-2">
          <RouterLink to="/Parametres"><settings></settings></RouterLink>
          <p class="font-baloo font-semibold text-xl text-center px-5">
            {{ Pseudo }}
          </p>
          <RouterLink to="/ProfilEdit"><edit></edit></RouterLink>
        </div>
      </div>
      <div class="grid grid-cols-2 mb-12">
        <div class="flex justify-center">
          <imageD
            v-on:click="
              {
                imageHidden = !imageHidden;
                favoriHidden = !favoriHidden;
              }
            "
            class="cursor-pointer"
          ></imageD>
        </div>
        <div class="flex justify-center">
          <heartB
            v-on:click="
              {
                favoriHidden = !favoriHidden;
                imageHidden = !imageHidden;
              }
            "
            class="cursor-pointer"
          ></heartB>
        </div>
      </div>
      <div v-show="!imageHidden">
        <div
          class="
            flex flex-col
            md:grid md:grid-cols-2
            xl:grid-cols-3
            place-items-center
          "
        >
          <img src="/img/monster.jpg" alt="" />
          <img src="/img/monster_dessin.jpg" alt="" />
          <img src="/img/dessin_dragon.jpg" alt="" />
        </div>
      </div>
      <div v-show="!favoriHidden">
        <div
          class="
            flex flex-col
            md:grid md:grid-cols-2
            xl:grid-cols-3
            place-items-center
          "
        >
          <img src="/img/favori1.jpg" alt="dessin d'un artiste d'un monstre" />
          <img
            src="/img/favori2.jpg"
            alt="dessin d'un artiste d'un monstre féerique"
          />
          <img
            src="/img/Red_Artiste.jpg"
            alt="dessin d'un artiste d'un monstre rouge"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import settings from "../components/icons/settings.vue";
import edit from "../components/icons/edit.vue";
import imageD from "../components/icons/imageD.vue";
import heartB from "../components/icons/heartB.vue";

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Fonctions Storage
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

// Import emetteur de main.js
import { emitter } from "../main.js";

export default {
  components: {
    settings,
    edit,
    imageD,
    heartB,
  },

  data() {
    return {
      imageHidden: true,
      favoriHidden: false,
      user: {
        email: null,
        password: null,
      },
      userInfo: null,
      Pseudo: "Laura_mg0t",
      Image: "/img/img_profil.jpg",
    };
  },
  mounted() {
    this.getUserConnect();

    emitter.on("connectUser", (e) => {
      this.user = e.user;
      //console.log('App => Reception user connecté', this.user);
      this.getUserInfo(this.user);
    });

    emitter.on("deConnectUser", (e) => {
      this.user = e.user;
      //console.log('App => Reception user deconnecté', this.user);
      this.userInfo = null;
      this.Pseudo = "Laura_mg0t";
      this.Image = "/img/img_profil.jpg";
    });
  },
  methods: {
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            this.user = user;
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
    },

    async getUserInfo(user) {
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.Pseudo = this.userInfo[0].Pseudo;
        const storage = getStorage();
        const spaceRef = ref(storage, "users/" + this.userInfo[0].Image);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.Image = url;
          })
          .catch((error) => {
            console.log("erreur downloadUrl", error);
          });
      });
    },
  },
};
</script>


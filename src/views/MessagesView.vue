<template>
  <main class="pt-16">
    <h1>Message</h1>
    <div v-if="users == null">
      <h4 class="text-center" role="alert">
        Vous devez être connecté pour utiliser le Chat !!
      </h4>
    </div>
    <div v-else>
      <div>
        <span>Sélectionner un utilisateur</span>
        <select v-model="usersSelected" @change="selectUsers">
          <option selected disabled value="">...</option>
          <option v-for="util in listeUsers" :key="util.uid" :value="util">
            {{ util.Pseudo }}
          </option>
        </select>
      </div>
      <div v-if="usersSelected != null">
        <form @submit.prevent="createDisc()">
          <div class="flex gap-3">
            <div>
              <span>Nouveau fil avec {{ usersSelected.Pseudo }}</span>
            </div>
            <input
              class="border border-Gris rounded-lg"
              type="text"
              v-model="libelle"
              required
            />
            <button type="submit" title="Création">Créer</button>
          </div>
        </form>
        <h2>Vos fils de discussion avec : {{ usersSelected.Pseudo }}</h2>
        <div v-if="chat.length > 0">
          <table>
            <tbody>
              <tr v-for="disc in chat" :key="disc.uid">
                <td>
                  {{ disc.libelle }} - créer par
                  <span v-if="disc.fil[0] == users.uid">vous</span>
                  <span v-else>{{ usersSelected.Pseudo }}</span>
                  le {{ dateFr(disc.creation) }}
                </td>
                <td>
                  <button
                    type="button"
                    @click="viewFil(disc)"
                    title="Voir ce fil"
                  >
                    <chat></chat>
                  </button>
                  <button
                    type="button"
                    @click="deleteFil(disc)"
                    title="Supprimer ce fil"
                  >
                    <delete></delete>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>Aucun fil de discussion</div>
        <hr />
        <div v-if="discussion != null">
          <h2>Discussion : {{ discussion.libelle }}</h2>
          <hr />
          <div>
            <textarea
              class="msg"
              rows="3"
              placeholder="Message"
              v-model="message"
            ></textarea>
            <div>
              <button @click="sendMsg()"><send></send></button>
            </div>
          </div>
          <div v-for="disc in chat" :key="disc.id">
            <div v-if="disc.id == discussion.id">
              <div v-for="msg in sortMsgByDate(disc.msg)" :key="msg.date">
                <div v-if="msg.by == users.uid">
                  <div>
                    <div class="text-left">
                      <img class="avatar" :src="usersInfo[0].Image" />
                      {{ usersInfo[0].Pseudo }} - {{ dateFr(msg.date) }}
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="recep">
                      <p>{{ msg.contenu }}</p>
                    </div>
                  </div>
                </div>
                <div v-if="msg.by == usersSelected.uid">
                  <div class="text-center">
                    <div class="emet">
                      <p>{{ msg.contenu }}</p>
                    </div>
                  </div>
                  <div>
                    <div class="text-left">
                      <img class="avatar" :src="usersSelected.Image" />
                      {{ usersSelected.Pseudo }} - {{ dateFr(msg.date) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDoc, // Obtenir un document d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
  where, // Permet de demander un filtrage pour une query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

// Fonction authentification
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import chat from "../components/icons/chat.vue";
import Delete from "../components/icons/delete.vue";
import Send from "../components/icons/send.vue";

export default {
  name: "ChatView",
  components: { chat, Delete, Send },
  data() {
    return {
      users: null,
      listeUsers: [],
      usersInfo: null,
      usersSelected: null,
      libelle: null,

      chatFrom: null,
      chatTo: null,
      chat: [],

      discussion: null,

      message: null,
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

      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, orderBy("Pseudo", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeUsers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeUsers.forEach(function (users) {
          const storage = getStorage();
          const spaceRef = ref(storage, "users/" + users.Image);
          getDownloadURL(spaceRef)
            .then((url) => {
              users.Image = url;
            })
            .catch((error) => {
              console.log("erreur downloadurl", error);
            });
        });
        //console.log("listeUsers", this.listeUsers);

        this.usersInfo = this.listeUsers.filter(
          (users) => users.uid == this.users.uid
        );
        this.listeUsers = this.listeUsers.filter(
          (users) => users.uid != this.users.uid
        );
      });
    },

    async selectUsers() {
      //console.log("users sélectionner", this.usersSelected);

      this.message = null;
      const firestore = getFirestore();
      const dbChat = collection(firestore, "chat");
      let list1 = [this.users.uid, this.usersSelected.uid];
      let q1 = query(dbChat, where("fil", "==", list1));

      await onSnapshot(q1, (snapshot) => {
        this.chatFrom = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log("chatFrom", this.chatFrom);

        let list2 = [this.usersSelected.uid, this.users.uid];
        let q2 = query(dbChat, where("fil", "==", list2));
        onSnapshot(q2, (snapshot) => {
          this.chatTo = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          //console.log("chatTo", this.chatTo);

          this.chat = this.chatFrom.concat(this.chatTo);
          //console.log("chat", this.chat);
        });
      });
    },

    createDisc() {
      let msg = {
        by: this.users.uid,
        contenu: "Créé le " + this.dateSql(),
        date: this.dateSql(),
      };

      let discussion = {
        creation: this.dateSql(),
        fil: [this.users.uid, this.usersSelected.uid],
        libelle: this.libelle,
        msg: [msg],
      };
      addDoc(collection(getFirestore(), "chat"), discussion);
    },

    dateSql() {
      let today = new Date();
      today = today.toLocaleString();
      let tab = today.split(",");
      let d = tab[0];
      let dt = d.split("/");
      let jour = dt[0];
      let mois = dt[1];
      let annee = dt[2];
      today = annee + "-" + mois + "-" + jour + " " + tab[1].trim();
      return today;
    },

    dateFr(date) {
      let d = date.split(" ");
      let dt = d[0].split("-");
      let jour = dt[2];
      let mois = dt[1];
      let annee = dt[0];
      let ht = d[1].split(":");
      let dateMsg =
        jour + "/" + mois + "/" + annee + " à " + ht[0] + ":" + ht[1];
      return dateMsg;
    },

    viewFil(disc) {
      this.discussion = disc;
    },

    deleteFil(disc) {
      deleteDoc(doc(getFirestore(), "chat", disc.id));
    },

    async sendMsg() {
      let msg = {
        by: this.users.uid,
        contenu: this.message,
        date: this.dateSql(),
      };

      const firestore = getFirestore();
      const docRef = doc(firestore, "chat", this.discussion.id);
      let refDisc = await getDoc(docRef);
      let tabMsg = refDisc.data().msg;
      tabMsg.push(msg);
      updateDoc(doc(firestore, "chat", this.discussion.id), {
        msg: tabMsg,
      });
    },

    sortMsgByDate(tabMsg) {
      return tabMsg.sort(function (a, b) {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
      });
    },
  },
};
</script>

<style scoped>
.avatar {
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.emet {
  color: black;
  background-color: lightyellow;
  padding: 10px;
  border-radius: 50px 20px;
  word-wrap: break-word;
}
.recep {
  color: black;
  background-color: lightblue;
  padding: 10px;
  border-radius: 50px 20px;
  word-wrap: break-word;
}
.msg {
  color: black;
  background-color: lightgrey;
  padding: 10px;
  border-radius: 20px 20px;
}
</style>



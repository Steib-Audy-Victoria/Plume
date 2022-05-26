<template>
  <header class="fixed w-full">
    <div class="flex justify-between p-4">
      <RouterLink to="/Profil"><User></User></RouterLink>
      <RouterLink to="/"><Plume></Plume></RouterLink>
    </div>
  </header>

  <RouterView />

  <main>
    <div class="hidden">
      <nav>
        <RouterLink to="/Guide">Guide</RouterLink>

        <RouterLink to="/ProfilPaiement">Profil Paiement</RouterLink>
      </nav>
    </div>
    <div class="bg-black flex justify-between p-3 fixed bottom-0 w-full">
      <RouterLink to="/Feed"><users></users></RouterLink>
      <RouterLink to="/"><home></home></RouterLink>
      <RouterLink to="/Messages"><message></message></RouterLink>
    </div>
  </main>

  <footer class="pb-14">
    <div class="bg-black p-2">
      <div class="grid">
        <h2 class="col-span-2 text-Orange font-baloo text-3xl">Explorer</h2>
        <div class="col-start-2">
          <RouterLink to="/apropos"
            ><p class="text-white font-baloo text-3xl">A propos</p></RouterLink
          >
          <RouterLink to="/NousSoutenir"
            ><p class="text-white font-baloo text-3xl">
              Nous soutenir
            </p></RouterLink
          >
          <RouterLink to="/MentionsLegales"
            ><p class="text-white font-baloo text-3xl">
              Mentions légales
            </p></RouterLink
          >
        </div>
      </div>
      <div class="grid">
        <h2 class="col-span-2 text-Orange font-baloo text-3xl">
          Nous contacter
        </h2>
        <div class="col-start-2">
          <form class="flex flex-col mr-6" action="#">
            <label for="email"></label>
            <input
              class="
                rounded-lg
                placeholder:pl-5
                bg-Gris
                placeholder:text-grisClair
                placeholder:font-baloo
                placeholder:text-lg
              "
              type="email"
              id="email"
              name="email"
              placeholder="Votre E-mail"
            />
            <label for="msg"></label>
            <textarea
              class="
                rounded-lg
                placeholder:pl-5
                my-2
                bg-Gris
                placeholder:text-grisClair
                placeholder:font-baloo
                placeholder:text-lg
              "
              name="message"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Votre message"
            ></textarea>
            <button
              class="
                rounded-lg
                bg-Orange
                text-white
                w-max
                p-2
                px-5
                font-baloo font-semibold
                text-xl
              "
              type="submit"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <div>
        <div class="flex justify-center items-center text-8xl">
          <RouterLink to="/"><PlumeW></PlumeW></RouterLink>
          <h2 class="text-white font-praise">Plume</h2>
        </div>
        <div class="flex justify-evenly">
          <instagram></instagram>
          <facebook></facebook>
          <twitter></twitter>
        </div>
        <div class="flex justify-center">
          <p class="font-baloo text-Gris text-1xl">© 2022 Plume</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script >
import Plume from "./components/icons/Plume.vue";
import User from "./components/icons/User.vue";
import PlumeW from "./components/icons/PlumeW.vue";
import instagram from "./components/icons/instagram.vue";
import facebook from "./components/icons/facebook.vue";
import twitter from "./components/icons/twitter.vue";
import users from "./components/icons/users.vue";
import home from "./components/icons/home.vue";
import message from "./components/icons/message.vue";
import { emitter } from "./main.js";

export default {
  name: "App",
  components: {
    Plume,
    User,
    PlumeW,
    instagram,
    facebook,
    twitter,
    users,
    home,
    message,
  },
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  mounted() {
    emitter.on("connectUser", (e) => {
      this.user = e.user;
      console.log("App => Reception user connecté", this.user);
    });
    emitter.on("deconnectUser", (e) => {
      this.user = e.user;
      console.log("App => Reception user deconnecté", this.user);
    });
  },
};
</script>

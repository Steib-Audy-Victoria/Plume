<template>
  <header>
    <div>
      <div class="flex justify-between p-4">
        <User></User>
        <Plume></Plume>
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/apropos">A propos</RouterLink>
        <RouterLink to="/Guide">Guide</RouterLink>
        <RouterLink to="/Messages">Messages</RouterLink>
        <RouterLink to="/Parametres">Parametres</RouterLink>
        <RouterLink to="/Feed">Feed</RouterLink>
        <RouterLink to="/NousSoutenir">Nous Soutenir</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="bg-black p-2">
      <div class="grid">
        <h2 class="col-span-2 text-Orange font-baloo text-4xl">Explorer</h2>
        <div class="col-start-2">
          <p class="text-white font-baloo text-4xl">A propos</p>
          <p class="text-white font-baloo text-4xl">Nous soutenir</p>
          <p class="text-white font-baloo text-4xl">Mentions légales</p>
        </div>
      </div>
      <div class="grid">
        <h2 class="col-span-2 text-Orange font-baloo text-4xl">
          Nous contacter
        </h2>
        <div class="col-start-2">
          <form class="flex flex-col" action="#">
            <label for="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre E-mail"
            />
            <label for="msg"></label>
            <textarea
              name="message"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Votre message"
            ></textarea>
            <button class="rounded-lg bg-Orange text-white" type="submit">
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <div>
        <div class="flex justify-center items-center text-8xl">
          <PlumeW></PlumeW>
          <h2 class="text-white font-praise">Plume</h2>
        </div>
        <div class="flex justify-evenly">
          <instagram></instagram>
          <facebook></facebook>
          <twitter></twitter>
        </div>
        <div class="flex justify-center">
          <p class="font-baloo text-Gris text-4xl">© 2022 Plume</p>
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

export default {
  name: "App",
  components: { Plume, User, PlumeW, instagram, facebook, twitter },
};
</script>

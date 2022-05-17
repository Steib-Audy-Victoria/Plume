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

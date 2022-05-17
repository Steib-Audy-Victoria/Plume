<template>
  <header>
    <div>
      <div class="flex justify-between p-4">
        <User></User>
        <Plume></Plume>
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Guide">Guide</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script >
import Plume from "./components/icons/Plume.vue";
import User from "./components/icons/User.vue";

export default {
  name: "App",
  components: { Plume, User },
};
</script>

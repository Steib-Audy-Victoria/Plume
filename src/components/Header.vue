<template>
  <div class="flex justify-between p-4">
    <User></User>
    <Plume></Plume>
  </div>
</template>
<script >
import Plume from "./icons/Plume.vue";
import User from "./icons/User.vue";

export default {
  name: "App",
  components: { Plume, User },
};
</script>
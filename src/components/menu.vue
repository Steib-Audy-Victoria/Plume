<template>
  <div class="bg-black flex justify-between p-3">
    <users></users>
    <home></home>
    <message></message>
  </div>
</template>

<script >
import users from "./icons/users.vue";
import home from "./icons/home.vue";
import message from "./icons/message.vue";

export default {
  name: "App",
  components: { users, home, message },
};
</script>
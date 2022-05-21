<template>
  <div class="pt-16 flex flex-col place-items-center">
    <MessageBtn
      Pseudo="Alex H."
      Message="Oui pas de soucis je fais ça "
    ></MessageBtn>
    <MessageBtn
      Pseudo="Claire A."
      Message="Bonne journée à vous ! "
    ></MessageBtn>
  </div>
</template>

<script>
import MessageBtn from "../components/MessageBtn.vue";

export default {
  components: { MessageBtn },
};
</script>
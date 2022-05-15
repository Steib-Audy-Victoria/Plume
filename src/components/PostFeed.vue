<template>
  <div class="w-max border-2 border-Rouge rounded-xl p-3">
    <div class="rounded-3xl bg-white"></div>
    <img src="public/img/monster.jpg" class="object-cover pb-3" />
    <div class="flex justify-between">
      <p class="text-xl font-semibold text-left text-black">Clément B.</p>
      <Heart></Heart>
    </div>
  </div>
</template>

<script >
import Heart from "./icons/Heart.vue";

export default {
  name: "App",
  components: { Heart },
};
</script>
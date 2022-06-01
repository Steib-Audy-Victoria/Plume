<template>
  <div class="bg-gradient-to-r to-Orange from-Rouge p-0.5 w-max rounded-xl m-3">
    <div class="bg-white p-0.5 w-max rounded-xl">
      <div class="rounded-3xl bg-white"></div>
      <img :src="image" class="object-cover p-3" />
      <div class="flex justify-between p-1">
        <p class="text-xl font-semibold text-left text-black">{{ nom }}</p>
        <Heart></Heart>
      </div>
    </div>
  </div>
</template>

<script >
import Heart from "./icons/Heart.vue";

export default {
  name: "App",
  components: { Heart },
  props: {
    image: String,
    nom: String,
  },
};
</script>
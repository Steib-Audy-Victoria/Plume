<template>
  <div
    class="bg-gradient-to-b to-Orange from-Rouge w-10/12 rounded-xl p-0.5 m-4"
  >
    <div class="bg-white rounded-xl">
      <p class="font-baloo text-lg text-right pr-6">01/04/2022</p>
      <p class="font-baloo font-semibold text-xl pl-6">{{ Pseudo }}</p>
      <p class="font-baloo text-lg pl-6 py-2">{{ Message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Pseudo: String,
    Message: String,
  },
};
</script>
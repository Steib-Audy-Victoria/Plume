<template>
  <div
    class="bg-gradient-to-tr to-Orange from-Rouge p-0.5 w-max rounded-xl m-3"
  >
    <div class="flex justify-evenly bg-white p-1 w-max rounded-xl">
      <div class="grid content-around">
        <div>
          <p class="text-xl font-bold text-left text-black">{{ personne }}</p>
          <br />
          <p class="text-xl font-bold text-left text-black">{{ nom }}</p>
        </div>
        <div>
          <p class="text-xl font-bold text-left text-Orange">Alex H.</p>
          <p class="text-xl font-bold text-left text-Orange">50 €</p>
        </div>
      </div>
      <div>
        <img :src="image" class="rounded-r-lg object-cover pl-2 w-52 h-52" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    personne: String,
    nom: String,
    image: String,
  },
};
</script>
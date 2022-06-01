<template>
  <div class="bg-gradient-to-r to-Orange from-Rouge p-0.5 w-max rounded-lg m-5">
    <div class="bg-white p-0.5 w-max rounded-lg">
      <div class="flex justify-start items-center">
        <img :src="imgArt" class="object-none" />
        <p
          class="
            flex-grow
            text-xl
            font-baloo font-semibold
            text-left text-black
          "
        >
          {{ nom }}
        </p>
        <p class="text-xl font-semibold text-left text-black font-baloo">
          {{ prix }} €
        </p>
      </div>
      <img :src="image" class="object-cover rounded-b-xl" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgArt: String,
    nom: String,
    prix: Number,
    image: String,
  },
};
</script>


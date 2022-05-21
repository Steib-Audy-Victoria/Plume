<template>
  <div class="w-96 p-4 rounded-2xl border-4 border-black flex m-2">
    <img :src="image" class="rounded-2xl object-cover" />
    <div class="pl-3">
      <p class="text-base text-left font-bold text-black font-baloo">
        {{ Nom }}
      </p>
      <p class="text-sm font-semibold font-baloo text-left text-black">
        {{ Info }} en première année de BUT MMI
      </p>
      <p class="text-sm font-semibold text-right text-black">{{ Fonction }}</p>
      <p class="font-semibold text-sm font-baloo text-left text-black">
        Contact :
      </p>
      <p
        class="
          w-max
          pt-2
          font-semibold
          text-xs
          font-baloo
          text-right text-black
        "
      >
        {{ Mail }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Nom: String,
    image: String,
    Info: String,
    Fonction: String,
    Mail: String,
  },
};
</script>
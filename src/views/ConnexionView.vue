<template>
  <div class="pt-16 bg-Pourpre">
    <h1 class="font-praise text-5xl text-white text-center">Plume</h1>
    <div class="flex flex-col place-items-center my-10">
      <BoutonConnexion></BoutonConnexion>
      <BoutonConnexion></BoutonConnexion>
      <BoutonConnexion></BoutonConnexion>
    </div>
    <div class="flex justify-center items-center">
      <hr class="my-1 pb-2 border-3 border-white w-1/4" />
      <p class="text-white font-baloo text-xl px-2">OU</p>
      <hr class="my-1 pb-2 border-3 border-white w-1/4" />
    </div>
    <div class="flex flex-col place-items-center">
      <p class="text-white font-baloo text-lg px-2">PSEUDO / MAIL</p>
      <input
        class="w-1/2 border-Rouge border-2 rounded-lg"
        type="text"
        placeholder="Insérez du texte"
      />
    </div>
    <div class="flex flex-col place-items-center">
      <p class="text-white font-baloo text-lg px-2">MOT DE PASSE</p>
      <input
        class="w-1/2 border-Rouge border-2 rounded-lg"
        type="text"
        placeholder="Insérez du texte"
      />
    </div>
    bouton
    <div class="flex justify-center items-center">
      <hr class="my-1 pb-2 border-3 border-white w-1/4" />
      <p class="text-white font-baloo text-xl px-2">OU</p>
      <hr class="my-1 pb-2 border-3 border-white w-1/4" />
    </div>
    bouton
  </div>
</template>

<script >
import BoutonConnexion from "../components/BoutonConnexion.vue";

export default {
  name: "App",
  components: {
    BoutonConnexion,
  },
};
</script>
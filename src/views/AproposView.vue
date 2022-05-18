<template>
  <div class="flex items-center justify-center pt-16 mb-5">
    <PlumeB></PlumeB>
    <h2 class="text-3xl font-baloo font-bold pl-5">À Propos</h2>
  </div>
  <div class="flex items-center justify-center">
    <p class="pl-2 font-baloo text-base w-3/4">
      Plume est un projet universitaire dirigé par nous-même, Loup Lobato,
      Antonin Heuguet et Victoria Steib--Audy. Nous sommes des étudiants en
      première année de BUT Métiers du Multimédia et de l’Internet à
      Montbéliard. Nous avons récupéré le projet de base et l’avons modifié
      selon notre vision de la chose. Le projet s’est donc nommé “Plume”.
    </p>
  </div>
  <div>
    <h3 class="font-baloo font-bold text-xl pl-6 my-8">Qui sommes nous ?</h3>
  </div>
</template>

<script>
import PlumeB from "../components/icons/PlumeB.vue";

export default {
  name: "App",
  components: { PlumeB },
};
</script>

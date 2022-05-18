<template>
  <div class="pt-16"></div>
  <div
    class="
      flex flex-col
      md:grid md:grid-cols-2
      xl:grid-cols-3
      place-items-center
    "
  >
    <CardArtisteRecherche></CardArtisteRecherche>
    <CardArtisteRecherche></CardArtisteRecherche>
    <CardArtisteRecherche></CardArtisteRecherche>
    <CardArtisteRecherche></CardArtisteRecherche>
  </div>
</template>

<script>
import CardArtisteRecherche from "../components/CardArtisteRecherche.vue";

export default {
  name: "App",
  components: {
    CardArtisteRecherche,
  },
};
</script>
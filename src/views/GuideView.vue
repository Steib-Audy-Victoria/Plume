<template>
  <CardArtisteRecherche></CardArtisteRecherche>
  <PostFeed></PostFeed>
  <CardCommande></CardCommande>
  <CategorieBouton></CategorieBouton>
</template>

<script >
import CardArtisteRecherche from "../components/CardArtisteRecherche.vue";
import PostFeed from "../components/PostFeed.vue";
import CardCommande from "../components/CardCommande.vue";
import CategorieBouton from "../components/CategorieBouton.vue";

export default {
  name: "App",
  components: {
    CardArtisteRecherche,
    PostFeed,
    CardCommande,
    CategorieBouton,
  },
};
</script>

<template>
  <Menu></Menu>
  <CardArtisteRecherche></CardArtisteRecherche>
  <PostFeed></PostFeed>
  <CardCommande></CardCommande>
  <CategorieBouton></CategorieBouton>
</template>

<script >
import Menu from "../components/menu.vue";
import CardArtisteRecherche from "../components/CardArtisteRecherche.vue";
import PostFeed from "../components/PostFeed.vue";
import CardCommande from "../components/CardCommande.vue";
import CategorieBoutonVue from "../components/CategorieBouton.vue";

export default {
  name: "App",
  components: {
    Menu,
    CardArtisteRecherche,
    PostFeed,
    CardCommande,
    CategorieBouton,
  },
};
</script>

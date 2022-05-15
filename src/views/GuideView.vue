<template>
  <Header></Header>
  <Footer></Footer>
  <Menu></Menu>
  <CardArtisteRecherche></CardArtisteRecherche>
  <PostFeed></PostFeed>
  <CardCommande></CardCommande>
</template>

<script >
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Menu from "../components/menu.vue";
import CardArtisteRecherche from "../components/CardArtisteRecherche.vue";
import PostFeed from "../components/PostFeed.vue";
import CardCommande from "../components/CardCommande.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Menu,
    CardArtisteRecherche,
    PostFeed,
    CardCommande,
  },
};
</script>

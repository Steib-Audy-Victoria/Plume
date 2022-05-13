<template>
  <Header></Header>
  <Footer></Footer>
  <Menu></Menu>
  <CardArtisteRecherche></CardArtisteRecherche>
</template>

<script >
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Menu from "../components/menu.vue";
import CardArtisteRecherche from "../components/CardArtisteRecherche.vue";

export default {
  name: "App",
  components: { Header, Footer, Menu, CardArtisteRecherche },
};
</script>

<template>
  <Header></Header>
  <Footer></Footer>
  <Menu></Menu>
</template>

<script >
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Menu from "../components/menu.vue";

export default {
  name: "App",
  components: { Header, Footer, Menu },
};
</script>

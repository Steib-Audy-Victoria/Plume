<template>
  <CardArtisteRecherche></CardArtisteRecherche>
  <PostFeed></PostFeed>
  <CardCommande></CardCommande>
  <CategorieBouton></CategorieBouton>
  <CardCommande2></CardCommande2>
  <CardAPropos></CardAPropos>
  <Notification></Notification>
  <BoutonAPropos MsgBtn="Faire un don"></BoutonAPropos>
  <BtnConIns MsgBtn="Se connecter"></BtnConIns>
  <BoutonConnexion></BoutonConnexion>
</template>

<script >
import CardArtisteRecherche from "../components/CardArtisteRecherche.vue";
import PostFeed from "../components/PostFeed.vue";
import CardCommande from "../components/CardCommande.vue";
import CardCommande2 from "../components/CardCommande2.vue";
import CategorieBouton from "../components/CategorieBouton.vue";
import CardAPropos from "../components/CardAPropos.vue";
import Notification from "../components/Notification.vue";
import BoutonAPropos from "../components/BoutonAPropos.vue";
import BtnConIns from "../components/BtnConIns.vue";
import BoutonConnexion from "../components/BoutonConnexion.vue";

export default {
  name: "App",
  components: {
    CardArtisteRecherche,
    PostFeed,
    CardCommande,
    CategorieBouton,
    CardCommande2,
    CardAPropos,
    Notification,
    BoutonAPropos,
    BtnConIns,
    BoutonConnexion,
  },
};
</script>

<template>
  <div class="flex justify-center">
    <h1
      class="
        font-praise
        text-titre text-transparent
        p-4
        bg-gradient-to-l bg-clip-text
        to-Rouge
        from-Orange
      "
    >
      Plume
    </h1>
  </div>
  <div>
    <div>
      <p class="font-baloo text-4xl w-1/5">NOUVELLE COMMANDE</p>
      <hr class="my-2 border-1 border-Rouge w-1/3" />
    </div>
    <div class="flex justify-center">
      <BtnAjout></BtnAjout>
    </div>
  </div>
  <div>
    <p class="font-baloo text-4xl w-1/5">COMMANDE EN COURS</p>
    <hr class="my-2 border-1 border-Rouge w-1/3" />
    <div
      class="
        flex flex-col
        md:grid md:grid-cols-2
        xl:grid-cols-3
        place-items-center
      "
    >
      <CardCommande></CardCommande>
    </div>
  </div>
  <div>
    <p class="font-baloo text-4xl w-1/5">COMMANDES PASSÉES</p>
    <hr class="my-2 border-1 border-Rouge w-1/3" />
    <div
      class="
        flex flex-col
        md:grid md:grid-cols-2
        xl:grid-cols-3
        place-items-center
      "
    >
      <CardCommande2></CardCommande2>
    </div>
  </div>
</template>

<script >
import CardCommande from "../components/CardCommande.vue";
import CardCommande2 from "../components/CardCommande2.vue";
import BtnAjout from "../components/BtnAjout.vue";

export default {
  name: "App",
  components: { CardCommande, CardCommande2, BtnAjout },
};
</script>

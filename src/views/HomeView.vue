<template>
  <div class="flex justify-center">
    <h1 class="font-praise text-titre">Plume</h1>
  </div>
  <div>
    <p class="font-baloo text-4xl w-1/5">NOUVELLE COMMANDE</p>
    <hr class="my-2 border-1 border-Rouge w-1/3" />
  </div>
  <div>
    <p class="font-baloo text-4xl w-1/5">COMMANDE EN COURS</p>
    <hr class="my-2 border-1 border-Rouge w-1/3" />
    <CardCommande></CardCommande>
  </div>
  <div>
    <p class="font-baloo text-4xl w-1/5">COMMANDES PASSÉES</p>
    <hr class="my-2 border-1 border-Rouge w-1/3" />
    <CardCommande2></CardCommande2>
  </div>
</template>

<script >
import CardCommande from "../components/CardCommande.vue";
import CardCommande2 from "../components/CardCommande2.vue";

export default {
  name: "App",
  components: { CardCommande, CardCommande2 },
};
</script>

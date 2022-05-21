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
  <div
    class="
      flex flex-col
      md:grid md:grid-cols-2
      xl:grid-cols-3
      place-items-center
    "
  >
    <CardAPropos
      Nom="Antonin Heuguet"
      Info="Étudiant"
      Fonction="MAQUETTE"
      Mail="antonin.heuguet@edu.univ-fcomte.fr"
      image="public/img/img_antonin.jpg"
    ></CardAPropos>
    <CardAPropos
      Nom="Loup Lobato"
      Info="Étudiant"
      Fonction="ÉLÉMENTS GRAPHIQUES"
      Mail="loup.lobato@edu.univ-fcomte.fr"
      image="public/img/img_loup.jpg"
    ></CardAPropos>
    <CardAPropos
      Nom="Victoria Steib-Audy"
      Info="Étudiante"
      Fonction="DÉVELOPPEMENT"
      Mail="victoria.steib—audy@edu.univ-fcomte.fr"
      image="public/img/img_victoria.jpg"
    ></CardAPropos>
  </div>
</template>

<script>
import PlumeB from "../components/icons/PlumeB.vue";
import CardAPropos from "../components/CardAPropos.vue";

export default {
  name: "App",
  components: { PlumeB, CardAPropos },
};
</script>

<template>
  <div class="flex items-center justify-center pt-16 mb-5">
    <PlumeB></PlumeB>
    <h2 class="text-3xl font-baloo font-bold pl-5">Nous soutenir</h2>
  </div>
  <p class="text-lg font-baloo flex justify-center text-center">
    L’un de nos objectifs principaux est de faire de ce site un lieu dynamique
    et vivant.
  </p>
  <div class="pl-6 mt-8">
    <h3 class="font-baloo font-bold text-xl">Vous souhaitez nous aider ?</h3>
    <p class="font-baloo font-semibold text-base pl-10 mb-3">
      Pour cela, plusieurs méthodes sont possible :
    </p>
    <div class="flex items-center py-4">
      <PlumeB></PlumeB>
      <p class="pl-2 font-baloo text-base w-2/3">
        Participer aux échange en achetant le dessin de votre enfant ou le votre
        qui à été sublimer par un artiste.
      </p>
    </div>
    <div class="flex items-center py-4">
      <PlumeB></PlumeB>
      <p class="pl-2 font-baloo text-base w-2/3">
        En tant qu’artiste, en sublimant le dessin d’une personne. En faisant
        cela vous participer à la vie du site.
      </p>
    </div>
    <div class="flex items-center py-4">
      <PlumeB></PlumeB>
      <p class="pl-2 font-baloo text-base w-2/3">
        Faire connaître Plume en en parlant à vos proches ou sur les réseaux
        sociaux
      </p>
    </div>
    <div class="flex items-center py-4">
      <PlumeB></PlumeB>
      <p class="pl-2 font-baloo text-base w-2/3">
        Apporter un soutien fiancier par un don, via la plateforme sécurisé
        Paypal. Pour cela cliquer sur le bouton ci-dessous et sélectionner le
        montant de votre choix.
      </p>
    </div>
  </div>

  <div class="pl-6 mt-8">
    <h3 class="font-baloo font-bold text-xl">Pourquoi nous aider ?</h3>
    <div class="flex items-center py-4">
      <PlumeB></PlumeB>
      <p class="pl-2 font-baloo text-base w-2/3">
        Toutes ces méthodes aident réellement le projet en développant une
        communauté mais aussi en finançant le projet Plume, l’argent récolté
        permet de faire vivre celui-ci.
      </p>
    </div>
    <div class="flex items-center py-4">
      <PlumeB></PlumeB>
      <p class="pl-2 font-baloo text-base w-2/3">
        Chaque aide aussi minime qu’elle soit est super importante pour le bon
        fonctionnement du site et nous dépendons en grande parties de votre
        soutien.
      </p>
    </div>
    <div class="flex items-center py-4">
      <PlumeB></PlumeB>
      <p class="pl-2 font-baloo text-base w-2/3">
        Pour en savoir plus sur notre projet et qui nous sommes nous vous
        invitons à lire la page ci-dessous
      </p>
    </div>
  </div>
</template>

<script>
import PlumeB from "../components/icons/PlumeB.vue";

export default {
  name: "App",
  components: { PlumeB },
};
</script>
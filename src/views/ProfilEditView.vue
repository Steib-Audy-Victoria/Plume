<template>
  <div class="bg-gradient-to-t to-Orange from-Rouge pt-16">
    <div class="flex justify-center">
      <img class="relative" src="public/img/profil.png" alt="" />
      <camera class="absolute mt-4"></camera>
      <ajout class="absolute mt-14 ml-16"></ajout>
    </div>
    <div class="grid grid-cols-4 p-8">
      <div class="col-start-2 text-white text-xl font-baloo">
        <p class="py-2">Pseudo</p>
        <p class="py-2">Bio</p>
        <p class="py-2">Site Web</p>
        <p class="py-2">Style Graphique</p>
      </div>
      <div class="col-start-3 col-span-2">
        <div class="text-Pourpre text-xl font-baloo">
          <p class="py-2">Chloe</p>
          <p class="py-2">Lorem ipsum bla bla bla</p>
          <p class="py-2">bla bla bla .com</p>
        </div>
        <div
          class="
            grid
            xl:grid-cols-3
            md:grid-cols-2
            xs:grid-cols-1
            place-items-center
          "
        >
          <CategorieBouton CatBtn="Manga"></CategorieBouton>
          <CategorieBouton CatBtn="Comics"></CategorieBouton>
          <CategorieBouton CatBtn="Réaliste"></CategorieBouton>
          <CategorieBouton CatBtn="BD"></CategorieBouton>
          <CategorieBouton CatBtn="3D"></CategorieBouton>
          <CategorieBouton CatBtn="Caricature"></CategorieBouton>
          <CategorieBouton CatBtn="Peinture"></CategorieBouton>
          <CategorieBouton CatBtn="Aquarelle"></CategorieBouton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategorieBouton from "../components/CategorieBouton.vue";
import camera from "../components/icons/camera.vue";
import ajout from "../components/icons/ajout.vue";

export default {
  components: { CategorieBouton, camera, ajout },
};
</script>
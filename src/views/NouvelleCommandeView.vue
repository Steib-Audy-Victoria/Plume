<template>
  <div class="pt-16 flex flex-col place-items-center">
    <p class="font-baloo text-xl font-semibold p-3">Importez un dessin</p>
    <btn-ajout class="m-5"></btn-ajout>
    <p class="font-baloo text-xl font-semibold p-3">Nommez-le</p>
    <div class="bg-gradient-to-r to-Orange from-Rouge rounded-lg p-0.5">
      <input
        class="w-80 rounded-lg placeholder:pl-2"
        type="text"
        placeholder="Insérez du texte"
      />
    </div>
    <p class="font-baloo text-xl font-semibold p-3">Quel style ?</p>
    <div class="grid sm:grid-cols-3 grid-cols-2 place-items-center m-3">
      <CategorieBouton CatBtn="Manga"></CategorieBouton>
      <CategorieBouton CatBtn="Comics"></CategorieBouton>
      <CategorieBouton CatBtn="Réaliste"></CategorieBouton>
      <CategorieBouton CatBtn="BD"></CategorieBouton>
      <CategorieBouton CatBtn="3D"></CategorieBouton>
      <CategorieBouton CatBtn="Caricature"></CategorieBouton>
      <CategorieBouton CatBtn="Peinture"></CategorieBouton>
      <CategorieBouton CatBtn="Aquarelle"></CategorieBouton>
    </div>
    <RouterLink to="/RechercheArtiste"
      ><Btn MsgBtn="Commencer"></Btn
    ></RouterLink>
  </div>
</template>

<script>
import BtnAjout from "../components/BtnAjout.vue";
import CategorieBouton from "../components/CategorieBouton.vue";
import Btn from "../components/Btn.vue";

export default {
  components: { BtnAjout, CategorieBouton, Btn },
};
</script>
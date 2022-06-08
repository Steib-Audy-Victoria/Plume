<template>
  <main>
    <div class="pt-16">
      <div class="mb-10">
        <div class="flex justify-center">
          <img src="/img/img_profil.jpg" alt="" />
        </div>
        <div class="flex justify-center mt-2">
          <RouterLink to="/Parametres"><settings></settings></RouterLink>
          <p class="font-baloo font-semibold text-xl text-center px-5">
            Laura_mg0t
          </p>
          <RouterLink to="/ProfilEdit"><edit></edit></RouterLink>
        </div>
      </div>
      <div class="grid grid-cols-2 mb-12">
        <div class="flex justify-center">
          <imageD
            v-on:click="
              {
                imageHidden = !imageHidden;
                favoriHidden = !favoriHidden;
              }
            "
            class="cursor-pointer"
          ></imageD>
        </div>
        <div class="flex justify-center">
          <heartB
            v-on:click="
              {
                favoriHidden = !favoriHidden;
                imageHidden = !imageHidden;
              }
            "
            class="cursor-pointer"
          ></heartB>
        </div>
      </div>
      <div v-show="!imageHidden">
        <div
          class="
            flex flex-col
            md:grid md:grid-cols-2
            xl:grid-cols-3
            place-items-center
          "
        >
          <img src="/img/monster.jpg" alt="" />
          <img src="/img/monster_dessin.jpg" alt="" />
          <img src="/img/dessin_dragon.jpg" alt="" />
        </div>
      </div>
      <div v-show="!favoriHidden">
        <div
          class="
            flex flex-col
            md:grid md:grid-cols-2
            xl:grid-cols-3
            place-items-center
          "
        >
          <img src="/img/dessin_enfant.jpg" alt="" />
          <img src="/img/monster_dessin.jpg" alt="" />
          <img src="/img/dessin_dragon.jpg" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import settings from "../components/icons/settings.vue";
import edit from "../components/icons/edit.vue";
import imageD from "../components/icons/imageD.vue";
import heartB from "../components/icons/heartB.vue";

export default {
  components: {
    settings,
    edit,
    imageD,
    heartB,
  },
  data() {
    return {
      imageHidden: true,
      favoriHidden: false,
    };
  },
};
</script>


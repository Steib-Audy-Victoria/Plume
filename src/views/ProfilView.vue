<template>
  <div class="pt-16">
    <div class="mb-10">
      <div class="flex justify-center">
        <img src="public/img/img_profil.jpg" alt="" />
      </div>
      <div class="flex justify-center mt-2">
        <RouterLink to="/Parametres"><settings></settings></RouterLink>
        <p class="font-baloo font-semibold text-xl text-center px-5">
          Laura_mg0t
        </p>
        <RouterLink to="/ProfilEdit"><edit></edit></RouterLink>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div class="flex justify-center">
        <imageD></imageD>
      </div>
      <div class="flex justify-center">
        <heartB></heartB>
      </div>
    </div>
  </div>
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
};
</script>


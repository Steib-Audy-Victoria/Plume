<template>
  <div class="py-16">
    <div class="font-baloo pl-12">
      <h2 class="text-xl py-10">SE DECONNECTER</h2>
      <div class="text-base">
        <RouterLink to="/Notification"
          ><p class="py-4">NOTIFICATIONS</p></RouterLink
        >
        <RouterLink to="/Securite"><p class="py-4">SECURITE</p></RouterLink>
        <RouterLink to="/Aide"><p class="py-4">AIDE</p></RouterLink>
        <RouterLink to="/apropos"><p class="py-4">A PROPOS</p></RouterLink>
      </div>
      <div class="flex justify-center items-center">
        <BtnArtisteClient></BtnArtisteClient>
      </div>
    </div>
  </div>
</template>

<script>
import BtnArtisteClient from "../components/BtnArtisteClient.vue";

export default {
  components: { BtnArtisteClient },
};
</script>

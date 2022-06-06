<template>
  <div class="w-10/12 flex place-items-center flex-col">
    <div class="flex justify-between bg-white rounded-lg">
      <img src="/img/monster_dessin.jpg" alt="" />
      <p class="font-baloo text-left items-center flex">35 €</p>
      <p class="font-baloo text-right">22/03/2021</p>
    </div>
    <div
      class="bg-gradient-to-b to-Orange from-Rouge w-10/12 rounded-lg p-0.5 m-4"
    >
      <div class="bg-white rounded-lg p-0.5">
        <div class="flex justify-between">
          <img src="/img/img_profil.jpg" alt="" />
          <div>
            <p class="font-baloo text-lg font-semibold text-center">Alex H.</p>
            <div class="flex">
              <div class="flex items-center px-1">
                <eye></eye>
              </div>
              <p class="font-baloo text-base">
                Vu la dernière fois : il y a 2 heures
              </p>
            </div>
          </div>
          <div class="flex place-self-center">
            <points></points>
          </div>
        </div>
        <hr class="border w-full" />
        <div>
          <p class="font-baloo text-base text-center">Il y a 1 jour</p>
        </div>
        <div>
          <div class="bg-Orange mx-5 my-2 w-max p-1 rounded-lg">
            <p class="font-baloo text-lg text-white">bla bla bla land</p>
          </div>
          <div class="bg-Orange mx-5 my-2 w-max p-1 rounded-lg">
            <p class="font-baloo text-lg text-white">
              bla bla bla na na na na land
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eye from "../components/icons/eye.vue";
import points from "../components/icons/points.vue";

export default {
  components: { eye, points },
};
</script>


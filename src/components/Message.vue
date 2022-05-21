<template>
  <div class="w-10/12 flex place-items-center flex-col">
    <div class="flex justify-between bg-white rounded-lg">
      <img src="public/img/monster_dessin.jpg" alt="" />
      <p class="font-baloo text-left items-center flex">35 €</p>
      <p class="font-baloo text-right">22/03/2021</p>
    </div>
    <div
      class="bg-gradient-to-b to-Orange from-Rouge w-10/12 rounded-lg p-0.5 m-4"
    >
      <div class="bg-white rounded-lg p-0.5">
        <div class="flex justify-between">
          <img src="public/img/img_profil.jpg" alt="" />
          <div>
            <p class="font-baloo text-lg font-semibold">Alex H.</p>
            <div class="flex">
              icon
              <p class="font-baloo text-base">
                Vu la dernière fois : il y a 2 heures
              </p>
            </div>
          </div>
          icon
        </div>
        <hr class="border w-full" />
        <div>
          <p class="font-baloo text-base text-center">Il y a 1 jour</p>
        </div>
        <convMessage
          Msg="Ce serait possible pour la semaine prochaine ?"
        ></convMessage>
      </div>
    </div>
  </div>
</template>

<script>
import convMessage from "./convMessage.vue";

export default {
  components: { convMessage },
};
</script>
<template>
  <main>
    <div class="pt-16 bg-[url('/img/Fond.webp')] bg-cover">
      <h1 class="font-praise text-titre text-white text-center">Plume</h1>
      <div class="flex flex-col place-items-center my-10">
        <BoutonConnexion
          MsgBtn="Connexion avec Google"
          image="/img/Google.png"
        ></BoutonConnexion>
        <BoutonConnexion
          MsgBtn="Connexion avec Apple"
          image="/img/Apple.png"
        ></BoutonConnexion>
        <BoutonConnexion
          MsgBtn="Connexion avec Facebook"
          image="/img/Facebook.png"
        ></BoutonConnexion>
      </div>
      <div class="flex justify-center items-center">
        <hr class="my-1 pb-2 border-3 border-white w-1/4" />
        <p class="text-white font-baloo text-xl px-2">OU</p>
        <hr class="my-1 pb-2 border-3 border-white w-1/4" />
      </div>
      <div class="grid grid-cols-3 mt-2">
        <div class="col-start-2">
          <div class="flex flex-col">
            <p class="text-white font-baloo text-lg px-2">NOM</p>
            <div class="bg-gradient-to-r to-Orange from-Rouge rounded-lg p-0.5">
              <input
                class="w-full rounded-lg placeholder:pl-2"
                type="text"
                placeholder="Insérez du texte"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-white font-baloo text-lg px-2">PRÉNOM</p>
            <div class="bg-gradient-to-r to-Orange from-Rouge rounded-lg p-0.5">
              <input
                class="w-full rounded-lg placeholder:pl-2"
                type="text"
                placeholder="Insérez du texte"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-white font-baloo text-lg px-2">EMAIL</p>
            <div class="bg-gradient-to-r to-Orange from-Rouge rounded-lg p-0.5">
              <input
                class="w-full rounded-lg placeholder:pl-2"
                type="text"
                placeholder="Insérez du texte"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-white font-baloo text-lg px-2">PSEUDO</p>
            <div class="bg-gradient-to-r to-Orange from-Rouge rounded-lg p-0.5">
              <input
                class="w-full rounded-lg placeholder:pl-2"
                type="text"
                placeholder="Insérez du texte"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-white font-baloo text-lg px-2">MOT DE PASSE</p>
            <div class="bg-gradient-to-r to-Orange from-Rouge rounded-lg p-0.5">
              <input
                class="w-full rounded-lg placeholder:pl-2"
                type="text"
                placeholder="Insérez du texte"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="py-5">
        <div class="flex justify-center items-center">
          <BtnArtisteClient></BtnArtisteClient>
        </div>
        <div class="flex justify-center">
          <BtnConIns MsgBtn="S'inscrire"></BtnConIns>
        </div>
        <div class="flex justify-center items-center m-2">
          <hr class="my-1 pb-2 border-3 border-white w-1/4" />
          <p class="text-white font-baloo text-xl px-2">OU</p>
          <hr class="my-1 pb-2 border-3 border-white w-1/4" />
        </div>
        <div class="flex justify-center">
          <RouterLink to="/Connexion"
            ><BtnConIns MsgBtn="Se connecter"></BtnConIns
          ></RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script >
import BoutonConnexion from "../components/BoutonConnexion.vue";
import BtnConIns from "../components/BtnConIns.vue";
import BtnArtisteClient from "../components/BtnArtisteClient.vue";

export default {
  name: "App",
  components: {
    BoutonConnexion,
    BtnConIns,
    BtnArtisteClient,
  },
};
</script>
<template>
  <div class="flex items-center justify-center pt-16 mb-5">
    <PlumeB></PlumeB>
    <h2 class="text-3xl font-baloo font-bold pl-5">Mentions Légales</h2>
  </div>
  <div>
    <h3 class="font-baloo font-semibold text-xl pl-6 my-8">
      Identité & Coordonnées :
    </h3>
    <div class="pl-10">
      <p class="text-base font-baloo">
        Département métiers du multimédia et de l’internet de Montbéliard
      </p>
      <p class="text-base font-baloo">Établissement Public</p>
      <p class="text-base font-baloo">4, place Tharradin 25200 Montbéliard</p>
      <p class="text-base font-baloo">Tél. +33 (0)3 81 99 47 34</p>
      <p class="text-base font-baloo">
        Mail DUT MMI : dut-mmi-montbeliard@univ-fcomte.fr
      </p>
      <p class="text-base font-baloo">
        Site du MMI : http://mmimontbeliard.com
      </p>
    </div>
  </div>
  <div>
    <h3 class="font-baloo font-semibold text-xl pl-6 my-8">
      Les mentions relatives à la propriété intellectuelle :
    </h3>
    <div class="pl-10">
      <div class="py-3">
        <p class="text-base font-baloo">Lien pour le mockup :</p>
        <p class="text-base font-baloo">
          https://fr.freepik.com/psd-gratuit/maquette-telephones-3d-minimaux-frontaux-levitation_13195209.html
        </p>
      </div>
      <div class="py-3">
        <p class="text-base font-baloo">Lien du Phénix utiliser :</p>
        <p class="text-base font-baloo">
          https://fr.freepik.com/vecteurs-libre/personnage-dessin-anime-oiseau-feu-phoenix-fenix_8308764.html
        </p>
      </div>
      <div class="py-3">
        <p class="text-base font-baloo">
          Lien pour l’illustration des personnes qui peignent :
        </p>
        <p class="text-base font-baloo">
          https://fr.freepik.com/vecteurs-libre/creer-illustration-concept_5357789.html
        </p>
      </div>
    </div>
  </div>
  <div class="mb-8">
    <h3 class="font-baloo font-semibold text-xl pl-6 my-8">
      Les mentions relatives à l’hébergement du site :
    </h3>
    <div class="pl-10">
      <div class="py-4">
        <p class="text-base font-baloo">Netlify</p>
        <p class="text-base font-baloo">
          2325 3rd Street, Suite 296, San Francisco, California, 94107, USA
        </p>
        <p class="text-base font-baloo">Site : https://www.netlify.com</p>
        <p class="text-base font-baloo">
          Les contacter : https://www.netlify.com/support/
        </p>
        <p class="text-base font-baloo">Tél. (415) 691-1573</p>
      </div>
      <div class="py-4">
        <p class="text-base font-baloo">Infomaniak</p>
        <p class="text-base font-baloo">
          Rue Eugène, Marziano 25, 1227 Genève, Suisse
        </p>
        <p class="text-base font-baloo">Site : https://www.infomaniak.com/fr</p>
        <p class="text-base font-baloo">
          Les contacter : https://support.infomaniak.com
        </p>
        <p class="text-base font-baloo">Tél. +41 22 820 35 55</p>
      </div>
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
<template>
  <main>
    <div class="bg-gradient-to-t to-Orange from-Rouge pt-16">
      <div class="flex flex-col text-center">
        <p class="text-white font-baloo text-lg">Procéder au paiement</p>
        <p class="text-white font-baloo text-lg">
          Montant de la transaction : 30 EUR
        </p>
      </div>
      <div class="flex flex-col place-items-center my-4">
        <img src="/img/Paypal.png" alt="" />
        <p class="text-white font-baloo text-lg my-2">OU</p>
        <img src="/img/AppleP.png" alt="" />
        <p class="text-white font-baloo text-lg my-2">OU</p>
        <img src="/img/CB.png" alt="" />
      </div>
      <div class="grid grid-cols-3 mt-2">
        <div class="col-start-2">
          <div class="my-4">
            <div class="flex flex-col">
              <p class="text-white font-baloo text-lg px-2">
                Nom du titulaire de la carte
              </p>
              <input
                class="w-full rounded-lg placeholder:pl-2"
                type="text"
                placeholder="Nom"
              />
            </div>
            <div class="flex flex-col">
              <p class="text-white font-baloo text-lg px-2">Numéro de carte</p>
              <input
                class="w-full rounded-lg placeholder:pl-2"
                type="text"
                placeholder="Numéro"
              />
            </div>
            <div class="flex flex-col">
              <p class="text-white font-baloo text-lg px-2">
                Date d’expiration
              </p>
              <input
                class="w-full rounded-lg placeholder:pl-2"
                type="text"
                placeholder="23/2026"
              />
            </div>
            <div class="flex flex-col">
              <p class="text-white font-baloo text-lg px-2">Cryptogramme</p>
              <input
                class="w-full rounded-lg placeholder:pl-2"
                type="text"
                placeholder="244"
              />
            </div>
          </div>
          <div class="flex justify-center m-3">
            <button
              class="
                rounded-lg
                bg-Orange
                text-white
                w-max
                p-2
                px-5
                font-baloo font-semibold
                text-xl text-center
              "
              type="submit"
            >
              Payer
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


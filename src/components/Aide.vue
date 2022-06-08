<template>
  <div class="flex justify-center p-32">
    <div class="bg-black w-2/3 h-full p-10">
      <div class="flex flex-col place-items-center">
        <div class="flex items-center gap-8 lg:gap-72">
          <h2 class="text-xl font-semibold text-center text-white py-2">
            Aide
          </h2>
          <RouterLink to="/parametres">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </RouterLink>
        </div>

        <hr class="my-1 pb-2 border-3 border-white w-2/3" />
      </div>
      <div class="text-sm font-semibold text-left text-white pl-20">
        <p class="py-1">RAPORTER UN PROBLEME</p>
        <p class="py-1">CENTRE D’AIDE</p>
      </div>
    </div>
  </div>
</template>
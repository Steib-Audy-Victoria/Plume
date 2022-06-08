<template>
  <div class="flex justify-center">
    <h1
      class="
        font-praise
        text-titre text-transparent
        p-2
        pt-24
        lg:pt-10
        xl:pt-3
        bg-gradient-to-l bg-clip-text
        to-Rouge
        from-Orange
      "
    >
      Plume
    </h1>
  </div>
  <div class="grid place-items-center mb-6">
    <img src="/img/phoenix.png" />
    <h2
      class="
        font-baloo
        bg-gradient-to-l bg-clip-text
        to-Rouge
        from-Orange
        text-transparent text-5xl
        my-4
      "
    >
      Erreur 404
    </h2>
    <p class="font-baloo text-xl">Page non trouvée</p>
    <p class="font-baloo text-xl">Page not found</p>
  </div>
  <div class="flex justify-center my-20">
    <form
      action="https://duckduckgo.com/"
      method="GET"
      x-data="{ q:'', }"
      x-on:submit="q = q + ' site:mmimontbeliard.com'"
    >
      <label class="text-base" for="q">Texte à chercher :</label>
      <input
        class="border border-Custom-gray rounded-lg"
        type="text"
        id="q"
        name="q"
        x-model="q"
      />
      <button
        class="
          bg-gradient-to-r
          to-Orange
          from-Rouge
          text-white text-base
          px-2
          py-1
          rounded-lg
        "
        type="submit"
      >
        Rechercher
      </button>
    </form>
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center"
  >
    <RouterLink to="/">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Accueil
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/apropos">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          A propos
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/noussoutenir">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Nous soutenir
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/messages">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Messages
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/feed">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Feed
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/parametres">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Paramètres
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/mentionslegales">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Mentions légales
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/nouvellecommande">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Nouvelle Commande
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/profil">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Profil
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/profiledit">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Profil Edit
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/profilpaiement">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Profil Paiement
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/rechercheartiste">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Recherche Artiste
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/connexion">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Connexion
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/inscription">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Inscription
        </button>
      </div>
    </RouterLink>
    <RouterLink to="/Guide">
      <div
        class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6"
      >
        <button
          class="
            text-xl
            bg-white
            hover:bg-gradient-to-r
            hover:to-Orange
            hover:from-Rouge
            hover:text-white
            rounded-xl
            font-semibold font-baloo
            w-64
            h-12
          "
        >
          Guide
        </button>
      </div>
    </RouterLink>
  </div>
</template>
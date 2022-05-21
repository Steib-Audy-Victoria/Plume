<template>
  <div class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-3xl p-0.5">
    <button
      class="
        w-max
        p-1
        h-24px
        rounded-3xl
        font-baloo font-semibold
        px-3
        bg-white
      "
    >
      {{ CatBtn }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    CatBtn: String,
  },
};
</script>